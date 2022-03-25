type IsTuple<T> = T extends unknown[] | readonly unknown[]
  ? number extends T['length']
    ? false
    : true
  : false
