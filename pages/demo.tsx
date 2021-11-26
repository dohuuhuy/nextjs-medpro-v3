import Container from '@componentsTest/Container'
import DefaultLayout from '@templates/Default'
import { fetcher } from '@utils/func'
import React from 'react'
import useSWR from 'swr'

const Demo = () => {
  const url =
    'https://resource-testing.medpro.com.vn/static/upload/hospitals/medpro/content.json#'
  const { data, error } = useSWR(url, fetcher)

  console.log('error :>> ', error)

  console.log('data :>> ', data)
  return (
    <DefaultLayout>
      <Container>
        <p>hello cungw </p>
      </Container>
    </DefaultLayout>
  )
}

export default Demo
