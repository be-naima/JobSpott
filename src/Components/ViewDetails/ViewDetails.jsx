import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './ViewDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDollarToSlot,faCalendarWeek,faPhoneVolume,faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { addToDb,getAppliedCart } from '../../utilities/fakeDb';
const ViewDetails = () => {
    const dynamicJobId = useParams()
    let jobDetails = {};
    const [jobs,setJobs] = useState([])
    useEffect(()=>{
        fetch('/FeaturedJobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
   
    for(const job of jobs){
        if (job.id === parseInt(dynamicJobId.id)) {
           jobDetails = job;
        }
    }
    const {jobDiscription,responsibility,education,experience,phone,email,address,salary,post} = jobDetails;
    const btnApply = (jobDetails) =>{
        addToDb(jobDetails)   
    }
   
    return (
        <div >
            <div className='banner bg-body-tertiary d-flex justify-content-center '>
              
              <h2 className='pt-5 pb-5'>Job Details</h2>
              
            </div>
            <div className='mt-5 d-md-flex container-md mx-auto mx-4'>
                <div className='w-75 me-5 mt-2 mb-5'>
                    <p className='text-secondary mb-3'><span className='fw-bold text-black'>Job Description: </span>{jobDiscription}</p>
                    <p className='text-secondary mb-3'><span className='fw-bold text-black'>Job Responsibility: </span>{responsibility}</p>
                    <p className='text-secondary mb-3 lh-lg'><span className='fw-bold text-black'>Educational Requirements: <br /> </span>{education}</p>
                    <p className='text-secondary mb-3 lh-lg'><span className='fw-bold text-black'>Experiences: <br /> </span>{experience}</p>
                    
                    
                </div>
                <div>
                      <div className='card  rounded-1 bg-body-tertiary border-0'>
                          <p className='fs-6 fw-bold border-bottom border-2 pb-3'>Job Details</p>
                          <p className='text-secondary'><FontAwesomeIcon style={{color:"#9873FF"}} icon={faCircleDollarToSlot} /><span className='fw-bold text-black'>  Salary: </span>{salary} (Per Month)</p>
                          <p className='text-secondary mb-4'><FontAwesomeIcon style={{color:"#9873FF"}} icon={faCalendarWeek} /><span className='fw-bold text-black'> Job Title: </span>{post}</p>
                          <p className='fs-6 fw-bold border-bottom border-2 pb-3'>Contact Information</p>
                          <p className='text-secondary'><FontAwesomeIcon style={{color:"#9873FF"}} icon={faPhoneVolume} /><span className='fw-bold text-black'>  Phone: </span>{phone}</p>
                          <p className='text-secondary mb-4'><FontAwesomeIcon style={{color:"#9873FF"}} icon={faEnvelope} /><span className='fw-bold text-black'> Email: </span>{email}</p>
                          <p className='text-secondary'><FontAwesomeIcon style={{color:"#9873FF"}} icon={faLocationDot} /><span className='fw-bold text-black'>  Address: </span>{address}</p>
                      </div>
                      <button onClick={()=>btnApply(jobDetails)} className='mb-5 bgColor-standard text-white w-100 mt-4'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;