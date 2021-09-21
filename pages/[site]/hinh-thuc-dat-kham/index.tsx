import * as ac from '@actionStore/rootAction'
import { BookingType } from '@componentsTest/BookingType'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const HinhThucDatKham = () => {
  const router = useRouter()
  const { site } = router.query

  // const hos = useSelector((state: AppState) => state.hospital)
  const dispatch = useDispatch()
  useEffect(() => {
    const objFea = {
      partnerId: site,
      typeReser: 'parasitic'
    }
    dispatch(ac.FeatureRequest(objFea))
  }, [dispatch, site])

  // const methods: any = {
  //   typeBooking: hos?.listFeatureByPartner
  // }
  return <BookingType />
}

HinhThucDatKham.Layout = DefaultLayout
export default HinhThucDatKham
