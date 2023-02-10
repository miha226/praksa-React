import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function () {
  return (
    <Navbar variant='dark' expand='lg'>
        <Container fluid>
            <Nav>
                <Nav.Link href='/'>Cars</Nav.Link>
                <Nav.Link href='/putCar'>Put car</Nav.Link>
                
            </Nav>
        </Container>
    </Navbar>
  )
}
