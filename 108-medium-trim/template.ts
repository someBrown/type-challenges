type Spance = ' ' | '\n' | '\t'
type Trim<T> = T extends `${Spance}${infer R}`
  ? Trim<R>
  : T extends `${infer L}${Spance}`
  ? Trim<L>
  : T
