import { HuongDanCustom } from '@componentsTest/HuongDanCustom'
import BannersPublic from '@src/components/organisms/BannersPublic'
import { currentEnv } from '@src/config/envs'
import { fetcherGuide } from '@utils/func'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const HuongDan = ({ data }: any) => {
  return (
    <>
      <BannersPublic />
      {!data ? null : <HuongDanCustom data={data} />}
    </>
  )
}
HuongDan.layout = DefaultLayout

export default HuongDan

export const getServerSideProps = async (_ctx: any) => {
  const url = currentEnv.BO_API + '/quy-trinh/get-by-partner'
  const data = await fetcherGuide(url)

  return { props: { data } }
}
