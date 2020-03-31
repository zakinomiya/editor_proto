import { Router } from 'express'
import code from './code'
import textbook from './textbook'

const router = Router()

router.use('/execute_code', code).use('/textbook', textbook)

export default router
