import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import axios, { AxiosResponse } from 'axios'
import Card from 'react-bootstrap/Card'
import MarkdownView from '../components/MarkdownView'
import ChoiceCard from '../components/ChoiceCard'
import '../stylesheet.css'

type Props = {
  language: string
  lessonId: string
}

export type QuestionInfo = {
  questionText: string
  answers: {
    index: number
    text: string
  }[]
  correctAnswer: number
  nextLessonId: string
  explanation: string
}

const Question: React.FC<Props> = ({ language, lessonId }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number>(-1)
  const [isCorrect, setIsCorrect] = useState<boolean>()
  const [questionInfo, setQuestionInfo] = useState<QuestionInfo>()

  useEffect(() => {
    const f = async () => {
      const res: AxiosResponse<QuestionInfo> | void = await axios
        .get(`/api/questions/${language}/${lessonId}`)
        .catch(e => {
          console.log(e)
        })

      if (!res) return

      res.data.answers.sort(() => (Math.random() > 0.5 ? -1 : 1))
      setQuestionInfo(res.data)
    }

    !questionInfo && f()
  }, [language, lessonId, questionInfo])

  const handleAnswerClick = () => {
    if (selectedAnswer === -1) return

    questionInfo?.correctAnswer === selectedAnswer
      ? setIsCorrect(true)
      : setIsCorrect(false)
  }

  return (
    <Container
      style={{ height: '100vh' }}
      className="d-flex justify-content-center align-items-center"
    >
      {questionInfo && (
        <Col>
          <Card className="border-0">
            <h4 className="blockquote">{questionInfo.questionText}</h4>
            {questionInfo.answers.map((a, i) => (
              <ChoiceCard
                key={i}
                isCorrect={isCorrect}
                correctAnswer={questionInfo.correctAnswer}
                answer={a}
                selectedAnswer={selectedAnswer}
                setSelectedAnswer={setSelectedAnswer}
              />
            ))}
          </Card>
          <Col className="w-100 mt-4 p-0 d-flex justify-content-end">
            {isCorrect === undefined && (
              <Button onClick={handleAnswerClick} style={{ minWidth: 100 }}>
                解答
              </Button>
            )}
            {isCorrect !== undefined && (
              <Col className="p-0">
                <MarkdownView markdown={questionInfo.explanation} />
                <div className="w-100 mt-4 d-flex justify-content-end">
                  <Link
                    to={
                      questionInfo.nextLessonId
                        ? `/content/${language}/${questionInfo.nextLessonId}`
                        : '/'
                    }
                  >
                    <Button variant="outline-secondary">
                      次のレッスンに進む
                    </Button>
                  </Link>
                </div>
              </Col>
            )}
          </Col>
        </Col>
      )}
    </Container>
  )
}

export default Question
