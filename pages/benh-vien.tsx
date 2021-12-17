import * as ac from '@actionStore'
import { SelectHospitalCustom } from '@componentsTest/HospitalCustom'
import Loading from '@componentsTest/Loading'
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

const ChonBenhVienPage = ({ data, meta }: any) => {
  const router = useRouter()
  const findMeta = find(meta, { key: router.asPath.replace('/', '') })

  const dispatch = useDispatch()
  const listCity = useSelector((state: AppState) => state.total.listCity)

  useEffect(() => {
    check(listCity) && dispatch(ac.handlerAddress({ type: 'city', id: 'VIE' }))
  }, [])

  return (
    <>
      <SEOHead meta={findMeta} />
      {check(data?.listHospital) ? (
        <Loading component={true} text='Đang cập nhật danh sách bệnh viện' />
      ) : (
        <SelectHospitalCustom
          listHospital={data?.listHospital}
          listCity={listCity}
        />
      )}
    </>
  )
}

ChonBenhVienPage.layout = DefaultLayout

export default ChonBenhVienPage

export const getServerSideProps = async () => {
  const data = await SelectHospitalCtl()
  const meta = await fetcher(urlJson.urlSEOPage)
  return { props: { data, meta } }
}
