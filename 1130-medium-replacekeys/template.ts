// 传入的泛型如果是联合类型 最后一定会返回一个联合类型 如注释 最后e 返回 type e = d<a, a> | d<a, b>
type ReplaceKeys<U, T, Y> = {
  [K in keyof U]: K extends T ? (K extends keyof Y ? Y[K] : never) : U[K]
}

// type a = { a: 1 }
// type b = { b: 2 }

// type c = a | b

// type d<U, T> = {
//   [K in keyof T]: 1
// }

// type e = d<a, c>
