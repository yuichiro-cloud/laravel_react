import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import StatusAlert from '../Elements/StatusAlert'

const Home = () => (
    <>
        <SessionAlert target="status" />
        You are logged in!
    </>
)
export default Home
