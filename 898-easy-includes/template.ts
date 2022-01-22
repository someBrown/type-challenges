type MyEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false

type Includes<T extends readonly any[], U> = true extends {
  [I in keyof T]: MyEqual<T[I], U>
}[number]
  ? true
  : false

// type test<T extends readonly any[], U> = {
//   [I in keyof T]: MyEqual<T[I], U>
// }[number]

// type res = test<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>
