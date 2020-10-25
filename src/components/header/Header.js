import React, { Component } from 'react'
import {Navbar, Form, Nav, Image } from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Nav.Link href="#home"><Image src='https://github.com/pu-erh/github/raw/main/sourcerer.logo.png' style={{height : '60px', width : '60px'}}></Image></Nav.Link>
          </Navbar>         
        )
    }
}
