// type StartsWith<
//   T extends string,
//   U extends string,
//   P extends string = ''
// > = T extends `${P}${infer F}${infer R}`
//   ? `${P}${F}` extends U
//     ? true
//     : StartsWith<T, U, `${P}${F}`>
//   : false

type StartsWith<T extends string, U extends string> = T extends `${U}${infer R}`
  ? true
  : false
