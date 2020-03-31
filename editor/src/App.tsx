import React, { useState, useEffect } from 'react'
import Editor from './Editor'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import axios, { AxiosResponse } from 'axios'
import Textbook from './Textbook'

export type TextbookInfo = {
  title: string
  subtitle: string
  defaultValue: string
  markdown: string
  language: string
  answer: string
}

const App = () => {
  const [result, setResult] = useState('')
  const [value, setValue] = useState('')
  const [textbookInfo, setTextbookInfo] = useState<TextbookInfo>()
  const [showAnswer, setShowAnswer] = useState(false)
  const [language, setLanguage] = useState('javascript')

  useEffect(() => {
    const f = async () => {
      console.log('start fetching content')
      const res: AxiosResponse<TextbookInfo> | void = await axios
        .get(`api/textbook/${language}/001`)
        .catch(e => {
          console.log(e)
        })

      if (!res) {
        console.log(res)
        return
      }

      setTextbookInfo(res.data)
      if (!value) setValue(res.data.defaultValue)
    }
    !value && f()
  }, [language, value])

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer)
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value)
  }

  const handleClick = async () => {
    if (!value) return
    const res = await axios
      .post(`api/execute_code/${language}`, { code: value })
      .catch(e => {
        console.log(e)
      })

    if (!res) {
      console.log(res)
      return
    }

    setResult(res.data)
  }

  return (
    <Row className="p-4 m-0">
      {textbookInfo && (
        <>
          <Col style={{ width: '100%' }}>
            <Textbook textbookInfo={textbookInfo} />
          </Col>
          <Col style={{ width: '100%' }}>
            <Row className="pt-2 m-0">
              <Editor
                language={language}
                value={showAnswer ? textbookInfo.answer : value}
                setValue={setValue}
              />
              <div
                className="d-flex justify-content-end mt-4"
                style={{ width: '100%' }}
              >
                <select
                  onChange={handleChange}
                  value={language}
                  className="mr-2"
                >
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                </select>
                <Button className="mr-2" variant="warning" onClick={handleShowAnswer}>
                  {showAnswer ? "Hide answer" : "Show answer"}
                </Button>
                <Button variant="success" onClick={handleClick}>
                  Console
                </Button>
              </div>
            </Row>
            <Row className="m-0 mt-2">
              <div
                style={{
                  border: '1px solid gray',
                  width: '100%',
                  minHeight: '150px',
                  borderRadius: 3,
                  background: 'whitesmoke'
                }}
                className="p-4"
              >
                {result}
              </div>
            </Row>
          </Col>
        </>
      )}
    </Row>
  )
}

export default App
