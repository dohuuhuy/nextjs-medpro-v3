import { Radio } from 'antd'
import cx from 'classnames'
import React from 'react'
import styles from './../less/dichvu.module.less'
import { Item, Props, StateDichVu } from './interface'
import { checkActive, clickItem } from './utils'

export const DichVu = (props: Props) => {
  console.log('props DichVu :>> ', props)

  const [stateDichVu, setstateDichVu] = React.useState<StateDichVu>({
    checkBHYT: false,
    selectedItem: null,
    selectedBHYT: null
  })

  const checkBHYT = (item: Item) => () => {
    if (item.detail.serviceType === 'INSURANCE_ONLY') {
      setstateDichVu({
        checkBHYT: true,
        selectedItem: item
      })
    } else {
      setstateDichVu({
        checkBHYT: false,
        selectedItem: item
      })
      clickItem({ item, props })
    }
  }

  const onSelectBHYT = (e: any) => {
    const { value } = e.target
    setstateDichVu({
      checkBHYT: true,
      selectedBHYT: value
    })
    clickItem({ item: stateDichVu.selectedItem, props })
  }

  return (
    <section className={styles.dichVu}>
      <ul className={styles.groupBtn}>
        {props.data.map((v: any) => {
          const active = checkActive(v, props) ? styles.active : ''
          return (
            <li key={v.id}>
              <button className={cx(styles.btn, active)} onClick={checkBHYT(v)}>
                <span>{v.detail.name}</span>
                <span>{v.detail.price} VND</span>
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
