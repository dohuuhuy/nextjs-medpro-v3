import { HuongDanCustom } from '@componentsTest/HuongDanCustom'
import { currentEnv } from '@config/envs/env'
import DefaultLayout from '@templates/Default'
import { fetcherGuide } from '@utils/func'
import React from 'react'
import useSWR from 'swr'

const HuongDan = () => {
  React.useEffect(() => {}, [])
  const url = currentEnv.BO_API + '/quy-trinh/get-by-partner'
  const { data, error } = useSWR(url, fetcherGuide)

  return error ? null : <HuongDanCustom data={data} />
}

HuongDan.Layout = DefaultLayout

export default HuongDan
