/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons'
import { Col, Collapse, Row, Space } from 'antd'
import { find, isArray } from 'lodash'
import React, { useEffect, useState } from 'react'
import Container from '../../../Container'
import style from './styles.module.less'
const { Panel } = Collapse

export const ThacMacContent = ({ content }: any) => {
  console.log("Thắc mắc", content)
  const { checkDataInput, DataFailure } = require('./../../../DataFailure')
  if (checkDataInput(content)) {
    return <DataFailure description={'Lỗi không có data thắc mắc'} />
  }

  const [Faq, setFaq] = useState({
    id: 1,
    faq: []
  })

  useEffect(() => {
    isArray(content) && handlerSetFaqbyTab(1)
  }, [])

  const handlerSetFaqbyTab = (id: any) => {
    const item = find(content, { id })
    setFaq(item)
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
                  <li
                    key={id}
                    onClick={() => handlerSetFaqbyTab(id)}
                    className={Faq.id === id ? style.active : ''}
                  >
                    {Faq.id === id ? (
                      <CaretDownOutlined />
                    ) : (
                      <CaretRightOutlined />
                    )}
                    {name}
                  </li>
                )
              })}
          </ul>
        </Col>
        <Col xl={17} className={style.colContentMenu}>
          <Space direction='vertical' style={{ width: '100%' }}>
            {Faq.faq?.map(({ id, question, answer }: any) => {
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
