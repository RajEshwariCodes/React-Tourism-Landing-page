import Image from 'next/image'
import React from 'react'
import Link from "next/link"

function HeroSection() {
  return (
    <div class="container col-xxl-8 px-4 py-2" >
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <Image src="/heroPage.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Travel,enjoy-
and livea new
and full life</h1>
        <p class="lead">Built Wicket longer admire do barton vanity itself do in lt-
preferred to sf»rtsrnen it engrossed listening, park gate
sell they west hard for the.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2"><Link class="btn btn-primary btn-lg px-4 me-md-2" href="/ContactForm" >contact us</Link></button>
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroSection
