# Reproduce issue astro custom edge middleware on netlify

Ref issue: https://github.com/withastro/adapters/issues/483

> [!IMPORTANT]  
> No point to run this locally as the issue appears on netlify infrastructure.

To reproduce, simply fork this repo and deploy it on netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/PaulSenon/issue-reproduction-astro-netlify-adapter)

Then go to the home page and see.

## UPDATE (reopen)

the patch from here: <https://github.com/withastro/adapters/pull/481> is solving the edge error but custom edge function locals are still ignored.
