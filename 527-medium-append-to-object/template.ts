type test1 = {
  key: 'cat'
  value: 'green'
}
type AppendToObject<T extends Record<string, unknown>, U extends string, V> = {
  [P in keyof T | U]: P extends keyof T ? T[P] : V
}
// type AppendToObject2<T extends Record<string, unknown>, U extends string, V> = {
//   [P in keyof T | U]: { [key in U]: V }
// }

type cc = AppendToObject<test1, 'home' | 'a', boolean>
