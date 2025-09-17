"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun, Mail, Inbox } from "lucide-react"
import { useTheme } from "next-themes"
import {useTranslations} from 'next-intl'
import {usePathname} from 'next/navigation'

export function Header() {
  const t = useTranslations('Nav')
  const pathname = usePathname() || '/'
  const currentLocale = pathname.split('/')[1] || 'en'
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const navigation = [
    { key: 'Home', href: `/${currentLocale}` },
    { key: 'Blog', href: `/${currentLocale}/blog` },
    { key: 'About', href: `/${currentLocale}/about` },
    { key: 'Contact', href: `/${currentLocale}/contact` },
  ] as const

  return (
    <header className="sticky top-0 z-50 w-full bg-[#20266b] text-white">
      <div className="w-full max-w-[1400px] mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-purple-600 font-bold text-lg">t</span>
          </div>
          <span className="font-bold text-xl">tempmail</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <div key={item.key} className="relative group">
              <Link href={item.href} className="text-sm font-medium text-white/85 hover:text-white transition-colors">
                {t(item.key)}
              </Link>
            </div>
          ))}
        </nav>
 
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="text-white hover:bg-white/10">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white/90 hover:bg-white/10">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <div key={item.key}>
                    <Link href={item.href} className="text-lg font-medium text-gray-900" onClick={() => setIsOpen(false)}>
                      {t(item.key)}
                    </Link>
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
