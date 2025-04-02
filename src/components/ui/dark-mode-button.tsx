"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import {Label} from "./label"
import {Switch} from "./switch"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
     <div className="flex items-center space-x-2">
      <Label htmlFor="airplane-mode"><Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
          <Switch id="airplane-mode" onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")} className="cursor-pointer"/>
      </Label>
    </div>
    
  )
}
