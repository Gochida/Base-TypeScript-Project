import { sayHello } from "./module";

function hello(compiler: string) {
    console.log(`Hello from ${compiler}`);
}

hello("Main");

console.log(sayHello("Module"));