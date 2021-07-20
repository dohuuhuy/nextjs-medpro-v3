import React from 'react'
import Styles from './style.module.less'
import { BannerHome } from './BannerHome.interface'

interface bannerHomeCustom {
  dataBannerHome: BannerHome
}
const BannerHomeCustom = ({ dataBannerHome }: bannerHomeCustom) => {
  if (!dataBannerHome) return <em>Lỗi data input</em>
  return (
    <div
      className={Styles.container}
      style={{
        backgroundImage: `url(${dataBannerHome[0].linkImage})`
      }}
    >
      <div className={Styles.content}>
        <p>
          <strong>CHỌN DỊCH VỤ</strong>
        </p>
        <div>
          <a href='' className={Styles.boxService}>
            <img
              src={'https://api-v2.medpro.com.vn:5000/st/feature/dv1.svg'}
              alt=''
            />
            <span>Đặt khám</span>
          </a>
        </div>
      </div>
    </div>
  )
}
export default BannerHomeCustom
