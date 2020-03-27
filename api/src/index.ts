import express, { RequestHandler } from 'express'
const PORT = process.env.PORT || 8000;

export default class App {
    start(router: RequestHandler) {
        const app = express()
        app.use(router)
        app.listen(PORT)
        console.log("server started on:", PORT)
    }
}
