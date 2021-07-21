/* eslint-disable @next/next/no-img-element */
import { Col, Row } from 'antd'
import { chunk } from 'lodash'
import React from 'react'
import { ItemChecked } from './interface.footer'
import style from './styles.module.less'

interface Props {
  logoChecked?: Array<ItemChecked>
}

export const ImageFooter = ({ logoChecked }: Props) => {
  const Chunk = chunk(logoChecked, 2)
  return (
    <React.Fragment>
      {Chunk.map((info, index) => {
        return (
          <Row key={index} className={style.rowImg}>
            {info.map(
              (
                itemChunk: {
                  link: string | undefined
                  imgLogo: string | undefined
                },
                i: number
              ) => (
                <Col key={i}>
                  <a href={itemChunk.link}>
                    <img
                      src={itemChunk.imgLogo}
                      className={style.img}
                      alt='imgLogo'
                    />
                  </a>
                </Col>
              )
            )}
          </Row>
        )
      })}
    </React.Fragment>
  )
}
