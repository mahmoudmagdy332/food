import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/common/Loader";
import Home from "../../pages/Home";



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

    ],
  },
]);

export default routes;
