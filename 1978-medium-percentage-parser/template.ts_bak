type PercentageParser<
  A extends string,
  T extends string[] = ['', '', '']
> = A extends `${infer F}${infer R}`
  ? F extends '+' | '-'
    ? PercentageParser<R, [F, T[1], T[2]]>
    : F extends '%'
    ? PercentageParser<R, [T[0], `${T[1]}`, F]>
    : PercentageParser<R, [T[0], `${T[1]}${F}`, T[2]]>
  : T
