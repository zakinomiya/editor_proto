import React from 'react'
import TopPage from './pages/TopPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ContentPage from './pages/ContentPage'
import Question from './pages/QuestionPage'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={TopPage} />
        <Route exact path="/content/:language/:lessonId" component={ContentPage} />
        <Route exact path="/question/:language/:lessonId" component={Question} />
      </Router>
    </>
  )
}

export default App
