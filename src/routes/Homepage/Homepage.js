import React from 'react';
import INFO from '../../store/infoStore';
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';
import './Homepage.css';
import ReactGA from 'react-ga';

export default class Homepage extends React.Component {

    componentDidMount() {
        ReactGA.initialize('G-QVFRBZR8CD')
        ReactGA.pageview(window.location.pathname + window.location.search)
    }

  render () {
    // Get photos and descriptions from the store
    const infoPhotos = INFO.map(info => {
        return <PhotoGrid key={info.id} info={info} />
    })
    
    return (
        <div className='homepage'>
            <div className='photos'>
                <h2>Click on the photos below to learn about me:</h2>
                <section className='gridContainer'>
                    <div className='gridRows'>
                        {infoPhotos}
                    </div>
                </section>
            </div>
            <div className='about-me'>
                <h2>More about me:</h2>
                <p>
                    I enjoy programming with JavaScript and I
                    am passionate about creating web apps that help make life easier and more fun!
                </p>
                <p>
                    After graduating from college, I began working as a development coordinator
                    at a local nonprofit. I got to design and regularly update the 
                    organization's website, create marketing copy for social media, lead donor communications, and
                    write grants. While I was there, I quickly realized the value 
                    (and fun!) in coding.
                </p>
                <p>
                    Recently, I have been immersed in a full-time Software Engineering  
                    certificate program where I learned JavaScript, HTML, CSS, and associated 
                    front-end and back-end languages and libraries. 
                </p>
                <p>
                    In addition to programming I love painting, spending time outdoors, reading, and watching bad reality TV.
                </p>
                <p>
                    Check out my <a href={`https://docs.google.com/document/d/1qi1i3YY0NO8XRGlfLuwDW78kpWSzrpVjXHVJDE9cjCs/edit?usp=sharing`} target={"_blank"} rel={'noreferrer'}>resume</a>, <a href={`https://github.com/rhiannonsmeby`} target={"_blank"} rel={'noreferrer'}>GitHub</a>, or <a href={`https://www.linkedin.com/in/rhiannonsmeby/`} target={"_blank"} rel={'noreferrer'}>LinkedIn</a> to learn more about my qualifications!
                </p>
            </div>
        </div>
    );
  }
}