import logo from './logo.svg';
import './App.css';
import {AppRoutes} from "./components/AppRoutes";
import {BrowserRouter as Router, Navigate} from "react-router-dom";
import "antd/dist/antd.css";
import {Layout, Menu} from "antd";
import React, {Fragment} from "react";
import {AuthProvider} from "./contexts/AuthContext";


function App() {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Fragment>
                        <AppRoutes>
                            <Layout>
                                <Navigate to="/"/>
                            </Layout>
                        </AppRoutes>
                    </Fragment>
                </AuthProvider>
            </Router>

        </div>
    );
}

export default App;
