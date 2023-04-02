# NestJS Tutorial on the request-response pipeline 

This NestJS tutorial shows middleware, guards, interceptors, pipes and exception filters.

![NestJs Pipeline](https://i.stack.imgur.com/2lFhd.jpg)

Ref: https://stackoverflow.com/questions/54863655/whats-the-difference-between-interceptor-vs-middleware-vs-filter-in-nest-js

There is definitely some overlap as Middleware are a flexible way of composing any web application but are more of a generic concept (creating a stack of functions to build a pipeline). The others are Nest specific concepts and as such tie in a bit more naturally with things like Dependency Injection.

Pipes are used to transform input data (and optionally to do validation).

Interceptors are really neat because they can transform both data coming in and leaving your API. They give you the ability to mutate what the original handler would have returned through the use of observable streams. This is something that you would probably need to implement using two middlewares (on either side of the handler).

Use Pipes when you want to transform data coming in to a handler.

Use Interceptors when bi-directional transformation is required.

Use middlewares when you want to stick closer to the traditional (eg Express) way of building your web app or when you want to more broadly apply functionality to many handlers at once (there's less decorators floating around in your code).


### Run the API in development mode
```javascript
npm install         // install
npm run start:dev   // start api in dev mode
```