import {exec} from 'child_process'
import fs from 'fs'
import { mapLangInfo } from '../../../utils'

export const executeCodeService = (lanuage: string, code: string): Promise<string> => new Promise( async (resolve, reject) => {
    const langInfo = mapLangInfo(lanuage)

    await fs.writeFile(`script.${langInfo[0]}`, code, (err) => {
        if(err) throw new Error(JSON.stringify(err))
        console.log("new file created")
    })

    exec(`${langInfo[1]} script.${langInfo[0]}`, (err, stdout, stderr) => {
        resolve(stdout || stderr)
        console.log("Code Result: ", stdout || stderr)
    })
})

export const checkResultService = (correctOutput: string, result: string) => {
    if( typeof correctOutput !== 'string' || typeof result !== 'string') return  false

    if(correctOutput.replace(/[\n]/g, "") === result.replace(/[\n]/g, "")) {
        return true
    } else {
        return false
    }
}
