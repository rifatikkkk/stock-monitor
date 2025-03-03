import { api } from "./api"
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import type { Info, Quote, Search } from "../types/typeStock"

const { VITE_FINNHUB_TOKEN } = import.meta.env

type SearchResult = {
  count: number
  result: Search[]
}

export const stockApi = api.injectEndpoints({
  endpoints: builder => ({
    getSearchStock: builder.query<Search[], string>({
      query: q => ({
        url: `/search?q=${q}&token=${VITE_FINNHUB_TOKEN}`,
        method: "GET",
      }),
      transformResponse: (response: SearchResult) => {
        return response.result
      },
    }),
    getQuoteStock: builder.query<Quote, string>({
      query: q => ({
        url: `/quote?symbol=${q}&token=${VITE_FINNHUB_TOKEN}`,
        method: "GET",
      }),
    }),
    getInfoStock: builder.query<Info[], string>({
      queryFn: async (arg, api, extraOptions, baseQuery) => {
        // need for get full info about stock for table
        try {
          let infoStock: Info[] = []
          const search = await baseQuery(
            `/search?q=${arg}&token=${VITE_FINNHUB_TOKEN}`,
          )
          if (search.error)
            return { error: search.error as FetchBaseQueryError } // ?

          const searchResult = search.data as SearchResult

          infoStock = await Promise.all(
            // for add not empty outputResult
            searchResult.result.map(async search => {
              const quotes = await baseQuery(
                `/quote?symbol=${search.symbol}&token=${VITE_FINNHUB_TOKEN}`,
              )

              if (quotes.error?.status === 403) {
                return {
                  displaySymbol: search.displaySymbol,
                  symbol: search.symbol,
                  c: undefined,
                  d: undefined,
                  o: undefined,
                }
              }

              const quoteResult = quotes.data as Quote

              return {
                displaySymbol: search.displaySymbol,
                symbol: search.symbol,
                c: quoteResult.c,
                d: quoteResult.d,
                o: quoteResult.o,
              }
            }),
          )

          return { data: infoStock }
        } catch (error) {
          return { error: error as FetchBaseQueryError }
        }
      },
    }),
  }),
})

export const {
  useGetSearchStockQuery,
  useGetQuoteStockQuery,
  useGetInfoStockQuery,
} = stockApi

export const {
  endpoints: { getSearchStock, getQuoteStock, getInfoStock },
} = stockApi
