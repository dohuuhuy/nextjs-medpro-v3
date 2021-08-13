import { HeaderCustom } from '@medpro/booking-libs'
import { AppState } from '@store/interface'
import React from 'react'
import { useSelector } from 'react-redux'

const authen = {
  isAuthen: false,
  nameUser: 'Huyi'
}

const HeaderLayout = () => {
  const header = useSelector(
    (state: AppState) => state.hospitalReducer.information.header
  )

  return <HeaderCustom dataHeader={header} Authencartion={authen} />
}

export default HeaderLayout
