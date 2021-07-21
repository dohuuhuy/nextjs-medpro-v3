import { Layout } from 'antd'
import React from 'react'
import { CopyRight } from './CopyRight'
import { FooterContent } from './FooterContent'
import { PropsFooter } from './footer.interface'
import style from './styles.module.less'

const { Footer } = Layout

const FooterCustom = ({ dataFooter }: PropsFooter) => {
  if (!dataFooter || Object.keys(dataFooter).length < 1) {
    return <em>Lỗi không có dataFooter ...</em>
  }

  return (
    <Footer className={style.footer}>
      <FooterContent dataFooter={dataFooter} />
      <CopyRight />
    </Footer>
  )
}
export default FooterCustom;