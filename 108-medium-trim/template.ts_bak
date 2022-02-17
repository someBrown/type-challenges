type Spance = ' ' | '\n' | '\t'
type Trim<S extends string> = S extends `${Spance}${infer R}`
  ? Trim<R>
  : S extends `${infer T}${Spance}`
  ? Trim<T>
  : S
