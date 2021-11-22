import HeaderCustom from '@componentsTest/HeaderCustom'
import { urlHeader, urlListPartners } from '@utils/contants'
import { fetcher } from '@utils/func'
import { findPartnerId } from '@utils/run_local_hospitals'
import React from 'react'
import useSWR from 'swr'

const HeaderPublic = () => {
  const { data: listPartners } = useSWR(urlListPartners, fetcher)

  const partnerId = findPartnerId({
    listPartners,
    host: window.location.hostname
  })

  console.log('partnerId :>> ', partnerId)

  const { data: menu, error: errMenu } = useSWR(urlHeader, fetcher)

  if (errMenu) return null
  return <HeaderCustom dataHeader={menu} />
}

export default HeaderPublic
