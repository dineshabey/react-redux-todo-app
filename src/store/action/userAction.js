export const GET_USER_LIST = 'GET_USER_LIST;


export default function getUserList() {
    return {
        type: GET_USER_LIST,
        payload: {
            users: [
                { name: 'Dinesh' },
                { name: 'Abeysinghe' },
                { name: 'Ravi' },
            ]
        }
    }
}