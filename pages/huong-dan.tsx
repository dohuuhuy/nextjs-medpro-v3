import { HuongDanCustom } from '@componentsTest/HuongDanCustom'
import { currentEnv } from '@config/envs/env'
import DefaultLayout from '@templates/Default'
import { fetcherGuide } from '@utils/func'
import React from 'react'
import useSWR from 'swr'

const HuongDan = () => {
  const url = currentEnv.BO_API + '/quy-trinh/get-by-partner'
  const { data, error } = useSWR(url, fetcherGuide)

  if (error) return null
  return (
    <DefaultLayout>
      <HuongDanCustom data={data} />
    </DefaultLayout>
  )
}

export default HuongDan
