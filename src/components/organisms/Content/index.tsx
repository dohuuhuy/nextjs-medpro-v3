import { ContentCustom } from '@medpro/booking-libs'
import React from 'react'

interface props {
  data: Array<any>
}

const ContentLayout = ({ data }: props) => {
  return <ContentCustom data={data} />
}

export default ContentLayout
