import { HeaderCustom } from '@n17dccn172/booking-libs'
import React from 'react'
import { useSelector } from 'react-redux'

const authen = {
  isAuthen: true,
  nameUser: 'Huyi'
}

const HeaderLayout = () => {
  const header = useSelector(
    (state: any) => state.hospital_Reducer.hospital_details.header
  )
  return <HeaderCustom dataHeader={header} Authencartion={authen} />
}

export default HeaderLayout
