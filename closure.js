function parent() {
  var innerVariable = "Go to your room!";
  console.log()
  return function child() {
    var inaccessible = "**sneaks out the bedroom window**";
    return innerVariable;
  }
}

var outerScope = parent;

var innerScope = outerScope();

innerScope();


