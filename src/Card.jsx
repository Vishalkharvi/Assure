import {React,useState} from 'react';
import {NavLink} from 'react-router-dom';
// import { useState } from 'react';

const Card = (props) => {

  const [path,setPath] = useState('#');
  const getTitle = () => {
    setPath(`/service/${props.id}`)

  }


    return (
         <>
                    <div className='col-12 mx-0 col-lg-4 mx-lg-0  d-flex flex-wrap'>

                    <div className="card" style={{width:'18rem'}}>
                      <img className="card-img-top" src={props.image} alt="Card image cap" />
                   <div className="card-body">
                    <h5 className="card-title">{props.order}. {props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    <NavLink to={path} className="btn btn-primary" onClick={getTitle}>Click here</NavLink>
                    </div>
                    </div>

                    </div>

            
         </>
    );

}

export default Card;
