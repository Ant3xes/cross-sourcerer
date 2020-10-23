import React, { Component } from 'react'
import {Card, Nav, CardDeck } from 'react-bootstrap'

export default class Overview extends Component {
    render() {
        return (
            <Card>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                    <Nav.Link disabled>  <Card.Img variant="top" src="holder.js/100px160" /> </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link disabled as="h5">Romain Pereira</Nav.Link>
                    <Nav.Link disabled>Ant3xes</Nav.Link>
                </Nav.Item>
                </Nav>
            </Card.Header>
            <br/>
            <CardDeck>
            <Card>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    Text
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    Text
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    Text
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                Text
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    Text
                </Card.Text>
                </Card.Body>
            </Card>
            </CardDeck>
            </Card>
        )
    }
}


