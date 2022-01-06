import React from 'react';

const IDCard = (props)=>{
    const {name,gender,nat,email,handleClick} = props;
    const func = ()=>{
        handleClick(email);
    }
    return (
        <>
        <div className="card border-0 shadow rounded smallcard mb-3" onClick={func}>
        {/* <div className="card border-0 shadow rounded smallcard mb-3"> */}
           <div className="card-body">
               <div className='gender'>{gender} - {nat}</div>
               <h5>{name.title} {name.first} {name.last} </h5>
               <div className='email'>{email} </div>
           </div>
        </div>
        </>
    );
}

export default IDCard;