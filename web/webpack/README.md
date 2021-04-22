# Webpack



## Tips & Tricks

Use this command to launch node debugger

```sh
node --inspect --debug-brk /path/to/js/file
```

## Modules

To create a module in webpack:

```node
# File[./example.js]
export default "example"
export default () => "example"
export const ex1 = "example" # import import ex1 from "example";
```

### ES6 modules

```js
 export default (...) => { return `...`; }
```

### CommonJS modules

```js
module.exports = (...) => { return `...`; }
```

## Tips & tricks

### Package.json 

#### 1. Scripts composition

```json

{
    "scripts": {
        "webpack": "webpack",
        "dev": "npm run webpack -- --mode development --watch"
    }
}


```

## Debugging

You can use chrome browser to debug any node js scripts. Run the following command and go to chrome://inspect
and then click on `Open dedicated DevTools for Node`.

```bash 
node --inspect --inspect-brk ./dist/main.js
```