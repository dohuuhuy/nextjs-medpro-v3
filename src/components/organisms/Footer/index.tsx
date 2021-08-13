import { useSelector } from 'react-redux'
import { AppState } from '@store/interface'
import React from 'react'
import { FooterCustom } from '@componentsTest/FooterCustom'
// import { FooterCustom } from '@medpro/booking-libs'

const FooterLayout = () => {
  const footer = useSelector(
    (state: AppState) => state.hospitalReducer.information.footer
  )

  return <FooterCustom dataFooter={footer} />
}

export default FooterLayout
