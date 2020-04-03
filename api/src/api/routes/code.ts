import { Router, RequestHandler } from 'express'
import { execCode } from '../entities/code'
import awaitHandler from '../helper/awaithandler'
const router = Router()

const execute: RequestHandler = async (req, res) => {
    console.log("Request execute code")
    const { language, lessonId } = req.params
    const { code } = req.body 

    if( !lessonId || !code ) { 
        const err = new Error("missing param")
        Object.defineProperty(err, "statusCode", {value: 401})
        throw err
    }

    const result = await execCode(language, code, lessonId)
    res.send(result)
}

router.post("/:language/:lessonId", awaitHandler(execute))

export default router