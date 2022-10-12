import { storageService } from "./async-storage.service"
import axios from "axios"



export const videoService = {
    // query,
    getById,
    getSongs
}

const STORAGE_KEY = 'toys'


// function query() {
//     return storageService.query(STORAGE_KEY)
//         .then(toys => {
            // if (!toys || !toys.length) {
            //     httpService.postMany(STORAGE_KEY, gDefaultToys)
            //     toys = gDefaultToys
            // }
//             return toys
//         })
// }

function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}



async function getSongs(term) {
    const API_KEY = 'AIzaSyBL-4tgjB8MxfYouEBcUPllZk2u8noV9kM'
    return await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${API_KEY}&q=${term}&maxResults=25`)

}