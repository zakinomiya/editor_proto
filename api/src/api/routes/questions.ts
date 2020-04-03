import { Router, RequestHandler } from 'express'
import awaitHandler from '../helper/awaithandler'
import { fetchQuestionInfo } from '../entities/question/index'
const router = Router()

const getQuestion: RequestHandler = async (req, res) => {
    console.log("Fetch Question")
    const { language, lessonId } = req.params

    const result = await fetchQuestionInfo(language, lessonId)
    res.send(result)
}

router.get("/:language/:lessonId", awaitHandler(getQuestion))

export default router
