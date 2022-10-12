import { useState } from "react";
import { useEffect } from "react";
import { VideoPreview } from "./video-preview"

export const VideoList = ({searchVideos}) => {
const [videos,setVideos] = useState([])

    useEffect(() =>{
        loadVideos()
    },[])
    
    const loadVideos = async () =>{
        const videos = await searchVideos()
        setVideos(videos)
    }


    if (!videos || !videos.length) return <div>loading..</div>
    return (
        <ul>
            {videos.map(video =>(
                <VideoPreview
                id = {video.id.videoId}
                key = {video.id.videoId}
                description = {video.snippet.description}
                title = {video.snippet.title}
                img = {video.snippet.thumbnails.default}
                />
            )) }
        </ul>
    )
}