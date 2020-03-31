import fs from 'fs'

export const mapLangInfo = (language: string) => {
    switch(language) {
        case "javascript":
            return ['js', 'node']
        case "python":
            return ['py', 'python']
        default: 
            throw new Error("Invalid language")
    }
}

export const readFileAsync = async (filePath: string) => await new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
        if(err) return reject(err)
        if(!data) return reject("read file failed")

        resolve(data.toString())
    })
})
