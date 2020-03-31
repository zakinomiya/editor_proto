import fs from 'fs'
import { mapLangInfo, readFileAsync } from '../../../utils'
import { Textbook } from '../../../type/types'

export const fetchTextbookInfo = (language: string, index: string): Promise<Textbook> => {
    console.log("start fetching text")
    const langInfo = mapLangInfo(language)

    const fileName = `${langInfo[0]}_${index}.${langInfo[0]}`
    return new Promise(async (resolve, reject) => {
        const textbookInfo = require(`${process.env.PWD}/src/texts/${fileName}`)
        const markdown = await readFileAsync(`${process.env.PWD}/src/texts/${fileName.split(".")[0]}.md`)
            .catch(e => {
                reject(e)
            })

        if(!markdown) return reject("read file failed")

        resolve({...textbookInfo, markdown})
    })
}
