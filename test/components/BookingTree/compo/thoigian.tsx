import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Icon } from '@componentsTest/Icon'
import { Button, Space } from 'antd'
import cx from 'classnames'
import { range } from 'lodash'
import moment from 'moment'
import React, { useState } from 'react'
import styles from './../less/thoigian.module.less'

const weekDays = ['CN', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy']

const todayObj = moment()

export const ThoiGian = () => {
  const [dayObj, setDayObj] = useState(moment())

  const thisYear = dayObj.year()
  const thisMonth = dayObj.month()
  const daysInMonth = dayObj.daysInMonth()

  const dayObjOf1 = moment(`${thisYear}-${thisMonth + 1}-1`)
  const weekDayOf1 = dayObjOf1.day()

  const dayObjOfLast = moment(`${thisYear}-${thisMonth + 1}-${daysInMonth}`)
  const weekDayOfLast = dayObjOfLast.day()

  const handlePrev = () => {
    setDayObj(dayObj.subtract(1, 'month'))
  }

  const handleNext = () => {
    console.log('1 :>> ', 1)

    setDayObj(dayObj.add(1, 'month'))
  }

  return (
    <section className={styles.thoigian}>
      <div className={styles.groupGuide}>
        <div className={styles.guide}>
          <span className={cx(styles.btn, styles.empty)} />
          <span>Còn trống</span>
        </div>
        <div className={styles.guide}>
          <span className={cx(styles.btn, styles.selected)} />
          <span>Đã chọn</span>
        </div>
        <div className={styles.guide}>
          <span className={cx(styles.btn, styles.full)} />
          <span>Hết chỗ</span>
        </div>
      </div>

      <div className={styles.calendar}>
        <div className={styles.header}>
          <Space>
            <Button
              type='text'
              icon={<ArrowLeftOutlined />}
              onClick={handlePrev}
            />
            <div className='datetime'>{dayObj.format(' MM - YYYY')}</div>
            <Button
              type='text'
              icon={<ArrowRightOutlined />}
              onClick={handleNext}
            />
          </Space>
        </div>

        <div className={styles.weekContainer}>
          {weekDays.map((d) => (
            <div className={styles.weekCell} key={d}>
              {d}
            </div>
          ))}
        </div>

        <div className={styles.dayContainer}>
          {range(weekDayOf1).map((i: any) => (
            <div className={cx(styles.dayCell, styles.dayCell_Faded)} key={i}>
              {dayObjOf1.subtract(weekDayOf1 - i, 'day').date()}
            </div>
          ))}

          {range(daysInMonth).map((i) => {
            const today =
              i + 1 === todayObj.date() &&
              thisMonth === todayObj.month() &&
              thisYear === todayObj.year()
                ? styles.today
                : ''
            return (
              <div
                className={cx(styles.dayCell, styles.dayCell_inMonth, today)}
                key={i}
              >
                <span>{i + 1}</span>
              </div>
            )
          })}

          {range(6 - weekDayOfLast).map((i) => (
            <div className={cx(styles.dayCell, styles.dayCell_Faded)} key={i}>
              <span> {dayObjOfLast.add(i + 1, 'day').date()}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.time}>
        <div className={styles.morning}>
          <h4>Buổi sáng</h4>
          <ul className={styles.listMorning}>
            {morning.map((v, i) => {
              return (
                <li key={i}>
                  <button className={styles.btnTime}>{v.time}</button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={styles.afternoon}>
          <h4>Buổi chiều</h4>
          <ul className={styles.listAfternoon}>
            {afternoon.map((v, i) => {
              return (
                <li key={i}>
                  <button className={styles.btnTime}>{v.time}</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className={styles.hint}>
        <span>
          Trong trường hợp không thể chọn được khung giờ, vui lòng gọi đến Tổng
          đài CSKH để được hỗ trợ.
        </span>
        <button className={styles.phone}>
          <Icon name='timkiem' />
          Tổng đài 19002115
        </button>
      </div>
    </section>
  )
}

const morning = [
  {
    time: '07:30 - 08:30'
  },
  {
    time: '07:30 - 08:30'
  },
  {
    time: '07:30 - 08:30'
  },
  {
    time: '07:30 - 08:30'
  }
]

const afternoon = [
  {
    time: '07:30 - 08:30'
  },
  {
    time: '07:30 - 08:30'
  },
  {
    time: '07:30 - 08:30'
  }
]
