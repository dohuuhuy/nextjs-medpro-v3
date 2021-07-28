/* esdivnt-disable @next/next/no-img-element */
import { Button, Form, Input, Select } from 'antd'
import React from 'react'
import Container from '../../../../Container'
import style from './styles.module.less'

interface ContactDetail {
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
    return <Container className={style.containerError}>gelo</Container>
  }
  return (
    <Form className={style.FormContact} layout={'inline'}>
      <ul className={style.listFormContact}>
        <li>
          <div className={style.title}>
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
              autoFocus
              className={style.input}
              placeholder='Vui lòng nhập họ và tên (có dấu)...'
            />
          </Form.Item>
        </li>
        <li>
          <div className={style.title}>
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
              className={style.input}
              placeholder='Vui lòng nhập email...'
            />
          </Form.Item>
        </li>
        <li>
          <div className={style.title}>
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
              className={style.input}
              placeholder='Vui lòng nhập số điện thoại...'
            />
          </Form.Item>
        </li>
        <li>
          <div className={style.title}>
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
              className={style.select}
              defaultValue='1'
              style={{ width: '100%' }}
            >
              <Select.Option value='1'>Chọn vấn đề</Select.Option>
              <Select.Option value='2'>Vấn đề chuyên môn</Select.Option>
              <Select.Option value='3'>Vấn đề về kỹ thuật</Select.Option>
              <Select.Option value='4'>Vấn đề khác</Select.Option>
            </Select>
          </Form.Item>
        </li>
        <li>
          <div className={style.title}>
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
              className={style.input}
              placeholder='Vui lòng nhập nội dung cần hỗ trợ...'
              maxLength={500}
              rows={5}
            />
          </Form.Item>
        </li>
      </ul>
      <div className={style.btnSupport}>
        <Button htmlType='submit'>gửi hỗ trợ </Button>
      </div>
    </Form>
  )
}
