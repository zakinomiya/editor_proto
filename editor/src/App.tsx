import React from 'react'
import TopPage from './TopPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ContentPage from './ContentPage'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={TopPage} />
        <Route exact path="/content/:language/:lessonId" component={ContentPage} />
      </Router>
    </>
  )
}

export default App
