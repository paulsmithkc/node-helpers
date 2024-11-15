# @merlin4/helpers

This provides an abstraction layer over simple functions without additional dependencies. These functions are primarily for node methods.

Helper functions included:

- `sleep(ms)` - create a promise that resolves after `ms` milliseconds
- `arrayToIterator(arr)` - convert an array to an iterator
- `iteratorToArray(itr)` - convert an iterator to an array
- `chunkAsync(chunkSize, items)` - chunk and iterator/array into batches
- `chunkSync(chunkSize, items)` - chunk and iterator/array into batches
- `measureNow()` and `measureDur(end, start)` - measure the time between two points in time using `process.hrtime`
- `replaceAll()` - `String.replaceAll()` wrapper with partial support for older version of javascript
