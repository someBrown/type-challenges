type Flip<T extends Record<any, unknown>> = {
  [P in keyof T as T[P] extends PropertyKey
    ? T[P]
    : T[P] extends boolean
    ? `${T[P]}`
    : never]: P
}
