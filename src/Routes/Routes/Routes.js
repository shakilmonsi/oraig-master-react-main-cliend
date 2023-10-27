import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Profile from "../../Pages/Others/Profile/Profile";
import TermsAndConditions from "../../Pages/Others/TermsAndContions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Shop from "../../Pages/Shop/Shop";
import Contact from "../../Pages/Contact/Contact";
import Blog from "../../Pages/Home/Home/Blogs/Blog";
import ShopDetails from "../../Pages/PagesHeaders/ShopDetails/ShopDetails";
import ShopingCart from "../../Pages/PagesHeaders/ShopingCart/ShopingCart";
import CheckOut from "../../Pages/PagesHeaders/CheckOut/CheckOut";
import BlogDetails from "../../Pages/PagesHeaders/BlogDetails/BlogDetails";
import Register from "../../Pages/Login/Register/Register";
import AllUsers from "../../DashboardLayout/AllUsers/AllUsers";
import MyAppointment from "../../Pages/MyAppointment/MyAppointment";
import DashboardLayout from "../../DashboardLayout/DashboardLayoutAll/DashboardLayout";
import Depo from "../../DashboardLayout/DashboardLayoutAll/Depo/Depo";
import Stockist from "../../DashboardLayout/DashboardLayoutAll/Stockist/Stockist";
import AdminDashboard from "../../AdminDashboard/AdminDashboardAllCatagry/AdminDashboard/AdminDashboard";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
          
        
            {
                path: '/login',
                element: <Login></Login>
            },
            {
path:"/register",
element:<Register></Register>
            },
           
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: "/shop",
                element: <Shop></Shop>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path: "/shopdetails",
                element: <ShopDetails></ShopDetails>
            },
            {
                path:'/shopingcart',
                element:<ShopingCart></ShopingCart>
            },
    {
        path:'/checout',
        element:<CheckOut></CheckOut>
    },
    {
        path:'/blogdetails',
        element: <BlogDetails></BlogDetails>
    }



        ]
    },

  
    {
        path: '/dahsboartlayout',
        element:<DashboardLayout></DashboardLayout>,
        children: [
            {
path:"/dahsboartlayout",
element: <MyAppointment></MyAppointment>
            },
        
            {
                path: '/dahsboartlayout/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path:"/dahsboartlayout/depo",
                element: <Depo></Depo>
            },
            {
                path:'/dahsboartlayout/stockist',
                element:<Stockist></Stockist>
            }

        
         
        ]
    },
    {
        path: '/admindashboard',
        element:<AdminDashboard></AdminDashboard>,
        children: [
         
        
         
        ]
    }





])