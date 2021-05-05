# TypeScript Project Docs

[TypeScript](https://github.com/microsoft/TypeScript) is an OpenSource project sponsored by Microsoft

TypeScript was born in 2012 and has become very popular since 2016.

Here are a list of good reasons to start using TypeScript, in place of JavaScript, when developing an enterprise application:
- it gives you a lot of *tools* that JavaScript cannot give you: types, decorators, generics, enum, ...
- it also gives you a **static type system**, which generates compile-time errors, that are different from runtime errors since the code will neither start if you do not solve those compile-time errors.
- IDE can better perform auto complete actions.
- code will be self-documented since all types are defined
- **ESNEXT** support: JavaScript new features are introduced in TypeScript

To run any code snippets, you can use Fabio Biondi's [typescript-playground](https://github.com/fabiobiondi/typescript-playground) which is a simple code container with live reload capabilities.

## Dynamic VS Static Type System
JavaScript has a dynamic type system, which means code is checked only at execution time. You won't get errors while coding, unless you'll use some sort of test.

TypeScript has a static type system, which means code is checked at compile-time. TypeScript **must** be compiled since it is not supported by browsers.
The action of *stranspile* (which is a merge of the words *translate* and *compile*), converts the code from TypeScript to ES5 (old browsers) or ES6 (new browsers).
Once the code is compiled, it's ready to run on the browser. 
