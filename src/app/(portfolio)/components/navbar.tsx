import MenuMobile from "@/components/menu-mobile"
import SelectLanguage from "@/components/select-language"
import {ModeToggle} from "@/components/ui/dark-mode-button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"

const Navbar = () => {

  return (
    <nav className="fixed z-20 w-full bg-white dark:bg-transparent dark:backdrop-blur-md"> 

      <div className="w-full max-w-7xl mx-auto flex justify-end items-center h-16 px-4 md:hidden">
        <MenuMobile/>
      </div>
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center h-16 px-4 max-md:hidden">
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home  
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About us 
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact  
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex gap-8">
          <SelectLanguage/>
          <ModeToggle/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
