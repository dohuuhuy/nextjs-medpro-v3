import { Icon } from '../Icon'
import { Col, Input, Row, Select } from 'antd'
import { filter, uniqueId } from 'lodash'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Container from '../Container'
import { cardHospital } from './common/cardHospital'
import { validateCharUTF8 } from './common/func'
import { ListHospital, SelectHospital } from './common/interface'
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
    const findHospital = props?.listHospital.filter(({ name }) => {
      return (
        name.toUpperCase().indexOf(validateCharUTF8(value.toUpperCase())) >= 0
      )
    })
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
              {cardHospital(
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
