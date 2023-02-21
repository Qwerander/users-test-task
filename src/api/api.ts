import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://reqres.in/api/',
    headers: {
        'Content-Type': 'application/json',
     
    },
});

export type UserType = {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
    like: boolean
}

type RequestUsersType = {
    data: Array<UserType>
}


type ApiType = {
    getUsers: () => Promise<RequestUsersType>;
}

export const api: ApiType = {
    getUsers: async () => {
        const resp = await instance.get('users');
        return resp.data;
    },
}