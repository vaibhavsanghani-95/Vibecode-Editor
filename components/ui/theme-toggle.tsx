"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="cursor-pointer"
    >
      {resolvedTheme === "light" ? (
        <Moon className="h-5 w-5 text-black dark:text-white" />
      ) : (
        <Sun className="h-5 w-5 text-black dark:text-white" />
      )}
    </button>
  );
}
