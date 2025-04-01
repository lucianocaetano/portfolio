import {ModeToggle} from "@/components/ui/dark-mode-button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className="text-base font-semibold px-4 tracking-wider">
          {children}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

const Navbar = () => {
  return (
    <NavigationMenu className="fixed z-50 bg-[#26262680] backdrop-blur-md border-b border-[#262626cc]">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center h-16 px-4">
        <NavigationMenuList>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about-at">About at</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </NavigationMenuList>
        <NavigationMenuList>
          <ModeToggle/>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  )
}

export default Navbar
