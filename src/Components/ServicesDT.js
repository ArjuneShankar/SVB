import React from 'react';
import a1 from '../Assets/a1.png'

const ServicesDT = () => {
    const services = [
        {
            title: "DRIVING LESSONS",
            description: "Improve your driving skills and knowledge in a supportive environment with our tailored driving lessons suited to your goals, skill level, and timetable.",
            color: "#727272",
            image: a1
        },
        {
            title: "DRIVING ASSESSMENT & MOCK TEST",
            description: "Have one of our qualified instructors evaluate your maneuvers, knowledge of road rules and driver behavior appropriate to NZ standards.",
            color: "#727272",
            image: a1
        },
        {
            title: "TEST CAR FOR HIRE",
            description: "Hire one of our dual-control practice cars that comes with a Supervisor for your practical driving test.",
            color: "#727272",
            image: a1
        },
        {
            title: "Beginner Driver Education (BDE) Courses.",
            description: "Ministry approved BDE course provider.",
            color: "#727272",
            image: a1
        }
    ];  

    return (
        <div className='service-box'>
        <div className="container">
            <h2 className="text-center mb-5 " style={{color: 'white'}} >Our Services</h2>
            <div className="row">
                {services.map((service, index) => (
                    <div key={index} className="col-md-6 col-lg-3 mb-4">
                        <div className="text-white" style={{ backgroundColor: service.color }}>
                            <div className="align-items-center">
                                {service.image ? (
                                    <img src={service.image} alt={service.title} className="mb-3" style={{ width: '100%', height: 'auto' }} />
                                ) : (
                                    <i className={`bi ${service.icon} mb-3`} style={{ fontSize: '2rem' }}></i>
                                )}
                                <h5>{service.title}</h5>
                                <p>{service.description}</p>
                                <a href="#" className="btn btn-light mt-auto">Read More</a>
                            </div>  
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};


export default ServicesDT;
