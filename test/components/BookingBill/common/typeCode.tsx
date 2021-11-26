import { default as React } from 'react'
/* eslint-disable @next/next/no-img-element */
import Barcode from 'react-barcode'
import styles from './../styles.module.less'
import cx from 'classnames'

const QRCode = require('qrcode.react')

export const typeCode = (e: any) => {
  if (!e.value) return null

  let code
  switch (e?.type) {
    case 'barcode':
      code = (
        <Barcode
          value={e.value}
          format='CODE128'
          height={50}
          fontSize={14}
          width={1}
        />
      )
      break
    case 'qrcode':
      code = <QRCode fgColor='#000000' size={90} value={e.value} />
      break
    default:
      break
  }

  return (
    <div className={styles.barcode}>
      <p className={styles.title}>{e.title}</p>
      {code}
    </div>
  )
}

export const statusBill = (info: any) => {
  const { status } = info

  const classTimeNote = cx({
    [styles.statusSuccess]: status === 1,
    [styles.statusDanger]: status === 0 || status === 6,
    [styles.statusDisable]: status === -2
  })
  return (
    <div className={cx(styles.status, classTimeNote)}>{info.description}</div>
  )
}
