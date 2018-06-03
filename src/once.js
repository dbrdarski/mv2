var once = function(fn){
  var resolve;
  return function(){
    if (resolve == null){
      resolve = fn.apply(null, arguments);
    }
    return resolve;
  }
}

module.exports = once;
