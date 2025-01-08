'use client'

import Link from 'next/link'
import { Navbar } from 'flowbite-react'
import { usePathname } from 'next/navigation'

export default function AppNavbar() {
  const pathname = usePathname()
  const menuItems = [
    {
      label: 'JavaScript',
      href: '/javascript'
    }
    // {
    //   label: 'TypeScript',
    //   href: '/typescript'
    // }
  ]

  return (
    <Navbar
      fluid
      rounded
      className="bg-gray-900 sticky w-full z-20 top-0 start-0 border-b border-gray-600"
    >
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          learn-js with fahad
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {menuItems.map((item, index) => (
          <Navbar.Link
            as={Link}
            href={item.href}
            key={index}
            active={pathname.includes(item.href)}
          >
            {item.label}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}
