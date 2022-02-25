type StringToUnion<
  S extends string,
  L extends unknown[] = []
> = S extends `${infer F}${infer R}` ? StringToUnion<R, [F, ...L]> : L[number]
