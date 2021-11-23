import HeaderCustom from '@componentsTest/HeaderCustom'
import { AppState } from '@store/interface'
import React from 'react'
import { useSelector } from 'react-redux'

const HeaderPublic = () => {
  const hos = useSelector((state: AppState) => state.hospital)

  if (!hos.information.header) return null
  return <HeaderCustom dataHeader={hos.information.header} />
}

export default HeaderPublic
