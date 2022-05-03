// ? This component should display the dashboard if logged in,else route to login page
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetch_events } from "../../actions";

// dashboard of the events
class GenerateCert extends React.Component {
    componentDidMount() {
        // TODO : uncomment below three lines , while deploying
        // TODO : fetch list of events using action creators and update the state using reducers
        // if (!this.props.isSignedIn) {
        //     history.push("/auth/login");
        // }
        // TODO : fetch the list of all the certificates
        // ? uncomment the following line for productions
        // this.props.fetch_events(this.props.username,this.props.password);
        console.log("Fetching the list");
        this.props.fetch_events("hello123", "123$%^");
    }

    renderList() {
        // TODO : Render the list from the state

        return (
            <div class="p-6 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Pascathon
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    ID:1322415342
                </p>
                <Link
                    to="/generateCertificates/certDashboard/check/11333"
                    className=""
                >
                    <button
                        type="button"
                        class="text-white rounded-full bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium sm:rounded-lg text-sm px-2.5 sm:px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2 "
                    >
                        <p className="hidden sm:block">Certificates</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                        </svg>
                    </button>
                </Link>
            </div>
        );
    };

    render() {
        return (
            <div className="generateCertBackground">
                <div id="Header" className="grid grid-cols-2">
                    <h2 className="text-white font-bold text-2xl">Events</h2>
                    <Link
                        to="/generateCertificates/addEvents"
                        className="justify-self-end"
                    >
                        <button
                            type="button"
                            class="text-white rounded-full bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium sm:rounded-lg text-sm px-2.5 sm:px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2 "
                        >
                            <p className="hidden sm:block">Add Event</p>
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
                    id="content"
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {this.renderList()}
                    {this.renderList()}
                    {this.renderList()}
                    {this.renderList()}
                    {this.renderList()}
                    {this.renderList()}
                    {this.renderList()}
                    {this.renderList()}
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

// mapping state to props
const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        username: state.auth.username,
        password: state.auth.password,
    };
};

export default connect(mapStateToProps, { fetch_events })(GenerateCert);
