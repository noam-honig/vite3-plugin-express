# vite3-plugin-express

A simple plugin for express that runs an express node js server from within `vite`

## How to use:

In `vite.config.ts`
```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import express from "vite3-plugin-express"

export default defineConfig({
  plugins: [vue(), express('express-server.ts')]
})
```


example express app file `express-server.ts`
```ts
import express from "express"; 

export const app = express(); // the express handler should be exported as app

if (!process.env['VITE']) // When running from `vite` there is no need to call `app.listen`
  app.listen(3002, () => console.log("Started"));
```

* Make sure that the express handler is exported as `app`
* Make sure not to call `app.listen`.
  
  The plugin adds the `VITE` environment variable, use that to disable the call to `app.listen`

