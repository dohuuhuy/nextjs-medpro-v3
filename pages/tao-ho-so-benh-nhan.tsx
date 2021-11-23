import { CreateForm } from '@componentsTest/CreateProfile'
import dynamic from 'next/dynamic'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const CreateFormPage = () => {
  return <CreateForm />
}

CreateFormPage.Layout = DefaultLayout
export default CreateFormPage
