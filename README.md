# Reproduce issue where astro is not detecting a project as output `server` when the only ssr things are in `server-island`

> [!IMPORTANT]  
> To reproduce, clone this and `pnpm run build`, you will see that as long a you're not uncommenting the export prerender line in `src/pages/workaround.astro` this is not building the ssr endpoints.

## Actual build output

```bash
[...]
10:39:37 [build] Rearranging server assets...
10:39:37 [@astrojs/netlify] Emitted _redirects
10:39:37 [@astrojs/netlify] Generated Middleware Edge Function
10:39:37 [build] Server built in 437ms
10:39:37 [build] Complete!
```

## Expected build output

> the output we have when doing the workaround thing

```diff bash
[...]
10:43:38 [build] Rearranging server assets...
10:43:38 [@astrojs/netlify] Emitted _redirects
+ 10:43:38 [@astrojs/netlify] Bundling function ../../../build/entry.mjs
+ 10:43:38 [@astrojs/netlify] Generated SSR Function
10:43:38 [@astrojs/netlify] Generated Middleware Edge Function
10:43:38 [build] Server built in 746ms
10:43:38 [build] Complete!
```

## Consequence

We get 404 on server-island endpoint because they don't exist :(

Try it out here:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/PaulSenon/issue-reproduction-astro-netlify-adapter/tree/astro-static-issue)
