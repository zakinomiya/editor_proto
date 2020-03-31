import React from 'react'
import ReactMarkdown from 'react-markdown'
import { TextbookInfo } from './App'
import CodeBlock from './CodeBlock'

type Props = {
  textbookInfo: TextbookInfo
}

const Textbook: React.FC<Props> = ({ textbookInfo }) => {
    return (
    <ReactMarkdown
        source={textbookInfo.markdown}
        renderers={{ code: CodeBlock }}
    />
  )
}

export default Textbook
