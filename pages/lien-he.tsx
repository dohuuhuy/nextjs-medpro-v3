import { LocalBusinessJsonLd } from 'next-seo'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const LienHePage = () => {
  return (
    <LocalBusinessJsonLd
      type='Store'
      id='https://news.medpro.com.vn/lien-he'
      name='Liên hệ'
      description='Trang liên hệ của công ty PKH'
      url='https://news.medpro.com.vn/lien-he'
      telephone='19002267'
      address={{
        streetAddress:
          '84 Thành Thái, Phường 12, Quận 10,thành phố Hồ Chí Minh 700000',
        addressLocality: 'Quận 10',
        addressRegion: 'Thành phố Hồ Chí Minh',
        postalCode: '700000',
        addressCountry: 'VN'
      }}
      geo={{
        latitude: '10.8059378',
        longitude: '106.6123597,13'
      }}
      images={[
        'https://i.pinimg.com/564x/25/d5/55/25d5552e9f68490839815b51920bc6eb.jpg'
      ]}
      openingHours={[
        {
          opens: '07:00',
          closes: '16:00',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          validFrom: '2019-12-23',
          validThrough: '2020-04-02'
        },
        {
          opens: '07:00',
          closes: '12:00',
          dayOfWeek: 'Saturday',
          validFrom: '2019-12-23',
          validThrough: '2020-04-02'
        }
      ]}
    />
  )
}

LienHePage.Layout = DefaultLayout
export default LienHePage
