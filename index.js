var createStore = require('./src/create-store')

var app = (function(app = {}){
  app.define = function(name, value){
    if(value == null && typeof name === 'object'){
      Object.defineProperties(app, Object.entries(name).reduce(function(acc, i){
        acc[i[0]] = { value: acc[i[1]] };
        return acc;
      }, {}));
    } else {
      Object.defineProperty(app, name, value)
      return app;
    }
  }
  app.run = function(mainModule){
    mainModule(app);
    return app;
  }
  app.createStore = createStore(app);
  return app;
}())

app.createStore('module');
module.exports = app;
