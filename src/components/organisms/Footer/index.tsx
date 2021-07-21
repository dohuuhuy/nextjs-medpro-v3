import { FooterCustom } from '@components/test/FooterCustom'
import React from 'react'
import { useSelector } from 'react-redux'

const FooterLayout = () => {
  const footer = useSelector(
    (state: any) => state.hospital_Reducer.hospital_details.footer
  )

  return <FooterCustom dataFooter={footer} />
}

export default FooterLayout
