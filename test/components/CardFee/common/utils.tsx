import styles from './../styles.module.less'
import { Item } from './interface'

export const handleList = (data: any) => {
  const { paymentFee, selectedPaymentFee, schedule } = data

  return [
    {
      title: 'Phương thức thanh toán: ',
      value: selectedPaymentFee?.name || 'Chưa xác định',
      setting: {
        title: {
          bold: 1,
          underline: 0,
          color: 'red',
          fontSize: ''
        },
        value: {
          bold: 1,
          underline: 0,
          color: '',
          fontSize: ''
        }
      }
    },
    {
      title: 'Phí khám bệnh: ',
      value:
        paymentFee?.subTotal === -1
          ? money(schedule?.service?.selected?.price)
          : money(paymentFee?.subTotal),
      setting: {
        title: {
          bold: 1,
          underline: 0,
          color: '',
          fontSize: ''
        },
        value: {
          bold: 1,
          underline: 0,
          color: '',
          fontSize: ''
        }
      }
    },
    {
      title: 'Phí tiện ích: ',
      value: money(paymentFee?.totalFee),
      setting: {
        title: {
          bold: 1,
          underline: 0,
          color: '',
          fontSize: ''
        },
        value: {
          bold: 1,
          underline: 0,
          color: '',
          fontSize: ''
        }
      }
    },
    {
      title: 'Tổng tiền: ',
      value: money(paymentFee?.grandTotal),
      setting: {
        title: {
          bold: 1,
          underline: 0,
          color: '',
          fontSize: '14px'
        },
        value: {
          bold: 1,
          underline: 0,
          color: '#ffb340',
          fontSize: '14px'
        }
      }
    }
  ] as Item[]
}

export const money = (text = 0) => {
  return text.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
}

export const getSetting = (item: any, key: 'title' | 'value') => {
  const bold = item?.setting?.[key]?.bold ? styles.bold : null
  const color = item?.setting?.[key]?.color
  const under = item?.setting?.[key]?.underline ? styles.underline : null
  const fontSize = item?.setting?.[key]?.fontSize

  return {
    bold,
    color,
    under,
    fontSize
  }
}
