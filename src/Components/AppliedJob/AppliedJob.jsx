import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const AppliedJob = ({ appliedJob }) => {
    const { id, logo, post, company, option1, option2, location, salary } = appliedJob;
    const navigate = useNavigate();
    return (
        <div>
            
            <div className="col ">
                <div className="card h-100 ">
                    <div className='row row-cols-1 row-cols-md-3 g-0 align-items-center '>
                        <div className='col d-flex justify-content-center justify-content-md-start '>
                        <img src={logo} className="card-img-top mb-4 mb-md-0 py-5 px-3 rounded w-50 bg-body-secondary" alt="..." />
                        </div>
                        <div className='col'>
                             
                              <h5 className="card-title fs-4 fw-bold">{post}</h5>
                            <p className="card-text text-secondary">{company}</p>
                            <div className='mb-3 '>
                                <button className='btn-border py-2 px-4 me-3 '><span className='color-standard' >{option1}</span></button>
                                <button className='btn-border py-2 px-4'><span className='color-standard' >{option2}</span></button>
                            </div>
                            <div className='text-secondary d-md-flex'>
                                <p className='me-4'><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                                <p><FontAwesomeIcon icon={faCircleDollarToSlot} /> {salary}</p>
                            </div>
                        
                        </div>
                        <div className='col d-flex justify-content-center justify-content-md-end'>
                        <button onClick={() => navigate(`/FeaturedJobs/${id}`)} className='bgColor-standard text-white'>View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;