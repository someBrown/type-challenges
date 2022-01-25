type Merge<F, S> = {
  [P in keyof (F & S)]: P extends keyof S
    ? S[P]
    : P extends keyof F
    ? F[P]
    : never
}

// type Foo = {
//   a: number
//   b: string
// }
// type Bar = {
//   b: number
//   c: boolean
// }

// type dd = (Foo & Bar)['b']
// (F & S)[key] extends never 说明类型冲突  取后面的一个类型
// type Merge<F extends Record<any, any>, S extends Record<any, any>> = {
//     [key in keyof (F & S)]: (F & S)[key] extends never ? S[key] : (F & S)[key];
//   };
