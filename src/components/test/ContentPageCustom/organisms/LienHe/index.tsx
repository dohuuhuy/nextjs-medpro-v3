/* eslint-disable jsx-a11y/alt-text */
import { HomeOutlined } from '@ant-design/icons'
import { Input, Row, Select } from 'antd'
import React from 'react'
import Container from './../../../Container'
import style from './styles.module.less'

export const LienHeContent = ({ content }: PropsProduce) => {
  if (!content) {
    return <Container className={style.containerError}>gelo</Container>
  }

  return (
    <Container className={style.containerDefault}>
      <Row className={style.Contact}>
        <div>
          <p>Thông tin chi tiết</p>
        </div>
        <div>
          {content?.detailsContact?.map(
            ({ id, subText, text }: ItemContact) => (
              <ul key={id}>
                <li>
                  <HomeOutlined />
                </li>
                <li>
                  <li>{subText}</li>
                  <li>{text}</li>
                </li>
              </ul>
            )
          )}
        </div>
      </Row>
      <Row className={style.BoxFill}>
        {/* <div> */}
        <ul className={style.Item_BoxFill}>
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
        </ul>
        <ul className={style.Item_BoxFill}>
          <li className={style.Item_title}>
            <label>Địa chỉ Email</label>
          </li>
          <li>
            <Input
              className={style.Item_input}
              placeholder='Vui lòng nhập email...'
            />
          </li>
        </ul>
        <ul className={style.Item_BoxFill}>
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
        </ul>
        <ul className={style.Item_BoxFill}>
          <li className={style.Item_title}>
            <label>Vấn đề của bạn</label>
            <sup>*</sup>
          </li>
          <li>
            <Select
              className={style.Item_select}
              defaultValue='1'
              suffixIcon={
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={
                    "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E"
                  }
                />
              }
            >
              <Select.Option value='1'>Chọn vấn đề</Select.Option>
              <Select.Option value='2'>Vấn đề chuyên môn</Select.Option>
              <Select.Option value='3'>Vấn đề về kỹ thuật</Select.Option>
              <Select.Option value='4'>Vấn đề khác</Select.Option>
            </Select>
          </li>
        </ul>
        <ul className={style.Item_BoxFill}>
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
        </ul>
        {/* </div> */}
        {/* <div className={style.button}>
          <Button title={'Gửi hỗ trợ'} />
        </div> */}
      </Row>
    </Container>
  )
}
export interface PropsProduce {
  content: DetailContact
}
export interface DetailContact {
  detailsContact: ItemContact[]
}
export interface ItemContact {
  id?: string
  icon?: string
  subText?: string
  text?: string
}
