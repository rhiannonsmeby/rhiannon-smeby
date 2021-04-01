import React from 'react';
import chicago from '../../images/chicago.jpg';
import iowa from '../../images/iowa.jpg';
import lakefront from '../../images/lakefront.jpg';
import michigan from '../../images/michigan.jpg';
import puppy from '../../images/puppy.jpg';
import uganda from '../../images/uganda.jpg';
import vote from '../../images/vote.jpg';
import california from '../../images/california.jpg';

export default function PhotoGridImages(props) {
    let image;

    props.photoId === 1 ? image = chicago
        : (props.photoId === 2) ? image = iowa
            : (props.photoId === 3) ? image = lakefront
            : (props.photoId === 4) ? image = michigan
            : (props.photoId === 5) ? image = puppy
            : (props.photoId === 6) ? image = uganda
            : (props.photoId === 7) ? image = vote
            : (props.photoId === 8) ? image = california
            : image = null;
    return (
        <img className='gridImage' src={image} alt={props.title}></img>
    )
}