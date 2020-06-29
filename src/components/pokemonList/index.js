import React from 'react'
import { Container, Table} from 'react-bootstrap'
import { connect } from 'react-redux'

import '../animate.css'

const PokemonList = (props) => {
    console.log('PROPS', props);

    return(
        <Container className='animated fade-in fast'>
            
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Pokemon Name</th>
                        <th>Base Experience</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.pokeInfo.map((pokemon) => {
                            return <tr key={ pokemon.data.id }>
                                        <td>{ pokemon.data.id }</td>
                                        <td>{ pokemon.data.name }</td>
                                        <td>{ pokemon.data.base_experience }</td>
                                        <td>{ pokemon.data.weight }</td>
                                    </tr>
                        })                        
                    }
                </tbody>
            </Table>
        </Container>
    )
}

const mapStateToProps = (state) => {
    console.log('Pokemon INFO:',state);
    return {
        pokeInfo: state.pokemonInfo,
    }
}

export default connect(mapStateToProps)(PokemonList)