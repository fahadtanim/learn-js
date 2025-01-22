'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Button from './Button'

type SidebarProps = {
  menuConfig: {
    id: string
    groupLabel: string
    groupLink: string
    icon: any
    isGroup: boolean
    groupItems: {
      id: string
      label: string
      link: string
    }[]
  }[]
  className?: string
  pathname?: string
}

export default function Sidebar({
  menuConfig,
  className,
  pathname
}: SidebarProps) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-54 z-40 w-80 h-full ${open ? 'left-0' : 'sm:-left-80 md:left-0 -left-80'} transition-all duration-300 ease-in-out ${className}`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          {
            <ul className="space-y-2 font-medium" key={1}>
              {menuConfig.map((item, index) => {
                if (item.isGroup) {
                  return (
                    <SidebarDropdown label={item.groupLabel} key={index}>
                      {item.groupItems.map((subItem, subIndex) => {
                        const active = pathname === subItem.link
                        return (
                          <SidebarItem
                            href={subItem.link}
                            key={subIndex}
                            className={`${active ? 'bg-gray-700' : ''}`}
                            onClick={() => setOpen(false)}
                          >
                            {`${subItem.id} - ${subItem.label}`}
                          </SidebarItem>
                        )
                      })}
                    </SidebarDropdown>
                  )
                } else {
                  const active = pathname === item.groupLink
                  return (
                    <>
                      <SidebarItem
                        href={item.groupLink}
                        key={index}
                        Icon={item.icon}
                        className={`${active ? 'bg-gray-700' : ''}`}
                        onClick={() => setOpen(false)}
                      >
                        {item.groupLabel}
                      </SidebarItem>
                    </>
                  )
                }
              })}
            </ul>
          }
        </div>
      </aside>
      <div
        className={`fixed top-[4.75rem] z-40 justify-start transition-all flex md:hidden sm:left-0 ${open ? 'left-80' : 'left-0'} ease-in-out`}
      >
        <Button
          mode="primary"
          className={`shadow-lg rounded-tr-full rounded-br-full -ml-2`}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FaChevronLeft className="text-gray-300 w-6 h-6" />
          ) : (
            <FaChevronRight className="text-gray-300 w-6 h-6" />
          )}
        </Button>
      </div>
      {open && (
        <div
          className="fixed h-screen w-screen bg-gray-900 opacity-50"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  )
}

type SidebarItemProps = {
  href: string
  className?: string
  Icon?: React.ReactNode
  children: React.ReactNode
  onClick?: () => void
}

function SidebarItem({
  href,
  className,
  Icon,
  children,
  onClick
}: SidebarItemProps) {
  return (
    <li>
      <Link
        href={href}
        className={`flex items-center p-2 pl-5 rounded-lg text-white hover:bg-gray-700 group ${className}`}
        onClick={onClick}
      >
        {Icon}
        <span className="ms-3">{children}</span>
      </Link>
    </li>
  )
}

type SidebarDropdownProps = {
  label: React.ReactNode
  children: React.ReactNode
}

function SidebarDropdown({ label, children }: SidebarDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <li>
      <button
        type="button"
        className="flex items-center p-2 pl-5 w-full justify-between rounded-lg text-white hover:bg-gray-700"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        {isOpen ? <FaChevronDown /> : <FaChevronLeft />}
      </button>
      <ul
        id="dropdown-example"
        className={`${isOpen ? 'block' : 'hidden'} py-2 space-y-2`}
      >
        {children}
      </ul>
    </li>
  )
}
