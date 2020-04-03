export type TextbookFile = {
    title: string
    subtitle: string
    explanation: string
    answer: string
    correctOutput: string
}

export type TextbookInfo = {
    markdown: string
} & TextbookFile
 
export type QuestionInfo = {
    questionText: string
    answers: {
        index: number
        text: string
    }[]
    correctAnswer: number
    nextLessonId: string
}
