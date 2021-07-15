import axios from 'axios';

const gradeService = axios.create({
    baseURL: 'https://practical-challenge-module4-be.herokuapp.com',
    headers: {
        'Content-type': 'application/json',
      }
    }
)

export default gradeService;