import {React,useState} from 'react';
import { useParams } from 'react-router-dom';
import Sdata from './Sdata';

const ShowCode = () => {
    const {id} =useParams();
    // console.log(typeof(parseInt(id)));
    // console.log(Sdata[parseInt(id)].title);

    const codeTitle = Sdata[parseInt(id)].title
    const codeDescrip=Sdata[parseInt(id)].description
    const codeCode=Sdata[parseInt(id)].code

    // console.log(codeCode);
    return ( 
        <>
        <div className='my-5'>
            <h1 className='text-center'> {codeTitle}</h1>
        </div>

        <div className='container contact_div'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                
                    <div className='text-center'>
                        <h2 className='text-center'>Description</h2>
                        <textarea readOnly rows='20' cols='120' className="text-dark bg-light mt-5" value={codeDescrip}></textarea>


                        <h2 className=' text-center mt-5'>Code</h2>
                        <textarea rows='20' cols='120' className="text-dark bg-light mt-5"  readOnly value={codeCode}> </textarea>
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    
                    </div>
                </div>
            </div>
        </>

    );

}

export default ShowCode;