import React from "react";
import { connect } from "react-redux";

class CertFound extends React.Component {
    render() {
        console.log(this.props.certDetails);
        const imgLink = this.props.certDetails["Certificate Link"];
        console.log(imgLink);
        return (
            <div className="container mx-auto mt-16 p-2 lg:grid lg:grid-cols-3 gap-2">
                <div className="bg-orange-500 col-span-1 m-2 rounded-xl">
                    <h2 className="text-white text-2xl px-4 py-16 text-center tracking-tight">
                        Congratulations on{" "}
                        <span className="font-bold tracking-tighter">
                            {this.props.certDetails["Participant Name"]}
                        </span>{" "}
                        obtaining a certificate !! 🎉
                    </h2>
                    <hr className=" border-white border-1 p-4 mx-4" />
                    <input
                        type="email"
                        placeholder="johndoe@example.com"
                        className="mt-1 block w-9/12 mx-auto px-3 py-2 my-2 bg-white border border-orange-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-600 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    />
                    <div className="grid grid-cols-1 justify-items-center p-4">
                        <button class="whiteButton" type="submit">
                            Email Me
                        </button>
                    </div>
                </div>
                <div className="col-span-2 m-2">
                    <img src={imgLink} alt="certificate" className="w-full h-full" />
                    <div>
                        <div className="grid grid-cols-1 justify-items-center p-4">
                            <button class="orangeButton" type="submit">
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        certDetails: state.cert.fetchCertDetails,
    };
};

export default connect(mapStateToProps)(CertFound);
