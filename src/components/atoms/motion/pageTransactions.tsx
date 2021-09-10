import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React from 'react'

export const AnimatePage = ({ children }: any) => {
  const router = useRouter()

  // const [width, setwidth] = useState(0)

  // useEffect(() => {
  //   setwidth(window.innerWidth)
  // })

  // if (width < 1440) return children

  return (
    <motion.div
      style={{ width: '100%' }}
      key={router.asPath}
      variants={pageVariants}
      initial='initial'
      animate='animate'
      exit='exit'
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

export const ease = [0.43, 0.13, 0.23, 0.96]

export const pageVariants = {
  initial: {
    y: '50%',
    opacity: 0,
    transition: { ease, duration: 0.8, delay: 0.8 }
  },
  animate: {
    y: '0%',
    opacity: 1,
    transition: { ease, duration: 0.8 }
  },
  exit: {
    y: '50%',
    opacity: 0,
    transition: { ease, duration: 0.8, delay: 0.8 }
  }
}
