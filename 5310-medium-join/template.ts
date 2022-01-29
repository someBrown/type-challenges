type Join<T, U extends string | number, P extends string = ''> = T extends [
  infer X
]
  ? X extends string
    ? `${P}${X}`
    : `${P}`
  : T extends [infer F, ...infer Rest]
  ? F extends string
    ? Join<Rest, U, `${P}${F}${U}`>
    : P
  : P

type ddd = Join<['a', 'p', 'p', 'l', 'e'], '-'>
