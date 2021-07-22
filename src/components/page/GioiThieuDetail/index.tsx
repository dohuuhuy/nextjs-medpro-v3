import dynamic from 'next/dynamic'
import React from 'react'

const Content = dynamic(() => import('@components/organisms/Content'))

const GioiThieuDetail = () => {
  return <Content data={listInfo} />
}

export default GioiThieuDetail

export const listInfo = [
  {
    title: '',
    content: [
      {
        value:
          'Chào mừng bạn đến với phần mềm MEDPRO - Giải pháp tiếp cận y tế thông minh, phần mềm liên kết với các bệnh viện nhằm giúp bệnh nhân có thể:'
      },
      {
        value: '+ Đăng ký khám bệnh.'
      },
      {
        value: '+ Thanh toán tiền khám.'
      },
      {
        value: '+ Nhận phiếu khám bệnh.'
      },
      {
        value: '+ Tạo hồ sơ bệnh nhân.'
      },
      {
        value: '+ Quản lý hồ sơ bệnh nhân.'
      },
      {
        value: '+ Quản lý phiếu khám bệnh'
      },
      {
        value: '+ Quản lý lịch hẹn tái khám, ..v..v..'
      },
      {
        value:
          'Hoàn toàn trực tuyến ở mọi lúc mọi nơi mà không cần phải đến bệnh viện để xếp hàng và chờ đợi.'
      },
      {
        value:
          'Thông qua phần mềm, chúng tôi luôn hy vọng đã tạo nên một phương thức giúp bệnh nhân có thể tiếp cận với các dịch vụ y tế (nói chung), và dịch vụ khám chữa bệnh (nói riêng) một cách dễ dàng, nhanh chóng và thuận lợi.'
      },
      {
        value:
          'Từ đó làm tăng thêm sự hài lòng của bệnh nhân, nâng cao chất lượng dịch vụ của bệnh viện, và góp phần phát triển bệnh viện ngày càng trở nên thông minh hiện đại đáp ứng với sự kỳ vọng và tin tưởng của quý bệnh nhân trong và ngoài nước.'
      },
      {
        value: 'Trân trọng!'
      }
    ]
  }
]
