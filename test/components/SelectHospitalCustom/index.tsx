import { SearchOutlined } from '@ant-design/icons'
import { Col, Input, Row, Select, Modal } from 'antd'
import { filter } from 'lodash'
import React, { useEffect, useState } from 'react'
import Container from './../Container'
import { checkData, DataFailure } from './../DataFailure'
import styles from './style.module.less'
import { BellFilled } from '@ant-design/icons'
import cx from 'classnames'

const { Option } = Select

export interface Props {
  listHospital: any[]
  listCity: any[]
}

const SelectHospitalCustom = ({ listHospital, listCity }: Props) => {
  const [listHospitals, setlistHospitals] = useState<any[]>([])
  const [Notification, setNotification] = useState(false)

  useEffect(() => {
    setlistHospitals(listHospital)
  }, [])

  function onChange(code: any) {
    if (code === 'huyi') {
      setlistHospitals(listHospital)
    } else {
      const findHospital = filter(listHospital, { city: { code } })
      setlistHospitals(findHospital)
    }
  }

  function onSearchHospital(e: any) {
    const { value } = e.target
    const findHospital = listHospital.filter(
      ({ name }) => name.toUpperCase().indexOf(value.toUpperCase()) >= 0
    )
    setlistHospitals(findHospital)
  }
  function handleNotification() {
    Modal.info({
      className: styles.Modal,
      icon: <BellFilled />,
      title: 'Thông báo',
      content: "Bệnh viện sẽ sẵn sàng nhận đặt khám qua Medpro trong thời gian tới.",
    })
  }

  return (
    <Container className={styles.containerSelectHospitalCustom}>
      <Row className={styles.rowSelect}>
        <Col xl={24} xs={24} className={styles.colGroupInputSelect}>
          <ul className={styles.GroupInputSelect}>
            <li>
              <Input
                size='large'
                autoFocus={true}
                onChange={onSearchHospital}
                className={styles.inputSearch}
                placeholder='Tìm nhanh bệnh viện'
                prefix={<SearchOutlined />}
              />
            </li>
            <li>
              <Select
                className={styles.inputSelect}
                showSearch={true}
                style={{ width: '100%' }}
                placeholder='Chọn tỉnh thành'
                optionFilterProp='children'
                onChange={onChange}
                filterOption={(input, option) =>
                  option?.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value='huyi' key={'Chọn tỉnh thành'}>
                  Chọn tỉnh thành
                </Option>

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
        <Col xl={24} xs={24} className={styles.colListCard}>
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
                      <div className={styles.cardHospital} onClick={handleNotification}>
                        <figure className={styles.cardView}>
                          <img
                            src={urlImage}
                            alt='icon'
                            onError={(e: any) => {
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
