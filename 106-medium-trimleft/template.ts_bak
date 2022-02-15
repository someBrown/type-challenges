type Spance2 = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${Spance2}${infer R}`
  ? TrimLeft<R>
  : S
