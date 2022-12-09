import { useEffect } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

const CustomStateUpdater = ({ editorStateJSON }) => {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    if (editor && editorStateJSON) {
      const newEditorState = editor.parseEditorState(editorStateJSON)
      editor.setEditorState(newEditorState)
    }
  }, [editor, editorStateJSON])

  return null
}

export default CustomStateUpdater
