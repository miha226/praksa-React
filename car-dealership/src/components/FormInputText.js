import React from 'react'
import {Form, Row} from 'react-bootstrap';


export default function FormInputText(params) {
const handleChange = event => {
    params.onChange(params.id, event.target.value);
};
    
  return (
    <>
    <Form.Group className='mb-3'>
                <Row>
                <Form.Label>{params.label}: </Form.Label>
                </Row>
                <Row>
                <Form.Control id={params.id} name={params.name} type={params.type} value={params.value} onChange={handleChange}/>
                </Row>                    
    </Form.Group>
    </>
  )
}
