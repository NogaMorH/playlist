import { storageService } from "./async-storage.service"

export const toyService = {
    query,
    getById,
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



function getSongs(term) {
    const API_KEY = 'AIzaSyBL-4tgjB8MxfYouEBcUPllZk2u8noV9kM'
    return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${API_KEY}&q=${term}&maxResults=50`)

}