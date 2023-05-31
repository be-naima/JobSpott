import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
const FeaturedJob = ({job}) => {
    
    const {id,logo,post,company,option1,option2,location,salary} = job;
    const navigate = useNavigate();
    return (
        <div className="col ">
              <div className="card fw-medium h-100 ">
                <img src={logo} className="card-img-top w-25 ms-3 mb-3" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title fs-4 fw-bold">{post}</h5>
                  <p className="card-text text-secondary">{company}</p>
                  <div className='mb-3 t'>
                  <button className='btn-border py-2 px-4 me-3 '><span className='color-standard' >{option1}</span></button>
                  <button className='btn-border py-2 px-4'><span className='color-standard' >{option2}</span></button>
                  </div>
                  <div className='text-secondary d-md-flex'>
                  <p className='me-4'><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                  <p><FontAwesomeIcon icon={faCircleDollarToSlot} /> {salary}</p>
                  </div>
                  <button onClick={()=>navigate(`FeaturedJobs/${id}`)} className='bgColor-standard text-white'>View Details</button>
                </div>
              </div>
       </div>
    );
};

export default FeaturedJob;