type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [p in T[number]]: p
}

// const arr = [
//   {
//     a: 1,
//   },
// ]

// type a = typeof arr[number]
