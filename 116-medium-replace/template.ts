type Replace<
  T extends string,
  U extends string,
  V extends string
> = U extends ''
  ? T
  : T extends `${infer First}${U}${infer Rest}`
  ? `${First}${V}${Rest}`
  : T
