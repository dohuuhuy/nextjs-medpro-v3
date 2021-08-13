import React from 'react'
import { Menu, Row, Col, Space } from 'antd'
import styles from './styles.module.less'
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
    <Menu className={styles.dropdownProfile}>
      <Item className={styles.item_user}>
        <Row className={styles.view_user}>
          <Col className={styles.colAvt}>
            <i className='fas fa-user-circle' />
          </Col>
          <Col className={styles.colHello}>
            <span>Xin chào! </span>
            <strong className={styles.info_name}>{nameUser}</strong>
          </Col>
        </Row>
      </Item>
      <Divider />
      <Item className={styles.item_information}>
        <a href='/user'>
          <Space>
            <SolutionOutlined />
            Hồ sơ bệnh nhân
          </Space>
        </a>
      </Item>
      <Item className={styles.item_information}>
        <a href='#'>
          <Space>
            <FileAddOutlined />
            Phiếu khám
          </Space>
        </a>
      </Item>
      <Item className={styles.item_information}>
        <a href='#'>
          <Space>
            <BellOutlined />
            Thông báo
          </Space>
        </a>
      </Item>
      <Item className={styles.item_information}>
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
