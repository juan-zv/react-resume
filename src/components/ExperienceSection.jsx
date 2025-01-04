import React from "react";
import Job from "./Job";

function ExperienceSection({ title, company, period, description, responsibilities }) {
    return (
        <section id="experience">
            <h3>Experience</h3>
            <Job
                title="Online Teacher Assistant for WDD230"
                company="Brigham Young University - Idaho"
                period="April 2023 - Present"
                description="Being a TA has helped me acquire valuable skills which I can use on any project I work on.
                    Troubleshooting is something really important as much as providing support to others.
                    These abilities help me write clean code and think about the accessibility for my projects."
                responsibilities={[
                    "Provided guidance and support to 20+ students in web development using HTML, CSS, and JavaScript.",
                    "Guided students to achieve proficiency in creating responsive, well-designed, and interactive web pages using HTML, CSS, and JavaScript.",
                    "Assisted students in understanding and implementing web development concepts, troubleshoot coding issues, and contribute to a collaborative learning environment."
                ]}
            />
            <Job
                title="International Services Processor"
                company="Brigham Young University - Idaho"
                period="November 2022 - August 2023"
                description="As an international student in the United States, I know first-hand how difficult it can be for us to adapt to a different culture and learn the most important regulations. 
                    Working in the International Services office at BYU-Idaho, I assisted students with migratory issues or concerns. I also helped to process I-20s for incoming students."
                responsibilities={[
                    "Efficiently handled walk-ins, phone calls, and emails, providing information and directing students to appropriate departments.",
                    "Assisted students with administrative processes and immigration-related questions, offering guidance and facilitating necessary paperwork.",
                    "Maintained organized records, schedule appointments, and perform general administrative tasks with attention to detail and multitasking abilities."
                ]}
            />
        </section>
    );
}

export default ExperienceSection;