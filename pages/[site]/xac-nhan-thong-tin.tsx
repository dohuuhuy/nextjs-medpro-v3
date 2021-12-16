import { ConfirmInfo } from '@componentsTest/ConfirmInfo'
import { AppState } from '@src/store/interface'
import { check } from '@src/utils/checkValue'
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as ac from '@actionStore'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const ConfirmInfoPage = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.user)

  useEffect(() => {
    check(user.userInfo.token) && dispatch(ac.loginMedproId())
    dispatch(ac.listPatientRequest())
  }, [])
  console.log('user :>> ', user.listPatient);
  return (
    <>
      <ConfirmInfo {...user.listPatient} />
    </>
  )
}
ConfirmInfoPage.layout = DefaultLayout
export default ConfirmInfoPage
