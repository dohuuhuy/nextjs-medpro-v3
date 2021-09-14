import React from 'react'
import styles from './styles.module.less'
import { Space } from 'antd'
import { useForm } from 'react-hook-form'
import { UserAddOutlined, PauseOutlined } from '@ant-design/icons'
import { error, handleProfile, schemaProfile } from './DetailForm/handle'
import { yupResolver } from '@hookform/resolvers/yup'
import Container from '@componentsTest/Container'

export const ChuaKhamCustom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<any>({
    resolver: yupResolver(schemaProfile)
  })

  const submit = (data: any) => {
    console.log({ data })
    reset()
  }

  return (
    <Container className={styles.container}>
      <div className={styles.header}>
        <h5>NHẬP THÔNG TIN BỆNH NHÂN</h5>
        <div className={styles.note}>
          <p>Vui lòng cung cấp thông tin chính xác để được phục vụ tốt nhất.
            Trong trường hợp cung cấp sai thông tin bệnh nhân & điện thoại, việc xác nhận cuộc hẹn sẽ không hiệu lực trước khi đặt khám.</p>
        </div>
        <div className={styles.danger}>
          <span>(*) Thông tin bắt buộc nhập</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(submit)} className={styles.formProfile}>
        <ul className={styles.listProfile}>
          {handleProfile(register)?.map((el: any) => {
            const sub = el.require ? <sup>*</sup> : ''
            return (
              <li key={el.label}>
                <Space direction='vertical' className={styles.enter}>
                  <label>
                    {el?.label} {sub}
                  </label>
                  {el?.enter ? el?.enter(el) : ''}
                </Space>
                {error(el?.name, errors)}
              </li>
            )
          })}
        </ul>
      </form>

      <hr className={styles.hr} />

      <div className={styles.btnFooter}>
        <button className={styles.retype} >
          <PauseOutlined />
          Nhập lại
        </button>
        <button type='submit' className={styles.submit}>
          <UserAddOutlined />
          Tạo mới
        </button>
      </div>
    </Container>
  )
}
