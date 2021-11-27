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

  console.log('listCity :>> ', listCity)
  useEffect(() => {
    !check(listCity) && dispatch(ac.handlerAddress({ type: 'city', id: 'VIE' }))
  }, [])

  return (
    <DefaultLayout>
      <SelectHospitalCustom
        listHospital={data?.listHospital}
        listCity={listCity}
      />
    </DefaultLayout>
  )
}

export default ChonBenhVienPage

export const getServerSideProps = async () => {
  const data = await SelectHospitalCtl()
  return { props: { data } }
}
