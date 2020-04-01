import fs from 'fs'
import { mapLangInfo } from '../../../utils'
import { readTextbookFile } from '../text/service'
import { executeCodeService, checkResultService } from './service'

export const execCode = async (language: string, code: string, lessonId: string) => {
    console.log("start executing code")

    const extension = mapLangInfo(language)[0]
    const filePath = `${process.env.PWD}/src/texts/${extension}/${lessonId}`
    const {correctOutput} = await readTextbookFile(filePath)
        .catch(e => {
            console.log(e)
            throw e
        })

    const result = await executeCodeService(language, code)
        .catch(e => {
            throw e
        })
    
    const isResultCorrect = checkResultService(correctOutput, result)
    return { result, isResultCorrect }
}
