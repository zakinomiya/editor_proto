import React, { useState, useEffect } from 'react'
import Editor from './Editor'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import axios, { AxiosResponse } from 'axios'
import Textbook from './Textbook'
import { RouteComponentProps, Link } from 'react-router-dom'

export type TextbookInfo = {
  title: string
  subtitle: string
  defaultValue: string
  markdown: string
  language: string
  answer: string
  nextLessonId: string | null
}

export type CodeResult = {
  result: string
  isResultCorrect: boolean
}

type Props = {
  language: string
  lessonId: string
}

const Content: React.FC<Props> = ({ language, lessonId }) => {
  const [result, setResult] = useState('')
  const [value, setValue] = useState<string>('')
  const [textbookInfo, setTextbookInfo] = useState<TextbookInfo>()
  const [showAnswer, setShowAnswer] = useState(false)
  const [success, setSuccess] = useState<boolean>()

  useEffect(() => {
    const f = async () => {
      console.log('start fetching content')
      const res: AxiosResponse<TextbookInfo> | void = await axios
        .get(`api/textbook/${language}/${lessonId}`)
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
  }, [language, lessonId, value])

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer)
  }

  const handleClick = async () => {
    if (!value) return
    const res: AxiosResponse<
      CodeResult
    > | void = await axios
      .post(`api/execute_code/${language}?lessonId=${lessonId}`, { code: value })
      .catch(e => {
        console.log(e)
      })

    if (!res) {
      console.log(res)
      return
    }

    setSuccess(res.data.isResultCorrect)
    setResult(res.data.result)
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
                <Button
                  className="mr-2"
                  variant="warning"
                  onClick={handleShowAnswer}
                >
                  {showAnswer ? 'Hide answer' : 'Show answer'}
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
                  minHeight: '100px',
                  borderRadius: 3,
                  background: 'whitesmoke'
                }}
                className="p-4"
              >
                {result}
              </div>
            </Row>
            <Row
              className="d-flex justify-content-end mt-4"
              style={{ width: '100%' }}
            >
              {success === true && (
                <>
                  {textbookInfo.nextLessonId ? (
                    <Link
                      to={`/content/${language}/${textbookInfo.nextLessonId}`}
                      
                      onClick={() => {
                        setSuccess(false)
                        setResult('')
                        setValue('')
                      }}
                    >
                      <Button>次のレッスンへ行く</Button>
                    </Link>
                  ) : (
                    <Link to="/">
                      <Button>トップページに戻る</Button>
                    </Link>
                  )}
                </>
              )}
            </Row>
          </Col>
        </>
      )}
    </Row>
  )
}

export default Content
