
import { HeaderCustom } from '@componentsTest/HeaderCustom'
import React from 'react'

const authen = {
  isAuthen: false,
  nameUser: 'Huyi'
}

const HeaderLayout = ({ header }: any) => {

  return <HeaderCustom dataHeader={header} Authencartion={authen} />
}

export default HeaderLayout
