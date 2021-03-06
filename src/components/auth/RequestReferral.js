import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { requestedReferral } from "../../actions";
import { Link } from "react-router-dom";

class RequestReferral extends React.Component {
    // ? function is called when the fetch button is clicked
    onRequestReferral = (formValues) => {
        // TODO : write a GET request to API with these form details

        console.log(formValues);
        if (formValues && formValues.confirmPassword === formValues.password) {
            // TODO : call the action creators for SIGNED_IN
            this.props.requestedReferral(formValues);
            console.log(`request Referral Form Submitted`);
        }
    };
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

    renderFetchForm = () => {
        return (
            <div class="flex items-center h-full w-full">
                <div class="w-full bg-orange-500 rounded shadow-md p-8 m-4 md:max-w-sm md:mx-auto">
                    <form
                        class="mb-4 md:flex md:flex-wrap md:justify-between"
                        onSubmit={this.props.handleSubmit(
                            this.onRequestReferral
                        )}
                    >
                        <Field
                            label="Name"
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            component={this.renderInput}
                        />
                        <Field
                            label="University"
                            name="university"
                            type="text"
                            placeholder="BML Munjal University"
                            component={this.renderInput}
                        />
                        <Field
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            component={this.renderInput}
                        />
                        <Field
                            label="Reason for request"
                            name="reason"
                            type="text"
                            placeholder="I would like ..."
                            component={this.renderInput}
                        />
                        <button
                            class="whiteButton text-orange-500 font-bold group"
                            type="submit"
                        >
                            <svg
                                role="status"
                                className={`hidden ${
                                    !this.props.referral_code &&
                                    !this.props.referral_code_error
                                        ? `group-focus:inline`
                                        : ``
                                }  w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300`}
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
                            Request
                        </button>
                    </form>
                    <h2 className="text-center text-gray-100 tracking-tight">
                        Already have code ?{" "}
                        <span className="text-white font-bold">
                            {" "}
                            <Link to="/auth/signup">SignUp</Link>
                        </span>
                    </h2>
                </div>
            </div>
        );
    };

    render() {
        console.log(`referal_code : ${this.props.referral_code}`);
        console.log(`referal_code_error : ${this.props.referral_code_error}`);
        let aboveContent = `Referral Code : ${this.props.referral_code}`;
        let aboveContentClass =
            "block w-full text-center text-gray-600 mt-5 text-xl tracking-tight";
        if (!this.props.referral_code && !this.props.referral_code_error) {
            aboveContentClass = "hidden";
        } else if (!this.props.referral_code) {
            // !some error occured
            aboveContent = this.props.referral_code_error;
        } else if (!this.props.referral_code_error) {
            // * referral code is generated
            aboveContent = `The referral code : ${this.props.referral_code}`;
        }

        return (
            <div className="my-2 pt-10">
                <h1 class={aboveContentClass}>{aboveContent}</h1>
                {this.renderFetchForm()}
                <h1 class="block w-full text-center text-gray-600 mt-5 text-xl tracking-tight">
                    You can only signup if you are invited by your team to
                    generate certificates via referral code
                </h1>
            </div>
        );
    }
}

// !validation of the fields in the form
const validate = (formValues) => {
    const errors = {};
    if (!formValues.name) {
        errors.name = "Name Required";
    }
    if (!formValues.university) {
        errors.university = "University Required";
    }
    if (!formValues.email) {
        errors.email = "Email Required";
    }
    if (!formValues.reason) {
        errors.reason = "Reason Required";
    }
    return errors;
};

const mapStateToProps = (state) => {
    return {
        referral_code: state.cert.referral_code,
        referral_code_error: state.cert.referral_code_error,
    };
};

export default connect(mapStateToProps, { requestedReferral })(
    reduxForm({
        form: "RequestReferral",
        validate,
    })(RequestReferral)
);

// export default reduxForm({
//     form: "RequestReferral",
// })(RequestReferral);
