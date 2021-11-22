import HeaderCustom from '@componentsTest/HeaderCustom'
import { urlHeader } from '@utils/contants'
import { fetcher } from '@utils/func'
import React from 'react'
import useSWR from 'swr'

const HeaderPublic = () => {
  const { data, error } = useSWR(urlHeader, fetcher)

  if (error) return null
  return <HeaderCustom dataHeader={data} />
}

export default HeaderPublic
