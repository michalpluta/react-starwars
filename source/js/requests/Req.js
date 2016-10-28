import axios from 'axios';

// let getPeople = () => {
//     return axios.get('http://swapi.co/api/people')
// }


let getPerson = (id) => {
    return axios.get('http://swapi.co/api/people/' + id)
}

export {getPerson}