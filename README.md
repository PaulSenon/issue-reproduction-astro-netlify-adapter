# Reproduce issue astro custom edge middleware on netlify

> [!IMPORTANT]  
> No point to run this locally as the issue appears on netlify infrastructure.

To reproduce, simply fork this repo and deploy it on netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/PaulSenon/issue-reproduction-astro-netlify-adapter)

Then go to the home page and see.

> [!IMPORTANT]  
> The fix is already applied with a local pnpm patch to @astrojs/netlify adapter in addition to the half working patch from <https://github.com/withastro/adapters/pull/481>
