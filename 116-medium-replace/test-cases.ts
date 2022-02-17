import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>
]

// type Test<T> = T extends any
//   ? Equal<T, string> extends true
//     ? never
//     : T
//   : never

// type temp = {
//   [key: string]: any
//   foo(): void
// }

// type res = Test<keyof temp>

// type s1<X> = <T>() => T extends X ? 1 : 2
// type k1 = s1<'kars'>
// type k2 = s1<'kars2'>
// type c = k1 extends k2 ? true : false

// type k1 = <T>() => T extends "kars" ? number : string
// const f1: k1 = <T>() => {}

// type s1<X> = <T>() => T extends X ? 1 : 2
// type s2<X> = <T>() => T extends X ? 1 : 2
// type s3 = s1<'kars2'> extends s1<'kars'> ? 1 : 2
