import Styles from './style.module.less'
import { Carousel } from 'antd'
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons'
import { DeloyHospital, DeloyHospitalItem } from './SliderHospital.interface'
import React from 'react'

interface DeloyHospitalCustom {
  dataDeloyHospital: DeloyHospital
}

export const DeloyHospitalCustom = ({
  dataDeloyHospital
}: DeloyHospitalCustom) => {
  if (!dataDeloyHospital) return <em>Lỗi data input</em>
  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        <p>Hệ thống bệnh viện triển khai</p>
      </div>
      <div className={Styles.boxSlider}>
        <LeftCircleFilled className={Styles.iconLeft} />
        <RightCircleFilled className={Styles.iconRight} />
        <Carousel
          autoplay
          dots={{ className: Styles.dots }}
          className={Styles.Carousel}
        >
          {dataDeloyHospital.map(
            ({ id, nameHospital, image, imgLink }: DeloyHospitalItem) => (
              <div>
                <div className={Styles.listCard}>
                  <div key={id} className={Styles.card}>
                    <span>
                      <img src={image} />
                    </span>
                    <div className={Styles.text}>
                      <a href={imgLink} target='_blank'>
                        {nameHospital}
                      </a>
                    </div>
                  </div>
                  {/* <div className={Styles.card}>
                <span>
                  <img className={Styles.image} src={item.Image} />
                </span>
                <div className={Styles.text}>
                  <p>
                    <a href={item.URL} target="_blank">
                      {item.Name}
                    </a>
                  </p>
                </div>
              </div>
              <div className={Styles.card}>
                <span>
                  <img className={Styles.image} src={item.Image} />
                </span>
                <div className={Styles.text}>
                  <p>
                    <a href={item.URL} target="_blank">
                      {item.Name}
                    </a>
                  </p>
                </div>
              </div> */}
                </div>
              </div>
            )
          )}
        </Carousel>
      </div>
    </div>
  )
}
