import { HeaderCustom } from '@componentsTest/HeaderCustom'
import { AppState, Information } from 'store/interface'
import React from 'react'
import { useSelector } from 'react-redux'

const HeaderLayout = (info: Information) => {
  const userInfo = useSelector((state: AppState) => state.user.userInfo)

  const authen = {
    isAuthen: userInfo.token ? true : false,
    nameUser: userInfo.fullName
  }

  const methods = {
    dataHeader: info.header,
    Authencartion: authen
  }

  return <HeaderCustom {...methods} />
}

export default HeaderLayout
