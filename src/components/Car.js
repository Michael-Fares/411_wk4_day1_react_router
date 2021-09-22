import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //

import { Card, CardContent, CardActions, Divider } from '@material-ui/core'

import { Link } from 'react-router-dom'


const Car = (props) => {
    const car = cars.find(item => item.id == props.match.params.id)
    console.log(props.match.params.id)
    console.log('car', car)
    return (
        <div className = "car-container-large">
        
        
            <Card key={car.id}className="card">
                <CardContent>
                    <span>{car.Name.toUpperCase()}</span>
                    <ul>
                    <li>Miles_per_Gallon: {car["Miles_per_Gallon"]}</li>
                    <li>Cylinders: {car["Cylinders"]}</li>
                    <li>Displacement: {car["Displacement"]}</li>
                    <li>Horsepower: {car["Horsepower"]}</li>
                    <li>Weight_in_lbs: {car["Weight_in_lbs"]}</li>
                    <li>Acceleration: {car["Acceleration"]}</li>
                    <li>Year: {car["Year"]}</li>
                    <li>Origin: {car["Origin"]}</li>
                    </ul>
                </CardContent>
                <Divider />
                <CardActions style={{ color: 'mediumblue' }}>
                    <Link to="/">Go Back</Link>
                </CardActions>
            </Card>
        </div>
   
    )
}

export default Car