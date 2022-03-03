type PickByType<U, V> = {
  [P in keyof U as U[P] extends V ? P : never]: U[P]
}
