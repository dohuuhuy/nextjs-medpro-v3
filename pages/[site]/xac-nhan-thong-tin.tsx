import { ConfirmInfo } from '@componentsTest/ConfirmInfo'
import { AppState } from '@src/store/interface'
import { check } from '@src/utils/checkValue'
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as ac from '@actionStore'
import Loading from '@componentsTest/Loading'
/* import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
 */
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ConfirmInfoPage = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.user)
  const hospital = useSelector((state: AppState) => state.hospital)
  const total = useSelector((state: AppState) => state.total)
  useEffect(() => {
    check(user.userInfo.token) && dispatch(ac.loginMedproId())
    dispatch(ac.listPatientRequest())
  }, [])
  console.log('hospital.schedule :>> ', hospital.schedule)

  return (
    <>
      {/*       <BreadcumbCustom />
       */}{' '}
      {check(user.listPatient) ? (
        <Loading component text='uyhbguygbuy' />
      ) : (
        <ConfirmInfo
          listPatient={user.listPatient}
          schedule={hospital.schedule}
          loading={total.loading}
        />
      )}
    </>
  )
}
ConfirmInfoPage.layout = DefaultLayout
export default ConfirmInfoPage
