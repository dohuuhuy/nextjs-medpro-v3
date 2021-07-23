import { NewsPageCustom } from '@components/test/NewsPage'
import React from 'react'
// import { useSelector } from 'react-redux'

const NewsPageLayout = () => {
  // const Introduce = useSelector(
  //   (state: any) => state.hospital_Reducer.hospital_details.introducHospital
  // )

  return <NewsPageCustom dataNewsPage={dataNews} />
}

const dataNews: NewsPage = [
  {
    id: 'tt_1',
    img: 'https://cms.medpro.com.vn/uploads/670x402_5_CACH_HET_DAU_DAU_300x_fae6a34f6d.png',
    title: '5 PHƯƠNG PHÁP GIẢM ĐAU ĐẦU, CHÓNG MẶT HIỆU QUẢ',
    time: '02/07/2021, 04:16',
    link: '',
    content:
      'Thường xuyên đau đầu, chóng mặt làm ảnh hưởng không nhỏ đến sức khỏe và cuộc sống sinh hoạt của người bệnh. Để hạn chế tình trạng này, người bệnh có thể áp dụng 5'
  },
  {
    id: 'tt_2',
    img: 'https://cms.medpro.com.vn/uploads/670x402_DAU_NUA_DAU_300x_b94a7e58cb.png',
    title: 'ĐAU NỬA ĐẦU',
    time: '02/07/2021, 04:13',
    link: '',
    content:
      'Đau nửa đầu (hay còn gọi là Migraine) được xếp vào một trong những bệnh đặc biệt, chiếm khoảng 10% dân số, trong đó bệnh nhân nữ gấp 3 lần bệnh nhân nam; người trẻ mắc'
  },
  {
    id: 'tt_3',
    img: 'https://cms.medpro.com.vn/uploads/670x402_nhan_ngay_ket_qua_1e684ff781.png',
    title: 'BỆNH VIỆN CHỢ RẪY TRIỂN KHAI TÍNH NĂNG TRA CỨU KẾT QUẢ KHÁM BỆNH',
    time: '25/06/2021, 03:39',
    link: '',
    content:
      'Với hơn 10 triệu dân sinh sống và làm việc tại TPHCM, 6.000 cơ sở khám chữa bệnh có nhiều chuyên khoa và loại hình hoạt động khác nhau,.. thì việc lựa chọn nơi khám chữa'
  },
  {
    id: 'tt_4',
    img: 'https://cms.medpro.com.vn/uploads/670x402_CHI_SO_NHIP_TIM_9bbd57a2d1.jpg',
    title: 'BIẾN CHỨNG NGUY HIỂM VÌ THÓI QUEN BỎ QUA CHỈ SỐ VỀ NHỊP TIM',
    time: '24/06/2021, 01:11',
    link: '',
    content:
      'Tăng huyết áp và bệnh mạch vành là 2 nguyên nhân hàng đầu gây tử vong đối với bệnh lý tim mạch. Trong đó, nhịp tim nhanh góp phần làm tăng nguy cơ xảy ra các biến cố nguy'
  },
  {
    id: 'tt_5',
    img: 'https://cms.medpro.com.vn/uploads/670x402_BENH_THAN_TRONG_COVID_2_436238b39c.jpg',
    title: 'CHĂM SÓC SỨC KHỎE CHO NGƯỜI CHĂM NGƯỜI BỆNH',
    time: '23/06/2021, 02:53',
    link: '',
    content:
      "Ngày 18/6/2021, Bệnh viện Đại học Y Dược TP.HCM (BV ĐHYD TP.HCM) tổ chức chương trình đào tạo liên tục trực tuyến 'Mệt mỏi và kiệt sức quá độ: Chăm sóc cho người"
  },
  {
    id: 'tt_6',
    img: 'https://cms.medpro.com.vn/uploads/670x402_HEN_SUYEN_COVID_633a3e22c7.jpg',
    title: 'BẢO VỆ NGƯỜI BỆNH HEN SUYỄN TRONG MÙA COVID-19',
    time: '23/06/2021, 02:51',
    link: '',
    content:
      'Theo PGS TS BS. Lê Thị Tuyết Lan – Khoa Thăm dò chức năng hô hấp BV, hen suyễn là bệnh mạn tính đòi hỏi phải điều trị lâu dài, người bệnh cần tuân thủ điều trị tại nhà theo'
  },
  {
    id: 'tt_7',
    img: 'https://cms.medpro.com.vn/uploads/VACXIN_44fcd9333c.jpg',
    title: 'VẮC XIN - CHÌA KHÓA CHẤM DỨT DỊCH BỆNH',
    time: '22/06/2021, 01:03',
    link: '',
    content:
      'Việt Nam đã tiêm 1.991.059 liều vắc xin phòng COVID-19. Đến nay, trong số người đã tiêm, khoảng 14 - 20% có phản ứng sau tiêm, tỷ lệ này tương đương theo khuyến cáo của'
  },
  {
    id: 'tt_8',
    img: 'https://cms.medpro.com.vn/uploads/670x402_DANG_KY_TIEM_VACXIN_9bb181aa3f.jpg',
    title: 'QTSC TRIỂN KHAI PHẦN MỀM MEDPRO - ĐĂNG KÝ TIÊM VẮC-XIN COVID-19',
    time: '22/06/2021, 12:11',
    link: '',
    content:
      'Ngay khi nhận được chỉ đạo từ Ban phòng chống dịch về phương án tiêm vaccine cho nhân viên đang làm việc tại Công viên phần mềm Quang Trung, QTSC đã phối hợp cùng'
  },
  {
    id: 'tt_9',
    img: 'https://cms.medpro.com.vn/uploads/670x402_5_CACH_HET_DAU_DAU_300x_fae6a34f6d.png',
    title: '5 PHƯƠNG PHÁP GIẢM ĐAU ĐẦU, CHÓNG MẶT HIỆU QUẢ',
    time: '02/07/2021, 04:16',
    link: '',
    content:
      'Thường xuyên đau đầu, chóng mặt làm ảnh hưởng không nhỏ đến sức khỏe và cuộc sống sinh hoạt của người bệnh. Để hạn chế tình trạng này, người bệnh có thể áp dụng 5'
  }
]

export interface NewsPage extends Array<NewsPageItem> {}
export interface NewsPageItem {
  id: string
  img: string
  title: string
  time: string
  link: string
  content: string
}
export default NewsPageLayout
