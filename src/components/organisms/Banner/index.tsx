import Banner from '@components/test/Banner'
import React from 'react'

const banner = {
    "title":"Quy trình đăng ký khám bệnh",
    "subTitle":"",
    "imageBackground":"https://medpro.com.vn/static/media/blur-02.1465d0ac.jpg"
}

const BannerLayout = () => {
  return <Banner dataBanner={banner} />
}

export default BannerLayout
