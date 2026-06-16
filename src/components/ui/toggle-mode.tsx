import React, { useState } from "react";
import { Button } from "./button";
import { Moon, Sun } from "lucide-react";

const ToggleMode: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <Button
      onClick={toggleMode}
      variant={"secondary"}
    >
      {darkMode ? <Sun/> : <Moon/>}
    </Button>
  );
};

export default ToggleMode;
