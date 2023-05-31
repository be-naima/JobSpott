import React from 'react';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import JobCatagory from '../JobCatagory/JobCatagory';
import '../StandardColor/StandardColor.css';
import {Link } from 'react-router-dom';
const Home = () => {
    
    return (
        <div>
                <div className='pt-5 d-flex flex-wrap flex-md-nowrap  justify-content-md-between justify-content-center align-items-center bg-body-tertiary  '>
                       <div className='mx-auto ps-4 pe-2'>
                           <h2 className='fw-bold fs-1 lh-base'>One Step <br></br> Closer To Your <br></br><span className='color-standard'>Dream Job</span></h2>
                           <p className='text-secondary fs-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it.<br></br> Manage all  your job application from start to finish.</p>
                           <button className='bgColor-standard text-white'>Get Started</button>
                       </div>
                       <img className='w-25 mx-auto pe-3' src="https://raw.githubusercontent.com/be-naima/developer-portfolio/main/images/j.png" alt="" />
               </div>
               <div className='top-m'>
                <JobCatagory></JobCatagory>
               </div>
               <div className='top-m'>
                 <FeaturedJobs></FeaturedJobs>
               </div>
        </div>
    );
};

export default Home;