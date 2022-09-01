type ComputedValues<C> = {
  [key in keyof C]: C[key] extends (...args: unknown[]) => infer R ? R : never
}
declare function SimpleVue<D, C, M>(options: {
  data: (this: {}) => D
  computed: C & ThisType<D>
  methods: M & ThisType<D & M & ComputedValues<C>>
}): any
