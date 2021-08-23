import { HeaderCustom } from '@componentsTest/HeaderCustom'
import { AppState } from '@store/interface'
import React from 'react'
import { useSelector } from 'react-redux'

const HeaderLayout = () => {
  const header = useSelector(
    (state: AppState) => state.hospitalReducer.information.header
  )

  const userInfo = useSelector((state: AppState) => state.userReducer.userInfo)

  const authen = {
    isAuthen: userInfo.token ? true : false,
    nameUser: userInfo.fullName
  }

  const methods = {
    dataHeader: header,
    Authencartion: authen
  }

  console.log('methods :>> ', methods)

  return <HeaderCustom {...methods} />
}

export default HeaderLayout
