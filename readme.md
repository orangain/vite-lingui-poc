# Vite + Lingui.js POC

Showcase how to make lingui.js work with Vite.
For babel macros to work correctly we need babel transpilation.

Solution proposed in this POC is to use https://github.com/itsMapleLeaf/vite-plugin-babel-macros together with `@vitejs/plugin-react-refresh`. This would be slower than the [original POC](https://github.com/capaj/vite-lingui-poc).

To run this on your machine, just install deps and run `npm run dev`.

## Word of caution:
The custom plugin we have is incompatible with a deprecated `@babel/polyfill`. Not sure why exactly that is, but if you replace it's import with 
```
import 'core-js/stable'
import 'regenerator-runtime/runtime
```
it works fine even in build time.
