import React from 'react'

const Team = () => {
    return (
        <>
            <h1 className='affirm' style={{paddingTop: "3rem", color: "#2FA27D", textAlign: "center", fontWeight: "700"}}>
          Meet The Team </h1>
                <div className="text-3xl font-bold p-2 " style={{color:"#2fa27d"}}>Management Team</div>
            <div className="container align-content-center justify-content-between flex flex-wrap">

                <div className="flex flex-wrap gap-2 p-2">
                    <div className="cardz">
                        <img src="images/Picture1.png" className="w-24 h-24 rounded-full object-contain transition duration-200 hover:scale-125" />
                        <div className="text-gray-900 text-lg font-bold">Dennis Makori</div>
                        <div style={{color:"#2fa27d"}}>Founder & CEO</div>
                        <div className="text-gray-600">Founder and Director of four Business unit; Twixt Technologies, Twixt Logistics, Gosavana. Prior to starting Twixt Technologies, Dennis previously worked at Telkom Kenya, Safaricom Ltd-Radio Network and as the mobile SES retail Manager at Samsung Electronics EA LTD.</div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 p-2">
                    <div className="cardz">
                        <img src="images/Picture2.png" className="w-24 h-24 rounded-full object-contain transition duration-200 hover:scale-125" />
                        <div className="text-gray-900 text-lg font-bold">Kigen Koech</div>
                        <div style={{color:"#2fa27d"}}>Innovations and Technology</div>
                        <div className="text-gray-600">Versatile, seasoned professional with experience on analysis, product development. Keen ability to solve complex problems and generate strategic innovative solutions through business design thinking. Knack for building end-to-end solutions adopting best business model.</div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 p-2">
                    <div className="cardz">
                        <img src="images/Picture3.png" className="w-24 h-24 rounded-full object-contain transition duration-200 hover:scale-125" />
                        <div className="text-gray-900 text-lg font-bold">Enock Achoki</div>
                        <div style={{color:"#2fa27d"}}>Logistics</div>
                        <div className="text-gray-600">A creative professional with over twenty years experience with expertise in all aspects of successful strategy formulation ,marketing, public relations and customer service. Excels in managing multiple projects concurrently with strong detail, problem solving and follow through capabilities.</div>
                    </div>
                </div> <div className="flex flex-wrap gap-2 p-2">
                    <div className="cardz">
                        <img src="images/Picture4.png" className="w-24 h-24 rounded-full object-contain transition duration-200 hover:scale-125" />
                        <div className="text-gray-900 text-lg font-bold">Anthony Mwangi </div>
                        <div style={{color:"#2fa27d"}}>Finance</div>
                        <div className="text-gray-600">A financial analyst and a professional accountant with over ten years experience in the commercial and retail sector. A leader who uses skills acquired both through experience and training to  grow organizations’ finance and administrative structures.</div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-1 px-4 pt-6">
                <div className="text-3xl font-bold p-3" style={{color:"#2fa27d"}}>Our Team</div>
            </div>
            <div className="container mx-auto flex flex-wrap align-content-center justify-content-between">
                <div className="flex flex-wrap gap-2 p-2">
                    <div className="cardz">
                        <img src="images/Picture5.png" className="w-24 h-24 rounded-full object-contain transition duration-200 hover:scale-125" />
                        <div className="text-gray-900 text-lg font-bold">Eric Mutuku</div>
                        <div style={{color:"#2fa27d"}}>Business support</div>
                        <div className="text-gray-600">Has been a part of Twixt Technologies Limited for four years offering business support to both retail and B2B clients with experience in customer relations, product knowledge and technical application of IT.</div>
                    </div>
                </div> <div className="flex flex-wrap gap-2 p-2">
                    <div className="cardz">
                        <img src="images/Picture6.png" className="w-24 h-24 rounded-full object-contain transition duration-200 hover:scale-125" />
                        <div className="text-gray-900 text-lg font-bold">Geladin Barare</div>
                        <div style={{color:"#2fa27d"}}>HR Admin & Business Operations</div>
                        <div className="text-gray-600">An accountant with over ten years experience, she is the ongoing accountant with  expertise in financial  management and people skills. Very creative,resourceful,flexible.</div>
                    </div>
                </div> <div className="flex flex-wrap gap-2 p-2">
                    <div className="cardz">
                        <img src="images/Picture7.png" className="w-24 h-24 rounded-full object-contain transition duration-200 hover:scale-125" />
                        <div className="text-gray-900 text-lg font-bold">Perez Mraula</div>
                        <div style={{color:"#2fa27d"}}>Customer Service</div>
                        <div className="text-gray-600">A self driven individual with high sense of responsibility and passion of excellence. Employs a progressive approach to work and upholds integrity and professionalism.</div>
                    </div>
                </div> <div className="flex flex-wrap gap-2 p-2">
                    <div className="cardz">
                        <img src="images/Picture8.png" className="w-24 h-24 rounded-full object-contain transition duration-200 hover:scale-125" />
                        <div className="text-gray-900 text-lg font-bold">Nicholas Juma</div>
                        <div style={{color:"#2fa27d"}}>Senior Technician</div>
                        <div className="text-gray-600">An expert in software and hardware who has over ten years experience .Highly seasoned and reliable technician with a strong technical background and excellent client service record.</div>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </>
    )
}

export default Team