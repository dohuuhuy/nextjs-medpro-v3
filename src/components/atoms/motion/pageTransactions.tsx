import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export const AnimatePage = ({ children }: any) => {
  const router = useRouter()

  const [width, setwidth] = useState(0)

  useEffect(() => {
    setwidth(window.innerWidth)
  })

  console.log('width :>> ', width)

  if (width < 1440) return children
  return (
    <motion.div
      style={{ width: '100%' }}
      key={router.asPath}
      transition={spring}
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -500, opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export const spring = {
  type: 'spring',
  damping: 20,
  stiffness: 100,
  when: 'afterChildren'
}
