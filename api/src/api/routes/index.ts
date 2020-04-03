import { Router } from 'express'
import code from './code'
import textbook from './textbook'
import questions from './questions'

const router = Router()

router.use('/execute_code', code).use('/textbook', textbook).use('/questions', questions)

export default router
