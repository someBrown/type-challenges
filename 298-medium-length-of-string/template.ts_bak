type GetLength<T extends any[]> = T['length']

// 把字符串转成tuple 可以获取长度 单string['length']只返回number
type LengthOfString<
  S extends string,
  T extends any[] = []
> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [...T, F]>
  : GetLength<T>

// type b = LengthOfString<'kumiko'>

// type c = GetLength<[1]>

// type LengthOfArray<S extends string> = S['length']

// type ba = LengthOfArray<'ab'>
