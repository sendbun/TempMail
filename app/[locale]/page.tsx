"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCw, Mail, Play } from "lucide-react"
import { EmailGenerator } from "@/components/email-generator"
import { InboxSection } from "@/components/inbox-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import GoogleAdsense from "@/plugin/adsense/google-adsense"
import Link from "next/link"
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

interface BlogPost {
  title: string
  description: string
  date: string
  link: string
  icon: string
}

export default function HomePage() {
  const t = useTranslations('Home')
  const tc = useTranslations('Common')
  const pathname = usePathname() || '/'
  const currentLocale = pathname.split('/')[1] || 'en'
  const [emailAccountKey, setEmailAccountKey] = useState(0)
  const [shouldRefreshInbox, setShouldRefreshInbox] = useState(false)
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [isLoadingBlogPosts, setIsLoadingBlogPosts] = useState(true)

  const handleEmailAccountChange = () => {
    setEmailAccountKey(prev => prev + 1)
    setShouldRefreshInbox(true)
  }

  const handleInboxRefreshed = () => {
    setShouldRefreshInbox(false)
  }

  useEffect(() => {
    if (!shouldRefreshInbox) {
      const timer = setTimeout(() => {
        setEmailAccountKey(0)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [shouldRefreshInbox])

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setIsLoadingBlogPosts(true)
        const response = await fetch('/api/blog-posts')
        const result = await response.json()
        if (result.success) {
          setBlogPosts(result.data)
        }
      } finally {
        setIsLoadingBlogPosts(false)
      }
    }
    fetchBlogPosts()
  }, [])

  const adsenseConfig = {
    client: process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID || "",
    leftSlot: process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_LEFT_SLOT || "left-sidebar-ad",
    rightSlot: process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_RIGHT_SLOT || "right-sidebar-ad",
    mobileSlot: process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_MOBILE_SLOT || "mobile-ad",
  };
  const isAdsenseConfigured = adsenseConfig.client && adsenseConfig.client.trim() !== "";

  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white py-20 px-4">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('Title')}</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">{t('Subtitle')}</p>

          </div>

          <div className="relative w-full">
            {isAdsenseConfigured && (
              <div className="hidden lg:block absolute left-0 top-0 w-48">
                <div className="sticky top-4">
                  <GoogleAdsense client={adsenseConfig.client} slot={adsenseConfig.leftSlot} type="auto" />
                </div>
              </div>
            )}

            <div className={`w-full ${isAdsenseConfigured ? 'lg:px-48' : ''}`}>
              <EmailGenerator key={emailAccountKey} onEmailAccountChange={handleEmailAccountChange} />
              <div className="max-w-2xl mx-auto">
                <InboxSection
                  key={emailAccountKey}
                  isHomePage={true}
                  onInboxRefreshed={handleInboxRefreshed}
                  shouldRefreshInbox={shouldRefreshInbox}
                />
              </div>
            </div>

            {isAdsenseConfigured && (
              <div className="hidden lg:block absolute right-0 top-0 w-48">
                <div className="sticky top-4">
                  <GoogleAdsense client={adsenseConfig.client} slot={adsenseConfig.rightSlot} type="auto" />
                </div>
              </div>
            )}
          </div>

          {isAdsenseConfigured && (
            <div className="lg:hidden mt-8">
              <div className="text-center">
                <GoogleAdsense client={adsenseConfig.client} slot={adsenseConfig.mobileSlot} type="auto" />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 dark:text-white">{t('WhatIsTempEmail')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{t('Sections.DisposableP1')}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="w-full max-w-[1400px] mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-3 dark:text-white">{t('AppsAndExtensions')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t('AppsComingSoon')}</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">{t('FAQ')}</h2>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left dark:text-white">{t(`FAQItems.Q${idx}` as any)}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 dark:text-gray-300">{t(`FAQItems.A${idx}` as any)}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href={`/${currentLocale}/contact`}>{t('ContactMoreQuestions')}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-50 dark:bg-purple-900/20">
        <div className="w-full max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">{t('LatestBlogPosts')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t('LatestDesc')}</p>
          </div>
          {isLoadingBlogPosts ? (
            <div className="text-center py-10">
              <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-purple-600" />
              <p className="text-gray-600 dark:text-gray-400">{t('LatestLoading')}</p>
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-600 dark:text-gray-400">{t('LatestEmpty')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg dark:text-white">
                      <a href={post.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {post.title}
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={post.link} target="_blank" rel="noopener noreferrer">Read more</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Disposable email addresses section */}
      <section className="py-20 px-4">
        <div className="w-full max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">{t('Sections.DisposableTitle')}</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p className="mb-6">{t('Sections.DisposableP1')}</p>
            <p>{t('Sections.DisposableP2')}</p>
          </div>
        </div>
      </section>

      {/* Other names for temporary email section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="w-full max-w-[1400px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">{t('Sections.OtherNamesTitle')}</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-2 text-lg dark:text-gray-200">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                <div>{t('Sections.OtherNames1')}</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                <div>{t('Sections.OtherNames2')}</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                <div>{t('Sections.OtherNames3')}</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                <div>{t('Sections.OtherNames4')}</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                <div>{t('Sections.OtherNames5')}</div>
              </li>
            </ul>
            <p className="mt-6 text-gray-600 dark:text-gray-300">{t('Sections.OtherNamesFoot')}</p>
          </div>
        </div>
      </section>

      {/* Why use a temporary email address section */}
      <section className="py-20 px-4">
        <div className="w-full max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">{t('Sections.WhyUseTitle')}</h2>
          <div className="max-w-4xl mx-auto">
            <ol className="space-y-4 text-lg dark:text-gray-200">
              <li className="flex items-start gap-4">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <div>{t('Sections.WhyUse1')}</div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <div>{t('Sections.WhyUse2')}</div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <div>{t('Sections.WhyUse3')}</div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">4</span>
                <div>{t('Sections.WhyUse4')}</div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">5</span>
                <div>{t('Sections.WhyUse5')}</div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* How to choose a temporary email provider section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="w-full max-w-[1400px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">{t('Sections.HowChooseTitle')}</h2>
          <div className="max-w-4xl mx-auto">
            <ol className="space-y-4 text-lg dark:text-gray-200">
              <li className="flex items-start gap-4">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <div>{t('Sections.HowChoose1')}</div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <div>{t('Sections.HowChoose2')}</div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <div>{t('Sections.HowChoose3')}</div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">4</span>
                <div>{t('Sections.HowChoose4')}</div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">5</span>
                <div>{t('Sections.HowChoose5')}</div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* How to use a temporary email section */}
      <section className="py-20 px-4">
        <div className="w-full max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">{t('Sections.HowUseTitle')}</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{t('Sections.HowUseIntro')}</p>

            <h3 className="text-xl font-semibold mb-4 dark:text-white">{t('Sections.PracticalExamplesTitle')}</h3>
            <ul className="space-y-3 text-lg dark:text-gray-200">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                <span>{t('Sections.Example1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                <span>{t('Sections.Example2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                <span>{t('Sections.Example3')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                <span>{t('Sections.Example4')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                <span>{t('Sections.Example5')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                <span>{t('Sections.Example6')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                <span>{t('Sections.Example7')}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusion section */}
      <section className="py-20 bg-purple-50 dark:bg-purple-900/20">
        <div className="w-full max-w-[1400px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">{t('Sections.ConclusionTitle')}</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            <p>{t('Sections.ConclusionBody')}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
