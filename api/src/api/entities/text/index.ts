import fs from 'fs'
import { mapLangInfo, readFileAsync } from '../../../utils'
import { TextbookInfo } from '../../../type/types'
import { readTextbookFile } from './service'

export const fetchTextbookInfo = async (language: string, lessonId: string): Promise<TextbookInfo> => {
    console.log("start fetching text")

    const extension = mapLangInfo(language)[0]
    const filePath = `${process.env.PWD}/src/texts/${extension}/${lessonId}`
    const textbook = await readTextbookFile(filePath)
        .catch(e => {
            throw e
        })
    const markdown: string = await readFileAsync(`${filePath}/text.md`)
        .catch(e => {
            throw e
        })
    
    return {...textbook, markdown}
}
