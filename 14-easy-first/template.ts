// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// T[number]返回数据的每一项 是一个联合类型 如果是空数组 返回never T[0]则是undefined
type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// 类似 js的结构 如果是空数组 解构失败 返回never
// type First<T extends any[]> = T extends [infer first, ...infer rest]
//   ? first
//   : never
