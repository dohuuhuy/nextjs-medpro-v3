import { SearchOutlined } from '@ant-design/icons'
import { Col, Input, Row, Select } from 'antd'
import { filter } from 'lodash'
import React, { useState } from 'react'
import Container from './../Container'
import { checkData, DataFailure } from './../DataFailure'
import styles from './style.module.less'

const { Option } = Select

export interface Props {
  listHospital: Array<any>
  listCity: Array<any>
}

const SelectHospitalCustom = ({ listHospital, listCity }: Props) => {
  const [listHospitals, setlistHospitals] = useState<any[]>([])

  function onChange(code: any) {
    const findHospital = filter(listHospital, { city: { code: code } })
    setlistHospitals(findHospital)
  }

  function onSearchHospital(e: any) {
    const { value } = e.target
    const findHospital = listHospital.filter(
      ({ name }) => name.toUpperCase().indexOf(value.toUpperCase()) >= 0
    )
    setlistHospitals(findHospital)
  }

  return (
    <Container className={styles.containerSelectHospitalCustom}>
      <Row className={styles.rowSelect}>
        <Col xl={24} className={styles.colGroupInputSelect}>
          <ul className={styles.GroupInputSelect}>
            <li>
              <Input
                size='large'
                autoFocus
                onChange={onSearchHospital}
                className={styles.inputSearch}
                placeholder='Tìm nhanh bệnh viện'
                prefix={<SearchOutlined />}
              />
            </li>
            <li>
              <Select
                className={styles.inputSelect}
                // showSearch
                style={{ width: '100%' }}
                placeholder='Chọn tỉnh thành'
                optionFilterProp='children'
                onChange={onChange}
                filterOption={(input, option) =>
                  option?.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {listCity.map(({ id, name, code }) => {
                  return (
                    <Option value={code} key={id}>
                      {name}
                    </Option>
                  )
                })}
              </Select>
            </li>
          </ul>
        </Col>
        <Col xl={24} className={styles.colListCard}>
          <ul className={styles.listCard}>
            {checkData(listHospitals) ? (
              <DataFailure description='Không tìm thấy !' />
            ) : (
              listHospitals?.map(
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
              )
            )}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default SelectHospitalCustom
