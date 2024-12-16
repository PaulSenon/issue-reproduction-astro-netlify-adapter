import { defineMiddleware, createContext } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
    const ctx = createContext({
        request: context.request,
        params: {},
        //@ts-ignore
        locals: { toto: {}}
    });
    const totoContext = {
        a: "'lqskjflksdjf",
        b: 'lskdfjlksdjf',
    };
    //@ts-ignore
    ctx.locals.toto = { totoContext };
    ctx.locals.myLocal = Math.random() * 1000;
    //@ts-ignore
    const { toto, ...otherLocals } = ctx.locals;


    console.log('Hi From Custom Middleware', otherLocals);
    
    // Add the random value to locals so it's accessible in components
    context.locals.myLocal = Math.random()*1000;
    
    // Get the response from the next handler
    const response = await next();
    
    // Add our custom header
    response.headers.set('X-My-Middleware-Header', new Date().toISOString());
    
    return response;
}) 