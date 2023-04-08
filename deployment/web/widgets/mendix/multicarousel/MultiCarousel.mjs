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
 default undefined - The key is the breakpoint
 (default is the result of: () => window.innerWidth or innerWidth property if the last presented).
*/
const defaultResponsive = {
  0: {
    items: 1
  },
  620: {
    items: 2
  },
  1024: {
    items: 3
  },
  1200: {
    items: 4
  },
  1700: {
    items: 5
  },
  2250: {
    items: 6
  }
};

/*
 rebuilt responsive object depending on the container width
 using the ratio of the width of the box to the width of the window
*/
const getNewResponsiveValues = rate => {
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
  error: "multi-carousel__error"
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
    ...defaultResponsive
  });
  const [uniqueClass, setUniqueClass] = useState("");

  /*
      this method built to handle if the carousel has been rendered inside a container
      that is not covering the window's full width
  */
  const setNewResponsive = () => {
    let rate = window.innerWidth / carouselParent.current.clientWidth;
    if (rate > 1.35) {
      let newResponsive = getNewResponsiveValues(rate);
      setResponsive({
        ...newResponsive
      });
    } else {
      setResponsive({
        ...defaultResponsive
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
      let newResponsive = getNewResponsiveValues(rate);
      setResponsive({
        ...newResponsive
      });
    } else {
      setResponsive({
        ...defaultResponsive
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
  return (props.carouselType === "normal" || props.carouselType === "active") && createElement(NormalCarousel, {
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
    touchTracking: props.touchTracking
  }) || props.carouselType === "slide" && createElement(ActiveSlideCarousel, {
    data: props.data,
    action: props.action,
    content: props.content
  }) || createElement("div", {
    className: commonClasses.error
  }, createElement("p", null, "An error occurred while initializing the Carousel"));
}

export { MultiCarousel };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlDYXJvdXNlbC5tanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi90eXBlcy9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9jYWxjdWxhdGVEaXJlY3Rpb24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY29tbW9uLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZUR1cmF0aW9uLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL3VwZGF0ZVRyYWNlLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9yZXNvbHZlRGlyZWN0aW9uLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZVZlbG9jaXR5LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZVBvc2l0aW9uLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY3JlYXRlT3B0aW9ucy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9jaGVja0lzUGFzc2l2ZVN1cHBvcnRlZC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9jaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvZ2V0SW5pdGlhbFN0YXRlLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2dldEluaXRpYWxQcm9wcy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9nZXRPcHRpb25zLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL3JvdGF0ZUJ5QW5nbGUuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3R5cGVzL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi9kZWZhdWx0UHJvcHMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL21hcHBlcnMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL21hdGguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL2VsZW1lbnRzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi91dGlscy9jb21tb24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL2NsYXNzbmFtZXMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL3RpbWVycy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvZGVidWcuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL3JlbmRlci5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvY29udHJvbHMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi92aWV3cy9TbGlkZUluZm8uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3ZpZXdzL1N0YWdlSXRlbS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdmlld3MvRG90c05hdmlnYXRpb24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3ZpZXdzL1BsYXlQYXVzZUJ1dHRvbi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdmlld3MvUHJldk5leHRCdXR0b24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3ZpZXdzL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi9yZWFjdC1hbGljZS1jYXJvdXNlbC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcGFyc2UuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzNS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbWQ1LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92My5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc2hhMS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjUuanMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9oZWxwZXIuanMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Ob3JtYWxDYXJvdXNlbC5qc3giLCIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BY3RpdmVTbGlkZUNhcm91c2VsLmpzeCIsIi4uLy4uLy4uLy4uLy4uL3NyYy9NdWx0aUNhcm91c2VsLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVHJhY2VEaXJlY3Rpb25LZXkgPSBleHBvcnRzLkRpcmVjdGlvbiA9IGV4cG9ydHMuQXhpcyA9IHZvaWQgMDtcbnZhciBUcmFjZURpcmVjdGlvbktleTtcbmV4cG9ydHMuVHJhY2VEaXJlY3Rpb25LZXkgPSBUcmFjZURpcmVjdGlvbktleTtcblxuKGZ1bmN0aW9uIChUcmFjZURpcmVjdGlvbktleSkge1xuICBUcmFjZURpcmVjdGlvbktleVtcIk5FR0FUSVZFXCJdID0gXCJORUdBVElWRVwiO1xuICBUcmFjZURpcmVjdGlvbktleVtcIlBPU0lUSVZFXCJdID0gXCJQT1NJVElWRVwiO1xuICBUcmFjZURpcmVjdGlvbktleVtcIk5PTkVcIl0gPSBcIk5PTkVcIjtcbn0pKFRyYWNlRGlyZWN0aW9uS2V5IHx8IChleHBvcnRzLlRyYWNlRGlyZWN0aW9uS2V5ID0gVHJhY2VEaXJlY3Rpb25LZXkgPSB7fSkpO1xuXG52YXIgRGlyZWN0aW9uO1xuZXhwb3J0cy5EaXJlY3Rpb24gPSBEaXJlY3Rpb247XG5cbihmdW5jdGlvbiAoRGlyZWN0aW9uKSB7XG4gIERpcmVjdGlvbltcIlRPUFwiXSA9IFwiVE9QXCI7XG4gIERpcmVjdGlvbltcIkxFRlRcIl0gPSBcIkxFRlRcIjtcbiAgRGlyZWN0aW9uW1wiUklHSFRcIl0gPSBcIlJJR0hUXCI7XG4gIERpcmVjdGlvbltcIkJPVFRPTVwiXSA9IFwiQk9UVE9NXCI7XG4gIERpcmVjdGlvbltcIk5PTkVcIl0gPSBcIk5PTkVcIjtcbn0pKERpcmVjdGlvbiB8fCAoZXhwb3J0cy5EaXJlY3Rpb24gPSBEaXJlY3Rpb24gPSB7fSkpO1xuXG52YXIgQXhpcztcbmV4cG9ydHMuQXhpcyA9IEF4aXM7XG5cbihmdW5jdGlvbiAoQXhpcykge1xuICBBeGlzW1wiWFwiXSA9IFwieFwiO1xuICBBeGlzW1wiWVwiXSA9IFwieVwiO1xufSkoQXhpcyB8fCAoZXhwb3J0cy5BeGlzID0gQXhpcyA9IHt9KSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZURpcmVjdGlvbiA9IGNhbGN1bGF0ZURpcmVjdGlvbjtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlRGlyZWN0aW9uKHRyYWNlKSB7XG4gIHZhciBkaXJlY3Rpb247XG4gIHZhciBuZWdhdGl2ZSA9IF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5ORUdBVElWRTtcbiAgdmFyIHBvc2l0aXZlID0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5LlBPU0lUSVZFO1xuICB2YXIgY3VycmVudCA9IHRyYWNlW3RyYWNlLmxlbmd0aCAtIDFdO1xuICB2YXIgcHJldmlvdXMgPSB0cmFjZVt0cmFjZS5sZW5ndGggLSAyXSB8fCAwO1xuXG4gIGlmICh0cmFjZS5ldmVyeShmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpID09PSAwO1xuICB9KSkge1xuICAgIHJldHVybiBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTk9ORTtcbiAgfVxuXG4gIGRpcmVjdGlvbiA9IGN1cnJlbnQgPiBwcmV2aW91cyA/IHBvc2l0aXZlIDogbmVnYXRpdmU7XG5cbiAgaWYgKGN1cnJlbnQgPT09IDApIHtcbiAgICBkaXJlY3Rpb24gPSBwcmV2aW91cyA8IDAgPyBwb3NpdGl2ZSA6IG5lZ2F0aXZlO1xuICB9XG5cbiAgcmV0dXJuIGRpcmVjdGlvbjtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVzb2x2ZUF4aXNEaXJlY3Rpb24gPSBleHBvcnRzLmdldERpcmVjdGlvblZhbHVlID0gZXhwb3J0cy5nZXREaXJlY3Rpb25LZXkgPSBleHBvcnRzLmdldERpZmZlcmVuY2UgPSB2b2lkIDA7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5cbnZhciBnZXREaXJlY3Rpb25LZXkgPSBmdW5jdGlvbiBnZXREaXJlY3Rpb25LZXkoKSB7XG4gIHZhciBvYmplY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIga2V5ID0gT2JqZWN0LmtleXMob2JqZWN0KS50b1N0cmluZygpO1xuXG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuUE9TSVRJVkU6XG4gICAgICByZXR1cm4gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5LlBPU0lUSVZFO1xuXG4gICAgY2FzZSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTkVHQVRJVkU6XG4gICAgICByZXR1cm4gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5FR0FUSVZFO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTk9ORTtcbiAgfVxufTtcblxuZXhwb3J0cy5nZXREaXJlY3Rpb25LZXkgPSBnZXREaXJlY3Rpb25LZXk7XG5cbnZhciBnZXREaXJlY3Rpb25WYWx1ZSA9IGZ1bmN0aW9uIGdldERpcmVjdGlvblZhbHVlKCkge1xuICB2YXIgdmFsdWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgcmV0dXJuIHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0gfHwgMDtcbn07XG5cbmV4cG9ydHMuZ2V0RGlyZWN0aW9uVmFsdWUgPSBnZXREaXJlY3Rpb25WYWx1ZTtcblxudmFyIGdldERpZmZlcmVuY2UgPSBmdW5jdGlvbiBnZXREaWZmZXJlbmNlKCkge1xuICB2YXIgeCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgdmFyIHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIHJldHVybiBNYXRoLmFicyh4IC0geSk7XG59O1xuXG5leHBvcnRzLmdldERpZmZlcmVuY2UgPSBnZXREaWZmZXJlbmNlO1xuXG52YXIgcmVzb2x2ZUF4aXNEaXJlY3Rpb24gPSBmdW5jdGlvbiByZXNvbHZlQXhpc0RpcmVjdGlvbihheGlzLCBrZXkpIHtcbiAgdmFyIG5lZ2F0aXZlID0gX3R5cGVzLkRpcmVjdGlvbi5MRUZUO1xuICB2YXIgcG9zaXRpdmUgPSBfdHlwZXMuRGlyZWN0aW9uLlJJR0hUO1xuICB2YXIgZGlyZWN0aW9uID0gX3R5cGVzLkRpcmVjdGlvbi5OT05FO1xuXG4gIGlmIChheGlzID09PSBfdHlwZXMuQXhpcy5ZKSB7XG4gICAgbmVnYXRpdmUgPSBfdHlwZXMuRGlyZWN0aW9uLkJPVFRPTTtcbiAgICBwb3NpdGl2ZSA9IF90eXBlcy5EaXJlY3Rpb24uVE9QO1xuICB9XG5cbiAgaWYgKGtleSA9PT0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5FR0FUSVZFKSB7XG4gICAgZGlyZWN0aW9uID0gbmVnYXRpdmU7XG4gIH1cblxuICBpZiAoa2V5ID09PSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuUE9TSVRJVkUpIHtcbiAgICBkaXJlY3Rpb24gPSBwb3NpdGl2ZTtcbiAgfVxuXG4gIHJldHVybiBkaXJlY3Rpb247XG59O1xuXG5leHBvcnRzLnJlc29sdmVBeGlzRGlyZWN0aW9uID0gcmVzb2x2ZUF4aXNEaXJlY3Rpb247IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZURpcmVjdGlvbkRlbHRhID0gY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGE7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSh0cmFjZURpcmVjdGlvbnMpIHtcbiAgdmFyIGRlbHRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICB2YXIgbGVuZ3RoID0gdHJhY2VEaXJlY3Rpb25zLmxlbmd0aDtcbiAgdmFyIGkgPSBsZW5ndGggLSAxO1xuICB2YXIgZGlyZWN0aW9uID0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5PTkU7XG5cbiAgZm9yICg7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0cmFjZURpcmVjdGlvbnNbaV07XG4gICAgdmFyIGN1cnJlbnRLZXkgPSAoMCwgX2NvbW1vbi5nZXREaXJlY3Rpb25LZXkpKGN1cnJlbnQpO1xuICAgIHZhciBjdXJyZW50VmFsdWUgPSAoMCwgX2NvbW1vbi5nZXREaXJlY3Rpb25WYWx1ZSkoY3VycmVudFtjdXJyZW50S2V5XSk7XG4gICAgdmFyIHByZXYgPSB0cmFjZURpcmVjdGlvbnNbaSAtIDFdIHx8IHt9O1xuICAgIHZhciBwcmV2S2V5ID0gKDAsIF9jb21tb24uZ2V0RGlyZWN0aW9uS2V5KShwcmV2KTtcbiAgICB2YXIgcHJldlZhbHVlID0gKDAsIF9jb21tb24uZ2V0RGlyZWN0aW9uVmFsdWUpKHByZXZbcHJldktleV0pO1xuICAgIHZhciBkaWZmZXJlbmNlID0gKDAsIF9jb21tb24uZ2V0RGlmZmVyZW5jZSkoY3VycmVudFZhbHVlLCBwcmV2VmFsdWUpO1xuXG4gICAgaWYgKGRpZmZlcmVuY2UgPj0gZGVsdGEpIHtcbiAgICAgIGRpcmVjdGlvbiA9IGN1cnJlbnRLZXk7XG4gICAgICBicmVhaztcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyZWN0aW9uID0gcHJldktleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlyZWN0aW9uO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jYWxjdWxhdGVEdXJhdGlvbiA9IGNhbGN1bGF0ZUR1cmF0aW9uO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVEdXJhdGlvbigpIHtcbiAgdmFyIHByZXZUaW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICB2YXIgbmV4dFRpbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIHJldHVybiBwcmV2VGltZSA/IG5leHRUaW1lIC0gcHJldlRpbWUgOiAwO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbiA9IGNhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbihlKSB7XG4gIGlmICgnY2hhbmdlZFRvdWNoZXMnIGluIGUpIHtcbiAgICB2YXIgdG91Y2hlcyA9IGUuY2hhbmdlZFRvdWNoZXMgJiYgZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogdG91Y2hlcyAmJiB0b3VjaGVzLmNsaWVudFgsXG4gICAgICB5OiB0b3VjaGVzICYmIHRvdWNoZXMuY2xpZW50WVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IGUuY2xpZW50WCxcbiAgICB5OiBlLmNsaWVudFlcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXBkYXRlVHJhY2UgPSB1cGRhdGVUcmFjZTtcblxuZnVuY3Rpb24gdXBkYXRlVHJhY2UodHJhY2UsIHZhbHVlKSB7XG4gIHZhciBsYXN0ID0gdHJhY2VbdHJhY2UubGVuZ3RoIC0gMV07XG5cbiAgaWYgKGxhc3QgIT09IHZhbHVlKSB7XG4gICAgdHJhY2UucHVzaCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdHJhY2U7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucyA9IGNhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucztcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zKCkge1xuICB2YXIgdHJhY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICB2YXIgdGlja3MgPSBbXTtcbiAgdmFyIHBvc2l0aXZlID0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5LlBPU0lUSVZFO1xuICB2YXIgbmVnYXRpdmUgPSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTkVHQVRJVkU7XG4gIHZhciBpID0gMDtcbiAgdmFyIHRpY2sgPSBbXTtcbiAgdmFyIGRpcmVjdGlvbiA9IF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5OT05FO1xuXG4gIGZvciAoOyBpIDwgdHJhY2UubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY3VycmVudCA9IHRyYWNlW2ldO1xuICAgIHZhciBwcmV2ID0gdHJhY2VbaSAtIDFdO1xuXG4gICAgaWYgKHRpY2subGVuZ3RoKSB7XG4gICAgICB2YXIgY3VycmVudERpcmVjdGlvbiA9IGN1cnJlbnQgPiBwcmV2ID8gcG9zaXRpdmUgOiBuZWdhdGl2ZTtcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5PTkUpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gY3VycmVudERpcmVjdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnREaXJlY3Rpb24gPT09IGRpcmVjdGlvbikge1xuICAgICAgICB0aWNrLnB1c2goY3VycmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aWNrcy5wdXNoKF9kZWZpbmVQcm9wZXJ0eSh7fSwgZGlyZWN0aW9uLCB0aWNrLnNsaWNlKCkpKTtcbiAgICAgICAgdGljayA9IFtdO1xuICAgICAgICB0aWNrLnB1c2goY3VycmVudCk7XG4gICAgICAgIGRpcmVjdGlvbiA9IGN1cnJlbnREaXJlY3Rpb247XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjdXJyZW50ICE9PSAwKSB7XG4gICAgICAgIGRpcmVjdGlvbiA9IGN1cnJlbnQgPiAwID8gcG9zaXRpdmUgOiBuZWdhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgdGljay5wdXNoKGN1cnJlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aWNrLmxlbmd0aCkge1xuICAgIHRpY2tzLnB1c2goX2RlZmluZVByb3BlcnR5KHt9LCBkaXJlY3Rpb24sIHRpY2spKTtcbiAgfVxuXG4gIHJldHVybiB0aWNrcztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVzb2x2ZURpcmVjdGlvbiA9IHJlc29sdmVEaXJlY3Rpb247XG5cbnZhciBfY2FsY3VsYXRlRGlyZWN0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlRGlyZWN0aW9uXCIpO1xuXG52YXIgX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucyA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9uc1wiKTtcblxudmFyIF9jYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhXCIpO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxuZnVuY3Rpb24gcmVzb2x2ZURpcmVjdGlvbih0cmFjZSkge1xuICB2YXIgYXhpcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogX3R5cGVzLkF4aXMuWDtcbiAgdmFyIGRpcmVjdGlvbkRlbHRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAwO1xuXG4gIGlmIChkaXJlY3Rpb25EZWx0YSkge1xuICAgIHZhciBkaXJlY3Rpb25zID0gKDAsIF9jYWxjdWxhdGVUcmFjZURpcmVjdGlvbnMuY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zKSh0cmFjZSk7XG5cbiAgICB2YXIgX2RpcmVjdGlvbiA9ICgwLCBfY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGEuY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGEpKGRpcmVjdGlvbnMsIGRpcmVjdGlvbkRlbHRhKTtcblxuICAgIHJldHVybiAoMCwgX2NvbW1vbi5yZXNvbHZlQXhpc0RpcmVjdGlvbikoYXhpcywgX2RpcmVjdGlvbik7XG4gIH1cblxuICB2YXIgZGlyZWN0aW9uID0gKDAsIF9jYWxjdWxhdGVEaXJlY3Rpb24uY2FsY3VsYXRlRGlyZWN0aW9uKSh0cmFjZSk7XG4gIHJldHVybiAoMCwgX2NvbW1vbi5yZXNvbHZlQXhpc0RpcmVjdGlvbikoYXhpcywgZGlyZWN0aW9uKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FsY3VsYXRlVmVsb2NpdHkgPSBjYWxjdWxhdGVWZWxvY2l0eTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlVmVsb2NpdHkoeCwgeSwgdGltZSkge1xuICB2YXIgbWFnbml0dWRlID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICByZXR1cm4gbWFnbml0dWRlIC8gKHRpbWUgfHwgMSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZVBvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb247XG5cbnZhciBfdXBkYXRlVHJhY2UgPSByZXF1aXJlKFwiLi91cGRhdGVUcmFjZVwiKTtcblxudmFyIF9yZXNvbHZlRGlyZWN0aW9uID0gcmVxdWlyZShcIi4vcmVzb2x2ZURpcmVjdGlvblwiKTtcblxudmFyIF9jYWxjdWxhdGVEdXJhdGlvbiA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZUR1cmF0aW9uXCIpO1xuXG52YXIgX2NhbGN1bGF0ZVZlbG9jaXR5ID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlVmVsb2NpdHlcIik7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVBvc2l0aW9uKHN0YXRlLCBvcHRpb25zKSB7XG4gIHZhciBzdGFydCA9IHN0YXRlLnN0YXJ0LFxuICAgICAgeCA9IHN0YXRlLngsXG4gICAgICB5ID0gc3RhdGUueSxcbiAgICAgIHRyYWNlWCA9IHN0YXRlLnRyYWNlWCxcbiAgICAgIHRyYWNlWSA9IHN0YXRlLnRyYWNlWTtcbiAgdmFyIHJvdGF0ZVBvc2l0aW9uID0gb3B0aW9ucy5yb3RhdGVQb3NpdGlvbixcbiAgICAgIGRpcmVjdGlvbkRlbHRhID0gb3B0aW9ucy5kaXJlY3Rpb25EZWx0YTtcbiAgdmFyIGRlbHRhWCA9IHJvdGF0ZVBvc2l0aW9uLnggLSB4O1xuICB2YXIgZGVsdGFZID0geSAtIHJvdGF0ZVBvc2l0aW9uLnk7XG4gIHZhciBhYnNYID0gTWF0aC5hYnMoZGVsdGFYKTtcbiAgdmFyIGFic1kgPSBNYXRoLmFicyhkZWx0YVkpO1xuICAoMCwgX3VwZGF0ZVRyYWNlLnVwZGF0ZVRyYWNlKSh0cmFjZVgsIGRlbHRhWCk7XG4gICgwLCBfdXBkYXRlVHJhY2UudXBkYXRlVHJhY2UpKHRyYWNlWSwgZGVsdGFZKTtcbiAgdmFyIGRpcmVjdGlvblggPSAoMCwgX3Jlc29sdmVEaXJlY3Rpb24ucmVzb2x2ZURpcmVjdGlvbikodHJhY2VYLCBfdHlwZXMuQXhpcy5YLCBkaXJlY3Rpb25EZWx0YSk7XG4gIHZhciBkaXJlY3Rpb25ZID0gKDAsIF9yZXNvbHZlRGlyZWN0aW9uLnJlc29sdmVEaXJlY3Rpb24pKHRyYWNlWSwgX3R5cGVzLkF4aXMuWSwgZGlyZWN0aW9uRGVsdGEpO1xuICB2YXIgZHVyYXRpb24gPSAoMCwgX2NhbGN1bGF0ZUR1cmF0aW9uLmNhbGN1bGF0ZUR1cmF0aW9uKShzdGFydCwgRGF0ZS5ub3coKSk7XG4gIHZhciB2ZWxvY2l0eSA9ICgwLCBfY2FsY3VsYXRlVmVsb2NpdHkuY2FsY3VsYXRlVmVsb2NpdHkpKGFic1gsIGFic1ksIGR1cmF0aW9uKTtcbiAgcmV0dXJuIHtcbiAgICBhYnNYOiBhYnNYLFxuICAgIGFic1k6IGFic1ksXG4gICAgZGVsdGFYOiBkZWx0YVgsXG4gICAgZGVsdGFZOiBkZWx0YVksXG4gICAgZGlyZWN0aW9uWDogZGlyZWN0aW9uWCxcbiAgICBkaXJlY3Rpb25ZOiBkaXJlY3Rpb25ZLFxuICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICBwb3NpdGlvblg6IHJvdGF0ZVBvc2l0aW9uLngsXG4gICAgcG9zaXRpb25ZOiByb3RhdGVQb3NpdGlvbi55LFxuICAgIHZlbG9jaXR5OiB2ZWxvY2l0eVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzID0gdm9pZCAwO1xuXG52YXIgY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyA9IGZ1bmN0aW9uIGNoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXMoZSkge1xuICByZXR1cm4gQm9vbGVhbihlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA+IDEpO1xufTtcblxuZXhwb3J0cy5jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzID0gY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY3JlYXRlT3B0aW9ucyA9IGNyZWF0ZU9wdGlvbnM7XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMoKSB7XG4gIHZhciBwcm94eSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm94eSwgJ3Bhc3NpdmUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB0aGlzLmlzUGFzc2l2ZVN1cHBvcnRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IHRydWVcbiAgfSk7XG4gIHJldHVybiBwcm94eTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQgPSBjaGVja0lzUGFzc2l2ZVN1cHBvcnRlZDtcbmV4cG9ydHMubm9vcCA9IHZvaWQgMDtcblxudmFyIF9jcmVhdGVPcHRpb25zID0gcmVxdWlyZShcIi4vY3JlYXRlT3B0aW9uc1wiKTtcblxuZnVuY3Rpb24gY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQoaXNQYXNzaXZlU3VwcG9ydGVkKSB7XG4gIGlmICh0eXBlb2YgaXNQYXNzaXZlU3VwcG9ydGVkID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gaXNQYXNzaXZlU3VwcG9ydGVkO1xuICB9XG5cbiAgdmFyIHByb3h5ID0ge1xuICAgIGlzUGFzc2l2ZVN1cHBvcnRlZDogaXNQYXNzaXZlU3VwcG9ydGVkXG4gIH07XG5cbiAgdHJ5IHtcbiAgICB2YXIgb3B0aW9ucyA9ICgwLCBfY3JlYXRlT3B0aW9ucy5jcmVhdGVPcHRpb25zKShwcm94eSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkJywgbm9vcCwgb3B0aW9ucyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkJywgbm9vcCwgb3B0aW9ucyk7XG4gIH0gY2F0Y2ggKGVycikge31cblxuICByZXR1cm4gcHJveHkuaXNQYXNzaXZlU3VwcG9ydGVkO1xufVxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuZXhwb3J0cy5ub29wID0gbm9vcDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5cbnZhciBjaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQgPSBmdW5jdGlvbiBjaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQoKSB7XG4gIHJldHVybiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHdpbmRvdykpID09PSAnb2JqZWN0JyAmJiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IEJvb2xlYW4od2luZG93Lm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cykpO1xufTtcblxuZXhwb3J0cy5jaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQgPSBjaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldEluaXRpYWxTdGF0ZSA9IHZvaWQgMDtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGdldEluaXRpYWxTdGF0ZSA9IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHN0YXJ0OiAwLFxuICAgIGlzU3dpcGluZzogZmFsc2UsXG4gICAgdHJhY2VYOiBbXSxcbiAgICB0cmFjZVk6IFtdXG4gIH0sIG9wdGlvbnMpO1xufTtcblxuZXhwb3J0cy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldEluaXRpYWxQcm9wcyA9IHZvaWQgMDtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGdldEluaXRpYWxQcm9wcyA9IGZ1bmN0aW9uIGdldEluaXRpYWxQcm9wcygpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgdGFyZ2V0OiBudWxsLFxuICAgIGRlbHRhOiAxMCxcbiAgICBkaXJlY3Rpb25EZWx0YTogMCxcbiAgICByb3RhdGlvbkFuZ2xlOiAwLFxuICAgIG1vdXNlVHJhY2tpbmdFbmFibGVkOiBmYWxzZSxcbiAgICB0b3VjaFRyYWNraW5nRW5hYmxlZDogdHJ1ZSxcbiAgICBwcmV2ZW50RGVmYXVsdFRvdWNobW92ZUV2ZW50OiBmYWxzZSxcbiAgICBwcmV2ZW50VHJhY2tpbmdPbk1vdXNlbGVhdmU6IGZhbHNlXG4gIH0sIHByb3BzKTtcbn07XG5cbmV4cG9ydHMuZ2V0SW5pdGlhbFByb3BzID0gZ2V0SW5pdGlhbFByb3BzOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRPcHRpb25zID0gZ2V0T3B0aW9ucztcblxuZnVuY3Rpb24gZ2V0T3B0aW9ucygpIHtcbiAgdmFyIGlzUGFzc2l2ZVN1cHBvcnRlZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgaWYgKGlzUGFzc2l2ZVN1cHBvcnRlZCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge307XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJvdGF0ZUJ5QW5nbGUgPSByb3RhdGVCeUFuZ2xlO1xuXG5mdW5jdGlvbiByb3RhdGVCeUFuZ2xlKHBvc2l0aW9uKSB7XG4gIHZhciBhbmdsZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcblxuICBpZiAoYW5nbGUgPT09IDApIHtcbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICB2YXIgeCA9IHBvc2l0aW9uLngsXG4gICAgICB5ID0gcG9zaXRpb24ueTtcbiAgdmFyIGFuZ2xlSW5SYWRpYW5zID0gTWF0aC5QSSAvIDE4MCAqIGFuZ2xlO1xuICB2YXIgcm90YXRlZFggPSB4ICogTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpICsgeSAqIE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgdmFyIHJvdGF0ZWRZID0geSAqIE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKSAtIHggKiBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gIHJldHVybiB7XG4gICAgeDogcm90YXRlZFgsXG4gICAgeTogcm90YXRlZFlcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jYWxjdWxhdGVEaXJlY3Rpb24gPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVEaXJlY3Rpb25cIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVEaXJlY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9jYWxjdWxhdGVEaXJlY3Rpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2FsY3VsYXRlRGlyZWN0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGFcIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZUR1cmF0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlRHVyYXRpb25cIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVEdXJhdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZUR1cmF0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZUR1cmF0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlTW92aW5nUG9zaXRpb25cIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZVBvc2l0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlUG9zaXRpb25cIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVQb3NpdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZVBvc2l0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZVBvc2l0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucyA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9uc1wiKTtcblxuT2JqZWN0LmtleXMoX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9uc1trZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jYWxjdWxhdGVUcmFjZURpcmVjdGlvbnNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2FsY3VsYXRlVmVsb2NpdHkgPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVWZWxvY2l0eVwiKTtcblxuT2JqZWN0LmtleXMoX2NhbGN1bGF0ZVZlbG9jaXR5KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2FsY3VsYXRlVmVsb2NpdHlba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2FsY3VsYXRlVmVsb2NpdHlba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyA9IHJlcXVpcmUoXCIuL2NoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXNcIik7XG5cbk9iamVjdC5rZXlzKF9jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlc1trZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkID0gcmVxdWlyZShcIi4vY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWRcIik7XG5cbk9iamVjdC5rZXlzKF9jaGVja0lzUGFzc2l2ZVN1cHBvcnRlZCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCA9IHJlcXVpcmUoXCIuL2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZFwiKTtcblxuT2JqZWN0LmtleXMoX2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZFtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG5PYmplY3Qua2V5cyhfY29tbW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY29tbW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NvbW1vbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9jcmVhdGVPcHRpb25zID0gcmVxdWlyZShcIi4vY3JlYXRlT3B0aW9uc1wiKTtcblxuT2JqZWN0LmtleXMoX2NyZWF0ZU9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9jcmVhdGVPcHRpb25zW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NyZWF0ZU9wdGlvbnNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfZ2V0SW5pdGlhbFN0YXRlID0gcmVxdWlyZShcIi4vZ2V0SW5pdGlhbFN0YXRlXCIpO1xuXG5PYmplY3Qua2V5cyhfZ2V0SW5pdGlhbFN0YXRlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfZ2V0SW5pdGlhbFN0YXRlW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2dldEluaXRpYWxTdGF0ZVtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9nZXRJbml0aWFsUHJvcHMgPSByZXF1aXJlKFwiLi9nZXRJbml0aWFsUHJvcHNcIik7XG5cbk9iamVjdC5rZXlzKF9nZXRJbml0aWFsUHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9nZXRJbml0aWFsUHJvcHNba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0SW5pdGlhbFByb3BzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2dldE9wdGlvbnMgPSByZXF1aXJlKFwiLi9nZXRPcHRpb25zXCIpO1xuXG5PYmplY3Qua2V5cyhfZ2V0T3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2dldE9wdGlvbnNba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0T3B0aW9uc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9yZXNvbHZlRGlyZWN0aW9uID0gcmVxdWlyZShcIi4vcmVzb2x2ZURpcmVjdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX3Jlc29sdmVEaXJlY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9yZXNvbHZlRGlyZWN0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3Jlc29sdmVEaXJlY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfcm90YXRlQnlBbmdsZSA9IHJlcXVpcmUoXCIuL3JvdGF0ZUJ5QW5nbGVcIik7XG5cbk9iamVjdC5rZXlzKF9yb3RhdGVCeUFuZ2xlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfcm90YXRlQnlBbmdsZVtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9yb3RhdGVCeUFuZ2xlW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX3VwZGF0ZVRyYWNlID0gcmVxdWlyZShcIi4vdXBkYXRlVHJhY2VcIik7XG5cbk9iamVjdC5rZXlzKF91cGRhdGVUcmFjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX3VwZGF0ZVRyYWNlW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3VwZGF0ZVRyYWNlW2tleV07XG4gICAgfVxuICB9KTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgX2V4cG9ydE5hbWVzID0ge307XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vdXRpbHNcIikpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG5cbk9iamVjdC5rZXlzKF90eXBlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX3R5cGVzW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3R5cGVzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIFZhbmlsbGFTd2lwZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFZhbmlsbGFTd2lwZShwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWYW5pbGxhU3dpcGUpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic3RhdGVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInByb3BzXCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLnN0YXRlID0gVXRpbHMuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgdGhpcy5wcm9wcyA9IFV0aWxzLmdldEluaXRpYWxQcm9wcyhwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVTd2lwZVN0YXJ0ID0gdGhpcy5oYW5kbGVTd2lwZVN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTd2lwZU1vdmUgPSB0aGlzLmhhbmRsZVN3aXBlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3dpcGVFbmQgPSB0aGlzLmhhbmRsZVN3aXBlRW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVNb3VzZURvd24gPSB0aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTW91c2VNb3ZlID0gdGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vdXNlVXAgPSB0aGlzLmhhbmRsZU1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSB0aGlzLmhhbmRsZU1vdXNlTGVhdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhWYW5pbGxhU3dpcGUsIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHRoaXMuc2V0dXBUb3VjaExpc3RlbmVycygpO1xuICAgICAgdGhpcy5zZXR1cE1vdXNlTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUocHJvcHMpIHtcbiAgICAgIHZhciBwcmV2UHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIG5leHRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByZXZQcm9wcywgcHJvcHMpO1xuXG4gICAgICBpZiAocHJldlByb3BzLmVsZW1lbnQgIT09IG5leHRQcm9wcy5lbGVtZW50IHx8IHByZXZQcm9wcy50YXJnZXQgIT09IG5leHRQcm9wcy50YXJnZXQpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG5cbiAgICAgIGlmIChwcmV2UHJvcHMubW91c2VUcmFja2luZ0VuYWJsZWQgIT09IG5leHRQcm9wcy5tb3VzZVRyYWNraW5nRW5hYmxlZCB8fCBwcmV2UHJvcHMucHJldmVudFRyYWNraW5nT25Nb3VzZWxlYXZlICE9PSBuZXh0UHJvcHMucHJldmVudFRyYWNraW5nT25Nb3VzZWxlYXZlKSB7XG4gICAgICAgIHRoaXMuY2xlYW51cE1vdXNlTGlzdGVuZXJzKCk7XG4gICAgICAgIG5leHRQcm9wcy5tb3VzZVRyYWNraW5nRW5hYmxlZCA/IHRoaXMuc2V0dXBNb3VzZUxpc3RlbmVycygpIDogdGhpcy5jbGVhbnVwTW91c2VMaXN0ZW5lcnMoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZXZQcm9wcy50b3VjaFRyYWNraW5nRW5hYmxlZCAhPT0gbmV4dFByb3BzLnRvdWNoVHJhY2tpbmdFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW51cFRvdWNoTGlzdGVuZXJzKCk7XG4gICAgICAgIG5leHRQcm9wcy50b3VjaFRyYWNraW5nRW5hYmxlZCA/IHRoaXMuc2V0dXBUb3VjaExpc3RlbmVycygpIDogdGhpcy5jbGVhbnVwVG91Y2hMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdGhpcy5jbGVhbnVwTW91c2VMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuY2xlYW51cFRvdWNoTGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLnN0YXRlID0gVXRpbHMuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgICB0aGlzLnByb3BzID0gVXRpbHMuZ2V0SW5pdGlhbFByb3BzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldHVwVG91Y2hMaXN0ZW5lcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0dXBUb3VjaExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZWxlbWVudCA9IF90aGlzJHByb3BzLmVsZW1lbnQsXG4gICAgICAgICAgdGFyZ2V0ID0gX3RoaXMkcHJvcHMudGFyZ2V0LFxuICAgICAgICAgIHRvdWNoVHJhY2tpbmdFbmFibGVkID0gX3RoaXMkcHJvcHMudG91Y2hUcmFja2luZ0VuYWJsZWQ7XG5cbiAgICAgIGlmIChlbGVtZW50ICYmIHRvdWNoVHJhY2tpbmdFbmFibGVkKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRhcmdldCB8fCBlbGVtZW50O1xuICAgICAgICB2YXIgaXNQYXNzaXZlU3VwcG9ydGVkID0gVXRpbHMuY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQoKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBVdGlscy5nZXRPcHRpb25zKGlzUGFzc2l2ZVN1cHBvcnRlZCk7XG4gICAgICAgIGxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZVN3aXBlU3RhcnQsIG9wdGlvbnMpO1xuICAgICAgICBsaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmhhbmRsZVN3aXBlTW92ZSwgb3B0aW9ucyk7XG4gICAgICAgIGxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5oYW5kbGVTd2lwZUVuZCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsZWFudXBUb3VjaExpc3RlbmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhbnVwVG91Y2hMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBlbGVtZW50ID0gX3RoaXMkcHJvcHMyLmVsZW1lbnQsXG4gICAgICAgICAgdGFyZ2V0ID0gX3RoaXMkcHJvcHMyLnRhcmdldDtcbiAgICAgIHZhciBsaXN0ZW5lciA9IHRhcmdldCB8fCBlbGVtZW50O1xuXG4gICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlU3dpcGVTdGFydCk7XG4gICAgICAgIGxpc3RlbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuaGFuZGxlU3dpcGVNb3ZlKTtcbiAgICAgICAgbGlzdGVuZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmhhbmRsZVN3aXBlRW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0dXBNb3VzZUxpc3RlbmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cE1vdXNlTGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZWxlbWVudCA9IF90aGlzJHByb3BzMy5lbGVtZW50LFxuICAgICAgICAgIG1vdXNlVHJhY2tpbmdFbmFibGVkID0gX3RoaXMkcHJvcHMzLm1vdXNlVHJhY2tpbmdFbmFibGVkLFxuICAgICAgICAgIHByZXZlbnRUcmFja2luZ09uTW91c2VsZWF2ZSA9IF90aGlzJHByb3BzMy5wcmV2ZW50VHJhY2tpbmdPbk1vdXNlbGVhdmU7XG5cbiAgICAgIGlmIChtb3VzZVRyYWNraW5nRW5hYmxlZCAmJiBlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24pO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwKTtcblxuICAgICAgICBpZiAocHJldmVudFRyYWNraW5nT25Nb3VzZWxlYXZlKSB7XG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5oYW5kbGVNb3VzZUxlYXZlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbGVhbnVwTW91c2VMaXN0ZW5lcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYW51cE1vdXNlTGlzdGVuZXJzKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24pO1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwKTtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5oYW5kbGVNb3VzZUxlYXZlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RXZlbnREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEV2ZW50RGF0YShlKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgICAgICBkaXJlY3Rpb25EZWx0YTogMFxuICAgICAgfTtcbiAgICAgIHZhciByb3RhdGlvbkFuZ2xlID0gdGhpcy5wcm9wcy5yb3RhdGlvbkFuZ2xlO1xuICAgICAgdmFyIGRpcmVjdGlvbkRlbHRhID0gb3B0aW9ucy5kaXJlY3Rpb25EZWx0YTtcbiAgICAgIHZhciBtb3ZpbmdQb3NpdGlvbiA9IFV0aWxzLmNhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uKGUpO1xuICAgICAgdmFyIHJvdGF0ZVBvc2l0aW9uID0gVXRpbHMucm90YXRlQnlBbmdsZShtb3ZpbmdQb3NpdGlvbiwgcm90YXRpb25BbmdsZSk7XG4gICAgICByZXR1cm4gVXRpbHMuY2FsY3VsYXRlUG9zaXRpb24odGhpcy5zdGF0ZSwge1xuICAgICAgICByb3RhdGVQb3NpdGlvbjogcm90YXRlUG9zaXRpb24sXG4gICAgICAgIGRpcmVjdGlvbkRlbHRhOiBkaXJlY3Rpb25EZWx0YVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVN3aXBlU3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlU3dpcGVTdGFydChlKSB7XG4gICAgICBpZiAoVXRpbHMuY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyhlKSkgcmV0dXJuO1xuICAgICAgdmFyIHJvdGF0aW9uQW5nbGUgPSB0aGlzLnByb3BzLnJvdGF0aW9uQW5nbGU7XG4gICAgICB2YXIgbW92aW5nUG9zaXRpb24gPSBVdGlscy5jYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbihlKTtcblxuICAgICAgdmFyIF9VdGlscyRyb3RhdGVCeUFuZ2xlID0gVXRpbHMucm90YXRlQnlBbmdsZShtb3ZpbmdQb3NpdGlvbiwgcm90YXRpb25BbmdsZSksXG4gICAgICAgICAgeCA9IF9VdGlscyRyb3RhdGVCeUFuZ2xlLngsXG4gICAgICAgICAgeSA9IF9VdGlscyRyb3RhdGVCeUFuZ2xlLnk7XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBVdGlscy5nZXRJbml0aWFsU3RhdGUoe1xuICAgICAgICBpc1N3aXBpbmc6IGZhbHNlLFxuICAgICAgICBzdGFydDogRGF0ZS5ub3coKSxcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVN3aXBlTW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVTd2lwZU1vdmUoZSkge1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICB4ID0gX3RoaXMkc3RhdGUueCxcbiAgICAgICAgICB5ID0gX3RoaXMkc3RhdGUueSxcbiAgICAgICAgICBpc1N3aXBpbmcgPSBfdGhpcyRzdGF0ZS5pc1N3aXBpbmc7XG4gICAgICBpZiAoIXggfHwgIXkgfHwgVXRpbHMuY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyhlKSkgcmV0dXJuO1xuICAgICAgdmFyIGRpcmVjdGlvbkRlbHRhID0gdGhpcy5wcm9wcy5kaXJlY3Rpb25EZWx0YSB8fCAwO1xuXG4gICAgICB2YXIgX3RoaXMkZ2V0RXZlbnREYXRhID0gdGhpcy5nZXRFdmVudERhdGEoZSwge1xuICAgICAgICBkaXJlY3Rpb25EZWx0YTogZGlyZWN0aW9uRGVsdGFcbiAgICAgIH0pLFxuICAgICAgICAgIGFic1ggPSBfdGhpcyRnZXRFdmVudERhdGEuYWJzWCxcbiAgICAgICAgICBhYnNZID0gX3RoaXMkZ2V0RXZlbnREYXRhLmFic1ksXG4gICAgICAgICAgZGVsdGFYID0gX3RoaXMkZ2V0RXZlbnREYXRhLmRlbHRhWCxcbiAgICAgICAgICBkZWx0YVkgPSBfdGhpcyRnZXRFdmVudERhdGEuZGVsdGFZLFxuICAgICAgICAgIGRpcmVjdGlvblggPSBfdGhpcyRnZXRFdmVudERhdGEuZGlyZWN0aW9uWCxcbiAgICAgICAgICBkaXJlY3Rpb25ZID0gX3RoaXMkZ2V0RXZlbnREYXRhLmRpcmVjdGlvblksXG4gICAgICAgICAgZHVyYXRpb24gPSBfdGhpcyRnZXRFdmVudERhdGEuZHVyYXRpb24sXG4gICAgICAgICAgdmVsb2NpdHkgPSBfdGhpcyRnZXRFdmVudERhdGEudmVsb2NpdHk7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGRlbHRhID0gX3RoaXMkcHJvcHM0LmRlbHRhLFxuICAgICAgICAgIHByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQgPSBfdGhpcyRwcm9wczQucHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudCxcbiAgICAgICAgICBvblN3aXBlU3RhcnQgPSBfdGhpcyRwcm9wczQub25Td2lwZVN0YXJ0LFxuICAgICAgICAgIG9uU3dpcGluZyA9IF90aGlzJHByb3BzNC5vblN3aXBpbmc7XG4gICAgICBpZiAoZS5jYW5jZWxhYmxlICYmIHByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChhYnNYIDwgTnVtYmVyKGRlbHRhKSAmJiBhYnNZIDwgTnVtYmVyKGRlbHRhKSAmJiAhaXNTd2lwaW5nKSByZXR1cm47XG5cbiAgICAgIGlmIChvblN3aXBlU3RhcnQgJiYgIWlzU3dpcGluZykge1xuICAgICAgICBvblN3aXBlU3RhcnQoZSwge1xuICAgICAgICAgIGRlbHRhWDogZGVsdGFYLFxuICAgICAgICAgIGRlbHRhWTogZGVsdGFZLFxuICAgICAgICAgIGFic1g6IGFic1gsXG4gICAgICAgICAgYWJzWTogYWJzWSxcbiAgICAgICAgICBkaXJlY3Rpb25YOiBkaXJlY3Rpb25YLFxuICAgICAgICAgIGRpcmVjdGlvblk6IGRpcmVjdGlvblksXG4gICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgIHZlbG9jaXR5OiB2ZWxvY2l0eVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGF0ZS5pc1N3aXBpbmcgPSB0cnVlO1xuXG4gICAgICBpZiAob25Td2lwaW5nKSB7XG4gICAgICAgIG9uU3dpcGluZyhlLCB7XG4gICAgICAgICAgZGVsdGFYOiBkZWx0YVgsXG4gICAgICAgICAgZGVsdGFZOiBkZWx0YVksXG4gICAgICAgICAgYWJzWDogYWJzWCxcbiAgICAgICAgICBhYnNZOiBhYnNZLFxuICAgICAgICAgIGRpcmVjdGlvblg6IGRpcmVjdGlvblgsXG4gICAgICAgICAgZGlyZWN0aW9uWTogZGlyZWN0aW9uWSxcbiAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgdmVsb2NpdHk6IHZlbG9jaXR5XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVTd2lwZUVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVTd2lwZUVuZChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvblN3aXBlZCA9IF90aGlzJHByb3BzNS5vblN3aXBlZCxcbiAgICAgICAgICBvblRhcCA9IF90aGlzJHByb3BzNS5vblRhcDtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUuaXNTd2lwaW5nKSB7XG4gICAgICAgIHZhciBkaXJlY3Rpb25EZWx0YSA9IHRoaXMucHJvcHMuZGlyZWN0aW9uRGVsdGEgfHwgMDtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5nZXRFdmVudERhdGEoZSwge1xuICAgICAgICAgIGRpcmVjdGlvbkRlbHRhOiBkaXJlY3Rpb25EZWx0YVxuICAgICAgICB9KTtcbiAgICAgICAgb25Td2lwZWQgJiYgb25Td2lwZWQoZSwgcG9zaXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF9wb3NpdGlvbiA9IHRoaXMuZ2V0RXZlbnREYXRhKGUpO1xuXG4gICAgICAgIG9uVGFwICYmIG9uVGFwKGUsIF9wb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBVdGlscy5nZXRJbml0aWFsU3RhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTW91c2VEb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihlKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5wcm9wcy50YXJnZXQ7XG5cbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gZS50YXJnZXQpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVN3aXBlU3RhcnQoZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3dpcGVTdGFydChlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTW91c2VNb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZShlKSB7XG4gICAgICB0aGlzLmhhbmRsZVN3aXBlTW92ZShlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTW91c2VVcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKGUpIHtcbiAgICAgIHZhciBpc1N3aXBpbmcgPSB0aGlzLnN0YXRlLmlzU3dpcGluZztcbiAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnByb3BzLnRhcmdldDtcblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICBpZiAodGFyZ2V0ID09PSBlLnRhcmdldCB8fCBpc1N3aXBpbmcpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVN3aXBlRW5kKGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhbmRsZVN3aXBlRW5kKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVNb3VzZUxlYXZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTGVhdmUoZSkge1xuICAgICAgdmFyIGlzU3dpcGluZyA9IHRoaXMuc3RhdGUuaXNTd2lwaW5nO1xuXG4gICAgICBpZiAoaXNTd2lwaW5nKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3dpcGVFbmQoZSk7XG4gICAgICB9XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiaXNUb3VjaEV2ZW50c1N1cHBvcnRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1RvdWNoRXZlbnRzU3VwcG9ydGVkKCkge1xuICAgICAgcmV0dXJuIFV0aWxzLmNoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBWYW5pbGxhU3dpcGU7XG59KCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVmFuaWxsYVN3aXBlOyIsIlwidXNlIHN0cmljdFwiO3ZhciBFdmVudFR5cGUsQW5pbWF0aW9uVHlwZSxBdXRvUGxheVN0cmF0ZWd5LENvbnRyb2xzU3RyYXRlZ3ksQXV0b3BsYXlEaXJlY3Rpb24sQ2xhc3NuYW1lcyxNb2RpZmllcnM7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5Nb2RpZmllcnM9ZXhwb3J0cy5DbGFzc25hbWVzPWV4cG9ydHMuQXV0b3BsYXlEaXJlY3Rpb249ZXhwb3J0cy5Db250cm9sc1N0cmF0ZWd5PWV4cG9ydHMuQXV0b1BsYXlTdHJhdGVneT1leHBvcnRzLkFuaW1hdGlvblR5cGU9ZXhwb3J0cy5FdmVudFR5cGU9dm9pZCAwLGZ1bmN0aW9uKGUpe2UuQUNUSU9OPVwiYWN0aW9uXCIsZS5JTklUPVwiaW5pdFwiLGUuUkVTSVpFPVwicmVzaXplXCIsZS5VUERBVEU9XCJ1cGRhdGVcIn0oRXZlbnRUeXBlPWV4cG9ydHMuRXZlbnRUeXBlfHwoZXhwb3J0cy5FdmVudFR5cGU9e30pKSxmdW5jdGlvbihlKXtlLkZBREVPVVQ9XCJmYWRlb3V0XCIsZS5TTElERT1cInNsaWRlXCJ9KEFuaW1hdGlvblR5cGU9ZXhwb3J0cy5BbmltYXRpb25UeXBlfHwoZXhwb3J0cy5BbmltYXRpb25UeXBlPXt9KSksZnVuY3Rpb24oZSl7ZS5ERUZBVUxUPVwiZGVmYXVsdFwiLGUuQUxMPVwiYWxsXCIsZS5BQ1RJT049XCJhY3Rpb25cIixlLk5PTkU9XCJub25lXCJ9KEF1dG9QbGF5U3RyYXRlZ3k9ZXhwb3J0cy5BdXRvUGxheVN0cmF0ZWd5fHwoZXhwb3J0cy5BdXRvUGxheVN0cmF0ZWd5PXt9KSksZnVuY3Rpb24oZSl7ZS5ERUZBVUxUPVwiZGVmYXVsdFwiLGUuQUxURVJOQVRFPVwiYWx0ZXJuYXRlXCIsZS5SRVNQT05TSVZFPVwicmVzcG9uc2l2ZVwifShDb250cm9sc1N0cmF0ZWd5PWV4cG9ydHMuQ29udHJvbHNTdHJhdGVneXx8KGV4cG9ydHMuQ29udHJvbHNTdHJhdGVneT17fSkpLGZ1bmN0aW9uKGUpe2UuUlRMPVwicnRsXCIsZS5MVFI9XCJsdHJcIn0oQXV0b3BsYXlEaXJlY3Rpb249ZXhwb3J0cy5BdXRvcGxheURpcmVjdGlvbnx8KGV4cG9ydHMuQXV0b3BsYXlEaXJlY3Rpb249e30pKSxmdW5jdGlvbihlKXtlLkFOSU1BVEVEPVwiYW5pbWF0ZWQgYW5pbWF0ZWQtb3V0IGZhZGVPdXRcIixlLlJPT1Q9XCJhbGljZS1jYXJvdXNlbFwiLGUuV1JBUFBFUj1cImFsaWNlLWNhcm91c2VsX193cmFwcGVyXCIsZS5TVEFHRT1cImFsaWNlLWNhcm91c2VsX19zdGFnZVwiLGUuU1RBR0VfSVRFTT1cImFsaWNlLWNhcm91c2VsX19zdGFnZS1pdGVtXCIsZS5ET1RTPVwiYWxpY2UtY2Fyb3VzZWxfX2RvdHNcIixlLkRPVFNfSVRFTT1cImFsaWNlLWNhcm91c2VsX19kb3RzLWl0ZW1cIixlLlBMQVlfQlROPVwiYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuXCIsZS5QTEFZX0JUTl9JVEVNPVwiYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuLWl0ZW1cIixlLlBMQVlfQlROX1dSQVBQRVI9XCJhbGljZS1jYXJvdXNlbF9fcGxheS1idG4td3JhcHBlclwiLGUuU0xJREVfSU5GTz1cImFsaWNlLWNhcm91c2VsX19zbGlkZS1pbmZvXCIsZS5TTElERV9JTkZPX0lURU09XCJhbGljZS1jYXJvdXNlbF9fc2xpZGUtaW5mby1pdGVtXCIsZS5CVVRUT05fUFJFVj1cImFsaWNlLWNhcm91c2VsX19wcmV2LWJ0blwiLGUuQlVUVE9OX1BSRVZfV1JBUFBFUj1cImFsaWNlLWNhcm91c2VsX19wcmV2LWJ0bi13cmFwcGVyXCIsZS5CVVRUT05fUFJFVl9JVEVNPVwiYWxpY2UtY2Fyb3VzZWxfX3ByZXYtYnRuLWl0ZW1cIixlLkJVVFRPTl9ORVhUPVwiYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuXCIsZS5CVVRUT05fTkVYVF9XUkFQUEVSPVwiYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuLXdyYXBwZXJcIixlLkJVVFRPTl9ORVhUX0lURU09XCJhbGljZS1jYXJvdXNlbF9fbmV4dC1idG4taXRlbVwifShDbGFzc25hbWVzPWV4cG9ydHMuQ2xhc3NuYW1lc3x8KGV4cG9ydHMuQ2xhc3NuYW1lcz17fSkpLGZ1bmN0aW9uKGUpe2UuQUNUSVZFPVwiX19hY3RpdmVcIixlLklOQUNUSVZFPVwiX19pbmFjdGl2ZVwiLGUuQ0xPTkVEPVwiX19jbG9uZWRcIixlLkNVU1RPTT1cIl9fY3VzdG9tXCIsZS5QQVVTRT1cIl9fcGF1c2VcIixlLlNFUEFSQVRPUj1cIl9fc2VwYXJhdG9yXCIsZS5TU1I9XCJfX3NzclwiLGUuVEFSR0VUPVwiX190YXJnZXRcIn0oTW9kaWZpZXJzPWV4cG9ydHMuTW9kaWZpZXJzfHwoZXhwb3J0cy5Nb2RpZmllcnM9e30pKTsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmRlZmF1bHRQcm9wcz12b2lkIDA7dmFyIHR5cGVzXzE9cmVxdWlyZShcIi4vdHlwZXNcIik7ZXhwb3J0cy5kZWZhdWx0UHJvcHM9e2FjdGl2ZUluZGV4OjAsYW5pbWF0aW9uRHVyYXRpb246NDAwLGFuaW1hdGlvbkVhc2luZ0Z1bmN0aW9uOlwiZWFzZVwiLGFuaW1hdGlvblR5cGU6dHlwZXNfMS5BbmltYXRpb25UeXBlLlNMSURFLGF1dG9IZWlnaHQ6ITEsYXV0b1dpZHRoOiExLGF1dG9QbGF5OiExLGF1dG9QbGF5Q29udHJvbHM6ITEsYXV0b1BsYXlEaXJlY3Rpb246dHlwZXNfMS5BdXRvcGxheURpcmVjdGlvbi5MVFIsYXV0b1BsYXlJbnRlcnZhbDo0MDAsYXV0b1BsYXlTdHJhdGVneTp0eXBlc18xLkF1dG9QbGF5U3RyYXRlZ3kuREVGQVVMVCxjaGlsZHJlbjp2b2lkIDAsY29udHJvbHNTdHJhdGVneTp0eXBlc18xLkNvbnRyb2xzU3RyYXRlZ3kuREVGQVVMVCxkaXNhYmxlQnV0dG9uc0NvbnRyb2xzOiExLGRpc2FibGVEb3RzQ29udHJvbHM6ITEsZGlzYWJsZVNsaWRlSW5mbzohMCxpbmZpbml0ZTohMSxpbm5lcldpZHRoOnZvaWQgMCxpdGVtczp2b2lkIDAsa2V5Ym9hcmROYXZpZ2F0aW9uOiExLG1vdXNlVHJhY2tpbmc6ITEsbmFtZTpcIlwiLHBhZGRpbmdMZWZ0OjAscGFkZGluZ1JpZ2h0OjAscmVzcG9uc2l2ZTp2b2lkIDAsc3dpcGVEZWx0YToyMCxzd2lwZUV4dHJhUGFkZGluZzoyMDAsc3NyU2lsZW50TW9kZTohMCx0b3VjaFRyYWNraW5nOiEwLHRvdWNoTW92ZURlZmF1bHRFdmVudHM6ITAsb25Jbml0aWFsaXplZDpmdW5jdGlvbigpe30sb25SZXNpemVkOmZ1bmN0aW9uKCl7fSxvblJlc2l6ZUV2ZW50OnZvaWQgMCxvblNsaWRlQ2hhbmdlOmZ1bmN0aW9uKCl7fSxvblNsaWRlQ2hhbmdlZDpmdW5jdGlvbigpe319OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2Fzc2lnbj1mdW5jdGlvbigpe3JldHVybihfX2Fzc2lnbj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihvKXtmb3IodmFyIHQscj0xLGk9YXJndW1lbnRzLmxlbmd0aDtyPGk7cisrKWZvcih2YXIgcyBpbiB0PWFyZ3VtZW50c1tyXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxzKSYmKG9bc109dFtzXSk7cmV0dXJuIG99KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LG1hcFBhcnRpYWxDb29yZHM9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMubWFwUG9zaXRpb25Db29yZHM9ZXhwb3J0cy5tYXBQYXJ0aWFsQ29vcmRzPXZvaWQgMCxmdW5jdGlvbihvKXtyZXR1cm4gby5tYXAoZnVuY3Rpb24obyl7cmV0dXJue3dpZHRoOm8ud2lkdGgscG9zaXRpb246MH19KX0pLG1hcFBvc2l0aW9uQ29vcmRzPShleHBvcnRzLm1hcFBhcnRpYWxDb29yZHM9bWFwUGFydGlhbENvb3JkcyxmdW5jdGlvbihvLHQpe3JldHVybiB2b2lkIDA9PT10JiYodD0wKSxvLm1hcChmdW5jdGlvbihvKXtyZXR1cm4gby5wb3NpdGlvbj50P19fYXNzaWduKF9fYXNzaWduKHt9LG8pLHtwb3NpdGlvbjp0fSk6b30pfSk7ZXhwb3J0cy5tYXBQb3NpdGlvbkNvb3Jkcz1tYXBQb3NpdGlvbkNvb3JkczsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmlzVmVydGljYWxUb3VjaG1vdmVEZXRlY3RlZD1leHBvcnRzLmdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbj1leHBvcnRzLmdldEZhZGVvdXRBbmltYXRpb25JbmRleD1leHBvcnRzLmdldFN3aXBlVG91Y2hlbmRJbmRleD1leHBvcnRzLmdldFN3aXBlVG91Y2hlbmRQb3NpdGlvbj1leHBvcnRzLmdldFN3aXBlVHJhbnNmb3JtYXRpb25DdXJzb3I9ZXhwb3J0cy5nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleD1leHBvcnRzLmdldFN3aXBlU2hpZnRWYWx1ZT1leHBvcnRzLmdldEl0ZW1Db29yZHM9ZXhwb3J0cy5nZXRJc0xlZnREaXJlY3Rpb249ZXhwb3J0cy5zaG91bGRSZWNhbGN1bGF0ZVN3aXBlUG9zaXRpb249ZXhwb3J0cy5nZXRTd2lwZUxpbWl0TWF4PWV4cG9ydHMuZ2V0U3dpcGVMaW1pdE1pbj1leHBvcnRzLnNob3VsZENhbmNlbFNsaWRlQW5pbWF0aW9uPWV4cG9ydHMuc2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4PWV4cG9ydHMuZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4PWV4cG9ydHMuZ2V0QWN0aXZlSW5kZXg9ZXhwb3J0cy5nZXRTdGFydEluZGV4PWV4cG9ydHMuZ2V0U2hpZnRJbmRleD12b2lkIDA7dmFyIGdldFNoaWZ0SW5kZXg9ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZT12b2lkIDA9PT1lPzA6ZSkrKHQ9dm9pZCAwPT09dD8wOnQpfSxnZXRTdGFydEluZGV4PShleHBvcnRzLmdldFNoaWZ0SW5kZXg9Z2V0U2hpZnRJbmRleCxmdW5jdGlvbihlLHQpe2lmKHZvaWQgMD09PWUmJihlPTApLHQ9dm9pZCAwPT09dD8wOnQpe2lmKHQ8PWUpcmV0dXJuIHQtMTtpZigwPGUpcmV0dXJuIGV9cmV0dXJuIDB9KSxnZXRBY3RpdmVJbmRleD0oZXhwb3J0cy5nZXRTdGFydEluZGV4PWdldFN0YXJ0SW5kZXgsZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdGFydEluZGV4LHQ9dm9pZCAwPT09dD8wOnQsaT1lLml0ZW1zQ291bnQsZT1lLmluZmluaXRlO3JldHVybiB2b2lkIDAhPT1lJiZlP3Q6KDAsZXhwb3J0cy5nZXRTdGFydEluZGV4KSh0LHZvaWQgMD09PWk/MDppKX0pLGdldFVwZGF0ZVNsaWRlUG9zaXRpb25JbmRleD0oZXhwb3J0cy5nZXRBY3RpdmVJbmRleD1nZXRBY3RpdmVJbmRleCxmdW5jdGlvbihlLHQpe3JldHVybiBlPDA/dC0xOnQ8PWU/MDplfSksc2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4PShleHBvcnRzLmdldFVwZGF0ZVNsaWRlUG9zaXRpb25JbmRleD1nZXRVcGRhdGVTbGlkZVBvc2l0aW9uSW5kZXgsZnVuY3Rpb24oZSx0KXtyZXR1cm4gZTwwfHx0PD1lfSksc2hvdWxkQ2FuY2VsU2xpZGVBbmltYXRpb249KGV4cG9ydHMuc2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4PXNob3VsZFJlY2FsY3VsYXRlU2xpZGVJbmRleCxmdW5jdGlvbihlLHQpe3JldHVybiBlPDB8fHQ8PWV9KSxnZXRTd2lwZUxpbWl0TWluPShleHBvcnRzLnNob3VsZENhbmNlbFNsaWRlQW5pbWF0aW9uPXNob3VsZENhbmNlbFNsaWRlQW5pbWF0aW9uLGZ1bmN0aW9uKGUsdCl7dmFyIGk9ZS5pdGVtc09mZnNldCxlPWUudHJhbnNmb3JtYXRpb25TZXQsZT12b2lkIDA9PT1lP1tdOmUsbz10LmluZmluaXRlLHQ9dC5zd2lwZUV4dHJhUGFkZGluZztyZXR1cm4gbz8oZVt2b2lkIDA9PT1pPzA6aV18fHt9KS5wb3NpdGlvbjoobz0oZVswXXx8e30pLndpZHRoLE1hdGgubWluKHZvaWQgMD09PXQ/MDp0LHZvaWQgMD09PW8/MDpvKSl9KSxnZXRTd2lwZUxpbWl0TWF4PShleHBvcnRzLmdldFN3aXBlTGltaXRNaW49Z2V0U3dpcGVMaW1pdE1pbixmdW5jdGlvbihlLHQpe3ZhciBpPXQuaW5maW5pdGUsdD10LnN3aXBlRXh0cmFQYWRkaW5nLHQ9dm9pZCAwPT09dD8wOnQsbz1lLml0ZW1zQ291bnQsbj1lLml0ZW1zT2Zmc2V0LHI9ZS5pdGVtc0luU2xpZGUscj12b2lkIDA9PT1yPzE6cixlPWUudHJhbnNmb3JtYXRpb25TZXQsZT12b2lkIDA9PT1lP1tdOmU7cmV0dXJuIGk/KGVbKHZvaWQgMD09PW8/MTpvKSsoMCxleHBvcnRzLmdldFNoaWZ0SW5kZXgpKHIsdm9pZCAwPT09bj8wOm4pXXx8e30pLnBvc2l0aW9ufHwwOigwLGV4cG9ydHMuZ2V0SXRlbUNvb3JkcykoLXIsZSkucG9zaXRpb24rdH0pLHNob3VsZFJlY2FsY3VsYXRlU3dpcGVQb3NpdGlvbj0oZXhwb3J0cy5nZXRTd2lwZUxpbWl0TWF4PWdldFN3aXBlTGltaXRNYXgsZnVuY3Rpb24oZSx0LGkpe3JldHVybi10PD1lfHxNYXRoLmFicyhlKT49aX0pLGdldElzTGVmdERpcmVjdGlvbj0oZXhwb3J0cy5zaG91bGRSZWNhbGN1bGF0ZVN3aXBlUG9zaXRpb249c2hvdWxkUmVjYWxjdWxhdGVTd2lwZVBvc2l0aW9uLGZ1bmN0aW9uKGUpe3JldHVybihlPXZvaWQgMD09PWU/MDplKTwwfSksZ2V0SXRlbUNvb3Jkcz0oZXhwb3J0cy5nZXRJc0xlZnREaXJlY3Rpb249Z2V0SXNMZWZ0RGlyZWN0aW9uLGZ1bmN0aW9uKGUsdCl7cmV0dXJuKHQ9dm9pZCAwPT09dD9bXTp0KS5zbGljZShlPXZvaWQgMD09PWU/MDplKVswXXx8e3Bvc2l0aW9uOjAsd2lkdGg6MH19KSxnZXRTd2lwZVNoaWZ0VmFsdWU9KGV4cG9ydHMuZ2V0SXRlbUNvb3Jkcz1nZXRJdGVtQ29vcmRzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PWUmJihlPTApLHZvaWQgMD09PXQmJih0PVtdKSwoMCxleHBvcnRzLmdldEl0ZW1Db29yZHMpKGUsdCkucG9zaXRpb259KSxnZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleD0oZXhwb3J0cy5nZXRTd2lwZVNoaWZ0VmFsdWU9Z2V0U3dpcGVTaGlmdFZhbHVlLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PTApLChlPXZvaWQgMD09PWU/W106ZSkuZmluZEluZGV4KGZ1bmN0aW9uKGUpe3JldHVybiBlLnBvc2l0aW9uPj1NYXRoLmFicyh0KX0pfSksZ2V0U3dpcGVUcmFuc2Zvcm1hdGlvbkN1cnNvcj0oZXhwb3J0cy5nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleD1nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleCxmdW5jdGlvbihlLHQsaSl7dm9pZCAwPT09ZSYmKGU9W10pLHZvaWQgMD09PXQmJih0PTApLHZvaWQgMD09PWkmJihpPTApO2U9KDAsZXhwb3J0cy5nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleCkoZSx0KTtyZXR1cm4oMCxleHBvcnRzLmdldElzTGVmdERpcmVjdGlvbikoaSk/ZTplLTF9KSxnZXRTd2lwZVRvdWNoZW5kUG9zaXRpb249KGV4cG9ydHMuZ2V0U3dpcGVUcmFuc2Zvcm1hdGlvbkN1cnNvcj1nZXRTd2lwZVRyYW5zZm9ybWF0aW9uQ3Vyc29yLGZ1bmN0aW9uKGUsdCxpKXt2b2lkIDA9PT1pJiYoaT0wKTt2YXIgbz1lLmluZmluaXRlLG49ZS5hdXRvV2lkdGgscj1lLmlzU3RhZ2VDb250ZW50UGFydGlhbCxzPWUuc3dpcGVBbGxvd2VkUG9zaXRpb25NYXgsZT1lLnRyYW5zZm9ybWF0aW9uU2V0LGk9KDAsZXhwb3J0cy5nZXRTd2lwZVRyYW5zZm9ybWF0aW9uQ3Vyc29yKShlLGksdCksdD0oMCxleHBvcnRzLmdldEl0ZW1Db29yZHMpKGksZSkucG9zaXRpb247aWYoIW8pe2lmKG4mJnIpcmV0dXJuIDA7aWYoczx0KXJldHVybi1zfXJldHVybi10fSksZ2V0U3dpcGVUb3VjaGVuZEluZGV4PShleHBvcnRzLmdldFN3aXBlVG91Y2hlbmRQb3NpdGlvbj1nZXRTd2lwZVRvdWNoZW5kUG9zaXRpb24sZnVuY3Rpb24oZSx0KXt2YXIgaT10LnRyYW5zZm9ybWF0aW9uU2V0LG89dC5pdGVtc0luU2xpZGUsbj10Lml0ZW1zT2Zmc2V0LHI9dC5pdGVtc0NvdW50LHM9dC5pbmZpbml0ZSxkPXQuaXNTdGFnZUNvbnRlbnRQYXJ0aWFsLGE9dC5hY3RpdmVJbmRleCx0PXQudHJhbnNsYXRlM2Q7cmV0dXJuIHN8fCFkJiZ0IT09TWF0aC5hYnMoZSk/KGQ9KDAsZXhwb3J0cy5nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleCkoaSxlKSxzP2Q8KHQ9KDAsZXhwb3J0cy5nZXRTaGlmdEluZGV4KShvLG4pKT9yLW8tbitkOnQrcjw9ZD9kLSh0K3IpOmQtdDpkKTphfSksZ2V0RmFkZW91dEFuaW1hdGlvbkluZGV4PShleHBvcnRzLmdldFN3aXBlVG91Y2hlbmRJbmRleD1nZXRTd2lwZVRvdWNoZW5kSW5kZXgsZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pbmZpbml0ZSxpPWUuYWN0aXZlSW5kZXgsZT1lLml0ZW1zSW5TbGlkZTtyZXR1cm4gdD9pK2U6aX0pLGdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbj0oZXhwb3J0cy5nZXRGYWRlb3V0QW5pbWF0aW9uSW5kZXg9Z2V0RmFkZW91dEFuaW1hdGlvbkluZGV4LGZ1bmN0aW9uKGUsdCl7dmFyIGk9dC5hY3RpdmVJbmRleCx0PXQuc3RhZ2VXaWR0aDtyZXR1cm4gZTxpPyhpLWUpKi10fHwwOihlLWkpKnR8fDB9KSxpc1ZlcnRpY2FsVG91Y2htb3ZlRGV0ZWN0ZWQ9KGV4cG9ydHMuZ2V0RmFkZW91dEFuaW1hdGlvblBvc2l0aW9uPWdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbixmdW5jdGlvbihlLHQsaSl7cmV0dXJuIGU8KGk9dm9pZCAwPT09aT8wOmkpfHxlPC4xKnR9KTtleHBvcnRzLmlzVmVydGljYWxUb3VjaG1vdmVEZXRlY3RlZD1pc1ZlcnRpY2FsVG91Y2htb3ZlRGV0ZWN0ZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9fYXNzaWduPWZ1bmN0aW9uKCl7cmV0dXJuKF9fYXNzaWduPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxyPTEsbj1hcmd1bWVudHMubGVuZ3RoO3I8bjtyKyspZm9yKHZhciBvIGluIGU9YXJndW1lbnRzW3JdKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pJiYodFtvXT1lW29dKTtyZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sY29tbW9uXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuZ2V0VHJhbnNmb3JtTWF0cml4PWV4cG9ydHMuZ2V0VHJhbnNsYXRlWFByb3BlcnR5PWV4cG9ydHMuZ2V0VG91Y2htb3ZlVHJhbnNsYXRlUG9zaXRpb249ZXhwb3J0cy5nZXRUcmFuc2xhdGUzZFByb3BlcnR5PWV4cG9ydHMuZ2V0UmVuZGVyU3RhZ2VJdGVtU3R5bGVzPWV4cG9ydHMuZ2V0UmVuZGVyU3RhZ2VTdHlsZXM9ZXhwb3J0cy5nZXRUcmFuc2l0aW9uUHJvcGVydHk9ZXhwb3J0cy5nZXRSZW5kZXJXcmFwcGVyU3R5bGVzPWV4cG9ydHMuYW5pbWF0ZT1leHBvcnRzLnNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50PWV4cG9ydHMuZ2V0RWxlbWVudEZpcnN0Q2hpbGQ9ZXhwb3J0cy5nZXRFbGVtZW50Q3Vyc29yPWV4cG9ydHMuZ2V0QXV0b2hlaWdodFByb3BlcnR5PWV4cG9ydHMuZ2V0RWxlbWVudERpbWVuc2lvbnM9ZXhwb3J0cy5nZXRJdGVtV2lkdGg9ZXhwb3J0cy5jcmVhdGVEZWZhdWx0VHJhbnNmb3JtYXRpb25TZXQ9ZXhwb3J0cy5jcmVhdGVBdXRvd2lkdGhUcmFuc2Zvcm1hdGlvblNldD1leHBvcnRzLmlzRWxlbWVudD1leHBvcnRzLmNyZWF0ZUNsb25lcz1leHBvcnRzLmdldEl0ZW1zT2Zmc2V0PWV4cG9ydHMuZ2V0SXRlbXNDb3VudD1leHBvcnRzLmdldFNsaWRlcz12b2lkIDAscmVxdWlyZShcIi4vY29tbW9uXCIpKSxtYXBwZXJzXzE9cmVxdWlyZShcIi4vbWFwcGVyc1wiKSxtYXRoXzE9cmVxdWlyZShcIi4vbWF0aFwiKSxnZXRTbGlkZXM9ZnVuY3Rpb24odCl7dmFyIGU9dC5jaGlsZHJlbix0PXQuaXRlbXM7cmV0dXJuIGU/ZS5sZW5ndGg/ZTpbZV06dm9pZCAwPT09dD9bXTp0fSxnZXRJdGVtc0NvdW50PShleHBvcnRzLmdldFNsaWRlcz1nZXRTbGlkZXMsZnVuY3Rpb24odCl7cmV0dXJuKDAsZXhwb3J0cy5nZXRTbGlkZXMpKHQpLmxlbmd0aH0pLGdldEl0ZW1zT2Zmc2V0PShleHBvcnRzLmdldEl0ZW1zQ291bnQ9Z2V0SXRlbXNDb3VudCxmdW5jdGlvbih0KXt2YXIgZT10LmluZmluaXRlLHI9dC5wYWRkaW5nUmlnaHQsdD10LnBhZGRpbmdMZWZ0O3JldHVybiBlJiYodHx8cik/MTowfSksY3JlYXRlQ2xvbmVzPShleHBvcnRzLmdldEl0ZW1zT2Zmc2V0PWdldEl0ZW1zT2Zmc2V0LGZ1bmN0aW9uKHQpe3ZhciBlLHIsbixvLGk9KDAsZXhwb3J0cy5nZXRTbGlkZXMpKHQpO3JldHVybiB0LmluZmluaXRlPyhlPSgwLGV4cG9ydHMuZ2V0SXRlbXNDb3VudCkodCksbz0oMCxleHBvcnRzLmdldEl0ZW1zT2Zmc2V0KSh0KSx0PSgwLGNvbW1vbl8xLmdldEl0ZW1zSW5TbGlkZSkoZSx0KSxuPU1hdGgubWluKHQsZSkrbyxyPWkuc2xpY2UoMCxuKSxuPWkuc2xpY2UoLW4pLG8mJnQ9PT1lJiYobz1pWzBdLHQ9aS5zbGljZSgtMSlbMF0sbi51bnNoaWZ0KHQpLHIucHVzaChvKSksbi5jb25jYXQoaSxyKSk6aX0pLGlzRWxlbWVudD0oZXhwb3J0cy5jcmVhdGVDbG9uZXM9Y3JlYXRlQ2xvbmVzLGZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4gdCBpbnN0YW5jZW9mIEVsZW1lbnR8fHQgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnR9Y2F0Y2godCl7cmV0dXJuITF9fSksY3JlYXRlQXV0b3dpZHRoVHJhbnNmb3JtYXRpb25TZXQ9KGV4cG9ydHMuaXNFbGVtZW50PWlzRWxlbWVudCxmdW5jdGlvbih0LGksZSl7dm9pZCAwPT09aSYmKGk9MCksdm9pZCAwPT09ZSYmKGU9ITEpO3ZhciBzPTAsYT0hMCxyPVtdO3JldHVybigwLGV4cG9ydHMuaXNFbGVtZW50KSh0KSYmKHI9QXJyYXkuZnJvbSgobnVsbD09dD92b2lkIDA6dC5jaGlsZHJlbil8fFtdKS5yZWR1Y2UoZnVuY3Rpb24odCxlLHIpe3ZhciBuPTAscj1yLTEsbz10W3JdLGU9Z2V0RWxlbWVudERpbWVuc2lvbnMobnVsbD09ZT92b2lkIDA6ZS5maXJzdENoaWxkKS53aWR0aCxlPXZvaWQgMD09PWU/MDplO3JldHVybiBhPShzKz1lKTw9aSxvJiYobj0wPT1yP28ud2lkdGg6by53aWR0aCtvLnBvc2l0aW9uKSx0LnB1c2goe3Bvc2l0aW9uOm4sd2lkdGg6ZX0pLHR9LFtdKSxlfHwocj1hPygwLG1hcHBlcnNfMS5tYXBQYXJ0aWFsQ29vcmRzKShyKToodD1zLWksKDAsbWFwcGVyc18xLm1hcFBvc2l0aW9uQ29vcmRzKShyLHQpKSkpLHtjb29yZHM6cixjb250ZW50OnMscGFydGlhbDphfX0pLGNyZWF0ZURlZmF1bHRUcmFuc2Zvcm1hdGlvblNldD0oZXhwb3J0cy5jcmVhdGVBdXRvd2lkdGhUcmFuc2Zvcm1hdGlvblNldD1jcmVhdGVBdXRvd2lkdGhUcmFuc2Zvcm1hdGlvblNldCxmdW5jdGlvbih0LG8sZSxyKXt2b2lkIDA9PT1yJiYocj0hMSk7dmFyIGk9MCxzPSEwLG49W10sYT0oMCxleHBvcnRzLmdldEl0ZW1XaWR0aCkobyxlKTtyZXR1cm4gbj10LnJlZHVjZShmdW5jdGlvbih0LGUscil7dmFyIG49MCxyPXRbci0xXTtyZXR1cm4gcz0oaSs9YSk8PW8sciYmKG49YStyLnBvc2l0aW9ufHwwKSx0LnB1c2goe3dpZHRoOmEscG9zaXRpb246bn0pLHR9LFtdKSx7Y29vcmRzOm49cj9uOnM/KDAsbWFwcGVyc18xLm1hcFBhcnRpYWxDb29yZHMpKG4pOihlPWktbywoMCxtYXBwZXJzXzEubWFwUG9zaXRpb25Db29yZHMpKG4sZSkpLGNvbnRlbnQ6aSxwYXJ0aWFsOnN9fSksZ2V0SXRlbVdpZHRoPShleHBvcnRzLmNyZWF0ZURlZmF1bHRUcmFuc2Zvcm1hdGlvblNldD1jcmVhdGVEZWZhdWx0VHJhbnNmb3JtYXRpb25TZXQsZnVuY3Rpb24odCxlKXtyZXR1cm4gMDxlP3QvZTp0fSk7ZnVuY3Rpb24gZ2V0RWxlbWVudERpbWVuc2lvbnModCl7cmV0dXJuIHQmJnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0P3t3aWR0aDoodD10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKS53aWR0aCxoZWlnaHQ6dC5oZWlnaHR9Ont3aWR0aDowLGhlaWdodDowfX1leHBvcnRzLmdldEl0ZW1XaWR0aD1nZXRJdGVtV2lkdGgsZXhwb3J0cy5nZXRFbGVtZW50RGltZW5zaW9ucz1nZXRFbGVtZW50RGltZW5zaW9uczt2YXIgZ2V0QXV0b2hlaWdodFByb3BlcnR5PWZ1bmN0aW9uKHQsZSxyKXt2YXIgZT0oMCxleHBvcnRzLmdldEVsZW1lbnRDdXJzb3IpKGUscikscj0oMCxleHBvcnRzLmdldEVsZW1lbnRGaXJzdENoaWxkKSh0LGUpO2lmKCgwLGV4cG9ydHMuaXNFbGVtZW50KShyKSlyZXR1cm4gdD13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShyKSxlPXBhcnNlRmxvYXQodC5tYXJnaW5Ub3ApLHQ9cGFyc2VGbG9hdCh0Lm1hcmdpbkJvdHRvbSksTWF0aC5jZWlsKHIub2Zmc2V0SGVpZ2h0K2UrdCl9LGdldEVsZW1lbnRDdXJzb3I9KGV4cG9ydHMuZ2V0QXV0b2hlaWdodFByb3BlcnR5PWdldEF1dG9oZWlnaHRQcm9wZXJ0eSxmdW5jdGlvbih0LGUpe3ZhciByPWUuYWN0aXZlSW5kZXgsZT1lLml0ZW1zSW5TbGlkZTtyZXR1cm4gdC5pbmZpbml0ZT9yK2UrKDAsZXhwb3J0cy5nZXRJdGVtc09mZnNldCkodCk6cn0pLGdldEVsZW1lbnRGaXJzdENoaWxkPShleHBvcnRzLmdldEVsZW1lbnRDdXJzb3I9Z2V0RWxlbWVudEN1cnNvcixmdW5jdGlvbih0LGUpe3Q9dCYmdC5jaGlsZHJlbnx8W107cmV0dXJuIHRbZV0mJnRbZV0uZmlyc3RDaGlsZHx8bnVsbH0pO2Z1bmN0aW9uIHNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50KHQsZSxyKXtyZXR1cm4oZT12b2lkIDA9PT1lP3t9OmUpLndpZHRoIT09KHI9dm9pZCAwPT09cj97fTpyKS53aWR0aH1mdW5jdGlvbiBhbmltYXRlKHQsZSl7dmFyIGU9ZXx8e30scj1lLnBvc2l0aW9uLHI9dm9pZCAwPT09cj8wOnIsbj1lLmFuaW1hdGlvbkR1cmF0aW9uLG49dm9pZCAwPT09bj8wOm4sZT1lLmFuaW1hdGlvbkVhc2luZ0Z1bmN0aW9uLGU9dm9pZCAwPT09ZT9cImVhc2VcIjplO3JldHVybiB0JiYoMCxleHBvcnRzLmlzRWxlbWVudCkodCkmJih0LnN0eWxlLnRyYW5zaXRpb249XCJ0cmFuc2Zvcm0gXCIuY29uY2F0KG4sXCJtcyBcIikuY29uY2F0KGUsXCIgMG1zXCIpLHQuc3R5bGUudHJhbnNmb3JtPVwidHJhbnNsYXRlM2QoXCIuY29uY2F0KHIsXCJweCwgMCwgMClcIikpLHR9ZXhwb3J0cy5nZXRFbGVtZW50Rmlyc3RDaGlsZD1nZXRFbGVtZW50Rmlyc3RDaGlsZCxleHBvcnRzLnNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50PXNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50LGV4cG9ydHMuYW5pbWF0ZT1hbmltYXRlO3ZhciBnZXRSZW5kZXJXcmFwcGVyU3R5bGVzPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbj10fHx7fSxvPW4ucGFkZGluZ0xlZnQsaT1uLnBhZGRpbmdSaWdodCxzPW4uYXV0b0hlaWdodCxuPW4uYW5pbWF0aW9uRHVyYXRpb24scz1zPygwLGV4cG9ydHMuZ2V0QXV0b2hlaWdodFByb3BlcnR5KShyLHQsZSk6dm9pZCAwO3JldHVybntoZWlnaHQ6cyx0cmFuc2l0aW9uOnM/XCJoZWlnaHQgXCIuY29uY2F0KG4sXCJtc1wiKTp2b2lkIDAscGFkZGluZ0xlZnQ6XCJcIi5jb25jYXQobyxcInB4XCIpLHBhZGRpbmdSaWdodDpcIlwiLmNvbmNhdChpLFwicHhcIil9fSxnZXRUcmFuc2l0aW9uUHJvcGVydHk9KGV4cG9ydHMuZ2V0UmVuZGVyV3JhcHBlclN0eWxlcz1nZXRSZW5kZXJXcmFwcGVyU3R5bGVzLGZ1bmN0aW9uKHQpe3ZhciB0PXR8fHt9LGU9dC5hbmltYXRpb25EdXJhdGlvbix0PXQuYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb24sdD12b2lkIDA9PT10P1wiZWFzZVwiOnQ7cmV0dXJuXCJ0cmFuc2Zvcm0gXCIuY29uY2F0KHZvaWQgMD09PWU/MDplLFwibXMgXCIpLmNvbmNhdCh0LFwiIDBtc1wiKX0pLGdldFJlbmRlclN0YWdlU3R5bGVzPShleHBvcnRzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eT1nZXRUcmFuc2l0aW9uUHJvcGVydHksZnVuY3Rpb24odCxlKXt0PSh0fHx7fSkudHJhbnNsYXRlM2QsdD1cInRyYW5zbGF0ZTNkKFwiLmNvbmNhdCgtKHZvaWQgMD09PXQ/MDp0KSxcInB4LCAwLCAwKVwiKTtyZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sZSkse3RyYW5zZm9ybTp0fSl9KSxnZXRSZW5kZXJTdGFnZUl0ZW1TdHlsZXM9KGV4cG9ydHMuZ2V0UmVuZGVyU3RhZ2VTdHlsZXM9Z2V0UmVuZGVyU3RhZ2VTdHlsZXMsZnVuY3Rpb24odCxlKXt2YXIgcj1lLnRyYW5zZm9ybWF0aW9uU2V0LG49ZS5mYWRlb3V0QW5pbWF0aW9uSW5kZXgsbz1lLmZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbixpPWUuZmFkZW91dEFuaW1hdGlvblByb2Nlc3NpbmcsZT1lLmFuaW1hdGlvbkR1cmF0aW9uLHI9KHJbdF18fHt9KS53aWR0aDtyZXR1cm4gaSYmbj09PXQ/e3RyYW5zZm9ybTpcInRyYW5zbGF0ZVgoXCIuY29uY2F0KG8sXCJweClcIiksYW5pbWF0aW9uRHVyYXRpb246XCJcIi5jb25jYXQoZSxcIm1zXCIpLHdpZHRoOlwiXCIuY29uY2F0KHIsXCJweFwiKX06e3dpZHRoOnJ9fSksZ2V0VHJhbnNsYXRlM2RQcm9wZXJ0eT0oZXhwb3J0cy5nZXRSZW5kZXJTdGFnZUl0ZW1TdHlsZXM9Z2V0UmVuZGVyU3RhZ2VJdGVtU3R5bGVzLGZ1bmN0aW9uKHQsZSl7dmFyIHI9dCxuPWUuaW5maW5pdGUsbz1lLml0ZW1zT2Zmc2V0LGk9ZS5pdGVtc0luU2xpZGUsZT1lLnRyYW5zZm9ybWF0aW9uU2V0O3JldHVybigodm9pZCAwPT09ZT9bXTplKVtyPW4/dCsoMCxtYXRoXzEuZ2V0U2hpZnRJbmRleCkodm9pZCAwPT09aT8wOmksdm9pZCAwPT09bz8wOm8pOnJdfHx7fSkucG9zaXRpb258fDB9KSxnZXRUb3VjaG1vdmVUcmFuc2xhdGVQb3NpdGlvbj0oZXhwb3J0cy5nZXRUcmFuc2xhdGUzZFByb3BlcnR5PWdldFRyYW5zbGF0ZTNkUHJvcGVydHksZnVuY3Rpb24odCxlKXtyZXR1cm4tKGUtTWF0aC5mbG9vcih0KSl9KTtmdW5jdGlvbiBnZXRUcmFuc2xhdGVYUHJvcGVydHkodCl7dD1nZXRUcmFuc2Zvcm1NYXRyaXgodCksdD10JiZ0WzRdfHxcIlwiO3JldHVybiBOdW1iZXIodCl9ZnVuY3Rpb24gZ2V0VHJhbnNmb3JtTWF0cml4KHQpe3JldHVybiB0JiYoMCxleHBvcnRzLmlzRWxlbWVudCkodCkmJndpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpLnRyYW5zZm9ybS5tYXRjaCgvKC0/WzAtOS5dKykvZyl8fFtdfWV4cG9ydHMuZ2V0VG91Y2htb3ZlVHJhbnNsYXRlUG9zaXRpb249Z2V0VG91Y2htb3ZlVHJhbnNsYXRlUG9zaXRpb24sZXhwb3J0cy5nZXRUcmFuc2xhdGVYUHJvcGVydHk9Z2V0VHJhbnNsYXRlWFByb3BlcnR5LGV4cG9ydHMuZ2V0VHJhbnNmb3JtTWF0cml4PWdldFRyYW5zZm9ybU1hdHJpeDsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmNhbGN1bGF0ZUluaXRpYWxTdGF0ZT1leHBvcnRzLmdldEl0ZW1zSW5TbGlkZT1leHBvcnRzLmdldElzU3RhZ2VDb250ZW50UGFydGlhbD1leHBvcnRzLmNvbmNhdENsYXNzbmFtZXM9ZXhwb3J0cy5jYW5Vc2VET009dm9pZCAwO3ZhciBlbGVtZW50c18xPXJlcXVpcmUoXCIuL2VsZW1lbnRzXCIpLG1hdGhfMT1yZXF1aXJlKFwiLi9tYXRoXCIpLGNhblVzZURPTT1mdW5jdGlvbigpe3ZhciB0O3RyeXtyZXR1cm4gQm9vbGVhbihudWxsPT0odD1udWxsPT09d2luZG93fHx2b2lkIDA9PT13aW5kb3c/dm9pZCAwOndpbmRvdy5kb2N1bWVudCk/dm9pZCAwOnQuY3JlYXRlRWxlbWVudCl9Y2F0Y2godCl7cmV0dXJuITF9fSxjb25jYXRDbGFzc25hbWVzPShleHBvcnRzLmNhblVzZURPTT1jYW5Vc2VET00sZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspdFtlXT1hcmd1bWVudHNbZV07cmV0dXJuIHQuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpfSksZ2V0SXNTdGFnZUNvbnRlbnRQYXJ0aWFsPShleHBvcnRzLmNvbmNhdENsYXNzbmFtZXM9Y29uY2F0Q2xhc3NuYW1lcyxmdW5jdGlvbih0LGUsbil7cmV0dXJuIHZvaWQgMD09PWUmJihlPTApLHZvaWQgMD09PW4mJihuPTApLCEodD12b2lkIDAhPT10JiZ0KSYmbjw9ZX0pLGdldEl0ZW1zSW5TbGlkZT0oZXhwb3J0cy5nZXRJc1N0YWdlQ29udGVudFBhcnRpYWw9Z2V0SXNTdGFnZUNvbnRlbnRQYXJ0aWFsLGZ1bmN0aW9uKG4sdCl7dmFyIGksYT0xLG89dC5yZXNwb25zaXZlLGU9dC5hdXRvV2lkdGgscz10LmluZmluaXRlLHQ9dC5pbm5lcldpZHRoO3JldHVybiB2b2lkIDAhPT1lJiZlP3ZvaWQgMCE9PXMmJnM/bjphOihvJiYoZT1PYmplY3Qua2V5cyhvKSkubGVuZ3RoJiYodHx8KDAsZXhwb3J0cy5jYW5Vc2VET00pKCkpJiYoaT12b2lkIDA9PT10P3dpbmRvdy5pbm5lcldpZHRoOnQsZS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBlO051bWJlcih0KTw9aSYmKGU9KHQ9b1t0XSkuaXRlbXMsdD10Lml0ZW1zRml0LGE9XCJjb250YWluXCI9PT0odm9pZCAwPT09dD9cImZpbGxcIjp0KT9lOk1hdGgubWluKGUsbikpfSkpLGF8fDEpfSksY2FsY3VsYXRlSW5pdGlhbFN0YXRlPShleHBvcnRzLmdldEl0ZW1zSW5TbGlkZT1nZXRJdGVtc0luU2xpZGUsZnVuY3Rpb24odCxlLG4pe3ZvaWQgMD09PW4mJihuPSExKTt2YXIgaSxhLG89dC5hbmltYXRpb25EdXJhdGlvbixvPXZvaWQgMD09PW8/MDpvLHM9dC5pbmZpbml0ZSxzPXZvaWQgMCE9PXMmJnMscj10LmF1dG9QbGF5LHI9dm9pZCAwIT09ciYmcixsPXQuYXV0b1dpZHRoLGw9dm9pZCAwIT09bCYmbCxtPSgwLGVsZW1lbnRzXzEuY3JlYXRlQ2xvbmVzKSh0KSxkPSgwLGVsZW1lbnRzXzEuZ2V0VHJhbnNpdGlvblByb3BlcnR5KSgpLGM9KDAsZWxlbWVudHNfMS5nZXRJdGVtc0NvdW50KSh0KSx1PSgwLGVsZW1lbnRzXzEuZ2V0SXRlbXNPZmZzZXQpKHQpLGY9KDAsZXhwb3J0cy5nZXRJdGVtc0luU2xpZGUpKGMsdCksZz0oMCxtYXRoXzEuZ2V0U3RhcnRJbmRleCkodC5hY3RpdmVJbmRleCxjKSxnPSgwLG1hdGhfMS5nZXRBY3RpdmVJbmRleCkoe3N0YXJ0SW5kZXg6ZyxpdGVtc0NvdW50OmMsaW5maW5pdGU6c30pLEk9KDAsZWxlbWVudHNfMS5nZXRFbGVtZW50RGltZW5zaW9ucykoZSkud2lkdGgsUz0oYT0oZT0obD8oaT0oZT0oMCxlbGVtZW50c18xLmNyZWF0ZUF1dG93aWR0aFRyYW5zZm9ybWF0aW9uU2V0KShlLEkscykpLmNvb3JkcyxhPWUuY29udGVudCxlKTooaT0oZT0oMCxlbGVtZW50c18xLmNyZWF0ZURlZmF1bHRUcmFuc2Zvcm1hdGlvblNldCkobSxJLGYscykpLmNvb3JkcyxhPWUuY29udGVudCxlKSkucGFydGlhbCxhKSwoMCxtYXRoXzEuZ2V0SXRlbUNvb3JkcykoLWYsaT1pKS5wb3NpdGlvbikscD0oMCxtYXRoXzEuZ2V0U3dpcGVMaW1pdE1pbikoe2l0ZW1zT2Zmc2V0OnUsdHJhbnNmb3JtYXRpb25TZXQ6aX0sdCksdD0oMCxtYXRoXzEuZ2V0U3dpcGVMaW1pdE1heCkoe2l0ZW1zQ291bnQ6YyxpdGVtc09mZnNldDp1LGl0ZW1zSW5TbGlkZTpmLHRyYW5zZm9ybWF0aW9uU2V0Oml9LHQpLHY9KDAsbWF0aF8xLmdldFN3aXBlU2hpZnRWYWx1ZSkoYyxpKTtyZXR1cm57YWN0aXZlSW5kZXg6ZyxhdXRvV2lkdGg6bCxhbmltYXRpb25EdXJhdGlvbjpvLGNsb25lczptLGluZmluaXRlOnMsaXRlbXNDb3VudDpjLGl0ZW1zSW5TbGlkZTpmLGl0ZW1zT2Zmc2V0OnUsdHJhbnNsYXRlM2Q6KDAsZWxlbWVudHNfMS5nZXRUcmFuc2xhdGUzZFByb3BlcnR5KShnLHtpdGVtc0luU2xpZGU6ZixpdGVtc09mZnNldDp1LHRyYW5zZm9ybWF0aW9uU2V0OmksYXV0b1dpZHRoOmwsaW5maW5pdGU6c30pLHN0YWdlV2lkdGg6SSxzdGFnZUNvbnRlbnRXaWR0aDphLGluaXRpYWxTdGFnZUhlaWdodDowLGlzU3RhZ2VDb250ZW50UGFydGlhbDplLGlzQXV0b1BsYXlpbmc6Qm9vbGVhbihyKSxpc0F1dG9QbGF5Q2FuY2VsZWRPbkFjdGlvbjohMSx0cmFuc2Zvcm1hdGlvblNldDppLHRyYW5zaXRpb246ZCxmYWRlb3V0QW5pbWF0aW9uSW5kZXg6bnVsbCxmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb246bnVsbCxmYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZzohMSxzd2lwZUxpbWl0TWluOnAsc3dpcGVMaW1pdE1heDp0LHN3aXBlQWxsb3dlZFBvc2l0aW9uTWF4OlMsc3dpcGVTaGlmdFZhbHVlOnYsY2FuVXNlRG9tOm58fCgwLGV4cG9ydHMuY2FuVXNlRE9NKSgpfX0pO2V4cG9ydHMuY2FsY3VsYXRlSW5pdGlhbFN0YXRlPWNhbGN1bGF0ZUluaXRpYWxTdGF0ZTsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmlzQ2xvbmVkSXRlbT1leHBvcnRzLmlzVGFyZ2V0SXRlbT1leHBvcnRzLmlzQWN0aXZlSXRlbT1leHBvcnRzLmdldFJlbmRlclN0YWdlSXRlbUNsYXNzZXM9dm9pZCAwO3ZhciB0eXBlc18xPXJlcXVpcmUoXCIuLi90eXBlc1wiKSxjb21tb25fMT1yZXF1aXJlKFwiLi9jb21tb25cIiksbWF0aF8xPXJlcXVpcmUoXCIuL21hdGhcIiksZ2V0UmVuZGVyU3RhZ2VJdGVtQ2xhc3Nlcz1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PWUmJihlPTApO3ZhciBzPXQuZmFkZW91dEFuaW1hdGlvbkluZGV4LGk9KDAsZXhwb3J0cy5pc0FjdGl2ZUl0ZW0pKGUsdCk/dHlwZXNfMS5Nb2RpZmllcnMuQUNUSVZFOlwiXCIsbj0oMCxleHBvcnRzLmlzQ2xvbmVkSXRlbSkoZSx0KT90eXBlc18xLk1vZGlmaWVycy5DTE9ORUQ6XCJcIix0PSgwLGV4cG9ydHMuaXNUYXJnZXRJdGVtKShlLHQpP3R5cGVzXzEuTW9kaWZpZXJzLlRBUkdFVDpcIlwiLGU9ZT09PXM/dHlwZXNfMS5DbGFzc25hbWVzLkFOSU1BVEVEOlwiXCI7cmV0dXJuKDAsY29tbW9uXzEuY29uY2F0Q2xhc3NuYW1lcykodHlwZXNfMS5DbGFzc25hbWVzLlNUQUdFX0lURU0saSxuLHQsZSl9LGlzQWN0aXZlSXRlbT0oZXhwb3J0cy5nZXRSZW5kZXJTdGFnZUl0ZW1DbGFzc2VzPWdldFJlbmRlclN0YWdlSXRlbUNsYXNzZXMsZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT1lJiYoZT0wKTt2YXIgcz10LmFjdGl2ZUluZGV4LGk9dC5pdGVtc0luU2xpZGUsbj10Lml0ZW1zT2Zmc2V0LHI9dC5pbmZpbml0ZSx0PXQuYXV0b1dpZHRoLG89KDAsbWF0aF8xLmdldFNoaWZ0SW5kZXgpKGksbik7cmV0dXJuIHQmJnI/ZS1vPT09cytuOih0PXMrbyxyP3Q8PWUmJmU8dCtpOnM8PWUmJmU8dCl9KSxpc1RhcmdldEl0ZW09KGV4cG9ydHMuaXNBY3RpdmVJdGVtPWlzQWN0aXZlSXRlbSxmdW5jdGlvbihlLHQpe3ZvaWQgMD09PWUmJihlPTApO3ZhciBzPXQuYWN0aXZlSW5kZXgsaT10Lml0ZW1zSW5TbGlkZSxuPXQuaXRlbXNPZmZzZXQscj10LmluZmluaXRlLHQ9dC5hdXRvV2lkdGgsaT0oMCxtYXRoXzEuZ2V0U2hpZnRJbmRleCkoaSxuKTtyZXR1cm4gcj90JiZyP2UtaT09PXMrbjplPT09cytpOmU9PT1zfSksaXNDbG9uZWRJdGVtPShleHBvcnRzLmlzVGFyZ2V0SXRlbT1pc1RhcmdldEl0ZW0sZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT1lJiYoZT0wKTt2YXIgcz10Lml0ZW1zSW5TbGlkZSxpPXQuaXRlbXNPZmZzZXQsbj10Lml0ZW1zQ291bnQscj10LmluZmluaXRlLHQ9dC5hdXRvV2lkdGg7cmV0dXJuISFyJiYodCYmcj9lPHN8fG4tMStzPGU6ZTwodD0oMCxtYXRoXzEuZ2V0U2hpZnRJbmRleCkocyxpKSl8fG4tMSt0PGUpfSk7ZXhwb3J0cy5pc0Nsb25lZEl0ZW09aXNDbG9uZWRJdGVtOyIsIlwidXNlIHN0cmljdFwiO2Z1bmN0aW9uIGRlYm91bmNlKG4saSl7dm9pZCAwPT09aSYmKGk9MCk7ZnVuY3Rpb24gdSgpe2QmJihjbGVhclRpbWVvdXQoZCksZD12b2lkIDApfXZhciBkPXZvaWQgMDtyZXR1cm5bZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcyxvPVtdLHQ9MDt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKW9bdF09YXJndW1lbnRzW3RdO3UoKSxkPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5hcHBseShlLG8pLGQ9dm9pZCAwfSxpKX0sdV19T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5kZWJvdW5jZT12b2lkIDAsZXhwb3J0cy5kZWJvdW5jZT1kZWJvdW5jZTsiLCJcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBkZWJ1Zygpe2Zvcih2YXIgZT1bXSxvPTA7bzxhcmd1bWVudHMubGVuZ3RoO28rKyllW29dPWFyZ3VtZW50c1tvXTtcImRldmVsb3BtZW50XCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOViYmY29uc29sZS5kZWJ1Zy5hcHBseShjb25zb2xlLGUpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuZGVidWc9dm9pZCAwLGV4cG9ydHMuZGVidWc9ZGVidWc7IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5nZXRTbGlkZUl0ZW1JbmZvPWV4cG9ydHMuZ2V0U2xpZGVJbmZvPWV4cG9ydHMuZ2V0U2xpZGVJbmRleEZvck11bHRpcGxlSXRlbXM9ZXhwb3J0cy5nZXRTbGlkZUluZGV4Rm9yTm9uTXVsdGlwbGVJdGVtcz1leHBvcnRzLmdldEFjdGl2ZVNsaWRlRG90c0xlbmd0aD1leHBvcnRzLmdldEFjdGl2ZVNsaWRlSW5kZXg9dm9pZCAwO3ZhciBnZXRBY3RpdmVTbGlkZUluZGV4PWZ1bmN0aW9uKGUsdCl7dmFyIHQ9dHx8e30saT10LmFjdGl2ZUluZGV4LG89dC5pdGVtc0luU2xpZGUsdD10Lml0ZW1zQ291bnQsaT1pK287cmV0dXJuIDE9PT1vPygwLGV4cG9ydHMuZ2V0U2xpZGVJbmRleEZvck5vbk11bHRpcGxlSXRlbXMpKGksbyx0KTooMCxleHBvcnRzLmdldFNsaWRlSW5kZXhGb3JNdWx0aXBsZUl0ZW1zKShpLG8sdCxlKX0sZ2V0QWN0aXZlU2xpZGVEb3RzTGVuZ3RoPShleHBvcnRzLmdldEFjdGl2ZVNsaWRlSW5kZXg9Z2V0QWN0aXZlU2xpZGVJbmRleCxmdW5jdGlvbihlLHQpe3ZhciBpO3JldHVybiB2b2lkIDA9PT10JiYodD0xKSwoZT12b2lkIDA9PT1lPzA6ZSkmJnQ/KGk9TWF0aC5mbG9vcihlL3QpLGUldD09MD9pLTE6aSk6MH0pLGdldFNsaWRlSW5kZXhGb3JOb25NdWx0aXBsZUl0ZW1zPShleHBvcnRzLmdldEFjdGl2ZVNsaWRlRG90c0xlbmd0aD1nZXRBY3RpdmVTbGlkZURvdHNMZW5ndGgsZnVuY3Rpb24oZSx0LGkpe3JldHVybiBlPHQ/aS10Omk8ZT8wOmUtMX0pLGdldFNsaWRlSW5kZXhGb3JNdWx0aXBsZUl0ZW1zPShleHBvcnRzLmdldFNsaWRlSW5kZXhGb3JOb25NdWx0aXBsZUl0ZW1zPWdldFNsaWRlSW5kZXhGb3JOb25NdWx0aXBsZUl0ZW1zLGZ1bmN0aW9uKGUsdCxpLG8pe3ZhciBsPSgwLGV4cG9ydHMuZ2V0QWN0aXZlU2xpZGVEb3RzTGVuZ3RoKShpLHQpO3JldHVybiBlPT09aSt0PzA6b3x8ZTx0JiYwIT09ZT9sOjA9PT1lP2kldD09MD9sOmwtMTowPHQ/TWF0aC5mbG9vcihlL3QpLTE6MH0pLGdldFNsaWRlSW5mbz0oZXhwb3J0cy5nZXRTbGlkZUluZGV4Rm9yTXVsdGlwbGVJdGVtcz1nZXRTbGlkZUluZGV4Rm9yTXVsdGlwbGVJdGVtcyxmdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PTApO2U9KGU9dm9pZCAwPT09ZT8wOmUpKzE7cmV0dXJuIGU8MT9lPXQ6dDxlJiYoZT0xKSx7aXRlbTplLGl0ZW1zQ291bnQ6dH19KSxnZXRTbGlkZUl0ZW1JbmZvPShleHBvcnRzLmdldFNsaWRlSW5mbz1nZXRTbGlkZUluZm8sZnVuY3Rpb24oZSl7dmFyIGU9ZXx8e30sdD1lLml0ZW1zSW5TbGlkZSxpPWUuYWN0aXZlSW5kZXgsbz1lLmluZmluaXRlLGw9ZS5pdGVtc0NvdW50O3JldHVybiBlLmlzU3RhZ2VDb250ZW50UGFydGlhbD97aXNQcmV2U2xpZGVEaXNhYmxlZDohMCxpc05leHRTbGlkZURpc2FibGVkOiEwfTp7aXNQcmV2U2xpZGVEaXNhYmxlZDohMT09PW8mJjA9PT1pLGlzTmV4dFNsaWRlRGlzYWJsZWQ6ITE9PT1vJiZsLXQ8PWl9fSk7ZXhwb3J0cy5nZXRTbGlkZUl0ZW1JbmZvPWdldFNsaWRlSXRlbUluZm87IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5zaG91bGRDYW5jZWxBdXRvUGxheU9uSG92ZXI9ZXhwb3J0cy5zaG91bGRDYW5jZWxBdXRvUGxheU9uQWN0aW9uPWV4cG9ydHMuZ2V0SXRlbUluZGV4Rm9yRG90TmF2aWdhdGlvbj1leHBvcnRzLmNoZWNrSXNUaGVMYXN0RG90SW5kZXg9ZXhwb3J0cy5nZXREb3RzTmF2aWdhdGlvbkxlbmd0aD1leHBvcnRzLmhhc0RvdEZvckVhY2hTbGlkZT1leHBvcnRzLmlzU3RyYXRlZ3k9ZXhwb3J0cy5zaG91bGREaXNhYmxlQnV0dG9ucz1leHBvcnRzLnNob3VsZERpc2FibGVEb3RzPWV4cG9ydHMuc2hvdWxkRGlzYWJsZUNvbnRyb2xzPXZvaWQgMDt2YXIgdHlwZXNfMT1yZXF1aXJlKFwiLi4vdHlwZXNcIik7ZnVuY3Rpb24gc2hvdWxkRGlzYWJsZUNvbnRyb2xzKHQsbyl7dmFyIHQ9KHR8fHt9KS5jb250cm9sc1N0cmF0ZWd5LG89b3x8e30sZT1vLml0ZW1zSW5TbGlkZSxzPW8uaXRlbXNDb3VudCxvPW8uYXV0b1dpZHRoO2lmKCgwLGV4cG9ydHMuaXNTdHJhdGVneSkodCx0eXBlc18xLkNvbnRyb2xzU3RyYXRlZ3kuUkVTUE9OU0lWRSkpcmV0dXJuIW8mJmU9PT1zfWZ1bmN0aW9uIHNob3VsZERpc2FibGVEb3RzKHQsbyl7cmV0dXJuIHQuZGlzYWJsZURvdHNDb250cm9sc3x8c2hvdWxkRGlzYWJsZUNvbnRyb2xzKHQsbyl9ZnVuY3Rpb24gc2hvdWxkRGlzYWJsZUJ1dHRvbnModCxvKXtyZXR1cm4gdC5kaXNhYmxlQnV0dG9uc0NvbnRyb2xzfHwhdC5pbmZpbml0ZSYmc2hvdWxkRGlzYWJsZUNvbnRyb2xzKHQsbyl9ZXhwb3J0cy5zaG91bGREaXNhYmxlQ29udHJvbHM9c2hvdWxkRGlzYWJsZUNvbnRyb2xzLGV4cG9ydHMuc2hvdWxkRGlzYWJsZURvdHM9c2hvdWxkRGlzYWJsZURvdHMsZXhwb3J0cy5zaG91bGREaXNhYmxlQnV0dG9ucz1zaG91bGREaXNhYmxlQnV0dG9uczt2YXIgaXNTdHJhdGVneT1mdW5jdGlvbih0LG8pe3JldHVybiB2b2lkIDA9PT10JiYodD1cIlwiKSx2b2lkIDA9PT1vJiYobz1cIlwiKSxCb29sZWFuKHQmJnQuaW5jbHVkZXMobykpfSxoYXNEb3RGb3JFYWNoU2xpZGU9KGV4cG9ydHMuaXNTdHJhdGVneT1pc1N0cmF0ZWd5LGZ1bmN0aW9uKHQsbyl7cmV0dXJuIHR8fCgwLGV4cG9ydHMuaXNTdHJhdGVneSkobyx0eXBlc18xLkNvbnRyb2xzU3RyYXRlZ3kuQUxURVJOQVRFKX0pLGdldERvdHNOYXZpZ2F0aW9uTGVuZ3RoPShleHBvcnRzLmhhc0RvdEZvckVhY2hTbGlkZT1oYXNEb3RGb3JFYWNoU2xpZGUsZnVuY3Rpb24odCxvLGUpe3JldHVybiB2b2lkIDA9PT10JiYodD0wKSx2b2lkIDA9PT1vJiYobz0xKSwoZT12b2lkIDAhPT1lJiZlKT90OjAhPT1OdW1iZXIobykmJk1hdGguY2VpbCh0L28pfHwwfSksY2hlY2tJc1RoZUxhc3REb3RJbmRleD0oZXhwb3J0cy5nZXREb3RzTmF2aWdhdGlvbkxlbmd0aD1nZXREb3RzTmF2aWdhdGlvbkxlbmd0aCxmdW5jdGlvbih0LG8sZSl7cmV0dXJuIW8mJnQ9PT1lLTF9KSxnZXRJdGVtSW5kZXhGb3JEb3ROYXZpZ2F0aW9uPShleHBvcnRzLmNoZWNrSXNUaGVMYXN0RG90SW5kZXg9Y2hlY2tJc1RoZUxhc3REb3RJbmRleCxmdW5jdGlvbih0LG8sZSxzKXtyZXR1cm4obz9lLXM6dCpzKXx8MH0pLHNob3VsZENhbmNlbEF1dG9QbGF5T25BY3Rpb249KGV4cG9ydHMuZ2V0SXRlbUluZGV4Rm9yRG90TmF2aWdhdGlvbj1nZXRJdGVtSW5kZXhGb3JEb3ROYXZpZ2F0aW9uLGZ1bmN0aW9uKHQpe3JldHVybih0PXZvaWQgMD09PXQ/XCJcIjp0KT09PXR5cGVzXzEuQXV0b1BsYXlTdHJhdGVneS5BQ1RJT058fHQ9PT10eXBlc18xLkF1dG9QbGF5U3RyYXRlZ3kuQUxMfSksc2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkhvdmVyPShleHBvcnRzLnNob3VsZENhbmNlbEF1dG9QbGF5T25BY3Rpb249c2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkFjdGlvbixmdW5jdGlvbih0KXtyZXR1cm4odD12b2lkIDA9PT10P1wiXCI6dCk9PT10eXBlc18xLkF1dG9QbGF5U3RyYXRlZ3kuREVGQVVMVHx8dD09PXR5cGVzXzEuQXV0b1BsYXlTdHJhdGVneS5BTEx9KTtleHBvcnRzLnNob3VsZENhbmNlbEF1dG9QbGF5T25Ib3Zlcj1zaG91bGRDYW5jZWxBdXRvUGxheU9uSG92ZXI7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9fY3JlYXRlQmluZGluZz1PYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUscix0LG8pe3ZvaWQgMD09PW8mJihvPXQpO3ZhciBwPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KTtwJiYoXCJnZXRcImluIHA/ci5fX2VzTW9kdWxlOiFwLndyaXRhYmxlJiYhcC5jb25maWd1cmFibGUpfHwocD17ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gclt0XX19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLHApfTpmdW5jdGlvbihlLHIsdCxvKXtlW289dm9pZCAwPT09bz90Om9dPXJbdF19LF9fZXhwb3J0U3Rhcj1mdW5jdGlvbihlLHIpe2Zvcih2YXIgdCBpbiBlKVwiZGVmYXVsdFwiPT09dHx8T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsdCl8fF9fY3JlYXRlQmluZGluZyhyLGUsdCl9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jb21tb25cIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2VsZW1lbnRzXCIpLGV4cG9ydHMpLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jbGFzc25hbWVzXCIpLGV4cG9ydHMpLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90aW1lcnNcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL21hdGhcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2RlYnVnXCIpLGV4cG9ydHMpLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9yZW5kZXJcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NvbnRyb2xzXCIpLGV4cG9ydHMpLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9tYXBwZXJzXCIpLGV4cG9ydHMpOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2ltcG9ydERlZmF1bHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fSxyZWFjdF8xPShPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLlNsaWRlSW5mbz12b2lkIDAsX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSkpLHR5cGVzXzE9cmVxdWlyZShcIi4uL3R5cGVzXCIpLHV0aWxzXzE9cmVxdWlyZShcIi4uL3V0aWxzXCIpLFNsaWRlSW5mbz1mdW5jdGlvbihlKXt2YXIgdD1lLmFjdGl2ZUluZGV4LHM9ZS5pdGVtc0NvdW50LGU9ZS5yZW5kZXJTbGlkZUluZm8sdD0oMCx1dGlsc18xLmdldFNsaWRlSW5mbykodCxzKS5pdGVtO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGU/cmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5TTElERV9JTkZPfSxlKHtpdGVtOnQsaXRlbXNDb3VudDpzfSkpOihlPSgwLHV0aWxzXzEuY29uY2F0Q2xhc3NuYW1lcykodHlwZXNfMS5DbGFzc25hbWVzLlNMSURFX0lORk9fSVRFTSx0eXBlc18xLk1vZGlmaWVycy5TRVBBUkFUT1IpLHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuU0xJREVfSU5GT30scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuU0xJREVfSU5GT19JVEVNfSx0KSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOmV9LFwiL1wiKSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5TTElERV9JTkZPX0lURU19LHMpKSl9O2V4cG9ydHMuU2xpZGVJbmZvPVNsaWRlSW5mbzsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX19pbXBvcnREZWZhdWx0PWZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX0scmVhY3RfMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5TdGFnZUl0ZW09dm9pZCAwLF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpKSxTdGFnZUl0ZW09ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pdGVtLHI9ZS5jbGFzc05hbWUsZT1lLnN0eWxlcztyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLHtzdHlsZTplLGNsYXNzTmFtZTpyfSx0KX07ZXhwb3J0cy5TdGFnZUl0ZW09U3RhZ2VJdGVtOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2ltcG9ydERlZmF1bHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fSxyZWFjdF8xPShPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLkRvdHNOYXZpZ2F0aW9uPXZvaWQgMCxfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKSksdHlwZXNfMT1yZXF1aXJlKFwiLi4vdHlwZXNcIiksdXRpbHNfMT1yZXF1aXJlKFwiLi4vdXRpbHNcIiksRG90c05hdmlnYXRpb249ZnVuY3Rpb24oZSl7dmFyIGE9ZS5zdGF0ZSxuPWUub25DbGljayxyPWUub25Nb3VzZUVudGVyLGw9ZS5vbk1vdXNlTGVhdmUsdD1lLmNvbnRyb2xzU3RyYXRlZ3ksdT1lLnJlbmRlckRvdHNJdGVtLGM9YS5pdGVtc0NvdW50LF89YS5pdGVtc0luU2xpZGUsZD1hLmluZmluaXRlLGU9YS5hdXRvV2lkdGgsbT1hLmFjdGl2ZUluZGV4LHY9KDAsdXRpbHNfMS5nZXRTbGlkZUl0ZW1JbmZvKShhKS5pc05leHRTbGlkZURpc2FibGVkLGY9KDAsdXRpbHNfMS5oYXNEb3RGb3JFYWNoU2xpZGUpKGUsdCksRD0oMCx1dGlsc18xLmdldERvdHNOYXZpZ2F0aW9uTGVuZ3RoKShjLF8sZik7cmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidWxcIix7Y2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5ET1RTfSxBcnJheS5mcm9tKHtsZW5ndGg6Y30pLm1hcChmdW5jdGlvbihlLHQpe3ZhciBpLHMsbztpZih0PEQpcmV0dXJuIHM9KDAsdXRpbHNfMS5jaGVja0lzVGhlTGFzdERvdEluZGV4KSh0LEJvb2xlYW4oZCksRCksaT0oMCx1dGlsc18xLmdldEl0ZW1JbmRleEZvckRvdE5hdmlnYXRpb24pKHQscyxjLF8pLHM9KDAsdXRpbHNfMS5nZXRBY3RpdmVTbGlkZUluZGV4KSh2LGEpLGYmJigocz1tKTwwP3M9Yy0xOmM8PW0mJihzPTApLGk9dCkscz1zPT09dD90eXBlc18xLk1vZGlmaWVycy5BQ1RJVkU6XCJcIixvPXU/dHlwZXNfMS5Nb2RpZmllcnMuQ1VTVE9NOlwiXCIsbz0oMCx1dGlsc18xLmNvbmNhdENsYXNzbmFtZXMpKHR5cGVzXzEuQ2xhc3NuYW1lcy5ET1RTX0lURU0scyxvKSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIse2tleTpcImRvdC1pdGVtLVwiLmNvbmNhdCh0KSxvbk1vdXNlRW50ZXI6cixvbk1vdXNlTGVhdmU6bCxvbkNsaWNrOmZ1bmN0aW9uKCl7cmV0dXJuIG4oaSl9LGNsYXNzTmFtZTpvfSx1JiZ1KHtpc0FjdGl2ZTpCb29sZWFuKHMpLGFjdGl2ZUluZGV4OnR9KSl9KSl9O2V4cG9ydHMuRG90c05hdmlnYXRpb249RG90c05hdmlnYXRpb247IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9faW1wb3J0RGVmYXVsdD1mdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19LHJlYWN0XzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuUGxheVBhdXNlQnV0dG9uPXZvaWQgMCxfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKSksdHlwZXNfMT1yZXF1aXJlKFwiLi4vdHlwZXNcIiksdXRpbHNfMT1yZXF1aXJlKFwiLi4vdXRpbHNcIiksUGxheVBhdXNlQnV0dG9uPWZ1bmN0aW9uKGUpe3ZhciB0PWUuaXNQbGF5aW5nLGE9ZS5vbkNsaWNrLGU9ZS5yZW5kZXJQbGF5UGF1c2VCdXR0b247cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZT9yZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLlBMQVlfQlROLG9uQ2xpY2s6YX0sZSh7aXNQbGF5aW5nOnR9KSk6KGU9dD90eXBlc18xLk1vZGlmaWVycy5QQVVTRTpcIlwiLHQ9KDAsdXRpbHNfMS5jb25jYXRDbGFzc25hbWVzKSh0eXBlc18xLkNsYXNzbmFtZXMuUExBWV9CVE5fSVRFTSxlKSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLlBMQVlfQlROfSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLlBMQVlfQlROX1dSQVBQRVJ9LHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse29uQ2xpY2s6YSxjbGFzc05hbWU6dH0pKSkpfTtleHBvcnRzLlBsYXlQYXVzZUJ1dHRvbj1QbGF5UGF1c2VCdXR0b247IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9faW1wb3J0RGVmYXVsdD1mdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19LHJlYWN0XzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuUHJldk5leHRCdXR0b249dm9pZCAwLF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpKSx0eXBlc18xPXJlcXVpcmUoXCIuLi90eXBlc1wiKSx1dGlsc18xPXJlcXVpcmUoXCIuLi91dGlsc1wiKSxQcmV2TmV4dEJ1dHRvbj1mdW5jdGlvbihlKXt2YXIgdCxzPWUubmFtZSxhPWUuaXNEaXNhYmxlZCxyPWUub25DbGljayxuPWUucmVuZGVyUHJldkJ1dHRvbixlPWUucmVuZGVyTmV4dEJ1dHRvbjtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP3JlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX1BSRVYsb25DbGljazpyfSxuKHtpc0Rpc2FibGVkOmF9KSk6XCJmdW5jdGlvblwiPT10eXBlb2YgZT9yZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLkJVVFRPTl9ORVhULG9uQ2xpY2s6cn0sZSh7aXNEaXNhYmxlZDphfSkpOihlPShuPVwicHJldlwiPT09cyk/XCI8XCI6XCI+XCIscz1uP3R5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fUFJFVjp0eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX05FWFQsdD1uP3R5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fUFJFVl9XUkFQUEVSOnR5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fTkVYVF9XUkFQUEVSLG49bj90eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX1BSRVZfSVRFTTp0eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX05FWFRfSVRFTSxhPWE/dHlwZXNfMS5Nb2RpZmllcnMuSU5BQ1RJVkU6XCJcIixuPSgwLHV0aWxzXzEuY29uY2F0Q2xhc3NuYW1lcykobixhKSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6c30scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnR9LHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicFwiLHtjbGFzc05hbWU6bixvbkNsaWNrOmZ1bmN0aW9uKGUpe3JldHVybiByKGUpfX0scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse1wiZGF0YS1hcmVhXCI6ZX0pKSkpKX07ZXhwb3J0cy5QcmV2TmV4dEJ1dHRvbj1QcmV2TmV4dEJ1dHRvbjsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLlByZXZOZXh0QnV0dG9uPWV4cG9ydHMuUGxheVBhdXNlQnV0dG9uPWV4cG9ydHMuRG90c05hdmlnYXRpb249ZXhwb3J0cy5TdGFnZUl0ZW09ZXhwb3J0cy5TbGlkZUluZm89dm9pZCAwO3ZhciBTbGlkZUluZm9fMT1yZXF1aXJlKFwiLi9TbGlkZUluZm9cIiksU3RhZ2VJdGVtXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiU2xpZGVJbmZvXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFNsaWRlSW5mb18xLlNsaWRlSW5mb319KSxyZXF1aXJlKFwiLi9TdGFnZUl0ZW1cIikpLERvdHNOYXZpZ2F0aW9uXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiU3RhZ2VJdGVtXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFN0YWdlSXRlbV8xLlN0YWdlSXRlbX19KSxyZXF1aXJlKFwiLi9Eb3RzTmF2aWdhdGlvblwiKSksUGxheVBhdXNlQnV0dG9uXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiRG90c05hdmlnYXRpb25cIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gRG90c05hdmlnYXRpb25fMS5Eb3RzTmF2aWdhdGlvbn19KSxyZXF1aXJlKFwiLi9QbGF5UGF1c2VCdXR0b25cIikpLFByZXZOZXh0QnV0dG9uXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiUGxheVBhdXNlQnV0dG9uXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFBsYXlQYXVzZUJ1dHRvbl8xLlBsYXlQYXVzZUJ1dHRvbn19KSxyZXF1aXJlKFwiLi9QcmV2TmV4dEJ1dHRvblwiKSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJQcmV2TmV4dEJ1dHRvblwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBQcmV2TmV4dEJ1dHRvbl8xLlByZXZOZXh0QnV0dG9ufX0pOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2V4dGVuZHM9ZnVuY3Rpb24oKXt2YXIgbj1mdW5jdGlvbih0LGUpe3JldHVybihuPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8KHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheT9mdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9OmZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBpIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSkmJih0W2ldPWVbaV0pfSkpKHQsZSl9O3JldHVybiBmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJm51bGwhPT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhlKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIGkoKXt0aGlzLmNvbnN0cnVjdG9yPXR9bih0LGUpLHQucHJvdG90eXBlPW51bGw9PT1lP09iamVjdC5jcmVhdGUoZSk6KGkucHJvdG90eXBlPWUucHJvdG90eXBlLG5ldyBpKX19KCksX19hc3NpZ249ZnVuY3Rpb24oKXtyZXR1cm4oX19hc3NpZ249T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlLGk9MSxuPWFyZ3VtZW50cy5sZW5ndGg7aTxuO2krKylmb3IodmFyIG8gaW4gZT1hcmd1bWVudHNbaV0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxfX2NyZWF0ZUJpbmRpbmc9T2JqZWN0LmNyZWF0ZT9mdW5jdGlvbih0LGUsaSxuKXt2b2lkIDA9PT1uJiYobj1pKTt2YXIgbz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsaSk7byYmKFwiZ2V0XCJpbiBvP2UuX19lc01vZHVsZTohby53cml0YWJsZSYmIW8uY29uZmlndXJhYmxlKXx8KG89e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGVbaV19fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbixvKX06ZnVuY3Rpb24odCxlLGksbil7dFtuPXZvaWQgMD09PW4/aTpuXT1lW2ldfSxfX3NldE1vZHVsZURlZmF1bHQ9T2JqZWN0LmNyZWF0ZT9mdW5jdGlvbih0LGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KX06ZnVuY3Rpb24odCxlKXt0LmRlZmF1bHQ9ZX0sX19pbXBvcnRTdGFyPWZ1bmN0aW9uKHQpe2lmKHQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgZT17fTtpZihudWxsIT10KWZvcih2YXIgaSBpbiB0KVwiZGVmYXVsdFwiIT09aSYmT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsaSkmJl9fY3JlYXRlQmluZGluZyhlLHQsaSk7cmV0dXJuIF9fc2V0TW9kdWxlRGVmYXVsdChlLHQpLGV9LF9fZXhwb3J0U3Rhcj1mdW5jdGlvbih0LGUpe2Zvcih2YXIgaSBpbiB0KVwiZGVmYXVsdFwiPT09aXx8T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSl8fF9fY3JlYXRlQmluZGluZyhlLHQsaSl9LF9fYXdhaXRlcj1mdW5jdGlvbih0LGEscixsKXtyZXR1cm4gbmV3KHI9cnx8UHJvbWlzZSkoZnVuY3Rpb24oaSxlKXtmdW5jdGlvbiBuKHQpe3RyeXtzKGwubmV4dCh0KSl9Y2F0Y2godCl7ZSh0KX19ZnVuY3Rpb24gbyh0KXt0cnl7cyhsLnRocm93KHQpKX1jYXRjaCh0KXtlKHQpfX1mdW5jdGlvbiBzKHQpe3ZhciBlO3QuZG9uZT9pKHQudmFsdWUpOigoZT10LnZhbHVlKWluc3RhbmNlb2Ygcj9lOm5ldyByKGZ1bmN0aW9uKHQpe3QoZSl9KSkudGhlbihuLG8pfXMoKGw9bC5hcHBseSh0LGF8fFtdKSkubmV4dCgpKX0pfSxfX2dlbmVyYXRvcj1mdW5jdGlvbihuLG8pe3ZhciBzLGEscixsPXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJnJbMF0pdGhyb3cgclsxXTtyZXR1cm4gclsxXX0sdHJ5czpbXSxvcHM6W119LHQ9e25leHQ6ZSgwKSx0aHJvdzplKDEpLHJldHVybjplKDIpfTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJih0W1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pLHQ7ZnVuY3Rpb24gZShpKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9W2ksdF07aWYocyl0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtmb3IoO2w7KXRyeXtpZihzPTEsYSYmKHI9MiZlWzBdP2EucmV0dXJuOmVbMF0/YS50aHJvd3x8KChyPWEucmV0dXJuKSYmci5jYWxsKGEpLDApOmEubmV4dCkmJiEocj1yLmNhbGwoYSxlWzFdKSkuZG9uZSlyZXR1cm4gcjtzd2l0Y2goYT0wLChlPXI/WzImZVswXSxyLnZhbHVlXTplKVswXSl7Y2FzZSAwOmNhc2UgMTpyPWU7YnJlYWs7Y2FzZSA0OnJldHVybiBsLmxhYmVsKysse3ZhbHVlOmVbMV0sZG9uZTohMX07Y2FzZSA1OmwubGFiZWwrKyxhPWVbMV0sZT1bMF07Y29udGludWU7Y2FzZSA3OmU9bC5vcHMucG9wKCksbC50cnlzLnBvcCgpO2NvbnRpbnVlO2RlZmF1bHQ6aWYoIShyPTA8KHI9bC50cnlzKS5sZW5ndGgmJnJbci5sZW5ndGgtMV0pJiYoNj09PWVbMF18fDI9PT1lWzBdKSl7bD0wO2NvbnRpbnVlfWlmKDM9PT1lWzBdJiYoIXJ8fGVbMV0+clswXSYmZVsxXTxyWzNdKSlsLmxhYmVsPWVbMV07ZWxzZSBpZig2PT09ZVswXSYmbC5sYWJlbDxyWzFdKWwubGFiZWw9clsxXSxyPWU7ZWxzZXtpZighKHImJmwubGFiZWw8clsyXSkpe3JbMl0mJmwub3BzLnBvcCgpLGwudHJ5cy5wb3AoKTtjb250aW51ZX1sLmxhYmVsPXJbMl0sbC5vcHMucHVzaChlKX19ZT1vLmNhbGwobixsKX1jYXRjaCh0KXtlPVs2LHRdLGE9MH1maW5hbGx5e3M9cj0wfWlmKDUmZVswXSl0aHJvdyBlWzFdO3JldHVybnt2YWx1ZTplWzBdP2VbMV06dm9pZCAwLGRvbmU6ITB9fX19LF9faW1wb3J0RGVmYXVsdD1mdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19LHJlYWN0XzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpKSx2YW5pbGxhX3N3aXBlXzE9X19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2YW5pbGxhLXN3aXBlXCIpKSxkZWZhdWx0UHJvcHNfMT1yZXF1aXJlKFwiLi9kZWZhdWx0UHJvcHNcIiksVmlld3M9X19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3ZpZXdzXCIpKSxVdGlscz1fX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdXRpbHNcIikpLHR5cGVzXzE9cmVxdWlyZShcIi4vdHlwZXNcIiksQWxpY2VDYXJvdXNlbD0oX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3R5cGVzXCIpLGV4cG9ydHMpLGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQodCl7dmFyIHM9ZS5jYWxsKHRoaXMsdCl8fHRoaXM7cmV0dXJuIHMuc3dpcGVMaXN0ZW5lcj1udWxsLHMuX2hhbmRsZUtleWJvYXJkRXZlbnRzPWZ1bmN0aW9uKHQpe3N3aXRjaCh0LmNvZGUpe2Nhc2VcIlNwYWNlXCI6cmV0dXJuIHMucHJvcHMuYXV0b1BsYXkmJnMuX2hhbmRsZVBsYXlQYXVzZVRvZ2dsZSgpO2Nhc2VcIkFycm93TGVmdFwiOnJldHVybiBzLnNsaWRlUHJldih0KTtjYXNlXCJBcnJvd1JpZ2h0XCI6cmV0dXJuIHMuc2xpZGVOZXh0KHQpfX0scy5faGFuZGxlQmVmb3JlU2xpZGVFbmQ9ZnVuY3Rpb24obyl7cmV0dXJuIF9fYXdhaXRlcihzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZSxpLG47cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsZnVuY3Rpb24odCl7c3dpdGNoKHQubGFiZWwpe2Nhc2UgMDpyZXR1cm4oaT10aGlzLnN0YXRlLG49aS5hY3RpdmVJbmRleCxlPWkuaXRlbXNDb3VudCxpPWkuZmFkZW91dEFuaW1hdGlvblByb2Nlc3NpbmcsVXRpbHMuc2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4KG4sZSkpPyhuPVV0aWxzLmdldFVwZGF0ZVNsaWRlUG9zaXRpb25JbmRleChuLGUpLFs0LHRoaXMuX2hhbmRsZVVwZGF0ZVNsaWRlUG9zaXRpb24obildKTpbMywyXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLFszLDRdO2Nhc2UgMjpyZXR1cm4gaT9bNCx0aGlzLnNldFN0YXRlKHtmYWRlb3V0QW5pbWF0aW9uSW5kZXg6bnVsbCxmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb246bnVsbCxmYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZzohMX0pXTpbMyw0XTtjYXNlIDM6dC5zZW50KCksdC5sYWJlbD00O2Nhc2UgNDpyZXR1cm4gdGhpcy5faGFuZGxlU2xpZGVDaGFuZ2VkKG8pLFsyXX19KX0pfSxzLl9oYW5kbGVNb3VzZUVudGVyPWZ1bmN0aW9uKCl7dmFyIHQ9cy5wcm9wcy5hdXRvUGxheVN0cmF0ZWd5O1V0aWxzLnNob3VsZENhbmNlbEF1dG9QbGF5T25Ib3Zlcih0KSYmcy5zdGF0ZS5pc0F1dG9QbGF5aW5nJiYocy5pc0hvdmVyZWQ9ITAscy5faGFuZGxlUGF1c2UoKSl9LHMuX2hhbmRsZU1vdXNlTGVhdmU9ZnVuY3Rpb24oKXtzLnN0YXRlLmlzQXV0b1BsYXlpbmcmJihzLmlzSG92ZXJlZD0hMSxzLl9oYW5kbGVQbGF5KCkpfSxzLl9oYW5kbGVQYXVzZT1mdW5jdGlvbigpe3MuX2NsZWFyQXV0b1BsYXlUaW1lb3V0KCl9LHMuX2hhbmRsZVBsYXlQYXVzZVRvZ2dsZT1mdW5jdGlvbigpe3JldHVybiBfX2F3YWl0ZXIocyx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7dmFyIGU7cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsZnVuY3Rpb24odCl7c3dpdGNoKHQubGFiZWwpe2Nhc2UgMDpyZXR1cm4gZT10aGlzLnN0YXRlLmlzQXV0b1BsYXlpbmcsdGhpcy5oYXNVc2VyQWN0aW9uPSEwLFs0LHRoaXMuc2V0U3RhdGUoe2lzQXV0b1BsYXlpbmc6IWUsaXNBdXRvUGxheUNhbmNlbGVkT25BY3Rpb246ITB9KV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSxlP3RoaXMuX2hhbmRsZVBhdXNlKCk6dGhpcy5faGFuZGxlUGxheSgpLFsyXX19KX0pfSxzLl9zZXRSb290Q29tcG9uZW50UmVmPWZ1bmN0aW9uKHQpe3JldHVybiBzLnJvb3RFbGVtZW50PXR9LHMuX3NldFN0YWdlQ29tcG9uZW50UmVmPWZ1bmN0aW9uKHQpe3JldHVybiBzLnN0YWdlQ29tcG9uZW50PXR9LHMuX3JlbmRlclN0YWdlSXRlbT1mdW5jdGlvbih0LGUpe3ZhciBpPVV0aWxzLmdldFJlbmRlclN0YWdlSXRlbVN0eWxlcyhlLHMuc3RhdGUpLG49VXRpbHMuZ2V0UmVuZGVyU3RhZ2VJdGVtQ2xhc3NlcyhlLHMuc3RhdGUpO3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5TdGFnZUl0ZW0se3N0eWxlczppLGNsYXNzTmFtZTpuLGtleTpcInN0YWdlLWl0ZW0tXCIuY29uY2F0KGUpLGl0ZW06dH0pfSxzLl9yZW5kZXJTbGlkZUluZm89ZnVuY3Rpb24oKXt2YXIgdD1zLnByb3BzLnJlbmRlclNsaWRlSW5mbyxlPXMuc3RhdGUsaT1lLmFjdGl2ZUluZGV4LGU9ZS5pdGVtc0NvdW50O3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5TbGlkZUluZm8se2l0ZW1zQ291bnQ6ZSxhY3RpdmVJbmRleDppLHJlbmRlclNsaWRlSW5mbzp0fSl9LHMuc3RhdGU9VXRpbHMuY2FsY3VsYXRlSW5pdGlhbFN0YXRlKHQsbnVsbCkscy5pc0hvdmVyZWQ9ITEscy5pc0FuaW1hdGlvbkRpc2FibGVkPSExLHMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZD0hMSxzLmNhbmNlbFRvdWNoQW5pbWF0aW9ucz0hMSxzLmhhc1VzZXJBY3Rpb249ITEscy5yb290RWxlbWVudD1udWxsLHMucm9vdENvbXBvbmVudERpbWVuc2lvbnM9e30scy5zdGFnZUNvbXBvbmVudD1udWxsLHMuc3RhcnRUb3VjaG1vdmVQb3NpdGlvbj12b2lkIDAscy5zbGlkZVRvPXMuc2xpZGVUby5iaW5kKHMpLHMuc2xpZGVQcmV2PXMuc2xpZGVQcmV2LmJpbmQocykscy5zbGlkZU5leHQ9cy5zbGlkZU5leHQuYmluZChzKSxzLl9oYW5kbGVUb3VjaG1vdmU9cy5faGFuZGxlVG91Y2htb3ZlLmJpbmQocykscy5faGFuZGxlVG91Y2hlbmQ9cy5faGFuZGxlVG91Y2hlbmQuYmluZChzKSxzLl9oYW5kbGVEb3RDbGljaz1zLl9oYW5kbGVEb3RDbGljay5iaW5kKHMpLHMuX2hhbmRsZVJlc2l6ZT1zLl9oYW5kbGVSZXNpemUuYmluZChzKSx0PVV0aWxzLmRlYm91bmNlKHMuX2hhbmRsZVJlc2l6ZSwxMDApLHMuX2hhbmRsZVJlc2l6ZURlYm91bmNlZD10WzBdLHMuX2NhbmNlbFJlc2l6ZURlYm91bmNlZD10WzFdLHN9cmV0dXJuIF9fZXh0ZW5kcyh0LGUpLHQucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50PWZ1bmN0aW9uKCl7cmV0dXJuIF9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybls0LHRoaXMuX3NldEluaXRpYWxTdGF0ZSgpXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCksdGhpcy5fc2V0dXBTd2lwZUhhbmRsZXJzKCksdGhpcy5wcm9wcy5hdXRvUGxheSYmdGhpcy5faGFuZGxlUGxheSgpLFsyXX19KX0pfSx0LnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLnByb3BzLG49aS5hY3RpdmVJbmRleCxvPWkuYW5pbWF0aW9uRHVyYXRpb24scz1pLmF1dG9XaWR0aCxhPWkuY2hpbGRyZW4scj1pLmluZmluaXRlLGw9aS5pdGVtcyx1PWkucGFkZGluZ0xlZnQsZD1pLnBhZGRpbmdSaWdodCxjPWkucmVzcG9uc2l2ZSxoPWkuc3dpcGVFeHRyYVBhZGRpbmcscD1pLm1vdXNlVHJhY2tpbmcsXz1pLnN3aXBlRGVsdGEsbT1pLnRvdWNoVHJhY2tpbmcsaT1pLnRvdWNoTW92ZURlZmF1bHRFdmVudHM7YSYmdC5jaGlsZHJlbiE9PWE/KGE9ZS5hY3RpdmVJbmRleCxlPV9fYXNzaWduKF9fYXNzaWduKHt9LHRoaXMucHJvcHMpLHthY3RpdmVJbmRleDphfSksdGhpcy5fdXBkYXRlQ29tcG9uZW50KGUpKTp0LmF1dG9XaWR0aCE9PXN8fHQuaW5maW5pdGUhPT1yfHx0Lml0ZW1zIT09bHx8dC5wYWRkaW5nTGVmdCE9PXV8fHQucGFkZGluZ1JpZ2h0IT09ZHx8dC5yZXNwb25zaXZlIT09Y3x8dC5zd2lwZUV4dHJhUGFkZGluZyE9PWg/dGhpcy5fdXBkYXRlQ29tcG9uZW50KCk6KHQuYW5pbWF0aW9uRHVyYXRpb24hPT1vJiZ0aGlzLnNldFN0YXRlKHthbmltYXRpb25EdXJhdGlvbjpvfSksdC5hY3RpdmVJbmRleCE9PW4mJnRoaXMuc2xpZGVUbyhuLHR5cGVzXzEuRXZlbnRUeXBlLlVQREFURSkpLHQuc3dpcGVEZWx0YT09PV8mJnQubW91c2VUcmFja2luZz09PXAmJnQudG91Y2hUcmFja2luZz09PW0mJnQudG91Y2hNb3ZlRGVmYXVsdEV2ZW50cz09PWl8fHRoaXMuX3VwZGF0ZVN3aXBlUHJvcHMoKSx0aGlzLnByb3BzLmtleWJvYXJkTmF2aWdhdGlvbiE9PXQua2V5Ym9hcmROYXZpZ2F0aW9uJiZ0aGlzLl91cGRhdGVFdmVudExpc3RlbmVycygpfSx0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3RoaXMuX2NhbmNlbFJlc2l6ZURlYm91bmNlZCgpLHRoaXMuX2NhbmNlbFRpbWVvdXRBbmltYXRpb25zKCksdGhpcy5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiZXZlbnRPYmplY3RcIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5zdGF0ZSxlPXQuaXRlbXNJblNsaWRlLHQ9dC5hY3RpdmVJbmRleCxpPVV0aWxzLmdldFNsaWRlSXRlbUluZm8odGhpcy5zdGF0ZSksbj1pLmlzTmV4dFNsaWRlRGlzYWJsZWQsaT1pLmlzUHJldlNsaWRlRGlzYWJsZWQ7cmV0dXJue2l0ZW06dCxzbGlkZTpVdGlscy5nZXRBY3RpdmVTbGlkZUluZGV4KG4sdGhpcy5zdGF0ZSksaXRlbXNJblNsaWRlOmUsaXNOZXh0U2xpZGVEaXNhYmxlZDpuLGlzUHJldlNsaWRlRGlzYWJsZWQ6aSx0eXBlOnR5cGVzXzEuRXZlbnRUeXBlLkFDVElPTn19LGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiaXNGYWRlb3V0QW5pbWF0aW9uQWxsb3dlZFwiLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnN0YXRlLml0ZW1zSW5TbGlkZSxlPXRoaXMucHJvcHMsaT1lLmFuaW1hdGlvblR5cGUsbj1lLnBhZGRpbmdMZWZ0LG89ZS5wYWRkaW5nUmlnaHQsZT1lLmF1dG9XaWR0aDtyZXR1cm4gMT09PXQmJmk9PT10eXBlc18xLkFuaW1hdGlvblR5cGUuRkFERU9VVCYmIShufHxvfHxlKX0sZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJ0b3VjaG1vdmVQb3NpdGlvblwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwIT09dGhpcy5zdGFydFRvdWNobW92ZVBvc2l0aW9uP3RoaXMuc3RhcnRUb3VjaG1vdmVQb3NpdGlvbjp0aGlzLnN0YXRlLnRyYW5zbGF0ZTNkfSxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMH0pLHQucHJvdG90eXBlLnNsaWRlVG89ZnVuY3Rpb24odCxlKXt2YXIgaSxuLG87dm9pZCAwPT09dCYmKHQ9MCksdGhpcy5faGFuZGxlUGF1c2UoKSx0aGlzLmlzRmFkZW91dEFuaW1hdGlvbkFsbG93ZWQ/KGk9VXRpbHMuZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4KHQsdGhpcy5zdGF0ZS5pdGVtc0NvdW50KSxuPVV0aWxzLmdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbihpLHRoaXMuc3RhdGUpLG89VXRpbHMuZ2V0RmFkZW91dEFuaW1hdGlvbkluZGV4KHRoaXMuc3RhdGUpLHRoaXMuX2hhbmRsZVNsaWRlVG8oe2FjdGl2ZUluZGV4OmksZmFkZW91dEFuaW1hdGlvbkluZGV4Om8sZmFkZW91dEFuaW1hdGlvblBvc2l0aW9uOm4sZXZlbnRUeXBlOmV9KSk6dGhpcy5faGFuZGxlU2xpZGVUbyh7YWN0aXZlSW5kZXg6dCxldmVudFR5cGU6ZX0pfSx0LnByb3RvdHlwZS5zbGlkZVByZXY9ZnVuY3Rpb24odCl7dGhpcy5faGFuZGxlUGF1c2UoKSx0JiZ0LmlzVHJ1c3RlZCYmKHRoaXMuaGFzVXNlckFjdGlvbj0hMCk7dmFyIGUsaSx0PXRoaXMuc3RhdGUuYWN0aXZlSW5kZXgtMTt0aGlzLmlzRmFkZW91dEFuaW1hdGlvbkFsbG93ZWQ/KGU9LXRoaXMuc3RhdGUuc3RhZ2VXaWR0aCxpPVV0aWxzLmdldEZhZGVvdXRBbmltYXRpb25JbmRleCh0aGlzLnN0YXRlKSx0aGlzLl9oYW5kbGVTbGlkZVRvKHthY3RpdmVJbmRleDp0LGZhZGVvdXRBbmltYXRpb25JbmRleDppLGZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbjplfSkpOnRoaXMuX2hhbmRsZVNsaWRlVG8oe2FjdGl2ZUluZGV4OnR9KX0sdC5wcm90b3R5cGUuc2xpZGVOZXh0PWZ1bmN0aW9uKHQpe3RoaXMuX2hhbmRsZVBhdXNlKCksdCYmdC5pc1RydXN0ZWQmJih0aGlzLmhhc1VzZXJBY3Rpb249ITApO3ZhciBlLGksdD10aGlzLnN0YXRlLmFjdGl2ZUluZGV4KzE7dGhpcy5pc0ZhZGVvdXRBbmltYXRpb25BbGxvd2VkPyhlPXRoaXMuc3RhdGUuc3RhZ2VXaWR0aCxpPVV0aWxzLmdldEZhZGVvdXRBbmltYXRpb25JbmRleCh0aGlzLnN0YXRlKSx0aGlzLl9oYW5kbGVTbGlkZVRvKHthY3RpdmVJbmRleDp0LGZhZGVvdXRBbmltYXRpb25JbmRleDppLGZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbjplfSkpOnRoaXMuX2hhbmRsZVNsaWRlVG8oe2FjdGl2ZUluZGV4OnR9KX0sdC5wcm90b3R5cGUuX2FkZEV2ZW50TGlzdGVuZXJzPWZ1bmN0aW9uKCl7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLl9oYW5kbGVSZXNpemVEZWJvdW5jZWQpLHRoaXMucHJvcHMua2V5Ym9hcmROYXZpZ2F0aW9uJiZ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsdGhpcy5faGFuZGxlS2V5Ym9hcmRFdmVudHMpfSx0LnByb3RvdHlwZS5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnM9ZnVuY3Rpb24oKXt0aGlzLnN3aXBlTGlzdGVuZXImJnRoaXMuc3dpcGVMaXN0ZW5lci5kZXN0cm95KCksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLl9oYW5kbGVSZXNpemVEZWJvdW5jZWQpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIix0aGlzLl9oYW5kbGVLZXlib2FyZEV2ZW50cyl9LHQucHJvdG90eXBlLl91cGRhdGVFdmVudExpc3RlbmVycz1mdW5jdGlvbigpe3RoaXMucHJvcHMua2V5Ym9hcmROYXZpZ2F0aW9uP3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIix0aGlzLl9oYW5kbGVLZXlib2FyZEV2ZW50cyk6d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHRoaXMuX2hhbmRsZUtleWJvYXJkRXZlbnRzKX0sdC5wcm90b3R5cGUuX2hhbmRsZVJlc2l6ZT1mdW5jdGlvbihvKXtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3ZhciBlLGksbjtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybihpPXRoaXMucHJvcHMub25SZXNpemVFdmVudCxuPVV0aWxzLmdldEVsZW1lbnREaW1lbnNpb25zKHRoaXMucm9vdEVsZW1lbnQpLChpfHxVdGlscy5zaG91bGRIYW5kbGVSZXNpemVFdmVudCkobyx0aGlzLnJvb3RDb21wb25lbnREaW1lbnNpb25zLG4pKT8odGhpcy5fY2FuY2VsVGltZW91dEFuaW1hdGlvbnMoKSx0aGlzLnJvb3RDb21wb25lbnREaW1lbnNpb25zPW4saT10aGlzLnN0YXRlLG49aS5pdGVtc0NvdW50LGU9aS5pc0F1dG9QbGF5aW5nLGk9VXRpbHMuZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4KHRoaXMuc3RhdGUuYWN0aXZlSW5kZXgsbiksbj1VdGlscy5jYWxjdWxhdGVJbml0aWFsU3RhdGUoX19hc3NpZ24oX19hc3NpZ24oe30sdGhpcy5wcm9wcykse2FjdGl2ZUluZGV4Oml9KSx0aGlzLnN0YWdlQ29tcG9uZW50KSxpPVV0aWxzLmdldFRyYW5zbGF0ZTNkUHJvcGVydHkobi5hY3RpdmVJbmRleCxuKSxuPV9fYXNzaWduKF9fYXNzaWduKHt9LG4pLHt0cmFuc2xhdGUzZDppLGlzQXV0b1BsYXlpbmc6ZX0pLFV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246LWl9KSxbNCx0aGlzLnNldFN0YXRlKG4pXSk6WzMsMl07Y2FzZSAxOnQuc2VudCgpLHRoaXMuX2hhbmRsZVJlc2l6ZWQoKSx0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWQ9ITEsZSYmdGhpcy5faGFuZGxlUGxheSgpLHQubGFiZWw9MjtjYXNlIDI6cmV0dXJuWzJdfX0pfSl9LHQucHJvdG90eXBlLl9oYW5kbGVUb3VjaG1vdmU9ZnVuY3Rpb24odCxlKXt2YXIgaT1lLmFic1ksbj1lLmFic1gsbz1lLmRlbHRhWCxlPXRoaXMucHJvcHMuc3dpcGVEZWx0YSxzPXRoaXMuc3RhdGUsYT1zLnN3aXBlU2hpZnRWYWx1ZSxyPXMuc3dpcGVMaW1pdE1pbixsPXMuc3dpcGVMaW1pdE1heCx1PXMuaW5maW5pdGUscz1zLmZhZGVvdXRBbmltYXRpb25Qcm9jZXNzaW5nO2lmKHRoaXMuaGFzVXNlckFjdGlvbj0hMCwhKHN8fCF0aGlzLmlzVG91Y2hNb3ZlUHJvY2Vzc1N0YXJ0ZWQmJlV0aWxzLmlzVmVydGljYWxUb3VjaG1vdmVEZXRlY3RlZChuLGksZSkpKXt0aGlzLmlzVG91Y2hNb3ZlUHJvY2Vzc1N0YXJ0ZWR8fCh0aGlzLl9jYW5jZWxUaW1lb3V0QW5pbWF0aW9ucygpLHRoaXMuX3NldFRvdWNobW92ZVBvc2l0aW9uKCksdGhpcy5pc0FuaW1hdGlvbkRpc2FibGVkPSEwLHRoaXMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZD0hMCx0aGlzLl9oYW5kbGVTbGlkZUNoYW5nZSgpKTt2YXIgZD1VdGlscy5nZXRUb3VjaG1vdmVUcmFuc2xhdGVQb3NpdGlvbihvLHRoaXMudG91Y2htb3ZlUG9zaXRpb24pO2lmKCExPT09dSlyZXR1cm4gcjxkfHxkPC1sP3ZvaWQgMDp2b2lkIFV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246ZH0pO2lmKFV0aWxzLnNob3VsZFJlY2FsY3VsYXRlU3dpcGVQb3NpdGlvbihkLHIsbCkpdHJ5eyFmdW5jdGlvbiB0KCl7VXRpbHMuZ2V0SXNMZWZ0RGlyZWN0aW9uKG8pP2QrPWE6ZCs9LWE7VXRpbHMuc2hvdWxkUmVjYWxjdWxhdGVTd2lwZVBvc2l0aW9uKGQscixsKSYmdCgpfSgpfWNhdGNoKHQpe1V0aWxzLmRlYnVnKHQpfVV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246ZH0pfX0sdC5wcm90b3R5cGUuX2hhbmRsZVRvdWNoZW5kPWZ1bmN0aW9uKHQsZSl7dmFyIGksbixvLGU9ZS5kZWx0YVg7dGhpcy5fY2xlYXJUb3VjaG1vdmVQb3NpdGlvbigpLHRoaXMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZCYmKHRoaXMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZD0hMSxpPXRoaXMuc3RhdGUuYW5pbWF0aW9uRHVyYXRpb24sbj10aGlzLnByb3BzLmFuaW1hdGlvbkVhc2luZ0Z1bmN0aW9uLG89VXRpbHMuZ2V0VHJhbnNsYXRlWFByb3BlcnR5KHRoaXMuc3RhZ2VDb21wb25lbnQpLGU9VXRpbHMuZ2V0U3dpcGVUb3VjaGVuZFBvc2l0aW9uKHRoaXMuc3RhdGUsZSxvKSxVdGlscy5hbmltYXRlKHRoaXMuc3RhZ2VDb21wb25lbnQse3Bvc2l0aW9uOmUsYW5pbWF0aW9uRHVyYXRpb246aSxhbmltYXRpb25FYXNpbmdGdW5jdGlvbjpufSksdGhpcy5faGFuZGxlQmVmb3JlVG91Y2hFbmQoZSkpfSx0LnByb3RvdHlwZS5faGFuZGxlQmVmb3JlVG91Y2hFbmQ9ZnVuY3Rpb24ocyl7dmFyIHQ9dGhpcyxlPXRoaXMuc3RhdGUuYW5pbWF0aW9uRHVyYXRpb247dGhpcy50b3VjaEVuZFRpbWVvdXRJZD13aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiBfX2F3YWl0ZXIodCx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7dmFyIGUsaSxuLG89dGhpcztyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPVV0aWxzLmdldFN3aXBlVG91Y2hlbmRJbmRleChzLHRoaXMuc3RhdGUpLGk9VXRpbHMuZ2V0VHJhbnNsYXRlM2RQcm9wZXJ0eShlLHRoaXMuc3RhdGUpLFV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246LWl9KSxuPVV0aWxzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eSgpLFs0LHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUluZGV4OmUsdHJhbnNsYXRlM2Q6aSx0cmFuc2l0aW9uOm59KV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtyZXR1cm4gby5faGFuZGxlU2xpZGVDaGFuZ2VkKCl9KSxbMl19fSl9KX0sZSl9LHQucHJvdG90eXBlLl9oYW5kbGVTbGlkZVRvPWZ1bmN0aW9uKHQpe3ZhciBlPXQuYWN0aXZlSW5kZXgsYT12b2lkIDA9PT1lPzA6ZSxlPXQuZmFkZW91dEFuaW1hdGlvbkluZGV4LHI9dm9pZCAwPT09ZT9udWxsOmUsZT10LmZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbixsPXZvaWQgMD09PWU/bnVsbDplLHU9dC5ldmVudFR5cGU7cmV0dXJuIF9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZSxpLG4sbyxzPXRoaXM7cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsZnVuY3Rpb24odCl7c3dpdGNoKHQubGFiZWwpe2Nhc2UgMDpyZXR1cm4oaT10aGlzLnByb3BzLG49aS5pbmZpbml0ZSxpPWkuYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb24sZT10aGlzLnN0YXRlLG89ZS5pdGVtc0NvdW50LGU9ZS5hbmltYXRpb25EdXJhdGlvbix0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWR8fHRoaXMuc3RhdGUuYWN0aXZlSW5kZXg9PT1hfHwhbiYmVXRpbHMuc2hvdWxkQ2FuY2VsU2xpZGVBbmltYXRpb24oYSxvKSk/WzJdOih0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWQ9ITAsdGhpcy5fY2FuY2VsVGltZW91dEFuaW1hdGlvbnMoKSx0aGlzLl9oYW5kbGVTbGlkZUNoYW5nZSh1KSxuPSExLG89VXRpbHMuZ2V0VHJhbnNsYXRlM2RQcm9wZXJ0eShhLHRoaXMuc3RhdGUpLGk9bnVsbCE9PXImJm51bGwhPT1sPyhuPSEwLFV0aWxzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eSgpKTpVdGlscy5nZXRUcmFuc2l0aW9uUHJvcGVydHkoe2FuaW1hdGlvbkR1cmF0aW9uOmUsYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb246aX0pLFs0LHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUluZGV4OmEsdHJhbnNpdGlvbjppLHRyYW5zbGF0ZTNkOm8sYW5pbWF0aW9uRHVyYXRpb246ZSxmYWRlb3V0QW5pbWF0aW9uSW5kZXg6cixmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb246bCxmYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZzpufSldKTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLHRoaXMuc2xpZGVFbmRUaW1lb3V0SWQ9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gcy5faGFuZGxlQmVmb3JlU2xpZGVFbmQodSl9LGUpLFsyXX19KX0pfSx0LnByb3RvdHlwZS5faGFuZGxlVXBkYXRlU2xpZGVQb3NpdGlvbj1mdW5jdGlvbihvKXtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3ZhciBlLGksbjtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPXRoaXMuc3RhdGUuYW5pbWF0aW9uRHVyYXRpb24saT1VdGlscy5nZXRUcmFuc2xhdGUzZFByb3BlcnR5KG8sdGhpcy5zdGF0ZSksbj1VdGlscy5nZXRUcmFuc2l0aW9uUHJvcGVydHkoe2FuaW1hdGlvbkR1cmF0aW9uOjB9KSxbNCx0aGlzLnNldFN0YXRlKHthY3RpdmVJbmRleDpvLHRyYW5zbGF0ZTNkOmksdHJhbnNpdGlvbjpuLGFuaW1hdGlvbkR1cmF0aW9uOmUsZmFkZW91dEFuaW1hdGlvbkluZGV4Om51bGwsZmFkZW91dEFuaW1hdGlvblBvc2l0aW9uOm51bGwsZmFkZW91dEFuaW1hdGlvblByb2Nlc3Npbmc6ITF9KV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSxbMl19fSl9KX0sdC5wcm90b3R5cGUuX2hhbmRsZVJlc2l6ZWQ9ZnVuY3Rpb24oKXt0aGlzLnByb3BzLm9uUmVzaXplZCYmdGhpcy5wcm9wcy5vblJlc2l6ZWQoX19hc3NpZ24oX19hc3NpZ24oe30sdGhpcy5ldmVudE9iamVjdCkse3R5cGU6dHlwZXNfMS5FdmVudFR5cGUuUkVTSVpFfSkpfSx0LnByb3RvdHlwZS5faGFuZGxlU2xpZGVDaGFuZ2U9ZnVuY3Rpb24odCl7dGhpcy5wcm9wcy5vblNsaWRlQ2hhbmdlJiYodD10P19fYXNzaWduKF9fYXNzaWduKHt9LHRoaXMuZXZlbnRPYmplY3QpLHt0eXBlOnR9KTp0aGlzLmV2ZW50T2JqZWN0LHRoaXMucHJvcHMub25TbGlkZUNoYW5nZSh0KSl9LHQucHJvdG90eXBlLl9oYW5kbGVTbGlkZUNoYW5nZWQ9ZnVuY3Rpb24ocyl7cmV0dXJuIF9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZSxpLG4sbztyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybihpPXRoaXMuc3RhdGUsZT1pLmlzQXV0b1BsYXlpbmcsaT1pLmlzQXV0b1BsYXlDYW5jZWxlZE9uQWN0aW9uLG49dGhpcy5wcm9wcyxvPW4uYXV0b1BsYXlTdHJhdGVneSxuPW4ub25TbGlkZUNoYW5nZWQsVXRpbHMuc2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkFjdGlvbihvKSYmdGhpcy5oYXNVc2VyQWN0aW9uJiYhaSk/WzQsdGhpcy5zZXRTdGF0ZSh7aXNBdXRvUGxheUNhbmNlbGVkT25BY3Rpb246ITAsaXNBdXRvUGxheWluZzohMX0pXTpbMywyXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLFszLDNdO2Nhc2UgMjplJiZ0aGlzLl9oYW5kbGVQbGF5KCksdC5sYWJlbD0zO2Nhc2UgMzpyZXR1cm4gdGhpcy5pc0FuaW1hdGlvbkRpc2FibGVkPSExLG4mJihvPXM/X19hc3NpZ24oX19hc3NpZ24oe30sdGhpcy5ldmVudE9iamVjdCkse3R5cGU6c30pOnRoaXMuZXZlbnRPYmplY3QsbihvKSksWzJdfX0pfSl9LHQucHJvdG90eXBlLl9oYW5kbGVEb3RDbGljaz1mdW5jdGlvbih0KXt0aGlzLmhhc1VzZXJBY3Rpb249ITAsdGhpcy5zbGlkZVRvKHQpfSx0LnByb3RvdHlwZS5faGFuZGxlUGxheT1mdW5jdGlvbigpe3RoaXMuX3NldEF1dG9QbGF5SW50ZXJ2YWwoKX0sdC5wcm90b3R5cGUuX2NhbmNlbFRpbWVvdXRBbmltYXRpb25zPWZ1bmN0aW9uKCl7dGhpcy5fY2xlYXJBdXRvUGxheVRpbWVvdXQoKSx0aGlzLl9jbGVhclNsaWRlRW5kVGltZW91dCgpLHRoaXMuY2xlYXJUb3VjaGVuZFRpbWVvdXQoKX0sdC5wcm90b3R5cGUuX2NsZWFyQXV0b1BsYXlUaW1lb3V0PWZ1bmN0aW9uKCl7d2luZG93LmNsZWFyVGltZW91dCh0aGlzLmF1dG9QbGF5VGltZW91dElkKSx0aGlzLmF1dG9QbGF5VGltZW91dElkPXZvaWQgMH0sdC5wcm90b3R5cGUuX2NsZWFyU2xpZGVFbmRUaW1lb3V0PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMuc2xpZGVFbmRUaW1lb3V0SWQpLHRoaXMuc2xpZGVFbmRUaW1lb3V0SWQ9dm9pZCAwfSx0LnByb3RvdHlwZS5jbGVhclRvdWNoZW5kVGltZW91dD1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLnRvdWNoRW5kVGltZW91dElkKSx0aGlzLnRvdWNoRW5kVGltZW91dElkPXZvaWQgMH0sdC5wcm90b3R5cGUuX2NsZWFyVG91Y2htb3ZlUG9zaXRpb249ZnVuY3Rpb24oKXt0aGlzLnN0YXJ0VG91Y2htb3ZlUG9zaXRpb249dm9pZCAwfSx0LnByb3RvdHlwZS5fc2V0VG91Y2htb3ZlUG9zaXRpb249ZnVuY3Rpb24oKXt2YXIgdD1VdGlscy5nZXRUcmFuc2xhdGVYUHJvcGVydHkodGhpcy5zdGFnZUNvbXBvbmVudCk7dGhpcy5zdGFydFRvdWNobW92ZVBvc2l0aW9uPS10fSx0LnByb3RvdHlwZS5fc2V0SW5pdGlhbFN0YXRlPWZ1bmN0aW9uKCl7cmV0dXJuIF9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPVV0aWxzLmNhbGN1bGF0ZUluaXRpYWxTdGF0ZSh0aGlzLnByb3BzLHRoaXMuc3RhZ2VDb21wb25lbnQpLHRoaXMucm9vdENvbXBvbmVudERpbWVuc2lvbnM9VXRpbHMuZ2V0RWxlbWVudERpbWVuc2lvbnModGhpcy5yb290RWxlbWVudCksWzQsdGhpcy5zZXRTdGF0ZShlKV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSx0aGlzLnByb3BzLm9uSW5pdGlhbGl6ZWQmJnRoaXMucHJvcHMub25Jbml0aWFsaXplZChfX2Fzc2lnbihfX2Fzc2lnbih7fSx0aGlzLmV2ZW50T2JqZWN0KSx7dHlwZTp0eXBlc18xLkV2ZW50VHlwZS5JTklUfSkpLFsyXX19KX0pfSx0LnByb3RvdHlwZS5fc2V0QXV0b1BsYXlJbnRlcnZhbD1mdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10aGlzLnByb3BzLGk9ZS5hdXRvUGxheURpcmVjdGlvbixlPWUuYXV0b1BsYXlJbnRlcnZhbDt0aGlzLmF1dG9QbGF5VGltZW91dElkPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5pc0hvdmVyZWR8fChpPT09dHlwZXNfMS5BdXRvcGxheURpcmVjdGlvbi5SVEw/dC5zbGlkZVByZXYoKTp0LnNsaWRlTmV4dCgpKX0sZSl9LHQucHJvdG90eXBlLl9zZXR1cFN3aXBlSGFuZGxlcnM9ZnVuY3Rpb24oKXt0aGlzLnN3aXBlTGlzdGVuZXI9bmV3IHZhbmlsbGFfc3dpcGVfMS5kZWZhdWx0KHtlbGVtZW50OnRoaXMucm9vdEVsZW1lbnQsZGVsdGE6dGhpcy5wcm9wcy5zd2lwZURlbHRhLG9uU3dpcGluZzp0aGlzLl9oYW5kbGVUb3VjaG1vdmUsb25Td2lwZWQ6dGhpcy5faGFuZGxlVG91Y2hlbmQscm90YXRpb25BbmdsZTo1LG1vdXNlVHJhY2tpbmdFbmFibGVkOnRoaXMucHJvcHMubW91c2VUcmFja2luZyx0b3VjaFRyYWNraW5nRW5hYmxlZDp0aGlzLnByb3BzLnRvdWNoVHJhY2tpbmcscHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudDohdGhpcy5wcm9wcy50b3VjaE1vdmVEZWZhdWx0RXZlbnRzLHByZXZlbnRUcmFja2luZ09uTW91c2VsZWF2ZTohMH0pLHRoaXMuc3dpcGVMaXN0ZW5lci5pbml0KCl9LHQucHJvdG90eXBlLl91cGRhdGVDb21wb25lbnQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpczt2b2lkIDA9PT10JiYodD10aGlzLnByb3BzKSx0aGlzLl9jYW5jZWxUaW1lb3V0QW5pbWF0aW9ucygpLHRoaXMuaXNBbmltYXRpb25EaXNhYmxlZD0hMSx0aGlzLnN0YXRlLmlzQXV0b1BsYXlpbmcmJnRoaXMuX2hhbmRsZVBsYXkoKSx0aGlzLnNldFN0YXRlKHtjbG9uZXM6VXRpbHMuY3JlYXRlQ2xvbmVzKHQpfSkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7ZS5zZXRTdGF0ZShVdGlscy5jYWxjdWxhdGVJbml0aWFsU3RhdGUodCxlLnN0YWdlQ29tcG9uZW50KSl9KX0sdC5wcm90b3R5cGUuX3VwZGF0ZVN3aXBlUHJvcHM9ZnVuY3Rpb24oKXt0aGlzLnN3aXBlTGlzdGVuZXImJnRoaXMuc3dpcGVMaXN0ZW5lci51cGRhdGUoe2RlbHRhOnRoaXMucHJvcHMuc3dpcGVEZWx0YSxtb3VzZVRyYWNraW5nRW5hYmxlZDp0aGlzLnByb3BzLm1vdXNlVHJhY2tpbmcsdG91Y2hUcmFja2luZ0VuYWJsZWQ6dGhpcy5wcm9wcy50b3VjaFRyYWNraW5nLHByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQ6IXRoaXMucHJvcHMudG91Y2hNb3ZlRGVmYXVsdEV2ZW50c30pfSx0LnByb3RvdHlwZS5fcmVuZGVyRG90c05hdmlnYXRpb249ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnByb3BzLGU9dC5yZW5kZXJEb3RzSXRlbSx0PXQuY29udHJvbHNTdHJhdGVneTtyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVmlld3MuRG90c05hdmlnYXRpb24se3N0YXRlOnRoaXMuc3RhdGUsb25DbGljazp0aGlzLl9oYW5kbGVEb3RDbGljayxyZW5kZXJEb3RzSXRlbTplLGNvbnRyb2xzU3RyYXRlZ3k6dH0pfSx0LnByb3RvdHlwZS5fcmVuZGVyUHJldkJ1dHRvbj1mdW5jdGlvbigpe3ZhciB0PXRoaXMucHJvcHMucmVuZGVyUHJldkJ1dHRvbixlPVV0aWxzLmdldFNsaWRlSXRlbUluZm8odGhpcy5zdGF0ZSkuaXNQcmV2U2xpZGVEaXNhYmxlZDtyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVmlld3MuUHJldk5leHRCdXR0b24se25hbWU6XCJwcmV2XCIsb25DbGljazp0aGlzLnNsaWRlUHJldixpc0Rpc2FibGVkOmUscmVuZGVyUHJldkJ1dHRvbjp0fSl9LHQucHJvdG90eXBlLl9yZW5kZXJOZXh0QnV0dG9uPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5wcm9wcy5yZW5kZXJOZXh0QnV0dG9uLGU9VXRpbHMuZ2V0U2xpZGVJdGVtSW5mbyh0aGlzLnN0YXRlKS5pc05leHRTbGlkZURpc2FibGVkO3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5QcmV2TmV4dEJ1dHRvbix7bmFtZTpcIm5leHRcIixvbkNsaWNrOnRoaXMuc2xpZGVOZXh0LGlzRGlzYWJsZWQ6ZSxyZW5kZXJOZXh0QnV0dG9uOnR9KX0sdC5wcm90b3R5cGUuX3JlbmRlclBsYXlQYXVzZUJ1dHRvbj1mdW5jdGlvbigpe3ZhciB0PXRoaXMucHJvcHMucmVuZGVyUGxheVBhdXNlQnV0dG9uLGU9dGhpcy5zdGF0ZS5pc0F1dG9QbGF5aW5nO3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5QbGF5UGF1c2VCdXR0b24se2lzUGxheWluZzplLG9uQ2xpY2s6dGhpcy5faGFuZGxlUGxheVBhdXNlVG9nZ2xlLHJlbmRlclBsYXlQYXVzZUJ1dHRvbjp0fSl9LHQucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3ZhciB0PXRoaXMuc3RhdGUsZT10LnRyYW5zbGF0ZTNkLGk9dC5jbG9uZXMsbj10LnRyYW5zaXRpb24sdD10LmNhblVzZURvbSxvPVV0aWxzLnNob3VsZERpc2FibGVEb3RzKHRoaXMucHJvcHMsdGhpcy5zdGF0ZSkscz1VdGlscy5zaG91bGREaXNhYmxlQnV0dG9ucyh0aGlzLnByb3BzLHRoaXMuc3RhdGUpLGE9VXRpbHMuZ2V0UmVuZGVyV3JhcHBlclN0eWxlcyh0aGlzLnByb3BzLHRoaXMuc3RhdGUsdGhpcy5zdGFnZUNvbXBvbmVudCksZT1VdGlscy5nZXRSZW5kZXJTdGFnZVN0eWxlcyh7dHJhbnNsYXRlM2Q6ZX0se3RyYW5zaXRpb246bn0pLG49dGhpcy5wcm9wcy5zc3JTaWxlbnRNb2RlfHx0P1wiXCI6dHlwZXNfMS5Nb2RpZmllcnMuU1NSLHQ9VXRpbHMuY29uY2F0Q2xhc3NuYW1lcyh0eXBlc18xLkNsYXNzbmFtZXMuUk9PVCxuKTtyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnR9LHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3JlZjp0aGlzLl9zZXRSb290Q29tcG9uZW50UmVmfSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTphLGNsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuV1JBUFBFUixvbk1vdXNlRW50ZXI6dGhpcy5faGFuZGxlTW91c2VFbnRlcixvbk1vdXNlTGVhdmU6dGhpcy5faGFuZGxlTW91c2VMZWF2ZX0scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLHtzdHlsZTplLGNsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuU1RBR0UscmVmOnRoaXMuX3NldFN0YWdlQ29tcG9uZW50UmVmfSxpLm1hcCh0aGlzLl9yZW5kZXJTdGFnZUl0ZW0pKSkpLG8/bnVsbDp0aGlzLl9yZW5kZXJEb3RzTmF2aWdhdGlvbigpLHM/bnVsbDp0aGlzLl9yZW5kZXJQcmV2QnV0dG9uKCkscz9udWxsOnRoaXMuX3JlbmRlck5leHRCdXR0b24oKSx0aGlzLnByb3BzLmRpc2FibGVTbGlkZUluZm8/bnVsbDp0aGlzLl9yZW5kZXJTbGlkZUluZm8oKSx0aGlzLnByb3BzLmF1dG9QbGF5Q29udHJvbHM/dGhpcy5fcmVuZGVyUGxheVBhdXNlQnV0dG9uKCk6bnVsbCl9LHQuZGVmYXVsdFByb3BzPWRlZmF1bHRQcm9wc18xLmRlZmF1bHRQcm9wcyx0fShyZWFjdF8xLmRlZmF1bHQuUHVyZUNvbXBvbmVudCkpO2V4cG9ydHMuZGVmYXVsdD1BbGljZUNhcm91c2VsOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5cbmZ1bmN0aW9uIHBhcnNlKHV1aWQpIHtcbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cblxuICBsZXQgdjtcbiAgY29uc3QgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBQYXJzZSAjIyMjIyMjIy0uLi4uLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0O1xuICBhcnJbMV0gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsyXSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbM10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tIyMjIy0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzRdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzVdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tIyMjIy0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls2XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4O1xuICBhcnJbN10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLSMjIyMtLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzhdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDg7XG4gIGFycls5XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tLi4uLi0jIyMjIyMjIyMjIyNcbiAgLy8gKFVzZSBcIi9cIiB0byBhdm9pZCAzMi1iaXQgdHJ1bmNhdGlvbiB3aGVuIGJpdC1zaGlmdGluZyBoaWdoLW9yZGVyIGJ5dGVzKVxuXG4gIGFyclsxMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTFdID0gdiAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzEyXSA9IHYgPj4+IDI0ICYgMHhmZjtcbiAgYXJyWzEzXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzE0XSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbMTVdID0gdiAmIDB4ZmY7XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlOyIsImltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmltcG9ydCBwYXJzZSBmcm9tICcuL3BhcnNlLmpzJztcblxuZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHIpIHtcbiAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpOyAvLyBVVEY4IGVzY2FwZVxuXG4gIGNvbnN0IGJ5dGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuXG4gIHJldHVybiBieXRlcztcbn1cblxuZXhwb3J0IGNvbnN0IEROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IGNvbnN0IFVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdjM1KG5hbWUsIHZlcnNpb24sIGhhc2hmdW5jKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBfbmFtZXNwYWNlO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSBwYXJzZShuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGlmICgoKF9uYW1lc3BhY2UgPSBuYW1lc3BhY2UpID09PSBudWxsIHx8IF9uYW1lc3BhY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9uYW1lc3BhY2UubGVuZ3RoKSAhPT0gMTYpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH0gLy8gQ29tcHV0ZSBoYXNoIG9mIG5hbWVzcGFjZSBhbmQgdmFsdWUsIFBlciA0LjNcbiAgICAvLyBGdXR1cmU6IFVzZSBzcHJlYWQgc3ludGF4IHdoZW4gc3VwcG9ydGVkIG9uIGFsbCBwbGF0Zm9ybXMsIGUuZy4gYGJ5dGVzID1cbiAgICAvLyBoYXNoZnVuYyhbLi4ubmFtZXNwYWNlLCAuLi4gdmFsdWVdKWBcblxuXG4gICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTYgKyB2YWx1ZS5sZW5ndGgpO1xuICAgIGJ5dGVzLnNldChuYW1lc3BhY2UpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZSwgbmFtZXNwYWNlLmxlbmd0aCk7XG4gICAgYnl0ZXMgPSBoYXNoZnVuYyhieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDB4MGYgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiAweDNmIHwgMHg4MDtcblxuICAgIGlmIChidWYpIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBidWY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShieXRlcyk7XG4gIH0gLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG5cblxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gIH0gY2F0Y2ggKGVycikge30gLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcblxuXG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiLypcbiAqIEJyb3dzZXItY29tcGF0aWJsZSBKYXZhU2NyaXB0IE1ENVxuICpcbiAqIE1vZGlmaWNhdGlvbiBvZiBKYXZhU2NyaXB0IE1ENVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1NRDVcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQmFzZWQgb25cbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMiBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDlcbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KG1zZy5sZW5ndGgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzW2ldID0gbXNnLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1kNVRvSGV4RW5jb2RlZEFycmF5KHdvcmRzVG9NZDUoYnl0ZXNUb1dvcmRzKGJ5dGVzKSwgYnl0ZXMubGVuZ3RoICogOCkpO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhbiBhcnJheSBvZiBieXRlc1xuICovXG5cblxuZnVuY3Rpb24gbWQ1VG9IZXhFbmNvZGVkQXJyYXkoaW5wdXQpIHtcbiAgY29uc3Qgb3V0cHV0ID0gW107XG4gIGNvbnN0IGxlbmd0aDMyID0gaW5wdXQubGVuZ3RoICogMzI7XG4gIGNvbnN0IGhleFRhYiA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDMyOyBpICs9IDgpIHtcbiAgICBjb25zdCB4ID0gaW5wdXRbaSA+PiA1XSA+Pj4gaSAlIDMyICYgMHhmZjtcbiAgICBjb25zdCBoZXggPSBwYXJzZUludChoZXhUYWIuY2hhckF0KHggPj4+IDQgJiAweDBmKSArIGhleFRhYi5jaGFyQXQoeCAmIDB4MGYpLCAxNik7XG4gICAgb3V0cHV0LnB1c2goaGV4KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBvdXRwdXQgbGVuZ3RoIHdpdGggcGFkZGluZyBhbmQgYml0IGxlbmd0aFxuICovXG5cblxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICByZXR1cm4gKGlucHV0TGVuZ3RoOCArIDY0ID4+PiA5IDw8IDQpICsgMTQgKyAxO1xufVxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cblxuXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4W2dldE91dHB1dExlbmd0aChsZW4pIC0gMV0gPSBsZW47XG4gIGxldCBhID0gMTczMjU4NDE5MztcbiAgbGV0IGIgPSAtMjcxNzMzODc5O1xuICBsZXQgYyA9IC0xNzMyNTg0MTk0O1xuICBsZXQgZCA9IDI3MTczMzg3ODtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgY29uc3Qgb2xkYSA9IGE7XG4gICAgY29uc3Qgb2xkYiA9IGI7XG4gICAgY29uc3Qgb2xkYyA9IGM7XG4gICAgY29uc3Qgb2xkZCA9IGQ7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4Myk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpO1xuICAgIGIgPSBzYWZlQWRkKGIsIG9sZGIpO1xuICAgIGMgPSBzYWZlQWRkKGMsIG9sZGMpO1xuICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpO1xuICB9XG5cbiAgcmV0dXJuIFthLCBiLCBjLCBkXTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IGJ5dGVzIHRvIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHNcbiAqIENoYXJhY3RlcnMgPjI1NSBoYXZlIHRoZWlyIGhpZ2gtYnl0ZSBzaWxlbnRseSBpZ25vcmVkLlxuICovXG5cblxuZnVuY3Rpb24gYnl0ZXNUb1dvcmRzKGlucHV0KSB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBsZW5ndGg4ID0gaW5wdXQubGVuZ3RoICogODtcbiAgY29uc3Qgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg4OyBpICs9IDgpIHtcbiAgICBvdXRwdXRbaSA+PiA1XSB8PSAoaW5wdXRbaSAvIDhdICYgMHhmZikgPDwgaSAlIDMyO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIGNvbnN0IGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcbiAgY29uc3QgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gIHJldHVybiBtc3cgPDwgMTYgfCBsc3cgJiAweGZmZmY7XG59XG4vKlxuICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICovXG5cblxuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG59XG4vKlxuICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpO1xufVxuXG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGMgfCB+YiAmIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGQgfCBjICYgfmQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1kNTsiLCJpbXBvcnQgdjM1IGZyb20gJy4vdjM1LmpzJztcbmltcG9ydCBtZDUgZnJvbSAnLi9tZDUuanMnO1xuY29uc3QgdjMgPSB2MzUoJ3YzJywgMHgzMCwgbWQ1KTtcbmV4cG9ydCBkZWZhdWx0IHYzOyIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB4ICYgeSBeIH54ICYgejtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfVxufVxuXG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cblxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICBjb25zdCBLID0gWzB4NWE4Mjc5OTksIDB4NmVkOWViYTEsIDB4OGYxYmJjZGMsIDB4Y2E2MmMxZDZdO1xuICBjb25zdCBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuXG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzLnB1c2gobXNnLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShieXRlcykpIHtcbiAgICAvLyBDb252ZXJ0IEFycmF5LWxpa2UgdG8gQXJyYXlcbiAgICBieXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJ5dGVzKTtcbiAgfVxuXG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIGNvbnN0IGwgPSBieXRlcy5sZW5ndGggLyA0ICsgMjtcbiAgY29uc3QgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICBjb25zdCBNID0gbmV3IEFycmF5KE4pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgY29uc3QgYXJyID0gbmV3IFVpbnQzMkFycmF5KDE2KTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgYXJyW2pdID0gYnl0ZXNbaSAqIDY0ICsgaiAqIDRdIDw8IDI0IHwgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNiB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMl0gPDwgOCB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgfVxuXG4gICAgTVtpXSA9IGFycjtcbiAgfVxuXG4gIE1bTiAtIDFdWzE0XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggLyBNYXRoLnBvdygyLCAzMik7XG4gIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgTVtOIC0gMV1bMTVdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAmIDB4ZmZmZmZmZmY7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICBjb25zdCBXID0gbmV3IFVpbnQzMkFycmF5KDgwKTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgMTY7ICsrdCkge1xuICAgICAgV1t0XSA9IE1baV1bdF07XG4gICAgfVxuXG4gICAgZm9yIChsZXQgdCA9IDE2OyB0IDwgODA7ICsrdCkge1xuICAgICAgV1t0XSA9IFJPVEwoV1t0IC0gM10gXiBXW3QgLSA4XSBeIFdbdCAtIDE0XSBeIFdbdCAtIDE2XSwgMSk7XG4gICAgfVxuXG4gICAgbGV0IGEgPSBIWzBdO1xuICAgIGxldCBiID0gSFsxXTtcbiAgICBsZXQgYyA9IEhbMl07XG4gICAgbGV0IGQgPSBIWzNdO1xuICAgIGxldCBlID0gSFs0XTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgODA7ICsrdCkge1xuICAgICAgY29uc3QgcyA9IE1hdGguZmxvb3IodCAvIDIwKTtcbiAgICAgIGNvbnN0IFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1t0XSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cblxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cblxuICByZXR1cm4gW0hbMF0gPj4gMjQgJiAweGZmLCBIWzBdID4+IDE2ICYgMHhmZiwgSFswXSA+PiA4ICYgMHhmZiwgSFswXSAmIDB4ZmYsIEhbMV0gPj4gMjQgJiAweGZmLCBIWzFdID4+IDE2ICYgMHhmZiwgSFsxXSA+PiA4ICYgMHhmZiwgSFsxXSAmIDB4ZmYsIEhbMl0gPj4gMjQgJiAweGZmLCBIWzJdID4+IDE2ICYgMHhmZiwgSFsyXSA+PiA4ICYgMHhmZiwgSFsyXSAmIDB4ZmYsIEhbM10gPj4gMjQgJiAweGZmLCBIWzNdID4+IDE2ICYgMHhmZiwgSFszXSA+PiA4ICYgMHhmZiwgSFszXSAmIDB4ZmYsIEhbNF0gPj4gMjQgJiAweGZmLCBIWzRdID4+IDE2ICYgMHhmZiwgSFs0XSA+PiA4ICYgMHhmZiwgSFs0XSAmIDB4ZmZdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaGExOyIsImltcG9ydCB2MzUgZnJvbSAnLi92MzUuanMnO1xuaW1wb3J0IHNoYTEgZnJvbSAnLi9zaGExLmpzJztcbmNvbnN0IHY1ID0gdjM1KCd2NScsIDB4NTAsIHNoYTEpO1xuZXhwb3J0IGRlZmF1bHQgdjU7IiwiLypcbiBkZWZhdWx0IHVuZGVmaW5lZCAtIFRoZSBrZXkgaXMgdGhlIGJyZWFrcG9pbnRcbiAoZGVmYXVsdCBpcyB0aGUgcmVzdWx0IG9mOiAoKSA9PiB3aW5kb3cuaW5uZXJXaWR0aCBvciBpbm5lcldpZHRoIHByb3BlcnR5IGlmIHRoZSBsYXN0IHByZXNlbnRlZCkuXG4qL1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRSZXNwb25zaXZlID0ge1xuICAgIDA6IHtcbiAgICAgICAgaXRlbXM6IDFcbiAgICB9LFxuICAgIDYyMDoge1xuICAgICAgICBpdGVtczogMlxuICAgIH0sXG4gICAgMTAyNDoge1xuICAgICAgICBpdGVtczogM1xuICAgIH0sXG4gICAgMTIwMDoge1xuICAgICAgICBpdGVtczogNFxuICAgIH0sXG4gICAgMTcwMDoge1xuICAgICAgICBpdGVtczogNVxuICAgIH0sXG4gICAgMjI1MDoge1xuICAgICAgICBpdGVtczogNlxuICAgIH1cbn07XG5cbi8qXG4gcmVidWlsdCByZXNwb25zaXZlIG9iamVjdCBkZXBlbmRpbmcgb24gdGhlIGNvbnRhaW5lciB3aWR0aFxuIHVzaW5nIHRoZSByYXRpbyBvZiB0aGUgd2lkdGggb2YgdGhlIGJveCB0byB0aGUgd2lkdGggb2YgdGhlIHdpbmRvd1xuKi9cbmV4cG9ydCBjb25zdCBnZXROZXdSZXNwb25zaXZlVmFsdWVzID0gcmF0ZSA9PiB7XG4gICAgbGV0IG5ld1Jlc3BvbnNpdmUgPSB7fTtcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGRlZmF1bHRSZXNwb25zaXZlKTtcblxuICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSBNYXRoLnJvdW5kKGRlZmF1bHRSZXNwb25zaXZlW2tleV0uaXRlbXMgLyByYXRlKTtcbiAgICAgICAgbmV3UmVzcG9uc2l2ZVtrZXldID0geyBpdGVtczogTWF0aC5tYXgobmV3VmFsdWUsIDEpIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3UmVzcG9uc2l2ZTtcbn07XG5cbi8qXG4gICAgQ29uc3RhbnRzXG4qL1xuZXhwb3J0IGNvbnN0IHN0YXR1c0xpc3QgPSB7XG4gICAgcmVzZXQ6IFwicmVzZXRcIixcbiAgICBnb0xhc3Q6IFwiZ29MYXN0XCIsXG4gICAgbmV4dDogXCJuZXh0XCIsXG4gICAgcHJldjogXCJwcmV2XCJcbn07XG5cbmV4cG9ydCBjb25zdCBjbGFzc2VzQWN0aW9uID0ge1xuICAgIGFkZDogXCJhZGRcIixcbiAgICByZW1vdmU6IFwicmVtb3ZlXCJcbn07XG5cbmV4cG9ydCBjb25zdCBjb21tb25DbGFzc2VzID0ge1xuICAgIG11bHRpX2NvbnRhaW5lcjogXCJtdWx0aS1jYXJvdXNlbF9fY29udGFpbmVyXCIsXG4gICAgbXVsdGlfZW1wdHlfY29udGFpbmVyOiBcIm11bHRpLWNhcm91c2VsX19lbXB0eS1jb250YWluZXJcIixcbiAgICBpdGVtOiBcIm11bHRpLWNhcm91c2VsX19pdGVtXCIsXG4gICAgYWN0aXZlOiBcIm11bHRpLWNhcm91c2VsX19hY3RpdmVcIixcbiAgICBub19kb3RzOiBcIm11bHRpLWNhcm91c2VsX19uby1kb3RzXCIsXG4gICAgZXJyb3I6IFwibXVsdGktY2Fyb3VzZWxfX2Vycm9yXCJcbn07XG5cbmV4cG9ydCBjb25zdCBub3JtYWxDYXJvdXNlbENsYXNzZXMgPSB7XG4gICAgbm9ybWFsX2NvbnRhaW5lcjogXCJub3JtYWwtY2Fyb3VzZWxfX2NvbnRhaW5lclwiLFxuICAgIG5vcm1hbF9pdGVtOiBcIm5vcm1hbC1jYXJvdXNlbF9faXRlbVwiXG59O1xuXG5leHBvcnQgY29uc3QgYWN0aXZlQ2xpY2tDbGFzc2VzID0ge1xuICAgIGFjdGl2ZV9jbGlja19jb250YWluZXI6IFwiYWN0aXZlLWNsaWNrLWNhcm91c2VsX19jb250YWluZXJcIixcbiAgICBhY3RpdmVfY2xpY2tfaXRlbTogXCJhY3RpdmUtY2xpY2stY2Fyb3VzZWxfX2l0ZW1cIixcbiAgICBhY3RpdmVfY2xpY2tfd2l0aF9idG46IFwiYWN0aXZlLWNsaWNrLWNhcm91c2VsX193aXRoLWJ0blwiXG59O1xuXG5leHBvcnQgY29uc3QgYWN0aXZlU2xpZGVDbGFzc2VzID0ge1xuICAgIGFjdGl2ZV9zbGlkZV9jb250YWluZXI6IFwiYWN0aXZlLXNsaWRlLWNhcm91c2VsX19jb250YWluZXJcIixcbiAgICBhY3RpdmVfc2xpZGVfd3JhcHBlcjogXCJhY3RpdmUtc2xpZGUtY2Fyb3VzZWxfX3dyYXBwZXJcIixcbiAgICBmaXJzdF9pdGVtOiBcImFjdGl2ZS1zbGlkZS1jYXJvdXNlbF9fZmlyc3QtaXRlbVwiLFxuICAgIGxhc3RfaXRlbTogXCJhY3RpdmUtc2xpZGUtY2Fyb3VzZWxfX2xhc3QtaXRlbVwiLFxuICAgIHByZXZfYnRuOiBcImFjdGl2ZS1zbGlkZS1jYXJvdXNlbF9fcHJldi1idG5cIixcbiAgICBuZXh0X2J0bjogXCJhY3RpdmUtc2xpZGUtY2Fyb3VzZWxfX25leHQtYnRuXCJcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uL3VpL05vcm1hbENhcm91c2VsLnNjc3NcIjtcbmltcG9ydCBcIi4uL3VpL0FjdGl2ZUNsaWNrQ2Fyb3VzZWwuc2Nzc1wiO1xuaW1wb3J0IEFsaWNlQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWFsaWNlLWNhcm91c2VsXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHtcbiAgICBkZWZhdWx0UmVzcG9uc2l2ZSxcbiAgICBnZXROZXdSZXNwb25zaXZlVmFsdWVzLFxuICAgIGNvbW1vbkNsYXNzZXMsXG4gICAgbm9ybWFsQ2Fyb3VzZWxDbGFzc2VzLFxuICAgIGFjdGl2ZUNsaWNrQ2xhc3NlcyxcbiAgICBjbGFzc2VzQWN0aW9uXG59IGZyb20gXCIuL2hlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3JtYWxDYXJvdXNlbChwcm9wcykge1xuICAgIGNvbnN0IGNhcm91c2VsUGFyZW50ID0gdXNlUmVmKCk7XG4gICAgY29uc3QgW2Nhcm91c2VsX2l0ZW1zLCBzZXRfY2Fyb3VzZWxfaXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtyZXNwb25zaXZlLCBzZXRSZXNwb25zaXZlXSA9IHVzZVN0YXRlKHsgLi4uZGVmYXVsdFJlc3BvbnNpdmUgfSk7XG4gICAgY29uc3QgW3VuaXF1ZUNsYXNzLCBzZXRVbmlxdWVDbGFzc10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIC8qXG4gICAgICAgIHRoaXMgbWV0aG9kIGJ1aWx0IHRvIGhhbmRsZSBpZiB0aGUgY2Fyb3VzZWwgaGFzIGJlZW4gcmVuZGVyZWQgaW5zaWRlIGEgY29udGFpbmVyXG4gICAgICAgIHRoYXQgaXMgbm90IGNvdmVyaW5nIHRoZSB3aW5kb3cncyBmdWxsIHdpZHRoXG4gICAgKi9cbiAgICBjb25zdCBzZXROZXdSZXNwb25zaXZlID0gKCkgPT4ge1xuICAgICAgICBsZXQgcmF0ZSA9IHdpbmRvdy5pbm5lcldpZHRoIC8gY2Fyb3VzZWxQYXJlbnQuY3VycmVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgaWYgKHJhdGUgPiAxLjM1KSB7XG4gICAgICAgICAgICBsZXQgbmV3UmVzcG9uc2l2ZSA9IGdldE5ld1Jlc3BvbnNpdmVWYWx1ZXMocmF0ZSk7XG4gICAgICAgICAgICBzZXRSZXNwb25zaXZlKHsgLi4ubmV3UmVzcG9uc2l2ZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFJlc3BvbnNpdmUoeyAuLi5kZWZhdWx0UmVzcG9uc2l2ZSB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhZGRPclJlbW92ZUNsYXNzTmFtZSA9IChub2RlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gY2xhc3Nlc0FjdGlvbi5yZW1vdmUpIHtcbiAgICAgICAgICAgIG5vZGU/LmNsYXNzTGlzdD8ucmVtb3ZlKGNvbW1vbkNsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGU/LmNsYXNzTGlzdD8uYWRkKGNvbW1vbkNsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBpbiBjYXNlIG9mIFwiaW5maW5pdGVcIiBjYXJvdXNlbCB0aGUgbm9kZSB3aWxsIGJlIG5vZGUgbGlzdCBcIkFycmF5XCJcbiAgICAgICAgYmVjYXVzZSB0aGUgY2Fyb3VzZWwgY3JlYXRlIGEgY29weSBvZiBhbGwgdGhlIGl0ZW1zXG4gICAgICAgIHRoYXQgd2h5IHdlIG5lZWQgY2hhbmdlIHRoZSBhY3RpdmUgY2xhc3Mgb24gYm90aCBub2RlcyAtIHRoZSBjYXJvdXNlbCByZW5kZXIgYm90aCAtXG4gICAgICAgIGFuZCB3aXRoIG5vIFwiaW5maW5pdGVcIiB0aGUgbm9kZSBsaXN0IHdpbGwgYmUgbGVuZ3RoIG9mIFwiMVwiXG4gICAgKi9cbiAgICBjb25zdCBjaGFuZ2VBY3RpdmVDbGFzcyA9IChub2RlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKG5vZGU/Lmxlbmd0aCkge1xuICAgICAgICAgICAgbm9kZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGFkZE9yUmVtb3ZlQ2xhc3NOYW1lKGl0ZW0sIGFjdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBpZHgtXCJcIiBpcyB0aGUgY29tbW9uIHVuaXF1ZSBjbGFzcyBiZXR3ZWVuIG9yaWdpbmFsIGl0ZW0gYW5kIHRoZSBjbG9uZWQgb25lXG4gICAgKi9cbiAgICBjb25zdCBnZXRJZHhDbGFzc05hbWUgPSBlID0+IHtcbiAgICAgICAgbGV0IGNsaWNrZWRJdGVtID0gZS50YXJnZXQ7XG5cbiAgICAgICAgLy8gaW4gY2FzZSBvZiBjbGlja2luZyBlbGVtZW50IGluc2lkZSB0aGUgaXRlbSB3ZSBuZWVkIHRoZSBtYWluIGRpdiB3aXRoIFwiaWR4LVwiIGNsYXNzIG5hbWVcbiAgICAgICAgd2hpbGUgKGNsaWNrZWRJdGVtKSB7XG4gICAgICAgICAgICBpZiAoY2xpY2tlZEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNvbW1vbkNsYXNzZXMuaXRlbSkpIGJyZWFrO1xuICAgICAgICAgICAgY2xpY2tlZEl0ZW0gPSBjbGlja2VkSXRlbS5wYXJlbnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZXMgPSBjbGlja2VkSXRlbS5jbGFzc05hbWUuc3BsaXQoXCIgXCIpO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lcz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5pbmNsdWRlcyhcImlkeFwiKSk/LlswXTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25DYXJkQ2xpY2tlZCA9IChlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbj8uY2FuRXhlY3V0ZSkgYWN0aW9uLmV4ZWN1dGUoKTtcblxuICAgICAgICAvLyByZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gb3JpZ2luYWwgYW5kIGNsb25lZCBpdGVtXG4gICAgICAgIGxldCBhY3RpdmVOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dW5pcXVlQ2xhc3N9YCk/LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NvbW1vbkNsYXNzZXMuYWN0aXZlfWApO1xuICAgICAgICBjaGFuZ2VBY3RpdmVDbGFzcyhhY3RpdmVOb2RlLCBjbGFzc2VzQWN0aW9uLnJlbW92ZSk7XG5cbiAgICAgICAgbGV0IGlkeENsYXNzID0gZ2V0SWR4Q2xhc3NOYW1lKGUpO1xuXG4gICAgICAgIC8vIGFkZCBhY3RpdmUgY2xhc3MgZm9yIGJvdGggb3JpZ2luYWwgYW5kIGNsb25lZCBpdGVtXG4gICAgICAgIGxldCBpdGVtVG9TZXRBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt1bmlxdWVDbGFzc31gKT8ucXVlcnlTZWxlY3RvckFsbChgLiR7aWR4Q2xhc3N9YCk7XG4gICAgICAgIGNoYW5nZUFjdGl2ZUNsYXNzKGl0ZW1Ub1NldEFjdGl2ZSwgY2xhc3Nlc0FjdGlvbi5hZGQpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgc2V0IHRoZSBhY3RpdmUgaXRlbSBhZnRlciB0aGUgY2Fyb3VzZWwgaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZCBvciByZXNpemVkXG4gICAgICBOT1RFOiB0aGUgY2Fyb3VzZWwgbW92ZXMgdG8gdGhlIGJlZ2lubmluZyB3aGVuIHRoZSBjYXJvdXNlbCByZXNpemVkXG4gICAgKi9cbiAgICBjb25zdCBvbkluaXRpYWxpemVkT3JSZXNpemVkID0gKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMuY2Fyb3VzZWxUeXBlID09PSBcImFjdGl2ZVwiKSB7XG4gICAgICAgICAgICBsZXQgZmlyc3RDYXJvdXNlbEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt1bmlxdWVDbGFzc31gKT8ucXVlcnlTZWxlY3RvcihcIi5pZHgtMFwiKTtcbiAgICAgICAgICAgIGlmICghZmlyc3RDYXJvdXNlbEl0ZW0/LmNsYXNzTGlzdD8uY29udGFpbnMoY29tbW9uQ2xhc3Nlcy5hY3RpdmUpKSB7XG4gICAgICAgICAgICAgICAgZmlyc3RDYXJvdXNlbEl0ZW0/LmNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gc2V0IGEgdW5pcXVlIGNsYXNzIGluIGNhc2Ugb2YgdXNpbmcgdHdvIGRpZmZlcmVudCBjYXJvdXNlbCBpbnN0YW5jZXMgaW4gdGhlIHNhbWUgZG9jdW1lbnRcbiAgICAgICAgc2V0VW5pcXVlQ2xhc3MoXCJhLVwiICsgdXVpZHY0KCkpO1xuXG4gICAgICAgIGlmICghY2Fyb3VzZWxQYXJlbnQuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIGhhbmRsZSByZXNpemUgd2luZG93IG9yIGNhcm91c2VsIGNvbnRhaW5lclxuICAgICAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB7XG4gICAgICAgICAgICBzZXROZXdSZXNwb25zaXZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoY2Fyb3VzZWxQYXJlbnQuY3VycmVudCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMuZGF0YT8uc3RhdHVzID09PSBcImF2YWlsYWJsZVwiICYmICFjYXJvdXNlbF9pdGVtcz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRfY2Fyb3VzZWxfaXRlbXMoXG4gICAgICAgICAgICAgICAgcHJvcHMuZGF0YS5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2Fyb3VzZWxUeXBlID09PSBcImFjdGl2ZVwiID8gZSA9PiBvbkNhcmRDbGlja2VkKGUsIHByb3BzLmFjdGlvbj8uZ2V0KGl0ZW0pKSA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjb21tb25DbGFzc2VzLml0ZW19IGlkeC0ke2l9ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2Fyb3VzZWxUeXBlID09PSBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYWN0aXZlQ2xpY2tDbGFzc2VzLmFjdGl2ZV9jbGlja19pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbm9ybWFsQ2Fyb3VzZWxDbGFzc2VzLm5vcm1hbF9pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNvbnRlbnQuZ2V0KGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9wcy5kYXRhXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICAgICAgICBjb21tb25DbGFzc2VzLm11bHRpX2NvbnRhaW5lcixcbiAgICAgICAgICAgICAgICB1bmlxdWVDbGFzcyxcbiAgICAgICAgICAgICAgICBwcm9wcy5jYXJvdXNlbFR5cGUgPT09IFwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgPyBhY3RpdmVDbGlja0NsYXNzZXMuYWN0aXZlX2NsaWNrX2NvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICA6IG5vcm1hbENhcm91c2VsQ2xhc3Nlcy5ub3JtYWxfY29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHByb3BzLmRpc2FibGVEb3RzQ29udHJvbHMgPyBjb21tb25DbGFzc2VzLm5vX2RvdHMgOiBcIlwiLFxuICAgICAgICAgICAgICAgICFwcm9wcy5kaXNhYmxlQnV0dG9uc0NvbnRyb2xzICYmIHByb3BzLmNhcm91c2VsVHlwZSA9PT0gXCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICA/IGFjdGl2ZUNsaWNrQ2xhc3Nlcy5hY3RpdmVfY2xpY2tfd2l0aF9idG5cbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICBdLmpvaW4oXCIgXCIpfVxuICAgICAgICAgICAgcmVmPXtjYXJvdXNlbFBhcmVudH1cbiAgICAgICAgPlxuICAgICAgICAgICAge2Nhcm91c2VsX2l0ZW1zPy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgPEFsaWNlQ2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2Nhcm91c2VsX2l0ZW1zfVxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZT17cHJvcHMuaW5maW5pdGV9XG4gICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5PXtwcm9wcy5hdXRvUGxheX1cbiAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXlEaXJlY3Rpb249e3Byb3BzLmF1dG9QbGF5RGlyZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICBhdXRvUGxheUNvbnRyb2xzPXtwcm9wcy5hdXRvUGxheUNvbnRyb2xzfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQnV0dG9uc0NvbnRyb2xzPXtwcm9wcy5kaXNhYmxlQnV0dG9uc0NvbnRyb2xzfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRG90c0NvbnRyb2xzPXtwcm9wcy5kaXNhYmxlRG90c0NvbnRyb2xzfVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbj17cHJvcHMuYW5pbWF0aW9uRHVyYXRpb259XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblR5cGU9e3Byb3BzLmFuaW1hdGlvblR5cGV9XG4gICAgICAgICAgICAgICAgICAgIGtleWJvYXJkTmF2aWdhdGlvbj17cHJvcHMua2V5Ym9hcmROYXZpZ2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICBtb3VzZVRyYWNraW5nPXtwcm9wcy5tb3VzZVRyYWNraW5nfVxuICAgICAgICAgICAgICAgICAgICB0b3VjaFRyYWNraW5nPXtwcm9wcy50b3VjaFRyYWNraW5nfVxuICAgICAgICAgICAgICAgICAgICBvbkluaXRpYWxpemVkPXtvbkluaXRpYWxpemVkT3JSZXNpemVkfVxuICAgICAgICAgICAgICAgICAgICBvblJlc2l6ZWQ9e29uSW5pdGlhbGl6ZWRPclJlc2l6ZWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbW1vbkNsYXNzZXMubXVsdGlfZW1wdHlfY29udGFpbmVyfT48L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWxpY2VDYXJvdXNlbCBmcm9tIFwicmVhY3QtYWxpY2UtY2Fyb3VzZWxcIjtcbmltcG9ydCBcIi4uL3VpL0FjdGl2ZVNsaWRlQ2Fyb3VzZWwuc2Nzc1wiO1xuaW1wb3J0IHsgZGVmYXVsdFJlc3BvbnNpdmUsIGdldE5ld1Jlc3BvbnNpdmVWYWx1ZXMsIGNvbW1vbkNsYXNzZXMsIGFjdGl2ZVNsaWRlQ2xhc3Nlcywgc3RhdHVzTGlzdCB9IGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWN0aXZlU2xpZGVDYXJvdXNlbChwcm9wcykge1xuICAgIGNvbnN0IHNsaWRlckNvbnRhaW5lciA9IHVzZVJlZigpO1xuICAgIGNvbnN0IFtjYXJvdXNlbF9pdGVtcywgc2V0X2Nhcm91c2VsX2l0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbcmVzcG9uc2l2ZSwgc2V0UmVzcG9uc2l2ZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbdW5pcXVlQ2xhc3MsIHNldFVuaXF1ZUNsYXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtjdXJyZW50QWN0aXZlSWR4LCBzZXRDdXJyZW50QWN0aXZlSWR4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtudW1iZXJPZkRpc3BsYXllZEl0ZW1zLCBzZXROdW1iZXJPZkRpc3BsYXllZEl0ZW1zXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtudW1iZXJPZkFsbEl0ZW1zLCBzZXROdW1iZXJPZkFsbEl0ZW1zXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgLy8gZ2V0IHRoZSAncmVhY3QtYWxpY2UtY2Fyb3VzZWwnIGJ1aWx0LWluIGFsbCBtZXRob2QgYW5kIHByb3BlcnRpZXNcbiAgICBjb25zdCBbY2Fyb3VzZWxQcm9wZXJ0aWVzLCBzZXRDYXJvdXNlbFByb3BlcnRpZXNdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvKlxuICAgICAgICB0aGlzIG1ldGhvZCBidWlsdCB0byBoYW5kbGUgaWYgdGhlIGNhcm91c2VsIGhhcyBiZWVuIHJlbmRlcmVkIGluc2lkZSBhIGNvbnRhaW5lclxuICAgICAgICB0aGF0IGlzIG5vdCBjb3ZlcmluZyB0aGUgd2luZG93J3MgZnVsbCB3aWR0aFxuICAgICovXG4gICAgY29uc3Qgc2V0TmV3UmVzcG9uc2l2ZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJhdGUgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHNsaWRlckNvbnRhaW5lcj8uY3VycmVudD8uY2xpZW50V2lkdGg7XG4gICAgICAgIGlmIChyYXRlID4gMS40KSB7XG4gICAgICAgICAgICBsZXQgbmV3UmVzcG9uc2l2ZSA9IGdldE5ld1Jlc3BvbnNpdmVWYWx1ZXMocmF0ZSk7XG4gICAgICAgICAgICBzZXRSZXNwb25zaXZlKHsgLi4ubmV3UmVzcG9uc2l2ZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFJlc3BvbnNpdmUoeyAuLi5kZWZhdWx0UmVzcG9uc2l2ZSB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBGaXJlZCB3aGVuIHJlYWNoIHRoZSBlbmQgb2YgdGhlIHNsaWRlciBvciB3aGVuIHJlc2l6ZSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgPT4gbW92ZSB0byB0aGUgZmlyc3QgaXRlbVxuICAgICovXG4gICAgY29uc3QgcmVzZXRTbGlkZXIgPSAoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRBY3RpdmVJZHgoMCk7XG4gICAgICAgIHNldEFjdGl2ZUNsYXNzKHN0YXR1c0xpc3QucmVzZXQsIG51bGwsIDApO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgIEZpcmVkIHdoZW4gZ2UgYmFjayB3aGVuIHN0ZXAgZnJvbSB0aGUgZmlyc3QgaXRlbVxuICAgICAgID0+IG1vdmUgdG8gdGhlIGxhc3QgaXRlbVxuICAgKi9cbiAgICBjb25zdCBzbGlkZVRvVGhlRW5kID0gKCkgPT4ge1xuICAgICAgICBjYXJvdXNlbFByb3BlcnRpZXM/LnNsaWRlVG8obnVtYmVyT2ZBbGxJdGVtcyAtIG51bWJlck9mRGlzcGxheWVkSXRlbXMgKyAxKTtcbiAgICAgICAgc2V0QWN0aXZlQ2xhc3Moc3RhdHVzTGlzdC5nb0xhc3QsIG51bGwsIG51bWJlck9mQWxsSXRlbXMpO1xuICAgICAgICBzZXRDdXJyZW50QWN0aXZlSWR4KG51bWJlck9mQWxsSXRlbXMpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBGaXJlZCB3aGVuIGNsaWNraW5nIFwicHJldmlvdXNcIiBidXR0b25cbiAgICAqL1xuICAgIGNvbnN0IHByZXZDbGlja2VkID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWN1cnJlbnRBY3RpdmVJZHgpIHtcbiAgICAgICAgICAgIC8vIGN1cnJlbnRBY3RpdmVJZHggPT09IDAsIHRoZSBhY3RpdmUgaXRlbSBpcyB0aGUgZmlyc3Qgb25lLCBtb3ZlIHRvIHRoZSBsYXN0XG4gICAgICAgICAgICBzbGlkZVRvVGhlRW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRBY3RpdmVDbGFzcyhzdGF0dXNMaXN0LnByZXYsIGNhcm91c2VsUHJvcGVydGllcz8uc2xpZGVQcmV2LCBjdXJyZW50QWN0aXZlSWR4IC0gMSk7XG4gICAgICAgICAgICBzZXRDdXJyZW50QWN0aXZlSWR4KGN1cnJlbnRBY3RpdmVJZHggLSAxKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBGaXJlZCB3aGVuIGNsaWNraW5nIFwiTmV4dFwiIGJ1dHRvblxuICAgICovXG4gICAgY29uc3QgbmV4dENsaWNrZWQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50QWN0aXZlSWR4ID09PSBudW1iZXJPZkFsbEl0ZW1zKSB7XG4gICAgICAgICAgICAvLyB0aGUgYWN0aXZlIGl0ZW0gaXMgdGhlIGxhc3Qgb25lLCBtb3ZlIHRvIHRoZSBmaXJzdFxuICAgICAgICAgICAgY2Fyb3VzZWxQcm9wZXJ0aWVzPy5zbGlkZVRvKDApO1xuICAgICAgICAgICAgcmVzZXRTbGlkZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZUNsYXNzKHN0YXR1c0xpc3QubmV4dCwgY2Fyb3VzZWxQcm9wZXJ0aWVzPy5zbGlkZU5leHQsIGN1cnJlbnRBY3RpdmVJZHggKyAxKTtcbiAgICAgICAgICAgIHNldEN1cnJlbnRBY3RpdmVJZHgoY3VycmVudEFjdGl2ZUlkeCArIDEpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIFJlbW92ZSBwcmV2aW91cyBhY3RpdmUgaXRlbSBhbmQgZ2V0IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0aGF0IHdlIHdhbnQgdG8gc2V0IGl0IGFjdGl2ZVxuICAgICovXG4gICAgY29uc3QgcmVtb3ZlQWN0aXZlQ2xhc3MgPSAoc3RhdHVzLCBhbGxJdGVtcykgPT4ge1xuICAgICAgICBsZXQgaXRlbUlkeFRvU2V0QWN0aXZlID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbEl0ZW1zPy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0aGF0IHdlIHdhbnQgdG8gc2V0IGl0IGFjdGl2ZSBpbiB0aGUgXCJhbGwgaXRlbXNcIiBhcnJheVxuICAgICAgICAgICAgLy8gTk9URTogd2UgY2FuJ3QgdXNlIHRoZSBzdGF0ZSBcImN1cnJlbnRBY3RpdmVJZHhcIiBiZWNhdXNlIFwiYWxsSXRlbXNcIiBpcyBjb250YWluaW5nIHRoZSBjbG9uZWQgaXRlbSBhbHNvXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgYWxsSXRlbXNbaV0uY2xhc3NMaXN0Py5jb250YWlucyhjb21tb25DbGFzc2VzLmFjdGl2ZSkgJiZcbiAgICAgICAgICAgICAgICAhYWxsSXRlbXNbaV0/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdD8uY29udGFpbnMoXCJfX2Nsb25lZFwiKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgbmV4dCBwcmVzc2VkIHdpbGwgYmUgdGhlIG5leHQgaW5kZXgsIGlmIHByZXZpb3VzIHByZXNzZWQgd2lsbCBiZSB0aGUgcHJldmlvdXMgaW5kZXhcbiAgICAgICAgICAgICAgICBpdGVtSWR4VG9TZXRBY3RpdmUgPSBzdGF0dXMgPT09IHN0YXR1c0xpc3QubmV4dCA/IGkgKyAxIDogaSAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbGxJdGVtc1tpXS5jbGFzc0xpc3Q/LnJlbW92ZShjb21tb25DbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbUlkeFRvU2V0QWN0aXZlO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBzZXR0aW5nIHRoZSBjdXJyZW4gYWN0aXZlIGNsYXNzLCBhbmQgc2xpZGUgbGVmdCBvciByaWdodCB3aGVuIG5lZWRlZFxuICAgICovXG4gICAgY29uc3Qgc2V0QWN0aXZlQ2xhc3MgPSAoc3RhdHVzLCBzbGlkZUxlZnRPclJpZ2h0LCBhY3Rpb25JZHgpID0+IHtcbiAgICAgICAgbGV0IGFsbEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dW5pcXVlQ2xhc3N9YCk/LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NvbW1vbkNsYXNzZXMuaXRlbX1gKTtcbiAgICAgICAgbGV0IGl0ZW1JZHhUb1NldEFjdGl2ZSA9IHJlbW92ZUFjdGl2ZUNsYXNzKHN0YXR1cywgYWxsSXRlbXMpO1xuXG4gICAgICAgIC8vIFNldCBjdXJyZW50IGFjdGl2ZSBpdGVtXG4gICAgICAgIGlmIChzdGF0dXMgPT09IHN0YXR1c0xpc3QucmVzZXQpIHtcbiAgICAgICAgICAgIC8vIHF1ZXJ5U2VsZWN0b3JBbGwgPT0+IHRoZSBvcmlnaW5hbCBpdGVtIGFuZCB0aGUgY2xvbmVkIG9uZVxuICAgICAgICAgICAgLy8gaW4gdGhpcyBjYXNlIHRoZSBmaXJzdCBvbmUgaXMgdGhlIG9yaWdpbmFsIC1cInJlYWN0LWFsaWNlLWNhcm91c2VcIiB3YXkgb2Ygd29yay1cbiAgICAgICAgICAgIGxldCBmaXJzdFNsaWRlID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihgLiR7dW5pcXVlQ2xhc3N9YClcbiAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2FjdGl2ZVNsaWRlQ2xhc3Nlcy5maXJzdF9pdGVtfWApO1xuICAgICAgICAgICAgZmlyc3RTbGlkZVswXT8uY2xhc3NMaXN0Py5hZGQoY29tbW9uQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gc3RhdHVzTGlzdC5nb0xhc3QpIHtcbiAgICAgICAgICAgIC8vIHF1ZXJ5U2VsZWN0b3JBbGwgPT0+IHRoZSBvcmlnaW5hbCBpdGVtIGFuZCB0aGUgY2xvbmVkIG9uZVxuICAgICAgICAgICAgLy8gaW4gdGhpcyBjYXNlIHRoZSBzZWNvbmQgb25lIGlzIHRoZSBvcmlnaW5hbCAtXCJyZWFjdC1hbGljZS1jYXJvdXNlXCIgd2F5IG9mIHdvcmstXG4gICAgICAgICAgICBsZXQgbGFzdFNsaWRlID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihgLiR7dW5pcXVlQ2xhc3N9YClcbiAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2FjdGl2ZVNsaWRlQ2xhc3Nlcy5sYXN0X2l0ZW19YCk7XG4gICAgICAgICAgICBsYXN0U2xpZGVbMV0/LmNsYXNzTGlzdD8uYWRkKGNvbW1vbkNsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vdCBjb250YWluaW5nIGFjdGl2ZSBtZWFucyB0aGF0IHRoZSBuZXh0L3ByZXYgaXRlbSBpcyBub3QgYXBwZWFyaW5nIGluIHRoZSBzY3JlZW4gcmlnaHQgbm93XG4gICAgICAgICAgICAvLyBzbGlkZSB3aGVuIHJlYWNoIHRvIHRoZSBzdGFydC9lbmQgb2YgdGhlIGFjdGl2ZSBpdGVtXG4gICAgICAgICAgICBpZiAoIWFsbEl0ZW1zW2l0ZW1JZHhUb1NldEFjdGl2ZV0/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdD8uY29udGFpbnMoXCJfX2FjdGl2ZVwiKSkge1xuICAgICAgICAgICAgICAgIHNsaWRlTGVmdE9yUmlnaHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsbEl0ZW1zW2l0ZW1JZHhUb1NldEFjdGl2ZV0/LmNsYXNzTGlzdD8uYWRkKGNvbW1vbkNsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpcmUgdGhlIGFjdGlvbiB0aGF0IHJlbGF0ZWQgdG8gdGhlIG5ldyBhY3RpdmUgaXRlbVxuICAgICAgICBsZXQgYWN0aW9uVG9GaXJlID0gcHJvcHMuYWN0aW9uPy5nZXQocHJvcHMuZGF0YS5pdGVtcz8uW2FjdGlvbklkeF0pO1xuICAgICAgICBvblNsaWRlQ2xpY2tlZChhY3Rpb25Ub0ZpcmUpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBmaXJlZCB3aGVuIGluaXRpYWxpemF0aW9uIHRoZSBjYXJvdXNlbFxuICAgICovXG4gICAgY29uc3Qgb25DYXJvdXNlbEluaXQgPSBlID0+IHtcbiAgICAgICAgc2V0TnVtYmVyT2ZEaXNwbGF5ZWRJdGVtcyhlLml0ZW1zSW5TbGlkZSk7XG4gICAgICAgIHNldFJlc3BvbnNpdmUoeyAuLi5yZXNwb25zaXZlIH0pO1xuXG4gICAgICAgIGxldCBmaXJzdEl0ZW1BY3Rpb24gPSBwcm9wcy5hY3Rpb24/LmdldChwcm9wcy5kYXRhLml0ZW1zPy5bMF0pO1xuICAgICAgICBvblNsaWRlQ2xpY2tlZChmaXJzdEl0ZW1BY3Rpb24pO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBmaXJlZCB3aGVuIHJlc2l6aW5nIHRoZSBjYXJvdXNlbCwgY2Fyb3VzZWwgd2lsbCBhbHdheXMgc2xpZGUgdG8gdGhlIGZpcnN0IGl0ZW0gd2hlbiByZXNpemluZyAtXCJyZWFjdC1hbGljZS1jYXJvdXNlXCIgd2F5IG9mIHdvcmstXG4gICAgKi9cbiAgICBjb25zdCBvbkNhcm91c2VsUmVzaXplID0gZSA9PiB7XG4gICAgICAgIHNldE51bWJlck9mRGlzcGxheWVkSXRlbXMoZS5pdGVtc0luU2xpZGUpO1xuICAgICAgICBzZXROZXdSZXNwb25zaXZlKCk7XG4gICAgICAgIHJlc2V0U2xpZGVyKCk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIGZpcmVkIHRoZSBjdXJyZW50IGFjdGl2ZSBpdGVtIGFjdGlvbiBpZiBmb3VuZFxuICAgICovXG4gICAgY29uc3Qgb25TbGlkZUNsaWNrZWQgPSBhY3Rpb24gPT4ge1xuICAgICAgICBpZiAoYWN0aW9uPy5jYW5FeGVjdXRlKSBhY3Rpb24uZXhlY3V0ZSgpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMuZGF0YT8uc3RhdHVzID09PSBcImF2YWlsYWJsZVwiICYmICFjYXJvdXNlbF9pdGVtcz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgbmV3RGF0YSA9IHByb3BzLmRhdGEuaXRlbXMubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NvbW1vbkNsYXNzZXMuaXRlbX0gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeCA9PT0gMCA/IGFjdGl2ZVNsaWRlQ2xhc3Nlcy5maXJzdF9pdGVtICsgXCIgXCIgKyBjb21tb25DbGFzc2VzLmFjdGl2ZSA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSAke2lkeCA9PT0gcHJvcHMuZGF0YS5pdGVtcy5sZW5ndGggLSAxID8gYWN0aXZlU2xpZGVDbGFzc2VzLmxhc3RfaXRlbSA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jb250ZW50LmdldChpdGVtKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpO1xuXG4gICAgICAgICAgICBzZXROdW1iZXJPZkFsbEl0ZW1zKG5ld0RhdGEubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBzZXRfY2Fyb3VzZWxfaXRlbXMobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9LCBbcHJvcHMuZGF0YV0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gc2V0IGEgdW5pcXVlIGNsYXNzIGluIGNhc2Ugb2YgdXNpbmcgdHdvIGRpZmZlcmVudCBjYXJvdXNlbCBpbnN0YW5jZXMgaW4gdGhlIHNhbWUgZG9jdW1lbnRcbiAgICAgICAgc2V0VW5pcXVlQ2xhc3MoXCJhLVwiICsgdXVpZHY0KCkpO1xuICAgIH0sIFtdKTtcblxuICAgIC8qXG4gICAgICAgIHNldCB0aGUgcmVzcG9uc2l2ZSBvYmplY3QgYWZ0ZXIgaW5pdGlhbGl6ZSB0aGUgY29udGFpbmVyIHNvIGl0IHRha2UgdGhlIGNvcnJlY3QgZGltZW5zaW9uc1xuICAgICovXG4gICAgY29uc3QgY2Fyb3VzZWxDb250YWluZXIgPSB1c2VDYWxsYmFjayhub2RlID0+IHtcbiAgICAgICAgaWYgKG5vZGUpIHNldE5ld1Jlc3BvbnNpdmUoKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gY2Fyb3VzZWxfaXRlbXM/Lmxlbmd0aCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FjdGl2ZVNsaWRlQ2xhc3Nlcy5hY3RpdmVfc2xpZGVfY29udGFpbmVyfSByZWY9e2Nhcm91c2VsQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXthY3RpdmVTbGlkZUNsYXNzZXMucHJldl9idG59IG9uQ2xpY2s9e3ByZXZDbGlja2VkfT48L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbdW5pcXVlQ2xhc3MsIGFjdGl2ZVNsaWRlQ2xhc3Nlcy5hY3RpdmVfc2xpZGVfd3JhcHBlcl0uam9pbihcIiBcIil9IHJlZj17c2xpZGVyQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICB7cmVzcG9uc2l2ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxBbGljZUNhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlICdyZWFjdC1hbGljZS1jYXJvdXNlbCcgYWxsIG1ldGhvZCBhbmQgcHJvcGVydGllcyBzbyB3ZSBjYW4gb3ZlcnJpZGUgZGVmYXVsdCBuZXh0IGFuZCBwcmV2aW91cyBidXR0b25zIGJlaGF2aW9yXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VsID0+IHNldENhcm91c2VsUHJvcGVydGllcyhlbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17Y2Fyb3VzZWxfaXRlbXN9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvUGxheT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQnV0dG9uc0NvbnRyb2xzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZURvdHNDb250cm9scz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNpbmcgdGhlIGFuaW1hdGlvbiBEdXJhdGlvbiBtb3JlIHRoYW4gMTAwIHdpbGwgY3Jhc2ggdGhlIHNsaWRpbmcgaW4gdGhlIGNhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbj17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmROYXZpZ2F0aW9uPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlVHJhY2tpbmc9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hUcmFja2luZz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkluaXRpYWxpemVkPXtvbkNhcm91c2VsSW5pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVzaXplZD17b25DYXJvdXNlbFJlc2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YWN0aXZlU2xpZGVDbGFzc2VzLm5leHRfYnRufSBvbkNsaWNrPXtuZXh0Q2xpY2tlZH0+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21tb25DbGFzc2VzLm11bHRpX2VtcHR5X2NvbnRhaW5lcn0+PC9kaXY+XG4gICAgKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vdWkvTXVsdGlDYXJvdXNlbC5jc3NcIjtcbmltcG9ydCBOb3JtYWxDYXJvdXNlbCBmcm9tIFwiLi9jb21wb25lbnRzL05vcm1hbENhcm91c2VsXCI7XG5pbXBvcnQgQWN0aXZlU2xpZGVDYXJvdXNlbCBmcm9tIFwiLi9jb21wb25lbnRzL0FjdGl2ZVNsaWRlQ2Fyb3VzZWxcIjtcbmltcG9ydCB7IGNvbW1vbkNsYXNzZXMgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlbHBlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gTXVsdGlDYXJvdXNlbChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgICgocHJvcHMuY2Fyb3VzZWxUeXBlID09PSBcIm5vcm1hbFwiIHx8IHByb3BzLmNhcm91c2VsVHlwZSA9PT0gXCJhY3RpdmVcIikgJiYgKFxuICAgICAgICAgICAgPE5vcm1hbENhcm91c2VsXG4gICAgICAgICAgICAgICAgY2Fyb3VzZWxUeXBlPXtwcm9wcy5jYXJvdXNlbFR5cGV9XG4gICAgICAgICAgICAgICAgZGF0YT17cHJvcHMuZGF0YX1cbiAgICAgICAgICAgICAgICBhY3Rpb249e3Byb3BzLmFjdGlvbn1cbiAgICAgICAgICAgICAgICBjb250ZW50PXtwcm9wcy5jb250ZW50fVxuICAgICAgICAgICAgICAgIGluZmluaXRlPXtwcm9wcy5pbmZpbml0ZX1cbiAgICAgICAgICAgICAgICBhdXRvUGxheT17cHJvcHMuYXV0b1BsYXl9XG4gICAgICAgICAgICAgICAgYXV0b1BsYXlEaXJlY3Rpb249e3Byb3BzLmF1dG9QbGF5RGlyZWN0aW9ufVxuICAgICAgICAgICAgICAgIGF1dG9QbGF5Q29udHJvbHM9e3Byb3BzLmF1dG9QbGF5Q29udHJvbHN9XG4gICAgICAgICAgICAgICAgZGlzYWJsZUJ1dHRvbnNDb250cm9scz17cHJvcHMuZGlzYWJsZUJ1dHRvbnNDb250cm9sc31cbiAgICAgICAgICAgICAgICBkaXNhYmxlRG90c0NvbnRyb2xzPXtwcm9wcy5kaXNhYmxlRG90c0NvbnRyb2xzfVxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uPXtwcm9wcy5hbmltYXRpb25EdXJhdGlvbn1cbiAgICAgICAgICAgICAgICBhbmltYXRpb25UeXBlPXtwcm9wcy5hbmltYXRpb25UeXBlfVxuICAgICAgICAgICAgICAgIGtleWJvYXJkTmF2aWdhdGlvbj17cHJvcHMua2V5Ym9hcmROYXZpZ2F0aW9ufVxuICAgICAgICAgICAgICAgIG1vdXNlVHJhY2tpbmc9e3Byb3BzLm1vdXNlVHJhY2tpbmd9XG4gICAgICAgICAgICAgICAgdG91Y2hUcmFja2luZz17cHJvcHMudG91Y2hUcmFja2luZ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICkpIHx8XG4gICAgICAgIChwcm9wcy5jYXJvdXNlbFR5cGUgPT09IFwic2xpZGVcIiAmJiAoXG4gICAgICAgICAgICA8QWN0aXZlU2xpZGVDYXJvdXNlbCBkYXRhPXtwcm9wcy5kYXRhfSBhY3Rpb249e3Byb3BzLmFjdGlvbn0gY29udGVudD17cHJvcHMuY29udGVudH0gLz5cbiAgICAgICAgKSkgfHwgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbW1vbkNsYXNzZXMuZXJyb3J9PlxuICAgICAgICAgICAgICAgIDxwPkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGluaXRpYWxpemluZyB0aGUgQ2Fyb3VzZWw8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJ0eXBlcyIsIlRyYWNlRGlyZWN0aW9uS2V5IiwiRGlyZWN0aW9uIiwiQXhpcyIsImNhbGN1bGF0ZURpcmVjdGlvbl8xIiwiY2FsY3VsYXRlRGlyZWN0aW9uIiwiX3R5cGVzIiwicmVxdWlyZSIsInRyYWNlIiwiZGlyZWN0aW9uIiwibmVnYXRpdmUiLCJORUdBVElWRSIsInBvc2l0aXZlIiwiUE9TSVRJVkUiLCJjdXJyZW50IiwibGVuZ3RoIiwicHJldmlvdXMiLCJldmVyeSIsImkiLCJOT05FIiwiY29tbW9uIiwiZ2V0RGlyZWN0aW9uS2V5Iiwib2JqZWN0IiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwia2V5Iiwia2V5cyIsInRvU3RyaW5nIiwiZ2V0RGlyZWN0aW9uVmFsdWUiLCJ2YWx1ZXMiLCJnZXREaWZmZXJlbmNlIiwieCIsInkiLCJNYXRoIiwiYWJzIiwicmVzb2x2ZUF4aXNEaXJlY3Rpb24iLCJheGlzIiwiTEVGVCIsIlJJR0hUIiwiWSIsIkJPVFRPTSIsIlRPUCIsImNhbGN1bGF0ZURpcmVjdGlvbkRlbHRhXzEiLCJjYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSIsIl9jb21tb24iLCJ0cmFjZURpcmVjdGlvbnMiLCJkZWx0YSIsImN1cnJlbnRLZXkiLCJjdXJyZW50VmFsdWUiLCJwcmV2IiwicHJldktleSIsInByZXZWYWx1ZSIsImRpZmZlcmVuY2UiLCJjYWxjdWxhdGVEdXJhdGlvbl8xIiwiY2FsY3VsYXRlRHVyYXRpb24iLCJwcmV2VGltZSIsIm5leHRUaW1lIiwiY2FsY3VsYXRlTW92aW5nUG9zaXRpb25fMSIsImNhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uIiwiZSIsInRvdWNoZXMiLCJjaGFuZ2VkVG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwidXBkYXRlVHJhY2VfMSIsInVwZGF0ZVRyYWNlIiwibGFzdCIsInB1c2giLCJjYWxjdWxhdGVUcmFjZURpcmVjdGlvbnNfMSIsImNhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucyIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsInRpY2tzIiwidGljayIsImN1cnJlbnREaXJlY3Rpb24iLCJzbGljZSIsInJlc29sdmVEaXJlY3Rpb25fMSIsInJlc29sdmVEaXJlY3Rpb24iLCJfY2FsY3VsYXRlRGlyZWN0aW9uIiwiX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucyIsIl9jYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSIsIlgiLCJkaXJlY3Rpb25EZWx0YSIsImRpcmVjdGlvbnMiLCJfZGlyZWN0aW9uIiwiY2FsY3VsYXRlVmVsb2NpdHlfMSIsImNhbGN1bGF0ZVZlbG9jaXR5IiwidGltZSIsIm1hZ25pdHVkZSIsInNxcnQiLCJjYWxjdWxhdGVQb3NpdGlvbl8xIiwiY2FsY3VsYXRlUG9zaXRpb24iLCJfdXBkYXRlVHJhY2UiLCJfcmVzb2x2ZURpcmVjdGlvbiIsIl9jYWxjdWxhdGVEdXJhdGlvbiIsIl9jYWxjdWxhdGVWZWxvY2l0eSIsInN0YXRlIiwib3B0aW9ucyIsInN0YXJ0IiwidHJhY2VYIiwidHJhY2VZIiwicm90YXRlUG9zaXRpb24iLCJkZWx0YVgiLCJkZWx0YVkiLCJhYnNYIiwiYWJzWSIsImRpcmVjdGlvblgiLCJkaXJlY3Rpb25ZIiwiZHVyYXRpb24iLCJEYXRlIiwibm93IiwidmVsb2NpdHkiLCJwb3NpdGlvblgiLCJwb3NpdGlvblkiLCJjaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzXzEiLCJjaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzIiwiQm9vbGVhbiIsImNyZWF0ZU9wdGlvbnNfMSIsImNyZWF0ZU9wdGlvbnMiLCJwcm94eSIsImdldCIsImlzUGFzc2l2ZVN1cHBvcnRlZCIsImNoZWNrSXNQYXNzaXZlU3VwcG9ydGVkXzEiLCJjaGVja0lzUGFzc2l2ZVN1cHBvcnRlZCIsIl9jcmVhdGVPcHRpb25zIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5vb3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXJyIiwiY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkXzEiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImNoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwiZ2V0SW5pdGlhbFN0YXRlXzEiLCJvd25LZXlzIiwiZW51bWVyYWJsZU9ubHkiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0Iiwic291cmNlIiwiZm9yRWFjaCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZ2V0SW5pdGlhbFN0YXRlIiwiaXNTd2lwaW5nIiwiZ2V0SW5pdGlhbFByb3BzXzEiLCJnZXRJbml0aWFsUHJvcHMiLCJwcm9wcyIsImVsZW1lbnQiLCJyb3RhdGlvbkFuZ2xlIiwibW91c2VUcmFja2luZ0VuYWJsZWQiLCJ0b3VjaFRyYWNraW5nRW5hYmxlZCIsInByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQiLCJwcmV2ZW50VHJhY2tpbmdPbk1vdXNlbGVhdmUiLCJnZXRPcHRpb25zXzEiLCJnZXRPcHRpb25zIiwicGFzc2l2ZSIsInJvdGF0ZUJ5QW5nbGVfMSIsInJvdGF0ZUJ5QW5nbGUiLCJwb3NpdGlvbiIsImFuZ2xlIiwiYW5nbGVJblJhZGlhbnMiLCJQSSIsInJvdGF0ZWRYIiwiY29zIiwic2luIiwicm90YXRlZFkiLCJfY2FsY3VsYXRlTW92aW5nUG9zaXRpb24iLCJfY2FsY3VsYXRlUG9zaXRpb24iLCJfY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyIsIl9jaGVja0lzUGFzc2l2ZVN1cHBvcnRlZCIsIl9jaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQiLCJfZ2V0SW5pdGlhbFN0YXRlIiwiX2dldEluaXRpYWxQcm9wcyIsIl9nZXRPcHRpb25zIiwiX3JvdGF0ZUJ5QW5nbGUiLCJfZXhwb3J0TmFtZXMiLCJVdGlscyIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwibm9kZUludGVyb3AiLCJXZWFrTWFwIiwiY2FjaGVCYWJlbEludGVyb3AiLCJjYWNoZU5vZGVJbnRlcm9wIiwiX19lc01vZHVsZSIsImNhY2hlIiwiaGFzIiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZGVzYyIsInNldCIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsImRlc2NyaXB0b3IiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJWYW5pbGxhU3dpcGUiLCJoYW5kbGVTd2lwZVN0YXJ0IiwiYmluZCIsImhhbmRsZVN3aXBlTW92ZSIsImhhbmRsZVN3aXBlRW5kIiwiaGFuZGxlTW91c2VEb3duIiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlTW91c2VVcCIsImhhbmRsZU1vdXNlTGVhdmUiLCJpbml0Iiwic2V0dXBUb3VjaExpc3RlbmVycyIsInNldHVwTW91c2VMaXN0ZW5lcnMiLCJ1cGRhdGUiLCJwcmV2UHJvcHMiLCJuZXh0UHJvcHMiLCJhc3NpZ24iLCJkZXN0cm95IiwiY2xlYW51cE1vdXNlTGlzdGVuZXJzIiwiY2xlYW51cFRvdWNoTGlzdGVuZXJzIiwiX3RoaXMkcHJvcHMiLCJsaXN0ZW5lciIsIl90aGlzJHByb3BzMiIsIl90aGlzJHByb3BzMyIsImdldEV2ZW50RGF0YSIsIm1vdmluZ1Bvc2l0aW9uIiwiX1V0aWxzJHJvdGF0ZUJ5QW5nbGUiLCJfdGhpcyRzdGF0ZSIsIl90aGlzJGdldEV2ZW50RGF0YSIsIl90aGlzJHByb3BzNCIsIm9uU3dpcGVTdGFydCIsIm9uU3dpcGluZyIsImNhbmNlbGFibGUiLCJwcmV2ZW50RGVmYXVsdCIsIk51bWJlciIsIl90aGlzJHByb3BzNSIsIm9uU3dpcGVkIiwib25UYXAiLCJfcG9zaXRpb24iLCJpc1RvdWNoRXZlbnRzU3VwcG9ydGVkIiwiQUNUSU9OIiwiSU5JVCIsIlJFU0laRSIsIlVQREFURSIsIkV2ZW50VHlwZSIsIkZBREVPVVQiLCJTTElERSIsIkFuaW1hdGlvblR5cGUiLCJERUZBVUxUIiwiQUxMIiwiQXV0b1BsYXlTdHJhdGVneSIsIkFMVEVSTkFURSIsIlJFU1BPTlNJVkUiLCJDb250cm9sc1N0cmF0ZWd5IiwiUlRMIiwiTFRSIiwiQXV0b3BsYXlEaXJlY3Rpb24iLCJBTklNQVRFRCIsIlJPT1QiLCJXUkFQUEVSIiwiU1RBR0UiLCJTVEFHRV9JVEVNIiwiRE9UUyIsIkRPVFNfSVRFTSIsIlBMQVlfQlROIiwiUExBWV9CVE5fSVRFTSIsIlBMQVlfQlROX1dSQVBQRVIiLCJTTElERV9JTkZPIiwiU0xJREVfSU5GT19JVEVNIiwiQlVUVE9OX1BSRVYiLCJCVVRUT05fUFJFVl9XUkFQUEVSIiwiQlVUVE9OX1BSRVZfSVRFTSIsIkJVVFRPTl9ORVhUIiwiQlVUVE9OX05FWFRfV1JBUFBFUiIsIkJVVFRPTl9ORVhUX0lURU0iLCJDbGFzc25hbWVzIiwiQUNUSVZFIiwiSU5BQ1RJVkUiLCJDTE9ORUQiLCJDVVNUT00iLCJQQVVTRSIsIlNFUEFSQVRPUiIsIlNTUiIsIlRBUkdFVCIsIk1vZGlmaWVycyIsInR5cGVzXzEiLCJhY3RpdmVJbmRleCIsImFuaW1hdGlvbkR1cmF0aW9uIiwiYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb24iLCJhbmltYXRpb25UeXBlIiwiYXV0b0hlaWdodCIsImF1dG9XaWR0aCIsImF1dG9QbGF5IiwiYXV0b1BsYXlDb250cm9scyIsImF1dG9QbGF5RGlyZWN0aW9uIiwiYXV0b1BsYXlJbnRlcnZhbCIsImF1dG9QbGF5U3RyYXRlZ3kiLCJjaGlsZHJlbiIsImNvbnRyb2xzU3RyYXRlZ3kiLCJkaXNhYmxlQnV0dG9uc0NvbnRyb2xzIiwiZGlzYWJsZURvdHNDb250cm9scyIsImRpc2FibGVTbGlkZUluZm8iLCJpbmZpbml0ZSIsImlubmVyV2lkdGgiLCJpdGVtcyIsImtleWJvYXJkTmF2aWdhdGlvbiIsIm1vdXNlVHJhY2tpbmciLCJuYW1lIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJyZXNwb25zaXZlIiwic3dpcGVEZWx0YSIsInN3aXBlRXh0cmFQYWRkaW5nIiwic3NyU2lsZW50TW9kZSIsInRvdWNoVHJhY2tpbmciLCJ0b3VjaE1vdmVEZWZhdWx0RXZlbnRzIiwib25Jbml0aWFsaXplZCIsIm9uUmVzaXplZCIsIm9uUmVzaXplRXZlbnQiLCJvblNsaWRlQ2hhbmdlIiwib25TbGlkZUNoYW5nZWQiLCJfX2Fzc2lnbiIsIm8iLCJ0IiwiciIsInMiLCJtYXBQYXJ0aWFsQ29vcmRzIiwibWFwIiwid2lkdGgiLCJtYXBQb3NpdGlvbkNvb3JkcyIsImdldFNoaWZ0SW5kZXgiLCJnZXRTdGFydEluZGV4IiwiZ2V0QWN0aXZlSW5kZXgiLCJzdGFydEluZGV4IiwiaXRlbXNDb3VudCIsImdldFVwZGF0ZVNsaWRlUG9zaXRpb25JbmRleCIsInNob3VsZFJlY2FsY3VsYXRlU2xpZGVJbmRleCIsInNob3VsZENhbmNlbFNsaWRlQW5pbWF0aW9uIiwiZ2V0U3dpcGVMaW1pdE1pbiIsIml0ZW1zT2Zmc2V0IiwidHJhbnNmb3JtYXRpb25TZXQiLCJtaW4iLCJnZXRTd2lwZUxpbWl0TWF4IiwibiIsIml0ZW1zSW5TbGlkZSIsImdldEl0ZW1Db29yZHMiLCJzaG91bGRSZWNhbGN1bGF0ZVN3aXBlUG9zaXRpb24iLCJnZXRJc0xlZnREaXJlY3Rpb24iLCJnZXRTd2lwZVNoaWZ0VmFsdWUiLCJnZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleCIsImZpbmRJbmRleCIsImdldFN3aXBlVHJhbnNmb3JtYXRpb25DdXJzb3IiLCJnZXRTd2lwZVRvdWNoZW5kUG9zaXRpb24iLCJpc1N0YWdlQ29udGVudFBhcnRpYWwiLCJzd2lwZUFsbG93ZWRQb3NpdGlvbk1heCIsImdldFN3aXBlVG91Y2hlbmRJbmRleCIsImQiLCJhIiwidHJhbnNsYXRlM2QiLCJnZXRGYWRlb3V0QW5pbWF0aW9uSW5kZXgiLCJnZXRGYWRlb3V0QW5pbWF0aW9uUG9zaXRpb24iLCJzdGFnZVdpZHRoIiwiaXNWZXJ0aWNhbFRvdWNobW92ZURldGVjdGVkIiwiY29tbW9uXzEiLCJtYXBwZXJzXzEiLCJtYXRoXzEiLCJnZXRTbGlkZXMiLCJnZXRJdGVtc0NvdW50IiwiZ2V0SXRlbXNPZmZzZXQiLCJjcmVhdGVDbG9uZXMiLCJnZXRJdGVtc0luU2xpZGUiLCJ1bnNoaWZ0IiwiY29uY2F0IiwiaXNFbGVtZW50IiwiRWxlbWVudCIsIkhUTUxEb2N1bWVudCIsImNyZWF0ZUF1dG93aWR0aFRyYW5zZm9ybWF0aW9uU2V0IiwiQXJyYXkiLCJmcm9tIiwicmVkdWNlIiwiZ2V0RWxlbWVudERpbWVuc2lvbnMiLCJmaXJzdENoaWxkIiwiY29vcmRzIiwiY29udGVudCIsInBhcnRpYWwiLCJjcmVhdGVEZWZhdWx0VHJhbnNmb3JtYXRpb25TZXQiLCJnZXRJdGVtV2lkdGgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJnZXRBdXRvaGVpZ2h0UHJvcGVydHkiLCJnZXRFbGVtZW50Q3Vyc29yIiwiZ2V0RWxlbWVudEZpcnN0Q2hpbGQiLCJnZXRDb21wdXRlZFN0eWxlIiwicGFyc2VGbG9hdCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImNlaWwiLCJvZmZzZXRIZWlnaHQiLCJzaG91bGRIYW5kbGVSZXNpemVFdmVudCIsImFuaW1hdGUiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJnZXRSZW5kZXJXcmFwcGVyU3R5bGVzIiwiZ2V0VHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0UmVuZGVyU3RhZ2VTdHlsZXMiLCJnZXRSZW5kZXJTdGFnZUl0ZW1TdHlsZXMiLCJmYWRlb3V0QW5pbWF0aW9uSW5kZXgiLCJmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb24iLCJmYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZyIsImdldFRyYW5zbGF0ZTNkUHJvcGVydHkiLCJnZXRUb3VjaG1vdmVUcmFuc2xhdGVQb3NpdGlvbiIsImZsb29yIiwiZ2V0VHJhbnNsYXRlWFByb3BlcnR5IiwiZ2V0VHJhbnNmb3JtTWF0cml4IiwibWF0Y2giLCJlbGVtZW50c18xIiwiY2FuVXNlRE9NIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29uY2F0Q2xhc3NuYW1lcyIsImpvaW4iLCJnZXRJc1N0YWdlQ29udGVudFBhcnRpYWwiLCJpdGVtc0ZpdCIsImNhbGN1bGF0ZUluaXRpYWxTdGF0ZSIsImwiLCJtIiwiYyIsInUiLCJmIiwiZyIsIkkiLCJTIiwicCIsInYiLCJjbG9uZXMiLCJzdGFnZUNvbnRlbnRXaWR0aCIsImluaXRpYWxTdGFnZUhlaWdodCIsImlzQXV0b1BsYXlpbmciLCJpc0F1dG9QbGF5Q2FuY2VsZWRPbkFjdGlvbiIsInN3aXBlTGltaXRNaW4iLCJzd2lwZUxpbWl0TWF4Iiwic3dpcGVTaGlmdFZhbHVlIiwiY2FuVXNlRG9tIiwiZ2V0UmVuZGVyU3RhZ2VJdGVtQ2xhc3NlcyIsImlzQWN0aXZlSXRlbSIsImlzQ2xvbmVkSXRlbSIsImlzVGFyZ2V0SXRlbSIsImRlYm91bmNlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImRlYnVnIiwiY29uc29sZSIsImdldEFjdGl2ZVNsaWRlSW5kZXgiLCJnZXRTbGlkZUluZGV4Rm9yTm9uTXVsdGlwbGVJdGVtcyIsImdldFNsaWRlSW5kZXhGb3JNdWx0aXBsZUl0ZW1zIiwiZ2V0QWN0aXZlU2xpZGVEb3RzTGVuZ3RoIiwiZ2V0U2xpZGVJbmZvIiwiaXRlbSIsImdldFNsaWRlSXRlbUluZm8iLCJpc1ByZXZTbGlkZURpc2FibGVkIiwiaXNOZXh0U2xpZGVEaXNhYmxlZCIsInNob3VsZERpc2FibGVDb250cm9scyIsImlzU3RyYXRlZ3kiLCJzaG91bGREaXNhYmxlRG90cyIsInNob3VsZERpc2FibGVCdXR0b25zIiwiaW5jbHVkZXMiLCJoYXNEb3RGb3JFYWNoU2xpZGUiLCJnZXREb3RzTmF2aWdhdGlvbkxlbmd0aCIsImNoZWNrSXNUaGVMYXN0RG90SW5kZXgiLCJnZXRJdGVtSW5kZXhGb3JEb3ROYXZpZ2F0aW9uIiwic2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkFjdGlvbiIsInNob3VsZENhbmNlbEF1dG9QbGF5T25Ib3ZlciIsIl9fY3JlYXRlQmluZGluZyIsImNyZWF0ZSIsIl9fZXhwb3J0U3RhciIsIl9faW1wb3J0RGVmYXVsdCIsImRlZmF1bHQiLCJyZWFjdF8xIiwidXRpbHNfMSIsIlNsaWRlSW5mbyIsInJlbmRlclNsaWRlSW5mbyIsImNsYXNzTmFtZSIsIlN0YWdlSXRlbSIsInN0eWxlcyIsIkRvdHNOYXZpZ2F0aW9uIiwib25DbGljayIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInJlbmRlckRvdHNJdGVtIiwiXyIsIkQiLCJpc0FjdGl2ZSIsIlBsYXlQYXVzZUJ1dHRvbiIsImlzUGxheWluZyIsInJlbmRlclBsYXlQYXVzZUJ1dHRvbiIsIlByZXZOZXh0QnV0dG9uIiwiaXNEaXNhYmxlZCIsInJlbmRlclByZXZCdXR0b24iLCJyZW5kZXJOZXh0QnV0dG9uIiwiU2xpZGVJbmZvXzEiLCJTdGFnZUl0ZW1fMSIsIkRvdHNOYXZpZ2F0aW9uXzEiLCJQbGF5UGF1c2VCdXR0b25fMSIsIlByZXZOZXh0QnV0dG9uXzEiLCJfX2V4dGVuZHMiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIlN0cmluZyIsIl9fc2V0TW9kdWxlRGVmYXVsdCIsIl9faW1wb3J0U3RhciIsIl9fYXdhaXRlciIsIlByb21pc2UiLCJuZXh0IiwidGhyb3ciLCJkb25lIiwidGhlbiIsIl9fZ2VuZXJhdG9yIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsInJldHVybiIsInBvcCIsInZhbmlsbGFfc3dpcGVfMSIsImRlZmF1bHRQcm9wc18xIiwiVmlld3MiLCJBbGljZUNhcm91c2VsIiwic3dpcGVMaXN0ZW5lciIsIl9oYW5kbGVLZXlib2FyZEV2ZW50cyIsImNvZGUiLCJfaGFuZGxlUGxheVBhdXNlVG9nZ2xlIiwic2xpZGVQcmV2Iiwic2xpZGVOZXh0IiwiX2hhbmRsZUJlZm9yZVNsaWRlRW5kIiwiX2hhbmRsZVVwZGF0ZVNsaWRlUG9zaXRpb24iLCJzZXRTdGF0ZSIsIl9oYW5kbGVTbGlkZUNoYW5nZWQiLCJfaGFuZGxlTW91c2VFbnRlciIsImlzSG92ZXJlZCIsIl9oYW5kbGVQYXVzZSIsIl9oYW5kbGVNb3VzZUxlYXZlIiwiX2hhbmRsZVBsYXkiLCJfY2xlYXJBdXRvUGxheVRpbWVvdXQiLCJoYXNVc2VyQWN0aW9uIiwiX3NldFJvb3RDb21wb25lbnRSZWYiLCJyb290RWxlbWVudCIsIl9zZXRTdGFnZUNvbXBvbmVudFJlZiIsInN0YWdlQ29tcG9uZW50IiwiX3JlbmRlclN0YWdlSXRlbSIsIl9yZW5kZXJTbGlkZUluZm8iLCJpc0FuaW1hdGlvbkRpc2FibGVkIiwiaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZCIsImNhbmNlbFRvdWNoQW5pbWF0aW9ucyIsInJvb3RDb21wb25lbnREaW1lbnNpb25zIiwic3RhcnRUb3VjaG1vdmVQb3NpdGlvbiIsInNsaWRlVG8iLCJfaGFuZGxlVG91Y2htb3ZlIiwiX2hhbmRsZVRvdWNoZW5kIiwiX2hhbmRsZURvdENsaWNrIiwiX2hhbmRsZVJlc2l6ZSIsIl9oYW5kbGVSZXNpemVEZWJvdW5jZWQiLCJfY2FuY2VsUmVzaXplRGVib3VuY2VkIiwiY29tcG9uZW50RGlkTW91bnQiLCJfc2V0SW5pdGlhbFN0YXRlIiwiX2FkZEV2ZW50TGlzdGVuZXJzIiwiX3NldHVwU3dpcGVIYW5kbGVycyIsImNvbXBvbmVudERpZFVwZGF0ZSIsImgiLCJfdXBkYXRlQ29tcG9uZW50IiwiX3VwZGF0ZVN3aXBlUHJvcHMiLCJfdXBkYXRlRXZlbnRMaXN0ZW5lcnMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIl9jYW5jZWxUaW1lb3V0QW5pbWF0aW9ucyIsIl9yZW1vdmVFdmVudExpc3RlbmVycyIsInNsaWRlIiwidHlwZSIsImlzRmFkZW91dEFuaW1hdGlvbkFsbG93ZWQiLCJfaGFuZGxlU2xpZGVUbyIsImV2ZW50VHlwZSIsImlzVHJ1c3RlZCIsIl9oYW5kbGVSZXNpemVkIiwiX3NldFRvdWNobW92ZVBvc2l0aW9uIiwiX2hhbmRsZVNsaWRlQ2hhbmdlIiwidG91Y2htb3ZlUG9zaXRpb24iLCJfY2xlYXJUb3VjaG1vdmVQb3NpdGlvbiIsIl9oYW5kbGVCZWZvcmVUb3VjaEVuZCIsInRvdWNoRW5kVGltZW91dElkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2xpZGVFbmRUaW1lb3V0SWQiLCJldmVudE9iamVjdCIsIl9zZXRBdXRvUGxheUludGVydmFsIiwiX2NsZWFyU2xpZGVFbmRUaW1lb3V0IiwiY2xlYXJUb3VjaGVuZFRpbWVvdXQiLCJhdXRvUGxheVRpbWVvdXRJZCIsIl9yZW5kZXJEb3RzTmF2aWdhdGlvbiIsIl9yZW5kZXJQcmV2QnV0dG9uIiwiX3JlbmRlck5leHRCdXR0b24iLCJfcmVuZGVyUGxheVBhdXNlQnV0dG9uIiwicmVuZGVyIiwicmVmIiwiZGVmYXVsdFByb3BzIiwiUHVyZUNvbXBvbmVudCIsImdldFJhbmRvbVZhbHVlcyIsInJuZHM4IiwiVWludDhBcnJheSIsInJuZyIsImNyeXB0byIsIkVycm9yIiwidmFsaWRhdGUiLCJ1dWlkIiwiUkVHRVgiLCJ0ZXN0IiwiYnl0ZVRvSGV4IiwidW5zYWZlU3RyaW5naWZ5IiwiYXJyIiwib2Zmc2V0IiwidG9Mb3dlckNhc2UiLCJwYXJzZSIsInBhcnNlSW50Iiwic3RyaW5nVG9CeXRlcyIsInN0ciIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYnl0ZXMiLCJjaGFyQ29kZUF0IiwiRE5TIiwiVVJMIiwidjM1IiwidmVyc2lvbiIsImhhc2hmdW5jIiwiZ2VuZXJhdGVVVUlEIiwibmFtZXNwYWNlIiwiYnVmIiwiX25hbWVzcGFjZSIsIm1kNSIsIm1zZyIsIm1kNVRvSGV4RW5jb2RlZEFycmF5Iiwid29yZHNUb01kNSIsImJ5dGVzVG9Xb3JkcyIsImlucHV0Iiwib3V0cHV0IiwibGVuZ3RoMzIiLCJoZXhUYWIiLCJoZXgiLCJjaGFyQXQiLCJnZXRPdXRwdXRMZW5ndGgiLCJpbnB1dExlbmd0aDgiLCJsZW4iLCJiIiwib2xkYSIsIm9sZGIiLCJvbGRjIiwib2xkZCIsIm1kNWZmIiwibWQ1Z2ciLCJtZDVoaCIsIm1kNWlpIiwic2FmZUFkZCIsImxlbmd0aDgiLCJVaW50MzJBcnJheSIsImxzdyIsIm1zdyIsImJpdFJvdGF0ZUxlZnQiLCJudW0iLCJjbnQiLCJtZDVjbW4iLCJxIiwicmFuZG9tVVVJRCIsInY0IiwibmF0aXZlIiwicm5kcyIsInJhbmRvbSIsInoiLCJST1RMIiwic2hhMSIsIksiLCJIIiwiaXNBcnJheSIsIk4iLCJNIiwiaiIsInBvdyIsIlciLCJUIiwiZGVmYXVsdFJlc3BvbnNpdmUiLCJnZXROZXdSZXNwb25zaXZlVmFsdWVzIiwicmF0ZSIsIm5ld1Jlc3BvbnNpdmUiLCJuZXdWYWx1ZSIsInJvdW5kIiwibWF4Iiwic3RhdHVzTGlzdCIsInJlc2V0IiwiZ29MYXN0IiwiY2xhc3Nlc0FjdGlvbiIsImFkZCIsInJlbW92ZSIsImNvbW1vbkNsYXNzZXMiLCJtdWx0aV9jb250YWluZXIiLCJtdWx0aV9lbXB0eV9jb250YWluZXIiLCJhY3RpdmUiLCJub19kb3RzIiwiZXJyb3IiLCJub3JtYWxDYXJvdXNlbENsYXNzZXMiLCJub3JtYWxfY29udGFpbmVyIiwibm9ybWFsX2l0ZW0iLCJhY3RpdmVDbGlja0NsYXNzZXMiLCJhY3RpdmVfY2xpY2tfY29udGFpbmVyIiwiYWN0aXZlX2NsaWNrX2l0ZW0iLCJhY3RpdmVfY2xpY2tfd2l0aF9idG4iLCJhY3RpdmVTbGlkZUNsYXNzZXMiLCJhY3RpdmVfc2xpZGVfY29udGFpbmVyIiwiYWN0aXZlX3NsaWRlX3dyYXBwZXIiLCJmaXJzdF9pdGVtIiwibGFzdF9pdGVtIiwicHJldl9idG4iLCJuZXh0X2J0biIsIk5vcm1hbENhcm91c2VsIiwiY2Fyb3VzZWxQYXJlbnQiLCJ1c2VSZWYiLCJjYXJvdXNlbF9pdGVtcyIsInNldF9jYXJvdXNlbF9pdGVtcyIsInVzZVN0YXRlIiwic2V0UmVzcG9uc2l2ZSIsInVuaXF1ZUNsYXNzIiwic2V0VW5pcXVlQ2xhc3MiLCJzZXROZXdSZXNwb25zaXZlIiwiY2xpZW50V2lkdGgiLCJhZGRPclJlbW92ZUNsYXNzTmFtZSIsIm5vZGUiLCJhY3Rpb24iLCJjbGFzc0xpc3QiLCJjaGFuZ2VBY3RpdmVDbGFzcyIsImdldElkeENsYXNzTmFtZSIsImNsaWNrZWRJdGVtIiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwiY2xhc3NOYW1lcyIsInNwbGl0Iiwib25DYXJkQ2xpY2tlZCIsImNhbkV4ZWN1dGUiLCJleGVjdXRlIiwiYWN0aXZlTm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaWR4Q2xhc3MiLCJpdGVtVG9TZXRBY3RpdmUiLCJvbkluaXRpYWxpemVkT3JSZXNpemVkIiwiY2Fyb3VzZWxUeXBlIiwiZmlyc3RDYXJvdXNlbEl0ZW0iLCJjbGljayIsInVzZUVmZmVjdCIsInV1aWR2NCIsInJlc2l6ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsImRhdGEiLCJzdGF0dXMiLCJBY3RpdmVTbGlkZUNhcm91c2VsIiwic2xpZGVyQ29udGFpbmVyIiwiY3VycmVudEFjdGl2ZUlkeCIsInNldEN1cnJlbnRBY3RpdmVJZHgiLCJudW1iZXJPZkRpc3BsYXllZEl0ZW1zIiwic2V0TnVtYmVyT2ZEaXNwbGF5ZWRJdGVtcyIsIm51bWJlck9mQWxsSXRlbXMiLCJzZXROdW1iZXJPZkFsbEl0ZW1zIiwiY2Fyb3VzZWxQcm9wZXJ0aWVzIiwic2V0Q2Fyb3VzZWxQcm9wZXJ0aWVzIiwicmVzZXRTbGlkZXIiLCJzZXRBY3RpdmVDbGFzcyIsInNsaWRlVG9UaGVFbmQiLCJwcmV2Q2xpY2tlZCIsIm5leHRDbGlja2VkIiwicmVtb3ZlQWN0aXZlQ2xhc3MiLCJhbGxJdGVtcyIsIml0ZW1JZHhUb1NldEFjdGl2ZSIsInBhcmVudEVsZW1lbnQiLCJzbGlkZUxlZnRPclJpZ2h0IiwiYWN0aW9uSWR4IiwiZmlyc3RTbGlkZSIsImxhc3RTbGlkZSIsImFjdGlvblRvRmlyZSIsIm9uU2xpZGVDbGlja2VkIiwib25DYXJvdXNlbEluaXQiLCJmaXJzdEl0ZW1BY3Rpb24iLCJvbkNhcm91c2VsUmVzaXplIiwibmV3RGF0YSIsImlkeCIsImNhcm91c2VsQ29udGFpbmVyIiwidXNlQ2FsbGJhY2siLCJlbCIsIk11bHRpQ2Fyb3VzZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0NDLEVBQUFBLEtBQUssRUFBRSxJQUFBO0FBQ1QsQ0FBQyxDQUFDLENBQUE7QUFDRkQsT0FBQUEsQ0FBQUEsaUJBQXlCLEdBQW9CRSxPQUFBLENBQUEsU0FBQSxlQUFlLEdBQUcsS0FBSyxFQUFDO0FBQ3JFLElBQUlDLGlCQUFpQixDQUFBO0FBQ0lELE9BQUEsQ0FBQSxpQkFBQSxHQUFHQyxpQkFBaUIsQ0FBQTtBQUU3QyxDQUFDLFVBQVVBLGlCQUFpQixFQUFFO0FBQzVCQSxFQUFBQSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsR0FBRyxVQUFVLENBQUE7QUFDMUNBLEVBQUFBLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxHQUFHLFVBQVUsQ0FBQTtBQUMxQ0EsRUFBQUEsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFBO0FBQ3BDLENBQUMsRUFBRUEsaUJBQWlCLEtBQThCRCxPQUFBLENBQUEsaUJBQUEsR0FBR0MsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUU3RSxJQUFJQyxTQUFTLENBQUE7QUFDSUYsT0FBQSxDQUFBLFNBQUEsR0FBR0UsVUFBUztBQUU3QixDQUFDLFVBQVVBLFNBQVMsRUFBRTtBQUNwQkEsRUFBQUEsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQTtBQUN4QkEsRUFBQUEsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQTtBQUMxQkEsRUFBQUEsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQTtBQUM1QkEsRUFBQUEsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQTtBQUM5QkEsRUFBQUEsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQTtBQUM1QixDQUFDLEVBQUVBLFNBQVMsS0FBc0JGLE9BQUEsQ0FBQSxTQUFBLEdBQUdFLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBRXJELElBQUlDLElBQUksQ0FBQTtBQUNJSCxPQUFBLENBQUEsSUFBQSxHQUFHRyxLQUFJO0FBRW5CLENBQUMsVUFBVUEsSUFBSSxFQUFFO0FBQ2ZBLEVBQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZkEsRUFBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNqQixDQUFDLEVBQUVBLElBQUksS0FBS0wsT0FBQUEsQ0FBQUEsSUFBWSxHQUFHSyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7O0FDOUJ0Q1AsTUFBTSxDQUFDQyxjQUFjLENBQUNDLG9CQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDQyxFQUFBQSxLQUFLLEVBQUUsSUFBQTtBQUNULENBQUMsQ0FBQyxDQUFBO0FBQ3dCSyxvQkFBQSxDQUFBLGtCQUFBLEdBQUdDLG1CQUFrQjtBQUUvQyxJQUFJQyxRQUFNLEdBQUdDLE9BQW1CLENBQUE7QUFFaEMsU0FBU0Ysa0JBQWtCQSxDQUFDRyxLQUFLLEVBQUU7QUFDakMsRUFBQSxJQUFJQyxTQUFTLENBQUE7QUFDYixFQUFBLElBQUlDLFFBQVEsR0FBR0osUUFBTSxDQUFDTCxpQkFBaUIsQ0FBQ1UsUUFBUSxDQUFBO0FBQ2hELEVBQUEsSUFBSUMsUUFBUSxHQUFHTixRQUFNLENBQUNMLGlCQUFpQixDQUFDWSxRQUFRLENBQUE7RUFDaEQsSUFBSUMsT0FBTyxHQUFHTixLQUFLLENBQUNBLEtBQUssQ0FBQ08sTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0VBQ3JDLElBQUlDLFFBQVEsR0FBR1IsS0FBSyxDQUFDQSxLQUFLLENBQUNPLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7QUFFM0MsRUFBQSxJQUFJUCxLQUFLLENBQUNTLEtBQUssQ0FBQyxVQUFVQyxDQUFDLEVBQUU7SUFDM0IsT0FBT0EsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUNoQixHQUFDLENBQUMsRUFBRTtBQUNGLElBQUEsT0FBT1osUUFBTSxDQUFDTCxpQkFBaUIsQ0FBQ2tCLElBQUksQ0FBQTtBQUN0QyxHQUFBO0FBRUFWLEVBQUFBLFNBQVMsR0FBR0ssT0FBTyxHQUFHRSxRQUFRLEdBQUdKLFFBQVEsR0FBR0YsUUFBUSxDQUFBO0VBRXBELElBQUlJLE9BQU8sS0FBSyxDQUFDLEVBQUU7QUFDakJMLElBQUFBLFNBQVMsR0FBR08sUUFBUSxHQUFHLENBQUMsR0FBR0osUUFBUSxHQUFHRixRQUFRLENBQUE7QUFDaEQsR0FBQTtBQUVBLEVBQUEsT0FBT0QsU0FBUyxDQUFBO0FBQ2xCOzs7Ozs7QUMzQkFiLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxRQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDQyxFQUFBQSxLQUFLLEVBQUUsSUFBQTtBQUNULENBQUMsQ0FBQyxDQUFBO0FBQzBCcUIsUUFBQSxDQUFBLG9CQUFBLDZCQUE0QixHQUFHdEIsUUFBQUEsQ0FBQUEsZUFBdUIsR0FBd0JzQixRQUFBLENBQUEsYUFBQSxHQUFHLEtBQUssRUFBQztBQUVuSCxJQUFJZCxRQUFNLEdBQUdDLE9BQW1CLENBQUE7QUFFaEMsSUFBSWMsZUFBZSxHQUFHLFNBQVNBLGVBQWVBLEdBQUc7RUFDL0MsSUFBSUMsTUFBTSxHQUFHQyxTQUFTLENBQUNSLE1BQU0sR0FBRyxDQUFDLElBQUlRLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBS0MsU0FBUyxHQUFHRCxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO0VBQ25GLElBQUlFLEdBQUcsR0FBRzdCLE1BQU0sQ0FBQzhCLElBQUksQ0FBQ0osTUFBTSxDQUFDLENBQUNLLFFBQVEsRUFBRSxDQUFBO0FBRXhDLEVBQUEsUUFBUUYsR0FBRztBQUNULElBQUEsS0FBS25CLFFBQU0sQ0FBQ0wsaUJBQWlCLENBQUNZLFFBQVE7QUFDcEMsTUFBQSxPQUFPUCxRQUFNLENBQUNMLGlCQUFpQixDQUFDWSxRQUFRLENBQUE7QUFFMUMsSUFBQSxLQUFLUCxRQUFNLENBQUNMLGlCQUFpQixDQUFDVSxRQUFRO0FBQ3BDLE1BQUEsT0FBT0wsUUFBTSxDQUFDTCxpQkFBaUIsQ0FBQ1UsUUFBUSxDQUFBO0FBRTFDLElBQUE7QUFDRSxNQUFBLE9BQU9MLFFBQU0sQ0FBQ0wsaUJBQWlCLENBQUNrQixJQUFJLENBQUE7QUFBQyxHQUFBO0FBRTNDLENBQUMsQ0FBQTtBQUVzQkMsUUFBQSxDQUFBLGVBQUEsR0FBR0MsZ0JBQWU7QUFFekMsSUFBSU8saUJBQWlCLEdBQUcsU0FBU0EsaUJBQWlCQSxHQUFHO0VBQ25ELElBQUlDLE1BQU0sR0FBR04sU0FBUyxDQUFDUixNQUFNLEdBQUcsQ0FBQyxJQUFJUSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUtDLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtFQUNuRixPQUFPTSxNQUFNLENBQUNBLE1BQU0sQ0FBQ2QsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN2QyxDQUFDLENBQUE7QUFFd0JLLFFBQUEsQ0FBQSxpQkFBQSxHQUFHUSxrQkFBaUI7QUFFN0MsSUFBSUUsYUFBYSxHQUFHLFNBQVNBLGFBQWFBLEdBQUc7RUFDM0MsSUFBSUMsQ0FBQyxHQUFHUixTQUFTLENBQUNSLE1BQU0sR0FBRyxDQUFDLElBQUlRLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBS0MsU0FBUyxHQUFHRCxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0VBQzdFLElBQUlTLENBQUMsR0FBR1QsU0FBUyxDQUFDUixNQUFNLEdBQUcsQ0FBQyxJQUFJUSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUtDLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUM3RSxFQUFBLE9BQU9VLElBQUksQ0FBQ0MsR0FBRyxDQUFDSCxDQUFDLEdBQUdDLENBQUMsQ0FBQyxDQUFBO0FBQ3hCLENBQUMsQ0FBQTtBQUVvQlosUUFBQSxDQUFBLGFBQUEsR0FBR1UsY0FBYTtBQUVyQyxJQUFJSyxvQkFBb0IsR0FBRyxTQUFTQSxvQkFBb0JBLENBQUNDLElBQUksRUFBRVgsR0FBRyxFQUFFO0FBQ2xFLEVBQUEsSUFBSWYsUUFBUSxHQUFHSixRQUFNLENBQUNKLFNBQVMsQ0FBQ21DLElBQUksQ0FBQTtBQUNwQyxFQUFBLElBQUl6QixRQUFRLEdBQUdOLFFBQU0sQ0FBQ0osU0FBUyxDQUFDb0MsS0FBSyxDQUFBO0FBQ3JDLEVBQUEsSUFBSTdCLFNBQVMsR0FBR0gsUUFBTSxDQUFDSixTQUFTLENBQUNpQixJQUFJLENBQUE7QUFFckMsRUFBQSxJQUFJaUIsSUFBSSxLQUFLOUIsUUFBTSxDQUFDSCxJQUFJLENBQUNvQyxDQUFDLEVBQUU7QUFDMUI3QixJQUFBQSxRQUFRLEdBQUdKLFFBQU0sQ0FBQ0osU0FBUyxDQUFDc0MsTUFBTSxDQUFBO0FBQ2xDNUIsSUFBQUEsUUFBUSxHQUFHTixRQUFNLENBQUNKLFNBQVMsQ0FBQ3VDLEdBQUcsQ0FBQTtBQUNqQyxHQUFBO0FBRUEsRUFBQSxJQUFJaEIsR0FBRyxLQUFLbkIsUUFBTSxDQUFDTCxpQkFBaUIsQ0FBQ1UsUUFBUSxFQUFFO0FBQzdDRixJQUFBQSxTQUFTLEdBQUdDLFFBQVEsQ0FBQTtBQUN0QixHQUFBO0FBRUEsRUFBQSxJQUFJZSxHQUFHLEtBQUtuQixRQUFNLENBQUNMLGlCQUFpQixDQUFDWSxRQUFRLEVBQUU7QUFDN0NKLElBQUFBLFNBQVMsR0FBR0csUUFBUSxDQUFBO0FBQ3RCLEdBQUE7QUFFQSxFQUFBLE9BQU9ILFNBQVMsQ0FBQTtBQUNsQixDQUFDLENBQUE7QUFFRFgsUUFBQUEsQ0FBQUEsb0JBQTRCLEdBQUdxQyxvQkFBb0I7O0FDN0RuRHZDLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyx5QkFBTyxFQUFFLFlBQVksRUFBRTtBQUMzQ0MsRUFBQUEsS0FBSyxFQUFFLElBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQTtBQUM2QjJDLHlCQUFBLENBQUEsdUJBQUEsR0FBR0Msd0JBQXVCO0FBRXpELElBQUlyQyxRQUFNLEdBQUdDLE9BQW1CLENBQUE7QUFFaEMsSUFBSXFDLFNBQU8sR0FBR3JDLFFBQW1CLENBQUE7QUFFakMsU0FBU29DLHVCQUF1QkEsQ0FBQ0UsZUFBZSxFQUFFO0VBQ2hELElBQUlDLEtBQUssR0FBR3ZCLFNBQVMsQ0FBQ1IsTUFBTSxHQUFHLENBQUMsSUFBSVEsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLQyxTQUFTLEdBQUdELFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDakYsRUFBQSxJQUFJUixNQUFNLEdBQUc4QixlQUFlLENBQUM5QixNQUFNLENBQUE7QUFDbkMsRUFBQSxJQUFJRyxDQUFDLEdBQUdILE1BQU0sR0FBRyxDQUFDLENBQUE7QUFDbEIsRUFBQSxJQUFJTixTQUFTLEdBQUdILFFBQU0sQ0FBQ0wsaUJBQWlCLENBQUNrQixJQUFJLENBQUE7QUFFN0MsRUFBQSxPQUFPRCxDQUFDLElBQUksQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtBQUNsQixJQUFBLElBQUlKLE9BQU8sR0FBRytCLGVBQWUsQ0FBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ2hDLElBQUk2QixVQUFVLEdBQUcsSUFBSUgsU0FBTyxDQUFDdkIsZUFBZSxFQUFFUCxPQUFPLENBQUMsQ0FBQTtBQUN0RCxJQUFBLElBQUlrQyxZQUFZLEdBQUcsSUFBSUosU0FBTyxDQUFDaEIsaUJBQWlCLEVBQUVkLE9BQU8sQ0FBQ2lDLFVBQVUsQ0FBQyxDQUFDLENBQUE7SUFDdEUsSUFBSUUsSUFBSSxHQUFHSixlQUFlLENBQUMzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3ZDLElBQUlnQyxPQUFPLEdBQUcsSUFBSU4sU0FBTyxDQUFDdkIsZUFBZSxFQUFFNEIsSUFBSSxDQUFDLENBQUE7QUFDaEQsSUFBQSxJQUFJRSxTQUFTLEdBQUcsSUFBSVAsU0FBTyxDQUFDaEIsaUJBQWlCLEVBQUVxQixJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUE7QUFDN0QsSUFBQSxJQUFJRSxVQUFVLEdBQUcsSUFBSVIsU0FBTyxDQUFDZCxhQUFhLEVBQUVrQixZQUFZLEVBQUVHLFNBQVMsQ0FBQyxDQUFBO0lBRXBFLElBQUlDLFVBQVUsSUFBSU4sS0FBSyxFQUFFO0FBQ3ZCckMsTUFBQUEsU0FBUyxHQUFHc0MsVUFBVSxDQUFBO0FBQ3RCLE1BQUEsTUFBQTtBQUNGLEtBQUMsTUFBTTtBQUNMdEMsTUFBQUEsU0FBUyxHQUFHeUMsT0FBTyxDQUFBO0FBQ3JCLEtBQUE7QUFDRixHQUFBO0FBRUEsRUFBQSxPQUFPekMsU0FBUyxDQUFBO0FBQ2xCOzs7O0FDakNBYixNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsbUJBQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0NDLEVBQUFBLEtBQUssRUFBRSxJQUFBO0FBQ1QsQ0FBQyxDQUFDLENBQUE7QUFDdUJzRCxtQkFBQSxDQUFBLGlCQUFBLEdBQUdDLGtCQUFpQjtBQUU3QyxTQUFTQSxpQkFBaUJBLEdBQUc7RUFDM0IsSUFBSUMsUUFBUSxHQUFHaEMsU0FBUyxDQUFDUixNQUFNLEdBQUcsQ0FBQyxJQUFJUSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUtDLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtFQUNwRixJQUFJaUMsUUFBUSxHQUFHakMsU0FBUyxDQUFDUixNQUFNLEdBQUcsQ0FBQyxJQUFJUSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUtDLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUNwRixFQUFBLE9BQU9nQyxRQUFRLEdBQUdDLFFBQVEsR0FBR0QsUUFBUSxHQUFHLENBQUMsQ0FBQTtBQUMzQzs7OztBQ1RBM0QsTUFBTSxDQUFDQyxjQUFjLENBQUNDLHlCQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDQyxFQUFBQSxLQUFLLEVBQUUsSUFBQTtBQUNULENBQUMsQ0FBQyxDQUFBO0FBQzZCMEQseUJBQUEsQ0FBQSx1QkFBQSxHQUFHQyx3QkFBdUI7QUFFekQsU0FBU0EsdUJBQXVCQSxDQUFDQyxDQUFDLEVBQUU7RUFDbEMsSUFBSSxnQkFBZ0IsSUFBSUEsQ0FBQyxFQUFFO0lBQ3pCLElBQUlDLE9BQU8sR0FBR0QsQ0FBQyxDQUFDRSxjQUFjLElBQUlGLENBQUMsQ0FBQ0UsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3JELE9BQU87QUFDTDlCLE1BQUFBLENBQUMsRUFBRTZCLE9BQU8sSUFBSUEsT0FBTyxDQUFDRSxPQUFPO0FBQzdCOUIsTUFBQUEsQ0FBQyxFQUFFNEIsT0FBTyxJQUFJQSxPQUFPLENBQUNHLE9BQUFBO0tBQ3ZCLENBQUE7QUFDSCxHQUFBO0VBRUEsT0FBTztJQUNMaEMsQ0FBQyxFQUFFNEIsQ0FBQyxDQUFDRyxPQUFPO0lBQ1o5QixDQUFDLEVBQUUyQixDQUFDLENBQUNJLE9BQUFBO0dBQ04sQ0FBQTtBQUNIOzs7Ozs7QUNsQkFuRSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsYUFBTyxFQUFFLFlBQVksRUFBRTtBQUMzQ0MsRUFBQUEsS0FBSyxFQUFFLElBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQTtBQUNpQmlFLGFBQUEsQ0FBQSxXQUFBLEdBQUdDLFlBQVc7QUFFakMsU0FBU0EsV0FBV0EsQ0FBQ3pELEtBQUssRUFBRVQsS0FBSyxFQUFFO0VBQ2pDLElBQUltRSxJQUFJLEdBQUcxRCxLQUFLLENBQUNBLEtBQUssQ0FBQ08sTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0VBRWxDLElBQUltRCxJQUFJLEtBQUtuRSxLQUFLLEVBQUU7QUFDbEJTLElBQUFBLEtBQUssQ0FBQzJELElBQUksQ0FBQ3BFLEtBQUssQ0FBQyxDQUFBO0FBQ25CLEdBQUE7QUFFQSxFQUFBLE9BQU9TLEtBQUssQ0FBQTtBQUNkOzs7Ozs7QUNiQVosTUFBTSxDQUFDQyxjQUFjLENBQUNDLDBCQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDQyxFQUFBQSxLQUFLLEVBQUUsSUFBQTtBQUNULENBQUMsQ0FBQyxDQUFBO0FBQzhCcUUsMEJBQUEsQ0FBQSx3QkFBQSxHQUFHQyx5QkFBd0I7QUFFM0QsSUFBSS9ELFFBQU0sR0FBR0MsT0FBbUIsQ0FBQTtBQUVoQyxTQUFTK0QsaUJBQWVBLENBQUNDLEdBQUcsRUFBRTlDLEdBQUcsRUFBRTFCLEtBQUssRUFBRTtFQUFFLElBQUkwQixHQUFHLElBQUk4QyxHQUFHLEVBQUU7QUFBRTNFLElBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDMEUsR0FBRyxFQUFFOUMsR0FBRyxFQUFFO0FBQUUxQixNQUFBQSxLQUFLLEVBQUVBLEtBQUs7QUFBRXlFLE1BQUFBLFVBQVUsRUFBRSxJQUFJO0FBQUVDLE1BQUFBLFlBQVksRUFBRSxJQUFJO0FBQUVDLE1BQUFBLFFBQVEsRUFBRSxJQUFBO0FBQUssS0FBQyxDQUFDLENBQUE7QUFBRSxHQUFDLE1BQU07QUFBRUgsSUFBQUEsR0FBRyxDQUFDOUMsR0FBRyxDQUFDLEdBQUcxQixLQUFLLENBQUE7QUFBRSxHQUFBO0FBQUUsRUFBQSxPQUFPd0UsR0FBRyxDQUFBO0FBQUUsQ0FBQTtBQUVoTixTQUFTRix3QkFBd0JBLEdBQUc7RUFDbEMsSUFBSTdELEtBQUssR0FBR2UsU0FBUyxDQUFDUixNQUFNLEdBQUcsQ0FBQyxJQUFJUSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUtDLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtFQUNsRixJQUFJb0QsS0FBSyxHQUFHLEVBQUUsQ0FBQTtBQUNkLEVBQUEsSUFBSS9ELFFBQVEsR0FBR04sUUFBTSxDQUFDTCxpQkFBaUIsQ0FBQ1ksUUFBUSxDQUFBO0FBQ2hELEVBQUEsSUFBSUgsUUFBUSxHQUFHSixRQUFNLENBQUNMLGlCQUFpQixDQUFDVSxRQUFRLENBQUE7RUFDaEQsSUFBSU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtFQUNULElBQUkwRCxJQUFJLEdBQUcsRUFBRSxDQUFBO0FBQ2IsRUFBQSxJQUFJbkUsU0FBUyxHQUFHSCxRQUFNLENBQUNMLGlCQUFpQixDQUFDa0IsSUFBSSxDQUFBO0VBRTdDLE9BQU9ELENBQUMsR0FBR1YsS0FBSyxDQUFDTyxNQUFNLEVBQUVHLENBQUMsRUFBRSxFQUFFO0FBQzVCLElBQUEsSUFBSUosT0FBTyxHQUFHTixLQUFLLENBQUNVLENBQUMsQ0FBQyxDQUFBO0FBQ3RCLElBQUEsSUFBSStCLElBQUksR0FBR3pDLEtBQUssQ0FBQ1UsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBRXZCLElBQUkwRCxJQUFJLENBQUM3RCxNQUFNLEVBQUU7TUFDZixJQUFJOEQsZ0JBQWdCLEdBQUcvRCxPQUFPLEdBQUdtQyxJQUFJLEdBQUdyQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQTtBQUUzRCxNQUFBLElBQUlELFNBQVMsS0FBS0gsUUFBTSxDQUFDTCxpQkFBaUIsQ0FBQ2tCLElBQUksRUFBRTtBQUMvQ1YsUUFBQUEsU0FBUyxHQUFHb0UsZ0JBQWdCLENBQUE7QUFDOUIsT0FBQTtNQUVBLElBQUlBLGdCQUFnQixLQUFLcEUsU0FBUyxFQUFFO0FBQ2xDbUUsUUFBQUEsSUFBSSxDQUFDVCxJQUFJLENBQUNyRCxPQUFPLENBQUMsQ0FBQTtBQUNwQixPQUFDLE1BQU07QUFDTDZELFFBQUFBLEtBQUssQ0FBQ1IsSUFBSSxDQUFDRyxpQkFBZSxDQUFDLEVBQUUsRUFBRTdELFNBQVMsRUFBRW1FLElBQUksQ0FBQ0UsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ3hERixRQUFBQSxJQUFJLEdBQUcsRUFBRSxDQUFBO0FBQ1RBLFFBQUFBLElBQUksQ0FBQ1QsSUFBSSxDQUFDckQsT0FBTyxDQUFDLENBQUE7QUFDbEJMLFFBQUFBLFNBQVMsR0FBR29FLGdCQUFnQixDQUFBO0FBQzlCLE9BQUE7QUFDRixLQUFDLE1BQU07TUFDTCxJQUFJL0QsT0FBTyxLQUFLLENBQUMsRUFBRTtBQUNqQkwsUUFBQUEsU0FBUyxHQUFHSyxPQUFPLEdBQUcsQ0FBQyxHQUFHRixRQUFRLEdBQUdGLFFBQVEsQ0FBQTtBQUMvQyxPQUFBO0FBRUFrRSxNQUFBQSxJQUFJLENBQUNULElBQUksQ0FBQ3JELE9BQU8sQ0FBQyxDQUFBO0FBQ3BCLEtBQUE7QUFDRixHQUFBO0VBRUEsSUFBSThELElBQUksQ0FBQzdELE1BQU0sRUFBRTtBQUNmNEQsSUFBQUEsS0FBSyxDQUFDUixJQUFJLENBQUNHLGlCQUFlLENBQUMsRUFBRSxFQUFFN0QsU0FBUyxFQUFFbUUsSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUNsRCxHQUFBO0FBRUEsRUFBQSxPQUFPRCxLQUFLLENBQUE7QUFDZDs7QUNuREEvRSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0Msa0JBQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0NDLEVBQUFBLEtBQUssRUFBRSxJQUFBO0FBQ1QsQ0FBQyxDQUFDLENBQUE7QUFDc0JnRixrQkFBQSxDQUFBLGdCQUFBLEdBQUdDLGlCQUFnQjtBQUUzQyxJQUFJQyxtQkFBbUIsR0FBRzFFLG9CQUErQixDQUFBO0FBRXpELElBQUkyRSx5QkFBeUIsR0FBRzNFLDBCQUFxQyxDQUFBO0FBRXJFLElBQUk0RSx3QkFBd0IsR0FBRzVFLHlCQUFvQyxDQUFBO0FBRW5FLElBQUlxQyxPQUFPLEdBQUdyQyxRQUFtQixDQUFBO0FBRWpDLElBQUlELFFBQU0sR0FBR0MsT0FBbUIsQ0FBQTtBQUVoQyxTQUFTeUUsZ0JBQWdCQSxDQUFDeEUsS0FBSyxFQUFFO0VBQy9CLElBQUk0QixJQUFJLEdBQUdiLFNBQVMsQ0FBQ1IsTUFBTSxHQUFHLENBQUMsSUFBSVEsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLQyxTQUFTLEdBQUdELFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBR2pCLFFBQU0sQ0FBQ0gsSUFBSSxDQUFDaUYsQ0FBQyxDQUFBO0VBQzVGLElBQUlDLGNBQWMsR0FBRzlELFNBQVMsQ0FBQ1IsTUFBTSxHQUFHLENBQUMsSUFBSVEsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLQyxTQUFTLEdBQUdELFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7QUFFMUYsRUFBQSxJQUFJOEQsY0FBYyxFQUFFO0lBQ2xCLElBQUlDLFVBQVUsR0FBRyxJQUFJSix5QkFBeUIsQ0FBQ2Isd0JBQXdCLEVBQUU3RCxLQUFLLENBQUMsQ0FBQTtBQUUvRSxJQUFBLElBQUkrRSxVQUFVLEdBQUcsSUFBSUosd0JBQXdCLENBQUN4Qyx1QkFBdUIsRUFBRTJDLFVBQVUsRUFBRUQsY0FBYyxDQUFDLENBQUE7SUFFbEcsT0FBTyxJQUFJekMsT0FBTyxDQUFDVCxvQkFBb0IsRUFBRUMsSUFBSSxFQUFFbUQsVUFBVSxDQUFDLENBQUE7QUFDNUQsR0FBQTtFQUVBLElBQUk5RSxTQUFTLEdBQUcsSUFBSXdFLG1CQUFtQixDQUFDNUUsa0JBQWtCLEVBQUVHLEtBQUssQ0FBQyxDQUFBO0VBQ2xFLE9BQU8sSUFBSW9DLE9BQU8sQ0FBQ1Qsb0JBQW9CLEVBQUVDLElBQUksRUFBRTNCLFNBQVMsQ0FBQyxDQUFBO0FBQzNEOzs7O0FDN0JBYixNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsbUJBQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0NDLEVBQUFBLEtBQUssRUFBRSxJQUFBO0FBQ1QsQ0FBQyxDQUFDLENBQUE7QUFDdUJ5RixtQkFBQSxDQUFBLGlCQUFBLEdBQUdDLGtCQUFpQjtBQUU3QyxTQUFTQSxpQkFBaUJBLENBQUMxRCxDQUFDLEVBQUVDLENBQUMsRUFBRTBELElBQUksRUFBRTtBQUNyQyxFQUFBLElBQUlDLFNBQVMsR0FBRzFELElBQUksQ0FBQzJELElBQUksQ0FBQzdELENBQUMsR0FBR0EsQ0FBQyxHQUFHQyxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFBO0FBQ3hDLEVBQUEsT0FBTzJELFNBQVMsSUFBSUQsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFBO0FBQ2hDOztBQ1JBOUYsTUFBTSxDQUFDQyxjQUFjLENBQUNDLG1CQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDQyxFQUFBQSxLQUFLLEVBQUUsSUFBQTtBQUNULENBQUMsQ0FBQyxDQUFBO0FBQ3VCOEYsbUJBQUEsQ0FBQSxpQkFBQSxHQUFHQyxrQkFBaUI7QUFFN0MsSUFBSUMsWUFBWSxHQUFHeEYsYUFBd0IsQ0FBQTtBQUUzQyxJQUFJeUYsaUJBQWlCLEdBQUd6RixrQkFBNkIsQ0FBQTtBQUVyRCxJQUFJMEYsa0JBQWtCLEdBQUcxRixtQkFBOEIsQ0FBQTtBQUV2RCxJQUFJMkYsa0JBQWtCLEdBQUczRixtQkFBOEIsQ0FBQTtBQUV2RCxJQUFJRCxNQUFNLEdBQUdDLE9BQW1CLENBQUE7QUFFaEMsU0FBU3VGLGlCQUFpQkEsQ0FBQ0ssS0FBSyxFQUFFQyxPQUFPLEVBQUU7QUFDekMsRUFBQSxJQUFJQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0UsS0FBSztJQUNuQnRFLENBQUMsR0FBR29FLEtBQUssQ0FBQ3BFLENBQUM7SUFDWEMsQ0FBQyxHQUFHbUUsS0FBSyxDQUFDbkUsQ0FBQztJQUNYc0UsTUFBTSxHQUFHSCxLQUFLLENBQUNHLE1BQU07SUFDckJDLE1BQU0sR0FBR0osS0FBSyxDQUFDSSxNQUFNLENBQUE7QUFDekIsRUFBQSxJQUFJQyxjQUFjLEdBQUdKLE9BQU8sQ0FBQ0ksY0FBYztJQUN2Q25CLGNBQWMsR0FBR2UsT0FBTyxDQUFDZixjQUFjLENBQUE7QUFDM0MsRUFBQSxJQUFJb0IsTUFBTSxHQUFHRCxjQUFjLENBQUN6RSxDQUFDLEdBQUdBLENBQUMsQ0FBQTtBQUNqQyxFQUFBLElBQUkyRSxNQUFNLEdBQUcxRSxDQUFDLEdBQUd3RSxjQUFjLENBQUN4RSxDQUFDLENBQUE7QUFDakMsRUFBQSxJQUFJMkUsSUFBSSxHQUFHMUUsSUFBSSxDQUFDQyxHQUFHLENBQUN1RSxNQUFNLENBQUMsQ0FBQTtBQUMzQixFQUFBLElBQUlHLElBQUksR0FBRzNFLElBQUksQ0FBQ0MsR0FBRyxDQUFDd0UsTUFBTSxDQUFDLENBQUE7RUFDM0IsSUFBSVgsWUFBWSxDQUFDOUIsV0FBVyxFQUFFcUMsTUFBTSxFQUFFRyxNQUFNLENBQUMsQ0FBQTtFQUM3QyxJQUFJVixZQUFZLENBQUM5QixXQUFXLEVBQUVzQyxNQUFNLEVBQUVHLE1BQU0sQ0FBQyxDQUFBO0FBQzdDLEVBQUEsSUFBSUcsVUFBVSxHQUFHLElBQUliLGlCQUFpQixDQUFDaEIsZ0JBQWdCLEVBQUVzQixNQUFNLEVBQUVoRyxNQUFNLENBQUNILElBQUksQ0FBQ2lGLENBQUMsRUFBRUMsY0FBYyxDQUFDLENBQUE7QUFDL0YsRUFBQSxJQUFJeUIsVUFBVSxHQUFHLElBQUlkLGlCQUFpQixDQUFDaEIsZ0JBQWdCLEVBQUV1QixNQUFNLEVBQUVqRyxNQUFNLENBQUNILElBQUksQ0FBQ29DLENBQUMsRUFBRThDLGNBQWMsQ0FBQyxDQUFBO0FBQy9GLEVBQUEsSUFBSTBCLFFBQVEsR0FBRyxJQUFJZCxrQkFBa0IsQ0FBQzNDLGlCQUFpQixFQUFFK0MsS0FBSyxFQUFFVyxJQUFJLENBQUNDLEdBQUcsRUFBRSxDQUFDLENBQUE7QUFDM0UsRUFBQSxJQUFJQyxRQUFRLEdBQUcsSUFBSWhCLGtCQUFrQixDQUFDVCxpQkFBaUIsRUFBRWtCLElBQUksRUFBRUMsSUFBSSxFQUFFRyxRQUFRLENBQUMsQ0FBQTtFQUM5RSxPQUFPO0FBQ0xKLElBQUFBLElBQUksRUFBRUEsSUFBSTtBQUNWQyxJQUFBQSxJQUFJLEVBQUVBLElBQUk7QUFDVkgsSUFBQUEsTUFBTSxFQUFFQSxNQUFNO0FBQ2RDLElBQUFBLE1BQU0sRUFBRUEsTUFBTTtBQUNkRyxJQUFBQSxVQUFVLEVBQUVBLFVBQVU7QUFDdEJDLElBQUFBLFVBQVUsRUFBRUEsVUFBVTtBQUN0QkMsSUFBQUEsUUFBUSxFQUFFQSxRQUFRO0lBQ2xCSSxTQUFTLEVBQUVYLGNBQWMsQ0FBQ3pFLENBQUM7SUFDM0JxRixTQUFTLEVBQUVaLGNBQWMsQ0FBQ3hFLENBQUM7QUFDM0JrRixJQUFBQSxRQUFRLEVBQUVBLFFBQUFBO0dBQ1gsQ0FBQTtBQUNIOzs7O0FDN0NBdEgsTUFBTSxDQUFDQyxjQUFjLENBQUNDLDhCQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDQyxFQUFBQSxLQUFLLEVBQUUsSUFBQTtBQUNULENBQUMsQ0FBQyxDQUFBO0FBQ2tDc0gsOEJBQUEsQ0FBQSw0QkFBQSxHQUFHLEtBQUssRUFBQztBQUU3QyxJQUFJQyw0QkFBNEIsR0FBRyxTQUFTQSw0QkFBNEJBLENBQUMzRCxDQUFDLEVBQUU7QUFDMUUsRUFBQSxPQUFPNEQsT0FBTyxDQUFDNUQsQ0FBQyxDQUFDQyxPQUFPLElBQUlELENBQUMsQ0FBQ0MsT0FBTyxDQUFDN0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQ25ELENBQUMsQ0FBQTtBQUVEakIsOEJBQUFBLENBQUFBLDRCQUFvQyxHQUFHd0gsNEJBQTRCOzs7Ozs7QUNUbkUxSCxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsZUFBTyxFQUFFLFlBQVksRUFBRTtBQUMzQ0MsRUFBQUEsS0FBSyxFQUFFLElBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQTtBQUNtQnlILGVBQUEsQ0FBQSxhQUFBLEdBQUdDLGNBQWE7QUFFckMsU0FBU0EsYUFBYUEsR0FBRztFQUN2QixJQUFJQyxLQUFLLEdBQUduRyxTQUFTLENBQUNSLE1BQU0sR0FBRyxDQUFDLElBQUlRLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBS0MsU0FBUyxHQUFHRCxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO0FBQ2xGM0IsRUFBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUM2SCxLQUFLLEVBQUUsU0FBUyxFQUFFO0FBQ3RDQyxJQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztNQUNsQixJQUFJLENBQUNDLGtCQUFrQixHQUFHLElBQUksQ0FBQTtBQUM5QixNQUFBLE9BQU8sSUFBSSxDQUFBO0tBQ1o7QUFDRHBELElBQUFBLFVBQVUsRUFBRSxJQUFBO0FBQ2QsR0FBQyxDQUFDLENBQUE7QUFDRixFQUFBLE9BQU9rRCxLQUFLLENBQUE7QUFDZDs7QUNmQTlILE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyx5QkFBTyxFQUFFLFlBQVksRUFBRTtBQUMzQ0MsRUFBQUEsS0FBSyxFQUFFLElBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQTtBQUM2QjhILHlCQUFBLENBQUEsdUJBQUEsR0FBR0Msd0JBQXVCO0FBQzdDRCx5QkFBQSxDQUFBLElBQUEsR0FBRyxLQUFLLEVBQUM7QUFFckIsSUFBSUUsY0FBYyxHQUFHeEgsZUFBMEIsQ0FBQTtBQUUvQyxTQUFTdUgsdUJBQXVCQSxDQUFDRixrQkFBa0IsRUFBRTtBQUNuRCxFQUFBLElBQUksT0FBT0Esa0JBQWtCLEtBQUssU0FBUyxFQUFFO0FBQzNDLElBQUEsT0FBT0Esa0JBQWtCLENBQUE7QUFDM0IsR0FBQTtBQUVBLEVBQUEsSUFBSUYsS0FBSyxHQUFHO0FBQ1ZFLElBQUFBLGtCQUFrQixFQUFFQSxrQkFBQUE7R0FDckIsQ0FBQTtFQUVELElBQUk7SUFDRixJQUFJeEIsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFMkIsY0FBYyxDQUFDTixhQUFhLEVBQUVDLEtBQUssQ0FBQyxDQUFBO0lBQ3RETSxNQUFNLENBQUNDLGdCQUFnQixDQUFDLHlCQUF5QixFQUFFQyxJQUFJLEVBQUU5QixPQUFPLENBQUMsQ0FBQTtJQUNqRTRCLE1BQU0sQ0FBQ0csbUJBQW1CLENBQUMseUJBQXlCLEVBQUVELElBQUksRUFBRTlCLE9BQU8sQ0FBQyxDQUFBO0FBQ3RFLEdBQUMsQ0FBQyxPQUFPZ0MsR0FBRyxFQUFFLEVBQUM7RUFFZixPQUFPVixLQUFLLENBQUNFLGtCQUFrQixDQUFBO0FBQ2pDLENBQUE7QUFFQSxJQUFJTSxJQUFJLEdBQUcsU0FBU0EsSUFBSUEsR0FBRyxFQUFFLENBQUE7QUFFN0JwSSx5QkFBQUEsQ0FBQUEsSUFBWSxHQUFHb0ksSUFBSTs7OztBQzVCbkJ0SSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsNkJBQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0NDLEVBQUFBLEtBQUssRUFBRSxJQUFBO0FBQ1QsQ0FBQyxDQUFDLENBQUE7QUFDaUNzSSw2QkFBQSxDQUFBLDJCQUFBLEdBQUcsS0FBSyxFQUFDO0FBRTVDLFNBQVNDLE9BQU9BLENBQUMvRCxHQUFHLEVBQUU7RUFBRSx5QkFBeUIsQ0FBQTs7QUFBRSxFQUFBLE9BQU8rRCxPQUFPLEdBQUcsVUFBVSxJQUFJLE9BQU9DLE1BQU0sSUFBSSxRQUFRLElBQUksT0FBT0EsTUFBTSxDQUFDQyxRQUFRLEdBQUcsVUFBVWpFLEdBQUcsRUFBRTtBQUFFLElBQUEsT0FBTyxPQUFPQSxHQUFHLENBQUE7R0FBRyxHQUFHLFVBQVVBLEdBQUcsRUFBRTtJQUFFLE9BQU9BLEdBQUcsSUFBSSxVQUFVLElBQUksT0FBT2dFLE1BQU0sSUFBSWhFLEdBQUcsQ0FBQ2tFLFdBQVcsS0FBS0YsTUFBTSxJQUFJaEUsR0FBRyxLQUFLZ0UsTUFBTSxDQUFDRyxTQUFTLEdBQUcsUUFBUSxHQUFHLE9BQU9uRSxHQUFHLENBQUE7QUFBRSxHQUFDLEVBQUUrRCxPQUFPLENBQUMvRCxHQUFHLENBQUMsQ0FBQTtBQUFFLENBQUE7QUFFL1UsSUFBSW9FLDJCQUEyQixHQUFHLFNBQVNBLDJCQUEyQkEsR0FBRztFQUN2RSxPQUFPLENBQUMsT0FBT1gsTUFBTSxLQUFLLFdBQVcsR0FBRyxXQUFXLEdBQUdNLE9BQU8sQ0FBQ04sTUFBTSxDQUFDLE1BQU0sUUFBUSxLQUFLLGNBQWMsSUFBSUEsTUFBTSxJQUFJVCxPQUFPLENBQUNTLE1BQU0sQ0FBQ1ksU0FBUyxDQUFDQyxjQUFjLENBQUMsQ0FBQyxDQUFBO0FBQy9KLENBQUMsQ0FBQTtBQUVEL0ksNkJBQUFBLENBQUFBLDJCQUFtQyxHQUFHNkksMkJBQTJCOzs7O0FDWGpFL0ksTUFBTSxDQUFDQyxjQUFjLENBQUNDLGlCQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDQyxFQUFBQSxLQUFLLEVBQUUsSUFBQTtBQUNULENBQUMsQ0FBQyxDQUFBO0FBQ3FCK0ksaUJBQUEsQ0FBQSxlQUFBLEdBQUcsS0FBSyxFQUFDO0FBRWhDLFNBQVNDLFNBQU9BLENBQUN6SCxNQUFNLEVBQUUwSCxjQUFjLEVBQUU7QUFBRSxFQUFBLElBQUl0SCxJQUFJLEdBQUc5QixNQUFNLENBQUM4QixJQUFJLENBQUNKLE1BQU0sQ0FBQyxDQUFBO0VBQUUsSUFBSTFCLE1BQU0sQ0FBQ3FKLHFCQUFxQixFQUFFO0FBQUUsSUFBQSxJQUFJQyxPQUFPLEdBQUd0SixNQUFNLENBQUNxSixxQkFBcUIsQ0FBQzNILE1BQU0sQ0FBQyxDQUFBO0lBQUUwSCxjQUFjLEtBQUtFLE9BQU8sR0FBR0EsT0FBTyxDQUFDQyxNQUFNLENBQUMsVUFBVUMsR0FBRyxFQUFFO01BQUUsT0FBT3hKLE1BQU0sQ0FBQ3lKLHdCQUF3QixDQUFDL0gsTUFBTSxFQUFFOEgsR0FBRyxDQUFDLENBQUM1RSxVQUFVLENBQUE7QUFBRSxLQUFDLENBQUMsQ0FBQyxFQUFFOUMsSUFBSSxDQUFDeUMsSUFBSSxDQUFDbUYsS0FBSyxDQUFDNUgsSUFBSSxFQUFFd0gsT0FBTyxDQUFDLENBQUE7QUFBRSxHQUFBO0FBQUUsRUFBQSxPQUFPeEgsSUFBSSxDQUFBO0FBQUUsQ0FBQTtBQUVwVixTQUFTNkgsZUFBYUEsQ0FBQ0MsTUFBTSxFQUFFO0FBQUUsRUFBQSxLQUFLLElBQUl0SSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdLLFNBQVMsQ0FBQ1IsTUFBTSxFQUFFRyxDQUFDLEVBQUUsRUFBRTtBQUFFLElBQUEsSUFBSXVJLE1BQU0sR0FBRyxJQUFJLElBQUlsSSxTQUFTLENBQUNMLENBQUMsQ0FBQyxHQUFHSyxTQUFTLENBQUNMLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUFFQSxJQUFBQSxDQUFDLEdBQUcsQ0FBQyxHQUFHNkgsU0FBTyxDQUFDbkosTUFBTSxDQUFDNkosTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQVVqSSxHQUFHLEVBQUU7TUFBRTZDLGlCQUFlLENBQUNrRixNQUFNLEVBQUUvSCxHQUFHLEVBQUVnSSxNQUFNLENBQUNoSSxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQUUsS0FBQyxDQUFDLEdBQUc3QixNQUFNLENBQUMrSix5QkFBeUIsR0FBRy9KLE1BQU0sQ0FBQ2dLLGdCQUFnQixDQUFDSixNQUFNLEVBQUU1SixNQUFNLENBQUMrSix5QkFBeUIsQ0FBQ0YsTUFBTSxDQUFDLENBQUMsR0FBR1YsU0FBTyxDQUFDbkosTUFBTSxDQUFDNkosTUFBTSxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQVVqSSxHQUFHLEVBQUU7QUFBRTdCLE1BQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDMkosTUFBTSxFQUFFL0gsR0FBRyxFQUFFN0IsTUFBTSxDQUFDeUosd0JBQXdCLENBQUNJLE1BQU0sRUFBRWhJLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFBRSxLQUFDLENBQUMsQ0FBQTtBQUFFLEdBQUE7QUFBRSxFQUFBLE9BQU8rSCxNQUFNLENBQUE7QUFBRSxDQUFBO0FBRXpmLFNBQVNsRixpQkFBZUEsQ0FBQ0MsR0FBRyxFQUFFOUMsR0FBRyxFQUFFMUIsS0FBSyxFQUFFO0VBQUUsSUFBSTBCLEdBQUcsSUFBSThDLEdBQUcsRUFBRTtBQUFFM0UsSUFBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUMwRSxHQUFHLEVBQUU5QyxHQUFHLEVBQUU7QUFBRTFCLE1BQUFBLEtBQUssRUFBRUEsS0FBSztBQUFFeUUsTUFBQUEsVUFBVSxFQUFFLElBQUk7QUFBRUMsTUFBQUEsWUFBWSxFQUFFLElBQUk7QUFBRUMsTUFBQUEsUUFBUSxFQUFFLElBQUE7QUFBSyxLQUFDLENBQUMsQ0FBQTtBQUFFLEdBQUMsTUFBTTtBQUFFSCxJQUFBQSxHQUFHLENBQUM5QyxHQUFHLENBQUMsR0FBRzFCLEtBQUssQ0FBQTtBQUFFLEdBQUE7QUFBRSxFQUFBLE9BQU93RSxHQUFHLENBQUE7QUFBRSxDQUFBO0FBRWhOLElBQUlzRixlQUFlLEdBQUcsU0FBU0EsZUFBZUEsR0FBRztFQUMvQyxJQUFJekQsT0FBTyxHQUFHN0UsU0FBUyxDQUFDUixNQUFNLEdBQUcsQ0FBQyxJQUFJUSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUtDLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUNwRixFQUFBLE9BQU9nSSxlQUFhLENBQUM7QUFDbkJ4SCxJQUFBQSxDQUFDLEVBQUUsQ0FBQztBQUNKQyxJQUFBQSxDQUFDLEVBQUUsQ0FBQztBQUNKcUUsSUFBQUEsS0FBSyxFQUFFLENBQUM7QUFDUnlELElBQUFBLFNBQVMsRUFBRSxLQUFLO0FBQ2hCeEQsSUFBQUEsTUFBTSxFQUFFLEVBQUU7QUFDVkMsSUFBQUEsTUFBTSxFQUFFLEVBQUE7R0FDVCxFQUFFSCxPQUFPLENBQUMsQ0FBQTtBQUNiLENBQUMsQ0FBQTtBQUVEdEcsaUJBQUFBLENBQUFBLGVBQXVCLEdBQUcrSixlQUFlOzs7O0FDdkJ6Q2pLLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxpQkFBTyxFQUFFLFlBQVksRUFBRTtBQUMzQ0MsRUFBQUEsS0FBSyxFQUFFLElBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQTtBQUNxQmdLLGlCQUFBLENBQUEsZUFBQSxHQUFHLEtBQUssRUFBQztBQUVoQyxTQUFTaEIsT0FBT0EsQ0FBQ3pILE1BQU0sRUFBRTBILGNBQWMsRUFBRTtBQUFFLEVBQUEsSUFBSXRILElBQUksR0FBRzlCLE1BQU0sQ0FBQzhCLElBQUksQ0FBQ0osTUFBTSxDQUFDLENBQUE7RUFBRSxJQUFJMUIsTUFBTSxDQUFDcUoscUJBQXFCLEVBQUU7QUFBRSxJQUFBLElBQUlDLE9BQU8sR0FBR3RKLE1BQU0sQ0FBQ3FKLHFCQUFxQixDQUFDM0gsTUFBTSxDQUFDLENBQUE7SUFBRTBILGNBQWMsS0FBS0UsT0FBTyxHQUFHQSxPQUFPLENBQUNDLE1BQU0sQ0FBQyxVQUFVQyxHQUFHLEVBQUU7TUFBRSxPQUFPeEosTUFBTSxDQUFDeUosd0JBQXdCLENBQUMvSCxNQUFNLEVBQUU4SCxHQUFHLENBQUMsQ0FBQzVFLFVBQVUsQ0FBQTtBQUFFLEtBQUMsQ0FBQyxDQUFDLEVBQUU5QyxJQUFJLENBQUN5QyxJQUFJLENBQUNtRixLQUFLLENBQUM1SCxJQUFJLEVBQUV3SCxPQUFPLENBQUMsQ0FBQTtBQUFFLEdBQUE7QUFBRSxFQUFBLE9BQU94SCxJQUFJLENBQUE7QUFBRSxDQUFBO0FBRXBWLFNBQVM2SCxhQUFhQSxDQUFDQyxNQUFNLEVBQUU7QUFBRSxFQUFBLEtBQUssSUFBSXRJLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0ssU0FBUyxDQUFDUixNQUFNLEVBQUVHLENBQUMsRUFBRSxFQUFFO0FBQUUsSUFBQSxJQUFJdUksTUFBTSxHQUFHLElBQUksSUFBSWxJLFNBQVMsQ0FBQ0wsQ0FBQyxDQUFDLEdBQUdLLFNBQVMsQ0FBQ0wsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO0FBQUVBLElBQUFBLENBQUMsR0FBRyxDQUFDLEdBQUc2SCxPQUFPLENBQUNuSixNQUFNLENBQUM2SixNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtNQUFFNkMsZUFBZSxDQUFDa0YsTUFBTSxFQUFFL0gsR0FBRyxFQUFFZ0ksTUFBTSxDQUFDaEksR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUFFLEtBQUMsQ0FBQyxHQUFHN0IsTUFBTSxDQUFDK0oseUJBQXlCLEdBQUcvSixNQUFNLENBQUNnSyxnQkFBZ0IsQ0FBQ0osTUFBTSxFQUFFNUosTUFBTSxDQUFDK0oseUJBQXlCLENBQUNGLE1BQU0sQ0FBQyxDQUFDLEdBQUdWLE9BQU8sQ0FBQ25KLE1BQU0sQ0FBQzZKLE1BQU0sQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0FBQUU3QixNQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQzJKLE1BQU0sRUFBRS9ILEdBQUcsRUFBRTdCLE1BQU0sQ0FBQ3lKLHdCQUF3QixDQUFDSSxNQUFNLEVBQUVoSSxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQUUsS0FBQyxDQUFDLENBQUE7QUFBRSxHQUFBO0FBQUUsRUFBQSxPQUFPK0gsTUFBTSxDQUFBO0FBQUUsQ0FBQTtBQUV6ZixTQUFTbEYsZUFBZUEsQ0FBQ0MsR0FBRyxFQUFFOUMsR0FBRyxFQUFFMUIsS0FBSyxFQUFFO0VBQUUsSUFBSTBCLEdBQUcsSUFBSThDLEdBQUcsRUFBRTtBQUFFM0UsSUFBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUMwRSxHQUFHLEVBQUU5QyxHQUFHLEVBQUU7QUFBRTFCLE1BQUFBLEtBQUssRUFBRUEsS0FBSztBQUFFeUUsTUFBQUEsVUFBVSxFQUFFLElBQUk7QUFBRUMsTUFBQUEsWUFBWSxFQUFFLElBQUk7QUFBRUMsTUFBQUEsUUFBUSxFQUFFLElBQUE7QUFBSyxLQUFDLENBQUMsQ0FBQTtBQUFFLEdBQUMsTUFBTTtBQUFFSCxJQUFBQSxHQUFHLENBQUM5QyxHQUFHLENBQUMsR0FBRzFCLEtBQUssQ0FBQTtBQUFFLEdBQUE7QUFBRSxFQUFBLE9BQU93RSxHQUFHLENBQUE7QUFBRSxDQUFBO0FBRWhOLElBQUl5RixlQUFlLEdBQUcsU0FBU0EsZUFBZUEsR0FBRztFQUMvQyxJQUFJQyxLQUFLLEdBQUcxSSxTQUFTLENBQUNSLE1BQU0sR0FBRyxDQUFDLElBQUlRLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBS0MsU0FBUyxHQUFHRCxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO0FBQ2xGLEVBQUEsT0FBT2dJLGFBQWEsQ0FBQztBQUNuQlcsSUFBQUEsT0FBTyxFQUFFLElBQUk7QUFDYlYsSUFBQUEsTUFBTSxFQUFFLElBQUk7QUFDWjFHLElBQUFBLEtBQUssRUFBRSxFQUFFO0FBQ1R1QyxJQUFBQSxjQUFjLEVBQUUsQ0FBQztBQUNqQjhFLElBQUFBLGFBQWEsRUFBRSxDQUFDO0FBQ2hCQyxJQUFBQSxvQkFBb0IsRUFBRSxLQUFLO0FBQzNCQyxJQUFBQSxvQkFBb0IsRUFBRSxJQUFJO0FBQzFCQyxJQUFBQSw0QkFBNEIsRUFBRSxLQUFLO0FBQ25DQyxJQUFBQSwyQkFBMkIsRUFBRSxLQUFBO0dBQzlCLEVBQUVOLEtBQUssQ0FBQyxDQUFBO0FBQ1gsQ0FBQyxDQUFBO0FBRURuSyxpQkFBQUEsQ0FBQUEsZUFBdUIsR0FBR2tLLGVBQWU7Ozs7QUMxQnpDcEssTUFBTSxDQUFDQyxjQUFjLENBQUNDLFlBQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0NDLEVBQUFBLEtBQUssRUFBRSxJQUFBO0FBQ1QsQ0FBQyxDQUFDLENBQUE7QUFDZ0J5SyxZQUFBLENBQUEsVUFBQSxHQUFHQyxXQUFVO0FBRS9CLFNBQVNBLFVBQVVBLEdBQUc7RUFDcEIsSUFBSTdDLGtCQUFrQixHQUFHckcsU0FBUyxDQUFDUixNQUFNLEdBQUcsQ0FBQyxJQUFJUSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUtDLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQTtBQUVsRyxFQUFBLElBQUlxRyxrQkFBa0IsRUFBRTtJQUN0QixPQUFPO0FBQ0w4QyxNQUFBQSxPQUFPLEVBQUUsS0FBQTtLQUNWLENBQUE7QUFDSCxHQUFBO0FBRUEsRUFBQSxPQUFPLEVBQUUsQ0FBQTtBQUNYOzs7O0FDZkE5SyxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsZUFBTyxFQUFFLFlBQVksRUFBRTtBQUMzQ0MsRUFBQUEsS0FBSyxFQUFFLElBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQTtBQUNtQjRLLGVBQUEsQ0FBQSxhQUFBLEdBQUdDLGNBQWE7QUFFckMsU0FBU0EsYUFBYUEsQ0FBQ0MsUUFBUSxFQUFFO0VBQy9CLElBQUlDLEtBQUssR0FBR3ZKLFNBQVMsQ0FBQ1IsTUFBTSxHQUFHLENBQUMsSUFBSVEsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLQyxTQUFTLEdBQUdELFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7RUFFakYsSUFBSXVKLEtBQUssS0FBSyxDQUFDLEVBQUU7QUFDZixJQUFBLE9BQU9ELFFBQVEsQ0FBQTtBQUNqQixHQUFBO0FBRUEsRUFBQSxJQUFJOUksQ0FBQyxHQUFHOEksUUFBUSxDQUFDOUksQ0FBQztJQUNkQyxDQUFDLEdBQUc2SSxRQUFRLENBQUM3SSxDQUFDLENBQUE7RUFDbEIsSUFBSStJLGNBQWMsR0FBRzlJLElBQUksQ0FBQytJLEVBQUUsR0FBRyxHQUFHLEdBQUdGLEtBQUssQ0FBQTtBQUMxQyxFQUFBLElBQUlHLFFBQVEsR0FBR2xKLENBQUMsR0FBR0UsSUFBSSxDQUFDaUosR0FBRyxDQUFDSCxjQUFjLENBQUMsR0FBRy9JLENBQUMsR0FBR0MsSUFBSSxDQUFDa0osR0FBRyxDQUFDSixjQUFjLENBQUMsQ0FBQTtBQUMxRSxFQUFBLElBQUlLLFFBQVEsR0FBR3BKLENBQUMsR0FBR0MsSUFBSSxDQUFDaUosR0FBRyxDQUFDSCxjQUFjLENBQUMsR0FBR2hKLENBQUMsR0FBR0UsSUFBSSxDQUFDa0osR0FBRyxDQUFDSixjQUFjLENBQUMsQ0FBQTtFQUMxRSxPQUFPO0FBQ0xoSixJQUFBQSxDQUFDLEVBQUVrSixRQUFRO0FBQ1hqSixJQUFBQSxDQUFDLEVBQUVvSixRQUFBQTtHQUNKLENBQUE7QUFDSDs7OztBQ3JCQXhMLENBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFVLE9BQUEsRUFBQSxZQUFZLEVBQUU7R0FDM0NFLEtBQUssRUFBRSxJQUFBO0FBQ1QsRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJa0YsbUJBQW1CLEdBQUcxRSxvQkFBK0IsQ0FBQTtDQUV6RFgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDdUQsbUJBQW1CLENBQUMsQ0FBQ3lFLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQ3RELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUt3RCxtQkFBbUIsQ0FBQ3hELEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDakU3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPMUMsbUJBQW1CLENBQUN4RCxHQUFHLENBQUMsQ0FBQTtNQUNqQztBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJMEQsd0JBQXdCLEdBQUc1RSx5QkFBb0MsQ0FBQTtDQUVuRVgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDeUQsd0JBQXdCLENBQUMsQ0FBQ3VFLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQzNELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUswRCx3QkFBd0IsQ0FBQzFELEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDdEU3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPeEMsd0JBQXdCLENBQUMxRCxHQUFHLENBQUMsQ0FBQTtNQUN0QztBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJd0Usa0JBQWtCLEdBQUcxRixtQkFBOEIsQ0FBQTtDQUV2RFgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDdUUsa0JBQWtCLENBQUMsQ0FBQ3lELE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQ3JELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUt3RSxrQkFBa0IsQ0FBQ3hFLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDaEU3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPMUIsa0JBQWtCLENBQUN4RSxHQUFHLENBQUMsQ0FBQTtNQUNoQztBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJNEosd0JBQXdCLEdBQUc5Syx5QkFBb0MsQ0FBQTtDQUVuRVgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDMkosd0JBQXdCLENBQUMsQ0FBQzNCLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQzNELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUs0Six3QkFBd0IsQ0FBQzVKLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDdEU3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPMEQsd0JBQXdCLENBQUM1SixHQUFHLENBQUMsQ0FBQTtNQUN0QztBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJNkosa0JBQWtCLEdBQUcvSyxtQkFBOEIsQ0FBQTtDQUV2RFgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDNEosa0JBQWtCLENBQUMsQ0FBQzVCLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQ3JELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUs2SixrQkFBa0IsQ0FBQzdKLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDaEU3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPMkQsa0JBQWtCLENBQUM3SixHQUFHLENBQUMsQ0FBQTtNQUNoQztBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJeUQseUJBQXlCLEdBQUczRSwwQkFBcUMsQ0FBQTtDQUVyRVgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDd0QseUJBQXlCLENBQUMsQ0FBQ3dFLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQzVELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUt5RCx5QkFBeUIsQ0FBQ3pELEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDdkU3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPekMseUJBQXlCLENBQUN6RCxHQUFHLENBQUMsQ0FBQTtNQUN2QztBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJeUUsa0JBQWtCLEdBQUczRixtQkFBOEIsQ0FBQTtDQUV2RFgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDd0Usa0JBQWtCLENBQUMsQ0FBQ3dELE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQ3JELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUt5RSxrQkFBa0IsQ0FBQ3pFLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDaEU3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPekIsa0JBQWtCLENBQUN6RSxHQUFHLENBQUMsQ0FBQTtNQUNoQztBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJOEosNkJBQTZCLEdBQUdoTCw4QkFBeUMsQ0FBQTtDQUU3RVgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDNkosNkJBQTZCLENBQUMsQ0FBQzdCLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQ2hFLElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUs4Siw2QkFBNkIsQ0FBQzlKLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDM0U3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPNEQsNkJBQTZCLENBQUM5SixHQUFHLENBQUMsQ0FBQTtNQUMzQztBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJK0osd0JBQXdCLEdBQUdqTCx5QkFBb0MsQ0FBQTtDQUVuRVgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDOEosd0JBQXdCLENBQUMsQ0FBQzlCLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQzNELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUsrSix3QkFBd0IsQ0FBQy9KLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDdEU3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPNkQsd0JBQXdCLENBQUMvSixHQUFHLENBQUMsQ0FBQTtNQUN0QztBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJZ0ssNEJBQTRCLEdBQUdsTCw2QkFBd0MsQ0FBQTtDQUUzRVgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDK0osNEJBQTRCLENBQUMsQ0FBQy9CLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQy9ELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUtnSyw0QkFBNEIsQ0FBQ2hLLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDMUU3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPOEQsNEJBQTRCLENBQUNoSyxHQUFHLENBQUMsQ0FBQTtNQUMxQztBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJbUIsT0FBTyxHQUFHckMsUUFBbUIsQ0FBQTtDQUVqQ1gsTUFBTSxDQUFDOEIsSUFBSSxDQUFDa0IsT0FBTyxDQUFDLENBQUM4RyxPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtHQUMxQyxJQUFJQSxHQUFHLEtBQUssU0FBUyxJQUFJQSxHQUFHLEtBQUssWUFBWSxFQUFFLE9BQUE7QUFDL0MsR0FBQSxJQUFJQSxHQUFHLElBQUkzQixPQUFPLElBQUlBLE9BQU8sQ0FBQzJCLEdBQUcsQ0FBQyxLQUFLbUIsT0FBTyxDQUFDbkIsR0FBRyxDQUFDLEVBQUUsT0FBQTtBQUNyRDdCLEdBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUUyQixHQUFHLEVBQUU7S0FDbEMrQyxVQUFVLEVBQUUsSUFBSTtBQUNoQm1ELEtBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFHQSxHQUFHO09BQ2xCLE9BQU8vRSxPQUFPLENBQUNuQixHQUFHLENBQUMsQ0FBQTtNQUNyQjtBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJc0csY0FBYyxHQUFHeEgsZUFBMEIsQ0FBQTtDQUUvQ1gsTUFBTSxDQUFDOEIsSUFBSSxDQUFDcUcsY0FBYyxDQUFDLENBQUMyQixPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtHQUNqRCxJQUFJQSxHQUFHLEtBQUssU0FBUyxJQUFJQSxHQUFHLEtBQUssWUFBWSxFQUFFLE9BQUE7QUFDL0MsR0FBQSxJQUFJQSxHQUFHLElBQUkzQixPQUFPLElBQUlBLE9BQU8sQ0FBQzJCLEdBQUcsQ0FBQyxLQUFLc0csY0FBYyxDQUFDdEcsR0FBRyxDQUFDLEVBQUUsT0FBQTtBQUM1RDdCLEdBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUUyQixHQUFHLEVBQUU7S0FDbEMrQyxVQUFVLEVBQUUsSUFBSTtBQUNoQm1ELEtBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFHQSxHQUFHO09BQ2xCLE9BQU9JLGNBQWMsQ0FBQ3RHLEdBQUcsQ0FBQyxDQUFBO01BQzVCO0FBQ0YsSUFBQyxDQUFDLENBQUE7QUFDSixFQUFDLENBQUMsQ0FBQTtDQUVGLElBQUlpSyxnQkFBZ0IsR0FBR25MLGlCQUE0QixDQUFBO0NBRW5EWCxNQUFNLENBQUM4QixJQUFJLENBQUNnSyxnQkFBZ0IsQ0FBQyxDQUFDaEMsT0FBTyxDQUFDLFVBQVVqSSxHQUFHLEVBQUU7R0FDbkQsSUFBSUEsR0FBRyxLQUFLLFNBQVMsSUFBSUEsR0FBRyxLQUFLLFlBQVksRUFBRSxPQUFBO0FBQy9DLEdBQUEsSUFBSUEsR0FBRyxJQUFJM0IsT0FBTyxJQUFJQSxPQUFPLENBQUMyQixHQUFHLENBQUMsS0FBS2lLLGdCQUFnQixDQUFDakssR0FBRyxDQUFDLEVBQUUsT0FBQTtBQUM5RDdCLEdBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUUyQixHQUFHLEVBQUU7S0FDbEMrQyxVQUFVLEVBQUUsSUFBSTtBQUNoQm1ELEtBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFHQSxHQUFHO09BQ2xCLE9BQU8rRCxnQkFBZ0IsQ0FBQ2pLLEdBQUcsQ0FBQyxDQUFBO01BQzlCO0FBQ0YsSUFBQyxDQUFDLENBQUE7QUFDSixFQUFDLENBQUMsQ0FBQTtDQUVGLElBQUlrSyxnQkFBZ0IsR0FBR3BMLGlCQUE0QixDQUFBO0NBRW5EWCxNQUFNLENBQUM4QixJQUFJLENBQUNpSyxnQkFBZ0IsQ0FBQyxDQUFDakMsT0FBTyxDQUFDLFVBQVVqSSxHQUFHLEVBQUU7R0FDbkQsSUFBSUEsR0FBRyxLQUFLLFNBQVMsSUFBSUEsR0FBRyxLQUFLLFlBQVksRUFBRSxPQUFBO0FBQy9DLEdBQUEsSUFBSUEsR0FBRyxJQUFJM0IsT0FBTyxJQUFJQSxPQUFPLENBQUMyQixHQUFHLENBQUMsS0FBS2tLLGdCQUFnQixDQUFDbEssR0FBRyxDQUFDLEVBQUUsT0FBQTtBQUM5RDdCLEdBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUUyQixHQUFHLEVBQUU7S0FDbEMrQyxVQUFVLEVBQUUsSUFBSTtBQUNoQm1ELEtBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFHQSxHQUFHO09BQ2xCLE9BQU9nRSxnQkFBZ0IsQ0FBQ2xLLEdBQUcsQ0FBQyxDQUFBO01BQzlCO0FBQ0YsSUFBQyxDQUFDLENBQUE7QUFDSixFQUFDLENBQUMsQ0FBQTtDQUVGLElBQUltSyxXQUFXLEdBQUdyTCxZQUF1QixDQUFBO0NBRXpDWCxNQUFNLENBQUM4QixJQUFJLENBQUNrSyxXQUFXLENBQUMsQ0FBQ2xDLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQzlDLElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUttSyxXQUFXLENBQUNuSyxHQUFHLENBQUMsRUFBRSxPQUFBO0FBQ3pEN0IsR0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBRTJCLEdBQUcsRUFBRTtLQUNsQytDLFVBQVUsRUFBRSxJQUFJO0FBQ2hCbUQsS0FBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQUdBLEdBQUc7T0FDbEIsT0FBT2lFLFdBQVcsQ0FBQ25LLEdBQUcsQ0FBQyxDQUFBO01BQ3pCO0FBQ0YsSUFBQyxDQUFDLENBQUE7QUFDSixFQUFDLENBQUMsQ0FBQTtDQUVGLElBQUl1RSxpQkFBaUIsR0FBR3pGLGtCQUE2QixDQUFBO0NBRXJEWCxNQUFNLENBQUM4QixJQUFJLENBQUNzRSxpQkFBaUIsQ0FBQyxDQUFDMEQsT0FBTyxDQUFDLFVBQVVqSSxHQUFHLEVBQUU7R0FDcEQsSUFBSUEsR0FBRyxLQUFLLFNBQVMsSUFBSUEsR0FBRyxLQUFLLFlBQVksRUFBRSxPQUFBO0FBQy9DLEdBQUEsSUFBSUEsR0FBRyxJQUFJM0IsT0FBTyxJQUFJQSxPQUFPLENBQUMyQixHQUFHLENBQUMsS0FBS3VFLGlCQUFpQixDQUFDdkUsR0FBRyxDQUFDLEVBQUUsT0FBQTtBQUMvRDdCLEdBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUUyQixHQUFHLEVBQUU7S0FDbEMrQyxVQUFVLEVBQUUsSUFBSTtBQUNoQm1ELEtBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFHQSxHQUFHO09BQ2xCLE9BQU8zQixpQkFBaUIsQ0FBQ3ZFLEdBQUcsQ0FBQyxDQUFBO01BQy9CO0FBQ0YsSUFBQyxDQUFDLENBQUE7QUFDSixFQUFDLENBQUMsQ0FBQTtDQUVGLElBQUlvSyxjQUFjLEdBQUd0TCxlQUEwQixDQUFBO0NBRS9DWCxNQUFNLENBQUM4QixJQUFJLENBQUNtSyxjQUFjLENBQUMsQ0FBQ25DLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQ2pELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUtvSyxjQUFjLENBQUNwSyxHQUFHLENBQUMsRUFBRSxPQUFBO0FBQzVEN0IsR0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBRTJCLEdBQUcsRUFBRTtLQUNsQytDLFVBQVUsRUFBRSxJQUFJO0FBQ2hCbUQsS0FBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQUdBLEdBQUc7T0FDbEIsT0FBT2tFLGNBQWMsQ0FBQ3BLLEdBQUcsQ0FBQyxDQUFBO01BQzVCO0FBQ0YsSUFBQyxDQUFDLENBQUE7QUFDSixFQUFDLENBQUMsQ0FBQTtDQUVGLElBQUlzRSxZQUFZLEdBQUd4RixhQUF3QixDQUFBO0NBRTNDWCxNQUFNLENBQUM4QixJQUFJLENBQUNxRSxZQUFZLENBQUMsQ0FBQzJELE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQy9DLElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUtzRSxZQUFZLENBQUN0RSxHQUFHLENBQUMsRUFBRSxPQUFBO0FBQzFEN0IsR0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBRTJCLEdBQUcsRUFBRTtLQUNsQytDLFVBQVUsRUFBRSxJQUFJO0FBQ2hCbUQsS0FBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQUdBLEdBQUc7T0FDbEIsT0FBTzVCLFlBQVksQ0FBQ3RFLEdBQUcsQ0FBQyxDQUFBO01BQzFCO0FBQ0YsSUFBQyxDQUFDLENBQUE7QUFDSixFQUFDLENBQUMsQ0FBQTs7Ozs7Q0M1T0YsU0FBUzZHLE9BQU9BLENBQUMvRCxHQUFHLEVBQUU7R0FBRSx5QkFBeUIsQ0FBQTs7QUFBRSxHQUFBLE9BQU8rRCxPQUFPLEdBQUcsVUFBVSxJQUFJLE9BQU9DLE1BQU0sSUFBSSxRQUFRLElBQUksT0FBT0EsTUFBTSxDQUFDQyxRQUFRLEdBQUcsVUFBVWpFLEdBQUcsRUFBRTtLQUFFLE9BQU8sT0FBT0EsR0FBRyxDQUFBO0lBQUcsR0FBRyxVQUFVQSxHQUFHLEVBQUU7S0FBRSxPQUFPQSxHQUFHLElBQUksVUFBVSxJQUFJLE9BQU9nRSxNQUFNLElBQUloRSxHQUFHLENBQUNrRSxXQUFXLEtBQUtGLE1BQU0sSUFBSWhFLEdBQUcsS0FBS2dFLE1BQU0sQ0FBQ0csU0FBUyxHQUFHLFFBQVEsR0FBRyxPQUFPbkUsR0FBRyxDQUFBO0FBQUUsSUFBQyxFQUFFK0QsT0FBTyxDQUFDL0QsR0FBRyxDQUFDLENBQUE7RUFBRTtBQUUvVTNFLENBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFVLE9BQUEsRUFBQSxZQUFZLEVBQUU7R0FDM0NFLEtBQUssRUFBRSxJQUFBO0FBQ1QsRUFBQyxDQUFDLENBQUE7Q0FDRixJQUFJK0wsWUFBWSxHQUFHLEVBQUUsQ0FBQTtBQUNyQmhNLENBQUFBLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQTtBQUUzQixDQUFBLElBQUlpTSxLQUFLLEdBQUdDLHVCQUF1QixDQUFDekwsT0FBa0IsQ0FBQyxDQUFBO0NBRXZELElBQUlELE1BQU0sR0FBR0MsT0FBa0IsQ0FBQTtDQUUvQlgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDcEIsTUFBTSxDQUFDLENBQUNvSixPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtHQUN6QyxJQUFJQSxHQUFHLEtBQUssU0FBUyxJQUFJQSxHQUFHLEtBQUssWUFBWSxFQUFFLE9BQUE7QUFDL0MsR0FBQSxJQUFJN0IsTUFBTSxDQUFDOEksU0FBUyxDQUFDdUQsY0FBYyxDQUFDQyxJQUFJLENBQUNKLFlBQVksRUFBRXJLLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDN0QsR0FBQSxJQUFJQSxHQUFHLElBQUkzQixPQUFPLElBQUlBLE9BQU8sQ0FBQzJCLEdBQUcsQ0FBQyxLQUFLbkIsTUFBTSxDQUFDbUIsR0FBRyxDQUFDLEVBQUUsT0FBQTtBQUNwRDdCLEdBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUUyQixHQUFHLEVBQUU7S0FDbEMrQyxVQUFVLEVBQUUsSUFBSTtBQUNoQm1ELEtBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFHQSxHQUFHO09BQ2xCLE9BQU9ySCxNQUFNLENBQUNtQixHQUFHLENBQUMsQ0FBQTtNQUNwQjtBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixTQUFTMEssd0JBQXdCQSxDQUFDQyxXQUFXLEVBQUU7R0FBRSxJQUFJLE9BQU9DLE9BQU8sS0FBSyxVQUFVLEVBQUUsT0FBTyxJQUFJLENBQUE7QUFBRSxHQUFBLElBQUlDLGlCQUFpQixHQUFHLElBQUlELE9BQU8sRUFBRSxDQUFBO0FBQUUsR0FBQSxJQUFJRSxnQkFBZ0IsR0FBRyxJQUFJRixPQUFPLEVBQUUsQ0FBQTtHQUFFLE9BQU8sQ0FBQ0Ysd0JBQXdCLEdBQUcsU0FBU0Esd0JBQXdCQSxDQUFDQyxXQUFXLEVBQUU7QUFBRSxLQUFBLE9BQU9BLFdBQVcsR0FBR0csZ0JBQWdCLEdBQUdELGlCQUFpQixDQUFBO0lBQUcsRUFBRUYsV0FBVyxDQUFDLENBQUE7RUFBRTtBQUU5VSxDQUFBLFNBQVNKLHVCQUF1QkEsQ0FBQ3pILEdBQUcsRUFBRTZILFdBQVcsRUFBRTtHQUFFLElBQUksQ0FBQ0EsV0FBVyxJQUFJN0gsR0FBRyxJQUFJQSxHQUFHLENBQUNpSSxVQUFVLEVBQUU7S0FBRSxPQUFPakksR0FBRyxDQUFBO0lBQUU7QUFBRSxHQUFBLElBQUlBLEdBQUcsS0FBSyxJQUFJLElBQUkrRCxPQUFPLENBQUMvRCxHQUFHLENBQUMsS0FBSyxRQUFRLElBQUksT0FBT0EsR0FBRyxLQUFLLFVBQVUsRUFBRTtLQUFFLE9BQU87T0FBRSxTQUFTLEVBQUVBLEdBQUFBO01BQUssQ0FBQTtJQUFFO0FBQUUsR0FBQSxJQUFJa0ksS0FBSyxHQUFHTix3QkFBd0IsQ0FBQ0MsV0FBVyxDQUFDLENBQUE7R0FBRSxJQUFJSyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsR0FBRyxDQUFDbkksR0FBRyxDQUFDLEVBQUU7QUFBRSxLQUFBLE9BQU9rSSxLQUFLLENBQUM5RSxHQUFHLENBQUNwRCxHQUFHLENBQUMsQ0FBQTtJQUFFO0dBQUUsSUFBSW9JLE1BQU0sR0FBRyxFQUFFLENBQUE7R0FBRSxJQUFJQyxxQkFBcUIsR0FBR2hOLE1BQU0sQ0FBQ0MsY0FBYyxJQUFJRCxNQUFNLENBQUN5Six3QkFBd0IsQ0FBQTtBQUFFLEdBQUEsS0FBSyxJQUFJNUgsR0FBRyxJQUFJOEMsR0FBRyxFQUFFO0FBQUUsS0FBQSxJQUFJOUMsR0FBRyxLQUFLLFNBQVMsSUFBSTdCLE1BQU0sQ0FBQzhJLFNBQVMsQ0FBQ3VELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDM0gsR0FBRyxFQUFFOUMsR0FBRyxDQUFDLEVBQUU7QUFBRSxPQUFBLElBQUlvTCxJQUFJLEdBQUdELHFCQUFxQixHQUFHaE4sTUFBTSxDQUFDeUosd0JBQXdCLENBQUM5RSxHQUFHLEVBQUU5QyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUE7T0FBRSxJQUFJb0wsSUFBSSxLQUFLQSxJQUFJLENBQUNsRixHQUFHLElBQUlrRixJQUFJLENBQUNDLEdBQUcsQ0FBQyxFQUFFO1NBQUVsTixNQUFNLENBQUNDLGNBQWMsQ0FBQzhNLE1BQU0sRUFBRWxMLEdBQUcsRUFBRW9MLElBQUksQ0FBQyxDQUFBO0FBQUUsUUFBQyxNQUFNO1NBQUVGLE1BQU0sQ0FBQ2xMLEdBQUcsQ0FBQyxHQUFHOEMsR0FBRyxDQUFDOUMsR0FBRyxDQUFDLENBQUE7UUFBRTtNQUFFO0lBQUU7QUFBRWtMLEdBQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBR3BJLEdBQUcsQ0FBQTtHQUFFLElBQUlrSSxLQUFLLEVBQUU7S0FBRUEsS0FBSyxDQUFDSyxHQUFHLENBQUN2SSxHQUFHLEVBQUVvSSxNQUFNLENBQUMsQ0FBQTtJQUFFO0dBQUUsT0FBT0EsTUFBTSxDQUFBO0VBQUU7QUFFMXlCLENBQUEsU0FBU0ksZUFBZUEsQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLEVBQUU7QUFBRSxHQUFBLElBQUksRUFBRUQsUUFBUSxZQUFZQyxXQUFXLENBQUMsRUFBRTtBQUFFLEtBQUEsTUFBTSxJQUFJQyxTQUFTLENBQUMsbUNBQW1DLENBQUMsQ0FBQTtJQUFFO0VBQUU7QUFFeEosQ0FBQSxTQUFTQyxpQkFBaUJBLENBQUMzRCxNQUFNLEVBQUVTLEtBQUssRUFBRTtBQUFFLEdBQUEsS0FBSyxJQUFJL0ksQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHK0ksS0FBSyxDQUFDbEosTUFBTSxFQUFFRyxDQUFDLEVBQUUsRUFBRTtBQUFFLEtBQUEsSUFBSWtNLFVBQVUsR0FBR25ELEtBQUssQ0FBQy9JLENBQUMsQ0FBQyxDQUFBO0tBQUVrTSxVQUFVLENBQUM1SSxVQUFVLEdBQUc0SSxVQUFVLENBQUM1SSxVQUFVLElBQUksS0FBSyxDQUFBO0tBQUU0SSxVQUFVLENBQUMzSSxZQUFZLEdBQUcsSUFBSSxDQUFBO0tBQUUsSUFBSSxPQUFPLElBQUkySSxVQUFVLEVBQUVBLFVBQVUsQ0FBQzFJLFFBQVEsR0FBRyxJQUFJLENBQUE7S0FBRTlFLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDMkosTUFBTSxFQUFFNEQsVUFBVSxDQUFDM0wsR0FBRyxFQUFFMkwsVUFBVSxDQUFDLENBQUE7SUFBRTtFQUFFO0FBRTVULENBQUEsU0FBU0MsWUFBWUEsQ0FBQ0osV0FBVyxFQUFFSyxVQUFVLEVBQUVDLFdBQVcsRUFBRTtHQUFFLElBQUlELFVBQVUsRUFBRUgsaUJBQWlCLENBQUNGLFdBQVcsQ0FBQ3ZFLFNBQVMsRUFBRTRFLFVBQVUsQ0FBQyxDQUFBO0dBQUUsSUFBSUMsV0FBVyxFQUFFSixpQkFBaUIsQ0FBQ0YsV0FBVyxFQUFFTSxXQUFXLENBQUMsQ0FBQTtBQUFFM04sR0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNvTixXQUFXLEVBQUUsV0FBVyxFQUFFO0tBQUV2SSxRQUFRLEVBQUUsS0FBQTtBQUFNLElBQUMsQ0FBQyxDQUFBO0dBQUUsT0FBT3VJLFdBQVcsQ0FBQTtFQUFFO0FBRTVSLENBQUEsU0FBUzNJLGVBQWVBLENBQUNDLEdBQUcsRUFBRTlDLEdBQUcsRUFBRTFCLEtBQUssRUFBRTtHQUFFLElBQUkwQixHQUFHLElBQUk4QyxHQUFHLEVBQUU7QUFBRTNFLEtBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDMEUsR0FBRyxFQUFFOUMsR0FBRyxFQUFFO09BQUUxQixLQUFLLEVBQUVBLEtBQUs7T0FBRXlFLFVBQVUsRUFBRSxJQUFJO09BQUVDLFlBQVksRUFBRSxJQUFJO09BQUVDLFFBQVEsRUFBRSxJQUFBO0FBQUssTUFBQyxDQUFDLENBQUE7QUFBRSxJQUFDLE1BQU07QUFBRUgsS0FBQUEsR0FBRyxDQUFDOUMsR0FBRyxDQUFDLEdBQUcxQixLQUFLLENBQUE7SUFBRTtHQUFFLE9BQU93RSxHQUFHLENBQUE7RUFBRTtDQUVoTixJQUFJaUosWUFBWSxnQkFBZ0IsWUFBWTtHQUMxQyxTQUFTQSxZQUFZQSxDQUFDdkQsS0FBSyxFQUFFO0FBQzNCOEMsS0FBQUEsZUFBZSxDQUFDLElBQUksRUFBRVMsWUFBWSxDQUFDLENBQUE7S0FFbkNsSixlQUFlLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO0tBRXRDQSxlQUFlLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO0tBRXRDLElBQUksQ0FBQzZCLEtBQUssR0FBRzRGLEtBQUssQ0FBQ2xDLGVBQWUsRUFBRSxDQUFBO0tBQ3BDLElBQUksQ0FBQ0ksS0FBSyxHQUFHOEIsS0FBSyxDQUFDL0IsZUFBZSxDQUFDQyxLQUFLLENBQUMsQ0FBQTtLQUN6QyxJQUFJLENBQUN3RCxnQkFBZ0IsR0FBRyxJQUFJLENBQUNBLGdCQUFnQixDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDeEQsSUFBSSxDQUFDQyxlQUFlLEdBQUcsSUFBSSxDQUFDQSxlQUFlLENBQUNELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUN0RCxJQUFJLENBQUNFLGNBQWMsR0FBRyxJQUFJLENBQUNBLGNBQWMsQ0FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0tBQ3BELElBQUksQ0FBQ0csZUFBZSxHQUFHLElBQUksQ0FBQ0EsZUFBZSxDQUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDdEQsSUFBSSxDQUFDSSxlQUFlLEdBQUcsSUFBSSxDQUFDQSxlQUFlLENBQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUN0RCxJQUFJLENBQUNLLGFBQWEsR0FBRyxJQUFJLENBQUNBLGFBQWEsQ0FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0tBQ2xELElBQUksQ0FBQ00sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzFEO0dBRUFMLFlBQVksQ0FBQ0csWUFBWSxFQUFFLENBQUM7S0FDMUIvTCxHQUFHLEVBQUUsTUFBTTtBQUNYMUIsS0FBQUEsS0FBSyxFQUFFLFNBQVNrTyxJQUFJQSxHQUFHO09BQ3JCLElBQUksQ0FBQ0MsbUJBQW1CLEVBQUUsQ0FBQTtPQUMxQixJQUFJLENBQUNDLG1CQUFtQixFQUFFLENBQUE7TUFDNUI7QUFDRixJQUFDLEVBQUU7S0FDRDFNLEdBQUcsRUFBRSxRQUFRO0FBQ2IxQixLQUFBQSxLQUFLLEVBQUUsU0FBU3FPLE1BQU1BLENBQUNuRSxLQUFLLEVBQUU7QUFDNUIsT0FBQSxJQUFJb0UsU0FBUyxHQUFHLElBQUksQ0FBQ3BFLEtBQUssQ0FBQTtBQUMxQixPQUFBLElBQUlxRSxTQUFTLEdBQUcxTyxNQUFNLENBQUMyTyxNQUFNLENBQUMsRUFBRSxFQUFFRixTQUFTLEVBQUVwRSxLQUFLLENBQUMsQ0FBQTtBQUVuRCxPQUFBLElBQUlvRSxTQUFTLENBQUNuRSxPQUFPLEtBQUtvRSxTQUFTLENBQUNwRSxPQUFPLElBQUltRSxTQUFTLENBQUM3RSxNQUFNLEtBQUs4RSxTQUFTLENBQUM5RSxNQUFNLEVBQUU7U0FDcEYsSUFBSSxDQUFDZ0YsT0FBTyxFQUFFLENBQUE7U0FDZCxJQUFJLENBQUN2RSxLQUFLLEdBQUdxRSxTQUFTLENBQUE7U0FDdEIsSUFBSSxDQUFDTCxJQUFJLEVBQUUsQ0FBQTtBQUNYLFNBQUEsT0FBQTtRQUNGO09BRUEsSUFBSSxDQUFDaEUsS0FBSyxHQUFHcUUsU0FBUyxDQUFBO0FBRXRCLE9BQUEsSUFBSUQsU0FBUyxDQUFDakUsb0JBQW9CLEtBQUtrRSxTQUFTLENBQUNsRSxvQkFBb0IsSUFBSWlFLFNBQVMsQ0FBQzlELDJCQUEyQixLQUFLK0QsU0FBUyxDQUFDL0QsMkJBQTJCLEVBQUU7U0FDeEosSUFBSSxDQUFDa0UscUJBQXFCLEVBQUUsQ0FBQTtTQUM1QkgsU0FBUyxDQUFDbEUsb0JBQW9CLEdBQUcsSUFBSSxDQUFDK0QsbUJBQW1CLEVBQUUsR0FBRyxJQUFJLENBQUNNLHFCQUFxQixFQUFFLENBQUE7UUFDNUY7T0FFQSxJQUFJSixTQUFTLENBQUNoRSxvQkFBb0IsS0FBS2lFLFNBQVMsQ0FBQ2pFLG9CQUFvQixFQUFFO1NBQ3JFLElBQUksQ0FBQ3FFLHFCQUFxQixFQUFFLENBQUE7U0FDNUJKLFNBQVMsQ0FBQ2pFLG9CQUFvQixHQUFHLElBQUksQ0FBQzZELG1CQUFtQixFQUFFLEdBQUcsSUFBSSxDQUFDUSxxQkFBcUIsRUFBRSxDQUFBO1FBQzVGO01BQ0Y7QUFDRixJQUFDLEVBQUU7S0FDRGpOLEdBQUcsRUFBRSxTQUFTO0FBQ2QxQixLQUFBQSxLQUFLLEVBQUUsU0FBU3lPLE9BQU9BLEdBQUc7T0FDeEIsSUFBSSxDQUFDQyxxQkFBcUIsRUFBRSxDQUFBO09BQzVCLElBQUksQ0FBQ0MscUJBQXFCLEVBQUUsQ0FBQTtPQUM1QixJQUFJLENBQUN2SSxLQUFLLEdBQUc0RixLQUFLLENBQUNsQyxlQUFlLEVBQUUsQ0FBQTtPQUNwQyxJQUFJLENBQUNJLEtBQUssR0FBRzhCLEtBQUssQ0FBQy9CLGVBQWUsRUFBRSxDQUFBO01BQ3RDO0FBQ0YsSUFBQyxFQUFFO0tBQ0R2SSxHQUFHLEVBQUUscUJBQXFCO0FBQzFCMUIsS0FBQUEsS0FBSyxFQUFFLFNBQVNtTyxtQkFBbUJBLEdBQUc7QUFDcEMsT0FBQSxJQUFJUyxXQUFXLEdBQUcsSUFBSSxDQUFDMUUsS0FBSztTQUN4QkMsT0FBTyxHQUFHeUUsV0FBVyxDQUFDekUsT0FBTztTQUM3QlYsTUFBTSxHQUFHbUYsV0FBVyxDQUFDbkYsTUFBTTtTQUMzQmEsb0JBQW9CLEdBQUdzRSxXQUFXLENBQUN0RSxvQkFBb0IsQ0FBQTtPQUUzRCxJQUFJSCxPQUFPLElBQUlHLG9CQUFvQixFQUFFO0FBQ25DLFNBQUEsSUFBSXVFLFFBQVEsR0FBR3BGLE1BQU0sSUFBSVUsT0FBTyxDQUFBO0FBQ2hDLFNBQUEsSUFBSXRDLGtCQUFrQixHQUFHbUUsS0FBSyxDQUFDakUsdUJBQXVCLEVBQUUsQ0FBQTtTQUN4RCxJQUFJMUIsT0FBTyxHQUFHMkYsS0FBSyxDQUFDdEIsVUFBVSxDQUFDN0Msa0JBQWtCLENBQUMsQ0FBQTtTQUNsRGdILFFBQVEsQ0FBQzNHLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUN3RixnQkFBZ0IsRUFBRXJILE9BQU8sQ0FBQyxDQUFBO1NBQ3ZFd0ksUUFBUSxDQUFDM0csZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQzBGLGVBQWUsRUFBRXZILE9BQU8sQ0FBQyxDQUFBO1NBQ3JFd0ksUUFBUSxDQUFDM0csZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQzJGLGNBQWMsRUFBRXhILE9BQU8sQ0FBQyxDQUFBO1FBQ3JFO01BQ0Y7QUFDRixJQUFDLEVBQUU7S0FDRDNFLEdBQUcsRUFBRSx1QkFBdUI7QUFDNUIxQixLQUFBQSxLQUFLLEVBQUUsU0FBUzJPLHFCQUFxQkEsR0FBRztBQUN0QyxPQUFBLElBQUlHLFlBQVksR0FBRyxJQUFJLENBQUM1RSxLQUFLO1NBQ3pCQyxPQUFPLEdBQUcyRSxZQUFZLENBQUMzRSxPQUFPO1NBQzlCVixNQUFNLEdBQUdxRixZQUFZLENBQUNyRixNQUFNLENBQUE7QUFDaEMsT0FBQSxJQUFJb0YsUUFBUSxHQUFHcEYsTUFBTSxJQUFJVSxPQUFPLENBQUE7T0FFaEMsSUFBSTBFLFFBQVEsRUFBRTtTQUNaQSxRQUFRLENBQUN6RyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDc0YsZ0JBQWdCLENBQUMsQ0FBQTtTQUNqRW1CLFFBQVEsQ0FBQ3pHLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUN3RixlQUFlLENBQUMsQ0FBQTtTQUMvRGlCLFFBQVEsQ0FBQ3pHLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUN5RixjQUFjLENBQUMsQ0FBQTtRQUMvRDtNQUNGO0FBQ0YsSUFBQyxFQUFFO0tBQ0RuTSxHQUFHLEVBQUUscUJBQXFCO0FBQzFCMUIsS0FBQUEsS0FBSyxFQUFFLFNBQVNvTyxtQkFBbUJBLEdBQUc7QUFDcEMsT0FBQSxJQUFJVyxZQUFZLEdBQUcsSUFBSSxDQUFDN0UsS0FBSztTQUN6QkMsT0FBTyxHQUFHNEUsWUFBWSxDQUFDNUUsT0FBTztTQUM5QkUsb0JBQW9CLEdBQUcwRSxZQUFZLENBQUMxRSxvQkFBb0I7U0FDeERHLDJCQUEyQixHQUFHdUUsWUFBWSxDQUFDdkUsMkJBQTJCLENBQUE7T0FFMUUsSUFBSUgsb0JBQW9CLElBQUlGLE9BQU8sRUFBRTtTQUNuQ0EsT0FBTyxDQUFDakMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQzRGLGVBQWUsQ0FBQyxDQUFBO1NBQzNEM0QsT0FBTyxDQUFDakMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQzZGLGVBQWUsQ0FBQyxDQUFBO1NBQzNENUQsT0FBTyxDQUFDakMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQzhGLGFBQWEsQ0FBQyxDQUFBO1NBRXZELElBQUl4RCwyQkFBMkIsRUFBRTtXQUMvQkwsT0FBTyxDQUFDakMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQytGLGdCQUFnQixDQUFDLENBQUE7VUFDL0Q7UUFDRjtNQUNGO0FBQ0YsSUFBQyxFQUFFO0tBQ0R2TSxHQUFHLEVBQUUsdUJBQXVCO0FBQzVCMUIsS0FBQUEsS0FBSyxFQUFFLFNBQVMwTyxxQkFBcUJBLEdBQUc7T0FDdEMsSUFBSXZFLE9BQU8sR0FBRyxJQUFJLENBQUNELEtBQUssQ0FBQ0MsT0FBTyxDQUFBO09BRWhDLElBQUlBLE9BQU8sRUFBRTtTQUNYQSxPQUFPLENBQUMvQixtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDMEYsZUFBZSxDQUFDLENBQUE7U0FDOUQzRCxPQUFPLENBQUMvQixtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDMkYsZUFBZSxDQUFDLENBQUE7U0FDOUQ1RCxPQUFPLENBQUMvQixtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDNEYsYUFBYSxDQUFDLENBQUE7U0FDMUQ3RCxPQUFPLENBQUMvQixtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDNkYsZ0JBQWdCLENBQUMsQ0FBQTtRQUNsRTtNQUNGO0FBQ0YsSUFBQyxFQUFFO0tBQ0R2TSxHQUFHLEVBQUUsY0FBYztBQUNuQjFCLEtBQUFBLEtBQUssRUFBRSxTQUFTZ1AsWUFBWUEsQ0FBQ3BMLENBQUMsRUFBRTtPQUM5QixJQUFJeUMsT0FBTyxHQUFHN0UsU0FBUyxDQUFDUixNQUFNLEdBQUcsQ0FBQyxJQUFJUSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUtDLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHO1NBQ2hGOEQsY0FBYyxFQUFFLENBQUE7UUFDakIsQ0FBQTtPQUNELElBQUk4RSxhQUFhLEdBQUcsSUFBSSxDQUFDRixLQUFLLENBQUNFLGFBQWEsQ0FBQTtBQUM1QyxPQUFBLElBQUk5RSxjQUFjLEdBQUdlLE9BQU8sQ0FBQ2YsY0FBYyxDQUFBO09BQzNDLElBQUkySixjQUFjLEdBQUdqRCxLQUFLLENBQUNySSx1QkFBdUIsQ0FBQ0MsQ0FBQyxDQUFDLENBQUE7T0FDckQsSUFBSTZDLGNBQWMsR0FBR3VGLEtBQUssQ0FBQ25CLGFBQWEsQ0FBQ29FLGNBQWMsRUFBRTdFLGFBQWEsQ0FBQyxDQUFBO09BQ3ZFLE9BQU80QixLQUFLLENBQUNqRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUNLLEtBQUssRUFBRTtTQUN6Q0ssY0FBYyxFQUFFQSxjQUFjO1NBQzlCbkIsY0FBYyxFQUFFQSxjQUFBQTtBQUNsQixRQUFDLENBQUMsQ0FBQTtNQUNKO0FBQ0YsSUFBQyxFQUFFO0tBQ0Q1RCxHQUFHLEVBQUUsa0JBQWtCO0FBQ3ZCMUIsS0FBQUEsS0FBSyxFQUFFLFNBQVMwTixnQkFBZ0JBLENBQUM5SixDQUFDLEVBQUU7T0FDbEMsSUFBSW9JLEtBQUssQ0FBQ3pFLDRCQUE0QixDQUFDM0QsQ0FBQyxDQUFDLEVBQUUsT0FBQTtPQUMzQyxJQUFJd0csYUFBYSxHQUFHLElBQUksQ0FBQ0YsS0FBSyxDQUFDRSxhQUFhLENBQUE7T0FDNUMsSUFBSTZFLGNBQWMsR0FBR2pELEtBQUssQ0FBQ3JJLHVCQUF1QixDQUFDQyxDQUFDLENBQUMsQ0FBQTtPQUVyRCxJQUFJc0wsb0JBQW9CLEdBQUdsRCxLQUFLLENBQUNuQixhQUFhLENBQUNvRSxjQUFjLEVBQUU3RSxhQUFhLENBQUM7U0FDekVwSSxDQUFDLEdBQUdrTixvQkFBb0IsQ0FBQ2xOLENBQUM7U0FDMUJDLENBQUMsR0FBR2lOLG9CQUFvQixDQUFDak4sQ0FBQyxDQUFBO0FBRTlCLE9BQUEsSUFBSSxDQUFDbUUsS0FBSyxHQUFHNEYsS0FBSyxDQUFDbEMsZUFBZSxDQUFDO1NBQ2pDQyxTQUFTLEVBQUUsS0FBSztBQUNoQnpELFNBQUFBLEtBQUssRUFBRVcsSUFBSSxDQUFDQyxHQUFHLEVBQUU7U0FDakJsRixDQUFDLEVBQUVBLENBQUM7U0FDSkMsQ0FBQyxFQUFFQSxDQUFBQTtBQUNMLFFBQUMsQ0FBQyxDQUFBO01BQ0o7QUFDRixJQUFDLEVBQUU7S0FDRFAsR0FBRyxFQUFFLGlCQUFpQjtBQUN0QjFCLEtBQUFBLEtBQUssRUFBRSxTQUFTNE4sZUFBZUEsQ0FBQ2hLLENBQUMsRUFBRTtBQUNqQyxPQUFBLElBQUl1TCxXQUFXLEdBQUcsSUFBSSxDQUFDL0ksS0FBSztTQUN4QnBFLENBQUMsR0FBR21OLFdBQVcsQ0FBQ25OLENBQUM7U0FDakJDLENBQUMsR0FBR2tOLFdBQVcsQ0FBQ2xOLENBQUM7U0FDakI4SCxTQUFTLEdBQUdvRixXQUFXLENBQUNwRixTQUFTLENBQUE7QUFDckMsT0FBQSxJQUFJLENBQUMvSCxDQUFDLElBQUksQ0FBQ0MsQ0FBQyxJQUFJK0osS0FBSyxDQUFDekUsNEJBQTRCLENBQUMzRCxDQUFDLENBQUMsRUFBRSxPQUFBO09BQ3ZELElBQUkwQixjQUFjLEdBQUcsSUFBSSxDQUFDNEUsS0FBSyxDQUFDNUUsY0FBYyxJQUFJLENBQUMsQ0FBQTtPQUVuRCxJQUFJOEosa0JBQWtCLEdBQUcsSUFBSSxDQUFDSixZQUFZLENBQUNwTCxDQUFDLEVBQUU7V0FDNUMwQixjQUFjLEVBQUVBLGNBQUFBO0FBQ2xCLFVBQUMsQ0FBQztTQUNFc0IsSUFBSSxHQUFHd0ksa0JBQWtCLENBQUN4SSxJQUFJO1NBQzlCQyxJQUFJLEdBQUd1SSxrQkFBa0IsQ0FBQ3ZJLElBQUk7U0FDOUJILE1BQU0sR0FBRzBJLGtCQUFrQixDQUFDMUksTUFBTTtTQUNsQ0MsTUFBTSxHQUFHeUksa0JBQWtCLENBQUN6SSxNQUFNO1NBQ2xDRyxVQUFVLEdBQUdzSSxrQkFBa0IsQ0FBQ3RJLFVBQVU7U0FDMUNDLFVBQVUsR0FBR3FJLGtCQUFrQixDQUFDckksVUFBVTtTQUMxQ0MsUUFBUSxHQUFHb0ksa0JBQWtCLENBQUNwSSxRQUFRO1NBQ3RDRyxRQUFRLEdBQUdpSSxrQkFBa0IsQ0FBQ2pJLFFBQVEsQ0FBQTtBQUUxQyxPQUFBLElBQUlrSSxZQUFZLEdBQUcsSUFBSSxDQUFDbkYsS0FBSztTQUN6Qm5ILEtBQUssR0FBR3NNLFlBQVksQ0FBQ3RNLEtBQUs7U0FDMUJ3SCw0QkFBNEIsR0FBRzhFLFlBQVksQ0FBQzlFLDRCQUE0QjtTQUN4RStFLFlBQVksR0FBR0QsWUFBWSxDQUFDQyxZQUFZO1NBQ3hDQyxTQUFTLEdBQUdGLFlBQVksQ0FBQ0UsU0FBUyxDQUFBO09BQ3RDLElBQUkzTCxDQUFDLENBQUM0TCxVQUFVLElBQUlqRiw0QkFBNEIsRUFBRTNHLENBQUMsQ0FBQzZMLGNBQWMsRUFBRSxDQUFBO0FBQ3BFLE9BQUEsSUFBSTdJLElBQUksR0FBRzhJLE1BQU0sQ0FBQzNNLEtBQUssQ0FBQyxJQUFJOEQsSUFBSSxHQUFHNkksTUFBTSxDQUFDM00sS0FBSyxDQUFDLElBQUksQ0FBQ2dILFNBQVMsRUFBRSxPQUFBO0FBRWhFLE9BQUEsSUFBSXVGLFlBQVksSUFBSSxDQUFDdkYsU0FBUyxFQUFFO1NBQzlCdUYsWUFBWSxDQUFDMUwsQ0FBQyxFQUFFO1dBQ2Q4QyxNQUFNLEVBQUVBLE1BQU07V0FDZEMsTUFBTSxFQUFFQSxNQUFNO1dBQ2RDLElBQUksRUFBRUEsSUFBSTtXQUNWQyxJQUFJLEVBQUVBLElBQUk7V0FDVkMsVUFBVSxFQUFFQSxVQUFVO1dBQ3RCQyxVQUFVLEVBQUVBLFVBQVU7V0FDdEJDLFFBQVEsRUFBRUEsUUFBUTtXQUNsQkcsUUFBUSxFQUFFQSxRQUFBQTtBQUNaLFVBQUMsQ0FBQyxDQUFBO1FBQ0o7QUFFQSxPQUFBLElBQUksQ0FBQ2YsS0FBSyxDQUFDMkQsU0FBUyxHQUFHLElBQUksQ0FBQTtPQUUzQixJQUFJd0YsU0FBUyxFQUFFO1NBQ2JBLFNBQVMsQ0FBQzNMLENBQUMsRUFBRTtXQUNYOEMsTUFBTSxFQUFFQSxNQUFNO1dBQ2RDLE1BQU0sRUFBRUEsTUFBTTtXQUNkQyxJQUFJLEVBQUVBLElBQUk7V0FDVkMsSUFBSSxFQUFFQSxJQUFJO1dBQ1ZDLFVBQVUsRUFBRUEsVUFBVTtXQUN0QkMsVUFBVSxFQUFFQSxVQUFVO1dBQ3RCQyxRQUFRLEVBQUVBLFFBQVE7V0FDbEJHLFFBQVEsRUFBRUEsUUFBQUE7QUFDWixVQUFDLENBQUMsQ0FBQTtRQUNKO01BQ0Y7QUFDRixJQUFDLEVBQUU7S0FDRHpGLEdBQUcsRUFBRSxnQkFBZ0I7QUFDckIxQixLQUFBQSxLQUFLLEVBQUUsU0FBUzZOLGNBQWNBLENBQUNqSyxDQUFDLEVBQUU7QUFDaEMsT0FBQSxJQUFJK0wsWUFBWSxHQUFHLElBQUksQ0FBQ3pGLEtBQUs7U0FDekIwRixRQUFRLEdBQUdELFlBQVksQ0FBQ0MsUUFBUTtTQUNoQ0MsS0FBSyxHQUFHRixZQUFZLENBQUNFLEtBQUssQ0FBQTtBQUU5QixPQUFBLElBQUksSUFBSSxDQUFDekosS0FBSyxDQUFDMkQsU0FBUyxFQUFFO1NBQ3hCLElBQUl6RSxjQUFjLEdBQUcsSUFBSSxDQUFDNEUsS0FBSyxDQUFDNUUsY0FBYyxJQUFJLENBQUMsQ0FBQTtTQUNuRCxJQUFJd0YsUUFBUSxHQUFHLElBQUksQ0FBQ2tFLFlBQVksQ0FBQ3BMLENBQUMsRUFBRTtXQUNsQzBCLGNBQWMsRUFBRUEsY0FBQUE7QUFDbEIsVUFBQyxDQUFDLENBQUE7U0FDRnNLLFFBQVEsSUFBSUEsUUFBUSxDQUFDaE0sQ0FBQyxFQUFFa0gsUUFBUSxDQUFDLENBQUE7QUFDbkMsUUFBQyxNQUFNO1NBQ0wsSUFBSWdGLFNBQVMsR0FBRyxJQUFJLENBQUNkLFlBQVksQ0FBQ3BMLENBQUMsQ0FBQyxDQUFBO1NBRXBDaU0sS0FBSyxJQUFJQSxLQUFLLENBQUNqTSxDQUFDLEVBQUVrTSxTQUFTLENBQUMsQ0FBQTtRQUM5QjtPQUVBLElBQUksQ0FBQzFKLEtBQUssR0FBRzRGLEtBQUssQ0FBQ2xDLGVBQWUsRUFBRSxDQUFBO01BQ3RDO0FBQ0YsSUFBQyxFQUFFO0tBQ0RwSSxHQUFHLEVBQUUsaUJBQWlCO0FBQ3RCMUIsS0FBQUEsS0FBSyxFQUFFLFNBQVM4TixlQUFlQSxDQUFDbEssQ0FBQyxFQUFFO09BQ2pDLElBQUk2RixNQUFNLEdBQUcsSUFBSSxDQUFDUyxLQUFLLENBQUNULE1BQU0sQ0FBQTtPQUU5QixJQUFJQSxNQUFNLEVBQUU7QUFDVixTQUFBLElBQUlBLE1BQU0sS0FBSzdGLENBQUMsQ0FBQzZGLE1BQU0sRUFBRTtBQUN2QixXQUFBLElBQUksQ0FBQ2lFLGdCQUFnQixDQUFDOUosQ0FBQyxDQUFDLENBQUE7VUFDMUI7QUFDRixRQUFDLE1BQU07QUFDTCxTQUFBLElBQUksQ0FBQzhKLGdCQUFnQixDQUFDOUosQ0FBQyxDQUFDLENBQUE7UUFDMUI7TUFDRjtBQUNGLElBQUMsRUFBRTtLQUNEbEMsR0FBRyxFQUFFLGlCQUFpQjtBQUN0QjFCLEtBQUFBLEtBQUssRUFBRSxTQUFTK04sZUFBZUEsQ0FBQ25LLENBQUMsRUFBRTtBQUNqQyxPQUFBLElBQUksQ0FBQ2dLLGVBQWUsQ0FBQ2hLLENBQUMsQ0FBQyxDQUFBO01BQ3pCO0FBQ0YsSUFBQyxFQUFFO0tBQ0RsQyxHQUFHLEVBQUUsZUFBZTtBQUNwQjFCLEtBQUFBLEtBQUssRUFBRSxTQUFTZ08sYUFBYUEsQ0FBQ3BLLENBQUMsRUFBRTtPQUMvQixJQUFJbUcsU0FBUyxHQUFHLElBQUksQ0FBQzNELEtBQUssQ0FBQzJELFNBQVMsQ0FBQTtPQUNwQyxJQUFJTixNQUFNLEdBQUcsSUFBSSxDQUFDUyxLQUFLLENBQUNULE1BQU0sQ0FBQTtPQUU5QixJQUFJQSxNQUFNLEVBQUU7U0FDVixJQUFJQSxNQUFNLEtBQUs3RixDQUFDLENBQUM2RixNQUFNLElBQUlNLFNBQVMsRUFBRTtBQUNwQyxXQUFBLElBQUksQ0FBQzhELGNBQWMsQ0FBQ2pLLENBQUMsQ0FBQyxDQUFBO1VBQ3hCO0FBQ0YsUUFBQyxNQUFNO0FBQ0wsU0FBQSxJQUFJLENBQUNpSyxjQUFjLENBQUNqSyxDQUFDLENBQUMsQ0FBQTtRQUN4QjtNQUNGO0FBQ0YsSUFBQyxFQUFFO0tBQ0RsQyxHQUFHLEVBQUUsa0JBQWtCO0FBQ3ZCMUIsS0FBQUEsS0FBSyxFQUFFLFNBQVNpTyxnQkFBZ0JBLENBQUNySyxDQUFDLEVBQUU7T0FDbEMsSUFBSW1HLFNBQVMsR0FBRyxJQUFJLENBQUMzRCxLQUFLLENBQUMyRCxTQUFTLENBQUE7T0FFcEMsSUFBSUEsU0FBUyxFQUFFO0FBQ2IsU0FBQSxJQUFJLENBQUM4RCxjQUFjLENBQUNqSyxDQUFDLENBQUMsQ0FBQTtRQUN4QjtNQUNGO0lBQ0QsQ0FBQyxFQUFFLENBQUM7S0FDSGxDLEdBQUcsRUFBRSx3QkFBd0I7QUFDN0IxQixLQUFBQSxLQUFLLEVBQUUsU0FBUytQLHNCQUFzQkEsR0FBRztPQUN2QyxPQUFPL0QsS0FBSyxDQUFDcEQsMkJBQTJCLEVBQUUsQ0FBQTtNQUM1QztJQUNELENBQUMsQ0FBQyxDQUFBO0dBRUgsT0FBTzZFLFlBQVksQ0FBQTtBQUNyQixFQUFDLEVBQUUsQ0FBQTtBQUVIMU4sQ0FBQUEsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHME4sWUFBWSxDQUFBOzs7Ozs7OztBQ2hVaUY1TixDQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLFlBQVksRUFBQztHQUFDQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0FBQUMsRUFBQyxDQUFDLEVBQUNELE9BQWtCQSxDQUFBQSxTQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxVQUFBQSxHQUFtQkEsNEJBQTBCQSxPQUF5QkEsQ0FBQUEsZ0JBQUFBLEdBQUFBLE9BQUFBLENBQUFBLGdCQUFBQSxHQUF5QkEsT0FBc0JBLENBQUFBLGFBQUFBLEdBQUFBLE9BQUFBLENBQUFBLFNBQUFBLEdBQWtCLEtBQUssQ0FBQyxFQUFDLFVBQVM2RCxDQUFDLEVBQUM7R0FBQ0EsQ0FBQyxDQUFDb00sTUFBTSxHQUFDLFFBQVEsRUFBQ3BNLENBQUMsQ0FBQ3FNLElBQUksR0FBQyxNQUFNLEVBQUNyTSxDQUFDLENBQUNzTSxNQUFNLEdBQUMsUUFBUSxFQUFDdE0sQ0FBQyxDQUFDdU0sTUFBTSxHQUFDLFFBQVEsQ0FBQTtBQUFBLEVBQUMsQ0FBV3BRLE9BQU8sQ0FBQ3FRLFNBQVMsS0FBR3JRLE9BQWtCLENBQUEsU0FBQSxHQUFBLEVBQUUsQ0FBQyxDQUFDLEVBQUMsVUFBUzZELENBQUMsRUFBQztHQUFDQSxDQUFDLENBQUN5TSxPQUFPLEdBQUMsU0FBUyxFQUFDek0sQ0FBQyxDQUFDME0sS0FBSyxHQUFDLE9BQU8sQ0FBQTtBQUFBLEVBQUMsQ0FBZXZRLE9BQU8sQ0FBQ3dRLGFBQWEsS0FBR3hRLE9BQXNCLENBQUEsYUFBQSxHQUFBLEVBQUUsQ0FBQyxDQUFDLEVBQUMsVUFBUzZELENBQUMsRUFBQztHQUFDQSxDQUFDLENBQUM0TSxPQUFPLEdBQUMsU0FBUyxFQUFDNU0sQ0FBQyxDQUFDNk0sR0FBRyxHQUFDLEtBQUssRUFBQzdNLENBQUMsQ0FBQ29NLE1BQU0sR0FBQyxRQUFRLEVBQUNwTSxDQUFDLENBQUN4QyxJQUFJLEdBQUMsTUFBTSxDQUFBO0FBQUEsRUFBQyxDQUFrQnJCLE9BQU8sQ0FBQzJRLGdCQUFnQixLQUFHM1EsT0FBeUIsQ0FBQSxnQkFBQSxHQUFBLEVBQUUsQ0FBQyxDQUFDLEVBQUMsVUFBUzZELENBQUMsRUFBQztBQUFDQSxHQUFBQSxDQUFDLENBQUM0TSxPQUFPLEdBQUMsU0FBUyxFQUFDNU0sQ0FBQyxDQUFDK00sU0FBUyxHQUFDLFdBQVcsRUFBQy9NLENBQUMsQ0FBQ2dOLFVBQVUsR0FBQyxZQUFZLENBQUE7QUFBQSxFQUFDLENBQWtCN1EsT0FBTyxDQUFDOFEsZ0JBQWdCLEtBQUc5USxPQUF5QixDQUFBLGdCQUFBLEdBQUEsRUFBRSxDQUFDLENBQUMsRUFBQyxVQUFTNkQsQ0FBQyxFQUFDO0dBQUNBLENBQUMsQ0FBQ2tOLEdBQUcsR0FBQyxLQUFLLEVBQUNsTixDQUFDLENBQUNtTixHQUFHLEdBQUMsS0FBSyxDQUFBO0FBQUEsRUFBQyxDQUFtQmhSLE9BQU8sQ0FBQ2lSLGlCQUFpQixLQUFHalIsT0FBMEIsQ0FBQSxpQkFBQSxHQUFBLEVBQUUsQ0FBQyxDQUFDLEVBQUMsVUFBUzZELENBQUMsRUFBQztHQUFDQSxDQUFDLENBQUNxTixRQUFRLEdBQUMsK0JBQStCLEVBQUNyTixDQUFDLENBQUNzTixJQUFJLEdBQUMsZ0JBQWdCLEVBQUN0TixDQUFDLENBQUN1TixPQUFPLEdBQUMseUJBQXlCLEVBQUN2TixDQUFDLENBQUN3TixLQUFLLEdBQUMsdUJBQXVCLEVBQUN4TixDQUFDLENBQUN5TixVQUFVLEdBQUMsNEJBQTRCLEVBQUN6TixDQUFDLENBQUMwTixJQUFJLEdBQUMsc0JBQXNCLEVBQUMxTixDQUFDLENBQUMyTixTQUFTLEdBQUMsMkJBQTJCLEVBQUMzTixDQUFDLENBQUM0TixRQUFRLEdBQUMsMEJBQTBCLEVBQUM1TixDQUFDLENBQUM2TixhQUFhLEdBQUMsK0JBQStCLEVBQUM3TixDQUFDLENBQUM4TixnQkFBZ0IsR0FBQyxrQ0FBa0MsRUFBQzlOLENBQUMsQ0FBQytOLFVBQVUsR0FBQyw0QkFBNEIsRUFBQy9OLENBQUMsQ0FBQ2dPLGVBQWUsR0FBQyxpQ0FBaUMsRUFBQ2hPLENBQUMsQ0FBQ2lPLFdBQVcsR0FBQywwQkFBMEIsRUFBQ2pPLENBQUMsQ0FBQ2tPLG1CQUFtQixHQUFDLGtDQUFrQyxFQUFDbE8sQ0FBQyxDQUFDbU8sZ0JBQWdCLEdBQUMsK0JBQStCLEVBQUNuTyxDQUFDLENBQUNvTyxXQUFXLEdBQUMsMEJBQTBCLEVBQUNwTyxDQUFDLENBQUNxTyxtQkFBbUIsR0FBQyxrQ0FBa0MsRUFBQ3JPLENBQUMsQ0FBQ3NPLGdCQUFnQixHQUFDLCtCQUErQixDQUFBO0FBQUEsRUFBQyxDQUFZblMsT0FBTyxDQUFDb1MsVUFBVSxLQUFHcFMsT0FBbUIsQ0FBQSxVQUFBLEdBQUEsRUFBRSxDQUFDLENBQUMsRUFBQyxVQUFTNkQsQ0FBQyxFQUFDO0dBQUNBLENBQUMsQ0FBQ3dPLE1BQU0sR0FBQyxVQUFVLEVBQUN4TyxDQUFDLENBQUN5TyxRQUFRLEdBQUMsWUFBWSxFQUFDek8sQ0FBQyxDQUFDME8sTUFBTSxHQUFDLFVBQVUsRUFBQzFPLENBQUMsQ0FBQzJPLE1BQU0sR0FBQyxVQUFVLEVBQUMzTyxDQUFDLENBQUM0TyxLQUFLLEdBQUMsU0FBUyxFQUFDNU8sQ0FBQyxDQUFDNk8sU0FBUyxHQUFDLGFBQWEsRUFBQzdPLENBQUMsQ0FBQzhPLEdBQUcsR0FBQyxPQUFPLEVBQUM5TyxDQUFDLENBQUMrTyxNQUFNLEdBQUMsVUFBVSxDQUFBO0VBQUMsQ0FBVzVTLE9BQU8sQ0FBQzZTLFNBQVMsS0FBRzdTLE9BQUFBLENBQUFBLFNBQUFBLEdBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUE7Ozs7O0FDQTdnRUYsQ0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxZQUFZLEVBQUM7R0FBQ0MsS0FBSyxFQUFDLENBQUMsQ0FBQTtBQUFDLEVBQUMsQ0FBQyxFQUFDRCxPQUFxQixDQUFBLFlBQUEsR0FBQSxLQUFLLENBQUMsQ0FBQTtDQUFDLElBQUk4UyxPQUFPLEdBQUNyUyxLQUFrQixDQUFBO0NBQUNULE9BQXFCLENBQUEsWUFBQSxHQUFBO0dBQUMrUyxXQUFXLEVBQUMsQ0FBQztHQUFDQyxpQkFBaUIsRUFBQyxHQUFHO0dBQUNDLHVCQUF1QixFQUFDLE1BQU07QUFBQ0MsR0FBQUEsYUFBYSxFQUFDSixPQUFPLENBQUN0QyxhQUFhLENBQUNELEtBQUs7R0FBQzRDLFVBQVUsRUFBQyxDQUFDLENBQUM7R0FBQ0MsU0FBUyxFQUFDLENBQUMsQ0FBQztHQUFDQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO0dBQUNDLGdCQUFnQixFQUFDLENBQUMsQ0FBQztBQUFDQyxHQUFBQSxpQkFBaUIsRUFBQ1QsT0FBTyxDQUFDN0IsaUJBQWlCLENBQUNELEdBQUc7R0FBQ3dDLGdCQUFnQixFQUFDLEdBQUc7QUFBQ0MsR0FBQUEsZ0JBQWdCLEVBQUNYLE9BQU8sQ0FBQ25DLGdCQUFnQixDQUFDRixPQUFPO0dBQUNpRCxRQUFRLEVBQUMsS0FBSyxDQUFDO0FBQUNDLEdBQUFBLGdCQUFnQixFQUFDYixPQUFPLENBQUNoQyxnQkFBZ0IsQ0FBQ0wsT0FBTztHQUFDbUQsc0JBQXNCLEVBQUMsQ0FBQyxDQUFDO0dBQUNDLG1CQUFtQixFQUFDLENBQUMsQ0FBQztHQUFDQyxnQkFBZ0IsRUFBQyxDQUFDLENBQUM7R0FBQ0MsUUFBUSxFQUFDLENBQUMsQ0FBQztHQUFDQyxVQUFVLEVBQUMsS0FBSyxDQUFDO0dBQUNDLEtBQUssRUFBQyxLQUFLLENBQUM7R0FBQ0Msa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO0dBQUNDLGFBQWEsRUFBQyxDQUFDLENBQUM7R0FBQ0MsSUFBSSxFQUFDLEVBQUU7R0FBQ0MsV0FBVyxFQUFDLENBQUM7R0FBQ0MsWUFBWSxFQUFDLENBQUM7R0FBQ0MsVUFBVSxFQUFDLEtBQUssQ0FBQztHQUFDQyxVQUFVLEVBQUMsRUFBRTtHQUFDQyxpQkFBaUIsRUFBQyxHQUFHO0dBQUNDLGFBQWEsRUFBQyxDQUFDLENBQUM7R0FBQ0MsYUFBYSxFQUFDLENBQUMsQ0FBQztHQUFDQyxzQkFBc0IsRUFBQyxDQUFDLENBQUM7R0FBQ0MsYUFBYSxFQUFDLFlBQVUsRUFBRTtHQUFDQyxTQUFTLEVBQUMsWUFBVSxFQUFFO0dBQUNDLGFBQWEsRUFBQyxLQUFLLENBQUM7R0FBQ0MsYUFBYSxFQUFDLFlBQVUsRUFBRTtHQUFDQyxjQUFjLEVBQUMsWUFBVSxFQUFDO0VBQUUsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NBcjVCLElBQUlDLFFBQVEsR0FBQyxZQUFVO0tBQUMsT0FBTSxDQUFDQSxRQUFRLEdBQUNwVixNQUFNLENBQUMyTyxNQUFNLElBQUUsVUFBUzBHLENBQUMsRUFBQztPQUFDLEtBQUksSUFBSUMsQ0FBQyxFQUFDQyxDQUFDLEdBQUMsQ0FBQyxFQUFDalUsQ0FBQyxHQUFDSyxTQUFTLENBQUNSLE1BQU0sRUFBQ29VLENBQUMsR0FBQ2pVLENBQUMsRUFBQ2lVLENBQUMsRUFBRSxFQUFDLEtBQUksSUFBSUMsQ0FBQyxJQUFJRixDQUFDLEdBQUMzVCxTQUFTLENBQUM0VCxDQUFDLENBQUMsRUFBQ3ZWLE1BQU0sQ0FBQzhJLFNBQVMsQ0FBQ3VELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDZ0osQ0FBQyxFQUFDRSxDQUFDLENBQUMsS0FBR0gsQ0FBQyxDQUFDRyxDQUFDLENBQUMsR0FBQ0YsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQyxDQUFBO09BQUMsT0FBT0gsQ0FBQyxDQUFBO0FBQUEsTUFBQyxFQUFFM0wsS0FBSyxDQUFDLElBQUksRUFBQy9ILFNBQVMsQ0FBQyxDQUFBO0lBQUM7R0FBQzhULGdCQUFnQixJQUFFelYsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxZQUFZLEVBQUM7S0FBQ0MsS0FBSyxFQUFDLENBQUMsQ0FBQTtJQUFFLENBQUMsRUFBQ0QsT0FBMEJBLENBQUFBLGlCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxnQkFBQUEsR0FBeUIsS0FBSyxDQUFDLEVBQUMsVUFBU21WLENBQUMsRUFBQztBQUFDLEtBQUEsT0FBT0EsQ0FBQyxDQUFDSyxHQUFHLENBQUMsVUFBU0wsQ0FBQyxFQUFDO09BQUMsT0FBTTtTQUFDTSxLQUFLLEVBQUNOLENBQUMsQ0FBQ00sS0FBSztTQUFDMUssUUFBUSxFQUFDLENBQUE7UUFBRSxDQUFBO0FBQUEsTUFBQyxDQUFDLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQzJLLGlCQUFpQixJQUFFMVYsT0FBeUJ1VixDQUFBQSxnQkFBQUEsR0FBQUEsZ0JBQWdCLEVBQUMsVUFBU0osQ0FBQyxFQUFDQyxDQUFDLEVBQUM7QUFBQyxLQUFBLE9BQU8sS0FBSyxDQUFDLEtBQUdBLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDRCxDQUFDLENBQUNLLEdBQUcsQ0FBQyxVQUFTTCxDQUFDLEVBQUM7QUFBQyxPQUFBLE9BQU9BLENBQUMsQ0FBQ3BLLFFBQVEsR0FBQ3FLLENBQUMsR0FBQ0YsUUFBUSxDQUFDQSxRQUFRLENBQUMsRUFBRSxFQUFDQyxDQUFDLENBQUMsRUFBQztTQUFDcEssUUFBUSxFQUFDcUssQ0FBQUE7UUFBRSxDQUFDLEdBQUNELENBQUMsQ0FBQTtBQUFBLE1BQUMsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDLENBQUE7QUFBQ25WLENBQUFBLE9BQUFBLENBQUFBLGlCQUFBQSxHQUEwQjBWLGlCQUFpQixDQUFBOzs7Ozs7O0FDQS9vQjVWLENBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsWUFBWSxFQUFDO0dBQUNDLEtBQUssRUFBQyxDQUFDLENBQUE7RUFBRSxDQUFDLEVBQUNELE9BQW9DQSxDQUFBQSwyQkFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsMkJBQUFBLEdBQW9DQSxtQ0FBaUNBLE9BQThCQSxDQUFBQSxxQkFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsd0JBQUFBLEdBQWlDQSxPQUFxQ0EsQ0FBQUEsNEJBQUFBLEdBQUFBLE9BQUFBLENBQUFBLDBCQUFBQSxHQUFtQ0EsT0FBMkJBLENBQUFBLGtCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxhQUFBQSxHQUFzQkEsNkJBQTJCQSxPQUF1Q0EsQ0FBQUEsOEJBQUFBLEdBQUFBLE9BQUFBLENBQUFBLGdCQUFBQSxHQUF5QkEsT0FBeUJBLENBQUFBLGdCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSwwQkFBQUEsR0FBbUNBLE9BQW9DQSxDQUFBQSwyQkFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsMkJBQUFBLEdBQW9DQSx5QkFBdUJBLE9BQXNCQSxDQUFBQSxhQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxhQUFBQSxHQUFzQixLQUFLLENBQUMsQ0FBQTtBQUFDLENBQUEsSUFBSTJWLGFBQWEsR0FBQyxVQUFTOVIsQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0tBQUMsT0FBTSxDQUFDdlIsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLEtBQUd1UixDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsQ0FBQyxDQUFBO0lBQUM7R0FBQ1EsYUFBYSxJQUFFNVYsT0FBc0IyVixDQUFBQSxhQUFBQSxHQUFBQSxhQUFhLEVBQUMsVUFBUzlSLENBQUMsRUFBQ3VSLENBQUMsRUFBQztLQUFDLElBQUcsS0FBSyxDQUFDLEtBQUd2UixDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQ3VSLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxFQUFDO09BQUMsSUFBR0EsQ0FBQyxJQUFFdlIsQ0FBQyxFQUFDLE9BQU91UixDQUFDLEdBQUMsQ0FBQyxDQUFBO0FBQUMsT0FBQSxJQUFHLENBQUMsR0FBQ3ZSLENBQUMsRUFBQyxPQUFPQSxDQUFDLENBQUE7TUFBQTtLQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUNnUyxjQUFjLElBQUU3VixPQUFBQSxDQUFBQSxhQUFBQSxHQUFzQjRWLGFBQWEsRUFBQyxVQUFTL1IsQ0FBQyxFQUFDO0FBQUMsS0FBQSxJQUFJdVIsQ0FBQyxHQUFDdlIsQ0FBQyxDQUFDaVMsVUFBVTtPQUFDVixDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUM7T0FBQ2hVLENBQUMsR0FBQ3lDLENBQUMsQ0FBQ2tTLFVBQVU7T0FBQ2xTLENBQUMsR0FBQ0EsQ0FBQyxDQUFDa1EsUUFBUSxDQUFBO0tBQUMsT0FBTyxLQUFLLENBQUMsS0FBR2xRLENBQUMsSUFBRUEsQ0FBQyxHQUFDdVIsQ0FBQyxHQUFDLElBQUdwVixPQUFPLENBQUM0VixhQUFhLEVBQUVSLENBQUMsRUFBQyxLQUFLLENBQUMsS0FBR2hVLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUM0VSwyQkFBMkIsSUFBRWhXLE9BQXVCNlYsQ0FBQUEsY0FBQUEsR0FBQUEsY0FBYyxFQUFDLFVBQVNoUyxDQUFDLEVBQUN1UixDQUFDLEVBQUM7QUFBQyxLQUFBLE9BQU92UixDQUFDLEdBQUMsQ0FBQyxHQUFDdVIsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxJQUFFdlIsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUNvUywyQkFBMkIsSUFBRWpXLE9BQW9DZ1csQ0FBQUEsMkJBQUFBLEdBQUFBLDJCQUEyQixFQUFDLFVBQVNuUyxDQUFDLEVBQUN1UixDQUFDLEVBQUM7S0FBQyxPQUFPdlIsQ0FBQyxHQUFDLENBQUMsSUFBRXVSLENBQUMsSUFBRXZSLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDcVMsMEJBQTBCLElBQUVsVyxPQUFvQ2lXLENBQUFBLDJCQUFBQSxHQUFBQSwyQkFBMkIsRUFBQyxVQUFTcFMsQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0tBQUMsT0FBT3ZSLENBQUMsR0FBQyxDQUFDLElBQUV1UixDQUFDLElBQUV2UixDQUFDLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQ3NTLGdCQUFnQixJQUFFblcsT0FBbUNrVyxDQUFBQSwwQkFBQUEsR0FBQUEsMEJBQTBCLEVBQUMsVUFBU3JTLENBQUMsRUFBQ3VSLENBQUMsRUFBQztBQUFDLEtBQUEsSUFBSWhVLENBQUMsR0FBQ3lDLENBQUMsQ0FBQ3VTLFdBQVc7T0FBQ3ZTLENBQUMsR0FBQ0EsQ0FBQyxDQUFDd1MsaUJBQWlCO09BQUN4UyxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxFQUFFLEdBQUNBLENBQUM7T0FBQ3NSLENBQUMsR0FBQ0MsQ0FBQyxDQUFDckIsUUFBUTtPQUFDcUIsQ0FBQyxHQUFDQSxDQUFDLENBQUNYLGlCQUFpQixDQUFBO0tBQUMsT0FBT1UsQ0FBQyxHQUFDLENBQUN0UixDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUd6QyxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLENBQUMsSUFBRSxFQUFFLEVBQUUySixRQUFRLElBQUVvSyxDQUFDLEdBQUMsQ0FBQ3RSLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRSxFQUFFLEVBQUU0UixLQUFLLEVBQUN0VCxJQUFJLENBQUNtVSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUdsQixDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLEVBQUMsS0FBSyxDQUFDLEtBQUdELENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQ29CLGdCQUFnQixJQUFFdlcsT0FBeUJtVyxDQUFBQSxnQkFBQUEsR0FBQUEsZ0JBQWdCLEVBQUMsVUFBU3RTLENBQUMsRUFBQ3VSLENBQUMsRUFBQztBQUFDLEtBQUEsSUFBSWhVLENBQUMsR0FBQ2dVLENBQUMsQ0FBQ3JCLFFBQVE7T0FBQ3FCLENBQUMsR0FBQ0EsQ0FBQyxDQUFDWCxpQkFBaUI7T0FBQ1csQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDO09BQUNELENBQUMsR0FBQ3RSLENBQUMsQ0FBQ2tTLFVBQVU7T0FBQ1MsQ0FBQyxHQUFDM1MsQ0FBQyxDQUFDdVMsV0FBVztPQUFDZixDQUFDLEdBQUN4UixDQUFDLENBQUM0UyxZQUFZO09BQUNwQixDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUM7T0FBQ3hSLENBQUMsR0FBQ0EsQ0FBQyxDQUFDd1MsaUJBQWlCO09BQUN4UyxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxFQUFFLEdBQUNBLENBQUMsQ0FBQTtLQUFDLE9BQU96QyxDQUFDLEdBQUMsQ0FBQ3lDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFHc1IsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxJQUFFLElBQUduVixPQUFPLENBQUMyVixhQUFhLEVBQUVOLENBQUMsRUFBQyxLQUFLLENBQUMsS0FBR21CLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsQ0FBQyxDQUFDLElBQUUsRUFBRSxFQUFFekwsUUFBUSxJQUFFLENBQUMsR0FBQyxJQUFHL0ssT0FBTyxDQUFDMFcsYUFBYSxFQUFFLENBQUNyQixDQUFDLEVBQUN4UixDQUFDLENBQUMsQ0FBQ2tILFFBQVEsR0FBQ3FLLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDdUIsOEJBQThCLElBQUUzVyxPQUFBQSxDQUFBQSxnQkFBQUEsR0FBeUJ1VyxnQkFBZ0IsRUFBQyxVQUFTMVMsQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDaFUsQ0FBQyxFQUFDO0FBQUMsS0FBQSxPQUFNLENBQUNnVSxDQUFDLElBQUV2UixDQUFDLElBQUUxQixJQUFJLENBQUNDLEdBQUcsQ0FBQ3lCLENBQUMsQ0FBQyxJQUFFekMsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUN3VixrQkFBa0IsSUFBRTVXLE9BQUFBLENBQUFBLDhCQUFBQSxHQUF1QzJXLDhCQUE4QixFQUFDLFVBQVM5UyxDQUFDLEVBQUM7QUFBQyxLQUFBLE9BQU0sQ0FBQ0EsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLElBQUUsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUM2UyxhQUFhLElBQUUxVyxPQUEyQjRXLENBQUFBLGtCQUFBQSxHQUFBQSxrQkFBa0IsRUFBQyxVQUFTL1MsQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0FBQUMsS0FBQSxPQUFNLENBQUNBLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxHQUFDLEVBQUUsR0FBQ0EsQ0FBQyxFQUFFcFEsS0FBSyxDQUFDbkIsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRTtPQUFDa0gsUUFBUSxFQUFDLENBQUM7T0FBQzBLLEtBQUssRUFBQyxDQUFBO01BQUUsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDb0Isa0JBQWtCLElBQUU3VyxPQUFzQjBXLENBQUFBLGFBQUFBLEdBQUFBLGFBQWEsRUFBQyxVQUFTN1MsQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0FBQUMsS0FBQSxPQUFPLEtBQUssQ0FBQyxLQUFHdlIsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEtBQUd1UixDQUFDLEtBQUdBLENBQUMsR0FBQyxFQUFFLENBQUMsRUFBQyxJQUFHcFYsT0FBTyxDQUFDMFcsYUFBYSxFQUFFN1MsQ0FBQyxFQUFDdVIsQ0FBQyxDQUFDLENBQUNySyxRQUFRLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQytMLDBCQUEwQixJQUFFOVcsT0FBMkI2VyxDQUFBQSxrQkFBQUEsR0FBQUEsa0JBQWtCLEVBQUMsVUFBU2hULENBQUMsRUFBQ3VSLENBQUMsRUFBQztLQUFDLE9BQU8sS0FBSyxDQUFDLEtBQUdBLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDLENBQUN2UixDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxFQUFFLEdBQUNBLENBQUMsRUFBRWtULFNBQVMsQ0FBQyxVQUFTbFQsQ0FBQyxFQUFDO09BQUMsT0FBT0EsQ0FBQyxDQUFDa0gsUUFBUSxJQUFFNUksSUFBSSxDQUFDQyxHQUFHLENBQUNnVCxDQUFDLENBQUMsQ0FBQTtBQUFBLE1BQUMsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUM0Qiw0QkFBNEIsSUFBRWhYLE9BQUFBLENBQUFBLDBCQUFBQSxHQUFtQzhXLDBCQUEwQixFQUFDLFVBQVNqVCxDQUFDLEVBQUN1UixDQUFDLEVBQUNoVSxDQUFDLEVBQUM7S0FBQyxLQUFLLENBQUMsS0FBR3lDLENBQUMsS0FBR0EsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxFQUFDLEtBQUssQ0FBQyxLQUFHdVIsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEtBQUdoVSxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQTtLQUFDeUMsQ0FBQyxHQUFDLElBQUc3RCxPQUFPLENBQUM4VywwQkFBMEIsRUFBRWpULENBQUMsRUFBQ3VSLENBQUMsQ0FBQyxDQUFBO0FBQUMsS0FBQSxPQUFNLElBQUdwVixPQUFPLENBQUM0VyxrQkFBa0IsRUFBRXhWLENBQUMsQ0FBQyxHQUFDeUMsQ0FBQyxHQUFDQSxDQUFDLEdBQUMsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUNvVCx3QkFBd0IsSUFBRWpYLE9BQUFBLENBQUFBLDRCQUFBQSxHQUFxQ2dYLDRCQUE0QixFQUFDLFVBQVNuVCxDQUFDLEVBQUN1UixDQUFDLEVBQUNoVSxDQUFDLEVBQUM7S0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUE7QUFBQyxLQUFBLElBQUkrVCxDQUFDLEdBQUN0UixDQUFDLENBQUNrUSxRQUFRO09BQUN5QyxDQUFDLEdBQUMzUyxDQUFDLENBQUN1UCxTQUFTO09BQUNpQyxDQUFDLEdBQUN4UixDQUFDLENBQUNxVCxxQkFBcUI7T0FBQzVCLENBQUMsR0FBQ3pSLENBQUMsQ0FBQ3NULHVCQUF1QjtPQUFDdFQsQ0FBQyxHQUFDQSxDQUFDLENBQUN3UyxpQkFBaUI7QUFBQ2pWLE9BQUFBLENBQUMsR0FBQyxJQUFHcEIsT0FBTyxDQUFDZ1gsNEJBQTRCLEVBQUVuVCxDQUFDLEVBQUN6QyxDQUFDLEVBQUNnVSxDQUFDLENBQUM7QUFBQ0EsT0FBQUEsQ0FBQyxHQUFDLElBQUdwVixPQUFPLENBQUMwVyxhQUFhLEVBQUV0VixDQUFDLEVBQUN5QyxDQUFDLENBQUMsQ0FBQ2tILFFBQVEsQ0FBQTtLQUFDLElBQUcsQ0FBQ29LLENBQUMsRUFBQztBQUFDLE9BQUEsSUFBR3FCLENBQUMsSUFBRW5CLENBQUMsRUFBQyxPQUFPLENBQUMsQ0FBQTtPQUFDLElBQUdDLENBQUMsR0FBQ0YsQ0FBQyxFQUFDLE9BQU0sQ0FBQ0UsQ0FBQyxDQUFBO01BQUE7S0FBQyxPQUFNLENBQUNGLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDZ0MscUJBQXFCLElBQUVwWCxPQUFpQ2lYLENBQUFBLHdCQUFBQSxHQUFBQSx3QkFBd0IsRUFBQyxVQUFTcFQsQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0FBQUMsS0FBQSxJQUFJaFUsQ0FBQyxHQUFDZ1UsQ0FBQyxDQUFDaUIsaUJBQWlCO09BQUNsQixDQUFDLEdBQUNDLENBQUMsQ0FBQ3FCLFlBQVk7T0FBQ0QsQ0FBQyxHQUFDcEIsQ0FBQyxDQUFDZ0IsV0FBVztPQUFDZixDQUFDLEdBQUNELENBQUMsQ0FBQ1csVUFBVTtPQUFDVCxDQUFDLEdBQUNGLENBQUMsQ0FBQ3JCLFFBQVE7T0FBQ3NELENBQUMsR0FBQ2pDLENBQUMsQ0FBQzhCLHFCQUFxQjtPQUFDSSxDQUFDLEdBQUNsQyxDQUFDLENBQUNyQyxXQUFXO09BQUNxQyxDQUFDLEdBQUNBLENBQUMsQ0FBQ21DLFdBQVcsQ0FBQTtBQUFDLEtBQUEsT0FBT2pDLENBQUMsSUFBRSxDQUFDK0IsQ0FBQyxJQUFFakMsQ0FBQyxLQUFHalQsSUFBSSxDQUFDQyxHQUFHLENBQUN5QixDQUFDLENBQUMsSUFBRXdULENBQUMsR0FBQyxJQUFHclgsT0FBTyxDQUFDOFcsMEJBQTBCLEVBQUUxVixDQUFDLEVBQUN5QyxDQUFDLENBQUMsRUFBQ3lSLENBQUMsR0FBQytCLENBQUMsSUFBRWpDLENBQUMsR0FBQyxJQUFHcFYsT0FBTyxDQUFDMlYsYUFBYSxFQUFFUixDQUFDLEVBQUNxQixDQUFDLENBQUMsQ0FBQyxHQUFDbkIsQ0FBQyxHQUFDRixDQUFDLEdBQUNxQixDQUFDLEdBQUNhLENBQUMsR0FBQ2pDLENBQUMsR0FBQ0MsQ0FBQyxJQUFFZ0MsQ0FBQyxHQUFDQSxDQUFDLElBQUVqQyxDQUFDLEdBQUNDLENBQUMsQ0FBQyxHQUFDZ0MsQ0FBQyxHQUFDakMsQ0FBQyxHQUFDaUMsQ0FBQyxJQUFFQyxDQUFDLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQ0Usd0JBQXdCLElBQUV4WCxPQUFBQSxDQUFBQSxxQkFBQUEsR0FBOEJvWCxxQkFBcUIsRUFBQyxVQUFTdlQsQ0FBQyxFQUFDO0FBQUMsS0FBQSxJQUFJdVIsQ0FBQyxHQUFDdlIsQ0FBQyxDQUFDa1EsUUFBUTtPQUFDM1MsQ0FBQyxHQUFDeUMsQ0FBQyxDQUFDa1AsV0FBVztPQUFDbFAsQ0FBQyxHQUFDQSxDQUFDLENBQUM0UyxZQUFZLENBQUE7S0FBQyxPQUFPckIsQ0FBQyxHQUFDaFUsQ0FBQyxHQUFDeUMsQ0FBQyxHQUFDekMsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUNxVywyQkFBMkIsSUFBRXpYLE9BQWlDd1gsQ0FBQUEsd0JBQUFBLEdBQUFBLHdCQUF3QixFQUFDLFVBQVMzVCxDQUFDLEVBQUN1UixDQUFDLEVBQUM7QUFBQyxLQUFBLElBQUloVSxDQUFDLEdBQUNnVSxDQUFDLENBQUNyQyxXQUFXO09BQUNxQyxDQUFDLEdBQUNBLENBQUMsQ0FBQ3NDLFVBQVUsQ0FBQTtLQUFDLE9BQU83VCxDQUFDLEdBQUN6QyxDQUFDLEdBQUMsQ0FBQ0EsQ0FBQyxHQUFDeUMsQ0FBQyxJQUFFLENBQUN1UixDQUFDLElBQUUsQ0FBQyxHQUFDLENBQUN2UixDQUFDLEdBQUN6QyxDQUFDLElBQUVnVSxDQUFDLElBQUUsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUN1QywyQkFBMkIsSUFBRTNYLE9BQUFBLENBQUFBLDJCQUFBQSxHQUFvQ3lYLDJCQUEyQixFQUFDLFVBQVM1VCxDQUFDLEVBQUN1UixDQUFDLEVBQUNoVSxDQUFDLEVBQUM7S0FBQyxPQUFPeUMsQ0FBQyxJQUFFekMsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLENBQUMsSUFBRXlDLENBQUMsR0FBQyxFQUFFLEdBQUN1UixDQUFDLENBQUE7QUFBQSxJQUFDLENBQUMsQ0FBQTtBQUFDcFYsQ0FBQUEsT0FBQUEsQ0FBQUEsMkJBQUFBLEdBQW9DMlgsMkJBQTJCLENBQUE7Ozs7Ozs7Ozs7RUNBL3lJLElBQUl6QyxRQUFRLEdBQUMsWUFBVTtNQUFDLE9BQU0sQ0FBQ0EsUUFBUSxHQUFDcFYsTUFBTSxDQUFDMk8sTUFBTSxJQUFFLFVBQVMyRyxDQUFDLEVBQUM7UUFBQyxLQUFJLElBQUl2UixDQUFDLEVBQUN3UixDQUFDLEdBQUMsQ0FBQyxFQUFDbUIsQ0FBQyxHQUFDL1UsU0FBUyxDQUFDUixNQUFNLEVBQUNvVSxDQUFDLEdBQUNtQixDQUFDLEVBQUNuQixDQUFDLEVBQUUsRUFBQyxLQUFJLElBQUlGLENBQUMsSUFBSXRSLENBQUMsR0FBQ3BDLFNBQVMsQ0FBQzRULENBQUMsQ0FBQyxFQUFDdlYsTUFBTSxDQUFDOEksU0FBUyxDQUFDdUQsY0FBYyxDQUFDQyxJQUFJLENBQUN2SSxDQUFDLEVBQUNzUixDQUFDLENBQUMsS0FBR0MsQ0FBQyxDQUFDRCxDQUFDLENBQUMsR0FBQ3RSLENBQUMsQ0FBQ3NSLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFBQyxPQUFPQyxDQUFDLENBQUE7QUFBQSxPQUFDLEVBQUU1TCxLQUFLLENBQUMsSUFBSSxFQUFDL0gsU0FBUyxDQUFDLENBQUE7S0FBQztJQUFDbVcsUUFBUSxJQUFFOVgsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxZQUFZLEVBQUM7TUFBQ0MsS0FBSyxFQUFDLENBQUMsQ0FBQTtLQUFFLENBQUMsRUFBQ0QsT0FBMkJBLENBQUFBLGtCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxxQkFBQUEsR0FBOEJBLE9BQXNDQSxDQUFBQSw2QkFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsc0JBQUFBLEdBQStCQSxPQUFpQ0EsQ0FBQUEsd0JBQUFBLEdBQUFBLE9BQUFBLENBQUFBLG9CQUFBQSxHQUE2QkEsT0FBOEJBLENBQUFBLHFCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxzQkFBQUEsR0FBK0JBLE9BQWdCQSxDQUFBQSxPQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSx1QkFBQUEsR0FBZ0NBLE9BQTZCQSxDQUFBQSxvQkFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsZ0JBQUFBLEdBQXlCQSxPQUE4QkEsQ0FBQUEscUJBQUFBLEdBQUFBLE9BQUFBLENBQUFBLG9CQUFBQSxHQUE2QkEsT0FBcUJBLENBQUFBLFlBQUFBLEdBQUFBLE9BQUFBLENBQUFBLDhCQUFBQSxHQUF1Q0EsT0FBeUNBLENBQUFBLGdDQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxTQUFBQSxHQUFrQkEsT0FBcUJBLENBQUFBLFlBQUFBLEdBQUFBLE9BQUFBLENBQUFBLGNBQUFBLEdBQXVCQSxPQUFzQkEsQ0FBQUEsYUFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsU0FBQUEsR0FBa0IsS0FBSyxDQUFDLEVBQUNTLGFBQUFBLEVBQW1CLENBQUM7SUFBQ29YLFNBQVMsR0FBQ3BYLE9BQW9CO0lBQUNxWCxNQUFNLEdBQUNyWCxJQUFpQjtBQUFDc1gsSUFBQUEsU0FBUyxHQUFDLFVBQVMzQyxDQUFDLEVBQUM7QUFBQyxNQUFBLElBQUl2UixDQUFDLEdBQUN1UixDQUFDLENBQUMxQixRQUFRO1FBQUMwQixDQUFDLEdBQUNBLENBQUMsQ0FBQ25CLEtBQUssQ0FBQTtNQUFDLE9BQU9wUSxDQUFDLEdBQUNBLENBQUMsQ0FBQzVDLE1BQU0sR0FBQzRDLENBQUMsR0FBQyxDQUFDQSxDQUFDLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR3VSLENBQUMsR0FBQyxFQUFFLEdBQUNBLENBQUMsQ0FBQTtLQUFDO0lBQUM0QyxhQUFhLElBQUVoWSxPQUFBQSxDQUFBQSxTQUFBQSxHQUFrQitYLFNBQVMsRUFBQyxVQUFTM0MsQ0FBQyxFQUFDO01BQUMsT0FBTSxJQUFHcFYsT0FBTyxDQUFDK1gsU0FBUyxFQUFFM0MsQ0FBQyxDQUFDLENBQUNuVSxNQUFNLENBQUE7QUFBQSxLQUFDLENBQUM7SUFBQ2dYLGNBQWMsSUFBRWpZLE9BQUFBLENBQUFBLGFBQUFBLEdBQXNCZ1ksYUFBYSxFQUFDLFVBQVM1QyxDQUFDLEVBQUM7QUFBQyxNQUFBLElBQUl2UixDQUFDLEdBQUN1UixDQUFDLENBQUNyQixRQUFRO1FBQUNzQixDQUFDLEdBQUNELENBQUMsQ0FBQ2QsWUFBWTtRQUFDYyxDQUFDLEdBQUNBLENBQUMsQ0FBQ2YsV0FBVyxDQUFBO01BQUMsT0FBT3hRLENBQUMsS0FBR3VSLENBQUMsSUFBRUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtBQUFBLEtBQUMsQ0FBQztJQUFDNkMsWUFBWSxJQUFFbFksT0FBQUEsQ0FBQUEsY0FBQUEsR0FBdUJpWSxjQUFjLEVBQUMsVUFBUzdDLENBQUMsRUFBQztBQUFDLE1BQUEsSUFBSXZSLENBQUM7UUFBQ3dSLENBQUM7UUFBQ21CLENBQUM7UUFBQ3JCLENBQUM7UUFBQy9ULENBQUMsR0FBQyxJQUFHcEIsT0FBTyxDQUFDK1gsU0FBUyxFQUFFM0MsQ0FBQyxDQUFDLENBQUE7QUFBQyxNQUFBLE9BQU9BLENBQUMsQ0FBQ3JCLFFBQVEsSUFBRWxRLENBQUMsR0FBQyxJQUFHN0QsT0FBTyxDQUFDZ1ksYUFBYSxFQUFFNUMsQ0FBQyxDQUFDLEVBQUNELENBQUMsR0FBQyxJQUFHblYsT0FBTyxDQUFDaVksY0FBYyxFQUFFN0MsQ0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQyxJQUFHd0MsUUFBUSxDQUFDTyxlQUFlLEVBQUV0VSxDQUFDLEVBQUN1UixDQUFDLENBQUMsRUFBQ29CLENBQUMsR0FBQ3JVLElBQUksQ0FBQ21VLEdBQUcsQ0FBQ2xCLENBQUMsRUFBQ3ZSLENBQUMsQ0FBQyxHQUFDc1IsQ0FBQyxFQUFDRSxDQUFDLEdBQUNqVSxDQUFDLENBQUM0RCxLQUFLLENBQUMsQ0FBQyxFQUFDd1IsQ0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQ3BWLENBQUMsQ0FBQzRELEtBQUssQ0FBQyxDQUFDd1IsQ0FBQyxDQUFDLEVBQUNyQixDQUFDLElBQUVDLENBQUMsS0FBR3ZSLENBQUMsS0FBR3NSLENBQUMsR0FBQy9ULENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ2dVLENBQUMsR0FBQ2hVLENBQUMsQ0FBQzRELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDd1IsQ0FBQyxDQUFDNEIsT0FBTyxDQUFDaEQsQ0FBQyxDQUFDLEVBQUNDLENBQUMsQ0FBQ2hSLElBQUksQ0FBQzhRLENBQUMsQ0FBQyxDQUFDLEVBQUNxQixDQUFDLENBQUM2QixNQUFNLENBQUNqWCxDQUFDLEVBQUNpVSxDQUFDLENBQUMsSUFBRWpVLENBQUMsQ0FBQTtBQUFBLEtBQUMsQ0FBQztJQUFDa1gsU0FBUyxJQUFFdFksT0FBQUEsQ0FBQUEsWUFBQUEsR0FBcUJrWSxZQUFZLEVBQUMsVUFBUzlDLENBQUMsRUFBQztNQUFDLElBQUc7UUFBQyxPQUFPQSxDQUFDLFlBQVltRCxPQUFPLElBQUVuRCxDQUFDLFlBQVlvRCxZQUFZLENBQUE7T0FBQyxDQUFBLE9BQU1wRCxDQUFDLEVBQUM7UUFBQyxPQUFNLENBQUMsQ0FBQyxDQUFBO09BQUE7QUFBQyxLQUFDLENBQUM7SUFBQ3FELGdDQUFnQyxJQUFFelksT0FBQUEsQ0FBQUEsU0FBQUEsR0FBa0JzWSxTQUFTLEVBQUMsVUFBU2xELENBQUMsRUFBQ2hVLENBQUMsRUFBQ3lDLENBQUMsRUFBQztNQUFDLEtBQUssQ0FBQyxLQUFHekMsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEtBQUd5QyxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO01BQUMsSUFBSXlSLENBQUMsR0FBQyxDQUFDO1FBQUNnQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQUNqQyxDQUFDLEdBQUMsRUFBRSxDQUFBO0FBQUMsTUFBQSxPQUFNLElBQUdyVixPQUFPLENBQUNzWSxTQUFTLEVBQUVsRCxDQUFDLENBQUMsS0FBR0MsQ0FBQyxHQUFDcUQsS0FBSyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUV2RCxDQUFDLEdBQUMsS0FBSyxDQUFDLEdBQUNBLENBQUMsQ0FBQzFCLFFBQVEsS0FBRyxFQUFFLENBQUMsQ0FBQ2tGLE1BQU0sQ0FBQyxVQUFTeEQsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDd1IsQ0FBQyxFQUFDO1FBQUMsSUFBSW1CLENBQUMsR0FBQyxDQUFDO1VBQUNuQixDQUFDLEdBQUNBLENBQUMsR0FBQyxDQUFDO0FBQUNGLFVBQUFBLENBQUMsR0FBQ0MsQ0FBQyxDQUFDQyxDQUFDLENBQUM7QUFBQ3hSLFVBQUFBLENBQUMsR0FBQ2dWLG9CQUFvQixDQUFDLElBQUksSUFBRWhWLENBQUMsR0FBQyxLQUFLLENBQUMsR0FBQ0EsQ0FBQyxDQUFDaVYsVUFBVSxDQUFDLENBQUNyRCxLQUFLO1VBQUM1UixDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsQ0FBQTtBQUFDLFFBQUEsT0FBT3lULENBQUMsR0FBQyxDQUFDaEMsQ0FBQyxJQUFFelIsQ0FBQyxLQUFHekMsQ0FBQyxFQUFDK1QsQ0FBQyxLQUFHcUIsQ0FBQyxHQUFDLENBQUMsSUFBRW5CLENBQUMsR0FBQ0YsQ0FBQyxDQUFDTSxLQUFLLEdBQUNOLENBQUMsQ0FBQ00sS0FBSyxHQUFDTixDQUFDLENBQUNwSyxRQUFRLENBQUMsRUFBQ3FLLENBQUMsQ0FBQy9RLElBQUksQ0FBQztVQUFDMEcsUUFBUSxFQUFDeUwsQ0FBQztVQUFDZixLQUFLLEVBQUM1UixDQUFBQTtTQUFFLENBQUMsRUFBQ3VSLENBQUMsQ0FBQTtBQUFBLE9BQUMsRUFBQyxFQUFFLENBQUMsRUFBQ3ZSLENBQUMsS0FBR3dSLENBQUMsR0FBQ2lDLENBQUMsR0FBQyxJQUFHTyxTQUFTLENBQUN0QyxnQkFBZ0IsRUFBRUYsQ0FBQyxDQUFDLElBQUVELENBQUMsR0FBQ0UsQ0FBQyxHQUFDbFUsQ0FBQyxFQUFDLElBQUd5VyxTQUFTLENBQUNuQyxpQkFBaUIsRUFBRUwsQ0FBQyxFQUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQztRQUFDMkQsTUFBTSxFQUFDMUQsQ0FBQztRQUFDMkQsT0FBTyxFQUFDMUQsQ0FBQztRQUFDMkQsT0FBTyxFQUFDM0IsQ0FBQUE7T0FBRSxDQUFBO0FBQUEsS0FBQyxDQUFDO0FBQUM0QixJQUFBQSw4QkFBOEIsSUFBRWxaLE9BQXlDeVksQ0FBQUEsZ0NBQUFBLEdBQUFBLGdDQUFnQyxFQUFDLFVBQVNyRCxDQUFDLEVBQUNELENBQUMsRUFBQ3RSLENBQUMsRUFBQ3dSLENBQUMsRUFBQztNQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO01BQUMsSUFBSWpVLENBQUMsR0FBQyxDQUFDO1FBQUNrVSxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQUNrQixDQUFDLEdBQUMsRUFBRTtRQUFDYyxDQUFDLEdBQUMsSUFBR3RYLE9BQU8sQ0FBQ21aLFlBQVksRUFBRWhFLENBQUMsRUFBQ3RSLENBQUMsQ0FBQyxDQUFBO0FBQUMsTUFBQSxPQUFPMlMsQ0FBQyxHQUFDcEIsQ0FBQyxDQUFDd0QsTUFBTSxDQUFDLFVBQVN4RCxDQUFDLEVBQUN2UixDQUFDLEVBQUN3UixDQUFDLEVBQUM7UUFBQyxJQUFJbUIsQ0FBQyxHQUFDLENBQUM7VUFBQ25CLENBQUMsR0FBQ0QsQ0FBQyxDQUFDQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUE7UUFBQyxPQUFPQyxDQUFDLEdBQUMsQ0FBQ2xVLENBQUMsSUFBRWtXLENBQUMsS0FBR25DLENBQUMsRUFBQ0UsQ0FBQyxLQUFHbUIsQ0FBQyxHQUFDYyxDQUFDLEdBQUNqQyxDQUFDLENBQUN0SyxRQUFRLElBQUUsQ0FBQyxDQUFDLEVBQUNxSyxDQUFDLENBQUMvUSxJQUFJLENBQUM7VUFBQ29SLEtBQUssRUFBQzZCLENBQUM7VUFBQ3ZNLFFBQVEsRUFBQ3lMLENBQUFBO1NBQUUsQ0FBQyxFQUFDcEIsQ0FBQyxDQUFBO09BQUMsRUFBQyxFQUFFLENBQUMsRUFBQztBQUFDMkQsUUFBQUEsTUFBTSxFQUFDdkMsQ0FBQyxHQUFDbkIsQ0FBQyxHQUFDbUIsQ0FBQyxHQUFDbEIsQ0FBQyxHQUFDLElBQUd1QyxTQUFTLENBQUN0QyxnQkFBZ0IsRUFBRWlCLENBQUMsQ0FBQyxJQUFFM1MsQ0FBQyxHQUFDekMsQ0FBQyxHQUFDK1QsQ0FBQyxFQUFDLElBQUcwQyxTQUFTLENBQUNuQyxpQkFBaUIsRUFBRWMsQ0FBQyxFQUFDM1MsQ0FBQyxDQUFDLENBQUM7UUFBQ21WLE9BQU8sRUFBQzVYLENBQUM7UUFBQzZYLE9BQU8sRUFBQzNELENBQUFBO09BQUUsQ0FBQTtBQUFBLEtBQUMsQ0FBQztJQUFDNkQsWUFBWSxJQUFFblosT0FBdUNrWixDQUFBQSw4QkFBQUEsR0FBQUEsOEJBQThCLEVBQUMsVUFBUzlELENBQUMsRUFBQ3ZSLENBQUMsRUFBQztNQUFDLE9BQU8sQ0FBQyxHQUFDQSxDQUFDLEdBQUN1UixDQUFDLEdBQUN2UixDQUFDLEdBQUN1UixDQUFDLENBQUE7QUFBQSxLQUFDLENBQUMsQ0FBQTtFQUFDLFNBQVN5RCxvQkFBb0JBLENBQUN6RCxDQUFDLEVBQUM7QUFBQyxJQUFBLE9BQU9BLENBQUMsSUFBRUEsQ0FBQyxDQUFDZ0UscUJBQXFCLEdBQUM7TUFBQzNELEtBQUssRUFBQyxDQUFDTCxDQUFDLEdBQUNBLENBQUMsQ0FBQ2dFLHFCQUFxQixFQUFFLEVBQUUzRCxLQUFLO01BQUM0RCxNQUFNLEVBQUNqRSxDQUFDLENBQUNpRSxNQUFBQTtBQUFNLEtBQUMsR0FBQztNQUFDNUQsS0FBSyxFQUFDLENBQUM7TUFBQzRELE1BQU0sRUFBQyxDQUFBO0tBQUUsQ0FBQTtHQUFBO0FBQUNyWixFQUFBQSxPQUFBQSxDQUFBQSxZQUFBQSxHQUFxQm1aLFlBQVksRUFBQ25aLE9BQTZCNlksQ0FBQUEsb0JBQUFBLEdBQUFBLG9CQUFvQixDQUFBO0VBQUMsSUFBSVMscUJBQXFCLEdBQUMsVUFBU2xFLENBQUMsRUFBQ3ZSLENBQUMsRUFBQ3dSLENBQUMsRUFBQztBQUFDLE1BQUEsSUFBSXhSLENBQUMsR0FBQyxJQUFHN0QsT0FBTyxDQUFDdVosZ0JBQWdCLEVBQUUxVixDQUFDLEVBQUN3UixDQUFDLENBQUM7UUFBQ0EsQ0FBQyxHQUFDLElBQUdyVixPQUFPLENBQUN3WixvQkFBb0IsRUFBRXBFLENBQUMsRUFBQ3ZSLENBQUMsQ0FBQyxDQUFBO01BQUMsSUFBRyxJQUFHN0QsT0FBTyxDQUFDc1ksU0FBUyxFQUFFakQsQ0FBQyxDQUFDLEVBQUMsT0FBT0QsQ0FBQyxHQUFDbE4sTUFBTSxDQUFDdVIsZ0JBQWdCLENBQUNwRSxDQUFDLENBQUMsRUFBQ3hSLENBQUMsR0FBQzZWLFVBQVUsQ0FBQ3RFLENBQUMsQ0FBQ3VFLFNBQVMsQ0FBQyxFQUFDdkUsQ0FBQyxHQUFDc0UsVUFBVSxDQUFDdEUsQ0FBQyxDQUFDd0UsWUFBWSxDQUFDLEVBQUN6WCxJQUFJLENBQUMwWCxJQUFJLENBQUN4RSxDQUFDLENBQUN5RSxZQUFZLEdBQUNqVyxDQUFDLEdBQUN1UixDQUFDLENBQUMsQ0FBQTtLQUFDO0lBQUNtRSxnQkFBZ0IsSUFBRXZaLE9BQThCc1osQ0FBQUEscUJBQUFBLEdBQUFBLHFCQUFxQixFQUFDLFVBQVNsRSxDQUFDLEVBQUN2UixDQUFDLEVBQUM7QUFBQyxNQUFBLElBQUl3UixDQUFDLEdBQUN4UixDQUFDLENBQUNrUCxXQUFXO1FBQUNsUCxDQUFDLEdBQUNBLENBQUMsQ0FBQzRTLFlBQVksQ0FBQTtNQUFDLE9BQU9yQixDQUFDLENBQUNyQixRQUFRLEdBQUNzQixDQUFDLEdBQUN4UixDQUFDLEdBQUMsSUFBRzdELE9BQU8sQ0FBQ2lZLGNBQWMsRUFBRTdDLENBQUMsQ0FBQyxHQUFDQyxDQUFDLENBQUE7QUFBQSxLQUFDLENBQUM7SUFBQ21FLG9CQUFvQixJQUFFeFosT0FBeUJ1WixDQUFBQSxnQkFBQUEsR0FBQUEsZ0JBQWdCLEVBQUMsVUFBU25FLENBQUMsRUFBQ3ZSLENBQUMsRUFBQztNQUFDdVIsQ0FBQyxHQUFDQSxDQUFDLElBQUVBLENBQUMsQ0FBQzFCLFFBQVEsSUFBRSxFQUFFLENBQUE7QUFBQyxNQUFBLE9BQU8wQixDQUFDLENBQUN2UixDQUFDLENBQUMsSUFBRXVSLENBQUMsQ0FBQ3ZSLENBQUMsQ0FBQyxDQUFDaVYsVUFBVSxJQUFFLElBQUksQ0FBQTtBQUFBLEtBQUMsQ0FBQyxDQUFBO0FBQUMsRUFBQSxTQUFTaUIsdUJBQXVCQSxDQUFDM0UsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDd1IsQ0FBQyxFQUFDO0FBQUMsSUFBQSxPQUFNLENBQUN4UixDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxFQUFFLEdBQUNBLENBQUMsRUFBRTRSLEtBQUssS0FBRyxDQUFDSixDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxFQUFFLEdBQUNBLENBQUMsRUFBRUksS0FBSyxDQUFBO0dBQUE7QUFBQyxFQUFBLFNBQVN1RSxPQUFPQSxDQUFDNUUsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO0FBQUMsSUFBQSxJQUFJQSxDQUFDLEdBQUNBLENBQUMsSUFBRSxFQUFFO01BQUN3UixDQUFDLEdBQUN4UixDQUFDLENBQUNrSCxRQUFRO01BQUNzSyxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUM7TUFBQ21CLENBQUMsR0FBQzNTLENBQUMsQ0FBQ21QLGlCQUFpQjtNQUFDd0QsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDO01BQUMzUyxDQUFDLEdBQUNBLENBQUMsQ0FBQ29QLHVCQUF1QjtNQUFDcFAsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsTUFBTSxHQUFDQSxDQUFDLENBQUE7SUFBQyxPQUFPdVIsQ0FBQyxJQUFFLElBQUdwVixPQUFPLENBQUNzWSxTQUFTLEVBQUVsRCxDQUFDLENBQUMsS0FBR0EsQ0FBQyxDQUFDNkUsS0FBSyxDQUFDQyxVQUFVLEdBQUMsWUFBWSxDQUFDN0IsTUFBTSxDQUFDN0IsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDNkIsTUFBTSxDQUFDeFUsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxFQUFDdVIsQ0FBQyxDQUFDNkUsS0FBSyxDQUFDRSxTQUFTLEdBQUMsY0FBYyxDQUFDOUIsTUFBTSxDQUFDaEQsQ0FBQyxFQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUNELENBQUMsQ0FBQTtHQUFBO0FBQUNwVixFQUFBQSxPQUFBQSxDQUFBQSxvQkFBQUEsR0FBNkJ3WixvQkFBb0IsRUFBQ3haLE9BQUFBLENBQUFBLHVCQUFBQSxHQUFnQytaLHVCQUF1QixFQUFDL1osT0FBQUEsQ0FBQUEsT0FBQUEsR0FBZ0JnYSxPQUFPLENBQUE7RUFBQyxJQUFJSSxzQkFBc0IsR0FBQyxVQUFTaEYsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDd1IsQ0FBQyxFQUFDO0FBQUMsTUFBQSxJQUFJbUIsQ0FBQyxHQUFDcEIsQ0FBQyxJQUFFLEVBQUU7UUFBQ0QsQ0FBQyxHQUFDcUIsQ0FBQyxDQUFDbkMsV0FBVztRQUFDalQsQ0FBQyxHQUFDb1YsQ0FBQyxDQUFDbEMsWUFBWTtRQUFDZ0IsQ0FBQyxHQUFDa0IsQ0FBQyxDQUFDckQsVUFBVTtRQUFDcUQsQ0FBQyxHQUFDQSxDQUFDLENBQUN4RCxpQkFBaUI7UUFBQ3NDLENBQUMsR0FBQ0EsQ0FBQyxHQUFDLElBQUd0VixPQUFPLENBQUNzWixxQkFBcUIsRUFBRWpFLENBQUMsRUFBQ0QsQ0FBQyxFQUFDdlIsQ0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDLENBQUE7TUFBQyxPQUFNO1FBQUN3VixNQUFNLEVBQUMvRCxDQUFDO0FBQUM0RSxRQUFBQSxVQUFVLEVBQUM1RSxDQUFDLEdBQUMsU0FBUyxDQUFDK0MsTUFBTSxDQUFDN0IsQ0FBQyxFQUFDLElBQUksQ0FBQyxHQUFDLEtBQUssQ0FBQztRQUFDbkMsV0FBVyxFQUFDLEVBQUUsQ0FBQ2dFLE1BQU0sQ0FBQ2xELENBQUMsRUFBQyxJQUFJLENBQUM7UUFBQ2IsWUFBWSxFQUFDLEVBQUUsQ0FBQytELE1BQU0sQ0FBQ2pYLENBQUMsRUFBQyxJQUFJLENBQUE7T0FBRSxDQUFBO0tBQUM7SUFBQ2laLHFCQUFxQixJQUFFcmEsT0FBQUEsQ0FBQUEsc0JBQUFBLEdBQStCb2Esc0JBQXNCLEVBQUMsVUFBU2hGLENBQUMsRUFBQztBQUFDLE1BQUEsSUFBSUEsQ0FBQyxHQUFDQSxDQUFDLElBQUUsRUFBRTtRQUFDdlIsQ0FBQyxHQUFDdVIsQ0FBQyxDQUFDcEMsaUJBQWlCO1FBQUNvQyxDQUFDLEdBQUNBLENBQUMsQ0FBQ25DLHVCQUF1QjtRQUFDbUMsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsTUFBTSxHQUFDQSxDQUFDLENBQUE7TUFBQyxPQUFNLFlBQVksQ0FBQ2lELE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBR3hVLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQ3dVLE1BQU0sQ0FBQ2pELENBQUMsRUFBQyxNQUFNLENBQUMsQ0FBQTtBQUFBLEtBQUMsQ0FBQztJQUFDa0Ysb0JBQW9CLElBQUV0YSxPQUE4QnFhLENBQUFBLHFCQUFBQSxHQUFBQSxxQkFBcUIsRUFBQyxVQUFTakYsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO01BQUN1UixDQUFDLEdBQUMsQ0FBQ0EsQ0FBQyxJQUFFLEVBQUUsRUFBRW1DLFdBQVcsRUFBQ25DLENBQUMsR0FBQyxjQUFjLENBQUNpRCxNQUFNLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBR2pELENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsQ0FBQyxFQUFDLFdBQVcsQ0FBQyxDQUFBO01BQUMsT0FBT0YsUUFBUSxDQUFDQSxRQUFRLENBQUMsRUFBRSxFQUFDclIsQ0FBQyxDQUFDLEVBQUM7UUFBQ3NXLFNBQVMsRUFBQy9FLENBQUFBO0FBQUMsT0FBQyxDQUFDLENBQUE7QUFBQSxLQUFDLENBQUM7SUFBQ21GLHdCQUF3QixJQUFFdmEsT0FBNkJzYSxDQUFBQSxvQkFBQUEsR0FBQUEsb0JBQW9CLEVBQUMsVUFBU2xGLENBQUMsRUFBQ3ZSLENBQUMsRUFBQztBQUFDLE1BQUEsSUFBSXdSLENBQUMsR0FBQ3hSLENBQUMsQ0FBQ3dTLGlCQUFpQjtRQUFDRyxDQUFDLEdBQUMzUyxDQUFDLENBQUMyVyxxQkFBcUI7UUFBQ3JGLENBQUMsR0FBQ3RSLENBQUMsQ0FBQzRXLHdCQUF3QjtRQUFDclosQ0FBQyxHQUFDeUMsQ0FBQyxDQUFDNlcsMEJBQTBCO1FBQUM3VyxDQUFDLEdBQUNBLENBQUMsQ0FBQ21QLGlCQUFpQjtRQUFDcUMsQ0FBQyxHQUFDLENBQUNBLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDLElBQUUsRUFBRSxFQUFFSyxLQUFLLENBQUE7QUFBQyxNQUFBLE9BQU9yVSxDQUFDLElBQUVvVixDQUFDLEtBQUdwQixDQUFDLEdBQUM7UUFBQytFLFNBQVMsRUFBQyxhQUFhLENBQUM5QixNQUFNLENBQUNsRCxDQUFDLEVBQUMsS0FBSyxDQUFDO1FBQUNuQyxpQkFBaUIsRUFBQyxFQUFFLENBQUNxRixNQUFNLENBQUN4VSxDQUFDLEVBQUMsSUFBSSxDQUFDO1FBQUM0UixLQUFLLEVBQUMsRUFBRSxDQUFDNEMsTUFBTSxDQUFDaEQsQ0FBQyxFQUFDLElBQUksQ0FBQTtBQUFDLE9BQUMsR0FBQztRQUFDSSxLQUFLLEVBQUNKLENBQUFBO09BQUUsQ0FBQTtBQUFBLEtBQUMsQ0FBQztJQUFDc0Ysc0JBQXNCLElBQUUzYSxPQUFpQ3VhLENBQUFBLHdCQUFBQSxHQUFBQSx3QkFBd0IsRUFBQyxVQUFTbkYsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO01BQUMsSUFBSXdSLENBQUMsR0FBQ0QsQ0FBQztRQUFDb0IsQ0FBQyxHQUFDM1MsQ0FBQyxDQUFDa1EsUUFBUTtRQUFDb0IsQ0FBQyxHQUFDdFIsQ0FBQyxDQUFDdVMsV0FBVztRQUFDaFYsQ0FBQyxHQUFDeUMsQ0FBQyxDQUFDNFMsWUFBWTtRQUFDNVMsQ0FBQyxHQUFDQSxDQUFDLENBQUN3UyxpQkFBaUIsQ0FBQTtNQUFDLE9BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFHeFMsQ0FBQyxHQUFDLEVBQUUsR0FBQ0EsQ0FBQyxFQUFFd1IsQ0FBQyxHQUFDbUIsQ0FBQyxHQUFDcEIsQ0FBQyxHQUFDLElBQUcwQyxNQUFNLENBQUNuQyxhQUFhLEVBQUUsS0FBSyxDQUFDLEtBQUd2VSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLEVBQUMsS0FBSyxDQUFDLEtBQUcrVCxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLENBQUMsR0FBQ0UsQ0FBQyxDQUFDLElBQUUsRUFBRSxFQUFFdEssUUFBUSxJQUFFLENBQUMsQ0FBQTtBQUFBLEtBQUMsQ0FBQztJQUFDNlAsNkJBQTZCLElBQUU1YSxPQUErQjJhLENBQUFBLHNCQUFBQSxHQUFBQSxzQkFBc0IsRUFBQyxVQUFTdkYsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO01BQUMsT0FBTSxFQUFFQSxDQUFDLEdBQUMxQixJQUFJLENBQUMwWSxLQUFLLENBQUN6RixDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQUEsS0FBQyxDQUFDLENBQUE7RUFBQyxTQUFTMEYscUJBQXFCQSxDQUFDMUYsQ0FBQyxFQUFDO0FBQUNBLElBQUFBLENBQUMsR0FBQzJGLGtCQUFrQixDQUFDM0YsQ0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQ0EsQ0FBQyxJQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUUsRUFBRSxDQUFBO0lBQUMsT0FBT3pGLE1BQU0sQ0FBQ3lGLENBQUMsQ0FBQyxDQUFBO0dBQUE7RUFBQyxTQUFTMkYsa0JBQWtCQSxDQUFDM0YsQ0FBQyxFQUFDO0lBQUMsT0FBT0EsQ0FBQyxJQUFFLElBQUdwVixPQUFPLENBQUNzWSxTQUFTLEVBQUVsRCxDQUFDLENBQUMsSUFBRWxOLE1BQU0sQ0FBQ3VSLGdCQUFnQixDQUFDckUsQ0FBQyxDQUFDLENBQUMrRSxTQUFTLENBQUNhLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBRSxFQUFFLENBQUE7R0FBQTtBQUFDaGIsRUFBQUEsT0FBQUEsQ0FBQUEsNkJBQUFBLEdBQXNDNGEsNkJBQTZCLEVBQUM1YSxPQUFBQSxDQUFBQSxxQkFBQUEsR0FBOEI4YSxxQkFBcUIsRUFBQzlhLDZCQUEyQithLGtCQUFrQixDQUFBOzs7Ozs7Ozs7Ozs7QUNBM2hNamIsRUFBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxZQUFZLEVBQUM7SUFBQ0MsS0FBSyxFQUFDLENBQUMsQ0FBQTtHQUFFLENBQUMsRUFBQ0QsT0FBOEJBLENBQUFBLHFCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxlQUFBQSxHQUF3QkEsbUNBQWlDQSxPQUF5QkEsQ0FBQUEsZ0JBQUFBLEdBQUFBLE9BQUFBLENBQUFBLFNBQUFBLEdBQWtCLEtBQUssQ0FBQyxDQUFBO0VBQUMsSUFBSWliLFVBQVUsR0FBQ3hhLGVBQXFCLEVBQUE7SUFBQ3FYLE1BQU0sR0FBQ3JYLElBQWlCO0lBQUN5YSxTQUFTLEdBQUMsWUFBVTtNQUFDLElBQUk5RixDQUFDLENBQUE7TUFBQyxJQUFHO0FBQUMsUUFBQSxPQUFPM04sT0FBTyxDQUFDLElBQUksS0FBRzJOLENBQUMsR0FBQyxJQUFJLEtBQUdsTixNQUFNLElBQUUsS0FBSyxDQUFDLEtBQUdBLE1BQU0sR0FBQyxLQUFLLENBQUMsR0FBQ0EsTUFBTSxDQUFDaVQsUUFBUSxDQUFDLEdBQUMsS0FBSyxDQUFDLEdBQUMvRixDQUFDLENBQUNnRyxhQUFhLENBQUMsQ0FBQTtPQUFDLENBQUEsT0FBTWhHLENBQUMsRUFBQztRQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUE7T0FBQTtLQUFFO0FBQUNpRyxJQUFBQSxnQkFBZ0IsSUFBRXJiLE9BQWtCa2IsQ0FBQUEsU0FBQUEsR0FBQUEsU0FBUyxFQUFDLFlBQVU7TUFBQyxLQUFJLElBQUk5RixDQUFDLEdBQUMsRUFBRSxFQUFDdlIsQ0FBQyxHQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDcEMsU0FBUyxDQUFDUixNQUFNLEVBQUM0QyxDQUFDLEVBQUUsRUFBQ3VSLENBQUMsQ0FBQ3ZSLENBQUMsQ0FBQyxHQUFDcEMsU0FBUyxDQUFDb0MsQ0FBQyxDQUFDLENBQUE7TUFBQyxPQUFPdVIsQ0FBQyxDQUFDL0wsTUFBTSxDQUFDNUIsT0FBTyxDQUFDLENBQUM2VCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFBQSxLQUFDLENBQUM7SUFBQ0Msd0JBQXdCLElBQUV2YixPQUFBQSxDQUFBQSxnQkFBQUEsR0FBeUJxYixnQkFBZ0IsRUFBQyxVQUFTakcsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDMlMsQ0FBQyxFQUFDO0FBQUMsTUFBQSxPQUFPLEtBQUssQ0FBQyxLQUFHM1MsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEtBQUcyUyxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFcEIsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLElBQUVBLENBQUMsQ0FBQyxJQUFFb0IsQ0FBQyxJQUFFM1MsQ0FBQyxDQUFBO0FBQUEsS0FBQyxDQUFDO0lBQUNzVSxlQUFlLElBQUVuWSxPQUFpQ3ViLENBQUFBLHdCQUFBQSxHQUFBQSx3QkFBd0IsRUFBQyxVQUFTL0UsQ0FBQyxFQUFDcEIsQ0FBQyxFQUFDO0FBQUMsTUFBQSxJQUFJaFUsQ0FBQztRQUFDa1csQ0FBQyxHQUFDLENBQUM7UUFBQ25DLENBQUMsR0FBQ0MsQ0FBQyxDQUFDYixVQUFVO1FBQUMxUSxDQUFDLEdBQUN1UixDQUFDLENBQUNoQyxTQUFTO1FBQUNrQyxDQUFDLEdBQUNGLENBQUMsQ0FBQ3JCLFFBQVE7UUFBQ3FCLENBQUMsR0FBQ0EsQ0FBQyxDQUFDcEIsVUFBVSxDQUFBO0FBQUMsTUFBQSxPQUFPLEtBQUssQ0FBQyxLQUFHblEsQ0FBQyxJQUFFQSxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUd5UixDQUFDLElBQUVBLENBQUMsR0FBQ2tCLENBQUMsR0FBQ2MsQ0FBQyxJQUFFbkMsQ0FBQyxJQUFFLENBQUN0UixDQUFDLEdBQUMvRCxNQUFNLENBQUM4QixJQUFJLENBQUN1VCxDQUFDLENBQUMsRUFBRWxVLE1BQU0sS0FBR21VLENBQUMsSUFBRSxJQUFHcFYsT0FBTyxDQUFDa2IsU0FBUyxHQUFHLENBQUMsS0FBRzlaLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR2dVLENBQUMsR0FBQ2xOLE1BQU0sQ0FBQzhMLFVBQVUsR0FBQ29CLENBQUMsRUFBQ3ZSLENBQUMsQ0FBQytGLE9BQU8sQ0FBQyxVQUFTd0wsQ0FBQyxFQUFDO1FBQUMsSUFBSXZSLENBQUMsQ0FBQTtRQUFDOEwsTUFBTSxDQUFDeUYsQ0FBQyxDQUFDLElBQUVoVSxDQUFDLEtBQUd5QyxDQUFDLEdBQUMsQ0FBQ3VSLENBQUMsR0FBQ0QsQ0FBQyxDQUFDQyxDQUFDLENBQUMsRUFBRW5CLEtBQUssRUFBQ21CLENBQUMsR0FBQ0EsQ0FBQyxDQUFDb0csUUFBUSxFQUFDbEUsQ0FBQyxHQUFDLFNBQVMsTUFBSSxLQUFLLENBQUMsS0FBR2xDLENBQUMsR0FBQyxNQUFNLEdBQUNBLENBQUMsQ0FBQyxHQUFDdlIsQ0FBQyxHQUFDMUIsSUFBSSxDQUFDbVUsR0FBRyxDQUFDelMsQ0FBQyxFQUFDMlMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUFBLE9BQUMsQ0FBQyxDQUFDLEVBQUNjLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQTtBQUFBLEtBQUMsQ0FBQztJQUFDbUUscUJBQXFCLElBQUV6YixPQUFBQSxDQUFBQSxlQUFBQSxHQUF3Qm1ZLGVBQWUsRUFBQyxVQUFTL0MsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDMlMsQ0FBQyxFQUFDO01BQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFBQyxNQUFBLElBQUlwVixDQUFDO1FBQUNrVyxDQUFDO1FBQUNuQyxDQUFDLEdBQUNDLENBQUMsQ0FBQ3BDLGlCQUFpQjtRQUFDbUMsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDO1FBQUNHLENBQUMsR0FBQ0YsQ0FBQyxDQUFDckIsUUFBUTtBQUFDdUIsUUFBQUEsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLElBQUVBLENBQUM7UUFBQ0QsQ0FBQyxHQUFDRCxDQUFDLENBQUMvQixRQUFRO0FBQUNnQyxRQUFBQSxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsSUFBRUEsQ0FBQztRQUFDcUcsQ0FBQyxHQUFDdEcsQ0FBQyxDQUFDaEMsU0FBUztBQUFDc0ksUUFBQUEsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLElBQUVBLENBQUM7UUFBQ0MsQ0FBQyxHQUFDLElBQUdWLFVBQVUsQ0FBQy9DLFlBQVksRUFBRTlDLENBQUMsQ0FBQztRQUFDaUMsQ0FBQyxHQUFDLElBQUc0RCxVQUFVLENBQUNaLHFCQUFxQixHQUFHO1FBQUN1QixDQUFDLEdBQUMsSUFBR1gsVUFBVSxDQUFDakQsYUFBYSxFQUFFNUMsQ0FBQyxDQUFDO1FBQUN5RyxDQUFDLEdBQUMsSUFBR1osVUFBVSxDQUFDaEQsY0FBYyxFQUFFN0MsQ0FBQyxDQUFDO1FBQUMwRyxDQUFDLEdBQUMsSUFBRzliLE9BQU8sQ0FBQ21ZLGVBQWUsRUFBRXlELENBQUMsRUFBQ3hHLENBQUMsQ0FBQztBQUFDMkcsUUFBQUEsQ0FBQyxHQUFDLElBQUdqRSxNQUFNLENBQUNsQyxhQUFhLEVBQUVSLENBQUMsQ0FBQ3JDLFdBQVcsRUFBQzZJLENBQUMsQ0FBQztRQUFDRyxDQUFDLEdBQUMsSUFBR2pFLE1BQU0sQ0FBQ2pDLGNBQWMsRUFBRTtVQUFDQyxVQUFVLEVBQUNpRyxDQUFDO1VBQUNoRyxVQUFVLEVBQUM2RixDQUFDO1VBQUM3SCxRQUFRLEVBQUN1QixDQUFBQTtBQUFDLFNBQUMsQ0FBQztRQUFDMEcsQ0FBQyxHQUFDLElBQUdmLFVBQVUsQ0FBQ3BDLG9CQUFvQixFQUFFaFYsQ0FBQyxDQUFDLENBQUM0UixLQUFLO0FBQUN3RyxRQUFBQSxDQUFDLElBQUUzRSxDQUFDLElBQUV6VCxDQUFDLEdBQUMsQ0FBQzZYLENBQUMsSUFBRXRhLENBQUMsR0FBQyxDQUFDeUMsQ0FBQyxHQUFDLElBQUdvWCxVQUFVLENBQUN4QyxnQ0FBZ0MsRUFBRTVVLENBQUMsRUFBQ21ZLENBQUMsRUFBQzFHLENBQUMsQ0FBQyxFQUFFeUQsTUFBTSxFQUFDekIsQ0FBQyxHQUFDelQsQ0FBQyxDQUFDbVYsT0FBTyxFQUFDblYsQ0FBQyxLQUFHekMsQ0FBQyxHQUFDLENBQUN5QyxDQUFDLEdBQUMsSUFBR29YLFVBQVUsQ0FBQy9CLDhCQUE4QixFQUFFeUMsQ0FBQyxFQUFDSyxDQUFDLEVBQUNGLENBQUMsRUFBQ3hHLENBQUMsQ0FBQyxFQUFFeUQsTUFBTSxFQUFDekIsQ0FBQyxHQUFDelQsQ0FBQyxDQUFDbVYsT0FBTyxFQUFDblYsQ0FBQyxDQUFDLEVBQUVvVixPQUFPLEVBQUMzQixDQUFDLENBQUMsRUFBQyxJQUFHUSxNQUFNLENBQUNwQixhQUFhLEVBQUUsQ0FBQ29GLENBQUMsRUFBQzFhLENBQUMsR0FBQ0EsQ0FBQyxDQUFDLENBQUMySixRQUFRLENBQUM7UUFBQ21SLENBQUMsR0FBQyxJQUFHcEUsTUFBTSxDQUFDM0IsZ0JBQWdCLEVBQUU7VUFBQ0MsV0FBVyxFQUFDeUYsQ0FBQztVQUFDeEYsaUJBQWlCLEVBQUNqVixDQUFBQTtTQUFFLEVBQUNnVSxDQUFDLENBQUM7UUFBQ0EsQ0FBQyxHQUFDLElBQUcwQyxNQUFNLENBQUN2QixnQkFBZ0IsRUFBRTtVQUFDUixVQUFVLEVBQUM2RixDQUFDO1VBQUN4RixXQUFXLEVBQUN5RixDQUFDO1VBQUNwRixZQUFZLEVBQUNxRixDQUFDO1VBQUN6RixpQkFBaUIsRUFBQ2pWLENBQUFBO1NBQUUsRUFBQ2dVLENBQUMsQ0FBQztRQUFDK0csQ0FBQyxHQUFDLElBQUdyRSxNQUFNLENBQUNqQixrQkFBa0IsRUFBRStFLENBQUMsRUFBQ3hhLENBQUMsQ0FBQyxDQUFBO01BQUMsT0FBTTtRQUFDMlIsV0FBVyxFQUFDZ0osQ0FBQztRQUFDM0ksU0FBUyxFQUFDc0ksQ0FBQztRQUFDMUksaUJBQWlCLEVBQUNtQyxDQUFDO1FBQUNpSCxNQUFNLEVBQUNULENBQUM7UUFBQzVILFFBQVEsRUFBQ3VCLENBQUM7UUFBQ1MsVUFBVSxFQUFDNkYsQ0FBQztRQUFDbkYsWUFBWSxFQUFDcUYsQ0FBQztRQUFDMUYsV0FBVyxFQUFDeUYsQ0FBQztRQUFDdEUsV0FBVyxFQUFDLElBQUcwRCxVQUFVLENBQUNOLHNCQUFzQixFQUFFb0IsQ0FBQyxFQUFDO1VBQUN0RixZQUFZLEVBQUNxRixDQUFDO1VBQUMxRixXQUFXLEVBQUN5RixDQUFDO1VBQUN4RixpQkFBaUIsRUFBQ2pWLENBQUM7VUFBQ2dTLFNBQVMsRUFBQ3NJLENBQUM7VUFBQzNILFFBQVEsRUFBQ3VCLENBQUFBO0FBQUMsU0FBQyxDQUFDO1FBQUNvQyxVQUFVLEVBQUNzRSxDQUFDO1FBQUNLLGlCQUFpQixFQUFDL0UsQ0FBQztRQUFDZ0Ysa0JBQWtCLEVBQUMsQ0FBQztRQUFDcEYscUJBQXFCLEVBQUNyVCxDQUFDO0FBQUMwWSxRQUFBQSxhQUFhLEVBQUM5VSxPQUFPLENBQUM0TixDQUFDLENBQUM7UUFBQ21ILDBCQUEwQixFQUFDLENBQUMsQ0FBQztRQUFDbkcsaUJBQWlCLEVBQUNqVixDQUFDO1FBQUM4WSxVQUFVLEVBQUM3QyxDQUFDO1FBQUNtRCxxQkFBcUIsRUFBQyxJQUFJO1FBQUNDLHdCQUF3QixFQUFDLElBQUk7UUFBQ0MsMEJBQTBCLEVBQUMsQ0FBQyxDQUFDO1FBQUMrQixhQUFhLEVBQUNQLENBQUM7UUFBQ1EsYUFBYSxFQUFDdEgsQ0FBQztRQUFDK0IsdUJBQXVCLEVBQUM4RSxDQUFDO1FBQUNVLGVBQWUsRUFBQ1IsQ0FBQztRQUFDUyxTQUFTLEVBQUNwRyxDQUFDLElBQUUsSUFBR3hXLE9BQU8sQ0FBQ2tiLFNBQVMsR0FBQTtPQUFJLENBQUE7QUFBQSxLQUFDLENBQUMsQ0FBQTtBQUFDbGIsRUFBQUEsT0FBQUEsQ0FBQUEscUJBQUFBLEdBQThCeWIscUJBQXFCLENBQUE7Ozs7Ozs7OztBQ0ExdkYzYixDQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLFlBQVksRUFBQztHQUFDQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0VBQUUsQ0FBQyxFQUFDRCxPQUFxQkEsQ0FBQUEsWUFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsWUFBQUEsR0FBcUJBLHVCQUFxQkEsT0FBa0MsQ0FBQSx5QkFBQSxHQUFBLEtBQUssQ0FBQyxDQUFBO0NBQUMsSUFBSThTLE9BQU8sR0FBQ3JTLEtBQW1CO0dBQUNtWCxRQUFRLEdBQUNuWCxhQUFtQixFQUFBO0dBQUNxWCxNQUFNLEdBQUNyWCxJQUFpQjtBQUFDb2MsR0FBQUEseUJBQXlCLEdBQUMsVUFBU2haLENBQUMsRUFBQ3VSLENBQUMsRUFBQztLQUFDLEtBQUssQ0FBQyxLQUFHdlIsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUE7QUFBQyxLQUFBLElBQUl5UixDQUFDLEdBQUNGLENBQUMsQ0FBQ29GLHFCQUFxQjtPQUFDcFosQ0FBQyxHQUFDLElBQUdwQixPQUFPLENBQUM4YyxZQUFZLEVBQUVqWixDQUFDLEVBQUN1UixDQUFDLENBQUMsR0FBQ3RDLE9BQU8sQ0FBQ0QsU0FBUyxDQUFDUixNQUFNLEdBQUMsRUFBRTtPQUFDbUUsQ0FBQyxHQUFDLElBQUd4VyxPQUFPLENBQUMrYyxZQUFZLEVBQUVsWixDQUFDLEVBQUN1UixDQUFDLENBQUMsR0FBQ3RDLE9BQU8sQ0FBQ0QsU0FBUyxDQUFDTixNQUFNLEdBQUMsRUFBRTtPQUFDNkMsQ0FBQyxHQUFDLElBQUdwVixPQUFPLENBQUNnZCxZQUFZLEVBQUVuWixDQUFDLEVBQUN1UixDQUFDLENBQUMsR0FBQ3RDLE9BQU8sQ0FBQ0QsU0FBUyxDQUFDRCxNQUFNLEdBQUMsRUFBRTtPQUFDL08sQ0FBQyxHQUFDQSxDQUFDLEtBQUd5UixDQUFDLEdBQUN4QyxPQUFPLENBQUNWLFVBQVUsQ0FBQ2xCLFFBQVEsR0FBQyxFQUFFLENBQUE7S0FBQyxPQUFNLElBQUcwRyxRQUFRLENBQUN5RCxnQkFBZ0IsRUFBRXZJLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDZCxVQUFVLEVBQUNsUSxDQUFDLEVBQUNvVixDQUFDLEVBQUNwQixDQUFDLEVBQUN2UixDQUFDLENBQUMsQ0FBQTtJQUFDO0dBQUNpWixZQUFZLElBQUU5YyxPQUFrQzZjLENBQUFBLHlCQUFBQSxHQUFBQSx5QkFBeUIsRUFBQyxVQUFTaFosQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0tBQUMsS0FBSyxDQUFDLEtBQUd2UixDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQTtBQUFDLEtBQUEsSUFBSXlSLENBQUMsR0FBQ0YsQ0FBQyxDQUFDckMsV0FBVztPQUFDM1IsQ0FBQyxHQUFDZ1UsQ0FBQyxDQUFDcUIsWUFBWTtPQUFDRCxDQUFDLEdBQUNwQixDQUFDLENBQUNnQixXQUFXO09BQUNmLENBQUMsR0FBQ0QsQ0FBQyxDQUFDckIsUUFBUTtPQUFDcUIsQ0FBQyxHQUFDQSxDQUFDLENBQUNoQyxTQUFTO09BQUMrQixDQUFDLEdBQUMsSUFBRzJDLE1BQU0sQ0FBQ25DLGFBQWEsRUFBRXZVLENBQUMsRUFBQ29WLENBQUMsQ0FBQyxDQUFBO0FBQUMsS0FBQSxPQUFPcEIsQ0FBQyxJQUFFQyxDQUFDLEdBQUN4UixDQUFDLEdBQUNzUixDQUFDLEtBQUdHLENBQUMsR0FBQ2tCLENBQUMsSUFBRXBCLENBQUMsR0FBQ0UsQ0FBQyxHQUFDSCxDQUFDLEVBQUNFLENBQUMsR0FBQ0QsQ0FBQyxJQUFFdlIsQ0FBQyxJQUFFQSxDQUFDLEdBQUN1UixDQUFDLEdBQUNoVSxDQUFDLEdBQUNrVSxDQUFDLElBQUV6UixDQUFDLElBQUVBLENBQUMsR0FBQ3VSLENBQUMsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUM0SCxZQUFZLElBQUVoZCxPQUFxQjhjLENBQUFBLFlBQUFBLEdBQUFBLFlBQVksRUFBQyxVQUFTalosQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0tBQUMsS0FBSyxDQUFDLEtBQUd2UixDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQTtBQUFDLEtBQUEsSUFBSXlSLENBQUMsR0FBQ0YsQ0FBQyxDQUFDckMsV0FBVztPQUFDM1IsQ0FBQyxHQUFDZ1UsQ0FBQyxDQUFDcUIsWUFBWTtPQUFDRCxDQUFDLEdBQUNwQixDQUFDLENBQUNnQixXQUFXO09BQUNmLENBQUMsR0FBQ0QsQ0FBQyxDQUFDckIsUUFBUTtPQUFDcUIsQ0FBQyxHQUFDQSxDQUFDLENBQUNoQyxTQUFTO09BQUNoUyxDQUFDLEdBQUMsSUFBRzBXLE1BQU0sQ0FBQ25DLGFBQWEsRUFBRXZVLENBQUMsRUFBQ29WLENBQUMsQ0FBQyxDQUFBO0tBQUMsT0FBT25CLENBQUMsR0FBQ0QsQ0FBQyxJQUFFQyxDQUFDLEdBQUN4UixDQUFDLEdBQUN6QyxDQUFDLEtBQUdrVSxDQUFDLEdBQUNrQixDQUFDLEdBQUMzUyxDQUFDLEtBQUd5UixDQUFDLEdBQUNsVSxDQUFDLEdBQUN5QyxDQUFDLEtBQUd5UixDQUFDLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQ3lILFlBQVksSUFBRS9jLE9BQXFCZ2QsQ0FBQUEsWUFBQUEsR0FBQUEsWUFBWSxFQUFDLFVBQVNuWixDQUFDLEVBQUN1UixDQUFDLEVBQUM7S0FBQyxLQUFLLENBQUMsS0FBR3ZSLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFBO0FBQUMsS0FBQSxJQUFJeVIsQ0FBQyxHQUFDRixDQUFDLENBQUNxQixZQUFZO09BQUNyVixDQUFDLEdBQUNnVSxDQUFDLENBQUNnQixXQUFXO09BQUNJLENBQUMsR0FBQ3BCLENBQUMsQ0FBQ1csVUFBVTtPQUFDVixDQUFDLEdBQUNELENBQUMsQ0FBQ3JCLFFBQVE7T0FBQ3FCLENBQUMsR0FBQ0EsQ0FBQyxDQUFDaEMsU0FBUyxDQUFBO0tBQUMsT0FBTSxDQUFDLENBQUNpQyxDQUFDLEtBQUdELENBQUMsSUFBRUMsQ0FBQyxHQUFDeFIsQ0FBQyxHQUFDeVIsQ0FBQyxJQUFFa0IsQ0FBQyxHQUFDLENBQUMsR0FBQ2xCLENBQUMsR0FBQ3pSLENBQUMsR0FBQ0EsQ0FBQyxJQUFFdVIsQ0FBQyxHQUFDLElBQUcwQyxNQUFNLENBQUNuQyxhQUFhLEVBQUVMLENBQUMsRUFBQ2xVLENBQUMsQ0FBQyxDQUFDLElBQUVvVixDQUFDLEdBQUMsQ0FBQyxHQUFDcEIsQ0FBQyxHQUFDdlIsQ0FBQyxDQUFDLENBQUE7QUFBQSxJQUFDLENBQUMsQ0FBQTtBQUFDN0QsQ0FBQUEsT0FBQUEsQ0FBQUEsWUFBQUEsR0FBcUIrYyxZQUFZLENBQUE7Ozs7Ozs7QUNBNTNDLENBQUEsU0FBU0UsUUFBUUEsQ0FBQ3pHLENBQUMsRUFBQ3BWLENBQUMsRUFBQztHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQTtHQUFDLFNBQVN5YSxDQUFDQSxHQUFFO0tBQUN4RSxDQUFDLEtBQUc2RixZQUFZLENBQUM3RixDQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFBQTtHQUFDLElBQUlBLENBQUMsR0FBQyxLQUFLLENBQUMsQ0FBQTtHQUFDLE9BQU0sQ0FBQyxZQUFVO0FBQUMsS0FBQSxLQUFJLElBQUl4VCxDQUFDLEdBQUMsSUFBSSxFQUFDc1IsQ0FBQyxHQUFDLEVBQUUsRUFBQ0MsQ0FBQyxHQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDM1QsU0FBUyxDQUFDUixNQUFNLEVBQUNtVSxDQUFDLEVBQUUsRUFBQ0QsQ0FBQyxDQUFDQyxDQUFDLENBQUMsR0FBQzNULFNBQVMsQ0FBQzJULENBQUMsQ0FBQyxDQUFBO0tBQUN5RyxDQUFDLEVBQUUsRUFBQ3hFLENBQUMsR0FBQ25QLE1BQU0sQ0FBQ2lWLFVBQVUsQ0FBQyxZQUFVO09BQUMzRyxDQUFDLENBQUNoTixLQUFLLENBQUMzRixDQUFDLEVBQUNzUixDQUFDLENBQUMsRUFBQ2tDLENBQUMsR0FBQyxLQUFLLENBQUMsQ0FBQTtNQUFDLEVBQUNqVyxDQUFDLENBQUMsQ0FBQTtJQUFDLEVBQUN5YSxDQUFDLENBQUMsQ0FBQTtFQUFBO0FBQUMvYixDQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLFlBQVksRUFBQztHQUFDQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0FBQUMsRUFBQyxDQUFDLEVBQUNELE9BQUFBLENBQUFBLFFBQUFBLEdBQWlCLEtBQUssQ0FBQyxFQUFDQSxtQkFBaUJpZCxRQUFRLENBQUE7Ozs7Ozs7QUNBN1YsQ0FBQSxTQUFTRyxLQUFLQSxHQUFFO0dBQUMsS0FBSSxJQUFJdlosQ0FBQyxHQUFDLEVBQUUsRUFBQ3NSLENBQUMsR0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQzFULFNBQVMsQ0FBQ1IsTUFBTSxFQUFDa1UsQ0FBQyxFQUFFLEVBQUN0UixDQUFDLENBQUNzUixDQUFDLENBQUMsR0FBQzFULFNBQVMsQ0FBQzBULENBQUMsQ0FBQyxDQUFBO0FBQUMsR0FBc0NrSSxPQUFPLENBQUNELEtBQUssQ0FBQzVULEtBQUssQ0FBQzZULE9BQU8sRUFBQ3haLENBQUMsQ0FBQyxDQUFBO0VBQUE7QUFBQy9ELENBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsWUFBWSxFQUFDO0dBQUNDLEtBQUssRUFBQyxDQUFDLENBQUE7QUFBQyxFQUFDLENBQUMsRUFBQ0QsT0FBQUEsQ0FBQUEsS0FBQUEsR0FBYyxLQUFLLENBQUMsRUFBQ0EsZ0JBQWNvZCxLQUFLLENBQUE7Ozs7Ozs7QUNBL090ZCxDQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLFlBQVksRUFBQztHQUFDQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0VBQUUsQ0FBQyxFQUFDRCxPQUFBQSxDQUFBQSxnQkFBQUEsR0FBeUJBLE9BQXFCQSxDQUFBQSxZQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSw2QkFBQUEsR0FBc0NBLDJDQUF5Q0EsT0FBaUNBLENBQUFBLHdCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxtQkFBQUEsR0FBNEIsS0FBSyxDQUFDLENBQUE7QUFBQyxDQUFBLElBQUlzZCxtQkFBbUIsR0FBQyxVQUFTelosQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0FBQUMsS0FBQSxJQUFJQSxDQUFDLEdBQUNBLENBQUMsSUFBRSxFQUFFO09BQUNoVSxDQUFDLEdBQUNnVSxDQUFDLENBQUNyQyxXQUFXO09BQUNvQyxDQUFDLEdBQUNDLENBQUMsQ0FBQ3FCLFlBQVk7T0FBQ3JCLENBQUMsR0FBQ0EsQ0FBQyxDQUFDVyxVQUFVO09BQUMzVSxDQUFDLEdBQUNBLENBQUMsR0FBQytULENBQUMsQ0FBQTtBQUFDLEtBQUEsT0FBTyxDQUFDLEtBQUdBLENBQUMsR0FBQyxJQUFHblYsT0FBTyxDQUFDdWQsZ0NBQWdDLEVBQUVuYyxDQUFDLEVBQUMrVCxDQUFDLEVBQUNDLENBQUMsQ0FBQyxHQUFDLElBQUdwVixPQUFPLENBQUN3ZCw2QkFBNkIsRUFBRXBjLENBQUMsRUFBQytULENBQUMsRUFBQ0MsQ0FBQyxFQUFDdlIsQ0FBQyxDQUFDLENBQUE7SUFBQztHQUFDNFosd0JBQXdCLElBQUV6ZCxPQUE0QnNkLENBQUFBLG1CQUFBQSxHQUFBQSxtQkFBbUIsRUFBQyxVQUFTelosQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0tBQUMsSUFBSWhVLENBQUMsQ0FBQTtLQUFDLE9BQU8sS0FBSyxDQUFDLEtBQUdnVSxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDdlIsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLEtBQUd1UixDQUFDLElBQUVoVSxDQUFDLEdBQUNlLElBQUksQ0FBQzBZLEtBQUssQ0FBQ2hYLENBQUMsR0FBQ3VSLENBQUMsQ0FBQyxFQUFDdlIsQ0FBQyxHQUFDdVIsQ0FBQyxJQUFFLENBQUMsR0FBQ2hVLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsSUFBRSxDQUFDLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQ21jLGdDQUFnQyxJQUFFdmQsT0FBQUEsQ0FBQUEsd0JBQUFBLEdBQWlDeWQsd0JBQXdCLEVBQUMsVUFBUzVaLENBQUMsRUFBQ3VSLENBQUMsRUFBQ2hVLENBQUMsRUFBQztBQUFDLEtBQUEsT0FBT3lDLENBQUMsR0FBQ3VSLENBQUMsR0FBQ2hVLENBQUMsR0FBQ2dVLENBQUMsR0FBQ2hVLENBQUMsR0FBQ3lDLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsR0FBQyxDQUFDLENBQUE7QUFBQSxJQUFDLENBQUM7QUFBQzJaLEdBQUFBLDZCQUE2QixJQUFFeGQsT0FBeUN1ZCxDQUFBQSxnQ0FBQUEsR0FBQUEsZ0NBQWdDLEVBQUMsVUFBUzFaLENBQUMsRUFBQ3VSLENBQUMsRUFBQ2hVLENBQUMsRUFBQytULENBQUMsRUFBQztBQUFDLEtBQUEsSUFBSXVHLENBQUMsR0FBQyxJQUFHMWIsT0FBTyxDQUFDeWQsd0JBQXdCLEVBQUVyYyxDQUFDLEVBQUNnVSxDQUFDLENBQUMsQ0FBQTtLQUFDLE9BQU92UixDQUFDLEtBQUd6QyxDQUFDLEdBQUNnVSxDQUFDLEdBQUMsQ0FBQyxHQUFDRCxDQUFDLElBQUV0UixDQUFDLEdBQUN1UixDQUFDLElBQUUsQ0FBQyxLQUFHdlIsQ0FBQyxHQUFDNlgsQ0FBQyxHQUFDLENBQUMsS0FBRzdYLENBQUMsR0FBQ3pDLENBQUMsR0FBQ2dVLENBQUMsSUFBRSxDQUFDLEdBQUNzRyxDQUFDLEdBQUNBLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDdEcsQ0FBQyxHQUFDalQsSUFBSSxDQUFDMFksS0FBSyxDQUFDaFgsQ0FBQyxHQUFDdVIsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDc0ksWUFBWSxJQUFFMWQsT0FBc0N3ZCxDQUFBQSw2QkFBQUEsR0FBQUEsNkJBQTZCLEVBQUMsVUFBUzNaLENBQUMsRUFBQ3VSLENBQUMsRUFBQztLQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQTtBQUFDdlIsS0FBQUEsQ0FBQyxHQUFDLENBQUNBLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxJQUFFLENBQUMsQ0FBQTtBQUFDLEtBQUEsT0FBT0EsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxHQUFDdVIsQ0FBQyxHQUFDQSxDQUFDLEdBQUN2UixDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQztPQUFDOFosSUFBSSxFQUFDOVosQ0FBQztPQUFDa1MsVUFBVSxFQUFDWCxDQUFBQTtNQUFFLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQ3dJLGdCQUFnQixJQUFFNWQsT0FBQUEsQ0FBQUEsWUFBQUEsR0FBcUIwZCxZQUFZLEVBQUMsVUFBUzdaLENBQUMsRUFBQztBQUFDLEtBQUEsSUFBSUEsQ0FBQyxHQUFDQSxDQUFDLElBQUUsRUFBRTtPQUFDdVIsQ0FBQyxHQUFDdlIsQ0FBQyxDQUFDNFMsWUFBWTtPQUFDclYsQ0FBQyxHQUFDeUMsQ0FBQyxDQUFDa1AsV0FBVztPQUFDb0MsQ0FBQyxHQUFDdFIsQ0FBQyxDQUFDa1EsUUFBUTtPQUFDMkgsQ0FBQyxHQUFDN1gsQ0FBQyxDQUFDa1MsVUFBVSxDQUFBO0tBQUMsT0FBT2xTLENBQUMsQ0FBQ3FULHFCQUFxQixHQUFDO09BQUMyRyxtQkFBbUIsRUFBQyxDQUFDLENBQUM7T0FBQ0MsbUJBQW1CLEVBQUMsQ0FBQyxDQUFBO0FBQUMsTUFBQyxHQUFDO09BQUNELG1CQUFtQixFQUFDLENBQUMsQ0FBQyxLQUFHMUksQ0FBQyxJQUFFLENBQUMsS0FBRy9ULENBQUM7T0FBQzBjLG1CQUFtQixFQUFDLENBQUMsQ0FBQyxLQUFHM0ksQ0FBQyxJQUFFdUcsQ0FBQyxHQUFDdEcsQ0FBQyxJQUFFaFUsQ0FBQUE7TUFBRSxDQUFBO0FBQUEsSUFBQyxDQUFDLENBQUE7QUFBQ3BCLENBQUFBLE9BQUFBLENBQUFBLGdCQUFBQSxHQUF5QjRkLGdCQUFnQixDQUFBOzs7Ozs7O0FDQTVnRDlkLENBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsWUFBWSxFQUFDO0dBQUNDLEtBQUssRUFBQyxDQUFDLENBQUE7QUFBQyxFQUFDLENBQUMsRUFBQ0QsT0FBb0NBLENBQUFBLDJCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSw0QkFBQUEsR0FBcUNBLHVDQUFxQ0EsT0FBK0JBLENBQUFBLHNCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSx1QkFBQUEsR0FBZ0NBLE9BQTJCQSxDQUFBQSxrQkFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsVUFBQUEsR0FBbUJBLE9BQTZCQSxDQUFBQSxvQkFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsaUJBQUFBLEdBQTBCQSxPQUE4QixDQUFBLHFCQUFBLEdBQUEsS0FBSyxDQUFDLENBQUE7Q0FBQyxJQUFJOFMsT0FBTyxHQUFDclMsS0FBbUIsQ0FBQTtBQUFDLENBQUEsU0FBU3NkLHFCQUFxQkEsQ0FBQzNJLENBQUMsRUFBQ0QsQ0FBQyxFQUFDO0dBQUMsSUFBSUMsQ0FBQyxHQUFDLENBQUNBLENBQUMsSUFBRSxFQUFFLEVBQUV6QixnQkFBZ0I7QUFBQ3dCLEtBQUFBLENBQUMsR0FBQ0EsQ0FBQyxJQUFFLEVBQUU7S0FBQ3RSLENBQUMsR0FBQ3NSLENBQUMsQ0FBQ3NCLFlBQVk7S0FBQ25CLENBQUMsR0FBQ0gsQ0FBQyxDQUFDWSxVQUFVO0tBQUNaLENBQUMsR0FBQ0EsQ0FBQyxDQUFDL0IsU0FBUyxDQUFBO0dBQUMsSUFBRyxJQUFHcFQsT0FBTyxDQUFDZ2UsVUFBVSxFQUFFNUksQ0FBQyxFQUFDdEMsT0FBTyxDQUFDaEMsZ0JBQWdCLENBQUNELFVBQVUsQ0FBQyxFQUFDLE9BQU0sQ0FBQ3NFLENBQUMsSUFBRXRSLENBQUMsS0FBR3lSLENBQUMsQ0FBQTtFQUFBO0FBQUMsQ0FBQSxTQUFTMkksaUJBQWlCQSxDQUFDN0ksQ0FBQyxFQUFDRCxDQUFDLEVBQUM7R0FBQyxPQUFPQyxDQUFDLENBQUN2QixtQkFBbUIsSUFBRWtLLHFCQUFxQixDQUFDM0ksQ0FBQyxFQUFDRCxDQUFDLENBQUMsQ0FBQTtFQUFBO0FBQUMsQ0FBQSxTQUFTK0ksb0JBQW9CQSxDQUFDOUksQ0FBQyxFQUFDRCxDQUFDLEVBQUM7QUFBQyxHQUFBLE9BQU9DLENBQUMsQ0FBQ3hCLHNCQUFzQixJQUFFLENBQUN3QixDQUFDLENBQUNyQixRQUFRLElBQUVnSyxxQkFBcUIsQ0FBQzNJLENBQUMsRUFBQ0QsQ0FBQyxDQUFDLENBQUE7RUFBQTtBQUFDblYsQ0FBQUEsT0FBQUEsQ0FBQUEscUJBQUFBLEdBQThCK2QscUJBQXFCLEVBQUMvZCxPQUFBQSxDQUFBQSxpQkFBQUEsR0FBMEJpZSxpQkFBaUIsRUFBQ2plLE9BQUFBLENBQUFBLG9CQUFBQSxHQUE2QmtlLG9CQUFvQixDQUFBO0FBQUMsQ0FBQSxJQUFJRixVQUFVLEdBQUMsVUFBUzVJLENBQUMsRUFBQ0QsQ0FBQyxFQUFDO0FBQUMsS0FBQSxPQUFPLEtBQUssQ0FBQyxLQUFHQyxDQUFDLEtBQUdBLENBQUMsR0FBQyxFQUFFLENBQUMsRUFBQyxLQUFLLENBQUMsS0FBR0QsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsRUFBRSxDQUFDLEVBQUMxTixPQUFPLENBQUMyTixDQUFDLElBQUVBLENBQUMsQ0FBQytJLFFBQVEsQ0FBQ2hKLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFBQztHQUFDaUosa0JBQWtCLElBQUVwZSxPQUFtQmdlLENBQUFBLFVBQUFBLEdBQUFBLFVBQVUsRUFBQyxVQUFTNUksQ0FBQyxFQUFDRCxDQUFDLEVBQUM7QUFBQyxLQUFBLE9BQU9DLENBQUMsSUFBRSxJQUFHcFYsT0FBTyxDQUFDZ2UsVUFBVSxFQUFFN0ksQ0FBQyxFQUFDckMsT0FBTyxDQUFDaEMsZ0JBQWdCLENBQUNGLFNBQVMsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUN5Tix1QkFBdUIsSUFBRXJlLE9BQUFBLENBQUFBLGtCQUFBQSxHQUEyQm9lLGtCQUFrQixFQUFDLFVBQVNoSixDQUFDLEVBQUNELENBQUMsRUFBQ3RSLENBQUMsRUFBQztLQUFDLE9BQU8sS0FBSyxDQUFDLEtBQUd1UixDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsS0FBR0QsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQ3RSLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxJQUFFQSxDQUFDLElBQUV1UixDQUFDLEdBQUMsQ0FBQyxLQUFHekYsTUFBTSxDQUFDd0YsQ0FBQyxDQUFDLElBQUVoVCxJQUFJLENBQUMwWCxJQUFJLENBQUN6RSxDQUFDLEdBQUNELENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDbUosc0JBQXNCLElBQUV0ZSxPQUFBQSxDQUFBQSx1QkFBQUEsR0FBZ0NxZSx1QkFBdUIsRUFBQyxVQUFTakosQ0FBQyxFQUFDRCxDQUFDLEVBQUN0UixDQUFDLEVBQUM7S0FBQyxPQUFNLENBQUNzUixDQUFDLElBQUVDLENBQUMsS0FBR3ZSLENBQUMsR0FBQyxDQUFDLENBQUE7QUFBQSxJQUFDLENBQUM7QUFBQzBhLEdBQUFBLDRCQUE0QixJQUFFdmUsT0FBK0JzZSxDQUFBQSxzQkFBQUEsR0FBQUEsc0JBQXNCLEVBQUMsVUFBU2xKLENBQUMsRUFBQ0QsQ0FBQyxFQUFDdFIsQ0FBQyxFQUFDeVIsQ0FBQyxFQUFDO0tBQUMsT0FBTSxDQUFDSCxDQUFDLEdBQUN0UixDQUFDLEdBQUN5UixDQUFDLEdBQUNGLENBQUMsR0FBQ0UsQ0FBQyxLQUFHLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDa0osNEJBQTRCLElBQUV4ZSxPQUFBQSxDQUFBQSw0QkFBQUEsR0FBcUN1ZSw0QkFBNEIsRUFBQyxVQUFTbkosQ0FBQyxFQUFDO0tBQUMsT0FBTSxDQUFDQSxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxFQUFFLEdBQUNBLENBQUMsTUFBSXRDLE9BQU8sQ0FBQ25DLGdCQUFnQixDQUFDVixNQUFNLElBQUVtRixDQUFDLEtBQUd0QyxPQUFPLENBQUNuQyxnQkFBZ0IsQ0FBQ0QsR0FBRyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUMrTiwyQkFBMkIsSUFBRXplLE9BQUFBLENBQUFBLDRCQUFBQSxHQUFxQ3dlLDRCQUE0QixFQUFDLFVBQVNwSixDQUFDLEVBQUM7S0FBQyxPQUFNLENBQUNBLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxHQUFDLEVBQUUsR0FBQ0EsQ0FBQyxNQUFJdEMsT0FBTyxDQUFDbkMsZ0JBQWdCLENBQUNGLE9BQU8sSUFBRTJFLENBQUMsS0FBR3RDLE9BQU8sQ0FBQ25DLGdCQUFnQixDQUFDRCxHQUFHLENBQUE7QUFBQSxJQUFDLENBQUMsQ0FBQTtBQUFDMVEsQ0FBQUEsT0FBQUEsQ0FBQUEsMkJBQUFBLEdBQW9DeWUsMkJBQTJCLENBQUE7Ozs7O0FDQTloRSxDQUFBLElBQUlDLGVBQWUsR0FBQzVlLE1BQU0sQ0FBQzZlLE1BQU0sR0FBQyxVQUFTOWEsQ0FBQyxFQUFDd1IsQ0FBQyxFQUFDRCxDQUFDLEVBQUNELENBQUMsRUFBQztLQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEtBQUdBLENBQUMsR0FBQ0MsQ0FBQyxDQUFDLENBQUE7S0FBQyxJQUFJOEcsQ0FBQyxHQUFDcGMsTUFBTSxDQUFDeUosd0JBQXdCLENBQUM4TCxDQUFDLEVBQUNELENBQUMsQ0FBQyxDQUFBO0tBQUM4RyxDQUFDLEtBQUcsS0FBSyxJQUFHQSxDQUFDLEdBQUM3RyxDQUFDLENBQUMzSSxVQUFVLEdBQUMsQ0FBQ3dQLENBQUMsQ0FBQ3RYLFFBQVEsSUFBRSxDQUFDc1gsQ0FBQyxDQUFDdlgsWUFBWSxDQUFDLEtBQUd1WCxDQUFDLEdBQUM7T0FBQ3hYLFVBQVUsRUFBQyxDQUFDLENBQUM7T0FBQ21ELEdBQUcsRUFBQyxZQUFVO1NBQUMsT0FBT3dOLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDLENBQUE7UUFBQTtNQUFFLENBQUMsRUFBQ3RWLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDOEQsQ0FBQyxFQUFDc1IsQ0FBQyxFQUFDK0csQ0FBQyxDQUFDLENBQUE7SUFBQyxHQUFDLFVBQVNyWSxDQUFDLEVBQUN3UixDQUFDLEVBQUNELENBQUMsRUFBQ0QsQ0FBQyxFQUFDO0FBQUN0UixLQUFBQSxDQUFDLENBQUNzUixDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQ0MsQ0FBQyxHQUFDRCxDQUFDLENBQUMsR0FBQ0UsQ0FBQyxDQUFDRCxDQUFDLENBQUMsQ0FBQTtJQUFDO0FBQUN3SixHQUFBQSxZQUFZLEdBQUMsVUFBUy9hLENBQUMsRUFBQ3dSLENBQUMsRUFBQztBQUFDLEtBQUEsS0FBSSxJQUFJRCxDQUFDLElBQUl2UixDQUFDLEVBQUMsU0FBUyxLQUFHdVIsQ0FBQyxJQUFFdFYsTUFBTSxDQUFDOEksU0FBUyxDQUFDdUQsY0FBYyxDQUFDQyxJQUFJLENBQUNpSixDQUFDLEVBQUNELENBQUMsQ0FBQyxJQUFFc0osZUFBZSxDQUFDckosQ0FBQyxFQUFDeFIsQ0FBQyxFQUFDdVIsQ0FBQyxDQUFDLENBQUE7SUFBQyxDQUFBO0FBQUN0VixDQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLFlBQVksRUFBQztHQUFDQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0FBQUMsRUFBQyxDQUFDLEVBQUMyZSxZQUFZLENBQUNuZSxhQUFtQixFQUFBLEVBQUNULE9BQU8sQ0FBQyxFQUFDNGUsWUFBWSxDQUFDbmUsZUFBQUEsRUFBcUIsRUFBQ1QsT0FBTyxDQUFDLEVBQUM0ZSxZQUFZLENBQUNuZSxVQUF1QixFQUFDVCxPQUFPLENBQUMsRUFBQzRlLFlBQVksQ0FBQ25lLE1BQW1CLEVBQUNULE9BQU8sQ0FBQyxFQUFDNGUsWUFBWSxDQUFDbmUsSUFBaUIsRUFBQ1QsT0FBTyxDQUFDLEVBQUM0ZSxZQUFZLENBQUNuZSxLQUFrQixFQUFDVCxPQUFPLENBQUMsRUFBQzRlLFlBQVksQ0FBQ25lLE1BQW1CLEVBQUNULE9BQU8sQ0FBQyxFQUFDNGUsWUFBWSxDQUFDbmUsUUFBcUIsRUFBQ1QsT0FBTyxDQUFDLEVBQUM0ZSxZQUFZLENBQUNuZSxPQUFvQixFQUFDVCxPQUFPLENBQUMsQ0FBQTs7Ozs7QUNBdjFCLENBQUEsSUFBSTZlLGVBQWUsR0FBQyxVQUFTaGIsQ0FBQyxFQUFDO0tBQUMsT0FBT0EsQ0FBQyxJQUFFQSxDQUFDLENBQUM2SSxVQUFVLEdBQUM3SSxDQUFDLEdBQUM7T0FBQ2liLE9BQU8sRUFBQ2piLENBQUFBO01BQUUsQ0FBQTtJQUFDO0dBQUNrYixPQUFPLElBQUVqZixNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLFlBQVksRUFBQztLQUFDQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0FBQUMsSUFBQyxDQUFDLEVBQUNELE9BQWtCLENBQUEsU0FBQSxHQUFBLEtBQUssQ0FBQyxFQUFDNmUsZUFBZSxDQUFDcGUsT0FBUSxDQUFBLE9BQU8sQ0FBQyxDQUFDLENBQUM7R0FBQ3FTLE9BQU8sR0FBQ3JTLEtBQW1CO0dBQUN1ZSxPQUFPLEdBQUN2ZSxLQUFtQjtBQUFDd2UsR0FBQUEsU0FBUyxHQUFDLFVBQVNwYixDQUFDLEVBQUM7QUFBQyxLQUFBLElBQUl1UixDQUFDLEdBQUN2UixDQUFDLENBQUNrUCxXQUFXO09BQUN1QyxDQUFDLEdBQUN6UixDQUFDLENBQUNrUyxVQUFVO09BQUNsUyxDQUFDLEdBQUNBLENBQUMsQ0FBQ3FiLGVBQWU7QUFBQzlKLE9BQUFBLENBQUMsR0FBQyxJQUFHNEosT0FBTyxDQUFDdEIsWUFBWSxFQUFFdEksQ0FBQyxFQUFDRSxDQUFDLENBQUMsQ0FBQ3FJLElBQUksQ0FBQTtBQUFDLEtBQUEsT0FBTSxVQUFVLElBQUUsT0FBTzlaLENBQUMsR0FBQ2tiLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDMUQsYUFBYSxDQUFDLEtBQUssRUFBQztBQUFDK0QsT0FBQUEsU0FBUyxFQUFDck0sT0FBTyxDQUFDVixVQUFVLENBQUNSLFVBQUFBO01BQVcsRUFBQy9OLENBQUMsQ0FBQztPQUFDOFosSUFBSSxFQUFDdkksQ0FBQztPQUFDVyxVQUFVLEVBQUNULENBQUFBO0FBQUMsTUFBQyxDQUFDLENBQUMsSUFBRXpSLENBQUMsR0FBQyxJQUFHbWIsT0FBTyxDQUFDM0QsZ0JBQWdCLEVBQUV2SSxPQUFPLENBQUNWLFVBQVUsQ0FBQ1AsZUFBZSxFQUFDaUIsT0FBTyxDQUFDRCxTQUFTLENBQUNILFNBQVMsQ0FBQyxFQUFDcU0sT0FBTyxDQUFDRCxPQUFPLENBQUMxRCxhQUFhLENBQUMsS0FBSyxFQUFDO0FBQUMrRCxPQUFBQSxTQUFTLEVBQUNyTSxPQUFPLENBQUNWLFVBQVUsQ0FBQ1IsVUFBQUE7TUFBVyxFQUFDbU4sT0FBTyxDQUFDRCxPQUFPLENBQUMxRCxhQUFhLENBQUMsTUFBTSxFQUFDO0FBQUMrRCxPQUFBQSxTQUFTLEVBQUNyTSxPQUFPLENBQUNWLFVBQVUsQ0FBQ1AsZUFBQUE7TUFBZ0IsRUFBQ3VELENBQUMsQ0FBQyxFQUFDMkosT0FBTyxDQUFDRCxPQUFPLENBQUMxRCxhQUFhLENBQUMsTUFBTSxFQUFDO09BQUMrRCxTQUFTLEVBQUN0YixDQUFBQTtNQUFFLEVBQUMsR0FBRyxDQUFDLEVBQUNrYixPQUFPLENBQUNELE9BQU8sQ0FBQzFELGFBQWEsQ0FBQyxNQUFNLEVBQUM7QUFBQytELE9BQUFBLFNBQVMsRUFBQ3JNLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDUCxlQUFBQTtBQUFlLE1BQUMsRUFBQ3lELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUFDLENBQUE7QUFBQ3RWLENBQUFBLE9BQUFBLENBQUFBLFNBQUFBLEdBQWtCaWYsU0FBUyxDQUFBOzs7Ozs7O0FDQWo2QixDQUFBLElBQUlKLGVBQWUsR0FBQyxVQUFTaGIsQ0FBQyxFQUFDO0tBQUMsT0FBT0EsQ0FBQyxJQUFFQSxDQUFDLENBQUM2SSxVQUFVLEdBQUM3SSxDQUFDLEdBQUM7T0FBQ2liLE9BQU8sRUFBQ2piLENBQUFBO01BQUUsQ0FBQTtJQUFDO0dBQUNrYixPQUFPLElBQUVqZixNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLFlBQVksRUFBQztLQUFDQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0FBQUMsSUFBQyxDQUFDLEVBQUNELE9BQWtCLENBQUEsU0FBQSxHQUFBLEtBQUssQ0FBQyxFQUFDNmUsZUFBZSxDQUFDcGUsT0FBUSxDQUFBLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFBQzJlLEdBQUFBLFNBQVMsR0FBQyxVQUFTdmIsQ0FBQyxFQUFDO0FBQUMsS0FBQSxJQUFJdVIsQ0FBQyxHQUFDdlIsQ0FBQyxDQUFDOFosSUFBSTtPQUFDdEksQ0FBQyxHQUFDeFIsQ0FBQyxDQUFDc2IsU0FBUztPQUFDdGIsQ0FBQyxHQUFDQSxDQUFDLENBQUN3YixNQUFNLENBQUE7S0FBQyxPQUFPTixPQUFPLENBQUNELE9BQU8sQ0FBQzFELGFBQWEsQ0FBQyxJQUFJLEVBQUM7T0FBQ25CLEtBQUssRUFBQ3BXLENBQUM7T0FBQ3NiLFNBQVMsRUFBQzlKLENBQUFBO01BQUUsRUFBQ0QsQ0FBQyxDQUFDLENBQUE7SUFBQyxDQUFBO0FBQUNwVixDQUFBQSxPQUFBQSxDQUFBQSxTQUFBQSxHQUFrQm9mLFNBQVMsQ0FBQTs7Ozs7OztBQ0E3VixDQUFBLElBQUlQLGVBQWUsR0FBQyxVQUFTaGIsQ0FBQyxFQUFDO0tBQUMsT0FBT0EsQ0FBQyxJQUFFQSxDQUFDLENBQUM2SSxVQUFVLEdBQUM3SSxDQUFDLEdBQUM7T0FBQ2liLE9BQU8sRUFBQ2piLENBQUFBO01BQUUsQ0FBQTtJQUFDO0dBQUNrYixPQUFPLElBQUVqZixNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLFlBQVksRUFBQztLQUFDQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0FBQUMsSUFBQyxDQUFDLEVBQUNELE9BQXVCLENBQUEsY0FBQSxHQUFBLEtBQUssQ0FBQyxFQUFDNmUsZUFBZSxDQUFDcGUsT0FBUSxDQUFBLE9BQU8sQ0FBQyxDQUFDLENBQUM7R0FBQ3FTLE9BQU8sR0FBQ3JTLEtBQW1CO0dBQUN1ZSxPQUFPLEdBQUN2ZSxLQUFtQjtBQUFDNmUsR0FBQUEsY0FBYyxHQUFDLFVBQVN6YixDQUFDLEVBQUM7QUFBQyxLQUFBLElBQUl5VCxDQUFDLEdBQUN6VCxDQUFDLENBQUN3QyxLQUFLO09BQUNtUSxDQUFDLEdBQUMzUyxDQUFDLENBQUMwYixPQUFPO09BQUNsSyxDQUFDLEdBQUN4UixDQUFDLENBQUMyYixZQUFZO09BQUM5RCxDQUFDLEdBQUM3WCxDQUFDLENBQUM0YixZQUFZO09BQUNySyxDQUFDLEdBQUN2UixDQUFDLENBQUM4UCxnQkFBZ0I7T0FBQ2tJLENBQUMsR0FBQ2hZLENBQUMsQ0FBQzZiLGNBQWM7T0FBQzlELENBQUMsR0FBQ3RFLENBQUMsQ0FBQ3ZCLFVBQVU7T0FBQzRKLENBQUMsR0FBQ3JJLENBQUMsQ0FBQ2IsWUFBWTtPQUFDWSxDQUFDLEdBQUNDLENBQUMsQ0FBQ3ZELFFBQVE7T0FBQ2xRLENBQUMsR0FBQ3lULENBQUMsQ0FBQ2xFLFNBQVM7T0FBQ3VJLENBQUMsR0FBQ3JFLENBQUMsQ0FBQ3ZFLFdBQVc7T0FBQ29KLENBQUMsR0FBQyxJQUFHNkMsT0FBTyxDQUFDcEIsZ0JBQWdCLEVBQUV0RyxDQUFDLENBQUMsQ0FBQ3dHLG1CQUFtQjtPQUFDaEMsQ0FBQyxHQUFDLElBQUdrRCxPQUFPLENBQUNaLGtCQUFrQixFQUFFdmEsQ0FBQyxFQUFDdVIsQ0FBQyxDQUFDO0FBQUN3SyxPQUFBQSxDQUFDLEdBQUMsSUFBR1osT0FBTyxDQUFDWCx1QkFBdUIsRUFBRXpDLENBQUMsRUFBQytELENBQUMsRUFBQzdELENBQUMsQ0FBQyxDQUFBO0tBQUMsT0FBT2lELE9BQU8sQ0FBQ0QsT0FBTyxDQUFDMUQsYUFBYSxDQUFDLElBQUksRUFBQztBQUFDK0QsT0FBQUEsU0FBUyxFQUFDck0sT0FBTyxDQUFDVixVQUFVLENBQUNiLElBQUFBO0FBQUksTUFBQyxFQUFDbUgsS0FBSyxDQUFDQyxJQUFJLENBQUM7T0FBQzFYLE1BQU0sRUFBQzJhLENBQUFBO01BQUUsQ0FBQyxDQUFDcEcsR0FBRyxDQUFDLFVBQVMzUixDQUFDLEVBQUN1UixDQUFDLEVBQUM7QUFBQyxPQUFBLElBQUloVSxDQUFDLEVBQUNrVSxDQUFDLEVBQUNILENBQUMsQ0FBQTtBQUFDLE9BQUEsSUFBR0MsQ0FBQyxHQUFDd0ssQ0FBQyxFQUFDLE9BQU90SyxDQUFDLEdBQUMsSUFBRzBKLE9BQU8sQ0FBQ1Ysc0JBQXNCLEVBQUVsSixDQUFDLEVBQUMzTixPQUFPLENBQUM0UCxDQUFDLENBQUMsRUFBQ3VJLENBQUMsQ0FBQyxFQUFDeGUsQ0FBQyxHQUFDLElBQUc0ZCxPQUFPLENBQUNULDRCQUE0QixFQUFFbkosQ0FBQyxFQUFDRSxDQUFDLEVBQUNzRyxDQUFDLEVBQUMrRCxDQUFDLENBQUMsRUFBQ3JLLENBQUMsR0FBQyxJQUFHMEosT0FBTyxDQUFDMUIsbUJBQW1CLEVBQUVuQixDQUFDLEVBQUM3RSxDQUFDLENBQUMsRUFBQ3dFLENBQUMsS0FBRyxDQUFDeEcsQ0FBQyxHQUFDcUcsQ0FBQyxJQUFFLENBQUMsR0FBQ3JHLENBQUMsR0FBQ3NHLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsSUFBRUQsQ0FBQyxLQUFHckcsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDbFUsQ0FBQyxHQUFDZ1UsQ0FBQyxDQUFDLEVBQUNFLENBQUMsR0FBQ0EsQ0FBQyxLQUFHRixDQUFDLEdBQUN0QyxPQUFPLENBQUNELFNBQVMsQ0FBQ1IsTUFBTSxHQUFDLEVBQUUsRUFBQzhDLENBQUMsR0FBQzBHLENBQUMsR0FBQy9JLE9BQU8sQ0FBQ0QsU0FBUyxDQUFDTCxNQUFNLEdBQUMsRUFBRSxFQUFDMkMsQ0FBQyxHQUFDLElBQUc2SixPQUFPLENBQUMzRCxnQkFBZ0IsRUFBRXZJLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDWixTQUFTLEVBQUM4RCxDQUFDLEVBQUNILENBQUMsQ0FBQyxFQUFDNEosT0FBTyxDQUFDRCxPQUFPLENBQUMxRCxhQUFhLENBQUMsSUFBSSxFQUFDO0FBQUN6WixTQUFBQSxHQUFHLEVBQUMsV0FBVyxDQUFDMFcsTUFBTSxDQUFDakQsQ0FBQyxDQUFDO1NBQUNvSyxZQUFZLEVBQUNuSyxDQUFDO1NBQUNvSyxZQUFZLEVBQUMvRCxDQUFDO1NBQUM2RCxPQUFPLEVBQUMsWUFBVTtXQUFDLE9BQU8vSSxDQUFDLENBQUNwVixDQUFDLENBQUMsQ0FBQTtVQUFDO1NBQUMrZCxTQUFTLEVBQUNoSyxDQUFBQTtBQUFDLFFBQUMsRUFBQzBHLENBQUMsSUFBRUEsQ0FBQyxDQUFDO0FBQUNnRSxTQUFBQSxRQUFRLEVBQUNwWSxPQUFPLENBQUM2TixDQUFDLENBQUM7U0FBQ3ZDLFdBQVcsRUFBQ3FDLENBQUFBO1FBQUUsQ0FBQyxDQUFDLENBQUE7TUFBQyxDQUFDLENBQUMsQ0FBQTtJQUFDLENBQUE7QUFBQ3BWLENBQUFBLE9BQUFBLENBQUFBLGNBQUFBLEdBQXVCc2YsY0FBYyxDQUFBOzs7Ozs7O0FDQXR2QyxDQUFBLElBQUlULGVBQWUsR0FBQyxVQUFTaGIsQ0FBQyxFQUFDO0tBQUMsT0FBT0EsQ0FBQyxJQUFFQSxDQUFDLENBQUM2SSxVQUFVLEdBQUM3SSxDQUFDLEdBQUM7T0FBQ2liLE9BQU8sRUFBQ2piLENBQUFBO01BQUUsQ0FBQTtJQUFDO0dBQUNrYixPQUFPLElBQUVqZixNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLFlBQVksRUFBQztLQUFDQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0FBQUMsSUFBQyxDQUFDLEVBQUNELE9BQXdCLENBQUEsZUFBQSxHQUFBLEtBQUssQ0FBQyxFQUFDNmUsZUFBZSxDQUFDcGUsT0FBUSxDQUFBLE9BQU8sQ0FBQyxDQUFDLENBQUM7R0FBQ3FTLE9BQU8sR0FBQ3JTLEtBQW1CO0dBQUN1ZSxPQUFPLEdBQUN2ZSxLQUFtQjtBQUFDcWYsR0FBQUEsZUFBZSxHQUFDLFVBQVNqYyxDQUFDLEVBQUM7QUFBQyxLQUFBLElBQUl1UixDQUFDLEdBQUN2UixDQUFDLENBQUNrYyxTQUFTO09BQUN6SSxDQUFDLEdBQUN6VCxDQUFDLENBQUMwYixPQUFPO09BQUMxYixDQUFDLEdBQUNBLENBQUMsQ0FBQ21jLHFCQUFxQixDQUFBO0FBQUMsS0FBQSxPQUFNLFVBQVUsSUFBRSxPQUFPbmMsQ0FBQyxHQUFDa2IsT0FBTyxDQUFDRCxPQUFPLENBQUMxRCxhQUFhLENBQUMsS0FBSyxFQUFDO0FBQUMrRCxPQUFBQSxTQUFTLEVBQUNyTSxPQUFPLENBQUNWLFVBQVUsQ0FBQ1gsUUFBUTtPQUFDOE4sT0FBTyxFQUFDakksQ0FBQUE7TUFBRSxFQUFDelQsQ0FBQyxDQUFDO09BQUNrYyxTQUFTLEVBQUMzSyxDQUFBQTtBQUFDLE1BQUMsQ0FBQyxDQUFDLElBQUV2UixDQUFDLEdBQUN1UixDQUFDLEdBQUN0QyxPQUFPLENBQUNELFNBQVMsQ0FBQ0osS0FBSyxHQUFDLEVBQUUsRUFBQzJDLENBQUMsR0FBQyxJQUFHNEosT0FBTyxDQUFDM0QsZ0JBQWdCLEVBQUV2SSxPQUFPLENBQUNWLFVBQVUsQ0FBQ1YsYUFBYSxFQUFDN04sQ0FBQyxDQUFDLEVBQUNrYixPQUFPLENBQUNELE9BQU8sQ0FBQzFELGFBQWEsQ0FBQyxLQUFLLEVBQUM7QUFBQytELE9BQUFBLFNBQVMsRUFBQ3JNLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDWCxRQUFBQTtNQUFTLEVBQUNzTixPQUFPLENBQUNELE9BQU8sQ0FBQzFELGFBQWEsQ0FBQyxLQUFLLEVBQUM7QUFBQytELE9BQUFBLFNBQVMsRUFBQ3JNLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDVCxnQkFBQUE7TUFBaUIsRUFBQ29OLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDMUQsYUFBYSxDQUFDLEtBQUssRUFBQztPQUFDbUUsT0FBTyxFQUFDakksQ0FBQztPQUFDNkgsU0FBUyxFQUFDL0osQ0FBQUE7TUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFBQyxDQUFBO0FBQUNwVixDQUFBQSxPQUFBQSxDQUFBQSxlQUFBQSxHQUF3QjhmLGVBQWUsQ0FBQTs7Ozs7OztBQ0FsMEIsQ0FBQSxJQUFJakIsZUFBZSxHQUFDLFVBQVNoYixDQUFDLEVBQUM7S0FBQyxPQUFPQSxDQUFDLElBQUVBLENBQUMsQ0FBQzZJLFVBQVUsR0FBQzdJLENBQUMsR0FBQztPQUFDaWIsT0FBTyxFQUFDamIsQ0FBQUE7TUFBRSxDQUFBO0lBQUM7R0FBQ2tiLE9BQU8sSUFBRWpmLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsWUFBWSxFQUFDO0tBQUNDLEtBQUssRUFBQyxDQUFDLENBQUE7QUFBQyxJQUFDLENBQUMsRUFBQ0QsT0FBdUIsQ0FBQSxjQUFBLEdBQUEsS0FBSyxDQUFDLEVBQUM2ZSxlQUFlLENBQUNwZSxPQUFRLENBQUEsT0FBTyxDQUFDLENBQUMsQ0FBQztHQUFDcVMsT0FBTyxHQUFDclMsS0FBbUI7R0FBQ3VlLE9BQU8sR0FBQ3ZlLEtBQW1CO0FBQUN3ZixHQUFBQSxjQUFjLEdBQUMsVUFBU3BjLENBQUMsRUFBQztBQUFDLEtBQUEsSUFBSXVSLENBQUM7T0FBQ0UsQ0FBQyxHQUFDelIsQ0FBQyxDQUFDdVEsSUFBSTtPQUFDa0QsQ0FBQyxHQUFDelQsQ0FBQyxDQUFDcWMsVUFBVTtPQUFDN0ssQ0FBQyxHQUFDeFIsQ0FBQyxDQUFDMGIsT0FBTztPQUFDL0ksQ0FBQyxHQUFDM1MsQ0FBQyxDQUFDc2MsZ0JBQWdCO09BQUN0YyxDQUFDLEdBQUNBLENBQUMsQ0FBQ3VjLGdCQUFnQixDQUFBO0FBQUMsS0FBQSxPQUFNLFVBQVUsSUFBRSxPQUFPNUosQ0FBQyxHQUFDdUksT0FBTyxDQUFDRCxPQUFPLENBQUMxRCxhQUFhLENBQUMsS0FBSyxFQUFDO0FBQUMrRCxPQUFBQSxTQUFTLEVBQUNyTSxPQUFPLENBQUNWLFVBQVUsQ0FBQ04sV0FBVztPQUFDeU4sT0FBTyxFQUFDbEssQ0FBQUE7TUFBRSxFQUFDbUIsQ0FBQyxDQUFDO09BQUMwSixVQUFVLEVBQUM1SSxDQUFBQTtBQUFDLE1BQUMsQ0FBQyxDQUFDLEdBQUMsVUFBVSxJQUFFLE9BQU96VCxDQUFDLEdBQUNrYixPQUFPLENBQUNELE9BQU8sQ0FBQzFELGFBQWEsQ0FBQyxLQUFLLEVBQUM7QUFBQytELE9BQUFBLFNBQVMsRUFBQ3JNLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDSCxXQUFXO09BQUNzTixPQUFPLEVBQUNsSyxDQUFBQTtNQUFFLEVBQUN4UixDQUFDLENBQUM7T0FBQ3FjLFVBQVUsRUFBQzVJLENBQUFBO01BQUUsQ0FBQyxDQUFDLElBQUV6VCxDQUFDLEdBQUMsQ0FBQzJTLENBQUMsR0FBQyxNQUFNLEtBQUdsQixDQUFDLElBQUUsR0FBRyxHQUFDLEdBQUcsRUFBQ0EsQ0FBQyxHQUFDa0IsQ0FBQyxHQUFDMUQsT0FBTyxDQUFDVixVQUFVLENBQUNOLFdBQVcsR0FBQ2dCLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDSCxXQUFXLEVBQUNtRCxDQUFDLEdBQUNvQixDQUFDLEdBQUMxRCxPQUFPLENBQUNWLFVBQVUsQ0FBQ0wsbUJBQW1CLEdBQUNlLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDRixtQkFBbUIsRUFBQ3NFLENBQUMsR0FBQ0EsQ0FBQyxHQUFDMUQsT0FBTyxDQUFDVixVQUFVLENBQUNKLGdCQUFnQixHQUFDYyxPQUFPLENBQUNWLFVBQVUsQ0FBQ0QsZ0JBQWdCLEVBQUNtRixDQUFDLEdBQUNBLENBQUMsR0FBQ3hFLE9BQU8sQ0FBQ0QsU0FBUyxDQUFDUCxRQUFRLEdBQUMsRUFBRSxFQUFDa0UsQ0FBQyxHQUFDLElBQUd3SSxPQUFPLENBQUMzRCxnQkFBZ0IsRUFBRTdFLENBQUMsRUFBQ2MsQ0FBQyxDQUFDLEVBQUN5SCxPQUFPLENBQUNELE9BQU8sQ0FBQzFELGFBQWEsQ0FBQyxLQUFLLEVBQUM7T0FBQytELFNBQVMsRUFBQzdKLENBQUFBO01BQUUsRUFBQ3lKLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDMUQsYUFBYSxDQUFDLEtBQUssRUFBQztPQUFDK0QsU0FBUyxFQUFDL0osQ0FBQUE7TUFBRSxFQUFDMkosT0FBTyxDQUFDRCxPQUFPLENBQUMxRCxhQUFhLENBQUMsR0FBRyxFQUFDO09BQUMrRCxTQUFTLEVBQUMzSSxDQUFDO0FBQUMrSSxPQUFBQSxPQUFPLEVBQUMsVUFBUzFiLENBQUMsRUFBQztTQUFDLE9BQU93UixDQUFDLENBQUN4UixDQUFDLENBQUMsQ0FBQTtRQUFBO01BQUUsRUFBQ2tiLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDMUQsYUFBYSxDQUFDLE1BQU0sRUFBQztPQUFDLFdBQVcsRUFBQ3ZYLENBQUFBO0FBQUMsTUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUFDLENBQUE7QUFBQzdELENBQUFBLE9BQUFBLENBQUFBLGNBQUFBLEdBQXVCaWdCLGNBQWMsQ0FBQTs7Ozs7QUNBM3NDbmdCLENBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsWUFBWSxFQUFDO0dBQUNDLEtBQUssRUFBQyxDQUFDLENBQUE7RUFBRSxDQUFDLEVBQUNELE9BQXVCQSxDQUFBQSxjQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxlQUFBQSxHQUF3QkEseUJBQXVCQSxPQUFrQkEsQ0FBQUEsU0FBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsU0FBQUEsR0FBa0IsS0FBSyxDQUFDLENBQUE7Q0FBQyxJQUFJcWdCLFdBQVcsR0FBQzVmLFNBQXNCO0dBQUM2ZixXQUFXLElBQUV4Z0IsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxXQUFXLEVBQUM7S0FBQzBFLFVBQVUsRUFBQyxDQUFDLENBQUM7S0FBQ21ELEdBQUcsRUFBQyxZQUFVO09BQUMsT0FBT3dZLFdBQVcsQ0FBQ3BCLFNBQVMsQ0FBQTtNQUFBO0lBQUUsQ0FBQyxFQUFDeGUsU0FBc0IsQ0FBQztHQUFDOGYsZ0JBQWdCLElBQUV6Z0IsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxXQUFXLEVBQUM7S0FBQzBFLFVBQVUsRUFBQyxDQUFDLENBQUM7S0FBQ21ELEdBQUcsRUFBQyxZQUFVO09BQUMsT0FBT3lZLFdBQVcsQ0FBQ2xCLFNBQVMsQ0FBQTtNQUFBO0lBQUUsQ0FBQyxFQUFDM2UsY0FBMkIsQ0FBQztHQUFDK2YsaUJBQWlCLElBQUUxZ0IsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQztLQUFDMEUsVUFBVSxFQUFDLENBQUMsQ0FBQztLQUFDbUQsR0FBRyxFQUFDLFlBQVU7T0FBQyxPQUFPMFksZ0JBQWdCLENBQUNqQixjQUFjLENBQUE7TUFBQTtJQUFFLENBQUMsRUFBQzdlLGVBQTRCLENBQUM7R0FBQ2dnQixnQkFBZ0IsSUFBRTNnQixNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDO0tBQUMwRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO0tBQUNtRCxHQUFHLEVBQUMsWUFBVTtPQUFDLE9BQU8yWSxpQkFBaUIsQ0FBQ1YsZUFBZSxDQUFBO01BQUE7QUFBQyxJQUFDLENBQUMsRUFBQ3JmLGNBQTJCLENBQUMsQ0FBQTtBQUFDWCxDQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLGdCQUFnQixFQUFDO0dBQUMwRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO0dBQUNtRCxHQUFHLEVBQUMsWUFBVTtLQUFDLE9BQU80WSxnQkFBZ0IsQ0FBQ1IsY0FBYyxDQUFBO0lBQUE7QUFBQyxFQUFDLENBQUMsQ0FBQTs7Ozs7Q0NBMTdCLElBQUlTLFNBQVMsR0FBQyxZQUFVO0FBQUMsS0FBQSxJQUFJbEssQ0FBQyxHQUFDLFVBQVNwQixDQUFDLEVBQUN2UixDQUFDLEVBQUM7QUFBQyxPQUFBLE9BQU0sQ0FBQzJTLENBQUMsR0FBQzFXLE1BQU0sQ0FBQzZnQixjQUFjLEtBQUc7U0FBQ0MsU0FBUyxFQUFDLEVBQUE7QUFBRSxRQUFDLFlBQVdsSSxLQUFLLEdBQUMsVUFBU3RELENBQUMsRUFBQ3ZSLENBQUMsRUFBQztTQUFDdVIsQ0FBQyxDQUFDd0wsU0FBUyxHQUFDL2MsQ0FBQyxDQUFBO0FBQUEsUUFBQyxHQUFDLFVBQVN1UixDQUFDLEVBQUN2UixDQUFDLEVBQUM7U0FBQyxLQUFJLElBQUl6QyxDQUFDLElBQUl5QyxDQUFDLEVBQUMvRCxNQUFNLENBQUM4SSxTQUFTLENBQUN1RCxjQUFjLENBQUNDLElBQUksQ0FBQ3ZJLENBQUMsRUFBQ3pDLENBQUMsQ0FBQyxLQUFHZ1UsQ0FBQyxDQUFDaFUsQ0FBQyxDQUFDLEdBQUN5QyxDQUFDLENBQUN6QyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQUEsUUFBQyxDQUFDLEVBQUVnVSxDQUFDLEVBQUN2UixDQUFDLENBQUMsQ0FBQTtNQUFDLENBQUE7QUFBQyxLQUFBLE9BQU8sVUFBU3VSLENBQUMsRUFBQ3ZSLENBQUMsRUFBQztPQUFDLElBQUcsVUFBVSxJQUFFLE9BQU9BLENBQUMsSUFBRSxJQUFJLEtBQUdBLENBQUMsRUFBQyxNQUFNLElBQUl1SixTQUFTLENBQUMsc0JBQXNCLEdBQUN5VCxNQUFNLENBQUNoZCxDQUFDLENBQUMsR0FBQywrQkFBK0IsQ0FBQyxDQUFBO09BQUMsU0FBU3pDLENBQUNBLEdBQUU7U0FBQyxJQUFJLENBQUN1SCxXQUFXLEdBQUN5TSxDQUFDLENBQUE7UUFBQTtBQUFDb0IsT0FBQUEsQ0FBQyxDQUFDcEIsQ0FBQyxFQUFDdlIsQ0FBQyxDQUFDLEVBQUN1UixDQUFDLENBQUN4TSxTQUFTLEdBQUMsSUFBSSxLQUFHL0UsQ0FBQyxHQUFDL0QsTUFBTSxDQUFDNmUsTUFBTSxDQUFDOWEsQ0FBQyxDQUFDLElBQUV6QyxDQUFDLENBQUN3SCxTQUFTLEdBQUMvRSxDQUFDLENBQUMrRSxTQUFTLEVBQUMsSUFBSXhILENBQUMsRUFBQyxDQUFBLENBQUE7TUFBQyxDQUFBO0FBQUEsSUFBQyxFQUFFO0dBQUM4VCxRQUFRLEdBQUMsWUFBVTtLQUFDLE9BQU0sQ0FBQ0EsUUFBUSxHQUFDcFYsTUFBTSxDQUFDMk8sTUFBTSxJQUFFLFVBQVMyRyxDQUFDLEVBQUM7T0FBQyxLQUFJLElBQUl2UixDQUFDLEVBQUN6QyxDQUFDLEdBQUMsQ0FBQyxFQUFDb1YsQ0FBQyxHQUFDL1UsU0FBUyxDQUFDUixNQUFNLEVBQUNHLENBQUMsR0FBQ29WLENBQUMsRUFBQ3BWLENBQUMsRUFBRSxFQUFDLEtBQUksSUFBSStULENBQUMsSUFBSXRSLENBQUMsR0FBQ3BDLFNBQVMsQ0FBQ0wsQ0FBQyxDQUFDLEVBQUN0QixNQUFNLENBQUM4SSxTQUFTLENBQUN1RCxjQUFjLENBQUNDLElBQUksQ0FBQ3ZJLENBQUMsRUFBQ3NSLENBQUMsQ0FBQyxLQUFHQyxDQUFDLENBQUNELENBQUMsQ0FBQyxHQUFDdFIsQ0FBQyxDQUFDc1IsQ0FBQyxDQUFDLENBQUMsQ0FBQTtPQUFDLE9BQU9DLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBRTVMLEtBQUssQ0FBQyxJQUFJLEVBQUMvSCxTQUFTLENBQUMsQ0FBQTtJQUFDO0FBQUNpZCxHQUFBQSxlQUFlLEdBQUM1ZSxNQUFNLENBQUM2ZSxNQUFNLEdBQUMsVUFBU3ZKLENBQUMsRUFBQ3ZSLENBQUMsRUFBQ3pDLENBQUMsRUFBQ29WLENBQUMsRUFBQztLQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEtBQUdBLENBQUMsR0FBQ3BWLENBQUMsQ0FBQyxDQUFBO0tBQUMsSUFBSStULENBQUMsR0FBQ3JWLE1BQU0sQ0FBQ3lKLHdCQUF3QixDQUFDMUYsQ0FBQyxFQUFDekMsQ0FBQyxDQUFDLENBQUE7S0FBQytULENBQUMsS0FBRyxLQUFLLElBQUdBLENBQUMsR0FBQ3RSLENBQUMsQ0FBQzZJLFVBQVUsR0FBQyxDQUFDeUksQ0FBQyxDQUFDdlEsUUFBUSxJQUFFLENBQUN1USxDQUFDLENBQUN4USxZQUFZLENBQUMsS0FBR3dRLENBQUMsR0FBQztPQUFDelEsVUFBVSxFQUFDLENBQUMsQ0FBQztPQUFDbUQsR0FBRyxFQUFDLFlBQVU7U0FBQyxPQUFPaEUsQ0FBQyxDQUFDekMsQ0FBQyxDQUFDLENBQUE7UUFBQTtNQUFFLENBQUMsRUFBQ3RCLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDcVYsQ0FBQyxFQUFDb0IsQ0FBQyxFQUFDckIsQ0FBQyxDQUFDLENBQUE7SUFBQyxHQUFDLFVBQVNDLENBQUMsRUFBQ3ZSLENBQUMsRUFBQ3pDLENBQUMsRUFBQ29WLENBQUMsRUFBQztBQUFDcEIsS0FBQUEsQ0FBQyxDQUFDb0IsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUNwVixDQUFDLEdBQUNvVixDQUFDLENBQUMsR0FBQzNTLENBQUMsQ0FBQ3pDLENBQUMsQ0FBQyxDQUFBO0lBQUM7R0FBQzBmLGtCQUFrQixHQUFDaGhCLE1BQU0sQ0FBQzZlLE1BQU0sR0FBQyxVQUFTdkosQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO0FBQUMvRCxLQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ3FWLENBQUMsRUFBQyxTQUFTLEVBQUM7T0FBQzFRLFVBQVUsRUFBQyxDQUFDLENBQUM7T0FBQ3pFLEtBQUssRUFBQzRELENBQUFBO0FBQUMsTUFBQyxDQUFDLENBQUE7QUFBQSxJQUFDLEdBQUMsVUFBU3VSLENBQUMsRUFBQ3ZSLENBQUMsRUFBQztLQUFDdVIsQ0FBQyxDQUFDMEosT0FBTyxHQUFDamIsQ0FBQyxDQUFBO0lBQUM7QUFBQ2tkLEdBQUFBLFlBQVksR0FBQyxVQUFTM0wsQ0FBQyxFQUFDO0tBQUMsSUFBR0EsQ0FBQyxJQUFFQSxDQUFDLENBQUMxSSxVQUFVLEVBQUMsT0FBTzBJLENBQUMsQ0FBQTtLQUFDLElBQUl2UixDQUFDLEdBQUMsRUFBRSxDQUFBO0FBQUMsS0FBQSxJQUFHLElBQUksSUFBRXVSLENBQUMsRUFBQyxLQUFJLElBQUloVSxDQUFDLElBQUlnVSxDQUFDLEVBQUMsU0FBUyxLQUFHaFUsQ0FBQyxJQUFFdEIsTUFBTSxDQUFDOEksU0FBUyxDQUFDdUQsY0FBYyxDQUFDQyxJQUFJLENBQUNnSixDQUFDLEVBQUNoVSxDQUFDLENBQUMsSUFBRXNkLGVBQWUsQ0FBQzdhLENBQUMsRUFBQ3VSLENBQUMsRUFBQ2hVLENBQUMsQ0FBQyxDQUFBO0tBQUMsT0FBTzBmLGtCQUFrQixDQUFDamQsQ0FBQyxFQUFDdVIsQ0FBQyxDQUFDLEVBQUN2UixDQUFDLENBQUE7SUFBQztBQUFDK2EsR0FBQUEsWUFBWSxHQUFDLFVBQVN4SixDQUFDLEVBQUN2UixDQUFDLEVBQUM7QUFBQyxLQUFBLEtBQUksSUFBSXpDLENBQUMsSUFBSWdVLENBQUMsRUFBQyxTQUFTLEtBQUdoVSxDQUFDLElBQUV0QixNQUFNLENBQUM4SSxTQUFTLENBQUN1RCxjQUFjLENBQUNDLElBQUksQ0FBQ3ZJLENBQUMsRUFBQ3pDLENBQUMsQ0FBQyxJQUFFc2QsZUFBZSxDQUFDN2EsQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDaFUsQ0FBQyxDQUFDLENBQUE7SUFBQztHQUFDNGYsU0FBUyxHQUFDLFVBQVM1TCxDQUFDLEVBQUNrQyxDQUFDLEVBQUNqQyxDQUFDLEVBQUNxRyxDQUFDLEVBQUM7S0FBQyxPQUFPLEtBQUlyRyxDQUFDLEdBQUNBLENBQUMsSUFBRTRMLE9BQU8sRUFBRSxVQUFTN2YsQ0FBQyxFQUFDeUMsQ0FBQyxFQUFDO09BQUMsU0FBUzJTLENBQUNBLENBQUNwQixDQUFDLEVBQUM7U0FBQyxJQUFHO1dBQUNFLENBQUMsQ0FBQ29HLENBQUMsQ0FBQ3dGLElBQUksQ0FBQzlMLENBQUMsQ0FBQyxDQUFDLENBQUE7VUFBQyxDQUFBLE9BQU1BLENBQUMsRUFBQztXQUFDdlIsQ0FBQyxDQUFDdVIsQ0FBQyxDQUFDLENBQUE7VUFBQTtRQUFDO09BQUMsU0FBU0QsQ0FBQ0EsQ0FBQ0MsQ0FBQyxFQUFDO1NBQUMsSUFBRztXQUFDRSxDQUFDLENBQUNvRyxDQUFDLENBQUN5RixLQUFLLENBQUMvTCxDQUFDLENBQUMsQ0FBQyxDQUFBO1VBQUMsQ0FBQSxPQUFNQSxDQUFDLEVBQUM7V0FBQ3ZSLENBQUMsQ0FBQ3VSLENBQUMsQ0FBQyxDQUFBO1VBQUE7UUFBQztPQUFDLFNBQVNFLENBQUNBLENBQUNGLENBQUMsRUFBQztTQUFDLElBQUl2UixDQUFDLENBQUE7U0FBQ3VSLENBQUMsQ0FBQ2dNLElBQUksR0FBQ2hnQixDQUFDLENBQUNnVSxDQUFDLENBQUNuVixLQUFLLENBQUMsR0FBQyxDQUFDLENBQUM0RCxDQUFDLEdBQUN1UixDQUFDLENBQUNuVixLQUFLLGFBQVlvVixDQUFDLEdBQUN4UixDQUFDLEdBQUMsSUFBSXdSLENBQUMsQ0FBQyxVQUFTRCxDQUFDLEVBQUM7V0FBQ0EsQ0FBQyxDQUFDdlIsQ0FBQyxDQUFDLENBQUE7VUFBQyxDQUFDLEVBQUV3ZCxJQUFJLENBQUM3SyxDQUFDLEVBQUNyQixDQUFDLENBQUMsQ0FBQTtRQUFBO0FBQUNHLE9BQUFBLENBQUMsQ0FBQyxDQUFDb0csQ0FBQyxHQUFDQSxDQUFDLENBQUNsUyxLQUFLLENBQUM0TCxDQUFDLEVBQUNrQyxDQUFDLElBQUUsRUFBRSxDQUFDLEVBQUU0SixJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQUEsTUFBQyxDQUFDLENBQUE7SUFBQztBQUFDSSxHQUFBQSxXQUFXLEdBQUMsVUFBUzlLLENBQUMsRUFBQ3JCLENBQUMsRUFBQztBQUFDLEtBQUEsSUFBSUcsQ0FBQztPQUFDZ0MsQ0FBQztPQUFDakMsQ0FBQztBQUFDcUcsT0FBQUEsQ0FBQyxHQUFDO1NBQUM2RixLQUFLLEVBQUMsQ0FBQztTQUFDQyxJQUFJLEVBQUMsWUFBVTtXQUFDLElBQUcsQ0FBQyxHQUFDbk0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLE1BQU1BLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtXQUFDLE9BQU9BLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtVQUFDO1NBQUNvTSxJQUFJLEVBQUMsRUFBRTtTQUFDQyxHQUFHLEVBQUMsRUFBQTtRQUFHO0FBQUN0TSxPQUFBQSxDQUFDLEdBQUM7QUFBQzhMLFNBQUFBLElBQUksRUFBQ3JkLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBQ3NkLFNBQUFBLEtBQUssRUFBQ3RkLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBQzhkLE1BQU0sRUFBQzlkLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFBRSxDQUFBO0FBQUMsS0FBQSxPQUFNLFVBQVUsSUFBRSxPQUFPNEUsTUFBTSxLQUFHMk0sQ0FBQyxDQUFDM00sTUFBTSxDQUFDQyxRQUFRLENBQUMsR0FBQyxZQUFVO09BQUMsT0FBTyxJQUFJLENBQUE7TUFBQyxDQUFDLEVBQUMwTSxDQUFDLENBQUE7S0FBQyxTQUFTdlIsQ0FBQ0EsQ0FBQ3pDLENBQUMsRUFBQztPQUFDLE9BQU8sVUFBU2dVLENBQUMsRUFBQztTQUFDLElBQUl2UixDQUFDLEdBQUMsQ0FBQ3pDLENBQUMsRUFBQ2dVLENBQUMsQ0FBQyxDQUFBO1NBQUMsSUFBR0UsQ0FBQyxFQUFDLE1BQU0sSUFBSWxJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO1NBQUMsT0FBS3NPLENBQUMsR0FBRSxJQUFHO0FBQUMsV0FBQSxJQUFHcEcsQ0FBQyxHQUFDLENBQUMsRUFBQ2dDLENBQUMsS0FBR2pDLENBQUMsR0FBQyxDQUFDLEdBQUN4UixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUN5VCxDQUFDLENBQUNxSyxNQUFNLEdBQUM5ZCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUN5VCxDQUFDLENBQUM2SixLQUFLLEtBQUcsQ0FBQzlMLENBQUMsR0FBQ2lDLENBQUMsQ0FBQ3FLLE1BQU0sS0FBR3RNLENBQUMsQ0FBQ2pKLElBQUksQ0FBQ2tMLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFDQSxDQUFDLENBQUM0SixJQUFJLENBQUMsSUFBRSxDQUFDLENBQUM3TCxDQUFDLEdBQUNBLENBQUMsQ0FBQ2pKLElBQUksQ0FBQ2tMLENBQUMsRUFBQ3pULENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFdWQsSUFBSSxFQUFDLE9BQU8vTCxDQUFDLENBQUE7V0FBQyxRQUFPaUMsQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDelQsQ0FBQyxHQUFDd1IsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDeFIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDd1IsQ0FBQyxDQUFDcFYsS0FBSyxDQUFDLEdBQUM0RCxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQUUsS0FBSyxDQUFDLENBQUE7QUFBQyxhQUFBLEtBQUssQ0FBQztlQUFDd1IsQ0FBQyxHQUFDeFIsQ0FBQyxDQUFBO0FBQUMsZUFBQSxNQUFBO0FBQU0sYUFBQSxLQUFLLENBQUM7QUFBQyxlQUFBLE9BQU82WCxDQUFDLENBQUM2RixLQUFLLEVBQUUsRUFBQztBQUFDdGhCLGlCQUFBQSxLQUFLLEVBQUM0RCxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUFDdWQsSUFBSSxFQUFDLENBQUMsQ0FBQTtnQkFBRSxDQUFBO0FBQUMsYUFBQSxLQUFLLENBQUM7QUFBQzFGLGVBQUFBLENBQUMsQ0FBQzZGLEtBQUssRUFBRSxFQUFDakssQ0FBQyxHQUFDelQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUFDLGVBQUEsU0FBQTtBQUFTLGFBQUEsS0FBSyxDQUFDO0FBQUNBLGVBQUFBLENBQUMsR0FBQzZYLENBQUMsQ0FBQ2dHLEdBQUcsQ0FBQ0UsR0FBRyxFQUFFLEVBQUNsRyxDQUFDLENBQUMrRixJQUFJLENBQUNHLEdBQUcsRUFBRSxDQUFBO0FBQUMsZUFBQSxTQUFBO2FBQVM7QUFBUSxlQUFBLElBQUcsRUFBRXZNLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQ0EsQ0FBQyxHQUFDcUcsQ0FBQyxDQUFDK0YsSUFBSSxFQUFFeGdCLE1BQU0sSUFBRW9VLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDcFUsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUcsQ0FBQyxLQUFHNEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsS0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7aUJBQUM2WCxDQUFDLEdBQUMsQ0FBQyxDQUFBO0FBQUMsaUJBQUEsU0FBQTtnQkFBUTtBQUFDLGVBQUEsSUFBRyxDQUFDLEtBQUc3WCxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUcsQ0FBQ3dSLENBQUMsSUFBRXhSLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQ3dSLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRXhSLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQ3dSLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDcUcsQ0FBQyxDQUFDNkYsS0FBSyxHQUFDMWQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBRyxDQUFDLEtBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRTZYLENBQUMsQ0FBQzZGLEtBQUssR0FBQ2xNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ3FHLENBQUMsQ0FBQzZGLEtBQUssR0FBQ2xNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDeFIsQ0FBQyxDQUFDLEtBQUk7QUFBQyxpQkFBQSxJQUFHLEVBQUV3UixDQUFDLElBQUVxRyxDQUFDLENBQUM2RixLQUFLLEdBQUNsTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQztBQUFDQSxtQkFBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFFcUcsQ0FBQyxDQUFDZ0csR0FBRyxDQUFDRSxHQUFHLEVBQUUsRUFBQ2xHLENBQUMsQ0FBQytGLElBQUksQ0FBQ0csR0FBRyxFQUFFLENBQUE7QUFBQyxtQkFBQSxTQUFBO2tCQUFRO0FBQUNsRyxpQkFBQUEsQ0FBQyxDQUFDNkYsS0FBSyxHQUFDbE0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDcUcsQ0FBQyxDQUFDZ0csR0FBRyxDQUFDcmQsSUFBSSxDQUFDUixDQUFDLENBQUMsQ0FBQTtnQkFBQTtZQUFDO1dBQUNBLENBQUMsR0FBQ3NSLENBQUMsQ0FBQy9JLElBQUksQ0FBQ29LLENBQUMsRUFBQ2tGLENBQUMsQ0FBQyxDQUFBO1VBQUMsQ0FBQSxPQUFNdEcsQ0FBQyxFQUFDO1dBQUN2UixDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUN1UixDQUFDLENBQUMsRUFBQ2tDLENBQUMsR0FBQyxDQUFDLENBQUE7QUFBQSxVQUFDLFNBQU87V0FBQ2hDLENBQUMsR0FBQ0QsQ0FBQyxHQUFDLENBQUMsQ0FBQTtVQUFBO1NBQUMsSUFBRyxDQUFDLEdBQUN4UixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsTUFBTUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQUMsT0FBTTtBQUFDNUQsV0FBQUEsS0FBSyxFQUFDNEQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDO1dBQUN1ZCxJQUFJLEVBQUMsQ0FBQyxDQUFBO1VBQUUsQ0FBQTtRQUFDLENBQUE7TUFBQTtJQUFFO0FBQUN2QyxHQUFBQSxlQUFlLEdBQUMsVUFBU3pKLENBQUMsRUFBQztLQUFDLE9BQU9BLENBQUMsSUFBRUEsQ0FBQyxDQUFDMUksVUFBVSxHQUFDMEksQ0FBQyxHQUFDO09BQUMwSixPQUFPLEVBQUMxSixDQUFBQTtNQUFFLENBQUE7SUFBQztHQUFDMkosT0FBTyxJQUFFamYsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxZQUFZLEVBQUM7S0FBQ0MsS0FBSyxFQUFDLENBQUMsQ0FBQTtJQUFFLENBQUMsRUFBQzRlLGVBQWUsQ0FBQ3BlLFFBQVEsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUFDb2hCLEdBQUFBLGVBQWUsR0FBQ2hELGVBQWUsQ0FBQ3BlLEdBQXdCLENBQUM7R0FBQ3FoQixjQUFjLEdBQUNyaEIsWUFBeUI7QUFBQ3NoQixHQUFBQSxLQUFLLEdBQUNoQixZQUFZLENBQUN0Z0IsS0FBa0IsQ0FBQztBQUFDd0wsR0FBQUEsS0FBSyxHQUFDOFUsWUFBWSxDQUFDdGdCLEtBQWtCLENBQUM7R0FBQ3FTLE9BQU8sR0FBQ3JTLEtBQWtCO0dBQUN1aEIsYUFBYSxJQUFFcEQsWUFBWSxDQUFDbmUsS0FBa0IsRUFBQ1QsT0FBTyxDQUFDLEVBQUMsVUFBUzZELENBQUMsRUFBQztLQUFDLFNBQVN1UixDQUFDQSxDQUFDQSxDQUFDLEVBQUM7T0FBQyxJQUFJRSxDQUFDLEdBQUN6UixDQUFDLENBQUN1SSxJQUFJLENBQUMsSUFBSSxFQUFDZ0osQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFBO0FBQUMsT0FBQSxPQUFPRSxDQUFDLENBQUMyTSxhQUFhLEdBQUMsSUFBSSxFQUFDM00sQ0FBQyxDQUFDNE0scUJBQXFCLEdBQUMsVUFBUzlNLENBQUMsRUFBQztTQUFDLFFBQU9BLENBQUMsQ0FBQytNLElBQUk7QUFBRSxXQUFBLEtBQUksT0FBTzthQUFDLE9BQU83TSxDQUFDLENBQUNuTCxLQUFLLENBQUNrSixRQUFRLElBQUVpQyxDQUFDLENBQUM4TSxzQkFBc0IsRUFBRSxDQUFBO0FBQUMsV0FBQSxLQUFJLFdBQVc7QUFBQyxhQUFBLE9BQU85TSxDQUFDLENBQUMrTSxTQUFTLENBQUNqTixDQUFDLENBQUMsQ0FBQTtBQUFDLFdBQUEsS0FBSSxZQUFZO0FBQUMsYUFBQSxPQUFPRSxDQUFDLENBQUNnTixTQUFTLENBQUNsTixDQUFDLENBQUMsQ0FBQTtVQUFBO0FBQUMsUUFBQyxFQUFDRSxDQUFDLENBQUNpTixxQkFBcUIsR0FBQyxVQUFTcE4sQ0FBQyxFQUFDO1NBQUMsT0FBTzZMLFNBQVMsQ0FBQzFMLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxZQUFVO0FBQUMsV0FBQSxJQUFJelIsQ0FBQyxFQUFDekMsQ0FBQyxFQUFDb1YsQ0FBQyxDQUFBO0FBQUMsV0FBQSxPQUFPOEssV0FBVyxDQUFDLElBQUksRUFBQyxVQUFTbE0sQ0FBQyxFQUFDO2FBQUMsUUFBT0EsQ0FBQyxDQUFDbU0sS0FBSztBQUFFLGVBQUEsS0FBSyxDQUFDO0FBQUMsaUJBQUEsT0FBTSxDQUFDbmdCLENBQUMsR0FBQyxJQUFJLENBQUNpRixLQUFLLEVBQUNtUSxDQUFDLEdBQUNwVixDQUFDLENBQUMyUixXQUFXLEVBQUNsUCxDQUFDLEdBQUN6QyxDQUFDLENBQUMyVSxVQUFVLEVBQUMzVSxDQUFDLEdBQUNBLENBQUMsQ0FBQ3NaLDBCQUEwQixFQUFDek8sS0FBSyxDQUFDZ0ssMkJBQTJCLENBQUNPLENBQUMsRUFBQzNTLENBQUMsQ0FBQyxLQUFHMlMsQ0FBQyxHQUFDdkssS0FBSyxDQUFDK0osMkJBQTJCLENBQUNRLENBQUMsRUFBQzNTLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQzJlLDBCQUEwQixDQUFDaE0sQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUFDLGVBQUEsS0FBSyxDQUFDO2lCQUFDLE9BQU9wQixDQUFDLENBQUNvTSxJQUFJLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUFDLGVBQUEsS0FBSyxDQUFDO2lCQUFDLE9BQU9wZ0IsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ3FoQixRQUFRLENBQUM7bUJBQUNqSSxxQkFBcUIsRUFBQyxJQUFJO21CQUFDQyx3QkFBd0IsRUFBQyxJQUFJO21CQUFDQywwQkFBMEIsRUFBQyxDQUFDLENBQUE7a0JBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7QUFBQyxlQUFBLEtBQUssQ0FBQztpQkFBQ3RGLENBQUMsQ0FBQ29NLElBQUksRUFBRSxFQUFDcE0sQ0FBQyxDQUFDbU0sS0FBSyxHQUFDLENBQUMsQ0FBQTtBQUFDLGVBQUEsS0FBSyxDQUFDO2lCQUFDLE9BQU8sSUFBSSxDQUFDbUIsbUJBQW1CLENBQUN2TixDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2NBQUE7QUFBQyxZQUFDLENBQUMsQ0FBQTtBQUFBLFVBQUMsQ0FBQyxDQUFBO0FBQUEsUUFBQyxFQUFDRyxDQUFDLENBQUNxTixpQkFBaUIsR0FBQyxZQUFVO1NBQUMsSUFBSXZOLENBQUMsR0FBQ0UsQ0FBQyxDQUFDbkwsS0FBSyxDQUFDc0osZ0JBQWdCLENBQUE7U0FBQ3hILEtBQUssQ0FBQ3dTLDJCQUEyQixDQUFDckosQ0FBQyxDQUFDLElBQUVFLENBQUMsQ0FBQ2pQLEtBQUssQ0FBQ2tXLGFBQWEsS0FBR2pILENBQUMsQ0FBQ3NOLFNBQVMsR0FBQyxDQUFDLENBQUMsRUFBQ3ROLENBQUMsQ0FBQ3VOLFlBQVksRUFBRSxDQUFDLENBQUE7QUFBQSxRQUFDLEVBQUN2TixDQUFDLENBQUN3TixpQkFBaUIsR0FBQyxZQUFVO0FBQUN4TixTQUFBQSxDQUFDLENBQUNqUCxLQUFLLENBQUNrVyxhQUFhLEtBQUdqSCxDQUFDLENBQUNzTixTQUFTLEdBQUMsQ0FBQyxDQUFDLEVBQUN0TixDQUFDLENBQUN5TixXQUFXLEVBQUUsQ0FBQyxDQUFBO0FBQUEsUUFBQyxFQUFDek4sQ0FBQyxDQUFDdU4sWUFBWSxHQUFDLFlBQVU7U0FBQ3ZOLENBQUMsQ0FBQzBOLHFCQUFxQixFQUFFLENBQUE7QUFBQSxRQUFDLEVBQUMxTixDQUFDLENBQUM4TSxzQkFBc0IsR0FBQyxZQUFVO1NBQUMsT0FBT3BCLFNBQVMsQ0FBQzFMLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxZQUFVO1dBQUMsSUFBSXpSLENBQUMsQ0FBQTtBQUFDLFdBQUEsT0FBT3lkLFdBQVcsQ0FBQyxJQUFJLEVBQUMsVUFBU2xNLENBQUMsRUFBQzthQUFDLFFBQU9BLENBQUMsQ0FBQ21NLEtBQUs7QUFBRSxlQUFBLEtBQUssQ0FBQztpQkFBQyxPQUFPMWQsQ0FBQyxHQUFDLElBQUksQ0FBQ3dDLEtBQUssQ0FBQ2tXLGFBQWEsRUFBQyxJQUFJLENBQUMwRyxhQUFhLEdBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDUixRQUFRLENBQUM7bUJBQUNsRyxhQUFhLEVBQUMsQ0FBQzFZLENBQUM7bUJBQUMyWSwwQkFBMEIsRUFBQyxDQUFDLENBQUE7a0JBQUUsQ0FBQyxDQUFDLENBQUE7QUFBQyxlQUFBLEtBQUssQ0FBQztpQkFBQyxPQUFPcEgsQ0FBQyxDQUFDb00sSUFBSSxFQUFFLEVBQUMzZCxDQUFDLEdBQUMsSUFBSSxDQUFDZ2YsWUFBWSxFQUFFLEdBQUMsSUFBSSxDQUFDRSxXQUFXLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2NBQUE7QUFBQyxZQUFDLENBQUMsQ0FBQTtBQUFBLFVBQUMsQ0FBQyxDQUFBO0FBQUEsUUFBQyxFQUFDek4sQ0FBQyxDQUFDNE4sb0JBQW9CLEdBQUMsVUFBUzlOLENBQUMsRUFBQztBQUFDLFNBQUEsT0FBT0UsQ0FBQyxDQUFDNk4sV0FBVyxHQUFDL04sQ0FBQyxDQUFBO0FBQUEsUUFBQyxFQUFDRSxDQUFDLENBQUM4TixxQkFBcUIsR0FBQyxVQUFTaE8sQ0FBQyxFQUFDO0FBQUMsU0FBQSxPQUFPRSxDQUFDLENBQUMrTixjQUFjLEdBQUNqTyxDQUFDLENBQUE7UUFBQyxFQUFDRSxDQUFDLENBQUNnTyxnQkFBZ0IsR0FBQyxVQUFTbE8sQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO1NBQUMsSUFBSXpDLENBQUMsR0FBQzZLLEtBQUssQ0FBQ3NPLHdCQUF3QixDQUFDMVcsQ0FBQyxFQUFDeVIsQ0FBQyxDQUFDalAsS0FBSyxDQUFDO1dBQUNtUSxDQUFDLEdBQUN2SyxLQUFLLENBQUM0USx5QkFBeUIsQ0FBQ2haLENBQUMsRUFBQ3lSLENBQUMsQ0FBQ2pQLEtBQUssQ0FBQyxDQUFBO1NBQUMsT0FBTzBZLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDMUQsYUFBYSxDQUFDMkcsS0FBSyxDQUFDM0MsU0FBUyxFQUFDO1dBQUNDLE1BQU0sRUFBQ2plLENBQUM7V0FBQytkLFNBQVMsRUFBQzNJLENBQUM7QUFBQzdVLFdBQUFBLEdBQUcsRUFBQyxhQUFhLENBQUMwVyxNQUFNLENBQUN4VSxDQUFDLENBQUM7V0FBQzhaLElBQUksRUFBQ3ZJLENBQUFBO0FBQUMsVUFBQyxDQUFDLENBQUE7QUFBQSxRQUFDLEVBQUNFLENBQUMsQ0FBQ2lPLGdCQUFnQixHQUFDLFlBQVU7QUFBQyxTQUFBLElBQUluTyxDQUFDLEdBQUNFLENBQUMsQ0FBQ25MLEtBQUssQ0FBQytVLGVBQWU7V0FBQ3JiLENBQUMsR0FBQ3lSLENBQUMsQ0FBQ2pQLEtBQUs7V0FBQ2pGLENBQUMsR0FBQ3lDLENBQUMsQ0FBQ2tQLFdBQVc7V0FBQ2xQLENBQUMsR0FBQ0EsQ0FBQyxDQUFDa1MsVUFBVSxDQUFBO1NBQUMsT0FBT2dKLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDMUQsYUFBYSxDQUFDMkcsS0FBSyxDQUFDOUMsU0FBUyxFQUFDO1dBQUNsSixVQUFVLEVBQUNsUyxDQUFDO1dBQUNrUCxXQUFXLEVBQUMzUixDQUFDO1dBQUM4ZCxlQUFlLEVBQUM5SixDQUFBQTtBQUFDLFVBQUMsQ0FBQyxDQUFBO1FBQUMsRUFBQ0UsQ0FBQyxDQUFDalAsS0FBSyxHQUFDNEYsS0FBSyxDQUFDd1AscUJBQXFCLENBQUNyRyxDQUFDLEVBQUMsSUFBSSxDQUFDLEVBQUNFLENBQUMsQ0FBQ3NOLFNBQVMsR0FBQyxDQUFDLENBQUMsRUFBQ3ROLENBQUMsQ0FBQ2tPLG1CQUFtQixHQUFDLENBQUMsQ0FBQyxFQUFDbE8sQ0FBQyxDQUFDbU8seUJBQXlCLEdBQUMsQ0FBQyxDQUFDLEVBQUNuTyxDQUFDLENBQUNvTyxxQkFBcUIsR0FBQyxDQUFDLENBQUMsRUFBQ3BPLENBQUMsQ0FBQzJOLGFBQWEsR0FBQyxDQUFDLENBQUMsRUFBQzNOLENBQUMsQ0FBQzZOLFdBQVcsR0FBQyxJQUFJLEVBQUM3TixDQUFDLENBQUNxTyx1QkFBdUIsR0FBQyxFQUFFLEVBQUNyTyxDQUFDLENBQUMrTixjQUFjLEdBQUMsSUFBSSxFQUFDL04sQ0FBQyxDQUFDc08sc0JBQXNCLEdBQUMsS0FBSyxDQUFDLEVBQUN0TyxDQUFDLENBQUN1TyxPQUFPLEdBQUN2TyxDQUFDLENBQUN1TyxPQUFPLENBQUNqVyxJQUFJLENBQUMwSCxDQUFDLENBQUMsRUFBQ0EsQ0FBQyxDQUFDK00sU0FBUyxHQUFDL00sQ0FBQyxDQUFDK00sU0FBUyxDQUFDelUsSUFBSSxDQUFDMEgsQ0FBQyxDQUFDLEVBQUNBLENBQUMsQ0FBQ2dOLFNBQVMsR0FBQ2hOLENBQUMsQ0FBQ2dOLFNBQVMsQ0FBQzFVLElBQUksQ0FBQzBILENBQUMsQ0FBQyxFQUFDQSxDQUFDLENBQUN3TyxnQkFBZ0IsR0FBQ3hPLENBQUMsQ0FBQ3dPLGdCQUFnQixDQUFDbFcsSUFBSSxDQUFDMEgsQ0FBQyxDQUFDLEVBQUNBLENBQUMsQ0FBQ3lPLGVBQWUsR0FBQ3pPLENBQUMsQ0FBQ3lPLGVBQWUsQ0FBQ25XLElBQUksQ0FBQzBILENBQUMsQ0FBQyxFQUFDQSxDQUFDLENBQUMwTyxlQUFlLEdBQUMxTyxDQUFDLENBQUMwTyxlQUFlLENBQUNwVyxJQUFJLENBQUMwSCxDQUFDLENBQUMsRUFBQ0EsQ0FBQyxDQUFDMk8sYUFBYSxHQUFDM08sQ0FBQyxDQUFDMk8sYUFBYSxDQUFDclcsSUFBSSxDQUFDMEgsQ0FBQyxDQUFDLEVBQUNGLENBQUMsR0FBQ25KLEtBQUssQ0FBQ2dSLFFBQVEsQ0FBQzNILENBQUMsQ0FBQzJPLGFBQWEsRUFBQyxHQUFHLENBQUMsRUFBQzNPLENBQUMsQ0FBQzRPLHNCQUFzQixHQUFDOU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDRSxDQUFDLENBQUM2TyxzQkFBc0IsR0FBQy9PLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ0UsQ0FBQyxDQUFBO01BQUE7QUFBQyxLQUFBLE9BQU9vTCxTQUFTLENBQUN0TCxDQUFDLEVBQUN2UixDQUFDLENBQUMsRUFBQ3VSLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ3diLGlCQUFpQixHQUFDLFlBQVU7T0FBQyxPQUFPcEQsU0FBUyxDQUFDLElBQUksRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxZQUFVO0FBQUMsU0FBQSxPQUFPTSxXQUFXLENBQUMsSUFBSSxFQUFDLFVBQVNsTSxDQUFDLEVBQUM7V0FBQyxRQUFPQSxDQUFDLENBQUNtTSxLQUFLO0FBQUUsYUFBQSxLQUFLLENBQUM7ZUFBQyxPQUFNLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQzhDLGdCQUFnQixFQUFFLENBQUMsQ0FBQTtBQUFDLGFBQUEsS0FBSyxDQUFDO0FBQUMsZUFBQSxPQUFPalAsQ0FBQyxDQUFDb00sSUFBSSxFQUFFLEVBQUMsSUFBSSxDQUFDOEMsa0JBQWtCLEVBQUUsRUFBQyxJQUFJLENBQUNDLG1CQUFtQixFQUFFLEVBQUMsSUFBSSxDQUFDcGEsS0FBSyxDQUFDa0osUUFBUSxJQUFFLElBQUksQ0FBQzBQLFdBQVcsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFBQTtBQUFDLFVBQUMsQ0FBQyxDQUFBO0FBQUEsUUFBQyxDQUFDLENBQUE7TUFBQyxFQUFDM04sQ0FBQyxDQUFDeE0sU0FBUyxDQUFDNGIsa0JBQWtCLEdBQUMsVUFBU3BQLENBQUMsRUFBQ3ZSLENBQUMsRUFBQztBQUFDLE9BQUEsSUFBSXpDLENBQUMsR0FBQyxJQUFJLENBQUMrSSxLQUFLO1NBQUNxTSxDQUFDLEdBQUNwVixDQUFDLENBQUMyUixXQUFXO1NBQUNvQyxDQUFDLEdBQUMvVCxDQUFDLENBQUM0UixpQkFBaUI7U0FBQ3NDLENBQUMsR0FBQ2xVLENBQUMsQ0FBQ2dTLFNBQVM7U0FBQ2tFLENBQUMsR0FBQ2xXLENBQUMsQ0FBQ3NTLFFBQVE7U0FBQzJCLENBQUMsR0FBQ2pVLENBQUMsQ0FBQzJTLFFBQVE7U0FBQzJILENBQUMsR0FBQ3RhLENBQUMsQ0FBQzZTLEtBQUs7U0FBQzRILENBQUMsR0FBQ3phLENBQUMsQ0FBQ2lULFdBQVc7U0FBQ2dELENBQUMsR0FBQ2pXLENBQUMsQ0FBQ2tULFlBQVk7U0FBQ3NILENBQUMsR0FBQ3hhLENBQUMsQ0FBQ21ULFVBQVU7U0FBQ2tRLENBQUMsR0FBQ3JqQixDQUFDLENBQUNxVCxpQkFBaUI7U0FBQ3lILENBQUMsR0FBQzlhLENBQUMsQ0FBQytTLGFBQWE7U0FBQ3dMLENBQUMsR0FBQ3ZlLENBQUMsQ0FBQ29ULFVBQVU7U0FBQ21ILENBQUMsR0FBQ3ZhLENBQUMsQ0FBQ3VULGFBQWE7U0FBQ3ZULENBQUMsR0FBQ0EsQ0FBQyxDQUFDd1Qsc0JBQXNCLENBQUE7T0FBQzBDLENBQUMsSUFBRWxDLENBQUMsQ0FBQzFCLFFBQVEsS0FBRzRELENBQUMsSUFBRUEsQ0FBQyxHQUFDelQsQ0FBQyxDQUFDa1AsV0FBVyxFQUFDbFAsQ0FBQyxHQUFDcVIsUUFBUSxDQUFDQSxRQUFRLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQy9LLEtBQUssQ0FBQyxFQUFDO1NBQUM0SSxXQUFXLEVBQUN1RSxDQUFBQTtBQUFDLFFBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ29OLGdCQUFnQixDQUFDN2dCLENBQUMsQ0FBQyxJQUFFdVIsQ0FBQyxDQUFDaEMsU0FBUyxLQUFHa0MsQ0FBQyxJQUFFRixDQUFDLENBQUNyQixRQUFRLEtBQUdzQixDQUFDLElBQUVELENBQUMsQ0FBQ25CLEtBQUssS0FBR3lILENBQUMsSUFBRXRHLENBQUMsQ0FBQ2YsV0FBVyxLQUFHd0gsQ0FBQyxJQUFFekcsQ0FBQyxDQUFDZCxZQUFZLEtBQUcrQyxDQUFDLElBQUVqQyxDQUFDLENBQUNiLFVBQVUsS0FBR3FILENBQUMsSUFBRXhHLENBQUMsQ0FBQ1gsaUJBQWlCLEtBQUdnUSxDQUFDLEdBQUMsSUFBSSxDQUFDQyxnQkFBZ0IsRUFBRSxJQUFFdFAsQ0FBQyxDQUFDcEMsaUJBQWlCLEtBQUdtQyxDQUFDLElBQUUsSUFBSSxDQUFDc04sUUFBUSxDQUFDO1NBQUN6UCxpQkFBaUIsRUFBQ21DLENBQUFBO0FBQUMsUUFBQyxDQUFDLEVBQUNDLENBQUMsQ0FBQ3JDLFdBQVcsS0FBR3lELENBQUMsSUFBRSxJQUFJLENBQUNxTixPQUFPLENBQUNyTixDQUFDLEVBQUMxRCxPQUFPLENBQUN6QyxTQUFTLENBQUNELE1BQU0sQ0FBQyxDQUFDLEVBQUNnRixDQUFDLENBQUNaLFVBQVUsS0FBR21MLENBQUMsSUFBRXZLLENBQUMsQ0FBQ2pCLGFBQWEsS0FBRytILENBQUMsSUFBRTlHLENBQUMsQ0FBQ1QsYUFBYSxLQUFHZ0gsQ0FBQyxJQUFFdkcsQ0FBQyxDQUFDUixzQkFBc0IsS0FBR3hULENBQUMsSUFBRSxJQUFJLENBQUN1akIsaUJBQWlCLEVBQUUsRUFBQyxJQUFJLENBQUN4YSxLQUFLLENBQUMrSixrQkFBa0IsS0FBR2tCLENBQUMsQ0FBQ2xCLGtCQUFrQixJQUFFLElBQUksQ0FBQzBRLHFCQUFxQixFQUFFLENBQUE7QUFBQSxNQUFDLEVBQUN4UCxDQUFDLENBQUN4TSxTQUFTLENBQUNpYyxvQkFBb0IsR0FBQyxZQUFVO0FBQUMsT0FBQSxJQUFJLENBQUNWLHNCQUFzQixFQUFFLEVBQUMsSUFBSSxDQUFDVyx3QkFBd0IsRUFBRSxFQUFDLElBQUksQ0FBQ0MscUJBQXFCLEVBQUUsQ0FBQTtNQUFDLEVBQUNqbEIsTUFBTSxDQUFDQyxjQUFjLENBQUNxVixDQUFDLENBQUN4TSxTQUFTLEVBQUMsYUFBYSxFQUFDO09BQUNmLEdBQUcsRUFBQyxZQUFVO0FBQUMsU0FBQSxJQUFJdU4sQ0FBQyxHQUFDLElBQUksQ0FBQy9PLEtBQUs7V0FBQ3hDLENBQUMsR0FBQ3VSLENBQUMsQ0FBQ3FCLFlBQVk7V0FBQ3JCLENBQUMsR0FBQ0EsQ0FBQyxDQUFDckMsV0FBVztXQUFDM1IsQ0FBQyxHQUFDNkssS0FBSyxDQUFDMlIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDdlgsS0FBSyxDQUFDO1dBQUNtUSxDQUFDLEdBQUNwVixDQUFDLENBQUMwYyxtQkFBbUI7V0FBQzFjLENBQUMsR0FBQ0EsQ0FBQyxDQUFDeWMsbUJBQW1CLENBQUE7U0FBQyxPQUFNO1dBQUNGLElBQUksRUFBQ3ZJLENBQUM7V0FBQzRQLEtBQUssRUFBQy9ZLEtBQUssQ0FBQ3FSLG1CQUFtQixDQUFDOUcsQ0FBQyxFQUFDLElBQUksQ0FBQ25RLEtBQUssQ0FBQztXQUFDb1EsWUFBWSxFQUFDNVMsQ0FBQztXQUFDaWEsbUJBQW1CLEVBQUN0SCxDQUFDO1dBQUNxSCxtQkFBbUIsRUFBQ3pjLENBQUM7QUFBQzZqQixXQUFBQSxJQUFJLEVBQUNuUyxPQUFPLENBQUN6QyxTQUFTLENBQUNKLE1BQUFBO1VBQU8sQ0FBQTtRQUFDO09BQUN2TCxVQUFVLEVBQUMsQ0FBQyxDQUFDO09BQUNDLFlBQVksRUFBQyxDQUFDLENBQUE7TUFBRSxDQUFDLEVBQUM3RSxNQUFNLENBQUNDLGNBQWMsQ0FBQ3FWLENBQUMsQ0FBQ3hNLFNBQVMsRUFBQywyQkFBMkIsRUFBQztPQUFDZixHQUFHLEVBQUMsWUFBVTtBQUFDLFNBQUEsSUFBSXVOLENBQUMsR0FBQyxJQUFJLENBQUMvTyxLQUFLLENBQUNvUSxZQUFZO1dBQUM1UyxDQUFDLEdBQUMsSUFBSSxDQUFDc0csS0FBSztXQUFDL0ksQ0FBQyxHQUFDeUMsQ0FBQyxDQUFDcVAsYUFBYTtXQUFDc0QsQ0FBQyxHQUFDM1MsQ0FBQyxDQUFDd1EsV0FBVztXQUFDYyxDQUFDLEdBQUN0UixDQUFDLENBQUN5USxZQUFZO1dBQUN6USxDQUFDLEdBQUNBLENBQUMsQ0FBQ3VQLFNBQVMsQ0FBQTtTQUFDLE9BQU8sQ0FBQyxLQUFHZ0MsQ0FBQyxJQUFFaFUsQ0FBQyxLQUFHMFIsT0FBTyxDQUFDdEMsYUFBYSxDQUFDRixPQUFPLElBQUUsRUFBRWtHLENBQUMsSUFBRXJCLENBQUMsSUFBRXRSLENBQUMsQ0FBQyxDQUFBO1FBQUM7T0FBQ2EsVUFBVSxFQUFDLENBQUMsQ0FBQztPQUFDQyxZQUFZLEVBQUMsQ0FBQyxDQUFBO01BQUUsQ0FBQyxFQUFDN0UsTUFBTSxDQUFDQyxjQUFjLENBQUNxVixDQUFDLENBQUN4TSxTQUFTLEVBQUMsbUJBQW1CLEVBQUM7T0FBQ2YsR0FBRyxFQUFDLFlBQVU7QUFBQyxTQUFBLE9BQU8sS0FBSyxDQUFDLEtBQUcsSUFBSSxDQUFDK2Isc0JBQXNCLEdBQUMsSUFBSSxDQUFDQSxzQkFBc0IsR0FBQyxJQUFJLENBQUN2ZCxLQUFLLENBQUNrUixXQUFXLENBQUE7UUFBQztPQUFDN1MsVUFBVSxFQUFDLENBQUMsQ0FBQztPQUFDQyxZQUFZLEVBQUMsQ0FBQyxDQUFBO0FBQUMsTUFBQyxDQUFDLEVBQUN5USxDQUFDLENBQUN4TSxTQUFTLENBQUNpYixPQUFPLEdBQUMsVUFBU3pPLENBQUMsRUFBQ3ZSLENBQUMsRUFBQztBQUFDLE9BQUEsSUFBSXpDLENBQUMsRUFBQ29WLENBQUMsRUFBQ3JCLENBQUMsQ0FBQTtBQUFDLE9BQUEsS0FBSyxDQUFDLEtBQUdDLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ3lOLFlBQVksRUFBRSxFQUFDLElBQUksQ0FBQ3FDLHlCQUF5QixJQUFFOWpCLENBQUMsR0FBQzZLLEtBQUssQ0FBQytKLDJCQUEyQixDQUFDWixDQUFDLEVBQUMsSUFBSSxDQUFDL08sS0FBSyxDQUFDMFAsVUFBVSxDQUFDLEVBQUNTLENBQUMsR0FBQ3ZLLEtBQUssQ0FBQ3dMLDJCQUEyQixDQUFDclcsQ0FBQyxFQUFDLElBQUksQ0FBQ2lGLEtBQUssQ0FBQyxFQUFDOE8sQ0FBQyxHQUFDbEosS0FBSyxDQUFDdUwsd0JBQXdCLENBQUMsSUFBSSxDQUFDblIsS0FBSyxDQUFDLEVBQUMsSUFBSSxDQUFDOGUsY0FBYyxDQUFDO1NBQUNwUyxXQUFXLEVBQUMzUixDQUFDO1NBQUNvWixxQkFBcUIsRUFBQ3JGLENBQUM7U0FBQ3NGLHdCQUF3QixFQUFDakUsQ0FBQztTQUFDNE8sU0FBUyxFQUFDdmhCLENBQUFBO0FBQUMsUUFBQyxDQUFDLElBQUUsSUFBSSxDQUFDc2hCLGNBQWMsQ0FBQztTQUFDcFMsV0FBVyxFQUFDcUMsQ0FBQztTQUFDZ1EsU0FBUyxFQUFDdmhCLENBQUFBO0FBQUMsUUFBQyxDQUFDLENBQUE7TUFBQyxFQUFDdVIsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDeVosU0FBUyxHQUFDLFVBQVNqTixDQUFDLEVBQUM7QUFBQyxPQUFBLElBQUksQ0FBQ3lOLFlBQVksRUFBRSxFQUFDek4sQ0FBQyxJQUFFQSxDQUFDLENBQUNpUSxTQUFTLEtBQUcsSUFBSSxDQUFDcEMsYUFBYSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFBQyxPQUFBLElBQUlwZixDQUFDO1NBQUN6QyxDQUFDO1NBQUNnVSxDQUFDLEdBQUMsSUFBSSxDQUFDL08sS0FBSyxDQUFDME0sV0FBVyxHQUFDLENBQUMsQ0FBQTtPQUFDLElBQUksQ0FBQ21TLHlCQUF5QixJQUFFcmhCLENBQUMsR0FBQyxDQUFDLElBQUksQ0FBQ3dDLEtBQUssQ0FBQ3FSLFVBQVUsRUFBQ3RXLENBQUMsR0FBQzZLLEtBQUssQ0FBQ3VMLHdCQUF3QixDQUFDLElBQUksQ0FBQ25SLEtBQUssQ0FBQyxFQUFDLElBQUksQ0FBQzhlLGNBQWMsQ0FBQztTQUFDcFMsV0FBVyxFQUFDcUMsQ0FBQztTQUFDb0YscUJBQXFCLEVBQUNwWixDQUFDO1NBQUNxWix3QkFBd0IsRUFBQzVXLENBQUFBO0FBQUMsUUFBQyxDQUFDLElBQUUsSUFBSSxDQUFDc2hCLGNBQWMsQ0FBQztTQUFDcFMsV0FBVyxFQUFDcUMsQ0FBQUE7QUFBQyxRQUFDLENBQUMsQ0FBQTtNQUFDLEVBQUNBLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQzBaLFNBQVMsR0FBQyxVQUFTbE4sQ0FBQyxFQUFDO0FBQUMsT0FBQSxJQUFJLENBQUN5TixZQUFZLEVBQUUsRUFBQ3pOLENBQUMsSUFBRUEsQ0FBQyxDQUFDaVEsU0FBUyxLQUFHLElBQUksQ0FBQ3BDLGFBQWEsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQUMsT0FBQSxJQUFJcGYsQ0FBQztTQUFDekMsQ0FBQztTQUFDZ1UsQ0FBQyxHQUFDLElBQUksQ0FBQy9PLEtBQUssQ0FBQzBNLFdBQVcsR0FBQyxDQUFDLENBQUE7T0FBQyxJQUFJLENBQUNtUyx5QkFBeUIsSUFBRXJoQixDQUFDLEdBQUMsSUFBSSxDQUFDd0MsS0FBSyxDQUFDcVIsVUFBVSxFQUFDdFcsQ0FBQyxHQUFDNkssS0FBSyxDQUFDdUwsd0JBQXdCLENBQUMsSUFBSSxDQUFDblIsS0FBSyxDQUFDLEVBQUMsSUFBSSxDQUFDOGUsY0FBYyxDQUFDO1NBQUNwUyxXQUFXLEVBQUNxQyxDQUFDO1NBQUNvRixxQkFBcUIsRUFBQ3BaLENBQUM7U0FBQ3FaLHdCQUF3QixFQUFDNVcsQ0FBQUE7QUFBQyxRQUFDLENBQUMsSUFBRSxJQUFJLENBQUNzaEIsY0FBYyxDQUFDO1NBQUNwUyxXQUFXLEVBQUNxQyxDQUFBQTtBQUFDLFFBQUMsQ0FBQyxDQUFBO0FBQUEsTUFBQyxFQUFDQSxDQUFDLENBQUN4TSxTQUFTLENBQUMwYixrQkFBa0IsR0FBQyxZQUFVO09BQUNwYyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMrYixzQkFBc0IsQ0FBQyxFQUFDLElBQUksQ0FBQy9aLEtBQUssQ0FBQytKLGtCQUFrQixJQUFFaE0sTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDK1oscUJBQXFCLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQzlNLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ21jLHFCQUFxQixHQUFDLFlBQVU7QUFBQyxPQUFBLElBQUksQ0FBQzlDLGFBQWEsSUFBRSxJQUFJLENBQUNBLGFBQWEsQ0FBQ3ZULE9BQU8sRUFBRSxFQUFDeEcsTUFBTSxDQUFDRyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDNmIsc0JBQXNCLENBQUMsRUFBQ2hjLE1BQU0sQ0FBQ0csbUJBQW1CLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQzZaLHFCQUFxQixDQUFDLENBQUE7QUFBQSxNQUFDLEVBQUM5TSxDQUFDLENBQUN4TSxTQUFTLENBQUNnYyxxQkFBcUIsR0FBQyxZQUFVO09BQUMsSUFBSSxDQUFDemEsS0FBSyxDQUFDK0osa0JBQWtCLEdBQUNoTSxNQUFNLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMrWixxQkFBcUIsQ0FBQyxHQUFDaGEsTUFBTSxDQUFDRyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDNloscUJBQXFCLENBQUMsQ0FBQTtNQUFDLEVBQUM5TSxDQUFDLENBQUN4TSxTQUFTLENBQUNxYixhQUFhLEdBQUMsVUFBUzlPLENBQUMsRUFBQztPQUFDLE9BQU82TCxTQUFTLENBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssQ0FBQyxFQUFDLFlBQVU7QUFBQyxTQUFBLElBQUluZCxDQUFDLEVBQUN6QyxDQUFDLEVBQUNvVixDQUFDLENBQUE7QUFBQyxTQUFBLE9BQU84SyxXQUFXLENBQUMsSUFBSSxFQUFDLFVBQVNsTSxDQUFDLEVBQUM7V0FBQyxRQUFPQSxDQUFDLENBQUNtTSxLQUFLO0FBQUUsYUFBQSxLQUFLLENBQUM7ZUFBQyxPQUFNLENBQUNuZ0IsQ0FBQyxHQUFDLElBQUksQ0FBQytJLEtBQUssQ0FBQzRLLGFBQWEsRUFBQ3lCLENBQUMsR0FBQ3ZLLEtBQUssQ0FBQzRNLG9CQUFvQixDQUFDLElBQUksQ0FBQ3NLLFdBQVcsQ0FBQyxFQUFDLENBQUMvaEIsQ0FBQyxJQUFFNkssS0FBSyxDQUFDOE4sdUJBQXVCLEVBQUU1RSxDQUFDLEVBQUMsSUFBSSxDQUFDd08sdUJBQXVCLEVBQUNuTixDQUFDLENBQUMsS0FBRyxJQUFJLENBQUNzTyx3QkFBd0IsRUFBRSxFQUFDLElBQUksQ0FBQ25CLHVCQUF1QixHQUFDbk4sQ0FBQyxFQUFDcFYsQ0FBQyxHQUFDLElBQUksQ0FBQ2lGLEtBQUssRUFBQ21RLENBQUMsR0FBQ3BWLENBQUMsQ0FBQzJVLFVBQVUsRUFBQ2xTLENBQUMsR0FBQ3pDLENBQUMsQ0FBQ21iLGFBQWEsRUFBQ25iLENBQUMsR0FBQzZLLEtBQUssQ0FBQytKLDJCQUEyQixDQUFDLElBQUksQ0FBQzNQLEtBQUssQ0FBQzBNLFdBQVcsRUFBQ3lELENBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUN2SyxLQUFLLENBQUN3UCxxQkFBcUIsQ0FBQ3ZHLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMvSyxLQUFLLENBQUMsRUFBQztpQkFBQzRJLFdBQVcsRUFBQzNSLENBQUFBO0FBQUMsZ0JBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ2lpQixjQUFjLENBQUMsRUFBQ2ppQixDQUFDLEdBQUM2SyxLQUFLLENBQUMwTyxzQkFBc0IsQ0FBQ25FLENBQUMsQ0FBQ3pELFdBQVcsRUFBQ3lELENBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUN0QixRQUFRLENBQUNBLFFBQVEsQ0FBQyxFQUFFLEVBQUNzQixDQUFDLENBQUMsRUFBQztpQkFBQ2UsV0FBVyxFQUFDblcsQ0FBQztpQkFBQ21iLGFBQWEsRUFBQzFZLENBQUFBO2dCQUFFLENBQUMsRUFBQ29JLEtBQUssQ0FBQytOLE9BQU8sQ0FBQyxJQUFJLENBQUNxSixjQUFjLEVBQUM7aUJBQUN0WSxRQUFRLEVBQUMsQ0FBQzNKLENBQUFBO0FBQUMsZ0JBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ3FoQixRQUFRLENBQUNqTSxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0FBQUMsYUFBQSxLQUFLLENBQUM7ZUFBQ3BCLENBQUMsQ0FBQ29NLElBQUksRUFBRSxFQUFDLElBQUksQ0FBQzhELGNBQWMsRUFBRSxFQUFDLElBQUksQ0FBQzlCLG1CQUFtQixHQUFDLENBQUMsQ0FBQyxFQUFDM2YsQ0FBQyxJQUFFLElBQUksQ0FBQ2tmLFdBQVcsRUFBRSxFQUFDM04sQ0FBQyxDQUFDbU0sS0FBSyxHQUFDLENBQUMsQ0FBQTtBQUFDLGFBQUEsS0FBSyxDQUFDO2VBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQUE7QUFBQyxVQUFDLENBQUMsQ0FBQTtBQUFBLFFBQUMsQ0FBQyxDQUFBO01BQUMsRUFBQ25NLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ2tiLGdCQUFnQixHQUFDLFVBQVMxTyxDQUFDLEVBQUN2UixDQUFDLEVBQUM7QUFBQyxPQUFBLElBQUl6QyxDQUFDLEdBQUN5QyxDQUFDLENBQUNpRCxJQUFJO1NBQUMwUCxDQUFDLEdBQUMzUyxDQUFDLENBQUNnRCxJQUFJO1NBQUNzTyxDQUFDLEdBQUN0UixDQUFDLENBQUM4QyxNQUFNO0FBQUM5QyxTQUFBQSxDQUFDLEdBQUMsSUFBSSxDQUFDc0csS0FBSyxDQUFDcUssVUFBVTtTQUFDYyxDQUFDLEdBQUMsSUFBSSxDQUFDalAsS0FBSztTQUFDaVIsQ0FBQyxHQUFDaEMsQ0FBQyxDQUFDcUgsZUFBZTtTQUFDdEgsQ0FBQyxHQUFDQyxDQUFDLENBQUNtSCxhQUFhO1NBQUNmLENBQUMsR0FBQ3BHLENBQUMsQ0FBQ29ILGFBQWE7U0FBQ2IsQ0FBQyxHQUFDdkcsQ0FBQyxDQUFDdkIsUUFBUTtTQUFDdUIsQ0FBQyxHQUFDQSxDQUFDLENBQUNvRiwwQkFBMEIsQ0FBQTtPQUFDLElBQUcsSUFBSSxDQUFDdUksYUFBYSxHQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUzTixDQUFDLElBQUUsQ0FBQyxJQUFJLENBQUNtTyx5QkFBeUIsSUFBRXhYLEtBQUssQ0FBQzBMLDJCQUEyQixDQUFDbkIsQ0FBQyxFQUFDcFYsQ0FBQyxFQUFDeUMsQ0FBQyxDQUFDLENBQUMsRUFBQztBQUFDLFNBQUEsSUFBSSxDQUFDNGYseUJBQXlCLEtBQUcsSUFBSSxDQUFDcUIsd0JBQXdCLEVBQUUsRUFBQyxJQUFJLENBQUNTLHFCQUFxQixFQUFFLEVBQUMsSUFBSSxDQUFDL0IsbUJBQW1CLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDQyx5QkFBeUIsR0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMrQixrQkFBa0IsRUFBRSxDQUFDLENBQUE7U0FBQyxJQUFJbk8sQ0FBQyxHQUFDcEwsS0FBSyxDQUFDMk8sNkJBQTZCLENBQUN6RixDQUFDLEVBQUMsSUFBSSxDQUFDc1EsaUJBQWlCLENBQUMsQ0FBQTtTQUFDLElBQUcsQ0FBQyxDQUFDLEtBQUc1SixDQUFDLEVBQUMsT0FBT3hHLENBQUMsR0FBQ2dDLENBQUMsSUFBRUEsQ0FBQyxHQUFDLENBQUNxRSxDQUFDLEdBQUMsS0FBSyxDQUFDLEdBQUMsS0FBS3pQLEtBQUssQ0FBQytOLE9BQU8sQ0FBQyxJQUFJLENBQUNxSixjQUFjLEVBQUM7V0FBQ3RZLFFBQVEsRUFBQ3NNLENBQUFBO0FBQUMsVUFBQyxDQUFDLENBQUE7U0FBQyxJQUFHcEwsS0FBSyxDQUFDMEssOEJBQThCLENBQUNVLENBQUMsRUFBQ2hDLENBQUMsRUFBQ3FHLENBQUMsQ0FBQyxFQUFDLElBQUc7V0FBQyxDQUFDLFNBQVN0RyxDQUFDQSxHQUFFO0FBQUNuSixhQUFBQSxLQUFLLENBQUMySyxrQkFBa0IsQ0FBQ3pCLENBQUMsQ0FBQyxHQUFDa0MsQ0FBQyxJQUFFQyxDQUFDLEdBQUNELENBQUMsSUFBRSxDQUFDQyxDQUFDLENBQUE7YUFBQ3JMLEtBQUssQ0FBQzBLLDhCQUE4QixDQUFDVSxDQUFDLEVBQUNoQyxDQUFDLEVBQUNxRyxDQUFDLENBQUMsSUFBRXRHLENBQUMsRUFBRSxDQUFBO0FBQUEsWUFBQyxFQUFFLENBQUE7VUFBQyxDQUFBLE9BQU1BLENBQUMsRUFBQztBQUFDbkosV0FBQUEsS0FBSyxDQUFDbVIsS0FBSyxDQUFDaEksQ0FBQyxDQUFDLENBQUE7VUFBQTtBQUFDbkosU0FBQUEsS0FBSyxDQUFDK04sT0FBTyxDQUFDLElBQUksQ0FBQ3FKLGNBQWMsRUFBQztXQUFDdFksUUFBUSxFQUFDc00sQ0FBQUE7QUFBQyxVQUFDLENBQUMsQ0FBQTtRQUFBO01BQUUsRUFBQ2pDLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ21iLGVBQWUsR0FBQyxVQUFTM08sQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO0FBQUMsT0FBQSxJQUFJekMsQ0FBQztTQUFDb1YsQ0FBQztTQUFDckIsQ0FBQztTQUFDdFIsQ0FBQyxHQUFDQSxDQUFDLENBQUM4QyxNQUFNLENBQUE7QUFBQyxPQUFBLElBQUksQ0FBQytlLHVCQUF1QixFQUFFLEVBQUMsSUFBSSxDQUFDakMseUJBQXlCLEtBQUcsSUFBSSxDQUFDQSx5QkFBeUIsR0FBQyxDQUFDLENBQUMsRUFBQ3JpQixDQUFDLEdBQUMsSUFBSSxDQUFDaUYsS0FBSyxDQUFDMk0saUJBQWlCLEVBQUN3RCxDQUFDLEdBQUMsSUFBSSxDQUFDck0sS0FBSyxDQUFDOEksdUJBQXVCLEVBQUNrQyxDQUFDLEdBQUNsSixLQUFLLENBQUM2TyxxQkFBcUIsQ0FBQyxJQUFJLENBQUN1SSxjQUFjLENBQUMsRUFBQ3hmLENBQUMsR0FBQ29JLEtBQUssQ0FBQ2dMLHdCQUF3QixDQUFDLElBQUksQ0FBQzVRLEtBQUssRUFBQ3hDLENBQUMsRUFBQ3NSLENBQUMsQ0FBQyxFQUFDbEosS0FBSyxDQUFDK04sT0FBTyxDQUFDLElBQUksQ0FBQ3FKLGNBQWMsRUFBQztTQUFDdFksUUFBUSxFQUFDbEgsQ0FBQztTQUFDbVAsaUJBQWlCLEVBQUM1UixDQUFDO1NBQUM2Uix1QkFBdUIsRUFBQ3VELENBQUFBO1FBQUUsQ0FBQyxFQUFDLElBQUksQ0FBQ21QLHFCQUFxQixDQUFDOWhCLENBQUMsQ0FBQyxDQUFDLENBQUE7TUFBQyxFQUFDdVIsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDK2MscUJBQXFCLEdBQUMsVUFBU3JRLENBQUMsRUFBQztPQUFDLElBQUlGLENBQUMsR0FBQyxJQUFJO0FBQUN2UixTQUFBQSxDQUFDLEdBQUMsSUFBSSxDQUFDd0MsS0FBSyxDQUFDMk0saUJBQWlCLENBQUE7T0FBQyxJQUFJLENBQUM0UyxpQkFBaUIsR0FBQzFkLE1BQU0sQ0FBQ2lWLFVBQVUsQ0FBQyxZQUFVO1NBQUMsT0FBTzZELFNBQVMsQ0FBQzVMLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxZQUFVO0FBQUMsV0FBQSxJQUFJdlIsQ0FBQzthQUFDekMsQ0FBQzthQUFDb1YsQ0FBQzthQUFDckIsQ0FBQyxHQUFDLElBQUksQ0FBQTtBQUFDLFdBQUEsT0FBT21NLFdBQVcsQ0FBQyxJQUFJLEVBQUMsVUFBU2xNLENBQUMsRUFBQzthQUFDLFFBQU9BLENBQUMsQ0FBQ21NLEtBQUs7QUFBRSxlQUFBLEtBQUssQ0FBQztBQUFDLGlCQUFBLE9BQU8xZCxDQUFDLEdBQUNvSSxLQUFLLENBQUNtTCxxQkFBcUIsQ0FBQzlCLENBQUMsRUFBQyxJQUFJLENBQUNqUCxLQUFLLENBQUMsRUFBQ2pGLENBQUMsR0FBQzZLLEtBQUssQ0FBQzBPLHNCQUFzQixDQUFDOVcsQ0FBQyxFQUFDLElBQUksQ0FBQ3dDLEtBQUssQ0FBQyxFQUFDNEYsS0FBSyxDQUFDK04sT0FBTyxDQUFDLElBQUksQ0FBQ3FKLGNBQWMsRUFBQzttQkFBQ3RZLFFBQVEsRUFBQyxDQUFDM0osQ0FBQUE7QUFBQyxrQkFBQyxDQUFDLEVBQUNvVixDQUFDLEdBQUN2SyxLQUFLLENBQUNvTyxxQkFBcUIsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ29JLFFBQVEsQ0FBQzttQkFBQzFQLFdBQVcsRUFBQ2xQLENBQUM7bUJBQUMwVCxXQUFXLEVBQUNuVyxDQUFDO21CQUFDOFksVUFBVSxFQUFDMUQsQ0FBQUE7a0JBQUUsQ0FBQyxDQUFDLENBQUE7QUFBQyxlQUFBLEtBQUssQ0FBQztpQkFBQyxPQUFPcEIsQ0FBQyxDQUFDb00sSUFBSSxFQUFFLEVBQUNxRSxxQkFBcUIsQ0FBQyxZQUFVO21CQUFDLE9BQU8xUSxDQUFDLENBQUN1TixtQkFBbUIsRUFBRSxDQUFBO0FBQUEsa0JBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Y0FBQTtBQUFDLFlBQUMsQ0FBQyxDQUFBO0FBQUEsVUFBQyxDQUFDLENBQUE7UUFBQyxFQUFDN2UsQ0FBQyxDQUFDLENBQUE7TUFBQyxFQUFDdVIsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDdWMsY0FBYyxHQUFDLFVBQVMvUCxDQUFDLEVBQUM7QUFBQyxPQUFBLElBQUl2UixDQUFDLEdBQUN1UixDQUFDLENBQUNyQyxXQUFXO1NBQUN1RSxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUd6VCxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDO1NBQUNBLENBQUMsR0FBQ3VSLENBQUMsQ0FBQ29GLHFCQUFxQjtTQUFDbkYsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHeFIsQ0FBQyxHQUFDLElBQUksR0FBQ0EsQ0FBQztTQUFDQSxDQUFDLEdBQUN1UixDQUFDLENBQUNxRix3QkFBd0I7U0FBQ2lCLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBRzdYLENBQUMsR0FBQyxJQUFJLEdBQUNBLENBQUM7U0FBQ2dZLENBQUMsR0FBQ3pHLENBQUMsQ0FBQ2dRLFNBQVMsQ0FBQTtPQUFDLE9BQU9wRSxTQUFTLENBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssQ0FBQyxFQUFDLFlBQVU7QUFBQyxTQUFBLElBQUluZCxDQUFDO1dBQUN6QyxDQUFDO1dBQUNvVixDQUFDO1dBQUNyQixDQUFDO1dBQUNHLENBQUMsR0FBQyxJQUFJLENBQUE7QUFBQyxTQUFBLE9BQU9nTSxXQUFXLENBQUMsSUFBSSxFQUFDLFVBQVNsTSxDQUFDLEVBQUM7V0FBQyxRQUFPQSxDQUFDLENBQUNtTSxLQUFLO0FBQUUsYUFBQSxLQUFLLENBQUM7QUFBQyxlQUFBLE9BQU0sQ0FBQ25nQixDQUFDLEdBQUMsSUFBSSxDQUFDK0ksS0FBSyxFQUFDcU0sQ0FBQyxHQUFDcFYsQ0FBQyxDQUFDMlMsUUFBUSxFQUFDM1MsQ0FBQyxHQUFDQSxDQUFDLENBQUM2Uix1QkFBdUIsRUFBQ3BQLENBQUMsR0FBQyxJQUFJLENBQUN3QyxLQUFLLEVBQUM4TyxDQUFDLEdBQUN0UixDQUFDLENBQUNrUyxVQUFVLEVBQUNsUyxDQUFDLEdBQUNBLENBQUMsQ0FBQ21QLGlCQUFpQixFQUFDLElBQUksQ0FBQ3dRLG1CQUFtQixJQUFFLElBQUksQ0FBQ25kLEtBQUssQ0FBQzBNLFdBQVcsS0FBR3VFLENBQUMsSUFBRSxDQUFDZCxDQUFDLElBQUV2SyxLQUFLLENBQUNpSywwQkFBMEIsQ0FBQ29CLENBQUMsRUFBQ25DLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDcU8sbUJBQW1CLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDc0Isd0JBQXdCLEVBQUUsRUFBQyxJQUFJLENBQUNVLGtCQUFrQixDQUFDM0osQ0FBQyxDQUFDLEVBQUNyRixDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUNyQixDQUFDLEdBQUNsSixLQUFLLENBQUMwTyxzQkFBc0IsQ0FBQ3JELENBQUMsRUFBQyxJQUFJLENBQUNqUixLQUFLLENBQUMsRUFBQ2pGLENBQUMsR0FBQyxJQUFJLEtBQUdpVSxDQUFDLElBQUUsSUFBSSxLQUFHcUcsQ0FBQyxJQUFFbEYsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDdkssS0FBSyxDQUFDb08scUJBQXFCLEVBQUUsSUFBRXBPLEtBQUssQ0FBQ29PLHFCQUFxQixDQUFDO2lCQUFDckgsaUJBQWlCLEVBQUNuUCxDQUFDO2lCQUFDb1AsdUJBQXVCLEVBQUM3UixDQUFBQTtnQkFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDcWhCLFFBQVEsQ0FBQztpQkFBQzFQLFdBQVcsRUFBQ3VFLENBQUM7aUJBQUM0QyxVQUFVLEVBQUM5WSxDQUFDO2lCQUFDbVcsV0FBVyxFQUFDcEMsQ0FBQztpQkFBQ25DLGlCQUFpQixFQUFDblAsQ0FBQztpQkFBQzJXLHFCQUFxQixFQUFDbkYsQ0FBQztpQkFBQ29GLHdCQUF3QixFQUFDaUIsQ0FBQztpQkFBQ2hCLDBCQUEwQixFQUFDbEUsQ0FBQUE7Z0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUFDLGFBQUEsS0FBSyxDQUFDO0FBQUMsZUFBQSxPQUFPcEIsQ0FBQyxDQUFDb00sSUFBSSxFQUFFLEVBQUMsSUFBSSxDQUFDc0UsaUJBQWlCLEdBQUM1ZCxNQUFNLENBQUNpVixVQUFVLENBQUMsWUFBVTtBQUFDLGlCQUFBLE9BQU83SCxDQUFDLENBQUNpTixxQkFBcUIsQ0FBQzFHLENBQUMsQ0FBQyxDQUFBO0FBQUEsZ0JBQUMsRUFBQ2hZLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFBQTtBQUFDLFVBQUMsQ0FBQyxDQUFBO0FBQUEsUUFBQyxDQUFDLENBQUE7TUFBQyxFQUFDdVIsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDNFosMEJBQTBCLEdBQUMsVUFBU3JOLENBQUMsRUFBQztPQUFDLE9BQU82TCxTQUFTLENBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssQ0FBQyxFQUFDLFlBQVU7QUFBQyxTQUFBLElBQUluZCxDQUFDLEVBQUN6QyxDQUFDLEVBQUNvVixDQUFDLENBQUE7QUFBQyxTQUFBLE9BQU84SyxXQUFXLENBQUMsSUFBSSxFQUFDLFVBQVNsTSxDQUFDLEVBQUM7V0FBQyxRQUFPQSxDQUFDLENBQUNtTSxLQUFLO0FBQUUsYUFBQSxLQUFLLENBQUM7ZUFBQyxPQUFPMWQsQ0FBQyxHQUFDLElBQUksQ0FBQ3dDLEtBQUssQ0FBQzJNLGlCQUFpQixFQUFDNVIsQ0FBQyxHQUFDNkssS0FBSyxDQUFDME8sc0JBQXNCLENBQUN4RixDQUFDLEVBQUMsSUFBSSxDQUFDOU8sS0FBSyxDQUFDLEVBQUNtUSxDQUFDLEdBQUN2SyxLQUFLLENBQUNvTyxxQkFBcUIsQ0FBQztpQkFBQ3JILGlCQUFpQixFQUFDLENBQUE7Z0JBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ3lQLFFBQVEsQ0FBQztpQkFBQzFQLFdBQVcsRUFBQ29DLENBQUM7aUJBQUNvQyxXQUFXLEVBQUNuVyxDQUFDO2lCQUFDOFksVUFBVSxFQUFDMUQsQ0FBQztpQkFBQ3hELGlCQUFpQixFQUFDblAsQ0FBQztpQkFBQzJXLHFCQUFxQixFQUFDLElBQUk7aUJBQUNDLHdCQUF3QixFQUFDLElBQUk7aUJBQUNDLDBCQUEwQixFQUFDLENBQUMsQ0FBQTtnQkFBRSxDQUFDLENBQUMsQ0FBQTtBQUFDLGFBQUEsS0FBSyxDQUFDO2VBQUMsT0FBT3RGLENBQUMsQ0FBQ29NLElBQUksRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFBQTtBQUFDLFVBQUMsQ0FBQyxDQUFBO0FBQUEsUUFBQyxDQUFDLENBQUE7QUFBQSxNQUFDLEVBQUNwTSxDQUFDLENBQUN4TSxTQUFTLENBQUMwYyxjQUFjLEdBQUMsWUFBVTtPQUFDLElBQUksQ0FBQ25iLEtBQUssQ0FBQzJLLFNBQVMsSUFBRSxJQUFJLENBQUMzSyxLQUFLLENBQUMySyxTQUFTLENBQUNJLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUM2USxXQUFXLENBQUMsRUFBQztBQUFDZCxTQUFBQSxJQUFJLEVBQUNuUyxPQUFPLENBQUN6QyxTQUFTLENBQUNGLE1BQUFBO1FBQU8sQ0FBQyxDQUFDLENBQUE7TUFBQyxFQUFDaUYsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDNGMsa0JBQWtCLEdBQUMsVUFBU3BRLENBQUMsRUFBQztPQUFDLElBQUksQ0FBQ2pMLEtBQUssQ0FBQzZLLGFBQWEsS0FBR0ksQ0FBQyxHQUFDQSxDQUFDLEdBQUNGLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUM2USxXQUFXLENBQUMsRUFBQztTQUFDZCxJQUFJLEVBQUM3UCxDQUFBQTtBQUFDLFFBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQzJRLFdBQVcsRUFBQyxJQUFJLENBQUM1YixLQUFLLENBQUM2SyxhQUFhLENBQUNJLENBQUMsQ0FBQyxDQUFDLENBQUE7TUFBQyxFQUFDQSxDQUFDLENBQUN4TSxTQUFTLENBQUM4WixtQkFBbUIsR0FBQyxVQUFTcE4sQ0FBQyxFQUFDO09BQUMsT0FBTzBMLFNBQVMsQ0FBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUMsWUFBVTtTQUFDLElBQUluZCxDQUFDLEVBQUN6QyxDQUFDLEVBQUNvVixDQUFDLEVBQUNyQixDQUFDLENBQUE7QUFBQyxTQUFBLE9BQU9tTSxXQUFXLENBQUMsSUFBSSxFQUFDLFVBQVNsTSxDQUFDLEVBQUM7V0FBQyxRQUFPQSxDQUFDLENBQUNtTSxLQUFLO0FBQUUsYUFBQSxLQUFLLENBQUM7ZUFBQyxPQUFNLENBQUNuZ0IsQ0FBQyxHQUFDLElBQUksQ0FBQ2lGLEtBQUssRUFBQ3hDLENBQUMsR0FBQ3pDLENBQUMsQ0FBQ21iLGFBQWEsRUFBQ25iLENBQUMsR0FBQ0EsQ0FBQyxDQUFDb2IsMEJBQTBCLEVBQUNoRyxDQUFDLEdBQUMsSUFBSSxDQUFDck0sS0FBSyxFQUFDZ0wsQ0FBQyxHQUFDcUIsQ0FBQyxDQUFDL0MsZ0JBQWdCLEVBQUMrQyxDQUFDLEdBQUNBLENBQUMsQ0FBQ3ZCLGNBQWMsRUFBQ2hKLEtBQUssQ0FBQ3VTLDRCQUE0QixDQUFDckosQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDOE4sYUFBYSxJQUFFLENBQUM3aEIsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ3FoQixRQUFRLENBQUM7aUJBQUNqRywwQkFBMEIsRUFBQyxDQUFDLENBQUM7aUJBQUNELGFBQWEsRUFBQyxDQUFDLENBQUE7Z0JBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7QUFBQyxhQUFBLEtBQUssQ0FBQztlQUFDLE9BQU9uSCxDQUFDLENBQUNvTSxJQUFJLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUFDLGFBQUEsS0FBSyxDQUFDO2VBQUMzZCxDQUFDLElBQUUsSUFBSSxDQUFDa2YsV0FBVyxFQUFFLEVBQUMzTixDQUFDLENBQUNtTSxLQUFLLEdBQUMsQ0FBQyxDQUFBO0FBQUMsYUFBQSxLQUFLLENBQUM7ZUFBQyxPQUFPLElBQUksQ0FBQ2lDLG1CQUFtQixHQUFDLENBQUMsQ0FBQyxFQUFDaE4sQ0FBQyxLQUFHckIsQ0FBQyxHQUFDRyxDQUFDLEdBQUNKLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUM2USxXQUFXLENBQUMsRUFBQztpQkFBQ2QsSUFBSSxFQUFDM1AsQ0FBQUE7QUFBQyxnQkFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDeVEsV0FBVyxFQUFDdlAsQ0FBQyxDQUFDckIsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQUE7QUFBQyxVQUFDLENBQUMsQ0FBQTtBQUFBLFFBQUMsQ0FBQyxDQUFBO01BQUMsRUFBQ0MsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDb2IsZUFBZSxHQUFDLFVBQVM1TyxDQUFDLEVBQUM7T0FBQyxJQUFJLENBQUM2TixhQUFhLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDWSxPQUFPLENBQUN6TyxDQUFDLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQ0EsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDbWEsV0FBVyxHQUFDLFlBQVU7T0FBQyxJQUFJLENBQUNpRCxvQkFBb0IsRUFBRSxDQUFBO0FBQUEsTUFBQyxFQUFDNVEsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDa2Msd0JBQXdCLEdBQUMsWUFBVTtBQUFDLE9BQUEsSUFBSSxDQUFDOUIscUJBQXFCLEVBQUUsRUFBQyxJQUFJLENBQUNpRCxxQkFBcUIsRUFBRSxFQUFDLElBQUksQ0FBQ0Msb0JBQW9CLEVBQUUsQ0FBQTtBQUFBLE1BQUMsRUFBQzlRLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ29hLHFCQUFxQixHQUFDLFlBQVU7QUFBQzlhLE9BQUFBLE1BQU0sQ0FBQ2dWLFlBQVksQ0FBQyxJQUFJLENBQUNpSixpQkFBaUIsQ0FBQyxFQUFDLElBQUksQ0FBQ0EsaUJBQWlCLEdBQUMsS0FBSyxDQUFDLENBQUE7QUFBQSxNQUFDLEVBQUMvUSxDQUFDLENBQUN4TSxTQUFTLENBQUNxZCxxQkFBcUIsR0FBQyxZQUFVO09BQUMvSSxZQUFZLENBQUMsSUFBSSxDQUFDNEksaUJBQWlCLENBQUMsRUFBQyxJQUFJLENBQUNBLGlCQUFpQixHQUFDLEtBQUssQ0FBQyxDQUFBO0FBQUEsTUFBQyxFQUFDMVEsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDc2Qsb0JBQW9CLEdBQUMsWUFBVTtPQUFDaEosWUFBWSxDQUFDLElBQUksQ0FBQzBJLGlCQUFpQixDQUFDLEVBQUMsSUFBSSxDQUFDQSxpQkFBaUIsR0FBQyxLQUFLLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQ3hRLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQzhjLHVCQUF1QixHQUFDLFlBQVU7QUFBQyxPQUFBLElBQUksQ0FBQzlCLHNCQUFzQixHQUFDLEtBQUssQ0FBQyxDQUFBO0FBQUEsTUFBQyxFQUFDeE8sQ0FBQyxDQUFDeE0sU0FBUyxDQUFDMmMscUJBQXFCLEdBQUMsWUFBVTtPQUFDLElBQUluUSxDQUFDLEdBQUNuSixLQUFLLENBQUM2TyxxQkFBcUIsQ0FBQyxJQUFJLENBQUN1SSxjQUFjLENBQUMsQ0FBQTtBQUFDLE9BQUEsSUFBSSxDQUFDTyxzQkFBc0IsR0FBQyxDQUFDeE8sQ0FBQyxDQUFBO0FBQUEsTUFBQyxFQUFDQSxDQUFDLENBQUN4TSxTQUFTLENBQUN5YixnQkFBZ0IsR0FBQyxZQUFVO09BQUMsT0FBT3JELFNBQVMsQ0FBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUMsWUFBVTtTQUFDLElBQUluZCxDQUFDLENBQUE7QUFBQyxTQUFBLE9BQU95ZCxXQUFXLENBQUMsSUFBSSxFQUFDLFVBQVNsTSxDQUFDLEVBQUM7V0FBQyxRQUFPQSxDQUFDLENBQUNtTSxLQUFLO0FBQUUsYUFBQSxLQUFLLENBQUM7QUFBQyxlQUFBLE9BQU8xZCxDQUFDLEdBQUNvSSxLQUFLLENBQUN3UCxxQkFBcUIsQ0FBQyxJQUFJLENBQUN0UixLQUFLLEVBQUMsSUFBSSxDQUFDa1osY0FBYyxDQUFDLEVBQUMsSUFBSSxDQUFDTSx1QkFBdUIsR0FBQzFYLEtBQUssQ0FBQzRNLG9CQUFvQixDQUFDLElBQUksQ0FBQ3NLLFdBQVcsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ1YsUUFBUSxDQUFDNWUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUFDLGFBQUEsS0FBSyxDQUFDO0FBQUMsZUFBQSxPQUFPdVIsQ0FBQyxDQUFDb00sSUFBSSxFQUFFLEVBQUMsSUFBSSxDQUFDclgsS0FBSyxDQUFDMEssYUFBYSxJQUFFLElBQUksQ0FBQzFLLEtBQUssQ0FBQzBLLGFBQWEsQ0FBQ0ssUUFBUSxDQUFDQSxRQUFRLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQzZRLFdBQVcsQ0FBQyxFQUFDO0FBQUNkLGlCQUFBQSxJQUFJLEVBQUNuUyxPQUFPLENBQUN6QyxTQUFTLENBQUNILElBQUFBO0FBQUksZ0JBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUFBO0FBQUMsVUFBQyxDQUFDLENBQUE7QUFBQSxRQUFDLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQ2tGLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ29kLG9CQUFvQixHQUFDLFlBQVU7T0FBQyxJQUFJNVEsQ0FBQyxHQUFDLElBQUk7U0FBQ3ZSLENBQUMsR0FBQyxJQUFJLENBQUNzRyxLQUFLO1NBQUMvSSxDQUFDLEdBQUN5QyxDQUFDLENBQUMwUCxpQkFBaUI7U0FBQzFQLENBQUMsR0FBQ0EsQ0FBQyxDQUFDMlAsZ0JBQWdCLENBQUE7T0FBQyxJQUFJLENBQUMyUyxpQkFBaUIsR0FBQ2plLE1BQU0sQ0FBQ2lWLFVBQVUsQ0FBQyxZQUFVO1NBQUMvSCxDQUFDLENBQUN3TixTQUFTLEtBQUd4aEIsQ0FBQyxLQUFHMFIsT0FBTyxDQUFDN0IsaUJBQWlCLENBQUNGLEdBQUcsR0FBQ3FFLENBQUMsQ0FBQ2lOLFNBQVMsRUFBRSxHQUFDak4sQ0FBQyxDQUFDa04sU0FBUyxFQUFFLENBQUMsQ0FBQTtRQUFDLEVBQUN6ZSxDQUFDLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQ3VSLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQzJiLG1CQUFtQixHQUFDLFlBQVU7T0FBQyxJQUFJLENBQUN0QyxhQUFhLEdBQUMsSUFBSUosZUFBZSxDQUFDL0MsT0FBTyxDQUFDO1NBQUMxVSxPQUFPLEVBQUMsSUFBSSxDQUFDK1ksV0FBVztBQUFDbmdCLFNBQUFBLEtBQUssRUFBQyxJQUFJLENBQUNtSCxLQUFLLENBQUNxSyxVQUFVO1NBQUNoRixTQUFTLEVBQUMsSUFBSSxDQUFDc1UsZ0JBQWdCO1NBQUNqVSxRQUFRLEVBQUMsSUFBSSxDQUFDa1UsZUFBZTtTQUFDMVosYUFBYSxFQUFDLENBQUM7QUFBQ0MsU0FBQUEsb0JBQW9CLEVBQUMsSUFBSSxDQUFDSCxLQUFLLENBQUNnSyxhQUFhO0FBQUM1SixTQUFBQSxvQkFBb0IsRUFBQyxJQUFJLENBQUNKLEtBQUssQ0FBQ3dLLGFBQWE7QUFBQ25LLFNBQUFBLDRCQUE0QixFQUFDLENBQUMsSUFBSSxDQUFDTCxLQUFLLENBQUN5SyxzQkFBc0I7U0FBQ25LLDJCQUEyQixFQUFDLENBQUMsQ0FBQTtRQUFFLENBQUMsRUFBQyxJQUFJLENBQUN3WCxhQUFhLENBQUM5VCxJQUFJLEVBQUUsQ0FBQTtNQUFDLEVBQUNpSCxDQUFDLENBQUN4TSxTQUFTLENBQUM4YixnQkFBZ0IsR0FBQyxVQUFTdFAsQ0FBQyxFQUFDO09BQUMsSUFBSXZSLENBQUMsR0FBQyxJQUFJLENBQUE7QUFBQyxPQUFBLEtBQUssQ0FBQyxLQUFHdVIsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsSUFBSSxDQUFDakwsS0FBSyxDQUFDLEVBQUMsSUFBSSxDQUFDMmEsd0JBQXdCLEVBQUUsRUFBQyxJQUFJLENBQUN0QixtQkFBbUIsR0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNuZCxLQUFLLENBQUNrVyxhQUFhLElBQUUsSUFBSSxDQUFDd0csV0FBVyxFQUFFLEVBQUMsSUFBSSxDQUFDTixRQUFRLENBQUM7QUFBQ3JHLFNBQUFBLE1BQU0sRUFBQ25RLEtBQUssQ0FBQ2lNLFlBQVksQ0FBQzlDLENBQUMsQ0FBQTtBQUFDLFFBQUMsQ0FBQyxFQUFDeVEscUJBQXFCLENBQUMsWUFBVTtBQUFDaGlCLFNBQUFBLENBQUMsQ0FBQzRlLFFBQVEsQ0FBQ3hXLEtBQUssQ0FBQ3dQLHFCQUFxQixDQUFDckcsQ0FBQyxFQUFDdlIsQ0FBQyxDQUFDd2YsY0FBYyxDQUFDLENBQUMsQ0FBQTtBQUFBLFFBQUMsQ0FBQyxDQUFBO0FBQUEsTUFBQyxFQUFDak8sQ0FBQyxDQUFDeE0sU0FBUyxDQUFDK2IsaUJBQWlCLEdBQUMsWUFBVTtPQUFDLElBQUksQ0FBQzFDLGFBQWEsSUFBRSxJQUFJLENBQUNBLGFBQWEsQ0FBQzNULE1BQU0sQ0FBQztBQUFDdEwsU0FBQUEsS0FBSyxFQUFDLElBQUksQ0FBQ21ILEtBQUssQ0FBQ3FLLFVBQVU7QUFBQ2xLLFNBQUFBLG9CQUFvQixFQUFDLElBQUksQ0FBQ0gsS0FBSyxDQUFDZ0ssYUFBYTtBQUFDNUosU0FBQUEsb0JBQW9CLEVBQUMsSUFBSSxDQUFDSixLQUFLLENBQUN3SyxhQUFhO0FBQUNuSyxTQUFBQSw0QkFBNEIsRUFBQyxDQUFDLElBQUksQ0FBQ0wsS0FBSyxDQUFDeUssc0JBQUFBO0FBQXNCLFFBQUMsQ0FBQyxDQUFBO0FBQUEsTUFBQyxFQUFDUSxDQUFDLENBQUN4TSxTQUFTLENBQUN3ZCxxQkFBcUIsR0FBQyxZQUFVO0FBQUMsT0FBQSxJQUFJaFIsQ0FBQyxHQUFDLElBQUksQ0FBQ2pMLEtBQUs7U0FBQ3RHLENBQUMsR0FBQ3VSLENBQUMsQ0FBQ3NLLGNBQWM7U0FBQ3RLLENBQUMsR0FBQ0EsQ0FBQyxDQUFDekIsZ0JBQWdCLENBQUE7T0FBQyxPQUFPb0wsT0FBTyxDQUFDRCxPQUFPLENBQUMxRCxhQUFhLENBQUMyRyxLQUFLLENBQUN6QyxjQUFjLEVBQUM7U0FBQ2paLEtBQUssRUFBQyxJQUFJLENBQUNBLEtBQUs7U0FBQ2taLE9BQU8sRUFBQyxJQUFJLENBQUN5RSxlQUFlO1NBQUN0RSxjQUFjLEVBQUM3YixDQUFDO1NBQUM4UCxnQkFBZ0IsRUFBQ3lCLENBQUFBO0FBQUMsUUFBQyxDQUFDLENBQUE7QUFBQSxNQUFDLEVBQUNBLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ3lkLGlCQUFpQixHQUFDLFlBQVU7QUFBQyxPQUFBLElBQUlqUixDQUFDLEdBQUMsSUFBSSxDQUFDakwsS0FBSyxDQUFDZ1csZ0JBQWdCO1NBQUN0YyxDQUFDLEdBQUNvSSxLQUFLLENBQUMyUixnQkFBZ0IsQ0FBQyxJQUFJLENBQUN2WCxLQUFLLENBQUMsQ0FBQ3dYLG1CQUFtQixDQUFBO09BQUMsT0FBT2tCLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDMUQsYUFBYSxDQUFDMkcsS0FBSyxDQUFDOUIsY0FBYyxFQUFDO1NBQUM3TCxJQUFJLEVBQUMsTUFBTTtTQUFDbUwsT0FBTyxFQUFDLElBQUksQ0FBQzhDLFNBQVM7U0FBQ25DLFVBQVUsRUFBQ3JjLENBQUM7U0FBQ3NjLGdCQUFnQixFQUFDL0ssQ0FBQUE7QUFBQyxRQUFDLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQ0EsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDMGQsaUJBQWlCLEdBQUMsWUFBVTtBQUFDLE9BQUEsSUFBSWxSLENBQUMsR0FBQyxJQUFJLENBQUNqTCxLQUFLLENBQUNpVyxnQkFBZ0I7U0FBQ3ZjLENBQUMsR0FBQ29JLEtBQUssQ0FBQzJSLGdCQUFnQixDQUFDLElBQUksQ0FBQ3ZYLEtBQUssQ0FBQyxDQUFDeVgsbUJBQW1CLENBQUE7T0FBQyxPQUFPaUIsT0FBTyxDQUFDRCxPQUFPLENBQUMxRCxhQUFhLENBQUMyRyxLQUFLLENBQUM5QixjQUFjLEVBQUM7U0FBQzdMLElBQUksRUFBQyxNQUFNO1NBQUNtTCxPQUFPLEVBQUMsSUFBSSxDQUFDK0MsU0FBUztTQUFDcEMsVUFBVSxFQUFDcmMsQ0FBQztTQUFDdWMsZ0JBQWdCLEVBQUNoTCxDQUFBQTtBQUFDLFFBQUMsQ0FBQyxDQUFBO0FBQUEsTUFBQyxFQUFDQSxDQUFDLENBQUN4TSxTQUFTLENBQUMyZCxzQkFBc0IsR0FBQyxZQUFVO0FBQUMsT0FBQSxJQUFJblIsQ0FBQyxHQUFDLElBQUksQ0FBQ2pMLEtBQUssQ0FBQzZWLHFCQUFxQjtBQUFDbmMsU0FBQUEsQ0FBQyxHQUFDLElBQUksQ0FBQ3dDLEtBQUssQ0FBQ2tXLGFBQWEsQ0FBQTtPQUFDLE9BQU93QyxPQUFPLENBQUNELE9BQU8sQ0FBQzFELGFBQWEsQ0FBQzJHLEtBQUssQ0FBQ2pDLGVBQWUsRUFBQztTQUFDQyxTQUFTLEVBQUNsYyxDQUFDO1NBQUMwYixPQUFPLEVBQUMsSUFBSSxDQUFDNkMsc0JBQXNCO1NBQUNwQyxxQkFBcUIsRUFBQzVLLENBQUFBO0FBQUMsUUFBQyxDQUFDLENBQUE7QUFBQSxNQUFDLEVBQUNBLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQzRkLE1BQU0sR0FBQyxZQUFVO0FBQUMsT0FBQSxJQUFJcFIsQ0FBQyxHQUFDLElBQUksQ0FBQy9PLEtBQUs7U0FBQ3hDLENBQUMsR0FBQ3VSLENBQUMsQ0FBQ21DLFdBQVc7U0FBQ25XLENBQUMsR0FBQ2dVLENBQUMsQ0FBQ2dILE1BQU07U0FBQzVGLENBQUMsR0FBQ3BCLENBQUMsQ0FBQzhFLFVBQVU7U0FBQzlFLENBQUMsR0FBQ0EsQ0FBQyxDQUFDd0gsU0FBUztBQUFDekgsU0FBQUEsQ0FBQyxHQUFDbEosS0FBSyxDQUFDZ1MsaUJBQWlCLENBQUMsSUFBSSxDQUFDOVQsS0FBSyxFQUFDLElBQUksQ0FBQzlELEtBQUssQ0FBQztBQUFDaVAsU0FBQUEsQ0FBQyxHQUFDckosS0FBSyxDQUFDaVMsb0JBQW9CLENBQUMsSUFBSSxDQUFDL1QsS0FBSyxFQUFDLElBQUksQ0FBQzlELEtBQUssQ0FBQztBQUFDaVIsU0FBQUEsQ0FBQyxHQUFDckwsS0FBSyxDQUFDbU8sc0JBQXNCLENBQUMsSUFBSSxDQUFDalEsS0FBSyxFQUFDLElBQUksQ0FBQzlELEtBQUssRUFBQyxJQUFJLENBQUNnZCxjQUFjLENBQUM7QUFBQ3hmLFNBQUFBLENBQUMsR0FBQ29JLEtBQUssQ0FBQ3FPLG9CQUFvQixDQUFDO1dBQUMvQyxXQUFXLEVBQUMxVCxDQUFBQTtBQUFDLFVBQUMsRUFBQztXQUFDcVcsVUFBVSxFQUFDMUQsQ0FBQUE7QUFBQyxVQUFDLENBQUM7QUFBQ0EsU0FBQUEsQ0FBQyxHQUFDLElBQUksQ0FBQ3JNLEtBQUssQ0FBQ3VLLGFBQWEsSUFBRVUsQ0FBQyxHQUFDLEVBQUUsR0FBQ3RDLE9BQU8sQ0FBQ0QsU0FBUyxDQUFDRixHQUFHO0FBQUN5QyxTQUFBQSxDQUFDLEdBQUNuSixLQUFLLENBQUNvUCxnQkFBZ0IsQ0FBQ3ZJLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDakIsSUFBSSxFQUFDcUYsQ0FBQyxDQUFDLENBQUE7T0FBQyxPQUFPdUksT0FBTyxDQUFDRCxPQUFPLENBQUMxRCxhQUFhLENBQUMsS0FBSyxFQUFDO1NBQUMrRCxTQUFTLEVBQUMvSixDQUFBQTtRQUFFLEVBQUMySixPQUFPLENBQUNELE9BQU8sQ0FBQzFELGFBQWEsQ0FBQyxLQUFLLEVBQUM7U0FBQ3FMLEdBQUcsRUFBQyxJQUFJLENBQUN2RCxvQkFBQUE7UUFBcUIsRUFBQ25FLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDMUQsYUFBYSxDQUFDLEtBQUssRUFBQztTQUFDbkIsS0FBSyxFQUFDM0MsQ0FBQztBQUFDNkgsU0FBQUEsU0FBUyxFQUFDck0sT0FBTyxDQUFDVixVQUFVLENBQUNoQixPQUFPO1NBQUNvTyxZQUFZLEVBQUMsSUFBSSxDQUFDbUQsaUJBQWlCO1NBQUNsRCxZQUFZLEVBQUMsSUFBSSxDQUFDcUQsaUJBQUFBO1FBQWtCLEVBQUMvRCxPQUFPLENBQUNELE9BQU8sQ0FBQzFELGFBQWEsQ0FBQyxJQUFJLEVBQUM7U0FBQ25CLEtBQUssRUFBQ3BXLENBQUM7QUFBQ3NiLFNBQUFBLFNBQVMsRUFBQ3JNLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDZixLQUFLO1NBQUNvVixHQUFHLEVBQUMsSUFBSSxDQUFDckQscUJBQUFBO0FBQXFCLFFBQUMsRUFBQ2hpQixDQUFDLENBQUNvVSxHQUFHLENBQUMsSUFBSSxDQUFDOE4sZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ25PLENBQUMsR0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDaVIscUJBQXFCLEVBQUUsRUFBQzlRLENBQUMsR0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDK1EsaUJBQWlCLEVBQUUsRUFBQy9RLENBQUMsR0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDZ1IsaUJBQWlCLEVBQUUsRUFBQyxJQUFJLENBQUNuYyxLQUFLLENBQUMySixnQkFBZ0IsR0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDeVAsZ0JBQWdCLEVBQUUsRUFBQyxJQUFJLENBQUNwWixLQUFLLENBQUNtSixnQkFBZ0IsR0FBQyxJQUFJLENBQUNpVCxzQkFBc0IsRUFBRSxHQUFDLElBQUksQ0FBQyxDQUFBO01BQUMsRUFBQ25SLENBQUMsQ0FBQ3NSLFlBQVksR0FBQzVFLGNBQWMsQ0FBQzRFLFlBQVksRUFBQ3RSLENBQUMsQ0FBQTtJQUFDLENBQUMySixPQUFPLENBQUNELE9BQU8sQ0FBQzZILGFBQWEsQ0FBQyxDQUFDLENBQUE7QUFBQzNtQixDQUFBQSxPQUFBQSxDQUFBQSxPQUFBQSxHQUFnQmdpQixhQUFhLENBQUE7Ozs7O0FDQXZtbkI7QUFDQTtBQUNBO0FBQ0EsSUFBSTRFLGVBQWUsQ0FBQTtBQUNuQixNQUFNQyxLQUFLLEdBQUcsSUFBSUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQ2pCLFNBQVNDLEdBQUdBLEdBQUc7QUFDNUI7RUFDQSxJQUFJLENBQUNILGVBQWUsRUFBRTtBQUNwQjtBQUNBQSxJQUFBQSxlQUFlLEdBQUcsT0FBT0ksTUFBTSxLQUFLLFdBQVcsSUFBSUEsTUFBTSxDQUFDSixlQUFlLElBQUlJLE1BQU0sQ0FBQ0osZUFBZSxDQUFDaFosSUFBSSxDQUFDb1osTUFBTSxDQUFDLENBQUE7SUFFaEgsSUFBSSxDQUFDSixlQUFlLEVBQUU7QUFDcEIsTUFBQSxNQUFNLElBQUlLLEtBQUssQ0FBQywwR0FBMEcsQ0FBQyxDQUFBO0FBQzdILEtBQUE7QUFDRixHQUFBO0VBRUEsT0FBT0wsZUFBZSxDQUFDQyxLQUFLLENBQUMsQ0FBQTtBQUMvQjs7QUNqQkEsWUFBZSxxSEFBcUg7O0FDRXBJLFNBQVNLLFFBQVFBLENBQUNDLElBQUksRUFBRTtFQUN0QixPQUFPLE9BQU9BLElBQUksS0FBSyxRQUFRLElBQUlDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsQ0FBQTtBQUNyRDs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRyxTQUFTLEdBQUcsRUFBRSxDQUFBO0FBRXBCLEtBQUssSUFBSWxtQixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUVBLENBQUMsRUFBRTtBQUM1QmttQixFQUFBQSxTQUFTLENBQUNqakIsSUFBSSxDQUFDLENBQUNqRCxDQUFDLEdBQUcsS0FBSyxFQUFFUyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUNtRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNuRCxDQUFBO0FBRU8sU0FBU3VpQixlQUFlQSxDQUFDQyxHQUFHLEVBQUVDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDL0M7QUFDQTtBQUNBLEVBQUEsT0FBTyxDQUFDSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFQyxXQUFXLEVBQUUsQ0FBQTtBQUNwZ0I7O0FDZEEsU0FBU0MsS0FBS0EsQ0FBQ1IsSUFBSSxFQUFFO0FBQ25CLEVBQUEsSUFBSSxDQUFDRCxRQUFRLENBQUNDLElBQUksQ0FBQyxFQUFFO0lBQ25CLE1BQU0vWixTQUFTLENBQUMsY0FBYyxDQUFDLENBQUE7QUFDakMsR0FBQTtBQUVBLEVBQUEsSUFBSStPLENBQUMsQ0FBQTtFQUNMLE1BQU1xTCxHQUFHLEdBQUcsSUFBSVYsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztFQUUvQlUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUNyTCxDQUFDLEdBQUd5TCxRQUFRLENBQUNULElBQUksQ0FBQ25pQixLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtFQUNwRHdpQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdyTCxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQTtFQUN4QnFMLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3JMLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFBO0VBQ3ZCcUwsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHckwsQ0FBQyxHQUFHLElBQUksQ0FBQzs7RUFFbEJxTCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQ3JMLENBQUMsR0FBR3lMLFFBQVEsQ0FBQ1QsSUFBSSxDQUFDbmlCLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0VBQ3BEd2lCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3JMLENBQUMsR0FBRyxJQUFJLENBQUM7O0VBRWxCcUwsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUNyTCxDQUFDLEdBQUd5TCxRQUFRLENBQUNULElBQUksQ0FBQ25pQixLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtFQUNyRHdpQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdyTCxDQUFDLEdBQUcsSUFBSSxDQUFDOztFQUVsQnFMLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDckwsQ0FBQyxHQUFHeUwsUUFBUSxDQUFDVCxJQUFJLENBQUNuaUIsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7RUFDckR3aUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHckwsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNsQjs7RUFFQXFMLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDckwsQ0FBQyxHQUFHeUwsUUFBUSxDQUFDVCxJQUFJLENBQUNuaUIsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFBO0VBQ3ZFd2lCLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBR3JMLENBQUMsR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFBO0VBQ2hDcUwsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHckwsQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUE7RUFDekJxTCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUdyTCxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQTtFQUN6QnFMLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBR3JMLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFBO0FBQ3hCcUwsRUFBQUEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHckwsQ0FBQyxHQUFHLElBQUksQ0FBQTtBQUNsQixFQUFBLE9BQU9xTCxHQUFHLENBQUE7QUFDWjs7QUM3QkEsU0FBU0ssYUFBYUEsQ0FBQ0MsR0FBRyxFQUFFO0VBQzFCQSxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0Msa0JBQWtCLENBQUNGLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0VBRXhDLE1BQU1HLEtBQUssR0FBRyxFQUFFLENBQUE7QUFFaEIsRUFBQSxLQUFLLElBQUk3bUIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHMG1CLEdBQUcsQ0FBQzdtQixNQUFNLEVBQUUsRUFBRUcsQ0FBQyxFQUFFO0lBQ25DNm1CLEtBQUssQ0FBQzVqQixJQUFJLENBQUN5akIsR0FBRyxDQUFDSSxVQUFVLENBQUM5bUIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUMvQixHQUFBO0FBRUEsRUFBQSxPQUFPNm1CLEtBQUssQ0FBQTtBQUNkLENBQUE7QUFFTyxNQUFNRSxHQUFHLEdBQUcsc0NBQXNDLENBQUE7QUFDbEQsTUFBTUMsR0FBRyxHQUFHLHNDQUFzQyxDQUFBO0FBQzFDLFNBQVNDLEdBQUdBLENBQUNqVSxJQUFJLEVBQUVrVSxPQUFPLEVBQUVDLFFBQVEsRUFBRTtFQUNuRCxTQUFTQyxZQUFZQSxDQUFDdm9CLEtBQUssRUFBRXdvQixTQUFTLEVBQUVDLEdBQUcsRUFBRWpCLE1BQU0sRUFBRTtBQUNuRCxJQUFBLElBQUlrQixVQUFVLENBQUE7QUFFZCxJQUFBLElBQUksT0FBTzFvQixLQUFLLEtBQUssUUFBUSxFQUFFO0FBQzdCQSxNQUFBQSxLQUFLLEdBQUc0bkIsYUFBYSxDQUFDNW5CLEtBQUssQ0FBQyxDQUFBO0FBQzlCLEtBQUE7QUFFQSxJQUFBLElBQUksT0FBT3dvQixTQUFTLEtBQUssUUFBUSxFQUFFO0FBQ2pDQSxNQUFBQSxTQUFTLEdBQUdkLEtBQUssQ0FBQ2MsU0FBUyxDQUFDLENBQUE7QUFDOUIsS0FBQTtJQUVBLElBQUksQ0FBQyxDQUFDRSxVQUFVLEdBQUdGLFNBQVMsTUFBTSxJQUFJLElBQUlFLFVBQVUsS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBR0EsVUFBVSxDQUFDMW5CLE1BQU0sTUFBTSxFQUFFLEVBQUU7TUFDcEcsTUFBTW1NLFNBQVMsQ0FBQyxrRUFBa0UsQ0FBQyxDQUFBO0FBQ3JGLEtBQUM7QUFDRDtBQUNBOztJQUdBLElBQUk2YSxLQUFLLEdBQUcsSUFBSW5CLFVBQVUsQ0FBQyxFQUFFLEdBQUc3bUIsS0FBSyxDQUFDZ0IsTUFBTSxDQUFDLENBQUE7QUFDN0NnbkIsSUFBQUEsS0FBSyxDQUFDamIsR0FBRyxDQUFDeWIsU0FBUyxDQUFDLENBQUE7SUFDcEJSLEtBQUssQ0FBQ2piLEdBQUcsQ0FBQy9NLEtBQUssRUFBRXdvQixTQUFTLENBQUN4bkIsTUFBTSxDQUFDLENBQUE7QUFDbENnbkIsSUFBQUEsS0FBSyxHQUFHTSxRQUFRLENBQUNOLEtBQUssQ0FBQyxDQUFBO0lBQ3ZCQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUdBLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUdLLE9BQU8sQ0FBQTtJQUNwQ0wsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQTtBQUVqQyxJQUFBLElBQUlTLEdBQUcsRUFBRTtNQUNQakIsTUFBTSxHQUFHQSxNQUFNLElBQUksQ0FBQyxDQUFBO01BRXBCLEtBQUssSUFBSXJtQixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUVBLENBQUMsRUFBRTtRQUMzQnNuQixHQUFHLENBQUNqQixNQUFNLEdBQUdybUIsQ0FBQyxDQUFDLEdBQUc2bUIsS0FBSyxDQUFDN21CLENBQUMsQ0FBQyxDQUFBO0FBQzVCLE9BQUE7QUFFQSxNQUFBLE9BQU9zbkIsR0FBRyxDQUFBO0FBQ1osS0FBQTtJQUVBLE9BQU9uQixlQUFlLENBQUNVLEtBQUssQ0FBQyxDQUFBO0FBQy9CLEdBQUM7O0VBR0QsSUFBSTtBQUNGTyxJQUFBQSxZQUFZLENBQUNwVSxJQUFJLEdBQUdBLElBQUksQ0FBQztBQUMzQixHQUFDLENBQUMsT0FBTzlMLEdBQUcsRUFBRSxFQUFFOztFQUdoQmtnQixZQUFZLENBQUNMLEdBQUcsR0FBR0EsR0FBRyxDQUFBO0VBQ3RCSyxZQUFZLENBQUNKLEdBQUcsR0FBR0EsR0FBRyxDQUFBO0FBQ3RCLEVBQUEsT0FBT0ksWUFBWSxDQUFBO0FBQ3JCOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0ksR0FBR0EsQ0FBQ1gsS0FBSyxFQUFFO0FBQ2xCLEVBQUEsSUFBSSxPQUFPQSxLQUFLLEtBQUssUUFBUSxFQUFFO0lBQzdCLE1BQU1ZLEdBQUcsR0FBR2QsUUFBUSxDQUFDQyxrQkFBa0IsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQzs7QUFFaERBLElBQUFBLEtBQUssR0FBRyxJQUFJbkIsVUFBVSxDQUFDK0IsR0FBRyxDQUFDNW5CLE1BQU0sQ0FBQyxDQUFBO0FBRWxDLElBQUEsS0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUd5bkIsR0FBRyxDQUFDNW5CLE1BQU0sRUFBRSxFQUFFRyxDQUFDLEVBQUU7TUFDbkM2bUIsS0FBSyxDQUFDN21CLENBQUMsQ0FBQyxHQUFHeW5CLEdBQUcsQ0FBQ1gsVUFBVSxDQUFDOW1CLENBQUMsQ0FBQyxDQUFBO0FBQzlCLEtBQUE7QUFDRixHQUFBO0FBRUEsRUFBQSxPQUFPMG5CLG9CQUFvQixDQUFDQyxVQUFVLENBQUNDLFlBQVksQ0FBQ2YsS0FBSyxDQUFDLEVBQUVBLEtBQUssQ0FBQ2huQixNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNoRixDQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVM2bkIsb0JBQW9CQSxDQUFDRyxLQUFLLEVBQUU7RUFDbkMsTUFBTUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtBQUNqQixFQUFBLE1BQU1DLFFBQVEsR0FBR0YsS0FBSyxDQUFDaG9CLE1BQU0sR0FBRyxFQUFFLENBQUE7RUFDbEMsTUFBTW1vQixNQUFNLEdBQUcsa0JBQWtCLENBQUE7QUFFakMsRUFBQSxLQUFLLElBQUlob0IsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHK25CLFFBQVEsRUFBRS9uQixDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3BDLElBQUEsTUFBTWEsQ0FBQyxHQUFHZ25CLEtBQUssQ0FBQzduQixDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUtBLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFBO0lBQ3pDLE1BQU1pb0IsR0FBRyxHQUFHekIsUUFBUSxDQUFDd0IsTUFBTSxDQUFDRSxNQUFNLENBQUNybkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBR21uQixNQUFNLENBQUNFLE1BQU0sQ0FBQ3JuQixDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7QUFDakZpbkIsSUFBQUEsTUFBTSxDQUFDN2tCLElBQUksQ0FBQ2dsQixHQUFHLENBQUMsQ0FBQTtBQUNsQixHQUFBO0FBRUEsRUFBQSxPQUFPSCxNQUFNLENBQUE7QUFDZixDQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNLLGVBQWVBLENBQUNDLFlBQVksRUFBRTtFQUNyQyxPQUFPLENBQUNBLFlBQVksR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBQ2hELENBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU1QsVUFBVUEsQ0FBQzltQixDQUFDLEVBQUV3bkIsR0FBRyxFQUFFO0FBQzFCO0VBQ0F4bkIsQ0FBQyxDQUFDd25CLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUlBLEdBQUcsR0FBRyxFQUFFLENBQUE7RUFDL0J4bkIsQ0FBQyxDQUFDc25CLGVBQWUsQ0FBQ0UsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUdBLEdBQUcsQ0FBQTtFQUNqQyxJQUFJblMsQ0FBQyxHQUFHLFVBQVUsQ0FBQTtFQUNsQixJQUFJb1MsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFBO0VBQ2xCLElBQUk5TixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUE7RUFDbkIsSUFBSXZFLENBQUMsR0FBRyxTQUFTLENBQUE7QUFFakIsRUFBQSxLQUFLLElBQUlqVyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdhLENBQUMsQ0FBQ2hCLE1BQU0sRUFBRUcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtJQUNyQyxNQUFNdW9CLElBQUksR0FBR3JTLENBQUMsQ0FBQTtJQUNkLE1BQU1zUyxJQUFJLEdBQUdGLENBQUMsQ0FBQTtJQUNkLE1BQU1HLElBQUksR0FBR2pPLENBQUMsQ0FBQTtJQUNkLE1BQU1rTyxJQUFJLEdBQUd6UyxDQUFDLENBQUE7SUFDZEMsQ0FBQyxHQUFHeVMsS0FBSyxDQUFDelMsQ0FBQyxFQUFFb1MsQ0FBQyxFQUFFOU4sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFcFYsQ0FBQyxDQUFDYixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUMxQ2lXLENBQUMsR0FBRzBTLEtBQUssQ0FBQzFTLENBQUMsRUFBRUMsQ0FBQyxFQUFFb1MsQ0FBQyxFQUFFOU4sQ0FBQyxFQUFFM1osQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDL0N3YSxDQUFDLEdBQUdtTyxLQUFLLENBQUNuTyxDQUFDLEVBQUV2RSxDQUFDLEVBQUVDLENBQUMsRUFBRW9TLENBQUMsRUFBRXpuQixDQUFDLENBQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDOUNzb0IsQ0FBQyxHQUFHSyxLQUFLLENBQUNMLENBQUMsRUFBRTlOLENBQUMsRUFBRXZFLENBQUMsRUFBRUMsQ0FBQyxFQUFFclYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDaERrVyxDQUFDLEdBQUd5UyxLQUFLLENBQUN6UyxDQUFDLEVBQUVvUyxDQUFDLEVBQUU5TixDQUFDLEVBQUV2RSxDQUFDLEVBQUVwVixDQUFDLENBQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUM5Q2lXLENBQUMsR0FBRzBTLEtBQUssQ0FBQzFTLENBQUMsRUFBRUMsQ0FBQyxFQUFFb1MsQ0FBQyxFQUFFOU4sQ0FBQyxFQUFFM1osQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQy9Dd2EsQ0FBQyxHQUFHbU8sS0FBSyxDQUFDbk8sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUVvUyxDQUFDLEVBQUV6bkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDaERzb0IsQ0FBQyxHQUFHSyxLQUFLLENBQUNMLENBQUMsRUFBRTlOLENBQUMsRUFBRXZFLENBQUMsRUFBRUMsQ0FBQyxFQUFFclYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDOUNrVyxDQUFDLEdBQUd5UyxLQUFLLENBQUN6UyxDQUFDLEVBQUVvUyxDQUFDLEVBQUU5TixDQUFDLEVBQUV2RSxDQUFDLEVBQUVwVixDQUFDLENBQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDOUNpVyxDQUFDLEdBQUcwUyxLQUFLLENBQUMxUyxDQUFDLEVBQUVDLENBQUMsRUFBRW9TLENBQUMsRUFBRTlOLENBQUMsRUFBRTNaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2hEd2EsQ0FBQyxHQUFHbU8sS0FBSyxDQUFDbk8sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUVvUyxDQUFDLEVBQUV6bkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUNzb0IsQ0FBQyxHQUFHSyxLQUFLLENBQUNMLENBQUMsRUFBRTlOLENBQUMsRUFBRXZFLENBQUMsRUFBRUMsQ0FBQyxFQUFFclYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDakRrVyxDQUFDLEdBQUd5UyxLQUFLLENBQUN6UyxDQUFDLEVBQUVvUyxDQUFDLEVBQUU5TixDQUFDLEVBQUV2RSxDQUFDLEVBQUVwVixDQUFDLENBQUNiLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDL0NpVyxDQUFDLEdBQUcwUyxLQUFLLENBQUMxUyxDQUFDLEVBQUVDLENBQUMsRUFBRW9TLENBQUMsRUFBRTlOLENBQUMsRUFBRTNaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQy9Dd2EsQ0FBQyxHQUFHbU8sS0FBSyxDQUFDbk8sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUVvUyxDQUFDLEVBQUV6bkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDakRzb0IsQ0FBQyxHQUFHSyxLQUFLLENBQUNMLENBQUMsRUFBRTlOLENBQUMsRUFBRXZFLENBQUMsRUFBRUMsQ0FBQyxFQUFFclYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQ2hEa1csQ0FBQyxHQUFHMFMsS0FBSyxDQUFDMVMsQ0FBQyxFQUFFb1MsQ0FBQyxFQUFFOU4sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFcFYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDOUNpVyxDQUFDLEdBQUcyUyxLQUFLLENBQUMzUyxDQUFDLEVBQUVDLENBQUMsRUFBRW9TLENBQUMsRUFBRTlOLENBQUMsRUFBRTNaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQy9Dd2EsQ0FBQyxHQUFHb08sS0FBSyxDQUFDcE8sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUVvUyxDQUFDLEVBQUV6bkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBQy9Dc29CLENBQUMsR0FBR00sS0FBSyxDQUFDTixDQUFDLEVBQUU5TixDQUFDLEVBQUV2RSxDQUFDLEVBQUVDLENBQUMsRUFBRXJWLENBQUMsQ0FBQ2IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDM0NrVyxDQUFDLEdBQUcwUyxLQUFLLENBQUMxUyxDQUFDLEVBQUVvUyxDQUFDLEVBQUU5TixDQUFDLEVBQUV2RSxDQUFDLEVBQUVwVixDQUFDLENBQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUM5Q2lXLENBQUMsR0FBRzJTLEtBQUssQ0FBQzNTLENBQUMsRUFBRUMsQ0FBQyxFQUFFb1MsQ0FBQyxFQUFFOU4sQ0FBQyxFQUFFM1osQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQzdDd2EsQ0FBQyxHQUFHb08sS0FBSyxDQUFDcE8sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUVvUyxDQUFDLEVBQUV6bkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDaERzb0IsQ0FBQyxHQUFHTSxLQUFLLENBQUNOLENBQUMsRUFBRTlOLENBQUMsRUFBRXZFLENBQUMsRUFBRUMsQ0FBQyxFQUFFclYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDL0NrVyxDQUFDLEdBQUcwUyxLQUFLLENBQUMxUyxDQUFDLEVBQUVvUyxDQUFDLEVBQUU5TixDQUFDLEVBQUV2RSxDQUFDLEVBQUVwVixDQUFDLENBQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDN0NpVyxDQUFDLEdBQUcyUyxLQUFLLENBQUMzUyxDQUFDLEVBQUVDLENBQUMsRUFBRW9TLENBQUMsRUFBRTlOLENBQUMsRUFBRTNaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2hEd2EsQ0FBQyxHQUFHb08sS0FBSyxDQUFDcE8sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUVvUyxDQUFDLEVBQUV6bkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDL0Nzb0IsQ0FBQyxHQUFHTSxLQUFLLENBQUNOLENBQUMsRUFBRTlOLENBQUMsRUFBRXZFLENBQUMsRUFBRUMsQ0FBQyxFQUFFclYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQy9Da1csQ0FBQyxHQUFHMFMsS0FBSyxDQUFDMVMsQ0FBQyxFQUFFb1MsQ0FBQyxFQUFFOU4sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFcFYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDaERpVyxDQUFDLEdBQUcyUyxLQUFLLENBQUMzUyxDQUFDLEVBQUVDLENBQUMsRUFBRW9TLENBQUMsRUFBRTlOLENBQUMsRUFBRTNaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzdDd2EsQ0FBQyxHQUFHb08sS0FBSyxDQUFDcE8sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUVvUyxDQUFDLEVBQUV6bkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQy9Dc29CLENBQUMsR0FBR00sS0FBSyxDQUFDTixDQUFDLEVBQUU5TixDQUFDLEVBQUV2RSxDQUFDLEVBQUVDLENBQUMsRUFBRXJWLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2pEa1csQ0FBQyxHQUFHMlMsS0FBSyxDQUFDM1MsQ0FBQyxFQUFFb1MsQ0FBQyxFQUFFOU4sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFcFYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDM0NpVyxDQUFDLEdBQUc0UyxLQUFLLENBQUM1UyxDQUFDLEVBQUVDLENBQUMsRUFBRW9TLENBQUMsRUFBRTlOLENBQUMsRUFBRTNaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2hEd2EsQ0FBQyxHQUFHcU8sS0FBSyxDQUFDck8sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUVvUyxDQUFDLEVBQUV6bkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQ2hEc29CLENBQUMsR0FBR08sS0FBSyxDQUFDUCxDQUFDLEVBQUU5TixDQUFDLEVBQUV2RSxDQUFDLEVBQUVDLENBQUMsRUFBRXJWLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQy9Da1csQ0FBQyxHQUFHMlMsS0FBSyxDQUFDM1MsQ0FBQyxFQUFFb1MsQ0FBQyxFQUFFOU4sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFcFYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDL0NpVyxDQUFDLEdBQUc0UyxLQUFLLENBQUM1UyxDQUFDLEVBQUVDLENBQUMsRUFBRW9TLENBQUMsRUFBRTlOLENBQUMsRUFBRTNaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUMvQ3dhLENBQUMsR0FBR3FPLEtBQUssQ0FBQ3JPLENBQUMsRUFBRXZFLENBQUMsRUFBRUMsQ0FBQyxFQUFFb1MsQ0FBQyxFQUFFem5CLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQy9Dc29CLENBQUMsR0FBR08sS0FBSyxDQUFDUCxDQUFDLEVBQUU5TixDQUFDLEVBQUV2RSxDQUFDLEVBQUVDLENBQUMsRUFBRXJWLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2pEa1csQ0FBQyxHQUFHMlMsS0FBSyxDQUFDM1MsQ0FBQyxFQUFFb1MsQ0FBQyxFQUFFOU4sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFcFYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBQzlDaVcsQ0FBQyxHQUFHNFMsS0FBSyxDQUFDNVMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVvUyxDQUFDLEVBQUU5TixDQUFDLEVBQUUzWixDQUFDLENBQUNiLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzNDd2EsQ0FBQyxHQUFHcU8sS0FBSyxDQUFDck8sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUVvUyxDQUFDLEVBQUV6bkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDL0Nzb0IsQ0FBQyxHQUFHTyxLQUFLLENBQUNQLENBQUMsRUFBRTlOLENBQUMsRUFBRXZFLENBQUMsRUFBRUMsQ0FBQyxFQUFFclYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQzdDa1csQ0FBQyxHQUFHMlMsS0FBSyxDQUFDM1MsQ0FBQyxFQUFFb1MsQ0FBQyxFQUFFOU4sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFcFYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDOUNpVyxDQUFDLEdBQUc0UyxLQUFLLENBQUM1UyxDQUFDLEVBQUVDLENBQUMsRUFBRW9TLENBQUMsRUFBRTlOLENBQUMsRUFBRTNaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ2hEd2EsQ0FBQyxHQUFHcU8sS0FBSyxDQUFDck8sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUVvUyxDQUFDLEVBQUV6bkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBQy9Dc29CLENBQUMsR0FBR08sS0FBSyxDQUFDUCxDQUFDLEVBQUU5TixDQUFDLEVBQUV2RSxDQUFDLEVBQUVDLENBQUMsRUFBRXJWLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQy9Da1csQ0FBQyxHQUFHNFMsS0FBSyxDQUFDNVMsQ0FBQyxFQUFFb1MsQ0FBQyxFQUFFOU4sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFcFYsQ0FBQyxDQUFDYixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUMxQ2lXLENBQUMsR0FBRzZTLEtBQUssQ0FBQzdTLENBQUMsRUFBRUMsQ0FBQyxFQUFFb1MsQ0FBQyxFQUFFOU4sQ0FBQyxFQUFFM1osQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQy9Dd2EsQ0FBQyxHQUFHc08sS0FBSyxDQUFDdE8sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUVvUyxDQUFDLEVBQUV6bkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDakRzb0IsQ0FBQyxHQUFHUSxLQUFLLENBQUNSLENBQUMsRUFBRTlOLENBQUMsRUFBRXZFLENBQUMsRUFBRUMsQ0FBQyxFQUFFclYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDOUNrVyxDQUFDLEdBQUc0UyxLQUFLLENBQUM1UyxDQUFDLEVBQUVvUyxDQUFDLEVBQUU5TixDQUFDLEVBQUV2RSxDQUFDLEVBQUVwVixDQUFDLENBQUNiLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDL0NpVyxDQUFDLEdBQUc2UyxLQUFLLENBQUM3UyxDQUFDLEVBQUVDLENBQUMsRUFBRW9TLENBQUMsRUFBRTlOLENBQUMsRUFBRTNaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2hEd2EsQ0FBQyxHQUFHc08sS0FBSyxDQUFDdE8sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUVvUyxDQUFDLEVBQUV6bkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDOUNzb0IsQ0FBQyxHQUFHUSxLQUFLLENBQUNSLENBQUMsRUFBRTlOLENBQUMsRUFBRXZFLENBQUMsRUFBRUMsQ0FBQyxFQUFFclYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDaERrVyxDQUFDLEdBQUc0UyxLQUFLLENBQUM1UyxDQUFDLEVBQUVvUyxDQUFDLEVBQUU5TixDQUFDLEVBQUV2RSxDQUFDLEVBQUVwVixDQUFDLENBQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDOUNpVyxDQUFDLEdBQUc2UyxLQUFLLENBQUM3UyxDQUFDLEVBQUVDLENBQUMsRUFBRW9TLENBQUMsRUFBRTlOLENBQUMsRUFBRTNaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQy9Dd2EsQ0FBQyxHQUFHc08sS0FBSyxDQUFDdE8sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUVvUyxDQUFDLEVBQUV6bkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDaERzb0IsQ0FBQyxHQUFHUSxLQUFLLENBQUNSLENBQUMsRUFBRTlOLENBQUMsRUFBRXZFLENBQUMsRUFBRUMsQ0FBQyxFQUFFclYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQ2hEa1csQ0FBQyxHQUFHNFMsS0FBSyxDQUFDNVMsQ0FBQyxFQUFFb1MsQ0FBQyxFQUFFOU4sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFcFYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDOUNpVyxDQUFDLEdBQUc2UyxLQUFLLENBQUM3UyxDQUFDLEVBQUVDLENBQUMsRUFBRW9TLENBQUMsRUFBRTlOLENBQUMsRUFBRTNaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2pEd2EsQ0FBQyxHQUFHc08sS0FBSyxDQUFDdE8sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUVvUyxDQUFDLEVBQUV6bkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBQzlDc29CLENBQUMsR0FBR1EsS0FBSyxDQUFDUixDQUFDLEVBQUU5TixDQUFDLEVBQUV2RSxDQUFDLEVBQUVDLENBQUMsRUFBRXJWLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQy9Da1csSUFBQUEsQ0FBQyxHQUFHNlMsT0FBTyxDQUFDN1MsQ0FBQyxFQUFFcVMsSUFBSSxDQUFDLENBQUE7QUFDcEJELElBQUFBLENBQUMsR0FBR1MsT0FBTyxDQUFDVCxDQUFDLEVBQUVFLElBQUksQ0FBQyxDQUFBO0FBQ3BCaE8sSUFBQUEsQ0FBQyxHQUFHdU8sT0FBTyxDQUFDdk8sQ0FBQyxFQUFFaU8sSUFBSSxDQUFDLENBQUE7QUFDcEJ4UyxJQUFBQSxDQUFDLEdBQUc4UyxPQUFPLENBQUM5UyxDQUFDLEVBQUV5UyxJQUFJLENBQUMsQ0FBQTtBQUN0QixHQUFBO0VBRUEsT0FBTyxDQUFDeFMsQ0FBQyxFQUFFb1MsQ0FBQyxFQUFFOU4sQ0FBQyxFQUFFdkUsQ0FBQyxDQUFDLENBQUE7QUFDckIsQ0FBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVMyUixZQUFZQSxDQUFDQyxLQUFLLEVBQUU7QUFDM0IsRUFBQSxJQUFJQSxLQUFLLENBQUNob0IsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUN0QixJQUFBLE9BQU8sRUFBRSxDQUFBO0FBQ1gsR0FBQTtBQUVBLEVBQUEsTUFBTW1wQixPQUFPLEdBQUduQixLQUFLLENBQUNob0IsTUFBTSxHQUFHLENBQUMsQ0FBQTtFQUNoQyxNQUFNaW9CLE1BQU0sR0FBRyxJQUFJbUIsV0FBVyxDQUFDZCxlQUFlLENBQUNhLE9BQU8sQ0FBQyxDQUFDLENBQUE7QUFFeEQsRUFBQSxLQUFLLElBQUlocEIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHZ3BCLE9BQU8sRUFBRWhwQixDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ25DOG5CLElBQUFBLE1BQU0sQ0FBQzluQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzZuQixLQUFLLENBQUM3bkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBS0EsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUNuRCxHQUFBO0FBRUEsRUFBQSxPQUFPOG5CLE1BQU0sQ0FBQTtBQUNmLENBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTaUIsT0FBT0EsQ0FBQ2xvQixDQUFDLEVBQUVDLENBQUMsRUFBRTtFQUNyQixNQUFNb29CLEdBQUcsR0FBRyxDQUFDcm9CLENBQUMsR0FBRyxNQUFNLEtBQUtDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQTtBQUN2QyxFQUFBLE1BQU1xb0IsR0FBRyxHQUFHLENBQUN0b0IsQ0FBQyxJQUFJLEVBQUUsS0FBS0MsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJb29CLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUMvQyxFQUFBLE9BQU9DLEdBQUcsSUFBSSxFQUFFLEdBQUdELEdBQUcsR0FBRyxNQUFNLENBQUE7QUFDakMsQ0FBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTRSxhQUFhQSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtFQUMvQixPQUFPRCxHQUFHLElBQUlDLEdBQUcsR0FBR0QsR0FBRyxLQUFLLEVBQUUsR0FBR0MsR0FBRyxDQUFBO0FBQ3RDLENBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0MsTUFBTUEsQ0FBQ0MsQ0FBQyxFQUFFdFQsQ0FBQyxFQUFFb1MsQ0FBQyxFQUFFem5CLENBQUMsRUFBRXFULENBQUMsRUFBRUYsQ0FBQyxFQUFFO0VBQ2hDLE9BQU8rVSxPQUFPLENBQUNLLGFBQWEsQ0FBQ0wsT0FBTyxDQUFDQSxPQUFPLENBQUM3UyxDQUFDLEVBQUVzVCxDQUFDLENBQUMsRUFBRVQsT0FBTyxDQUFDbG9CLENBQUMsRUFBRW1ULENBQUMsQ0FBQyxDQUFDLEVBQUVFLENBQUMsQ0FBQyxFQUFFb1UsQ0FBQyxDQUFDLENBQUE7QUFDNUUsQ0FBQTtBQUVBLFNBQVNLLEtBQUtBLENBQUN6UyxDQUFDLEVBQUVvUyxDQUFDLEVBQUU5TixDQUFDLEVBQUV2RSxDQUFDLEVBQUVwVixDQUFDLEVBQUVxVCxDQUFDLEVBQUVGLENBQUMsRUFBRTtFQUNsQyxPQUFPdVYsTUFBTSxDQUFDakIsQ0FBQyxHQUFHOU4sQ0FBQyxHQUFHLENBQUM4TixDQUFDLEdBQUdyUyxDQUFDLEVBQUVDLENBQUMsRUFBRW9TLENBQUMsRUFBRXpuQixDQUFDLEVBQUVxVCxDQUFDLEVBQUVGLENBQUMsQ0FBQyxDQUFBO0FBQzlDLENBQUE7QUFFQSxTQUFTNFUsS0FBS0EsQ0FBQzFTLENBQUMsRUFBRW9TLENBQUMsRUFBRTlOLENBQUMsRUFBRXZFLENBQUMsRUFBRXBWLENBQUMsRUFBRXFULENBQUMsRUFBRUYsQ0FBQyxFQUFFO0VBQ2xDLE9BQU91VixNQUFNLENBQUNqQixDQUFDLEdBQUdyUyxDQUFDLEdBQUd1RSxDQUFDLEdBQUcsQ0FBQ3ZFLENBQUMsRUFBRUMsQ0FBQyxFQUFFb1MsQ0FBQyxFQUFFem5CLENBQUMsRUFBRXFULENBQUMsRUFBRUYsQ0FBQyxDQUFDLENBQUE7QUFDOUMsQ0FBQTtBQUVBLFNBQVM2VSxLQUFLQSxDQUFDM1MsQ0FBQyxFQUFFb1MsQ0FBQyxFQUFFOU4sQ0FBQyxFQUFFdkUsQ0FBQyxFQUFFcFYsQ0FBQyxFQUFFcVQsQ0FBQyxFQUFFRixDQUFDLEVBQUU7QUFDbEMsRUFBQSxPQUFPdVYsTUFBTSxDQUFDakIsQ0FBQyxHQUFHOU4sQ0FBQyxHQUFHdkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUVvUyxDQUFDLEVBQUV6bkIsQ0FBQyxFQUFFcVQsQ0FBQyxFQUFFRixDQUFDLENBQUMsQ0FBQTtBQUN6QyxDQUFBO0FBRUEsU0FBUzhVLEtBQUtBLENBQUM1UyxDQUFDLEVBQUVvUyxDQUFDLEVBQUU5TixDQUFDLEVBQUV2RSxDQUFDLEVBQUVwVixDQUFDLEVBQUVxVCxDQUFDLEVBQUVGLENBQUMsRUFBRTtBQUNsQyxFQUFBLE9BQU91VixNQUFNLENBQUMvTyxDQUFDLElBQUk4TixDQUFDLEdBQUcsQ0FBQ3JTLENBQUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVvUyxDQUFDLEVBQUV6bkIsQ0FBQyxFQUFFcVQsQ0FBQyxFQUFFRixDQUFDLENBQUMsQ0FBQTtBQUM1Qzs7QUNsTldpVCxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRU8sR0FBRzs7QUNGOUIsTUFBTWlDLFVBQVUsR0FBRyxPQUFPN0QsTUFBTSxLQUFLLFdBQVcsSUFBSUEsTUFBTSxDQUFDNkQsVUFBVSxJQUFJN0QsTUFBTSxDQUFDNkQsVUFBVSxDQUFDamQsSUFBSSxDQUFDb1osTUFBTSxDQUFDLENBQUE7QUFDdkcsYUFBZTtBQUNiNkQsRUFBQUEsVUFBQUE7QUFDRixDQUFDOztBQ0NELFNBQVNDLEVBQUVBLENBQUN4a0IsT0FBTyxFQUFFb2lCLEdBQUcsRUFBRWpCLE1BQU0sRUFBRTtFQUNoQyxJQUFJc0QsTUFBTSxDQUFDRixVQUFVLElBQUksQ0FBQ25DLEdBQUcsSUFBSSxDQUFDcGlCLE9BQU8sRUFBRTtJQUN6QyxPQUFPeWtCLE1BQU0sQ0FBQ0YsVUFBVSxFQUFFLENBQUE7QUFDNUIsR0FBQTtBQUVBdmtCLEVBQUFBLE9BQU8sR0FBR0EsT0FBTyxJQUFJLEVBQUUsQ0FBQTtBQUN2QixFQUFBLE1BQU0wa0IsSUFBSSxHQUFHMWtCLE9BQU8sQ0FBQzJrQixNQUFNLElBQUksQ0FBQzNrQixPQUFPLENBQUN5Z0IsR0FBRyxJQUFJQSxHQUFHLEdBQUcsQ0FBQzs7RUFFdERpRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFBO0FBQy9CQSxFQUFBQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVoQyxFQUFBLElBQUl0QyxHQUFHLEVBQUU7SUFDUGpCLE1BQU0sR0FBR0EsTUFBTSxJQUFJLENBQUMsQ0FBQTtJQUVwQixLQUFLLElBQUlybUIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFQSxDQUFDLEVBQUU7TUFDM0JzbkIsR0FBRyxDQUFDakIsTUFBTSxHQUFHcm1CLENBQUMsQ0FBQyxHQUFHNHBCLElBQUksQ0FBQzVwQixDQUFDLENBQUMsQ0FBQTtBQUMzQixLQUFBO0FBRUEsSUFBQSxPQUFPc25CLEdBQUcsQ0FBQTtBQUNaLEdBQUE7RUFFQSxPQUFPbkIsZUFBZSxDQUFDeUQsSUFBSSxDQUFDLENBQUE7QUFDOUI7O0FDMUJBO0FBQ0E7QUFDQSxTQUFTbFAsQ0FBQ0EsQ0FBQ3hHLENBQUMsRUFBRXJULENBQUMsRUFBRUMsQ0FBQyxFQUFFZ3BCLENBQUMsRUFBRTtBQUNyQixFQUFBLFFBQVE1VixDQUFDO0FBQ1AsSUFBQSxLQUFLLENBQUM7QUFDSixNQUFBLE9BQU9yVCxDQUFDLEdBQUdDLENBQUMsR0FBRyxDQUFDRCxDQUFDLEdBQUdpcEIsQ0FBQyxDQUFBO0FBRXZCLElBQUEsS0FBSyxDQUFDO0FBQ0osTUFBQSxPQUFPanBCLENBQUMsR0FBR0MsQ0FBQyxHQUFHZ3BCLENBQUMsQ0FBQTtBQUVsQixJQUFBLEtBQUssQ0FBQztNQUNKLE9BQU9qcEIsQ0FBQyxHQUFHQyxDQUFDLEdBQUdELENBQUMsR0FBR2lwQixDQUFDLEdBQUdocEIsQ0FBQyxHQUFHZ3BCLENBQUMsQ0FBQTtBQUU5QixJQUFBLEtBQUssQ0FBQztBQUNKLE1BQUEsT0FBT2pwQixDQUFDLEdBQUdDLENBQUMsR0FBR2dwQixDQUFDLENBQUE7QUFBQyxHQUFBO0FBRXZCLENBQUE7QUFFQSxTQUFTQyxJQUFJQSxDQUFDbHBCLENBQUMsRUFBRXVVLENBQUMsRUFBRTtFQUNsQixPQUFPdlUsQ0FBQyxJQUFJdVUsQ0FBQyxHQUFHdlUsQ0FBQyxLQUFLLEVBQUUsR0FBR3VVLENBQUMsQ0FBQTtBQUM5QixDQUFBO0FBRUEsU0FBUzRVLElBQUlBLENBQUNuRCxLQUFLLEVBQUU7RUFDbkIsTUFBTW9ELENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0FBQzFELEVBQUEsTUFBTUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0FBRXRFLEVBQUEsSUFBSSxPQUFPckQsS0FBSyxLQUFLLFFBQVEsRUFBRTtJQUM3QixNQUFNWSxHQUFHLEdBQUdkLFFBQVEsQ0FBQ0Msa0JBQWtCLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUM7O0FBRWhEQSxJQUFBQSxLQUFLLEdBQUcsRUFBRSxDQUFBO0FBRVYsSUFBQSxLQUFLLElBQUk3bUIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHeW5CLEdBQUcsQ0FBQzVuQixNQUFNLEVBQUUsRUFBRUcsQ0FBQyxFQUFFO01BQ25DNm1CLEtBQUssQ0FBQzVqQixJQUFJLENBQUN3a0IsR0FBRyxDQUFDWCxVQUFVLENBQUM5bUIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUMvQixLQUFBO0dBQ0QsTUFBTSxJQUFJLENBQUNzWCxLQUFLLENBQUM2UyxPQUFPLENBQUN0RCxLQUFLLENBQUMsRUFBRTtBQUNoQztJQUNBQSxLQUFLLEdBQUd2UCxLQUFLLENBQUM5UCxTQUFTLENBQUM1RCxLQUFLLENBQUNvSCxJQUFJLENBQUM2YixLQUFLLENBQUMsQ0FBQTtBQUMzQyxHQUFBO0FBRUFBLEVBQUFBLEtBQUssQ0FBQzVqQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7RUFDaEIsTUFBTXFYLENBQUMsR0FBR3VNLEtBQUssQ0FBQ2huQixNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtFQUM5QixNQUFNdXFCLENBQUMsR0FBR3JwQixJQUFJLENBQUMwWCxJQUFJLENBQUM2QixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7QUFDM0IsRUFBQSxNQUFNK1AsQ0FBQyxHQUFHLElBQUkvUyxLQUFLLENBQUM4UyxDQUFDLENBQUMsQ0FBQTtFQUV0QixLQUFLLElBQUlwcUIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHb3FCLENBQUMsRUFBRSxFQUFFcHFCLENBQUMsRUFBRTtBQUMxQixJQUFBLE1BQU1vbUIsR0FBRyxHQUFHLElBQUk2QyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFL0IsS0FBSyxJQUFJcUIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFQSxDQUFDLEVBQUU7TUFDM0JsRSxHQUFHLENBQUNrRSxDQUFDLENBQUMsR0FBR3pELEtBQUssQ0FBQzdtQixDQUFDLEdBQUcsRUFBRSxHQUFHc3FCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUd6RCxLQUFLLENBQUM3bUIsQ0FBQyxHQUFHLEVBQUUsR0FBR3NxQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBR3pELEtBQUssQ0FBQzdtQixDQUFDLEdBQUcsRUFBRSxHQUFHc3FCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHekQsS0FBSyxDQUFDN21CLENBQUMsR0FBRyxFQUFFLEdBQUdzcUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNySSxLQUFBO0FBRUFELElBQUFBLENBQUMsQ0FBQ3JxQixDQUFDLENBQUMsR0FBR29tQixHQUFHLENBQUE7QUFDWixHQUFBO0VBRUFpRSxDQUFDLENBQUNELENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDdkQsS0FBSyxDQUFDaG5CLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHa0IsSUFBSSxDQUFDd3BCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7RUFDdkRGLENBQUMsQ0FBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHcnBCLElBQUksQ0FBQzBZLEtBQUssQ0FBQzRRLENBQUMsQ0FBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFDdkNDLEVBQUFBLENBQUMsQ0FBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUN2RCxLQUFLLENBQUNobkIsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFBO0VBRWxELEtBQUssSUFBSUcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHb3FCLENBQUMsRUFBRSxFQUFFcHFCLENBQUMsRUFBRTtBQUMxQixJQUFBLE1BQU13cUIsQ0FBQyxHQUFHLElBQUl2QixXQUFXLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFN0IsS0FBSyxJQUFJalYsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFQSxDQUFDLEVBQUU7TUFDM0J3VyxDQUFDLENBQUN4VyxDQUFDLENBQUMsR0FBR3FXLENBQUMsQ0FBQ3JxQixDQUFDLENBQUMsQ0FBQ2dVLENBQUMsQ0FBQyxDQUFBO0FBQ2hCLEtBQUE7SUFFQSxLQUFLLElBQUlBLENBQUMsR0FBRyxFQUFFLEVBQUVBLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRUEsQ0FBQyxFQUFFO0FBQzVCd1csTUFBQUEsQ0FBQyxDQUFDeFcsQ0FBQyxDQUFDLEdBQUcrVixJQUFJLENBQUNTLENBQUMsQ0FBQ3hXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBR3dXLENBQUMsQ0FBQ3hXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBR3dXLENBQUMsQ0FBQ3hXLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBR3dXLENBQUMsQ0FBQ3hXLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUM3RCxLQUFBO0FBRUEsSUFBQSxJQUFJa0MsQ0FBQyxHQUFHZ1UsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ1osSUFBQSxJQUFJNUIsQ0FBQyxHQUFHNEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ1osSUFBQSxJQUFJMVAsQ0FBQyxHQUFHMFAsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ1osSUFBQSxJQUFJalUsQ0FBQyxHQUFHaVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ1osSUFBQSxJQUFJem5CLENBQUMsR0FBR3luQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFFWixLQUFLLElBQUlsVyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUVBLENBQUMsRUFBRTtNQUMzQixNQUFNRSxDQUFDLEdBQUduVCxJQUFJLENBQUMwWSxLQUFLLENBQUN6RixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7QUFDNUIsTUFBQSxNQUFNeVcsQ0FBQyxHQUFHVixJQUFJLENBQUM3VCxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUd3RSxDQUFDLENBQUN4RyxDQUFDLEVBQUVvVSxDQUFDLEVBQUU5TixDQUFDLEVBQUV2RSxDQUFDLENBQUMsR0FBR3hULENBQUMsR0FBR3duQixDQUFDLENBQUMvVixDQUFDLENBQUMsR0FBR3NXLENBQUMsQ0FBQ3hXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUM1RHZSLE1BQUFBLENBQUMsR0FBR3dULENBQUMsQ0FBQTtBQUNMQSxNQUFBQSxDQUFDLEdBQUd1RSxDQUFDLENBQUE7TUFDTEEsQ0FBQyxHQUFHdVAsSUFBSSxDQUFDekIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUNyQkEsTUFBQUEsQ0FBQyxHQUFHcFMsQ0FBQyxDQUFBO0FBQ0xBLE1BQUFBLENBQUMsR0FBR3VVLENBQUMsQ0FBQTtBQUNQLEtBQUE7SUFFQVAsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdoVSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JCZ1UsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc1QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JCNEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcxUCxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JCMFAsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdqVSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JCaVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUd6bkIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUN2QixHQUFBO0FBRUEsRUFBQSxPQUFPLENBQUN5bkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBO0FBQ2xXOztBQzNGV2pELEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFK0MsSUFBSTs7QUNGL0I7QUFDQTtBQUNBO0FBQ0E7QUFDTyxNQUFNVSxpQkFBaUIsR0FBRztBQUM3QixFQUFBLENBQUMsRUFBRTtBQUNDN1gsSUFBQUEsS0FBSyxFQUFFLENBQUE7R0FDVjtBQUNELEVBQUEsR0FBRyxFQUFFO0FBQ0RBLElBQUFBLEtBQUssRUFBRSxDQUFBO0dBQ1Y7QUFDRCxFQUFBLElBQUksRUFBRTtBQUNGQSxJQUFBQSxLQUFLLEVBQUUsQ0FBQTtHQUNWO0FBQ0QsRUFBQSxJQUFJLEVBQUU7QUFDRkEsSUFBQUEsS0FBSyxFQUFFLENBQUE7R0FDVjtBQUNELEVBQUEsSUFBSSxFQUFFO0FBQ0ZBLElBQUFBLEtBQUssRUFBRSxDQUFBO0dBQ1Y7QUFDRCxFQUFBLElBQUksRUFBRTtBQUNGQSxJQUFBQSxLQUFLLEVBQUUsQ0FBQTtBQUNYLEdBQUE7QUFDSixDQUFDLENBQUE7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDTyxNQUFNOFgsc0JBQXNCLEdBQUdDLElBQUksSUFBSTtFQUMxQyxJQUFJQyxhQUFhLEdBQUcsRUFBRSxDQUFBO0FBQ3RCLEVBQUEsSUFBSXJxQixJQUFJLEdBQUc5QixNQUFNLENBQUM4QixJQUFJLENBQUNrcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV6Q2xxQixFQUFBQSxJQUFJLENBQUNnSSxPQUFPLENBQUNqSSxHQUFHLElBQUk7QUFDaEIsSUFBQSxJQUFJdXFCLFFBQVEsR0FBRy9wQixJQUFJLENBQUNncUIsS0FBSyxDQUFDTCxpQkFBaUIsQ0FBQ25xQixHQUFHLENBQUMsQ0FBQ3NTLEtBQUssR0FBRytYLElBQUksQ0FBQyxDQUFBO0lBQzlEQyxhQUFhLENBQUN0cUIsR0FBRyxDQUFDLEdBQUc7QUFBRXNTLE1BQUFBLEtBQUssRUFBRTlSLElBQUksQ0FBQ2lxQixHQUFHLENBQUNGLFFBQVEsRUFBRSxDQUFDLENBQUE7S0FBRyxDQUFBO0FBQ3pELEdBQUMsQ0FBQyxDQUFBO0FBRUYsRUFBQSxPQUFPRCxhQUFhLENBQUE7QUFDeEIsQ0FBQyxDQUFBOztBQUVEO0FBQ0E7QUFDQTtBQUNPLE1BQU1JLFVBQVUsR0FBRztBQUN0QkMsRUFBQUEsS0FBSyxFQUFFLE9BQU87QUFDZEMsRUFBQUEsTUFBTSxFQUFFLFFBQVE7QUFDaEJyTCxFQUFBQSxJQUFJLEVBQUUsTUFBTTtBQUNaL2QsRUFBQUEsSUFBSSxFQUFFLE1BQUE7QUFDVixDQUFDLENBQUE7QUFFTSxNQUFNcXBCLGFBQWEsR0FBRztBQUN6QkMsRUFBQUEsR0FBRyxFQUFFLEtBQUs7QUFDVkMsRUFBQUEsTUFBTSxFQUFFLFFBQUE7QUFDWixDQUFDLENBQUE7QUFFTSxNQUFNQyxhQUFhLEdBQUc7QUFDekJDLEVBQUFBLGVBQWUsRUFBRSwyQkFBMkI7QUFDNUNDLEVBQUFBLHFCQUFxQixFQUFFLGlDQUFpQztBQUN4RGxQLEVBQUFBLElBQUksRUFBRSxzQkFBc0I7QUFDNUJtUCxFQUFBQSxNQUFNLEVBQUUsd0JBQXdCO0FBQ2hDQyxFQUFBQSxPQUFPLEVBQUUseUJBQXlCO0FBQ2xDQyxFQUFBQSxLQUFLLEVBQUUsdUJBQUE7QUFDWCxDQUFDLENBQUE7QUFFTSxNQUFNQyxxQkFBcUIsR0FBRztBQUNqQ0MsRUFBQUEsZ0JBQWdCLEVBQUUsNEJBQTRCO0FBQzlDQyxFQUFBQSxXQUFXLEVBQUUsdUJBQUE7QUFDakIsQ0FBQyxDQUFBO0FBRU0sTUFBTUMsa0JBQWtCLEdBQUc7QUFDOUJDLEVBQUFBLHNCQUFzQixFQUFFLGtDQUFrQztBQUMxREMsRUFBQUEsaUJBQWlCLEVBQUUsNkJBQTZCO0FBQ2hEQyxFQUFBQSxxQkFBcUIsRUFBRSxpQ0FBQTtBQUMzQixDQUFDLENBQUE7QUFFTSxNQUFNQyxrQkFBa0IsR0FBRztBQUM5QkMsRUFBQUEsc0JBQXNCLEVBQUUsa0NBQWtDO0FBQzFEQyxFQUFBQSxvQkFBb0IsRUFBRSxnQ0FBZ0M7QUFDdERDLEVBQUFBLFVBQVUsRUFBRSxtQ0FBbUM7QUFDL0NDLEVBQUFBLFNBQVMsRUFBRSxrQ0FBa0M7QUFDN0NDLEVBQUFBLFFBQVEsRUFBRSxpQ0FBaUM7QUFDM0NDLEVBQUFBLFFBQVEsRUFBRSxpQ0FBQTtBQUNkLENBQUM7O0FDckVjLFNBQVNDLGNBQWNBLENBQUM1akIsS0FBSyxFQUFFO0VBQzFDLE1BQU02akIsY0FBYyxHQUFHQyxNQUFNLEVBQUUsQ0FBQTtFQUMvQixNQUFNLENBQUNDLGNBQWMsRUFBRUMsa0JBQWtCLENBQUMsR0FBR0MsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQ3pELEVBQUEsTUFBTSxDQUFDN1osVUFBVSxFQUFFOFosYUFBYSxDQUFDLEdBQUdELFFBQVEsQ0FBQztJQUFFLEdBQUd0QyxpQkFBQUE7QUFBa0IsR0FBQyxDQUFDLENBQUE7RUFDdEUsTUFBTSxDQUFDd0MsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBR0gsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBOztBQUVsRDtBQUNKO0FBQ0E7QUFDQTtFQUNJLE1BQU1JLGdCQUFnQixHQUFHQSxNQUFNO0lBQzNCLElBQUl4QyxJQUFJLEdBQUc5akIsTUFBTSxDQUFDOEwsVUFBVSxHQUFHZ2EsY0FBYyxDQUFDaHRCLE9BQU8sQ0FBQ3l0QixXQUFXLENBQUE7SUFDakUsSUFBSXpDLElBQUksR0FBRyxJQUFJLEVBQUU7QUFDYixNQUFBLElBQUlDLGFBQWEsR0FBR0Ysc0JBQXNCLENBQUNDLElBQUksQ0FBQyxDQUFBO0FBQ2hEcUMsTUFBQUEsYUFBYSxDQUFDO1FBQUUsR0FBR3BDLGFBQUFBO0FBQWMsT0FBQyxDQUFDLENBQUE7QUFDdkMsS0FBQyxNQUFNO0FBQ0hvQyxNQUFBQSxhQUFhLENBQUM7UUFBRSxHQUFHdkMsaUJBQUFBO0FBQWtCLE9BQUMsQ0FBQyxDQUFBO0FBQzNDLEtBQUE7R0FDSCxDQUFBO0FBRUQsRUFBQSxNQUFNNEMsb0JBQW9CLEdBQUdBLENBQUNDLElBQUksRUFBRUMsTUFBTSxLQUFLO0FBQzNDLElBQUEsSUFBSUEsTUFBTSxLQUFLcEMsYUFBYSxDQUFDRSxNQUFNLEVBQUU7TUFDakNpQyxJQUFJLEVBQUVFLFNBQVMsRUFBRW5DLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDRyxNQUFNLENBQUMsQ0FBQTtBQUNqRCxLQUFDLE1BQU07TUFDSDZCLElBQUksRUFBRUUsU0FBUyxFQUFFcEMsR0FBRyxDQUFDRSxhQUFhLENBQUNHLE1BQU0sQ0FBQyxDQUFBO0FBQzlDLEtBQUE7R0FDSCxDQUFBOztBQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJLEVBQUEsTUFBTWdDLGlCQUFpQixHQUFHQSxDQUFDSCxJQUFJLEVBQUVDLE1BQU0sS0FBSztJQUN4QyxJQUFJRCxJQUFJLEVBQUUxdEIsTUFBTSxFQUFFO0FBQ2QwdEIsTUFBQUEsSUFBSSxDQUFDL2tCLE9BQU8sQ0FBQytULElBQUksSUFBSTtBQUNqQitRLFFBQUFBLG9CQUFvQixDQUFDL1EsSUFBSSxFQUFFaVIsTUFBTSxDQUFDLENBQUE7QUFDdEMsT0FBQyxDQUFDLENBQUE7QUFDTixLQUFBO0dBQ0gsQ0FBQTs7QUFFRDtBQUNKO0FBQ0E7RUFDSSxNQUFNRyxlQUFlLEdBQUdsckIsQ0FBQyxJQUFJO0FBQ3pCLElBQUEsSUFBSW1yQixXQUFXLEdBQUduckIsQ0FBQyxDQUFDNkYsTUFBTSxDQUFBOztBQUUxQjtBQUNBLElBQUEsT0FBT3NsQixXQUFXLEVBQUU7TUFDaEIsSUFBSUEsV0FBVyxDQUFDSCxTQUFTLENBQUNJLFFBQVEsQ0FBQ3RDLGFBQWEsQ0FBQ2hQLElBQUksQ0FBQyxFQUFFLE1BQUE7TUFDeERxUixXQUFXLEdBQUdBLFdBQVcsQ0FBQ0UsVUFBVSxDQUFBO0FBQ3hDLEtBQUE7SUFFQSxJQUFJQyxVQUFVLEdBQUdILFdBQVcsQ0FBQzdQLFNBQVMsQ0FBQ2lRLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUNqRCxJQUFBLE9BQU9ELFVBQVUsRUFBRTlsQixNQUFNLENBQUNzVSxJQUFJLElBQUlBLElBQUksQ0FBQ1EsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7R0FDL0QsQ0FBQTtBQUVELEVBQUEsTUFBTWtSLGFBQWEsR0FBR0EsQ0FBQ3hyQixDQUFDLEVBQUUrcUIsTUFBTSxLQUFLO0FBQ2pDLElBQUEsSUFBSUEsTUFBTSxFQUFFVSxVQUFVLEVBQUVWLE1BQU0sQ0FBQ1csT0FBTyxFQUFFLENBQUE7O0FBRXhDO0FBQ0EsSUFBQSxJQUFJQyxVQUFVLEdBQUdyVSxRQUFRLENBQUNzVSxhQUFhLENBQUUsSUFBR25CLFdBQVksQ0FBQSxDQUFDLENBQUMsRUFBRW9CLGdCQUFnQixDQUFFLENBQUEsQ0FBQSxFQUFHL0MsYUFBYSxDQUFDRyxNQUFPLEVBQUMsQ0FBQyxDQUFBO0FBQ3hHZ0MsSUFBQUEsaUJBQWlCLENBQUNVLFVBQVUsRUFBRWhELGFBQWEsQ0FBQ0UsTUFBTSxDQUFDLENBQUE7QUFFbkQsSUFBQSxJQUFJaUQsUUFBUSxHQUFHWixlQUFlLENBQUNsckIsQ0FBQyxDQUFDLENBQUE7O0FBRWpDO0FBQ0EsSUFBQSxJQUFJK3JCLGVBQWUsR0FBR3pVLFFBQVEsQ0FBQ3NVLGFBQWEsQ0FBRSxDQUFHbkIsQ0FBQUEsRUFBQUEsV0FBWSxDQUFDLENBQUEsQ0FBQyxFQUFFb0IsZ0JBQWdCLENBQUUsQ0FBR0MsQ0FBQUEsRUFBQUEsUUFBUyxFQUFDLENBQUMsQ0FBQTtBQUNqR2IsSUFBQUEsaUJBQWlCLENBQUNjLGVBQWUsRUFBRXBELGFBQWEsQ0FBQ0MsR0FBRyxDQUFDLENBQUE7R0FDeEQsQ0FBQTs7QUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJLE1BQU1vRCxzQkFBc0IsR0FBR0EsTUFBTTtBQUNqQyxJQUFBLElBQUkxbEIsS0FBSyxDQUFDMmxCLFlBQVksS0FBSyxRQUFRLEVBQUU7QUFDakMsTUFBQSxJQUFJQyxpQkFBaUIsR0FBRzVVLFFBQVEsQ0FBQ3NVLGFBQWEsQ0FBRSxDQUFBLENBQUEsRUFBR25CLFdBQVksQ0FBQSxDQUFDLENBQUMsRUFBRW1CLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtNQUMxRixJQUFJLENBQUNNLGlCQUFpQixFQUFFbEIsU0FBUyxFQUFFSSxRQUFRLENBQUN0QyxhQUFhLENBQUNHLE1BQU0sQ0FBQyxFQUFFO1FBQy9EaUQsaUJBQWlCLEVBQUVDLEtBQUssRUFBRSxDQUFBO0FBQzlCLE9BQUE7QUFDSixLQUFBO0dBQ0gsQ0FBQTtBQUVEQyxFQUFBQSxTQUFTLENBQUMsTUFBTTtBQUNaO0FBQ0ExQixJQUFBQSxjQUFjLENBQUMsSUFBSSxHQUFHMkIsRUFBTSxFQUFFLENBQUMsQ0FBQTtBQUUvQixJQUFBLElBQUksQ0FBQ2xDLGNBQWMsQ0FBQ2h0QixPQUFPLEVBQUUsT0FBQTs7QUFFN0I7QUFDQSxJQUFBLE1BQU1tdkIsY0FBYyxHQUFHLElBQUlDLGNBQWMsQ0FBQyxNQUFNO0FBQzVDNUIsTUFBQUEsZ0JBQWdCLEVBQUUsQ0FBQTtBQUN0QixLQUFDLENBQUMsQ0FBQTtBQUVGMkIsSUFBQUEsY0FBYyxDQUFDRSxPQUFPLENBQUNyQyxjQUFjLENBQUNodEIsT0FBTyxDQUFDLENBQUE7QUFFOUMsSUFBQSxPQUFPLE1BQU1tdkIsY0FBYyxDQUFDRyxVQUFVLEVBQUUsQ0FBQTtHQUMzQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0FBRU5MLEVBQUFBLFNBQVMsQ0FBQyxNQUFNO0FBQ1osSUFBQSxJQUFJOWxCLEtBQUssQ0FBQ29tQixJQUFJLEVBQUVDLE1BQU0sS0FBSyxXQUFXLElBQUksQ0FBQ3RDLGNBQWMsRUFBRWp0QixNQUFNLEVBQUU7QUFDL0RrdEIsTUFBQUEsa0JBQWtCLENBQ2Roa0IsS0FBSyxDQUFDb21CLElBQUksQ0FBQ3RjLEtBQUssQ0FBQ3VCLEdBQUcsQ0FBQyxDQUFDbUksSUFBSSxFQUFFdmMsQ0FBQyxLQUN6QmdhLGFBQUEsQ0FBQSxLQUFBLEVBQUE7QUFDSXpaLFFBQUFBLEdBQUcsRUFBRVAsQ0FBRTtRQUNQbWUsT0FBTyxFQUNIcFYsS0FBSyxDQUFDMmxCLFlBQVksS0FBSyxRQUFRLEdBQUdqc0IsQ0FBQyxJQUFJd3JCLGFBQWEsQ0FBQ3hyQixDQUFDLEVBQUVzRyxLQUFLLENBQUN5a0IsTUFBTSxFQUFFL21CLEdBQUcsQ0FBQzhWLElBQUksQ0FBQyxDQUFDLEdBQUdqYyxTQUN0RjtRQUNEeWQsU0FBUyxFQUFHLEdBQUV3TixhQUFhLENBQUNoUCxJQUFLLENBQU92YyxLQUFBQSxFQUFBQSxDQUFFLElBQ3RDK0ksS0FBSyxDQUFDMmxCLFlBQVksS0FBSyxRQUFRLEdBQ3pCMUMsa0JBQWtCLENBQUNFLGlCQUFpQixHQUNwQ0wscUJBQXFCLENBQUNFLFdBQy9CLENBQUEsQ0FBQTtPQUVBaGpCLEVBQUFBLEtBQUssQ0FBQzZPLE9BQU8sQ0FBQ25SLEdBQUcsQ0FBQzhWLElBQUksQ0FBQyxDQUUvQixDQUFDLENBQ0wsQ0FBQTtBQUNMLEtBQUE7QUFDSixHQUFDLEVBQUUsQ0FBQ3hULEtBQUssQ0FBQ29tQixJQUFJLENBQUMsQ0FBQyxDQUFBO0FBRWhCLEVBQUEsT0FDSW5WLGFBQUEsQ0FBQSxLQUFBLEVBQUE7SUFDSStELFNBQVMsRUFBRSxDQUNQd04sYUFBYSxDQUFDQyxlQUFlLEVBQzdCMEIsV0FBVyxFQUNYbmtCLEtBQUssQ0FBQzJsQixZQUFZLEtBQUssUUFBUSxHQUN6QjFDLGtCQUFrQixDQUFDQyxzQkFBc0IsR0FDekNKLHFCQUFxQixDQUFDQyxnQkFBZ0IsRUFDNUMvaUIsS0FBSyxDQUFDMEosbUJBQW1CLEdBQUc4WSxhQUFhLENBQUNJLE9BQU8sR0FBRyxFQUFFLEVBQ3RELENBQUM1aUIsS0FBSyxDQUFDeUosc0JBQXNCLElBQUl6SixLQUFLLENBQUMybEIsWUFBWSxLQUFLLFFBQVEsR0FDMUQxQyxrQkFBa0IsQ0FBQ0cscUJBQXFCLEdBQ3hDLEVBQUUsQ0FDWCxDQUFDalMsSUFBSSxDQUFDLEdBQUcsQ0FBRTtBQUNabUwsSUFBQUEsR0FBRyxFQUFFdUgsY0FBQUE7QUFBZSxHQUFBLEVBRW5CRSxjQUFjLEVBQUVqdEIsTUFBTSxHQUNuQm1hLGFBQUEsQ0FBQzRHLGFBQWEsRUFBQTtBQUNWL04sSUFBQUEsS0FBSyxFQUFFaWEsY0FBZTtBQUN0QjNaLElBQUFBLFVBQVUsRUFBRUEsVUFBVztJQUN2QlIsUUFBUSxFQUFFNUosS0FBSyxDQUFDNEosUUFBUztJQUN6QlYsUUFBUSxFQUFFbEosS0FBSyxDQUFDa0osUUFBUztJQUN6QkUsaUJBQWlCLEVBQUVwSixLQUFLLENBQUNvSixpQkFBa0I7SUFDM0NELGdCQUFnQixFQUFFbkosS0FBSyxDQUFDbUosZ0JBQWlCO0lBQ3pDTSxzQkFBc0IsRUFBRXpKLEtBQUssQ0FBQ3lKLHNCQUF1QjtJQUNyREMsbUJBQW1CLEVBQUUxSixLQUFLLENBQUMwSixtQkFBb0I7SUFDL0NiLGlCQUFpQixFQUFFN0ksS0FBSyxDQUFDNkksaUJBQWtCO0lBQzNDRSxhQUFhLEVBQUUvSSxLQUFLLENBQUMrSSxhQUFjO0lBQ25DZ0Isa0JBQWtCLEVBQUUvSixLQUFLLENBQUMrSixrQkFBbUI7SUFDN0NDLGFBQWEsRUFBRWhLLEtBQUssQ0FBQ2dLLGFBQWM7SUFDbkNRLGFBQWEsRUFBRXhLLEtBQUssQ0FBQ3dLLGFBQWM7QUFDbkNFLElBQUFBLGFBQWEsRUFBRWdiLHNCQUF1QjtBQUN0Qy9hLElBQUFBLFNBQVMsRUFBRSthLHNCQUFBQTtBQUF1QixHQUFBLENBQ3BDLEdBRUZ6VSxhQUFBLENBQUEsS0FBQSxFQUFBO0lBQUsrRCxTQUFTLEVBQUV3TixhQUFhLENBQUNFLHFCQUFBQTtBQUFzQixHQUFBLENBQ3ZELENBQ0MsQ0FBQTtBQUVkOztBQ3pLZSxTQUFTNEQsbUJBQW1CQSxDQUFDdG1CLEtBQUssRUFBRTtFQUMvQyxNQUFNdW1CLGVBQWUsR0FBR3pDLE1BQU0sRUFBRSxDQUFBO0VBQ2hDLE1BQU0sQ0FBQ0MsY0FBYyxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUE7RUFDekQsTUFBTSxDQUFDN1osVUFBVSxFQUFFOFosYUFBYSxDQUFDLEdBQUdELFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtFQUNsRCxNQUFNLENBQUNFLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUdILFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtFQUNsRCxNQUFNLENBQUN1QyxnQkFBZ0IsRUFBRUMsbUJBQW1CLENBQUMsR0FBR3hDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtFQUMzRCxNQUFNLENBQUN5QyxzQkFBc0IsRUFBRUMseUJBQXlCLENBQUMsR0FBRzFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtFQUN2RSxNQUFNLENBQUMyQyxnQkFBZ0IsRUFBRUMsbUJBQW1CLENBQUMsR0FBRzVDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTs7QUFFM0Q7RUFDQSxNQUFNLENBQUM2QyxrQkFBa0IsRUFBRUMscUJBQXFCLENBQUMsR0FBRzlDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTs7QUFFbEU7QUFDSjtBQUNBO0FBQ0E7RUFDSSxNQUFNSSxnQkFBZ0IsR0FBR0EsTUFBTTtJQUMzQixJQUFJeEMsSUFBSSxHQUFHOWpCLE1BQU0sQ0FBQzhMLFVBQVUsR0FBRzBjLGVBQWUsRUFBRTF2QixPQUFPLEVBQUV5dEIsV0FBVyxDQUFBO0lBQ3BFLElBQUl6QyxJQUFJLEdBQUcsR0FBRyxFQUFFO0FBQ1osTUFBQSxJQUFJQyxhQUFhLEdBQUdGLHNCQUFzQixDQUFDQyxJQUFJLENBQUMsQ0FBQTtBQUNoRHFDLE1BQUFBLGFBQWEsQ0FBQztRQUFFLEdBQUdwQyxhQUFBQTtBQUFjLE9BQUMsQ0FBQyxDQUFBO0FBQ3ZDLEtBQUMsTUFBTTtBQUNIb0MsTUFBQUEsYUFBYSxDQUFDO1FBQUUsR0FBR3ZDLGlCQUFBQTtBQUFrQixPQUFDLENBQUMsQ0FBQTtBQUMzQyxLQUFBO0dBQ0gsQ0FBQTs7QUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJLE1BQU1xRixXQUFXLEdBQUdBLE1BQU07SUFDdEJQLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3RCUSxjQUFjLENBQUMvRSxVQUFVLENBQUNDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7R0FDNUMsQ0FBQTs7QUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJLE1BQU0rRSxhQUFhLEdBQUdBLE1BQU07SUFDeEJKLGtCQUFrQixFQUFFcE4sT0FBTyxDQUFDa04sZ0JBQWdCLEdBQUdGLHNCQUFzQixHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQzFFTyxjQUFjLENBQUMvRSxVQUFVLENBQUNFLE1BQU0sRUFBRSxJQUFJLEVBQUV3RSxnQkFBZ0IsQ0FBQyxDQUFBO0lBQ3pESCxtQkFBbUIsQ0FBQ0csZ0JBQWdCLENBQUMsQ0FBQTtHQUN4QyxDQUFBOztBQUVEO0FBQ0o7QUFDQTtFQUNJLE1BQU1PLFdBQVcsR0FBR0EsTUFBTTtJQUN0QixJQUFJLENBQUNYLGdCQUFnQixFQUFFO0FBQ25CO0FBQ0FVLE1BQUFBLGFBQWEsRUFBRSxDQUFBO0FBQ25CLEtBQUMsTUFBTTtBQUNIRCxNQUFBQSxjQUFjLENBQUMvRSxVQUFVLENBQUNscEIsSUFBSSxFQUFFOHRCLGtCQUFrQixFQUFFNU8sU0FBUyxFQUFFc08sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDcEZDLE1BQUFBLG1CQUFtQixDQUFDRCxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUM3QyxLQUFBO0dBQ0gsQ0FBQTs7QUFFRDtBQUNKO0FBQ0E7RUFDSSxNQUFNWSxXQUFXLEdBQUdBLE1BQU07SUFDdEIsSUFBSVosZ0JBQWdCLEtBQUtJLGdCQUFnQixFQUFFO0FBQ3ZDO0FBQ0FFLE1BQUFBLGtCQUFrQixFQUFFcE4sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQzlCc04sTUFBQUEsV0FBVyxFQUFFLENBQUE7QUFDakIsS0FBQyxNQUFNO0FBQ0hDLE1BQUFBLGNBQWMsQ0FBQy9FLFVBQVUsQ0FBQ25MLElBQUksRUFBRStQLGtCQUFrQixFQUFFM08sU0FBUyxFQUFFcU8sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDcEZDLE1BQUFBLG1CQUFtQixDQUFDRCxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUM3QyxLQUFBO0dBQ0gsQ0FBQTs7QUFFRDtBQUNKO0FBQ0E7QUFDSSxFQUFBLE1BQU1hLGlCQUFpQixHQUFHQSxDQUFDaEIsTUFBTSxFQUFFaUIsUUFBUSxLQUFLO0lBQzVDLElBQUlDLGtCQUFrQixHQUFHLENBQUMsQ0FBQTtBQUUxQixJQUFBLEtBQUssSUFBSXR3QixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdxd0IsUUFBUSxFQUFFeHdCLE1BQU0sRUFBRUcsQ0FBQyxFQUFFLEVBQUU7QUFDdkM7QUFDQTtBQUNBLE1BQUEsSUFDSXF3QixRQUFRLENBQUNyd0IsQ0FBQyxDQUFDLENBQUN5dEIsU0FBUyxFQUFFSSxRQUFRLENBQUN0QyxhQUFhLENBQUNHLE1BQU0sQ0FBQyxJQUNyRCxDQUFDMkUsUUFBUSxDQUFDcndCLENBQUMsQ0FBQyxFQUFFdXdCLGFBQWEsRUFBRTlDLFNBQVMsRUFBRUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUM5RDtBQUNFO0FBQ0F5QyxRQUFBQSxrQkFBa0IsR0FBR2xCLE1BQU0sS0FBS25FLFVBQVUsQ0FBQ25MLElBQUksR0FBRzlmLENBQUMsR0FBRyxDQUFDLEdBQUdBLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDbkUsT0FBQTtNQUNBcXdCLFFBQVEsQ0FBQ3J3QixDQUFDLENBQUMsQ0FBQ3l0QixTQUFTLEVBQUVuQyxNQUFNLENBQUNDLGFBQWEsQ0FBQ0csTUFBTSxDQUFDLENBQUE7QUFDdkQsS0FBQTtBQUVBLElBQUEsT0FBTzRFLGtCQUFrQixDQUFBO0dBQzVCLENBQUE7O0FBRUQ7QUFDSjtBQUNBO0VBQ0ksTUFBTU4sY0FBYyxHQUFHQSxDQUFDWixNQUFNLEVBQUVvQixnQkFBZ0IsRUFBRUMsU0FBUyxLQUFLO0FBQzVELElBQUEsSUFBSUosUUFBUSxHQUFHdFcsUUFBUSxDQUFDc1UsYUFBYSxDQUFFLElBQUduQixXQUFZLENBQUEsQ0FBQyxDQUFDLEVBQUVvQixnQkFBZ0IsQ0FBRSxDQUFBLENBQUEsRUFBRy9DLGFBQWEsQ0FBQ2hQLElBQUssRUFBQyxDQUFDLENBQUE7QUFDcEcsSUFBQSxJQUFJK1Qsa0JBQWtCLEdBQUdGLGlCQUFpQixDQUFDaEIsTUFBTSxFQUFFaUIsUUFBUSxDQUFDLENBQUE7O0FBRTVEO0FBQ0EsSUFBQSxJQUFJakIsTUFBTSxLQUFLbkUsVUFBVSxDQUFDQyxLQUFLLEVBQUU7QUFDN0I7QUFDQTtBQUNBLE1BQUEsSUFBSXdGLFVBQVUsR0FBRzNXLFFBQVEsQ0FDcEJzVSxhQUFhLENBQUUsSUFBR25CLFdBQVksQ0FBQSxDQUFDLENBQUMsRUFDL0JvQixnQkFBZ0IsQ0FBRSxDQUFBLENBQUEsRUFBR2xDLGtCQUFrQixDQUFDRyxVQUFXLEVBQUMsQ0FBQyxDQUFBO01BQzNEbUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFakQsU0FBUyxFQUFFcEMsR0FBRyxDQUFDRSxhQUFhLENBQUNHLE1BQU0sQ0FBQyxDQUFBO0FBQ3ZELEtBQUMsTUFBTSxJQUFJMEQsTUFBTSxLQUFLbkUsVUFBVSxDQUFDRSxNQUFNLEVBQUU7QUFDckM7QUFDQTtBQUNBLE1BQUEsSUFBSXdGLFNBQVMsR0FBRzVXLFFBQVEsQ0FDbkJzVSxhQUFhLENBQUUsSUFBR25CLFdBQVksQ0FBQSxDQUFDLENBQUMsRUFDL0JvQixnQkFBZ0IsQ0FBRSxDQUFBLENBQUEsRUFBR2xDLGtCQUFrQixDQUFDSSxTQUFVLEVBQUMsQ0FBQyxDQUFBO01BQzFEbUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFbEQsU0FBUyxFQUFFcEMsR0FBRyxDQUFDRSxhQUFhLENBQUNHLE1BQU0sQ0FBQyxDQUFBO0FBQ3RELEtBQUMsTUFBTTtBQUNIO0FBQ0E7QUFDQSxNQUFBLElBQUksQ0FBQzJFLFFBQVEsQ0FBQ0Msa0JBQWtCLENBQUMsRUFBRUMsYUFBYSxFQUFFOUMsU0FBUyxFQUFFSSxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDL0UyQyxRQUFBQSxnQkFBZ0IsRUFBRSxDQUFBO0FBQ3RCLE9BQUE7TUFDQUgsUUFBUSxDQUFDQyxrQkFBa0IsQ0FBQyxFQUFFN0MsU0FBUyxFQUFFcEMsR0FBRyxDQUFDRSxhQUFhLENBQUNHLE1BQU0sQ0FBQyxDQUFBO0FBQ3RFLEtBQUE7O0FBRUE7QUFDQSxJQUFBLElBQUlrRixZQUFZLEdBQUc3bkIsS0FBSyxDQUFDeWtCLE1BQU0sRUFBRS9tQixHQUFHLENBQUNzQyxLQUFLLENBQUNvbUIsSUFBSSxDQUFDdGMsS0FBSyxHQUFHNGQsU0FBUyxDQUFDLENBQUMsQ0FBQTtJQUNuRUksY0FBYyxDQUFDRCxZQUFZLENBQUMsQ0FBQTtHQUMvQixDQUFBOztBQUVEO0FBQ0o7QUFDQTtFQUNJLE1BQU1FLGNBQWMsR0FBR3J1QixDQUFDLElBQUk7QUFDeEJpdEIsSUFBQUEseUJBQXlCLENBQUNqdEIsQ0FBQyxDQUFDNFMsWUFBWSxDQUFDLENBQUE7QUFDekM0WCxJQUFBQSxhQUFhLENBQUM7TUFBRSxHQUFHOVosVUFBQUE7QUFBVyxLQUFDLENBQUMsQ0FBQTtBQUVoQyxJQUFBLElBQUk0ZCxlQUFlLEdBQUdob0IsS0FBSyxDQUFDeWtCLE1BQU0sRUFBRS9tQixHQUFHLENBQUNzQyxLQUFLLENBQUNvbUIsSUFBSSxDQUFDdGMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDOURnZSxjQUFjLENBQUNFLGVBQWUsQ0FBQyxDQUFBO0dBQ2xDLENBQUE7O0FBRUQ7QUFDSjtBQUNBO0VBQ0ksTUFBTUMsZ0JBQWdCLEdBQUd2dUIsQ0FBQyxJQUFJO0FBQzFCaXRCLElBQUFBLHlCQUF5QixDQUFDanRCLENBQUMsQ0FBQzRTLFlBQVksQ0FBQyxDQUFBO0FBQ3pDK1gsSUFBQUEsZ0JBQWdCLEVBQUUsQ0FBQTtBQUNsQjJDLElBQUFBLFdBQVcsRUFBRSxDQUFBO0dBQ2hCLENBQUE7O0FBRUQ7QUFDSjtBQUNBO0VBQ0ksTUFBTWMsY0FBYyxHQUFHckQsTUFBTSxJQUFJO0FBQzdCLElBQUEsSUFBSUEsTUFBTSxFQUFFVSxVQUFVLEVBQUVWLE1BQU0sQ0FBQ1csT0FBTyxFQUFFLENBQUE7R0FDM0MsQ0FBQTtBQUVEVSxFQUFBQSxTQUFTLENBQUMsTUFBTTtBQUNaLElBQUEsSUFBSTlsQixLQUFLLENBQUNvbUIsSUFBSSxFQUFFQyxNQUFNLEtBQUssV0FBVyxJQUFJLENBQUN0QyxjQUFjLEVBQUVqdEIsTUFBTSxFQUFFO0FBQy9ELE1BQUEsSUFBSW94QixPQUFPLEdBQUdsb0IsS0FBSyxDQUFDb21CLElBQUksQ0FBQ3RjLEtBQUssQ0FBQ3VCLEdBQUcsQ0FBQyxDQUFDbUksSUFBSSxFQUFFMlUsR0FBRyxLQUN6Q2xYLGFBQUEsQ0FBQSxLQUFBLEVBQUE7QUFDSXpaLFFBQUFBLEdBQUcsRUFBRTJ3QixHQUFJO0FBQ1RuVCxRQUFBQSxTQUFTLEVBQUcsQ0FBRXdOLEVBQUFBLGFBQWEsQ0FBQ2hQLElBQUssSUFDN0IyVSxHQUFHLEtBQUssQ0FBQyxHQUFHOUUsa0JBQWtCLENBQUNHLFVBQVUsR0FBRyxHQUFHLEdBQUdoQixhQUFhLENBQUNHLE1BQU0sR0FBRyxFQUM1RSxJQUFHd0YsR0FBRyxLQUFLbm9CLEtBQUssQ0FBQ29tQixJQUFJLENBQUN0YyxLQUFLLENBQUNoVCxNQUFNLEdBQUcsQ0FBQyxHQUFHdXNCLGtCQUFrQixDQUFDSSxTQUFTLEdBQUcsRUFBRyxDQUFBLENBQUE7T0FFM0V6akIsRUFBQUEsS0FBSyxDQUFDNk8sT0FBTyxDQUFDblIsR0FBRyxDQUFDOFYsSUFBSSxDQUFDLENBRS9CLENBQUMsQ0FBQTtBQUVGcVQsTUFBQUEsbUJBQW1CLENBQUNxQixPQUFPLENBQUNweEIsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO01BQ3ZDa3RCLGtCQUFrQixDQUFDa0UsT0FBTyxDQUFDLENBQUE7QUFDL0IsS0FBQTtBQUNKLEdBQUMsRUFBRSxDQUFDbG9CLEtBQUssQ0FBQ29tQixJQUFJLENBQUMsQ0FBQyxDQUFBO0FBRWhCTixFQUFBQSxTQUFTLENBQUMsTUFBTTtBQUNaO0FBQ0ExQixJQUFBQSxjQUFjLENBQUMsSUFBSSxHQUFHMkIsRUFBTSxFQUFFLENBQUMsQ0FBQTtHQUNsQyxFQUFFLEVBQUUsQ0FBQyxDQUFBOztBQUVOO0FBQ0o7QUFDQTtBQUNJLEVBQUEsTUFBTXFDLGlCQUFpQixHQUFHQyxXQUFXLENBQUM3RCxJQUFJLElBQUk7SUFDMUMsSUFBSUEsSUFBSSxFQUFFSCxnQkFBZ0IsRUFBRSxDQUFBO0dBQy9CLEVBQUUsRUFBRSxDQUFDLENBQUE7QUFFTixFQUFBLE9BQU9OLGNBQWMsRUFBRWp0QixNQUFNLEdBQ3pCbWEsYUFBQSxDQUFBLEtBQUEsRUFBQTtJQUFLK0QsU0FBUyxFQUFFcU8sa0JBQWtCLENBQUNDLHNCQUF1QjtBQUFDaEgsSUFBQUEsR0FBRyxFQUFFOEwsaUJBQUFBO0FBQWtCLEdBQUEsRUFDOUVuWCxhQUFBLENBQUEsUUFBQSxFQUFBO0lBQVErRCxTQUFTLEVBQUVxTyxrQkFBa0IsQ0FBQ0ssUUFBUztBQUFDdE8sSUFBQUEsT0FBTyxFQUFFK1IsV0FBQUE7QUFBWSxHQUFBLENBQVUsRUFDL0VsVyxhQUFBLENBQUEsS0FBQSxFQUFBO0FBQUsrRCxJQUFBQSxTQUFTLEVBQUUsQ0FBQ21QLFdBQVcsRUFBRWQsa0JBQWtCLENBQUNFLG9CQUFvQixDQUFDLENBQUNwUyxJQUFJLENBQUMsR0FBRyxDQUFFO0FBQUNtTCxJQUFBQSxHQUFHLEVBQUVpSyxlQUFBQTtHQUNsRm5jLEVBQUFBLFVBQVUsSUFDUDZHLGFBQUEsQ0FBQzRHLGFBQUFBO0FBQ0c7QUFBQSxJQUFBO0FBQ0F5RSxJQUFBQSxHQUFHLEVBQUVnTSxFQUFFLElBQUl2QixxQkFBcUIsQ0FBQ3VCLEVBQUUsQ0FBRTtBQUNyQ3hlLElBQUFBLEtBQUssRUFBRWlhLGNBQWU7QUFDdEIzWixJQUFBQSxVQUFVLEVBQUVBLFVBQVc7QUFDdkJSLElBQUFBLFFBQVEsRUFBRSxJQUFLO0FBQ2ZWLElBQUFBLFFBQVEsRUFBRSxLQUFNO0FBQ2hCTyxJQUFBQSxzQkFBc0IsRUFBRSxJQUFLO0FBQzdCQyxJQUFBQSxtQkFBbUIsRUFBRSxJQUFBO0FBQ3JCO0FBQUE7QUFDQWIsSUFBQUEsaUJBQWlCLEVBQUUsR0FBSTtBQUN2QmtCLElBQUFBLGtCQUFrQixFQUFFLEtBQU07QUFDMUJDLElBQUFBLGFBQWEsRUFBRSxLQUFNO0FBQ3JCUSxJQUFBQSxhQUFhLEVBQUUsS0FBTTtBQUNyQkUsSUFBQUEsYUFBYSxFQUFFcWQsY0FBZTtBQUM5QnBkLElBQUFBLFNBQVMsRUFBRXNkLGdCQUFBQTtHQUVsQixDQUFBLENBQ0MsRUFDTmhYLGFBQUEsQ0FBQSxRQUFBLEVBQUE7SUFBUStELFNBQVMsRUFBRXFPLGtCQUFrQixDQUFDTSxRQUFTO0FBQUN2TyxJQUFBQSxPQUFPLEVBQUVnUyxXQUFBQTtHQUFzQixDQUFBLENBQzdFLEdBRU5uVyxhQUFBLENBQUEsS0FBQSxFQUFBO0lBQUsrRCxTQUFTLEVBQUV3TixhQUFhLENBQUNFLHFCQUFBQTtHQUNqQyxDQUFBLENBQUE7QUFDTDs7QUN4Tk8sU0FBUzZGLGFBQWFBLENBQUN2b0IsS0FBSyxFQUFFO0FBQ2pDLEVBQUEsT0FDSyxDQUFDQSxLQUFLLENBQUMybEIsWUFBWSxLQUFLLFFBQVEsSUFBSTNsQixLQUFLLENBQUMybEIsWUFBWSxLQUFLLFFBQVEsS0FDaEUxVSxhQUFBLENBQUMyUyxjQUFjLEVBQUE7SUFDWCtCLFlBQVksRUFBRTNsQixLQUFLLENBQUMybEIsWUFBYTtJQUNqQ1MsSUFBSSxFQUFFcG1CLEtBQUssQ0FBQ29tQixJQUFLO0lBQ2pCM0IsTUFBTSxFQUFFemtCLEtBQUssQ0FBQ3lrQixNQUFPO0lBQ3JCNVYsT0FBTyxFQUFFN08sS0FBSyxDQUFDNk8sT0FBUTtJQUN2QmpGLFFBQVEsRUFBRTVKLEtBQUssQ0FBQzRKLFFBQVM7SUFDekJWLFFBQVEsRUFBRWxKLEtBQUssQ0FBQ2tKLFFBQVM7SUFDekJFLGlCQUFpQixFQUFFcEosS0FBSyxDQUFDb0osaUJBQWtCO0lBQzNDRCxnQkFBZ0IsRUFBRW5KLEtBQUssQ0FBQ21KLGdCQUFpQjtJQUN6Q00sc0JBQXNCLEVBQUV6SixLQUFLLENBQUN5SixzQkFBdUI7SUFDckRDLG1CQUFtQixFQUFFMUosS0FBSyxDQUFDMEosbUJBQW9CO0lBQy9DYixpQkFBaUIsRUFBRTdJLEtBQUssQ0FBQzZJLGlCQUFrQjtJQUMzQ0UsYUFBYSxFQUFFL0ksS0FBSyxDQUFDK0ksYUFBYztJQUNuQ2dCLGtCQUFrQixFQUFFL0osS0FBSyxDQUFDK0osa0JBQW1CO0lBQzdDQyxhQUFhLEVBQUVoSyxLQUFLLENBQUNnSyxhQUFjO0lBQ25DUSxhQUFhLEVBQUV4SyxLQUFLLENBQUN3SyxhQUFBQTtHQUU1QixDQUFBLElBQ0F4SyxLQUFLLENBQUMybEIsWUFBWSxLQUFLLE9BQU8sSUFDM0IxVSxhQUFBLENBQUNxVixtQkFBbUIsRUFBQTtJQUFDRixJQUFJLEVBQUVwbUIsS0FBSyxDQUFDb21CLElBQUs7SUFBQzNCLE1BQU0sRUFBRXprQixLQUFLLENBQUN5a0IsTUFBTztJQUFDNVYsT0FBTyxFQUFFN08sS0FBSyxDQUFDNk8sT0FBQUE7QUFBUSxHQUFBLENBQ3RGLElBQ0VvQyxhQUFBLENBQUEsS0FBQSxFQUFBO0lBQUsrRCxTQUFTLEVBQUV3TixhQUFhLENBQUNLLEtBQUFBO0FBQU0sR0FBQSxFQUNoQzVSLGFBQUEsQ0FBQSxHQUFBLEVBQUEsSUFBQSxFQUFHLG1EQUFpRCxDQUFJLENBRS9ELENBQUE7QUFFVDs7OzsifQ==
