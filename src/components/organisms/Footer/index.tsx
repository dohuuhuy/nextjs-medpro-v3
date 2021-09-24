import { FooterCustom } from '@componentsTest/FooterCustom'
import { Information } from 'store/interface'
import React from 'react'
import { check } from '@utils/checkValue'

const Footer = (info: Information) => {
  if (check(info)) {
    return null
  }

  return <FooterCustom {...info.footer} />
}

export default Footer
