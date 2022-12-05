import React from 'react'
import { BsFillChatSquareTextFill , BsFillCalendarWeekFill , BsFillEnvelopeFill } from "react-icons/bs";



function OurServisec() {
    return (
        <div class="container px-4 py-5">
            <h2 class="pb-2 border-bottom">Our Services</h2>

            <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                <div class="d-flex flex-column align-items-start gap-2">
                    <h3 class="fw-bold">We Provide a lot of services</h3>
                    <p class="text-muted">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <a href="#" class="btn btn-primary btn-lg">Primary button</a>
                </div>
                <div class="row row-cols-1 row-cols-sm-2 g-4">

                    <SmallCard header="low cost" Icon={<BsFillCalendarWeekFill style={{ width: 35, height: 35 }}/>}/>
                    <SmallCard header="customer support" Icon={<BsFillChatSquareTextFill style={{ width: 35, height: 35 }}/>}/>
                    <SmallCard header="better guides and knowledge" Icon={<BsFillEnvelopeFill style={{ width: 35, height: 35 }}/>}/>

                </div>
            </div>
        </div>
    )
}

export default OurServisec

function SmallCard({ header , subText , Icon }) {
    return (
        <>
            <div class="d-flex flex-column gap-2">
                <div style={{ width: 50 }} class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                    <svg class="bi" style={{ width: 50, height: 50 }} >
                        {Icon}
                    </svg>
                </div>
                <h4 class="fw-semibold mb-0">{header}</h4>
                <p class="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
            </div>
        </>
    )
}