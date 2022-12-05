import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router';

function Trips() {
  const router = useRouter();

  return (
<div class="container px-5 py-5 my-5" style={{height:"100vh"}} id="custom-cards">
    <h2 class="pb-2 border-bottom">Our Most Famous Trips</h2>

   <p class="lead">Close your eyes and imagine being in a place you’ve always wanted to visit. What if you could make that dream a reality? Knowing how to plan and use travel websites can help make a dream trip possible. </p>
    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
    <ImageCard onClick={(e)=>{e.preventDefault();router.push("/Dest",0)}} test="south-india" img="/jaipur.jpg" url="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"/>
    <ImageCard onClick={(e)=>{e.preventDefault();router.push("/Dest",0)}} test="north india" img="/camel.jpg"  url="https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80"/>
    <ImageCard onClick={(e)=>{e.preventDefault();router.push("/Dest",0)}} test="temples" img="/temple.jpg" url="https://images.unsplash.com/photo-1610045828351-3f9737ca7bd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"/>
  </div>

  </div>
 
    )
}

export default Trips

function ImageCard ({test , img , url , onClick}){
    return(
        <>
        <button style={{background:"none",border:"none"}} onClick={onClick} >
<div class="col">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage:`url(${url})`}}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <Image src={img} alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"></svg>
                <small>{test}</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"></svg>
                <small>4d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </button>
        </>
    )
}
