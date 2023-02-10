import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
export default function CarForm() {

  /*  {
        
        "StoredInShop": "b157d464-713c-4539-a40f-103440e04ea5",
        "ManufacturerName": "BMW",
        "Model": "5M",
        "Year": "2014/2/11",
        "TopSpeed": 280,
        "Color": "White",
        "KilometersTraveled": 10000
    }*/
    const StoredInShop = "b157d464-713c-4539-a40f-103440e04ea5";

    function PostCar(){

    }

  return (
    <div>
        <Form>
            <Form.Group className='mb-3' controlId='formManufacturerName'>
                <Row>
                    <Col>
                        <Form.Label>Manufacturer name:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control type='text'/>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formModel'>
                <Row>
                    <Col>
                        <Form.Label>Model:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control type='text'/>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formColor'>
                <Row>
                    <Col>
                        <Form.Label>Color:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control type='text'/>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formTopSpeed'>
                <Row>
                    <Col>
                        <Form.Label>Top speed:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control type='number'/>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formKilometersTraveled'>
                <Row>
                    <Col>
                        <Form.Label>Kilometers traveled:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control type='number'/>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group>
                <Form.Label>Year of manufacture:</Form.Label>
                
            </Form.Group>
            <Button type='submit' onSubmit={PostCar}>Submit</Button>
        </Form>
    </div>
  )
}
