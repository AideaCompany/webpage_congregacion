// ./src/translations/config.ts
export const defaultLocale = 'es' as const

export const locales = ['es', 'en', 'fr', 'de', 'it'] as const

export const languageNames = {
  es: 'Español',
  en: 'English'
}

type routes = {
  route: string
  text: string
}

export const routesNames: routes[] = [
  {
    route: 'signin',
    text: 'auth'
  }
]
