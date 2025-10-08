import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, ChefHat } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface RecipeDisplayProps {
  recipes: string;
  isLoading: boolean;
}

export const RecipeDisplay = ({ recipes, isLoading }: RecipeDisplayProps) => {
  if (isLoading) {
    return (
      <Card className="shadow-soft border-2">
        <CardContent className="pt-12 pb-12">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="relative">
              <ChefHat className="w-16 h-16 text-primary animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">Chef Gemini is cooking up ideas...</p>
              <p className="text-sm text-muted-foreground">Creating delicious recipes just for you</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!recipes) {
    return (
      <Card className="shadow-soft border-2 border-dashed">
        <CardContent className="pt-12 pb-12">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <ChefHat className="w-12 h-12 text-muted-foreground/50" />
            <p className="text-muted-foreground">
              Your recipes will appear here once you find them!
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-hover border-2 border-primary/20">
      <CardHeader className="border-b bg-accent/30">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <ChefHat className="w-7 h-7 text-primary" />
          Your Recipe Ideas
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="prose prose-sm max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h2 className="text-2xl font-bold text-foreground mb-3 mt-6 first:mt-0 flex items-center gap-2">
                  <span className="w-2 h-8 bg-gradient-hero rounded-full"></span>
                  {children}
                </h2>
              ),
              h2: ({ children }) => (
                <h3 className="text-xl font-semibold text-foreground mb-2 mt-5 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  {children}
                </h3>
              ),
              h3: ({ children }) => (
                <h4 className="text-lg font-semibold text-foreground mb-2 mt-4">
                  {children}
                </h4>
              ),
              p: ({ children }) => (
                <p className="text-foreground/90 mb-3 leading-relaxed">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="space-y-2 mb-4 ml-4">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="space-y-2 mb-4 ml-4 list-decimal">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-foreground/90 leading-relaxed">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-foreground">{children}</strong>
              ),
            }}
          >
            {recipes}
          </ReactMarkdown>
        </div>
      </CardContent>
    </Card>
  );
};
