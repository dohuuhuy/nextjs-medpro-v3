import { DownloadCustom } from '@components/test/Download'
import React from 'react'

const DownloadLayout = () => {
  return <DownloadCustom dataDownload={downloadApp} />
}

// nhận dữ liệu vào thì đặt tên data + danh từ

// nhận hàm , method thì đặt tên func + danh từ

// quy tắc đặt tên interface , tên interface giông tên constant trc  đó ,

//Vậy giờ test y chang anh luôn hả anh, dúng v , theo cách a làm
export default DownloadLayout

const downloadApp: downloadApp = {
  appId: 'medpro',
  nameHospital: 'Bênh viện nhi đồng 1 ',
  myApp: [
    {
      key: 'android',
      imgApp: 'https://medpro.com.vn/static/media/ios.1ffdaa3d.svg',
      linkApp: 'https://play.google.com/store/apps/details?id=vn.com.medpro',
    },
    {
      key: 'ios',
      imgApp: 'https://medpro.com.vn/static/media/google-play.c7a860d9.svg',
      linkApp: 'https://apps.apple.com/us/app/id1481561748',
    },
  ],
  imgMobile:
    'https://resource.medpro.com.vn/static/images/medpro/web/slide.png',
  listBenefit: [
    {
      id: '',
      title: 'ĐĂNG KÝ KHÁM BỆNH',
      description:
        'Đăng ký khám bệnh theo ngày <br /> Đăng ký khám bệnh theo bác sĩ <br /> Tái khám theo lịch hẹn',
      imgBenefit: 'https://medpro.vn/static/media/register.38d59ff0.svg',
      position: 'left',
    },
    {
      id: '',
      title: 'TƯ VẤN SỨC KHOẺ TRỰC TUYẾN',
      description:
        'Tư vấn sức khỏe trực tuyến với các<br />bác sĩ đầu ngành & chuyên gia',
      imgBenefit: 'https://medpro.vn/static/media/chat.6c5774f2.svg',
      position: 'left',
    },
    {
      id: '',
      title: 'KẾT QUẢ CẬN LÂM SÀNG',
      description:
        'Kết quả Cận Lâm Sàng sẽ được cập nhật <br />trực tiếp trên phần mềm',
      imgBenefit: 'https://medpro.vn/static/media/result.d078c4e7.svg',
      position: 'left',
    },
    {
      id: '',
      imgBenefit: 'https://medpro.vn/static/media/payment.09fb7592.svg',
      title: 'THANH TOÁN VIỆN PHÍ',
      description:
        'Đăng ký khám bệnh theo ngày<br />Đăng ký khám bệnh theo bác sĩ<br />Tái khám theo lịch hẹn',
      position: 'right',
    },
    {
      id: '',
      imgBenefit: 'https://medpro.vn/static/media/new.fa578d26.svg',
      title: 'TIN TỨC TỪ CÁC BỆNH VIỆN',
      description:
        'Tin tức về sức khỏe, cập nhật kiến thức <br /> chăm sóc sức khỏe từ các chuyên gia',
      position: 'right',
    },
    {
      id: '',
      imgBenefit: 'https://medpro.vn/static/media/hoadon.a6d5f456.svg',
      title: 'HOÁ ĐƠN ĐIỆN TỬ',
      description: 'Tra cứu hóa đơn điện tử chính xác và<br /> nhanh chóng',
      position: 'right',
    },
  ],
}

export interface downloadApp {
  appId: string
  nameHospital: string
  myApp: any[]
  imgMobile: string
  listBenefit: any[]
}
