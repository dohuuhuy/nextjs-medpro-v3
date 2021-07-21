import HeaderCustom from '@components/test/HeaderCustom'
import React from 'react'
import { useSelector } from 'react-redux'

const HeaderLayout = () => {
  const header = useSelector(
    (state: any) => state.hospital_Reducer.hospital_details.header
  )

  return <HeaderCustom dataHeader={header} Authencartion={''} />
}

export default HeaderLayout
