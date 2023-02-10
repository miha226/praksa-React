import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import http from '../http-common'
export default function CarForm() {
    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");
    const [color, setColor] = useState("");
    const [year, setYear] = useState();
    const [topSpeed, setTopSpeed] = useState();
    const [kilometersTraveled, setKilometersTraveled] = useState();
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

    function PostCar(e){
        var object = { 
            "StoredInShop": "b157d464-713c-4539-a40f-103440e04ea5",
        "ManufacturerName": manufacturer,
        "Model": model,
        "Year": year,
        "TopSpeed": topSpeed,
        "Color": color,
        "KilometersTraveled": kilometersTraveled
        };
        http.post("/Car", object).then(res => {
            console.log(res);
        });
        console.log(object);
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
                        <Form.Control name='manufacturerName' value={manufacturer} onChange={(e)=>{setManufacturer(e.target.value)}} type='text'/>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formModel'>
                <Row>
                    <Col>
                        <Form.Label>Model:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control name='model' value={model} onChange={(e)=>{setModel(e.target.value)}} type='text'/>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formColor'>
                <Row>
                    <Col>
                        <Form.Label>Color:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control name='color' value={color} onChange={e=>{setColor(e.target.value)}} type='text'/>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formTopSpeed'>
                <Row>
                    <Col>
                        <Form.Label>Top speed:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control name='topSpeed' value={topSpeed} onChange={e=>{setTopSpeed(e.target.value)}} type='number'/>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formKilometersTraveled'>
                <Row>
                    <Col>
                        <Form.Label>Kilometers traveled:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control name='kilometersTraveled' value={kilometersTraveled} onChange={e=>{setKilometersTraveled(e.target.value)}} type='number'/>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group>
                <Form.Label>Year of manufacture:</Form.Label>
                <Form.Control name='date' value={year} onChange={e=>{setYear(e.target.value)}} type='date'/>
            </Form.Group>
            <Button type='submit' onClick={PostCar}>Submit</Button>
        </Form>
    </div>
  )
}
