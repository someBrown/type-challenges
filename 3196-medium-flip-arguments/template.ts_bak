type FlipArguments<T> = T extends (...args: infer P) => infer U
  ? (...args: Reverse<P>) => U
  : never
