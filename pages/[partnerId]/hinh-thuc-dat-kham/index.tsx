import { SelectBookingTypeCustom } from '@componentsTest/SelectBookingTypeCustom'
import * as ac from '@actionStore/rootAction'
import { AppState } from '@store/interface'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const HinhThucDatKham = () => {
  const router = useRouter()
  const { partnerId } = router.query

  const hos = useSelector((state: AppState) => state.hospitalReducer)

  console.log('listFeature :>> ', hos.listFeatureByPartner)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      ac.FeatureRequest({
        partnerId: partnerId,
        typeReser: 'parasitic'
      })
    )
  }, [])

  return <SelectBookingTypeCustom />
}

HinhThucDatKham.Layout = DefaultLayout
export default HinhThucDatKham
