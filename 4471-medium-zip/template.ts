type Zip<T extends unknown[], U extends unknown[]> = T extends [
  infer F,
  ...infer Rest
]
  ? U extends [infer UF, ...infer URest]
    ? [[F, UF], ...Zip<Rest, URest>]
    : []
  : []

type cccccc = Zip<[1, 2], [true, false]>
