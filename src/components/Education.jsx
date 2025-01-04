import React from "react";
// import "./Education.css";

export default function Education({ school, degree, period, gpa, description }) {
    return (
        <div className="school">
            <h4>{school}</h4>
            {degree && <h4>{degree}</h4>}
            <h4>{period}</h4>
            {gpa && <h4>GPA: {gpa}</h4>}
            <p>{description}</p>
        </div>
    );
}