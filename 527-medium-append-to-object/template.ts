// type AppendToObject<T, U extends string, V> = {
//   [key in keyof T | U]: (T & { [key in U]: V })[key]
// }

type AppendToObject<T extends object, U extends string, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V
}

type c = AppendToObject<{}, 'a', boolean>

interface bb {
  bb: 1
}

type d = {
  [K in keyof bb | 'A']: boolean
}
