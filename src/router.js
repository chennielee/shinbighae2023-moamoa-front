import { createBrowserRouter } from "react-router-dom";

import { HomePage, SignUpPage, GroupPage, WishListPage } from "./pages";

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

  {
    path: "/wish",
    element: <WishListPage />,
  },
]);

export default router;
