import React, { useState } from 'react';

const Contact = () => {
    const [data,setData] = useState({ fname:'', mobile:'', issue:'',});

    const onChangeText = (e) => {
        const name=e.target.name;
        const value=e.target.value;

        setData( (preVal) => {
            return { ...preVal,[name]:[value]};
        });

    }

    const formSubmit = async(e) => {
        e.preventDefault();
        // alert(`Your Name: ${data.fname}, Your mobile number: ${data.mobile} and your issue : ${data.issue}`)
        const response=await fetch('/keek123');
        const data1= await response.json();
        console.log(data1);

    }

    return (
    <>

    <div className='my-5'>
        <h1 className='text-center'> Contact Us</h1>
    </div>

    <div className='container contact_div'>
        <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
                <div className="form-group mb-3" >
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your full name" required name='fname' val={data.fname} onChange={onChangeText}/>
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>

                <div className="form-group mb-3">
                    <label for="exampleInputEmail1">Mobile Number</label>
                    <input type="tel" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your mobile number" name='mobile' val={data.mobile} onChange={onChangeText} pattern='[0-9]{3}[0-9]{3}[0-9]{4}' required/>
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword1"> Your Issue</label>
                    <textarea type="text"  className="form-control textarea mt-10" id="exampleInputPassword1" placeholder="Your Issue" name='issue' value={data.issue} onChange={onChangeText} required> </textarea>
                </div>
                
                <button type="submit" className="btn btn-primary mt-4 ml-30 w-20" >Submit</button>
            </form>
            </div>
        </div>
    </div>


    </>

    );

}

export default Contact;