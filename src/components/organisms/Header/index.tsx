import { HeaderCustom } from '@componentsTest/HeaderCustom'
import { AppState, Information } from 'store/interface'
import React from 'react'
import { useSelector } from 'react-redux'
import { check } from '@utils/checkValue'

const Header = (info: Information) => {
  if (check(info)) {
    return null
  }

  const userInfo = useSelector((state: AppState) => state.user.userInfo)

  const authen = {
    isAuthen: userInfo.token ? true : false,
    nameUser: userInfo.fullName
  }

  const methods = {
    dataHeader: info?.header,
    Authencation: authen
  }

  return <HeaderCustom {...methods} />
}

export default Header
