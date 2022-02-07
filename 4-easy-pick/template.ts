type MyPick<O, T extends keyof O> = {
  [P in T]: O[P]
}
