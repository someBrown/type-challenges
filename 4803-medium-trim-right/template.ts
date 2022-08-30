type shouldTrimStr = ' ' | '\t' | '\n'

type TrimRight<S> = S extends `${infer R}${shouldTrimStr}` ? TrimRight<R> : S
