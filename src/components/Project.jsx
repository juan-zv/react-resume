import React from "react";

export default function Project({ title, imgSrc, description }) {
    return (
        <div className="project">
            <h4>{title}</h4>
            <img src={imgSrc} alt={title} />
            <p>{description}</p>
        </div>
    );
} 