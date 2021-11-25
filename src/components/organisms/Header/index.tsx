import * as a from '@actionStore/rootAction'
import HeaderCustom from '@componentsTest/HeaderCustom'
import { AppState } from '@store/interface'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const HeaderPublic = () => {
  const dispatch = useDispatch()
  const hos = useSelector((state: AppState) => state.hospital)
  const user = useSelector((state: AppState) => state.user)

  useEffect(() => {
    dispatch(a.getNoticeByUser())
  }, [])

  if (!hos.information.header) return null
  return (
    <>
      <HeaderCustom
        loginMedproId={a.loginMedproId}
        dataHeader={hos.information.header}
        author={user.userInfo}
        noti={user.noticeByUser}
      />
    </>
  )
}

export default HeaderPublic
