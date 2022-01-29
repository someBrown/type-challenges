type Trunc<T extends number | string> = `${T}` extends `${infer F}.${infer L}`
  ? `${F}`
  : `${T}`
