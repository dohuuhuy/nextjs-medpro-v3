import * as ac from '@actionStore/rootAction'
import {
  SelectHospital,
  SelectHospitalCustom
} from '@componentsTest/SelectHospitalCustom'
import DefaultLayout from '@templates/Default'
import { check } from '@utils/checkValue'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SelectHospitalCtl } from 'src/containers/SelectHosital'
import { AppState } from 'store/interface'

const ChonBenhVienPage = ({ data }: any) => {
  const dispatch = useDispatch()
  const listHospital = useSelector(
    (state: AppState) => state.hospital.listHospital
  )
  const listCity = useSelector((state: AppState) => state.total.listCity)

  useEffect(() => {
    check(listCity) && dispatch(ac.handlerAddress({ type: 'city', id: 'VIE' }))
    check(listHospital) && dispatch(ac.getListHospital())
  }, [dispatch, listCity, listHospital])

  const methods: SelectHospital = {
    listHospital: data?.listHospital,
    listCity
  }

  return <SelectHospitalCustom {...methods} />
}

ChonBenhVienPage.getInitialProps = async (ctx: any) => {
  const data = await SelectHospitalCtl(ctx)

  return { data }
}

ChonBenhVienPage.Layout = DefaultLayout
export default ChonBenhVienPage
