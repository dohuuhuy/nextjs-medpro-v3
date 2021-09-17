import Container from '@componentsTest/Container'
import { Col, Row } from 'antd'
import React from 'react'
import styles from './styles.module.less'
import Image from 'next/image'


export interface PropsNavbar {
  logo: { mobile: string },
  togleDrawer?: any
  drawer: boolean
}

export const NavbarHeaderMobile = ({ drawer = false, logo, togleDrawer }: PropsNavbar) => {
  return (
    <Container className={styles.headerDrawer}>
      <Row className={styles.rowHeaderDrawer}>
        <Col span={8} className={styles.colLogoHeaderMobile}>
          <figure>
            <Image src={logo.mobile} alt='icon' height='18' width='18' />
          </figure>
        </Col>
        <Col span={4} className={styles.colButtonHeaderMobile}>
          <button
            onClick={() => togleDrawer()}
            className={drawer ? styles.btnClose : styles.btnMenu}
          >
            {drawer ? (
              <span>Đóng</span>
            ) : (
              <div>
                <Image
                  src={
                    'https://resource-testing.medpro.com.vn/static/media/icon/menu_hamburger.svg'
                  }
                  alt='icon'
                  height='18'
                  width='18'
                />
                <span>Menu</span>
              </div>
            )}
            <i className={styles.bars} />
          </button>
        </Col>
      </Row>
    </Container>
  )
}
