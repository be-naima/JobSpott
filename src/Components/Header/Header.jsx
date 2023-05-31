import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import '../StandardColor/StandardColor.css'
import './Header.css'
const Header = () => {
      return (
            <nav className="navbar navbar-expand-lg  bg-body-tertiary  ">
                  <div className="container">
                        <div className='mx-md-auto'>
                        <Link className="mx-auto fs-2 fw-bold text-black" to="/">JobSpott</Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
                              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                    <li className="nav-item  me-5">
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item  me-5 ">
                                        <NavLink to="/statistics">Statistics</NavLink>       
                                    </li>
                                    <li className="nav-item  me-5">
                                        <NavLink to="/appliedJobs">Applied Jobs</NavLink>  
                                    </li>
                                    <li className="nav-item  me-5">
                                        <NavLink to="/blogs">Blogs</NavLink> 
                                    </li>
                                    
                              </ul>
                             
                              <button type="button" className="bgColor-standard text-white border-0 ms-auto" >
                                    Start Applying
                              </button>

                             
                              
                        </div>
                  </div>
            </nav>
      );
};

export default Header;