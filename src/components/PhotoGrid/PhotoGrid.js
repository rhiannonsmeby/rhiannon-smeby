import React, { useState } from 'react';
import PhotoGridImages from './PhotoGridImages';
import './PhotoGrid.css';

export default function PhotoGrid(props) {
    let [showMe, setShowMe] = useState(false);

    function handleClick() {
        setShowMe(prevShowMe => !prevShowMe);
    }
        return (
            <div className='gridItem gridItemBlur' onClick={handleClick}>
                <PhotoGridImages photoId={props.info.id} photoName={props.info.name}/>
                {showMe ? <p>
                    {props.info.content}
                </p> : null}
            </div>
        );
}