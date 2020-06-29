import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Col, Container } from 'react-bootstrap'

import Head from '../head'
import './app.css'
import PokemonSearch from '../pokemonSearch'
import PokemonForm from '../pokemonForm'


const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Head />
                <Route path="/" exact component={ PokemonSearch }></Route>
                <Route path="/pokeForm" component={ PokemonForm }></Route>
            </BrowserRouter>
            <Container>
                <Col>
                    {/* <EventList/> */}
                </Col>
            </Container>
        </div>
    )
}

export default App