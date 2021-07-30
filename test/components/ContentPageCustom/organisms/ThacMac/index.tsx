import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons'
import { Col, Collapse, Row, Space } from 'antd'
import { find, isArray } from 'lodash'
import React, { useEffect, useState } from 'react'
import Container from '../../../Container'
import style from './styles.module.less'
const { Panel } = Collapse

export const ThacMacContent = ({ content }: any) => {
  const { checkData, DataFailure } = require('./../../../DataFailure')
  if (checkData(content)) {
    return <DataFailure description={'Lỗi không có data thắc mắc'} />
  }

  const [Faq, setFaq] = useState({
    id: 1,
    faq: []
  })

  useEffect(() => {
    if (isArray(content)) {
      handlerSetFaqbyTab(1)
    }
  }, [])

  const handlerSetFaqbyTab = (id: any) => {
    const item = find(content, { id })
    setFaq(item)
  }

  const x = (id: any) => handlerSetFaqbyTab(id)

  return (
    <Container className={style.ThacMacContent}>
      <Row className={style.rowThacMac}>
        <Col xl={7} lg={7} sm={24} xs={24} className={style.colTab}>
          <h2 className={style.titleTab}>Giải đáp nhanh câu hỏi</h2>
          <ul className={style.listTab}>
            {isArray(content) &&
              content?.map(({ id, name }: any) => {
                return (
                  <li
                    key={id}
                    onClick={() => x(id)}
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
        <Col xl={17} lg={17} sm={24} xs={24} className={style.colContentMenu}>
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
