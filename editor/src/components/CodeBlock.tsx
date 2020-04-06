import React from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-jsx'

const CodeBlock: React.FC<{ value: string; language: string }> = ({
  value,
  language
}) => {
  console.log(value)
  return (
    <AceEditor 
      style={{borderRadius: 3, marginBottom: 15}}
      value={value}
      fontSize={14}
      showPrintMargin={false}
      minLines={1}
      maxLines={100}
      readOnly
      showGutter={false}
      highlightActiveLine={false}
      theme="monokai"
      mode={language}
    />
  )
}

export default CodeBlock
