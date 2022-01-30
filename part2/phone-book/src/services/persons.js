import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
    return axios.get(baseUrl).then(res => res.data);
}

const create = (newPerObj) =>{
    return axios.post(baseUrl,newPerObj)
                .then(res => res.data)
}

export default {getAll, create};