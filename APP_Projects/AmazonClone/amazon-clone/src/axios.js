import axios from 'axios'

const instance = axios.create({
    //CLOUD URL  API
    baseURL:'http://127.0.0.1:5001/clone-dda1b/us-central1/api' //the api (cloud function) url
})

export default instance;