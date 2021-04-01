import React from 'react';
import ProjectImage from './ProjectImage';
import './Project.css'

export default function Project(props) {
    return (
        <div className='project'>
            <h3 className='projectTitle'>
                <a href={props.project.liveLink} rel='noreferrer' target='_blank'>{props.project.name}</a>
            </h3>
            <ProjectImage projectId={props.project.id} />
            <p className='projectDescription'>
                {props.project.description}
            </p>
            <p className='projectDescription'>
                Tech stack: {props.project.stack}
            </p>
            <a href={props.project.clientRepo} rel='noreferrer' target='_blank'>View the GitHub Repository</a>
        </div>
    );
}