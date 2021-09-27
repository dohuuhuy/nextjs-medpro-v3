import { Col, Input, Modal, Rate, Row, Select } from 'antd'
import { filter, uniqueId } from 'lodash'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { checkData } from '../DataFailure'
import Container from './../Container'
import { Icon } from './../Icon'
import styles from './styles.module.less'

const { Option } = Select

export const SelectHospitalCustom = (props: SelectHospital) => {
  const router = useRouter()
  const [listHospitals, setlistHospitals] = useState<ListHospital[]>([])
  const [activeList, setactiveList] = useState(false)

  function onChange(code: any) {
    setactiveList(true)
    if (code === 'huyi') {
      setlistHospitals(props?.listHospital)
    } else {
      const findHospital: any = filter(props?.listHospital, { city: { code } })
      setlistHospitals(findHospital)
    }
  }

  function onSearchHospital(e: any) {
    setactiveList(true)
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

  const handlerMap = (arr: ListHospital[]) => {
    return arr?.map((e) => {
      const imageErrorSrc = '/images/logo.png'
      const urlImage = e?.image || imageErrorSrc

      const rate =
        Number(e.deliveryStatus) === 1 ? (
          <p className={styles.status}>Sắp ra mắt</p>
        ) : (
          <Rate className={styles.rate} disabled={true} value={3} />
        )

      return (
        <li key={uniqueId()} onClick={() => redirect(e)}>
          <div className={styles.cardHospital}>
            <figure className={styles.cardView}>
              <Image src={urlImage} alt='' width='50' height='50' />
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
                  autoFocus={true}
                  onChange={onSearchHospital}
                  className={styles.inputSearch}
                  placeholder='Tìm nhanh bệnh viện'
                  prefix={<Icon name='timkiem' fill='white' />}
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
                    option?.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
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
          </Container>
        </Col>
        <Col span='24' className={styles.colListCard}>
          <Container className={styles.conList}>
            <ul className={styles.listCard}>
              {handlerMap(activeList ? listHospitals : props?.listHospital)}
            </ul>
          </Container>
        </Col>
      </Row>
    </Container>
  )
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
}
