import Navigation from "../Navigation";
import { useState } from "react";

export default function NavigationExample() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <Navigation
      theme={theme}
      onThemeToggle={() => setTheme(theme === "light" ? "dark" : "light")}
    />
  );
}
