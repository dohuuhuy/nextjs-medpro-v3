import FooterCustom from '@componentsTest/FooterCustom'
import { AppState } from '@store/interface'
import React from 'react'
import { useSelector } from 'react-redux'

const FooterPublic = () => {
  const hos = useSelector((state: AppState) => state.hospital)

  if (!hos.information.footer) return null
  return <FooterCustom dataFooter={hos.information.footer} />
}

export default FooterPublic
