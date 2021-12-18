import { getbookingCur, saveSchedule } from '@actionStore'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Icon } from '@componentsTest/Icon'
import Loading from '@componentsTest/Loading'
import { AppState } from '@src/store/interface'
import { Button, Space } from 'antd'
import cx from 'classnames'
import { find, last, range } from 'lodash'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './../less/thoigian.module.less'
import { Props, Steps } from './interface'
import { F_DATE } from './utils'

export const ThoiGian = (props: Props) => {
  // console.log('props ThoiGian:>> ', props)

  const dispatch = useDispatch()

  const hospital = useSelector((state: AppState) => state.hospital)

  const { state, keys, setstate } = props

  useEffect(() => {
    dispatch(getbookingCur(state.schedules))
  }, [state])
  ;(last(state.stepper) as any).data = hospital.bookingCurrent?.days

  //  ----------------------------INFO DATA --------------------------------------------------------

  const findStep: Steps | any = find(state.stepper, { key: keys })

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

  // console.log('stateTime :>> ', stateTime)

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

    const x = moment(`${thisYear}-${thisMonth + 1}-${i}`).format(F_DATE)

    return findStep.data?.find((v: any) => {
      const n = moment(v.date).format(F_DATE)
      return n === x
    })
  }

  const onselectTime = (item: any, name: 'chonNgay' | 'chonGio') => {
    ;(last(state.stepper) as any).selected[name] = item

    const schedules = state.stepper.reduce(
      (obj: any, item) => ({
        ...obj,
        [item.key as string]: { selected: item.selected, data: item.data }
      }),
      {}
    )
    setstate((v: any) => ({ ...v }))

    if (name === 'chonGio') {
      setstate((v: any) => ({
        ...v,

        stepCurrent: {
          name: findStep?.title || '',
          index: findStep?.sort + 1,
          key: 4
        }
      }))
    }

    window.localStorage.setItem('selected', JSON.stringify(schedules))
    dispatch(saveSchedule(schedules))
  }

  //  ----------------------------RENDER PAGE --------------------------------------------------------

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

        {Object.keys(hospital.bookingCurrent).length < 2 ? (
          <Loading
            component={true}
            text='Đang tải lịch tháng...'
            size={40}
            minHeight='400px'
          />
        ) : (
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

              const l = moment(`${thisYear}-${thisMonth + 1}-${i + 1}`).format(
                F_DATE
              )

              const p = findStep.selected.chonNgay?.date
                ? moment(findStep.selected.chonNgay?.date).format(F_DATE)
                : -1

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
                  onClick={() => onselectTime(ngayTrong(i + 1), 'chonNgay')}
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
        )}
      </div>

      {/* thời gian của bác sĩ */}
      <div className={styles.time}>
        {findStep.selected.chonNgay?.shifts?.map((v: any) => {
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
                    <li
                      key={e.timeId}
                      onClick={() => onselectTime(e, 'chonGio')}
                    >
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
