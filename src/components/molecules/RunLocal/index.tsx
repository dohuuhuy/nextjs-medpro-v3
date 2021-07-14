import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import React from 'react'
import SelectedHospital from './selectedHospital'
import styles from './styles.module.less'

const RunLocal = () => {
  return (
    <div className={styles.RunLocal}>
      <DefaultSeo {...SEO} />

      <div className={styles.text}>
        <p>Vui lòng chọn bệnh viện !</p>
      </div>

      <SelectedHospital />
    </div>
  )
}

export default RunLocal
