import dynamic from 'next/dynamic'
import Link from 'next/link'
import Container from '@components/atoms/Container'
import { Header } from 'antd/lib/layout/layout'
import React from 'react'
const BreadcrumbLayout = dynamic(() => import('../Breadcrumb'))
// // const MenuLayout = dynamic(() => import('../Menu'), {
//   loading: () => <p>...</p>,
// })
import styles from './styles.module.less'

const menu = [
  {
    label: 'Trang chủ',
    slug: '/',
  },
  {
    label: 'Giới thiệu',
    slug: '/gioi-thieu',
  },
  {
    label: 'Quy trình',
    slug: '/quy-trinh',
  },
  {
    label: 'Thắc mác',
    slug: '/thac-mac',
  },
  {
    label: 'Liên hệ',
    slug: '/lien-he',
  },
]

const HeaderLayout = () => {
  return (
    <Header className={styles.header}>
      <Container>
        <div className={styles.logo}>logo</div>
        {/* <MenuLayout /> */}
        <ul className={styles.menu}>
          {menu.map(({ label, slug }, i: any) => {
            return (
              <li key={i}>
                <Link href={slug} as={slug}>
                  <a>{label}</a>
                </Link>
              </li>
            )
          })}
        </ul>
        <BreadcrumbLayout />
      </Container>
    </Header>
  )
}

export default HeaderLayout
