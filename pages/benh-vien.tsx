import * as ac from '@actionStore'
import { SelectHospitalCustom } from '@componentsTest/HospitalCustom'
import { AppState } from '@src/store/interface'
import DefaultLayout from '@templates/Default'
import { check } from '@utils/checkValue'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SelectHospitalCtl } from 'src/containers/SelectHosital'

const ChonBenhVienPage = ({ data }: any) => {
  const dispatch = useDispatch()

  const listCity = useSelector((state: AppState) => state.total.listCity)

  //  fetching data from client
  // component
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

// cú pháp fetching data form server of nextjs ,

export const getServerSideProps = async () => {
  const data = await SelectHospitalCtl()
  return { props: { data } }
}
