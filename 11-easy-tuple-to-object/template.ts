type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [p in T[number]]: p
}
