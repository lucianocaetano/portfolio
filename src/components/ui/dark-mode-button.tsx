"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Label } from "./label"
import { Switch } from "./switch"

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Evita el renderizado hasta que el componente esté montado
  if (!mounted) return null

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="theme-toggle" className="relative flex items-center cursor-pointer">
        {/* Sol y Luna con animación */}
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

        <span className="sr-only">Toggle theme</span>
      </Label>

      {/* Switch separado del Label para mejor accesibilidad */}
      <Switch
        id="theme-toggle"
        checked={resolvedTheme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        className="cursor-pointer"
      />
    </div>
  )
}

