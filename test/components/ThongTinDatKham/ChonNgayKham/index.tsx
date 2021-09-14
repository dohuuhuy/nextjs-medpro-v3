import React, { useState } from 'react'
import moment from 'moment'
import styles from './styles.module.less'
import cx from 'classnames'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import { range } from 'lodash'

const weekDays = ['CN', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy']

const todayObj = moment()

export const ChonNgayKham = () => {
  const [dayObj, setDayObj] = useState(moment())

  const thisYear = dayObj.year()
  const thisMonth = dayObj.month() // (January as 0, December as 11)
  const daysInMonth = dayObj.daysInMonth()

  const dayObjOf1 = moment(`${thisYear}-${thisMonth + 1}-1`)
  const weekDayOf1 = dayObjOf1.day() // (Sunday as 0, Saturday as 6)

  const dayObjOfLast = moment(`${thisYear}-${thisMonth + 1}-${daysInMonth}`)
  const weekDayOfLast = dayObjOfLast.day()

  const handlePrev = () => {
    setDayObj(dayObj.subtract(1, 'month'))
  }

  const handleNext = () => {
    setDayObj(dayObj.add(1, 'month'))
  }

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <Space>
          <Button
            type='primary'
            icon={<ArrowLeftOutlined />}
            onClick={handlePrev}
          />
          <div className='datetime'>{dayObj.format(' MM - YYYY')}</div>
          <Button
            type='primary'
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
  )
}
