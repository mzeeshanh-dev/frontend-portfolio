import React, { useState, useEffect } from 'react';
import '../styles/Services.css';
import { FaCode, FaServer, FaPalette, FaTimes, FaArrowRight } from 'react-icons/fa';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            title: 'Frontend Developer',
            icon: <FaCode />,
            description: [
                'Develop web applications using Angular, JavaScript, TypeScript, HTML5, CSS3 and Bootstrap.',
                'Develop and manage front-end applications with great user experience.',
                'Provide insights and contributions to API Development from a front-end perspective.',
                'Test software to ensure responsiveness and efficiency.',
                'Troubleshoot, debug and upgrade software.',
                'Capability to produce content on time, with attention to detail, and an emphasis on identifying and pitching to a target audience.',
                'Working in Agile environment.',
                'Use repository tools (Git).',
            ],
        },
        {
            title: 'Backend Developer',
            icon: <FaServer />,
            description: [
                'Design and maintain server-side logic using Node.js, Python, and Express.',
                'Manage databases with MySQL, MongoDB, and ensure data integrity.',
                'Implement RESTful APIs and integrate with front-end applications.',
                'Optimize application performance and scalability.',
                'Handle server security and data protection.',
                'Automate deployment processes with CI/CD pipelines.',
                'Monitor and troubleshoot server issues.',
                'Collaborate with frontend developers for seamless integration.',
                'Utilize cloud services like AWS or Azure.',
                'Maintain version control with Git.',
            ],
        },
        {
            title: 'UI/UX Design',
            icon: <FaPalette />,
            description: [
                'Create intuitive and visually appealing user interfaces.',
                'Conduct user research and gather feedback for design improvements.',
                'Design wireframes, prototypes, and high-fidelity mockups.',
                'Ensure accessibility and usability standards.',
                'Collaborate with developers to implement designs.',
                'Perform usability testing and iterate based on results.',
                'Develop style guides and design systems.',
                'Optimize designs for various devices and screen sizes.',
                'Use tools like Figma, Adobe XD, and Sketch.',
                'Present design concepts to stakeholders.',
            ],
        },
    ];

    const openModal = (service) => setSelectedService(service);
    const closeModal = () => setSelectedService(null);

    // ✅ Lock scroll when modal is open
    useEffect(() => {
        if (selectedService) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedService]);

    return (
        <div className="services-container">
            <h1 className="services-title">My Services</h1>
            <div className="cards-grid">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="service-card"
                        onClick={() => openModal(service)}
                    >
                        <div className="card-icon">{service.icon}</div>
                        <h2 className="card-title">{service.title}</h2>
                        <span className="view-more">View More<FaArrowRight /></span>
                    </div>
                ))}
            </div>

            {selectedService && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <FaTimes />
                        </button>
                        <div className="modal-icon">{selectedService.icon}</div>
                        <h2 className="modal-title">{selectedService.title}</h2>
                        <ul className="modal-description">
                            {selectedService.description.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
