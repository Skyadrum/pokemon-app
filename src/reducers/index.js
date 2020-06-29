// Reducers
import { combineReducers } from 'redux'

const searchReducer = (pokemon = [], action) => {
    switch(action.type) {
        case 'GET_POKEMON_INFO':
            return [...pokemon, action.payload]
        default:
            return pokemon
    }
} 

// New member reducers
const memebersReducer = (memberList = [], action) => {
    switch(action.type) {
        case 'NEW_MEMBER':
            return [...memberList, action.payload]
        default:
            return memberList

    }
}


export default combineReducers({
    pokemonInfo: searchReducer,
    newMembers: memebersReducer,
})