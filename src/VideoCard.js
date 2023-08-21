import { Avatar } from '@material-ui/core'
import React from 'react'
import './VideoCard.css'
function VideoCard({ image, title, Channel, view, timestap, ChannelImage }) {
    return (
        <div className='videocard'>
            <img className='Thumbnail' src={image} alt=''></img>
            <div className='Cardinfo'>
                <div className="men">
                    <Avatar alt={Channel} src={ChannelImage} />
                </div>
                <div className='Description' >

                    <h4>
                        {title}
                    </h4>

                    <div className='channel'>
                        <span>
                            {Channel}
                        </span><br />
                        <span>
                            {view}.{timestap}
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default VideoCard