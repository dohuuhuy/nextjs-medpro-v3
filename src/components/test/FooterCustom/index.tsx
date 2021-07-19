import React from 'react'
import { Layout, Row } from 'antd'
import style from './styles.module.less'
import { PropsFooter } from './interface.footer'
import { FooterContent } from './FooterContent'

const { Footer } = Layout

export const FooterCustom = ({ dataFooter }: PropsFooter) => {
  if (!dataFooter) {
    return <em>Lỗi không có dataFooter ...</em>
  }

  return (
    <Footer className={style.footer}>
      <Row className={style.viewFooter}>
        <FooterContent dataFooter={dataFooter} />
      </Row>
      <Row className={style.copyRight}>
        <p className={style.textCopyRight}>
          © 2020 - Bản quyền thuộc Công Ty Cổ Phần Ứng Dụng PKH
        </p>
      </Row>
    </Footer>
  )
}
