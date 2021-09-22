import * as ac from '@actionStore/rootAction'
import { BookingType } from '@componentsTest/BookingType'
import { AppState } from '@store/interface'
import { find } from 'lodash'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SelectHospitalCtl } from 'src/containers/SelectHosital'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const HinhThucDatKham = (props: any) => {
  const router = useRouter()
  const { site } = router.query
  const listHospital = props.data.listHospital
  const getInfo = find(listHospital, { partnerId: site })
  const hos = useSelector((state: AppState) => state.hospital)
  const dispatch = useDispatch()

  useEffect(() => {
    const objFea = {
      partnerId: site,
      typeReser: 'parasitic'
    }
    dispatch(ac.FeatureRequest(objFea))
  }, [dispatch, site])

  const methods: any = {
    typeBooking: hos?.listFeatureByPartner,
    getInfo
  }
  return <BookingType {...methods} />
}

HinhThucDatKham.Layout = DefaultLayout
export default HinhThucDatKham

export const getServerSideProps = async (ctx: any) => {
  const data = await SelectHospitalCtl(ctx)

  return { props: { data } }
}
