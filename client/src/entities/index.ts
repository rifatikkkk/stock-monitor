export { BASE_URL } from "./constants"
export type { Search, Quote, Info } from "./types/typeStock"

export { api } from "./api/api"
export { stockApi, useGetInfoStockQuery } from "./api/stockApi"

export { selectInfo } from "./slices/stockSlice"
