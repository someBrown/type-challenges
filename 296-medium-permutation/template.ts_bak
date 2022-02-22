type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends U
  ? [T, ...Permutation<Exclude<U, T>>]
  : []

// type Test<T, U = T> = T extends U ? [T] : []
// type aa = Test<'A' | 'B' | 'C'>

// type Test<T, U = T> = T extends U ? (U extends T ? 1 : 2) : 3
// type aa = Test<'A' | 'B'>

// a a
// b a
// a b
// b b
