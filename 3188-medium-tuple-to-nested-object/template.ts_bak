// type TupleToNestedObject<T, U> = T extends [...infer Other, infer Last]
//   ? TupleToNestedObject<Other, { Last: U }>
//   : U

type TupleToNestedObject<T, U> = T extends [infer F, ...infer R]
  ? {
      [K in F & string]: TupleToNestedObject<R, U>
    }
  : U

type a = TupleToNestedObject<['a', 'b', 'c'], boolean>
