import React from 'react'
import style from './styles.module.less'
import { Row, Input, Select, Button, Form } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import Container from './../../../Container'

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
  const icon = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E"
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  }
  return (
    <Row>
      <Row className={style.Contact}>
        <div className={style.title}>
          <p>Thông tin chi tiết</p>
        </div>
        <div>
          {dataContactDetail?.map(
            ({ id, icon, subText, text }: ItemContact) => (
              <ul key={id} className={style.Info}>
                <li className={style.Icon}>
                  <HomeOutlined />
                </li>
                <li >
                  <li className={style.Text}>{text}</li>
                  <li className={style.subText}>{subText}</li>
                </li>
              </ul>
            )
          )}
        </div>
      </Row>
      <Form className={style.BoxFill} onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true }]} className={style.BoxItem}>
          <li className={style.Item_title}>
            <label>Họ và tên</label>
            <sup>*</sup>
          </li>
          <li>
            <Input
              className={style.Item_input}
              placeholder='Vui lòng nhập họ và tên (có dấu)...'
            />
          </li>
        </Form.Item>
        <Form.Item name="email" rules={[{ required: true }]} className={style.BoxItem}>
          <li className={style.Item_title}>
            <label>Địa chỉ Email</label>
          </li>
          <li>
            <Input
              className={style.Item_input}
              placeholder='Vui lòng nhập email...'
            />
          </li>
        </Form.Item>
        <Form.Item name="phone" rules={[{ required: true }]} className={style.BoxItem}>
          <li className={style.Item_title}>
            <label>Số điện thoại</label>
            <sup>*</sup>
          </li>
          <li>
            <Input
              className={style.Item_input}
              placeholder='Vui lòng nhập số điện thoại...'
            />
          </li>
        </Form.Item>
        <Form.Item name="problem" rules={[{ required: true }]} className={style.BoxItem}>
          <li className={style.Item_title}>
            <label>Vấn đề của bạn</label>
            <sup>*</sup>
          </li>
          <li>
            <Select
              className={style.Item_select}
              defaultValue='1'
              suffixIcon={<img src={icon} alt=" " />}
            >
              <Select.Option value='1'>Chọn vấn đề</Select.Option>
              <Select.Option value='2'>Vấn đề chuyên môn</Select.Option>
              <Select.Option value='3'>Vấn đề về kỹ thuật</Select.Option>
              <Select.Option value='4'>Vấn đề khác</Select.Option>
            </Select>
          </li>
        </Form.Item>
        <Form.Item name="support" rules={[{ required: true }]} className={style.end}>
          <li className={style.Item_title}>
            <label>Nhập nội dung cần trợ giúp</label>
            <sup>*</sup>
          </li>
          <li>
            <Input.TextArea
              className={style.Item_input}
              placeholder='Vui lòng nhập nội dung cần hỗ trợ...'
              maxLength={100}
            />
          </li>
        </Form.Item>
        <div className={style.button}>
          <Button>gửi hỗ trợ </Button>
        </div>
      </Form>
    </Row>
  )
}
