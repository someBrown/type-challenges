type GreaterThan<
  T extends number,
  U extends number,
  L extends any[] = []
> = L['length'] extends T
  ? false
  : L['length'] extends U
  ? true
  : GreaterThan<T, U, [any, ...L]>

// type GreaterThan<
//   N1 extends number,
//   N2 extends number,
//   A extends unknown[] = []
// > = A['length'] extends N1
//   ? false
//   : A['length'] extends N2
//   ? true
//   : GreaterThan<N1, N2, [0, ...A]>
