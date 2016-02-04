myApp.filter('orderByValue', function () {
  // custom value function for sorting
  function myValueFunction(card) {
    return card.values.opt1 + card.values.opt2;
  }

  return function (obj) {
    var array = [];
    Object.keys(obj).forEach(function (key) {
      // inject key into each object so we can refer to it from the template
      obj[key].name = key;
      array.push(obj[key]);
    });
    // apply a custom sorting function
    array.sort(function (a, b) {
      return myValueFunction(b) - myValueFunction(a);
    });
    return array;
  };
});