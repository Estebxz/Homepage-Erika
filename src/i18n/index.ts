import spanish from '@/i18n/col.json'
import english from '@/i18n/en.json'
import brazil from '@/i18n/br.json'

const LANG = {
    SPANISH: 'es',
    PORTUGUESE: 'br',
    ENGLISH: 'en'
}

export const getI18N = ({
  currentLocale = 'es'
}: {
  currentLocale: string | undefined
}) => {
  if (currentLocale === LANG.PORTUGUESE) return {...spanish, ...brazil}
  if (currentLocale === LANG.ENGLISH) return {...spanish, ...english}
  return spanish
}