type IntersectionToObj<T> = {
  [P in keyof T]: T[P]
}

type PartialByKeys<T, U = keyof T> = IntersectionToObj<
  {
    [P in keyof T as P extends U ? never : P]: T[P]
  } & {
    [P in keyof T as P extends U ? P : never]?: T[P]
  }
>

// type Intersection<A, B> = A & B extends infer U
//   ? { [P in keyof U]: U[P] }
//   : never

type Intersection<A, B> = { [P in keyof (A & B)]: (A & B)[P] }

type PartialByKeys2<T, K = keyof T> = Intersection<
  Partial<Pick<T, Extract<K, keyof T>>>,
  Pick<T, Exclude<keyof T, K>>
>

interface User {
  name: string
  age: number
  address: string
}

type cccc = PartialByKeys2<User, 'name'>
