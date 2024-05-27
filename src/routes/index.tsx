import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "../App";

import { Home, Product, Main } from "@pages";
const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />}>
          <Route index element={<Main />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
        {/* <Route path="/signup" element={<SginUp/>}/>
              <Route path="/signin" element={<SignIn/>}/> */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default index;
