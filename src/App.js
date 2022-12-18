import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar"
import Leftbar from "./components/leftbar/LeftBar"
import Rightbar from "./components/rightbar/RightBar"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {

  function Layout() {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }} className='leftAndRightBar'>
          <Leftbar />
          <Outlet />
          <Rightbar />
        </div>
      </div>
    )
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );

}

export default App;
