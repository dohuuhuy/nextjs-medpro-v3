import * as ac from '@actionStore/rootAction'
import { SelectHospitalCustom } from '@componentsTest/SelectHospitalCustom'
import DefaultLayout from '@templates/Default'
import { check } from '@utils/checkValue'
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

  return (
    <SelectHospitalCustom
      listHospital={data?.listHospital}
      listCity={listCity}
    />
  )
}

ChonBenhVienPage.Layout = DefaultLayout
export default ChonBenhVienPage

export const getServerSideProps = async () => {
  const data = await SelectHospitalCtl()
  return { props: { data } }
}
