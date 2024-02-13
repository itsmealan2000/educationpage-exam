import React from 'react'

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
            <a class="navbar-brand text-light" href="#"><i class="bi bi-backpack-fill"></i> Education</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto ">
                <a class="nav-link text-light" aria-current="page" href="#">Home</a>
                <a class="nav-link text-light" href="#">Services</a>
                <a class="nav-link text-light" href="#">About Us</a>
                <a class="nav-link text-light" href="">Login</a>
            </div>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar