/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import { CaretRightOutlined } from '@ant-design/icons'
import { Col, Collapse, Row, Space } from 'antd'
import { find, isArray } from 'lodash'
import React, { useEffect, useState } from 'react'
import Container from '../../../Container'
import style from './styles.module.less'
const { Panel } = Collapse

export const ThacMacContent = ({ content }: any) => {
  const { checkDataInput, DataFailure } = require('./../../../DataFailure')
  if (checkDataInput(content)) {
    return <DataFailure description={'Lỗi không có data thắc mắc'} />
  }

  const [Faq, setFaq] = useState([])

  useEffect(() => {
    isArray(content) && handlerSetFaqbyTab(1)
  }, [])

  const handlerSetFaqbyTab = (id = 1) => {
    const item = find(content, { id })
    setFaq(item?.faq)
  }

  return (
    <Container className={style.ThacMacContent}>
      <Row className={style.rowThacMac}>
        <Col xl={7} className={style.colTab}>
          <h2 className={style.titleTab}>Giải đáp nhanh câu hỏi</h2>
          <ul className={style.listTab}>
            {isArray(content) &&
              content?.map(({ id, name }: any) => {
                return (
                  <li key={id} onClick={() => handlerSetFaqbyTab(id)}>
                    <CaretRightOutlined /> {name}
                  </li>
                )
              })}
          </ul>
        </Col>
        <Col xl={17} className={style.colContentMenu}>
          <Space direction='vertical' style={{ width: '100%' }}>
            {Faq?.map(({ id, question, answer }) => {
              return (
                <Collapse key={id}>
                  <Panel header={question} key='1'>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: answer
                      }}
                    />
                  </Panel>
                </Collapse>
              )
            })}
          </Space>
        </Col>
      </Row>
    </Container>
  )
}
