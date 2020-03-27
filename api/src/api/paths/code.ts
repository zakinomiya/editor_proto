import { Router, RequestHandler } from 'express'
import { execCode } from '../entities/code'
import awaitHandler from '../helper/awaithandler'
const router = Router()

const execute: RequestHandler = async (req, res) => {
    console.log("Request execute code")
    const { language } = req.params
    const { code } = req.body 

    const result = await execCode(language, code)
    res.send(result)
}

router.post("/:language", awaitHandler(execute))

export default router