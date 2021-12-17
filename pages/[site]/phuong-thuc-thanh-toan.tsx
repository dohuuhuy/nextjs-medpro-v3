import { PaymentMethods } from '@componentsTest/PaymentMethods'
import { AppState } from '@src/store/interface'
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import * as ac from '@actionStore'

import { useDispatch, useSelector } from 'react-redux'
import { check } from '@src/utils/checkValue'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
import Loading from '@componentsTest/Loading'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const PaymentMethodsPage = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.user)
  const total = useSelector((state: AppState) => state.total)
  const hospital = useSelector((state: AppState) => state.hospital)
  useEffect(() => {
    check(user.userInfo.token) && dispatch(ac.loginMedproId())
    check(hospital.listHospital) && dispatch(ac.getListHospital())
    dispatch(ac.getAllPayment())
  }, [])
  return (
    <>
      <BreadcumbCustom
        type='booking'
        listHos={hospital.listHospital}
        header={hospital.information.header}
      />
      {total.loading ? (
        <Loading component />
      ) : (
        <PaymentMethods
          hospital={hospital}
          dispatch={dispatch}
          onSelectedPaymentFee={ac.selectedPaymentFee}
        />
      )}
    </>
  )
}

PaymentMethodsPage.layout = DefaultLayout

export default PaymentMethodsPage
