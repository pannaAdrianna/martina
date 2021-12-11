import {Route, Routes} from "react-router-dom";
import MainPage from "./MainPage";
import Test from "./Test";
import Test2 from "./Test2";
import MyIndex from "./MyIndex";


export const AppRoutes = () => {


    return (


        <Routes>
            {/*info*/}
            <Route exact path='/' element={<MyIndex/>}/>
            <Route exact path='/dashboard' element={<MainPage/>}/>


            {/*    auth*/}
            {/*    <Route path="/sign-in" element = {<SignIn/>}/>*/}

            {/*   nested */}
            <Route path="/test" element={<Test/>}>
                <Route path="1" element={<Test2/>}/>
            </Route>
        </Routes>

    )
}