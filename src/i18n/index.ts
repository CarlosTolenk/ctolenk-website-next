export type SiteLocale = 'es' | 'en'

export const DEFAULT_LOCALE: SiteLocale = 'es'

export const normalizeLocale = (locale?: string): SiteLocale => {
  return locale === 'en' ? 'en' : 'es'
}
