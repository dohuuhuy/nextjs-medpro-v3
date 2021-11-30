import { HuongDanCustom } from '@componentsTest/HuongDanCustom'
import { currentEnv } from '@config/envs/env'
import { fetcherGuide } from '@utils/func'
import dynamic from 'next/dynamic'
import React from 'react'
import useSWR from 'swr'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const HuongDan = () => {
  const url = currentEnv.BO_API + '/quy-trinh/get-by-partner'
  const { data, error } = useSWR(url, fetcherGuide)

  if (error) return null
  return (
    <>
      <HuongDanCustom data={data} />
    </>
  )
}
HuongDan.layout = DefaultLayout

export default HuongDan
