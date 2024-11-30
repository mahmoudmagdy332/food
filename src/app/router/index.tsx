import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/common/Loader";
import Home from "../../pages/Home";
import Search from "../../pages/Search";
import Area from "../../pages/Area";
import ContactUs from "../../pages/ContactUs";
import Ingredients from "../../pages/Ingredients";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import AuthenticationRouter from "./guard/AuthenticationRouter";
import Profile from "../../pages/Profile";
import Meals from "../../pages/Meals";
import CartScreen from "../../pages/Cart";
import SingleMeal from "../../pages/SingleMeal";
import Suggestion from "../../pages/Suggestion";
import Payment from "../../pages/Payment";



const Loading = () => (
  <div className="flex h-96 justify-center items-center">
    <Loader/>
  </div>
);


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path:"/search",
        element: (
          <Suspense fallback={<Loading />}>
            <Search />
          </Suspense>
        ),
      },
      {
        path:"/area",
        element: (
          <Suspense fallback={<Loading />}>
            <Area />
          </Suspense>
        ),
      },
      {
        path:"/contact",
        element: (
          <Suspense fallback={<Loading />}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path:"/suggestion",
        element: (
          <Suspense fallback={<Loading />}>
            <Suggestion />
          </Suspense>
        ),
      },
      {
        path:"/ingredients",
        element: (
          <Suspense fallback={<Loading />}>
            <Ingredients />
          </Suspense>
        ),
      },
      {
        path:"/login",
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path:"/sign-up",
        element: (
          <Suspense fallback={<Loading />}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path:"/profile",
        element: (
          <Suspense fallback={<Loading />}>
            <AuthenticationRouter>
              <Profile />
             </AuthenticationRouter>
           
          </Suspense>
        ),
      },
      {
        path:"/meals/:id",
        element: (
          <Suspense fallback={<Loading />}>
              <Meals />
          </Suspense>
        ),
      },
      {
        path:"/meal/:id",
        element: (
          <Suspense fallback={<Loading />}>
              <SingleMeal />
          </Suspense>
        ),
      },
      {
        path:"/cart",
        element: (
          <Suspense fallback={<Loading />}>
              <CartScreen />
          </Suspense>
        ),
      },
      {
        path:"/payment",
        element: (
          <Suspense fallback={<Loading />}>
              <Payment />
          </Suspense>
        ),
      },
       
    ],
  },
]);

export default routes;
