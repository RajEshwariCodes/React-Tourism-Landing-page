import React from 'react'
import styles from "../styles/Land.module.css"
import { IoIosPin } from "react-icons/io";
import { ImPhone } from "react-icons/im";
import { AiFillMail } from "react-icons/ai";


function ContactForm() {

async function sub(event){
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;

  const res = await fetch('/api/Contact', {
    body: JSON.stringify({
      name: name,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  const result = await res.json();
  console.log(result)

  alert(`So your name is ${event.target.name.value}?`);
}


  return (
    <>
   <div class="container" id='contactId'>
<div class="row">
<div class="col-md-5 mr-auto">
<h1 class="fw-bold">Contact Us</h1>
<p class="mb-5">While we’re good with smoke signals, there are simpler ways for us to get in touch.</p>
<ul class="list-unstyled pl-md-5 mb-5">
<li class="d-flex text-black mb-2">
<span class="mr-5"><IoIosPin /></span> 34 Street Name, City Name Here,  United States
</li>
<li class="d-flex text-black mb-2"><span class="mr-3"><span class="icon-phone"><ImPhone/></span></span> +1 (222) 345 6789</li>
<li class="d-flex text-black"><span class="mr-3"><span class="icon-envelope-o"><AiFillMail/> </span></span> info@mywebsite.com </li>
</ul>
</div>
<div class="col-md-6">

<form class="mb-5" method="post" onSubmit={sub} id="contactForm" name="contactForm" novalidate="novalidate">
<div class="row">
<div class="col-md-12 form-group">
<label for="name" class="col-form-label">Name</label>
<input type="text" style={{height:"9vh"}} class="form-control" name="name" id="name"/>
</div>
</div>
<div class="row">
<div class="col-md-12 form-group">
<label for="email" class="col-form-label">Email</label>
<input type="text" style={{height:"9vh"}} class="form-control" name="email" id="email"/>
</div>
</div>
<div class="row">
<div class="col-md-12 form-group">
<label for="message" class="col-form-label">Message</label>
<textarea style={{resize:'none'}} class="form-control" name="message" id="message" cols="30" rows="7"></textarea>
</div>
</div>
<div class="row">
<div class="col-md-12">
<input type="submit" value="Send Message" class="btn btn-primary rounded-0 py-2 px-4"/>
<span class="submitting"></span>
</div>
</div>
</form>

<div id="form-message-warning mt-4"></div>

</div>
</div>

</div>
</>

  )
}

export default ContactForm