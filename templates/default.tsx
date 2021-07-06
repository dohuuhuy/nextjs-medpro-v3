import React, { ReactNode } from 'react'
import Footer from '../src/components/organisms/Footer'
import Header from '../src/components/organisms/Header'
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
