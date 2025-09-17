import type React from "react"
import {NextIntlClientProvider} from 'next-intl'
import {messagesMap} from '../../messages'
import type {AppLocale} from '../../i18n'
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "sonner"
import GoogleAnalytics from "@/plugin/analytics/google-analytics"

const inter = Inter({ subsets: ["latin"] })

export default async function LocaleLayout({
	children,
	params
}: {
	children: React.ReactNode,
	params: Promise<{locale: string}>
}) {
	const {locale} = await params
	const safeLocale = (['en','es'].includes(locale) ? locale : 'en') as AppLocale
	const messages = messagesMap[safeLocale]
	return (
		<html lang={safeLocale} suppressHydrationWarning>
			<body className={inter.className}>
				<NextIntlClientProvider messages={messages} locale={safeLocale}>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
						<div className="min-h-screen bg-background">
							<Header />
							<main>{children}</main>
							<Footer />
						</div>
						<Toaster 
							position="top-right"
							richColors
							closeButton
							duration={4000}
						/>
					</ThemeProvider>
					{process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
						<GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
					)}
				</NextIntlClientProvider>
			</body>
		</html>
	)
}


