// var createStore = require('./create-store')

var once = function(fn){
  var resolved = false, result;
  return function(){
    if (resolved == null){
      resolved = true;
      result = fn.apply(null, arguments);
    }
    return result;
  }
}

var createStore = function(app){
  return function(name, settings){
    let store = function(){
        let modules = arguments.length ? arguments : Object.keys(store);
        modules.forEach(function(key){
          store[key];
        })
    };
    let props = {};
    console.log({name, props});
    props[name] = {
      value: function(moduleName, module){
        Object.defineProperty(store, moduleName, {
          get: once(module.bind(null, app)),
          enumberable: true
        })
      }
    };
    props[settings && settings.plural || (name + 's')] = {value: store};
    Object.defineProperties(app, props)
  }
}

var app = (function(app = {}){
  app.define = function(name, value){
    Object.defineProperty(app, name, value)
  }
  app.run = function(mainModule){
    mainModule(app);
  }
  app.createStore = createStore(app);
  return app;
}())

// module.exports = app;


app.module('m1', function() {
  return 1;
});

app.module('m2', function({modules: { m1 }}) {
  return 2;
});

app.run(function({modules}){
  modules()
})
