"use client"
import Link from 'next/link'
import {usePathname} from 'next/navigation'

const languages = [
	{code: 'en', label: 'English'},
	{code: 'es', label: 'Español'}
]

function getPathWithLocale(pathname: string, target: string): string {
	const parts = pathname.split('/')
	if (parts[1] && languages.some(l => l.code === parts[1])) {
		parts[1] = target
		return parts.join('/') || '/'
	}
	return `/${target}${pathname}`
}

export default function LanguageSwitcher() {
	const pathname = usePathname() || '/'
	return (
		<div className="flex gap-2 text-sm">
			{languages.map(lang => (
				<Link key={lang.code} href={getPathWithLocale(pathname, lang.code)} className="underline">
					{lang.label}
				</Link>
			))}
		</div>
	)
}


