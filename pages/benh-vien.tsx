import * as ac from '@actionStore'
import { SelectHospitalCustom } from '@componentsTest/HospitalCustom'
import { SEOHead } from '@src/components/SEO/SEOHead/Index'
import { SelectHospitalCtl } from '@src/containers/SelectHosital'
import { AppState } from '@src/store/interface'
import { urlJson } from '@src/utils/contants'
import { fetcher } from '@src/utils/func'
import { check } from '@utils/checkValue'
import { find } from 'lodash'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const BenhVien = ({ data, meta }: any) => {
  const router = useRouter()
  const findMeta = find(meta, { key: router.asPath.replace('/', '') })

  const dispatch = useDispatch()
  const total = useSelector((state: AppState) => state.total)

  useEffect(() => {
    check(total.listCity) &&
      dispatch(ac.handlerAddress({ type: 'city', id: 'VIE' }))
  }, [])

  console.log('data?.listHospital :>> ', data?.listHospital)

  return (
    <>
      <SEOHead meta={findMeta} />

      <SelectHospitalCustom
        listHospital={data?.listHospital}
        listCity={total.listCity}
      />
    </>
  )
}

BenhVien.layout = DefaultLayout

export default BenhVien

export const getServerSideProps = async () => {
  const data = await SelectHospitalCtl()
  const meta = await fetcher(urlJson.urlSEOPage)
  return { props: { data, meta } }
}
