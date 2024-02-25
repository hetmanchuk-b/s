"use client"

import Link from "next/link";
import Image from "next/image";
import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import {navLinks} from "@/const";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import {Button, buttonVariants} from "@/components/ui/button";

interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href='/' className="sidebar-logo">
          <Image src='/assets/images/logo-text.svg' alt='Logo' width={180} height={28} />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={cn(
                      'sidebar-nav_element group',
                      isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                    )}
                  >
                    <Link href={link.route} className="sidebar-link">
                      <Image
                        src={link.icon}
                        width={24}
                        height={24}
                        alt={'logo'}
                        className={cn(isActive && 'brightness-200')}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={cn(
                      'sidebar-nav_element group',
                      isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                    )}
                  >
                    <Link href={link.route} className="sidebar-link">
                      <Image
                        src={link.icon}
                        width={24}
                        height={24}
                        alt={'logo'}
                        className={cn(isActive && 'brightness-200')}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl='/' showName />
              </li>
            </ul>
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
      </div>
    </aside>
  )
}
