import { FooterCustom } from '@componentsTest/FooterCustom'
import { Information } from 'store/interface'
import React from 'react'

const Footer = (info: Information) => {
  return <FooterCustom {...info.footer} />
}

export default Footer
