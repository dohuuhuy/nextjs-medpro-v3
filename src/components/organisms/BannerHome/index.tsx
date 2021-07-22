import BannerHomeCustom from '@components/test/BannersText/organisms/BannerHome'
import React from 'react'
import { useSelector } from 'react-redux'

const BannerhomeLayout = () => {
  const BannerHome = useSelector(
    (state: any) => state.hospital_Reducer.hospital_details.bannerHome
  )
  return <BannerHomeCustom dataBannerHome={BannerHome} />
}
export default BannerhomeLayout
