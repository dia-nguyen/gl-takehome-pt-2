import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem } from "@nextui-org/react";
import Logo from "../Logo/Logo";
import { Link } from "@nextui-org/react";
import { useState } from "react";
import { NAV_LINKS } from "@/app/_utils/data";

/**
 * Navigation Bar
 * Displays mobile and desktop version
 * Renders from predefined list of links
 */
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      isBlurred={false}
      className="w-11/12 m-auto rounded-full bg-primary-4 font-display top-8 fixed"
      position="sticky">

      {/* Mobile Nav */}
      <NavbarContent className="md:hidden pr-3" justify="start">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavbarMenu className="w-11/12 mx-auto pt-12 bg-primary-4 max-h-[240px] rounded-b-[30px]">
          {NAV_LINKS.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full font-display text-xl text-black"
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>

      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      {/* Desktop Nav */}
      <NavbarContent className="hidden md:flex gap-4" justify="end">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        {NAV_LINKS.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              className={`w-full rounded-full text-xl text-gray-9 px-5 py-1 ${item.isActive ? "bg-gray-9 text-white" : ""}`}
              href="#"
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

    </Navbar>
  );
}
