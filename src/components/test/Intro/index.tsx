import React from 'react'
import Styles from './style.module.less'
import { bannerHome } from '@components/organisms/BannerHomeApp'

interface bannerHomeCustom {
  dataBannerHome: bannerHome
}
const BannerHomeCustom = ({ dataBannerHome }: bannerHomeCustom) => {
  console.log('dataBannerHome :>> ', dataBannerHome)
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <p>
          <strong>CHỌN DỊCH VỤ</strong>
        </p>
        <div>
          <a href="" className={Styles.boxService}>
            <img src={dataBannerHome.linkImage} />
            <span>Đặt khám</span>
          </a>
        </div>
      </div>
    </div>
  )
}
export default BannerHomeCustom

// import React, { Component } from "react"
// import Styles from './style.module.less'
// import 'antd/dist/antd.css'
// import { Row, Col, Button } from 'antd'

// export default class Intro extends Component {
//   render() {
//     return (
//       <div className={Styles.container}>
//         <div className={Styles.content}>
//           <p>
//             <strong>CHỌN DỊCH VỤ</strong>
//           </p>
//           <div>
//             <a href="" className={Styles.boxService}>
//               <img
//                 src={'https://api-v2.medpro.com.vn:5000/st/feature/dv1.svg'}
//                 alt
//               />
//               <span>Đặt khám</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
