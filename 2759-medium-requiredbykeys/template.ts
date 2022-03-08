interface User2 {
  name?: string
  age?: number
  address?: string
}

type RequiredByKeys<T, U = keyof T> = IntersectionToObj<
  Pick<T, Exclude<keyof T, U>> & Require<Pick<T, Extract<U, keyof T>>>
>
