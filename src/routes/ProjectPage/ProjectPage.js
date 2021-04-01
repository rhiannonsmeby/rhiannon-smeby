import React from 'react';
import './ProjectPage.css';
import PROJECTS from '../../store/projectStore';
import Project from '../../components/Project/Project';

export default function ProjectPage() {
    const featuredProjects = PROJECTS.map(project => {
        return <Project key={project.id} project={project} />
    })
    return (
        <section className='projectSection'>
            <h2>My recent projects:</h2>
            {featuredProjects}
        </section>
    );
}