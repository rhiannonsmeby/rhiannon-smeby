import React from 'react';
import './ProjectPage.css';
import happy from '../../images/happy-habit-landing-page-top.jpg';
import bachelor from '../../images/landingpagetop.jpg';
import spaced from'../../images/spacedreplanding.jpg';

export default function ProjectPage() {
    return (
        <section className='projectSection'>
            <h2>My recent projects:</h2>
            <div className='project'>
                <h3 className='projectTitle'>
                    <a href='https://bachelor-analysis-app.vercel.app/' rel='noreferrer' target='_blank'>Bachelor Analysis</a>
                </h3>
                <a href='https://github.com/rhiannonsmeby/bachelor-analysis-app' rel='noreferrer' target='_blank'>View the GitHub Repository</a>
                <img className='projectImage' src={bachelor} alt='Bachelor Analysis Landing Page' />
                <p className='projectDescription'>
                    Bachelor Analysis is a tool for fans of the Bachelor franchise. This web app 
                    allows users to view contestant data by season, search contestant data by keyword, 
                    and save summaries of any contestant data they found to be interesting or useful 
                    to a public summary page where other users can view the same data and the original 
                    poster's comments. 
                </p>
                <p className='projectDescription'>
                    Tech stack: React.js, Node.js, Express, PostgreSQL, CSS
                </p>
            </div>
            <div className='project'>
                <h3 className='projectTitle'>
                    <a href='https://happy-habit.vercel.app/' rel='noreferrer' target='_blank'>Happy Habit</a>
                </h3>
                <a href='https://github.com/rhiannonsmeby/happy-habit' rel='noreferrer' target='_blank'>View the GitHub Repository</a>
                <img className='projectImage' src={happy} alt='Happy Habit Landing Page' />
                <p className='projectDescription'>
                    Happy Habit is a cross between a habit tracker and a mood log; it enables 
                    users to keep track of their moods before and after completing coping 
                    exercises, and refer back to their entries on their personal dashboard. 
                    Happy Habit is protected by authentication so users can feel comfortable 
                    using the website for emotional wellness. 
                </p>
                <p className='projectDescription'>
                    Tech stack: React.js, Node.js, Express, PostgreSQL, CSS
                </p>
            </div>
            <div className='project'>
                <h3 className='projectTitle'>
                    <a href='https://spaced-repetition-alpha-lovat.vercel.app/register' rel='noreferrer' target='_blank'>Spaced Repetition</a>
                </h3>
                <a href='https://github.com/rhiannonsmeby/spaced-repetition-client' rel='noreferrer' target='_blank'>View the GitHub Repository</a>
                <img className='projectImage' src={spaced} alt='Spaced Repetition Landing Page' />
                <p className='projectDescription'>
                    This website teaches users the essential French words for an easy 
                    trip to the boulangerie using the spaced repetition revision technique. This project 
                    demonstrates my ability to work with an existing code base and utilize 
                    the Linked List data structure.
                </p>
                <p className='projectDescription'>
                    Tech stack: React.js, Node.js, Express, CSS 
                </p>
            </div>
        </section>
    );
}