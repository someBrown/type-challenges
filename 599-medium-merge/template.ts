// type Merge<T extends Record<any, any>, U extends Record<any, any>> = {
//   [P in keyof (T & U)]: P extends keyof U
//     ? U[P]
//     : P extends keyof T
//     ? T[P]
//     : never
// }

type Merge<T extends Record<any, any>, U extends Record<any, any>> = {
  [P in keyof (T & U)]: (T & U)[P] extends never ? U[P] : T[P]
}

// type Foo = {
//   a: number
//   b: string
// }
// type Bar = {
//   b: number
//   c: boolean
// }

// type dc = Merge<Foo, Bar>
