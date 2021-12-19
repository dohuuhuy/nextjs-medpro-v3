import * as ac from '@actionStore'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
import { ConfirmInfo } from '@componentsTest/ConfirmInfo'
import Loading from '@componentsTest/Loading'
import { AppState } from '@src/store/interface'
import { check } from '@src/utils/checkValue'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const ConfirmInfoPage = () => {
  const router = useRouter()

  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.user)
  const hospital = useSelector((state: AppState) => state.hospital)
  const total = useSelector((state: AppState) => state.total)
  useEffect(() => {
    dispatch(ac.paymentReset())

    if (check(user.userInfo.token)) {
      dispatch(ac.loginAt(router.asPath))
      dispatch(ac.loginMedproId())
    }
    dispatch(ac.listPatientRequest())
    check(hospital.listHospital) && dispatch(ac.getListHospital())
  }, [router.asPath])

  return (
    <>
      <BreadcumbCustom
        type='booking'
        listHos={hospital.listHospital}
        header={hospital.information.header}
      />

      {total.loading ? (
        <Loading component={true} />
      ) : (
        <ConfirmInfo
          selectedPatient={ac.selectedPatient}
          listPatient={user.listPatient}
          schedule={hospital.schedule}
          loading={total.loading}
          hospital={hospital}
        />
      )}
    </>
  )
}
ConfirmInfoPage.layout = DefaultLayout
export default ConfirmInfoPage
