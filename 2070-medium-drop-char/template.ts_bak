// type DropChar<
//   S,
//   C extends string,
//   Rest = S,
//   Prev extends string = ''
// > = Rest extends `${infer F}${infer R}`
//   ? F extends C
//     ? DropChar<S, C, R, `${Prev}`>
//     : DropChar<S, C, R, `${Prev}${F}`>
//   : Prev

type DropChar<S, C> = S extends `${infer X}${infer Y}`
  ? `${X extends C ? '' : X}${DropChar<Y, C>}`
  : ''
