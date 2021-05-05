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

## Optional Chaining
[Optional Chaining](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining) was introduced in TypeScript 3.7.

It allows us to avoid errors while accessing a property of an object that could be `null`.

```ts
const foo = (dog) => {
    console.log(dog.name);
}

foo(null);
```

This will lead to: `Uncaught TypeError: dog is null`

You can check if an `if` clause like this:
```ts
const foo = (dog) => {
    if (dog) {
        console.log(dog.name);
    }
}

foo(null);
```

This will lead to no message on the Console.

Or you can use the optional chaining like below:
```ts
const foo = (dog) => {
    console.log(dog?.name);
}

foo(null);
```

This will lead to an `undefined` shown in the Console.
