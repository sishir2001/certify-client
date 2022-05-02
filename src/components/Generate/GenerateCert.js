// ? This component should display the dashboard if logged in,else route to login page
import React from "react";
import { connect } from "react-redux";
import history from "../../history";
class GenerateCert extends React.Component {
    componentDidMount() {
        if (!this.props.isSignedIn) {
            history.push("/auth/login");
        }
    }
    render() {
        return <div>Generate Certificates</div>;
    }
}

// mapping state to props
const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
    };
};

export default connect(mapStateToProps)(GenerateCert);
