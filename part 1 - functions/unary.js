['1', '2', '3'].map(parseFloat)
  //=> [1, 2, 3]
  ['1', '2', '3'].map(parseInt)
  //=> [1, NaN, NaN]

  const unary = (fn) =>
  fn.length === 1
    ? fn
    : function (something) {
        return fn.call(this, something)
      }
['1', '2', '3'].map(unary(parseInt))
//=> [1, 2, 3]
