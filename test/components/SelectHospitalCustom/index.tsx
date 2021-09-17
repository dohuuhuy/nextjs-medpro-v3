import Container from '@componentsTest/Container'
import React, { useState, useEffect } from 'react'
import { Col, Input, Modal, Row, Select, Rate } from 'antd'
import { filter, uniqueId } from 'lodash'
import { useRouter } from 'next/router'
import { DataFailure, checkData } from '../DataFailure'
import styles from './styles.module.less'
import { BellFilled, SearchOutlined, HeartOutlined } from '@ant-design/icons'
import Image from 'next/image'

const { Option } = Select

export const SelectHospitalCustom = (props: SelectHospital) => {
  const router = useRouter()
  const [listHospitals, setlistHospitals] = useState<ListHospital[]>([])
  const [activeList, setactiveList] = useState(true)

  useEffect(() => {
    activeList && setlistHospitals(props?.listHospital)
  })

  function onChange(code: any) {
    setactiveList(false)
    if (code === 'huyi') {
      setlistHospitals(props?.listHospital)
    } else {
      const findHospital: any = filter(props?.listHospital, { city: { code } })
      setlistHospitals(findHospital)
    }
  }

  function onSearchHospital(e: any) {
    setactiveList(false)
    const { value } = e.target
    const findHospital = props?.listHospital.filter(
      ({ name }) => name.toUpperCase().indexOf(value.toUpperCase()) >= 0
    )
    setlistHospitals(findHospital)
  }

  function redirect(e: ListHospital) {
    if (checkData(e?.message)) {
      e?.partnerId
        ? router.push(`${e?.partnerId}/hinh-thuc-dat-kham`)
        : alert('không có partnerId')
    } else {
      Modal.info({
        closable: true,
        width: 'unset',
        centered: true,
        className: styles.Modal,
        icon: <BellFilled />,
        title: 'Thông báo',
        content: e?.message,
        okButtonProps: {
          disabled: true,
          style: { display: 'none' }
        }
      })
    }
  }
  return (
    <Container className={styles.containerSelectHospitalCustom}>
      <Row className={styles.rowSelect}>
        <Col span='24' className={styles.colGroupInputSelect}>
          <h2>ĐẶT KHÁM BỆNH VIỆN</h2>
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
                defaultValue='huyi'
                className={styles.inputSelect}
                showSearch={true}
                style={{ width: '100%' }}
                optionFilterProp='children'
                onChange={onChange}
                filterOption={(input, option: any) =>
                  option?.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value='huyi' key={'Chọn tỉnh thành'}>
                  Chọn tỉnh thành
                </Option>

                {props?.listCity?.map((e) => {
                  return (
                    <Option value={e?.code} key={uniqueId()}>
                      {e?.name}
                    </Option>
                  )
                })}
              </Select>
            </li>
          </ul>
        </Col>
        <Col span='24' className={styles.colListCard}>
          <ul className={styles.listCard}>
            {checkData(listHospitals) ? (
              <DataFailure desc='Không tìm thấy !' />
            ) : (
              listHospitals?.map((e) => {
                const imageErrorSrc = '/images/logo.png'
                const urlImage = e?.image || imageErrorSrc

                const onError = (e: any) => {
                  e.target.src = imageErrorSrc
                }

                return (
                  <li key={uniqueId()} onClick={() => redirect(e)}>
                    <div className={styles.cardHospital}>
                      <figure className={styles.cardView}>
                        <Image src={urlImage} alt='icon' onError={onError} width="50" height="50" />
                      </figure>
                      <div className={styles.cardBody}>
                        <p className={styles.nameHospital}>{e?.name}</p>
                        <p className={styles.address}>{e?.address}</p>
                        <Rate className={styles.rate} disabled value={3} />
                      </div>
                      <div className={styles.favorite}>
                        <HeartOutlined />
                      </div>
                    </div>

                  </li>
                )
              })
            )}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export interface SelectHospital {
  listHospital: ListHospital[]
  listCity: ListCity[]
}

interface ListCity {
  id: string
  name: string
  code: string
}

interface ListHospital {
  id: string
  name: string
  address: string
  image: string
  message: string
  partnerId: string
}
