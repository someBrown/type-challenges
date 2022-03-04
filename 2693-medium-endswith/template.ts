type EndsWith<S extends string, T extends string> = S extends `${infer R}${T}`
  ? true
  : false
