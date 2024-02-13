import React from 'react'

function home() {
  return (
    <div className='pagebodyhome container-fluid '>
        <div className='row'>
            <div className="colleft col-md-6 d-flex flex-column ms-5 w-25 justify-content-center ">
                <h1>Welcome</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, recusandae.</p>
                <p className=''> New Student? Click Here <button className="btn btn-light" onClick={'/register'}><a className='nav-link active' href={'/register'}>Register</a></button></p>
            </div>
            <div className="col-md-6">
                
            </div>
        </div>
    </div>
  )
}

export default home