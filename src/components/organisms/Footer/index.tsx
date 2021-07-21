
import FooterCustom from '@components/test/FooterCustom';
import React from 'react'
// import { useSelector } from 'react-redux'

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

const FooterLayout = () => {
  // const footer = useSelector(
  //   (state: any) => state.hospital_Reducer.hospital_details.footer
  // )

  return <FooterCustom dataFooter={footer} />
}

export default FooterLayout
