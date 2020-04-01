import express, {
  Router as eRouter,
  NextFunction,
  Request,
  Response,
  ErrorRequestHandler
} from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import paths from './routes'

export default class Router {
  public router: express.Router
  constructor() {
    const router = eRouter()
    router
      .use(express.json())
      .use(express.urlencoded({ extended: false }))
      .use(cookieParser())
      .use(cors())
      .use(express.json())
      .use(express.urlencoded({ extended: false }))
      .use(cookieParser())
      .use((req, _, next) => {
        console.log(req.method ,"request on", req.url)
        next()
      })
      .use("/api", paths)
      .use(this.errorHandler)

    this.router = router
  }

  errorHandler: ErrorRequestHandler = (
    error: {statusCode: number} & Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.log(error)
    res.status(error.statusCode || 500).send(error)
  }
}
