import { PaymentMethods } from '@componentsTest/PaymentMethods'
import { AppState } from '@src/store/interface'
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import * as ac from '@actionStore'

import { useDispatch, useSelector } from 'react-redux'
import { check } from '@src/utils/checkValue'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const PaymentMethodsPage = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.user)
  const hospital = useSelector((state: AppState) => state.hospital)
  useEffect(() => {
    check(user.userInfo.token) && dispatch(ac.loginMedproId())
    dispatch(ac.listPatientRequest())
    check(hospital.listHospital) && dispatch(ac.getListHospital())
  }, [])
  return (
    <>
      <BreadcumbCustom
        type='booking'
        listHos={hospital.listHospital}
        header={hospital.information.header}
      />

      <PaymentMethods />
    </>
  )
}

PaymentMethodsPage.layout = DefaultLayout

export default PaymentMethodsPage
