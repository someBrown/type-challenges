type Diff<T extends object, K extends object> = {
  [P in
    | Exclude<keyof T, keyof K>
    | Exclude<keyof K, keyof T>]: P extends keyof T
    ? T[P]
    : P extends keyof K
    ? K[P]
    : never
}
