// your answers
type Flip<T> = {
  [K in keyof T as T[K] extends PropertyKey
    ? T[K]
    : T[K] extends boolean
    ? `${T[K]}`
    : never]: K
}
