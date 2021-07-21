import { openInNewTab } from '@components/atoms/openInNewTab'
import { Demo } from '@n17dccn172/booking-libs'
// import { Demo } from '@components/test/Demo'
import { Layout } from 'antd'
import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'
import styles from './styles.module.less'

const Header = dynamic(() => import('@components/test/HeaderCustom'))
const Download = dynamic(() => import('@components/organisms/DownloadApp'))
// const BannerHome = dynamic(() => import('@components/organisms/BannerHomeApp'))
// const SliderHospital = dynamic(
//   () => import('@components/organisms/SilderHospital')
// )
const SupportMethod = dynamic(
  () => import('@components/organisms/SupportMethod')
)
const Introduce = dynamic(() => import('@components/organisms/IntroduceApp'))
const Footer = dynamic(() => import('@components/test/FooterCustom'))
// const FooterCustom = dynamic(() => import('@components/test/FooterCustom'))

type Props = {
  children?: ReactNode
}
const HomeLayout = ({}: Props) => {
  const handerFuncTest = (name: string) => {
    alert(name)
  }

  const header = {
      "logoHeader": "https://inside-static.medpro.com.vn/static/upload/hospitals/medpro/header_logo.svg",
      "logoMobile":"https://resource.medpro.com.vn/static/images/medpro/web/logo_header_white.svg",
      menu: [
        {
          "id": "a1",
          "key": "trang-chu",
          "link": "/",
          "url": "/",
          "name": "Trang chủ",
          "content": "",
          "sortOrder": 1,
          "icon": "fal fa-home"
        },
        {
          "id": "a2",
          "key": "gioi-thieu",
          "link": "/gioi-thieu",
          "url": "/gioi-thieu",
          "name": "Giới thiệu",
          "content": "",
          "sortOrder": 2,
          "icon": "fal fa-home"
        },
        {
          "id": "a3",
          "key": "quy-trinh",
          "link": "/quy-trinh",
          "url": "/quy-trinh",
          "name": "Quy trình",
          "content": "",
          "sortOrder": 3,
          "icon": "fal fa-home"
        },
        {
          "id": "a4",
          "key": "huong-dan",
          "link": "/huong-dan",
          "url": "/huong-dan",
          "name": "Hướng dẫn",
          "content": "",
          "sortOrder": 4,
          "icon": "fal fa-home"
        },
        {
          "id": "a5",
          "key": "thac-mac",
          "link": "/thac-mac",
          "url": "/thac-mac",
          "name": "Thắc mắc",
          "content": "",
          "sortOrder": 5,
          "icon": "fal fa-home"
        },
        {
          "id": "a6",
          "key": "lien-he",
          "link": "/lien-he",
          "url": "/lien-he",
          "name": "Liên hệ",
          "content": "",
          "sortOrder": 6,
          "icon": "fal fa-home"
        }
      ],
      menuMobile: [
        {
          id: "",
          key: "trang-chu",
          link: "/",
          url: "/",
          label: "Trang chủ",
          group: "menuMobile",
          sortOrder: 1,
          icon: "fal fa-home",
        },
        {
          id: "",
          key: "huong-dan",
          link: "/huong-dan",
          url: "/huong-dan",
          label: "Hướng dẫn",
          group: "menuMobile",
          sortOrder: 4,
          icon: "fal fa-list-alt",
        },
        {
          id: "",
          key: "user",
          link: "/user",
          url: "/user",
          label: "Thông báo",
          group: "menuMobile",
          sortOrder: 5,
          icon: "fal fa-bell",
        },
      ],
      listSupport: [
      {
        funcGroup: [
            {
              icon: "fal fa-user",
              label: "Hồ sơ bệnh nhân",
            },
            {
              icon: "fal fa-file-invoice",
              label: "Phiếu khám bệnh",
            },
          ],
          guideGroup: [
              {
                icon: "?",
                label: "Giải đáp các câu hỏi nhanh",
                link:"#"
              },
              {
                icon: "bk",
                label: "Hướng dẫn",
                link:"#"
              },
          ],
          supportGroup: [
            {
              icon: "zal",
              label: "Hỗ trợ Zalo",
              link: "#",
            },
            {
              icon: "fb",
              label: "Hỗ trợ Facebook",
              link: "#",
            },
            {
              icon: "Sys",
              label: "Hỗ trợ Kỹ thuật: 1900-2115",
              link: "#",
            },
            {
              icon: "Mail",
              label: "Email: support@medpro.com.vn",
              link: "#",
            },
          ],
        }
      ],
      support: [
        {
          "textSuport": "Bạn cần hỗ trợ?",
          "icon": "",
          "phone": "1900-2267"
        }
      ]
    }

  
  const authen = {
      isAuthen: true,
      'nameUser': 'Tấn Đạt'
    }

    const footer  = {
      "logoFooter": "https://inside-static.medpro.com.vn/static/upload/hospitals/medpro/footer_logo.svg",
      infoContact: [
        { "id": "", "label": "", "key":"nameHospital", "value": "CÔNG TY CỔ PHẦN ỨNG DỤNG PKH" },
        {
          "id": "",
          "label": "Địa chỉ",
          "key":"address",
          "value": "97 Trần Quang Diệu, phường 14, quận 3, Tp Hồ Chí Minh."
        },
        { "id": "", "label": "Website", "key":"website", "value": " https://pkh.vn" },
        { "id": "", "label": "Email", "key":"email", "value": "contact@pkh.vn" },
        { "id": "", "label": "Điện thoại", "key":"phone", "value": "(028) 710 78098" }
      ],
      linkSupport: [
        { "id": "", "label": "Liên hệ", "link": "https://medpro.com.vn/lien-he" },
        {
          "id": "",
          "label": "Điều khoản dịch vụ",
          "link": "https://medpro.com.vn/dieu-khoan-dich-vu"
        },
        {
          "id": "",
          "label": "Chính sách bảo mật",
          "link": "https://medpro.com.vn/chinh-sach-bao-mat"
        },
        {
          "id": "",
          "label": "Quy định sử dụng",
          "link": "https://medpro.com.vn/quy-dinh-su-dung"
        }
      ],
      logoChecked: [
        {
          "id": "",
          "imgLogo": "https://medpro.com.vn/static/media/bocongthuong1.4e58f890.svg",
          "link": "http://online.gov.vn/Home/WebDetails/44668"
        },
        {
          "id": "",
          "imgLogo": "https://medpro.com.vn/static/media/bocongthuong2.28581f75.svg",
          "link": "http://online.gov.vn/Home/WebDetails/44209"
        },
        {
          "id": "",
          "imgLogo": "https://medpro.com.vn/static/media/googleplay.e6fe412f.svg",
          "link": "https://play.google.com/store/apps/details?id=vn.com.medpro"
        },
        {
          "id": "",
          "imgLogo": "https://medpro.com.vn/static/media/appstore.3a164d38.svg",
          "link": "https://apps.apple.com/us/app/id1481561748"
        }
      ]
    }
    
  return (
    <Layout className={styles.layout}>
      <Header dataHeader={header} Authencartion={authen}  />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      {/* <BannerHome />
      <SliderHospital /> */}
      <Introduce />

      {/* <Demo
        text={'viết bằng typescript function và có sử dụng module.less'}
        funcTest={() => handerFuncTest('huyi')}
        funcLogin={() =>
          openInNewTab('https://id-v121.medpro.com.vn/check-phone')
        }
      />

      {/* <Introduce /> */}
      <Download />

      {/* {children} */}
      <SupportMethod />
      <Footer dataFooter={footer} />
    </Layout>
  )
}

export default HomeLayout
