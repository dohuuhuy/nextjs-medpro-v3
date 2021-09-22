/* eslint-disable react-hooks/exhaustive-deps */
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons'
import { Col, Collapse, Row, Space } from 'antd'
import { find, isArray } from 'lodash'
import React, { useEffect, useMemo, useState } from 'react'
import Container from '../../../Container'
import { checkData, DataFailure } from '../../../DataFailure'
import styles from './styles.module.less'
const { Panel } = Collapse

export const ThacMacContent = ({ content }: any) => {
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

  const Click = (e: any) => {
    const id = e.target.dataset.id
    handlerSetFaqbyTab(Number(id))
  }

  const ContentFaq = useMemo(() => funcFaq(Faq?.faq), [Faq?.faq])

  if (checkData(content)) {
    return <DataFailure desc={'Lỗi không có data thắc mắc'} />
  }

  return (
    <Container className={styles.ThacMacContent}>
      <Row className={styles.rowThacMac}>
        <Col xl={7} lg={7} sm={24} xs={24} className={styles.colTab}>
          <h2 className={styles.titleTab}>Giải đáp nhanh câu hỏi</h2>
          <ul className={styles.listTab}>
            {content?.map((el: any) => {
              const caret =
                Faq.id === el?.id ? (
                  <CaretDownOutlined />
                ) : (
                  <CaretRightOutlined />
                )
              const active = Faq.id === el?.id ? styles.active : ''

              return (
                <li
                  key={el?.id}
                  data-id={el?.id}
                  onClick={Click}
                  className={active}
                >
                  {caret} {el?.name}
                </li>
              )
            })}
          </ul>
        </Col>
        <Col xl={17} lg={17} sm={24} xs={24} className={styles.colContentMenu}>
          {ContentFaq}
        </Col>
      </Row>
    </Container>
  )
}

const funcFaq = (Faq: any[]) => {
  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      {Faq?.map(({ id, question, answer }: any) => {
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
  )
}
