import { RouterProvider } from "react-router-dom"
import { AppRouter } from "../routers"
import { Provider } from "react-redux"
import { store } from "../stores"

export const MainProvider = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
    </Provider>
  )
}
