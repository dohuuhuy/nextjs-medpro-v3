import * as a from '@actionStore/rootAction'
import HeaderCustom from '@componentsTest/HeaderCustom'
import { AppState } from '@store/interface'
import { filter } from 'lodash'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const HeaderPublic = () => {
  const dispatch = useDispatch()
  const hos = useSelector((state: AppState) => state.hospital)
  const user = useSelector((state: AppState) => state.user)

  useEffect(() => {
    dispatch(a.getNoti())
  }, [])

  const noRep = filter(user.noti, { isRead: false })

  useEffect(() => {
    const audio = new Audio(
      'https://resource-testing.medpro.com.vn/static/upload/noti.mp3'
    )

    noRep.length > 0 &&
      setInterval(() => {
        audio.play()
      }, 6000000)
  }, [noRep.length])

  if (!hos.information.header) return null
  return (
    <>
      <HeaderCustom
        loginMedproId={a.loginMedproId}
        dataHeader={hos.information.header}
        author={user.userInfo}
        noti={user.noti}
      />
    </>
  )
}

export default HeaderPublic
