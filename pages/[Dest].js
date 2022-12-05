import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'





function Dest() {
    const router = useRouter()
    const [num , setNum] = React.useState(0)
    const [data,setData] = React.useState([
        {
            location: "jaipur",
            india: "north",
            image: "https://images.unsplash.com/photo-1661246709985-5f413432fc45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            header: "Royal, Regal, Revered – Rajasthan",
            header2:"A magical universe of colour coded kingdoms",
            desc: "Royal, Regal, Revered – Rajasthan. A magical universe of colour coded kingdoms",
            about: "The UrbsPrima heritage walk conducted by Khaki Tours offers you the unique opportunity to walk through the historic corridors of this multi-storied building as you learn about the history of Mumbai’s everchanging skylines, the rise of the BMC, and the architectural marvels of the building itself including highlights such as the lions ",
            gallery: [
                "https://plus.unsplash.com/premium_photo-1661962305764-375ef76a3fb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1618128587777-c472aa97d836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
                "https://images.unsplash.com/photo-1602339752474-f77aa7bcaecd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
                "https://images.unsplash.com/photo-1586319245517-3a7dd045e600?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            ]
        },
        {
            location: "jaipur",
            india: "north",
            image: "https://images.unsplash.com/photo-1661246709985-5f413432fc45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            header: "Royal, Regal, Revered – Rajasthan",
            header2:"A magical universe of colour coded kingdoms",
            desc: "Royal, Regal, Revered – Rajasthan. A magical universe of colour coded kingdoms",
            about: "The UrbsPrima heritage walk conducted by Khaki Tours offers you the unique opportunity to walk through the historic corridors of this multi-storied building as you learn about the history of Mumbai’s everchanging skylines, the rise of the BMC, ",
            gallery: [
                "https://plus.unsplash.com/premium_photo-1661962305764-375ef76a3fb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1618128587777-c472aa97d836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
                "https://images.unsplash.com/photo-1602339752474-f77aa7bcaecd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
                "https://images.unsplash.com/photo-1586319245517-3a7dd045e600?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            ]
        }, {
            location: "jaipur",
            india: "north",
            image: "https://images.unsplash.com/photo-1661246709985-5f413432fc45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            header: "Royal, Regal, Revered – Rajasthan",
            header2:"A magical universe of colour coded kingdoms",
            desc: "Royal, Regal, Revered – Rajasthan. A magical universe of colour coded kingdoms",
            about: "The UrbsPrima heritage walk conducted by Khaki Tours offers you the unique opportunity to walk through the historic corridors of this multi-storied building as you learn about the history of Mumbai’s everchanging skylines, the rise of the BMC, and the architectural marvels of the building itself including highlights such as the lions from Italy,",
            gallery: [
                "https://plus.unsplash.com/premium_photo-1661962305764-375ef76a3fb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1618128587777-c472aa97d836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
                "https://images.unsplash.com/photo-1602339752474-f77aa7bcaecd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
                "https://images.unsplash.com/photo-1586319245517-3a7dd045e600?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            ]
        }
    ])
    React.useEffect(()=>{
        setNum(router.query.Dest)
    },[])
    return (
        <>
            <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <Image src={data[0].image} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={600} height={450} loading="lazy" />
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold lh-1 mb-3">{data[0].header}</h1>
                        <p class="lead">{data[0].about}</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">


                        </div>
                    </div>
                </div>
            </div>


            <div class="px-3 py-4 my-4 text-center">
                <h1 class="display-3 fw-bold">{data[0].header2}</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">{data[0].desc}</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    </div>
                </div>
            </div>


            <div class="container text-center align-items-center justify-content-center">
                <div class="row row-cols-2 align-items-center justify-content-center g-4 py-5">
                    <div class="col">
                        <Image class="img-thumbnail" width={260} height={230} src={data[0].gallery[0]} />
                    </div>
                    <div class="col">
                        <Image class="img-thumbnail" width={260} height={230} src={data[0].gallery[1]} />
                    </div>
                    <div class="col">
                        <Image class="img-thumbnail" width={260} height={230} src={data[0].gallery[2]} />
                    </div>
                    <div class="col">
                        <Image class="img-thumbnail " width={260} height={230} src={data[0].gallery[3]} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dest