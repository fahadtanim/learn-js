'use client'

import { JsMenu } from '@/config/menuConfig'
import { CustomFlowbiteTheme, Sidebar } from 'flowbite-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Button } from '../atoms'

const SidebarTheme: CustomFlowbiteTheme['sidebar'] = {
  root: {
    base: 'bg-gray-800',
    collapsed: {
      on: 'w-80',
      off: 'w-80'
    },
    inner: 'overflow-y-auto overflow-x-hiddenpx-3 py-4 bg-gray-800 w-80'
  },
  collapse: {
    button:
      'group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-200 transition duration-75 hover:bg-gray-700 text-white',
    icon: {
      base: 'h-6 w-6 text-gray-500 transition duration-75',
      open: {
        on: 'text-gray-900',
        off: ''
      }
    },
    label: {
      base: 'ml-3 flex-1 whitespace-nowrap text-left text-gray-200',
      icon: {
        base: 'h-6 w-6 transition delay-0 ease-in-out',
        open: {
          on: 'rotate-180',
          off: ''
        }
      }
    },
    list: 'space-y-2 py-2'
  },
  cta: {
    base: 'mt-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-700',
    color: {
      blue: 'bg-cyan-50 dark:bg-cyan-900',
      dark: 'bg-dark-50 dark:bg-dark-900',
      failure: 'bg-red-50 dark:bg-red-900',
      gray: 'bg-alternative-50 dark:bg-alternative-900',
      green: 'bg-green-50 dark:bg-green-900',
      light: 'bg-light-50 dark:bg-light-900',
      red: 'bg-red-50 dark:bg-red-900',
      purple: 'bg-purple-50 dark:bg-purple-900',
      success: 'bg-green-50 dark:bg-green-900',
      yellow: 'bg-yellow-50 dark:bg-yellow-900',
      warning: 'bg-yellow-50 dark:bg-yellow-900'
    }
  },
  item: {
    base: 'flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-200 hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700',
    active: 'bg-gray-100 dark:bg-gray-700',
    collapsed: {
      insideCollapse: 'group w-full pl-8 transition duration-75',
      noIcon: 'font-bold'
    },
    content: {
      base: 'flex-1 whitespace-nowrap px-3'
    },
    icon: {
      base: 'h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
      active: 'text-gray-700 dark:text-gray-100'
    },
    label: '',
    listItem: ''
  },
  items: {
    base: ''
  },
  itemGroup: {
    base: 'mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700'
  },
  logo: {
    base: 'mb-5 flex items-center pl-2.5',
    collapsed: {
      on: 'hidden',
      off: 'self-center whitespace-nowrap text-xl font-semibold dark:text-white'
    },
    img: 'mr-3 h-6 sm:h-7'
  }
}

export default function AppSidebar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const menuConfig = pathname.includes('/javascript') ? JsMenu : []

  return (
    <>
      <div
        className={`relative !z-10 ${open ? 'flex-shrink-0 w-[320px]' : 'sm:w-0 w-0 md:w-[320px]'} min-h-[calc(100vh-54px)] overflow-x-hidden bg-gray-800 transition-all duration-300 ease-in-out`}
      >
        <Sidebar
          aria-label="Sidebar with multi-level dropdown example"
          theme={SidebarTheme}
        >
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              {menuConfig.map((item, index) => {
                if (item.isGroup) {
                  return (
                    <Sidebar.Collapse
                      key={index}
                      label={`${item.id} - ${item.groupLabel}`}
                      open={true}
                    >
                      {item.groupItems.map((subItem, subIndex) => {
                        const active = pathname === subItem.link
                        return (
                          <Sidebar.Item
                            href={subItem.link}
                            key={subIndex}
                            as={Link}
                            className={`${active ? 'bg-gray-700' : ''}`}
                            onClick={() => setOpen(false)}
                          >
                            {`${subItem.id} - ${subItem.label}`}
                          </Sidebar.Item>
                        )
                      })}
                    </Sidebar.Collapse>
                  )
                } else {
                  const active = pathname === item.groupLink
                  return (
                    <Sidebar.Item
                      href={item.groupLink}
                      key={index}
                      icon={item.icon}
                      as={Link}
                      onClick={() => setOpen(false)}
                      className={`${active ? 'bg-gray-700' : ''}`}
                    >
                      {item.groupLabel}
                    </Sidebar.Item>
                  )
                }
              })}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="md:hidden sm:block relative ml-[-1rem] p-0 mt-3">
        <Button
          mode="primary"
          className={`shadow-lg rounded-tr-full rounded-br-full`}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FaChevronLeft className="text-gray-300 w-6 h-6" />
          ) : (
            <FaChevronRight className="text-gray-300 w-6 h-6" />
          )}
        </Button>
      </div>
    </>
  )
}
