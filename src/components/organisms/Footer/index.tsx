import { FooterCustom } from '@componentsTest/FooterCustom'
import { Information } from 'store/interface'
import React from 'react'

const FooterLayout = (info: Information) => {
  return <FooterCustom dataFooter={info.footer} />
}

export default FooterLayout
