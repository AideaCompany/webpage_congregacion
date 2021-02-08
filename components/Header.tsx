import React from 'react'
//Antd
import { Button } from 'antd'
//next
import Image from 'next/image'

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <h1>CONGREGRACIÓN DE FRANCISCANAS DE MARÍA INMACULADA</h1>
      </div>
      <div className="header__btn">
        <Button size="large" className="header__btn-primary">
          PASTORAL VOCACIONAL
        </Button>
        <Button size="large" className="header__btn-primary">
          ORIENTACIÓN VOCACIONAL
        </Button>
      </div>
      <div className="header__flags">
        <Image width={40} height={40} src="/images/header/custom-icons/spain.svg" />
        <Image width={40} height={40} src="/images/header/custom-icons/united-kingdom.svg" />
        <Image width={40} height={40} src="/images/header/custom-icons/france.svg" />
        <Image width={40} height={40} src="/images/header/custom-icons/germany.svg" />
        <Image width={40} height={40} src="/images/header/custom-icons/italy.svg" />
      </div>
    </header>
  )
}

export default Header
