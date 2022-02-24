type LengthOfString<
  T extends string,
  L extends unknown[] = []
> = T extends `${infer F}${infer R}`
  ? LengthOfString<R, [unknown, ...L]>
  : L['length']

type d = LengthOfString<''>


