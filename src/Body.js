import React from 'react'
import './body.css';
import VideoCard from './VideoCard';
function body() {
  return (
    <div className='body'> 
        <h2>Recommended </h2>
        <div className='Recommended__videos'>
            <VideoCard 
            title="become a web develper in 10 minutes| 2019/2200"
            view="2.3k Views"
            timestap="3 days ago"
            ChannelImage="/images/men.png"
            Channel="V3 Solution"
            image="/images/you1.png"
            />
            <VideoCard
            title=" Wheather we like or not"
            view="2M Views"
            timestap="3 days ago"
            ChannelImage="/images/men.png"
            Channel="V3 Solution"
            image="/images/you2.jpg"
            />
            <VideoCard 
            title=" Five Uses for cloud Function"
            view="2M Views"
            timestap="3 days ago"
            ChannelImage="/images/men.png"
            Channel="V3 Solution"
            image="/images/you3.jpg"
            />
            <VideoCard  
            title=" Five Uses for cloud Function"
            view="2M Views"
            timestap="3 days ago"
            ChannelImage="/images/men.png"
            Channel="V3 Solution"
            image="/images/you4.jpg"/>
            <VideoCard 
             title=" Five Uses for cloud Function"
             view="2M Views"
             timestap="3 days ago"
             ChannelImage="/images/men.png"
             Channel="V3 Solution"
             image="/images/you5.jpg"
            />
            <VideoCard 
             title=" Five Uses for cloud Function"
             view="2M Views"
             timestap="3 days ago"
             ChannelImage="/images/men.png"
             Channel="V3 Solution"
             image="/images/you6.jpg"
            />
            <VideoCard 
             title=" Five Uses for cloud Function"
             view="2M Views"
             timestap="3 days ago"
             ChannelImage="/images/men.png"
             Channel="V3 Solution"
             image="/images/you7.jpg"
            />
            <VideoCard 
             title=" Five Uses for cloud Function"
             view="2M Views"
             timestap="3 days ago"
             ChannelImage="/images/men.png"
             Channel="V3 Solution"
             image="/images/you8.jpg"
            />
        </div>
    </div>
  )
}

export default body