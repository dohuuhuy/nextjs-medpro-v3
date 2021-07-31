import React from 'react'
import Container from './../Container'
import styles from './style.module.less'
import { Col, Row } from 'antd'

export interface Props {
  listHospital: Array<any>
}

const SelectHospitalCustom = ({ listHospital }: Props) => {
  return (
    <Container className={styles.containerSelectHospitalCustom}>
      <Row className={styles.rowSelect}>
        <Col xl={24} className={styles.colGroupInputSelect}>
          select
        </Col>
        <Col xl={24} className={styles.colListCard}>
          <ul className={styles.listCard}>
            {listHospital?.map(
              ({ name: nameHospital, address, image }, i: number) => {
                const imageErrorSrc = '/images/logo.png'
                const urlImage = image || imageErrorSrc
                return (
                  <li key={i}>
                    <div className={styles.cardHospital}>
                      <figure className={styles.cardView}>
                        <img
                          src={urlImage}
                          alt='icon'
                          onError={(e) => {
                            e.target.src = imageErrorSrc
                          }}
                        />
                      </figure>
                      <div className={styles.cardBody}>
                        <p className={styles.nameHospital}>{nameHospital}</p>
                        <p className={styles.address}>{address}</p>
                      </div>
                    </div>
                  </li>
                )
              }
            )}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default SelectHospitalCustom
