import { getFooter } from '@actionStore/rootAction'
import FooterCustom from '@componentsTest/FooterCustom'
import { AppState } from '@store/interface'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const FooterPublic = () => {
  const dispatch = useDispatch()
  const total = useSelector((state: AppState) => state.total)
  const hos = useSelector((state: AppState) => state.hospital)

  React.useEffect(() => {
    !hos.information.footer && dispatch(getFooter(total.partnerId))
  }, [])

  if (!hos.information.footer) return null
  return <FooterCustom dataFooter={hos.information.footer} />
}

export default FooterPublic
