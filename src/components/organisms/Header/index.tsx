/* eslint-disable no-console */
// import { HeaderCustom } from '@n17dccn172/booking-libs'
import { HeaderCustom } from '@componentsTest/HeaderCustom'
import React from 'react'

const authen = {
  isAuthen: false,
  nameUser: 'Huyi'
}

const HeaderLayout = ({ header }: any) => {
  // return null
  return <HeaderCustom dataHeader={header} Authencartion={authen} />
}

export default HeaderLayout
