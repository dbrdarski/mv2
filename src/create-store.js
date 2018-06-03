var once = require('./once');

var createStore = function(app){
  return function(name, settings){
    let store = function(){
      let modules = arguments.length ? arguments : Object.keys(store);
      modules.forEach(function(key){
        store[key];
      })
    };
    let props = {};
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

module.exports = createStore;
