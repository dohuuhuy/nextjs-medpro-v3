import React from 'react'
import { Menu, Row, Col, Space } from 'antd'
import style from './styles.module.less'
import {
  BellOutlined,
  FileAddOutlined,
  PoweroffOutlined,
  SolutionOutlined
} from '@ant-design/icons'

const { Item, Divider } = Menu

interface Props {
  nameUser?: string
}

export const DropdownProfile = ({ nameUser }: Props) => {
  return (
    <Menu className={style.dropdownProfile}>
      <Item className={style.item_user}>
        <Row className={style.view_user}>
          <Col className={style.colAvt}>
            <i className='fas fa-user-circle'></i>
          </Col>
          <Col className={style.colHello}>
            <span>Xin chào! </span>
            <strong className={style.info_name}>{nameUser}</strong>
          </Col>
        </Row>
      </Item>
      <Divider />
      <Item className={style.item_information}>
        <a href='/user'>
          <Space>
            <SolutionOutlined />
            Hồ sơ bệnh nhân
          </Space>
        </a>
      </Item>
      <Item className={style.item_information}>
        <a href='#'>
          <Space>
            <FileAddOutlined />
            Phiếu khám
          </Space>
        </a>
      </Item>
      <Item className={style.item_information}>
        <a href='#'>
          <Space>
            <BellOutlined />
            Thông báo
          </Space>
        </a>
      </Item>
      <Item className={style.item_information}>
        <a href='/logout'>
          <Space>
            <PoweroffOutlined />
            Thoát
          </Space>
        </a>
      </Item>
      <Item>
        <div className='version'>
          <i>Phiên bản 1.1.1</i>
        </div>
      </Item>
    </Menu>
  )
}
