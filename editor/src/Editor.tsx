import React, { Dispatch, SetStateAction } from 'react'
import AceEditor from 'react-ace'
import axios from 'axios'
import 'ace-builds/src-noconflict/mode-jsx'
import 'ace-builds/src-min-noconflict/ext-searchbox'
import 'ace-builds/src-min-noconflict/ext-language_tools'
axios.defaults.baseURL = 'http://localhost:8000'

const languages = ['javascript', 'python']

const themes = [
  'monokai',
]

languages.forEach(lang => {
  require(`ace-builds/src-noconflict/mode-${lang}`)
  require(`ace-builds/src-noconflict/snippets/${lang}`)
})

themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`))

type Props = {
  language: string
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

const Editor: React.FC<Props> = ({language, value, setValue}) => (
    <AceEditor
      width="100%"
      height="768px"
      mode={language}
      theme={'monokai'}
      name="blah2"
      onChange={setValue}
      value={value}
      fontSize={14}
      showPrintMargin
      showGutter
      highlightActiveLine
      setOptions={{
        useWorker: false,
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2
      }}
    />
  )

export default Editor
