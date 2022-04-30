import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./Landing";
import Header from "./Header";
import Footer from "./Footer";
import GetCert from "./GetCert";
import VerifyCert from "./VerifyCert";
import GenerateCert from "./GenerateCert";
import About from "./About";
class App extends React.Component {
    render() {
        return (
            <div className="">
                <Router>
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
