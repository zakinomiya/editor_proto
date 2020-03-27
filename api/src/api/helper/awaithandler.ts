import { Response, NextFunction } from 'express'

const awaitHandler = (fn: any) => {
  return async (req: any, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next)
    } catch (err) {
      next(err)
    }
  }
}

export default awaitHandler
