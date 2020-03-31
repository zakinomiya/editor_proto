import { Router, RequestHandler } from 'express'
import { execCode } from '../entities/code'
import awaitHandler from '../helper/awaithandler'
const router = Router()

const fetchText: RequestHandler = async (req, res) => {
    console.log("Fetch text by index")
    const { language, index } = req.params

    const result = await execCode(language, code)
    res.send(result)
}

router.get("/:language/:index", awaitHandler(fetchText))

export default router