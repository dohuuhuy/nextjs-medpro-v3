import React from 'react'
import { FooterCustom } from '@n17dccn172/booking-libs'
import { useSelector } from 'react-redux'

const FooterLayout = () => {
  const footer = useSelector(
    (state: any) => state.hospital_Reducer.hospital_details.footer
  )

  return <FooterCustom dataFooter={footer} />
}

export default FooterLayout
