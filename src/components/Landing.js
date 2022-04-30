import React from "react";
import { Link } from "react-router-dom";
import certIcon from "../assets/certificate.svg";
import verifyIcon from "../assets/verified-user.svg";

class Landing extends React.Component {
    render() {
        return (
            <div class="p-4 pt-10 lg:pt-40 w-screen">
                <div class="text-center">
                    <h1 class="text-black leading-light text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter">
                        <span className="landingTitleClass">Grab</span>,
                        <span className="landingTitleClass">Verify</span> and{" "}
                        <span className="landingTitleClass">Generate</span> at
                        one stop !
                    </h1>

                    <p class="text-lg m-x-auto pt-5 px-10 text-gray-600 text-sm md:px-20 md:text-base lg:px-40 lg:text-lg xl:px-60">
                        An easy way to generate,verify and manage the
                        Certificates at one click away.Register your
                        organisation for generating certificates for everything
                        with just one upload of an excel sheet . For
                        participants just give your participation id for
                        fetching the certificates.Certificates also come with
                        QR-code for verification purposes.
                    </p>
                    <div class="py-10 md:flex justify-center">
                        <div class="bg-orange-500 p-6 m-4 text-white rounded-lg hover:bg-orange-400 md:w-80 md:text-xl">
                            <Link to="/getCertificates">
                                Grab My Certificate
                            </Link>
                        </div>
                        <div class="bg-orange-100 p-6 m-4 text-orange-700 rounded-lg hover:bg-orange-200 md:w-80 md:text-xl">
                            <Link to="/verifyCertificates">
                                Verify My Certificate
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
