"use client";

import { CiSun } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className={`theme-switch ${theme === "dark" ? "dark" : "light"}`}
      onClick={toggleTheme}
      aria-label={`Ativar tema ${theme === "dark" ? "claro" : "escuro"}`}
    >
      <span className="thumb">
        {theme === "dark" ? (
          <IoMoonOutline className="theme-icon" />
        ) : (
          <CiSun className="theme-icon" />
        )}
      </span>
    </button>
  );
}