type IntersectionToObj2<T> = {
  [P in keyof T]: T[P]
}

type RequiredByKeys<T, K = keyof T> = IntersectionToObj2<
  {
    [P in keyof T as P extends K ? P : never]-?: T[P]
  } & { [P in keyof T as P extends K ? never : P]: T[P] }
>

// interface User {
//   name: string
//   age: number
//   address: string
// }
// type a = PartialByKeys<User, 'name'>

// type Intersection<A, B> = A & B extends infer U
//   ? { [P in keyof U]: U[P] }
//   : never

// type PartialByKeys<T, K = keyof T> = Intersection<
//   Partial<Pick<T, Extract<K, keyof T>>>,
//   Pick<T, Exclude<keyof T, K>>
// >
