type ToUnion<T> = T extends unknown[] ? T[number] : T

type Without<T extends unknown[], U> = T extends [infer F, ...infer Rest]
  ? F extends ToUnion<U>
    ? Without<Rest, U>
    : [F, ...Without<Rest, U>]
  : T
