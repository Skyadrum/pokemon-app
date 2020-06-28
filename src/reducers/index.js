// Reducers
import { combineReducers } from 'redux'


const searchReducer = (name="pikachu", action) => {
    switch(action.type) {
        case 'GET_POKEMON_INFO':
            return action.payload
        default:
            return name
    }
}

export default combineReducers({
    pokemonInfo: searchReducer
})