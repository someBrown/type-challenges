// type MinusOne<T extends number, L extends any[] = []> = L['length'] extends T
//   ? Pop<L>['length']
//   : MinusOne<T, [unknown, ...L]>

// type c = MinusOne<1101>

type Make10Array<T extends any[]> = [
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T
]

type Make1Array<
  T extends string,
  L extends any[] = []
> = `${L['length']}` extends T ? L : Make1Array<T, [1, ...L]>
type MakeArray<
  T extends string,
  L extends any[] = []
> = T extends `${infer F}${infer R}`
  ? MakeArray<R, [...Make10Array<L>, ...Make1Array<F>]>
  : L

type MinusOne<T extends number> = Pop<MakeArray<`${T}`>>['length']
