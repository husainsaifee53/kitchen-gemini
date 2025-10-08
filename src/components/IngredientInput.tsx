import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, Sparkles, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface IngredientInputProps {
  ingredients: string;
  onIngredientsChange: (ingredients: string) => void;
  onImageUpload: (file: File) => void;
  isProcessingImage: boolean;
}

export const IngredientInput = ({
  ingredients,
  onIngredientsChange,
  onImageUpload,
  isProcessingImage,
}: IngredientInputProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      onImageUpload(file);
    } else {
      toast.error("Please upload an image file");
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label htmlFor="ingredients" className="text-base font-semibold">
          What's in your kitchen?
        </Label>
        <Textarea
          id="ingredients"
          placeholder="e.g., tomatoes, pasta, garlic, olive oil, basil..."
          value={ingredients}
          onChange={(e) => onIngredientsChange(e.target.value)}
          className="min-h-[120px] resize-none border-2 focus:border-primary transition-smooth"
        />
        <p className="text-sm text-muted-foreground">
          Enter your ingredients separated by commas
        </p>
      </div>

      <div className="relative">
        <div className="flex items-center gap-4 my-4">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-sm text-muted-foreground font-medium">OR</span>
          <div className="flex-1 h-px bg-border"></div>
        </div>
      </div>

      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-smooth cursor-pointer ${
          isDragging
            ? "border-primary bg-accent/50"
            : "border-border hover:border-primary/50 hover:bg-accent/30"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="image-upload"
          className="hidden"
          accept="image/*"
          onChange={handleFileInput}
          disabled={isProcessingImage}
        />
        <label htmlFor="image-upload" className="cursor-pointer">
          {isProcessingImage ? (
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="w-12 h-12 text-primary animate-spin" />
              <p className="text-base font-medium">Scanning your ingredients...</p>
              <p className="text-sm text-muted-foreground">This may take a moment</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                <Upload className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-base font-medium mb-1">
                  Upload a photo of your ingredients
                </p>
                <p className="text-sm text-muted-foreground">
                  AI will scan and identify them for you
                </p>
              </div>
              <Button variant="outline" className="mt-2" type="button">
                <Sparkles className="w-4 h-4 mr-2" />
                Choose Image
              </Button>
            </div>
          )}
        </label>
      </div>
    </div>
  );
};
