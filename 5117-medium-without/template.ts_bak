type toUnion<T> = T extends any[] ? T[number] : T

type Without<T extends unknown[], U> = T extends [infer F, ...infer R]
  ? F extends toUnion<U>
    ? Without<[...R], U>
    : [F, ...Without<[...R], U>]
  : []
