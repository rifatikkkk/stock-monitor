import { createBrowserRouter } from "react-router-dom"
import { Main } from "../../pages/main"
import { Stock } from "../../pages/stock"

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/stock",
    element: <Stock />,
  },
])
