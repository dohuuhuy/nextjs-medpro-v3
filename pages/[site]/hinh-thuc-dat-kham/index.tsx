import { BookingType } from '@componentsTest/BookingType'
import { find } from 'lodash'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React from 'react'
import { SelectHospitalCtl } from 'src/containers/SelectHosital'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const HinhThucDatKham = (props: any) => {
  const router = useRouter()
  const { site } = router.query
  const listHospital = props.data.listHospital
  const getInfo = find(listHospital, { partnerId: site })

  const methods: any = {
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
