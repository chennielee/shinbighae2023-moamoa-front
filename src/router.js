import { createBrowserRouter } from "react-router-dom";

import { HomePage, SignUpPage, GroupPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/signup",
    element: <SignUpPage />,
  },

  {
    path: "/group",
    element: <GroupPage />,
  },
]);

export default router;
