import Router from './src/api/router'
import App from './src'

(() => {
    const router = new Router().router
    const app = new App

    try {
        app.start(router)
    } catch (e) {
        console.log(e)
    }
})()