import React, { useState } from 'react'
import {Form, ButtonGroup, ToggleButton, Card} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FormInputText from './FormInputText';




export default function FormComponent(props) {
    const [values, setValues] = useState({});
    const radios = [
        { name: 'Working'},
        { name: 'Student' },
        { name: 'Unemployed' },
    ];
    
    const handleFieldChange = (fieldId, value) => {
    setValues({...values, [fieldId]:value});
    };

    const components = props.fields.map(field => (
        <FormInputText id={field} label={field} onChange={handleFieldChange} value={values[field]} type="text"/>
    ));

    function ClearVariables(){
       
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(values);
        var newField;
        props.fields.forEach(field =>{
            newField = {...newField, [field]:""};
        });
        setValues(newField);
    }

    

    const getVarient = radioName => {
        var x;
        switch(radioName){
            case "Working": x='outline-success' ;
            break;
            case "Student": x='outline-warning' ;
            break;
            default: x='outline-danger'
        }
        return x;
    }

  return (
    <div>
        <Card body className='text-black'>

        <Form onSubmit={handleSubmit}>
            {components}
            <ButtonGroup>
            {radios.map((radio) => (
                <ToggleButton
                key={radio.name}
                id={`radio-${radio.name}`}
                type="radio"
                variant={ getVarient(radio.name)}
                name="radio"
                value={radio.name}
                checked={values["radio"] === radio.name}
                onChange={(e) => handleFieldChange("radio", e.currentTarget.value)}>
                {radio.name}
            </ToggleButton>
            ))}
            </ButtonGroup>
            <div>
            <Button size='lg' type="submit"  variant='primary' onClick={ClearVariables}>Submit</Button>
            </div>
        </Form>
            </Card>
    </div>
  )
}
