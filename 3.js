const axios = require('axios').default
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

axios.get(BASE_URL).then(response => {
    if(response.status !== 200){ 
        console.log(response.statusText)
        return
    }
    console.log(response.data)
}).catch(err => {
    console.log(err)
})