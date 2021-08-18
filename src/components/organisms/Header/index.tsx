// import { HeaderCustom } from '@medpro/booking-libs'
import { ListPatientRequest } from '@actionStore/rootAction'
import { HeaderCustom } from '@componentsTest/HeaderCustom'
import { AppState } from '@store/interface'
import { check } from '@utils/checkValue'
import React from 'react'
import { useSelector } from 'react-redux'

const HeaderLayout = () => {
  const header = useSelector(
    (state: AppState) => state.hospitalReducer.information.header
  )

  const userInfo = useSelector((state: AppState) => state.userReducer.userInfo)

  const listPatient = useSelector(
    (state: AppState) => state.userReducer.listPatient
  )

  const authen = {
    isAuthen: userInfo.token ? true : false,
    nameUser: userInfo.fullName
  }

  const methods = {
    ListPatientRequest: check(listPatient) ? ListPatientRequest : null,
    dataHeader: header,
    Authencartion: authen
  }

  return <HeaderCustom {...methods} />
}

export default HeaderLayout
