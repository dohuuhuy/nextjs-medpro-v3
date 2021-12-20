import { DeleteFilled, ReloadOutlined, SettingFilled } from '@ant-design/icons'
import { _DEVELOPMENT, _TESTING } from '@src/config/envs'
import { SetParnerId } from '@src/store/actionStore'
import { AppState } from '@src/store/interface'
import { Button, Dropdown, message, Modal, Select, Space } from 'antd'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FaChevronCircleDown } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.less'
const { Option } = Select

const SelectedHospital = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const [isModalVisible, setIsModalVisible] = useState(false)

  const { listPartners } = useSelector((state: AppState) => state.total)

  const toggle = () => {
    setIsModalVisible(!isModalVisible)
  }

  function onChange(value: any) {
    dispatch(SetParnerId(value))
    setIsModalVisible(false)
    // reload()
  }

  const filterOption = (input: string, option: any) => {
    if (option?.children) {
      return option?.children.includes(input)
    }
    return option?.children
  }

  const onDeletePersist = () => {
    window.localStorage.clear()
    reload()
    message.success('Del all localStorage success !', 10)
  }

  const reload = () => {
    router.reload()
  }

  function clearData() {
    const list = ['loginAt', 'huyi', 'hello']

    list.map((v) => {
      window.localStorage.removeItem(v)
    })

    reload()
  }

  return (
    <div>
      {_DEVELOPMENT || _TESTING ? (
        <Dropdown
          className={styles.Setting}
          overlay={
            <div className={styles.dropdownSetting}>
              <Space direction='vertical'>
                <Button type='primary' onClick={reload}>
                  <Space>
                    <ReloadOutlined />
                  </Space>
                </Button>

                <Button type='primary' onClick={clearData}>
                  clears data
                </Button>

                <Button type='primary' onClick={onDeletePersist}>
                  <Space>
                    <Space>
                      <DeleteFilled /> Del persist
                    </Space>
                  </Space>
                </Button>

                <Button type='primary' onClick={toggle}>
                  <Space>
                    <FaChevronCircleDown /> Choice parner hospital
                  </Space>
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
          {listPartners?.map(({ partnerId, description }, index: number) => {
            return (
              <Option key={index} value={partnerId}>
                {description}
              </Option>
            )
          })}
        </Select>
      </Modal>
    </div>
  )
}

export default SelectedHospital
