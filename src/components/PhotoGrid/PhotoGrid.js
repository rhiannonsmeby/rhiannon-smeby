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
            <div className='gridRows'>
            <div className='gridItem'>
                <img src={chicago} alt='chicago'/>
                <p>
                    I moved to Chicago in 2019 and spending time at Lake Michigan quickly 
                    became one of my favorite pastimes.
                </p>
            </div>
            <div className='gridItem'>
                <img src={iowa} alt='iowa' />
                <p>
                    My technical skills include JavaScript ES6, React, HTML5, CSS3, Node, PostgreSQL, 
                    Express, and Jest.
                </p>
            </div>
            <div className='gridItem'>
                <img src={lakefront} alt='lakefront' />
                <p>
                    I recently graduated from Thinkful with a certificate in Software Engineering. 
                    After 6 months of intensive study and practice, I am so excited to get to work 
                    with a great team. 
                </p>
            </div>
            <div className='gridItem'>
                <img src={michigan} alt='michigan' />
                <p>
                    I love spending time outdoors. I took this picture on a weekend getaway to Michigan. I never 
                    imagined it would be so beautiful!
                </p>
            </div>
            <div className='gridItem'>
                <img src={puppy} alt='puppy' />
                <p>
                    In an early-career role as a development assistant, I had my first experience 
                    using/ teaching myself Adobe Illustrator to create the organization's annual report. 
                    Afterwards, I began to think a lot more about how software could play a role 
                    in my career.
                </p>
            </div>
            <div className='gridItem'>
                <img src={uganda} alt='uganda' />
                <p>
                    During college I was lucky enough to study abroad in Uganda. I loved it and I can't wait to visit again someday!
                </p>
            </div>
            <div className='gridItem'>
                <img src={vote} alt='vote' />
                <p>
                    As a former political science major, I did a lot of campaign 
                    work in college. Talking to strangers about their personal and political 
                    values everyday helped me develop important and unique interpersonal skills.
                </p>
            </div>
            <div className='gridItem'>
                <img src={california} alt='california' />
                <p>
                    I have two younger siblings who I absolutely adore. Spending time with 
                    my family is my favorite way to recharge.
                </p>
            </div>      
            </div>
        </section>
    );
}