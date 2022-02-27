type MyEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false

type Includes<T extends unknown[], U> = true extends {
  [P in keyof T]: MyEqual<T[P], U>
}[number]
  ? true
  : false

type cccd = Includes<[{}], { a: 'A' }>
