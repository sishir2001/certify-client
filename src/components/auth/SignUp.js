import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signedUp } from "../../actions";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
    // ? function is called when the fetch button is clicked
    onSignUp = (formValues) => {
        // TODO : write a GET request to API with these form details

        console.log(formValues);
        if (formValues && formValues.confirmPassword === formValues.password) {
            // TODO : call the action creators for SIGNED_IN
            this.props.signedUp(formValues);
            console.log(`SignedUp Form Submitted`);
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
                        onSubmit={this.props.handleSubmit(this.onSignUp)}
                    >
                        <Field
                            label="Name"
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            component={this.renderInput}
                        />
                        <Field
                            label="Username"
                            name="username"
                            type="text"
                            placeholder="John_Doe"
                            component={this.renderInput}
                        />
                        <Field
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="password"
                            component={this.renderInput}
                        />
                        <Field
                            label="Re-Enter Password"
                            name="confirmPassword"
                            type="password"
                            placeholder="password"
                            component={this.renderInput}
                        />
                        <Field
                            label="Referral Code"
                            name="referral_code"
                            type="text"
                            placeholder="John_Doe"
                            component={this.renderInput}
                        />
                        <button
                            class="whiteButton text-orange-500 font-bold group"
                            type="submit"
                        >
                            <svg
                                role="status"
                                className={`hidden ${
                                    this.props.isSignedUpSuccess === null
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
                            SignUp
                        </button>
                    </form>
                    <h2 className="text-center text-gray-100 tracking-tight">
                        Already have an account ?{" "}
                        <span className="text-white font-bold">
                            {" "}
                            <Link to="/auth/login">Login</Link>
                        </span>
                    </h2>
                </div>
            </div>
        );
    };

    render() {
        let isSignedUpSuccessClass = "hidden";
        if (this.props.isSignedUpSuccess === true) {
            isSignedUpSuccessClass =
                "pb-2 block w-full text-center text-green-500 mt-5 text-xl tracking-tight";
        } else if (this.props.isSignedUpSuccess === false) {
            isSignedUpSuccessClass =
                "pb-2 block w-full text-center text-red-500 mt-5 text-xl tracking-tight";
        }
        console.log(`Sign Up error class : ${isSignedUpSuccessClass}`);
        console.log(`Sign Up error message : ${this.props.signUpResponse}`);

        return (
            <div className="my-2 pt-2">
                <h1 class={isSignedUpSuccessClass}>
                    *{this.props.signUpResponse}*
                </h1>
                {this.renderFetchForm()}
                <h1 class="block w-full text-center text-grey-darkest mt-5 text-xl tracking-tight">
                    You can only signup if you are invited by your team to
                    generate certificates via referral code .
                </h1>
                <h1 class="block w-full text-center text-grey-darkest mt-1 text-xl tracking-tight">
                    New to certify?
                    <span className="text-orange-500">
                        <Link to="/auth/requestReferral">
                            Request a referral code
                        </Link>
                    </span>
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
    if (!formValues.username) {
        errors.username = "Username Required";
    }
    if (!formValues.referral_code) {
        errors.referral_code = "Referral Code Required";
    }
    if (!formValues.password) {
        errors.password = "Password Required";
    }
    if (!formValues.confirmPassword) {
        errors.confirmPassword = "Password Required";
    }
    if (formValues.confirmPassword !== formValues.password) {
        errors.confirmPassword = "Password should match";
    }
    return errors;
};

const mapStateToPros = (state) => {
    return {
        isSignedUpSuccess: state.auth.isSignedUpSuccess,
        signUpResponse: state.auth.signUpError,
    };
};

export default connect(mapStateToPros, { signedUp })(
    reduxForm({
        form: "SignUp",
        validate,
    })(SignUp)
);

// export default reduxForm({
//     form: "SignUp",
// })(SignUp);
