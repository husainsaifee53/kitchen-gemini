import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Sparkles, Camera, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-kitchen.jpg";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(16, 185, 129, 0.7)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Recipe Generator</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Turn Your Fridge Into a
              <br />
              <span className="text-secondary">Feast</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95">
              Stop wasting food. Start creating amazing meals with what you already have.
            </p>
            <Button
              onClick={() => navigate("/generate")}
              size="lg"
              className="gradient-warm text-lg px-8 py-6 shadow-hover hover:scale-105 transition-smooth"
            >
              <ChefHat className="w-5 h-5 mr-2" />
              Start Cooking Now
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We've All Been There
              </h2>
              <div className="w-24 h-1 gradient-hero mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="shadow-soft border-2 hover:shadow-hover transition-smooth">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🥕</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">The Problem</h3>
                  <p className="text-muted-foreground">
                    You open your fridge and see ingredients, but can't figure out what to make for dinner.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-2 hover:shadow-hover transition-smooth">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💸</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">The Waste</h3>
                  <p className="text-muted-foreground">
                    Food goes bad, money gets wasted, and you end up ordering takeout again.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-2 hover:shadow-hover transition-smooth">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">The Solution</h3>
                  <p className="text-muted-foreground">
                    Fridge Feast AI creates delicious recipes using only what you have right now.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft border-2">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  How It Works
                </h2>
                <p className="text-muted-foreground text-lg">
                  Get personalized recipes in three simple steps
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      <Leaf className="w-5 h-5 text-primary" />
                      Choose Your Diet
                    </h3>
                    <p className="text-muted-foreground">
                      Select vegetarian or non-vegetarian to match your preferences
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      <Camera className="w-5 h-5 text-secondary" />
                      Add Your Ingredients
                    </h3>
                    <p className="text-muted-foreground">
                      Type them in or upload a photo - our AI will scan and identify them
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      <ChefHat className="w-5 h-5 text-primary" />
                      Get Amazing Recipes
                    </h3>
                    <p className="text-muted-foreground">
                      Receive creative, delicious recipes complete with cooking times and step-by-step instructions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Stop Wasting Food?
          </h2>
          <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
            Join thousands of people who are saving money, reducing waste, and discovering new favorite meals every day.
          </p>
          <Button
            onClick={() => navigate("/generate")}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6 shadow-hover hover:scale-105 transition-smooth"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Start Your Culinary Journey
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-card/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Fridge Feast AI. Reducing food waste, one recipe at a time.</p>
        </div>
      </footer>
    </div>
  );
}
