import { Card, Menu } from 'antd'
import { uniqueId } from 'lodash'
import Link from 'next/link'
import React from 'react'
import { FaBell, FaEnvelope, FaEnvelopeOpen } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import styles from './../styles.module.less'
import { handleData } from './utils'

export const ListNoti = ({ list, readNoti }: any) => {
  const dispatch = useDispatch()

  const onclickDetail = (item: any) => () => {
    dispatch(readNoti({ id: item.id }))
  }

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
        {handleData(list)
          ?.slice(0, 5)
          ?.map((v: any) => {
            const slug = `/chi-tiet-phieu-kham?transactionId=${v.eventData.transactionId}`
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
                onClick={onclickDetail(v)}
              >
                <Link href={slug}>
                  <a>{v.title}</a>
                </Link>
              </Menu.Item>
            )
          })}
        {/* <Menu.Item>
          <span>Xem tất cả</span>
        </Menu.Item> */}
      </Menu>
    </Card>
  )
}
