type Chainable<T extends Record<any, any> = {}> = {
  option<U extends string, V>(key: U, value: V): Chainable<T & Record<U, V>>
  get(): T
}
