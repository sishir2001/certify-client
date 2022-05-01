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
                                path="/generateCertificates"
                                exact
                                component={GenerateCert}
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
