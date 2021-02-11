import Image from 'next/image'
import React from 'react'
import { Locale } from '../i18n/types'
//next
import { useRouter } from 'next/router'

const ChangeLanguage = () => {
  //provider
  const router = useRouter()
  const changeLanguage = async (lang: Locale) => {
    router.push({ pathname: router.pathname, query: { ...router.query, lang } })
  }

  return (
    <div className="header__flags">
      <Image onClick={() => changeLanguage('es')} width={40} height={40} src="/images/header/custom-icons/spain.svg" />
      <Image onClick={() => changeLanguage('en')} width={40} height={40} src="/images/header/custom-icons/united-kingdom.svg" />
      <Image onClick={() => changeLanguage('es')} width={40} height={40} src="/images/header/custom-icons/france.svg" />
      <Image onClick={() => changeLanguage('es')} width={40} height={40} src="/images/header/custom-icons/germany.svg" />
      <Image onClick={() => changeLanguage('es')} width={40} height={40} src="/images/header/custom-icons/italy.svg" />
    </div>
  )
}

export default ChangeLanguage
