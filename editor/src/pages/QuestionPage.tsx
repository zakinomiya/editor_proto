import React from 'react'
import Container from 'react-bootstrap/Container'
import { RouteComponentProps } from 'react-router-dom'
import Question from '../components/Question'

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

const QuestionPage: React.FC<RouteComponentProps<Props>> = ({ match }) => {
  const { language, lessonId } = match.params

  return (
    <Container
      style={{ height: '100vh' }}
      className="d-flex justify-content-center align-items-center"
    >
      <Question language={language} lessonId={lessonId} />
    </Container>
  )
}

export default QuestionPage
