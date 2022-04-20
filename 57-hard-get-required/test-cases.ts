import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<
    Equal<
      GetRequired<{ foo: number; bar?: string; test: string }>,
      { foo: number; test: string }
    >
  >,
  Expect<
    Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>
  >
]
