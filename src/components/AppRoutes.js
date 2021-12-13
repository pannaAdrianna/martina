import {Route, Routes} from "react-router-dom";
import MainPage from "./MainPage";
import Prices from "./Prices";
import Test2 from "./Test2";
import MyIndex from "./MyIndex";
import Random from "./Random";
import Dashboard from "./Dashboard";


export const AppRoutes = () => {


    return (


        <Routes>
            {/*info*/}
            <Route exact path='/' element={<MyIndex/>}/>
            <Route exact path='/index' element={<MainPage/>}/>
            <Route exact path='/dashboard' element={<Dashboard/>}/>
            <Route exact path='/random' element={<Random/>}/>


            {/*    auth*/}
            {/*    <Route path="/sign-in" element = {<SignIn/>}/>*/}

            {/*   nested */}
            <Route path="/test" element={<Prices/>}>
                <Route path="1" element={<Test2/>}/>
            </Route>
        </Routes>

    )
}