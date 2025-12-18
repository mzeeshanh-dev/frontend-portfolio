import React from "react";
import "../styles/ProjectSkeleton.css";

const ProjectSkeleton = () => {
    return (
        <div className="container skeleton-card">
            <div className="upper">
                <div className="img-wrapper skeleton-box" style={{ height: "180px" }}></div>
                <div className="skill-list">
                    {[1, 2, 3, 4].map((n) => (
                        <div key={n} className="lang skeleton-box" style={{ width: "60px", height: "25px" }}></div>
                    ))}
                </div>
            </div>

            <div className="lower">
                <div className="project-title skeleton-box" style={{ width: "70%", height: "24px" }}></div>
                <div className="project-description skeleton-box" style={{ width: "100%", height: "60px" }}></div>

                <div className="button-group">
                    <div className="skeleton-box" style={{ flex: 1, height: "40px", borderRadius: "10px" }}></div>
                    <div className="skeleton-box" style={{ flex: 1, height: "40px", borderRadius: "10px" }}></div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSkeleton;