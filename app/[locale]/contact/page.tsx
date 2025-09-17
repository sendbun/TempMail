"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin } from "lucide-react"
import {useTranslations} from 'next-intl'

export default function ContactPage() {
  const t = useTranslations('Contact')
  const contactInfo = [
    {
      icon: Mail,
      title: t('Email'),
      description: "hello@hyu.me",
      link: "mailto:hello@hyu.me"
    },
    {
      icon: MapPin,
      title: t('Location'),
      description: t('LocationDesc'),
      link: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-900 py-20">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">{t('Title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('HeaderDesc')}
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">{t('GetInTouch')}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {t('GetInTouchDesc')}
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-8 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <info.icon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl dark:text-white mb-2">{info.title}</h3>
                      <a 
                        href={info.link} 
                        className="text-purple-600 dark:text-purple-400 hover:underline text-lg font-medium"
                      >
                        {info.description}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-8 text-center">
              <h3 className="font-semibold text-xl mb-4 dark:text-white">{t('ResponseTime')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t('ResponseTimeDesc')}
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  <strong>{t('UrgentNote')}</strong> {t('UrgentNoteDesc')}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Email Button */}
          <div className="text-center">
            <Button size="lg" asChild className="bg-purple-600 hover:bg-purple-700">
              <a href="mailto:hello@hyu.me">
                <Mail className="h-5 w-5 mr-2" />
                {t('SendEmail')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
