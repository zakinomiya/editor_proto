import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

type Props = {
    language: string
}

const LanguagePage: React.FC<RouteComponentProps<Props>> = ({match}) => {
    const {language} = match.params

    return (
        <Container>
            <Row>
                <Col>学習する</Col>
                <Col>問題を解く</Col>
            </Row>
        </Container>
    )
}

export default LanguagePage
