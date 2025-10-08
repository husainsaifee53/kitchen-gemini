import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DietToggle } from "@/components/DietToggle";
import { IngredientInput } from "@/components/IngredientInput";
import { RecipeDisplay } from "@/components/RecipeDisplay";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export default function RecipeGenerator() {
  const navigate = useNavigate();
  const [dietMode, setDietMode] = useState<"veg" | "non-veg">("veg");
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessingImage, setIsProcessingImage] = useState(false);

  const handleImageUpload = async (file: File) => {
    setIsProcessingImage(true);
    
    try {
      // Convert image to base64
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = async () => {
        const base64Image = reader.result as string;
        
        // Call edge function to identify ingredients from image
        const { data, error } = await supabase.functions.invoke("identify-ingredients", {
          body: { image: base64Image },
        });

        if (error) throw error;

        if (data?.ingredients) {
          setIngredients(data.ingredients);
          toast.success("Ingredients identified successfully!");
        }
      };
    } catch (error: any) {
      console.error("Error processing image:", error);
      toast.error("Failed to process image. Please try again.");
    } finally {
      setIsProcessingImage(false);
    }
  };

  const handleGenerateRecipes = async () => {
    if (!ingredients.trim()) {
      toast.error("Please enter some ingredients first!");
      return;
    }

    setIsLoading(true);
    setRecipes("");

    try {
      const { data, error } = await supabase.functions.invoke("generate-recipes", {
        body: {
          ingredients: ingredients.trim(),
          dietMode,
        },
      });

      if (error) throw error;

      if (data?.recipes) {
        setRecipes(data.recipes);
      }
    } catch (error: any) {
      console.error("Error generating recipes:", error);
      toast.error("Failed to generate recipes. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <h1 className="text-xl font-bold">Fridge Feast AI</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">
              Let's Create Your Perfect Meal
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose your dietary preference and add your ingredients
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <DietToggle dietMode={dietMode} onToggle={setDietMode} />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <IngredientInput
                ingredients={ingredients}
                onIngredientsChange={setIngredients}
                onImageUpload={handleImageUpload}
                isProcessingImage={isProcessingImage}
              />

              <Button
                onClick={handleGenerateRecipes}
                disabled={isLoading || !ingredients.trim()}
                className="w-full gradient-hero text-lg py-6 shadow-hover hover:shadow-soft transition-smooth"
                size="lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                {isLoading ? "Finding Recipes..." : "Find Recipes!"}
              </Button>
            </div>

            <div>
              <RecipeDisplay recipes={recipes} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
