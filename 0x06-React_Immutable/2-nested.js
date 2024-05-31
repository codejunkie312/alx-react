const { fromJS } = require('immutable');

function accessImmutableObject (object, array) {
  const immutableObject = fromJS(object);
  const value = immutableObject.getIn(array);
  return value instanceof Object ? value.toJS() : value;
}

module.exports = accessImmutableObject;
