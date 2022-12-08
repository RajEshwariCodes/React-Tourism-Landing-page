import Link from 'next/link'
import React from 'react'
import { HashLink } from 'react-router-hash-link';


function Nav() {
  return (
    <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <Link href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"></svg>
        <span class="fs-4">My Tourism Website</span>
      </Link>

      <ul class="nav nav-pills">
        <li class="nav-item"><Link href="/" class="nav-link active" aria-current="page">Home</Link></li>
        <li class="nav-item"><Link href="/OurServisec" class="nav-link">Our Services</Link></li>
        <li class="nav-item"><Link href="/ContactForm" class="nav-link">Contact us</Link></li>
        <li class="nav-item">

        <Link href="/Pacakge" class="nav-link">Trips</Link>
        </li>
      </ul>
    </header>
  </div>
  )
}

export default Nav