type StartsWith<S extends string, T extends string> = S extends `${T}${infer R}`
  ? true
  : false
