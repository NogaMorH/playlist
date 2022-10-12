import axios from "axios"

export const videoService = {
    getSongs
}

async function getSongs(term) {
    const API_KEY = 'AIzaSyBL-4tgjB8MxfYouEBcUPllZk2u8noV9kM'
    return await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${API_KEY}&q=${term}&maxResults=5`)

}