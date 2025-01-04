import React from "react";

export default function Skill({ category, skills }) {
    return (
        <div className="skill">
            <h4>{category}</h4>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>
                        <img src={"src/assets/" + skill.toLowerCase() + ".svg"} alt={skill} />
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}