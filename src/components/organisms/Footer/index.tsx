import FooterCustom from '@componentsTest/FooterCustom'
import { urlFooter } from '@utils/contants'
import { fetcher } from '@utils/func'
import React from 'react'
import useSWR from 'swr'

const FooterPublic = () => {
  const { data, error } = useSWR(urlFooter, fetcher)

  if (error) return null
  return <FooterCustom dataFooter={data} />
}

export default FooterPublic
