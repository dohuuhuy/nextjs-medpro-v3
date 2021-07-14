import { FooterCustom } from '@medpro/booking-libs'
import React from 'react'
import styles from './styles.module.less'

const FooterLayout = () => {
  return <FooterCustom className={styles.footer} />
}

export default FooterLayout

export const listFooter = [
  {
    imgLogo:
      'https://inside-static.medpro.com.vn/static/upload/hospitals/medpro/footer_logo.svg',
  },
  {
    info: [
      {
        value: 'CÔNG TY CỔ PHẦN ỨNG DỤNG PKH',
        color: '#165FD0',
        fontweight: 'bold',
      },
      {
        value:
          'Địa chỉ: 97 Trần Quang Diệu, phường 14, quận 3, Tp Hồ Chí Minh.',
      },
      {
        value: 'Website: https://pkh.vn',
        link: 'https://pkh.vn',
      },
      {
        value: 'Email: contact@pkh.vn',
      },
      {
        value: 'Điện thoại: (028) 710 78098',
      },
    ],
  },
  {
    info: [
      {
        value: 'Liên hệ',
        link: 'https://medpro.com.vn/lien-he',
      },
      {
        value: 'Điều khoản dịch vụ',
        link: 'https://medpro.com.vn/dieu-khoan-dich-vu',
      },
      {
        value: 'Chính sách bảo mật',
        link: 'https://medpro.com.vn/chinh-sach-bao-mat',
      },
      {
        value: 'Quy định sử dụng',
        link: 'https://medpro.com.vn/quy-dinh-su-dung',
      },
    ],
  },
  {
    img: [
      {
        src: 'https://medpro.com.vn/static/media/bocongthuong1.4e58f890.svg',
        link: 'http://online.gov.vn/Home/WebDetails/44668',
      },
      {
        src: 'https://medpro.com.vn/static/media/bocongthuong2.28581f75.svg',
        link: 'http://online.gov.vn/Home/WebDetails/44209',
      },
      {
        src: 'https://medpro.com.vn/static/media/googleplay.e6fe412f.svg',
        link: 'https://play.google.com/store/apps/details?id=vn.com.medpro',
      },
      {
        src: 'https://medpro.com.vn/static/media/appstore.3a164d38.svg',
        link: 'https://apps.apple.com/us/app/id1481561748',
      },
    ],
  },
]
