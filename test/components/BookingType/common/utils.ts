import { Settings } from 'react-slick'

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

// tạm thời dùng link này , sao này sử bannerimage trong info
export const banner = (e: string) => {
  return `https://resource-testing.medpro.com.vn/static/images/${e}/web/banner_desktop.png`
}

export const myLoader = ({ src, width, quality }: any): string => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export const settings: Settings = {
  speed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false
}
