import React, { Component } from 'react'
import {Navbar, Form, Nav } from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                <Form inline>
                    <Nav.Link href="#home">Home</Nav.Link>
                </Form>
          </Navbar>         
        )
    }
}
