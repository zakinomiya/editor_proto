import React from 'react' 
import {RouteComponentProps} from 'react-router-dom'
import Content from '../components/Content'

type Props = {
    language: string
    lessonId: string
  }
  
const ContentPage: React.FC<RouteComponentProps<Props>> = ({ match }) => {
    const { language, lessonId } = match.params

    return <Content language={language} lessonId={lessonId} />
}

export default ContentPage
