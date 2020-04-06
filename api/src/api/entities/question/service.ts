import { QuestionInfo } from "../../../type/types"
import fs from 'fs'

type ReadFile<T> = (dirPath: string) => Promise<T>
type ReadFileHOF = <T>(fileName: string, shouldParse: boolean) => ReadFile<T>

const readFilePromise: ReadFileHOF = (fileName, shouldParse) => (dirPath) => 
    new Promise(async (resolve, reject) => {
        fs.readFile(`${dirPath}/${fileName}`, (err, data) => {
            if(err) return reject(err)
            if(!data) return reject("read file failed")

            const dataStr = data.toString()

            resolve(shouldParse ? JSON.parse(dataStr) : dataStr)
        })
    })

export const readQuestionFile = (dirPath: string) => readFilePromise<QuestionInfo>('question.json', true)(dirPath)
export const readAnswerFile= (dirPath: string) => readFilePromise<string>('answer.md', false)(dirPath)
