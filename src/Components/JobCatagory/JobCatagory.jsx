import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
const JobCatagory = () => {
    const [jobs,setJobs] = useState([])
    useEffect(()=>{
       fetch('JobCatagory.json')
       .then(res => res.json())
       .then(data =>setJobs(data))
    },[])
    return (
        <div className='text-center px-4 container-md'>
            <div>
                <h1 className='fw-bold fs-2 mt-5 mb-3'>Job Category List</h1>
                <p className='text-secondary fs-6 mb-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='row row-cols-1 row-cols-md-4 g-4 mb-5'>
                {
                    jobs.map(job => <Job
                    key={job.id}
                    jobAvailable={job}
                    ></Job>)
                }
            </div>
        </div>
    );
};

export default JobCatagory;