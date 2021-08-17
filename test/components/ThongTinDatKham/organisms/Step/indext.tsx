import { Steps } from 'antd'
import React from 'react'
import styles from './styles.module.less'
const { Step } = Steps

export const StepsCustom = (props: any) => {
  const { current, steps, optional } = props
  return (
    <Steps
      size='small'
      responsive={true}
      current={2}
      className={styles.steps}
      labelPlacement='horizontal'
    >
      {steps?.map((item: any, i: number) => {
        const { title, icon } = item
        return (
          <Step key={i} title={title} icon={icon} onClick={() => optional(i)} />
        )
      })}
    </Steps>
  )
}
