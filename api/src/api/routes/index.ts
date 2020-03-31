import { Router } from 'express'
import code from './code'

const router = Router()

router.use("/execute_code", code)

export default router
