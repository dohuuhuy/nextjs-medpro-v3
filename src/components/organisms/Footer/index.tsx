import Container from '@components/atoms/Container'
import { Footer } from 'antd/lib/layout/layout'
import React from 'react'
import styles from './styles.module.less'

const FooterLayout = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>Ant Design ©2018 Created by Ant UED</p>
      </Container>
    </footer>
  )
}

export default FooterLayout
