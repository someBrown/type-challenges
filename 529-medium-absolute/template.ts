type DeleteMinusSign<T extends string> = T extends `-${infer R}` ? R : T

type Absolute<T extends number | string | bigint> = DeleteMinusSign<`${T}`>
