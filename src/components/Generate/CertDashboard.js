import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetch_certs_list } from "../../actions";
import history from "../../history";

class CertDashboard extends React.Component {
    printParams = () => {
        const event_name = this.props.match.params.eventName,
            event_code = this.props.match.params.event_code;
        console.log(`event_name : ${event_name}`);
        console.log(`event_code : ${event_code}`);
    };
    componentDidMount() {
        if (this.props.isSignedIn) {
            console.log(
                `Fetching the certs of the event_code : ${this.props.match.params.event_code}`
            );
            this.props.fetch_certs_list({
                username: this.props.username,
                password: this.props.password,
                event_code: this.props.match.params.event_code,
            });
        } else {
            history.push("/auth/login");
        }
    }

    renderList() {
        // TODO : Render the list from the state
        if (this.props.cert_list) {
            return this.props.cert_list.map(({ fields }) => {
                return (
                    <div class="flex flex-wrap p-3 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                            UID :{" "}
                            <span className="font-normal text-lg text-gray-700 dark:text-gray-400">
                                {fields.uid_number}
                            </span>
                        </h5>
                    </div>
                );
            });
        }
    }
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
        console.log(this.props.cert_list);
        console.log(`username : ${this.props.username}`);
        console.log(`password : ${this.props.password}`);
        return (
            <div className="generateCertBackground">
                {this.returnHeader()}
                <div id="Header" className="grid grid-cols-2 mt-10">
                    <h2 className="text-white font-bold text-2xl">
                        Generated Certificates
                    </h2>
                    <Link
                        to={`/generateCertificates/addCert/${this.props.match.params.eventName}/${this.props.match.params.event_code}`}
                        className="justify-self-end"
                    >
                        <button
                            type="button"
                            class="text-white rounded-full bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium sm:rounded-lg text-sm px-2.5 sm:px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2 "
                        >
                            <p className="hidden sm:block">Add Certificates</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 "
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </Link>
                </div>
                <div
                    id="Error"
                    className="text-white font-semibold tracking-tighter"
                >
                    {this.props.cert_list_error}
                </div>
                <div
                    id="content"
                    className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

// mapping state to props
const mapStateToProps = ({ auth, cert }) => {
    return {
        isSignedIn: auth.isSignedIn,
        username: auth.userName,
        password: auth.password,
        cert_list: cert.fetched_certs_list,
        cert_list_error: cert.fetched_certs_list_error,
    };
};

export default connect(mapStateToProps, { fetch_certs_list })(CertDashboard);
