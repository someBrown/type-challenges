type ObjectEntries<T> = {
  [P in keyof T]-?: [
    P,
    T[P] extends infer R ? (R extends undefined ? never : R) : never
  ]
}[keyof T]

type ObjectEntries2<T> = {
  [P in keyof T]-?: [P, T[P] extends infer R | undefined ? R : never]
}[keyof T]

type ObjectEntries3<T, U = keyof T> = U extends keyof T
  ? [U, T[U] extends infer R | undefined ? R : never]
  : never

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type A = ObjectEntries<Partial<Model>>
type B = ObjectEntries2<Partial<Model>>
type C = ObjectEntries3<Partial<Model>>

type D<T> = {
  [P in keyof T]: [T[P] extends infer R | undefined ? R : never]
}
type c = D<Partial<Model>>
