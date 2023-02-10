import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap';
import http from "../http-common";



export default function CarComponent() {
    const [cars, setCars]= useState([]);
    const [listElements, setListElements] = useState();
    

    useEffect(() => {
        setListElements(dataRows);
      }
    , [cars]);
    


   const  FetchCars = () => {
    http.get("/Car").then((res) => {
        setCars(res.data);
        });   
   };

   const dataRows = () => (<>{cars.map((car) => 
        <tr key={car.Id}>
            <td>{car.ManufacturerName}</td>
            <td>{car.Model}</td>
            <td>{car.Year}</td>
            <td>{car.TopSpeed}</td>
            <td>{car.KilometersTraveled}</td>
        </tr>)}</> );
    

   

  return (
    <div>
        <Button onClick={FetchCars}>Get all cars</Button>
        {cars.length > 0 && 
         <Table striped bordered hover>
            <thead>
                <tr>
                <th>Manufacturer name</th>
                <th>Model</th>
                <th>Year</th>
                <th>Top speed</th>
                <th>Kilometers traveled</th>
                </tr>
                {listElements}
            </thead>
        </Table>
        }
    </div>
  )
}
