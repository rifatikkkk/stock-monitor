import { RouterProvider } from "react-router-dom"
import { AppRouter } from "../routers/AppRouter"
import { Provider } from "react-redux"
import { store } from "../stores/store"

export const MainProvider = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
    </Provider>
  )
}
