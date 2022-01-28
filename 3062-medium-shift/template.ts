type Shift<T> = T extends [infer F, ...infer R] ? R : []
