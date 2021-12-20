import { Icon } from './../../Icon'
import { Modal } from 'antd'
import React from 'react'
import { ListHospital } from './interface'
import styles from './../styles.module.less'

const kyTuDacBiet = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi

export const validateCharUTF8 = (value: any) => {
  value = value.replace(kyTuDacBiet, '')
  value = value.replace(/^\s+|\s+$/g, ' ')
  value = value.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  value = value.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  value = value.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  value = value.replace(/o|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  value = value.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  value = value.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  value = value.replace(/đ|d/g, 'd')
  // Some system encode vietnamese combining accent as individual utf-8 characters
  value = value.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '') // Huyền sắc hỏi ngã nặng
  value = value.replace(/\u02C6|\u0306|\u031B/g, '') // Â, Ê, Ă, Ơ, Ư
  return value
}

export const redirect = (e: ListHospital, router: any) => () => {
  if (!e?.message) {
    e?.partnerId
      ? router.push(`${e?.partnerId}/hinh-thuc-dat-kham`)
      : alert('không có partnerId')
  } else {
    Modal.info({
      closable: true,
      width: 'unset',
      centered: true,
      className: styles.Modal,
      icon: null,

      title: (
        <div>
          <Icon name='thongbao' fill='red' />
          thông báo
        </div>
      ),
      content: e?.message,
      okButtonProps: {
        disabled: true,
        style: { display: 'none' }
      }
    })
  }
}
