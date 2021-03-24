import React from 'react'
import './Homepage.css'

export default function Homepage() {
    return (
        <div className='homepage'>
            <div className='introduction'>
                <h2>Hi, </h2>
                <h3>I'm Rhiannon</h3>
                <p>
                    I am a <strong>Software Engineer</strong> living in <strong>
                    Chicago, Illinois</strong>.
                </p>
                <p>
                    I enjoy programming JavaScript applications and as a former 
                    political science major and lifetime student of the social sciences, I
                    am passionate about creating web apps that make life easier and better.
                </p>
                <p>
                    Take a look at my website and feel free to <a href={`mailto:smebyrhi@gmail.com`} target={`_blank`}>contact me</a>!
                </p>
            </div>
            <div className='about-me'>
                <p>
                    After graduating college, I began working as a development coordinator
                    at a local nonprofit. I got to design and regularly update the 
                    organization's website, create marketing copy for social media, and
                    write grants. While I was there, I quickly realized the value 
                    (and fun!) in coding.
                </p>
                <p>
                    After that, I enrolled in a full-time Software Engingineering Immersion 
                    certificate program where I learned HTML, CSS, JavaScript, and associated 
                    frontend and backend languages and libraries. 
                </p>
                <p>
                    In addition to programming- I love painting, running, reading, and bad reality tv.
                </p>
                <p>
                    Check out my resume, GitHub, or LinkedIn to learn more about my qualifications!
                </p>
            </div>
        </div>
    )
}