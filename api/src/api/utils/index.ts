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