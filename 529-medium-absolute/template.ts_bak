type DeleteMinusSign<T extends string> = T extends `-${infer R}` ? R : T

// type Absolute<T extends number | string | bigint> = T extends number
//   ? DeleteMinusSign<`${T}`>
//   : T extends string
//   ? DeleteMinusSign<T>
//   : T extends bigint
//   ? T
//   : T

type Absolute<T extends number | string | bigint> = DeleteMinusSign<`${T}`>
