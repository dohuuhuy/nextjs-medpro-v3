import { Radio } from 'antd'
import cx from 'classnames'
import React, { useEffect } from 'react'
import styles from './../less/dichvu.module.less'
import { Item, Props, StateDichVu } from './interface'
import { checkActive, clickItem } from './utils'

export const DichVu = (props: Props) => {
  // console.log('props DichVu :>> ', props)

  const init = {
    list: props.data,
    checkBHYT: false,
    selectedItem: null,
    selectedBHYT: null
  }

  const [stateDichVu, setstateDichVu] = React.useState<StateDichVu>(init)

  useEffect(() => {
    setstateDichVu({
      list: props.data,
      checkBHYT: false
    })
  }, [props.data])

  const checkBHYT = (item: Item) => () => {
    setstateDichVu((v) => ({
      ...v,
      checkBHYT: item.detail.serviceType === 'INSURANCE_ONLY',
      selectedItem: item
    }))
    item.detail.serviceType !== 'INSURANCE_ONLY' && clickItem({ item, props })
  }

  const onSelectBHYT = (e: any) => {
    const { value } = e.target

    setstateDichVu((v) => ({
      ...v,
      checkBHYT: true,
      selectedBHYT: Number(value)
    }))
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
          return (
            <li key={item.id}>
              <button
                className={cx(styles.btn, active)}
                onClick={checkBHYT(item)}
              >
                <span>{item.detail.name}</span>
                <span>{item.detail.price} VND</span>
              </button>
            </li>
          )
        })}
      </ul>

      {stateDichVu.checkBHYT && (
        <div className={styles.questionBHYT}>
          <span>Bạn có bảo hiểm y tế không?</span>

          <Radio.Group
            onChange={onSelectBHYT}
            value={stateDichVu.selectedBHYT}
            className={styles.groupRadio}
          >
            <Radio value={1}>Có</Radio>
            <Radio value={2}>Không</Radio>
          </Radio.Group>
        </div>
      )}
    </section>
  )
}
