import React from 'react'
import Image from 'next/image'
import useTranslation from '../../hooks/useTranslations'

const Contact = ({ data }: { data: any }) => {
  const { t } = useTranslation()
  return (
    <div>
      <h1>{t('contact').toUpperCase()}</h1>
      <ul className="contactList">
        <li>
          <Image width={20} height={20} src="/images/footer/contact_icons/location.svg" />
          <span>{data?.address} </span>
        </li>
        <li>
          <Image width={20} height={20} src="/images/footer/contact_icons/mail.svg" />
          <span>{data?.email}</span>
        </li>
        <li>
          <Image width={20} height={20} src="/images/footer/contact_icons/phone.svg" />
          <span>{data?.phone}</span>
        </li>
        {/* <li>
          <Image width={20} height={20} src="/images/footer/contact_icons/clock.svg" />
          <span>{data?.horarios}</span>
        </li> */}
      </ul>
    </div>
  )
}

export default Contact
