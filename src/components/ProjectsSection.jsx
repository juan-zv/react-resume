import React from 'react';
import Project from './Project';

function ProjectsSection() {
    return (
        <section id="projects">
            <h3>Projects</h3>
            <Project
                title="Juan Zurita Portfolio"
                imgSrc="./src/assets/react-app.jpg"
                description="Static web page designed to showcase my projects and provide a professional biography."
            />
            <Project
                title="U&I Ride"
                imgSrc="./src/assets/u-i-ride.png"
                description="Mobile app concept aimed at optimizing ride-sharing services in the Idaho-Utah area."
            />
        </section>
    );
}

export default ProjectsSection;
