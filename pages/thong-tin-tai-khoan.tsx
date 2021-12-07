import { User } from '@componentsTest/UserInfo'
import dynamic from 'next/dynamic'
import React from 'react'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const CreateFormPage = (props: any) => {
  return <User {...props} />
}

CreateFormPage.Layout = DefaultLayout
export default CreateFormPage
