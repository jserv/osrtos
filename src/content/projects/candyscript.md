---
title: CandyScript
summary: CandyScript is a minimalist, high-performance domain-specific language designed
  for creating web servers and REST APIs. Built with Nim and leveraging its asynchronous
  HTTP server capabilities, it allows developers to define server logic in a concise,
  line-by-line format with a footprint of less than 85 lines of code.
codeUrl: https://github.com/littledivy/candyscript
isShow: false
rtos: ''
libraries: []
topics:
- asynchttpserver
- candy
- language
- nim
- nim-lang
- nimble
- programming-language
- server
- webserver
---

CandyScript is an intriguing project that challenges the complexity of modern web frameworks. Described as a lightweight yet superfast language, it is specifically designed for forging small web servers and REST APIs with minimal overhead. The entire project is remarkably compact, consisting of fewer than 85 lines of Nim code, yet it provides a functional environment for handling HTTP requests.

### The Philosophy of Minimalism
At its core, CandyScript utilizes a line-by-line parser to interpret script files (typically with a `.candy` extension). This approach allows developers to define routes and responses with extreme brevity. By abstracting the boilerplate usually associated with setting up a server, CandyScript enables a "Hello World" application to be written in just a single line of code.

### Technical Architecture
Despite its small size, CandyScript is built on a high-performance foundation. It leverages the Nim programming language and its standard `asynchttpserver` module. Nim is known for its C-like performance and efficient memory management, which translates directly to the speed of CandyScript servers. 

One of the unique aspects of the project is that it does not require an external database service for basic operations, aiming to be a self-contained binary for everything. The repository includes an `index.nim` file which serves as the core interpreter and runner for the `.candy` scripts.

### Getting Started with CandyScript
To use CandyScript, you need the Nim compiler installed on your system. The workflow involves compiling the core interpreter and then passing your script as an argument. 

For example, a simple server can be defined in a file like this:

```yaml
# this is a comment
GET "/": Hello, World!
```

To run this server, you would compile the source and execute it:

```bash
nim c index.nim
./index your_script.candy
```

### Features and Future Development
Currently, CandyScript offers:
- A fast web server powered by Nim's asynchronous capabilities.
- A single binary deployment model.
- A short and efficient syntax that is easy to read and write.

The project roadmap includes several ambitious goals to expand its utility, such as adding backend integration with other languages and supporting multiple database integrations. There is also a plan to transition from `asynchttpserver` to `httpbeast` to further enhance performance. 

For developers looking for a minimalist tool to spin up quick APIs or for those interested in how domain-specific languages can be implemented in very few lines of code, CandyScript provides an excellent case study.
