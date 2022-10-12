import { useDispatch } from "react-redux"
import { selectVideo } from "../store/video/video.actions"

export const VideoPreview = ({ id, description, title, img }) => {

    const dispatch = useDispatch()

    const onSelectVideo = (id) => {
        dispatch(selectVideo(id))
    }

    return (
        <li className='video-preview'>
            <button onClick={() => onSelectVideo(id)} className='preview-btn'>
                <img src={img} className='preview-img' />
                <h3 className='preview-title'>{title}</h3>
                <div className='preview-description'>{description}</div>
            </button>
        </li>
    )
}