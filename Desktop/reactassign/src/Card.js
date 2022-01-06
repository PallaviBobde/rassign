import React from 'react';

const Card =(props)=>{
    const {name,location,gender,thumbnailurl}=props;
    return (
        <>
          <div className='card d-flex flex-row justify-content-around align-items-center mx-auto shadow p-3 border-0 mb-5 rounded'  style={{width:"70%"}}>
              <div className=''>
                  <img className='rounded-circle' src={thumbnailurl} />
              </div>
              <div className='bigwidth'>
                  <h4 className='headname'>{name.title} {name.first} {name.last}</h4>
                  <div className='location'><span className='streetnum'>{location.street.number}</span> {location.street.name} {location.city} {location.state} <span className='bold'>{location.country}</span> {location.postcode} 
                        {location.timezone.offset} {location.timezone.description}
                  </div>
                  <div className='text-muted gender'>{gender}</div>
              </div>
          </div>
        </>
    );
}

export default Card;