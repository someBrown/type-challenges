type ReplaceAll<
  S extends string,
  U extends string,
  V extends string
> = U extends ''
  ? S
  : S extends `${infer F}${U}${infer T}`
  ? `${F}${V}${ReplaceAll<`${T}`, U, V>}`
  : S
