/* eslint-disable @next/next/no-img-element */
import { Icon } from '@componentsTest/Icon'
import { Col, Input, Modal, Rate, Row, Select } from 'antd'
import { filter, uniqueId } from 'lodash'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { checkData } from '../DataFailure'
import Container from './../Container'
import styles from './styles.module.less'

const { Option } = Select

export const SelectHospitalCustom = (props: SelectHospital) => {
  const router = useRouter()
  const [listHospitals, setlistHospitals] = useState<ListHospital[]>(
    props?.listHospital
  )
  const [nameCiti, setnameCiti] = useState('Chọn Tỉnh/thành')
  const [activeList, setactiveList] = useState(false)
  const [keySearch, setkeySearch] = useState('')

  const onChangeCity = (code: any, v: any) => {
    setactiveList(true)
    if (code === 'huyi') {
      setlistHospitals(listHospitals)
    } else {
      setnameCiti(v.children)
      const findHospital: any = filter(props?.listHospital, { city: { code } })
      setlistHospitals(findHospital)
    }
  }

  const onSearchKey = (e: any) => {
    setactiveList(true)
    const { value } = e.target
    setkeySearch(value)
    const findHospital = props?.listHospital.filter(
      ({ name }) => name.toUpperCase().indexOf(value.toUpperCase()) >= 0
    )
    setlistHospitals(findHospital)
  }

  return (
    <Container fluid={true} className={styles.container}>
      <Row className={styles.rowSelect}>
        <Col span='24' className={styles.colGroupInputSelect}>
          <Container className={styles.conGroup}>
            <h2>ĐẶT KHÁM BỆNH VIỆN</h2>
            <ul className={styles.GroupInputSelect}>
              <li>
                <Input
                  size='large'
                  value={keySearch}
                  autoFocus={true}
                  onChange={onSearchKey}
                  className={styles.inputSearch}
                  placeholder='Tìm nhanh bệnh viện'
                  prefix={<Icon name='timkiem' fill='white' />}
                  allowClear
                />
              </li>
              <li>
                <Select
                  value={nameCiti}
                  className={styles.inputSelect}
                  showSearch
                  style={{ width: '100%' }}
                  optionFilterProp='children'
                  onChange={onChangeCity}
                  filterOption={(input, option: any) =>
                    option?.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
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
          </Container>
        </Col>
        <Col span='24' className={styles.colListCard}>
          <Container className={styles.conList}>
            <ul className={styles.listCard}>
              {handlerMap(
                activeList ? listHospitals : props?.listHospital,
                router
              )}
            </ul>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

const handlerMap = (arr: ListHospital[], router: any) => {
  if (arr.length < 1) return <p>Không có bệnh viện </p>
  return arr?.map((e) => {
    const rate = e.deliveryMessage ? (
      <p className={styles.status}>
        <i>{e.deliveryMessage}</i>
      </p>
    ) : (
      <Rate className={styles.rate} disabled={true} value={3} />
    )

    const imgError = require('./images/logo.svg')
    const size = 50
    const propsImage = {
      src: e?.image || imgError,
      width: size,
      height: size,
      onError: (e: any) => (e.target.src = imgError)
    }

    return (
      <li key={uniqueId()} onClick={redirect(e, router)}>
        <div className={styles.cardHospital}>
          <figure className={styles.cardView}>
            <img alt='' {...propsImage} />
          </figure>
          <div className={styles.cardBody}>
            <p className={styles.nameHospital}>{e?.name}</p>
            <p className={styles.address}>{e?.address}</p>
            {rate}
          </div>
          <div className={styles.favorite}>
            <Icon name='yeuthich' fill='#CBD2D9' size='15' />
          </div>
        </div>
      </li>
    )
  })
}

const redirect = (e: ListHospital, router: any) => () => {
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
      icon: null,

      title: (
        <>
          <Icon name='thongbao' fill='red' />
          thông báo
        </>
      ),
      content: e?.message,
      okButtonProps: {
        disabled: true,
        style: { display: 'none' }
      }
    })
  }
}

export interface SelectHospital {
  listHospital: ListHospital[]
  listCity: ListCity[]
}

export interface ListCity {
  id: string
  name: string
  code: string
}

export interface ListHospital {
  id: string
  name: string
  address: string
  image: string
  message: string
  partnerId: string
  deliveryStatus: number
  deliveryMessage: string
}
