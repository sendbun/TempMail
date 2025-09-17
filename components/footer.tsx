"use client"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {usePathname, useRouter} from 'next/navigation'
import {locales} from '@/i18n'

export function Footer() {
  const pathname = usePathname() || '/'
  const router = useRouter()
  const currentLocale = pathname.split('/')[1] && locales.includes(pathname.split('/')[1] as any) ? pathname.split('/')[1] : 'en'

  const getPathWithLocale = (target: string) => {
    const parts = pathname.split('/')
    if (parts[1] && locales.includes(parts[1] as any)) {
      parts[1] = target
      return parts.join('/') || '/'
    }
    return `/${target}${pathname}`
  }

  const changeLanguage = (value: string) => {
    router.push(getPathWithLocale(value))
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="w-full max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and basic info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-gray-900 font-bold text-lg">t</span>
              </div>
              <span className="font-bold text-xl">tempmail</span>
            </Link>
            <p className="text-gray-400">© {new Date().getFullYear()} tempmail.org</p>
            
            <div className="space-y-2">
              <Select value={currentLocale} onValueChange={changeLanguage}>
                <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from(locales).map((code) => (
                    <SelectItem key={code} value={code}>
                      {code === 'en' ? 'English' : code === 'es' ? 'Español' : code}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/api" className="text-gray-400 hover:text-white transition-colors">
                  API
                </Link>
              </li>
              <li>
                <Link href="/chrome-mail" className="text-gray-400 hover:text-white transition-colors">
                  Chrome Mail
                </Link>
              </li>
              <li>
                <Link href="/email-forwarding" className="text-gray-400 hover:text-white transition-colors">
                  Email Forwarding
                </Link>
              </li>
              <li>
                <Link href="/upgrade" className="text-gray-400 hover:text-white transition-colors">
                  Upgrade to Pro
                </Link>
              </li>
              <li>
                <Link href="/premium" className="text-gray-400 hover:text-white transition-colors">
                  Premium Mail
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white transition-colors">
                  Help
                </Link>
              </li>
              <li>
                <Link href="/developers" className="text-gray-400 hover:text-white transition-colors">
                  Developers
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-400 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/github" className="text-gray-400 hover:text-white transition-colors">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
