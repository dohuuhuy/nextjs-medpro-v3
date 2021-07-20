import styles from './style.module.scss'
import { Carousel } from 'antd'
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons'
import { DeloyHospital, DeloyHospitalItem } from './SliderHospital.interface'
import React from 'react'

interface DeloyHospitalCustom {
  dataDeloyHospital: DeloyHospital
}

const DeloyHospitalCustom = ({ dataDeloyHospital }: DeloyHospitalCustom) => {
  if (!dataDeloyHospital) return <em>Lỗi data input</em>
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Hệ thống bệnh viện triển khai</p>
      </div>
      <div className={styles.boxSlider}>
        <LeftCircleFilled className={styles.iconLeft} />
        <RightCircleFilled className={styles.iconRight} />
        <Carousel
          autoplay
          dots={{ className: styles.dots }}
          className={styles.Carousel}
        >
          {dataDeloyHospital.map(
            ({ id, nameHospital, image, imgLink }: DeloyHospitalItem) => (
              <div>
                <div className={styles.listCard}>
                  <div key={id} className={styles.card}>
                    <span>
                      <img src={image} />
                    </span>
                    <div className={styles.text}>
                      <a href={imgLink} target='_blank'>
                        {nameHospital}
                      </a>
                    </div>
                  </div>
                  {/* <div className={styles.card}>
                <span>
                  <img className={styles.image} src={item.Image} />
                </span>
                <div className={styles.text}>
                  <p>
                    <a href={item.URL} target="_blank">
                      {item.Name}
                    </a>
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <span>
                  <img className={styles.image} src={item.Image} />
                </span>
                <div className={styles.text}>
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
export default DeloyHospitalCustom
