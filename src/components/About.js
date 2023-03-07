import React from "react";
// TODO : Work around the icons for the buttons
// import certIcon from "../assets/certificate.svg";
// import verifyIcon from "../assets/verified-user.svg";

class About extends React.Component {
    render() {
        return (
            <div class="p-4 pt-10 lg:pt-40 w-screen">
                <div class="text-center">
                    <h1 class="text-black underline leading-light text-2xl sm:text-6xl lg:text-7xl font-medium tracking-tighter">
                        Instruction to use
                    </h1>

                    <div class="text-lg m-x-auto pt-5 px-10 text-gray-600 text-sm md:px-20 md:text-base lg:px-40 lg:text-lg xl:px-60">
                        <div className="container mx-auto my-10">
                            You can get your certificates by clicking on Get Certificates and
                            provide the data to obtain the certificate.
                        </div>
                        <div className="container mx-auto my-10">
                            Verification of the certificate can be done with UID number
                            provided at the side of the certificate.
                        </div>
                        <div className="container mx-auto my-10">
                            You can also generate certificate with the referral code provided
                            by your university. You can request a referral code if you don’t
                            have one.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
