import './video.scss'
import ReactPlayer from "react-player";


  
export  const Video = () => {
    return (
        <div className='video container'>

            <h1 className='video-text1'>Читательные залы</h1>

              
                <div className='video-player'>
                <ReactPlayer 
                        url="https://www.youtube.com/watch?v=sYiv9UEa4pI" 
                        controls 
                        width="100%" 
                        height="100%"
                    />
                </div>
                    
    
    </div>
    );
}

