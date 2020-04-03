import React, { Dispatch, SetStateAction } from 'react'
import {QuestionInfo} from './Question'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import { FaRegCheckCircle, FaTimes } from 'react-icons/fa'

type Props = {
    answer: QuestionInfo["answers"][0]
    correctAnswer: number
    selectedAnswer: number
    isCorrect: boolean | undefined
    setSelectedAnswer: Dispatch<SetStateAction<number>>
}

const ChoiceCard: React.FC<Props> = ({answer, correctAnswer, selectedAnswer, isCorrect, setSelectedAnswer}) => {
    const isCorrectAnswer = answer.index = correctAnswer

    return (
        <Card
          className={`w-100 my-4 shadow ${
            answer.index === selectedAnswer ? 'border-secondary' : ''
          }
          ${
            isCorrect !== undefined
              ? isCorrectAnswer
                ? 'border-success'
                : 'border-danger'
              : ''
          }
        `}
          key={answer.index}
        >
          <Card.Body onClick={() => setSelectedAnswer(answer.index)}>
            <Row className="pl-4">
              {isCorrect !== undefined && (
                <div className="mr-4">
                  {isCorrectAnswer ? <FaRegCheckCircle /> : <FaTimes />}
                </div>
              )}
              <h5>{answer.text}</h5>
            </Row>
          </Card.Body>
        </Card>
      )
}

export default ChoiceCard
