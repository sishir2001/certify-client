import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { withRouter } from "react-router-dom";

import { signedOut } from "../actions";

class Header extends React.Component {
    signOut = () => {
        console.log("signed out");
        this.props.signedOut();
    };

    renderHeaderTitles = () => {
        // ! render the header options according to the auth state of the redux
        if (this.props.isSignedIn === true) {
            // Username should be placed with a dropdown
            console.log("Logged In");
            return (
                <React.Fragment>
                    <li>
                        <button
                            id="dropdownNavbarLink"
                            data-dropdown-toggle="dropdownNavbar"
                            className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-orange-300 hover:text-orange-600 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                        >
                            Hi,{this.props.userName}{" "}
                            <svg
                                className="w-4 h-4 ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>

                        <div
                            id="dropdownNavbar"
                            className="z-10 hidden bg-orange-100 divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                            style={{
                                position: "absolute",
                                inset: "auto auto 0px 0px",
                                margin: "0px",
                                transform: "translate3d(741px, 2262.5px, 0px)",
                            }}
                            data-popper-reference-hidden=""
                            data-popper-escaped=""
                            data-popper-placement="top"
                        >
                            {/* <ul
                                className="py-1 text-sm text-gray-700 dark:text-gray-400"
                                aria-labelledby="dropdownLargeButton"
                            >
                                <li>
                                    <Link
                                        to="/"
                                        className="headerDropdownItemClass"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="headerDropdownItemClass"
                                    >
                                        Settings
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="headerDropdownItemClass"
                                    >
                                        Earnings
                                    </Link>
                                </li>
                            </ul> */}
                            <div className="py-1">
                                <Link
                                    onClick={this.signOut}
                                    className="headerDropdownItemClass2"
                                >
                                    Sign out
                                </Link>
                            </div>
                        </div>
                    </li>
                </React.Fragment>
            );
        } else {
            // There shouldn't be any dropdown
            console.log("Not logged in header");
        }
    };

    render() {
        const componentRoute = this.props.location.pathname;
        console.log(`route : ${componentRoute}`);
        return (
            <div className="bg-orange-100 shadow-lg w-screen p-4">
                <nav className="px-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <div className="container flex flex-wrap items-center justify-between mx-auto">
                        <Link
                            to="/"
                            className="flex items-center hover:underline hover:underline-offset-4"
                        >
                            <Logo />
                        </Link>
                        <button
                            data-collapse-toggle="mobile-menu"
                            type="button"
                            className="inline-flex items-center justify-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        <div
                            className="hidden w-full md:block md:w-auto"
                            id="mobile-menu"
                        >
                            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                                <li>
                                    <Link
                                        to="/getCertificates"
                                        className={
                                            componentRoute ===
                                            "/getCertificates"
                                                ? "headerFocusItemClass"
                                                : "headerItemClass"
                                        }
                                        aria-current="page"
                                    >
                                        Get Certificates
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/verifyCertificates"
                                        className={
                                            componentRoute ===
                                            "/verifyCertificates"
                                                ? "headerFocusItemClass"
                                                : "headerItemClass"
                                        }
                                    >
                                        Veritfy Certificates
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/generateCertificates"
                                        className={
                                            componentRoute ===
                                            "/generateCertificates"
                                                ? "headerFocusItemClass"
                                                : "headerItemClass"
                                        }
                                    >
                                        Generate Certificates
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/about"
                                        className={
                                            componentRoute === "/about"
                                                ? "headerFocusItemClass"
                                                : "headerItemClass"
                                        }
                                    >
                                        About
                                    </Link>
                                </li>
                                {this.renderHeaderTitles()}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

// mapping state to props
const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId,
        userName: state.auth.userName,
    };
};
export default connect(mapStateToProps, { signedOut })(withRouter(Header));
