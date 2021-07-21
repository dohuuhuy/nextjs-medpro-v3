import HeaderCustom from '@components/test/HeaderCustom'
import React from 'react'
import { useSelector } from 'react-redux'

const header = {
  "logoHeader": "https://inside-static.medpro.com.vn/static/upload/hospitals/medpro/header_logo.svg",
  "logoMobile":"https://resource.medpro.com.vn/static/images/medpro/web/logo_header_white.svg",
  menu: [
    {
      "id": "a1",
      "key": "trang-chu",
      "link": "/",
      "url": "/",
      "name": "Trang chu",
      "content": "",
      "sortOrder": 1,
      "icon": "fal fa-home",
      "active": true
    },
    {
      "id": "a2",
      "key": "gioi-thieu",
      "link": "/gioi-thieu",
      "url": "/gioi-thieu",
      "name": "Giới thiệu",
      "content": "",
      "sortOrder": 2,
      "icon": "fal fa-home",
      "active": false
    },
    {
      "id": "a3",
      "key": "quy-trinh",
      "link": "/quy-trinh",
      "url": "/quy-trinh",
      "name": "Quy trình",
      "content": "",
      "sortOrder": 3,
      "icon": "fal fa-home",
      "active": false
    },
    {
      "id": "a4",
      "key": "huong-dan",
      "link": "/huong-dan",
      "url": "/huong-dan",
      "name": "Hướng dẫn",
      "content": "",
      "sortOrder": 4,
      "icon": "fal fa-home",
      "active": false
    },
    {
      "id": "a5",
      "key": "thac-mac",
      "link": "/thac-mac",
      "url": "/thac-mac",
      "name": "Thắc mắc",
      "content": "",
      "sortOrder": 5,
      "icon": "fal fa-home",
      "active": false
    },
    {
      "id": "a6",
      "key": "lien-he",
      "link": "/lien-he",
      "url": "/lien-he",
      "name": "Liên hệ",
      "content": "",
      "sortOrder": 6,
      "icon": "fal fa-home",
      "active": false
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

const HeaderLayout = () => {
  return <HeaderCustom dataHeader={header} Authencartion={authen} />
}

export default HeaderLayout
