import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AddCertificates extends React.Component {
    printParams = () => {
        const event_name = this.props.match.params.eventName,
            event_code = this.props.match.params.event_code;
        console.log(`event_name : ${event_name}`);
        console.log(`event_code : ${event_code}`);
    };

    returnHeader() {
        return (
            <div className="text-center text-2xl tracking-tight">
                <h2>
                    You are currently editing{" "}
                    <span className="font-bold tracking-wide">
                        {this.props.match.params.eventName}
                    </span>
                    -
                    <span className="font-bold tracking-wide">
                        {this.props.match.params.event_code}
                    </span>
                </h2>
            </div>
        );
    }

    render() {
        this.printParams();
        return (
            <div className="generateCertBackground">
                {this.returnHeader()}

                <h2 className="text-white text-center mt-10 font-bold text-2xl">
                    Add Certificate
                </h2>

            </div>
        );
    }
}

export default AddCertificates;
