import { getHeader, getListPartners } from '@actionStore/rootAction'
import HeaderCustom from '@componentsTest/HeaderCustom'
import { AppState } from '@store/interface'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const HeaderPublic = () => {
  const dispatch = useDispatch()
  const total = useSelector((state: AppState) => state.total)
  const hos = useSelector((state: AppState) => state.hospital)

  React.useEffect(() => {
    !total.partnerId && dispatch(getListPartners())
    !hos.information.header && dispatch(getHeader(total.partnerId))
  }, [])

  if (!hos.information.header) return null
  return <HeaderCustom dataHeader={hos.information.header} />
}

export default HeaderPublic
