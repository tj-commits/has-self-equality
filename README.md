# has-self-equality
Check if a value has self equality.

example:
```javascript

const assert = require('assert-fn')
const hasSelfEquality = require('has-self-equality')

const ERROR_MESSAGE = 'this error will never be shown'

assert(hasSelfEquality(2))
assert(hasSelfEquality(undefined))
assert(hasSelfEquality(null))
assert(hasSelfEquality(false))

assert(!hasSelfEquality(NaN))
```