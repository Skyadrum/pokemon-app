import React, { useEffect } from 'react'
import { Card, Form, Button, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getPokeInfo } from '../../actions'


const PokemonSearch = (props) => {

    const pokeName = React.createRef()

    useEffect(() => {
        const name = pokeName.current.value
        props.getPokeInfo(name.toLowerCase())
    }, []);

    const handlerTextBox = () => {
        const pokemonName = pokeName.current.value        
        const textBox = {
            name: pokemonName.toLowerCase()
        }
        props.getPokeInfo(textBox.name)
    }

    return(
        <div>
            <Card className='cards animated fadeIn' border="info">
                <Card.Header className='card-header'>Gotta Catche em all!!!</Card.Header>
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

            <Card>
                {/* {
                    pokeInfo.map((pokemon) => {
                        return <Row>
                                    <Col>{ pokemon.name }</Col>
                                    <Col>{ pokemon.abilities }</Col>
                                </Row>
                    })
                } */}
            </Card>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('Estado:',state);
    return {
        pokeInfo: state.pokeInfo
    }
}

export default connect(mapStateToProps, {getPokeInfo})(PokemonSearch)