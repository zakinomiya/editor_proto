import fs from 'fs'
import { exec } from 'child_process'
import { mapLangInfo } from '../../utils'
import { Textbook } from '../../../type/types'

export const fetchText = (language: string, index: number) => {
    console.log("start fetching text")
    const langInfo = mapLangInfo(language)

    const fileName = `${langInfo}_${index}.${langInfo}`
    return fs.readFile(fileName, (err, data) => {
            if(err) throw new Error(JSON.stringify(err))
            console.log("new file created")
    })
}
