import React from "react";
import { connect } from "react-redux";

class CertStatus extends React.Component {
    // TODO : render acc to the redux state ,whether verified or not verified

    renderHeader = () => {
        let renderVerification = "Verified ✅",
            renderVerificationClass =
                "text-center transition duration-150 ease-in-out bg-white shadow-lg text-green-500 font-bold uppercase text-base mx-6 my-6 py-2 px-6 rounded-lg";
        // TODO : later update according to the realvalues
        if (!this.props.verifyCertDetails) {
            // !this.props.verifyCertDetails.message
            renderVerification = "Not Verified :(";
            renderVerificationClass =
                "text-center transition duration-150 ease-in-out bg-white shadow-lg text-red-500 font-bold uppercase text-base mx-6 my-6 py-2 px-6 rounded-lg";
        }
        return (
            <React.Fragment>
                <h2 className="text-white text-2xl p-4 text-center tracking-tight">
                    Certificate Status
                </h2>
                <div className={renderVerificationClass}>
                    {renderVerification}
                </div>
            </React.Fragment>
        );
    };
    renderNotVerifiedMessage = () => {
        return (
            <div className="text-center text-white text-lg tracking-tight">
                <h2>
                    This could be because the number you entered is incorrect or
                    the certificate with such UID number has not been issued
                </h2>
            </div>
        );
    };
    renderBody = () => {
        if (!this.props.verifyCertDetails) {
            return this.renderNotVerifiedMessage();
        }

        const { content, position } = this.props.verifyCertDetails;

        const participantName =
                this.props.verifyCertDetails["Participant Name"],
            dateIssued = this.props.verifyCertDetails["Date Issued"];
        return (
            <div className="text-center text-white text-lg tracking-tight">
                <h2 className="my-4">
                    <span className="font-bold tracking-normal">
                        The Certificate is issued{" "}
                    </span>
                    {content}
                </h2>
                <h2 className="my-4">
                    <span className="font-bold tracking-normal">
                        Participant Name :{" "}
                    </span>
                    {participantName}
                </h2>
                <h2 className="my-4">
                    <span className="font-bold tracking-normal">
                        Date Issued:{" "}
                    </span>
                    {dateIssued}
                </h2>
                <h2 className="my-4">
                    <span className="font-bold tracking-normal">
                        Position :{" "}
                    </span>
                    {position}
                </h2>
            </div>
        );
    };
    render() {
        console.log(this.props.verifyCertDetails);
        return (
            <div className="container mx-auto mt-16 p-10 lg:flex lg:items-center gap-2">
                <div className="bg-orange-500 col-2 m-2 px-16 py-10 rounded-xl md:max-w-sm md:mx-auto">
                    <div id="Heading">{this.renderHeader()}</div>
                    <hr className=" border-white border-1 p-4 mx-4" />
                    <div id="Content">{this.renderBody()}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        verifyCertDetails: state.cert.verifyCertDetails,
    };
};

export default connect(mapStateToProps)(CertStatus);
