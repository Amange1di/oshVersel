import axios from "axios"


const instance = axios.create({
     baseURL: "https://api/api/v1"
    })


export default instance