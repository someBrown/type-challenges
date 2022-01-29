type Require<T> = {
  [K in keyof T]-?: T[K]
}

// 注意遍历的对象也要先Require 处理 否则最后的值会带上undefined
type ObjectEntries<T> = {
  [K in keyof Require<T>]: [K, Require<T>[K]]
}[keyof T]

// 用这种方式判断是否带有？ extends infer R | undefined
// type ObjectEntries<T> = {
//   [K in keyof T]-?: [K, T[K] extends infer R | undefined ? R : T[K]]
// }[keyof T]
