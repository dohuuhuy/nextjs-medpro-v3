import React from 'react'
import styles from './styles.module.less'
import Link from 'next/link'
const MenuLayout = () => {
  return (
    <div className={styles.demo}>
      <Link href={'bd'}></Link>
    </div>
  )
}

export default MenuLayout
