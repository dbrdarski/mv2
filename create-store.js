require('./once');

var createStore = function(app){
  return function(name, settings){
    let store = {};
    let props = {};
    props[name] = function(moduleName, module){
      Object.defineProperty(store, moduleName, {
        get: once(module.bind(null, app))
      })
    };
    props[settings && settings.plural || (name + 's')] = store;
    Object.defineProperties(app, props)
  }
}

module.exports = createStore;
