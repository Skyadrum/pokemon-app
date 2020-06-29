import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getPokeInfo } from '../../actions'
import PokemonList from '../pokemonList'

import './search.css'
import '../animate.css'

const PokemonSearch = (props) => {

    const pokeName = React.createRef()

    const handlerTextBox = () => {
        const pokemonName = pokeName.current.value
            
        if (pokemonName == '' || pokemonName == null) {
            alert('Please put the name of the pokemon')
        } else {
            const textBox = {
                name: pokemonName.toLowerCase()
            }
            props.getPokeInfo(textBox.name)
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

    // CleanForm
    const clean = () => {
        pokeName.current.value = ''
    }

    return(
        <div>
            <Card className='cards animated fadeIn margin-20' border="info">
                <Card.Header className='card-header'>Gotta Catch em all!!!</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group >
                            <Form.Label >Pokemon Name</Form.Label>
                            <Form.Control type="text" placeholder="Example: Ditto" ref={ pokeName } />
                        </Form.Group>

                        <Form.Group>
                            <Button variant="outline-info" size="lg" type="button" onClick={ handlerTextBox } >Get the info</Button>
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
            <Card.Header className='card-header-1'>Showing Pokemon Info</Card.Header>
                <Card.Body>
                    <PokemonList/>
                </Card.Body>
            </Card>
        </div>
    )
}

export default connect(null, { getPokeInfo })(PokemonSearch)