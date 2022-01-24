type AppendArgument<Fn, A> = Fn extends (...arg: infer P) => infer R
  ? (...arg: [...P, A]) => R
  : never
