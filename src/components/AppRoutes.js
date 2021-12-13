import {Route, Routes} from "react-router-dom";
import MainPage from "./MainPage";
import Prices from "./Prices";
import Test2 from "./Test2";
import MyIndex from "./MyIndex";
import Random from "./Random";
import Dashboard from "./Dashboard";

import SignIn from "../auth/SignIn";
import {PrivateRoute} from "../auth/PrivateRoute";
import {AuthProvider} from "../contexts/AuthContext";


export const AppRoutes = () => {


    return (


        <Routes>

            {/*info*/}
            <Route exact path='/' element={<MyIndex/>}/>

            <Route exact path='/dashboard' element={<Dashboard/>}/>
            <Route exact path='/random' element={<Random/>}/>

                <Route exact path='/sign-in' element={<SignIn/>}/>

                <Route exact path='/index' element={<PrivateRoute/>}>
                    <Route exact path='/index' element={<MainPage/>}/>
                </Route>


            {/*   nested */}
            <Route path="/test" element={<Prices/>}>
                <Route path="1" element={<Test2/>}/>
            </Route>

        </Routes>

    )
}