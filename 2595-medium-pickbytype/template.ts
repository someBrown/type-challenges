// type PickByType<T, U> = {
//   [K in keyof T as string extends string
//     ? U extends T[K]
//       ? K
//       : never
//     : never]: T[K]
// }

type PickByType<T extends object, U> = Pick<
  T,
  {
    [P in keyof T]: T[P] extends U ? P : never
  }[keyof T]
>

// 最后[keyof T]会过滤掉never的类型 返回剩余的联合类型
type Test<T, U> = {
  [P in keyof T]: T[P] extends U ? P : never
}[keyof T]

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type D = Test<Model, boolean>
