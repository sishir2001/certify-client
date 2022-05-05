import React from "react";
import { connect } from "react-redux";
import { verifyCert } from "../../actions";

class VerifyQR extends React.Component {
    componentDidMount() {
        this.props.verifyCert({
            uid_number: this.props.match.params.uid,
        });
    }

    render() {
        console.log(this.props.match.params);
        return <div>Verify QR</div>;
    }
}

export default connect(null, { verifyCert })(VerifyQR);
