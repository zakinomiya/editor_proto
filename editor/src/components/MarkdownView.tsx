import React from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'

type Props = {
  markdown: string 
}

const MarkdownView: React.FC<Props> = ({ markdown }) => {
    return (
    <ReactMarkdown
        source={markdown}
        renderers={{ code: CodeBlock }}
    />
  )
}

export default MarkdownView
