type FlattenDepth<
  T,
  D extends number = 1,
  A extends any[] = []
> = A['length'] extends D
  ? T
  : T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...FlattenDepth<F, D, ['', ...A]>, ...FlattenDepth<R, D, A>]
    : [F, ...FlattenDepth<R, D, A>]
  : []
