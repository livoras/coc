
function parse(scope, config) {
  for (var key in config) {
    var value = config[key]

    // value is string
    switch (toStr(value)) {
      case "[object String]": 
        parseString(value, key, scope)
        break

      case "[object Array]":
        var arrayScope = new ArrayScope(key)
        var firstValue = value[0]
        scope.append(arrayScope)

        if (toStr(firstValue) === "[object String]") {
          parseString(arrayScope, key, firstValue)
        } else if (toStr(firstValue) === "[object Object]") {
          parseObject(arrayScope, key, firstValue)
        } else {
          throw new Error("Not valid type " + firstValue)
        }

        break

      case "[object Object]":
        parseObject(scope, key, value)

      default:
        throw new Error("Not valid value " + value)
    }

  }
}

function parseString(scope, key, value) {
  if (types.check(value)) {
    var newField = types.generateField(key, value)
    scope.append(newField)
  } else {
    throw new Error("Type is not found")
  }
}

function parseObject(scope, key, value) {
  if (types.check(value)) {
    var newField = types.generateField(key, value)
    scope.append(newField)
  } else {
    var newScope = new Scope(key)
    parse(newScope, value)
  }
}

function toStr(value) {
  return Object.prototype.toString.call(value)
}

