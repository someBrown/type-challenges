type GetOptional<T> = {
  [K in keyof T as Pick<T, K> extends Partial<Pick<T, K>>
    ? Partial<Pick<T, K>> extends Pick<T, K>
      ? K
      : never
    : never]: T[K]
}

// t1 extends t2  但是跳不extends t1 说明是那个key是可选的
type t1 = { a: 1; b?: 2 }
type t2 = { a: 1 }

type dasdc = t2 extends t1 ? 1 : 2
