"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";
import navLinks from "@/lib/lib";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="pt-5 pb-5 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <Image src={"/logo.png"} alt="Logo" height={100} width={100} />
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {navLinks.map((link, index) => (
            <div key={index}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex gap-5">
          <Link href="/cart">
            <Button
              className="flex items-center justify-center gap-2"
              variant="secondary"
            >
              <CiShoppingCart className=" w-6 h-6" />
              <span>Cart</span>
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="flex items-center justify-center gap-2">
              Sign Up
            </Button>
          </Link>
          <Link href="/sign-in">
            <Button className="flex items-center justify-center gap-2">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
