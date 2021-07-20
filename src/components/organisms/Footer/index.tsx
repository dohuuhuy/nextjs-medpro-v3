import { FooterCustom } from '@medpro/booking-libs'
// import { FooterCustom } from '@components/test/FooterCustom'
import React from 'react'
import { useSelector } from 'react-redux'
// import styles from './styles.module.less'

const FooterLayout = () => {
  const footer = useSelector(
    (state: any) => state.hospital_Reducer.hospital_details.footer
  )

  return <FooterCustom dataFooter={footer} />
}

export default FooterLayout
