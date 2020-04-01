import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom'
import './stylesheet.css'

const ContentCard: React.FC<{src: string; language: string}> = ({src, language}) => (
    <Card
        style={{ height: 400, width: 300 }}
        className="shadow rounded border-0 content-card"
    >
        <Card.Body>
            <div
                className="d-flex justify-content-center align-items-end"
                style={{ height: 250 }}
            >
                <Image
                    src={src}
                    width={250}
                    height={183}
                />
            </div>
            <div
                className="d-flex justify-content-center align-items-end"
                style={{ height: 100 }}
            >
                <h2>{language === 'javascript' ? "JavaScript" : "Python"}を学ぶ</h2>
        </div>
        </Card.Body>
    </Card>
)

const TopPage = () => {
  return (
    <Container
      style={{ height: '100vh' }}
      className="d-flex justify-content-center align-items-center"
    >
      <Row>
        <Col className="d-flex justify-content-center align-items-center m-4">
            <Link to="/content/javascript/001" className="link">
                <ContentCard src={require("./static/logo-javascript.png")} language="javascript"/>
            </Link>
        </Col>
        <Col className="d-flex justify-content-center align-items-center m-4">
            <Link to="/content/python/001" className="link">
                <ContentCard src={require("./static/logo-python.png")} language="python"/>
            </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default TopPage
