var createStore = require('./src/create-store')

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

app.createStore('module');
console.log({module: app.module});
module.exports = app;

// app.module('m1', function() {
//   return 1;
// });
//
// app.module('m2', function({modules: { m1 }}) {
//   return m1 + 1;
// });
//
// app.run(function({modules}){
//   modules()
// })
