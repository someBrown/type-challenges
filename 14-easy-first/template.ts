// type First<T extends any[]> = T extends [infer Fir, ...infer Rest] ? Fir : never
// type First<T extends any[]> = T[0] extends undefined ? never : T[0]
type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
