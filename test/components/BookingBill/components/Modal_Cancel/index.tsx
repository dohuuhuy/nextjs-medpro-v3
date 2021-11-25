import React, { useState } from 'react'
import styles from './styles.module.less'
import { Modal, Button, Radio, Space, Input } from 'antd'

const { Group } = Radio
export const ModalCancel = ({ showModal, setShowModal }: any) => {
  const [radio, setRadio] = useState({
    checkRadio: null
  })

  const toggle = (key: any) => {
    setRadio((prevState) => ({
      ...prevState,
      checkRadio: key.target.value
    }))
  }

  return (
    <Modal
      title=''
      visible={showModal}
      onOk={() => setShowModal(!showModal)}
      onCancel={() => setShowModal(!showModal)}
      bodyStyle={{ padding: 0 }}
      footer={false}
      centered={true}
      className={styles.Modal}
    >
      <Group className={styles.group} onChange={toggle}>
        <p className={styles.Header}>
          <span className={styles.title}>Thông báo</span>
          <span className={styles.subtitle}>
            Bạn muốn hủy thông tin đặt khám?
          </span>
        </p>
        <Space direction='vertical' className={styles.Content}>
          <p>Vui lòng chọn lý do bên dưới hủy phiếu của bạn:</p>
          <Radio
            value={1}
            className={
              radio.checkRadio === 1 ? styles.radio_select : styles.radio
            }
          >
            Tôi có việc bận đột xuất
          </Radio>
          <Radio
            value={2}
            className={
              radio.checkRadio === 2 ? styles.radio_select : styles.radio
            }
          >
            Bác sĩ thay đổi lịch khám
          </Radio>
          <Radio
            value={3}
            className={
              radio.checkRadio === 3 ? styles.radio_select : styles.radio
            }
          >
            Bệnh viện tạm ngưng khám chữa bệnh
          </Radio>
          <Radio
            value={4}
            className={
              radio.checkRadio === 4 ? styles.radio_select : styles.radio
            }
          >
            <Space>
              Lý do khác:
              <Input placeholder='Nhập lý do của bạn' />
            </Space>
          </Radio>
        </Space>
        <div className={styles.Footer}>
          <Space>
            <Button
              disabled={true}
              className={styles.btn_cancel}
              onClick={() => setShowModal(!showModal)}
            >
              Hủy bỏ
            </Button>
            <Button
              className={styles.btn_confirm}
              onClick={() => setShowModal(!showModal)}
            >
              Xác nhận
            </Button>
          </Space>
        </div>
      </Group>
    </Modal>
  )
}
