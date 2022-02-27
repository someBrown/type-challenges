type IsUnion<U, V = U> = U extends V ? ([V] extends [U] ? false : true) : false
