import { setPartnerIdLocal } from '@actionStore/rootAction'
import { ArrowUpOutlined } from '@ant-design/icons'
import { _DEVELOPMENT, _TESTING } from '@config/envs/env'
import { AppState } from '@store/interface'
import { check } from '@utils/checkValue'
import { BackTop, Button, Modal, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.less'
const { Option } = Select

const SelectedHospital = () => {
  const dispatch = useDispatch()

  const [isModalVisible, setIsModalVisible] = useState(false)

  const { listPartners, partnerId } = useSelector(
    (state: AppState) => state.totalDataReducer
  )

  useEffect(() => {
    if (check(partnerId)) {
      dispatch(setPartnerIdLocal({ partnerId: 'medpro' }))
    }
  })

  const toggle = () => {
    setIsModalVisible(!isModalVisible)
  }

  function onChange(value: any) {
    dispatch(setPartnerIdLocal({ partnerId: value }))
    setIsModalVisible(false)
  }

  const filterOption = (input: string, option: any) => {
    if (option?.children) {
      return option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    return option?.children
  }

  return (
    <div>
      <BackTop>
        <div
          style={{
            height: 40,
            width: 40,
            lineHeight: '40px',
            borderRadius: 4,
            backgroundColor: '#1088e9',
            color: '#fff',
            textAlign: 'center',
            fontSize: 14
          }}
        >
          <ArrowUpOutlined />
        </div>
      </BackTop>

      {_DEVELOPMENT || _TESTING ? (
        <Button
          type='primary'
          onClick={toggle}
          className={styles.Btn_local_hospital}
        >
          Chọn bệnh viện trên localhost
        </Button>
      ) : null}
      <Modal
        footer={false}
        onOk={toggle}
        onCancel={toggle}
        title=' Nhập partnerId bệnh viện để hiển thị trên localhost'
        visible={isModalVisible}
        closable={isModalVisible}
      >
        <Select
          showSearch={true}
          defaultValue='Bệnh viện Test'
          style={{ width: '100%' }}
          placeholder='Chọn bệnh viện'
          optionFilterProp='children'
          onChange={onChange}
          filterOption={filterOption}
        >
          {listPartners?.map(
            ({ partnerId: partnerIdItem, nameHospital }, index: number) => {
              return (
                <Option key={index} value={partnerIdItem}>
                  {nameHospital}
                </Option>
              )
            }
          )}
        </Select>
      </Modal>
    </div>
  )
}

export default SelectedHospital
