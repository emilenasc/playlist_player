import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:3001`
})

export function getPlaylist() {
    return api.get('/playlist').then((response) => {
        return response.data
    })
}