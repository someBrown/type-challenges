type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never

const fn = (v: boolean) => (v ? 1 : 2)
type Test = typeof fn extends (...args: unknown[]) => infer R ? 1 : 2
