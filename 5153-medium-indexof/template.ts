type IndexOf<T, U, P extends any[] = []> = T extends [infer F, ...infer Rest]
  ? F extends U
    ? P['length']
    : IndexOf<Rest, U, [...P, 1]>
  : -1
