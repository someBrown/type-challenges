type Last<T extends any[]> = T extends [...infer other, infer last]
  ? last
  : never
