import { VideoList } from "../cmps/video-list"
import { VideoPlayer } from "../cmps/video-player"
import { VideoSearch } from "../cmps/video-search"
import { videoService } from "../services/video.service"



export const Player = () => {
    const searchVideos = async (term = 'beatles') => {
        const result = await videoService.getSongs(term)
        return result.data.items
    }


    return (
        <div>
            <VideoSearch />
            <VideoList searchVideos={searchVideos} />
            <VideoPlayer />
            <h1>hello from home</h1>
        </div>
    )
}