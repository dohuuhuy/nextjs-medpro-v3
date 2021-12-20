import React from 'react'
import { useForm } from 'react-hook-form'
import Container from '@componentsTest/Container'
import { error, handleFormPatient, schemaContact } from './handler'
import { Space } from 'antd'
import styles from './styles.module.less'
import cx from 'classnames'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod'

export const CreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<any>({
    resolver: zodResolver(schemaContact)
  })
  const submit = () => {
    reset()
  }
  return (
    <Container>
      <form onSubmit={handleSubmit(submit)} className={styles.formContact}>
        <ul className={styles.listContact}>
          {handleFormPatient(register)?.map((el: any) => {
            const sub = el?.require ? <sup>*</sup> : ''
            return (
              <li key={el?.label}>
                <Space
                  direction='vertical'
                  className={
                    el.name === 'birthday'
                      ? cx(styles.birthday, styles.enter)
                      : styles.enter
                  }
                >
                  <label>
                    {el?.label} {sub}
                  </label>
                  {el?.enter ? el?.enter(el) : ''}

                  {error(el?.name, errors)}
                </Space>
              </li>
            )
          })}
        </ul>
        <button type='submit' className={styles.submit}>
          Gửi hỗ trợ
        </button>
      </form>
    </Container>
  )
}
