import { Button } from "@/components/ui/button";
import { Leaf, Drumstick } from "lucide-react";

interface DietToggleProps {
  dietMode: "veg" | "non-veg";
  onToggle: (mode: "veg" | "non-veg") => void;
}

export const DietToggle = ({ dietMode, onToggle }: DietToggleProps) => {
  return (
    <div className="flex gap-3 p-1.5 bg-accent rounded-xl shadow-soft">
      <Button
        variant={dietMode === "veg" ? "default" : "ghost"}
        className={`flex-1 gap-2 transition-smooth ${
          dietMode === "veg" 
            ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft" 
            : "text-muted-foreground hover:text-foreground"
        }`}
        onClick={() => onToggle("veg")}
      >
        <Leaf className="w-4 h-4" />
        Vegetarian
      </Button>
      <Button
        variant={dietMode === "non-veg" ? "default" : "ghost"}
        className={`flex-1 gap-2 transition-smooth ${
          dietMode === "non-veg"
            ? "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-soft"
            : "text-muted-foreground hover:text-foreground"
        }`}
        onClick={() => onToggle("non-veg")}
      >
        <Drumstick className="w-4 h-4" />
        Non-Vegetarian
      </Button>
    </div>
  );
};
