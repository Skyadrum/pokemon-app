// Actions
import pokeApi from '../api'

export const getPokeInfo = (name) => {
    return async(dispatch, getState)  => {
        const pokeInfo = await pokeApi.get('pokemon/' + name)
        console.log('Poke INFO',pokeInfo);
        dispatch({
            type: 'GET_POKEMON_INFO',
            payload: pokeInfo
        })
    }
}

// Form Actions
export const newMember = (info) => {
    return {
        type: 'NEW_MEMBER',
        payload: {
            name: info.name,
            userName: info.userName,
            email: info.email
        }
    }
}