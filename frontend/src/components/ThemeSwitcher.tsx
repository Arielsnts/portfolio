"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button
      className={`theme-switch ${theme === "dark" ? "dark" : "light"}`}
      onClick={toggleTheme}
    >
      <div className="thumb" />
    </button>
  )
}
