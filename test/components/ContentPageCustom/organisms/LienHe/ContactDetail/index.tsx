/* eslint-disable react-hooks/rules-of-hooks */
import { yupResolver } from '@hookform/resolvers/yup'
import { Space } from 'antd'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { error, handlerListFrom } from './handler'
import styles from './styles.module.less'

const schemaContact = yup.object().shape({
  fullname: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().required()
})

export const ContactDetail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<any>({
    resolver: yupResolver(schemaContact)
  })

  const submit = (data: any) => {
    console.log({ data })
    reset()
  }

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.formContact}>
      <ul className={styles.listContact}>
        {handlerListFrom(register)?.map((el: any) => {
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

      <button type='submit'>Gửi hỗ trợ</button>
    </form>
  )
}
