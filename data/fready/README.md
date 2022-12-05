# fready

A minimalistic API for DOMContentLoaded.  

- Your function is run on `DOMContentLoaded`.
- If the DOM is ready when you call, your function is executed as soon as possible asynchronously (via `setTimeout( fn, 0 )`).
- Detects headless environments like Node.js so your code will still execute.
- Does not contain fluff for non-standards-compliant browsers.
- <0.25kB bytes min+gzip

```js
fready( fn ); // runs fn() when the DOM is ready to be manipulated
```
