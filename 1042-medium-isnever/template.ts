// https://github.com/microsoft/TypeScript/issues/31751
// 为什么T要变成[T] 因为never 是空的联合类型 不会执行后面的表达式
type IsNever<T> = [T] extends [never] ? true : false

// type IsUnknow<T> = T extends unknown ? 1 : 2

// type cb = IsNever<never>
// type cbb = IsUnknow<unknown>
