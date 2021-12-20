import { Radio } from 'antd'
import cx from 'classnames'
import { find, findIndex } from 'lodash'
import React, { useEffect } from 'react'
import styles from './../less/dichvu.module.less'
import { Item, Props, StateDichVu } from './interface'
import { checkActive, clickItem, money } from './utils'

export const DichVu = (props: Props) => {
  const { state, keys, setstate } = props

  const [stateDichVu, setstateDichVu] = React.useState<StateDichVu>({
    list: props.data,
    checkBHYT: false,
    selectedItem: null,
    selectedBHYT: 0,
    addonServices: [],
    selectedAddOnSv: []
  })

  console.log('stateDichVu :>> ', stateDichVu)

  useEffect(() => {
    setstateDichVu((prev) => ({ ...prev, list: props.data, checkBHYT: false }))
  }, [props.data])

  const checkBHYT = (item: Item) => () => {
    const addonServices = item.detail.addonServices
    const findItem = find(state.stepper, { key: keys })

    if (Object.keys(findItem?.selected).length > 1) {
      const indexItem = findIndex(state.stepper, { key: keys })
      state.stepper[indexItem].selected = {}
      setstate((prev: any) => ({ ...prev }))
    }

    // trường hợp có bhyt hoặc dịch vụ cộng thêm thì thực hiện tiếp tác vụ
    setstateDichVu((v) => ({
      ...v,
      checkBHYT: item.detail.serviceType === 'INSURANCE_ONLY',
      selectedItem: item,
      addonServices: addonServices.length > 0 ? addonServices : [],
      selectedAddOnSv: []
    }))

    // nếu không check bhyt và không có dịch vụ cộng thêm thì đi tiếp
    item.detail.serviceType !== 'INSURANCE_ONLY' &&
      addonServices.length < 1 &&
      clickItem({ item, props })
  }

  const onSelectBHYT = (e: any) => {
    const { value } = e.target

    setstateDichVu((v) => ({
      ...v,
      checkBHYT: true,
      selectedBHYT: Number(value)
    }))

    stateDichVu.selectedItem.other = {}
    stateDichVu.selectedItem.other.selectedBHYT = true

    // nếu không có dịch vụ cộng thêm thì đi step tiếp theo, ngược lại thì thực hiện tiếp tác vụ
    stateDichVu.addonServices.length < 1 &&
      clickItem({ item: stateDichVu.selectedItem, props })
  }

  const onChangeAddOnSv = (e: any) => {
    const { value } = e.target

    console.log('value :>> ', value)

    // if (value.includes('_true')) {
    //   value.replace('_true', '')
    //   value.replace('_false', '')
    // }

    const key = Number(value.split('__')[2])

    const findIndexKey = findIndex(stateDichVu.selectedAddOnSv, { key })

    if (findIndexKey !== -1) {
      stateDichVu.selectedAddOnSv[findIndexKey].value = value
    } else {
      stateDichVu.selectedAddOnSv.push({
        key: Number(key),
        value
      })
    }

    setstateDichVu((prev) => ({
      ...prev
      // selectedAddOnSv: []
    }))

    stateDichVu.selectedItem.other = {}
    stateDichVu.selectedItem.other.addonServices = stateDichVu.selectedAddOnSv

    const addOnFromBooking = stateDichVu.selectedItem.detail.addonServices
    const addOnFromSelected = stateDichVu.selectedAddOnSv

    addOnFromBooking.length === addOnFromSelected.length &&
      clickItem({ item: stateDichVu.selectedItem, props })
  }

  return (
    <section className={styles.dichVu}>
      <ul
        className={cx(
          styles.groupBtn,
          stateDichVu.list.length > 2 ? styles.groupBtnMuti : styles.groupBtnNor
        )}
      >
        {stateDichVu.list?.map((item: any) => {
          const active = checkActive(item, props) ? styles.active : ''
          const activeBHYT =
            stateDichVu.checkBHYT && stateDichVu.selectedItem.id === item.id
              ? styles.active
              : active
          return (
            <li key={item.id}>
              <button
                className={cx(styles.btn, activeBHYT)}
                onClick={checkBHYT(item)}
              >
                <span>{item.detail.name}</span>
                <span>{money(item.detail.price)}</span>
              </button>
            </li>
          )
        })}
      </ul>

      <div className={styles.addonServices}>
        <div className={styles.titleDiv}>
          <span className={styles.title}>Dịch vụ khác</span>{' '}
        </div>

        {stateDichVu.checkBHYT && (
          <div className={styles.questionBHYT}>
            <span className={styles.question}>Bạn có bảo hiểm y tế không?</span>

            <div className={styles.answer}>
              <Radio.Group
                onChange={onSelectBHYT}
                value={stateDichVu.selectedBHYT}
                className={styles.groupRadio}
              >
                <Radio value={1}>Có</Radio>
                <Radio value={0}>Không</Radio>
              </Radio.Group>
            </div>
          </div>
        )}

        {stateDichVu?.addonServices?.length > 0 &&
          stateDichVu?.addonServices.map((item, i) => {
            const findItem = find(stateDichVu.selectedAddOnSv, { key: i }) || ''

            return (
              <div className={styles.questionBHYT} key={i}>
                <span className={styles.question}>{item.name}</span>

                <div className={styles.answer}>
                  <Radio.Group
                    onChange={onChangeAddOnSv}
                    value={findItem.value}
                    className={styles.groupRadio}
                  >
                    <Radio value={`${item.id}__true__${i}`}>Có</Radio>
                    <Radio value={`${item.id}__false__${i}`}>Không</Radio>
                  </Radio.Group>

                  <span className={styles.price}>
                    <i>({money(item.price)})</i>
                  </span>
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}
