import React from "react";
import Skill from "./Skill";

function SkillsSection() {
    return (
        <section id="skills">
            <h3>Skills</h3>
            <Skill category="Programming Languages" skills={["Python", "JavaScript", "C#", "TypeScript", "Kotlin", "Rust"]} />
            <Skill category="Web Development" skills={["SCSS", "HTML", "Firestore", "Flutter", "React", "React Native"]} />
            <Skill category="Tools and Technologies" skills={["Node.js", "Git", "Figma", "VS Code", "Android Studio"]} />
        </section>
    );
}

export default SkillsSection;