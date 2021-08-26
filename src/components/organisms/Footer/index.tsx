import { FooterCustom } from '@componentsTest/FooterCustom'
import { AppState } from '@store/interface'
import React from 'react'
import { useSelector } from 'react-redux'

const FooterLayout = () => {
  const footer = useSelector(
    (state: AppState) => state.hospitalReducer.information.footer
  )

  return <FooterCustom dataFooter={footer} />
}

export default FooterLayout
