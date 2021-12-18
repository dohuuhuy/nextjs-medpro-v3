import { Settings } from 'react-slick'
import { ItemFeature } from './interface'

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

export const handleListFeature = (data: ItemFeature[]) => {
  let missItem = 0

  console.log('object :>> ', window.innerWidth)
  const numColumn = window.innerWidth > 425 ? 4 : 3

  console.log('numColumn :>> ', numColumn)

  const lengthItem = data.length

  if ((lengthItem + 1) % numColumn === 0) {
    missItem = 1
  }
  if ((lengthItem + 2) % numColumn === 0) {
    missItem = 2
  }
  if ((lengthItem + 3) % numColumn === 0) {
    missItem = 3
  }

  const missItemArr: any = [...Array(missItem).keys()]

  const list = data.sort((a, b) => a.priority - b.priority).concat(missItemArr)

  return list
}
