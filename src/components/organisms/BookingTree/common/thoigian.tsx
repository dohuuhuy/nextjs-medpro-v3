import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Icon } from '@componentsTest/Icon'
import { getbookingCur, saveSchedule } from '@src/store/actionStore'
import { AppState } from '@src/store/interface'
import { Button, Space } from 'antd'
import cx from 'classnames'
import { find, range } from 'lodash'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './../less/thoigian.module.less'

export const ThoiGian = (props: any) => {
  const dispatch = useDispatch()

  const booking = useSelector((state: AppState) => state.booking)

  console.log('props ThoiGian :>> ', props)

  const { state, keys, setstate } = props

  const [stateTime, setstateTime] = useState<any>({
    chonNgay: {
      shifts: []
    },
    chonGio: {}
  })

  useEffect(() => {
    dispatch(getbookingCur())
  }, [dispatch])

  state.stepper.at(-1).data = booking.bookingCurrent.days

  //  ----------------------------INFO DATA --------------------------------------------------------

  const findStep = find(state.stepper, { key: keys })

  const weekDays = ['CN', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy']

  const todayObj = moment()
  const [count, setcount] = useState(0) // kiểm tra hoạt động của hàm tới lui

  const [dayCur, setdayCur] = useState(moment())

  const thisYear = dayCur.year() // lấy năm hiện tại
  const thisMonth = dayCur.month() // lấy tháng hiện tại
  const daysInMonth = dayCur.daysInMonth() // lấy số ngày trong tháng , ví dụ như 30 ngày

  const dayObjOf1 = moment(`${thisYear}-${thisMonth + 1}-1`) // thời gian tháng củ
  const weekDayOf1 = dayObjOf1.day() // lấy số ngày củ

  const dayObjOfLast = moment(`${thisYear}-${thisMonth + 1}-${daysInMonth}`) // thời gian tháng mới
  const weekDayOfLast = dayObjOfLast.day() // lấy sô ngày mới

  //  ----------------------------ACTION --------------------------------------------------------

  const handlePrev = () => {
    // đi tới tháng củ
    setcount(count - 1)
    setdayCur(dayCur.subtract(1, 'month'))
  }

  const handleNext = () => {
    // đi tới tháng tới
    setcount(count + 1)
    setdayCur(dayCur.add(1, 'month'))
  }

  const hiddenNext = () => {
    // nếu tháng đang chọn lớn tháng hiện tại thì ẩn nút tới
    if (moment(dayCur).isAfter(todayObj, 'month')) {
      return false
    }
    return true
  }

  const hiddenPrev = () => {
    // nếu tháng đang chọn nhỏ hoặc bằng tháng hiện tại từ ẩn nút lùi
    if (moment(dayCur).isSameOrBefore(todayObj, 'month')) {
      return false
    }
    return true
  }

  const ngayTrong = (i: any) => {
    if (!findStep.data) return false

    const x = moment(`${todayObj.year()}-${thisMonth + 1}-${i}`).format(
      'DD-MM-YYYY'
    )

    return findStep.data?.find((v: any) => {
      const n = moment(v.date).format('DD-MM-YYYY')
      return n === x
    })
  }

  const chonNgay = (item: any) => () => {
    setstateTime((v: any) => ({ ...v, chonNgay: item }))
    state.stepper.at(-1).selected = {
      ...stateTime,
      chonNgay: item
    }
  }

  const chonGio = (item: any) => () => {
    setstateTime((v: any) => ({ ...v, chonGio: item }))

    state.stepper.at(-1).selected = {
      ...stateTime,
      chonGio: item
    }
    setstate((v: any) => ({ ...v }))

    const object = state.stepper.reduce(
      (obj: any, item: any) =>
        Object.assign(obj, {
          [item.key]: { selected: item.selected, data: item.data }
        }),
      {}
    )
    dispatch(saveSchedule(object))
  }

  //  ----------------------------RENDER PAGE --------------------------------------------------------

  console.log('stateTime :>> ', stateTime)
  console.log('state :>> ', state)

  return (
    <section className={styles.thoigian}>
      <div className={styles.input}>
        <Icon name='ngaygio' />
        <span>Thời gian làm việc từ T2 - T7 các ngày trong tuần</span>
      </div>
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
            {hiddenPrev() && (
              <Button
                type='text'
                icon={<ArrowLeftOutlined />}
                onClick={handlePrev}
              />
            )}
            <div className={styles.datetime}>{dayCur.format('MM - YYYY')}</div>
            {hiddenNext() && (
              <Button
                type='text'
                icon={<ArrowRightOutlined />}
                onClick={handleNext}
              />
            )}
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
            const trong = ngayTrong(i + 1) ? styles.trong : ''
            const l = moment(
              `${todayObj.year()}-${thisMonth + 1}-${i + 1}`
            ).format('DD-MM-YYYY')

            const p = moment(findStep.selected.chonNgay?.date).format(
              'DD-MM-YYYY'
            )
            const activeDay = l === p ? styles.activeDay : ''

            return (
              <div
                className={cx(
                  styles.dayCell,
                  styles.dayCell_inMonth,
                  trong,
                  activeDay
                )}
                key={i}
                onClick={chonNgay(ngayTrong(i + 1))}
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
        {findStep.selected?.chonNgay?.shifts?.map((v: any) => {
          return (
            <div className={styles.shifts} key={v.id}>
              <h3>{v.shiftName}</h3>
              <ul className={styles.listShifts}>
                {v.timeSlotInDay?.map((e: any) => {
                  const activeGio =
                    e.timeId === findStep.selected?.chonGio?.timeId
                      ? styles.activeGio
                      : ''
                  return (
                    <li key={e.timeId} onClick={chonGio(e)}>
                      <button className={cx(styles.btnTime, activeGio)}>
                        {`${e.startTime} - ${e.endTime}  (${e.maxSlot}) `}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>

      {/* lưu ý gọi tổng đài */}
      <div className={styles.hint}>
        <span>
          Trong trường hợp không thể chọn được khung giờ, vui lòng gọi đến{' '}
          <br />
          Tổng đài CSKH để được hỗ trợ:
        </span>
        <button className={styles.phone}>
          <Icon name='timkiem' />
          Tổng đài 19002115
        </button>
      </div>
    </section>
  )
}

// console.log(
//   'Number(thisMonth + 1) & Number(todayObj.month() + 1) :>> ',
//   Number(thisMonth + 1),
//   Number(todayObj.month() + 1)
// )

// const x = moment(dayCur).isAfter(todayObj, 'month')

// console.log('x :>> ', x)

// const today =
//   i + 1 === todayObj.date() &&
//   thisMonth === todayObj.month() &&
//   thisYear === todayObj.year()
//     ? styles.today
//     : ''
