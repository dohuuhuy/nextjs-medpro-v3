import Container from '@components/atoms/Container'
import React, { useState, useEffect } from 'react'
import Editor from './Editor'

const QuyTrinhDetail = () => {
  const [editorLoaded, setEditorLoaded] = useState(false)
  const [data, setData] = useState('')

  useEffect(() => {
    setEditorLoaded(true)
  }, [])
  return (
    <Container>
      <p
        style={{
          color: 'red',
          marginTop: '2rem',
          textAlign: 'center',
        }}
      >
        QuyTrinhDetail
      </p>

      <Editor
        name="description"
        onChange={(data: any) => {
          setData(data)
        }}
        editorLoaded={editorLoaded}
      />

      {JSON.stringify(data)}
    </Container>
  )
}

export default QuyTrinhDetail
