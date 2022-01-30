type Unique<T extends any[], P extends any[] = []> = T extends [
  infer F,
  ...infer Rest
]
  ? F extends P[number]
    ? Unique<Rest, [...P]>
    : Unique<Rest, [...P, F]>
  : P
