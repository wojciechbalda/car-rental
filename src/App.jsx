import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    lazy: () =>  import("./pages/Layout"),
    children: [
      {
        index: true,
        lazy: () => import("./pages/Home"),
      },
      {
        path: "/contact",
        lazy: () => import("./pages/Contact"),
      },
      {
        path: "/cars",
        children: [
          {
            index: true,
            lazy: () => import("./pages/AllCars"),
          },
          {
            path: ":carID",
            children: [
              {
                index: true,
                lazy: () => import("./pages/SpecificCar"),
              },
              {
                path: "reservation",
                lazy: () => import("./pages/MakeReservation"),
              },
              {
                path: "success",
                lazy: () => import("./pages/Success"),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    lazy: () => import("./pages/AdminLayout"),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        lazy: () => import("./pages/AdminHomepage"),
      },
      {
        path: "messages",
        children: [
          {
            index: true,
            lazy: () => import("./pages/Messages"),
          },
          {
            path: ":id",
            lazy: () => import("./pages/Message")
          }
        ]
      },
      {
        path: "cars",
        children: [
          {
            index: true,
            lazy: () => import("./pages/CarManagement"),
          },
          {
            path: ":carID",
            lazy: () => import("./pages/EditCar")
          },
          {
            path: "add",
            lazy: () => import("./pages/NewCar")
          }
        ]
      },
      {
        path: "reservations",
        children: [
          {
            index: true,
            lazy: () => import("./pages/Reservations"),
          },
          {
            path: ":id",
            lazy: () => import("./pages/Reservation"),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    errorElement: <ErrorPage />,
    lazy: () => import("./pages/Login"),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
