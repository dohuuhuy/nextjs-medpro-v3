import { Button, Input, Modal, Radio, Space } from 'antd'
import React, { useState } from 'react'
import styles from './styles.module.less'
import cx from 'classnames'

const { Group } = Radio

export interface ModalCancelIF {
  showModal: any
  onOke: any
  onCancel: any
}

export const ModalCancel = (props: ModalCancelIF) => {
  const [radio, setRadio] = useState({
    checkRadio: 1
  })

  const onChangeGroup = (e: any) => {
    setRadio((prevState) => ({
      ...prevState,
      checkRadio: e.target.value
    }))
  }

  const checkActiveRadio = (key: number) => {
    return radio.checkRadio === key ? styles.radio_select : styles.radio
  }

  return (
    <Modal
      title=''
      visible={props.showModal}
      onOk={props.onOke}
      onCancel={props.onCancel}
      bodyStyle={{ padding: 0 }}
      footer={false}
      centered={true}
      className={styles.Modal}
    >
      <Group defaultValue={1} className={styles.group} onChange={onChangeGroup}>
        <p className={styles.Header}>
          <span className={styles.title}>Thông báo</span>
          <span className={styles.subtitle}>
            Bạn muốn hủy thông tin đặt khám?
          </span>
        </p>
        <Space direction='vertical' className={styles.Content}>
          <p>Vui lòng chọn lý do bên dưới hủy phiếu của bạn:</p>
          <Radio value={1} className={cx(checkActiveRadio(1))}>
            Tôi có việc bận đột xuất
          </Radio>
          <Radio value={2} className={cx(checkActiveRadio(2))}>
            Bác sĩ thay đổi lịch khám
          </Radio>
          <Radio value={3} className={cx(checkActiveRadio(3))}>
            Bệnh viện tạm ngưng khám chữa bệnh
          </Radio>
          <Radio value={4} className={cx(checkActiveRadio(4))}>
            <Space>
              Lý do khác:
              <Input placeholder='Nhập lý do của bạn' />
            </Space>
          </Radio>
        </Space>
        <div className={styles.Footer}>
          <Space>
            <Button className={styles.btn_cancel} onClick={props.onCancel}>
              Hủy bỏ
            </Button>
            <Button className={styles.btn_confirm} onClick={props.onOke}>
              Xác nhận
            </Button>
          </Space>
        </div>
      </Group>
    </Modal>
  )
}
