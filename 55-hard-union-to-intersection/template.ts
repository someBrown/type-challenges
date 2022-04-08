// your answers
type UnionToIntersection<U> = (
  U extends any ? (arg: U) => any : never
) extends (arg: infer P) => any
  ? P
  : never
