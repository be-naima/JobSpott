import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useState } from "react";
import './AppliedJobs.css'
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const allJobs = useLoaderData()
    let appliedJobs = []
    let remoteJobs=[]
    let onsiteJobs=[]
    const storedJobs = (JSON.parse(localStorage.getItem('applied-cart')));
    //get the jobs from local storage keep it in new array "appliedJobs"
    for (let storedJob in storedJobs) {
        for (let allJob of allJobs) {
            if (allJob.id === parseInt(storedJob)) {
                appliedJobs.push(allJob)
            }
        }
    }
    const [showJobs,setShowJobs] = useState(appliedJobs);
    for(const job of appliedJobs){
        if(job.option1 === "Remote" || job.option2 === "Remote"){
            remoteJobs.push(job)
        }
        else if(job.option1 === "Onsite" || job.option2 === "Onsite"){
            onsiteJobs.push(job)
        }
    }
    const btnRemote = () =>{
         setShowJobs(remoteJobs)
    }
    const btnOnsite = () =>{
          setShowJobs(onsiteJobs)
    }
    return (
        <div className='h-100  '>

            <div className='banner bg-body-tertiary d-flex justify-content-center  '>
                <h2 className='pt-5 pb-5'>Applied Jobs</h2>
            </div>
            <div className='mb-5 container-md mx-auto pe-4 d-flex justify-content-end'>
                <div className="dropdown ">
                    <a className="btn rounded bg-body-secondary dropdown-toggle px-3 py-2 border-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter By
                    </a>

                    <ul className="dropdown-menu bg-body-secondary ">
                        <button onClick={btnRemote} className="dropdown-item fw-bold" >Show Remote Jobs</button>
                        <button onClick={btnOnsite} className="dropdown-item fw-bold">Show Onsite Jobs</button>
                        
                    </ul>
                </div>
            </div>
            <div className='row row-cols-1 row-cols-md-1 g-4 mb-5 container-md mx-auto'>
                {
                    showJobs.map(appliedJob => <AppliedJob
                       key={appliedJob.id}
                       appliedJob = {appliedJob}
                    ></AppliedJob>
                     )
                }
            </div>
        </div>
    );
};

export default AppliedJobs;