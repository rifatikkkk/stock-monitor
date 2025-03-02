export type Search = {
  description: string | undefined
  displaySymbol: string | undefined
  symbol: string | undefined
  type: string | undefined
}

export type Quote = {
  c: number | undefined
  h: number | undefined
  l: number | undefined
  o: number | undefined
  pc: number | undefined
  t: number | undefined
  d: number | undefined
  dp: number | undefined
}

export type Info = {
  displaySymbol: string | undefined
  symbol: string | undefined
  c: number | undefined | null
  d: number | undefined | null
  o: number | undefined | null
}
