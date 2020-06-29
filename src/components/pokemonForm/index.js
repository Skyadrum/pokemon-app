import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { newMember } from '../../actions'
import MemberList from '../pokemonMembersList'
import './members.css'

const PokemonMembers = (props) => {

    const nameRef = React.createRef()
    const userNameRef = React.createRef()
    const emailRef = React.createRef()

    const click = () => {

        const fullName = nameRef.current.value
        const userName = userNameRef.current.value
        const email = emailRef.current.value

        if (fullName == '' || fullName == null || userName == '' || userName == null || email == '' || email == null)  {
            alert('Please fill in all the fields of the form')
        } else {
            const formObj = {
                name: nameRef.current.value ,
                userName: userNameRef.current.value ,
                email: emailRef.current.value
            }
    
            props.newMember(formObj)
            showResults('none')
            showSpinner('block');
        
            setTimeout(() => {
                showResults('block')
                showSpinner('none');
            }, 3000);
        }
        
        clean()
    }

    // Mostrar ocultar contenido
    const showSpinner = (display) =>{
        const spinner = document.querySelector('.contenido-spinner')
        spinner.style.display = display
    }

    const showResults = (display) =>{
        const table = document.querySelector('.resultado')
        table.style.display = display
    }

    const clean = () => {
        nameRef.current.value = ''
        userNameRef.current.value = ''
        emailRef.current.value = ''
    }

    return(

        <div>
        <Card className='cards animated fadeIn margin-20' border="info">
            <Card.Header className='card-header'>Join Us!!!</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group >
                        <Form.Label >Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" ref={ nameRef } />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label >User Name</Form.Label>
                        <Form.Control type="text" placeholder="User Name" ref={ userNameRef } />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" ref={ emailRef } />
                    </Form.Group>

                    <Form.Group>
                        <Button variant="outline-info" size="lg" type="button" onClick={ click } >Register</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>

        {/* Spiner */}
        <div className="spinner contenido-spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>

        <Card className='cards animated fadeIn margin-20 resultado'>
            <Card.Header className='card-header'>Showing list of members</Card.Header>
            <Card.Body>
                <MemberList />
            </Card.Body>

        </Card>
        </div>
    )
}

export default connect(null, { newMember })(PokemonMembers)