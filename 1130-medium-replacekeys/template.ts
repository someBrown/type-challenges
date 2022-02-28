type ReplaceKeys<U, V, W> = {
  [P in keyof U]: P extends V ? (P extends keyof W ? W[P] : never) : U[P]
}
