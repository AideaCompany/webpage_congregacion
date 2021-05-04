import React from 'react'
//next
import Image from 'next/image'
const SocialMedia = ({ data }: { data: any }) => {
  return (
    <div>
      <Image width={122} height={153} src="/images/footer/logo.png" />
      <span>{data?.textoFooter}</span>
      <ul className="socialIcon">
        <li>
          <a href={data?.linkFacebook} target="_blank">
            <Image width={40} height={40} src="/images/footer/social_icons/facebook.svg" />
          </a>
        </li>
        <li>
          <a href={data?.linkInstagram} target="_blank">
            <Image width={40} height={40} src="/images/footer/social_icons/instagram.svg" />
          </a>
        </li>
        <li>
          <a href={data?.linkTwitter} target="_blank">
            <Image width={40} height={40} src="/images/footer/social_icons/twitter.svg" />
          </a>
        </li>
        <li>
          <a href={`https://api.whatsapp.com/send?phone=${data?.linkWhatsapp}`} target="_blank">
            <Image width={40} height={40} src="/images/footer/social_icons/whatsapp.svg" />
          </a>
        </li>
        <li>
          <a href={data?.linkYoutube} target="_blank">
            <Image width={40} height={40} src="/images/footer/social_icons/youtube.svg" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialMedia
