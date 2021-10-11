import { Icon } from '@componentsTest/Icon'
import { uniqueId } from 'lodash'

export const data = [
  {
    id: uniqueId(),
    title: "Mobile Banking",
    subtitle: "Thanh toán bằng ứng dụng ngân hàng",
    icon: <Icon name="MobileBanking" size={'32'} />
  },
  {
    id: uniqueId(),
    title: "Ví điện tử",
    subtitle: "Momo, ZaloPay, SmartPay",
    icon: <Icon name="ViDienTu" size={'32'} />
  },
  {
    id: uniqueId(),
    title: "Thẻ ATM nội địa",
    subtitle: "Thẻ thanh toán kích hoạt tính năng thanh toán trực tuyến",
    icon: <Icon name="TheATM" size={'32'} />
  },
  {
    id: uniqueId(),
    title: "Thẻ quốc tế Visa, Master, JCB",
    subtitle: "",
    icon: <Icon name="TheATM" size={'32'} />
  },
  {
    id: uniqueId(),
    title: "Nhờ thanh toán",
    subtitle: "Nhờ người thân hoặc bạn bè thanh toán phí khám bệnh",
    icon: <Icon name="ThanhToanHo" size={'32'} />
  },
]

export const dataPartner = [
  {
    img: <Icon name="TheKhamBenh" />
  },
  {
    img: <Icon name="MobileBanking" />
  },
  {
    img: <Icon name="TheATM" />
  },
  {
    img: <Icon name="ThanhToanHo" />
  },
  {
    img: <Icon name="TheKhamBenh" />
  }
]
