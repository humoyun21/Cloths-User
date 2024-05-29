import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "../App";

import { Home, Product, Main, Signin, Signup, LikedProducts } from "@pages";
const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />}>
          <Route index element={<Main />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/liked-products" element={<LikedProducts />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default index;
