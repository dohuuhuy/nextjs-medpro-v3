import { BellFilled, SearchOutlined } from '@ant-design/icons'
import { Col, Input, Modal, Row, Select } from 'antd'
import { filter } from 'lodash'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Container from '../Container'
import { checkData, DataFailure } from '../DataFailure'
import styles from './styles.module.less'

const { Option } = Select

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

export const SelectHospitalCustom = ({
  listHospital,
  listCity
}: SelectHospital) => {
  const router = useRouter()
  const [listHospitals, setlistHospitals] = useState<ListHospital[]>([])
  const [activeList, setactiveList] = useState(true)

  useEffect(() => {
    activeList && setlistHospitals(listHospital)
  })

  function onChange(code: any) {
    setactiveList(false)
    if (code === 'huyi') {
      setlistHospitals(listHospital)
    } else {
      const findHospital: any = filter(listHospital, { city: { code } })
      setlistHospitals(findHospital)
    }
  }

  function onSearchHospital(e: any) {
    setactiveList(false)
    const { value } = e.target
    const findHospital = listHospital.filter(
      ({ name }) => name.toUpperCase().indexOf(value.toUpperCase()) >= 0
    )
    setlistHospitals(findHospital)
  }

  function redirect(e: ListHospital) {
    if (checkData(e?.message)) {
      e?.partnerId
        ? router.push(`${e?.partnerId}/thong-tin-dat-kham`)
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
                defaultValue='huyi'
                className={styles.inputSelect}
                showSearch={true}
                style={{ width: '100%' }}
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

                {listCity?.map((e) => {
                  return (
                    <Option value={e?.code} key={e?.id}>
                      {e?.name}
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
              <DataFailure desc='Không tìm thấy !' />
            ) : (
              listHospitals?.map((e) => {
                const imageErrorSrc = '/images/logo.png'
                const urlImage = e?.image || imageErrorSrc

                const onError = (e: any) => {
                  e.target.src = imageErrorSrc
                }

                return (
                  <li key={e.id} onClick={() => redirect(e)}>
                    <div className={styles.cardHospital}>
                      <figure className={styles.cardView}>
                        <img src={urlImage} alt='icon' onError={onError} />
                      </figure>
                      <div className={styles.cardBody}>
                        <p className={styles.nameHospital}>{e?.name}</p>
                        <p className={styles.address}>{e?.address}</p>
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
