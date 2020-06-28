import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'

const PokemonMembers = () => {
    return(
        <Card className='cards animated fadeIn' border="info">
            <Card.Header className='card-header'>Join Us!!!</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group >
                        <Form.Label >Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Example: Ditto" />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label >User Name</Form.Label>
                        <Form.Control type="text" placeholder="Example: Ditto" />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="text" placeholder="Example: Ditto" />
                    </Form.Group>

                    <Form.Group>
                        <Button variant="outline-info" size="lg" type="button" >Register</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default PokemonMembers