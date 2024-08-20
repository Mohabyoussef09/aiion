/* eslint-disable no-unused-vars */
import React from 'react';


function SideBar() {
    return (
        <>
        
    {/* <div className='sideBar d-flex flex-column text-center justify-content-center'>
        <a 
            href="https://www.linkedin.com/in/ali-ayman-bb8260292/" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <i className="fa-brands fa-linkedin"></i>
        </a>
        
        <a 
            href="mailto:aliaymann12@gmail.com" 
        >
            <i className="fa-solid fa-envelope"></i>
        </a>
    </div> */}



<div className='sideBar d-flex flex-column text-center justify-content-center'>
    <a 
        href="https://www.linkedin.com/in/ali-ayman-bb8260292/" 
        target="_blank" 
        rel="noopener noreferrer"
    >
        <i className="fa-brands fa-linkedin"></i>
    </a>
    
    <a 
        href="mailto:aliaymann12@gmail.com?subject=Hello%20Ali&body=I%20would%20like%20to%20connect%20with%20you."
    >
        <i className="fa-solid fa-envelope"></i>
    </a>
</div>

        </>
    );
}

export default SideBar;