import React from "react";
// import "./Job.css";

function Job({ title, company, period, description, responsibilities }) {
    return (
        <div className="job">
            <h4>{title}</h4>
            <h4>{company}</h4>
            <h4>{period}</h4>
            <p>{description}</p>
            <ul>
              {responsibilities.map((res, index) => (
                <li key={index}>{res}</li>
              ))}
            </ul>
        </div>
    );
}

export default Job;