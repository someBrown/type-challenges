// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [P in K]: T[P]
// } & Omit<T, K>

type MyReadonly2<T, U extends keyof T = keyof T> = {
  readonly [P in keyof T as P extends U ? P : never]: T[P]
} & {
  [P in keyof T as P extends U ? never : P]: T[P]
}
