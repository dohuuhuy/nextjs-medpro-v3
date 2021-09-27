import { check } from '@utils/checkValue'
import dynamic from 'next/dynamic'
import React from 'react'
import { useSelector } from 'react-redux'
import { AppState, Information } from 'store/interface'

const HeaderCustom = dynamic(() => import('@componentsTest/HeaderCustom'))

const Header = (info: Information) => {
  const userInfo = useSelector((state: AppState) => state.user.userInfo)

  const authen = {
    isAuthen: userInfo.token ? true : false,
    nameUser: userInfo.fullName
  }

  const methods = {
    dataHeader: info?.header,
    Authencation: authen
  }

  if (check(info)) {
    return null
  }

  return <HeaderCustom {...methods} />
}

export default Header
