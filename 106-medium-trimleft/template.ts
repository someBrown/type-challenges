type ShouldTrim = ' ' | '\n' | '\t'

type TrimLeft<S extends string> = S extends `${ShouldTrim}${infer R}`
  ? TrimLeft<R>
  : S
