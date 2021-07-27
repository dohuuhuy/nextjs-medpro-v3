import React from 'react'
import { FooterCustom } from '@n17dccn172/booking-libs'
import { useSelector } from 'react-redux'
import { AppState } from '@store/interface'

const FooterLayout = () => {
  const footer = useSelector(
    (state: AppState) => state.hospital_Reducer.information.footer
  )

  return <FooterCustom dataFooter={footer} />
}

export default FooterLayout
