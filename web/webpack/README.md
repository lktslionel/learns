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
        "dev": "npm run webpack -- --mode development --watch",
        "test": "npm run webpack -- --env.mode development --watch"
    }
}

// webpack.config.js 

// module.exports = function (env) {
//   console.log(env);
//   return {

//   }
// }

module.exports = function ({ mode }) {
  console.log(mode);
  return {

  }
}



On nep peux utiliser que la variable `env`



```

## Concepts

### Entry 

The first JS file to kick-off

```js
// webpack.config.json

module.exports = {
    entry: './dist/main.js'
}

```

### Output

Where and how we're gonna distribute bundles

```js
...
    output: {
        path: './dist',
        filename: 'main.js'
    }
...
```

#### Loaders & Rules

```js
...
module: {

    rules: [
        {
            test: /\.ts$/,
            use: 'ts-loader',
        },
        {
            test: /\.js$/,
            use: 'babel-loader',
        },
        {
            test: /\.js$/,
            use: 'css-loader',
        },
        // Chaining loaders [right to Left [<-]
        {
            test: /\.less$/,
            use: 'style', 'css', 'css-loader', // style(css(css-loader(...)))
        },
    ] 

}
...
```


### Plugins 

* Is an instance/objects with an `apply` property.
* It can hook into the complete webpack lifecycle.
* Add additional funtionality

```js

MyPlugin.prototype.apply = function(compiler) {

    compiler.plugin('<EVENT_NAME>', function(stats) {
        // ....
    });
    compiler.plugin('failed', function(err) {
        // ....
    });

}

module.exports = MyPlugin;


// And then add it as a plugin into webpack.config.js

module.exports = {


    plugins: [
        new MyPlugin(),
    ]
}

```

## Organization

A great technique is split your config into multiple presets.
You can checkout the preset loader in `./example/build-utils/loadPresets.js`

and load it form you `package.json` by doing:

```json

scripts: {
    "command": "webpack -- --env.presets <PRESET_NAME>" 
}

```


## Debugging

You can use chrome browser to debug any node js scripts. Run the following command and go to chrome://inspect
and then click on `Open dedicated DevTools for Node`.

```bash 
node --inspect --inspect-brk ./dist/main.js
```


## Webpack plugins 

* [compression-webpack-plugin](https://webpack.js.org/plugins/compression-webpack-plugin/)
* [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)
