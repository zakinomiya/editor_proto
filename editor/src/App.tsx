import React from 'react'
import TopPage from './pages/TopPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ContentPage from './pages/ContentPage'
import QuestionPage from './pages/QuestionPage'
import LanguagePage from './pages/LanguagePage'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={TopPage} />
        <Route exact path="/content/:language/:lessonId" component={ContentPage} />
        <Route exact path="/question/:language/:lessonId" component={QuestionPage} />
        <Route exact path="/language/:language" component={LanguagePage} />
      </Router>
    </>
  )
}

export default App
