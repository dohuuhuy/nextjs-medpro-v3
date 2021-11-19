import { Settings } from 'react-slick'

export const carousel = [
  {
    image: '/images/bookingType/slide.png'
  },
  {
    image: '/images/bookingType/slide.png'
  },
  {
    image: '/images/bookingType/slide.png'
  }
]

export const listTabs = [
  {
    id: 1,
    title: 'Giới thiệu'
  },
  { id: 2, title: 'Dịch vụ' },
  {
    id: 3,
    title: 'Đánh giá'
  }
]

export const settings: Settings = {
  speed: 2000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 700

}
