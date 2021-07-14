import { set_partnerId_local } from '@actionStore/rootAction'
import { Button, Modal } from 'antd'
import Search from 'antd/lib/input/Search'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './styles.module.less'

const RunLocal = () => {
  const dispatch = useDispatch()

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  const onSearch = (value: string) =>
    dispatch(set_partnerId_local({ partnerId: value, local: true }))

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        className={styles.Btn_local_hospital}
      >
        Test bệnh viện
      </Button>

      <Modal
        footer={false}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Runing Hospital In Localhost"
        visible={isModalVisible}
        closable={isModalVisible}
      >
        <Search
          placeholder="Nhập partnerId bệnh viện ..."
          onSearch={onSearch}
          enterButton
        />
      </Modal>
    </>
  )
}

export default RunLocal
