/* esdivnt-disable @next/next/no-img-element */
import { Button, Form, Input, Select } from 'antd'
import React from 'react'
import Container from '../../../../Container'
import styles from './styles.module.less'

export interface ContactDetail {
  dataContactDetail: ItemContact[]
}
interface ItemContact {
  id?: string
  icon?: string
  subText?: string
  text?: string
}
export const ContactDetail = ({ dataContactDetail }: ContactDetail) => {
  if (!dataContactDetail) {
    return <Container className={styles.containerError}>gelo</Container>
  }
  return (
    <Form className={styles.FormContact} layout={'inline'}>
      <ul className={styles.listFormContact}>
        <li>
          <div className={styles.title}>
            <label>Họ và tên</label>
            <sup>*</sup>
          </div>
          <Form.Item
            name='fullname'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập họ và tên (có dấu)! ',
                whitespace: true
              }
            ]}
          >
            <Input
              autoFocus={true}
              className={styles.input}
              placeholder='Vui lòng nhập họ và tên (có dấu)...'
            />
          </Form.Item>
        </li>
        <li>
          <div className={styles.title}>
            <label>Địa chỉ Email</label>
          </div>
          <Form.Item
            name='email'
            rules={[
              {
                type: 'email',
                message: 'Sai định dạng email'
              },
              {
                whitespace: true
              }
            ]}
          >
            <Input
              className={styles.input}
              placeholder='Vui lòng nhập email...'
            />
          </Form.Item>
        </li>
        <li>
          <div className={styles.title}>
            <label>Số điện thoại</label>
            <sup>*</sup>
          </div>
          <Form.Item
            name='phone'
            rules={[
              {
                type: 'regexp',
                pattern: new RegExp('/(84|0[3|5|7|8|9])+([0-9]{8})\b/g'),
                message: 'Vui lòng nhập đúng định dạng số điện thoại'
              },
              {
                required: true,
                message: 'Vui lòng nhập số điện thoại '
              }
            ]}
          >
            <Input
              type='number'
              className={styles.input}
              placeholder='Vui lòng nhập số điện thoại...'
            />
          </Form.Item>
        </li>
        <li>
          <div className={styles.title}>
            <label>Vấn đề của bạn</label>
            <sup>*</sup>
          </div>
          <Form.Item
            name='problem'
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn vấn đề! '
              }
            ]}
          >
            <Select
              className={styles.select}
              style={{ width: '100%' }}
              placeholder='Chọn vấn đề'
            >
              <Select.Option value='2'>Vấn đề chuyên môn</Select.Option>
              <Select.Option value='3'>Vấn đề về kỹ thuật</Select.Option>
              <Select.Option value='4'>Vấn đề khác</Select.Option>
            </Select>
          </Form.Item>
        </li>
        <li>
          <div className={styles.title}>
            <label>Nhập nội dung cần trợ giúp</label>
            <sup>*</sup>
          </div>
          <Form.Item
            name='text'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập nội dung cần hỗ trợ! '
              }
            ]}
          >
            <Input.TextArea
              className={styles.input}
              placeholder='Vui lòng nhập nội dung cần hỗ trợ...'
              maxLength={500}
              rows={5}
            />
          </Form.Item>
        </li>
      </ul>
      <div className={styles.btnSupport}>
        <Button htmlType='submit'>gửi hỗ trợ </Button>
      </div>
    </Form>
  )
}
