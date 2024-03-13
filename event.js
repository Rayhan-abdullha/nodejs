const eventEmmitter = require("events");

class MyEmitter extends eventEmmitter {}
const myEmitter = new MyEmitter();

myEmitter.once("login", (data) => {
  console.log(data);
});
myEmitter.on("logout", (data) => {
  console.log(data);
});
myEmitter.emit("login", { name: "coder", email: "coder@gmail.com" });
myEmitter.emit("login", { name: "code2r", email: "coder@gmail.com" });
myEmitter.emit("logout", { name: "coder", email: "coder@gmail.com" });
