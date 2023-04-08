import { useRef, useState, useEffect, createElement, useCallback } from 'react';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var reactAliceCarousel = {};

var lib = {};

var utils$1 = {};

var calculateDirection$1 = {};

var types$1 = {};

Object.defineProperty(types$1, "__esModule", {
  value: true
});
types$1.TraceDirectionKey = types$1.Direction = types$1.Axis = void 0;
var TraceDirectionKey;
types$1.TraceDirectionKey = TraceDirectionKey;
(function (TraceDirectionKey) {
  TraceDirectionKey["NEGATIVE"] = "NEGATIVE";
  TraceDirectionKey["POSITIVE"] = "POSITIVE";
  TraceDirectionKey["NONE"] = "NONE";
})(TraceDirectionKey || (types$1.TraceDirectionKey = TraceDirectionKey = {}));
var Direction;
types$1.Direction = Direction;
(function (Direction) {
  Direction["TOP"] = "TOP";
  Direction["LEFT"] = "LEFT";
  Direction["RIGHT"] = "RIGHT";
  Direction["BOTTOM"] = "BOTTOM";
  Direction["NONE"] = "NONE";
})(Direction || (types$1.Direction = Direction = {}));
var Axis;
types$1.Axis = Axis;
(function (Axis) {
  Axis["X"] = "x";
  Axis["Y"] = "y";
})(Axis || (types$1.Axis = Axis = {}));

Object.defineProperty(calculateDirection$1, "__esModule", {
  value: true
});
calculateDirection$1.calculateDirection = calculateDirection;
var _types$5 = types$1;
function calculateDirection(trace) {
  var direction;
  var negative = _types$5.TraceDirectionKey.NEGATIVE;
  var positive = _types$5.TraceDirectionKey.POSITIVE;
  var current = trace[trace.length - 1];
  var previous = trace[trace.length - 2] || 0;
  if (trace.every(function (i) {
    return i === 0;
  })) {
    return _types$5.TraceDirectionKey.NONE;
  }
  direction = current > previous ? positive : negative;
  if (current === 0) {
    direction = previous < 0 ? positive : negative;
  }
  return direction;
}

var calculateDirectionDelta$1 = {};

var common$1 = {};

Object.defineProperty(common$1, "__esModule", {
  value: true
});
common$1.resolveAxisDirection = common$1.getDirectionValue = common$1.getDirectionKey = common$1.getDifference = void 0;
var _types$4 = types$1;
var getDirectionKey = function getDirectionKey() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = Object.keys(object).toString();
  switch (key) {
    case _types$4.TraceDirectionKey.POSITIVE:
      return _types$4.TraceDirectionKey.POSITIVE;
    case _types$4.TraceDirectionKey.NEGATIVE:
      return _types$4.TraceDirectionKey.NEGATIVE;
    default:
      return _types$4.TraceDirectionKey.NONE;
  }
};
common$1.getDirectionKey = getDirectionKey;
var getDirectionValue = function getDirectionValue() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return values[values.length - 1] || 0;
};
common$1.getDirectionValue = getDirectionValue;
var getDifference = function getDifference() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Math.abs(x - y);
};
common$1.getDifference = getDifference;
var resolveAxisDirection = function resolveAxisDirection(axis, key) {
  var negative = _types$4.Direction.LEFT;
  var positive = _types$4.Direction.RIGHT;
  var direction = _types$4.Direction.NONE;
  if (axis === _types$4.Axis.Y) {
    negative = _types$4.Direction.BOTTOM;
    positive = _types$4.Direction.TOP;
  }
  if (key === _types$4.TraceDirectionKey.NEGATIVE) {
    direction = negative;
  }
  if (key === _types$4.TraceDirectionKey.POSITIVE) {
    direction = positive;
  }
  return direction;
};
common$1.resolveAxisDirection = resolveAxisDirection;

Object.defineProperty(calculateDirectionDelta$1, "__esModule", {
  value: true
});
calculateDirectionDelta$1.calculateDirectionDelta = calculateDirectionDelta;
var _types$3 = types$1;
var _common$1 = common$1;
function calculateDirectionDelta(traceDirections) {
  var delta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var length = traceDirections.length;
  var i = length - 1;
  var direction = _types$3.TraceDirectionKey.NONE;
  for (; i >= 0; i--) {
    var current = traceDirections[i];
    var currentKey = (0, _common$1.getDirectionKey)(current);
    var currentValue = (0, _common$1.getDirectionValue)(current[currentKey]);
    var prev = traceDirections[i - 1] || {};
    var prevKey = (0, _common$1.getDirectionKey)(prev);
    var prevValue = (0, _common$1.getDirectionValue)(prev[prevKey]);
    var difference = (0, _common$1.getDifference)(currentValue, prevValue);
    if (difference >= delta) {
      direction = currentKey;
      break;
    } else {
      direction = prevKey;
    }
  }
  return direction;
}

var calculateDuration$1 = {};

Object.defineProperty(calculateDuration$1, "__esModule", {
  value: true
});
calculateDuration$1.calculateDuration = calculateDuration;
function calculateDuration() {
  var prevTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var nextTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return prevTime ? nextTime - prevTime : 0;
}

var calculateMovingPosition$1 = {};

Object.defineProperty(calculateMovingPosition$1, "__esModule", {
  value: true
});
calculateMovingPosition$1.calculateMovingPosition = calculateMovingPosition;
function calculateMovingPosition(e) {
  if ('changedTouches' in e) {
    var touches = e.changedTouches && e.changedTouches[0];
    return {
      x: touches && touches.clientX,
      y: touches && touches.clientY
    };
  }
  return {
    x: e.clientX,
    y: e.clientY
  };
}

var calculatePosition$1 = {};

var updateTrace$1 = {};

Object.defineProperty(updateTrace$1, "__esModule", {
  value: true
});
updateTrace$1.updateTrace = updateTrace;
function updateTrace(trace, value) {
  var last = trace[trace.length - 1];
  if (last !== value) {
    trace.push(value);
  }
  return trace;
}

var resolveDirection$1 = {};

var calculateTraceDirections$1 = {};

Object.defineProperty(calculateTraceDirections$1, "__esModule", {
  value: true
});
calculateTraceDirections$1.calculateTraceDirections = calculateTraceDirections;
var _types$2 = types$1;
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function calculateTraceDirections() {
  var trace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var ticks = [];
  var positive = _types$2.TraceDirectionKey.POSITIVE;
  var negative = _types$2.TraceDirectionKey.NEGATIVE;
  var i = 0;
  var tick = [];
  var direction = _types$2.TraceDirectionKey.NONE;
  for (; i < trace.length; i++) {
    var current = trace[i];
    var prev = trace[i - 1];
    if (tick.length) {
      var currentDirection = current > prev ? positive : negative;
      if (direction === _types$2.TraceDirectionKey.NONE) {
        direction = currentDirection;
      }
      if (currentDirection === direction) {
        tick.push(current);
      } else {
        ticks.push(_defineProperty$2({}, direction, tick.slice()));
        tick = [];
        tick.push(current);
        direction = currentDirection;
      }
    } else {
      if (current !== 0) {
        direction = current > 0 ? positive : negative;
      }
      tick.push(current);
    }
  }
  if (tick.length) {
    ticks.push(_defineProperty$2({}, direction, tick));
  }
  return ticks;
}

Object.defineProperty(resolveDirection$1, "__esModule", {
  value: true
});
resolveDirection$1.resolveDirection = resolveDirection;
var _calculateDirection = calculateDirection$1;
var _calculateTraceDirections = calculateTraceDirections$1;
var _calculateDirectionDelta = calculateDirectionDelta$1;
var _common = common$1;
var _types$1 = types$1;
function resolveDirection(trace) {
  var axis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _types$1.Axis.X;
  var directionDelta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (directionDelta) {
    var directions = (0, _calculateTraceDirections.calculateTraceDirections)(trace);
    var _direction = (0, _calculateDirectionDelta.calculateDirectionDelta)(directions, directionDelta);
    return (0, _common.resolveAxisDirection)(axis, _direction);
  }
  var direction = (0, _calculateDirection.calculateDirection)(trace);
  return (0, _common.resolveAxisDirection)(axis, direction);
}

var calculateVelocity$1 = {};

Object.defineProperty(calculateVelocity$1, "__esModule", {
  value: true
});
calculateVelocity$1.calculateVelocity = calculateVelocity;
function calculateVelocity(x, y, time) {
  var magnitude = Math.sqrt(x * x + y * y);
  return magnitude / (time || 1);
}

Object.defineProperty(calculatePosition$1, "__esModule", {
  value: true
});
calculatePosition$1.calculatePosition = calculatePosition;
var _updateTrace = updateTrace$1;
var _resolveDirection = resolveDirection$1;
var _calculateDuration = calculateDuration$1;
var _calculateVelocity = calculateVelocity$1;
var _types = types$1;
function calculatePosition(state, options) {
  var start = state.start,
    x = state.x,
    y = state.y,
    traceX = state.traceX,
    traceY = state.traceY;
  var rotatePosition = options.rotatePosition,
    directionDelta = options.directionDelta;
  var deltaX = rotatePosition.x - x;
  var deltaY = y - rotatePosition.y;
  var absX = Math.abs(deltaX);
  var absY = Math.abs(deltaY);
  (0, _updateTrace.updateTrace)(traceX, deltaX);
  (0, _updateTrace.updateTrace)(traceY, deltaY);
  var directionX = (0, _resolveDirection.resolveDirection)(traceX, _types.Axis.X, directionDelta);
  var directionY = (0, _resolveDirection.resolveDirection)(traceY, _types.Axis.Y, directionDelta);
  var duration = (0, _calculateDuration.calculateDuration)(start, Date.now());
  var velocity = (0, _calculateVelocity.calculateVelocity)(absX, absY, duration);
  return {
    absX: absX,
    absY: absY,
    deltaX: deltaX,
    deltaY: deltaY,
    directionX: directionX,
    directionY: directionY,
    duration: duration,
    positionX: rotatePosition.x,
    positionY: rotatePosition.y,
    velocity: velocity
  };
}

var checkIsMoreThanSingleTouches$1 = {};

Object.defineProperty(checkIsMoreThanSingleTouches$1, "__esModule", {
  value: true
});
checkIsMoreThanSingleTouches$1.checkIsMoreThanSingleTouches = void 0;
var checkIsMoreThanSingleTouches = function checkIsMoreThanSingleTouches(e) {
  return Boolean(e.touches && e.touches.length > 1);
};
checkIsMoreThanSingleTouches$1.checkIsMoreThanSingleTouches = checkIsMoreThanSingleTouches;

var checkIsPassiveSupported$1 = {};

var createOptions$1 = {};

Object.defineProperty(createOptions$1, "__esModule", {
  value: true
});
createOptions$1.createOptions = createOptions;
function createOptions() {
  var proxy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  Object.defineProperty(proxy, 'passive', {
    get: function get() {
      this.isPassiveSupported = true;
      return true;
    },
    enumerable: true
  });
  return proxy;
}

Object.defineProperty(checkIsPassiveSupported$1, "__esModule", {
  value: true
});
checkIsPassiveSupported$1.checkIsPassiveSupported = checkIsPassiveSupported;
checkIsPassiveSupported$1.noop = void 0;
var _createOptions = createOptions$1;
function checkIsPassiveSupported(isPassiveSupported) {
  if (typeof isPassiveSupported === 'boolean') {
    return isPassiveSupported;
  }
  var proxy = {
    isPassiveSupported: isPassiveSupported
  };
  try {
    var options = (0, _createOptions.createOptions)(proxy);
    window.addEventListener('checkIsPassiveSupported', noop, options);
    window.removeEventListener('checkIsPassiveSupported', noop, options);
  } catch (err) {}
  return proxy.isPassiveSupported;
}
var noop = function noop() {};
checkIsPassiveSupported$1.noop = noop;

var checkIsTouchEventsSupported$1 = {};

Object.defineProperty(checkIsTouchEventsSupported$1, "__esModule", {
  value: true
});
checkIsTouchEventsSupported$1.checkIsTouchEventsSupported = void 0;
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var checkIsTouchEventsSupported = function checkIsTouchEventsSupported() {
  return (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && ('ontouchstart' in window || Boolean(window.navigator.maxTouchPoints));
};
checkIsTouchEventsSupported$1.checkIsTouchEventsSupported = checkIsTouchEventsSupported;

var getInitialState$1 = {};

Object.defineProperty(getInitialState$1, "__esModule", {
  value: true
});
getInitialState$1.getInitialState = void 0;
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var getInitialState = function getInitialState() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread$1({
    x: 0,
    y: 0,
    start: 0,
    isSwiping: false,
    traceX: [],
    traceY: []
  }, options);
};
getInitialState$1.getInitialState = getInitialState;

var getInitialProps$1 = {};

Object.defineProperty(getInitialProps$1, "__esModule", {
  value: true
});
getInitialProps$1.getInitialProps = void 0;
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var getInitialProps = function getInitialProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({
    element: null,
    target: null,
    delta: 10,
    directionDelta: 0,
    rotationAngle: 0,
    mouseTrackingEnabled: false,
    touchTrackingEnabled: true,
    preventDefaultTouchmoveEvent: false,
    preventTrackingOnMouseleave: false
  }, props);
};
getInitialProps$1.getInitialProps = getInitialProps;

var getOptions$1 = {};

Object.defineProperty(getOptions$1, "__esModule", {
  value: true
});
getOptions$1.getOptions = getOptions;
function getOptions() {
  var isPassiveSupported = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  if (isPassiveSupported) {
    return {
      passive: false
    };
  }
  return {};
}

var rotateByAngle$1 = {};

Object.defineProperty(rotateByAngle$1, "__esModule", {
  value: true
});
rotateByAngle$1.rotateByAngle = rotateByAngle;
function rotateByAngle(position) {
  var angle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (angle === 0) {
    return position;
  }
  var x = position.x,
    y = position.y;
  var angleInRadians = Math.PI / 180 * angle;
  var rotatedX = x * Math.cos(angleInRadians) + y * Math.sin(angleInRadians);
  var rotatedY = y * Math.cos(angleInRadians) - x * Math.sin(angleInRadians);
  return {
    x: rotatedX,
    y: rotatedY
  };
}

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _calculateDirection = calculateDirection$1;
	Object.keys(_calculateDirection).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _calculateDirection[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _calculateDirection[key];
	    }
	  });
	});
	var _calculateDirectionDelta = calculateDirectionDelta$1;
	Object.keys(_calculateDirectionDelta).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _calculateDirectionDelta[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _calculateDirectionDelta[key];
	    }
	  });
	});
	var _calculateDuration = calculateDuration$1;
	Object.keys(_calculateDuration).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _calculateDuration[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _calculateDuration[key];
	    }
	  });
	});
	var _calculateMovingPosition = calculateMovingPosition$1;
	Object.keys(_calculateMovingPosition).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _calculateMovingPosition[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _calculateMovingPosition[key];
	    }
	  });
	});
	var _calculatePosition = calculatePosition$1;
	Object.keys(_calculatePosition).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _calculatePosition[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _calculatePosition[key];
	    }
	  });
	});
	var _calculateTraceDirections = calculateTraceDirections$1;
	Object.keys(_calculateTraceDirections).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _calculateTraceDirections[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _calculateTraceDirections[key];
	    }
	  });
	});
	var _calculateVelocity = calculateVelocity$1;
	Object.keys(_calculateVelocity).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _calculateVelocity[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _calculateVelocity[key];
	    }
	  });
	});
	var _checkIsMoreThanSingleTouches = checkIsMoreThanSingleTouches$1;
	Object.keys(_checkIsMoreThanSingleTouches).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _checkIsMoreThanSingleTouches[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _checkIsMoreThanSingleTouches[key];
	    }
	  });
	});
	var _checkIsPassiveSupported = checkIsPassiveSupported$1;
	Object.keys(_checkIsPassiveSupported).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _checkIsPassiveSupported[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _checkIsPassiveSupported[key];
	    }
	  });
	});
	var _checkIsTouchEventsSupported = checkIsTouchEventsSupported$1;
	Object.keys(_checkIsTouchEventsSupported).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _checkIsTouchEventsSupported[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _checkIsTouchEventsSupported[key];
	    }
	  });
	});
	var _common = common$1;
	Object.keys(_common).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _common[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _common[key];
	    }
	  });
	});
	var _createOptions = createOptions$1;
	Object.keys(_createOptions).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _createOptions[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _createOptions[key];
	    }
	  });
	});
	var _getInitialState = getInitialState$1;
	Object.keys(_getInitialState).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _getInitialState[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _getInitialState[key];
	    }
	  });
	});
	var _getInitialProps = getInitialProps$1;
	Object.keys(_getInitialProps).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _getInitialProps[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _getInitialProps[key];
	    }
	  });
	});
	var _getOptions = getOptions$1;
	Object.keys(_getOptions).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _getOptions[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _getOptions[key];
	    }
	  });
	});
	var _resolveDirection = resolveDirection$1;
	Object.keys(_resolveDirection).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _resolveDirection[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _resolveDirection[key];
	    }
	  });
	});
	var _rotateByAngle = rotateByAngle$1;
	Object.keys(_rotateByAngle).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _rotateByAngle[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _rotateByAngle[key];
	    }
	  });
	});
	var _updateTrace = updateTrace$1;
	Object.keys(_updateTrace).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _updateTrace[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _updateTrace[key];
	    }
	  });
	});
} (utils$1));

(function (exports) {

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof(obj);
	}
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _exportNames = {};
	exports["default"] = void 0;
	var Utils = _interopRequireWildcard(utils$1);
	var _types = types$1;
	Object.keys(_types).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
	  if (key in exports && exports[key] === _types[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _types[key];
	    }
	  });
	});
	function _getRequireWildcardCache(nodeInterop) {
	  if (typeof WeakMap !== "function") return null;
	  var cacheBabelInterop = new WeakMap();
	  var cacheNodeInterop = new WeakMap();
	  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
	    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
	  })(nodeInterop);
	}
	function _interopRequireWildcard(obj, nodeInterop) {
	  if (!nodeInterop && obj && obj.__esModule) {
	    return obj;
	  }
	  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
	    return {
	      "default": obj
	    };
	  }
	  var cache = _getRequireWildcardCache(nodeInterop);
	  if (cache && cache.has(obj)) {
	    return cache.get(obj);
	  }
	  var newObj = {};
	  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
	  for (var key in obj) {
	    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
	      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
	      if (desc && (desc.get || desc.set)) {
	        Object.defineProperty(newObj, key, desc);
	      } else {
	        newObj[key] = obj[key];
	      }
	    }
	  }
	  newObj["default"] = obj;
	  if (cache) {
	    cache.set(obj, newObj);
	  }
	  return newObj;
	}
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}
	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	  return obj;
	}
	var VanillaSwipe = /*#__PURE__*/function () {
	  function VanillaSwipe(props) {
	    _classCallCheck(this, VanillaSwipe);
	    _defineProperty(this, "state", void 0);
	    _defineProperty(this, "props", void 0);
	    this.state = Utils.getInitialState();
	    this.props = Utils.getInitialProps(props);
	    this.handleSwipeStart = this.handleSwipeStart.bind(this);
	    this.handleSwipeMove = this.handleSwipeMove.bind(this);
	    this.handleSwipeEnd = this.handleSwipeEnd.bind(this);
	    this.handleMouseDown = this.handleMouseDown.bind(this);
	    this.handleMouseMove = this.handleMouseMove.bind(this);
	    this.handleMouseUp = this.handleMouseUp.bind(this);
	    this.handleMouseLeave = this.handleMouseLeave.bind(this);
	  }
	  _createClass(VanillaSwipe, [{
	    key: "init",
	    value: function init() {
	      this.setupTouchListeners();
	      this.setupMouseListeners();
	    }
	  }, {
	    key: "update",
	    value: function update(props) {
	      var prevProps = this.props;
	      var nextProps = Object.assign({}, prevProps, props);
	      if (prevProps.element !== nextProps.element || prevProps.target !== nextProps.target) {
	        this.destroy();
	        this.props = nextProps;
	        this.init();
	        return;
	      }
	      this.props = nextProps;
	      if (prevProps.mouseTrackingEnabled !== nextProps.mouseTrackingEnabled || prevProps.preventTrackingOnMouseleave !== nextProps.preventTrackingOnMouseleave) {
	        this.cleanupMouseListeners();
	        nextProps.mouseTrackingEnabled ? this.setupMouseListeners() : this.cleanupMouseListeners();
	      }
	      if (prevProps.touchTrackingEnabled !== nextProps.touchTrackingEnabled) {
	        this.cleanupTouchListeners();
	        nextProps.touchTrackingEnabled ? this.setupTouchListeners() : this.cleanupTouchListeners();
	      }
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this.cleanupMouseListeners();
	      this.cleanupTouchListeners();
	      this.state = Utils.getInitialState();
	      this.props = Utils.getInitialProps();
	    }
	  }, {
	    key: "setupTouchListeners",
	    value: function setupTouchListeners() {
	      var _this$props = this.props,
	        element = _this$props.element,
	        target = _this$props.target,
	        touchTrackingEnabled = _this$props.touchTrackingEnabled;
	      if (element && touchTrackingEnabled) {
	        var listener = target || element;
	        var isPassiveSupported = Utils.checkIsPassiveSupported();
	        var options = Utils.getOptions(isPassiveSupported);
	        listener.addEventListener('touchstart', this.handleSwipeStart, options);
	        listener.addEventListener('touchmove', this.handleSwipeMove, options);
	        listener.addEventListener('touchend', this.handleSwipeEnd, options);
	      }
	    }
	  }, {
	    key: "cleanupTouchListeners",
	    value: function cleanupTouchListeners() {
	      var _this$props2 = this.props,
	        element = _this$props2.element,
	        target = _this$props2.target;
	      var listener = target || element;
	      if (listener) {
	        listener.removeEventListener('touchstart', this.handleSwipeStart);
	        listener.removeEventListener('touchmove', this.handleSwipeMove);
	        listener.removeEventListener('touchend', this.handleSwipeEnd);
	      }
	    }
	  }, {
	    key: "setupMouseListeners",
	    value: function setupMouseListeners() {
	      var _this$props3 = this.props,
	        element = _this$props3.element,
	        mouseTrackingEnabled = _this$props3.mouseTrackingEnabled,
	        preventTrackingOnMouseleave = _this$props3.preventTrackingOnMouseleave;
	      if (mouseTrackingEnabled && element) {
	        element.addEventListener('mousedown', this.handleMouseDown);
	        element.addEventListener('mousemove', this.handleMouseMove);
	        element.addEventListener('mouseup', this.handleMouseUp);
	        if (preventTrackingOnMouseleave) {
	          element.addEventListener('mouseleave', this.handleMouseLeave);
	        }
	      }
	    }
	  }, {
	    key: "cleanupMouseListeners",
	    value: function cleanupMouseListeners() {
	      var element = this.props.element;
	      if (element) {
	        element.removeEventListener('mousedown', this.handleMouseDown);
	        element.removeEventListener('mousemove', this.handleMouseMove);
	        element.removeEventListener('mouseup', this.handleMouseUp);
	        element.removeEventListener('mouseleave', this.handleMouseLeave);
	      }
	    }
	  }, {
	    key: "getEventData",
	    value: function getEventData(e) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	        directionDelta: 0
	      };
	      var rotationAngle = this.props.rotationAngle;
	      var directionDelta = options.directionDelta;
	      var movingPosition = Utils.calculateMovingPosition(e);
	      var rotatePosition = Utils.rotateByAngle(movingPosition, rotationAngle);
	      return Utils.calculatePosition(this.state, {
	        rotatePosition: rotatePosition,
	        directionDelta: directionDelta
	      });
	    }
	  }, {
	    key: "handleSwipeStart",
	    value: function handleSwipeStart(e) {
	      if (Utils.checkIsMoreThanSingleTouches(e)) return;
	      var rotationAngle = this.props.rotationAngle;
	      var movingPosition = Utils.calculateMovingPosition(e);
	      var _Utils$rotateByAngle = Utils.rotateByAngle(movingPosition, rotationAngle),
	        x = _Utils$rotateByAngle.x,
	        y = _Utils$rotateByAngle.y;
	      this.state = Utils.getInitialState({
	        isSwiping: false,
	        start: Date.now(),
	        x: x,
	        y: y
	      });
	    }
	  }, {
	    key: "handleSwipeMove",
	    value: function handleSwipeMove(e) {
	      var _this$state = this.state,
	        x = _this$state.x,
	        y = _this$state.y,
	        isSwiping = _this$state.isSwiping;
	      if (!x || !y || Utils.checkIsMoreThanSingleTouches(e)) return;
	      var directionDelta = this.props.directionDelta || 0;
	      var _this$getEventData = this.getEventData(e, {
	          directionDelta: directionDelta
	        }),
	        absX = _this$getEventData.absX,
	        absY = _this$getEventData.absY,
	        deltaX = _this$getEventData.deltaX,
	        deltaY = _this$getEventData.deltaY,
	        directionX = _this$getEventData.directionX,
	        directionY = _this$getEventData.directionY,
	        duration = _this$getEventData.duration,
	        velocity = _this$getEventData.velocity;
	      var _this$props4 = this.props,
	        delta = _this$props4.delta,
	        preventDefaultTouchmoveEvent = _this$props4.preventDefaultTouchmoveEvent,
	        onSwipeStart = _this$props4.onSwipeStart,
	        onSwiping = _this$props4.onSwiping;
	      if (e.cancelable && preventDefaultTouchmoveEvent) e.preventDefault();
	      if (absX < Number(delta) && absY < Number(delta) && !isSwiping) return;
	      if (onSwipeStart && !isSwiping) {
	        onSwipeStart(e, {
	          deltaX: deltaX,
	          deltaY: deltaY,
	          absX: absX,
	          absY: absY,
	          directionX: directionX,
	          directionY: directionY,
	          duration: duration,
	          velocity: velocity
	        });
	      }
	      this.state.isSwiping = true;
	      if (onSwiping) {
	        onSwiping(e, {
	          deltaX: deltaX,
	          deltaY: deltaY,
	          absX: absX,
	          absY: absY,
	          directionX: directionX,
	          directionY: directionY,
	          duration: duration,
	          velocity: velocity
	        });
	      }
	    }
	  }, {
	    key: "handleSwipeEnd",
	    value: function handleSwipeEnd(e) {
	      var _this$props5 = this.props,
	        onSwiped = _this$props5.onSwiped,
	        onTap = _this$props5.onTap;
	      if (this.state.isSwiping) {
	        var directionDelta = this.props.directionDelta || 0;
	        var position = this.getEventData(e, {
	          directionDelta: directionDelta
	        });
	        onSwiped && onSwiped(e, position);
	      } else {
	        var _position = this.getEventData(e);
	        onTap && onTap(e, _position);
	      }
	      this.state = Utils.getInitialState();
	    }
	  }, {
	    key: "handleMouseDown",
	    value: function handleMouseDown(e) {
	      var target = this.props.target;
	      if (target) {
	        if (target === e.target) {
	          this.handleSwipeStart(e);
	        }
	      } else {
	        this.handleSwipeStart(e);
	      }
	    }
	  }, {
	    key: "handleMouseMove",
	    value: function handleMouseMove(e) {
	      this.handleSwipeMove(e);
	    }
	  }, {
	    key: "handleMouseUp",
	    value: function handleMouseUp(e) {
	      var isSwiping = this.state.isSwiping;
	      var target = this.props.target;
	      if (target) {
	        if (target === e.target || isSwiping) {
	          this.handleSwipeEnd(e);
	        }
	      } else {
	        this.handleSwipeEnd(e);
	      }
	    }
	  }, {
	    key: "handleMouseLeave",
	    value: function handleMouseLeave(e) {
	      var isSwiping = this.state.isSwiping;
	      if (isSwiping) {
	        this.handleSwipeEnd(e);
	      }
	    }
	  }], [{
	    key: "isTouchEventsSupported",
	    value: function isTouchEventsSupported() {
	      return Utils.checkIsTouchEventsSupported();
	    }
	  }]);
	  return VanillaSwipe;
	}();
	exports["default"] = VanillaSwipe;
} (lib));

var defaultProps = {};

var types = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	  value: !0
	}), exports.Modifiers = exports.Classnames = exports.AutoplayDirection = exports.ControlsStrategy = exports.AutoPlayStrategy = exports.AnimationType = exports.EventType = void 0, function (e) {
	  e.ACTION = "action", e.INIT = "init", e.RESIZE = "resize", e.UPDATE = "update";
	}(exports.EventType || (exports.EventType = {})), function (e) {
	  e.FADEOUT = "fadeout", e.SLIDE = "slide";
	}(exports.AnimationType || (exports.AnimationType = {})), function (e) {
	  e.DEFAULT = "default", e.ALL = "all", e.ACTION = "action", e.NONE = "none";
	}(exports.AutoPlayStrategy || (exports.AutoPlayStrategy = {})), function (e) {
	  e.DEFAULT = "default", e.ALTERNATE = "alternate", e.RESPONSIVE = "responsive";
	}(exports.ControlsStrategy || (exports.ControlsStrategy = {})), function (e) {
	  e.RTL = "rtl", e.LTR = "ltr";
	}(exports.AutoplayDirection || (exports.AutoplayDirection = {})), function (e) {
	  e.ANIMATED = "animated animated-out fadeOut", e.ROOT = "alice-carousel", e.WRAPPER = "alice-carousel__wrapper", e.STAGE = "alice-carousel__stage", e.STAGE_ITEM = "alice-carousel__stage-item", e.DOTS = "alice-carousel__dots", e.DOTS_ITEM = "alice-carousel__dots-item", e.PLAY_BTN = "alice-carousel__play-btn", e.PLAY_BTN_ITEM = "alice-carousel__play-btn-item", e.PLAY_BTN_WRAPPER = "alice-carousel__play-btn-wrapper", e.SLIDE_INFO = "alice-carousel__slide-info", e.SLIDE_INFO_ITEM = "alice-carousel__slide-info-item", e.BUTTON_PREV = "alice-carousel__prev-btn", e.BUTTON_PREV_WRAPPER = "alice-carousel__prev-btn-wrapper", e.BUTTON_PREV_ITEM = "alice-carousel__prev-btn-item", e.BUTTON_NEXT = "alice-carousel__next-btn", e.BUTTON_NEXT_WRAPPER = "alice-carousel__next-btn-wrapper", e.BUTTON_NEXT_ITEM = "alice-carousel__next-btn-item";
	}(exports.Classnames || (exports.Classnames = {})), function (e) {
	  e.ACTIVE = "__active", e.INACTIVE = "__inactive", e.CLONED = "__cloned", e.CUSTOM = "__custom", e.PAUSE = "__pause", e.SEPARATOR = "__separator", e.SSR = "__ssr", e.TARGET = "__target";
	}(exports.Modifiers || (exports.Modifiers = {}));
} (types));

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	}), exports.defaultProps = void 0;
	var types_1 = types;
	exports.defaultProps = {
	  activeIndex: 0,
	  animationDuration: 400,
	  animationEasingFunction: "ease",
	  animationType: types_1.AnimationType.SLIDE,
	  autoHeight: !1,
	  autoWidth: !1,
	  autoPlay: !1,
	  autoPlayControls: !1,
	  autoPlayDirection: types_1.AutoplayDirection.LTR,
	  autoPlayInterval: 400,
	  autoPlayStrategy: types_1.AutoPlayStrategy.DEFAULT,
	  children: void 0,
	  controlsStrategy: types_1.ControlsStrategy.DEFAULT,
	  disableButtonsControls: !1,
	  disableDotsControls: !1,
	  disableSlideInfo: !0,
	  infinite: !1,
	  innerWidth: void 0,
	  items: void 0,
	  keyboardNavigation: !1,
	  mouseTracking: !1,
	  name: "",
	  paddingLeft: 0,
	  paddingRight: 0,
	  responsive: void 0,
	  swipeDelta: 20,
	  swipeExtraPadding: 200,
	  ssrSilentMode: !0,
	  touchTracking: !0,
	  touchMoveDefaultEvents: !0,
	  onInitialized: function () {},
	  onResized: function () {},
	  onResizeEvent: void 0,
	  onSlideChange: function () {},
	  onSlideChanged: function () {}
	};
} (defaultProps));

var views = {};

var SlideInfo = {};

var utils = {};

var common = {};

var elements = {};

var mappers = {};

(function (exports) {

	var __assign = function () {
	    return (__assign = Object.assign || function (o) {
	      for (var t, r = 1, i = arguments.length; r < i; r++) for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (o[s] = t[s]);
	      return o;
	    }).apply(this, arguments);
	  },
	  mapPartialCoords = (Object.defineProperty(exports, "__esModule", {
	    value: !0
	  }), exports.mapPositionCoords = exports.mapPartialCoords = void 0, function (o) {
	    return o.map(function (o) {
	      return {
	        width: o.width,
	        position: 0
	      };
	    });
	  }),
	  mapPositionCoords = (exports.mapPartialCoords = mapPartialCoords, function (o, t) {
	    return void 0 === t && (t = 0), o.map(function (o) {
	      return o.position > t ? __assign(__assign({}, o), {
	        position: t
	      }) : o;
	    });
	  });
	exports.mapPositionCoords = mapPositionCoords;
} (mappers));

var math = {};

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	}), exports.isVerticalTouchmoveDetected = exports.getFadeoutAnimationPosition = exports.getFadeoutAnimationIndex = exports.getSwipeTouchendIndex = exports.getSwipeTouchendPosition = exports.getSwipeTransformationCursor = exports.getTransformationItemIndex = exports.getSwipeShiftValue = exports.getItemCoords = exports.getIsLeftDirection = exports.shouldRecalculateSwipePosition = exports.getSwipeLimitMax = exports.getSwipeLimitMin = exports.shouldCancelSlideAnimation = exports.shouldRecalculateSlideIndex = exports.getUpdateSlidePositionIndex = exports.getActiveIndex = exports.getStartIndex = exports.getShiftIndex = void 0;
	var getShiftIndex = function (e, t) {
	    return (e = void 0 === e ? 0 : e) + (t = void 0 === t ? 0 : t);
	  },
	  getStartIndex = (exports.getShiftIndex = getShiftIndex, function (e, t) {
	    if (void 0 === e && (e = 0), t = void 0 === t ? 0 : t) {
	      if (t <= e) return t - 1;
	      if (0 < e) return e;
	    }
	    return 0;
	  }),
	  getActiveIndex = (exports.getStartIndex = getStartIndex, function (e) {
	    var t = e.startIndex,
	      t = void 0 === t ? 0 : t,
	      i = e.itemsCount,
	      e = e.infinite;
	    return void 0 !== e && e ? t : (0, exports.getStartIndex)(t, void 0 === i ? 0 : i);
	  }),
	  getUpdateSlidePositionIndex = (exports.getActiveIndex = getActiveIndex, function (e, t) {
	    return e < 0 ? t - 1 : t <= e ? 0 : e;
	  }),
	  shouldRecalculateSlideIndex = (exports.getUpdateSlidePositionIndex = getUpdateSlidePositionIndex, function (e, t) {
	    return e < 0 || t <= e;
	  }),
	  shouldCancelSlideAnimation = (exports.shouldRecalculateSlideIndex = shouldRecalculateSlideIndex, function (e, t) {
	    return e < 0 || t <= e;
	  }),
	  getSwipeLimitMin = (exports.shouldCancelSlideAnimation = shouldCancelSlideAnimation, function (e, t) {
	    var i = e.itemsOffset,
	      e = e.transformationSet,
	      e = void 0 === e ? [] : e,
	      o = t.infinite,
	      t = t.swipeExtraPadding;
	    return o ? (e[void 0 === i ? 0 : i] || {}).position : (o = (e[0] || {}).width, Math.min(void 0 === t ? 0 : t, void 0 === o ? 0 : o));
	  }),
	  getSwipeLimitMax = (exports.getSwipeLimitMin = getSwipeLimitMin, function (e, t) {
	    var i = t.infinite,
	      t = t.swipeExtraPadding,
	      t = void 0 === t ? 0 : t,
	      o = e.itemsCount,
	      n = e.itemsOffset,
	      r = e.itemsInSlide,
	      r = void 0 === r ? 1 : r,
	      e = e.transformationSet,
	      e = void 0 === e ? [] : e;
	    return i ? (e[(void 0 === o ? 1 : o) + (0, exports.getShiftIndex)(r, void 0 === n ? 0 : n)] || {}).position || 0 : (0, exports.getItemCoords)(-r, e).position + t;
	  }),
	  shouldRecalculateSwipePosition = (exports.getSwipeLimitMax = getSwipeLimitMax, function (e, t, i) {
	    return -t <= e || Math.abs(e) >= i;
	  }),
	  getIsLeftDirection = (exports.shouldRecalculateSwipePosition = shouldRecalculateSwipePosition, function (e) {
	    return (e = void 0 === e ? 0 : e) < 0;
	  }),
	  getItemCoords = (exports.getIsLeftDirection = getIsLeftDirection, function (e, t) {
	    return (t = void 0 === t ? [] : t).slice(e = void 0 === e ? 0 : e)[0] || {
	      position: 0,
	      width: 0
	    };
	  }),
	  getSwipeShiftValue = (exports.getItemCoords = getItemCoords, function (e, t) {
	    return void 0 === e && (e = 0), void 0 === t && (t = []), (0, exports.getItemCoords)(e, t).position;
	  }),
	  getTransformationItemIndex = (exports.getSwipeShiftValue = getSwipeShiftValue, function (e, t) {
	    return void 0 === t && (t = 0), (e = void 0 === e ? [] : e).findIndex(function (e) {
	      return e.position >= Math.abs(t);
	    });
	  }),
	  getSwipeTransformationCursor = (exports.getTransformationItemIndex = getTransformationItemIndex, function (e, t, i) {
	    void 0 === e && (e = []), void 0 === t && (t = 0), void 0 === i && (i = 0);
	    e = (0, exports.getTransformationItemIndex)(e, t);
	    return (0, exports.getIsLeftDirection)(i) ? e : e - 1;
	  }),
	  getSwipeTouchendPosition = (exports.getSwipeTransformationCursor = getSwipeTransformationCursor, function (e, t, i) {
	    void 0 === i && (i = 0);
	    var o = e.infinite,
	      n = e.autoWidth,
	      r = e.isStageContentPartial,
	      s = e.swipeAllowedPositionMax,
	      e = e.transformationSet,
	      i = (0, exports.getSwipeTransformationCursor)(e, i, t),
	      t = (0, exports.getItemCoords)(i, e).position;
	    if (!o) {
	      if (n && r) return 0;
	      if (s < t) return -s;
	    }
	    return -t;
	  }),
	  getSwipeTouchendIndex = (exports.getSwipeTouchendPosition = getSwipeTouchendPosition, function (e, t) {
	    var i = t.transformationSet,
	      o = t.itemsInSlide,
	      n = t.itemsOffset,
	      r = t.itemsCount,
	      s = t.infinite,
	      d = t.isStageContentPartial,
	      a = t.activeIndex,
	      t = t.translate3d;
	    return s || !d && t !== Math.abs(e) ? (d = (0, exports.getTransformationItemIndex)(i, e), s ? d < (t = (0, exports.getShiftIndex)(o, n)) ? r - o - n + d : t + r <= d ? d - (t + r) : d - t : d) : a;
	  }),
	  getFadeoutAnimationIndex = (exports.getSwipeTouchendIndex = getSwipeTouchendIndex, function (e) {
	    var t = e.infinite,
	      i = e.activeIndex,
	      e = e.itemsInSlide;
	    return t ? i + e : i;
	  }),
	  getFadeoutAnimationPosition = (exports.getFadeoutAnimationIndex = getFadeoutAnimationIndex, function (e, t) {
	    var i = t.activeIndex,
	      t = t.stageWidth;
	    return e < i ? (i - e) * -t || 0 : (e - i) * t || 0;
	  }),
	  isVerticalTouchmoveDetected = (exports.getFadeoutAnimationPosition = getFadeoutAnimationPosition, function (e, t, i) {
	    return e < (i = void 0 === i ? 0 : i) || e < .1 * t;
	  });
	exports.isVerticalTouchmoveDetected = isVerticalTouchmoveDetected;
} (math));

var hasRequiredElements;

function requireElements () {
	if (hasRequiredElements) return elements;
	hasRequiredElements = 1;
	(function (exports) {

		var __assign = function () {
		    return (__assign = Object.assign || function (t) {
		      for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
		      return t;
		    }).apply(this, arguments);
		  },
		  common_1 = (Object.defineProperty(exports, "__esModule", {
		    value: !0
		  }), exports.getTransformMatrix = exports.getTranslateXProperty = exports.getTouchmoveTranslatePosition = exports.getTranslate3dProperty = exports.getRenderStageItemStyles = exports.getRenderStageStyles = exports.getTransitionProperty = exports.getRenderWrapperStyles = exports.animate = exports.shouldHandleResizeEvent = exports.getElementFirstChild = exports.getElementCursor = exports.getAutoheightProperty = exports.getElementDimensions = exports.getItemWidth = exports.createDefaultTransformationSet = exports.createAutowidthTransformationSet = exports.isElement = exports.createClones = exports.getItemsOffset = exports.getItemsCount = exports.getSlides = void 0, requireCommon()),
		  mappers_1 = mappers,
		  math_1 = math,
		  getSlides = function (t) {
		    var e = t.children,
		      t = t.items;
		    return e ? e.length ? e : [e] : void 0 === t ? [] : t;
		  },
		  getItemsCount = (exports.getSlides = getSlides, function (t) {
		    return (0, exports.getSlides)(t).length;
		  }),
		  getItemsOffset = (exports.getItemsCount = getItemsCount, function (t) {
		    var e = t.infinite,
		      r = t.paddingRight,
		      t = t.paddingLeft;
		    return e && (t || r) ? 1 : 0;
		  }),
		  createClones = (exports.getItemsOffset = getItemsOffset, function (t) {
		    var e,
		      r,
		      n,
		      o,
		      i = (0, exports.getSlides)(t);
		    return t.infinite ? (e = (0, exports.getItemsCount)(t), o = (0, exports.getItemsOffset)(t), t = (0, common_1.getItemsInSlide)(e, t), n = Math.min(t, e) + o, r = i.slice(0, n), n = i.slice(-n), o && t === e && (o = i[0], t = i.slice(-1)[0], n.unshift(t), r.push(o)), n.concat(i, r)) : i;
		  }),
		  isElement = (exports.createClones = createClones, function (t) {
		    try {
		      return t instanceof Element || t instanceof HTMLDocument;
		    } catch (t) {
		      return !1;
		    }
		  }),
		  createAutowidthTransformationSet = (exports.isElement = isElement, function (t, i, e) {
		    void 0 === i && (i = 0), void 0 === e && (e = !1);
		    var s = 0,
		      a = !0,
		      r = [];
		    return (0, exports.isElement)(t) && (r = Array.from((null == t ? void 0 : t.children) || []).reduce(function (t, e, r) {
		      var n = 0,
		        r = r - 1,
		        o = t[r],
		        e = getElementDimensions(null == e ? void 0 : e.firstChild).width,
		        e = void 0 === e ? 0 : e;
		      return a = (s += e) <= i, o && (n = 0 == r ? o.width : o.width + o.position), t.push({
		        position: n,
		        width: e
		      }), t;
		    }, []), e || (r = a ? (0, mappers_1.mapPartialCoords)(r) : (t = s - i, (0, mappers_1.mapPositionCoords)(r, t)))), {
		      coords: r,
		      content: s,
		      partial: a
		    };
		  }),
		  createDefaultTransformationSet = (exports.createAutowidthTransformationSet = createAutowidthTransformationSet, function (t, o, e, r) {
		    void 0 === r && (r = !1);
		    var i = 0,
		      s = !0,
		      n = [],
		      a = (0, exports.getItemWidth)(o, e);
		    return n = t.reduce(function (t, e, r) {
		      var n = 0,
		        r = t[r - 1];
		      return s = (i += a) <= o, r && (n = a + r.position || 0), t.push({
		        width: a,
		        position: n
		      }), t;
		    }, []), {
		      coords: n = r ? n : s ? (0, mappers_1.mapPartialCoords)(n) : (e = i - o, (0, mappers_1.mapPositionCoords)(n, e)),
		      content: i,
		      partial: s
		    };
		  }),
		  getItemWidth = (exports.createDefaultTransformationSet = createDefaultTransformationSet, function (t, e) {
		    return 0 < e ? t / e : t;
		  });
		function getElementDimensions(t) {
		  return t && t.getBoundingClientRect ? {
		    width: (t = t.getBoundingClientRect()).width,
		    height: t.height
		  } : {
		    width: 0,
		    height: 0
		  };
		}
		exports.getItemWidth = getItemWidth, exports.getElementDimensions = getElementDimensions;
		var getAutoheightProperty = function (t, e, r) {
		    var e = (0, exports.getElementCursor)(e, r),
		      r = (0, exports.getElementFirstChild)(t, e);
		    if ((0, exports.isElement)(r)) return t = window.getComputedStyle(r), e = parseFloat(t.marginTop), t = parseFloat(t.marginBottom), Math.ceil(r.offsetHeight + e + t);
		  },
		  getElementCursor = (exports.getAutoheightProperty = getAutoheightProperty, function (t, e) {
		    var r = e.activeIndex,
		      e = e.itemsInSlide;
		    return t.infinite ? r + e + (0, exports.getItemsOffset)(t) : r;
		  }),
		  getElementFirstChild = (exports.getElementCursor = getElementCursor, function (t, e) {
		    t = t && t.children || [];
		    return t[e] && t[e].firstChild || null;
		  });
		function shouldHandleResizeEvent(t, e, r) {
		  return (e = void 0 === e ? {} : e).width !== (r = void 0 === r ? {} : r).width;
		}
		function animate(t, e) {
		  var e = e || {},
		    r = e.position,
		    r = void 0 === r ? 0 : r,
		    n = e.animationDuration,
		    n = void 0 === n ? 0 : n,
		    e = e.animationEasingFunction,
		    e = void 0 === e ? "ease" : e;
		  return t && (0, exports.isElement)(t) && (t.style.transition = "transform ".concat(n, "ms ").concat(e, " 0ms"), t.style.transform = "translate3d(".concat(r, "px, 0, 0)")), t;
		}
		exports.getElementFirstChild = getElementFirstChild, exports.shouldHandleResizeEvent = shouldHandleResizeEvent, exports.animate = animate;
		var getRenderWrapperStyles = function (t, e, r) {
		    var n = t || {},
		      o = n.paddingLeft,
		      i = n.paddingRight,
		      s = n.autoHeight,
		      n = n.animationDuration,
		      s = s ? (0, exports.getAutoheightProperty)(r, t, e) : void 0;
		    return {
		      height: s,
		      transition: s ? "height ".concat(n, "ms") : void 0,
		      paddingLeft: "".concat(o, "px"),
		      paddingRight: "".concat(i, "px")
		    };
		  },
		  getTransitionProperty = (exports.getRenderWrapperStyles = getRenderWrapperStyles, function (t) {
		    var t = t || {},
		      e = t.animationDuration,
		      t = t.animationEasingFunction,
		      t = void 0 === t ? "ease" : t;
		    return "transform ".concat(void 0 === e ? 0 : e, "ms ").concat(t, " 0ms");
		  }),
		  getRenderStageStyles = (exports.getTransitionProperty = getTransitionProperty, function (t, e) {
		    t = (t || {}).translate3d, t = "translate3d(".concat(-(void 0 === t ? 0 : t), "px, 0, 0)");
		    return __assign(__assign({}, e), {
		      transform: t
		    });
		  }),
		  getRenderStageItemStyles = (exports.getRenderStageStyles = getRenderStageStyles, function (t, e) {
		    var r = e.transformationSet,
		      n = e.fadeoutAnimationIndex,
		      o = e.fadeoutAnimationPosition,
		      i = e.fadeoutAnimationProcessing,
		      e = e.animationDuration,
		      r = (r[t] || {}).width;
		    return i && n === t ? {
		      transform: "translateX(".concat(o, "px)"),
		      animationDuration: "".concat(e, "ms"),
		      width: "".concat(r, "px")
		    } : {
		      width: r
		    };
		  }),
		  getTranslate3dProperty = (exports.getRenderStageItemStyles = getRenderStageItemStyles, function (t, e) {
		    var r = t,
		      n = e.infinite,
		      o = e.itemsOffset,
		      i = e.itemsInSlide,
		      e = e.transformationSet;
		    return ((void 0 === e ? [] : e)[r = n ? t + (0, math_1.getShiftIndex)(void 0 === i ? 0 : i, void 0 === o ? 0 : o) : r] || {}).position || 0;
		  }),
		  getTouchmoveTranslatePosition = (exports.getTranslate3dProperty = getTranslate3dProperty, function (t, e) {
		    return -(e - Math.floor(t));
		  });
		function getTranslateXProperty(t) {
		  t = getTransformMatrix(t), t = t && t[4] || "";
		  return Number(t);
		}
		function getTransformMatrix(t) {
		  return t && (0, exports.isElement)(t) && window.getComputedStyle(t).transform.match(/(-?[0-9.]+)/g) || [];
		}
		exports.getTouchmoveTranslatePosition = getTouchmoveTranslatePosition, exports.getTranslateXProperty = getTranslateXProperty, exports.getTransformMatrix = getTransformMatrix;
} (elements));
	return elements;
}

var hasRequiredCommon;

function requireCommon () {
	if (hasRequiredCommon) return common;
	hasRequiredCommon = 1;
	(function (exports) {

		Object.defineProperty(exports, "__esModule", {
		  value: !0
		}), exports.calculateInitialState = exports.getItemsInSlide = exports.getIsStageContentPartial = exports.concatClassnames = exports.canUseDOM = void 0;
		var elements_1 = requireElements(),
		  math_1 = math,
		  canUseDOM = function () {
		    var t;
		    try {
		      return Boolean(null == (t = null === window || void 0 === window ? void 0 : window.document) ? void 0 : t.createElement);
		    } catch (t) {
		      return !1;
		    }
		  },
		  concatClassnames = (exports.canUseDOM = canUseDOM, function () {
		    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
		    return t.filter(Boolean).join(" ");
		  }),
		  getIsStageContentPartial = (exports.concatClassnames = concatClassnames, function (t, e, n) {
		    return void 0 === e && (e = 0), void 0 === n && (n = 0), !(t = void 0 !== t && t) && n <= e;
		  }),
		  getItemsInSlide = (exports.getIsStageContentPartial = getIsStageContentPartial, function (n, t) {
		    var i,
		      a = 1,
		      o = t.responsive,
		      e = t.autoWidth,
		      s = t.infinite,
		      t = t.innerWidth;
		    return void 0 !== e && e ? void 0 !== s && s ? n : a : (o && (e = Object.keys(o)).length && (t || (0, exports.canUseDOM)()) && (i = void 0 === t ? window.innerWidth : t, e.forEach(function (t) {
		      var e;
		      Number(t) <= i && (e = (t = o[t]).items, t = t.itemsFit, a = "contain" === (void 0 === t ? "fill" : t) ? e : Math.min(e, n));
		    })), a || 1);
		  }),
		  calculateInitialState = (exports.getItemsInSlide = getItemsInSlide, function (t, e, n) {
		    void 0 === n && (n = !1);
		    var i,
		      a,
		      o = t.animationDuration,
		      o = void 0 === o ? 0 : o,
		      s = t.infinite,
		      s = void 0 !== s && s,
		      r = t.autoPlay,
		      r = void 0 !== r && r,
		      l = t.autoWidth,
		      l = void 0 !== l && l,
		      m = (0, elements_1.createClones)(t),
		      d = (0, elements_1.getTransitionProperty)(),
		      c = (0, elements_1.getItemsCount)(t),
		      u = (0, elements_1.getItemsOffset)(t),
		      f = (0, exports.getItemsInSlide)(c, t),
		      g = (0, math_1.getStartIndex)(t.activeIndex, c),
		      g = (0, math_1.getActiveIndex)({
		        startIndex: g,
		        itemsCount: c,
		        infinite: s
		      }),
		      I = (0, elements_1.getElementDimensions)(e).width,
		      S = (a = (e = (l ? (i = (e = (0, elements_1.createAutowidthTransformationSet)(e, I, s)).coords, a = e.content, e) : (i = (e = (0, elements_1.createDefaultTransformationSet)(m, I, f, s)).coords, a = e.content, e)).partial, a), (0, math_1.getItemCoords)(-f, i = i).position),
		      p = (0, math_1.getSwipeLimitMin)({
		        itemsOffset: u,
		        transformationSet: i
		      }, t),
		      t = (0, math_1.getSwipeLimitMax)({
		        itemsCount: c,
		        itemsOffset: u,
		        itemsInSlide: f,
		        transformationSet: i
		      }, t),
		      v = (0, math_1.getSwipeShiftValue)(c, i);
		    return {
		      activeIndex: g,
		      autoWidth: l,
		      animationDuration: o,
		      clones: m,
		      infinite: s,
		      itemsCount: c,
		      itemsInSlide: f,
		      itemsOffset: u,
		      translate3d: (0, elements_1.getTranslate3dProperty)(g, {
		        itemsInSlide: f,
		        itemsOffset: u,
		        transformationSet: i,
		        autoWidth: l,
		        infinite: s
		      }),
		      stageWidth: I,
		      stageContentWidth: a,
		      initialStageHeight: 0,
		      isStageContentPartial: e,
		      isAutoPlaying: Boolean(r),
		      isAutoPlayCanceledOnAction: !1,
		      transformationSet: i,
		      transition: d,
		      fadeoutAnimationIndex: null,
		      fadeoutAnimationPosition: null,
		      fadeoutAnimationProcessing: !1,
		      swipeLimitMin: p,
		      swipeLimitMax: t,
		      swipeAllowedPositionMax: S,
		      swipeShiftValue: v,
		      canUseDom: n || (0, exports.canUseDOM)()
		    };
		  });
		exports.calculateInitialState = calculateInitialState;
} (common));
	return common;
}

var classnames = {};

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	}), exports.isClonedItem = exports.isTargetItem = exports.isActiveItem = exports.getRenderStageItemClasses = void 0;
	var types_1 = types,
	  common_1 = requireCommon(),
	  math_1 = math,
	  getRenderStageItemClasses = function (e, t) {
	    void 0 === e && (e = 0);
	    var s = t.fadeoutAnimationIndex,
	      i = (0, exports.isActiveItem)(e, t) ? types_1.Modifiers.ACTIVE : "",
	      n = (0, exports.isClonedItem)(e, t) ? types_1.Modifiers.CLONED : "",
	      t = (0, exports.isTargetItem)(e, t) ? types_1.Modifiers.TARGET : "",
	      e = e === s ? types_1.Classnames.ANIMATED : "";
	    return (0, common_1.concatClassnames)(types_1.Classnames.STAGE_ITEM, i, n, t, e);
	  },
	  isActiveItem = (exports.getRenderStageItemClasses = getRenderStageItemClasses, function (e, t) {
	    void 0 === e && (e = 0);
	    var s = t.activeIndex,
	      i = t.itemsInSlide,
	      n = t.itemsOffset,
	      r = t.infinite,
	      t = t.autoWidth,
	      o = (0, math_1.getShiftIndex)(i, n);
	    return t && r ? e - o === s + n : (t = s + o, r ? t <= e && e < t + i : s <= e && e < t);
	  }),
	  isTargetItem = (exports.isActiveItem = isActiveItem, function (e, t) {
	    void 0 === e && (e = 0);
	    var s = t.activeIndex,
	      i = t.itemsInSlide,
	      n = t.itemsOffset,
	      r = t.infinite,
	      t = t.autoWidth,
	      i = (0, math_1.getShiftIndex)(i, n);
	    return r ? t && r ? e - i === s + n : e === s + i : e === s;
	  }),
	  isClonedItem = (exports.isTargetItem = isTargetItem, function (e, t) {
	    void 0 === e && (e = 0);
	    var s = t.itemsInSlide,
	      i = t.itemsOffset,
	      n = t.itemsCount,
	      r = t.infinite,
	      t = t.autoWidth;
	    return !!r && (t && r ? e < s || n - 1 + s < e : e < (t = (0, math_1.getShiftIndex)(s, i)) || n - 1 + t < e);
	  });
	exports.isClonedItem = isClonedItem;
} (classnames));

var timers = {};

(function (exports) {

	function debounce(n, i) {
	  void 0 === i && (i = 0);
	  function u() {
	    d && (clearTimeout(d), d = void 0);
	  }
	  var d = void 0;
	  return [function () {
	    for (var e = this, o = [], t = 0; t < arguments.length; t++) o[t] = arguments[t];
	    u(), d = window.setTimeout(function () {
	      n.apply(e, o), d = void 0;
	    }, i);
	  }, u];
	}
	Object.defineProperty(exports, "__esModule", {
	  value: !0
	}), exports.debounce = void 0, exports.debounce = debounce;
} (timers));

var debug = {};

(function (exports) {

	function debug() {
	  for (var e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
	  console.debug.apply(console, e);
	}
	Object.defineProperty(exports, "__esModule", {
	  value: !0
	}), exports.debug = void 0, exports.debug = debug;
} (debug));

var render = {};

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	}), exports.getSlideItemInfo = exports.getSlideInfo = exports.getSlideIndexForMultipleItems = exports.getSlideIndexForNonMultipleItems = exports.getActiveSlideDotsLength = exports.getActiveSlideIndex = void 0;
	var getActiveSlideIndex = function (e, t) {
	    var t = t || {},
	      i = t.activeIndex,
	      o = t.itemsInSlide,
	      t = t.itemsCount,
	      i = i + o;
	    return 1 === o ? (0, exports.getSlideIndexForNonMultipleItems)(i, o, t) : (0, exports.getSlideIndexForMultipleItems)(i, o, t, e);
	  },
	  getActiveSlideDotsLength = (exports.getActiveSlideIndex = getActiveSlideIndex, function (e, t) {
	    var i;
	    return void 0 === t && (t = 1), (e = void 0 === e ? 0 : e) && t ? (i = Math.floor(e / t), e % t == 0 ? i - 1 : i) : 0;
	  }),
	  getSlideIndexForNonMultipleItems = (exports.getActiveSlideDotsLength = getActiveSlideDotsLength, function (e, t, i) {
	    return e < t ? i - t : i < e ? 0 : e - 1;
	  }),
	  getSlideIndexForMultipleItems = (exports.getSlideIndexForNonMultipleItems = getSlideIndexForNonMultipleItems, function (e, t, i, o) {
	    var l = (0, exports.getActiveSlideDotsLength)(i, t);
	    return e === i + t ? 0 : o || e < t && 0 !== e ? l : 0 === e ? i % t == 0 ? l : l - 1 : 0 < t ? Math.floor(e / t) - 1 : 0;
	  }),
	  getSlideInfo = (exports.getSlideIndexForMultipleItems = getSlideIndexForMultipleItems, function (e, t) {
	    void 0 === t && (t = 0);
	    e = (e = void 0 === e ? 0 : e) + 1;
	    return e < 1 ? e = t : t < e && (e = 1), {
	      item: e,
	      itemsCount: t
	    };
	  }),
	  getSlideItemInfo = (exports.getSlideInfo = getSlideInfo, function (e) {
	    var e = e || {},
	      t = e.itemsInSlide,
	      i = e.activeIndex,
	      o = e.infinite,
	      l = e.itemsCount;
	    return e.isStageContentPartial ? {
	      isPrevSlideDisabled: !0,
	      isNextSlideDisabled: !0
	    } : {
	      isPrevSlideDisabled: !1 === o && 0 === i,
	      isNextSlideDisabled: !1 === o && l - t <= i
	    };
	  });
	exports.getSlideItemInfo = getSlideItemInfo;
} (render));

var controls = {};

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	}), exports.shouldCancelAutoPlayOnHover = exports.shouldCancelAutoPlayOnAction = exports.getItemIndexForDotNavigation = exports.checkIsTheLastDotIndex = exports.getDotsNavigationLength = exports.hasDotForEachSlide = exports.isStrategy = exports.shouldDisableButtons = exports.shouldDisableDots = exports.shouldDisableControls = void 0;
	var types_1 = types;
	function shouldDisableControls(t, o) {
	  var t = (t || {}).controlsStrategy,
	    o = o || {},
	    e = o.itemsInSlide,
	    s = o.itemsCount,
	    o = o.autoWidth;
	  if ((0, exports.isStrategy)(t, types_1.ControlsStrategy.RESPONSIVE)) return !o && e === s;
	}
	function shouldDisableDots(t, o) {
	  return t.disableDotsControls || shouldDisableControls(t, o);
	}
	function shouldDisableButtons(t, o) {
	  return t.disableButtonsControls || !t.infinite && shouldDisableControls(t, o);
	}
	exports.shouldDisableControls = shouldDisableControls, exports.shouldDisableDots = shouldDisableDots, exports.shouldDisableButtons = shouldDisableButtons;
	var isStrategy = function (t, o) {
	    return void 0 === t && (t = ""), void 0 === o && (o = ""), Boolean(t && t.includes(o));
	  },
	  hasDotForEachSlide = (exports.isStrategy = isStrategy, function (t, o) {
	    return t || (0, exports.isStrategy)(o, types_1.ControlsStrategy.ALTERNATE);
	  }),
	  getDotsNavigationLength = (exports.hasDotForEachSlide = hasDotForEachSlide, function (t, o, e) {
	    return void 0 === t && (t = 0), void 0 === o && (o = 1), (e = void 0 !== e && e) ? t : 0 !== Number(o) && Math.ceil(t / o) || 0;
	  }),
	  checkIsTheLastDotIndex = (exports.getDotsNavigationLength = getDotsNavigationLength, function (t, o, e) {
	    return !o && t === e - 1;
	  }),
	  getItemIndexForDotNavigation = (exports.checkIsTheLastDotIndex = checkIsTheLastDotIndex, function (t, o, e, s) {
	    return (o ? e - s : t * s) || 0;
	  }),
	  shouldCancelAutoPlayOnAction = (exports.getItemIndexForDotNavigation = getItemIndexForDotNavigation, function (t) {
	    return (t = void 0 === t ? "" : t) === types_1.AutoPlayStrategy.ACTION || t === types_1.AutoPlayStrategy.ALL;
	  }),
	  shouldCancelAutoPlayOnHover = (exports.shouldCancelAutoPlayOnAction = shouldCancelAutoPlayOnAction, function (t) {
	    return (t = void 0 === t ? "" : t) === types_1.AutoPlayStrategy.DEFAULT || t === types_1.AutoPlayStrategy.ALL;
	  });
	exports.shouldCancelAutoPlayOnHover = shouldCancelAutoPlayOnHover;
} (controls));

(function (exports) {

	var __createBinding = Object.create ? function (e, r, t, o) {
	    void 0 === o && (o = t);
	    var p = Object.getOwnPropertyDescriptor(r, t);
	    p && ("get" in p ? r.__esModule : !p.writable && !p.configurable) || (p = {
	      enumerable: !0,
	      get: function () {
	        return r[t];
	      }
	    }), Object.defineProperty(e, o, p);
	  } : function (e, r, t, o) {
	    e[o = void 0 === o ? t : o] = r[t];
	  },
	  __exportStar = function (e, r) {
	    for (var t in e) "default" === t || Object.prototype.hasOwnProperty.call(r, t) || __createBinding(r, e, t);
	  };
	Object.defineProperty(exports, "__esModule", {
	  value: !0
	}), __exportStar(requireCommon(), exports), __exportStar(requireElements(), exports), __exportStar(classnames, exports), __exportStar(timers, exports), __exportStar(math, exports), __exportStar(debug, exports), __exportStar(render, exports), __exportStar(controls, exports), __exportStar(mappers, exports);
} (utils));

(function (exports) {

	var __importDefault = function (e) {
	    return e && e.__esModule ? e : {
	      default: e
	    };
	  },
	  react_1 = (Object.defineProperty(exports, "__esModule", {
	    value: !0
	  }), exports.SlideInfo = void 0, __importDefault(require("react"))),
	  types_1 = types,
	  utils_1 = utils,
	  SlideInfo = function (e) {
	    var t = e.activeIndex,
	      s = e.itemsCount,
	      e = e.renderSlideInfo,
	      t = (0, utils_1.getSlideInfo)(t, s).item;
	    return "function" == typeof e ? react_1.default.createElement("div", {
	      className: types_1.Classnames.SLIDE_INFO
	    }, e({
	      item: t,
	      itemsCount: s
	    })) : (e = (0, utils_1.concatClassnames)(types_1.Classnames.SLIDE_INFO_ITEM, types_1.Modifiers.SEPARATOR), react_1.default.createElement("div", {
	      className: types_1.Classnames.SLIDE_INFO
	    }, react_1.default.createElement("span", {
	      className: types_1.Classnames.SLIDE_INFO_ITEM
	    }, t), react_1.default.createElement("span", {
	      className: e
	    }, "/"), react_1.default.createElement("span", {
	      className: types_1.Classnames.SLIDE_INFO_ITEM
	    }, s)));
	  };
	exports.SlideInfo = SlideInfo;
} (SlideInfo));

var StageItem = {};

(function (exports) {

	var __importDefault = function (e) {
	    return e && e.__esModule ? e : {
	      default: e
	    };
	  },
	  react_1 = (Object.defineProperty(exports, "__esModule", {
	    value: !0
	  }), exports.StageItem = void 0, __importDefault(require("react"))),
	  StageItem = function (e) {
	    var t = e.item,
	      r = e.className,
	      e = e.styles;
	    return react_1.default.createElement("li", {
	      style: e,
	      className: r
	    }, t);
	  };
	exports.StageItem = StageItem;
} (StageItem));

var DotsNavigation = {};

(function (exports) {

	var __importDefault = function (e) {
	    return e && e.__esModule ? e : {
	      default: e
	    };
	  },
	  react_1 = (Object.defineProperty(exports, "__esModule", {
	    value: !0
	  }), exports.DotsNavigation = void 0, __importDefault(require("react"))),
	  types_1 = types,
	  utils_1 = utils,
	  DotsNavigation = function (e) {
	    var a = e.state,
	      n = e.onClick,
	      r = e.onMouseEnter,
	      l = e.onMouseLeave,
	      t = e.controlsStrategy,
	      u = e.renderDotsItem,
	      c = a.itemsCount,
	      _ = a.itemsInSlide,
	      d = a.infinite,
	      e = a.autoWidth,
	      m = a.activeIndex,
	      v = (0, utils_1.getSlideItemInfo)(a).isNextSlideDisabled,
	      f = (0, utils_1.hasDotForEachSlide)(e, t),
	      D = (0, utils_1.getDotsNavigationLength)(c, _, f);
	    return react_1.default.createElement("ul", {
	      className: types_1.Classnames.DOTS
	    }, Array.from({
	      length: c
	    }).map(function (e, t) {
	      var i, s, o;
	      if (t < D) return s = (0, utils_1.checkIsTheLastDotIndex)(t, Boolean(d), D), i = (0, utils_1.getItemIndexForDotNavigation)(t, s, c, _), s = (0, utils_1.getActiveSlideIndex)(v, a), f && ((s = m) < 0 ? s = c - 1 : c <= m && (s = 0), i = t), s = s === t ? types_1.Modifiers.ACTIVE : "", o = u ? types_1.Modifiers.CUSTOM : "", o = (0, utils_1.concatClassnames)(types_1.Classnames.DOTS_ITEM, s, o), react_1.default.createElement("li", {
	        key: "dot-item-".concat(t),
	        onMouseEnter: r,
	        onMouseLeave: l,
	        onClick: function () {
	          return n(i);
	        },
	        className: o
	      }, u && u({
	        isActive: Boolean(s),
	        activeIndex: t
	      }));
	    }));
	  };
	exports.DotsNavigation = DotsNavigation;
} (DotsNavigation));

var PlayPauseButton = {};

(function (exports) {

	var __importDefault = function (e) {
	    return e && e.__esModule ? e : {
	      default: e
	    };
	  },
	  react_1 = (Object.defineProperty(exports, "__esModule", {
	    value: !0
	  }), exports.PlayPauseButton = void 0, __importDefault(require("react"))),
	  types_1 = types,
	  utils_1 = utils,
	  PlayPauseButton = function (e) {
	    var t = e.isPlaying,
	      a = e.onClick,
	      e = e.renderPlayPauseButton;
	    return "function" == typeof e ? react_1.default.createElement("div", {
	      className: types_1.Classnames.PLAY_BTN,
	      onClick: a
	    }, e({
	      isPlaying: t
	    })) : (e = t ? types_1.Modifiers.PAUSE : "", t = (0, utils_1.concatClassnames)(types_1.Classnames.PLAY_BTN_ITEM, e), react_1.default.createElement("div", {
	      className: types_1.Classnames.PLAY_BTN
	    }, react_1.default.createElement("div", {
	      className: types_1.Classnames.PLAY_BTN_WRAPPER
	    }, react_1.default.createElement("div", {
	      onClick: a,
	      className: t
	    }))));
	  };
	exports.PlayPauseButton = PlayPauseButton;
} (PlayPauseButton));

var PrevNextButton = {};

(function (exports) {

	var __importDefault = function (e) {
	    return e && e.__esModule ? e : {
	      default: e
	    };
	  },
	  react_1 = (Object.defineProperty(exports, "__esModule", {
	    value: !0
	  }), exports.PrevNextButton = void 0, __importDefault(require("react"))),
	  types_1 = types,
	  utils_1 = utils,
	  PrevNextButton = function (e) {
	    var t,
	      s = e.name,
	      a = e.isDisabled,
	      r = e.onClick,
	      n = e.renderPrevButton,
	      e = e.renderNextButton;
	    return "function" == typeof n ? react_1.default.createElement("div", {
	      className: types_1.Classnames.BUTTON_PREV,
	      onClick: r
	    }, n({
	      isDisabled: a
	    })) : "function" == typeof e ? react_1.default.createElement("div", {
	      className: types_1.Classnames.BUTTON_NEXT,
	      onClick: r
	    }, e({
	      isDisabled: a
	    })) : (e = (n = "prev" === s) ? "<" : ">", s = n ? types_1.Classnames.BUTTON_PREV : types_1.Classnames.BUTTON_NEXT, t = n ? types_1.Classnames.BUTTON_PREV_WRAPPER : types_1.Classnames.BUTTON_NEXT_WRAPPER, n = n ? types_1.Classnames.BUTTON_PREV_ITEM : types_1.Classnames.BUTTON_NEXT_ITEM, a = a ? types_1.Modifiers.INACTIVE : "", n = (0, utils_1.concatClassnames)(n, a), react_1.default.createElement("div", {
	      className: s
	    }, react_1.default.createElement("div", {
	      className: t
	    }, react_1.default.createElement("p", {
	      className: n,
	      onClick: function (e) {
	        return r(e);
	      }
	    }, react_1.default.createElement("span", {
	      "data-area": e
	    })))));
	  };
	exports.PrevNextButton = PrevNextButton;
} (PrevNextButton));

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	}), exports.PrevNextButton = exports.PlayPauseButton = exports.DotsNavigation = exports.StageItem = exports.SlideInfo = void 0;
	var SlideInfo_1 = SlideInfo,
	  StageItem_1 = (Object.defineProperty(exports, "SlideInfo", {
	    enumerable: !0,
	    get: function () {
	      return SlideInfo_1.SlideInfo;
	    }
	  }), StageItem),
	  DotsNavigation_1 = (Object.defineProperty(exports, "StageItem", {
	    enumerable: !0,
	    get: function () {
	      return StageItem_1.StageItem;
	    }
	  }), DotsNavigation),
	  PlayPauseButton_1 = (Object.defineProperty(exports, "DotsNavigation", {
	    enumerable: !0,
	    get: function () {
	      return DotsNavigation_1.DotsNavigation;
	    }
	  }), PlayPauseButton),
	  PrevNextButton_1 = (Object.defineProperty(exports, "PlayPauseButton", {
	    enumerable: !0,
	    get: function () {
	      return PlayPauseButton_1.PlayPauseButton;
	    }
	  }), PrevNextButton);
	Object.defineProperty(exports, "PrevNextButton", {
	  enumerable: !0,
	  get: function () {
	    return PrevNextButton_1.PrevNextButton;
	  }
	});
} (views));

(function (exports) {

	var __extends = function () {
	    var n = function (t, e) {
	      return (n = Object.setPrototypeOf || ({
	        __proto__: []
	      } instanceof Array ? function (t, e) {
	        t.__proto__ = e;
	      } : function (t, e) {
	        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
	      }))(t, e);
	    };
	    return function (t, e) {
	      if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
	      function i() {
	        this.constructor = t;
	      }
	      n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
	    };
	  }(),
	  __assign = function () {
	    return (__assign = Object.assign || function (t) {
	      for (var e, i = 1, n = arguments.length; i < n; i++) for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
	      return t;
	    }).apply(this, arguments);
	  },
	  __createBinding = Object.create ? function (t, e, i, n) {
	    void 0 === n && (n = i);
	    var o = Object.getOwnPropertyDescriptor(e, i);
	    o && ("get" in o ? e.__esModule : !o.writable && !o.configurable) || (o = {
	      enumerable: !0,
	      get: function () {
	        return e[i];
	      }
	    }), Object.defineProperty(t, n, o);
	  } : function (t, e, i, n) {
	    t[n = void 0 === n ? i : n] = e[i];
	  },
	  __setModuleDefault = Object.create ? function (t, e) {
	    Object.defineProperty(t, "default", {
	      enumerable: !0,
	      value: e
	    });
	  } : function (t, e) {
	    t.default = e;
	  },
	  __importStar = function (t) {
	    if (t && t.__esModule) return t;
	    var e = {};
	    if (null != t) for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && __createBinding(e, t, i);
	    return __setModuleDefault(e, t), e;
	  },
	  __exportStar = function (t, e) {
	    for (var i in t) "default" === i || Object.prototype.hasOwnProperty.call(e, i) || __createBinding(e, t, i);
	  },
	  __awaiter = function (t, a, r, l) {
	    return new (r = r || Promise)(function (i, e) {
	      function n(t) {
	        try {
	          s(l.next(t));
	        } catch (t) {
	          e(t);
	        }
	      }
	      function o(t) {
	        try {
	          s(l.throw(t));
	        } catch (t) {
	          e(t);
	        }
	      }
	      function s(t) {
	        var e;
	        t.done ? i(t.value) : ((e = t.value) instanceof r ? e : new r(function (t) {
	          t(e);
	        })).then(n, o);
	      }
	      s((l = l.apply(t, a || [])).next());
	    });
	  },
	  __generator = function (n, o) {
	    var s,
	      a,
	      r,
	      l = {
	        label: 0,
	        sent: function () {
	          if (1 & r[0]) throw r[1];
	          return r[1];
	        },
	        trys: [],
	        ops: []
	      },
	      t = {
	        next: e(0),
	        throw: e(1),
	        return: e(2)
	      };
	    return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
	      return this;
	    }), t;
	    function e(i) {
	      return function (t) {
	        var e = [i, t];
	        if (s) throw new TypeError("Generator is already executing.");
	        for (; l;) try {
	          if (s = 1, a && (r = 2 & e[0] ? a.return : e[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, e[1])).done) return r;
	          switch (a = 0, (e = r ? [2 & e[0], r.value] : e)[0]) {
	            case 0:
	            case 1:
	              r = e;
	              break;
	            case 4:
	              return l.label++, {
	                value: e[1],
	                done: !1
	              };
	            case 5:
	              l.label++, a = e[1], e = [0];
	              continue;
	            case 7:
	              e = l.ops.pop(), l.trys.pop();
	              continue;
	            default:
	              if (!(r = 0 < (r = l.trys).length && r[r.length - 1]) && (6 === e[0] || 2 === e[0])) {
	                l = 0;
	                continue;
	              }
	              if (3 === e[0] && (!r || e[1] > r[0] && e[1] < r[3])) l.label = e[1];else if (6 === e[0] && l.label < r[1]) l.label = r[1], r = e;else {
	                if (!(r && l.label < r[2])) {
	                  r[2] && l.ops.pop(), l.trys.pop();
	                  continue;
	                }
	                l.label = r[2], l.ops.push(e);
	              }
	          }
	          e = o.call(n, l);
	        } catch (t) {
	          e = [6, t], a = 0;
	        } finally {
	          s = r = 0;
	        }
	        if (5 & e[0]) throw e[1];
	        return {
	          value: e[0] ? e[1] : void 0,
	          done: !0
	        };
	      };
	    }
	  },
	  __importDefault = function (t) {
	    return t && t.__esModule ? t : {
	      default: t
	    };
	  },
	  react_1 = (Object.defineProperty(exports, "__esModule", {
	    value: !0
	  }), __importDefault(require("react"))),
	  vanilla_swipe_1 = __importDefault(lib),
	  defaultProps_1 = defaultProps,
	  Views = __importStar(views),
	  Utils = __importStar(utils),
	  types_1 = types,
	  AliceCarousel = (__exportStar(types, exports), function (e) {
	    function t(t) {
	      var s = e.call(this, t) || this;
	      return s.swipeListener = null, s._handleKeyboardEvents = function (t) {
	        switch (t.code) {
	          case "Space":
	            return s.props.autoPlay && s._handlePlayPauseToggle();
	          case "ArrowLeft":
	            return s.slidePrev(t);
	          case "ArrowRight":
	            return s.slideNext(t);
	        }
	      }, s._handleBeforeSlideEnd = function (o) {
	        return __awaiter(s, void 0, void 0, function () {
	          var e, i, n;
	          return __generator(this, function (t) {
	            switch (t.label) {
	              case 0:
	                return (i = this.state, n = i.activeIndex, e = i.itemsCount, i = i.fadeoutAnimationProcessing, Utils.shouldRecalculateSlideIndex(n, e)) ? (n = Utils.getUpdateSlidePositionIndex(n, e), [4, this._handleUpdateSlidePosition(n)]) : [3, 2];
	              case 1:
	                return t.sent(), [3, 4];
	              case 2:
	                return i ? [4, this.setState({
	                  fadeoutAnimationIndex: null,
	                  fadeoutAnimationPosition: null,
	                  fadeoutAnimationProcessing: !1
	                })] : [3, 4];
	              case 3:
	                t.sent(), t.label = 4;
	              case 4:
	                return this._handleSlideChanged(o), [2];
	            }
	          });
	        });
	      }, s._handleMouseEnter = function () {
	        var t = s.props.autoPlayStrategy;
	        Utils.shouldCancelAutoPlayOnHover(t) && s.state.isAutoPlaying && (s.isHovered = !0, s._handlePause());
	      }, s._handleMouseLeave = function () {
	        s.state.isAutoPlaying && (s.isHovered = !1, s._handlePlay());
	      }, s._handlePause = function () {
	        s._clearAutoPlayTimeout();
	      }, s._handlePlayPauseToggle = function () {
	        return __awaiter(s, void 0, void 0, function () {
	          var e;
	          return __generator(this, function (t) {
	            switch (t.label) {
	              case 0:
	                return e = this.state.isAutoPlaying, this.hasUserAction = !0, [4, this.setState({
	                  isAutoPlaying: !e,
	                  isAutoPlayCanceledOnAction: !0
	                })];
	              case 1:
	                return t.sent(), e ? this._handlePause() : this._handlePlay(), [2];
	            }
	          });
	        });
	      }, s._setRootComponentRef = function (t) {
	        return s.rootElement = t;
	      }, s._setStageComponentRef = function (t) {
	        return s.stageComponent = t;
	      }, s._renderStageItem = function (t, e) {
	        var i = Utils.getRenderStageItemStyles(e, s.state),
	          n = Utils.getRenderStageItemClasses(e, s.state);
	        return react_1.default.createElement(Views.StageItem, {
	          styles: i,
	          className: n,
	          key: "stage-item-".concat(e),
	          item: t
	        });
	      }, s._renderSlideInfo = function () {
	        var t = s.props.renderSlideInfo,
	          e = s.state,
	          i = e.activeIndex,
	          e = e.itemsCount;
	        return react_1.default.createElement(Views.SlideInfo, {
	          itemsCount: e,
	          activeIndex: i,
	          renderSlideInfo: t
	        });
	      }, s.state = Utils.calculateInitialState(t, null), s.isHovered = !1, s.isAnimationDisabled = !1, s.isTouchMoveProcessStarted = !1, s.cancelTouchAnimations = !1, s.hasUserAction = !1, s.rootElement = null, s.rootComponentDimensions = {}, s.stageComponent = null, s.startTouchmovePosition = void 0, s.slideTo = s.slideTo.bind(s), s.slidePrev = s.slidePrev.bind(s), s.slideNext = s.slideNext.bind(s), s._handleTouchmove = s._handleTouchmove.bind(s), s._handleTouchend = s._handleTouchend.bind(s), s._handleDotClick = s._handleDotClick.bind(s), s._handleResize = s._handleResize.bind(s), t = Utils.debounce(s._handleResize, 100), s._handleResizeDebounced = t[0], s._cancelResizeDebounced = t[1], s;
	    }
	    return __extends(t, e), t.prototype.componentDidMount = function () {
	      return __awaiter(this, void 0, void 0, function () {
	        return __generator(this, function (t) {
	          switch (t.label) {
	            case 0:
	              return [4, this._setInitialState()];
	            case 1:
	              return t.sent(), this._addEventListeners(), this._setupSwipeHandlers(), this.props.autoPlay && this._handlePlay(), [2];
	          }
	        });
	      });
	    }, t.prototype.componentDidUpdate = function (t, e) {
	      var i = this.props,
	        n = i.activeIndex,
	        o = i.animationDuration,
	        s = i.autoWidth,
	        a = i.children,
	        r = i.infinite,
	        l = i.items,
	        u = i.paddingLeft,
	        d = i.paddingRight,
	        c = i.responsive,
	        h = i.swipeExtraPadding,
	        p = i.mouseTracking,
	        _ = i.swipeDelta,
	        m = i.touchTracking,
	        i = i.touchMoveDefaultEvents;
	      a && t.children !== a ? (a = e.activeIndex, e = __assign(__assign({}, this.props), {
	        activeIndex: a
	      }), this._updateComponent(e)) : t.autoWidth !== s || t.infinite !== r || t.items !== l || t.paddingLeft !== u || t.paddingRight !== d || t.responsive !== c || t.swipeExtraPadding !== h ? this._updateComponent() : (t.animationDuration !== o && this.setState({
	        animationDuration: o
	      }), t.activeIndex !== n && this.slideTo(n, types_1.EventType.UPDATE)), t.swipeDelta === _ && t.mouseTracking === p && t.touchTracking === m && t.touchMoveDefaultEvents === i || this._updateSwipeProps(), this.props.keyboardNavigation !== t.keyboardNavigation && this._updateEventListeners();
	    }, t.prototype.componentWillUnmount = function () {
	      this._cancelResizeDebounced(), this._cancelTimeoutAnimations(), this._removeEventListeners();
	    }, Object.defineProperty(t.prototype, "eventObject", {
	      get: function () {
	        var t = this.state,
	          e = t.itemsInSlide,
	          t = t.activeIndex,
	          i = Utils.getSlideItemInfo(this.state),
	          n = i.isNextSlideDisabled,
	          i = i.isPrevSlideDisabled;
	        return {
	          item: t,
	          slide: Utils.getActiveSlideIndex(n, this.state),
	          itemsInSlide: e,
	          isNextSlideDisabled: n,
	          isPrevSlideDisabled: i,
	          type: types_1.EventType.ACTION
	        };
	      },
	      enumerable: !1,
	      configurable: !0
	    }), Object.defineProperty(t.prototype, "isFadeoutAnimationAllowed", {
	      get: function () {
	        var t = this.state.itemsInSlide,
	          e = this.props,
	          i = e.animationType,
	          n = e.paddingLeft,
	          o = e.paddingRight,
	          e = e.autoWidth;
	        return 1 === t && i === types_1.AnimationType.FADEOUT && !(n || o || e);
	      },
	      enumerable: !1,
	      configurable: !0
	    }), Object.defineProperty(t.prototype, "touchmovePosition", {
	      get: function () {
	        return void 0 !== this.startTouchmovePosition ? this.startTouchmovePosition : this.state.translate3d;
	      },
	      enumerable: !1,
	      configurable: !0
	    }), t.prototype.slideTo = function (t, e) {
	      var i, n, o;
	      void 0 === t && (t = 0), this._handlePause(), this.isFadeoutAnimationAllowed ? (i = Utils.getUpdateSlidePositionIndex(t, this.state.itemsCount), n = Utils.getFadeoutAnimationPosition(i, this.state), o = Utils.getFadeoutAnimationIndex(this.state), this._handleSlideTo({
	        activeIndex: i,
	        fadeoutAnimationIndex: o,
	        fadeoutAnimationPosition: n,
	        eventType: e
	      })) : this._handleSlideTo({
	        activeIndex: t,
	        eventType: e
	      });
	    }, t.prototype.slidePrev = function (t) {
	      this._handlePause(), t && t.isTrusted && (this.hasUserAction = !0);
	      var e,
	        i,
	        t = this.state.activeIndex - 1;
	      this.isFadeoutAnimationAllowed ? (e = -this.state.stageWidth, i = Utils.getFadeoutAnimationIndex(this.state), this._handleSlideTo({
	        activeIndex: t,
	        fadeoutAnimationIndex: i,
	        fadeoutAnimationPosition: e
	      })) : this._handleSlideTo({
	        activeIndex: t
	      });
	    }, t.prototype.slideNext = function (t) {
	      this._handlePause(), t && t.isTrusted && (this.hasUserAction = !0);
	      var e,
	        i,
	        t = this.state.activeIndex + 1;
	      this.isFadeoutAnimationAllowed ? (e = this.state.stageWidth, i = Utils.getFadeoutAnimationIndex(this.state), this._handleSlideTo({
	        activeIndex: t,
	        fadeoutAnimationIndex: i,
	        fadeoutAnimationPosition: e
	      })) : this._handleSlideTo({
	        activeIndex: t
	      });
	    }, t.prototype._addEventListeners = function () {
	      window.addEventListener("resize", this._handleResizeDebounced), this.props.keyboardNavigation && window.addEventListener("keyup", this._handleKeyboardEvents);
	    }, t.prototype._removeEventListeners = function () {
	      this.swipeListener && this.swipeListener.destroy(), window.removeEventListener("resize", this._handleResizeDebounced), window.removeEventListener("keyup", this._handleKeyboardEvents);
	    }, t.prototype._updateEventListeners = function () {
	      this.props.keyboardNavigation ? window.addEventListener("keyup", this._handleKeyboardEvents) : window.removeEventListener("keyup", this._handleKeyboardEvents);
	    }, t.prototype._handleResize = function (o) {
	      return __awaiter(this, void 0, void 0, function () {
	        var e, i, n;
	        return __generator(this, function (t) {
	          switch (t.label) {
	            case 0:
	              return (i = this.props.onResizeEvent, n = Utils.getElementDimensions(this.rootElement), (i || Utils.shouldHandleResizeEvent)(o, this.rootComponentDimensions, n)) ? (this._cancelTimeoutAnimations(), this.rootComponentDimensions = n, i = this.state, n = i.itemsCount, e = i.isAutoPlaying, i = Utils.getUpdateSlidePositionIndex(this.state.activeIndex, n), n = Utils.calculateInitialState(__assign(__assign({}, this.props), {
	                activeIndex: i
	              }), this.stageComponent), i = Utils.getTranslate3dProperty(n.activeIndex, n), n = __assign(__assign({}, n), {
	                translate3d: i,
	                isAutoPlaying: e
	              }), Utils.animate(this.stageComponent, {
	                position: -i
	              }), [4, this.setState(n)]) : [3, 2];
	            case 1:
	              t.sent(), this._handleResized(), this.isAnimationDisabled = !1, e && this._handlePlay(), t.label = 2;
	            case 2:
	              return [2];
	          }
	        });
	      });
	    }, t.prototype._handleTouchmove = function (t, e) {
	      var i = e.absY,
	        n = e.absX,
	        o = e.deltaX,
	        e = this.props.swipeDelta,
	        s = this.state,
	        a = s.swipeShiftValue,
	        r = s.swipeLimitMin,
	        l = s.swipeLimitMax,
	        u = s.infinite,
	        s = s.fadeoutAnimationProcessing;
	      if (this.hasUserAction = !0, !(s || !this.isTouchMoveProcessStarted && Utils.isVerticalTouchmoveDetected(n, i, e))) {
	        this.isTouchMoveProcessStarted || (this._cancelTimeoutAnimations(), this._setTouchmovePosition(), this.isAnimationDisabled = !0, this.isTouchMoveProcessStarted = !0, this._handleSlideChange());
	        var d = Utils.getTouchmoveTranslatePosition(o, this.touchmovePosition);
	        if (!1 === u) return r < d || d < -l ? void 0 : void Utils.animate(this.stageComponent, {
	          position: d
	        });
	        if (Utils.shouldRecalculateSwipePosition(d, r, l)) try {
	          !function t() {
	            Utils.getIsLeftDirection(o) ? d += a : d += -a;
	            Utils.shouldRecalculateSwipePosition(d, r, l) && t();
	          }();
	        } catch (t) {
	          Utils.debug(t);
	        }
	        Utils.animate(this.stageComponent, {
	          position: d
	        });
	      }
	    }, t.prototype._handleTouchend = function (t, e) {
	      var i,
	        n,
	        o,
	        e = e.deltaX;
	      this._clearTouchmovePosition(), this.isTouchMoveProcessStarted && (this.isTouchMoveProcessStarted = !1, i = this.state.animationDuration, n = this.props.animationEasingFunction, o = Utils.getTranslateXProperty(this.stageComponent), e = Utils.getSwipeTouchendPosition(this.state, e, o), Utils.animate(this.stageComponent, {
	        position: e,
	        animationDuration: i,
	        animationEasingFunction: n
	      }), this._handleBeforeTouchEnd(e));
	    }, t.prototype._handleBeforeTouchEnd = function (s) {
	      var t = this,
	        e = this.state.animationDuration;
	      this.touchEndTimeoutId = window.setTimeout(function () {
	        return __awaiter(t, void 0, void 0, function () {
	          var e,
	            i,
	            n,
	            o = this;
	          return __generator(this, function (t) {
	            switch (t.label) {
	              case 0:
	                return e = Utils.getSwipeTouchendIndex(s, this.state), i = Utils.getTranslate3dProperty(e, this.state), Utils.animate(this.stageComponent, {
	                  position: -i
	                }), n = Utils.getTransitionProperty(), [4, this.setState({
	                  activeIndex: e,
	                  translate3d: i,
	                  transition: n
	                })];
	              case 1:
	                return t.sent(), requestAnimationFrame(function () {
	                  return o._handleSlideChanged();
	                }), [2];
	            }
	          });
	        });
	      }, e);
	    }, t.prototype._handleSlideTo = function (t) {
	      var e = t.activeIndex,
	        a = void 0 === e ? 0 : e,
	        e = t.fadeoutAnimationIndex,
	        r = void 0 === e ? null : e,
	        e = t.fadeoutAnimationPosition,
	        l = void 0 === e ? null : e,
	        u = t.eventType;
	      return __awaiter(this, void 0, void 0, function () {
	        var e,
	          i,
	          n,
	          o,
	          s = this;
	        return __generator(this, function (t) {
	          switch (t.label) {
	            case 0:
	              return (i = this.props, n = i.infinite, i = i.animationEasingFunction, e = this.state, o = e.itemsCount, e = e.animationDuration, this.isAnimationDisabled || this.state.activeIndex === a || !n && Utils.shouldCancelSlideAnimation(a, o)) ? [2] : (this.isAnimationDisabled = !0, this._cancelTimeoutAnimations(), this._handleSlideChange(u), n = !1, o = Utils.getTranslate3dProperty(a, this.state), i = null !== r && null !== l ? (n = !0, Utils.getTransitionProperty()) : Utils.getTransitionProperty({
	                animationDuration: e,
	                animationEasingFunction: i
	              }), [4, this.setState({
	                activeIndex: a,
	                transition: i,
	                translate3d: o,
	                animationDuration: e,
	                fadeoutAnimationIndex: r,
	                fadeoutAnimationPosition: l,
	                fadeoutAnimationProcessing: n
	              })]);
	            case 1:
	              return t.sent(), this.slideEndTimeoutId = window.setTimeout(function () {
	                return s._handleBeforeSlideEnd(u);
	              }, e), [2];
	          }
	        });
	      });
	    }, t.prototype._handleUpdateSlidePosition = function (o) {
	      return __awaiter(this, void 0, void 0, function () {
	        var e, i, n;
	        return __generator(this, function (t) {
	          switch (t.label) {
	            case 0:
	              return e = this.state.animationDuration, i = Utils.getTranslate3dProperty(o, this.state), n = Utils.getTransitionProperty({
	                animationDuration: 0
	              }), [4, this.setState({
	                activeIndex: o,
	                translate3d: i,
	                transition: n,
	                animationDuration: e,
	                fadeoutAnimationIndex: null,
	                fadeoutAnimationPosition: null,
	                fadeoutAnimationProcessing: !1
	              })];
	            case 1:
	              return t.sent(), [2];
	          }
	        });
	      });
	    }, t.prototype._handleResized = function () {
	      this.props.onResized && this.props.onResized(__assign(__assign({}, this.eventObject), {
	        type: types_1.EventType.RESIZE
	      }));
	    }, t.prototype._handleSlideChange = function (t) {
	      this.props.onSlideChange && (t = t ? __assign(__assign({}, this.eventObject), {
	        type: t
	      }) : this.eventObject, this.props.onSlideChange(t));
	    }, t.prototype._handleSlideChanged = function (s) {
	      return __awaiter(this, void 0, void 0, function () {
	        var e, i, n, o;
	        return __generator(this, function (t) {
	          switch (t.label) {
	            case 0:
	              return (i = this.state, e = i.isAutoPlaying, i = i.isAutoPlayCanceledOnAction, n = this.props, o = n.autoPlayStrategy, n = n.onSlideChanged, Utils.shouldCancelAutoPlayOnAction(o) && this.hasUserAction && !i) ? [4, this.setState({
	                isAutoPlayCanceledOnAction: !0,
	                isAutoPlaying: !1
	              })] : [3, 2];
	            case 1:
	              return t.sent(), [3, 3];
	            case 2:
	              e && this._handlePlay(), t.label = 3;
	            case 3:
	              return this.isAnimationDisabled = !1, n && (o = s ? __assign(__assign({}, this.eventObject), {
	                type: s
	              }) : this.eventObject, n(o)), [2];
	          }
	        });
	      });
	    }, t.prototype._handleDotClick = function (t) {
	      this.hasUserAction = !0, this.slideTo(t);
	    }, t.prototype._handlePlay = function () {
	      this._setAutoPlayInterval();
	    }, t.prototype._cancelTimeoutAnimations = function () {
	      this._clearAutoPlayTimeout(), this._clearSlideEndTimeout(), this.clearTouchendTimeout();
	    }, t.prototype._clearAutoPlayTimeout = function () {
	      window.clearTimeout(this.autoPlayTimeoutId), this.autoPlayTimeoutId = void 0;
	    }, t.prototype._clearSlideEndTimeout = function () {
	      clearTimeout(this.slideEndTimeoutId), this.slideEndTimeoutId = void 0;
	    }, t.prototype.clearTouchendTimeout = function () {
	      clearTimeout(this.touchEndTimeoutId), this.touchEndTimeoutId = void 0;
	    }, t.prototype._clearTouchmovePosition = function () {
	      this.startTouchmovePosition = void 0;
	    }, t.prototype._setTouchmovePosition = function () {
	      var t = Utils.getTranslateXProperty(this.stageComponent);
	      this.startTouchmovePosition = -t;
	    }, t.prototype._setInitialState = function () {
	      return __awaiter(this, void 0, void 0, function () {
	        var e;
	        return __generator(this, function (t) {
	          switch (t.label) {
	            case 0:
	              return e = Utils.calculateInitialState(this.props, this.stageComponent), this.rootComponentDimensions = Utils.getElementDimensions(this.rootElement), [4, this.setState(e)];
	            case 1:
	              return t.sent(), this.props.onInitialized && this.props.onInitialized(__assign(__assign({}, this.eventObject), {
	                type: types_1.EventType.INIT
	              })), [2];
	          }
	        });
	      });
	    }, t.prototype._setAutoPlayInterval = function () {
	      var t = this,
	        e = this.props,
	        i = e.autoPlayDirection,
	        e = e.autoPlayInterval;
	      this.autoPlayTimeoutId = window.setTimeout(function () {
	        t.isHovered || (i === types_1.AutoplayDirection.RTL ? t.slidePrev() : t.slideNext());
	      }, e);
	    }, t.prototype._setupSwipeHandlers = function () {
	      this.swipeListener = new vanilla_swipe_1.default({
	        element: this.rootElement,
	        delta: this.props.swipeDelta,
	        onSwiping: this._handleTouchmove,
	        onSwiped: this._handleTouchend,
	        rotationAngle: 5,
	        mouseTrackingEnabled: this.props.mouseTracking,
	        touchTrackingEnabled: this.props.touchTracking,
	        preventDefaultTouchmoveEvent: !this.props.touchMoveDefaultEvents,
	        preventTrackingOnMouseleave: !0
	      }), this.swipeListener.init();
	    }, t.prototype._updateComponent = function (t) {
	      var e = this;
	      void 0 === t && (t = this.props), this._cancelTimeoutAnimations(), this.isAnimationDisabled = !1, this.state.isAutoPlaying && this._handlePlay(), this.setState({
	        clones: Utils.createClones(t)
	      }), requestAnimationFrame(function () {
	        e.setState(Utils.calculateInitialState(t, e.stageComponent));
	      });
	    }, t.prototype._updateSwipeProps = function () {
	      this.swipeListener && this.swipeListener.update({
	        delta: this.props.swipeDelta,
	        mouseTrackingEnabled: this.props.mouseTracking,
	        touchTrackingEnabled: this.props.touchTracking,
	        preventDefaultTouchmoveEvent: !this.props.touchMoveDefaultEvents
	      });
	    }, t.prototype._renderDotsNavigation = function () {
	      var t = this.props,
	        e = t.renderDotsItem,
	        t = t.controlsStrategy;
	      return react_1.default.createElement(Views.DotsNavigation, {
	        state: this.state,
	        onClick: this._handleDotClick,
	        renderDotsItem: e,
	        controlsStrategy: t
	      });
	    }, t.prototype._renderPrevButton = function () {
	      var t = this.props.renderPrevButton,
	        e = Utils.getSlideItemInfo(this.state).isPrevSlideDisabled;
	      return react_1.default.createElement(Views.PrevNextButton, {
	        name: "prev",
	        onClick: this.slidePrev,
	        isDisabled: e,
	        renderPrevButton: t
	      });
	    }, t.prototype._renderNextButton = function () {
	      var t = this.props.renderNextButton,
	        e = Utils.getSlideItemInfo(this.state).isNextSlideDisabled;
	      return react_1.default.createElement(Views.PrevNextButton, {
	        name: "next",
	        onClick: this.slideNext,
	        isDisabled: e,
	        renderNextButton: t
	      });
	    }, t.prototype._renderPlayPauseButton = function () {
	      var t = this.props.renderPlayPauseButton,
	        e = this.state.isAutoPlaying;
	      return react_1.default.createElement(Views.PlayPauseButton, {
	        isPlaying: e,
	        onClick: this._handlePlayPauseToggle,
	        renderPlayPauseButton: t
	      });
	    }, t.prototype.render = function () {
	      var t = this.state,
	        e = t.translate3d,
	        i = t.clones,
	        n = t.transition,
	        t = t.canUseDom,
	        o = Utils.shouldDisableDots(this.props, this.state),
	        s = Utils.shouldDisableButtons(this.props, this.state),
	        a = Utils.getRenderWrapperStyles(this.props, this.state, this.stageComponent),
	        e = Utils.getRenderStageStyles({
	          translate3d: e
	        }, {
	          transition: n
	        }),
	        n = this.props.ssrSilentMode || t ? "" : types_1.Modifiers.SSR,
	        t = Utils.concatClassnames(types_1.Classnames.ROOT, n);
	      return react_1.default.createElement("div", {
	        className: t
	      }, react_1.default.createElement("div", {
	        ref: this._setRootComponentRef
	      }, react_1.default.createElement("div", {
	        style: a,
	        className: types_1.Classnames.WRAPPER,
	        onMouseEnter: this._handleMouseEnter,
	        onMouseLeave: this._handleMouseLeave
	      }, react_1.default.createElement("ul", {
	        style: e,
	        className: types_1.Classnames.STAGE,
	        ref: this._setStageComponentRef
	      }, i.map(this._renderStageItem)))), o ? null : this._renderDotsNavigation(), s ? null : this._renderPrevButton(), s ? null : this._renderNextButton(), this.props.disableSlideInfo ? null : this._renderSlideInfo(), this.props.autoPlayControls ? this._renderPlayPauseButton() : null);
	    }, t.defaultProps = defaultProps_1.defaultProps, t;
	  }(react_1.default.PureComponent));
	exports.default = AliceCarousel;
} (reactAliceCarousel));

var AliceCarousel = /*@__PURE__*/getDefaultExportFromCjs(reactAliceCarousel);

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function parse(uuid) {
  if (!validate(uuid)) {
    throw TypeError('Invalid UUID');
  }
  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];
  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}
const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }
    if (typeof namespace === 'string') {
      namespace = parse(namespace);
    }
    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`

    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;
    if (buf) {
      offset = offset || 0;
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }
      return buf;
    }
    return unsafeStringify(bytes);
  } // Function#name is not settable on some platforms (#270)

  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support

  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);
    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }
  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */

function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = '0123456789abcdef';
  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 0xff;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }
  return output;
}
/**
 * Calculate output length with padding and bit length
 */

function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */

function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;
  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }
  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */

function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }
  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));
  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }
  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */

function safeAdd(x, y) {
  const lsw = (x & 0xffff) + (y & 0xffff);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */

function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */

function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

v35('v3', 0x30, md5);

const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID
};

function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}

// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;
    case 1:
      return x ^ y ^ z;
    case 2:
      return x & y ^ x & z ^ y & z;
    case 3:
      return x ^ y ^ z;
  }
}
function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}
function sha1(bytes) {
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];
    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }
  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);
  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);
    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }
    M[i] = arr;
  }
  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;
  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);
    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }
    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }
    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];
    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }
    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }
  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

v35('v5', 0x50, sha1);

/*
 rebuilt responsive object depending on the container width
 using the ratio of the width of the box to the width of the window
*/
const getNewResponsiveValues = (rate, defaultResponsive) => {
  let newResponsive = {};
  let keys = Object.keys(defaultResponsive);
  keys.forEach(key => {
    let newValue = Math.round(defaultResponsive[key].items / rate);
    newResponsive[key] = {
      items: Math.max(newValue, 1)
    };
  });
  return newResponsive;
};

/*
    Constants
*/
const statusList = {
  reset: "reset",
  goLast: "goLast",
  next: "next",
  prev: "prev"
};
const classesAction = {
  add: "add",
  remove: "remove"
};
const commonClasses = {
  multi_container: "multi-carousel__container",
  multi_empty_container: "multi-carousel__empty-container",
  item: "multi-carousel__item",
  active: "multi-carousel__active",
  no_dots: "multi-carousel__no-dots",
  error: "multi-carousel__error",
  loading: "multi-carousel__loading"
};
const normalCarouselClasses = {
  normal_container: "normal-carousel__container",
  normal_item: "normal-carousel__item"
};
const activeClickClasses = {
  active_click_container: "active-click-carousel__container",
  active_click_item: "active-click-carousel__item",
  active_click_with_btn: "active-click-carousel__with-btn"
};
const activeSlideClasses = {
  active_slide_container: "active-slide-carousel__container",
  active_slide_wrapper: "active-slide-carousel__wrapper",
  first_item: "active-slide-carousel__first-item",
  last_item: "active-slide-carousel__last-item",
  prev_btn: "active-slide-carousel__prev-btn",
  next_btn: "active-slide-carousel__next-btn"
};

function NormalCarousel(props) {
  const carouselParent = useRef();
  const [carousel_items, set_carousel_items] = useState([]);
  const [responsive, setResponsive] = useState({
    ...props.defaultResponsive
  });
  const [uniqueClass, setUniqueClass] = useState("");

  /*
      this method built to handle if the carousel has been rendered inside a container
      that is not covering the window's full width
  */
  const setNewResponsive = () => {
    let rate = window.innerWidth / carouselParent.current.clientWidth;
    if (rate > 1.35) {
      let newResponsive = getNewResponsiveValues(rate, props.defaultResponsive);
      setResponsive({
        ...newResponsive
      });
    } else {
      setResponsive({
        ...props.defaultResponsive
      });
    }
  };
  const addOrRemoveClassName = (node, action) => {
    if (action === classesAction.remove) {
      node?.classList?.remove(commonClasses.active);
    } else {
      node?.classList?.add(commonClasses.active);
    }
  };

  /*
      in case of "infinite" carousel the node will be node list "Array"
      because the carousel create a copy of all the items
      that why we need change the active class on both nodes - the carousel render both -
      and with no "infinite" the node list will be length of "1"
  */
  const changeActiveClass = (node, action) => {
    if (node?.length) {
      node.forEach(item => {
        addOrRemoveClassName(item, action);
      });
    }
  };

  /*
      idx-"" is the common unique class between original item and the cloned one
  */
  const getIdxClassName = e => {
    let clickedItem = e.target;

    // in case of clicking element inside the item we need the main div with "idx-" class name
    while (clickedItem) {
      if (clickedItem.classList.contains(commonClasses.item)) break;
      clickedItem = clickedItem.parentNode;
    }
    let classNames = clickedItem.className.split(" ");
    return classNames?.filter(item => item.includes("idx"))?.[0];
  };
  const onCardClicked = (e, action) => {
    if (action?.canExecute) action.execute();

    // remove active class from original and cloned item
    let activeNode = document.querySelector(`.${uniqueClass}`)?.querySelectorAll(`.${commonClasses.active}`);
    changeActiveClass(activeNode, classesAction.remove);
    let idxClass = getIdxClassName(e);

    // add active class for both original and cloned item
    let itemToSetActive = document.querySelector(`.${uniqueClass}`)?.querySelectorAll(`.${idxClass}`);
    changeActiveClass(itemToSetActive, classesAction.add);
  };

  /*
    set the active item after the carousel has already been initialized or resized
    NOTE: the carousel moves to the beginning when the carousel resized
  */
  const onInitializedOrResized = () => {
    if (props.carouselType === "active") {
      let firstCarouselItem = document.querySelector(`.${uniqueClass}`)?.querySelector(".idx-0");
      if (!firstCarouselItem?.classList?.contains(commonClasses.active)) {
        firstCarouselItem?.click();
      }
    }
  };
  useEffect(() => {
    // set a unique class in case of using two different carousel instances in the same document
    setUniqueClass("a-" + v4());
    if (!carouselParent.current) return;

    // handle resize window or carousel container
    const resizeObserver = new ResizeObserver(() => {
      setNewResponsive();
    });
    resizeObserver.observe(carouselParent.current);
    return () => resizeObserver.disconnect();
  }, []);
  useEffect(() => {
    if (props.data?.status === "available" && !carousel_items?.length) {
      set_carousel_items(props.data.items.map((item, i) => createElement("div", {
        key: i,
        onClick: props.carouselType === "active" ? e => onCardClicked(e, props.action?.get(item)) : undefined,
        className: `${commonClasses.item} idx-${i} ${props.carouselType === "active" ? activeClickClasses.active_click_item : normalCarouselClasses.normal_item}`
      }, props.content.get(item))));
    }
  }, [props.data]);
  return createElement("div", {
    className: [commonClasses.multi_container, uniqueClass, props.carouselType === "active" ? activeClickClasses.active_click_container : normalCarouselClasses.normal_container, props.disableDotsControls ? commonClasses.no_dots : "", !props.disableButtonsControls && props.carouselType === "active" ? activeClickClasses.active_click_with_btn : ""].join(" "),
    ref: carouselParent
  }, carousel_items?.length ? createElement(AliceCarousel, {
    items: carousel_items,
    responsive: responsive,
    infinite: props.infinite,
    autoPlay: props.autoPlay,
    autoPlayDirection: props.autoPlayDirection,
    autoPlayControls: props.autoPlayControls,
    disableButtonsControls: props.disableButtonsControls,
    disableDotsControls: props.disableDotsControls,
    animationDuration: props.animationDuration,
    animationType: props.animationType,
    keyboardNavigation: props.keyboardNavigation,
    mouseTracking: props.mouseTracking,
    touchTracking: props.touchTracking,
    onInitialized: onInitializedOrResized,
    onResized: onInitializedOrResized
  }) : createElement("div", {
    className: commonClasses.multi_empty_container
  }));
}

function ActiveSlideCarousel(props) {
  const sliderContainer = useRef();
  const [carousel_items, set_carousel_items] = useState([]);
  const [responsive, setResponsive] = useState(null);
  const [uniqueClass, setUniqueClass] = useState("");
  const [currentActiveIdx, setCurrentActiveIdx] = useState(0);
  const [numberOfDisplayedItems, setNumberOfDisplayedItems] = useState(0);
  const [numberOfAllItems, setNumberOfAllItems] = useState(0);

  // get the 'react-alice-carousel' built-in all method and properties
  const [carouselProperties, setCarouselProperties] = useState(null);

  /*
      this method built to handle if the carousel has been rendered inside a container
      that is not covering the window's full width
  */
  const setNewResponsive = () => {
    let rate = window.innerWidth / sliderContainer?.current?.clientWidth;
    if (rate > 1.4) {
      let newResponsive = getNewResponsiveValues(rate, props.defaultResponsive);
      setResponsive({
        ...newResponsive
      });
    } else {
      setResponsive({
        ...props.defaultResponsive
      });
    }
  };

  /*
      Fired when reach the end of the slider or when resize the carousel
      => move to the first item
  */
  const resetSlider = () => {
    setCurrentActiveIdx(0);
    setActiveClass(statusList.reset, null, 0);
  };

  /*
     Fired when ge back when step from the first item
     => move to the last item
  */
  const slideToTheEnd = () => {
    carouselProperties?.slideTo(numberOfAllItems - numberOfDisplayedItems + 1);
    setActiveClass(statusList.goLast, null, numberOfAllItems);
    setCurrentActiveIdx(numberOfAllItems);
  };

  /*
      Fired when clicking "previous" button
  */
  const prevClicked = () => {
    if (!currentActiveIdx) {
      // currentActiveIdx === 0, the active item is the first one, move to the last
      slideToTheEnd();
    } else {
      setActiveClass(statusList.prev, carouselProperties?.slidePrev, currentActiveIdx - 1);
      setCurrentActiveIdx(currentActiveIdx - 1);
    }
  };

  /*
      Fired when clicking "Next" button
  */
  const nextClicked = () => {
    if (currentActiveIdx === numberOfAllItems) {
      // the active item is the last one, move to the first
      carouselProperties?.slideTo(0);
      resetSlider();
    } else {
      setActiveClass(statusList.next, carouselProperties?.slideNext, currentActiveIdx + 1);
      setCurrentActiveIdx(currentActiveIdx + 1);
    }
  };

  /*
      Remove previous active item and get the index of the item that we want to set it active
  */
  const removeActiveClass = (status, allItems) => {
    let itemIdxToSetActive = 0;
    for (let i = 0; i < allItems?.length; i++) {
      // get the index of the item that we want to set it active in the "all items" array
      // NOTE: we can't use the state "currentActiveIdx" because "allItems" is containing the cloned item also
      if (allItems[i].classList?.contains(commonClasses.active) && !allItems[i]?.parentElement?.classList?.contains("__cloned")) {
        // if next pressed will be the next index, if previous pressed will be the previous index
        itemIdxToSetActive = status === statusList.next ? i + 1 : i - 1;
      }
      allItems[i].classList?.remove(commonClasses.active);
    }
    return itemIdxToSetActive;
  };

  /*
      setting the curren active class, and slide left or right when needed
  */
  const setActiveClass = (status, slideLeftOrRight, actionIdx) => {
    let allItems = document.querySelector(`.${uniqueClass}`)?.querySelectorAll(`.${commonClasses.item}`);
    let itemIdxToSetActive = removeActiveClass(status, allItems);

    // Set current active item
    if (status === statusList.reset) {
      // querySelectorAll ==> the original item and the cloned one
      // in this case the first one is the original -"react-alice-carouse" way of work-
      let firstSlide = document.querySelector(`.${uniqueClass}`)?.querySelectorAll(`.${activeSlideClasses.first_item}`);
      firstSlide[0]?.classList?.add(commonClasses.active);
    } else if (status === statusList.goLast) {
      // querySelectorAll ==> the original item and the cloned one
      // in this case the second one is the original -"react-alice-carouse" way of work-
      let lastSlide = document.querySelector(`.${uniqueClass}`)?.querySelectorAll(`.${activeSlideClasses.last_item}`);
      lastSlide[1]?.classList?.add(commonClasses.active);
    } else {
      // not containing active means that the next/prev item is not appearing in the screen right now
      // slide when reach to the start/end of the active item
      if (!allItems[itemIdxToSetActive]?.parentElement?.classList?.contains("__active")) {
        slideLeftOrRight();
      }
      allItems[itemIdxToSetActive]?.classList?.add(commonClasses.active);
    }

    // fire the action that related to the new active item
    let actionToFire = props.action?.get(props.data.items?.[actionIdx]);
    onSlideClicked(actionToFire);
  };

  /*
      fired when initialization the carousel
  */
  const onCarouselInit = e => {
    setNumberOfDisplayedItems(e.itemsInSlide);
    setResponsive({
      ...responsive
    });
    let firstItemAction = props.action?.get(props.data.items?.[0]);
    onSlideClicked(firstItemAction);
  };

  /*
      fired when resizing the carousel, carousel will always slide to the first item when resizing -"react-alice-carouse" way of work-
  */
  const onCarouselResize = e => {
    setNumberOfDisplayedItems(e.itemsInSlide);
    setNewResponsive();
    resetSlider();
  };

  /*
      fired the current active item action if found
  */
  const onSlideClicked = action => {
    if (action?.canExecute) action.execute();
  };
  useEffect(() => {
    if (props.data?.status === "available" && !carousel_items?.length) {
      let newData = props.data.items.map((item, idx) => createElement("div", {
        key: idx,
        className: `${commonClasses.item} ${idx === 0 ? activeSlideClasses.first_item + " " + commonClasses.active : ""} ${idx === props.data.items.length - 1 ? activeSlideClasses.last_item : ""}`
      }, props.content.get(item)));
      setNumberOfAllItems(newData.length - 1);
      set_carousel_items(newData);
    }
  }, [props.data]);
  useEffect(() => {
    // set a unique class in case of using two different carousel instances in the same document
    setUniqueClass("a-" + v4());
  }, []);

  /*
      set the responsive object after initialize the container so it take the correct dimensions
  */
  const carouselContainer = useCallback(node => {
    if (node) setNewResponsive();
  }, []);
  return carousel_items?.length ? createElement("div", {
    className: activeSlideClasses.active_slide_container,
    ref: carouselContainer
  }, createElement("button", {
    className: activeSlideClasses.prev_btn,
    onClick: prevClicked
  }), createElement("div", {
    className: [uniqueClass, activeSlideClasses.active_slide_wrapper].join(" "),
    ref: sliderContainer
  }, responsive && createElement(AliceCarousel
  // get the 'react-alice-carousel' all method and properties so we can override default next and previous buttons behavior
  , {
    ref: el => setCarouselProperties(el),
    items: carousel_items,
    responsive: responsive,
    infinite: true,
    autoPlay: false,
    disableButtonsControls: true,
    disableDotsControls: true
    // increasing the animation Duration more than 100 will crash the sliding in the carousel
    ,
    animationDuration: 100,
    keyboardNavigation: false,
    mouseTracking: false,
    touchTracking: false,
    onInitialized: onCarouselInit,
    onResized: onCarouselResize
  })), createElement("button", {
    className: activeSlideClasses.next_btn,
    onClick: nextClicked
  })) : createElement("div", {
    className: commonClasses.multi_empty_container
  });
}

function MultiCarousel(props) {
  /*
   default undefined - The key is the breakpoint
   (default is the result of: () => window.innerWidth or innerWidth property if the last presented).
  */
  const [defaultResponsive, setDefaultResponsive] = useState(null);
  useEffect(() => {
    setDefaultResponsive({
      0: {
        items: props.items425 > 0 ? props.items425 : 1
      },
      640: {
        items: props.items640 > 0 ? props.items640 : 2
      },
      1024: {
        items: props.items1024 > 0 ? props.items1024 : 3
      },
      1200: {
        items: props.items1200 > 0 ? props.items1200 : 4
      },
      1600: {
        items: props.items1600 > 0 ? props.items1600 : 5
      },
      2560: {
        items: props.items2560 > 0 ? props.items2560 : 6
      }
    });
  }, []);
  return createElement("div", null, defaultResponsive ? (props.carouselType === "normal" || props.carouselType === "active") && createElement(NormalCarousel, {
    carouselType: props.carouselType,
    data: props.data,
    action: props.action,
    content: props.content,
    infinite: props.infinite,
    autoPlay: props.autoPlay,
    autoPlayDirection: props.autoPlayDirection,
    autoPlayControls: props.autoPlayControls,
    disableButtonsControls: props.disableButtonsControls,
    disableDotsControls: props.disableDotsControls,
    animationDuration: props.animationDuration,
    animationType: props.animationType,
    keyboardNavigation: props.keyboardNavigation,
    mouseTracking: props.mouseTracking,
    touchTracking: props.touchTracking,
    defaultResponsive: defaultResponsive
  }) || props.carouselType === "slide" && createElement(ActiveSlideCarousel, {
    data: props.data,
    action: props.action,
    content: props.content,
    defaultResponsive: defaultResponsive
  }) || createElement("div", {
    className: commonClasses.error
  }, createElement("p", null, "An error occurred while initializing the Carousel")) : createElement("div", {
    className: commonClasses.loading
  }, createElement("p", null, "Loading ...")));
}

export { MultiCarousel };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlDYXJvdXNlbC5tanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi90eXBlcy9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9jYWxjdWxhdGVEaXJlY3Rpb24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY29tbW9uLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZUR1cmF0aW9uLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL3VwZGF0ZVRyYWNlLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9yZXNvbHZlRGlyZWN0aW9uLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZVZlbG9jaXR5LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZVBvc2l0aW9uLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY3JlYXRlT3B0aW9ucy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9jaGVja0lzUGFzc2l2ZVN1cHBvcnRlZC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9jaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvZ2V0SW5pdGlhbFN0YXRlLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2dldEluaXRpYWxQcm9wcy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9nZXRPcHRpb25zLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL3JvdGF0ZUJ5QW5nbGUuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3R5cGVzL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi9kZWZhdWx0UHJvcHMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL21hcHBlcnMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL21hdGguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL2VsZW1lbnRzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi91dGlscy9jb21tb24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL2NsYXNzbmFtZXMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL3RpbWVycy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvZGVidWcuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL3JlbmRlci5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvY29udHJvbHMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi92aWV3cy9TbGlkZUluZm8uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3ZpZXdzL1N0YWdlSXRlbS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdmlld3MvRG90c05hdmlnYXRpb24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3ZpZXdzL1BsYXlQYXVzZUJ1dHRvbi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdmlld3MvUHJldk5leHRCdXR0b24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3ZpZXdzL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi9yZWFjdC1hbGljZS1jYXJvdXNlbC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcGFyc2UuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzNS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbWQ1LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92My5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc2hhMS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjUuanMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9oZWxwZXIuanMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Ob3JtYWxDYXJvdXNlbC5qc3giLCIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BY3RpdmVTbGlkZUNhcm91c2VsLmpzeCIsIi4uLy4uLy4uLy4uLy4uL3NyYy9NdWx0aUNhcm91c2VsLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVHJhY2VEaXJlY3Rpb25LZXkgPSBleHBvcnRzLkRpcmVjdGlvbiA9IGV4cG9ydHMuQXhpcyA9IHZvaWQgMDtcbnZhciBUcmFjZURpcmVjdGlvbktleTtcbmV4cG9ydHMuVHJhY2VEaXJlY3Rpb25LZXkgPSBUcmFjZURpcmVjdGlvbktleTtcblxuKGZ1bmN0aW9uIChUcmFjZURpcmVjdGlvbktleSkge1xuICBUcmFjZURpcmVjdGlvbktleVtcIk5FR0FUSVZFXCJdID0gXCJORUdBVElWRVwiO1xuICBUcmFjZURpcmVjdGlvbktleVtcIlBPU0lUSVZFXCJdID0gXCJQT1NJVElWRVwiO1xuICBUcmFjZURpcmVjdGlvbktleVtcIk5PTkVcIl0gPSBcIk5PTkVcIjtcbn0pKFRyYWNlRGlyZWN0aW9uS2V5IHx8IChleHBvcnRzLlRyYWNlRGlyZWN0aW9uS2V5ID0gVHJhY2VEaXJlY3Rpb25LZXkgPSB7fSkpO1xuXG52YXIgRGlyZWN0aW9uO1xuZXhwb3J0cy5EaXJlY3Rpb24gPSBEaXJlY3Rpb247XG5cbihmdW5jdGlvbiAoRGlyZWN0aW9uKSB7XG4gIERpcmVjdGlvbltcIlRPUFwiXSA9IFwiVE9QXCI7XG4gIERpcmVjdGlvbltcIkxFRlRcIl0gPSBcIkxFRlRcIjtcbiAgRGlyZWN0aW9uW1wiUklHSFRcIl0gPSBcIlJJR0hUXCI7XG4gIERpcmVjdGlvbltcIkJPVFRPTVwiXSA9IFwiQk9UVE9NXCI7XG4gIERpcmVjdGlvbltcIk5PTkVcIl0gPSBcIk5PTkVcIjtcbn0pKERpcmVjdGlvbiB8fCAoZXhwb3J0cy5EaXJlY3Rpb24gPSBEaXJlY3Rpb24gPSB7fSkpO1xuXG52YXIgQXhpcztcbmV4cG9ydHMuQXhpcyA9IEF4aXM7XG5cbihmdW5jdGlvbiAoQXhpcykge1xuICBBeGlzW1wiWFwiXSA9IFwieFwiO1xuICBBeGlzW1wiWVwiXSA9IFwieVwiO1xufSkoQXhpcyB8fCAoZXhwb3J0cy5BeGlzID0gQXhpcyA9IHt9KSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZURpcmVjdGlvbiA9IGNhbGN1bGF0ZURpcmVjdGlvbjtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlRGlyZWN0aW9uKHRyYWNlKSB7XG4gIHZhciBkaXJlY3Rpb247XG4gIHZhciBuZWdhdGl2ZSA9IF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5ORUdBVElWRTtcbiAgdmFyIHBvc2l0aXZlID0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5LlBPU0lUSVZFO1xuICB2YXIgY3VycmVudCA9IHRyYWNlW3RyYWNlLmxlbmd0aCAtIDFdO1xuICB2YXIgcHJldmlvdXMgPSB0cmFjZVt0cmFjZS5sZW5ndGggLSAyXSB8fCAwO1xuXG4gIGlmICh0cmFjZS5ldmVyeShmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpID09PSAwO1xuICB9KSkge1xuICAgIHJldHVybiBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTk9ORTtcbiAgfVxuXG4gIGRpcmVjdGlvbiA9IGN1cnJlbnQgPiBwcmV2aW91cyA/IHBvc2l0aXZlIDogbmVnYXRpdmU7XG5cbiAgaWYgKGN1cnJlbnQgPT09IDApIHtcbiAgICBkaXJlY3Rpb24gPSBwcmV2aW91cyA8IDAgPyBwb3NpdGl2ZSA6IG5lZ2F0aXZlO1xuICB9XG5cbiAgcmV0dXJuIGRpcmVjdGlvbjtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVzb2x2ZUF4aXNEaXJlY3Rpb24gPSBleHBvcnRzLmdldERpcmVjdGlvblZhbHVlID0gZXhwb3J0cy5nZXREaXJlY3Rpb25LZXkgPSBleHBvcnRzLmdldERpZmZlcmVuY2UgPSB2b2lkIDA7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5cbnZhciBnZXREaXJlY3Rpb25LZXkgPSBmdW5jdGlvbiBnZXREaXJlY3Rpb25LZXkoKSB7XG4gIHZhciBvYmplY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIga2V5ID0gT2JqZWN0LmtleXMob2JqZWN0KS50b1N0cmluZygpO1xuXG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuUE9TSVRJVkU6XG4gICAgICByZXR1cm4gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5LlBPU0lUSVZFO1xuXG4gICAgY2FzZSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTkVHQVRJVkU6XG4gICAgICByZXR1cm4gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5FR0FUSVZFO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTk9ORTtcbiAgfVxufTtcblxuZXhwb3J0cy5nZXREaXJlY3Rpb25LZXkgPSBnZXREaXJlY3Rpb25LZXk7XG5cbnZhciBnZXREaXJlY3Rpb25WYWx1ZSA9IGZ1bmN0aW9uIGdldERpcmVjdGlvblZhbHVlKCkge1xuICB2YXIgdmFsdWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgcmV0dXJuIHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0gfHwgMDtcbn07XG5cbmV4cG9ydHMuZ2V0RGlyZWN0aW9uVmFsdWUgPSBnZXREaXJlY3Rpb25WYWx1ZTtcblxudmFyIGdldERpZmZlcmVuY2UgPSBmdW5jdGlvbiBnZXREaWZmZXJlbmNlKCkge1xuICB2YXIgeCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgdmFyIHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIHJldHVybiBNYXRoLmFicyh4IC0geSk7XG59O1xuXG5leHBvcnRzLmdldERpZmZlcmVuY2UgPSBnZXREaWZmZXJlbmNlO1xuXG52YXIgcmVzb2x2ZUF4aXNEaXJlY3Rpb24gPSBmdW5jdGlvbiByZXNvbHZlQXhpc0RpcmVjdGlvbihheGlzLCBrZXkpIHtcbiAgdmFyIG5lZ2F0aXZlID0gX3R5cGVzLkRpcmVjdGlvbi5MRUZUO1xuICB2YXIgcG9zaXRpdmUgPSBfdHlwZXMuRGlyZWN0aW9uLlJJR0hUO1xuICB2YXIgZGlyZWN0aW9uID0gX3R5cGVzLkRpcmVjdGlvbi5OT05FO1xuXG4gIGlmIChheGlzID09PSBfdHlwZXMuQXhpcy5ZKSB7XG4gICAgbmVnYXRpdmUgPSBfdHlwZXMuRGlyZWN0aW9uLkJPVFRPTTtcbiAgICBwb3NpdGl2ZSA9IF90eXBlcy5EaXJlY3Rpb24uVE9QO1xuICB9XG5cbiAgaWYgKGtleSA9PT0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5FR0FUSVZFKSB7XG4gICAgZGlyZWN0aW9uID0gbmVnYXRpdmU7XG4gIH1cblxuICBpZiAoa2V5ID09PSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuUE9TSVRJVkUpIHtcbiAgICBkaXJlY3Rpb24gPSBwb3NpdGl2ZTtcbiAgfVxuXG4gIHJldHVybiBkaXJlY3Rpb247XG59O1xuXG5leHBvcnRzLnJlc29sdmVBeGlzRGlyZWN0aW9uID0gcmVzb2x2ZUF4aXNEaXJlY3Rpb247IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZURpcmVjdGlvbkRlbHRhID0gY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGE7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSh0cmFjZURpcmVjdGlvbnMpIHtcbiAgdmFyIGRlbHRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICB2YXIgbGVuZ3RoID0gdHJhY2VEaXJlY3Rpb25zLmxlbmd0aDtcbiAgdmFyIGkgPSBsZW5ndGggLSAxO1xuICB2YXIgZGlyZWN0aW9uID0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5PTkU7XG5cbiAgZm9yICg7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0cmFjZURpcmVjdGlvbnNbaV07XG4gICAgdmFyIGN1cnJlbnRLZXkgPSAoMCwgX2NvbW1vbi5nZXREaXJlY3Rpb25LZXkpKGN1cnJlbnQpO1xuICAgIHZhciBjdXJyZW50VmFsdWUgPSAoMCwgX2NvbW1vbi5nZXREaXJlY3Rpb25WYWx1ZSkoY3VycmVudFtjdXJyZW50S2V5XSk7XG4gICAgdmFyIHByZXYgPSB0cmFjZURpcmVjdGlvbnNbaSAtIDFdIHx8IHt9O1xuICAgIHZhciBwcmV2S2V5ID0gKDAsIF9jb21tb24uZ2V0RGlyZWN0aW9uS2V5KShwcmV2KTtcbiAgICB2YXIgcHJldlZhbHVlID0gKDAsIF9jb21tb24uZ2V0RGlyZWN0aW9uVmFsdWUpKHByZXZbcHJldktleV0pO1xuICAgIHZhciBkaWZmZXJlbmNlID0gKDAsIF9jb21tb24uZ2V0RGlmZmVyZW5jZSkoY3VycmVudFZhbHVlLCBwcmV2VmFsdWUpO1xuXG4gICAgaWYgKGRpZmZlcmVuY2UgPj0gZGVsdGEpIHtcbiAgICAgIGRpcmVjdGlvbiA9IGN1cnJlbnRLZXk7XG4gICAgICBicmVhaztcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyZWN0aW9uID0gcHJldktleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlyZWN0aW9uO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jYWxjdWxhdGVEdXJhdGlvbiA9IGNhbGN1bGF0ZUR1cmF0aW9uO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVEdXJhdGlvbigpIHtcbiAgdmFyIHByZXZUaW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICB2YXIgbmV4dFRpbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIHJldHVybiBwcmV2VGltZSA/IG5leHRUaW1lIC0gcHJldlRpbWUgOiAwO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbiA9IGNhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbihlKSB7XG4gIGlmICgnY2hhbmdlZFRvdWNoZXMnIGluIGUpIHtcbiAgICB2YXIgdG91Y2hlcyA9IGUuY2hhbmdlZFRvdWNoZXMgJiYgZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogdG91Y2hlcyAmJiB0b3VjaGVzLmNsaWVudFgsXG4gICAgICB5OiB0b3VjaGVzICYmIHRvdWNoZXMuY2xpZW50WVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IGUuY2xpZW50WCxcbiAgICB5OiBlLmNsaWVudFlcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXBkYXRlVHJhY2UgPSB1cGRhdGVUcmFjZTtcblxuZnVuY3Rpb24gdXBkYXRlVHJhY2UodHJhY2UsIHZhbHVlKSB7XG4gIHZhciBsYXN0ID0gdHJhY2VbdHJhY2UubGVuZ3RoIC0gMV07XG5cbiAgaWYgKGxhc3QgIT09IHZhbHVlKSB7XG4gICAgdHJhY2UucHVzaCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdHJhY2U7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucyA9IGNhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucztcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zKCkge1xuICB2YXIgdHJhY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICB2YXIgdGlja3MgPSBbXTtcbiAgdmFyIHBvc2l0aXZlID0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5LlBPU0lUSVZFO1xuICB2YXIgbmVnYXRpdmUgPSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTkVHQVRJVkU7XG4gIHZhciBpID0gMDtcbiAgdmFyIHRpY2sgPSBbXTtcbiAgdmFyIGRpcmVjdGlvbiA9IF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5OT05FO1xuXG4gIGZvciAoOyBpIDwgdHJhY2UubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY3VycmVudCA9IHRyYWNlW2ldO1xuICAgIHZhciBwcmV2ID0gdHJhY2VbaSAtIDFdO1xuXG4gICAgaWYgKHRpY2subGVuZ3RoKSB7XG4gICAgICB2YXIgY3VycmVudERpcmVjdGlvbiA9IGN1cnJlbnQgPiBwcmV2ID8gcG9zaXRpdmUgOiBuZWdhdGl2ZTtcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5PTkUpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gY3VycmVudERpcmVjdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnREaXJlY3Rpb24gPT09IGRpcmVjdGlvbikge1xuICAgICAgICB0aWNrLnB1c2goY3VycmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aWNrcy5wdXNoKF9kZWZpbmVQcm9wZXJ0eSh7fSwgZGlyZWN0aW9uLCB0aWNrLnNsaWNlKCkpKTtcbiAgICAgICAgdGljayA9IFtdO1xuICAgICAgICB0aWNrLnB1c2goY3VycmVudCk7XG4gICAgICAgIGRpcmVjdGlvbiA9IGN1cnJlbnREaXJlY3Rpb247XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjdXJyZW50ICE9PSAwKSB7XG4gICAgICAgIGRpcmVjdGlvbiA9IGN1cnJlbnQgPiAwID8gcG9zaXRpdmUgOiBuZWdhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgdGljay5wdXNoKGN1cnJlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aWNrLmxlbmd0aCkge1xuICAgIHRpY2tzLnB1c2goX2RlZmluZVByb3BlcnR5KHt9LCBkaXJlY3Rpb24sIHRpY2spKTtcbiAgfVxuXG4gIHJldHVybiB0aWNrcztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVzb2x2ZURpcmVjdGlvbiA9IHJlc29sdmVEaXJlY3Rpb247XG5cbnZhciBfY2FsY3VsYXRlRGlyZWN0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlRGlyZWN0aW9uXCIpO1xuXG52YXIgX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucyA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9uc1wiKTtcblxudmFyIF9jYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhXCIpO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxuZnVuY3Rpb24gcmVzb2x2ZURpcmVjdGlvbih0cmFjZSkge1xuICB2YXIgYXhpcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogX3R5cGVzLkF4aXMuWDtcbiAgdmFyIGRpcmVjdGlvbkRlbHRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAwO1xuXG4gIGlmIChkaXJlY3Rpb25EZWx0YSkge1xuICAgIHZhciBkaXJlY3Rpb25zID0gKDAsIF9jYWxjdWxhdGVUcmFjZURpcmVjdGlvbnMuY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zKSh0cmFjZSk7XG5cbiAgICB2YXIgX2RpcmVjdGlvbiA9ICgwLCBfY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGEuY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGEpKGRpcmVjdGlvbnMsIGRpcmVjdGlvbkRlbHRhKTtcblxuICAgIHJldHVybiAoMCwgX2NvbW1vbi5yZXNvbHZlQXhpc0RpcmVjdGlvbikoYXhpcywgX2RpcmVjdGlvbik7XG4gIH1cblxuICB2YXIgZGlyZWN0aW9uID0gKDAsIF9jYWxjdWxhdGVEaXJlY3Rpb24uY2FsY3VsYXRlRGlyZWN0aW9uKSh0cmFjZSk7XG4gIHJldHVybiAoMCwgX2NvbW1vbi5yZXNvbHZlQXhpc0RpcmVjdGlvbikoYXhpcywgZGlyZWN0aW9uKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FsY3VsYXRlVmVsb2NpdHkgPSBjYWxjdWxhdGVWZWxvY2l0eTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlVmVsb2NpdHkoeCwgeSwgdGltZSkge1xuICB2YXIgbWFnbml0dWRlID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICByZXR1cm4gbWFnbml0dWRlIC8gKHRpbWUgfHwgMSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZVBvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb247XG5cbnZhciBfdXBkYXRlVHJhY2UgPSByZXF1aXJlKFwiLi91cGRhdGVUcmFjZVwiKTtcblxudmFyIF9yZXNvbHZlRGlyZWN0aW9uID0gcmVxdWlyZShcIi4vcmVzb2x2ZURpcmVjdGlvblwiKTtcblxudmFyIF9jYWxjdWxhdGVEdXJhdGlvbiA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZUR1cmF0aW9uXCIpO1xuXG52YXIgX2NhbGN1bGF0ZVZlbG9jaXR5ID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlVmVsb2NpdHlcIik7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVBvc2l0aW9uKHN0YXRlLCBvcHRpb25zKSB7XG4gIHZhciBzdGFydCA9IHN0YXRlLnN0YXJ0LFxuICAgICAgeCA9IHN0YXRlLngsXG4gICAgICB5ID0gc3RhdGUueSxcbiAgICAgIHRyYWNlWCA9IHN0YXRlLnRyYWNlWCxcbiAgICAgIHRyYWNlWSA9IHN0YXRlLnRyYWNlWTtcbiAgdmFyIHJvdGF0ZVBvc2l0aW9uID0gb3B0aW9ucy5yb3RhdGVQb3NpdGlvbixcbiAgICAgIGRpcmVjdGlvbkRlbHRhID0gb3B0aW9ucy5kaXJlY3Rpb25EZWx0YTtcbiAgdmFyIGRlbHRhWCA9IHJvdGF0ZVBvc2l0aW9uLnggLSB4O1xuICB2YXIgZGVsdGFZID0geSAtIHJvdGF0ZVBvc2l0aW9uLnk7XG4gIHZhciBhYnNYID0gTWF0aC5hYnMoZGVsdGFYKTtcbiAgdmFyIGFic1kgPSBNYXRoLmFicyhkZWx0YVkpO1xuICAoMCwgX3VwZGF0ZVRyYWNlLnVwZGF0ZVRyYWNlKSh0cmFjZVgsIGRlbHRhWCk7XG4gICgwLCBfdXBkYXRlVHJhY2UudXBkYXRlVHJhY2UpKHRyYWNlWSwgZGVsdGFZKTtcbiAgdmFyIGRpcmVjdGlvblggPSAoMCwgX3Jlc29sdmVEaXJlY3Rpb24ucmVzb2x2ZURpcmVjdGlvbikodHJhY2VYLCBfdHlwZXMuQXhpcy5YLCBkaXJlY3Rpb25EZWx0YSk7XG4gIHZhciBkaXJlY3Rpb25ZID0gKDAsIF9yZXNvbHZlRGlyZWN0aW9uLnJlc29sdmVEaXJlY3Rpb24pKHRyYWNlWSwgX3R5cGVzLkF4aXMuWSwgZGlyZWN0aW9uRGVsdGEpO1xuICB2YXIgZHVyYXRpb24gPSAoMCwgX2NhbGN1bGF0ZUR1cmF0aW9uLmNhbGN1bGF0ZUR1cmF0aW9uKShzdGFydCwgRGF0ZS5ub3coKSk7XG4gIHZhciB2ZWxvY2l0eSA9ICgwLCBfY2FsY3VsYXRlVmVsb2NpdHkuY2FsY3VsYXRlVmVsb2NpdHkpKGFic1gsIGFic1ksIGR1cmF0aW9uKTtcbiAgcmV0dXJuIHtcbiAgICBhYnNYOiBhYnNYLFxuICAgIGFic1k6IGFic1ksXG4gICAgZGVsdGFYOiBkZWx0YVgsXG4gICAgZGVsdGFZOiBkZWx0YVksXG4gICAgZGlyZWN0aW9uWDogZGlyZWN0aW9uWCxcbiAgICBkaXJlY3Rpb25ZOiBkaXJlY3Rpb25ZLFxuICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICBwb3NpdGlvblg6IHJvdGF0ZVBvc2l0aW9uLngsXG4gICAgcG9zaXRpb25ZOiByb3RhdGVQb3NpdGlvbi55LFxuICAgIHZlbG9jaXR5OiB2ZWxvY2l0eVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzID0gdm9pZCAwO1xuXG52YXIgY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyA9IGZ1bmN0aW9uIGNoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXMoZSkge1xuICByZXR1cm4gQm9vbGVhbihlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA+IDEpO1xufTtcblxuZXhwb3J0cy5jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzID0gY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY3JlYXRlT3B0aW9ucyA9IGNyZWF0ZU9wdGlvbnM7XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMoKSB7XG4gIHZhciBwcm94eSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm94eSwgJ3Bhc3NpdmUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB0aGlzLmlzUGFzc2l2ZVN1cHBvcnRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IHRydWVcbiAgfSk7XG4gIHJldHVybiBwcm94eTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQgPSBjaGVja0lzUGFzc2l2ZVN1cHBvcnRlZDtcbmV4cG9ydHMubm9vcCA9IHZvaWQgMDtcblxudmFyIF9jcmVhdGVPcHRpb25zID0gcmVxdWlyZShcIi4vY3JlYXRlT3B0aW9uc1wiKTtcblxuZnVuY3Rpb24gY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQoaXNQYXNzaXZlU3VwcG9ydGVkKSB7XG4gIGlmICh0eXBlb2YgaXNQYXNzaXZlU3VwcG9ydGVkID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gaXNQYXNzaXZlU3VwcG9ydGVkO1xuICB9XG5cbiAgdmFyIHByb3h5ID0ge1xuICAgIGlzUGFzc2l2ZVN1cHBvcnRlZDogaXNQYXNzaXZlU3VwcG9ydGVkXG4gIH07XG5cbiAgdHJ5IHtcbiAgICB2YXIgb3B0aW9ucyA9ICgwLCBfY3JlYXRlT3B0aW9ucy5jcmVhdGVPcHRpb25zKShwcm94eSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkJywgbm9vcCwgb3B0aW9ucyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkJywgbm9vcCwgb3B0aW9ucyk7XG4gIH0gY2F0Y2ggKGVycikge31cblxuICByZXR1cm4gcHJveHkuaXNQYXNzaXZlU3VwcG9ydGVkO1xufVxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuZXhwb3J0cy5ub29wID0gbm9vcDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5cbnZhciBjaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQgPSBmdW5jdGlvbiBjaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQoKSB7XG4gIHJldHVybiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHdpbmRvdykpID09PSAnb2JqZWN0JyAmJiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IEJvb2xlYW4od2luZG93Lm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cykpO1xufTtcblxuZXhwb3J0cy5jaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQgPSBjaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldEluaXRpYWxTdGF0ZSA9IHZvaWQgMDtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGdldEluaXRpYWxTdGF0ZSA9IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHN0YXJ0OiAwLFxuICAgIGlzU3dpcGluZzogZmFsc2UsXG4gICAgdHJhY2VYOiBbXSxcbiAgICB0cmFjZVk6IFtdXG4gIH0sIG9wdGlvbnMpO1xufTtcblxuZXhwb3J0cy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldEluaXRpYWxQcm9wcyA9IHZvaWQgMDtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGdldEluaXRpYWxQcm9wcyA9IGZ1bmN0aW9uIGdldEluaXRpYWxQcm9wcygpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgdGFyZ2V0OiBudWxsLFxuICAgIGRlbHRhOiAxMCxcbiAgICBkaXJlY3Rpb25EZWx0YTogMCxcbiAgICByb3RhdGlvbkFuZ2xlOiAwLFxuICAgIG1vdXNlVHJhY2tpbmdFbmFibGVkOiBmYWxzZSxcbiAgICB0b3VjaFRyYWNraW5nRW5hYmxlZDogdHJ1ZSxcbiAgICBwcmV2ZW50RGVmYXVsdFRvdWNobW92ZUV2ZW50OiBmYWxzZSxcbiAgICBwcmV2ZW50VHJhY2tpbmdPbk1vdXNlbGVhdmU6IGZhbHNlXG4gIH0sIHByb3BzKTtcbn07XG5cbmV4cG9ydHMuZ2V0SW5pdGlhbFByb3BzID0gZ2V0SW5pdGlhbFByb3BzOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRPcHRpb25zID0gZ2V0T3B0aW9ucztcblxuZnVuY3Rpb24gZ2V0T3B0aW9ucygpIHtcbiAgdmFyIGlzUGFzc2l2ZVN1cHBvcnRlZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgaWYgKGlzUGFzc2l2ZVN1cHBvcnRlZCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge307XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJvdGF0ZUJ5QW5nbGUgPSByb3RhdGVCeUFuZ2xlO1xuXG5mdW5jdGlvbiByb3RhdGVCeUFuZ2xlKHBvc2l0aW9uKSB7XG4gIHZhciBhbmdsZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcblxuICBpZiAoYW5nbGUgPT09IDApIHtcbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICB2YXIgeCA9IHBvc2l0aW9uLngsXG4gICAgICB5ID0gcG9zaXRpb24ueTtcbiAgdmFyIGFuZ2xlSW5SYWRpYW5zID0gTWF0aC5QSSAvIDE4MCAqIGFuZ2xlO1xuICB2YXIgcm90YXRlZFggPSB4ICogTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpICsgeSAqIE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgdmFyIHJvdGF0ZWRZID0geSAqIE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKSAtIHggKiBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gIHJldHVybiB7XG4gICAgeDogcm90YXRlZFgsXG4gICAgeTogcm90YXRlZFlcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jYWxjdWxhdGVEaXJlY3Rpb24gPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVEaXJlY3Rpb25cIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVEaXJlY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9jYWxjdWxhdGVEaXJlY3Rpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2FsY3VsYXRlRGlyZWN0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGFcIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZUR1cmF0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlRHVyYXRpb25cIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVEdXJhdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZUR1cmF0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZUR1cmF0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlTW92aW5nUG9zaXRpb25cIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZVBvc2l0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlUG9zaXRpb25cIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVQb3NpdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZVBvc2l0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZVBvc2l0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucyA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9uc1wiKTtcblxuT2JqZWN0LmtleXMoX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9uc1trZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jYWxjdWxhdGVUcmFjZURpcmVjdGlvbnNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2FsY3VsYXRlVmVsb2NpdHkgPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVWZWxvY2l0eVwiKTtcblxuT2JqZWN0LmtleXMoX2NhbGN1bGF0ZVZlbG9jaXR5KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2FsY3VsYXRlVmVsb2NpdHlba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2FsY3VsYXRlVmVsb2NpdHlba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyA9IHJlcXVpcmUoXCIuL2NoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXNcIik7XG5cbk9iamVjdC5rZXlzKF9jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlc1trZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkID0gcmVxdWlyZShcIi4vY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWRcIik7XG5cbk9iamVjdC5rZXlzKF9jaGVja0lzUGFzc2l2ZVN1cHBvcnRlZCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCA9IHJlcXVpcmUoXCIuL2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZFwiKTtcblxuT2JqZWN0LmtleXMoX2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZFtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG5PYmplY3Qua2V5cyhfY29tbW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY29tbW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NvbW1vbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9jcmVhdGVPcHRpb25zID0gcmVxdWlyZShcIi4vY3JlYXRlT3B0aW9uc1wiKTtcblxuT2JqZWN0LmtleXMoX2NyZWF0ZU9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9jcmVhdGVPcHRpb25zW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NyZWF0ZU9wdGlvbnNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfZ2V0SW5pdGlhbFN0YXRlID0gcmVxdWlyZShcIi4vZ2V0SW5pdGlhbFN0YXRlXCIpO1xuXG5PYmplY3Qua2V5cyhfZ2V0SW5pdGlhbFN0YXRlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfZ2V0SW5pdGlhbFN0YXRlW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2dldEluaXRpYWxTdGF0ZVtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9nZXRJbml0aWFsUHJvcHMgPSByZXF1aXJlKFwiLi9nZXRJbml0aWFsUHJvcHNcIik7XG5cbk9iamVjdC5rZXlzKF9nZXRJbml0aWFsUHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9nZXRJbml0aWFsUHJvcHNba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0SW5pdGlhbFByb3BzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2dldE9wdGlvbnMgPSByZXF1aXJlKFwiLi9nZXRPcHRpb25zXCIpO1xuXG5PYmplY3Qua2V5cyhfZ2V0T3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2dldE9wdGlvbnNba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0T3B0aW9uc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9yZXNvbHZlRGlyZWN0aW9uID0gcmVxdWlyZShcIi4vcmVzb2x2ZURpcmVjdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX3Jlc29sdmVEaXJlY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9yZXNvbHZlRGlyZWN0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3Jlc29sdmVEaXJlY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfcm90YXRlQnlBbmdsZSA9IHJlcXVpcmUoXCIuL3JvdGF0ZUJ5QW5nbGVcIik7XG5cbk9iamVjdC5rZXlzKF9yb3RhdGVCeUFuZ2xlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfcm90YXRlQnlBbmdsZVtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9yb3RhdGVCeUFuZ2xlW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX3VwZGF0ZVRyYWNlID0gcmVxdWlyZShcIi4vdXBkYXRlVHJhY2VcIik7XG5cbk9iamVjdC5rZXlzKF91cGRhdGVUcmFjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX3VwZGF0ZVRyYWNlW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3VwZGF0ZVRyYWNlW2tleV07XG4gICAgfVxuICB9KTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgX2V4cG9ydE5hbWVzID0ge307XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vdXRpbHNcIikpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG5cbk9iamVjdC5rZXlzKF90eXBlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX3R5cGVzW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3R5cGVzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIFZhbmlsbGFTd2lwZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFZhbmlsbGFTd2lwZShwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWYW5pbGxhU3dpcGUpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic3RhdGVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInByb3BzXCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLnN0YXRlID0gVXRpbHMuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgdGhpcy5wcm9wcyA9IFV0aWxzLmdldEluaXRpYWxQcm9wcyhwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVTd2lwZVN0YXJ0ID0gdGhpcy5oYW5kbGVTd2lwZVN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTd2lwZU1vdmUgPSB0aGlzLmhhbmRsZVN3aXBlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3dpcGVFbmQgPSB0aGlzLmhhbmRsZVN3aXBlRW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVNb3VzZURvd24gPSB0aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTW91c2VNb3ZlID0gdGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vdXNlVXAgPSB0aGlzLmhhbmRsZU1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSB0aGlzLmhhbmRsZU1vdXNlTGVhdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhWYW5pbGxhU3dpcGUsIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHRoaXMuc2V0dXBUb3VjaExpc3RlbmVycygpO1xuICAgICAgdGhpcy5zZXR1cE1vdXNlTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUocHJvcHMpIHtcbiAgICAgIHZhciBwcmV2UHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIG5leHRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByZXZQcm9wcywgcHJvcHMpO1xuXG4gICAgICBpZiAocHJldlByb3BzLmVsZW1lbnQgIT09IG5leHRQcm9wcy5lbGVtZW50IHx8IHByZXZQcm9wcy50YXJnZXQgIT09IG5leHRQcm9wcy50YXJnZXQpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG5cbiAgICAgIGlmIChwcmV2UHJvcHMubW91c2VUcmFja2luZ0VuYWJsZWQgIT09IG5leHRQcm9wcy5tb3VzZVRyYWNraW5nRW5hYmxlZCB8fCBwcmV2UHJvcHMucHJldmVudFRyYWNraW5nT25Nb3VzZWxlYXZlICE9PSBuZXh0UHJvcHMucHJldmVudFRyYWNraW5nT25Nb3VzZWxlYXZlKSB7XG4gICAgICAgIHRoaXMuY2xlYW51cE1vdXNlTGlzdGVuZXJzKCk7XG4gICAgICAgIG5leHRQcm9wcy5tb3VzZVRyYWNraW5nRW5hYmxlZCA/IHRoaXMuc2V0dXBNb3VzZUxpc3RlbmVycygpIDogdGhpcy5jbGVhbnVwTW91c2VMaXN0ZW5lcnMoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZXZQcm9wcy50b3VjaFRyYWNraW5nRW5hYmxlZCAhPT0gbmV4dFByb3BzLnRvdWNoVHJhY2tpbmdFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW51cFRvdWNoTGlzdGVuZXJzKCk7XG4gICAgICAgIG5leHRQcm9wcy50b3VjaFRyYWNraW5nRW5hYmxlZCA/IHRoaXMuc2V0dXBUb3VjaExpc3RlbmVycygpIDogdGhpcy5jbGVhbnVwVG91Y2hMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdGhpcy5jbGVhbnVwTW91c2VMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuY2xlYW51cFRvdWNoTGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLnN0YXRlID0gVXRpbHMuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgICB0aGlzLnByb3BzID0gVXRpbHMuZ2V0SW5pdGlhbFByb3BzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldHVwVG91Y2hMaXN0ZW5lcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0dXBUb3VjaExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZWxlbWVudCA9IF90aGlzJHByb3BzLmVsZW1lbnQsXG4gICAgICAgICAgdGFyZ2V0ID0gX3RoaXMkcHJvcHMudGFyZ2V0LFxuICAgICAgICAgIHRvdWNoVHJhY2tpbmdFbmFibGVkID0gX3RoaXMkcHJvcHMudG91Y2hUcmFja2luZ0VuYWJsZWQ7XG5cbiAgICAgIGlmIChlbGVtZW50ICYmIHRvdWNoVHJhY2tpbmdFbmFibGVkKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRhcmdldCB8fCBlbGVtZW50O1xuICAgICAgICB2YXIgaXNQYXNzaXZlU3VwcG9ydGVkID0gVXRpbHMuY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQoKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBVdGlscy5nZXRPcHRpb25zKGlzUGFzc2l2ZVN1cHBvcnRlZCk7XG4gICAgICAgIGxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZVN3aXBlU3RhcnQsIG9wdGlvbnMpO1xuICAgICAgICBsaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmhhbmRsZVN3aXBlTW92ZSwgb3B0aW9ucyk7XG4gICAgICAgIGxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5oYW5kbGVTd2lwZUVuZCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsZWFudXBUb3VjaExpc3RlbmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhbnVwVG91Y2hMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBlbGVtZW50ID0gX3RoaXMkcHJvcHMyLmVsZW1lbnQsXG4gICAgICAgICAgdGFyZ2V0ID0gX3RoaXMkcHJvcHMyLnRhcmdldDtcbiAgICAgIHZhciBsaXN0ZW5lciA9IHRhcmdldCB8fCBlbGVtZW50O1xuXG4gICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlU3dpcGVTdGFydCk7XG4gICAgICAgIGxpc3RlbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuaGFuZGxlU3dpcGVNb3ZlKTtcbiAgICAgICAgbGlzdGVuZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmhhbmRsZVN3aXBlRW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0dXBNb3VzZUxpc3RlbmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cE1vdXNlTGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZWxlbWVudCA9IF90aGlzJHByb3BzMy5lbGVtZW50LFxuICAgICAgICAgIG1vdXNlVHJhY2tpbmdFbmFibGVkID0gX3RoaXMkcHJvcHMzLm1vdXNlVHJhY2tpbmdFbmFibGVkLFxuICAgICAgICAgIHByZXZlbnRUcmFja2luZ09uTW91c2VsZWF2ZSA9IF90aGlzJHByb3BzMy5wcmV2ZW50VHJhY2tpbmdPbk1vdXNlbGVhdmU7XG5cbiAgICAgIGlmIChtb3VzZVRyYWNraW5nRW5hYmxlZCAmJiBlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24pO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwKTtcblxuICAgICAgICBpZiAocHJldmVudFRyYWNraW5nT25Nb3VzZWxlYXZlKSB7XG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5oYW5kbGVNb3VzZUxlYXZlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbGVhbnVwTW91c2VMaXN0ZW5lcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYW51cE1vdXNlTGlzdGVuZXJzKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24pO1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwKTtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5oYW5kbGVNb3VzZUxlYXZlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RXZlbnREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEV2ZW50RGF0YShlKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgICAgICBkaXJlY3Rpb25EZWx0YTogMFxuICAgICAgfTtcbiAgICAgIHZhciByb3RhdGlvbkFuZ2xlID0gdGhpcy5wcm9wcy5yb3RhdGlvbkFuZ2xlO1xuICAgICAgdmFyIGRpcmVjdGlvbkRlbHRhID0gb3B0aW9ucy5kaXJlY3Rpb25EZWx0YTtcbiAgICAgIHZhciBtb3ZpbmdQb3NpdGlvbiA9IFV0aWxzLmNhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uKGUpO1xuICAgICAgdmFyIHJvdGF0ZVBvc2l0aW9uID0gVXRpbHMucm90YXRlQnlBbmdsZShtb3ZpbmdQb3NpdGlvbiwgcm90YXRpb25BbmdsZSk7XG4gICAgICByZXR1cm4gVXRpbHMuY2FsY3VsYXRlUG9zaXRpb24odGhpcy5zdGF0ZSwge1xuICAgICAgICByb3RhdGVQb3NpdGlvbjogcm90YXRlUG9zaXRpb24sXG4gICAgICAgIGRpcmVjdGlvbkRlbHRhOiBkaXJlY3Rpb25EZWx0YVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVN3aXBlU3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlU3dpcGVTdGFydChlKSB7XG4gICAgICBpZiAoVXRpbHMuY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyhlKSkgcmV0dXJuO1xuICAgICAgdmFyIHJvdGF0aW9uQW5nbGUgPSB0aGlzLnByb3BzLnJvdGF0aW9uQW5nbGU7XG4gICAgICB2YXIgbW92aW5nUG9zaXRpb24gPSBVdGlscy5jYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbihlKTtcblxuICAgICAgdmFyIF9VdGlscyRyb3RhdGVCeUFuZ2xlID0gVXRpbHMucm90YXRlQnlBbmdsZShtb3ZpbmdQb3NpdGlvbiwgcm90YXRpb25BbmdsZSksXG4gICAgICAgICAgeCA9IF9VdGlscyRyb3RhdGVCeUFuZ2xlLngsXG4gICAgICAgICAgeSA9IF9VdGlscyRyb3RhdGVCeUFuZ2xlLnk7XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBVdGlscy5nZXRJbml0aWFsU3RhdGUoe1xuICAgICAgICBpc1N3aXBpbmc6IGZhbHNlLFxuICAgICAgICBzdGFydDogRGF0ZS5ub3coKSxcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVN3aXBlTW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVTd2lwZU1vdmUoZSkge1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICB4ID0gX3RoaXMkc3RhdGUueCxcbiAgICAgICAgICB5ID0gX3RoaXMkc3RhdGUueSxcbiAgICAgICAgICBpc1N3aXBpbmcgPSBfdGhpcyRzdGF0ZS5pc1N3aXBpbmc7XG4gICAgICBpZiAoIXggfHwgIXkgfHwgVXRpbHMuY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyhlKSkgcmV0dXJuO1xuICAgICAgdmFyIGRpcmVjdGlvbkRlbHRhID0gdGhpcy5wcm9wcy5kaXJlY3Rpb25EZWx0YSB8fCAwO1xuXG4gICAgICB2YXIgX3RoaXMkZ2V0RXZlbnREYXRhID0gdGhpcy5nZXRFdmVudERhdGEoZSwge1xuICAgICAgICBkaXJlY3Rpb25EZWx0YTogZGlyZWN0aW9uRGVsdGFcbiAgICAgIH0pLFxuICAgICAgICAgIGFic1ggPSBfdGhpcyRnZXRFdmVudERhdGEuYWJzWCxcbiAgICAgICAgICBhYnNZID0gX3RoaXMkZ2V0RXZlbnREYXRhLmFic1ksXG4gICAgICAgICAgZGVsdGFYID0gX3RoaXMkZ2V0RXZlbnREYXRhLmRlbHRhWCxcbiAgICAgICAgICBkZWx0YVkgPSBfdGhpcyRnZXRFdmVudERhdGEuZGVsdGFZLFxuICAgICAgICAgIGRpcmVjdGlvblggPSBfdGhpcyRnZXRFdmVudERhdGEuZGlyZWN0aW9uWCxcbiAgICAgICAgICBkaXJlY3Rpb25ZID0gX3RoaXMkZ2V0RXZlbnREYXRhLmRpcmVjdGlvblksXG4gICAgICAgICAgZHVyYXRpb24gPSBfdGhpcyRnZXRFdmVudERhdGEuZHVyYXRpb24sXG4gICAgICAgICAgdmVsb2NpdHkgPSBfdGhpcyRnZXRFdmVudERhdGEudmVsb2NpdHk7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGRlbHRhID0gX3RoaXMkcHJvcHM0LmRlbHRhLFxuICAgICAgICAgIHByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQgPSBfdGhpcyRwcm9wczQucHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudCxcbiAgICAgICAgICBvblN3aXBlU3RhcnQgPSBfdGhpcyRwcm9wczQub25Td2lwZVN0YXJ0LFxuICAgICAgICAgIG9uU3dpcGluZyA9IF90aGlzJHByb3BzNC5vblN3aXBpbmc7XG4gICAgICBpZiAoZS5jYW5jZWxhYmxlICYmIHByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChhYnNYIDwgTnVtYmVyKGRlbHRhKSAmJiBhYnNZIDwgTnVtYmVyKGRlbHRhKSAmJiAhaXNTd2lwaW5nKSByZXR1cm47XG5cbiAgICAgIGlmIChvblN3aXBlU3RhcnQgJiYgIWlzU3dpcGluZykge1xuICAgICAgICBvblN3aXBlU3RhcnQoZSwge1xuICAgICAgICAgIGRlbHRhWDogZGVsdGFYLFxuICAgICAgICAgIGRlbHRhWTogZGVsdGFZLFxuICAgICAgICAgIGFic1g6IGFic1gsXG4gICAgICAgICAgYWJzWTogYWJzWSxcbiAgICAgICAgICBkaXJlY3Rpb25YOiBkaXJlY3Rpb25YLFxuICAgICAgICAgIGRpcmVjdGlvblk6IGRpcmVjdGlvblksXG4gICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgIHZlbG9jaXR5OiB2ZWxvY2l0eVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGF0ZS5pc1N3aXBpbmcgPSB0cnVlO1xuXG4gICAgICBpZiAob25Td2lwaW5nKSB7XG4gICAgICAgIG9uU3dpcGluZyhlLCB7XG4gICAgICAgICAgZGVsdGFYOiBkZWx0YVgsXG4gICAgICAgICAgZGVsdGFZOiBkZWx0YVksXG4gICAgICAgICAgYWJzWDogYWJzWCxcbiAgICAgICAgICBhYnNZOiBhYnNZLFxuICAgICAgICAgIGRpcmVjdGlvblg6IGRpcmVjdGlvblgsXG4gICAgICAgICAgZGlyZWN0aW9uWTogZGlyZWN0aW9uWSxcbiAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgdmVsb2NpdHk6IHZlbG9jaXR5XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVTd2lwZUVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVTd2lwZUVuZChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvblN3aXBlZCA9IF90aGlzJHByb3BzNS5vblN3aXBlZCxcbiAgICAgICAgICBvblRhcCA9IF90aGlzJHByb3BzNS5vblRhcDtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUuaXNTd2lwaW5nKSB7XG4gICAgICAgIHZhciBkaXJlY3Rpb25EZWx0YSA9IHRoaXMucHJvcHMuZGlyZWN0aW9uRGVsdGEgfHwgMDtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5nZXRFdmVudERhdGEoZSwge1xuICAgICAgICAgIGRpcmVjdGlvbkRlbHRhOiBkaXJlY3Rpb25EZWx0YVxuICAgICAgICB9KTtcbiAgICAgICAgb25Td2lwZWQgJiYgb25Td2lwZWQoZSwgcG9zaXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF9wb3NpdGlvbiA9IHRoaXMuZ2V0RXZlbnREYXRhKGUpO1xuXG4gICAgICAgIG9uVGFwICYmIG9uVGFwKGUsIF9wb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBVdGlscy5nZXRJbml0aWFsU3RhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTW91c2VEb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihlKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5wcm9wcy50YXJnZXQ7XG5cbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gZS50YXJnZXQpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVN3aXBlU3RhcnQoZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3dpcGVTdGFydChlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTW91c2VNb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZShlKSB7XG4gICAgICB0aGlzLmhhbmRsZVN3aXBlTW92ZShlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTW91c2VVcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKGUpIHtcbiAgICAgIHZhciBpc1N3aXBpbmcgPSB0aGlzLnN0YXRlLmlzU3dpcGluZztcbiAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnByb3BzLnRhcmdldDtcblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICBpZiAodGFyZ2V0ID09PSBlLnRhcmdldCB8fCBpc1N3aXBpbmcpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVN3aXBlRW5kKGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhbmRsZVN3aXBlRW5kKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVNb3VzZUxlYXZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTGVhdmUoZSkge1xuICAgICAgdmFyIGlzU3dpcGluZyA9IHRoaXMuc3RhdGUuaXNTd2lwaW5nO1xuXG4gICAgICBpZiAoaXNTd2lwaW5nKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3dpcGVFbmQoZSk7XG4gICAgICB9XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiaXNUb3VjaEV2ZW50c1N1cHBvcnRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1RvdWNoRXZlbnRzU3VwcG9ydGVkKCkge1xuICAgICAgcmV0dXJuIFV0aWxzLmNoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBWYW5pbGxhU3dpcGU7XG59KCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVmFuaWxsYVN3aXBlOyIsIlwidXNlIHN0cmljdFwiO3ZhciBFdmVudFR5cGUsQW5pbWF0aW9uVHlwZSxBdXRvUGxheVN0cmF0ZWd5LENvbnRyb2xzU3RyYXRlZ3ksQXV0b3BsYXlEaXJlY3Rpb24sQ2xhc3NuYW1lcyxNb2RpZmllcnM7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5Nb2RpZmllcnM9ZXhwb3J0cy5DbGFzc25hbWVzPWV4cG9ydHMuQXV0b3BsYXlEaXJlY3Rpb249ZXhwb3J0cy5Db250cm9sc1N0cmF0ZWd5PWV4cG9ydHMuQXV0b1BsYXlTdHJhdGVneT1leHBvcnRzLkFuaW1hdGlvblR5cGU9ZXhwb3J0cy5FdmVudFR5cGU9dm9pZCAwLGZ1bmN0aW9uKGUpe2UuQUNUSU9OPVwiYWN0aW9uXCIsZS5JTklUPVwiaW5pdFwiLGUuUkVTSVpFPVwicmVzaXplXCIsZS5VUERBVEU9XCJ1cGRhdGVcIn0oRXZlbnRUeXBlPWV4cG9ydHMuRXZlbnRUeXBlfHwoZXhwb3J0cy5FdmVudFR5cGU9e30pKSxmdW5jdGlvbihlKXtlLkZBREVPVVQ9XCJmYWRlb3V0XCIsZS5TTElERT1cInNsaWRlXCJ9KEFuaW1hdGlvblR5cGU9ZXhwb3J0cy5BbmltYXRpb25UeXBlfHwoZXhwb3J0cy5BbmltYXRpb25UeXBlPXt9KSksZnVuY3Rpb24oZSl7ZS5ERUZBVUxUPVwiZGVmYXVsdFwiLGUuQUxMPVwiYWxsXCIsZS5BQ1RJT049XCJhY3Rpb25cIixlLk5PTkU9XCJub25lXCJ9KEF1dG9QbGF5U3RyYXRlZ3k9ZXhwb3J0cy5BdXRvUGxheVN0cmF0ZWd5fHwoZXhwb3J0cy5BdXRvUGxheVN0cmF0ZWd5PXt9KSksZnVuY3Rpb24oZSl7ZS5ERUZBVUxUPVwiZGVmYXVsdFwiLGUuQUxURVJOQVRFPVwiYWx0ZXJuYXRlXCIsZS5SRVNQT05TSVZFPVwicmVzcG9uc2l2ZVwifShDb250cm9sc1N0cmF0ZWd5PWV4cG9ydHMuQ29udHJvbHNTdHJhdGVneXx8KGV4cG9ydHMuQ29udHJvbHNTdHJhdGVneT17fSkpLGZ1bmN0aW9uKGUpe2UuUlRMPVwicnRsXCIsZS5MVFI9XCJsdHJcIn0oQXV0b3BsYXlEaXJlY3Rpb249ZXhwb3J0cy5BdXRvcGxheURpcmVjdGlvbnx8KGV4cG9ydHMuQXV0b3BsYXlEaXJlY3Rpb249e30pKSxmdW5jdGlvbihlKXtlLkFOSU1BVEVEPVwiYW5pbWF0ZWQgYW5pbWF0ZWQtb3V0IGZhZGVPdXRcIixlLlJPT1Q9XCJhbGljZS1jYXJvdXNlbFwiLGUuV1JBUFBFUj1cImFsaWNlLWNhcm91c2VsX193cmFwcGVyXCIsZS5TVEFHRT1cImFsaWNlLWNhcm91c2VsX19zdGFnZVwiLGUuU1RBR0VfSVRFTT1cImFsaWNlLWNhcm91c2VsX19zdGFnZS1pdGVtXCIsZS5ET1RTPVwiYWxpY2UtY2Fyb3VzZWxfX2RvdHNcIixlLkRPVFNfSVRFTT1cImFsaWNlLWNhcm91c2VsX19kb3RzLWl0ZW1cIixlLlBMQVlfQlROPVwiYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuXCIsZS5QTEFZX0JUTl9JVEVNPVwiYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuLWl0ZW1cIixlLlBMQVlfQlROX1dSQVBQRVI9XCJhbGljZS1jYXJvdXNlbF9fcGxheS1idG4td3JhcHBlclwiLGUuU0xJREVfSU5GTz1cImFsaWNlLWNhcm91c2VsX19zbGlkZS1pbmZvXCIsZS5TTElERV9JTkZPX0lURU09XCJhbGljZS1jYXJvdXNlbF9fc2xpZGUtaW5mby1pdGVtXCIsZS5CVVRUT05fUFJFVj1cImFsaWNlLWNhcm91c2VsX19wcmV2LWJ0blwiLGUuQlVUVE9OX1BSRVZfV1JBUFBFUj1cImFsaWNlLWNhcm91c2VsX19wcmV2LWJ0bi13cmFwcGVyXCIsZS5CVVRUT05fUFJFVl9JVEVNPVwiYWxpY2UtY2Fyb3VzZWxfX3ByZXYtYnRuLWl0ZW1cIixlLkJVVFRPTl9ORVhUPVwiYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuXCIsZS5CVVRUT05fTkVYVF9XUkFQUEVSPVwiYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuLXdyYXBwZXJcIixlLkJVVFRPTl9ORVhUX0lURU09XCJhbGljZS1jYXJvdXNlbF9fbmV4dC1idG4taXRlbVwifShDbGFzc25hbWVzPWV4cG9ydHMuQ2xhc3NuYW1lc3x8KGV4cG9ydHMuQ2xhc3NuYW1lcz17fSkpLGZ1bmN0aW9uKGUpe2UuQUNUSVZFPVwiX19hY3RpdmVcIixlLklOQUNUSVZFPVwiX19pbmFjdGl2ZVwiLGUuQ0xPTkVEPVwiX19jbG9uZWRcIixlLkNVU1RPTT1cIl9fY3VzdG9tXCIsZS5QQVVTRT1cIl9fcGF1c2VcIixlLlNFUEFSQVRPUj1cIl9fc2VwYXJhdG9yXCIsZS5TU1I9XCJfX3NzclwiLGUuVEFSR0VUPVwiX190YXJnZXRcIn0oTW9kaWZpZXJzPWV4cG9ydHMuTW9kaWZpZXJzfHwoZXhwb3J0cy5Nb2RpZmllcnM9e30pKTsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmRlZmF1bHRQcm9wcz12b2lkIDA7dmFyIHR5cGVzXzE9cmVxdWlyZShcIi4vdHlwZXNcIik7ZXhwb3J0cy5kZWZhdWx0UHJvcHM9e2FjdGl2ZUluZGV4OjAsYW5pbWF0aW9uRHVyYXRpb246NDAwLGFuaW1hdGlvbkVhc2luZ0Z1bmN0aW9uOlwiZWFzZVwiLGFuaW1hdGlvblR5cGU6dHlwZXNfMS5BbmltYXRpb25UeXBlLlNMSURFLGF1dG9IZWlnaHQ6ITEsYXV0b1dpZHRoOiExLGF1dG9QbGF5OiExLGF1dG9QbGF5Q29udHJvbHM6ITEsYXV0b1BsYXlEaXJlY3Rpb246dHlwZXNfMS5BdXRvcGxheURpcmVjdGlvbi5MVFIsYXV0b1BsYXlJbnRlcnZhbDo0MDAsYXV0b1BsYXlTdHJhdGVneTp0eXBlc18xLkF1dG9QbGF5U3RyYXRlZ3kuREVGQVVMVCxjaGlsZHJlbjp2b2lkIDAsY29udHJvbHNTdHJhdGVneTp0eXBlc18xLkNvbnRyb2xzU3RyYXRlZ3kuREVGQVVMVCxkaXNhYmxlQnV0dG9uc0NvbnRyb2xzOiExLGRpc2FibGVEb3RzQ29udHJvbHM6ITEsZGlzYWJsZVNsaWRlSW5mbzohMCxpbmZpbml0ZTohMSxpbm5lcldpZHRoOnZvaWQgMCxpdGVtczp2b2lkIDAsa2V5Ym9hcmROYXZpZ2F0aW9uOiExLG1vdXNlVHJhY2tpbmc6ITEsbmFtZTpcIlwiLHBhZGRpbmdMZWZ0OjAscGFkZGluZ1JpZ2h0OjAscmVzcG9uc2l2ZTp2b2lkIDAsc3dpcGVEZWx0YToyMCxzd2lwZUV4dHJhUGFkZGluZzoyMDAsc3NyU2lsZW50TW9kZTohMCx0b3VjaFRyYWNraW5nOiEwLHRvdWNoTW92ZURlZmF1bHRFdmVudHM6ITAsb25Jbml0aWFsaXplZDpmdW5jdGlvbigpe30sb25SZXNpemVkOmZ1bmN0aW9uKCl7fSxvblJlc2l6ZUV2ZW50OnZvaWQgMCxvblNsaWRlQ2hhbmdlOmZ1bmN0aW9uKCl7fSxvblNsaWRlQ2hhbmdlZDpmdW5jdGlvbigpe319OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2Fzc2lnbj1mdW5jdGlvbigpe3JldHVybihfX2Fzc2lnbj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihvKXtmb3IodmFyIHQscj0xLGk9YXJndW1lbnRzLmxlbmd0aDtyPGk7cisrKWZvcih2YXIgcyBpbiB0PWFyZ3VtZW50c1tyXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxzKSYmKG9bc109dFtzXSk7cmV0dXJuIG99KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LG1hcFBhcnRpYWxDb29yZHM9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMubWFwUG9zaXRpb25Db29yZHM9ZXhwb3J0cy5tYXBQYXJ0aWFsQ29vcmRzPXZvaWQgMCxmdW5jdGlvbihvKXtyZXR1cm4gby5tYXAoZnVuY3Rpb24obyl7cmV0dXJue3dpZHRoOm8ud2lkdGgscG9zaXRpb246MH19KX0pLG1hcFBvc2l0aW9uQ29vcmRzPShleHBvcnRzLm1hcFBhcnRpYWxDb29yZHM9bWFwUGFydGlhbENvb3JkcyxmdW5jdGlvbihvLHQpe3JldHVybiB2b2lkIDA9PT10JiYodD0wKSxvLm1hcChmdW5jdGlvbihvKXtyZXR1cm4gby5wb3NpdGlvbj50P19fYXNzaWduKF9fYXNzaWduKHt9LG8pLHtwb3NpdGlvbjp0fSk6b30pfSk7ZXhwb3J0cy5tYXBQb3NpdGlvbkNvb3Jkcz1tYXBQb3NpdGlvbkNvb3JkczsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmlzVmVydGljYWxUb3VjaG1vdmVEZXRlY3RlZD1leHBvcnRzLmdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbj1leHBvcnRzLmdldEZhZGVvdXRBbmltYXRpb25JbmRleD1leHBvcnRzLmdldFN3aXBlVG91Y2hlbmRJbmRleD1leHBvcnRzLmdldFN3aXBlVG91Y2hlbmRQb3NpdGlvbj1leHBvcnRzLmdldFN3aXBlVHJhbnNmb3JtYXRpb25DdXJzb3I9ZXhwb3J0cy5nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleD1leHBvcnRzLmdldFN3aXBlU2hpZnRWYWx1ZT1leHBvcnRzLmdldEl0ZW1Db29yZHM9ZXhwb3J0cy5nZXRJc0xlZnREaXJlY3Rpb249ZXhwb3J0cy5zaG91bGRSZWNhbGN1bGF0ZVN3aXBlUG9zaXRpb249ZXhwb3J0cy5nZXRTd2lwZUxpbWl0TWF4PWV4cG9ydHMuZ2V0U3dpcGVMaW1pdE1pbj1leHBvcnRzLnNob3VsZENhbmNlbFNsaWRlQW5pbWF0aW9uPWV4cG9ydHMuc2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4PWV4cG9ydHMuZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4PWV4cG9ydHMuZ2V0QWN0aXZlSW5kZXg9ZXhwb3J0cy5nZXRTdGFydEluZGV4PWV4cG9ydHMuZ2V0U2hpZnRJbmRleD12b2lkIDA7dmFyIGdldFNoaWZ0SW5kZXg9ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZT12b2lkIDA9PT1lPzA6ZSkrKHQ9dm9pZCAwPT09dD8wOnQpfSxnZXRTdGFydEluZGV4PShleHBvcnRzLmdldFNoaWZ0SW5kZXg9Z2V0U2hpZnRJbmRleCxmdW5jdGlvbihlLHQpe2lmKHZvaWQgMD09PWUmJihlPTApLHQ9dm9pZCAwPT09dD8wOnQpe2lmKHQ8PWUpcmV0dXJuIHQtMTtpZigwPGUpcmV0dXJuIGV9cmV0dXJuIDB9KSxnZXRBY3RpdmVJbmRleD0oZXhwb3J0cy5nZXRTdGFydEluZGV4PWdldFN0YXJ0SW5kZXgsZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdGFydEluZGV4LHQ9dm9pZCAwPT09dD8wOnQsaT1lLml0ZW1zQ291bnQsZT1lLmluZmluaXRlO3JldHVybiB2b2lkIDAhPT1lJiZlP3Q6KDAsZXhwb3J0cy5nZXRTdGFydEluZGV4KSh0LHZvaWQgMD09PWk/MDppKX0pLGdldFVwZGF0ZVNsaWRlUG9zaXRpb25JbmRleD0oZXhwb3J0cy5nZXRBY3RpdmVJbmRleD1nZXRBY3RpdmVJbmRleCxmdW5jdGlvbihlLHQpe3JldHVybiBlPDA/dC0xOnQ8PWU/MDplfSksc2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4PShleHBvcnRzLmdldFVwZGF0ZVNsaWRlUG9zaXRpb25JbmRleD1nZXRVcGRhdGVTbGlkZVBvc2l0aW9uSW5kZXgsZnVuY3Rpb24oZSx0KXtyZXR1cm4gZTwwfHx0PD1lfSksc2hvdWxkQ2FuY2VsU2xpZGVBbmltYXRpb249KGV4cG9ydHMuc2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4PXNob3VsZFJlY2FsY3VsYXRlU2xpZGVJbmRleCxmdW5jdGlvbihlLHQpe3JldHVybiBlPDB8fHQ8PWV9KSxnZXRTd2lwZUxpbWl0TWluPShleHBvcnRzLnNob3VsZENhbmNlbFNsaWRlQW5pbWF0aW9uPXNob3VsZENhbmNlbFNsaWRlQW5pbWF0aW9uLGZ1bmN0aW9uKGUsdCl7dmFyIGk9ZS5pdGVtc09mZnNldCxlPWUudHJhbnNmb3JtYXRpb25TZXQsZT12b2lkIDA9PT1lP1tdOmUsbz10LmluZmluaXRlLHQ9dC5zd2lwZUV4dHJhUGFkZGluZztyZXR1cm4gbz8oZVt2b2lkIDA9PT1pPzA6aV18fHt9KS5wb3NpdGlvbjoobz0oZVswXXx8e30pLndpZHRoLE1hdGgubWluKHZvaWQgMD09PXQ/MDp0LHZvaWQgMD09PW8/MDpvKSl9KSxnZXRTd2lwZUxpbWl0TWF4PShleHBvcnRzLmdldFN3aXBlTGltaXRNaW49Z2V0U3dpcGVMaW1pdE1pbixmdW5jdGlvbihlLHQpe3ZhciBpPXQuaW5maW5pdGUsdD10LnN3aXBlRXh0cmFQYWRkaW5nLHQ9dm9pZCAwPT09dD8wOnQsbz1lLml0ZW1zQ291bnQsbj1lLml0ZW1zT2Zmc2V0LHI9ZS5pdGVtc0luU2xpZGUscj12b2lkIDA9PT1yPzE6cixlPWUudHJhbnNmb3JtYXRpb25TZXQsZT12b2lkIDA9PT1lP1tdOmU7cmV0dXJuIGk/KGVbKHZvaWQgMD09PW8/MTpvKSsoMCxleHBvcnRzLmdldFNoaWZ0SW5kZXgpKHIsdm9pZCAwPT09bj8wOm4pXXx8e30pLnBvc2l0aW9ufHwwOigwLGV4cG9ydHMuZ2V0SXRlbUNvb3JkcykoLXIsZSkucG9zaXRpb24rdH0pLHNob3VsZFJlY2FsY3VsYXRlU3dpcGVQb3NpdGlvbj0oZXhwb3J0cy5nZXRTd2lwZUxpbWl0TWF4PWdldFN3aXBlTGltaXRNYXgsZnVuY3Rpb24oZSx0LGkpe3JldHVybi10PD1lfHxNYXRoLmFicyhlKT49aX0pLGdldElzTGVmdERpcmVjdGlvbj0oZXhwb3J0cy5zaG91bGRSZWNhbGN1bGF0ZVN3aXBlUG9zaXRpb249c2hvdWxkUmVjYWxjdWxhdGVTd2lwZVBvc2l0aW9uLGZ1bmN0aW9uKGUpe3JldHVybihlPXZvaWQgMD09PWU/MDplKTwwfSksZ2V0SXRlbUNvb3Jkcz0oZXhwb3J0cy5nZXRJc0xlZnREaXJlY3Rpb249Z2V0SXNMZWZ0RGlyZWN0aW9uLGZ1bmN0aW9uKGUsdCl7cmV0dXJuKHQ9dm9pZCAwPT09dD9bXTp0KS5zbGljZShlPXZvaWQgMD09PWU/MDplKVswXXx8e3Bvc2l0aW9uOjAsd2lkdGg6MH19KSxnZXRTd2lwZVNoaWZ0VmFsdWU9KGV4cG9ydHMuZ2V0SXRlbUNvb3Jkcz1nZXRJdGVtQ29vcmRzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PWUmJihlPTApLHZvaWQgMD09PXQmJih0PVtdKSwoMCxleHBvcnRzLmdldEl0ZW1Db29yZHMpKGUsdCkucG9zaXRpb259KSxnZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleD0oZXhwb3J0cy5nZXRTd2lwZVNoaWZ0VmFsdWU9Z2V0U3dpcGVTaGlmdFZhbHVlLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PTApLChlPXZvaWQgMD09PWU/W106ZSkuZmluZEluZGV4KGZ1bmN0aW9uKGUpe3JldHVybiBlLnBvc2l0aW9uPj1NYXRoLmFicyh0KX0pfSksZ2V0U3dpcGVUcmFuc2Zvcm1hdGlvbkN1cnNvcj0oZXhwb3J0cy5nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleD1nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleCxmdW5jdGlvbihlLHQsaSl7dm9pZCAwPT09ZSYmKGU9W10pLHZvaWQgMD09PXQmJih0PTApLHZvaWQgMD09PWkmJihpPTApO2U9KDAsZXhwb3J0cy5nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleCkoZSx0KTtyZXR1cm4oMCxleHBvcnRzLmdldElzTGVmdERpcmVjdGlvbikoaSk/ZTplLTF9KSxnZXRTd2lwZVRvdWNoZW5kUG9zaXRpb249KGV4cG9ydHMuZ2V0U3dpcGVUcmFuc2Zvcm1hdGlvbkN1cnNvcj1nZXRTd2lwZVRyYW5zZm9ybWF0aW9uQ3Vyc29yLGZ1bmN0aW9uKGUsdCxpKXt2b2lkIDA9PT1pJiYoaT0wKTt2YXIgbz1lLmluZmluaXRlLG49ZS5hdXRvV2lkdGgscj1lLmlzU3RhZ2VDb250ZW50UGFydGlhbCxzPWUuc3dpcGVBbGxvd2VkUG9zaXRpb25NYXgsZT1lLnRyYW5zZm9ybWF0aW9uU2V0LGk9KDAsZXhwb3J0cy5nZXRTd2lwZVRyYW5zZm9ybWF0aW9uQ3Vyc29yKShlLGksdCksdD0oMCxleHBvcnRzLmdldEl0ZW1Db29yZHMpKGksZSkucG9zaXRpb247aWYoIW8pe2lmKG4mJnIpcmV0dXJuIDA7aWYoczx0KXJldHVybi1zfXJldHVybi10fSksZ2V0U3dpcGVUb3VjaGVuZEluZGV4PShleHBvcnRzLmdldFN3aXBlVG91Y2hlbmRQb3NpdGlvbj1nZXRTd2lwZVRvdWNoZW5kUG9zaXRpb24sZnVuY3Rpb24oZSx0KXt2YXIgaT10LnRyYW5zZm9ybWF0aW9uU2V0LG89dC5pdGVtc0luU2xpZGUsbj10Lml0ZW1zT2Zmc2V0LHI9dC5pdGVtc0NvdW50LHM9dC5pbmZpbml0ZSxkPXQuaXNTdGFnZUNvbnRlbnRQYXJ0aWFsLGE9dC5hY3RpdmVJbmRleCx0PXQudHJhbnNsYXRlM2Q7cmV0dXJuIHN8fCFkJiZ0IT09TWF0aC5hYnMoZSk/KGQ9KDAsZXhwb3J0cy5nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleCkoaSxlKSxzP2Q8KHQ9KDAsZXhwb3J0cy5nZXRTaGlmdEluZGV4KShvLG4pKT9yLW8tbitkOnQrcjw9ZD9kLSh0K3IpOmQtdDpkKTphfSksZ2V0RmFkZW91dEFuaW1hdGlvbkluZGV4PShleHBvcnRzLmdldFN3aXBlVG91Y2hlbmRJbmRleD1nZXRTd2lwZVRvdWNoZW5kSW5kZXgsZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pbmZpbml0ZSxpPWUuYWN0aXZlSW5kZXgsZT1lLml0ZW1zSW5TbGlkZTtyZXR1cm4gdD9pK2U6aX0pLGdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbj0oZXhwb3J0cy5nZXRGYWRlb3V0QW5pbWF0aW9uSW5kZXg9Z2V0RmFkZW91dEFuaW1hdGlvbkluZGV4LGZ1bmN0aW9uKGUsdCl7dmFyIGk9dC5hY3RpdmVJbmRleCx0PXQuc3RhZ2VXaWR0aDtyZXR1cm4gZTxpPyhpLWUpKi10fHwwOihlLWkpKnR8fDB9KSxpc1ZlcnRpY2FsVG91Y2htb3ZlRGV0ZWN0ZWQ9KGV4cG9ydHMuZ2V0RmFkZW91dEFuaW1hdGlvblBvc2l0aW9uPWdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbixmdW5jdGlvbihlLHQsaSl7cmV0dXJuIGU8KGk9dm9pZCAwPT09aT8wOmkpfHxlPC4xKnR9KTtleHBvcnRzLmlzVmVydGljYWxUb3VjaG1vdmVEZXRlY3RlZD1pc1ZlcnRpY2FsVG91Y2htb3ZlRGV0ZWN0ZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9fYXNzaWduPWZ1bmN0aW9uKCl7cmV0dXJuKF9fYXNzaWduPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxyPTEsbj1hcmd1bWVudHMubGVuZ3RoO3I8bjtyKyspZm9yKHZhciBvIGluIGU9YXJndW1lbnRzW3JdKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pJiYodFtvXT1lW29dKTtyZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sY29tbW9uXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuZ2V0VHJhbnNmb3JtTWF0cml4PWV4cG9ydHMuZ2V0VHJhbnNsYXRlWFByb3BlcnR5PWV4cG9ydHMuZ2V0VG91Y2htb3ZlVHJhbnNsYXRlUG9zaXRpb249ZXhwb3J0cy5nZXRUcmFuc2xhdGUzZFByb3BlcnR5PWV4cG9ydHMuZ2V0UmVuZGVyU3RhZ2VJdGVtU3R5bGVzPWV4cG9ydHMuZ2V0UmVuZGVyU3RhZ2VTdHlsZXM9ZXhwb3J0cy5nZXRUcmFuc2l0aW9uUHJvcGVydHk9ZXhwb3J0cy5nZXRSZW5kZXJXcmFwcGVyU3R5bGVzPWV4cG9ydHMuYW5pbWF0ZT1leHBvcnRzLnNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50PWV4cG9ydHMuZ2V0RWxlbWVudEZpcnN0Q2hpbGQ9ZXhwb3J0cy5nZXRFbGVtZW50Q3Vyc29yPWV4cG9ydHMuZ2V0QXV0b2hlaWdodFByb3BlcnR5PWV4cG9ydHMuZ2V0RWxlbWVudERpbWVuc2lvbnM9ZXhwb3J0cy5nZXRJdGVtV2lkdGg9ZXhwb3J0cy5jcmVhdGVEZWZhdWx0VHJhbnNmb3JtYXRpb25TZXQ9ZXhwb3J0cy5jcmVhdGVBdXRvd2lkdGhUcmFuc2Zvcm1hdGlvblNldD1leHBvcnRzLmlzRWxlbWVudD1leHBvcnRzLmNyZWF0ZUNsb25lcz1leHBvcnRzLmdldEl0ZW1zT2Zmc2V0PWV4cG9ydHMuZ2V0SXRlbXNDb3VudD1leHBvcnRzLmdldFNsaWRlcz12b2lkIDAscmVxdWlyZShcIi4vY29tbW9uXCIpKSxtYXBwZXJzXzE9cmVxdWlyZShcIi4vbWFwcGVyc1wiKSxtYXRoXzE9cmVxdWlyZShcIi4vbWF0aFwiKSxnZXRTbGlkZXM9ZnVuY3Rpb24odCl7dmFyIGU9dC5jaGlsZHJlbix0PXQuaXRlbXM7cmV0dXJuIGU/ZS5sZW5ndGg/ZTpbZV06dm9pZCAwPT09dD9bXTp0fSxnZXRJdGVtc0NvdW50PShleHBvcnRzLmdldFNsaWRlcz1nZXRTbGlkZXMsZnVuY3Rpb24odCl7cmV0dXJuKDAsZXhwb3J0cy5nZXRTbGlkZXMpKHQpLmxlbmd0aH0pLGdldEl0ZW1zT2Zmc2V0PShleHBvcnRzLmdldEl0ZW1zQ291bnQ9Z2V0SXRlbXNDb3VudCxmdW5jdGlvbih0KXt2YXIgZT10LmluZmluaXRlLHI9dC5wYWRkaW5nUmlnaHQsdD10LnBhZGRpbmdMZWZ0O3JldHVybiBlJiYodHx8cik/MTowfSksY3JlYXRlQ2xvbmVzPShleHBvcnRzLmdldEl0ZW1zT2Zmc2V0PWdldEl0ZW1zT2Zmc2V0LGZ1bmN0aW9uKHQpe3ZhciBlLHIsbixvLGk9KDAsZXhwb3J0cy5nZXRTbGlkZXMpKHQpO3JldHVybiB0LmluZmluaXRlPyhlPSgwLGV4cG9ydHMuZ2V0SXRlbXNDb3VudCkodCksbz0oMCxleHBvcnRzLmdldEl0ZW1zT2Zmc2V0KSh0KSx0PSgwLGNvbW1vbl8xLmdldEl0ZW1zSW5TbGlkZSkoZSx0KSxuPU1hdGgubWluKHQsZSkrbyxyPWkuc2xpY2UoMCxuKSxuPWkuc2xpY2UoLW4pLG8mJnQ9PT1lJiYobz1pWzBdLHQ9aS5zbGljZSgtMSlbMF0sbi51bnNoaWZ0KHQpLHIucHVzaChvKSksbi5jb25jYXQoaSxyKSk6aX0pLGlzRWxlbWVudD0oZXhwb3J0cy5jcmVhdGVDbG9uZXM9Y3JlYXRlQ2xvbmVzLGZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4gdCBpbnN0YW5jZW9mIEVsZW1lbnR8fHQgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnR9Y2F0Y2godCl7cmV0dXJuITF9fSksY3JlYXRlQXV0b3dpZHRoVHJhbnNmb3JtYXRpb25TZXQ9KGV4cG9ydHMuaXNFbGVtZW50PWlzRWxlbWVudCxmdW5jdGlvbih0LGksZSl7dm9pZCAwPT09aSYmKGk9MCksdm9pZCAwPT09ZSYmKGU9ITEpO3ZhciBzPTAsYT0hMCxyPVtdO3JldHVybigwLGV4cG9ydHMuaXNFbGVtZW50KSh0KSYmKHI9QXJyYXkuZnJvbSgobnVsbD09dD92b2lkIDA6dC5jaGlsZHJlbil8fFtdKS5yZWR1Y2UoZnVuY3Rpb24odCxlLHIpe3ZhciBuPTAscj1yLTEsbz10W3JdLGU9Z2V0RWxlbWVudERpbWVuc2lvbnMobnVsbD09ZT92b2lkIDA6ZS5maXJzdENoaWxkKS53aWR0aCxlPXZvaWQgMD09PWU/MDplO3JldHVybiBhPShzKz1lKTw9aSxvJiYobj0wPT1yP28ud2lkdGg6by53aWR0aCtvLnBvc2l0aW9uKSx0LnB1c2goe3Bvc2l0aW9uOm4sd2lkdGg6ZX0pLHR9LFtdKSxlfHwocj1hPygwLG1hcHBlcnNfMS5tYXBQYXJ0aWFsQ29vcmRzKShyKToodD1zLWksKDAsbWFwcGVyc18xLm1hcFBvc2l0aW9uQ29vcmRzKShyLHQpKSkpLHtjb29yZHM6cixjb250ZW50OnMscGFydGlhbDphfX0pLGNyZWF0ZURlZmF1bHRUcmFuc2Zvcm1hdGlvblNldD0oZXhwb3J0cy5jcmVhdGVBdXRvd2lkdGhUcmFuc2Zvcm1hdGlvblNldD1jcmVhdGVBdXRvd2lkdGhUcmFuc2Zvcm1hdGlvblNldCxmdW5jdGlvbih0LG8sZSxyKXt2b2lkIDA9PT1yJiYocj0hMSk7dmFyIGk9MCxzPSEwLG49W10sYT0oMCxleHBvcnRzLmdldEl0ZW1XaWR0aCkobyxlKTtyZXR1cm4gbj10LnJlZHVjZShmdW5jdGlvbih0LGUscil7dmFyIG49MCxyPXRbci0xXTtyZXR1cm4gcz0oaSs9YSk8PW8sciYmKG49YStyLnBvc2l0aW9ufHwwKSx0LnB1c2goe3dpZHRoOmEscG9zaXRpb246bn0pLHR9LFtdKSx7Y29vcmRzOm49cj9uOnM/KDAsbWFwcGVyc18xLm1hcFBhcnRpYWxDb29yZHMpKG4pOihlPWktbywoMCxtYXBwZXJzXzEubWFwUG9zaXRpb25Db29yZHMpKG4sZSkpLGNvbnRlbnQ6aSxwYXJ0aWFsOnN9fSksZ2V0SXRlbVdpZHRoPShleHBvcnRzLmNyZWF0ZURlZmF1bHRUcmFuc2Zvcm1hdGlvblNldD1jcmVhdGVEZWZhdWx0VHJhbnNmb3JtYXRpb25TZXQsZnVuY3Rpb24odCxlKXtyZXR1cm4gMDxlP3QvZTp0fSk7ZnVuY3Rpb24gZ2V0RWxlbWVudERpbWVuc2lvbnModCl7cmV0dXJuIHQmJnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0P3t3aWR0aDoodD10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKS53aWR0aCxoZWlnaHQ6dC5oZWlnaHR9Ont3aWR0aDowLGhlaWdodDowfX1leHBvcnRzLmdldEl0ZW1XaWR0aD1nZXRJdGVtV2lkdGgsZXhwb3J0cy5nZXRFbGVtZW50RGltZW5zaW9ucz1nZXRFbGVtZW50RGltZW5zaW9uczt2YXIgZ2V0QXV0b2hlaWdodFByb3BlcnR5PWZ1bmN0aW9uKHQsZSxyKXt2YXIgZT0oMCxleHBvcnRzLmdldEVsZW1lbnRDdXJzb3IpKGUscikscj0oMCxleHBvcnRzLmdldEVsZW1lbnRGaXJzdENoaWxkKSh0LGUpO2lmKCgwLGV4cG9ydHMuaXNFbGVtZW50KShyKSlyZXR1cm4gdD13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShyKSxlPXBhcnNlRmxvYXQodC5tYXJnaW5Ub3ApLHQ9cGFyc2VGbG9hdCh0Lm1hcmdpbkJvdHRvbSksTWF0aC5jZWlsKHIub2Zmc2V0SGVpZ2h0K2UrdCl9LGdldEVsZW1lbnRDdXJzb3I9KGV4cG9ydHMuZ2V0QXV0b2hlaWdodFByb3BlcnR5PWdldEF1dG9oZWlnaHRQcm9wZXJ0eSxmdW5jdGlvbih0LGUpe3ZhciByPWUuYWN0aXZlSW5kZXgsZT1lLml0ZW1zSW5TbGlkZTtyZXR1cm4gdC5pbmZpbml0ZT9yK2UrKDAsZXhwb3J0cy5nZXRJdGVtc09mZnNldCkodCk6cn0pLGdldEVsZW1lbnRGaXJzdENoaWxkPShleHBvcnRzLmdldEVsZW1lbnRDdXJzb3I9Z2V0RWxlbWVudEN1cnNvcixmdW5jdGlvbih0LGUpe3Q9dCYmdC5jaGlsZHJlbnx8W107cmV0dXJuIHRbZV0mJnRbZV0uZmlyc3RDaGlsZHx8bnVsbH0pO2Z1bmN0aW9uIHNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50KHQsZSxyKXtyZXR1cm4oZT12b2lkIDA9PT1lP3t9OmUpLndpZHRoIT09KHI9dm9pZCAwPT09cj97fTpyKS53aWR0aH1mdW5jdGlvbiBhbmltYXRlKHQsZSl7dmFyIGU9ZXx8e30scj1lLnBvc2l0aW9uLHI9dm9pZCAwPT09cj8wOnIsbj1lLmFuaW1hdGlvbkR1cmF0aW9uLG49dm9pZCAwPT09bj8wOm4sZT1lLmFuaW1hdGlvbkVhc2luZ0Z1bmN0aW9uLGU9dm9pZCAwPT09ZT9cImVhc2VcIjplO3JldHVybiB0JiYoMCxleHBvcnRzLmlzRWxlbWVudCkodCkmJih0LnN0eWxlLnRyYW5zaXRpb249XCJ0cmFuc2Zvcm0gXCIuY29uY2F0KG4sXCJtcyBcIikuY29uY2F0KGUsXCIgMG1zXCIpLHQuc3R5bGUudHJhbnNmb3JtPVwidHJhbnNsYXRlM2QoXCIuY29uY2F0KHIsXCJweCwgMCwgMClcIikpLHR9ZXhwb3J0cy5nZXRFbGVtZW50Rmlyc3RDaGlsZD1nZXRFbGVtZW50Rmlyc3RDaGlsZCxleHBvcnRzLnNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50PXNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50LGV4cG9ydHMuYW5pbWF0ZT1hbmltYXRlO3ZhciBnZXRSZW5kZXJXcmFwcGVyU3R5bGVzPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbj10fHx7fSxvPW4ucGFkZGluZ0xlZnQsaT1uLnBhZGRpbmdSaWdodCxzPW4uYXV0b0hlaWdodCxuPW4uYW5pbWF0aW9uRHVyYXRpb24scz1zPygwLGV4cG9ydHMuZ2V0QXV0b2hlaWdodFByb3BlcnR5KShyLHQsZSk6dm9pZCAwO3JldHVybntoZWlnaHQ6cyx0cmFuc2l0aW9uOnM/XCJoZWlnaHQgXCIuY29uY2F0KG4sXCJtc1wiKTp2b2lkIDAscGFkZGluZ0xlZnQ6XCJcIi5jb25jYXQobyxcInB4XCIpLHBhZGRpbmdSaWdodDpcIlwiLmNvbmNhdChpLFwicHhcIil9fSxnZXRUcmFuc2l0aW9uUHJvcGVydHk9KGV4cG9ydHMuZ2V0UmVuZGVyV3JhcHBlclN0eWxlcz1nZXRSZW5kZXJXcmFwcGVyU3R5bGVzLGZ1bmN0aW9uKHQpe3ZhciB0PXR8fHt9LGU9dC5hbmltYXRpb25EdXJhdGlvbix0PXQuYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb24sdD12b2lkIDA9PT10P1wiZWFzZVwiOnQ7cmV0dXJuXCJ0cmFuc2Zvcm0gXCIuY29uY2F0KHZvaWQgMD09PWU/MDplLFwibXMgXCIpLmNvbmNhdCh0LFwiIDBtc1wiKX0pLGdldFJlbmRlclN0YWdlU3R5bGVzPShleHBvcnRzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eT1nZXRUcmFuc2l0aW9uUHJvcGVydHksZnVuY3Rpb24odCxlKXt0PSh0fHx7fSkudHJhbnNsYXRlM2QsdD1cInRyYW5zbGF0ZTNkKFwiLmNvbmNhdCgtKHZvaWQgMD09PXQ/MDp0KSxcInB4LCAwLCAwKVwiKTtyZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sZSkse3RyYW5zZm9ybTp0fSl9KSxnZXRSZW5kZXJTdGFnZUl0ZW1TdHlsZXM9KGV4cG9ydHMuZ2V0UmVuZGVyU3RhZ2VTdHlsZXM9Z2V0UmVuZGVyU3RhZ2VTdHlsZXMsZnVuY3Rpb24odCxlKXt2YXIgcj1lLnRyYW5zZm9ybWF0aW9uU2V0LG49ZS5mYWRlb3V0QW5pbWF0aW9uSW5kZXgsbz1lLmZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbixpPWUuZmFkZW91dEFuaW1hdGlvblByb2Nlc3NpbmcsZT1lLmFuaW1hdGlvbkR1cmF0aW9uLHI9KHJbdF18fHt9KS53aWR0aDtyZXR1cm4gaSYmbj09PXQ/e3RyYW5zZm9ybTpcInRyYW5zbGF0ZVgoXCIuY29uY2F0KG8sXCJweClcIiksYW5pbWF0aW9uRHVyYXRpb246XCJcIi5jb25jYXQoZSxcIm1zXCIpLHdpZHRoOlwiXCIuY29uY2F0KHIsXCJweFwiKX06e3dpZHRoOnJ9fSksZ2V0VHJhbnNsYXRlM2RQcm9wZXJ0eT0oZXhwb3J0cy5nZXRSZW5kZXJTdGFnZUl0ZW1TdHlsZXM9Z2V0UmVuZGVyU3RhZ2VJdGVtU3R5bGVzLGZ1bmN0aW9uKHQsZSl7dmFyIHI9dCxuPWUuaW5maW5pdGUsbz1lLml0ZW1zT2Zmc2V0LGk9ZS5pdGVtc0luU2xpZGUsZT1lLnRyYW5zZm9ybWF0aW9uU2V0O3JldHVybigodm9pZCAwPT09ZT9bXTplKVtyPW4/dCsoMCxtYXRoXzEuZ2V0U2hpZnRJbmRleCkodm9pZCAwPT09aT8wOmksdm9pZCAwPT09bz8wOm8pOnJdfHx7fSkucG9zaXRpb258fDB9KSxnZXRUb3VjaG1vdmVUcmFuc2xhdGVQb3NpdGlvbj0oZXhwb3J0cy5nZXRUcmFuc2xhdGUzZFByb3BlcnR5PWdldFRyYW5zbGF0ZTNkUHJvcGVydHksZnVuY3Rpb24odCxlKXtyZXR1cm4tKGUtTWF0aC5mbG9vcih0KSl9KTtmdW5jdGlvbiBnZXRUcmFuc2xhdGVYUHJvcGVydHkodCl7dD1nZXRUcmFuc2Zvcm1NYXRyaXgodCksdD10JiZ0WzRdfHxcIlwiO3JldHVybiBOdW1iZXIodCl9ZnVuY3Rpb24gZ2V0VHJhbnNmb3JtTWF0cml4KHQpe3JldHVybiB0JiYoMCxleHBvcnRzLmlzRWxlbWVudCkodCkmJndpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpLnRyYW5zZm9ybS5tYXRjaCgvKC0/WzAtOS5dKykvZyl8fFtdfWV4cG9ydHMuZ2V0VG91Y2htb3ZlVHJhbnNsYXRlUG9zaXRpb249Z2V0VG91Y2htb3ZlVHJhbnNsYXRlUG9zaXRpb24sZXhwb3J0cy5nZXRUcmFuc2xhdGVYUHJvcGVydHk9Z2V0VHJhbnNsYXRlWFByb3BlcnR5LGV4cG9ydHMuZ2V0VHJhbnNmb3JtTWF0cml4PWdldFRyYW5zZm9ybU1hdHJpeDsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmNhbGN1bGF0ZUluaXRpYWxTdGF0ZT1leHBvcnRzLmdldEl0ZW1zSW5TbGlkZT1leHBvcnRzLmdldElzU3RhZ2VDb250ZW50UGFydGlhbD1leHBvcnRzLmNvbmNhdENsYXNzbmFtZXM9ZXhwb3J0cy5jYW5Vc2VET009dm9pZCAwO3ZhciBlbGVtZW50c18xPXJlcXVpcmUoXCIuL2VsZW1lbnRzXCIpLG1hdGhfMT1yZXF1aXJlKFwiLi9tYXRoXCIpLGNhblVzZURPTT1mdW5jdGlvbigpe3ZhciB0O3RyeXtyZXR1cm4gQm9vbGVhbihudWxsPT0odD1udWxsPT09d2luZG93fHx2b2lkIDA9PT13aW5kb3c/dm9pZCAwOndpbmRvdy5kb2N1bWVudCk/dm9pZCAwOnQuY3JlYXRlRWxlbWVudCl9Y2F0Y2godCl7cmV0dXJuITF9fSxjb25jYXRDbGFzc25hbWVzPShleHBvcnRzLmNhblVzZURPTT1jYW5Vc2VET00sZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspdFtlXT1hcmd1bWVudHNbZV07cmV0dXJuIHQuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpfSksZ2V0SXNTdGFnZUNvbnRlbnRQYXJ0aWFsPShleHBvcnRzLmNvbmNhdENsYXNzbmFtZXM9Y29uY2F0Q2xhc3NuYW1lcyxmdW5jdGlvbih0LGUsbil7cmV0dXJuIHZvaWQgMD09PWUmJihlPTApLHZvaWQgMD09PW4mJihuPTApLCEodD12b2lkIDAhPT10JiZ0KSYmbjw9ZX0pLGdldEl0ZW1zSW5TbGlkZT0oZXhwb3J0cy5nZXRJc1N0YWdlQ29udGVudFBhcnRpYWw9Z2V0SXNTdGFnZUNvbnRlbnRQYXJ0aWFsLGZ1bmN0aW9uKG4sdCl7dmFyIGksYT0xLG89dC5yZXNwb25zaXZlLGU9dC5hdXRvV2lkdGgscz10LmluZmluaXRlLHQ9dC5pbm5lcldpZHRoO3JldHVybiB2b2lkIDAhPT1lJiZlP3ZvaWQgMCE9PXMmJnM/bjphOihvJiYoZT1PYmplY3Qua2V5cyhvKSkubGVuZ3RoJiYodHx8KDAsZXhwb3J0cy5jYW5Vc2VET00pKCkpJiYoaT12b2lkIDA9PT10P3dpbmRvdy5pbm5lcldpZHRoOnQsZS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBlO051bWJlcih0KTw9aSYmKGU9KHQ9b1t0XSkuaXRlbXMsdD10Lml0ZW1zRml0LGE9XCJjb250YWluXCI9PT0odm9pZCAwPT09dD9cImZpbGxcIjp0KT9lOk1hdGgubWluKGUsbikpfSkpLGF8fDEpfSksY2FsY3VsYXRlSW5pdGlhbFN0YXRlPShleHBvcnRzLmdldEl0ZW1zSW5TbGlkZT1nZXRJdGVtc0luU2xpZGUsZnVuY3Rpb24odCxlLG4pe3ZvaWQgMD09PW4mJihuPSExKTt2YXIgaSxhLG89dC5hbmltYXRpb25EdXJhdGlvbixvPXZvaWQgMD09PW8/MDpvLHM9dC5pbmZpbml0ZSxzPXZvaWQgMCE9PXMmJnMscj10LmF1dG9QbGF5LHI9dm9pZCAwIT09ciYmcixsPXQuYXV0b1dpZHRoLGw9dm9pZCAwIT09bCYmbCxtPSgwLGVsZW1lbnRzXzEuY3JlYXRlQ2xvbmVzKSh0KSxkPSgwLGVsZW1lbnRzXzEuZ2V0VHJhbnNpdGlvblByb3BlcnR5KSgpLGM9KDAsZWxlbWVudHNfMS5nZXRJdGVtc0NvdW50KSh0KSx1PSgwLGVsZW1lbnRzXzEuZ2V0SXRlbXNPZmZzZXQpKHQpLGY9KDAsZXhwb3J0cy5nZXRJdGVtc0luU2xpZGUpKGMsdCksZz0oMCxtYXRoXzEuZ2V0U3RhcnRJbmRleCkodC5hY3RpdmVJbmRleCxjKSxnPSgwLG1hdGhfMS5nZXRBY3RpdmVJbmRleCkoe3N0YXJ0SW5kZXg6ZyxpdGVtc0NvdW50OmMsaW5maW5pdGU6c30pLEk9KDAsZWxlbWVudHNfMS5nZXRFbGVtZW50RGltZW5zaW9ucykoZSkud2lkdGgsUz0oYT0oZT0obD8oaT0oZT0oMCxlbGVtZW50c18xLmNyZWF0ZUF1dG93aWR0aFRyYW5zZm9ybWF0aW9uU2V0KShlLEkscykpLmNvb3JkcyxhPWUuY29udGVudCxlKTooaT0oZT0oMCxlbGVtZW50c18xLmNyZWF0ZURlZmF1bHRUcmFuc2Zvcm1hdGlvblNldCkobSxJLGYscykpLmNvb3JkcyxhPWUuY29udGVudCxlKSkucGFydGlhbCxhKSwoMCxtYXRoXzEuZ2V0SXRlbUNvb3JkcykoLWYsaT1pKS5wb3NpdGlvbikscD0oMCxtYXRoXzEuZ2V0U3dpcGVMaW1pdE1pbikoe2l0ZW1zT2Zmc2V0OnUsdHJhbnNmb3JtYXRpb25TZXQ6aX0sdCksdD0oMCxtYXRoXzEuZ2V0U3dpcGVMaW1pdE1heCkoe2l0ZW1zQ291bnQ6YyxpdGVtc09mZnNldDp1LGl0ZW1zSW5TbGlkZTpmLHRyYW5zZm9ybWF0aW9uU2V0Oml9LHQpLHY9KDAsbWF0aF8xLmdldFN3aXBlU2hpZnRWYWx1ZSkoYyxpKTtyZXR1cm57YWN0aXZlSW5kZXg6ZyxhdXRvV2lkdGg6bCxhbmltYXRpb25EdXJhdGlvbjpvLGNsb25lczptLGluZmluaXRlOnMsaXRlbXNDb3VudDpjLGl0ZW1zSW5TbGlkZTpmLGl0ZW1zT2Zmc2V0OnUsdHJhbnNsYXRlM2Q6KDAsZWxlbWVudHNfMS5nZXRUcmFuc2xhdGUzZFByb3BlcnR5KShnLHtpdGVtc0luU2xpZGU6ZixpdGVtc09mZnNldDp1LHRyYW5zZm9ybWF0aW9uU2V0OmksYXV0b1dpZHRoOmwsaW5maW5pdGU6c30pLHN0YWdlV2lkdGg6SSxzdGFnZUNvbnRlbnRXaWR0aDphLGluaXRpYWxTdGFnZUhlaWdodDowLGlzU3RhZ2VDb250ZW50UGFydGlhbDplLGlzQXV0b1BsYXlpbmc6Qm9vbGVhbihyKSxpc0F1dG9QbGF5Q2FuY2VsZWRPbkFjdGlvbjohMSx0cmFuc2Zvcm1hdGlvblNldDppLHRyYW5zaXRpb246ZCxmYWRlb3V0QW5pbWF0aW9uSW5kZXg6bnVsbCxmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb246bnVsbCxmYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZzohMSxzd2lwZUxpbWl0TWluOnAsc3dpcGVMaW1pdE1heDp0LHN3aXBlQWxsb3dlZFBvc2l0aW9uTWF4OlMsc3dpcGVTaGlmdFZhbHVlOnYsY2FuVXNlRG9tOm58fCgwLGV4cG9ydHMuY2FuVXNlRE9NKSgpfX0pO2V4cG9ydHMuY2FsY3VsYXRlSW5pdGlhbFN0YXRlPWNhbGN1bGF0ZUluaXRpYWxTdGF0ZTsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmlzQ2xvbmVkSXRlbT1leHBvcnRzLmlzVGFyZ2V0SXRlbT1leHBvcnRzLmlzQWN0aXZlSXRlbT1leHBvcnRzLmdldFJlbmRlclN0YWdlSXRlbUNsYXNzZXM9dm9pZCAwO3ZhciB0eXBlc18xPXJlcXVpcmUoXCIuLi90eXBlc1wiKSxjb21tb25fMT1yZXF1aXJlKFwiLi9jb21tb25cIiksbWF0aF8xPXJlcXVpcmUoXCIuL21hdGhcIiksZ2V0UmVuZGVyU3RhZ2VJdGVtQ2xhc3Nlcz1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PWUmJihlPTApO3ZhciBzPXQuZmFkZW91dEFuaW1hdGlvbkluZGV4LGk9KDAsZXhwb3J0cy5pc0FjdGl2ZUl0ZW0pKGUsdCk/dHlwZXNfMS5Nb2RpZmllcnMuQUNUSVZFOlwiXCIsbj0oMCxleHBvcnRzLmlzQ2xvbmVkSXRlbSkoZSx0KT90eXBlc18xLk1vZGlmaWVycy5DTE9ORUQ6XCJcIix0PSgwLGV4cG9ydHMuaXNUYXJnZXRJdGVtKShlLHQpP3R5cGVzXzEuTW9kaWZpZXJzLlRBUkdFVDpcIlwiLGU9ZT09PXM/dHlwZXNfMS5DbGFzc25hbWVzLkFOSU1BVEVEOlwiXCI7cmV0dXJuKDAsY29tbW9uXzEuY29uY2F0Q2xhc3NuYW1lcykodHlwZXNfMS5DbGFzc25hbWVzLlNUQUdFX0lURU0saSxuLHQsZSl9LGlzQWN0aXZlSXRlbT0oZXhwb3J0cy5nZXRSZW5kZXJTdGFnZUl0ZW1DbGFzc2VzPWdldFJlbmRlclN0YWdlSXRlbUNsYXNzZXMsZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT1lJiYoZT0wKTt2YXIgcz10LmFjdGl2ZUluZGV4LGk9dC5pdGVtc0luU2xpZGUsbj10Lml0ZW1zT2Zmc2V0LHI9dC5pbmZpbml0ZSx0PXQuYXV0b1dpZHRoLG89KDAsbWF0aF8xLmdldFNoaWZ0SW5kZXgpKGksbik7cmV0dXJuIHQmJnI/ZS1vPT09cytuOih0PXMrbyxyP3Q8PWUmJmU8dCtpOnM8PWUmJmU8dCl9KSxpc1RhcmdldEl0ZW09KGV4cG9ydHMuaXNBY3RpdmVJdGVtPWlzQWN0aXZlSXRlbSxmdW5jdGlvbihlLHQpe3ZvaWQgMD09PWUmJihlPTApO3ZhciBzPXQuYWN0aXZlSW5kZXgsaT10Lml0ZW1zSW5TbGlkZSxuPXQuaXRlbXNPZmZzZXQscj10LmluZmluaXRlLHQ9dC5hdXRvV2lkdGgsaT0oMCxtYXRoXzEuZ2V0U2hpZnRJbmRleCkoaSxuKTtyZXR1cm4gcj90JiZyP2UtaT09PXMrbjplPT09cytpOmU9PT1zfSksaXNDbG9uZWRJdGVtPShleHBvcnRzLmlzVGFyZ2V0SXRlbT1pc1RhcmdldEl0ZW0sZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT1lJiYoZT0wKTt2YXIgcz10Lml0ZW1zSW5TbGlkZSxpPXQuaXRlbXNPZmZzZXQsbj10Lml0ZW1zQ291bnQscj10LmluZmluaXRlLHQ9dC5hdXRvV2lkdGg7cmV0dXJuISFyJiYodCYmcj9lPHN8fG4tMStzPGU6ZTwodD0oMCxtYXRoXzEuZ2V0U2hpZnRJbmRleCkocyxpKSl8fG4tMSt0PGUpfSk7ZXhwb3J0cy5pc0Nsb25lZEl0ZW09aXNDbG9uZWRJdGVtOyIsIlwidXNlIHN0cmljdFwiO2Z1bmN0aW9uIGRlYm91bmNlKG4saSl7dm9pZCAwPT09aSYmKGk9MCk7ZnVuY3Rpb24gdSgpe2QmJihjbGVhclRpbWVvdXQoZCksZD12b2lkIDApfXZhciBkPXZvaWQgMDtyZXR1cm5bZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcyxvPVtdLHQ9MDt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKW9bdF09YXJndW1lbnRzW3RdO3UoKSxkPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5hcHBseShlLG8pLGQ9dm9pZCAwfSxpKX0sdV19T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5kZWJvdW5jZT12b2lkIDAsZXhwb3J0cy5kZWJvdW5jZT1kZWJvdW5jZTsiLCJcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBkZWJ1Zygpe2Zvcih2YXIgZT1bXSxvPTA7bzxhcmd1bWVudHMubGVuZ3RoO28rKyllW29dPWFyZ3VtZW50c1tvXTtcImRldmVsb3BtZW50XCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOViYmY29uc29sZS5kZWJ1Zy5hcHBseShjb25zb2xlLGUpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuZGVidWc9dm9pZCAwLGV4cG9ydHMuZGVidWc9ZGVidWc7IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5nZXRTbGlkZUl0ZW1JbmZvPWV4cG9ydHMuZ2V0U2xpZGVJbmZvPWV4cG9ydHMuZ2V0U2xpZGVJbmRleEZvck11bHRpcGxlSXRlbXM9ZXhwb3J0cy5nZXRTbGlkZUluZGV4Rm9yTm9uTXVsdGlwbGVJdGVtcz1leHBvcnRzLmdldEFjdGl2ZVNsaWRlRG90c0xlbmd0aD1leHBvcnRzLmdldEFjdGl2ZVNsaWRlSW5kZXg9dm9pZCAwO3ZhciBnZXRBY3RpdmVTbGlkZUluZGV4PWZ1bmN0aW9uKGUsdCl7dmFyIHQ9dHx8e30saT10LmFjdGl2ZUluZGV4LG89dC5pdGVtc0luU2xpZGUsdD10Lml0ZW1zQ291bnQsaT1pK287cmV0dXJuIDE9PT1vPygwLGV4cG9ydHMuZ2V0U2xpZGVJbmRleEZvck5vbk11bHRpcGxlSXRlbXMpKGksbyx0KTooMCxleHBvcnRzLmdldFNsaWRlSW5kZXhGb3JNdWx0aXBsZUl0ZW1zKShpLG8sdCxlKX0sZ2V0QWN0aXZlU2xpZGVEb3RzTGVuZ3RoPShleHBvcnRzLmdldEFjdGl2ZVNsaWRlSW5kZXg9Z2V0QWN0aXZlU2xpZGVJbmRleCxmdW5jdGlvbihlLHQpe3ZhciBpO3JldHVybiB2b2lkIDA9PT10JiYodD0xKSwoZT12b2lkIDA9PT1lPzA6ZSkmJnQ/KGk9TWF0aC5mbG9vcihlL3QpLGUldD09MD9pLTE6aSk6MH0pLGdldFNsaWRlSW5kZXhGb3JOb25NdWx0aXBsZUl0ZW1zPShleHBvcnRzLmdldEFjdGl2ZVNsaWRlRG90c0xlbmd0aD1nZXRBY3RpdmVTbGlkZURvdHNMZW5ndGgsZnVuY3Rpb24oZSx0LGkpe3JldHVybiBlPHQ/aS10Omk8ZT8wOmUtMX0pLGdldFNsaWRlSW5kZXhGb3JNdWx0aXBsZUl0ZW1zPShleHBvcnRzLmdldFNsaWRlSW5kZXhGb3JOb25NdWx0aXBsZUl0ZW1zPWdldFNsaWRlSW5kZXhGb3JOb25NdWx0aXBsZUl0ZW1zLGZ1bmN0aW9uKGUsdCxpLG8pe3ZhciBsPSgwLGV4cG9ydHMuZ2V0QWN0aXZlU2xpZGVEb3RzTGVuZ3RoKShpLHQpO3JldHVybiBlPT09aSt0PzA6b3x8ZTx0JiYwIT09ZT9sOjA9PT1lP2kldD09MD9sOmwtMTowPHQ/TWF0aC5mbG9vcihlL3QpLTE6MH0pLGdldFNsaWRlSW5mbz0oZXhwb3J0cy5nZXRTbGlkZUluZGV4Rm9yTXVsdGlwbGVJdGVtcz1nZXRTbGlkZUluZGV4Rm9yTXVsdGlwbGVJdGVtcyxmdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PTApO2U9KGU9dm9pZCAwPT09ZT8wOmUpKzE7cmV0dXJuIGU8MT9lPXQ6dDxlJiYoZT0xKSx7aXRlbTplLGl0ZW1zQ291bnQ6dH19KSxnZXRTbGlkZUl0ZW1JbmZvPShleHBvcnRzLmdldFNsaWRlSW5mbz1nZXRTbGlkZUluZm8sZnVuY3Rpb24oZSl7dmFyIGU9ZXx8e30sdD1lLml0ZW1zSW5TbGlkZSxpPWUuYWN0aXZlSW5kZXgsbz1lLmluZmluaXRlLGw9ZS5pdGVtc0NvdW50O3JldHVybiBlLmlzU3RhZ2VDb250ZW50UGFydGlhbD97aXNQcmV2U2xpZGVEaXNhYmxlZDohMCxpc05leHRTbGlkZURpc2FibGVkOiEwfTp7aXNQcmV2U2xpZGVEaXNhYmxlZDohMT09PW8mJjA9PT1pLGlzTmV4dFNsaWRlRGlzYWJsZWQ6ITE9PT1vJiZsLXQ8PWl9fSk7ZXhwb3J0cy5nZXRTbGlkZUl0ZW1JbmZvPWdldFNsaWRlSXRlbUluZm87IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5zaG91bGRDYW5jZWxBdXRvUGxheU9uSG92ZXI9ZXhwb3J0cy5zaG91bGRDYW5jZWxBdXRvUGxheU9uQWN0aW9uPWV4cG9ydHMuZ2V0SXRlbUluZGV4Rm9yRG90TmF2aWdhdGlvbj1leHBvcnRzLmNoZWNrSXNUaGVMYXN0RG90SW5kZXg9ZXhwb3J0cy5nZXREb3RzTmF2aWdhdGlvbkxlbmd0aD1leHBvcnRzLmhhc0RvdEZvckVhY2hTbGlkZT1leHBvcnRzLmlzU3RyYXRlZ3k9ZXhwb3J0cy5zaG91bGREaXNhYmxlQnV0dG9ucz1leHBvcnRzLnNob3VsZERpc2FibGVEb3RzPWV4cG9ydHMuc2hvdWxkRGlzYWJsZUNvbnRyb2xzPXZvaWQgMDt2YXIgdHlwZXNfMT1yZXF1aXJlKFwiLi4vdHlwZXNcIik7ZnVuY3Rpb24gc2hvdWxkRGlzYWJsZUNvbnRyb2xzKHQsbyl7dmFyIHQ9KHR8fHt9KS5jb250cm9sc1N0cmF0ZWd5LG89b3x8e30sZT1vLml0ZW1zSW5TbGlkZSxzPW8uaXRlbXNDb3VudCxvPW8uYXV0b1dpZHRoO2lmKCgwLGV4cG9ydHMuaXNTdHJhdGVneSkodCx0eXBlc18xLkNvbnRyb2xzU3RyYXRlZ3kuUkVTUE9OU0lWRSkpcmV0dXJuIW8mJmU9PT1zfWZ1bmN0aW9uIHNob3VsZERpc2FibGVEb3RzKHQsbyl7cmV0dXJuIHQuZGlzYWJsZURvdHNDb250cm9sc3x8c2hvdWxkRGlzYWJsZUNvbnRyb2xzKHQsbyl9ZnVuY3Rpb24gc2hvdWxkRGlzYWJsZUJ1dHRvbnModCxvKXtyZXR1cm4gdC5kaXNhYmxlQnV0dG9uc0NvbnRyb2xzfHwhdC5pbmZpbml0ZSYmc2hvdWxkRGlzYWJsZUNvbnRyb2xzKHQsbyl9ZXhwb3J0cy5zaG91bGREaXNhYmxlQ29udHJvbHM9c2hvdWxkRGlzYWJsZUNvbnRyb2xzLGV4cG9ydHMuc2hvdWxkRGlzYWJsZURvdHM9c2hvdWxkRGlzYWJsZURvdHMsZXhwb3J0cy5zaG91bGREaXNhYmxlQnV0dG9ucz1zaG91bGREaXNhYmxlQnV0dG9uczt2YXIgaXNTdHJhdGVneT1mdW5jdGlvbih0LG8pe3JldHVybiB2b2lkIDA9PT10JiYodD1cIlwiKSx2b2lkIDA9PT1vJiYobz1cIlwiKSxCb29sZWFuKHQmJnQuaW5jbHVkZXMobykpfSxoYXNEb3RGb3JFYWNoU2xpZGU9KGV4cG9ydHMuaXNTdHJhdGVneT1pc1N0cmF0ZWd5LGZ1bmN0aW9uKHQsbyl7cmV0dXJuIHR8fCgwLGV4cG9ydHMuaXNTdHJhdGVneSkobyx0eXBlc18xLkNvbnRyb2xzU3RyYXRlZ3kuQUxURVJOQVRFKX0pLGdldERvdHNOYXZpZ2F0aW9uTGVuZ3RoPShleHBvcnRzLmhhc0RvdEZvckVhY2hTbGlkZT1oYXNEb3RGb3JFYWNoU2xpZGUsZnVuY3Rpb24odCxvLGUpe3JldHVybiB2b2lkIDA9PT10JiYodD0wKSx2b2lkIDA9PT1vJiYobz0xKSwoZT12b2lkIDAhPT1lJiZlKT90OjAhPT1OdW1iZXIobykmJk1hdGguY2VpbCh0L28pfHwwfSksY2hlY2tJc1RoZUxhc3REb3RJbmRleD0oZXhwb3J0cy5nZXREb3RzTmF2aWdhdGlvbkxlbmd0aD1nZXREb3RzTmF2aWdhdGlvbkxlbmd0aCxmdW5jdGlvbih0LG8sZSl7cmV0dXJuIW8mJnQ9PT1lLTF9KSxnZXRJdGVtSW5kZXhGb3JEb3ROYXZpZ2F0aW9uPShleHBvcnRzLmNoZWNrSXNUaGVMYXN0RG90SW5kZXg9Y2hlY2tJc1RoZUxhc3REb3RJbmRleCxmdW5jdGlvbih0LG8sZSxzKXtyZXR1cm4obz9lLXM6dCpzKXx8MH0pLHNob3VsZENhbmNlbEF1dG9QbGF5T25BY3Rpb249KGV4cG9ydHMuZ2V0SXRlbUluZGV4Rm9yRG90TmF2aWdhdGlvbj1nZXRJdGVtSW5kZXhGb3JEb3ROYXZpZ2F0aW9uLGZ1bmN0aW9uKHQpe3JldHVybih0PXZvaWQgMD09PXQ/XCJcIjp0KT09PXR5cGVzXzEuQXV0b1BsYXlTdHJhdGVneS5BQ1RJT058fHQ9PT10eXBlc18xLkF1dG9QbGF5U3RyYXRlZ3kuQUxMfSksc2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkhvdmVyPShleHBvcnRzLnNob3VsZENhbmNlbEF1dG9QbGF5T25BY3Rpb249c2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkFjdGlvbixmdW5jdGlvbih0KXtyZXR1cm4odD12b2lkIDA9PT10P1wiXCI6dCk9PT10eXBlc18xLkF1dG9QbGF5U3RyYXRlZ3kuREVGQVVMVHx8dD09PXR5cGVzXzEuQXV0b1BsYXlTdHJhdGVneS5BTEx9KTtleHBvcnRzLnNob3VsZENhbmNlbEF1dG9QbGF5T25Ib3Zlcj1zaG91bGRDYW5jZWxBdXRvUGxheU9uSG92ZXI7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9fY3JlYXRlQmluZGluZz1PYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUscix0LG8pe3ZvaWQgMD09PW8mJihvPXQpO3ZhciBwPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KTtwJiYoXCJnZXRcImluIHA/ci5fX2VzTW9kdWxlOiFwLndyaXRhYmxlJiYhcC5jb25maWd1cmFibGUpfHwocD17ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gclt0XX19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLHApfTpmdW5jdGlvbihlLHIsdCxvKXtlW289dm9pZCAwPT09bz90Om9dPXJbdF19LF9fZXhwb3J0U3Rhcj1mdW5jdGlvbihlLHIpe2Zvcih2YXIgdCBpbiBlKVwiZGVmYXVsdFwiPT09dHx8T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsdCl8fF9fY3JlYXRlQmluZGluZyhyLGUsdCl9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jb21tb25cIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2VsZW1lbnRzXCIpLGV4cG9ydHMpLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jbGFzc25hbWVzXCIpLGV4cG9ydHMpLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90aW1lcnNcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL21hdGhcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2RlYnVnXCIpLGV4cG9ydHMpLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9yZW5kZXJcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NvbnRyb2xzXCIpLGV4cG9ydHMpLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9tYXBwZXJzXCIpLGV4cG9ydHMpOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2ltcG9ydERlZmF1bHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fSxyZWFjdF8xPShPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLlNsaWRlSW5mbz12b2lkIDAsX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSkpLHR5cGVzXzE9cmVxdWlyZShcIi4uL3R5cGVzXCIpLHV0aWxzXzE9cmVxdWlyZShcIi4uL3V0aWxzXCIpLFNsaWRlSW5mbz1mdW5jdGlvbihlKXt2YXIgdD1lLmFjdGl2ZUluZGV4LHM9ZS5pdGVtc0NvdW50LGU9ZS5yZW5kZXJTbGlkZUluZm8sdD0oMCx1dGlsc18xLmdldFNsaWRlSW5mbykodCxzKS5pdGVtO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGU/cmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5TTElERV9JTkZPfSxlKHtpdGVtOnQsaXRlbXNDb3VudDpzfSkpOihlPSgwLHV0aWxzXzEuY29uY2F0Q2xhc3NuYW1lcykodHlwZXNfMS5DbGFzc25hbWVzLlNMSURFX0lORk9fSVRFTSx0eXBlc18xLk1vZGlmaWVycy5TRVBBUkFUT1IpLHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuU0xJREVfSU5GT30scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuU0xJREVfSU5GT19JVEVNfSx0KSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOmV9LFwiL1wiKSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5TTElERV9JTkZPX0lURU19LHMpKSl9O2V4cG9ydHMuU2xpZGVJbmZvPVNsaWRlSW5mbzsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX19pbXBvcnREZWZhdWx0PWZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX0scmVhY3RfMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5TdGFnZUl0ZW09dm9pZCAwLF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpKSxTdGFnZUl0ZW09ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pdGVtLHI9ZS5jbGFzc05hbWUsZT1lLnN0eWxlcztyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLHtzdHlsZTplLGNsYXNzTmFtZTpyfSx0KX07ZXhwb3J0cy5TdGFnZUl0ZW09U3RhZ2VJdGVtOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2ltcG9ydERlZmF1bHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fSxyZWFjdF8xPShPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLkRvdHNOYXZpZ2F0aW9uPXZvaWQgMCxfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKSksdHlwZXNfMT1yZXF1aXJlKFwiLi4vdHlwZXNcIiksdXRpbHNfMT1yZXF1aXJlKFwiLi4vdXRpbHNcIiksRG90c05hdmlnYXRpb249ZnVuY3Rpb24oZSl7dmFyIGE9ZS5zdGF0ZSxuPWUub25DbGljayxyPWUub25Nb3VzZUVudGVyLGw9ZS5vbk1vdXNlTGVhdmUsdD1lLmNvbnRyb2xzU3RyYXRlZ3ksdT1lLnJlbmRlckRvdHNJdGVtLGM9YS5pdGVtc0NvdW50LF89YS5pdGVtc0luU2xpZGUsZD1hLmluZmluaXRlLGU9YS5hdXRvV2lkdGgsbT1hLmFjdGl2ZUluZGV4LHY9KDAsdXRpbHNfMS5nZXRTbGlkZUl0ZW1JbmZvKShhKS5pc05leHRTbGlkZURpc2FibGVkLGY9KDAsdXRpbHNfMS5oYXNEb3RGb3JFYWNoU2xpZGUpKGUsdCksRD0oMCx1dGlsc18xLmdldERvdHNOYXZpZ2F0aW9uTGVuZ3RoKShjLF8sZik7cmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidWxcIix7Y2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5ET1RTfSxBcnJheS5mcm9tKHtsZW5ndGg6Y30pLm1hcChmdW5jdGlvbihlLHQpe3ZhciBpLHMsbztpZih0PEQpcmV0dXJuIHM9KDAsdXRpbHNfMS5jaGVja0lzVGhlTGFzdERvdEluZGV4KSh0LEJvb2xlYW4oZCksRCksaT0oMCx1dGlsc18xLmdldEl0ZW1JbmRleEZvckRvdE5hdmlnYXRpb24pKHQscyxjLF8pLHM9KDAsdXRpbHNfMS5nZXRBY3RpdmVTbGlkZUluZGV4KSh2LGEpLGYmJigocz1tKTwwP3M9Yy0xOmM8PW0mJihzPTApLGk9dCkscz1zPT09dD90eXBlc18xLk1vZGlmaWVycy5BQ1RJVkU6XCJcIixvPXU/dHlwZXNfMS5Nb2RpZmllcnMuQ1VTVE9NOlwiXCIsbz0oMCx1dGlsc18xLmNvbmNhdENsYXNzbmFtZXMpKHR5cGVzXzEuQ2xhc3NuYW1lcy5ET1RTX0lURU0scyxvKSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIse2tleTpcImRvdC1pdGVtLVwiLmNvbmNhdCh0KSxvbk1vdXNlRW50ZXI6cixvbk1vdXNlTGVhdmU6bCxvbkNsaWNrOmZ1bmN0aW9uKCl7cmV0dXJuIG4oaSl9LGNsYXNzTmFtZTpvfSx1JiZ1KHtpc0FjdGl2ZTpCb29sZWFuKHMpLGFjdGl2ZUluZGV4OnR9KSl9KSl9O2V4cG9ydHMuRG90c05hdmlnYXRpb249RG90c05hdmlnYXRpb247IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9faW1wb3J0RGVmYXVsdD1mdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19LHJlYWN0XzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuUGxheVBhdXNlQnV0dG9uPXZvaWQgMCxfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKSksdHlwZXNfMT1yZXF1aXJlKFwiLi4vdHlwZXNcIiksdXRpbHNfMT1yZXF1aXJlKFwiLi4vdXRpbHNcIiksUGxheVBhdXNlQnV0dG9uPWZ1bmN0aW9uKGUpe3ZhciB0PWUuaXNQbGF5aW5nLGE9ZS5vbkNsaWNrLGU9ZS5yZW5kZXJQbGF5UGF1c2VCdXR0b247cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZT9yZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLlBMQVlfQlROLG9uQ2xpY2s6YX0sZSh7aXNQbGF5aW5nOnR9KSk6KGU9dD90eXBlc18xLk1vZGlmaWVycy5QQVVTRTpcIlwiLHQ9KDAsdXRpbHNfMS5jb25jYXRDbGFzc25hbWVzKSh0eXBlc18xLkNsYXNzbmFtZXMuUExBWV9CVE5fSVRFTSxlKSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLlBMQVlfQlROfSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLlBMQVlfQlROX1dSQVBQRVJ9LHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse29uQ2xpY2s6YSxjbGFzc05hbWU6dH0pKSkpfTtleHBvcnRzLlBsYXlQYXVzZUJ1dHRvbj1QbGF5UGF1c2VCdXR0b247IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9faW1wb3J0RGVmYXVsdD1mdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19LHJlYWN0XzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuUHJldk5leHRCdXR0b249dm9pZCAwLF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpKSx0eXBlc18xPXJlcXVpcmUoXCIuLi90eXBlc1wiKSx1dGlsc18xPXJlcXVpcmUoXCIuLi91dGlsc1wiKSxQcmV2TmV4dEJ1dHRvbj1mdW5jdGlvbihlKXt2YXIgdCxzPWUubmFtZSxhPWUuaXNEaXNhYmxlZCxyPWUub25DbGljayxuPWUucmVuZGVyUHJldkJ1dHRvbixlPWUucmVuZGVyTmV4dEJ1dHRvbjtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP3JlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX1BSRVYsb25DbGljazpyfSxuKHtpc0Rpc2FibGVkOmF9KSk6XCJmdW5jdGlvblwiPT10eXBlb2YgZT9yZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLkJVVFRPTl9ORVhULG9uQ2xpY2s6cn0sZSh7aXNEaXNhYmxlZDphfSkpOihlPShuPVwicHJldlwiPT09cyk/XCI8XCI6XCI+XCIscz1uP3R5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fUFJFVjp0eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX05FWFQsdD1uP3R5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fUFJFVl9XUkFQUEVSOnR5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fTkVYVF9XUkFQUEVSLG49bj90eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX1BSRVZfSVRFTTp0eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX05FWFRfSVRFTSxhPWE/dHlwZXNfMS5Nb2RpZmllcnMuSU5BQ1RJVkU6XCJcIixuPSgwLHV0aWxzXzEuY29uY2F0Q2xhc3NuYW1lcykobixhKSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6c30scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnR9LHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicFwiLHtjbGFzc05hbWU6bixvbkNsaWNrOmZ1bmN0aW9uKGUpe3JldHVybiByKGUpfX0scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse1wiZGF0YS1hcmVhXCI6ZX0pKSkpKX07ZXhwb3J0cy5QcmV2TmV4dEJ1dHRvbj1QcmV2TmV4dEJ1dHRvbjsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLlByZXZOZXh0QnV0dG9uPWV4cG9ydHMuUGxheVBhdXNlQnV0dG9uPWV4cG9ydHMuRG90c05hdmlnYXRpb249ZXhwb3J0cy5TdGFnZUl0ZW09ZXhwb3J0cy5TbGlkZUluZm89dm9pZCAwO3ZhciBTbGlkZUluZm9fMT1yZXF1aXJlKFwiLi9TbGlkZUluZm9cIiksU3RhZ2VJdGVtXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiU2xpZGVJbmZvXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFNsaWRlSW5mb18xLlNsaWRlSW5mb319KSxyZXF1aXJlKFwiLi9TdGFnZUl0ZW1cIikpLERvdHNOYXZpZ2F0aW9uXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiU3RhZ2VJdGVtXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFN0YWdlSXRlbV8xLlN0YWdlSXRlbX19KSxyZXF1aXJlKFwiLi9Eb3RzTmF2aWdhdGlvblwiKSksUGxheVBhdXNlQnV0dG9uXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiRG90c05hdmlnYXRpb25cIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gRG90c05hdmlnYXRpb25fMS5Eb3RzTmF2aWdhdGlvbn19KSxyZXF1aXJlKFwiLi9QbGF5UGF1c2VCdXR0b25cIikpLFByZXZOZXh0QnV0dG9uXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiUGxheVBhdXNlQnV0dG9uXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFBsYXlQYXVzZUJ1dHRvbl8xLlBsYXlQYXVzZUJ1dHRvbn19KSxyZXF1aXJlKFwiLi9QcmV2TmV4dEJ1dHRvblwiKSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJQcmV2TmV4dEJ1dHRvblwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBQcmV2TmV4dEJ1dHRvbl8xLlByZXZOZXh0QnV0dG9ufX0pOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2V4dGVuZHM9ZnVuY3Rpb24oKXt2YXIgbj1mdW5jdGlvbih0LGUpe3JldHVybihuPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8KHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheT9mdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9OmZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBpIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSkmJih0W2ldPWVbaV0pfSkpKHQsZSl9O3JldHVybiBmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJm51bGwhPT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhlKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIGkoKXt0aGlzLmNvbnN0cnVjdG9yPXR9bih0LGUpLHQucHJvdG90eXBlPW51bGw9PT1lP09iamVjdC5jcmVhdGUoZSk6KGkucHJvdG90eXBlPWUucHJvdG90eXBlLG5ldyBpKX19KCksX19hc3NpZ249ZnVuY3Rpb24oKXtyZXR1cm4oX19hc3NpZ249T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlLGk9MSxuPWFyZ3VtZW50cy5sZW5ndGg7aTxuO2krKylmb3IodmFyIG8gaW4gZT1hcmd1bWVudHNbaV0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxfX2NyZWF0ZUJpbmRpbmc9T2JqZWN0LmNyZWF0ZT9mdW5jdGlvbih0LGUsaSxuKXt2b2lkIDA9PT1uJiYobj1pKTt2YXIgbz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsaSk7byYmKFwiZ2V0XCJpbiBvP2UuX19lc01vZHVsZTohby53cml0YWJsZSYmIW8uY29uZmlndXJhYmxlKXx8KG89e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGVbaV19fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbixvKX06ZnVuY3Rpb24odCxlLGksbil7dFtuPXZvaWQgMD09PW4/aTpuXT1lW2ldfSxfX3NldE1vZHVsZURlZmF1bHQ9T2JqZWN0LmNyZWF0ZT9mdW5jdGlvbih0LGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KX06ZnVuY3Rpb24odCxlKXt0LmRlZmF1bHQ9ZX0sX19pbXBvcnRTdGFyPWZ1bmN0aW9uKHQpe2lmKHQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgZT17fTtpZihudWxsIT10KWZvcih2YXIgaSBpbiB0KVwiZGVmYXVsdFwiIT09aSYmT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsaSkmJl9fY3JlYXRlQmluZGluZyhlLHQsaSk7cmV0dXJuIF9fc2V0TW9kdWxlRGVmYXVsdChlLHQpLGV9LF9fZXhwb3J0U3Rhcj1mdW5jdGlvbih0LGUpe2Zvcih2YXIgaSBpbiB0KVwiZGVmYXVsdFwiPT09aXx8T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSl8fF9fY3JlYXRlQmluZGluZyhlLHQsaSl9LF9fYXdhaXRlcj1mdW5jdGlvbih0LGEscixsKXtyZXR1cm4gbmV3KHI9cnx8UHJvbWlzZSkoZnVuY3Rpb24oaSxlKXtmdW5jdGlvbiBuKHQpe3RyeXtzKGwubmV4dCh0KSl9Y2F0Y2godCl7ZSh0KX19ZnVuY3Rpb24gbyh0KXt0cnl7cyhsLnRocm93KHQpKX1jYXRjaCh0KXtlKHQpfX1mdW5jdGlvbiBzKHQpe3ZhciBlO3QuZG9uZT9pKHQudmFsdWUpOigoZT10LnZhbHVlKWluc3RhbmNlb2Ygcj9lOm5ldyByKGZ1bmN0aW9uKHQpe3QoZSl9KSkudGhlbihuLG8pfXMoKGw9bC5hcHBseSh0LGF8fFtdKSkubmV4dCgpKX0pfSxfX2dlbmVyYXRvcj1mdW5jdGlvbihuLG8pe3ZhciBzLGEscixsPXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJnJbMF0pdGhyb3cgclsxXTtyZXR1cm4gclsxXX0sdHJ5czpbXSxvcHM6W119LHQ9e25leHQ6ZSgwKSx0aHJvdzplKDEpLHJldHVybjplKDIpfTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJih0W1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pLHQ7ZnVuY3Rpb24gZShpKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9W2ksdF07aWYocyl0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtmb3IoO2w7KXRyeXtpZihzPTEsYSYmKHI9MiZlWzBdP2EucmV0dXJuOmVbMF0/YS50aHJvd3x8KChyPWEucmV0dXJuKSYmci5jYWxsKGEpLDApOmEubmV4dCkmJiEocj1yLmNhbGwoYSxlWzFdKSkuZG9uZSlyZXR1cm4gcjtzd2l0Y2goYT0wLChlPXI/WzImZVswXSxyLnZhbHVlXTplKVswXSl7Y2FzZSAwOmNhc2UgMTpyPWU7YnJlYWs7Y2FzZSA0OnJldHVybiBsLmxhYmVsKysse3ZhbHVlOmVbMV0sZG9uZTohMX07Y2FzZSA1OmwubGFiZWwrKyxhPWVbMV0sZT1bMF07Y29udGludWU7Y2FzZSA3OmU9bC5vcHMucG9wKCksbC50cnlzLnBvcCgpO2NvbnRpbnVlO2RlZmF1bHQ6aWYoIShyPTA8KHI9bC50cnlzKS5sZW5ndGgmJnJbci5sZW5ndGgtMV0pJiYoNj09PWVbMF18fDI9PT1lWzBdKSl7bD0wO2NvbnRpbnVlfWlmKDM9PT1lWzBdJiYoIXJ8fGVbMV0+clswXSYmZVsxXTxyWzNdKSlsLmxhYmVsPWVbMV07ZWxzZSBpZig2PT09ZVswXSYmbC5sYWJlbDxyWzFdKWwubGFiZWw9clsxXSxyPWU7ZWxzZXtpZighKHImJmwubGFiZWw8clsyXSkpe3JbMl0mJmwub3BzLnBvcCgpLGwudHJ5cy5wb3AoKTtjb250aW51ZX1sLmxhYmVsPXJbMl0sbC5vcHMucHVzaChlKX19ZT1vLmNhbGwobixsKX1jYXRjaCh0KXtlPVs2LHRdLGE9MH1maW5hbGx5e3M9cj0wfWlmKDUmZVswXSl0aHJvdyBlWzFdO3JldHVybnt2YWx1ZTplWzBdP2VbMV06dm9pZCAwLGRvbmU6ITB9fX19LF9faW1wb3J0RGVmYXVsdD1mdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19LHJlYWN0XzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpKSx2YW5pbGxhX3N3aXBlXzE9X19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2YW5pbGxhLXN3aXBlXCIpKSxkZWZhdWx0UHJvcHNfMT1yZXF1aXJlKFwiLi9kZWZhdWx0UHJvcHNcIiksVmlld3M9X19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3ZpZXdzXCIpKSxVdGlscz1fX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdXRpbHNcIikpLHR5cGVzXzE9cmVxdWlyZShcIi4vdHlwZXNcIiksQWxpY2VDYXJvdXNlbD0oX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3R5cGVzXCIpLGV4cG9ydHMpLGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQodCl7dmFyIHM9ZS5jYWxsKHRoaXMsdCl8fHRoaXM7cmV0dXJuIHMuc3dpcGVMaXN0ZW5lcj1udWxsLHMuX2hhbmRsZUtleWJvYXJkRXZlbnRzPWZ1bmN0aW9uKHQpe3N3aXRjaCh0LmNvZGUpe2Nhc2VcIlNwYWNlXCI6cmV0dXJuIHMucHJvcHMuYXV0b1BsYXkmJnMuX2hhbmRsZVBsYXlQYXVzZVRvZ2dsZSgpO2Nhc2VcIkFycm93TGVmdFwiOnJldHVybiBzLnNsaWRlUHJldih0KTtjYXNlXCJBcnJvd1JpZ2h0XCI6cmV0dXJuIHMuc2xpZGVOZXh0KHQpfX0scy5faGFuZGxlQmVmb3JlU2xpZGVFbmQ9ZnVuY3Rpb24obyl7cmV0dXJuIF9fYXdhaXRlcihzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZSxpLG47cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsZnVuY3Rpb24odCl7c3dpdGNoKHQubGFiZWwpe2Nhc2UgMDpyZXR1cm4oaT10aGlzLnN0YXRlLG49aS5hY3RpdmVJbmRleCxlPWkuaXRlbXNDb3VudCxpPWkuZmFkZW91dEFuaW1hdGlvblByb2Nlc3NpbmcsVXRpbHMuc2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4KG4sZSkpPyhuPVV0aWxzLmdldFVwZGF0ZVNsaWRlUG9zaXRpb25JbmRleChuLGUpLFs0LHRoaXMuX2hhbmRsZVVwZGF0ZVNsaWRlUG9zaXRpb24obildKTpbMywyXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLFszLDRdO2Nhc2UgMjpyZXR1cm4gaT9bNCx0aGlzLnNldFN0YXRlKHtmYWRlb3V0QW5pbWF0aW9uSW5kZXg6bnVsbCxmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb246bnVsbCxmYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZzohMX0pXTpbMyw0XTtjYXNlIDM6dC5zZW50KCksdC5sYWJlbD00O2Nhc2UgNDpyZXR1cm4gdGhpcy5faGFuZGxlU2xpZGVDaGFuZ2VkKG8pLFsyXX19KX0pfSxzLl9oYW5kbGVNb3VzZUVudGVyPWZ1bmN0aW9uKCl7dmFyIHQ9cy5wcm9wcy5hdXRvUGxheVN0cmF0ZWd5O1V0aWxzLnNob3VsZENhbmNlbEF1dG9QbGF5T25Ib3Zlcih0KSYmcy5zdGF0ZS5pc0F1dG9QbGF5aW5nJiYocy5pc0hvdmVyZWQ9ITAscy5faGFuZGxlUGF1c2UoKSl9LHMuX2hhbmRsZU1vdXNlTGVhdmU9ZnVuY3Rpb24oKXtzLnN0YXRlLmlzQXV0b1BsYXlpbmcmJihzLmlzSG92ZXJlZD0hMSxzLl9oYW5kbGVQbGF5KCkpfSxzLl9oYW5kbGVQYXVzZT1mdW5jdGlvbigpe3MuX2NsZWFyQXV0b1BsYXlUaW1lb3V0KCl9LHMuX2hhbmRsZVBsYXlQYXVzZVRvZ2dsZT1mdW5jdGlvbigpe3JldHVybiBfX2F3YWl0ZXIocyx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7dmFyIGU7cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsZnVuY3Rpb24odCl7c3dpdGNoKHQubGFiZWwpe2Nhc2UgMDpyZXR1cm4gZT10aGlzLnN0YXRlLmlzQXV0b1BsYXlpbmcsdGhpcy5oYXNVc2VyQWN0aW9uPSEwLFs0LHRoaXMuc2V0U3RhdGUoe2lzQXV0b1BsYXlpbmc6IWUsaXNBdXRvUGxheUNhbmNlbGVkT25BY3Rpb246ITB9KV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSxlP3RoaXMuX2hhbmRsZVBhdXNlKCk6dGhpcy5faGFuZGxlUGxheSgpLFsyXX19KX0pfSxzLl9zZXRSb290Q29tcG9uZW50UmVmPWZ1bmN0aW9uKHQpe3JldHVybiBzLnJvb3RFbGVtZW50PXR9LHMuX3NldFN0YWdlQ29tcG9uZW50UmVmPWZ1bmN0aW9uKHQpe3JldHVybiBzLnN0YWdlQ29tcG9uZW50PXR9LHMuX3JlbmRlclN0YWdlSXRlbT1mdW5jdGlvbih0LGUpe3ZhciBpPVV0aWxzLmdldFJlbmRlclN0YWdlSXRlbVN0eWxlcyhlLHMuc3RhdGUpLG49VXRpbHMuZ2V0UmVuZGVyU3RhZ2VJdGVtQ2xhc3NlcyhlLHMuc3RhdGUpO3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5TdGFnZUl0ZW0se3N0eWxlczppLGNsYXNzTmFtZTpuLGtleTpcInN0YWdlLWl0ZW0tXCIuY29uY2F0KGUpLGl0ZW06dH0pfSxzLl9yZW5kZXJTbGlkZUluZm89ZnVuY3Rpb24oKXt2YXIgdD1zLnByb3BzLnJlbmRlclNsaWRlSW5mbyxlPXMuc3RhdGUsaT1lLmFjdGl2ZUluZGV4LGU9ZS5pdGVtc0NvdW50O3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5TbGlkZUluZm8se2l0ZW1zQ291bnQ6ZSxhY3RpdmVJbmRleDppLHJlbmRlclNsaWRlSW5mbzp0fSl9LHMuc3RhdGU9VXRpbHMuY2FsY3VsYXRlSW5pdGlhbFN0YXRlKHQsbnVsbCkscy5pc0hvdmVyZWQ9ITEscy5pc0FuaW1hdGlvbkRpc2FibGVkPSExLHMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZD0hMSxzLmNhbmNlbFRvdWNoQW5pbWF0aW9ucz0hMSxzLmhhc1VzZXJBY3Rpb249ITEscy5yb290RWxlbWVudD1udWxsLHMucm9vdENvbXBvbmVudERpbWVuc2lvbnM9e30scy5zdGFnZUNvbXBvbmVudD1udWxsLHMuc3RhcnRUb3VjaG1vdmVQb3NpdGlvbj12b2lkIDAscy5zbGlkZVRvPXMuc2xpZGVUby5iaW5kKHMpLHMuc2xpZGVQcmV2PXMuc2xpZGVQcmV2LmJpbmQocykscy5zbGlkZU5leHQ9cy5zbGlkZU5leHQuYmluZChzKSxzLl9oYW5kbGVUb3VjaG1vdmU9cy5faGFuZGxlVG91Y2htb3ZlLmJpbmQocykscy5faGFuZGxlVG91Y2hlbmQ9cy5faGFuZGxlVG91Y2hlbmQuYmluZChzKSxzLl9oYW5kbGVEb3RDbGljaz1zLl9oYW5kbGVEb3RDbGljay5iaW5kKHMpLHMuX2hhbmRsZVJlc2l6ZT1zLl9oYW5kbGVSZXNpemUuYmluZChzKSx0PVV0aWxzLmRlYm91bmNlKHMuX2hhbmRsZVJlc2l6ZSwxMDApLHMuX2hhbmRsZVJlc2l6ZURlYm91bmNlZD10WzBdLHMuX2NhbmNlbFJlc2l6ZURlYm91bmNlZD10WzFdLHN9cmV0dXJuIF9fZXh0ZW5kcyh0LGUpLHQucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50PWZ1bmN0aW9uKCl7cmV0dXJuIF9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybls0LHRoaXMuX3NldEluaXRpYWxTdGF0ZSgpXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCksdGhpcy5fc2V0dXBTd2lwZUhhbmRsZXJzKCksdGhpcy5wcm9wcy5hdXRvUGxheSYmdGhpcy5faGFuZGxlUGxheSgpLFsyXX19KX0pfSx0LnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLnByb3BzLG49aS5hY3RpdmVJbmRleCxvPWkuYW5pbWF0aW9uRHVyYXRpb24scz1pLmF1dG9XaWR0aCxhPWkuY2hpbGRyZW4scj1pLmluZmluaXRlLGw9aS5pdGVtcyx1PWkucGFkZGluZ0xlZnQsZD1pLnBhZGRpbmdSaWdodCxjPWkucmVzcG9uc2l2ZSxoPWkuc3dpcGVFeHRyYVBhZGRpbmcscD1pLm1vdXNlVHJhY2tpbmcsXz1pLnN3aXBlRGVsdGEsbT1pLnRvdWNoVHJhY2tpbmcsaT1pLnRvdWNoTW92ZURlZmF1bHRFdmVudHM7YSYmdC5jaGlsZHJlbiE9PWE/KGE9ZS5hY3RpdmVJbmRleCxlPV9fYXNzaWduKF9fYXNzaWduKHt9LHRoaXMucHJvcHMpLHthY3RpdmVJbmRleDphfSksdGhpcy5fdXBkYXRlQ29tcG9uZW50KGUpKTp0LmF1dG9XaWR0aCE9PXN8fHQuaW5maW5pdGUhPT1yfHx0Lml0ZW1zIT09bHx8dC5wYWRkaW5nTGVmdCE9PXV8fHQucGFkZGluZ1JpZ2h0IT09ZHx8dC5yZXNwb25zaXZlIT09Y3x8dC5zd2lwZUV4dHJhUGFkZGluZyE9PWg/dGhpcy5fdXBkYXRlQ29tcG9uZW50KCk6KHQuYW5pbWF0aW9uRHVyYXRpb24hPT1vJiZ0aGlzLnNldFN0YXRlKHthbmltYXRpb25EdXJhdGlvbjpvfSksdC5hY3RpdmVJbmRleCE9PW4mJnRoaXMuc2xpZGVUbyhuLHR5cGVzXzEuRXZlbnRUeXBlLlVQREFURSkpLHQuc3dpcGVEZWx0YT09PV8mJnQubW91c2VUcmFja2luZz09PXAmJnQudG91Y2hUcmFja2luZz09PW0mJnQudG91Y2hNb3ZlRGVmYXVsdEV2ZW50cz09PWl8fHRoaXMuX3VwZGF0ZVN3aXBlUHJvcHMoKSx0aGlzLnByb3BzLmtleWJvYXJkTmF2aWdhdGlvbiE9PXQua2V5Ym9hcmROYXZpZ2F0aW9uJiZ0aGlzLl91cGRhdGVFdmVudExpc3RlbmVycygpfSx0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3RoaXMuX2NhbmNlbFJlc2l6ZURlYm91bmNlZCgpLHRoaXMuX2NhbmNlbFRpbWVvdXRBbmltYXRpb25zKCksdGhpcy5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiZXZlbnRPYmplY3RcIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5zdGF0ZSxlPXQuaXRlbXNJblNsaWRlLHQ9dC5hY3RpdmVJbmRleCxpPVV0aWxzLmdldFNsaWRlSXRlbUluZm8odGhpcy5zdGF0ZSksbj1pLmlzTmV4dFNsaWRlRGlzYWJsZWQsaT1pLmlzUHJldlNsaWRlRGlzYWJsZWQ7cmV0dXJue2l0ZW06dCxzbGlkZTpVdGlscy5nZXRBY3RpdmVTbGlkZUluZGV4KG4sdGhpcy5zdGF0ZSksaXRlbXNJblNsaWRlOmUsaXNOZXh0U2xpZGVEaXNhYmxlZDpuLGlzUHJldlNsaWRlRGlzYWJsZWQ6aSx0eXBlOnR5cGVzXzEuRXZlbnRUeXBlLkFDVElPTn19LGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiaXNGYWRlb3V0QW5pbWF0aW9uQWxsb3dlZFwiLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnN0YXRlLml0ZW1zSW5TbGlkZSxlPXRoaXMucHJvcHMsaT1lLmFuaW1hdGlvblR5cGUsbj1lLnBhZGRpbmdMZWZ0LG89ZS5wYWRkaW5nUmlnaHQsZT1lLmF1dG9XaWR0aDtyZXR1cm4gMT09PXQmJmk9PT10eXBlc18xLkFuaW1hdGlvblR5cGUuRkFERU9VVCYmIShufHxvfHxlKX0sZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJ0b3VjaG1vdmVQb3NpdGlvblwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwIT09dGhpcy5zdGFydFRvdWNobW92ZVBvc2l0aW9uP3RoaXMuc3RhcnRUb3VjaG1vdmVQb3NpdGlvbjp0aGlzLnN0YXRlLnRyYW5zbGF0ZTNkfSxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMH0pLHQucHJvdG90eXBlLnNsaWRlVG89ZnVuY3Rpb24odCxlKXt2YXIgaSxuLG87dm9pZCAwPT09dCYmKHQ9MCksdGhpcy5faGFuZGxlUGF1c2UoKSx0aGlzLmlzRmFkZW91dEFuaW1hdGlvbkFsbG93ZWQ/KGk9VXRpbHMuZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4KHQsdGhpcy5zdGF0ZS5pdGVtc0NvdW50KSxuPVV0aWxzLmdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbihpLHRoaXMuc3RhdGUpLG89VXRpbHMuZ2V0RmFkZW91dEFuaW1hdGlvbkluZGV4KHRoaXMuc3RhdGUpLHRoaXMuX2hhbmRsZVNsaWRlVG8oe2FjdGl2ZUluZGV4OmksZmFkZW91dEFuaW1hdGlvbkluZGV4Om8sZmFkZW91dEFuaW1hdGlvblBvc2l0aW9uOm4sZXZlbnRUeXBlOmV9KSk6dGhpcy5faGFuZGxlU2xpZGVUbyh7YWN0aXZlSW5kZXg6dCxldmVudFR5cGU6ZX0pfSx0LnByb3RvdHlwZS5zbGlkZVByZXY9ZnVuY3Rpb24odCl7dGhpcy5faGFuZGxlUGF1c2UoKSx0JiZ0LmlzVHJ1c3RlZCYmKHRoaXMuaGFzVXNlckFjdGlvbj0hMCk7dmFyIGUsaSx0PXRoaXMuc3RhdGUuYWN0aXZlSW5kZXgtMTt0aGlzLmlzRmFkZW91dEFuaW1hdGlvbkFsbG93ZWQ/KGU9LXRoaXMuc3RhdGUuc3RhZ2VXaWR0aCxpPVV0aWxzLmdldEZhZGVvdXRBbmltYXRpb25JbmRleCh0aGlzLnN0YXRlKSx0aGlzLl9oYW5kbGVTbGlkZVRvKHthY3RpdmVJbmRleDp0LGZhZGVvdXRBbmltYXRpb25JbmRleDppLGZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbjplfSkpOnRoaXMuX2hhbmRsZVNsaWRlVG8oe2FjdGl2ZUluZGV4OnR9KX0sdC5wcm90b3R5cGUuc2xpZGVOZXh0PWZ1bmN0aW9uKHQpe3RoaXMuX2hhbmRsZVBhdXNlKCksdCYmdC5pc1RydXN0ZWQmJih0aGlzLmhhc1VzZXJBY3Rpb249ITApO3ZhciBlLGksdD10aGlzLnN0YXRlLmFjdGl2ZUluZGV4KzE7dGhpcy5pc0ZhZGVvdXRBbmltYXRpb25BbGxvd2VkPyhlPXRoaXMuc3RhdGUuc3RhZ2VXaWR0aCxpPVV0aWxzLmdldEZhZGVvdXRBbmltYXRpb25JbmRleCh0aGlzLnN0YXRlKSx0aGlzLl9oYW5kbGVTbGlkZVRvKHthY3RpdmVJbmRleDp0LGZhZGVvdXRBbmltYXRpb25JbmRleDppLGZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbjplfSkpOnRoaXMuX2hhbmRsZVNsaWRlVG8oe2FjdGl2ZUluZGV4OnR9KX0sdC5wcm90b3R5cGUuX2FkZEV2ZW50TGlzdGVuZXJzPWZ1bmN0aW9uKCl7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLl9oYW5kbGVSZXNpemVEZWJvdW5jZWQpLHRoaXMucHJvcHMua2V5Ym9hcmROYXZpZ2F0aW9uJiZ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsdGhpcy5faGFuZGxlS2V5Ym9hcmRFdmVudHMpfSx0LnByb3RvdHlwZS5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnM9ZnVuY3Rpb24oKXt0aGlzLnN3aXBlTGlzdGVuZXImJnRoaXMuc3dpcGVMaXN0ZW5lci5kZXN0cm95KCksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLl9oYW5kbGVSZXNpemVEZWJvdW5jZWQpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIix0aGlzLl9oYW5kbGVLZXlib2FyZEV2ZW50cyl9LHQucHJvdG90eXBlLl91cGRhdGVFdmVudExpc3RlbmVycz1mdW5jdGlvbigpe3RoaXMucHJvcHMua2V5Ym9hcmROYXZpZ2F0aW9uP3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIix0aGlzLl9oYW5kbGVLZXlib2FyZEV2ZW50cyk6d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHRoaXMuX2hhbmRsZUtleWJvYXJkRXZlbnRzKX0sdC5wcm90b3R5cGUuX2hhbmRsZVJlc2l6ZT1mdW5jdGlvbihvKXtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3ZhciBlLGksbjtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybihpPXRoaXMucHJvcHMub25SZXNpemVFdmVudCxuPVV0aWxzLmdldEVsZW1lbnREaW1lbnNpb25zKHRoaXMucm9vdEVsZW1lbnQpLChpfHxVdGlscy5zaG91bGRIYW5kbGVSZXNpemVFdmVudCkobyx0aGlzLnJvb3RDb21wb25lbnREaW1lbnNpb25zLG4pKT8odGhpcy5fY2FuY2VsVGltZW91dEFuaW1hdGlvbnMoKSx0aGlzLnJvb3RDb21wb25lbnREaW1lbnNpb25zPW4saT10aGlzLnN0YXRlLG49aS5pdGVtc0NvdW50LGU9aS5pc0F1dG9QbGF5aW5nLGk9VXRpbHMuZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4KHRoaXMuc3RhdGUuYWN0aXZlSW5kZXgsbiksbj1VdGlscy5jYWxjdWxhdGVJbml0aWFsU3RhdGUoX19hc3NpZ24oX19hc3NpZ24oe30sdGhpcy5wcm9wcykse2FjdGl2ZUluZGV4Oml9KSx0aGlzLnN0YWdlQ29tcG9uZW50KSxpPVV0aWxzLmdldFRyYW5zbGF0ZTNkUHJvcGVydHkobi5hY3RpdmVJbmRleCxuKSxuPV9fYXNzaWduKF9fYXNzaWduKHt9LG4pLHt0cmFuc2xhdGUzZDppLGlzQXV0b1BsYXlpbmc6ZX0pLFV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246LWl9KSxbNCx0aGlzLnNldFN0YXRlKG4pXSk6WzMsMl07Y2FzZSAxOnQuc2VudCgpLHRoaXMuX2hhbmRsZVJlc2l6ZWQoKSx0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWQ9ITEsZSYmdGhpcy5faGFuZGxlUGxheSgpLHQubGFiZWw9MjtjYXNlIDI6cmV0dXJuWzJdfX0pfSl9LHQucHJvdG90eXBlLl9oYW5kbGVUb3VjaG1vdmU9ZnVuY3Rpb24odCxlKXt2YXIgaT1lLmFic1ksbj1lLmFic1gsbz1lLmRlbHRhWCxlPXRoaXMucHJvcHMuc3dpcGVEZWx0YSxzPXRoaXMuc3RhdGUsYT1zLnN3aXBlU2hpZnRWYWx1ZSxyPXMuc3dpcGVMaW1pdE1pbixsPXMuc3dpcGVMaW1pdE1heCx1PXMuaW5maW5pdGUscz1zLmZhZGVvdXRBbmltYXRpb25Qcm9jZXNzaW5nO2lmKHRoaXMuaGFzVXNlckFjdGlvbj0hMCwhKHN8fCF0aGlzLmlzVG91Y2hNb3ZlUHJvY2Vzc1N0YXJ0ZWQmJlV0aWxzLmlzVmVydGljYWxUb3VjaG1vdmVEZXRlY3RlZChuLGksZSkpKXt0aGlzLmlzVG91Y2hNb3ZlUHJvY2Vzc1N0YXJ0ZWR8fCh0aGlzLl9jYW5jZWxUaW1lb3V0QW5pbWF0aW9ucygpLHRoaXMuX3NldFRvdWNobW92ZVBvc2l0aW9uKCksdGhpcy5pc0FuaW1hdGlvbkRpc2FibGVkPSEwLHRoaXMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZD0hMCx0aGlzLl9oYW5kbGVTbGlkZUNoYW5nZSgpKTt2YXIgZD1VdGlscy5nZXRUb3VjaG1vdmVUcmFuc2xhdGVQb3NpdGlvbihvLHRoaXMudG91Y2htb3ZlUG9zaXRpb24pO2lmKCExPT09dSlyZXR1cm4gcjxkfHxkPC1sP3ZvaWQgMDp2b2lkIFV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246ZH0pO2lmKFV0aWxzLnNob3VsZFJlY2FsY3VsYXRlU3dpcGVQb3NpdGlvbihkLHIsbCkpdHJ5eyFmdW5jdGlvbiB0KCl7VXRpbHMuZ2V0SXNMZWZ0RGlyZWN0aW9uKG8pP2QrPWE6ZCs9LWE7VXRpbHMuc2hvdWxkUmVjYWxjdWxhdGVTd2lwZVBvc2l0aW9uKGQscixsKSYmdCgpfSgpfWNhdGNoKHQpe1V0aWxzLmRlYnVnKHQpfVV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246ZH0pfX0sdC5wcm90b3R5cGUuX2hhbmRsZVRvdWNoZW5kPWZ1bmN0aW9uKHQsZSl7dmFyIGksbixvLGU9ZS5kZWx0YVg7dGhpcy5fY2xlYXJUb3VjaG1vdmVQb3NpdGlvbigpLHRoaXMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZCYmKHRoaXMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZD0hMSxpPXRoaXMuc3RhdGUuYW5pbWF0aW9uRHVyYXRpb24sbj10aGlzLnByb3BzLmFuaW1hdGlvbkVhc2luZ0Z1bmN0aW9uLG89VXRpbHMuZ2V0VHJhbnNsYXRlWFByb3BlcnR5KHRoaXMuc3RhZ2VDb21wb25lbnQpLGU9VXRpbHMuZ2V0U3dpcGVUb3VjaGVuZFBvc2l0aW9uKHRoaXMuc3RhdGUsZSxvKSxVdGlscy5hbmltYXRlKHRoaXMuc3RhZ2VDb21wb25lbnQse3Bvc2l0aW9uOmUsYW5pbWF0aW9uRHVyYXRpb246aSxhbmltYXRpb25FYXNpbmdGdW5jdGlvbjpufSksdGhpcy5faGFuZGxlQmVmb3JlVG91Y2hFbmQoZSkpfSx0LnByb3RvdHlwZS5faGFuZGxlQmVmb3JlVG91Y2hFbmQ9ZnVuY3Rpb24ocyl7dmFyIHQ9dGhpcyxlPXRoaXMuc3RhdGUuYW5pbWF0aW9uRHVyYXRpb247dGhpcy50b3VjaEVuZFRpbWVvdXRJZD13aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiBfX2F3YWl0ZXIodCx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7dmFyIGUsaSxuLG89dGhpcztyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPVV0aWxzLmdldFN3aXBlVG91Y2hlbmRJbmRleChzLHRoaXMuc3RhdGUpLGk9VXRpbHMuZ2V0VHJhbnNsYXRlM2RQcm9wZXJ0eShlLHRoaXMuc3RhdGUpLFV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246LWl9KSxuPVV0aWxzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eSgpLFs0LHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUluZGV4OmUsdHJhbnNsYXRlM2Q6aSx0cmFuc2l0aW9uOm59KV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtyZXR1cm4gby5faGFuZGxlU2xpZGVDaGFuZ2VkKCl9KSxbMl19fSl9KX0sZSl9LHQucHJvdG90eXBlLl9oYW5kbGVTbGlkZVRvPWZ1bmN0aW9uKHQpe3ZhciBlPXQuYWN0aXZlSW5kZXgsYT12b2lkIDA9PT1lPzA6ZSxlPXQuZmFkZW91dEFuaW1hdGlvbkluZGV4LHI9dm9pZCAwPT09ZT9udWxsOmUsZT10LmZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbixsPXZvaWQgMD09PWU/bnVsbDplLHU9dC5ldmVudFR5cGU7cmV0dXJuIF9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZSxpLG4sbyxzPXRoaXM7cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsZnVuY3Rpb24odCl7c3dpdGNoKHQubGFiZWwpe2Nhc2UgMDpyZXR1cm4oaT10aGlzLnByb3BzLG49aS5pbmZpbml0ZSxpPWkuYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb24sZT10aGlzLnN0YXRlLG89ZS5pdGVtc0NvdW50LGU9ZS5hbmltYXRpb25EdXJhdGlvbix0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWR8fHRoaXMuc3RhdGUuYWN0aXZlSW5kZXg9PT1hfHwhbiYmVXRpbHMuc2hvdWxkQ2FuY2VsU2xpZGVBbmltYXRpb24oYSxvKSk/WzJdOih0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWQ9ITAsdGhpcy5fY2FuY2VsVGltZW91dEFuaW1hdGlvbnMoKSx0aGlzLl9oYW5kbGVTbGlkZUNoYW5nZSh1KSxuPSExLG89VXRpbHMuZ2V0VHJhbnNsYXRlM2RQcm9wZXJ0eShhLHRoaXMuc3RhdGUpLGk9bnVsbCE9PXImJm51bGwhPT1sPyhuPSEwLFV0aWxzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eSgpKTpVdGlscy5nZXRUcmFuc2l0aW9uUHJvcGVydHkoe2FuaW1hdGlvbkR1cmF0aW9uOmUsYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb246aX0pLFs0LHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUluZGV4OmEsdHJhbnNpdGlvbjppLHRyYW5zbGF0ZTNkOm8sYW5pbWF0aW9uRHVyYXRpb246ZSxmYWRlb3V0QW5pbWF0aW9uSW5kZXg6cixmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb246bCxmYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZzpufSldKTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLHRoaXMuc2xpZGVFbmRUaW1lb3V0SWQ9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gcy5faGFuZGxlQmVmb3JlU2xpZGVFbmQodSl9LGUpLFsyXX19KX0pfSx0LnByb3RvdHlwZS5faGFuZGxlVXBkYXRlU2xpZGVQb3NpdGlvbj1mdW5jdGlvbihvKXtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3ZhciBlLGksbjtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPXRoaXMuc3RhdGUuYW5pbWF0aW9uRHVyYXRpb24saT1VdGlscy5nZXRUcmFuc2xhdGUzZFByb3BlcnR5KG8sdGhpcy5zdGF0ZSksbj1VdGlscy5nZXRUcmFuc2l0aW9uUHJvcGVydHkoe2FuaW1hdGlvbkR1cmF0aW9uOjB9KSxbNCx0aGlzLnNldFN0YXRlKHthY3RpdmVJbmRleDpvLHRyYW5zbGF0ZTNkOmksdHJhbnNpdGlvbjpuLGFuaW1hdGlvbkR1cmF0aW9uOmUsZmFkZW91dEFuaW1hdGlvbkluZGV4Om51bGwsZmFkZW91dEFuaW1hdGlvblBvc2l0aW9uOm51bGwsZmFkZW91dEFuaW1hdGlvblByb2Nlc3Npbmc6ITF9KV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSxbMl19fSl9KX0sdC5wcm90b3R5cGUuX2hhbmRsZVJlc2l6ZWQ9ZnVuY3Rpb24oKXt0aGlzLnByb3BzLm9uUmVzaXplZCYmdGhpcy5wcm9wcy5vblJlc2l6ZWQoX19hc3NpZ24oX19hc3NpZ24oe30sdGhpcy5ldmVudE9iamVjdCkse3R5cGU6dHlwZXNfMS5FdmVudFR5cGUuUkVTSVpFfSkpfSx0LnByb3RvdHlwZS5faGFuZGxlU2xpZGVDaGFuZ2U9ZnVuY3Rpb24odCl7dGhpcy5wcm9wcy5vblNsaWRlQ2hhbmdlJiYodD10P19fYXNzaWduKF9fYXNzaWduKHt9LHRoaXMuZXZlbnRPYmplY3QpLHt0eXBlOnR9KTp0aGlzLmV2ZW50T2JqZWN0LHRoaXMucHJvcHMub25TbGlkZUNoYW5nZSh0KSl9LHQucHJvdG90eXBlLl9oYW5kbGVTbGlkZUNoYW5nZWQ9ZnVuY3Rpb24ocyl7cmV0dXJuIF9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZSxpLG4sbztyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybihpPXRoaXMuc3RhdGUsZT1pLmlzQXV0b1BsYXlpbmcsaT1pLmlzQXV0b1BsYXlDYW5jZWxlZE9uQWN0aW9uLG49dGhpcy5wcm9wcyxvPW4uYXV0b1BsYXlTdHJhdGVneSxuPW4ub25TbGlkZUNoYW5nZWQsVXRpbHMuc2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkFjdGlvbihvKSYmdGhpcy5oYXNVc2VyQWN0aW9uJiYhaSk/WzQsdGhpcy5zZXRTdGF0ZSh7aXNBdXRvUGxheUNhbmNlbGVkT25BY3Rpb246ITAsaXNBdXRvUGxheWluZzohMX0pXTpbMywyXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLFszLDNdO2Nhc2UgMjplJiZ0aGlzLl9oYW5kbGVQbGF5KCksdC5sYWJlbD0zO2Nhc2UgMzpyZXR1cm4gdGhpcy5pc0FuaW1hdGlvbkRpc2FibGVkPSExLG4mJihvPXM/X19hc3NpZ24oX19hc3NpZ24oe30sdGhpcy5ldmVudE9iamVjdCkse3R5cGU6c30pOnRoaXMuZXZlbnRPYmplY3QsbihvKSksWzJdfX0pfSl9LHQucHJvdG90eXBlLl9oYW5kbGVEb3RDbGljaz1mdW5jdGlvbih0KXt0aGlzLmhhc1VzZXJBY3Rpb249ITAsdGhpcy5zbGlkZVRvKHQpfSx0LnByb3RvdHlwZS5faGFuZGxlUGxheT1mdW5jdGlvbigpe3RoaXMuX3NldEF1dG9QbGF5SW50ZXJ2YWwoKX0sdC5wcm90b3R5cGUuX2NhbmNlbFRpbWVvdXRBbmltYXRpb25zPWZ1bmN0aW9uKCl7dGhpcy5fY2xlYXJBdXRvUGxheVRpbWVvdXQoKSx0aGlzLl9jbGVhclNsaWRlRW5kVGltZW91dCgpLHRoaXMuY2xlYXJUb3VjaGVuZFRpbWVvdXQoKX0sdC5wcm90b3R5cGUuX2NsZWFyQXV0b1BsYXlUaW1lb3V0PWZ1bmN0aW9uKCl7d2luZG93LmNsZWFyVGltZW91dCh0aGlzLmF1dG9QbGF5VGltZW91dElkKSx0aGlzLmF1dG9QbGF5VGltZW91dElkPXZvaWQgMH0sdC5wcm90b3R5cGUuX2NsZWFyU2xpZGVFbmRUaW1lb3V0PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMuc2xpZGVFbmRUaW1lb3V0SWQpLHRoaXMuc2xpZGVFbmRUaW1lb3V0SWQ9dm9pZCAwfSx0LnByb3RvdHlwZS5jbGVhclRvdWNoZW5kVGltZW91dD1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLnRvdWNoRW5kVGltZW91dElkKSx0aGlzLnRvdWNoRW5kVGltZW91dElkPXZvaWQgMH0sdC5wcm90b3R5cGUuX2NsZWFyVG91Y2htb3ZlUG9zaXRpb249ZnVuY3Rpb24oKXt0aGlzLnN0YXJ0VG91Y2htb3ZlUG9zaXRpb249dm9pZCAwfSx0LnByb3RvdHlwZS5fc2V0VG91Y2htb3ZlUG9zaXRpb249ZnVuY3Rpb24oKXt2YXIgdD1VdGlscy5nZXRUcmFuc2xhdGVYUHJvcGVydHkodGhpcy5zdGFnZUNvbXBvbmVudCk7dGhpcy5zdGFydFRvdWNobW92ZVBvc2l0aW9uPS10fSx0LnByb3RvdHlwZS5fc2V0SW5pdGlhbFN0YXRlPWZ1bmN0aW9uKCl7cmV0dXJuIF9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPVV0aWxzLmNhbGN1bGF0ZUluaXRpYWxTdGF0ZSh0aGlzLnByb3BzLHRoaXMuc3RhZ2VDb21wb25lbnQpLHRoaXMucm9vdENvbXBvbmVudERpbWVuc2lvbnM9VXRpbHMuZ2V0RWxlbWVudERpbWVuc2lvbnModGhpcy5yb290RWxlbWVudCksWzQsdGhpcy5zZXRTdGF0ZShlKV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSx0aGlzLnByb3BzLm9uSW5pdGlhbGl6ZWQmJnRoaXMucHJvcHMub25Jbml0aWFsaXplZChfX2Fzc2lnbihfX2Fzc2lnbih7fSx0aGlzLmV2ZW50T2JqZWN0KSx7dHlwZTp0eXBlc18xLkV2ZW50VHlwZS5JTklUfSkpLFsyXX19KX0pfSx0LnByb3RvdHlwZS5fc2V0QXV0b1BsYXlJbnRlcnZhbD1mdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10aGlzLnByb3BzLGk9ZS5hdXRvUGxheURpcmVjdGlvbixlPWUuYXV0b1BsYXlJbnRlcnZhbDt0aGlzLmF1dG9QbGF5VGltZW91dElkPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5pc0hvdmVyZWR8fChpPT09dHlwZXNfMS5BdXRvcGxheURpcmVjdGlvbi5SVEw/dC5zbGlkZVByZXYoKTp0LnNsaWRlTmV4dCgpKX0sZSl9LHQucHJvdG90eXBlLl9zZXR1cFN3aXBlSGFuZGxlcnM9ZnVuY3Rpb24oKXt0aGlzLnN3aXBlTGlzdGVuZXI9bmV3IHZhbmlsbGFfc3dpcGVfMS5kZWZhdWx0KHtlbGVtZW50OnRoaXMucm9vdEVsZW1lbnQsZGVsdGE6dGhpcy5wcm9wcy5zd2lwZURlbHRhLG9uU3dpcGluZzp0aGlzLl9oYW5kbGVUb3VjaG1vdmUsb25Td2lwZWQ6dGhpcy5faGFuZGxlVG91Y2hlbmQscm90YXRpb25BbmdsZTo1LG1vdXNlVHJhY2tpbmdFbmFibGVkOnRoaXMucHJvcHMubW91c2VUcmFja2luZyx0b3VjaFRyYWNraW5nRW5hYmxlZDp0aGlzLnByb3BzLnRvdWNoVHJhY2tpbmcscHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudDohdGhpcy5wcm9wcy50b3VjaE1vdmVEZWZhdWx0RXZlbnRzLHByZXZlbnRUcmFja2luZ09uTW91c2VsZWF2ZTohMH0pLHRoaXMuc3dpcGVMaXN0ZW5lci5pbml0KCl9LHQucHJvdG90eXBlLl91cGRhdGVDb21wb25lbnQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpczt2b2lkIDA9PT10JiYodD10aGlzLnByb3BzKSx0aGlzLl9jYW5jZWxUaW1lb3V0QW5pbWF0aW9ucygpLHRoaXMuaXNBbmltYXRpb25EaXNhYmxlZD0hMSx0aGlzLnN0YXRlLmlzQXV0b1BsYXlpbmcmJnRoaXMuX2hhbmRsZVBsYXkoKSx0aGlzLnNldFN0YXRlKHtjbG9uZXM6VXRpbHMuY3JlYXRlQ2xvbmVzKHQpfSkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7ZS5zZXRTdGF0ZShVdGlscy5jYWxjdWxhdGVJbml0aWFsU3RhdGUodCxlLnN0YWdlQ29tcG9uZW50KSl9KX0sdC5wcm90b3R5cGUuX3VwZGF0ZVN3aXBlUHJvcHM9ZnVuY3Rpb24oKXt0aGlzLnN3aXBlTGlzdGVuZXImJnRoaXMuc3dpcGVMaXN0ZW5lci51cGRhdGUoe2RlbHRhOnRoaXMucHJvcHMuc3dpcGVEZWx0YSxtb3VzZVRyYWNraW5nRW5hYmxlZDp0aGlzLnByb3BzLm1vdXNlVHJhY2tpbmcsdG91Y2hUcmFja2luZ0VuYWJsZWQ6dGhpcy5wcm9wcy50b3VjaFRyYWNraW5nLHByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQ6IXRoaXMucHJvcHMudG91Y2hNb3ZlRGVmYXVsdEV2ZW50c30pfSx0LnByb3RvdHlwZS5fcmVuZGVyRG90c05hdmlnYXRpb249ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnByb3BzLGU9dC5yZW5kZXJEb3RzSXRlbSx0PXQuY29udHJvbHNTdHJhdGVneTtyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVmlld3MuRG90c05hdmlnYXRpb24se3N0YXRlOnRoaXMuc3RhdGUsb25DbGljazp0aGlzLl9oYW5kbGVEb3RDbGljayxyZW5kZXJEb3RzSXRlbTplLGNvbnRyb2xzU3RyYXRlZ3k6dH0pfSx0LnByb3RvdHlwZS5fcmVuZGVyUHJldkJ1dHRvbj1mdW5jdGlvbigpe3ZhciB0PXRoaXMucHJvcHMucmVuZGVyUHJldkJ1dHRvbixlPVV0aWxzLmdldFNsaWRlSXRlbUluZm8odGhpcy5zdGF0ZSkuaXNQcmV2U2xpZGVEaXNhYmxlZDtyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVmlld3MuUHJldk5leHRCdXR0b24se25hbWU6XCJwcmV2XCIsb25DbGljazp0aGlzLnNsaWRlUHJldixpc0Rpc2FibGVkOmUscmVuZGVyUHJldkJ1dHRvbjp0fSl9LHQucHJvdG90eXBlLl9yZW5kZXJOZXh0QnV0dG9uPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5wcm9wcy5yZW5kZXJOZXh0QnV0dG9uLGU9VXRpbHMuZ2V0U2xpZGVJdGVtSW5mbyh0aGlzLnN0YXRlKS5pc05leHRTbGlkZURpc2FibGVkO3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5QcmV2TmV4dEJ1dHRvbix7bmFtZTpcIm5leHRcIixvbkNsaWNrOnRoaXMuc2xpZGVOZXh0LGlzRGlzYWJsZWQ6ZSxyZW5kZXJOZXh0QnV0dG9uOnR9KX0sdC5wcm90b3R5cGUuX3JlbmRlclBsYXlQYXVzZUJ1dHRvbj1mdW5jdGlvbigpe3ZhciB0PXRoaXMucHJvcHMucmVuZGVyUGxheVBhdXNlQnV0dG9uLGU9dGhpcy5zdGF0ZS5pc0F1dG9QbGF5aW5nO3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5QbGF5UGF1c2VCdXR0b24se2lzUGxheWluZzplLG9uQ2xpY2s6dGhpcy5faGFuZGxlUGxheVBhdXNlVG9nZ2xlLHJlbmRlclBsYXlQYXVzZUJ1dHRvbjp0fSl9LHQucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3ZhciB0PXRoaXMuc3RhdGUsZT10LnRyYW5zbGF0ZTNkLGk9dC5jbG9uZXMsbj10LnRyYW5zaXRpb24sdD10LmNhblVzZURvbSxvPVV0aWxzLnNob3VsZERpc2FibGVEb3RzKHRoaXMucHJvcHMsdGhpcy5zdGF0ZSkscz1VdGlscy5zaG91bGREaXNhYmxlQnV0dG9ucyh0aGlzLnByb3BzLHRoaXMuc3RhdGUpLGE9VXRpbHMuZ2V0UmVuZGVyV3JhcHBlclN0eWxlcyh0aGlzLnByb3BzLHRoaXMuc3RhdGUsdGhpcy5zdGFnZUNvbXBvbmVudCksZT1VdGlscy5nZXRSZW5kZXJTdGFnZVN0eWxlcyh7dHJhbnNsYXRlM2Q6ZX0se3RyYW5zaXRpb246bn0pLG49dGhpcy5wcm9wcy5zc3JTaWxlbnRNb2RlfHx0P1wiXCI6dHlwZXNfMS5Nb2RpZmllcnMuU1NSLHQ9VXRpbHMuY29uY2F0Q2xhc3NuYW1lcyh0eXBlc18xLkNsYXNzbmFtZXMuUk9PVCxuKTtyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnR9LHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3JlZjp0aGlzLl9zZXRSb290Q29tcG9uZW50UmVmfSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTphLGNsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuV1JBUFBFUixvbk1vdXNlRW50ZXI6dGhpcy5faGFuZGxlTW91c2VFbnRlcixvbk1vdXNlTGVhdmU6dGhpcy5faGFuZGxlTW91c2VMZWF2ZX0scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLHtzdHlsZTplLGNsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuU1RBR0UscmVmOnRoaXMuX3NldFN0YWdlQ29tcG9uZW50UmVmfSxpLm1hcCh0aGlzLl9yZW5kZXJTdGFnZUl0ZW0pKSkpLG8/bnVsbDp0aGlzLl9yZW5kZXJEb3RzTmF2aWdhdGlvbigpLHM/bnVsbDp0aGlzLl9yZW5kZXJQcmV2QnV0dG9uKCkscz9udWxsOnRoaXMuX3JlbmRlck5leHRCdXR0b24oKSx0aGlzLnByb3BzLmRpc2FibGVTbGlkZUluZm8/bnVsbDp0aGlzLl9yZW5kZXJTbGlkZUluZm8oKSx0aGlzLnByb3BzLmF1dG9QbGF5Q29udHJvbHM/dGhpcy5fcmVuZGVyUGxheVBhdXNlQnV0dG9uKCk6bnVsbCl9LHQuZGVmYXVsdFByb3BzPWRlZmF1bHRQcm9wc18xLmRlZmF1bHRQcm9wcyx0fShyZWFjdF8xLmRlZmF1bHQuUHVyZUNvbXBvbmVudCkpO2V4cG9ydHMuZGVmYXVsdD1BbGljZUNhcm91c2VsOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5cbmZ1bmN0aW9uIHBhcnNlKHV1aWQpIHtcbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cblxuICBsZXQgdjtcbiAgY29uc3QgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBQYXJzZSAjIyMjIyMjIy0uLi4uLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0O1xuICBhcnJbMV0gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsyXSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbM10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tIyMjIy0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzRdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzVdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tIyMjIy0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls2XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4O1xuICBhcnJbN10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLSMjIyMtLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzhdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDg7XG4gIGFycls5XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tLi4uLi0jIyMjIyMjIyMjIyNcbiAgLy8gKFVzZSBcIi9cIiB0byBhdm9pZCAzMi1iaXQgdHJ1bmNhdGlvbiB3aGVuIGJpdC1zaGlmdGluZyBoaWdoLW9yZGVyIGJ5dGVzKVxuXG4gIGFyclsxMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTFdID0gdiAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzEyXSA9IHYgPj4+IDI0ICYgMHhmZjtcbiAgYXJyWzEzXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzE0XSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbMTVdID0gdiAmIDB4ZmY7XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlOyIsImltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmltcG9ydCBwYXJzZSBmcm9tICcuL3BhcnNlLmpzJztcblxuZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHIpIHtcbiAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpOyAvLyBVVEY4IGVzY2FwZVxuXG4gIGNvbnN0IGJ5dGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuXG4gIHJldHVybiBieXRlcztcbn1cblxuZXhwb3J0IGNvbnN0IEROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IGNvbnN0IFVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdjM1KG5hbWUsIHZlcnNpb24sIGhhc2hmdW5jKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBfbmFtZXNwYWNlO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSBwYXJzZShuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGlmICgoKF9uYW1lc3BhY2UgPSBuYW1lc3BhY2UpID09PSBudWxsIHx8IF9uYW1lc3BhY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9uYW1lc3BhY2UubGVuZ3RoKSAhPT0gMTYpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH0gLy8gQ29tcHV0ZSBoYXNoIG9mIG5hbWVzcGFjZSBhbmQgdmFsdWUsIFBlciA0LjNcbiAgICAvLyBGdXR1cmU6IFVzZSBzcHJlYWQgc3ludGF4IHdoZW4gc3VwcG9ydGVkIG9uIGFsbCBwbGF0Zm9ybXMsIGUuZy4gYGJ5dGVzID1cbiAgICAvLyBoYXNoZnVuYyhbLi4ubmFtZXNwYWNlLCAuLi4gdmFsdWVdKWBcblxuXG4gICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTYgKyB2YWx1ZS5sZW5ndGgpO1xuICAgIGJ5dGVzLnNldChuYW1lc3BhY2UpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZSwgbmFtZXNwYWNlLmxlbmd0aCk7XG4gICAgYnl0ZXMgPSBoYXNoZnVuYyhieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDB4MGYgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiAweDNmIHwgMHg4MDtcblxuICAgIGlmIChidWYpIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBidWY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShieXRlcyk7XG4gIH0gLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG5cblxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gIH0gY2F0Y2ggKGVycikge30gLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcblxuXG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiLypcbiAqIEJyb3dzZXItY29tcGF0aWJsZSBKYXZhU2NyaXB0IE1ENVxuICpcbiAqIE1vZGlmaWNhdGlvbiBvZiBKYXZhU2NyaXB0IE1ENVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1NRDVcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQmFzZWQgb25cbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMiBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDlcbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KG1zZy5sZW5ndGgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzW2ldID0gbXNnLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1kNVRvSGV4RW5jb2RlZEFycmF5KHdvcmRzVG9NZDUoYnl0ZXNUb1dvcmRzKGJ5dGVzKSwgYnl0ZXMubGVuZ3RoICogOCkpO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhbiBhcnJheSBvZiBieXRlc1xuICovXG5cblxuZnVuY3Rpb24gbWQ1VG9IZXhFbmNvZGVkQXJyYXkoaW5wdXQpIHtcbiAgY29uc3Qgb3V0cHV0ID0gW107XG4gIGNvbnN0IGxlbmd0aDMyID0gaW5wdXQubGVuZ3RoICogMzI7XG4gIGNvbnN0IGhleFRhYiA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDMyOyBpICs9IDgpIHtcbiAgICBjb25zdCB4ID0gaW5wdXRbaSA+PiA1XSA+Pj4gaSAlIDMyICYgMHhmZjtcbiAgICBjb25zdCBoZXggPSBwYXJzZUludChoZXhUYWIuY2hhckF0KHggPj4+IDQgJiAweDBmKSArIGhleFRhYi5jaGFyQXQoeCAmIDB4MGYpLCAxNik7XG4gICAgb3V0cHV0LnB1c2goaGV4KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBvdXRwdXQgbGVuZ3RoIHdpdGggcGFkZGluZyBhbmQgYml0IGxlbmd0aFxuICovXG5cblxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICByZXR1cm4gKGlucHV0TGVuZ3RoOCArIDY0ID4+PiA5IDw8IDQpICsgMTQgKyAxO1xufVxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cblxuXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4W2dldE91dHB1dExlbmd0aChsZW4pIC0gMV0gPSBsZW47XG4gIGxldCBhID0gMTczMjU4NDE5MztcbiAgbGV0IGIgPSAtMjcxNzMzODc5O1xuICBsZXQgYyA9IC0xNzMyNTg0MTk0O1xuICBsZXQgZCA9IDI3MTczMzg3ODtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgY29uc3Qgb2xkYSA9IGE7XG4gICAgY29uc3Qgb2xkYiA9IGI7XG4gICAgY29uc3Qgb2xkYyA9IGM7XG4gICAgY29uc3Qgb2xkZCA9IGQ7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4Myk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpO1xuICAgIGIgPSBzYWZlQWRkKGIsIG9sZGIpO1xuICAgIGMgPSBzYWZlQWRkKGMsIG9sZGMpO1xuICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpO1xuICB9XG5cbiAgcmV0dXJuIFthLCBiLCBjLCBkXTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IGJ5dGVzIHRvIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHNcbiAqIENoYXJhY3RlcnMgPjI1NSBoYXZlIHRoZWlyIGhpZ2gtYnl0ZSBzaWxlbnRseSBpZ25vcmVkLlxuICovXG5cblxuZnVuY3Rpb24gYnl0ZXNUb1dvcmRzKGlucHV0KSB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBsZW5ndGg4ID0gaW5wdXQubGVuZ3RoICogODtcbiAgY29uc3Qgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg4OyBpICs9IDgpIHtcbiAgICBvdXRwdXRbaSA+PiA1XSB8PSAoaW5wdXRbaSAvIDhdICYgMHhmZikgPDwgaSAlIDMyO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIGNvbnN0IGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcbiAgY29uc3QgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gIHJldHVybiBtc3cgPDwgMTYgfCBsc3cgJiAweGZmZmY7XG59XG4vKlxuICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICovXG5cblxuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG59XG4vKlxuICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpO1xufVxuXG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGMgfCB+YiAmIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGQgfCBjICYgfmQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1kNTsiLCJpbXBvcnQgdjM1IGZyb20gJy4vdjM1LmpzJztcbmltcG9ydCBtZDUgZnJvbSAnLi9tZDUuanMnO1xuY29uc3QgdjMgPSB2MzUoJ3YzJywgMHgzMCwgbWQ1KTtcbmV4cG9ydCBkZWZhdWx0IHYzOyIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB4ICYgeSBeIH54ICYgejtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfVxufVxuXG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cblxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICBjb25zdCBLID0gWzB4NWE4Mjc5OTksIDB4NmVkOWViYTEsIDB4OGYxYmJjZGMsIDB4Y2E2MmMxZDZdO1xuICBjb25zdCBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuXG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzLnB1c2gobXNnLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShieXRlcykpIHtcbiAgICAvLyBDb252ZXJ0IEFycmF5LWxpa2UgdG8gQXJyYXlcbiAgICBieXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJ5dGVzKTtcbiAgfVxuXG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIGNvbnN0IGwgPSBieXRlcy5sZW5ndGggLyA0ICsgMjtcbiAgY29uc3QgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICBjb25zdCBNID0gbmV3IEFycmF5KE4pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgY29uc3QgYXJyID0gbmV3IFVpbnQzMkFycmF5KDE2KTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgYXJyW2pdID0gYnl0ZXNbaSAqIDY0ICsgaiAqIDRdIDw8IDI0IHwgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNiB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMl0gPDwgOCB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgfVxuXG4gICAgTVtpXSA9IGFycjtcbiAgfVxuXG4gIE1bTiAtIDFdWzE0XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggLyBNYXRoLnBvdygyLCAzMik7XG4gIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgTVtOIC0gMV1bMTVdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAmIDB4ZmZmZmZmZmY7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICBjb25zdCBXID0gbmV3IFVpbnQzMkFycmF5KDgwKTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgMTY7ICsrdCkge1xuICAgICAgV1t0XSA9IE1baV1bdF07XG4gICAgfVxuXG4gICAgZm9yIChsZXQgdCA9IDE2OyB0IDwgODA7ICsrdCkge1xuICAgICAgV1t0XSA9IFJPVEwoV1t0IC0gM10gXiBXW3QgLSA4XSBeIFdbdCAtIDE0XSBeIFdbdCAtIDE2XSwgMSk7XG4gICAgfVxuXG4gICAgbGV0IGEgPSBIWzBdO1xuICAgIGxldCBiID0gSFsxXTtcbiAgICBsZXQgYyA9IEhbMl07XG4gICAgbGV0IGQgPSBIWzNdO1xuICAgIGxldCBlID0gSFs0XTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgODA7ICsrdCkge1xuICAgICAgY29uc3QgcyA9IE1hdGguZmxvb3IodCAvIDIwKTtcbiAgICAgIGNvbnN0IFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1t0XSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cblxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cblxuICByZXR1cm4gW0hbMF0gPj4gMjQgJiAweGZmLCBIWzBdID4+IDE2ICYgMHhmZiwgSFswXSA+PiA4ICYgMHhmZiwgSFswXSAmIDB4ZmYsIEhbMV0gPj4gMjQgJiAweGZmLCBIWzFdID4+IDE2ICYgMHhmZiwgSFsxXSA+PiA4ICYgMHhmZiwgSFsxXSAmIDB4ZmYsIEhbMl0gPj4gMjQgJiAweGZmLCBIWzJdID4+IDE2ICYgMHhmZiwgSFsyXSA+PiA4ICYgMHhmZiwgSFsyXSAmIDB4ZmYsIEhbM10gPj4gMjQgJiAweGZmLCBIWzNdID4+IDE2ICYgMHhmZiwgSFszXSA+PiA4ICYgMHhmZiwgSFszXSAmIDB4ZmYsIEhbNF0gPj4gMjQgJiAweGZmLCBIWzRdID4+IDE2ICYgMHhmZiwgSFs0XSA+PiA4ICYgMHhmZiwgSFs0XSAmIDB4ZmZdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaGExOyIsImltcG9ydCB2MzUgZnJvbSAnLi92MzUuanMnO1xuaW1wb3J0IHNoYTEgZnJvbSAnLi9zaGExLmpzJztcbmNvbnN0IHY1ID0gdjM1KCd2NScsIDB4NTAsIHNoYTEpO1xuZXhwb3J0IGRlZmF1bHQgdjU7IiwiLypcbiByZWJ1aWx0IHJlc3BvbnNpdmUgb2JqZWN0IGRlcGVuZGluZyBvbiB0aGUgY29udGFpbmVyIHdpZHRoXG4gdXNpbmcgdGhlIHJhdGlvIG9mIHRoZSB3aWR0aCBvZiB0aGUgYm94IHRvIHRoZSB3aWR0aCBvZiB0aGUgd2luZG93XG4qL1xuZXhwb3J0IGNvbnN0IGdldE5ld1Jlc3BvbnNpdmVWYWx1ZXMgPSAocmF0ZSwgZGVmYXVsdFJlc3BvbnNpdmUpID0+IHtcbiAgICBsZXQgbmV3UmVzcG9uc2l2ZSA9IHt9O1xuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZGVmYXVsdFJlc3BvbnNpdmUpO1xuXG4gICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IE1hdGgucm91bmQoZGVmYXVsdFJlc3BvbnNpdmVba2V5XS5pdGVtcyAvIHJhdGUpO1xuICAgICAgICBuZXdSZXNwb25zaXZlW2tleV0gPSB7IGl0ZW1zOiBNYXRoLm1heChuZXdWYWx1ZSwgMSkgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdSZXNwb25zaXZlO1xufTtcblxuLypcbiAgICBDb25zdGFudHNcbiovXG5leHBvcnQgY29uc3Qgc3RhdHVzTGlzdCA9IHtcbiAgICByZXNldDogXCJyZXNldFwiLFxuICAgIGdvTGFzdDogXCJnb0xhc3RcIixcbiAgICBuZXh0OiBcIm5leHRcIixcbiAgICBwcmV2OiBcInByZXZcIlxufTtcblxuZXhwb3J0IGNvbnN0IGNsYXNzZXNBY3Rpb24gPSB7XG4gICAgYWRkOiBcImFkZFwiLFxuICAgIHJlbW92ZTogXCJyZW1vdmVcIlxufTtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkNsYXNzZXMgPSB7XG4gICAgbXVsdGlfY29udGFpbmVyOiBcIm11bHRpLWNhcm91c2VsX19jb250YWluZXJcIixcbiAgICBtdWx0aV9lbXB0eV9jb250YWluZXI6IFwibXVsdGktY2Fyb3VzZWxfX2VtcHR5LWNvbnRhaW5lclwiLFxuICAgIGl0ZW06IFwibXVsdGktY2Fyb3VzZWxfX2l0ZW1cIixcbiAgICBhY3RpdmU6IFwibXVsdGktY2Fyb3VzZWxfX2FjdGl2ZVwiLFxuICAgIG5vX2RvdHM6IFwibXVsdGktY2Fyb3VzZWxfX25vLWRvdHNcIixcbiAgICBlcnJvcjogXCJtdWx0aS1jYXJvdXNlbF9fZXJyb3JcIixcbiAgICBsb2FkaW5nOiBcIm11bHRpLWNhcm91c2VsX19sb2FkaW5nXCJcbn07XG5cbmV4cG9ydCBjb25zdCBub3JtYWxDYXJvdXNlbENsYXNzZXMgPSB7XG4gICAgbm9ybWFsX2NvbnRhaW5lcjogXCJub3JtYWwtY2Fyb3VzZWxfX2NvbnRhaW5lclwiLFxuICAgIG5vcm1hbF9pdGVtOiBcIm5vcm1hbC1jYXJvdXNlbF9faXRlbVwiXG59O1xuXG5leHBvcnQgY29uc3QgYWN0aXZlQ2xpY2tDbGFzc2VzID0ge1xuICAgIGFjdGl2ZV9jbGlja19jb250YWluZXI6IFwiYWN0aXZlLWNsaWNrLWNhcm91c2VsX19jb250YWluZXJcIixcbiAgICBhY3RpdmVfY2xpY2tfaXRlbTogXCJhY3RpdmUtY2xpY2stY2Fyb3VzZWxfX2l0ZW1cIixcbiAgICBhY3RpdmVfY2xpY2tfd2l0aF9idG46IFwiYWN0aXZlLWNsaWNrLWNhcm91c2VsX193aXRoLWJ0blwiXG59O1xuXG5leHBvcnQgY29uc3QgYWN0aXZlU2xpZGVDbGFzc2VzID0ge1xuICAgIGFjdGl2ZV9zbGlkZV9jb250YWluZXI6IFwiYWN0aXZlLXNsaWRlLWNhcm91c2VsX19jb250YWluZXJcIixcbiAgICBhY3RpdmVfc2xpZGVfd3JhcHBlcjogXCJhY3RpdmUtc2xpZGUtY2Fyb3VzZWxfX3dyYXBwZXJcIixcbiAgICBmaXJzdF9pdGVtOiBcImFjdGl2ZS1zbGlkZS1jYXJvdXNlbF9fZmlyc3QtaXRlbVwiLFxuICAgIGxhc3RfaXRlbTogXCJhY3RpdmUtc2xpZGUtY2Fyb3VzZWxfX2xhc3QtaXRlbVwiLFxuICAgIHByZXZfYnRuOiBcImFjdGl2ZS1zbGlkZS1jYXJvdXNlbF9fcHJldi1idG5cIixcbiAgICBuZXh0X2J0bjogXCJhY3RpdmUtc2xpZGUtY2Fyb3VzZWxfX25leHQtYnRuXCJcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uL3VpL05vcm1hbENhcm91c2VsLnNjc3NcIjtcbmltcG9ydCBcIi4uL3VpL0FjdGl2ZUNsaWNrQ2Fyb3VzZWwuc2Nzc1wiO1xuaW1wb3J0IEFsaWNlQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWFsaWNlLWNhcm91c2VsXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHtcbiAgICBnZXROZXdSZXNwb25zaXZlVmFsdWVzLFxuICAgIGNvbW1vbkNsYXNzZXMsXG4gICAgbm9ybWFsQ2Fyb3VzZWxDbGFzc2VzLFxuICAgIGFjdGl2ZUNsaWNrQ2xhc3NlcyxcbiAgICBjbGFzc2VzQWN0aW9uXG59IGZyb20gXCIuL2hlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3JtYWxDYXJvdXNlbChwcm9wcykge1xuICAgIGNvbnN0IGNhcm91c2VsUGFyZW50ID0gdXNlUmVmKCk7XG4gICAgY29uc3QgW2Nhcm91c2VsX2l0ZW1zLCBzZXRfY2Fyb3VzZWxfaXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtyZXNwb25zaXZlLCBzZXRSZXNwb25zaXZlXSA9IHVzZVN0YXRlKHsgLi4ucHJvcHMuZGVmYXVsdFJlc3BvbnNpdmUgfSk7XG4gICAgY29uc3QgW3VuaXF1ZUNsYXNzLCBzZXRVbmlxdWVDbGFzc10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIC8qXG4gICAgICAgIHRoaXMgbWV0aG9kIGJ1aWx0IHRvIGhhbmRsZSBpZiB0aGUgY2Fyb3VzZWwgaGFzIGJlZW4gcmVuZGVyZWQgaW5zaWRlIGEgY29udGFpbmVyXG4gICAgICAgIHRoYXQgaXMgbm90IGNvdmVyaW5nIHRoZSB3aW5kb3cncyBmdWxsIHdpZHRoXG4gICAgKi9cbiAgICBjb25zdCBzZXROZXdSZXNwb25zaXZlID0gKCkgPT4ge1xuICAgICAgICBsZXQgcmF0ZSA9IHdpbmRvdy5pbm5lcldpZHRoIC8gY2Fyb3VzZWxQYXJlbnQuY3VycmVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgaWYgKHJhdGUgPiAxLjM1KSB7XG4gICAgICAgICAgICBsZXQgbmV3UmVzcG9uc2l2ZSA9IGdldE5ld1Jlc3BvbnNpdmVWYWx1ZXMocmF0ZSwgcHJvcHMuZGVmYXVsdFJlc3BvbnNpdmUpO1xuICAgICAgICAgICAgc2V0UmVzcG9uc2l2ZSh7IC4uLm5ld1Jlc3BvbnNpdmUgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRSZXNwb25zaXZlKHsgLi4ucHJvcHMuZGVmYXVsdFJlc3BvbnNpdmUgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYWRkT3JSZW1vdmVDbGFzc05hbWUgPSAobm9kZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChhY3Rpb24gPT09IGNsYXNzZXNBY3Rpb24ucmVtb3ZlKSB7XG4gICAgICAgICAgICBub2RlPy5jbGFzc0xpc3Q/LnJlbW92ZShjb21tb25DbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlPy5jbGFzc0xpc3Q/LmFkZChjb21tb25DbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgaW4gY2FzZSBvZiBcImluZmluaXRlXCIgY2Fyb3VzZWwgdGhlIG5vZGUgd2lsbCBiZSBub2RlIGxpc3QgXCJBcnJheVwiXG4gICAgICAgIGJlY2F1c2UgdGhlIGNhcm91c2VsIGNyZWF0ZSBhIGNvcHkgb2YgYWxsIHRoZSBpdGVtc1xuICAgICAgICB0aGF0IHdoeSB3ZSBuZWVkIGNoYW5nZSB0aGUgYWN0aXZlIGNsYXNzIG9uIGJvdGggbm9kZXMgLSB0aGUgY2Fyb3VzZWwgcmVuZGVyIGJvdGggLVxuICAgICAgICBhbmQgd2l0aCBubyBcImluZmluaXRlXCIgdGhlIG5vZGUgbGlzdCB3aWxsIGJlIGxlbmd0aCBvZiBcIjFcIlxuICAgICovXG4gICAgY29uc3QgY2hhbmdlQWN0aXZlQ2xhc3MgPSAobm9kZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChub2RlPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG5vZGUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBhZGRPclJlbW92ZUNsYXNzTmFtZShpdGVtLCBhY3Rpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgaWR4LVwiXCIgaXMgdGhlIGNvbW1vbiB1bmlxdWUgY2xhc3MgYmV0d2VlbiBvcmlnaW5hbCBpdGVtIGFuZCB0aGUgY2xvbmVkIG9uZVxuICAgICovXG4gICAgY29uc3QgZ2V0SWR4Q2xhc3NOYW1lID0gZSA9PiB7XG4gICAgICAgIGxldCBjbGlja2VkSXRlbSA9IGUudGFyZ2V0O1xuXG4gICAgICAgIC8vIGluIGNhc2Ugb2YgY2xpY2tpbmcgZWxlbWVudCBpbnNpZGUgdGhlIGl0ZW0gd2UgbmVlZCB0aGUgbWFpbiBkaXYgd2l0aCBcImlkeC1cIiBjbGFzcyBuYW1lXG4gICAgICAgIHdoaWxlIChjbGlja2VkSXRlbSkge1xuICAgICAgICAgICAgaWYgKGNsaWNrZWRJdGVtLmNsYXNzTGlzdC5jb250YWlucyhjb21tb25DbGFzc2VzLml0ZW0pKSBicmVhaztcbiAgICAgICAgICAgIGNsaWNrZWRJdGVtID0gY2xpY2tlZEl0ZW0ucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjbGFzc05hbWVzID0gY2xpY2tlZEl0ZW0uY2xhc3NOYW1lLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZXM/LmZpbHRlcihpdGVtID0+IGl0ZW0uaW5jbHVkZXMoXCJpZHhcIikpPy5bMF07XG4gICAgfTtcblxuICAgIGNvbnN0IG9uQ2FyZENsaWNrZWQgPSAoZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChhY3Rpb24/LmNhbkV4ZWN1dGUpIGFjdGlvbi5leGVjdXRlKCk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIGFjdGl2ZSBjbGFzcyBmcm9tIG9yaWdpbmFsIGFuZCBjbG9uZWQgaXRlbVxuICAgICAgICBsZXQgYWN0aXZlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3VuaXF1ZUNsYXNzfWApPy5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjb21tb25DbGFzc2VzLmFjdGl2ZX1gKTtcbiAgICAgICAgY2hhbmdlQWN0aXZlQ2xhc3MoYWN0aXZlTm9kZSwgY2xhc3Nlc0FjdGlvbi5yZW1vdmUpO1xuXG4gICAgICAgIGxldCBpZHhDbGFzcyA9IGdldElkeENsYXNzTmFtZShlKTtcblxuICAgICAgICAvLyBhZGQgYWN0aXZlIGNsYXNzIGZvciBib3RoIG9yaWdpbmFsIGFuZCBjbG9uZWQgaXRlbVxuICAgICAgICBsZXQgaXRlbVRvU2V0QWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dW5pcXVlQ2xhc3N9YCk/LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2lkeENsYXNzfWApO1xuICAgICAgICBjaGFuZ2VBY3RpdmVDbGFzcyhpdGVtVG9TZXRBY3RpdmUsIGNsYXNzZXNBY3Rpb24uYWRkKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgIHNldCB0aGUgYWN0aXZlIGl0ZW0gYWZ0ZXIgdGhlIGNhcm91c2VsIGhhcyBhbHJlYWR5IGJlZW4gaW5pdGlhbGl6ZWQgb3IgcmVzaXplZFxuICAgICAgTk9URTogdGhlIGNhcm91c2VsIG1vdmVzIHRvIHRoZSBiZWdpbm5pbmcgd2hlbiB0aGUgY2Fyb3VzZWwgcmVzaXplZFxuICAgICovXG4gICAgY29uc3Qgb25Jbml0aWFsaXplZE9yUmVzaXplZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLmNhcm91c2VsVHlwZSA9PT0gXCJhY3RpdmVcIikge1xuICAgICAgICAgICAgbGV0IGZpcnN0Q2Fyb3VzZWxJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dW5pcXVlQ2xhc3N9YCk/LnF1ZXJ5U2VsZWN0b3IoXCIuaWR4LTBcIik7XG4gICAgICAgICAgICBpZiAoIWZpcnN0Q2Fyb3VzZWxJdGVtPy5jbGFzc0xpc3Q/LmNvbnRhaW5zKGNvbW1vbkNsYXNzZXMuYWN0aXZlKSkge1xuICAgICAgICAgICAgICAgIGZpcnN0Q2Fyb3VzZWxJdGVtPy5jbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIHNldCBhIHVuaXF1ZSBjbGFzcyBpbiBjYXNlIG9mIHVzaW5nIHR3byBkaWZmZXJlbnQgY2Fyb3VzZWwgaW5zdGFuY2VzIGluIHRoZSBzYW1lIGRvY3VtZW50XG4gICAgICAgIHNldFVuaXF1ZUNsYXNzKFwiYS1cIiArIHV1aWR2NCgpKTtcblxuICAgICAgICBpZiAoIWNhcm91c2VsUGFyZW50LmN1cnJlbnQpIHJldHVybjtcblxuICAgICAgICAvLyBoYW5kbGUgcmVzaXplIHdpbmRvdyBvciBjYXJvdXNlbCBjb250YWluZXJcbiAgICAgICAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICAgICAgc2V0TmV3UmVzcG9uc2l2ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGNhcm91c2VsUGFyZW50LmN1cnJlbnQpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLmRhdGE/LnN0YXR1cyA9PT0gXCJhdmFpbGFibGVcIiAmJiAhY2Fyb3VzZWxfaXRlbXM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgc2V0X2Nhcm91c2VsX2l0ZW1zKFxuICAgICAgICAgICAgICAgIHByb3BzLmRhdGEuaXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNhcm91c2VsVHlwZSA9PT0gXCJhY3RpdmVcIiA/IGUgPT4gb25DYXJkQ2xpY2tlZChlLCBwcm9wcy5hY3Rpb24/LmdldChpdGVtKSkgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y29tbW9uQ2xhc3Nlcy5pdGVtfSBpZHgtJHtpfSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNhcm91c2VsVHlwZSA9PT0gXCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFjdGl2ZUNsaWNrQ2xhc3Nlcy5hY3RpdmVfY2xpY2tfaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5vcm1hbENhcm91c2VsQ2xhc3Nlcy5ub3JtYWxfaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jb250ZW50LmdldChpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LCBbcHJvcHMuZGF0YV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICAgICAgICAgY29tbW9uQ2xhc3Nlcy5tdWx0aV9jb250YWluZXIsXG4gICAgICAgICAgICAgICAgdW5pcXVlQ2xhc3MsXG4gICAgICAgICAgICAgICAgcHJvcHMuY2Fyb3VzZWxUeXBlID09PSBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgID8gYWN0aXZlQ2xpY2tDbGFzc2VzLmFjdGl2ZV9jbGlja19jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgOiBub3JtYWxDYXJvdXNlbENsYXNzZXMubm9ybWFsX2NvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBwcm9wcy5kaXNhYmxlRG90c0NvbnRyb2xzID8gY29tbW9uQ2xhc3Nlcy5ub19kb3RzIDogXCJcIixcbiAgICAgICAgICAgICAgICAhcHJvcHMuZGlzYWJsZUJ1dHRvbnNDb250cm9scyAmJiBwcm9wcy5jYXJvdXNlbFR5cGUgPT09IFwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgPyBhY3RpdmVDbGlja0NsYXNzZXMuYWN0aXZlX2NsaWNrX3dpdGhfYnRuXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgXS5qb2luKFwiIFwiKX1cbiAgICAgICAgICAgIHJlZj17Y2Fyb3VzZWxQYXJlbnR9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjYXJvdXNlbF9pdGVtcz8ubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgIDxBbGljZUNhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtjYXJvdXNlbF9pdGVtc31cbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU9e3Byb3BzLmluZmluaXRlfVxuICAgICAgICAgICAgICAgICAgICBhdXRvUGxheT17cHJvcHMuYXV0b1BsYXl9XG4gICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5RGlyZWN0aW9uPXtwcm9wcy5hdXRvUGxheURpcmVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXlDb250cm9scz17cHJvcHMuYXV0b1BsYXlDb250cm9sc31cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUJ1dHRvbnNDb250cm9scz17cHJvcHMuZGlzYWJsZUJ1dHRvbnNDb250cm9sc31cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZURvdHNDb250cm9scz17cHJvcHMuZGlzYWJsZURvdHNDb250cm9sc31cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb249e3Byb3BzLmFuaW1hdGlvbkR1cmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25UeXBlPXtwcm9wcy5hbmltYXRpb25UeXBlfVxuICAgICAgICAgICAgICAgICAgICBrZXlib2FyZE5hdmlnYXRpb249e3Byb3BzLmtleWJvYXJkTmF2aWdhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgbW91c2VUcmFja2luZz17cHJvcHMubW91c2VUcmFja2luZ31cbiAgICAgICAgICAgICAgICAgICAgdG91Y2hUcmFja2luZz17cHJvcHMudG91Y2hUcmFja2luZ31cbiAgICAgICAgICAgICAgICAgICAgb25Jbml0aWFsaXplZD17b25Jbml0aWFsaXplZE9yUmVzaXplZH1cbiAgICAgICAgICAgICAgICAgICAgb25SZXNpemVkPXtvbkluaXRpYWxpemVkT3JSZXNpemVkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21tb25DbGFzc2VzLm11bHRpX2VtcHR5X2NvbnRhaW5lcn0+PC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFsaWNlQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWFsaWNlLWNhcm91c2VsXCI7XG5pbXBvcnQgXCIuLi91aS9BY3RpdmVTbGlkZUNhcm91c2VsLnNjc3NcIjtcbmltcG9ydCB7IGdldE5ld1Jlc3BvbnNpdmVWYWx1ZXMsIGNvbW1vbkNsYXNzZXMsIGFjdGl2ZVNsaWRlQ2xhc3Nlcywgc3RhdHVzTGlzdCB9IGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWN0aXZlU2xpZGVDYXJvdXNlbChwcm9wcykge1xuICAgIGNvbnN0IHNsaWRlckNvbnRhaW5lciA9IHVzZVJlZigpO1xuICAgIGNvbnN0IFtjYXJvdXNlbF9pdGVtcywgc2V0X2Nhcm91c2VsX2l0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbcmVzcG9uc2l2ZSwgc2V0UmVzcG9uc2l2ZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbdW5pcXVlQ2xhc3MsIHNldFVuaXF1ZUNsYXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtjdXJyZW50QWN0aXZlSWR4LCBzZXRDdXJyZW50QWN0aXZlSWR4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtudW1iZXJPZkRpc3BsYXllZEl0ZW1zLCBzZXROdW1iZXJPZkRpc3BsYXllZEl0ZW1zXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtudW1iZXJPZkFsbEl0ZW1zLCBzZXROdW1iZXJPZkFsbEl0ZW1zXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgLy8gZ2V0IHRoZSAncmVhY3QtYWxpY2UtY2Fyb3VzZWwnIGJ1aWx0LWluIGFsbCBtZXRob2QgYW5kIHByb3BlcnRpZXNcbiAgICBjb25zdCBbY2Fyb3VzZWxQcm9wZXJ0aWVzLCBzZXRDYXJvdXNlbFByb3BlcnRpZXNdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvKlxuICAgICAgICB0aGlzIG1ldGhvZCBidWlsdCB0byBoYW5kbGUgaWYgdGhlIGNhcm91c2VsIGhhcyBiZWVuIHJlbmRlcmVkIGluc2lkZSBhIGNvbnRhaW5lclxuICAgICAgICB0aGF0IGlzIG5vdCBjb3ZlcmluZyB0aGUgd2luZG93J3MgZnVsbCB3aWR0aFxuICAgICovXG4gICAgY29uc3Qgc2V0TmV3UmVzcG9uc2l2ZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJhdGUgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHNsaWRlckNvbnRhaW5lcj8uY3VycmVudD8uY2xpZW50V2lkdGg7XG4gICAgICAgIGlmIChyYXRlID4gMS40KSB7XG4gICAgICAgICAgICBsZXQgbmV3UmVzcG9uc2l2ZSA9IGdldE5ld1Jlc3BvbnNpdmVWYWx1ZXMocmF0ZSwgcHJvcHMuZGVmYXVsdFJlc3BvbnNpdmUpO1xuICAgICAgICAgICAgc2V0UmVzcG9uc2l2ZSh7IC4uLm5ld1Jlc3BvbnNpdmUgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRSZXNwb25zaXZlKHsgLi4ucHJvcHMuZGVmYXVsdFJlc3BvbnNpdmUgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgRmlyZWQgd2hlbiByZWFjaCB0aGUgZW5kIG9mIHRoZSBzbGlkZXIgb3Igd2hlbiByZXNpemUgdGhlIGNhcm91c2VsXG4gICAgICAgID0+IG1vdmUgdG8gdGhlIGZpcnN0IGl0ZW1cbiAgICAqL1xuICAgIGNvbnN0IHJlc2V0U2xpZGVyID0gKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50QWN0aXZlSWR4KDApO1xuICAgICAgICBzZXRBY3RpdmVDbGFzcyhzdGF0dXNMaXN0LnJlc2V0LCBudWxsLCAwKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICBGaXJlZCB3aGVuIGdlIGJhY2sgd2hlbiBzdGVwIGZyb20gdGhlIGZpcnN0IGl0ZW1cbiAgICAgICA9PiBtb3ZlIHRvIHRoZSBsYXN0IGl0ZW1cbiAgICovXG4gICAgY29uc3Qgc2xpZGVUb1RoZUVuZCA9ICgpID0+IHtcbiAgICAgICAgY2Fyb3VzZWxQcm9wZXJ0aWVzPy5zbGlkZVRvKG51bWJlck9mQWxsSXRlbXMgLSBudW1iZXJPZkRpc3BsYXllZEl0ZW1zICsgMSk7XG4gICAgICAgIHNldEFjdGl2ZUNsYXNzKHN0YXR1c0xpc3QuZ29MYXN0LCBudWxsLCBudW1iZXJPZkFsbEl0ZW1zKTtcbiAgICAgICAgc2V0Q3VycmVudEFjdGl2ZUlkeChudW1iZXJPZkFsbEl0ZW1zKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgRmlyZWQgd2hlbiBjbGlja2luZyBcInByZXZpb3VzXCIgYnV0dG9uXG4gICAgKi9cbiAgICBjb25zdCBwcmV2Q2xpY2tlZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFjdXJyZW50QWN0aXZlSWR4KSB7XG4gICAgICAgICAgICAvLyBjdXJyZW50QWN0aXZlSWR4ID09PSAwLCB0aGUgYWN0aXZlIGl0ZW0gaXMgdGhlIGZpcnN0IG9uZSwgbW92ZSB0byB0aGUgbGFzdFxuICAgICAgICAgICAgc2xpZGVUb1RoZUVuZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0QWN0aXZlQ2xhc3Moc3RhdHVzTGlzdC5wcmV2LCBjYXJvdXNlbFByb3BlcnRpZXM/LnNsaWRlUHJldiwgY3VycmVudEFjdGl2ZUlkeCAtIDEpO1xuICAgICAgICAgICAgc2V0Q3VycmVudEFjdGl2ZUlkeChjdXJyZW50QWN0aXZlSWR4IC0gMSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgRmlyZWQgd2hlbiBjbGlja2luZyBcIk5leHRcIiBidXR0b25cbiAgICAqL1xuICAgIGNvbnN0IG5leHRDbGlja2VkID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudEFjdGl2ZUlkeCA9PT0gbnVtYmVyT2ZBbGxJdGVtcykge1xuICAgICAgICAgICAgLy8gdGhlIGFjdGl2ZSBpdGVtIGlzIHRoZSBsYXN0IG9uZSwgbW92ZSB0byB0aGUgZmlyc3RcbiAgICAgICAgICAgIGNhcm91c2VsUHJvcGVydGllcz8uc2xpZGVUbygwKTtcbiAgICAgICAgICAgIHJlc2V0U2xpZGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRBY3RpdmVDbGFzcyhzdGF0dXNMaXN0Lm5leHQsIGNhcm91c2VsUHJvcGVydGllcz8uc2xpZGVOZXh0LCBjdXJyZW50QWN0aXZlSWR4ICsgMSk7XG4gICAgICAgICAgICBzZXRDdXJyZW50QWN0aXZlSWR4KGN1cnJlbnRBY3RpdmVJZHggKyAxKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBSZW1vdmUgcHJldmlvdXMgYWN0aXZlIGl0ZW0gYW5kIGdldCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdGhhdCB3ZSB3YW50IHRvIHNldCBpdCBhY3RpdmVcbiAgICAqL1xuICAgIGNvbnN0IHJlbW92ZUFjdGl2ZUNsYXNzID0gKHN0YXR1cywgYWxsSXRlbXMpID0+IHtcbiAgICAgICAgbGV0IGl0ZW1JZHhUb1NldEFjdGl2ZSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxJdGVtcz8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdGhhdCB3ZSB3YW50IHRvIHNldCBpdCBhY3RpdmUgaW4gdGhlIFwiYWxsIGl0ZW1zXCIgYXJyYXlcbiAgICAgICAgICAgIC8vIE5PVEU6IHdlIGNhbid0IHVzZSB0aGUgc3RhdGUgXCJjdXJyZW50QWN0aXZlSWR4XCIgYmVjYXVzZSBcImFsbEl0ZW1zXCIgaXMgY29udGFpbmluZyB0aGUgY2xvbmVkIGl0ZW0gYWxzb1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGFsbEl0ZW1zW2ldLmNsYXNzTGlzdD8uY29udGFpbnMoY29tbW9uQ2xhc3Nlcy5hY3RpdmUpICYmXG4gICAgICAgICAgICAgICAgIWFsbEl0ZW1zW2ldPy5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3Q/LmNvbnRhaW5zKFwiX19jbG9uZWRcIilcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vIGlmIG5leHQgcHJlc3NlZCB3aWxsIGJlIHRoZSBuZXh0IGluZGV4LCBpZiBwcmV2aW91cyBwcmVzc2VkIHdpbGwgYmUgdGhlIHByZXZpb3VzIGluZGV4XG4gICAgICAgICAgICAgICAgaXRlbUlkeFRvU2V0QWN0aXZlID0gc3RhdHVzID09PSBzdGF0dXNMaXN0Lm5leHQgPyBpICsgMSA6IGkgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxsSXRlbXNbaV0uY2xhc3NMaXN0Py5yZW1vdmUoY29tbW9uQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1JZHhUb1NldEFjdGl2ZTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgc2V0dGluZyB0aGUgY3VycmVuIGFjdGl2ZSBjbGFzcywgYW5kIHNsaWRlIGxlZnQgb3IgcmlnaHQgd2hlbiBuZWVkZWRcbiAgICAqL1xuICAgIGNvbnN0IHNldEFjdGl2ZUNsYXNzID0gKHN0YXR1cywgc2xpZGVMZWZ0T3JSaWdodCwgYWN0aW9uSWR4KSA9PiB7XG4gICAgICAgIGxldCBhbGxJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3VuaXF1ZUNsYXNzfWApPy5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjb21tb25DbGFzc2VzLml0ZW19YCk7XG4gICAgICAgIGxldCBpdGVtSWR4VG9TZXRBY3RpdmUgPSByZW1vdmVBY3RpdmVDbGFzcyhzdGF0dXMsIGFsbEl0ZW1zKTtcblxuICAgICAgICAvLyBTZXQgY3VycmVudCBhY3RpdmUgaXRlbVxuICAgICAgICBpZiAoc3RhdHVzID09PSBzdGF0dXNMaXN0LnJlc2V0KSB7XG4gICAgICAgICAgICAvLyBxdWVyeVNlbGVjdG9yQWxsID09PiB0aGUgb3JpZ2luYWwgaXRlbSBhbmQgdGhlIGNsb25lZCBvbmVcbiAgICAgICAgICAgIC8vIGluIHRoaXMgY2FzZSB0aGUgZmlyc3Qgb25lIGlzIHRoZSBvcmlnaW5hbCAtXCJyZWFjdC1hbGljZS1jYXJvdXNlXCIgd2F5IG9mIHdvcmstXG4gICAgICAgICAgICBsZXQgZmlyc3RTbGlkZSA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYC4ke3VuaXF1ZUNsYXNzfWApXG4gICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yQWxsKGAuJHthY3RpdmVTbGlkZUNsYXNzZXMuZmlyc3RfaXRlbX1gKTtcbiAgICAgICAgICAgIGZpcnN0U2xpZGVbMF0/LmNsYXNzTGlzdD8uYWRkKGNvbW1vbkNsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IHN0YXR1c0xpc3QuZ29MYXN0KSB7XG4gICAgICAgICAgICAvLyBxdWVyeVNlbGVjdG9yQWxsID09PiB0aGUgb3JpZ2luYWwgaXRlbSBhbmQgdGhlIGNsb25lZCBvbmVcbiAgICAgICAgICAgIC8vIGluIHRoaXMgY2FzZSB0aGUgc2Vjb25kIG9uZSBpcyB0aGUgb3JpZ2luYWwgLVwicmVhY3QtYWxpY2UtY2Fyb3VzZVwiIHdheSBvZiB3b3JrLVxuICAgICAgICAgICAgbGV0IGxhc3RTbGlkZSA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYC4ke3VuaXF1ZUNsYXNzfWApXG4gICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yQWxsKGAuJHthY3RpdmVTbGlkZUNsYXNzZXMubGFzdF9pdGVtfWApO1xuICAgICAgICAgICAgbGFzdFNsaWRlWzFdPy5jbGFzc0xpc3Q/LmFkZChjb21tb25DbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBub3QgY29udGFpbmluZyBhY3RpdmUgbWVhbnMgdGhhdCB0aGUgbmV4dC9wcmV2IGl0ZW0gaXMgbm90IGFwcGVhcmluZyBpbiB0aGUgc2NyZWVuIHJpZ2h0IG5vd1xuICAgICAgICAgICAgLy8gc2xpZGUgd2hlbiByZWFjaCB0byB0aGUgc3RhcnQvZW5kIG9mIHRoZSBhY3RpdmUgaXRlbVxuICAgICAgICAgICAgaWYgKCFhbGxJdGVtc1tpdGVtSWR4VG9TZXRBY3RpdmVdPy5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3Q/LmNvbnRhaW5zKFwiX19hY3RpdmVcIikpIHtcbiAgICAgICAgICAgICAgICBzbGlkZUxlZnRPclJpZ2h0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbGxJdGVtc1tpdGVtSWR4VG9TZXRBY3RpdmVdPy5jbGFzc0xpc3Q/LmFkZChjb21tb25DbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaXJlIHRoZSBhY3Rpb24gdGhhdCByZWxhdGVkIHRvIHRoZSBuZXcgYWN0aXZlIGl0ZW1cbiAgICAgICAgbGV0IGFjdGlvblRvRmlyZSA9IHByb3BzLmFjdGlvbj8uZ2V0KHByb3BzLmRhdGEuaXRlbXM/LlthY3Rpb25JZHhdKTtcbiAgICAgICAgb25TbGlkZUNsaWNrZWQoYWN0aW9uVG9GaXJlKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgZmlyZWQgd2hlbiBpbml0aWFsaXphdGlvbiB0aGUgY2Fyb3VzZWxcbiAgICAqL1xuICAgIGNvbnN0IG9uQ2Fyb3VzZWxJbml0ID0gZSA9PiB7XG4gICAgICAgIHNldE51bWJlck9mRGlzcGxheWVkSXRlbXMoZS5pdGVtc0luU2xpZGUpO1xuICAgICAgICBzZXRSZXNwb25zaXZlKHsgLi4ucmVzcG9uc2l2ZSB9KTtcblxuICAgICAgICBsZXQgZmlyc3RJdGVtQWN0aW9uID0gcHJvcHMuYWN0aW9uPy5nZXQocHJvcHMuZGF0YS5pdGVtcz8uWzBdKTtcbiAgICAgICAgb25TbGlkZUNsaWNrZWQoZmlyc3RJdGVtQWN0aW9uKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgZmlyZWQgd2hlbiByZXNpemluZyB0aGUgY2Fyb3VzZWwsIGNhcm91c2VsIHdpbGwgYWx3YXlzIHNsaWRlIHRvIHRoZSBmaXJzdCBpdGVtIHdoZW4gcmVzaXppbmcgLVwicmVhY3QtYWxpY2UtY2Fyb3VzZVwiIHdheSBvZiB3b3JrLVxuICAgICovXG4gICAgY29uc3Qgb25DYXJvdXNlbFJlc2l6ZSA9IGUgPT4ge1xuICAgICAgICBzZXROdW1iZXJPZkRpc3BsYXllZEl0ZW1zKGUuaXRlbXNJblNsaWRlKTtcbiAgICAgICAgc2V0TmV3UmVzcG9uc2l2ZSgpO1xuICAgICAgICByZXNldFNsaWRlcigpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBmaXJlZCB0aGUgY3VycmVudCBhY3RpdmUgaXRlbSBhY3Rpb24gaWYgZm91bmRcbiAgICAqL1xuICAgIGNvbnN0IG9uU2xpZGVDbGlja2VkID0gYWN0aW9uID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbj8uY2FuRXhlY3V0ZSkgYWN0aW9uLmV4ZWN1dGUoKTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLmRhdGE/LnN0YXR1cyA9PT0gXCJhdmFpbGFibGVcIiAmJiAhY2Fyb3VzZWxfaXRlbXM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSBwcm9wcy5kYXRhLml0ZW1zLm1hcCgoaXRlbSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjb21tb25DbGFzc2VzLml0ZW19ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZHggPT09IDAgPyBhY3RpdmVTbGlkZUNsYXNzZXMuZmlyc3RfaXRlbSArIFwiIFwiICsgY29tbW9uQ2xhc3Nlcy5hY3RpdmUgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0gJHtpZHggPT09IHByb3BzLmRhdGEuaXRlbXMubGVuZ3RoIC0gMSA/IGFjdGl2ZVNsaWRlQ2xhc3Nlcy5sYXN0X2l0ZW0gOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY29udGVudC5nZXQoaXRlbSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKTtcblxuICAgICAgICAgICAgc2V0TnVtYmVyT2ZBbGxJdGVtcyhuZXdEYXRhLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgc2V0X2Nhcm91c2VsX2l0ZW1zKG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgfSwgW3Byb3BzLmRhdGFdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIHNldCBhIHVuaXF1ZSBjbGFzcyBpbiBjYXNlIG9mIHVzaW5nIHR3byBkaWZmZXJlbnQgY2Fyb3VzZWwgaW5zdGFuY2VzIGluIHRoZSBzYW1lIGRvY3VtZW50XG4gICAgICAgIHNldFVuaXF1ZUNsYXNzKFwiYS1cIiArIHV1aWR2NCgpKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvKlxuICAgICAgICBzZXQgdGhlIHJlc3BvbnNpdmUgb2JqZWN0IGFmdGVyIGluaXRpYWxpemUgdGhlIGNvbnRhaW5lciBzbyBpdCB0YWtlIHRoZSBjb3JyZWN0IGRpbWVuc2lvbnNcbiAgICAqL1xuICAgIGNvbnN0IGNhcm91c2VsQ29udGFpbmVyID0gdXNlQ2FsbGJhY2sobm9kZSA9PiB7XG4gICAgICAgIGlmIChub2RlKSBzZXROZXdSZXNwb25zaXZlKCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGNhcm91c2VsX2l0ZW1zPy5sZW5ndGggPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthY3RpdmVTbGlkZUNsYXNzZXMuYWN0aXZlX3NsaWRlX2NvbnRhaW5lcn0gcmVmPXtjYXJvdXNlbENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YWN0aXZlU2xpZGVDbGFzc2VzLnByZXZfYnRufSBvbkNsaWNrPXtwcmV2Q2xpY2tlZH0+PC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W3VuaXF1ZUNsYXNzLCBhY3RpdmVTbGlkZUNsYXNzZXMuYWN0aXZlX3NsaWRlX3dyYXBwZXJdLmpvaW4oXCIgXCIpfSByZWY9e3NsaWRlckNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAge3Jlc3BvbnNpdmUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QWxpY2VDYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSAncmVhY3QtYWxpY2UtY2Fyb3VzZWwnIGFsbCBtZXRob2QgYW5kIHByb3BlcnRpZXMgc28gd2UgY2FuIG92ZXJyaWRlIGRlZmF1bHQgbmV4dCBhbmQgcHJldmlvdXMgYnV0dG9ucyBiZWhhdmlvclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlbCA9PiBzZXRDYXJvdXNlbFByb3BlcnRpZXMoZWwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2Nhcm91c2VsX2l0ZW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXk9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUJ1dHRvbnNDb250cm9scz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVEb3RzQ29udHJvbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZWFzaW5nIHRoZSBhbmltYXRpb24gRHVyYXRpb24gbW9yZSB0aGFuIDEwMCB3aWxsIGNyYXNoIHRoZSBzbGlkaW5nIGluIHRoZSBjYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb249ezEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkTmF2aWdhdGlvbj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZVRyYWNraW5nPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoVHJhY2tpbmc9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Jbml0aWFsaXplZD17b25DYXJvdXNlbEluaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlc2l6ZWQ9e29uQ2Fyb3VzZWxSZXNpemV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2FjdGl2ZVNsaWRlQ2xhc3Nlcy5uZXh0X2J0bn0gb25DbGljaz17bmV4dENsaWNrZWR9PjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tbW9uQ2xhc3Nlcy5tdWx0aV9lbXB0eV9jb250YWluZXJ9PjwvZGl2PlxuICAgICk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL3VpL011bHRpQ2Fyb3VzZWwuY3NzXCI7XG5pbXBvcnQgTm9ybWFsQ2Fyb3VzZWwgZnJvbSBcIi4vY29tcG9uZW50cy9Ob3JtYWxDYXJvdXNlbFwiO1xuaW1wb3J0IEFjdGl2ZVNsaWRlQ2Fyb3VzZWwgZnJvbSBcIi4vY29tcG9uZW50cy9BY3RpdmVTbGlkZUNhcm91c2VsXCI7XG5pbXBvcnQgeyBjb21tb25DbGFzc2VzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9oZWxwZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIE11bHRpQ2Fyb3VzZWwocHJvcHMpIHtcbiAgICAvKlxuICAgICBkZWZhdWx0IHVuZGVmaW5lZCAtIFRoZSBrZXkgaXMgdGhlIGJyZWFrcG9pbnRcbiAgICAgKGRlZmF1bHQgaXMgdGhlIHJlc3VsdCBvZjogKCkgPT4gd2luZG93LmlubmVyV2lkdGggb3IgaW5uZXJXaWR0aCBwcm9wZXJ0eSBpZiB0aGUgbGFzdCBwcmVzZW50ZWQpLlxuICAgICovXG4gICAgY29uc3QgW2RlZmF1bHRSZXNwb25zaXZlLCBzZXREZWZhdWx0UmVzcG9uc2l2ZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldERlZmF1bHRSZXNwb25zaXZlKHtcbiAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogcHJvcHMuaXRlbXM0MjUgPiAwID8gcHJvcHMuaXRlbXM0MjUgOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNjQwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IHByb3BzLml0ZW1zNjQwID4gMCA/IHByb3BzLml0ZW1zNjQwIDogMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDEwMjQ6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogcHJvcHMuaXRlbXMxMDI0ID4gMCA/IHByb3BzLml0ZW1zMTAyNCA6IDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxMjAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IHByb3BzLml0ZW1zMTIwMCA+IDAgPyBwcm9wcy5pdGVtczEyMDAgOiA0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMTYwMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiBwcm9wcy5pdGVtczE2MDAgPiAwID8gcHJvcHMuaXRlbXMxNjAwIDogNVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDI1NjA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogcHJvcHMuaXRlbXMyNTYwID4gMCA/IHByb3BzLml0ZW1zMjU2MCA6IDZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtkZWZhdWx0UmVzcG9uc2l2ZSA/IChcbiAgICAgICAgICAgICAgICAoKHByb3BzLmNhcm91c2VsVHlwZSA9PT0gXCJub3JtYWxcIiB8fCBwcm9wcy5jYXJvdXNlbFR5cGUgPT09IFwiYWN0aXZlXCIpICYmIChcbiAgICAgICAgICAgICAgICAgICAgPE5vcm1hbENhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJvdXNlbFR5cGU9e3Byb3BzLmNhcm91c2VsVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3Byb3BzLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3Byb3BzLmFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Byb3BzLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZT17cHJvcHMuaW5maW5pdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvUGxheT17cHJvcHMuYXV0b1BsYXl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvUGxheURpcmVjdGlvbj17cHJvcHMuYXV0b1BsYXlEaXJlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvUGxheUNvbnRyb2xzPXtwcm9wcy5hdXRvUGxheUNvbnRyb2xzfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUJ1dHRvbnNDb250cm9scz17cHJvcHMuZGlzYWJsZUJ1dHRvbnNDb250cm9sc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVEb3RzQ29udHJvbHM9e3Byb3BzLmRpc2FibGVEb3RzQ29udHJvbHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbj17cHJvcHMuYW5pbWF0aW9uRHVyYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25UeXBlPXtwcm9wcy5hbmltYXRpb25UeXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmROYXZpZ2F0aW9uPXtwcm9wcy5rZXlib2FyZE5hdmlnYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZVRyYWNraW5nPXtwcm9wcy5tb3VzZVRyYWNraW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hUcmFja2luZz17cHJvcHMudG91Y2hUcmFja2luZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRSZXNwb25zaXZlPXtkZWZhdWx0UmVzcG9uc2l2ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKSB8fFxuICAgICAgICAgICAgICAgIChwcm9wcy5jYXJvdXNlbFR5cGUgPT09IFwic2xpZGVcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxBY3RpdmVTbGlkZUNhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtwcm9wcy5kYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtwcm9wcy5hY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtwcm9wcy5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFJlc3BvbnNpdmU9e2RlZmF1bHRSZXNwb25zaXZlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpIHx8IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbW1vbkNsYXNzZXMuZXJyb3J9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgaW5pdGlhbGl6aW5nIHRoZSBDYXJvdXNlbDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tbW9uQ2xhc3Nlcy5sb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgPHA+TG9hZGluZyAuLi48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwidHlwZXMiLCJUcmFjZURpcmVjdGlvbktleSIsIkRpcmVjdGlvbiIsIkF4aXMiLCJjYWxjdWxhdGVEaXJlY3Rpb25fMSIsImNhbGN1bGF0ZURpcmVjdGlvbiIsIl90eXBlcyIsInJlcXVpcmUiLCJ0cmFjZSIsImRpcmVjdGlvbiIsIm5lZ2F0aXZlIiwiTkVHQVRJVkUiLCJwb3NpdGl2ZSIsIlBPU0lUSVZFIiwiY3VycmVudCIsImxlbmd0aCIsInByZXZpb3VzIiwiZXZlcnkiLCJpIiwiTk9ORSIsImNvbW1vbiIsImdldERpcmVjdGlvbktleSIsIm9iamVjdCIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImtleSIsImtleXMiLCJ0b1N0cmluZyIsImdldERpcmVjdGlvblZhbHVlIiwidmFsdWVzIiwiZ2V0RGlmZmVyZW5jZSIsIngiLCJ5IiwiTWF0aCIsImFicyIsInJlc29sdmVBeGlzRGlyZWN0aW9uIiwiYXhpcyIsIkxFRlQiLCJSSUdIVCIsIlkiLCJCT1RUT00iLCJUT1AiLCJjYWxjdWxhdGVEaXJlY3Rpb25EZWx0YV8xIiwiY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGEiLCJfY29tbW9uIiwidHJhY2VEaXJlY3Rpb25zIiwiZGVsdGEiLCJjdXJyZW50S2V5IiwiY3VycmVudFZhbHVlIiwicHJldiIsInByZXZLZXkiLCJwcmV2VmFsdWUiLCJkaWZmZXJlbmNlIiwiY2FsY3VsYXRlRHVyYXRpb25fMSIsImNhbGN1bGF0ZUR1cmF0aW9uIiwicHJldlRpbWUiLCJuZXh0VGltZSIsImNhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uXzEiLCJjYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbiIsImUiLCJ0b3VjaGVzIiwiY2hhbmdlZFRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsInVwZGF0ZVRyYWNlXzEiLCJ1cGRhdGVUcmFjZSIsImxhc3QiLCJwdXNoIiwiY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zXzEiLCJjYWxjdWxhdGVUcmFjZURpcmVjdGlvbnMiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ0aWNrcyIsInRpY2siLCJjdXJyZW50RGlyZWN0aW9uIiwic2xpY2UiLCJyZXNvbHZlRGlyZWN0aW9uXzEiLCJyZXNvbHZlRGlyZWN0aW9uIiwiX2NhbGN1bGF0ZURpcmVjdGlvbiIsIl9jYWxjdWxhdGVUcmFjZURpcmVjdGlvbnMiLCJfY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGEiLCJYIiwiZGlyZWN0aW9uRGVsdGEiLCJkaXJlY3Rpb25zIiwiX2RpcmVjdGlvbiIsImNhbGN1bGF0ZVZlbG9jaXR5XzEiLCJjYWxjdWxhdGVWZWxvY2l0eSIsInRpbWUiLCJtYWduaXR1ZGUiLCJzcXJ0IiwiY2FsY3VsYXRlUG9zaXRpb25fMSIsImNhbGN1bGF0ZVBvc2l0aW9uIiwiX3VwZGF0ZVRyYWNlIiwiX3Jlc29sdmVEaXJlY3Rpb24iLCJfY2FsY3VsYXRlRHVyYXRpb24iLCJfY2FsY3VsYXRlVmVsb2NpdHkiLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdGFydCIsInRyYWNlWCIsInRyYWNlWSIsInJvdGF0ZVBvc2l0aW9uIiwiZGVsdGFYIiwiZGVsdGFZIiwiYWJzWCIsImFic1kiLCJkaXJlY3Rpb25YIiwiZGlyZWN0aW9uWSIsImR1cmF0aW9uIiwiRGF0ZSIsIm5vdyIsInZlbG9jaXR5IiwicG9zaXRpb25YIiwicG9zaXRpb25ZIiwiY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlc18xIiwiY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyIsIkJvb2xlYW4iLCJjcmVhdGVPcHRpb25zXzEiLCJjcmVhdGVPcHRpb25zIiwicHJveHkiLCJnZXQiLCJpc1Bhc3NpdmVTdXBwb3J0ZWQiLCJjaGVja0lzUGFzc2l2ZVN1cHBvcnRlZF8xIiwiY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQiLCJfY3JlYXRlT3B0aW9ucyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJub29wIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVyciIsImNoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZF8xIiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJjaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQiLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsImdldEluaXRpYWxTdGF0ZV8xIiwib3duS2V5cyIsImVudW1lcmFibGVPbmx5IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsInNvdXJjZSIsImZvckVhY2giLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImdldEluaXRpYWxTdGF0ZSIsImlzU3dpcGluZyIsImdldEluaXRpYWxQcm9wc18xIiwiZ2V0SW5pdGlhbFByb3BzIiwicHJvcHMiLCJlbGVtZW50Iiwicm90YXRpb25BbmdsZSIsIm1vdXNlVHJhY2tpbmdFbmFibGVkIiwidG91Y2hUcmFja2luZ0VuYWJsZWQiLCJwcmV2ZW50RGVmYXVsdFRvdWNobW92ZUV2ZW50IiwicHJldmVudFRyYWNraW5nT25Nb3VzZWxlYXZlIiwiZ2V0T3B0aW9uc18xIiwiZ2V0T3B0aW9ucyIsInBhc3NpdmUiLCJyb3RhdGVCeUFuZ2xlXzEiLCJyb3RhdGVCeUFuZ2xlIiwicG9zaXRpb24iLCJhbmdsZSIsImFuZ2xlSW5SYWRpYW5zIiwiUEkiLCJyb3RhdGVkWCIsImNvcyIsInNpbiIsInJvdGF0ZWRZIiwiX2NhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uIiwiX2NhbGN1bGF0ZVBvc2l0aW9uIiwiX2NoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXMiLCJfY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQiLCJfY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkIiwiX2dldEluaXRpYWxTdGF0ZSIsIl9nZXRJbml0aWFsUHJvcHMiLCJfZ2V0T3B0aW9ucyIsIl9yb3RhdGVCeUFuZ2xlIiwiX2V4cG9ydE5hbWVzIiwiVXRpbHMiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIm5vZGVJbnRlcm9wIiwiV2Vha01hcCIsImNhY2hlQmFiZWxJbnRlcm9wIiwiY2FjaGVOb2RlSW50ZXJvcCIsIl9fZXNNb2R1bGUiLCJjYWNoZSIsImhhcyIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImRlc2MiLCJzZXQiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJkZXNjcmlwdG9yIiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiVmFuaWxsYVN3aXBlIiwiaGFuZGxlU3dpcGVTdGFydCIsImJpbmQiLCJoYW5kbGVTd2lwZU1vdmUiLCJoYW5kbGVTd2lwZUVuZCIsImhhbmRsZU1vdXNlRG93biIsImhhbmRsZU1vdXNlTW92ZSIsImhhbmRsZU1vdXNlVXAiLCJoYW5kbGVNb3VzZUxlYXZlIiwiaW5pdCIsInNldHVwVG91Y2hMaXN0ZW5lcnMiLCJzZXR1cE1vdXNlTGlzdGVuZXJzIiwidXBkYXRlIiwicHJldlByb3BzIiwibmV4dFByb3BzIiwiYXNzaWduIiwiZGVzdHJveSIsImNsZWFudXBNb3VzZUxpc3RlbmVycyIsImNsZWFudXBUb3VjaExpc3RlbmVycyIsIl90aGlzJHByb3BzIiwibGlzdGVuZXIiLCJfdGhpcyRwcm9wczIiLCJfdGhpcyRwcm9wczMiLCJnZXRFdmVudERhdGEiLCJtb3ZpbmdQb3NpdGlvbiIsIl9VdGlscyRyb3RhdGVCeUFuZ2xlIiwiX3RoaXMkc3RhdGUiLCJfdGhpcyRnZXRFdmVudERhdGEiLCJfdGhpcyRwcm9wczQiLCJvblN3aXBlU3RhcnQiLCJvblN3aXBpbmciLCJjYW5jZWxhYmxlIiwicHJldmVudERlZmF1bHQiLCJOdW1iZXIiLCJfdGhpcyRwcm9wczUiLCJvblN3aXBlZCIsIm9uVGFwIiwiX3Bvc2l0aW9uIiwiaXNUb3VjaEV2ZW50c1N1cHBvcnRlZCIsIkFDVElPTiIsIklOSVQiLCJSRVNJWkUiLCJVUERBVEUiLCJFdmVudFR5cGUiLCJGQURFT1VUIiwiU0xJREUiLCJBbmltYXRpb25UeXBlIiwiREVGQVVMVCIsIkFMTCIsIkF1dG9QbGF5U3RyYXRlZ3kiLCJBTFRFUk5BVEUiLCJSRVNQT05TSVZFIiwiQ29udHJvbHNTdHJhdGVneSIsIlJUTCIsIkxUUiIsIkF1dG9wbGF5RGlyZWN0aW9uIiwiQU5JTUFURUQiLCJST09UIiwiV1JBUFBFUiIsIlNUQUdFIiwiU1RBR0VfSVRFTSIsIkRPVFMiLCJET1RTX0lURU0iLCJQTEFZX0JUTiIsIlBMQVlfQlROX0lURU0iLCJQTEFZX0JUTl9XUkFQUEVSIiwiU0xJREVfSU5GTyIsIlNMSURFX0lORk9fSVRFTSIsIkJVVFRPTl9QUkVWIiwiQlVUVE9OX1BSRVZfV1JBUFBFUiIsIkJVVFRPTl9QUkVWX0lURU0iLCJCVVRUT05fTkVYVCIsIkJVVFRPTl9ORVhUX1dSQVBQRVIiLCJCVVRUT05fTkVYVF9JVEVNIiwiQ2xhc3NuYW1lcyIsIkFDVElWRSIsIklOQUNUSVZFIiwiQ0xPTkVEIiwiQ1VTVE9NIiwiUEFVU0UiLCJTRVBBUkFUT1IiLCJTU1IiLCJUQVJHRVQiLCJNb2RpZmllcnMiLCJ0eXBlc18xIiwiYWN0aXZlSW5kZXgiLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbkVhc2luZ0Z1bmN0aW9uIiwiYW5pbWF0aW9uVHlwZSIsImF1dG9IZWlnaHQiLCJhdXRvV2lkdGgiLCJhdXRvUGxheSIsImF1dG9QbGF5Q29udHJvbHMiLCJhdXRvUGxheURpcmVjdGlvbiIsImF1dG9QbGF5SW50ZXJ2YWwiLCJhdXRvUGxheVN0cmF0ZWd5IiwiY2hpbGRyZW4iLCJjb250cm9sc1N0cmF0ZWd5IiwiZGlzYWJsZUJ1dHRvbnNDb250cm9scyIsImRpc2FibGVEb3RzQ29udHJvbHMiLCJkaXNhYmxlU2xpZGVJbmZvIiwiaW5maW5pdGUiLCJpbm5lcldpZHRoIiwiaXRlbXMiLCJrZXlib2FyZE5hdmlnYXRpb24iLCJtb3VzZVRyYWNraW5nIiwibmFtZSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwicmVzcG9uc2l2ZSIsInN3aXBlRGVsdGEiLCJzd2lwZUV4dHJhUGFkZGluZyIsInNzclNpbGVudE1vZGUiLCJ0b3VjaFRyYWNraW5nIiwidG91Y2hNb3ZlRGVmYXVsdEV2ZW50cyIsIm9uSW5pdGlhbGl6ZWQiLCJvblJlc2l6ZWQiLCJvblJlc2l6ZUV2ZW50Iiwib25TbGlkZUNoYW5nZSIsIm9uU2xpZGVDaGFuZ2VkIiwiX19hc3NpZ24iLCJvIiwidCIsInIiLCJzIiwibWFwUGFydGlhbENvb3JkcyIsIm1hcCIsIndpZHRoIiwibWFwUG9zaXRpb25Db29yZHMiLCJnZXRTaGlmdEluZGV4IiwiZ2V0U3RhcnRJbmRleCIsImdldEFjdGl2ZUluZGV4Iiwic3RhcnRJbmRleCIsIml0ZW1zQ291bnQiLCJnZXRVcGRhdGVTbGlkZVBvc2l0aW9uSW5kZXgiLCJzaG91bGRSZWNhbGN1bGF0ZVNsaWRlSW5kZXgiLCJzaG91bGRDYW5jZWxTbGlkZUFuaW1hdGlvbiIsImdldFN3aXBlTGltaXRNaW4iLCJpdGVtc09mZnNldCIsInRyYW5zZm9ybWF0aW9uU2V0IiwibWluIiwiZ2V0U3dpcGVMaW1pdE1heCIsIm4iLCJpdGVtc0luU2xpZGUiLCJnZXRJdGVtQ29vcmRzIiwic2hvdWxkUmVjYWxjdWxhdGVTd2lwZVBvc2l0aW9uIiwiZ2V0SXNMZWZ0RGlyZWN0aW9uIiwiZ2V0U3dpcGVTaGlmdFZhbHVlIiwiZ2V0VHJhbnNmb3JtYXRpb25JdGVtSW5kZXgiLCJmaW5kSW5kZXgiLCJnZXRTd2lwZVRyYW5zZm9ybWF0aW9uQ3Vyc29yIiwiZ2V0U3dpcGVUb3VjaGVuZFBvc2l0aW9uIiwiaXNTdGFnZUNvbnRlbnRQYXJ0aWFsIiwic3dpcGVBbGxvd2VkUG9zaXRpb25NYXgiLCJnZXRTd2lwZVRvdWNoZW5kSW5kZXgiLCJkIiwiYSIsInRyYW5zbGF0ZTNkIiwiZ2V0RmFkZW91dEFuaW1hdGlvbkluZGV4IiwiZ2V0RmFkZW91dEFuaW1hdGlvblBvc2l0aW9uIiwic3RhZ2VXaWR0aCIsImlzVmVydGljYWxUb3VjaG1vdmVEZXRlY3RlZCIsImNvbW1vbl8xIiwibWFwcGVyc18xIiwibWF0aF8xIiwiZ2V0U2xpZGVzIiwiZ2V0SXRlbXNDb3VudCIsImdldEl0ZW1zT2Zmc2V0IiwiY3JlYXRlQ2xvbmVzIiwiZ2V0SXRlbXNJblNsaWRlIiwidW5zaGlmdCIsImNvbmNhdCIsImlzRWxlbWVudCIsIkVsZW1lbnQiLCJIVE1MRG9jdW1lbnQiLCJjcmVhdGVBdXRvd2lkdGhUcmFuc2Zvcm1hdGlvblNldCIsIkFycmF5IiwiZnJvbSIsInJlZHVjZSIsImdldEVsZW1lbnREaW1lbnNpb25zIiwiZmlyc3RDaGlsZCIsImNvb3JkcyIsImNvbnRlbnQiLCJwYXJ0aWFsIiwiY3JlYXRlRGVmYXVsdFRyYW5zZm9ybWF0aW9uU2V0IiwiZ2V0SXRlbVdpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwiZ2V0QXV0b2hlaWdodFByb3BlcnR5IiwiZ2V0RWxlbWVudEN1cnNvciIsImdldEVsZW1lbnRGaXJzdENoaWxkIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBhcnNlRmxvYXQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJjZWlsIiwib2Zmc2V0SGVpZ2h0Iiwic2hvdWxkSGFuZGxlUmVzaXplRXZlbnQiLCJhbmltYXRlIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwiZ2V0UmVuZGVyV3JhcHBlclN0eWxlcyIsImdldFRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFJlbmRlclN0YWdlU3R5bGVzIiwiZ2V0UmVuZGVyU3RhZ2VJdGVtU3R5bGVzIiwiZmFkZW91dEFuaW1hdGlvbkluZGV4IiwiZmFkZW91dEFuaW1hdGlvblBvc2l0aW9uIiwiZmFkZW91dEFuaW1hdGlvblByb2Nlc3NpbmciLCJnZXRUcmFuc2xhdGUzZFByb3BlcnR5IiwiZ2V0VG91Y2htb3ZlVHJhbnNsYXRlUG9zaXRpb24iLCJmbG9vciIsImdldFRyYW5zbGF0ZVhQcm9wZXJ0eSIsImdldFRyYW5zZm9ybU1hdHJpeCIsIm1hdGNoIiwiZWxlbWVudHNfMSIsImNhblVzZURPTSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbmNhdENsYXNzbmFtZXMiLCJqb2luIiwiZ2V0SXNTdGFnZUNvbnRlbnRQYXJ0aWFsIiwiaXRlbXNGaXQiLCJjYWxjdWxhdGVJbml0aWFsU3RhdGUiLCJsIiwibSIsImMiLCJ1IiwiZiIsImciLCJJIiwiUyIsInAiLCJ2IiwiY2xvbmVzIiwic3RhZ2VDb250ZW50V2lkdGgiLCJpbml0aWFsU3RhZ2VIZWlnaHQiLCJpc0F1dG9QbGF5aW5nIiwiaXNBdXRvUGxheUNhbmNlbGVkT25BY3Rpb24iLCJzd2lwZUxpbWl0TWluIiwic3dpcGVMaW1pdE1heCIsInN3aXBlU2hpZnRWYWx1ZSIsImNhblVzZURvbSIsImdldFJlbmRlclN0YWdlSXRlbUNsYXNzZXMiLCJpc0FjdGl2ZUl0ZW0iLCJpc0Nsb25lZEl0ZW0iLCJpc1RhcmdldEl0ZW0iLCJkZWJvdW5jZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJkZWJ1ZyIsImNvbnNvbGUiLCJnZXRBY3RpdmVTbGlkZUluZGV4IiwiZ2V0U2xpZGVJbmRleEZvck5vbk11bHRpcGxlSXRlbXMiLCJnZXRTbGlkZUluZGV4Rm9yTXVsdGlwbGVJdGVtcyIsImdldEFjdGl2ZVNsaWRlRG90c0xlbmd0aCIsImdldFNsaWRlSW5mbyIsIml0ZW0iLCJnZXRTbGlkZUl0ZW1JbmZvIiwiaXNQcmV2U2xpZGVEaXNhYmxlZCIsImlzTmV4dFNsaWRlRGlzYWJsZWQiLCJzaG91bGREaXNhYmxlQ29udHJvbHMiLCJpc1N0cmF0ZWd5Iiwic2hvdWxkRGlzYWJsZURvdHMiLCJzaG91bGREaXNhYmxlQnV0dG9ucyIsImluY2x1ZGVzIiwiaGFzRG90Rm9yRWFjaFNsaWRlIiwiZ2V0RG90c05hdmlnYXRpb25MZW5ndGgiLCJjaGVja0lzVGhlTGFzdERvdEluZGV4IiwiZ2V0SXRlbUluZGV4Rm9yRG90TmF2aWdhdGlvbiIsInNob3VsZENhbmNlbEF1dG9QbGF5T25BY3Rpb24iLCJzaG91bGRDYW5jZWxBdXRvUGxheU9uSG92ZXIiLCJfX2NyZWF0ZUJpbmRpbmciLCJjcmVhdGUiLCJfX2V4cG9ydFN0YXIiLCJfX2ltcG9ydERlZmF1bHQiLCJkZWZhdWx0IiwicmVhY3RfMSIsInV0aWxzXzEiLCJTbGlkZUluZm8iLCJyZW5kZXJTbGlkZUluZm8iLCJjbGFzc05hbWUiLCJTdGFnZUl0ZW0iLCJzdHlsZXMiLCJEb3RzTmF2aWdhdGlvbiIsIm9uQ2xpY2siLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJyZW5kZXJEb3RzSXRlbSIsIl8iLCJEIiwiaXNBY3RpdmUiLCJQbGF5UGF1c2VCdXR0b24iLCJpc1BsYXlpbmciLCJyZW5kZXJQbGF5UGF1c2VCdXR0b24iLCJQcmV2TmV4dEJ1dHRvbiIsImlzRGlzYWJsZWQiLCJyZW5kZXJQcmV2QnV0dG9uIiwicmVuZGVyTmV4dEJ1dHRvbiIsIlNsaWRlSW5mb18xIiwiU3RhZ2VJdGVtXzEiLCJEb3RzTmF2aWdhdGlvbl8xIiwiUGxheVBhdXNlQnV0dG9uXzEiLCJQcmV2TmV4dEJ1dHRvbl8xIiwiX19leHRlbmRzIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJTdHJpbmciLCJfX3NldE1vZHVsZURlZmF1bHQiLCJfX2ltcG9ydFN0YXIiLCJfX2F3YWl0ZXIiLCJQcm9taXNlIiwibmV4dCIsInRocm93IiwiZG9uZSIsInRoZW4iLCJfX2dlbmVyYXRvciIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJyZXR1cm4iLCJwb3AiLCJ2YW5pbGxhX3N3aXBlXzEiLCJkZWZhdWx0UHJvcHNfMSIsIlZpZXdzIiwiQWxpY2VDYXJvdXNlbCIsInN3aXBlTGlzdGVuZXIiLCJfaGFuZGxlS2V5Ym9hcmRFdmVudHMiLCJjb2RlIiwiX2hhbmRsZVBsYXlQYXVzZVRvZ2dsZSIsInNsaWRlUHJldiIsInNsaWRlTmV4dCIsIl9oYW5kbGVCZWZvcmVTbGlkZUVuZCIsIl9oYW5kbGVVcGRhdGVTbGlkZVBvc2l0aW9uIiwic2V0U3RhdGUiLCJfaGFuZGxlU2xpZGVDaGFuZ2VkIiwiX2hhbmRsZU1vdXNlRW50ZXIiLCJpc0hvdmVyZWQiLCJfaGFuZGxlUGF1c2UiLCJfaGFuZGxlTW91c2VMZWF2ZSIsIl9oYW5kbGVQbGF5IiwiX2NsZWFyQXV0b1BsYXlUaW1lb3V0IiwiaGFzVXNlckFjdGlvbiIsIl9zZXRSb290Q29tcG9uZW50UmVmIiwicm9vdEVsZW1lbnQiLCJfc2V0U3RhZ2VDb21wb25lbnRSZWYiLCJzdGFnZUNvbXBvbmVudCIsIl9yZW5kZXJTdGFnZUl0ZW0iLCJfcmVuZGVyU2xpZGVJbmZvIiwiaXNBbmltYXRpb25EaXNhYmxlZCIsImlzVG91Y2hNb3ZlUHJvY2Vzc1N0YXJ0ZWQiLCJjYW5jZWxUb3VjaEFuaW1hdGlvbnMiLCJyb290Q29tcG9uZW50RGltZW5zaW9ucyIsInN0YXJ0VG91Y2htb3ZlUG9zaXRpb24iLCJzbGlkZVRvIiwiX2hhbmRsZVRvdWNobW92ZSIsIl9oYW5kbGVUb3VjaGVuZCIsIl9oYW5kbGVEb3RDbGljayIsIl9oYW5kbGVSZXNpemUiLCJfaGFuZGxlUmVzaXplRGVib3VuY2VkIiwiX2NhbmNlbFJlc2l6ZURlYm91bmNlZCIsImNvbXBvbmVudERpZE1vdW50IiwiX3NldEluaXRpYWxTdGF0ZSIsIl9hZGRFdmVudExpc3RlbmVycyIsIl9zZXR1cFN3aXBlSGFuZGxlcnMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJoIiwiX3VwZGF0ZUNvbXBvbmVudCIsIl91cGRhdGVTd2lwZVByb3BzIiwiX3VwZGF0ZUV2ZW50TGlzdGVuZXJzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJfY2FuY2VsVGltZW91dEFuaW1hdGlvbnMiLCJfcmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJzbGlkZSIsInR5cGUiLCJpc0ZhZGVvdXRBbmltYXRpb25BbGxvd2VkIiwiX2hhbmRsZVNsaWRlVG8iLCJldmVudFR5cGUiLCJpc1RydXN0ZWQiLCJfaGFuZGxlUmVzaXplZCIsIl9zZXRUb3VjaG1vdmVQb3NpdGlvbiIsIl9oYW5kbGVTbGlkZUNoYW5nZSIsInRvdWNobW92ZVBvc2l0aW9uIiwiX2NsZWFyVG91Y2htb3ZlUG9zaXRpb24iLCJfaGFuZGxlQmVmb3JlVG91Y2hFbmQiLCJ0b3VjaEVuZFRpbWVvdXRJZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNsaWRlRW5kVGltZW91dElkIiwiZXZlbnRPYmplY3QiLCJfc2V0QXV0b1BsYXlJbnRlcnZhbCIsIl9jbGVhclNsaWRlRW5kVGltZW91dCIsImNsZWFyVG91Y2hlbmRUaW1lb3V0IiwiYXV0b1BsYXlUaW1lb3V0SWQiLCJfcmVuZGVyRG90c05hdmlnYXRpb24iLCJfcmVuZGVyUHJldkJ1dHRvbiIsIl9yZW5kZXJOZXh0QnV0dG9uIiwiX3JlbmRlclBsYXlQYXVzZUJ1dHRvbiIsInJlbmRlciIsInJlZiIsImRlZmF1bHRQcm9wcyIsIlB1cmVDb21wb25lbnQiLCJnZXRSYW5kb21WYWx1ZXMiLCJybmRzOCIsIlVpbnQ4QXJyYXkiLCJybmciLCJjcnlwdG8iLCJFcnJvciIsInZhbGlkYXRlIiwidXVpZCIsIlJFR0VYIiwidGVzdCIsImJ5dGVUb0hleCIsInVuc2FmZVN0cmluZ2lmeSIsImFyciIsIm9mZnNldCIsInRvTG93ZXJDYXNlIiwicGFyc2UiLCJwYXJzZUludCIsInN0cmluZ1RvQnl0ZXMiLCJzdHIiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImJ5dGVzIiwiY2hhckNvZGVBdCIsIkROUyIsIlVSTCIsInYzNSIsInZlcnNpb24iLCJoYXNoZnVuYyIsImdlbmVyYXRlVVVJRCIsIm5hbWVzcGFjZSIsImJ1ZiIsIl9uYW1lc3BhY2UiLCJtZDUiLCJtc2ciLCJtZDVUb0hleEVuY29kZWRBcnJheSIsIndvcmRzVG9NZDUiLCJieXRlc1RvV29yZHMiLCJpbnB1dCIsIm91dHB1dCIsImxlbmd0aDMyIiwiaGV4VGFiIiwiaGV4IiwiY2hhckF0IiwiZ2V0T3V0cHV0TGVuZ3RoIiwiaW5wdXRMZW5ndGg4IiwibGVuIiwiYiIsIm9sZGEiLCJvbGRiIiwib2xkYyIsIm9sZGQiLCJtZDVmZiIsIm1kNWdnIiwibWQ1aGgiLCJtZDVpaSIsInNhZmVBZGQiLCJsZW5ndGg4IiwiVWludDMyQXJyYXkiLCJsc3ciLCJtc3ciLCJiaXRSb3RhdGVMZWZ0IiwibnVtIiwiY250IiwibWQ1Y21uIiwicSIsInJhbmRvbVVVSUQiLCJ2NCIsIm5hdGl2ZSIsInJuZHMiLCJyYW5kb20iLCJ6IiwiUk9UTCIsInNoYTEiLCJLIiwiSCIsImlzQXJyYXkiLCJOIiwiTSIsImoiLCJwb3ciLCJXIiwiVCIsImdldE5ld1Jlc3BvbnNpdmVWYWx1ZXMiLCJyYXRlIiwiZGVmYXVsdFJlc3BvbnNpdmUiLCJuZXdSZXNwb25zaXZlIiwibmV3VmFsdWUiLCJyb3VuZCIsIm1heCIsInN0YXR1c0xpc3QiLCJyZXNldCIsImdvTGFzdCIsImNsYXNzZXNBY3Rpb24iLCJhZGQiLCJyZW1vdmUiLCJjb21tb25DbGFzc2VzIiwibXVsdGlfY29udGFpbmVyIiwibXVsdGlfZW1wdHlfY29udGFpbmVyIiwiYWN0aXZlIiwibm9fZG90cyIsImVycm9yIiwibG9hZGluZyIsIm5vcm1hbENhcm91c2VsQ2xhc3NlcyIsIm5vcm1hbF9jb250YWluZXIiLCJub3JtYWxfaXRlbSIsImFjdGl2ZUNsaWNrQ2xhc3NlcyIsImFjdGl2ZV9jbGlja19jb250YWluZXIiLCJhY3RpdmVfY2xpY2tfaXRlbSIsImFjdGl2ZV9jbGlja193aXRoX2J0biIsImFjdGl2ZVNsaWRlQ2xhc3NlcyIsImFjdGl2ZV9zbGlkZV9jb250YWluZXIiLCJhY3RpdmVfc2xpZGVfd3JhcHBlciIsImZpcnN0X2l0ZW0iLCJsYXN0X2l0ZW0iLCJwcmV2X2J0biIsIm5leHRfYnRuIiwiTm9ybWFsQ2Fyb3VzZWwiLCJjYXJvdXNlbFBhcmVudCIsInVzZVJlZiIsImNhcm91c2VsX2l0ZW1zIiwic2V0X2Nhcm91c2VsX2l0ZW1zIiwidXNlU3RhdGUiLCJzZXRSZXNwb25zaXZlIiwidW5pcXVlQ2xhc3MiLCJzZXRVbmlxdWVDbGFzcyIsInNldE5ld1Jlc3BvbnNpdmUiLCJjbGllbnRXaWR0aCIsImFkZE9yUmVtb3ZlQ2xhc3NOYW1lIiwibm9kZSIsImFjdGlvbiIsImNsYXNzTGlzdCIsImNoYW5nZUFjdGl2ZUNsYXNzIiwiZ2V0SWR4Q2xhc3NOYW1lIiwiY2xpY2tlZEl0ZW0iLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJjbGFzc05hbWVzIiwic3BsaXQiLCJvbkNhcmRDbGlja2VkIiwiY2FuRXhlY3V0ZSIsImV4ZWN1dGUiLCJhY3RpdmVOb2RlIiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpZHhDbGFzcyIsIml0ZW1Ub1NldEFjdGl2ZSIsIm9uSW5pdGlhbGl6ZWRPclJlc2l6ZWQiLCJjYXJvdXNlbFR5cGUiLCJmaXJzdENhcm91c2VsSXRlbSIsImNsaWNrIiwidXNlRWZmZWN0IiwidXVpZHY0IiwicmVzaXplT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiZGF0YSIsInN0YXR1cyIsIkFjdGl2ZVNsaWRlQ2Fyb3VzZWwiLCJzbGlkZXJDb250YWluZXIiLCJjdXJyZW50QWN0aXZlSWR4Iiwic2V0Q3VycmVudEFjdGl2ZUlkeCIsIm51bWJlck9mRGlzcGxheWVkSXRlbXMiLCJzZXROdW1iZXJPZkRpc3BsYXllZEl0ZW1zIiwibnVtYmVyT2ZBbGxJdGVtcyIsInNldE51bWJlck9mQWxsSXRlbXMiLCJjYXJvdXNlbFByb3BlcnRpZXMiLCJzZXRDYXJvdXNlbFByb3BlcnRpZXMiLCJyZXNldFNsaWRlciIsInNldEFjdGl2ZUNsYXNzIiwic2xpZGVUb1RoZUVuZCIsInByZXZDbGlja2VkIiwibmV4dENsaWNrZWQiLCJyZW1vdmVBY3RpdmVDbGFzcyIsImFsbEl0ZW1zIiwiaXRlbUlkeFRvU2V0QWN0aXZlIiwicGFyZW50RWxlbWVudCIsInNsaWRlTGVmdE9yUmlnaHQiLCJhY3Rpb25JZHgiLCJmaXJzdFNsaWRlIiwibGFzdFNsaWRlIiwiYWN0aW9uVG9GaXJlIiwib25TbGlkZUNsaWNrZWQiLCJvbkNhcm91c2VsSW5pdCIsImZpcnN0SXRlbUFjdGlvbiIsIm9uQ2Fyb3VzZWxSZXNpemUiLCJuZXdEYXRhIiwiaWR4IiwiY2Fyb3VzZWxDb250YWluZXIiLCJ1c2VDYWxsYmFjayIsImVsIiwiTXVsdGlDYXJvdXNlbCIsInNldERlZmF1bHRSZXNwb25zaXZlIiwiaXRlbXM0MjUiLCJpdGVtczY0MCIsIml0ZW1zMTAyNCIsIml0ZW1zMTIwMCIsIml0ZW1zMTYwMCIsIml0ZW1zMjU2MCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUMzQ0MsRUFBQUEsS0FBSyxFQUFFLElBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQTtBQUNGRCxPQUFBQSxDQUFBQSxpQkFBeUIsR0FBb0JFLE9BQUEsQ0FBQSxTQUFBLGVBQWUsR0FBRyxLQUFLLEVBQUM7QUFDckUsSUFBSUMsaUJBQWlCLENBQUE7QUFDSUQsT0FBQSxDQUFBLGlCQUFBLEdBQUdDLGlCQUFpQixDQUFBO0FBRTdDLENBQUMsVUFBVUEsaUJBQWlCLEVBQUU7QUFDNUJBLEVBQUFBLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxHQUFHLFVBQVUsQ0FBQTtBQUMxQ0EsRUFBQUEsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEdBQUcsVUFBVSxDQUFBO0FBQzFDQSxFQUFBQSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUE7QUFDcEMsQ0FBQyxFQUFFQSxpQkFBaUIsS0FBOEJELE9BQUEsQ0FBQSxpQkFBQSxHQUFHQyxpQkFBaUIsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBRTdFLElBQUlDLFNBQVMsQ0FBQTtBQUNJRixPQUFBLENBQUEsU0FBQSxHQUFHRSxVQUFTO0FBRTdCLENBQUMsVUFBVUEsU0FBUyxFQUFFO0FBQ3BCQSxFQUFBQSxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFBO0FBQ3hCQSxFQUFBQSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFBO0FBQzFCQSxFQUFBQSxTQUFTLENBQUMsT0FBTyxDQUFDLEdB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QUFHLENBQUMsRUFBRTtBQUMvQztBQUNBO0FBQ0EsRUFBQSxPQUFPLENBQUNILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FB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QUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR2hVLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDckJnVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzVCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDckI0QixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzFQLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDckIwUCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR2pVLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDckJpVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR3puQixDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ3ZCLEdBQUE7QUFFQSxFQUFBLE9BQU8sQ0FBQ3luQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFF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
