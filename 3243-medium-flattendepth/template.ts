type FlattenDepth<
  T extends unknown[],
  N extends number = 1,
  U extends unknown[] = []
> = U['length'] extends N
  ? T
  : T extends [infer F, ...infer R]
  ? F extends unknown[]
    ? [...FlattenDepth<F, N, ['', ...U]>, ...FlattenDepth<R, N, U>]
    : [F, ...FlattenDepth<R, N, U>]
  : []

type cccda = FlattenDepth<[[[[5]]], [[[6]]]], 2>
