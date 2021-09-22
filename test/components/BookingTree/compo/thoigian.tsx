import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Icon } from '../../Icon'
import { Button, Space } from 'antd'
import cx from 'classnames'
import { range } from 'lodash'
import moment from 'moment'
import React, { useState } from 'react'
import styles from './../less/thoigian.module.less'

export const ThoiGian = () => {
  const weekDays = ['CN', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy']

  const [count, setcount] = useState(0)
  const todayObj = moment()
  const [dayObj, setDayObj] = useState(moment()) // init là date hiện tại

  const thisYear = dayObj.year() // lấy năm
  const thisMonth = dayObj.month() // lấy tháng
  const daysInMonth = dayObj.daysInMonth() // lấy số ngày trong tháng , ví dụ như 30 ngày

  const dayObjOf1 = moment(`${thisYear}-${thisMonth + 1}-1`) // thời gian tháng củ
  const weekDayOf1 = dayObjOf1.day() // lấy số ngày củ

  const dayObjOfLast = moment(`${thisYear}-${thisMonth + 1}-${daysInMonth}`) // thời gian tháng mới
  const weekDayOfLast = dayObjOfLast.day() // lấy sô ngày mới

  const handlePrev = () => {
    // đi tới tháng củ
    setcount(count - 1)
    setDayObj(dayObj.subtract(1, 'month'))
  }

  const handleNext = () => {
    // đi tới tháng tới
    setcount(count + 1)
    setDayObj(dayObj.add(1, 'month'))
  }

  const hiddenNext = () => {
    // ẩn btn tháng tới
    if (thisMonth > todayObj.month()) {
      return styles.hiddenNext
    }
  }

  const hiddenPrev = () => {
    // ẩn btn tháng củ
    if (thisMonth <= todayObj.month()) {
      return styles.hiddenPrev
    }
  }

  return (
    <section className={styles.thoigian}>
      <p className='d-none'>{count}</p>
      {/* ghi chú chức năng */}
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

      {/* lịch tháng */}
      <div className={styles.calendar}>
        <div className={styles.header}>
          <Space>
            <Button
              type='text'
              className={hiddenPrev()}
              icon={<ArrowLeftOutlined />}
              onClick={handlePrev}
            />
            <div className='datetime'>{dayObj.format('MM - YYYY')}</div>
            <Button
              type='text'
              className={hiddenNext()}
              icon={<ArrowRightOutlined />}
              onClick={handleNext}
            />
          </Space>
        </div>

        <div className={styles.weekContainer}>
          {/* thứ trong tuần */}
          {weekDays.map((d) => (
            <div className={styles.weekCell} key={d}>
              {d}
            </div>
          ))}
        </div>

        <div className={styles.dayContainer}>
          {/* ngày của tháng củ  */}
          {range(weekDayOf1).map((i: any) => (
            <div className={cx(styles.dayCell, styles.dayCell_Faded)} key={i}>
              {/* lấy ngày tháng củ trừ đi số ngày củ của tháng ==> những ngày củ */}
              {dayObjOf1.subtract(weekDayOf1 - i, 'day').date()}
            </div>
          ))}

          {/* ngày trong tháng */}
          {range(daysInMonth).map((i) => {
            const today =
              i + 1 === todayObj.date() &&
              thisMonth === todayObj.month() && // kiểm tra có phải ngày hiện tại
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

          {/* ngày của tháng mới */}
          {range(6 - weekDayOfLast).map((i) => (
            <div className={cx(styles.dayCell, styles.dayCell_Faded)} key={i}>
              <span>
                {/* còn 6 là ... ? lấy ngày tháng mói trừ đi số ngày mới của tháng ==> những ngày mới */}
                {dayObjOfLast.add(i + 1, 'day').date()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* thời gian của bác sĩ */}
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

      {/* lưu ý gọi tổng đài */}
      <div className={styles.hint}>
        <span>
          Trong trường hợp không thể chọn được khung giờ, vui lòng gọi đến{' '}
          <br />
          Tổng đài CSKH để được hỗ trợ.
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
