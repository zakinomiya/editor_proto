import { TextbookFile } from "../../../type/types"

export const readTextbookFile = async (dirPath: string): Promise<TextbookFile> => {
    return new Promise(async (resolve, reject) => {
        const textbookInfo = require(`${dirPath}/info.js`)
        resolve(textbookInfo)
    })
}
