import { Settings } from 'react-slick'

export const settings: Settings = {
  speed: 3000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  arrows: false
}

export const carousel = [
  {
    image: require('./images/slider.svg')
  },
  {
    image: require('./images/slider.svg')
  },
  {
    image: require('./images/slider.svg')
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
