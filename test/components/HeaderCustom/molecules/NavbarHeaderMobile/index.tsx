import Container from '../../../Container'
import { Col, Row } from 'antd'
import React from 'react'
import styles from './styles.module.less'

interface Props {
  logo: string
  togleDrawer?: any
  drawer: boolean
}

export const NavbarHeaderMobile = ({
  logo,
  togleDrawer,
  drawer = false
}: Props) => {
  return (
    <Container className={styles.headerDrawer}>
      <Row className={styles.rowHeaderDrawer}>
        <Col span={8} className={styles.colLogoHeaderMobile}>
          <figure>
            <img src={logo} className={styles.logoDrawer} alt='logo' />
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
                <img
                  src='https://resource-testing.medpro.com.vn/static/media/icon/menu_hamburger.svg'
                  alt=''
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
