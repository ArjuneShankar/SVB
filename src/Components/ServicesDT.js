import React from 'react';

const ServicesDT = () => {
    const services = [
        {
            title: "DRIVING LESSONS",
            description: "Improve your driving skills and knowledge in a supportive environment with our tailored driving lessons suited to your goals, skill level, and timetable.",
            color: "#F18F73",
            icon: "bi bi-book"
        },
        {
            title: "DRIVING ASSESSMENT & MOCK TEST",
            description: "Have one of our qualified instructors evaluate your maneuvers, knowledge of road rules and driver behavior appropriate to NZ standards.",
            color: "#727272",
            icon: "bi bi-check2-square"
        },
        {
            title: "TEST CAR FOR HIRE",
            description: "Hire one of our dual-control practice cars that comes with a Supervisor for your practical driving test.",
            color: "#F18F73",
            icon: "bi bi-car-front"
        },
        {
            title: "DRIVING SIMULATOR",
            description: "Ease gently into your practical driving lessons with our driving simulator in the safety of a room.",
            color: "#727272",
            icon: "bi bi-display"
        }
    ];  

    return (
        <div className="container py-5">
            <h2 className="text-center mb-5">Our Services</h2>
            <div className="row">
                {services.map((service, index) => (
                    <div key={index} className="col-md-6 col-lg-3 mb-4">
                    <div className="card text-white h-100" style={{ backgroundColor: service.color }}>
                            <div className="card-body d-flex flex-column align-items-center text-center">
                                <i className={`bi ${service.icon} mb-3`} style={{ fontSize: '2rem' }}></i>
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.description}</p>
                                <a href="#" className="btn btn-light mt-auto">Read More</a>
                            </div>  
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesDT;
