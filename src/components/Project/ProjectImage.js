import React from 'react';
import happy from '../../images/happy-habit-landing-page-top.jpg';
import bachelor from '../../images/landingpagetop.jpg';
import spaced from'../../images/spacedreplanding.jpg';

export default function ProjectImage(props) {
    let image;
    
    props.projectId === 1 ? image = bachelor
        : (props.projectId === 2) ? image = happy
            : (props.projectId === 3) ? image = spaced
            : image = null;
    return (
        <img className='projectImage' src={image} alt={props.projectTitle}></img>
    );
}