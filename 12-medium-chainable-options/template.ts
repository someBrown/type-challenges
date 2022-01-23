type Chainable<T extends Record<any, any> = {}> = {
  option<U extends string, V>(key: U, value: V): Chainable<T & Record<U, V>>
  get(): T
}

type a = { a: 1 }
type b = { b: 2 }

type c = a & b

type d = c extends a ? 1 : 2
