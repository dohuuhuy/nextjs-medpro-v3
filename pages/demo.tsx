import Image from 'next/image'
import React from 'react'

const demo = () => {
  return (
    <div>
      <h1>This is heading 1</h1>
      <h2>This is heading 2</h2>
      <h3>This is heading 3</h3>
      <h4>This is heading 4</h4>
      <h5>This is heading 5</h5>
      <h6>This is heading 6</h6>

      <Image
        src='https://firebasestorage.googleapis.com/v0/b/facebook-1f413.appspot.com/o/posts%2FYMkeLJmBR8nuB2lZRt6v?alt=media&token=862401a7-5f60-4288-b3a5-28dada31a69d&fbclid=IwAR3005poGjiXd8OEJQJcitxttZ9rjb2Kr8aO8zee4m0zodt5KuuQ7WltVtA'
        width='1000'
        height='695'
      />
    </div>
  )
}

export default demo
