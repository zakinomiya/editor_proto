import { Router, RequestHandler } from 'express'
import { fetchTextbookInfo } from '../entities/text'
import awaitHandler from '../helper/awaithandler'
const router = Router()

const fetchTextbook: RequestHandler = async (req, res) => {
    console.log("Fetch text by index")
    const { language, index } = req.params

    const result = await fetchTextbookInfo(language, index)
        .catch(e => {
            console.log(e)
            throw e
        })
    
    res.send(result)
}

router.get("/:language/:index", awaitHandler(fetchTextbook))

export default router