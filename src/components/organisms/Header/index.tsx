import HeaderCustom from '@componentsTest/HeaderCustom'
import { currentEnv } from '@config/envs/env'
import { AppState } from '@store/interface'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

const HeaderPublic = () => {
  const hos = useSelector((state: AppState) => state.hospital)
  const total = useSelector((state: AppState) => state.total)
  const user = useSelector((state: AppState) => state.user)
  const router = useRouter()

  const url = `${currentEnv.login}/url=${total.windows.origin}&partnerId=${total.partnerId}&bookingFlow=${router.pathname}`

  if (!hos.information.header) return null
  return (
    <>
      <HeaderCustom
        dataHeader={hos.information.header}
        url={url}
        author={user.userInfo}
      />
    </>
  )
}

export default HeaderPublic
