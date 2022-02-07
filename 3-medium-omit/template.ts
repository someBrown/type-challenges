type MyOmit<O, T> = {
  [P in Exclude<keyof O, T>]: O[P]
}
