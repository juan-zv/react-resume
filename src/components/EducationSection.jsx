import React from 'react';
import Education from './Education';

export default function EducationSection({ children }) {
    return (
        <section id="education">
            <h3>Education</h3>
            <Education
                school="Brigham Young University - Idaho"
                degree="Bachelor's Degree in Computer Science"
                period="April 2022 - Present"
                gpa="3.78/4.00"
                description="
                    I am currently studying Computer Science with an emphasis on Machine Learning at Brigham Young University-Idaho. 
                    Among the coursework that I have taken, I have learned the application of different data structures and algorithms, 
                    and the basics of Object-Oriented Programming. Other useful knowledge I have acquired includes work methodologies like SCRUM and DevOps,
                     as well as web development tools like SASS and front-end libraries."
            />
            <Education
                school="Certificate of Computer Programming"
                period="Completed: August 2024"
                description="This certificate covers the essential knowledge to be part of a software development team. 
                    Among the coursework I have taken to achieve this certificate, there is a firm foundation on Object Oriented Programming, Database handling, 
                    Web Development with JavaScript, Data Structures, and Algorithm analysis and design."
            />
        </section>
    );
}