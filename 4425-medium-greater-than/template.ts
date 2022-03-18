type GreaterThan<
  L extends number,
  R extends number,
  U extends unknown[] = []
> = U['length'] extends L
  ? false
  : U['length'] extends R
  ? true
  : GreaterThan<L, R, [unknown, ...U]>
