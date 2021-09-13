import { Col, Row } from 'antd'
import cx from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Container from '../../../Container'
import { ImageFooter } from '../../molecules/ImageFooter'
import { InfoFooter } from '../../molecules/InfoFooter'
import { SuportFooter } from '../../molecules/SuportFooter'
import { PropsFooter } from '../interface.footer'
import styles from './styles.module.less'

export const FooterContent = ({ dataFooter }: PropsFooter) => {
  if (!dataFooter || dataFooter.length < 1) {
    return <em>Lỗi không có dataFooter ...</em>
  }

  const { logoFooter, infoContact, linkSupport, logoChecked }: any = dataFooter

  const CheckValue = (el: any) => {
    if (!el) return styles.hidden
  }

  return (
    <div className={styles.viewFooter}>
      <Container>
        <Row className={styles.rowFooter}>
          <Col
            className={cx(styles.viewCol, CheckValue(logoFooter))}
            xl={4}
            md={24}
          >
            <Link href={logoFooter.linkImage}>
              <a className={styles.logoFooter} target='_blank' rel='noreferrer'>
                <Image
                  src={logoFooter.logoImage}
                  className={styles.logo}
                  objectFit='cover'
                  width='155'
                  height='62'
                  alt='logoFooter'
                />
              </a>
            </Link>
          </Col>

          <Col
            className={cx(styles.viewCol, CheckValue(infoContact))}
            xl={10}
            md={24}
          >
            <InfoFooter infoContact={infoContact} />
          </Col>

          <Col
            className={cx(
              styles.viewCol,
              styles.linkSupport,
              CheckValue(linkSupport)
            )}
            xl={4}
            md={24}
          >
            <SuportFooter linkSupport={linkSupport} />
          </Col>

          <Col
            className={cx(styles.viewCol, CheckValue(logoChecked))}
            xl={6}
            md={24}
          >
            <ImageFooter logoChecked={logoChecked} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
