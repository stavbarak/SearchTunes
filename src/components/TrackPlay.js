import React from 'react';

const TrackPlay = ({playingUrl, previewUrl}) => (
    <div className="trackPlay">
        <div className="trackPlayInner">
            {
                playingUrl === previewUrl ? <span>| |</span> :  <span>&#9654;</span>
            }
        </div>
    </div>
);

export default TrackPlay;