import { Icon } from '@componentsTest/Icon'
import { Data } from '../interface'

export const data: Data[] = [
  // {
  //   title: 'Thanh toán qua tổng đài',
  //   subtitle: '',
  //   icon: <Icon name='Goitongdai' size={'32'} />
  // },
  {
    title: 'Thẻ khám bệnh',
    subtitle: '',
    icon: <Icon name='TheKhamBenh' size={'32'} />
  },
  {
    title: 'Mobile Banking',
    subtitle: 'Thanh toán bằng ứng dụng ngân hàng',
    icon: <Icon name='MobileBanking' size={'32'} />
  },
  {
    title: 'Ví điện tử',
    subtitle: 'Momo, ZaloPay, SmartPay',
    icon: <Icon name='ViDienTu' size={'32'} />
  },
  {
    title: 'Thẻ ATM nội địa',
    subtitle: 'Thẻ thanh toán kích hoạt tính năng thanh toán trực tuyến',
    icon: <Icon name='TheATM' size={'32'} />
  },
  {
    title: 'Thẻ quốc tế Visa, Master, JCB',
    subtitle: '',
    icon: <Icon name='TheATM' size={'32'} />
  },
  {
    title: 'Nhờ thanh toán',
    subtitle: 'Nhờ người thân hoặc bạn bè thanh toán phí khám bệnh',
    icon: <Icon name='ThanhToanHo' size={'32'} />
  }
]

export const dataPartner = [
  {
    img: <Icon name='TheKhamBenh' size={'50'} />
  },
  {
    img: <Icon name='MobileBanking' size={'50'} />
  },
  {
    img: <Icon name='TheATM' size={'50'} />
  },
  {
    img: <Icon name='ThanhToanHo' size={'50'} />
  },
  {
    img: <Icon name='TheKhamBenh' size={'50'} />
  }
]
