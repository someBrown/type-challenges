type Zip<T extends any[], U extends any[], P extends any[] = []> = T extends [
  infer F,
  ...infer Rest
]
  ? U extends [infer UF, ...infer URest]
    ? Zip<Rest, URest, [...P, [F, UF]]>
    : P
  : P
