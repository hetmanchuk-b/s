"use client"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import Image from "next/image";
import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import {navLinks} from "@/const";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import {buttonVariants} from "@/components/ui/button";

export const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href={'/'} className="flex items-center gap-2 md:py-2">
        <Image src='/assets/images/logo-text.svg' alt='logo' width={180} height={28} />
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl='/' />

          <Sheet>
            <SheetTrigger>
              <Image src='/assets/icons/menu.svg' alt='menu' width={32} height={32} className="cursor-pointer" />
              <span className="sr-only">Open Menu</span>
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image src='/assets/images/logo-text.svg' alt='logo' width={152} height={23} />
                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;
                    return (
                      <li
                        key={link.route}
                        className={cn(
                          'p-18 flex whitespace-nowrap text-dark-700',
                          isActive && 'gradient-text'
                        )}
                      >
                        <Link href={link.route} className="sidebar-link cursor-pointer">
                          <Image
                            src={link.icon}
                            width={24}
                            height={24}
                            alt={'logo'}
                          />
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Link
            href={'/sign-in'}
            className={cn(
              buttonVariants({variant: 'default'}),
              'button bg-purple-gradient bg-cover'
            )}
          >
            Login
          </Link>
        </SignedOut>
      </nav>
    </header>
  )
}
