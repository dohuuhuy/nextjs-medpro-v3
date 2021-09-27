import { check } from '@utils/checkValue'
import React from 'react'
import { Information } from 'store/interface'

import dynamic from 'next/dynamic'
const FooterCustom = dynamic(() => import('@componentsTest/FooterCustom'))

const Footer = (info: Information) => {
  if (check(info)) {
    return null
  }

  return <FooterCustom {...info.footer} />
}

export default Footer
