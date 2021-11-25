/* eslint-disable @next/next/no-img-element */
import Container from '@componentsTest/Container'
import { Col, Row, Timeline } from 'antd'
import { uniqueId } from 'lodash'
import Image from 'next/image'

import React from 'react'
import styles from './styles.module.less'

export const HuongDanCustom = ({ data }: any) => {
  return (
    <Container className={styles.conHuongDan}>
      <Row>
        <Col xl={24} className={styles.colHuongDan}>
          <Timeline>
            {data?.map((v: Item) => {
              return (
                <Timeline.Item key={uniqueId()}>
                  <p className={styles.stepName}> {v.stepName}</p>
                  <p className={styles.name}> {v.name}</p>
                  <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: v.content }}
                  />
                  <figure>
                    <Image
                      loader={myLoader}
                      src={v.imageUrl}
                      alt=''
                      loading='eager'
                      priority
                      width={527}
                      height={915}
                      objectFit='cover'
                    />
                  </figure>
                </Timeline.Item>
              )
            })}
          </Timeline>
        </Col>
      </Row>
    </Container>
  )
}

const myLoader = ({ src, width, quality }: any): string => {
  return `${src}?w=${width}&q=${quality || 75}`
}

interface Item {
  content: string
  createdAt: string
  id: string
  imageUrl: string
  isDeleted: boolean
  name: string
  partnerId: string
  sortOrder: number
  stepName: string
  type: string
  updatedAt: string
  _id: string
}
