import React from 'react';

const Job = ({jobAvailable}) => {
    const {job,available,logo,id} = jobAvailable;

    return (
        <div className="col ">
            <div className="card h-100 text-start bg-body-tertiary border-0">
               <img src={logo} className="card-img-top w-25 mb-3 rounded bg-body-secondary rounded  p-3 ms-3" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fs-5 fw-bold">{job}</h5>
                 <p className="card-text fs-6 text-secondary">{available}</p>
               </div>
          </div>
       </div>
    );
};

export default Job;