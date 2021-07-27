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
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }
  return (
    <Form className={style.FormContact} onFinish={onFinish} layout={'inline'}>
      <ul className={style.listFormContact}>
        <li>
          <div className={style.title}>
            <label>Họ và tên</label>
            <sup>*</sup>
          </div>

          <Input
            className={style.input}
            placeholder='Vui lòng nhập họ và tên (có dấu)...'
          />
        </li>
        <li>
          <div className={style.title}>
            <label>Địa chỉ Email</label>
            <sup>*</sup>
          </div>

          <Input className={style.input} placeholder='Vui lòng nhập email...' />
        </li>
        <li>
          <div className={style.title}>
            <label>Số điện thoại</label>
            <sup>*</sup>
          </div>

          <Input
            className={style.input}
            placeholder='Vui lòng nhập số điện thoại...'
          />
        </li>
        <li>
          <div className={style.title}>
            <label>Vấn đề của bạn</label>
            <sup>*</sup>
          </div>

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
        </li>
        <li>
          <div className={style.title}>
            <label>Nhập nội dung cần trợ giúp</label>
            <sup>*</sup>
          </div>

          <Input.TextArea
            className={style.input}
            placeholder='Vui lòng nhập nội dung cần hỗ trợ...'
            maxLength={500}
            rows={5}
          />
        </li>
      </ul>
      <div className={style.btnSupport}>
        <Button>gửi hỗ trợ </Button>
      </div>
    </Form>
  )
}
