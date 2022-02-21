type AppendArgument<Fn, U> = Fn extends (...args: infer P) => infer R
  ? (...args: [...P, U]) => R
  : never
