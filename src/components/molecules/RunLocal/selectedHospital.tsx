import { set_partnerId_local } from '@actionStore/rootAction'
import { _DEVELOPMENT, _TESTING } from '@config/envs/env'
import { AppState } from '@store/interface'
import { Button, Modal, Select } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.less'
const { Option } = Select

const SelectedHospital = () => {
  const dispatch = useDispatch()

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  function onChange(value: any) {
    dispatch(set_partnerId_local({ partnerId: value }))
    setIsModalVisible(false)
  }

  const list_partners: any = useSelector<AppState>(
    (state: any) => state.totalData_Reducer.list_partners
  )

  return (
    <div>
      {_DEVELOPMENT || _TESTING ? (
        <Button
          type='primary'
          onClick={showModal}
          className={styles.Btn_local_hospital}
        >
          Chọn bệnh viện trên localhost
        </Button>
      ) : null}
      <Modal
        footer={false}
        onOk={handleOk}
        onCancel={handleCancel}
        title=' Nhập partnerId bệnh viện để hiển thị trên localhost'
        visible={isModalVisible}
        closable={isModalVisible}
      >
        <Select
          showSearch
          defaultValue='Bệnh viện Test'
          style={{ width: '100%' }}
          placeholder='Chọn bệnh viện'
          optionFilterProp='children'
          onChange={onChange}
          filterOption={(input, option) => {
            if (option?.children) {
              return (
                option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              )
            }
            return option?.children
          }}
        >
          {list_partners?.map(
            ({ partnerId, nameHospital }: any, index: number) => {
              return (
                <Option key={index} value={partnerId}>
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

export const listHospital = [
  {
    name: 'bệnh viện trưng vương',
    partnerId: 'trungvuong'
  }
]
