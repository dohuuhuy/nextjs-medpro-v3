import { Col, Row } from 'antd'
import React from 'react'
import Container from '../Container'
import styles from './styles.module.less'

export interface HistorFeeIF {
  data: any[]
}

export const LichSuThanhToanVienPhiCustom = (props: HistorFeeIF) => {
  const [state, setstate] = React.useState({
    list: props.data
  })

  React.useEffect(() => {
    setstate((prev) => ({ ...prev, list: props.data }))
  }, [props.data])

  return (
    <Container tag={'section'} className={styles.conHistorFee}>
      <Row className={styles.rowHistorFee}>
        <Col span={24} className={styles.colTitle}>
          <h2 className={styles.title}>
            <span>Lịch Sử Thanh Toán Viện Phí</span>
          </h2>
        </Col>
        <Col xl={24} className={styles.colHistorFee}>
          <ul className={styles.listHistoryFee}>
            {state.list?.map((item, i) => {
              return (
                <li key={i}>
                  <div className={styles.content_history}>
                    <div>{i + 1}</div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.content
                      }}
                    />
                  </div>
                </li>
              )
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}
