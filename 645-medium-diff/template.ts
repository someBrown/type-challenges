// type Diff<T extends object, K extends object> = {
//   [P in keyof (T & K)]: (T & K)[P]
// }

// type Diff<O extends object, O1 extends object> = O extends O1
//   ? {
//       [F in Exclude<keyof O, keyof O1>]: O[F]
//     }
//   : {
//       [F in Exclude<keyof O1, keyof O>]: O1[F]
//     }

type Diff<O, O1> = {
  [key in
    | Exclude<keyof O, keyof O1>
    | Exclude<keyof O1, keyof O>]: key extends keyof O
    ? O[key]
    : key extends keyof O1
    ? O1[key]
    : never
}
