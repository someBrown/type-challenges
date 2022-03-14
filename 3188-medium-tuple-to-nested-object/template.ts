type TupleToNestedObject<T, U> = T extends [infer F, ...infer Tail]
  ? {
      [K in F & string]: TupleToNestedObject<Tail, U>
    }
  : U
