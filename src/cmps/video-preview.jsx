export const VideoPreview = ({id,key,description,title,img}) => {
    return (
        <li>
            <button>
           <img src={img} />
           <h3>{title}</h3> 
           <div>{description}</div> 
            </button>
        </li>
    )
}