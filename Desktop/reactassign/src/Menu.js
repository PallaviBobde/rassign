import React from 'react';

const Menu =()=>{
    return (
        <>
        <nav className="navbar navbar-light bg-light">
           <div className="container-fluid">
              <a className="navbar-brand">Your Challenge</a>
              <div className="d-flex">
                  <span className='me-3'>Product</span>
                  <span className='me-3'>Download</span>
                  <span className='me-3'>Pricing</span>
              </div>
            </div>
        </nav>
        </>
    );
}

export default Menu;