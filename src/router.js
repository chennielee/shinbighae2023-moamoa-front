import { createBrowserRouter } from "react-router-dom";

import {
  HomePage,
  SignUpPage,
  GroupPage,
  MakeGroupPage1,
  MKPage3,
  MPage4,
  WishListPage,
  InvestHelpPage,
} from "./pages";

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
    path: "/makegroup1",
    element: <MakeGroupPage1 />,
  },

  {
    path: "/makegroup3",
    element: <MKPage3 />,
  },

  {
    path: "/makegroup4",
    element: <MPage4 />,
  },

  {
    path: "/wishpage",
    element: <WishListPage />,
  },
  {
    path: "/helppage",
    element: <InvestHelpPage />,
  },
]);

export default router;
