import React from 'react'
import { Layout } from 'antd'
import styles from './styles.module.less'
import { PropsContent } from './content.interface'

const { Content } = Layout

const CustomContent = ({ dataContent }: PropsContent) => {
  const { key, content }: any = dataContent

  return (
    <Content className={styles.viewContent}>
      <div className={styles.formContent}>
        <div
          key={key}
          className={styles.viewItemContent}
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
      </div>
    </Content>
  )
}

export default CustomContent
