import React from "react";

class AddCertificates extends React.Component {
    render() {
        const event_name = this.props.match.params.eventName,
            event_code = this.props.match.params.event_code;
        console.log(`event_name : ${event_name}`);
        console.log(`event_code : ${event_code}`);
        return <div>Add Certificates Form</div>;
    }
}

export default AddCertificates;
