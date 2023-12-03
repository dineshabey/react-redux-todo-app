import axios from "axios";

export const GET_USER_LIST = 'GET_USER_LIST';

export function getUserList() {

    axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(function (response) {
            // handle success
            console.log(response.data);
            return {
                type: GET_USER_LIST,
                payload:
                    response.data,
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })


}