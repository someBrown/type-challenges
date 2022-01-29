// type LastIndexOf<T, U, P extends unknown[] = []> = T extends [
//   ...infer Other,
//   infer Last
// ]
//   ? Last extends U
//     ? P['length']
//     : LastIndexOf<Other, U, [any, ...P]>
//   : -1

// type aa = LastIndexOf<[1, 2, 3, 2, 1], 2>

// your answers
type LastIndexOf<T extends unknown[], U> = T extends [...infer Rest, infer Last]
  ? Last extends U
    ? Rest['length']
    : LastIndexOf<Rest, U>
  : -1
