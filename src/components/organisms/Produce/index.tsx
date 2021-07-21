import Produce from '@components/test/Produce'
import React from 'react'

const produce = {
    "key": "quy-trinh",
    "link": "/quy-trinh",
    "url": "/quy-trinh",
    "name": "Quy trình",
    "sortOrder": 4,
    "icon": "fal fa-stethoscope",
    "content": [
      {
        "id": "5cff0381-d3fc-4c85-87e7-7c1cd276b71e",
        "stepName": "Bước 1",
        "name": "Đặt lịch khám",
        "content": "<ul>\n        <li>Người dùng truy cập và đăng nhập phần mềm qua:</li>\n        <li>Ứng dụng di động: \"Bệnh viện Bình Thạnh\" hoặc website: \"https://anphuochospital.medpro.com.vn\"</li>\n        <li>Chọn thông tin khám: ngày khám, giờ khám</li>\n      </ul>",
        "sortOrder": 1
      },
      {
        "id": "6f2ec78e-f069-40cf-ae47-51ba8c0a1cea",
        "stepName": "Bước 4",
        "name": "Xác nhận Người bệnh đến bệnh viện khám theo hẹn",
        "content": " <ul>\n    <li>Người bệnh khám tại các phòng khám chuyên khoa theo sự hướng dẫn của nhân viên y tế.</li>\n    <li>Thực hiện cận lâm sàng (nếu có) và đóng phí tại các quầy thu ngân</li>\n    <li>Khi đủ kết quả cận lâm sàng, người bệnh quay lại phòng khám gặp Bác sĩ nhận toa thuốc.</li>\n  </ul>",
        "sortOrder": 1
      },
      {
        "id": "71a59cd8-7d4b-4f18-9b9f-770310127bfa",
        "stepName": "Bước 2",
        "name": "Thanh toán tiền khám",
        "content": " <ul>\n        <li>Người dùng chọn và thực hiện thanh toán qua một trong các phương thức có tích hợp trên phần mềm:</li>\n        <li>Ví điện tử</li>\n        <li>Thẻ thanh toán quốc tế (Visa/MasterCard/JCB)</li>\n        <li>Thẻ ATM nội địa có kích hoạt tính năng thanh toán trực tuyến</li>\n      </ul>\n      <p><strong>Lưu ý tổng số tiền thanh toán sẽ bao gồm:</strong></p>\n      <ul>\n        <li>Tiền khám: dịch vụ theo quy định của bệnh viện.</li>\n        <li>Phí tiện ích: 10,000 đồng.</li>\n        <li>Sau khi thanh toán thành công Phiếu khám điện tử sẽ được gửi qua email, tin nhắn sms và trên phần mềm.</li>\n      </ul>",
        "sortOrder": 1
      },
      {
        "id": "dcd2878c-4c44-482a-9963-bfe197717ebd",
        "stepName": "Bước 3",
        "name": "Xác nhận Người bệnh đến bệnh viện khám theo hẹn",
        "content": "<ul>\n    <li>Sau khi đặt khám thành công phiếu khám điện tử sẽ được gửi ngay qua email, tin nhắn sms và trên phần mềm.</li>\n    <li><strong>Đến ngày khám, </strong> quý khách vui lòng đến cửa tiếp nhận số 1 để được hướng dẫn vào phòng khám.</li>\n  </ul>",
        "sortOrder": 1
      }
    ]
  };

const ProduceLayout = () => {
    return (
        <Produce dataProduce={produce} />
    )
}

export default ProduceLayout
