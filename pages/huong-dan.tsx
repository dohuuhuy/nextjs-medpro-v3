import { HuongDanCustom } from '@componentsTest/HuongDanCustom'
import BannersPublic from '@src/components/organisms/BannersPublic'
import { currentEnv } from '@src/config/envs'
import { fetcherGuide } from '@utils/func'
import dynamic from 'next/dynamic'
import React from 'react'
import useSWR from 'swr'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const HuongDan = () => {
  const url = currentEnv.BO_API + '/quy-trinh/get-by-partner'
  const { data, error } = useSWR(url, fetcherGuide)

  return (
    <>
      <BannersPublic />
      {error ? null : <HuongDanCustom data={data} />}
    </>
  )
}
HuongDan.layout = DefaultLayout

export default HuongDan
