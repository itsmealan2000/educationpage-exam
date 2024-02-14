import React from 'react'
import img from '../assets/homeimg.png'

function home() {
  return (
    <div className='pagebodyhome container-fluid postion-relative '>
        <div className='row'>
            <div className="colleft col-md-6 d-flex flex-column  justify-content-center ">
                <h1>Welcome</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, recusandae.</p>
                <p className=''> New Student? Click Here <button className="btn btn-light" onClick={'/register'}><a className='nav-link active' href={'/register'}>Register</a></button></p>
            </div>
            <div className="col-md-6">
                <img src={img} className='w-75' alt="" />
            </div>
        </div>
            <div className='col-12 '>
            <svg className='wave'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f3f4f5" fill-opacity="1" d="M0,128L48,128C96,128,192,128,288,117.3C384,107,480,85,576,96C672,107,768,149,864,186.7C960,224,1056,256,1152,250.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            </div>
    </div>
  )
}

export default home