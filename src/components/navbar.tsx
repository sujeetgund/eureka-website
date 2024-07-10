"use client";
import { cn } from "@/lib/utils";
import { BookOpen, MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { Dialog, DialogClose } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ModeToggle from "./mode-toggle";

import Logo from "../../public/eureka.jpg";

export function NavBar() {
  return (
    <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-[50] mt-[1.6rem]">
      <div className="flex justify-between md:w-[720px] w-[95%] border dark:border-zinc-900 dark:bg-black bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 rounded-xl p-2 shadow-lg">
        <Dialog>
          <div className="flex justify-between items-center w-full mx-2 min-[825px]:hidden">
            <Link href={"/"}>
              <h1 className="min-[825px]:hidden">Eureka Club</h1>
            </Link>
            <div className="flex items-center">
            <ModeToggle />
            <div>
              <SheetTrigger className="min-[825px]:hidden p-2 transition">
                <MenuIcon />
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="flex flex-col items-center space-y-3">
                    <Image
                      src={Logo}
                      placeholder="blur"
                      height={90}
                      width={90}
                      alt="Logo"
                    />
                    <h1>Eureka Club</h1>
                  </SheetTitle>
                  <SheetDescription>
                    Innovate, Collaborate, Achieve
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
                  <DialogClose asChild>
                    <Link href="/">
                      <Button variant="secondary" className="w-full">
                        Home
                      </Button>
                    </Link>
                  </DialogClose>
                  <DialogClose asChild>
                    <Link href="#events">
                      <Button variant="secondary" className="w-full">
                        Events
                      </Button>
                    </Link>
                  </DialogClose>
                  <DialogClose asChild>
                    <Link href="#projects">
                      <Button variant="secondary" className="w-full">
                        Projects
                      </Button>
                    </Link>
                  </DialogClose>
                  <DialogClose asChild>
                    <Link href="#blog">
                      <Button variant="secondary" className="w-full">
                        Blog
                      </Button>
                    </Link>
                  </DialogClose>
                  <DialogClose asChild>
                    <Link href="#team">
                      <Button variant="secondary" className="w-full">
                        Our Team
                      </Button>
                    </Link>
                  </DialogClose>
                </div>
              </SheetContent>
            </div>
            </div>
          </div>
        </Dialog>
        <NavigationMenu>
          <NavigationMenuList className="max-[825px]:hidden ">
            <Link href="/" className="pl-2">
              <h1 className="font-bold">Eureka Club</h1>
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2 max-[825px]:hidden">
          <Link href="#events">
            <Button variant="ghost">Events</Button>
          </Link>
          <Link href="#projects">
            <Button variant="ghost">Projects</Button>
          </Link>
          <Link href="#blog">
            <Button variant="ghost">Blog</Button>
          </Link>
          <Link href="#team">
            <Button variant="ghost">Our Team</Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
