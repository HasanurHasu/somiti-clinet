import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Dashboard from "../Dashboard/Dashboard";
import TotalMember from "../Dashboard/TotalMember";
import MemberInfo from "../Dashboard/MemberInfo";
import PrivateRoute from "./PrivateRoute";
import ProfileUpdate from "../Dashboard/ProfileUpdate";
import AdminRoute from "./AdminRoute";
import ApplyForLoan from "../Dashboard/ApplyForLoan";
import AllAppliedLoan from "../Dashboard/AllAppliedLoan";
import ActiveLoan from "../Dashboard/ActiveLoan";
import UserLoanInfo from "../Dashboard/UserLoanInfo";
import UpdateAppliedLoan from "../Dashboard/UpdateAppliedLoan";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "/dashboard/all-members",
                element: <AdminRoute><TotalMember /></AdminRoute>
            },
            {
                path: '/dashboard/loanInfo/:id',
                element: <PrivateRoute><UserLoanInfo></UserLoanInfo></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/loanInfo/${params.id}`)
            },
            {
                path: '/dashboard/applyLoan',
                element: <PrivateRoute><ApplyForLoan></ApplyForLoan></PrivateRoute>
            },
            {
                path: '/dashboard/update-profile/:id',
                element: <PrivateRoute><ProfileUpdate></ProfileUpdate></PrivateRoute>,
                // loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`)
            },
            {
                path: '/dashboard/appliedLoan',
                element: <PrivateRoute><AllAppliedLoan></AllAppliedLoan></PrivateRoute>
            },
            {
                path: '/dashboard/activeLoan',
                element: <PrivateRoute><ActiveLoan></ActiveLoan></PrivateRoute>
            },
            {
                path: '/dashboard/confirmLoan/:id',
                element: <PrivateRoute><UpdateAppliedLoan></UpdateAppliedLoan></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/loanInfo/${params.id}`)
            }
        ]
    }
]);

export default Router;