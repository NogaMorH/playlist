import { VideoList } from "../cmps/video-list"
import { VideoPlayer } from "../cmps/video-player"
import { VideoSearch } from "../cmps/video-search"

export const Player = () => {
    return (
        <div>
            <VideoSearch />
            <VideoList />
            <VideoPlayer />
            <h1>hello from home</h1>
        </div>
    )
}