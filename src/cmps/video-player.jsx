import { useSelector } from "react-redux"

export const VideoPlayer = () => {

   const currVideoId = useSelector(state => state.videoModule.currVideoId)

   return (
      <iframe width="420" height="345" src={`https://www.youtube.com/embed/${currVideoId}`}>
      </iframe>
   )
}