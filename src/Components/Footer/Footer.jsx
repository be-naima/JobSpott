import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black px-5 py-5 mt-auto position-relative bottom-0'>
                <div className='row row-cols-1 row-cols-md-6 g-5 mb-5 border-bottom border-dark border-2'>
                   <div className='col-lg'>
                       <h2 className='fs-3 fw-bold text-white mb-4'>JobSpott</h2>
                       <p className='text-white-50 mb-3'>JobSpott is a comprehensive job search website that helps job seekers find the right opportunities and employers connect with top talent.</p>
                       <img className='mb-5' src="Group 9969.png" alt="" />
                   </div>
                   <div className='col'>
                   <h2 className='fs-6 fw-bold text-white mb-4'>Company</h2>
                   <p className='text-white-50'>About Us</p>
                   <p className='text-white-50'>Work</p>
                   <p className='text-white-50'>Latest News</p>
                   <p className='text-white-50'>Careers</p>
                   </div>
                   <div className='col'>
                   <h2 className='fs-6 fw-bold text-white mb-4'>Product</h2>
                   <p className='text-white-50'>ProtoType</p>
                   <p className='text-white-50'>Plans&Pricing</p>
                   <p className='text-white-50'>Customers</p>
                   <p className='text-white-50'>Integrations</p>
                   </div>
                   <div className='col'>
                   <h2 className='fs-6 fw-bold text-white mb-4'>Support</h2>
                   <p className='text-white-50'>Help Desk</p>
                   <p className='text-white-50'>Sales</p>
                   <p className='text-white-50'>Became a Partner</p>
                   <p className='text-white-50'>Developers</p>
                   </div>
                   <div className='col'>
                   <h2 className='fs-6 fw-bold text-white mb-4'>Contact</h2>
                   <p className='text-white-50'>524 Broadway.NYC</p>
                   <p className='text-white-50'>+1777-978-5570</p>
                   
                   </div>
                </div>
                <div className='mt-5 d-md-flex justify-content-md-between '>
                    <p className='text-white-50'>@2023 JobSpott. All Rights Reserved</p>
                    <p className='text-white-50'>Powered by JobSpott</p>
                </div>
        </div>
    );
};

export default Footer;