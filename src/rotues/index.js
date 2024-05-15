// import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import RegisterPage from "../pages/RegisterPage";
// import CheckEmailPage from "../pages/CheckEmailPage";
// import CheckPasswordPage from "../pages/CheckPasswordPage";
// import Home from "../pages/Home";
// import MessagePage from "../components/MessagePage";
// import AuthLayouts from "../layout";
// import Forgotpassword from "../pages/Forgotpassword";
// import Auth from "../components/Auth";

// const router = createBrowserRouter({
//     basename: '/chatapp',
//     routes: [
//         {
//             path: "/",
//             element: <App />,
//             children: [
//                 {
//                     path: "register",
//                     element: <AuthLayouts><RegisterPage /></AuthLayouts>
//                 },
//                 {
//                     path: 'email',
//                     element: <AuthLayouts><CheckEmailPage /></AuthLayouts>
//                 },
//                 {
//                     path: 'password',
//                     element: <AuthLayouts><CheckPasswordPage /></AuthLayouts>
//                 },
//                 {
//                     path: 'forgot-password',
//                     element: <AuthLayouts><Forgotpassword /></AuthLayouts>
//                 },
//                 {
//                     path: "",
//                     element:
//                         <Auth>
//                             <Home />
//                         </Auth>,
//                     children: [
//                         {
//                             path: ':userId',
//                             element: <MessagePage />
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]
// });

// export default router


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import RegisterPage from "../pages/RegisterPage";
import CheckEmailPage from "../pages/CheckEmailPage";
import CheckPasswordPage from "../pages/CheckPasswordPage";
import Home from "../pages/Home";
import MessagePage from "../components/MessagePage";
import AuthLayouts from "../layout";
import Forgotpassword from "../pages/Forgotpassword";
import Auth from "../components/Auth";

const MainRoutes =()=> (
    <Router basename="/chatapp">
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="register" element={<AuthLayouts><RegisterPage /></AuthLayouts>} />
                <Route path="email" element={<AuthLayouts><CheckEmailPage /></AuthLayouts>} />
                <Route path="password" element={<AuthLayouts><CheckPasswordPage /></AuthLayouts>} />
                <Route path="forgot-password" element={<AuthLayouts><Forgotpassword /></AuthLayouts>} />
                <Route path="" element={<Auth><Home /></Auth>}>
                    <Route path=":userId" element={<MessagePage />} />
                </Route>
            </Route>
        </Routes>
    </Router>
);

export default MainRoutes;
