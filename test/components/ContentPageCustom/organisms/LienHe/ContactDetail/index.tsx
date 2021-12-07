/* eslint-disable react-hooks/rules-of-hooks */
import { zodResolver } from '@hookform/resolvers/zod/dist/zod'
import { Space } from 'antd'
import React from 'react'
import { useForm } from 'react-hook-form'
import { error, handlerListFrom, schemaContact } from './handler'
import styles from './styles.module.less'

export const ContactDetail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<any>({
    resolver: zodResolver(schemaContact)
  })

  const submit = (data: any) => {
    console.log({ data })
    reset()
  }

  const disabled = Object.keys(errors).length >= 1

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.formContact}>
      <ul className={styles.listContact}>
        {handlerListFrom(register)?.map((v, i) => {
          const sub = v?.require ? <sup>*</sup> : ''
          return (
            <li key={i}>
              <Space direction='vertical' className={styles.enter}>
                <label>
                  {v?.label} {sub}
                </label>
                {v?.enter ? v?.enter(v) : ''}

                {error(v?.name, errors)}
              </Space>
            </li>
          )
        })}
      </ul>

      <button type='submit' disabled={disabled} className={styles.submit}>
        Gửi hỗ trợ
      </button>
    </form>
  )
}
