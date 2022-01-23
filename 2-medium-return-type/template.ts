type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never

const fn = (v: boolean) => (v ? 1 : 2)

type fnType = typeof fn
