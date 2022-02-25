type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends U
  ? [T, ...Permutation<Exclude<T, U>>]
  : []

type aa = Permutation<'A' | 'B'>

type ccc = Exclude<'A', 'A' | 'B'>
