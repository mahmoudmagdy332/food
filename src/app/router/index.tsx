import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/common/Loader";
import Home from "../../pages/Home";
import Search from "../../pages/Search";
import Area from "../../pages/Area";
import ContactUs from "../../pages/ContactUs";
import Ingredients from "../../pages/Ingredients";



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
        path:"/ingredients",
        element: (
          <Suspense fallback={<Loading />}>
            <Ingredients />
          </Suspense>
        ),
      },
      
    ],
  },
]);

export default routes;
