import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import '../stylesheet.css'

const LanguageCard: React.FC<{src: string; language: string}> = ({src, language}) => (
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

export default LanguageCard
