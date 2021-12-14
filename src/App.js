import logo from './logo.svg';
import './App.css';
import {AppRoutes} from "./components/AppRoutes";
import {BrowserRouter as Router, Navigate} from "react-router-dom";
import "antd/dist/antd.css";
import {Layout, Menu} from "antd";
import React, {Fragment} from "react";
import {Header} from "antd/es/layout/layout";
import {NavBar} from "./NavBar";


function App() {


    return (
        <div className="App">

            <Router>
                <AppRoutes>
                    <Layout>
                        <Header>
                            <NavBar/>
                        </Header>
                    </Layout>
                    <Navigate to="/"/>
                </AppRoutes>
            </Router>
        </div>


    );

}

export default App;
