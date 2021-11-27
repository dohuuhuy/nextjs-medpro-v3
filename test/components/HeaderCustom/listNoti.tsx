import { Card, Menu } from 'antd'
import { uniqueId } from 'lodash'
import Link from 'next/link'
import React from 'react'
import { FaBell, FaEnvelope, FaEnvelopeOpen } from 'react-icons/fa'
import styles from './styles.module.less'

export const ListNoti = ({ list }: any) => {
  return (
    <Card
      title={
        <h3 className={styles.cardTitle}>
          <FaBell />
          <span>Danh sách thông báo</span>
        </h3>
      }
      bordered={false}
      style={{ maxWidth: 500 }}
    >
      <Menu className={styles.listNoti}>
        {list?.slice(0, 5)?.map((v: any) => {
          return (
            <Menu.Item
              key={uniqueId()}
              icon={
                v.isRead ? (
                  <FaEnvelopeOpen size='18' color='gray' />
                ) : (
                  <FaEnvelope size='18' color='orangered' />
                )
              }
            >
              <Link
                href={`/chi-tiet-phieu-kham?transactionId=${v.eventData.transactionId}`}
              >
                <a>{v.title}</a>
              </Link>
            </Menu.Item>
          )
        })}
      </Menu>
    </Card>
  )
}
