import ReactPlayer from "react-player"

function videoPlayer(url) {
    return (
        <ReactPlayer 
            url={url}
            muted={true} 
            loop={true} 
            playing={true} 
            width='auto' 
            height='auto' 
            style={{
              display: 'flex',
              justifyContent: 'center', 
            }}
        />
    )
}

export default videoPlayer