import React from 'react'
import Image from 'next/image'
import useTranslation from '../../hooks/useTranslations'

const Contact = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h1>{t('contact').toUpperCase()}</h1>
      <ul className="contactList">
        <li>
          <a href="#" target="_blank">
            <Image width={20} height={20} src="/images/footer/contact_icons/location.svg" />
            <span>Lorem ipsum dolor sit amet, consectetuer </span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Image width={20} height={20} src="/images/footer/contact_icons/mail.svg" />
            <span>Lorem ipsum dolor sit amet, consectetuer </span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Image width={20} height={20} src="/images/footer/contact_icons/phone.svg" />
            <span>Lorem ipsum dolor sit amet, consectetuer </span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Image width={20} height={20} src="/images/footer/contact_icons/clock.svg" />
            <span>Lorem ipsum dolor sit amet, consectetuer </span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact
