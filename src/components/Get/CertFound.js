import React from "react";
import { connect } from "react-redux";

class CertFound extends React.Component {
    render() {
        console.log(this.props.certDetails);
        return <div>Certificate Found</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        certDetails: state.cert,
    };
};

export default connect(mapStateToProps)(CertFound);
