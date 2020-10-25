import React, { Component } from 'react'
import {Card } from 'react-bootstrap'

export default class Overview extends Component {
    render() {
        return (         
            <Card>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    Overview
                </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}


