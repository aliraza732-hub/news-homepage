import React, { useState } from "react";
import open from "../../assets/images/icon-menu.svg";
import close from "../../assets/images/icon-menu-close.svg";
import { cn } from "../../lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navItems = ["Home", "New", "Popular", "Trending", "Categories"];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50">
      {/* ✅ Mobile Hamburger Icon */}
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(true)} className="p-2">
          <img src={open} alt="menu" className="w-6 h-6" />
        </button>
      </div>

      {/* ✅ Desktop Nav */}
      <NavigationMenu className="hidden sm:flex">
        <NavigationMenuList className="space-x-6">
          {navItems.map((item) => (
            <NavigationMenuItem key={item}>
              <NavigationMenuLink
                style={{ color: "var(--dark-grayish-blue)" }}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[--soft-orange] text-[--very-dark-blue]"
                )}
                href={`/${item.toLowerCase()}`}
              >
                {item}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* ✅ Mobile Sidebar Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 z-40"
          ></div>

          {/* Sidebar */}
          <div className="fixed right-0 top-0 h-full w-[70%] max-w-xs bg-white shadow-lg p-6 z-50 transition-transform duration-300">
            {/* Close Button */}
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)}>
                <img src={close} alt="close" className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="mt-10 space-y-5">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-[--very-dark-blue] hover:text-[--soft-orange]"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
