import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import SignUp from "./routes/SignUp";
import SignIn from "./routes/SignIn";
import Dashboard from "./routes/DashBoard";
import Send from "./routes/Send";
import { RecoilRoot } from "recoil";

const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SignUp></SignUp>
  },
  {
    path: "/sign-in",
    element: <SignIn></SignIn>
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>
  },
  {
    path: "/send",
      element:<React.Suspense fallback={<div>Loading...</div>}> 
              <Send></Send>
        </React.Suspense>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);