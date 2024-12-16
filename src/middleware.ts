import { defineMiddleware, createContext } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
    console.log('Hi From Custom Middleware');
    
    // Add the random value to locals so it's accessible in components
    context.locals.myLocal = Math.random()*1000;
    
    // Get the response from the next handler
    const response = await next();
    
    // Add our custom header
    response.headers.set('X-My-Middleware-Header', new Date().toISOString());
    
    return response;
}) 