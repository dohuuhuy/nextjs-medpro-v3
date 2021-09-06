import * as ac from '@actionStore/rootAction'
import SelectHospitalCustom from '@componentsTest/SelectHospitalCustom'
import { check } from '@utils/checkValue'
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SelectHospitalCtl } from 'src/containers/SelectHosital'
import { AppState } from 'store/interface'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ChonBenhVienPage = ({ data }: any) => {
  const dispatch = useDispatch()
  const listHospital = useSelector(
    (state: AppState) => state.hospitalReducer.listHospital
  )
  const listCity = useSelector(
    (state: AppState) => state.totalDataReducer.listCity
  )

  useEffect(() => {
    check(listCity) && dispatch(ac.getListCity())
    check(listHospital) && dispatch(ac.getListHospital())
  }, [])

  return (
    <SelectHospitalCustom
      listHospital={data.listHospital}
      listCity={listCity}
    />
  )
}

ChonBenhVienPage.Layout = DefaultLayout
export default ChonBenhVienPage

export const getServerSideProps = async (ctx: any) => {
  const data = await SelectHospitalCtl(ctx)

  return { props: { data } }
}
