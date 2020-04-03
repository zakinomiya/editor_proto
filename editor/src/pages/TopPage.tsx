import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import LanguageCard from '../components/LanguageCard'
import {Link} from 'react-router-dom'
import '../stylesheet.css'

const TopPage = () => {
  return (
    <Container
      style={{ height: '100vh' }}
      className="d-flex justify-content-center align-items-center"
    >
      <Row>
        <Col className="d-flex justify-content-center align-items-center m-4">
            <Link to="/content/javascript/001" className="link">
                <LanguageCard src={require("../static/logo-javascript.png")} language="javascript"/>
            </Link>
        </Col>
        <Col className="d-flex justify-content-center align-items-center m-4">
            <Link to="/content/python/001" className="link">
                <LanguageCard src={require("../static/logo-python.png")} language="python"/>
            </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default TopPage
