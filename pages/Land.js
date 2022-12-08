import Image from 'next/image'
import React from 'react'
import Card1 from './Card1'
import Horizontal from './Horizontal'

function PageFile() {
  return (
    <>
      <div className="container my-5">
        <div class="p-5 mb-4 mx-5 my-5 bg-light rounded-3">
          <div class="container-fluid py-3">
            <h1 class="display-4 fw-bold">Who are we</h1>
            <p class="col-md-10 fs-4 py-3 my-3">one of the most respected and successful names in the global travel industry, with a long and rich company heritage spanning 30 years. The definitive resource for global travel content, its reputation has been built on journalistic credibility. CTM is dedicated to the provision of objective, accurate, informative and reliable travel content </p>
            <button class="btn btn-primary btn-lg" type="button">Example button</button>
          </div>
        </div>

        <div class="row align-items-md-stretch my-4">

          <div class="col-md-6 ">
            <div class="h-100 p-5 text-white  rounded-3 " style={{
              background: "rgb(253,118,203)",
              background: "linear-gradient(193deg, rgba(253,118,203,1) 0%, rgba(255,172,48,1) 100%)"
            }}>
              <h2>what we do</h2>
              <p>Tourism is the activities of people traveling to and staying in places outside their usual environment for leisure, business or other purposes for not more than one consecutive year.</p>
            </div>
          </div>

          <div class="col-md-6">
            <div class="h-100 p-5 text-white bg-light border rounded-3" style={{
              background: "rgb(253,118,203)",
              background: "linear-gradient(193deg, rgba(253,118,203,1) 0%, rgba(255,172,48,1) 100%)"
            }}>
              <h2>Why choose us?</h2>
              <p>Honest prices – we have the best prices for tours, and a huge selection of destinations will not leave indifferent even avid tourist.<br></br>

                Reliable partners – We work with the best tour operators who over the years have proven their professionalism..</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageFile