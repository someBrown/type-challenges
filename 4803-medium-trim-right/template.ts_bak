type shouldTrimStr = ' ' | '\t' | '\n'

type TrimRight<S extends string> = S extends `${infer R}${shouldTrimStr}`
  ? TrimRight<R>
  : S
