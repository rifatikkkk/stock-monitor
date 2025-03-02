import { createSlice } from "@reduxjs/toolkit"
import { stockApi } from "../api/stockApi"
import type { RootState } from "../../app/stores/store"
import type { Info, Quote, Search } from "../types/typeStock"

interface InitialState {
  search: Search[] | null
  quote: Quote | null
  info: Info[] | null
}

const initialState: InitialState = {
  search: null,
  quote: null,
  info: null,
}

const slice = createSlice({
  name: "stock",
  initialState,
  reducers: create => ({
    initial: () => initialState,
  }),
  extraReducers: builder => {
    builder
      .addMatcher(
        stockApi.endpoints.getSearchStock.matchFulfilled,
        (state, action) => {
          state.search = action.payload
        },
      )
      .addMatcher(
        stockApi.endpoints.getQuoteStock.matchFulfilled,
        (state, action) => {
          state.quote = action.payload
        },
      )
      .addMatcher(
        stockApi.endpoints.getInfoStock.matchFulfilled,
        (state, action) => {
          state.info = action.payload
        },
      )
  },
})

export default slice.reducer

export const selectInfo = (state: RootState) => state.stock.info
