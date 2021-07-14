import { set_partnerId_local } from '@actionStore/rootAction'
import { totalData_State } from '@store/interface'
import { Button, Modal } from 'antd'
import Search from 'antd/lib/input/Search'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.less'

const RunLocal = () => {
  const dispatch = useDispatch()

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  const onSearch = (value: string) => {
    dispatch(set_partnerId_local({ partnerId: value }))
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const localhost = useSelector(
    (state: { totalData_Reducer: totalData_State }) =>
      state.totalData_Reducer.localhost,
  )

  return (
    <>
      {localhost ? (
        <Button
          type="primary"
          onClick={showModal}
          className={styles.Btn_local_hospital}
        >
          Chọn bệnh viện
        </Button>
      ) : null}

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
