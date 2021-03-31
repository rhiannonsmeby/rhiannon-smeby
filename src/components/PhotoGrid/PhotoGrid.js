import React from 'react';
import './PhotoGrid.css';
import chicago from '../../images/chicago.jpg';
import iowa from '../../images/iowa.jpg';
import lakefront from '../../images/lakefront.jpg';
import michigan from '../../images/michigan.jpg';
import puppy from '../../images/puppy.jpg';
import uganda from '../../images/uganda.jpg';
import vote from '../../images/vote.jpg';
import california from '../../images/california.jpg';

export default function PhotoGrid() {
    return (
        <section className='gridContainer'>
            <img className='gridItem' src={chicago} alt='chicago'/>
            <img className='gridItem' src={iowa} alt='iowa' />
            <img className='gridItem' src={lakefront} alt='lakefront' />
            <img className='gridItem' src={michigan} alt='michigan' />
            <img className='gridItem' src={puppy} alt='puppy' />
            <img className='gridItem' src={uganda} alt='uganda' />
            <img className='gridItem' src={vote} alt='vote' />
            <img className='gridItem' src={california} alt='california' />
        </section>
    );
}