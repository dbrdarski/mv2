var app = require('./index');
var expect  = require('chai').expect;

describe('moduler', function() {
  it('should return 2', function(done) {
    app.module('module2', function({
      modules: { module1 }
    }){
      return module1 + 1;
    });
    app.module('module1', function() {
      return 1;
    });
    app.run(function({
      modules: {module2}
    }){
      expect(module2).to.equal(2)
      done();
    })
  });
});
