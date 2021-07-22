import BannerContact from '@components/test/BannersText/organisms/BannerContact'
import React from 'react'

const bannerContact = {
  title: 'Liên hệ với chúng tôi',
  subTitle:
    'Bạn đang quan tâm đến các dịch vụ của chúng tôi hoặc cần tư vấn!<br/>Chúng tôi luôn sẵn sàng giúp đỡ bạn',
  imageBackground: 'https://medpro.com.vn/static/media/blur-01.b18ae4e7.jpg',
  cardContact: [
    {
      id: '',
      key: 'question',
      title: 'Hỏi đáp nhanh',
      subtiltle:
        'Danh sách các câu hỏi đã được hệ thống hóa, bạn có thể tham khảo nhanh',
      img: [
        {
          url: 'https://medpro.com.vn/static/media/message.dfcf8708.svg'
        }
      ],
      textBottom: '<span>Tham khảo</span>',
      link: 'https://medpro.com.vn/thac-mac',
      icon: true
    },
    {
      id: '',
      key: 'phoneContact',
      title: 'Các kênh hỗ trợ',
      subtiltle: 'Liên hệ trực tiếp với chúng tôi qua các kênh hỗ trợ sau',
      img: [
        {
          url: 'https://medpro.com.vn/static/media/zalo.c572a0da.svg'
        },
        {
          url: 'https://medpro.com.vn/static/media/facebook.36f35f09.svg'
        }
      ],
      textBottom: '<b>1900-2115</b>',
      link: 'tel:19002115'
    },
    {
      id: '',
      key: 'workingTimes',
      title: 'Thời gian làm việc',
      subtiltle: 'Thời gian làm việc từ thứ 2 đến thứ 7 7:30 - 16:30',
      img: [
        {
          url: 'https://medpro.com.vn/static/media/time.3a877423.svg'
        }
      ],
      textBottom: '<span> Đang trong giờ hành chính </span>'
    }
  ]
}

const index = () => {
  return <BannerContact dataBannerContact={bannerContact} />
}

export default index
