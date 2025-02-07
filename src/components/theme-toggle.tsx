import { useCallback } from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return (
    <Button
      className="group/toggle h-8 w-8 px-0"
      variant="ghost"
      onClick={toggleTheme}
    >
      <Sun className="hidden size-5 [html.dark_&]:block" />
      <Moon className="hidden size-5 [html.light_&]:block" />
    </Button>
  );
}
