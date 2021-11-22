import * as ac from '@actionStore/rootAction'
import {
  SelectHospital,
  SelectHospitalCustom
} from '@componentsTest/SelectHospitalCustom'
import DefaultLayout from '@templates/Default'
import { check } from '@utils/checkValue'
import { GetServerSideProps } from 'next'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SelectHospitalCtl } from 'src/containers/SelectHosital'
import { AppState } from 'store/interface'

const ChonBenhVienPage = ({ data }: any) => {
  const dispatch = useDispatch()

  const listCity = useSelector((state: AppState) => state.total.listCity)

  useEffect(() => {
    check(listCity) && dispatch(ac.handlerAddress({ type: 'city', id: 'VIE' }))
  }, [dispatch, listCity])

  const methods: SelectHospital = {
    listHospital: data?.listHospital,
    listCity
  }

  return <SelectHospitalCustom {...methods} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await SelectHospitalCtl()
  return {
    props: { data }
  }
}

ChonBenhVienPage.Layout = DefaultLayout
export default ChonBenhVienPage
