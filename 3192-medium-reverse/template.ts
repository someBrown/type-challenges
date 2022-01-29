type Reverse<T, U extends any[] = []> = T extends [infer F, ...infer Rest]
  ? Reverse<Rest, [F, ...U]>
  : U
