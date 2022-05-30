import { useRouter } from 'next/router'
import React, { useState } from 'react'
import useTranslation from '../hooks/useTranslations'
import Link from 'next/link'
import { MenuOutlined } from '@ant-design/icons'
import { Drawer, Menu } from 'antd'

const Navigation = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  const router = useRouter()

  const onClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Drawer width={'80%'} zIndex={20000000} closable={false} onClose={onClose} visible={open}>
        <div className="ham__Container">
          <Menu mode="inline">
            <Menu.Item>
              <Link href={{ pathname: '/[lang]', query: { lang: router.query.lang } }}>
                <a>{t('index').toUpperCase()}</a>
              </Link>
            </Menu.Item>
            <Menu.SubMenu title={t('about').toUpperCase()}>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/aboutus', query: { lang: router.query.lang } }}>
                  <a>{t('about').toUpperCase()}</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/aboutus/carisma', query: { lang: router.query.lang } }}>
                  <a>{t('ourCharisma').toUpperCase()}</a>
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title={t('where').toUpperCase()}>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/find_us', query: { lang: router.query.lang } }}>
                  <a>{t('where').toUpperCase()}</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/find_us/province', query: { lang: router.query.lang } }}>
                  <a>{t('provinces').toUpperCase()}</a>
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title={t('ourWork').toUpperCase()}>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/our-work', query: { lang: router.query.lang } }}>
                  <a>{t('ourWork').toUpperCase()}</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/our-work/mision', query: { lang: router.query.lang } }}>
                  <a>{t('misions').toUpperCase()}</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/our-work/educational', query: { lang: router.query.lang } }}>
                  <a>{t('educational').toUpperCase()}</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/our-work/parroquial', query: { lang: router.query.lang } }}>
                  <a>{t('parochial').toUpperCase()}</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/our-work/social', query: { lang: router.query.lang } }}>
                  <a>{t('social').toUpperCase()}</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/our-work/adgente', query: { lang: router.query.lang } }}>
                  <a>{t('adgente').toUpperCase()}</a>
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item>
              <Link href={{ pathname: '/[lang]/pastoral-vocacional', query: { lang: router.query.lang } }}>
                <a>{t('vocationMinistry').toUpperCase()}</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href={{ pathname: '/[lang]/jpic', query: { lang: router.query.lang } }}>
                <a>{t('jpic').toUpperCase()}</a>
              </Link>
            </Menu.Item>
            <Menu.SubMenu title={t('vocationalFormation').toUpperCase()}>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/formacion-vocacional', query: { lang: router.query.lang } }}>
                  <a>{t('vocationalFormation').toUpperCase()}</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/formacion-vocacional/aspirantate', query: { lang: router.query.lang } }}>
                  <a>{t('aspirantate').toUpperCase()}</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/formacion-vocacional/postulancy', query: { lang: router.query.lang } }}>
                  <a>{t('postulancy').toUpperCase()}</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/formacion-vocacional/novitiate', query: { lang: router.query.lang } }}>
                  <a>{t('novitiate').toUpperCase()}</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/formacion-vocacional/junerado', query: { lang: router.query.lang } }}>
                  <a>{t('junerado').toUpperCase()}</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/formacion-vocacional/permanent-education', query: { lang: router.query.lang } }}>
                  <a>{t('permanentEducation').toUpperCase()}</a>
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item>
              <Link href={{ pathname: '/[lang/miframi', query: { lang: router.query.lang } }}>
                <a>{t('miframi').toUpperCase()}</a>
              </Link>
            </Menu.Item>
            <Menu.SubMenu title={t('spirituality').toUpperCase()}>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/spirituality', query: { lang: router.query.lang } }}>
                  <a>{t('spirituality').toUpperCase()}</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/spirituality/san-francisco-de-asis', query: { lang: router.query.lang } }}>
                  <a>{t('sanFranciscoDeAsis').toUpperCase()}</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/spirituality/santa-clara-de-asis', query: { lang: router.query.lang } }}>
                  <a>{t('santaClaraDeAsis').toUpperCase()}</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/spirituality/madre-caridad-brader-zanher', query: { lang: router.query.lang } }}>
                  <a>{t('madreCaridadBraderZanher').toUpperCase()}</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/spirituality/perpetual-adoration', query: { lang: router.query.lang } }}>
                  <a>{t('perpetualAdoration').toUpperCase()}</a>
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
            {/* 
            <Menu.SubMenu title={t('eucharisticSoul').toUpperCase()}>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/eucharistic-soul', query: { lang: router.query.lang } }}>
                  <a>{t('eucharisticSoul').toUpperCase()}</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href={{ pathname: '/[lang]/eucharistic-soul/eucharistic-spirituality', query: { lang: router.query.lang } }}
                >
                  <a>{t('eucharisticSpirituality').toUpperCase()}</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/eucharistic-soul/perpetual-adoration', query: { lang: router.query.lang } }}>
                  <a>{t('perpetualAdoration').toUpperCase()}</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={{ pathname: '/[lang]/eucharistic-soul/santuario', query: { lang: router.query.lang } }}>
                  <a>{t('santuario').toUpperCase()}</a>
                </Link>
              </Menu.Item>
            </Menu.SubMenu> */}
          </Menu>
        </div>
      </Drawer>
      <nav className="mainContainerNav">
        <div className="hamburger">
          <MenuOutlined onClick={() => setOpen(true)} />
        </div>
        <ul className="navBar">
          <li className="navBar--active">
            <Link href={{ pathname: '/[lang]', query: { lang: router.query.lang } }}>
              <a>{t('index').toUpperCase()}</a>
            </Link>
          </li>
          <li>
            <Link href={{ pathname: '/[lang]/aboutus', query: { lang: router.query.lang } }}>
              <a>{t('about').toUpperCase()}</a>
            </Link>
            <ul className="navBar__subMenu">
              <li>
                <Link href={{ pathname: '/[lang]/aboutus/carisma', query: { lang: router.query.lang } }}>
                  <a>{t('ourCharisma')}</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={{ pathname: '/[lang]/find_us', query: { lang: router.query.lang } }}>
              <a>{t('where').toUpperCase()}</a>
            </Link>
            <ul className="navBar__subMenu">
              <li>
                <Link href={{ pathname: '/[lang]/find_us/province', query: { lang: router.query.lang } }}>
                  <a>{t('provinces')}</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={{ pathname: '/[lang]/our-work', query: { lang: router.query.lang } }}>
              <a>{t('ourWork').toUpperCase()}</a>
            </Link>
            <ul className="navBar__subMenu">
              <li>
                <Link href={{ pathname: '/[lang]/our-work/mision', query: { lang: router.query.lang } }}>
                  <a>{t('misions')}</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/[lang]/our-work/educational', query: { lang: router.query.lang } }}>
                  <a>{t('educational')}</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/[lang]/our-work/parroquial', query: { lang: router.query.lang } }}>
                  <a>{t('parochial')}</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/[lang]/our-work/social', query: { lang: router.query.lang } }}>
                  <a>{t('social')}</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/[lang]/our-work/adgente', query: { lang: router.query.lang } }}>
                  <a>{t('adgente')}</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={{ pathname: '/[lang]/pastoral-vocacional', query: { lang: router.query.lang } }}>
              <a>{t('vocationMinistry').toUpperCase()}</a>
            </Link>
          </li>
          <li>
            <Link href={{ pathname: '/[lang]/jpic', query: { lang: router.query.lang } }}>
              <a>{t('jpic').toUpperCase()}</a>
            </Link>
          </li>
          <li>
            <Link href={{ pathname: '/[lang]/formacion-vocacional', query: { lang: router.query.lang } }}>
              <a>{t('vocationalFormation').toUpperCase()}</a>
            </Link>
            <ul className="navBar__subMenu">
              <li>
                <Link href={{ pathname: '/[lang]/formacion-vocacional/aspirantate', query: { lang: router.query.lang } }}>
                  <a>{t('aspirantate')}</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/[lang]/formacion-vocacional/postulancy', query: { lang: router.query.lang } }}>
                  <a>{t('postulancy')}</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/[lang]/formacion-vocacional/novitiate', query: { lang: router.query.lang } }}>
                  <a>{t('novitiate')}</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/[lang]/formacion-vocacional/junerado', query: { lang: router.query.lang } }}>
                  <a>{t('junerado')}</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/[lang]/formacion-vocacional/permanent-education', query: { lang: router.query.lang } }}>
                  <a>{t('permanentEducation')}</a>
                </Link>
              </li>
              {/* <li>
                <Link href={{ pathname: '/[lang]/formacion-vocacional/lay-branch', query: { lang: router.query.lang } }}>
                  <a>{t('layBranch')}</a>
                </Link>
              </li> */}
            </ul>
          </li>
          <li>
            <Link href={{ pathname: '/[lang]/miframi', query: { lang: router.query.lang } }}>
              <a>{t('miframi').toUpperCase()}</a>
            </Link>
          </li>
          <li>
            <Link href={{ pathname: '/[lang]/spirituality', query: { lang: router.query.lang } }}>
              <a>{t('spirituality').toUpperCase()}</a>
            </Link>
            <ul className="navBar__subMenu">
              <li>
                <Link href={{ pathname: '/[lang]/spirituality/san-francisco-de-asis', query: { lang: router.query.lang } }}>
                  <a>{t('sanFranciscoDeAsis')}</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/[lang]/spirituality/santa-clara-de-asis', query: { lang: router.query.lang } }}>
                  <a>{t('santaClaraDeAsis')}</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/[lang]/spirituality/madre-caridad-brader-zanher', query: { lang: router.query.lang } }}>
                  <a>{t('madreCaridadBraderZanher')}</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/[lang]/spirituality/perpetual-adoration', query: { lang: router.query.lang } }}>
                  <a>{t('perpetualAdoration')}</a>
                </Link>
              </li>
            </ul>
          </li>
          {/* <li>
            <Link href={{ pathname: '/[lang]/eucharistic-soul', query: { lang: router.query.lang } }}>
              <a>{t('eucharisticSoul').toUpperCase()}</a>
            </Link>
            <ul className="navBar__subMenu">
              <li>
                <Link
                  href={{ pathname: '/[lang]/eucharistic-soul/eucharistic-spirituality', query: { lang: router.query.lang } }}
                >
                  <a>{t('eucharisticSpirituality')}</a>
                </Link>
              </li>

              <li>
                <Link href={{ pathname: '/[lang]/eucharistic-soul/santuario', query: { lang: router.query.lang } }}>
                  <a>{t('santuario')}</a>
                </Link>
              </li>
            </ul>
          </li> */}
        </ul>
      </nav>
    </>
  )
}

export default React.memo(Navigation)
