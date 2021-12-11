import logo from './logo.svg';
import './App.css';
import {AppRoutes} from "./components/AppRoutes";
import {BrowserRouter, Navigate} from "react-router-dom";
import "antd/dist/antd.css";
import {Layout, Menu} from "antd";
import {Header} from "antd/es/layout/layout";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AppRoutes>
                    <Layout>
                        <Navigate to="/"/>
                    </Layout>

                </AppRoutes>
            </BrowserRouter>

        </div>
    );
}

export default App;
