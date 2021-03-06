import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import './index.css';
import HomePage from "./pages/HomePage";
import OverviewPage from "./pages/OverviewPage";
import QualificationPage from "./pages/QualificationPage";
import UniversityPage from "./pages/UniversityPage";
import LocationPage from "./pages/LocationPage";

console.log("Read");

ReactDOM.render(
    <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/overview" component={OverviewPage} />
        <Route exact path="/locations" component={LocationPage} />
        <Route exact path="/qualifications" component={QualificationPage} />
        <Route exact path="/university" component={UniversityPage} />
    </Router>,
    document.getElementById('root'),

);
