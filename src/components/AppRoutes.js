import {Route, Routes} from "react-router-dom";
import MainPage from "./MainPage";
import Prices from "./Prices";
import Process from "./Process";
import MyIndex from "./MyIndex";
import Random from "./Random";
import Dashboard from "./Dashboard";

import SignIn from "../auth/SignIn";
import {PrivateRoute} from "../auth/PrivateRoute";
import {AuthProvider} from "../contexts/AuthContext";
import SignUp from "../auth/SignUp";
import {Fragment} from "react";


export const AppRoutes = () => {


    return (

        <Routes>

            {/*info*/}
            <Route exact path='/' element={<MyIndex/>}/>
            <Route exact path='/index' element={<MyIndex/>}/>

            <Route exact path='/dashboard' element={<Dashboard/>}/>
            <Route exact path='/random' element={<Random/>}/>
            <Route exact path='/main' element={<MainPage/>}/>


            {/*   nested */}
            <Route path="/test" element={<Prices/>}>
                <Route path="1" element={<Process/>}/>
            </Route>

{/*

            <Route exact path='/sign-in' element={<SignIn/>}/>
            <Route exact path='/sign-up' element={<SignUp/>}/>
*/}




        </Routes>


    )
}
