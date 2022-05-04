import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { add_cert } from "../../actions/";
// import { Link } from "react-router-dom";

class AddCertificates extends React.Component {
    printParams = () => {
        const event_name = this.props.match.params.eventName,
            event_code = this.props.match.params.event_code;
        console.log(`event_name : ${event_name}`);
        console.log(`event_code : ${event_code}`);
    };

    // ? function is called when the fetch button is clicked
    onAddCertificate = (formValues) => {
        // TODO : write a GET request to API with these form details
        // TODO : add username and password

        console.log(formValues);
        console.log(this.props.username);
        console.log(this.props.password);
        if (formValues) {
            // TODO : call the action creators for SIGNED_IN
            this.props.add_cert({
                ...formValues,
                password: this.props.password,
                username: this.props.username,
                event_code: this.props.match.params.event_code,
            });
            console.log(`Add Certificate Form Submitted`);
        } else {
            console.log("No values have been entered");
        }
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

    renderErrorClass = (meta) => {
        if (meta.touched && meta.error) {
            return "formInputInvalidClass";
        }
        return "formOrangeInputClass";
    };
    renderError = (meta) => {
        if (meta.touched && meta.error) {
            return <p className="text-sm text-gray-100">{meta.error}</p>;
        }
    };

    // rendering the input element
    renderInput = (formProps) => {
        return (
            <div class="flex flex-col mb-4 md:w-full">
                <label class="formOrangeLabelClass" for="name">
                    {formProps.label}
                </label>
                <input
                    {...formProps.input}
                    type={formProps.type}
                    placeholder={formProps.placeholder}
                    className={this.renderErrorClass(formProps.meta)}
                    onChange={formProps.input.onChange}
                    value={formProps.input.value}
                />
                {this.renderError(formProps.meta)}
            </div>
        );
    };
    renderForm = () => {
        return (
            <div className="md:max-w-sm md:mx-auto mt-4 ">
                <form
                    class="mb-4 flex flex-wrap justify-center"
                    onSubmit={this.props.handleSubmit(this.onAddCertificate)}
                >
                    <Field
                        label="Participant Name"
                        name="participant_name"
                        type="text"
                        placeholder="John Doe"
                        component={this.renderInput}
                    />
                    <Field
                        label="Participant ID"
                        name="participant_id"
                        type="text"
                        placeholder="001"
                        component={this.renderInput}
                    />
                    <Field
                        label="Content"
                        name="content"
                        type="text"
                        placeholder="For winning ...."
                        component={this.renderInput}
                    />
                    <Field
                        label="Position"
                        name="position"
                        type="text"
                        placeholder="Winner"
                        component={this.renderInput}
                    />
                    <button class="blackButton font-bold group" type="submit">
                        <svg
                            role="status"
                            className={`hidden ${
                                !this.props.response_message
                                    ? `group-focus:inline`
                                    : ``
                            } w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300`}
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                        Add Certificates
                    </button>
                </form>
            </div>
        );
    };

    render() {
        this.printParams();
        let messageClass = "hidden";
        if (this.props.response_message) {
            messageClass =
                "text-white text-center mt-10 font-semibold tracking-tighter text-2xl";
        }
        return (
            <div className="generateCertBackground">
                {this.returnHeader()}

                <h2 className="text-white text-center mt-10 font-bold text-2xl">
                    Add Certificate
                </h2>
                {this.renderForm()}
                <h2 className={messageClass}>{this.props.response_message}</h2>
            </div>
        );
    }
}

// export default connect(null)(AddCertificates);
// export default AddCertificates;

// !validation of the fields in the form
const validate = (formValues) => {
    const errors = {};
    if (!formValues.participant_name) {
        errors.participant_name = "Participant Name Required";
    }
    if (!formValues.participant_id) {
        errors.participant_id = "Participant ID Required";
    }
    if (!formValues.content) {
        errors.content = "Content Required";
    }
    if (!formValues.position) {
        errors.position = "Position Required";
    }
    return errors;
};

const mapStateToProps = ({ cert, auth }) => {
    return {
        response_message: cert.added_cert_message,
        username: auth.userName,
        password: auth.password,
    };
};

export default connect(mapStateToProps, { add_cert })(
    reduxForm({
        form: "AddCertificates",
        validate,
    })(AddCertificates)
);
