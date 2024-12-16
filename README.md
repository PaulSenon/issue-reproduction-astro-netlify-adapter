# Reproduce issue where astro is not detecting a project as output `server` when the only ssr things are in `server-island`

> [!IMPORTANT]  
> To reproduce, clone this and `pnpm run build`, you will see that as long a you're not uncommenting the export prerender line in `src/pages/workaround.astro` this is not building the ssr endpoints.

Therefor we get 404 on server-island endpoint because they don't exist :(
Try here:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/PaulSenon/issue-reproduction-astro-netlify-adapter/tree/astro-static-issue)
