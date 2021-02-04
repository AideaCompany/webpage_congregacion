import React from 'react'
//next
import Image from 'next/image'
const SocialMedia = () => {
  return (
    <div>
      <Image width={122} height={153} src="/images/footer/logo.png" />
      <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean </span>
      <ul className="socialIcon">
        <li>
          <a href="#" target="_blank">
            <Image width={40} height={40} src="/images/footer/social_icons/facebook.svg" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Image width={40} height={40} src="/images/footer/social_icons/instagram.svg" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Image width={40} height={40} src="/images/footer/social_icons/twitter.svg" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Image width={40} height={40} src="/images/footer/social_icons/whatsapp.svg" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Image width={40} height={40} src="/images/footer/social_icons/youtube.svg" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialMedia
