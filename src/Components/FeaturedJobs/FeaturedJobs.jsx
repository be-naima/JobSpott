import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeaturedJobs = () => {
  const [numOfProductsShow,setNumOfProductsShow] = useState(4)
  const [showButton,setShowButton] = useState(true)
      const btnSeeAll = () =>{
        setNumOfProductsShow(6)
        setShowButton(false)
      }
   
  

  const jobs = useLoaderData()
  return (
    <div className='text-center px-4 container-md'>
      <div className='mb-4'>
        <h1 className='fw-bold fs-2 mt-5 mb-3'>Featured Jobs</h1>
        <p className='text-secondary fs-6 mb-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className='row row-cols-1 row-cols-md-2 g-4 mb-5 text-start '>
        {
          jobs.slice(0,numOfProductsShow).map(job => <FeaturedJob
            key={job.id}
            job={job}
          ></FeaturedJob>)
        }
      </div>
      <div className='d-flex justify-content-center mb-5'>
        {
         
         showButton &&  <button onClick={btnSeeAll}  className='bgColor-standard text-white '>See All Jobs</button>
          
        }
      </div>
    </div>
  );
  
};

export default FeaturedJobs;