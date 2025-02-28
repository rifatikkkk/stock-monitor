import { createBrowserRouter } from "react-router-dom"
import { Main } from "../../pages/main"

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
])
