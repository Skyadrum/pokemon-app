import React, { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getPokeInfo } from '../../actions'


const PokemonList = (props) => {

    const pokeName = React.createRef()

    useEffect(() => {
        const name = pokeName.current.value
        props.getPokeInfo(name.toLowerCase())
    }, []);

    return(
        <div>
            <Card className='cards animated fadeIn' border="info">
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