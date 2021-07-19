import React from 'react';
import { NavLink } from 'react-router-dom';

const CopyContent = (props) => {
    return ( 
        <>
          <section id='header' className='d-flex align-items-center '> 
       <div className='container-fluid '>
     <div className='row'>
         <div className='col-10  mx-auto'>

         <div className='row'>
             <div className=' col-md-6 pt-5 pt-lg-0 order-lg-1 order-2 d-flex flex-column'>
                 {/* <h1>Lets Build and Contribute to future</h1> */}
                 <h1>{props.title}</h1>

                 {/* {/ <h2 className='my-3'> Future needs us! </h2> */}
                 <h2 className='my-3'> {props.caption} </h2> 

                 <div className='mt-3'>

                     <NavLink className='btn-get-started' to={props.visit}> {props.buttonCaption}</NavLink>
                 </div>
             </div>
             
             <div className='col-md-6 order-1 order-lg-2 header-img '>
                 <img src={props.image} className='img-fluid animated' alt='Image' width='400' height='400'/>
             </div>

         </div>

         </div>
     </div>
 </div>
 </section>
       </>
    );

}

export default CopyContent;