import { ConfirmInfo } from '@componentsTest/ConfirmInfo'
import { loginMedproId } from '@src/store/actionStore'
import { AppState } from '@src/store/interface'
import { check } from '@src/utils/checkValue'
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ConfirmInfoPage = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.user)

  useEffect(() => {
    check(user.userInfo.token) && dispatch(loginMedproId())
  }, [])

  return (
    <>
      <ConfirmInfo />
    </>
  )
}
ConfirmInfoPage.layout = DefaultLayout
export default ConfirmInfoPage
