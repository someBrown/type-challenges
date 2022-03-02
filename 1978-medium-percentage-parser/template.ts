type PercentageParser<
  S extends string,
  L extends string[] = ['', '', '']
> = S extends `${infer F}${infer R}`
  ? F extends '+' | '-'
    ? PercentageParser<R, [F, L[1], L[2]]>
    : F extends '%'
    ? PercentageParser<R, [L[0], L[1], F]>
    : PercentageParser<R, [L[0], `${L[1]}${F}`, L[2]]>
  : L

//  +100%
