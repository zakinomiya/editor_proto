import { mapLangInfo } from '../../../utils'
import { readQuestionFile, readAnswerFile } from './service'

export const fetchQuestionInfo = async (language: string, lessonId: string) => {
    console.log("start getting question")

    const extension = mapLangInfo(language)[0]
    const dirPath = `${process.env.PWD}/src/texts/${extension}/${lessonId}`

    const question = await readQuestionFile(dirPath)
    const answerExplanation = await readAnswerFile(dirPath)

    return {...question, explanation: answerExplanation}
}
