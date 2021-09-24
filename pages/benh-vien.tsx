import * as ac from '@actionStore/rootAction'
import {
  SelectHospital,
  SelectHospitalCustom
} from '@componentsTest/SelectHospitalCustom'
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SelectHospitalCtl } from 'src/containers/SelectHosital'
import { AppState } from 'store/interface'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const ChonBenhVienPage = ({ data }: any) => {
  const dispatch = useDispatch()
  const listHospital = useSelector(
    (state: AppState) => state.hospital.listHospital
  )
  const listCity = useSelector((state: AppState) => state.total.listCity)

  useEffect(() => {
    dispatch(ac.handlerAddress({ type: 'city', id: 'VIE' }))
    dispatch(ac.getListHospital())
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
