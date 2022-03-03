type DropChar<S, T> = S extends `${infer F}${infer R}`
  ? `${F extends T ? '' : F}${DropChar<R, T>}`
  : ''
