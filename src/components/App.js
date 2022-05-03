import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import Landing from "./Constants/Landing";
import Header from "./Constants/Header";
import GetCert from "./Get/GetCert";
import VerifyCert from "./Verify/VerifyCert";
import GenerateCert from "./Generate/GenerateCert";
import About from "./About";
import CertFound from "./Get/CertFound";
import CertNotFound from "./Get/CertNotFound";
import CertStatus from "./Verify/CertStatus";
import Login from "./auth/Login";
import RequestReferral from "./auth/RequestReferral";
import SignUp from "./auth/SignUp";
import ReferralDisplay from "./auth/ReferralDisplay";
import AddEvents from "./Generate/AddEvents";
import CertDashboard from "./Generate/CertDashboard";
import AddCertificates from "./Generate/AddCertificates";
class App extends React.Component {
    render() {
        return (
            <div className="">
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={Landing} />
                            <Route
                                path="/getCertificates"
                                exact
                                component={GetCert}
                            />
                            <Route
                                path="/getCertificates/found"
                                exact
                                component={CertFound}
                            />
                            <Route
                                path="/getCertificates/notfound"
                                exact
                                component={CertNotFound}
                            />
                            <Route
                                path="/verifyCertificates"
                                exact
                                component={VerifyCert}
                            />
                            <Route
                                path="/verifyCertificates/certStatus"
                                exact
                                component={CertStatus}
                            />
                            <Route
                                path="/generateCertificates/"
                                exact
                                component={GenerateCert}
                            />
                            <Route
                                path="/generateCertificates/addEvents"
                                exact
                                component={AddEvents}
                            />
                            <Route
                                path="/generateCertificates/certDashboard/:eventName/:event_code"
                                exact
                                component={CertDashboard}
                            />
                            <Route
                                path="/generateCertificates/addCert/:eventName/:event_code"
                                exact
                                component={AddCertificates}
                            />
                            <Route path="/auth/login" exact component={Login} />
                            <Route
                                path="/auth/signup"
                                exact
                                component={SignUp}
                            />
                            <Route
                                path="/auth/requestReferral"
                                exact
                                component={RequestReferral}
                            />
                            <Route
                                path="/auth/referralDisplay"
                                exact
                                component={ReferralDisplay}
                            />
                            <Route path="/about" exact component={About} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
