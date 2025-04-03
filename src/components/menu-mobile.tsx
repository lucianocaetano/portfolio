'use client'

import { useState, useEffect } from "react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignJustifyIcon } from "lucide-react";
import Link from "next/link";
import {ModeToggle} from "./ui/dark-mode-button";
import SelectLanguage from "./select-language";

const ResponsiveSheet = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" onClick={() => setOpen(true)}>
          <AlignJustifyIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <ul>
            <li className="py-4 hover:bg-gray-100 hover:dark:bg-zinc-900 cursor-pointer ps-4 my-2">
              <Link href="/" legacyBehavior passHref>
                Home
              </Link>
            </li>
            <li className="py-4 hover:bg-gray-100 hover:dark:bg-zinc-900 cursor-pointer ps-4 my-2">
              <Link href="/about-us" legacyBehavior passHref>
                About us 
              </Link>
            </li>
            <li className="py-4 hover:bg-gray-100 hover:dark:bg-zinc-900 cursor-pointer ps-4 my-2">
              <Link href="/contact" legacyBehavior passHref>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <SheetFooter>
          <div className="flex justify-start items-center gap-6">
            <ModeToggle />
            <SelectLanguage />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ResponsiveSheet;

