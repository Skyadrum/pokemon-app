import axios from 'axios'

export default axios.create({
    baseURL: ' https://pokeapi.co/api/v2/' //Aqui se configura la peticion a la Api
})
