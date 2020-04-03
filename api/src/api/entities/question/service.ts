import { QuestionInfo } from "../../../type/types"
import fs from 'fs'

type ReadFile<T> = (dirPath: string) => Promise<T>
type ReadFileHOF = (fileName: string, doParse: boolean) => (dirPath: string) => Promise<any>

const readFilePromise: ReadFileHOF = (fileName, doParse) => (dirPath) => 
    new Promise(async (resolve, reject) => {
        fs.readFile(`${dirPath}/${fileName}`, (err, data) => {
            if(err) return reject(err)
            if(!data) return reject("read file failed")

            const dataStr = data.toString()

            resolve(doParse ? JSON.parse(dataStr) : dataStr)
        })
    })

export const readQuestionFile: ReadFile<QuestionInfo> = (dirPath) => readFilePromise('question.json', true)(dirPath)
export const readAnswerFile: ReadFile<string> = (dirPath) => readFilePromise('answer.md', false)(dirPath)
