import { SettingFilled } from '@ant-design/icons'
import { _DEVELOPMENT, _TESTING } from '@src/config/envs'
import { setPartnerIdLocal } from '@src/store/actionStore'
import { AppState } from '@src/store/interface'
import { check } from '@utils/checkValue'
import { Button, Dropdown, message, Modal, Select, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.less'
const { Option } = Select

const SelectedHospital = () => {
  const dispatch = useDispatch()

  const [isModalVisible, setIsModalVisible] = useState(false)

  const { listPartners, partnerId } = useSelector(
    (state: AppState) => state.total
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

  const onDeletePersist = () => {
    window.localStorage.clear()
    reload()
    message.success('Del all localStorage success !', 10)
  }

  const reload = () => {
    window.location.reload()
  }

  function clearData() {
    const list = ['loginAt', 'huyi', 'hello']

    list.map((v) => {
      window.localStorage.removeItem(v)
    })

    window.location.reload()

    // window.localStorage.clear('loginAt')
  }

  return (
    <div>
      {_DEVELOPMENT || _TESTING ? (
        <Dropdown
          className={styles.Setting}
          overlay={
            <div className={styles.dropdownSetting}>
              <Space direction='vertical'>
                <Button type='primary' onClick={clearData}>
                  clears data
                </Button>

                <Button type='primary' onClick={reload}>
                  Refresh page
                </Button>

                <Button type='primary' onClick={onDeletePersist}>
                  Del persist
                </Button>

                <Button type='primary' onClick={toggle}>
                  Choice parner hospital
                </Button>
              </Space>
            </div>
          }
          placement='topLeft'
        >
          <Button shape='round' size='large'>
            <SettingFilled />
          </Button>
        </Dropdown>
      ) : null}
      <Modal
        footer={false}
        onOk={toggle}
        onCancel={toggle}
        title=' Nhập partnerId bệnh viện để test nhanh'
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
