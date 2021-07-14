import React, { useEffect, useRef } from 'react'

function Editor({ onChange, editorLoaded, name, value }: any) {
  const editorRef = useRef<any>()
  const { CKEditor, ClassicEditor }: any = editorRef.current || {}

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    }
  }, [])

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          data={value}
          onChange={(_evsent: any, editor: { getData: () => any }) => {
            const data = editor.getData()
            // console.log({ event, editor, data })
            onChange(data)
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  )
}

export default Editor
