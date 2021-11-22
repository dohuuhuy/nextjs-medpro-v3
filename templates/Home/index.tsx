import React from 'react'

const HomeLayout = ({ children }: any) => {
  return (
    <section>
      <header>menu</header>
      {children}
      <footer>footer</footer>
    </section>
  )
}
export default HomeLayout
