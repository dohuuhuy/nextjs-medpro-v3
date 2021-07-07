import Footer from '@components/organisms/Footer'
import Header from '@components/organisms/Header'
import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const defaultLayout = ({ children }: Props) => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main style={{ minHeight: '900px' }}>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default defaultLayout
