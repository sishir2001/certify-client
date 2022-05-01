import React from "react";

class CertNotFound extends React.Component {
    render() {
        return (
            <div className="p-4 pt-10 lg:pt-40 w-screen h-full">
                <div className="text-center">
                    <h1 className="text-orange-500 leading-light text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight">
                        Certificate
                    </h1>

                    <h1 className=" text-orange-500 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight">
                        Not Found :(
                    </h1>
                    <p className="text-lg m-x-auto pt-5 px-10 text-gray-600 text-sm md:px-20 md:text-base lg:px-40 lg:text-lg xl:px-60">
                        We are sorry, we could not find the certificate with the
                        given UID Number. Please check the number you have
                        entered or contact the issuer for more details.
                    </p>
                </div>
            </div>
        );
    }
}

export default CertNotFound;
