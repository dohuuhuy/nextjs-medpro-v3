import { Button, Result, Space } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export const ResultCustom = () => {
  const router = useRouter()
  const [confirmLoading, setConfirmLoading] = React.useState(false)

  const handleLoadingRefresh = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setConfirmLoading(false)
      router.reload()
    }, 2000)
  }
  return (
    <div>
      <Result
        status='404'
        title='Xin lỗi vì sự cố này !'
        subTitle={
          <p>
            Chúng tôi đang cố gắng khắc phục trong thời gian sớm nhất ! <br />{' '}
            Vui lòng quay lại sau !
          </p>
        }
        extra={
          <Space>
            <Button
              type='primary'
              loading={confirmLoading}
              onClick={handleLoadingRefresh}
            >
              Làm mới
            </Button>
            <Button type='primary'>
              <Link href='/'>
                <a style={{ color: 'white' }}> Về Trang chủ</a>
              </Link>
            </Button>
          </Space>
        }
      />
    </div>
  )
}
