import * as a from '@actionStore'
import { check } from '@componentsTest/BookingBill/utils/func'
import HeaderCustom from '@componentsTest/HeaderCustom'
import { AppState } from '@store/interface'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const HeaderPublic = () => {
  const dispatch = useDispatch()
  const hos = useSelector((state: AppState) => state.hospital)
  const user = useSelector((state: AppState) => state.user)

  useEffect(() => {
    check(user.userInfo.token) && dispatch(a.getNoti())
  }, [])

  if (!hos.information.header) return null
  return (
    <>
      <HeaderCustom
        loginAt={a.loginAt}
        loginMedproId={a.loginMedproId}
        dataHeader={hos.information.header}
        author={user.userInfo}
        noti={user.noti}
      />
    </>
  )
}

export default HeaderPublic
