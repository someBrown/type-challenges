//后面一个判断需要把联合类型转成非联合类型 否则最终的返回值是true和false的联合类型 见type a
type IsUnion<T, U = T> = T extends U ? ([U] extends [T] ? false : true) : never

// type a = IsUnion<string | number>
