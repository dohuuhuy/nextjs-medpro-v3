import * as ac from '@actionStore'
import { SelectHospitalCustom } from '@componentsTest/HospitalCustom'
import { SelectHospitalCtl } from '@src/containers/SelectHosital'
import { AppState } from '@src/store/interface'
import { check } from '@utils/checkValue'
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ChonBenhVienPage = ({ data }: any) => {
  const dispatch = useDispatch()
  const listCity = useSelector((state: AppState) => state.total.listCity)

  useEffect(() => {
    !check(listCity) && dispatch(ac.handlerAddress({ type: 'city', id: 'VIE' }))
  }, [])

  return (
    <>
      <SelectHospitalCustom
        listHospital={data?.listHospital || []}
        listCity={listCity}
      />
    </>
  )
}

ChonBenhVienPage.layout = DefaultLayout

export default ChonBenhVienPage

export const getServerSideProps = async () => {
  const data = await SelectHospitalCtl()
  return { props: { data } }
}
