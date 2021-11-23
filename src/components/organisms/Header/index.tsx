import { SetParnerId } from '@actionStore/rootAction'
import HeaderCustom from '@componentsTest/HeaderCustom'
import { AppState } from '@store/interface'
import { urlHeader, urlListPartners } from '@utils/contants'
import { fetcher } from '@utils/func'
import { findPartnerId } from '@utils/run_local_hospitals'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useSWR from 'swr'

const HeaderPublic = () => {
  const { data: listPartners } = useSWR(urlListPartners, fetcher)
  const dispatch = useDispatch()
  const total = useSelector((state: AppState) => state.total)

  React.useEffect(() => {
    const partnerId = findPartnerId({
      listPartners,
      host: window.location.hostname
    })
    !total.partnerId && dispatch(SetParnerId(partnerId))
  }, [total.partnerId])

  const { data: menu, error: errMenu } = useSWR(urlHeader, fetcher)

  if (errMenu) return null
  return <HeaderCustom dataHeader={menu} />
}

export default HeaderPublic
