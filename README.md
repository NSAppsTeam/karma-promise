# Karma-promise

> Karma framework plugin for promises.  Useful for browsers missing native support

Installation
------------

Install the plugin from npm:

```sh
$ npm install 'karma-promise' --save-dev
```

Add `promise` to the `frameworks` key in your Karma configuration:

```js
module.exports = function(config) {
  config.set({

    # frameworks to use
    frameworks: ['promise']

    # ...
```
