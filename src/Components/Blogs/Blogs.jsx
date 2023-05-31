import React from 'react';

const Blogs = () => {
    return (
        <div className='h-100 container-md mx-auto px-4 mt-5 mb-5'>
            <h4 className='fw-bold color-standard mt-5'><span >1. </span>When should we use Context API?</h4>
            <h4 className='mb-4 mt-2'><span className='text-danger-emphasis'>A: </span>Context API is used when some data needs to be accessible by many components at different nesting levels.</h4>
            <h4 className='fw-bold color-standard'><span >2. </span>What is Custom hook?</h4>
            <h4 className='mb-4 mt-2'><span className='text-danger-emphasis'>A: </span>Custom hooks are reusable functions that  can use to add special and unique functionality to the react applications. </h4>
            <h4 className='fw-bold color-standard'><span >3. </span>What is useRef?</h4>
            <h4 className='mb-4 mt-2'><span className='text-danger-emphasis'>A: </span>The useRef Hook allows us to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.</h4>
            <h4 className='fw-bold color-standard'><span >4. </span>What is useMemo?</h4>
            <h4 className='mt-2 mb-5'><span className='text-danger-emphasis'>A: </span>The useMemo is a hook used in the functional component of react that returns a memoized value. </h4>
        </div>
    );
};

export default Blogs;