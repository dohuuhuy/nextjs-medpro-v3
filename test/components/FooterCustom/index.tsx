import { DataFailure, checkData } from '../DataFailure'
import { Layout } from 'antd'
import React from 'react'
import { CopyRight } from './organisms/CopyRight'
import { FooterContent } from './organisms/FooterContent'
import { PropsFooter } from './organisms/interface.footer'
import styles from './styles.module.less'

const { Footer } = Layout

export const FooterCustom = ({ dataFooter }: PropsFooter) => {
  if (checkData(dataFooter)) {
    return <DataFailure description={'Lỗi không có data footer'} />
  }

  return (
    <Footer className={styles.footer}>
      <FooterContent dataFooter={dataFooter} />
      <CopyRight />
    </Footer>
  )
}
