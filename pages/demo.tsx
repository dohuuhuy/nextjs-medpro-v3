import DefaultLayout from '@templates/Default'
import { fetcher } from '@utils/func'
import React from 'react'
import useSWR from 'swr'

const Demo = () => {
  const url =
    'https://resource-testing.medpro.com.vn/static/upload/hospitals/medpro/content.json'
  const { data, error } = useSWR(url, fetcher)

  console.log('error :>> ', error)

  console.log('data :>> ', data)
  return (
    <DefaultLayout>
      <p>hello cungw </p>
    </DefaultLayout>
  )
}

export default Demo
