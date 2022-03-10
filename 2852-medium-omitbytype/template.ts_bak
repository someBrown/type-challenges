type OmitByType<T extends object, U> = Pick<
  T,
  {
    [K in keyof T]: T[K] extends U ? never : K
  }[keyof T]
>

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type c = OmitByType<Model, string>
