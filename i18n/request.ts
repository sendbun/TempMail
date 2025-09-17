import {getRequestConfig} from 'next-intl/server'
import {messagesMap} from '../messages'

export default getRequestConfig(async ({locale}) => {
	const selectedLocale = (locale as 'en'|'es')
	const messages = messagesMap[selectedLocale] ?? messagesMap.en
	return {locale: selectedLocale ?? 'en', messages}
})


