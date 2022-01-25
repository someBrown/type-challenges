// 数组解构到的Rest又包了一层[]
// 第一次等于是把[[2]]传入Flatten 然后结构first拿到[2] rest拿到[]
// 最后再把first Flatten一次
// type Flatten<T extends any[], K extends any[] = []> = T extends [
//   infer First,
//   ...infer Rest
// ]
//   ? First extends any[]
//     ? Flatten<Rest, [...K, ...Flatten<First>]>
//     : Flatten<Rest, [...K, First]>
//   : K

type Flatten<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First extends any[]
    ? [...Flatten<First>, ...Flatten<Rest>]
    : [First, ...Flatten<Rest>]
  : T

type b = Flatten<[1, [2]]>
