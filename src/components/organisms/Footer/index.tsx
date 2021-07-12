import Container from '@components/atoms/Container'
import { Footer } from 'antd/lib/layout/layout'
import React from 'react'
import styles from './styles.module.less'

import { FooterCustom } from '@medpro/booking-libs'

const FooterLayout = () => {
  return (
    <Footer className={styles.footer}>
      <Container>
        <p>Ant Design ©2018 Created by Ant UED</p>
        <FooterCustom />
      </Container>
    </Footer>
  )
}

export default FooterLayout
