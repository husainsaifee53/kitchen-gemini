import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { ingredients, dietMode } = await req.json();
    
    if (!ingredients) {
      return new Response(
        JSON.stringify({ error: 'Ingredients are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Generating recipes for:', { ingredients, dietMode });

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // Build the system prompt with diet preference
    const dietInstruction = dietMode === 'veg' 
      ? 'All recipes MUST be completely vegetarian (no meat, fish, or poultry).'
      : 'Recipes can include meat, fish, poultry, or be vegetarian.';

    const systemPrompt = `You are "Chef Gemini," a creative and practical culinary assistant. Your goal is to help users create delicious meals with the ingredients they already have, reducing food waste. 

${dietInstruction}

You will be given a list of ingredients. Based *only* on those ingredients (and common pantry staples like oil, salt, pepper, and water), you must generate **2 distinct recipe ideas**. 

For each recipe, you must provide:
- A catchy **Recipe Name** (as H1 heading)
- An estimated **Cooking Time** (as H2 heading)
- A list of the **Ingredients Used** (as H3 heading with bullet points)
- Simple, **Step-by-Step Instructions** (as H3 heading with numbered list)

Format your entire response in clean Markdown. Make the recipes creative but practical.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Here are my available ingredients: ${ingredients}` }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Too many requests. Please try again in a moment.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI service quota exceeded. Please contact support.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const recipes = data.choices?.[0]?.message?.content;

    if (!recipes) {
      throw new Error('No recipes generated');
    }

    console.log('Successfully generated recipes');

    return new Response(
      JSON.stringify({ recipes }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in generate-recipes function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
