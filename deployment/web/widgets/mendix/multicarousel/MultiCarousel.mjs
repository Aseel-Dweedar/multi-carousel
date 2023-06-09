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

/* get the required number of items in the current screen size depend on responsive object */
const getRequiredItems = responsive => {
  let screeWidth = window.innerWidth;
  if (screeWidth < 640) {
    return responsive[0]?.items;
  } else if (screeWidth >= 640 && screeWidth < 1024) {
    return responsive[640]?.items;
  } else if (screeWidth >= 1024 && screeWidth < 1200) {
    return responsive[1024]?.items;
  } else if (screeWidth >= 1200 && screeWidth < 1600) {
    return responsive[1200]?.items;
  } else if (screeWidth >= 1600 && screeWidth < 2560) {
    return responsive[1600]?.items;
  } else {
    return responsive[2560]?.items;
  }
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
  extra_item: "multi-carousel__extra-item",
  no_dots: "multi-carousel__no-dots",
  error: "multi-carousel__error",
  loading: "multi-carousel__loading"
};
const normalCarouselClasses = {
  normal_container: "normal-carousel__container",
  normal_item: "normal-carousel__item",
  normal_styled_btn: "normal-carousel__styled-btn"
};
const activeClickClasses = {
  active_click_container: "active-click-carousel__container",
  active_click_item: "active-click-carousel__item",
  active_click_styled_btn: "active-click-carousel__styled-btn"
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
  const [renderCarousel, setRenderCarousel] = useState(false);
  const [dataItems, setDataItems] = useState([]);
  const [carouselItems, setCarouselItems] = useState([]);
  const [uniqueClass, setUniqueClass] = useState("");
  const [carouselInfinite, setCarouselInfinite] = useState(props.infinite);
  const [responsive, setResponsive] = useState(null);
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
    if the item behavior "create extra items" calculate the number of extra items and get the final number of carousel items
  */
  const createCarouselItems = () => {
    let extraItems = [];
    if (props.itemsBehavior === "extra" && dataItems.length) {
      let currentRequiredItems = getRequiredItems(props.defaultResponsive);
      if (dataItems.length < currentRequiredItems) {
        for (let i = 0; i < currentRequiredItems - dataItems.length; i++) {
          extraItems.push(createElement("div", {
            className: commonClasses.extra_item
          }));
        }
        setCarouselInfinite(false);
      } else {
        setCarouselInfinite(props.infinite);
      }
    }
    setCarouselItems([...dataItems, ...extraItems]);
    setRenderCarousel(true);
  };

  /*
    set the items when render the widget or update the data
  */
  const setupCarouse = items => {
    let carouselItems = items.map((item, i) => createElement("div", {
      key: i,
      onClick: props.carouselType === "active" ? e => onCardClicked(e, props.action?.get(item)) : undefined,
      className: `${commonClasses.item} idx-${i} ${props.carouselType === "active" ? activeClickClasses.active_click_item : normalCarouselClasses.normal_item}`
    }, props.content.get(item)));
    setDataItems(carouselItems);
  };

  /*
    set the active item after the carousel has already been initialized
  */
  const onInitialized = () => {
    if (props.carouselType === "active") {
      let firstCarouselItem = document.querySelector(`.${uniqueClass}`)?.querySelector(".idx-0");
      firstCarouselItem?.click();
    }
  };

  /*
    on resize rerender the carousel to recalculate the extra items if necessary and reset the active item
  */
  const onResized = () => {
    setRenderCarousel(false);
    createCarouselItems();
  };

  /*
    when getting the item or updated it, rerender the carousel to recalculate the extra items if necessary and reset the active item 
  */
  useEffect(() => {
    if (props.data?.status === "available") {
      setRenderCarousel(false);
      setupCarouse(props.data.items);
    }
  }, [props.data?.items]);

  /*
    after getting the item or updated it and the item behavior "create extra items" calculate the number of extra items
  */
  useEffect(() => {
    // This condition is to prevent calling createCarouselItems before get the items "This happens at the first widget render"
    if (props.data?.status === "available") {
      createCarouselItems();
    }
  }, [dataItems]);
  useEffect(() => {
    // set a unique class in case of using two different carousel instances in the same document
    setUniqueClass("a-" + v4());

    // set the responsive object after initialize the container so the carousel re-render and take the correct dimensions
    // NOTE : force rerendering fix the bug with carousel overflow the parent container
    const resizeObserver = new ResizeObserver(() => {
      setResponsive({
        ...props.defaultResponsive
      });
    });
    resizeObserver.observe(carouselParent.current);
    return () => resizeObserver.disconnect();
  }, []);
  return createElement("div", {
    ref: carouselParent,
    className: [commonClasses.multi_container, uniqueClass, props.carouselType === "active" ? activeClickClasses.active_click_container : normalCarouselClasses.normal_container, props.disableDotsControls ? commonClasses.no_dots : "", !props.disableButtonsControls && props.buttonsStyle === "styled" ? props.carouselType === "active" ? activeClickClasses.active_click_styled_btn : normalCarouselClasses.normal_styled_btn : ""].join(" ")
  }, dataItems?.length && renderCarousel ? createElement(AliceCarousel, {
    items: carouselItems,
    responsive: responsive,
    infinite: carouselInfinite,
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
    onInitialized: onInitialized,
    onResized: onResized
  }) : createElement("div", {
    className: commonClasses.multi_empty_container
  }));
}

function ActiveSlideCarousel(props) {
  const [renderCarousel, setRenderCarousel] = useState(false);
  const [carousel_items, set_carousel_items] = useState([]);
  const [responsive, setResponsive] = useState(null);
  const [uniqueClass, setUniqueClass] = useState("");
  const [currentActiveIdx, setCurrentActiveIdx] = useState(0);
  const [numberOfDisplayedItems, setNumberOfDisplayedItems] = useState(0);
  const [numberOfAllItems, setNumberOfAllItems] = useState(0);

  // get the 'react-alice-carousel' built-in all method and properties
  const [carouselProperties, setCarouselProperties] = useState(null);

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
      let firstSlide = document.querySelector(`.${uniqueClass}`)?.querySelectorAll(`.${activeSlideClasses.first_item}`);

      // set the active item for the first item in the carousel that is not cloned one
      for (let i = 0; i < firstSlide.length; i++) {
        if (!firstSlide[i]?.parentElement?.classList?.contains("__cloned")) {
          firstSlide[i]?.classList?.add(commonClasses.active);
          break;
        }
      }
    } else if (status === statusList.goLast) {
      // querySelectorAll ==> the original item and the cloned one
      let lastSlide = document.querySelector(`.${uniqueClass}`)?.querySelectorAll(`.${activeSlideClasses.last_item}`);

      // set the active item for the last item in the carousel that is not cloned one
      for (let i = lastSlide.length - 1; i >= 0; i--) {
        if (!lastSlide[i]?.parentElement?.classList?.contains("__cloned")) {
          lastSlide[i]?.classList?.add(commonClasses.active);
          break;
        }
      }
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
      ...props.defaultResponsive
    });
    let firstItemAction = props.action?.get(props.data.items?.[0]);
    onSlideClicked(firstItemAction);
  };

  /*
      fired when resizing the carousel, carousel will always slide to the first item when resizing -"react-alice-carouse" way of work-
  */
  const onCarouselResize = e => {
    setNumberOfDisplayedItems(e.itemsInSlide);
    carouselProperties?.slideTo(0);
    resetSlider();
  };

  /*
      fired the current active item action if found
  */
  const onSlideClicked = action => {
    if (action?.canExecute) action.execute();
  };

  /*
    set the items when render the widget or update the data
  */
  const setupCarouse = items => {
    let newData = items.map((item, idx) => createElement("div", {
      key: idx,
      className: `${commonClasses.item} ${idx === 0 ? activeSlideClasses.first_item + " " + commonClasses.active : ""} ${idx === props.data.items.length - 1 ? activeSlideClasses.last_item : ""}`
    }, props.content.get(item)));
    setNumberOfAllItems(newData.length - 1);
    set_carousel_items(newData);
  };
  useEffect(() => {
    // This condition is to prevent render the carousel before get the items "This happens at the first widget render"
    if (props.data?.status === "available") {
      setRenderCarousel(true);
    }
  }, [carousel_items]);

  /*
    when getting the item or updated it set the carousel items 
  */
  useEffect(() => {
    if (props.data?.status === "available") {
      setRenderCarousel(false);
      setCurrentActiveIdx(0);
      setupCarouse(props.data.items);
    }
  }, [props.data?.items]);
  useEffect(() => {
    // set a unique class in case of using two different carousel instances in the same document
    setUniqueClass("a-" + v4());
  }, []);

  /*
      set the responsive object after initialize the container so it take the correct dimensions
  */
  const carouselContainer = useCallback(node => {
    if (node) setResponsive({
      ...props.defaultResponsive
    });
  }, []);
  return carousel_items?.length ? createElement("div", {
    className: activeSlideClasses.active_slide_container,
    ref: carouselContainer
  }, createElement("button", {
    className: activeSlideClasses.prev_btn,
    onClick: prevClicked
  }), createElement("div", {
    className: [uniqueClass, activeSlideClasses.active_slide_wrapper].join(" ")
  }, responsive && renderCarousel && createElement(AliceCarousel
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
    defaultResponsive: defaultResponsive,
    itemsBehavior: props.itemsBehavior,
    buttonsStyle: props.buttonsStyle
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlDYXJvdXNlbC5tanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi90eXBlcy9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9jYWxjdWxhdGVEaXJlY3Rpb24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY29tbW9uLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZUR1cmF0aW9uLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL3VwZGF0ZVRyYWNlLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9yZXNvbHZlRGlyZWN0aW9uLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZVZlbG9jaXR5LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZVBvc2l0aW9uLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY3JlYXRlT3B0aW9ucy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9jaGVja0lzUGFzc2l2ZVN1cHBvcnRlZC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9jaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvZ2V0SW5pdGlhbFN0YXRlLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2dldEluaXRpYWxQcm9wcy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9nZXRPcHRpb25zLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL3JvdGF0ZUJ5QW5nbGUuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3R5cGVzL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi9kZWZhdWx0UHJvcHMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL21hcHBlcnMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL21hdGguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL2VsZW1lbnRzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi91dGlscy9jb21tb24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL2NsYXNzbmFtZXMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL3RpbWVycy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvZGVidWcuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL3JlbmRlci5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvY29udHJvbHMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi92aWV3cy9TbGlkZUluZm8uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3ZpZXdzL1N0YWdlSXRlbS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdmlld3MvRG90c05hdmlnYXRpb24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3ZpZXdzL1BsYXlQYXVzZUJ1dHRvbi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdmlld3MvUHJldk5leHRCdXR0b24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3ZpZXdzL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi9yZWFjdC1hbGljZS1jYXJvdXNlbC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcGFyc2UuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzNS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbWQ1LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92My5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc2hhMS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjUuanMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9oZWxwZXIuanMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Ob3JtYWxDYXJvdXNlbC5qc3giLCIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BY3RpdmVTbGlkZUNhcm91c2VsLmpzeCIsIi4uLy4uLy4uLy4uLy4uL3NyYy9NdWx0aUNhcm91c2VsLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVHJhY2VEaXJlY3Rpb25LZXkgPSBleHBvcnRzLkRpcmVjdGlvbiA9IGV4cG9ydHMuQXhpcyA9IHZvaWQgMDtcbnZhciBUcmFjZURpcmVjdGlvbktleTtcbmV4cG9ydHMuVHJhY2VEaXJlY3Rpb25LZXkgPSBUcmFjZURpcmVjdGlvbktleTtcblxuKGZ1bmN0aW9uIChUcmFjZURpcmVjdGlvbktleSkge1xuICBUcmFjZURpcmVjdGlvbktleVtcIk5FR0FUSVZFXCJdID0gXCJORUdBVElWRVwiO1xuICBUcmFjZURpcmVjdGlvbktleVtcIlBPU0lUSVZFXCJdID0gXCJQT1NJVElWRVwiO1xuICBUcmFjZURpcmVjdGlvbktleVtcIk5PTkVcIl0gPSBcIk5PTkVcIjtcbn0pKFRyYWNlRGlyZWN0aW9uS2V5IHx8IChleHBvcnRzLlRyYWNlRGlyZWN0aW9uS2V5ID0gVHJhY2VEaXJlY3Rpb25LZXkgPSB7fSkpO1xuXG52YXIgRGlyZWN0aW9uO1xuZXhwb3J0cy5EaXJlY3Rpb24gPSBEaXJlY3Rpb247XG5cbihmdW5jdGlvbiAoRGlyZWN0aW9uKSB7XG4gIERpcmVjdGlvbltcIlRPUFwiXSA9IFwiVE9QXCI7XG4gIERpcmVjdGlvbltcIkxFRlRcIl0gPSBcIkxFRlRcIjtcbiAgRGlyZWN0aW9uW1wiUklHSFRcIl0gPSBcIlJJR0hUXCI7XG4gIERpcmVjdGlvbltcIkJPVFRPTVwiXSA9IFwiQk9UVE9NXCI7XG4gIERpcmVjdGlvbltcIk5PTkVcIl0gPSBcIk5PTkVcIjtcbn0pKERpcmVjdGlvbiB8fCAoZXhwb3J0cy5EaXJlY3Rpb24gPSBEaXJlY3Rpb24gPSB7fSkpO1xuXG52YXIgQXhpcztcbmV4cG9ydHMuQXhpcyA9IEF4aXM7XG5cbihmdW5jdGlvbiAoQXhpcykge1xuICBBeGlzW1wiWFwiXSA9IFwieFwiO1xuICBBeGlzW1wiWVwiXSA9IFwieVwiO1xufSkoQXhpcyB8fCAoZXhwb3J0cy5BeGlzID0gQXhpcyA9IHt9KSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZURpcmVjdGlvbiA9IGNhbGN1bGF0ZURpcmVjdGlvbjtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlRGlyZWN0aW9uKHRyYWNlKSB7XG4gIHZhciBkaXJlY3Rpb247XG4gIHZhciBuZWdhdGl2ZSA9IF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5ORUdBVElWRTtcbiAgdmFyIHBvc2l0aXZlID0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5LlBPU0lUSVZFO1xuICB2YXIgY3VycmVudCA9IHRyYWNlW3RyYWNlLmxlbmd0aCAtIDFdO1xuICB2YXIgcHJldmlvdXMgPSB0cmFjZVt0cmFjZS5sZW5ndGggLSAyXSB8fCAwO1xuXG4gIGlmICh0cmFjZS5ldmVyeShmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpID09PSAwO1xuICB9KSkge1xuICAgIHJldHVybiBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTk9ORTtcbiAgfVxuXG4gIGRpcmVjdGlvbiA9IGN1cnJlbnQgPiBwcmV2aW91cyA/IHBvc2l0aXZlIDogbmVnYXRpdmU7XG5cbiAgaWYgKGN1cnJlbnQgPT09IDApIHtcbiAgICBkaXJlY3Rpb24gPSBwcmV2aW91cyA8IDAgPyBwb3NpdGl2ZSA6IG5lZ2F0aXZlO1xuICB9XG5cbiAgcmV0dXJuIGRpcmVjdGlvbjtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVzb2x2ZUF4aXNEaXJlY3Rpb24gPSBleHBvcnRzLmdldERpcmVjdGlvblZhbHVlID0gZXhwb3J0cy5nZXREaXJlY3Rpb25LZXkgPSBleHBvcnRzLmdldERpZmZlcmVuY2UgPSB2b2lkIDA7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5cbnZhciBnZXREaXJlY3Rpb25LZXkgPSBmdW5jdGlvbiBnZXREaXJlY3Rpb25LZXkoKSB7XG4gIHZhciBvYmplY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIga2V5ID0gT2JqZWN0LmtleXMob2JqZWN0KS50b1N0cmluZygpO1xuXG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuUE9TSVRJVkU6XG4gICAgICByZXR1cm4gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5LlBPU0lUSVZFO1xuXG4gICAgY2FzZSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTkVHQVRJVkU6XG4gICAgICByZXR1cm4gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5FR0FUSVZFO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTk9ORTtcbiAgfVxufTtcblxuZXhwb3J0cy5nZXREaXJlY3Rpb25LZXkgPSBnZXREaXJlY3Rpb25LZXk7XG5cbnZhciBnZXREaXJlY3Rpb25WYWx1ZSA9IGZ1bmN0aW9uIGdldERpcmVjdGlvblZhbHVlKCkge1xuICB2YXIgdmFsdWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgcmV0dXJuIHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0gfHwgMDtcbn07XG5cbmV4cG9ydHMuZ2V0RGlyZWN0aW9uVmFsdWUgPSBnZXREaXJlY3Rpb25WYWx1ZTtcblxudmFyIGdldERpZmZlcmVuY2UgPSBmdW5jdGlvbiBnZXREaWZmZXJlbmNlKCkge1xuICB2YXIgeCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgdmFyIHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIHJldHVybiBNYXRoLmFicyh4IC0geSk7XG59O1xuXG5leHBvcnRzLmdldERpZmZlcmVuY2UgPSBnZXREaWZmZXJlbmNlO1xuXG52YXIgcmVzb2x2ZUF4aXNEaXJlY3Rpb24gPSBmdW5jdGlvbiByZXNvbHZlQXhpc0RpcmVjdGlvbihheGlzLCBrZXkpIHtcbiAgdmFyIG5lZ2F0aXZlID0gX3R5cGVzLkRpcmVjdGlvbi5MRUZUO1xuICB2YXIgcG9zaXRpdmUgPSBfdHlwZXMuRGlyZWN0aW9uLlJJR0hUO1xuICB2YXIgZGlyZWN0aW9uID0gX3R5cGVzLkRpcmVjdGlvbi5OT05FO1xuXG4gIGlmIChheGlzID09PSBfdHlwZXMuQXhpcy5ZKSB7XG4gICAgbmVnYXRpdmUgPSBfdHlwZXMuRGlyZWN0aW9uLkJPVFRPTTtcbiAgICBwb3NpdGl2ZSA9IF90eXBlcy5EaXJlY3Rpb24uVE9QO1xuICB9XG5cbiAgaWYgKGtleSA9PT0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5FR0FUSVZFKSB7XG4gICAgZGlyZWN0aW9uID0gbmVnYXRpdmU7XG4gIH1cblxuICBpZiAoa2V5ID09PSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuUE9TSVRJVkUpIHtcbiAgICBkaXJlY3Rpb24gPSBwb3NpdGl2ZTtcbiAgfVxuXG4gIHJldHVybiBkaXJlY3Rpb247XG59O1xuXG5leHBvcnRzLnJlc29sdmVBeGlzRGlyZWN0aW9uID0gcmVzb2x2ZUF4aXNEaXJlY3Rpb247IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZURpcmVjdGlvbkRlbHRhID0gY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGE7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSh0cmFjZURpcmVjdGlvbnMpIHtcbiAgdmFyIGRlbHRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICB2YXIgbGVuZ3RoID0gdHJhY2VEaXJlY3Rpb25zLmxlbmd0aDtcbiAgdmFyIGkgPSBsZW5ndGggLSAxO1xuICB2YXIgZGlyZWN0aW9uID0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5PTkU7XG5cbiAgZm9yICg7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0cmFjZURpcmVjdGlvbnNbaV07XG4gICAgdmFyIGN1cnJlbnRLZXkgPSAoMCwgX2NvbW1vbi5nZXREaXJlY3Rpb25LZXkpKGN1cnJlbnQpO1xuICAgIHZhciBjdXJyZW50VmFsdWUgPSAoMCwgX2NvbW1vbi5nZXREaXJlY3Rpb25WYWx1ZSkoY3VycmVudFtjdXJyZW50S2V5XSk7XG4gICAgdmFyIHByZXYgPSB0cmFjZURpcmVjdGlvbnNbaSAtIDFdIHx8IHt9O1xuICAgIHZhciBwcmV2S2V5ID0gKDAsIF9jb21tb24uZ2V0RGlyZWN0aW9uS2V5KShwcmV2KTtcbiAgICB2YXIgcHJldlZhbHVlID0gKDAsIF9jb21tb24uZ2V0RGlyZWN0aW9uVmFsdWUpKHByZXZbcHJldktleV0pO1xuICAgIHZhciBkaWZmZXJlbmNlID0gKDAsIF9jb21tb24uZ2V0RGlmZmVyZW5jZSkoY3VycmVudFZhbHVlLCBwcmV2VmFsdWUpO1xuXG4gICAgaWYgKGRpZmZlcmVuY2UgPj0gZGVsdGEpIHtcbiAgICAgIGRpcmVjdGlvbiA9IGN1cnJlbnRLZXk7XG4gICAgICBicmVhaztcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyZWN0aW9uID0gcHJldktleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlyZWN0aW9uO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jYWxjdWxhdGVEdXJhdGlvbiA9IGNhbGN1bGF0ZUR1cmF0aW9uO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVEdXJhdGlvbigpIHtcbiAgdmFyIHByZXZUaW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICB2YXIgbmV4dFRpbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIHJldHVybiBwcmV2VGltZSA/IG5leHRUaW1lIC0gcHJldlRpbWUgOiAwO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbiA9IGNhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbihlKSB7XG4gIGlmICgnY2hhbmdlZFRvdWNoZXMnIGluIGUpIHtcbiAgICB2YXIgdG91Y2hlcyA9IGUuY2hhbmdlZFRvdWNoZXMgJiYgZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogdG91Y2hlcyAmJiB0b3VjaGVzLmNsaWVudFgsXG4gICAgICB5OiB0b3VjaGVzICYmIHRvdWNoZXMuY2xpZW50WVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IGUuY2xpZW50WCxcbiAgICB5OiBlLmNsaWVudFlcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXBkYXRlVHJhY2UgPSB1cGRhdGVUcmFjZTtcblxuZnVuY3Rpb24gdXBkYXRlVHJhY2UodHJhY2UsIHZhbHVlKSB7XG4gIHZhciBsYXN0ID0gdHJhY2VbdHJhY2UubGVuZ3RoIC0gMV07XG5cbiAgaWYgKGxhc3QgIT09IHZhbHVlKSB7XG4gICAgdHJhY2UucHVzaCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdHJhY2U7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucyA9IGNhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucztcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zKCkge1xuICB2YXIgdHJhY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICB2YXIgdGlja3MgPSBbXTtcbiAgdmFyIHBvc2l0aXZlID0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5LlBPU0lUSVZFO1xuICB2YXIgbmVnYXRpdmUgPSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTkVHQVRJVkU7XG4gIHZhciBpID0gMDtcbiAgdmFyIHRpY2sgPSBbXTtcbiAgdmFyIGRpcmVjdGlvbiA9IF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5OT05FO1xuXG4gIGZvciAoOyBpIDwgdHJhY2UubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY3VycmVudCA9IHRyYWNlW2ldO1xuICAgIHZhciBwcmV2ID0gdHJhY2VbaSAtIDFdO1xuXG4gICAgaWYgKHRpY2subGVuZ3RoKSB7XG4gICAgICB2YXIgY3VycmVudERpcmVjdGlvbiA9IGN1cnJlbnQgPiBwcmV2ID8gcG9zaXRpdmUgOiBuZWdhdGl2ZTtcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5PTkUpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gY3VycmVudERpcmVjdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnREaXJlY3Rpb24gPT09IGRpcmVjdGlvbikge1xuICAgICAgICB0aWNrLnB1c2goY3VycmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aWNrcy5wdXNoKF9kZWZpbmVQcm9wZXJ0eSh7fSwgZGlyZWN0aW9uLCB0aWNrLnNsaWNlKCkpKTtcbiAgICAgICAgdGljayA9IFtdO1xuICAgICAgICB0aWNrLnB1c2goY3VycmVudCk7XG4gICAgICAgIGRpcmVjdGlvbiA9IGN1cnJlbnREaXJlY3Rpb247XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjdXJyZW50ICE9PSAwKSB7XG4gICAgICAgIGRpcmVjdGlvbiA9IGN1cnJlbnQgPiAwID8gcG9zaXRpdmUgOiBuZWdhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgdGljay5wdXNoKGN1cnJlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aWNrLmxlbmd0aCkge1xuICAgIHRpY2tzLnB1c2goX2RlZmluZVByb3BlcnR5KHt9LCBkaXJlY3Rpb24sIHRpY2spKTtcbiAgfVxuXG4gIHJldHVybiB0aWNrcztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVzb2x2ZURpcmVjdGlvbiA9IHJlc29sdmVEaXJlY3Rpb247XG5cbnZhciBfY2FsY3VsYXRlRGlyZWN0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlRGlyZWN0aW9uXCIpO1xuXG52YXIgX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucyA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9uc1wiKTtcblxudmFyIF9jYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhXCIpO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxuZnVuY3Rpb24gcmVzb2x2ZURpcmVjdGlvbih0cmFjZSkge1xuICB2YXIgYXhpcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogX3R5cGVzLkF4aXMuWDtcbiAgdmFyIGRpcmVjdGlvbkRlbHRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAwO1xuXG4gIGlmIChkaXJlY3Rpb25EZWx0YSkge1xuICAgIHZhciBkaXJlY3Rpb25zID0gKDAsIF9jYWxjdWxhdGVUcmFjZURpcmVjdGlvbnMuY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zKSh0cmFjZSk7XG5cbiAgICB2YXIgX2RpcmVjdGlvbiA9ICgwLCBfY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGEuY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGEpKGRpcmVjdGlvbnMsIGRpcmVjdGlvbkRlbHRhKTtcblxuICAgIHJldHVybiAoMCwgX2NvbW1vbi5yZXNvbHZlQXhpc0RpcmVjdGlvbikoYXhpcywgX2RpcmVjdGlvbik7XG4gIH1cblxuICB2YXIgZGlyZWN0aW9uID0gKDAsIF9jYWxjdWxhdGVEaXJlY3Rpb24uY2FsY3VsYXRlRGlyZWN0aW9uKSh0cmFjZSk7XG4gIHJldHVybiAoMCwgX2NvbW1vbi5yZXNvbHZlQXhpc0RpcmVjdGlvbikoYXhpcywgZGlyZWN0aW9uKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FsY3VsYXRlVmVsb2NpdHkgPSBjYWxjdWxhdGVWZWxvY2l0eTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlVmVsb2NpdHkoeCwgeSwgdGltZSkge1xuICB2YXIgbWFnbml0dWRlID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICByZXR1cm4gbWFnbml0dWRlIC8gKHRpbWUgfHwgMSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZVBvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb247XG5cbnZhciBfdXBkYXRlVHJhY2UgPSByZXF1aXJlKFwiLi91cGRhdGVUcmFjZVwiKTtcblxudmFyIF9yZXNvbHZlRGlyZWN0aW9uID0gcmVxdWlyZShcIi4vcmVzb2x2ZURpcmVjdGlvblwiKTtcblxudmFyIF9jYWxjdWxhdGVEdXJhdGlvbiA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZUR1cmF0aW9uXCIpO1xuXG52YXIgX2NhbGN1bGF0ZVZlbG9jaXR5ID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlVmVsb2NpdHlcIik7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVBvc2l0aW9uKHN0YXRlLCBvcHRpb25zKSB7XG4gIHZhciBzdGFydCA9IHN0YXRlLnN0YXJ0LFxuICAgICAgeCA9IHN0YXRlLngsXG4gICAgICB5ID0gc3RhdGUueSxcbiAgICAgIHRyYWNlWCA9IHN0YXRlLnRyYWNlWCxcbiAgICAgIHRyYWNlWSA9IHN0YXRlLnRyYWNlWTtcbiAgdmFyIHJvdGF0ZVBvc2l0aW9uID0gb3B0aW9ucy5yb3RhdGVQb3NpdGlvbixcbiAgICAgIGRpcmVjdGlvbkRlbHRhID0gb3B0aW9ucy5kaXJlY3Rpb25EZWx0YTtcbiAgdmFyIGRlbHRhWCA9IHJvdGF0ZVBvc2l0aW9uLnggLSB4O1xuICB2YXIgZGVsdGFZID0geSAtIHJvdGF0ZVBvc2l0aW9uLnk7XG4gIHZhciBhYnNYID0gTWF0aC5hYnMoZGVsdGFYKTtcbiAgdmFyIGFic1kgPSBNYXRoLmFicyhkZWx0YVkpO1xuICAoMCwgX3VwZGF0ZVRyYWNlLnVwZGF0ZVRyYWNlKSh0cmFjZVgsIGRlbHRhWCk7XG4gICgwLCBfdXBkYXRlVHJhY2UudXBkYXRlVHJhY2UpKHRyYWNlWSwgZGVsdGFZKTtcbiAgdmFyIGRpcmVjdGlvblggPSAoMCwgX3Jlc29sdmVEaXJlY3Rpb24ucmVzb2x2ZURpcmVjdGlvbikodHJhY2VYLCBfdHlwZXMuQXhpcy5YLCBkaXJlY3Rpb25EZWx0YSk7XG4gIHZhciBkaXJlY3Rpb25ZID0gKDAsIF9yZXNvbHZlRGlyZWN0aW9uLnJlc29sdmVEaXJlY3Rpb24pKHRyYWNlWSwgX3R5cGVzLkF4aXMuWSwgZGlyZWN0aW9uRGVsdGEpO1xuICB2YXIgZHVyYXRpb24gPSAoMCwgX2NhbGN1bGF0ZUR1cmF0aW9uLmNhbGN1bGF0ZUR1cmF0aW9uKShzdGFydCwgRGF0ZS5ub3coKSk7XG4gIHZhciB2ZWxvY2l0eSA9ICgwLCBfY2FsY3VsYXRlVmVsb2NpdHkuY2FsY3VsYXRlVmVsb2NpdHkpKGFic1gsIGFic1ksIGR1cmF0aW9uKTtcbiAgcmV0dXJuIHtcbiAgICBhYnNYOiBhYnNYLFxuICAgIGFic1k6IGFic1ksXG4gICAgZGVsdGFYOiBkZWx0YVgsXG4gICAgZGVsdGFZOiBkZWx0YVksXG4gICAgZGlyZWN0aW9uWDogZGlyZWN0aW9uWCxcbiAgICBkaXJlY3Rpb25ZOiBkaXJlY3Rpb25ZLFxuICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICBwb3NpdGlvblg6IHJvdGF0ZVBvc2l0aW9uLngsXG4gICAgcG9zaXRpb25ZOiByb3RhdGVQb3NpdGlvbi55LFxuICAgIHZlbG9jaXR5OiB2ZWxvY2l0eVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzID0gdm9pZCAwO1xuXG52YXIgY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyA9IGZ1bmN0aW9uIGNoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXMoZSkge1xuICByZXR1cm4gQm9vbGVhbihlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA+IDEpO1xufTtcblxuZXhwb3J0cy5jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzID0gY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY3JlYXRlT3B0aW9ucyA9IGNyZWF0ZU9wdGlvbnM7XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMoKSB7XG4gIHZhciBwcm94eSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm94eSwgJ3Bhc3NpdmUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB0aGlzLmlzUGFzc2l2ZVN1cHBvcnRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IHRydWVcbiAgfSk7XG4gIHJldHVybiBwcm94eTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQgPSBjaGVja0lzUGFzc2l2ZVN1cHBvcnRlZDtcbmV4cG9ydHMubm9vcCA9IHZvaWQgMDtcblxudmFyIF9jcmVhdGVPcHRpb25zID0gcmVxdWlyZShcIi4vY3JlYXRlT3B0aW9uc1wiKTtcblxuZnVuY3Rpb24gY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQoaXNQYXNzaXZlU3VwcG9ydGVkKSB7XG4gIGlmICh0eXBlb2YgaXNQYXNzaXZlU3VwcG9ydGVkID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gaXNQYXNzaXZlU3VwcG9ydGVkO1xuICB9XG5cbiAgdmFyIHByb3h5ID0ge1xuICAgIGlzUGFzc2l2ZVN1cHBvcnRlZDogaXNQYXNzaXZlU3VwcG9ydGVkXG4gIH07XG5cbiAgdHJ5IHtcbiAgICB2YXIgb3B0aW9ucyA9ICgwLCBfY3JlYXRlT3B0aW9ucy5jcmVhdGVPcHRpb25zKShwcm94eSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkJywgbm9vcCwgb3B0aW9ucyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkJywgbm9vcCwgb3B0aW9ucyk7XG4gIH0gY2F0Y2ggKGVycikge31cblxuICByZXR1cm4gcHJveHkuaXNQYXNzaXZlU3VwcG9ydGVkO1xufVxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuZXhwb3J0cy5ub29wID0gbm9vcDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5cbnZhciBjaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQgPSBmdW5jdGlvbiBjaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQoKSB7XG4gIHJldHVybiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHdpbmRvdykpID09PSAnb2JqZWN0JyAmJiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IEJvb2xlYW4od2luZG93Lm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cykpO1xufTtcblxuZXhwb3J0cy5jaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQgPSBjaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldEluaXRpYWxTdGF0ZSA9IHZvaWQgMDtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGdldEluaXRpYWxTdGF0ZSA9IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHN0YXJ0OiAwLFxuICAgIGlzU3dpcGluZzogZmFsc2UsXG4gICAgdHJhY2VYOiBbXSxcbiAgICB0cmFjZVk6IFtdXG4gIH0sIG9wdGlvbnMpO1xufTtcblxuZXhwb3J0cy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldEluaXRpYWxQcm9wcyA9IHZvaWQgMDtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGdldEluaXRpYWxQcm9wcyA9IGZ1bmN0aW9uIGdldEluaXRpYWxQcm9wcygpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgdGFyZ2V0OiBudWxsLFxuICAgIGRlbHRhOiAxMCxcbiAgICBkaXJlY3Rpb25EZWx0YTogMCxcbiAgICByb3RhdGlvbkFuZ2xlOiAwLFxuICAgIG1vdXNlVHJhY2tpbmdFbmFibGVkOiBmYWxzZSxcbiAgICB0b3VjaFRyYWNraW5nRW5hYmxlZDogdHJ1ZSxcbiAgICBwcmV2ZW50RGVmYXVsdFRvdWNobW92ZUV2ZW50OiBmYWxzZSxcbiAgICBwcmV2ZW50VHJhY2tpbmdPbk1vdXNlbGVhdmU6IGZhbHNlXG4gIH0sIHByb3BzKTtcbn07XG5cbmV4cG9ydHMuZ2V0SW5pdGlhbFByb3BzID0gZ2V0SW5pdGlhbFByb3BzOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRPcHRpb25zID0gZ2V0T3B0aW9ucztcblxuZnVuY3Rpb24gZ2V0T3B0aW9ucygpIHtcbiAgdmFyIGlzUGFzc2l2ZVN1cHBvcnRlZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgaWYgKGlzUGFzc2l2ZVN1cHBvcnRlZCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge307XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJvdGF0ZUJ5QW5nbGUgPSByb3RhdGVCeUFuZ2xlO1xuXG5mdW5jdGlvbiByb3RhdGVCeUFuZ2xlKHBvc2l0aW9uKSB7XG4gIHZhciBhbmdsZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcblxuICBpZiAoYW5nbGUgPT09IDApIHtcbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICB2YXIgeCA9IHBvc2l0aW9uLngsXG4gICAgICB5ID0gcG9zaXRpb24ueTtcbiAgdmFyIGFuZ2xlSW5SYWRpYW5zID0gTWF0aC5QSSAvIDE4MCAqIGFuZ2xlO1xuICB2YXIgcm90YXRlZFggPSB4ICogTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpICsgeSAqIE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgdmFyIHJvdGF0ZWRZID0geSAqIE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKSAtIHggKiBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gIHJldHVybiB7XG4gICAgeDogcm90YXRlZFgsXG4gICAgeTogcm90YXRlZFlcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jYWxjdWxhdGVEaXJlY3Rpb24gPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVEaXJlY3Rpb25cIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVEaXJlY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9jYWxjdWxhdGVEaXJlY3Rpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2FsY3VsYXRlRGlyZWN0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGFcIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZUR1cmF0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlRHVyYXRpb25cIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVEdXJhdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZUR1cmF0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZUR1cmF0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlTW92aW5nUG9zaXRpb25cIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZVBvc2l0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlUG9zaXRpb25cIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVQb3NpdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZVBvc2l0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZVBvc2l0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucyA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9uc1wiKTtcblxuT2JqZWN0LmtleXMoX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9uc1trZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jYWxjdWxhdGVUcmFjZURpcmVjdGlvbnNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2FsY3VsYXRlVmVsb2NpdHkgPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVWZWxvY2l0eVwiKTtcblxuT2JqZWN0LmtleXMoX2NhbGN1bGF0ZVZlbG9jaXR5KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2FsY3VsYXRlVmVsb2NpdHlba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2FsY3VsYXRlVmVsb2NpdHlba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyA9IHJlcXVpcmUoXCIuL2NoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXNcIik7XG5cbk9iamVjdC5rZXlzKF9jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlc1trZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkID0gcmVxdWlyZShcIi4vY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWRcIik7XG5cbk9iamVjdC5rZXlzKF9jaGVja0lzUGFzc2l2ZVN1cHBvcnRlZCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCA9IHJlcXVpcmUoXCIuL2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZFwiKTtcblxuT2JqZWN0LmtleXMoX2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZFtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG5PYmplY3Qua2V5cyhfY29tbW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY29tbW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NvbW1vbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9jcmVhdGVPcHRpb25zID0gcmVxdWlyZShcIi4vY3JlYXRlT3B0aW9uc1wiKTtcblxuT2JqZWN0LmtleXMoX2NyZWF0ZU9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9jcmVhdGVPcHRpb25zW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NyZWF0ZU9wdGlvbnNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfZ2V0SW5pdGlhbFN0YXRlID0gcmVxdWlyZShcIi4vZ2V0SW5pdGlhbFN0YXRlXCIpO1xuXG5PYmplY3Qua2V5cyhfZ2V0SW5pdGlhbFN0YXRlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfZ2V0SW5pdGlhbFN0YXRlW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2dldEluaXRpYWxTdGF0ZVtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9nZXRJbml0aWFsUHJvcHMgPSByZXF1aXJlKFwiLi9nZXRJbml0aWFsUHJvcHNcIik7XG5cbk9iamVjdC5rZXlzKF9nZXRJbml0aWFsUHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9nZXRJbml0aWFsUHJvcHNba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0SW5pdGlhbFByb3BzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2dldE9wdGlvbnMgPSByZXF1aXJlKFwiLi9nZXRPcHRpb25zXCIpO1xuXG5PYmplY3Qua2V5cyhfZ2V0T3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2dldE9wdGlvbnNba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0T3B0aW9uc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9yZXNvbHZlRGlyZWN0aW9uID0gcmVxdWlyZShcIi4vcmVzb2x2ZURpcmVjdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX3Jlc29sdmVEaXJlY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9yZXNvbHZlRGlyZWN0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3Jlc29sdmVEaXJlY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfcm90YXRlQnlBbmdsZSA9IHJlcXVpcmUoXCIuL3JvdGF0ZUJ5QW5nbGVcIik7XG5cbk9iamVjdC5rZXlzKF9yb3RhdGVCeUFuZ2xlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfcm90YXRlQnlBbmdsZVtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9yb3RhdGVCeUFuZ2xlW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX3VwZGF0ZVRyYWNlID0gcmVxdWlyZShcIi4vdXBkYXRlVHJhY2VcIik7XG5cbk9iamVjdC5rZXlzKF91cGRhdGVUcmFjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX3VwZGF0ZVRyYWNlW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3VwZGF0ZVRyYWNlW2tleV07XG4gICAgfVxuICB9KTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgX2V4cG9ydE5hbWVzID0ge307XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vdXRpbHNcIikpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG5cbk9iamVjdC5rZXlzKF90eXBlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX3R5cGVzW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3R5cGVzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIFZhbmlsbGFTd2lwZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFZhbmlsbGFTd2lwZShwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWYW5pbGxhU3dpcGUpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic3RhdGVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInByb3BzXCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLnN0YXRlID0gVXRpbHMuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgdGhpcy5wcm9wcyA9IFV0aWxzLmdldEluaXRpYWxQcm9wcyhwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVTd2lwZVN0YXJ0ID0gdGhpcy5oYW5kbGVTd2lwZVN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTd2lwZU1vdmUgPSB0aGlzLmhhbmRsZVN3aXBlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3dpcGVFbmQgPSB0aGlzLmhhbmRsZVN3aXBlRW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVNb3VzZURvd24gPSB0aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTW91c2VNb3ZlID0gdGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vdXNlVXAgPSB0aGlzLmhhbmRsZU1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSB0aGlzLmhhbmRsZU1vdXNlTGVhdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhWYW5pbGxhU3dpcGUsIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHRoaXMuc2V0dXBUb3VjaExpc3RlbmVycygpO1xuICAgICAgdGhpcy5zZXR1cE1vdXNlTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUocHJvcHMpIHtcbiAgICAgIHZhciBwcmV2UHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIG5leHRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByZXZQcm9wcywgcHJvcHMpO1xuXG4gICAgICBpZiAocHJldlByb3BzLmVsZW1lbnQgIT09IG5leHRQcm9wcy5lbGVtZW50IHx8IHByZXZQcm9wcy50YXJnZXQgIT09IG5leHRQcm9wcy50YXJnZXQpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG5cbiAgICAgIGlmIChwcmV2UHJvcHMubW91c2VUcmFja2luZ0VuYWJsZWQgIT09IG5leHRQcm9wcy5tb3VzZVRyYWNraW5nRW5hYmxlZCB8fCBwcmV2UHJvcHMucHJldmVudFRyYWNraW5nT25Nb3VzZWxlYXZlICE9PSBuZXh0UHJvcHMucHJldmVudFRyYWNraW5nT25Nb3VzZWxlYXZlKSB7XG4gICAgICAgIHRoaXMuY2xlYW51cE1vdXNlTGlzdGVuZXJzKCk7XG4gICAgICAgIG5leHRQcm9wcy5tb3VzZVRyYWNraW5nRW5hYmxlZCA/IHRoaXMuc2V0dXBNb3VzZUxpc3RlbmVycygpIDogdGhpcy5jbGVhbnVwTW91c2VMaXN0ZW5lcnMoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZXZQcm9wcy50b3VjaFRyYWNraW5nRW5hYmxlZCAhPT0gbmV4dFByb3BzLnRvdWNoVHJhY2tpbmdFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW51cFRvdWNoTGlzdGVuZXJzKCk7XG4gICAgICAgIG5leHRQcm9wcy50b3VjaFRyYWNraW5nRW5hYmxlZCA/IHRoaXMuc2V0dXBUb3VjaExpc3RlbmVycygpIDogdGhpcy5jbGVhbnVwVG91Y2hMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdGhpcy5jbGVhbnVwTW91c2VMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuY2xlYW51cFRvdWNoTGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLnN0YXRlID0gVXRpbHMuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgICB0aGlzLnByb3BzID0gVXRpbHMuZ2V0SW5pdGlhbFByb3BzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldHVwVG91Y2hMaXN0ZW5lcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0dXBUb3VjaExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZWxlbWVudCA9IF90aGlzJHByb3BzLmVsZW1lbnQsXG4gICAgICAgICAgdGFyZ2V0ID0gX3RoaXMkcHJvcHMudGFyZ2V0LFxuICAgICAgICAgIHRvdWNoVHJhY2tpbmdFbmFibGVkID0gX3RoaXMkcHJvcHMudG91Y2hUcmFja2luZ0VuYWJsZWQ7XG5cbiAgICAgIGlmIChlbGVtZW50ICYmIHRvdWNoVHJhY2tpbmdFbmFibGVkKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRhcmdldCB8fCBlbGVtZW50O1xuICAgICAgICB2YXIgaXNQYXNzaXZlU3VwcG9ydGVkID0gVXRpbHMuY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQoKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBVdGlscy5nZXRPcHRpb25zKGlzUGFzc2l2ZVN1cHBvcnRlZCk7XG4gICAgICAgIGxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZVN3aXBlU3RhcnQsIG9wdGlvbnMpO1xuICAgICAgICBsaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmhhbmRsZVN3aXBlTW92ZSwgb3B0aW9ucyk7XG4gICAgICAgIGxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5oYW5kbGVTd2lwZUVuZCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsZWFudXBUb3VjaExpc3RlbmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhbnVwVG91Y2hMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBlbGVtZW50ID0gX3RoaXMkcHJvcHMyLmVsZW1lbnQsXG4gICAgICAgICAgdGFyZ2V0ID0gX3RoaXMkcHJvcHMyLnRhcmdldDtcbiAgICAgIHZhciBsaXN0ZW5lciA9IHRhcmdldCB8fCBlbGVtZW50O1xuXG4gICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlU3dpcGVTdGFydCk7XG4gICAgICAgIGxpc3RlbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuaGFuZGxlU3dpcGVNb3ZlKTtcbiAgICAgICAgbGlzdGVuZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmhhbmRsZVN3aXBlRW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0dXBNb3VzZUxpc3RlbmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cE1vdXNlTGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZWxlbWVudCA9IF90aGlzJHByb3BzMy5lbGVtZW50LFxuICAgICAgICAgIG1vdXNlVHJhY2tpbmdFbmFibGVkID0gX3RoaXMkcHJvcHMzLm1vdXNlVHJhY2tpbmdFbmFibGVkLFxuICAgICAgICAgIHByZXZlbnRUcmFja2luZ09uTW91c2VsZWF2ZSA9IF90aGlzJHByb3BzMy5wcmV2ZW50VHJhY2tpbmdPbk1vdXNlbGVhdmU7XG5cbiAgICAgIGlmIChtb3VzZVRyYWNraW5nRW5hYmxlZCAmJiBlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24pO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwKTtcblxuICAgICAgICBpZiAocHJldmVudFRyYWNraW5nT25Nb3VzZWxlYXZlKSB7XG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5oYW5kbGVNb3VzZUxlYXZlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbGVhbnVwTW91c2VMaXN0ZW5lcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYW51cE1vdXNlTGlzdGVuZXJzKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24pO1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwKTtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5oYW5kbGVNb3VzZUxlYXZlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RXZlbnREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEV2ZW50RGF0YShlKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgICAgICBkaXJlY3Rpb25EZWx0YTogMFxuICAgICAgfTtcbiAgICAgIHZhciByb3RhdGlvbkFuZ2xlID0gdGhpcy5wcm9wcy5yb3RhdGlvbkFuZ2xlO1xuICAgICAgdmFyIGRpcmVjdGlvbkRlbHRhID0gb3B0aW9ucy5kaXJlY3Rpb25EZWx0YTtcbiAgICAgIHZhciBtb3ZpbmdQb3NpdGlvbiA9IFV0aWxzLmNhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uKGUpO1xuICAgICAgdmFyIHJvdGF0ZVBvc2l0aW9uID0gVXRpbHMucm90YXRlQnlBbmdsZShtb3ZpbmdQb3NpdGlvbiwgcm90YXRpb25BbmdsZSk7XG4gICAgICByZXR1cm4gVXRpbHMuY2FsY3VsYXRlUG9zaXRpb24odGhpcy5zdGF0ZSwge1xuICAgICAgICByb3RhdGVQb3NpdGlvbjogcm90YXRlUG9zaXRpb24sXG4gICAgICAgIGRpcmVjdGlvbkRlbHRhOiBkaXJlY3Rpb25EZWx0YVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVN3aXBlU3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlU3dpcGVTdGFydChlKSB7XG4gICAgICBpZiAoVXRpbHMuY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyhlKSkgcmV0dXJuO1xuICAgICAgdmFyIHJvdGF0aW9uQW5nbGUgPSB0aGlzLnByb3BzLnJvdGF0aW9uQW5nbGU7XG4gICAgICB2YXIgbW92aW5nUG9zaXRpb24gPSBVdGlscy5jYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbihlKTtcblxuICAgICAgdmFyIF9VdGlscyRyb3RhdGVCeUFuZ2xlID0gVXRpbHMucm90YXRlQnlBbmdsZShtb3ZpbmdQb3NpdGlvbiwgcm90YXRpb25BbmdsZSksXG4gICAgICAgICAgeCA9IF9VdGlscyRyb3RhdGVCeUFuZ2xlLngsXG4gICAgICAgICAgeSA9IF9VdGlscyRyb3RhdGVCeUFuZ2xlLnk7XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBVdGlscy5nZXRJbml0aWFsU3RhdGUoe1xuICAgICAgICBpc1N3aXBpbmc6IGZhbHNlLFxuICAgICAgICBzdGFydDogRGF0ZS5ub3coKSxcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVN3aXBlTW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVTd2lwZU1vdmUoZSkge1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICB4ID0gX3RoaXMkc3RhdGUueCxcbiAgICAgICAgICB5ID0gX3RoaXMkc3RhdGUueSxcbiAgICAgICAgICBpc1N3aXBpbmcgPSBfdGhpcyRzdGF0ZS5pc1N3aXBpbmc7XG4gICAgICBpZiAoIXggfHwgIXkgfHwgVXRpbHMuY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyhlKSkgcmV0dXJuO1xuICAgICAgdmFyIGRpcmVjdGlvbkRlbHRhID0gdGhpcy5wcm9wcy5kaXJlY3Rpb25EZWx0YSB8fCAwO1xuXG4gICAgICB2YXIgX3RoaXMkZ2V0RXZlbnREYXRhID0gdGhpcy5nZXRFdmVudERhdGEoZSwge1xuICAgICAgICBkaXJlY3Rpb25EZWx0YTogZGlyZWN0aW9uRGVsdGFcbiAgICAgIH0pLFxuICAgICAgICAgIGFic1ggPSBfdGhpcyRnZXRFdmVudERhdGEuYWJzWCxcbiAgICAgICAgICBhYnNZID0gX3RoaXMkZ2V0RXZlbnREYXRhLmFic1ksXG4gICAgICAgICAgZGVsdGFYID0gX3RoaXMkZ2V0RXZlbnREYXRhLmRlbHRhWCxcbiAgICAgICAgICBkZWx0YVkgPSBfdGhpcyRnZXRFdmVudERhdGEuZGVsdGFZLFxuICAgICAgICAgIGRpcmVjdGlvblggPSBfdGhpcyRnZXRFdmVudERhdGEuZGlyZWN0aW9uWCxcbiAgICAgICAgICBkaXJlY3Rpb25ZID0gX3RoaXMkZ2V0RXZlbnREYXRhLmRpcmVjdGlvblksXG4gICAgICAgICAgZHVyYXRpb24gPSBfdGhpcyRnZXRFdmVudERhdGEuZHVyYXRpb24sXG4gICAgICAgICAgdmVsb2NpdHkgPSBfdGhpcyRnZXRFdmVudERhdGEudmVsb2NpdHk7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGRlbHRhID0gX3RoaXMkcHJvcHM0LmRlbHRhLFxuICAgICAgICAgIHByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQgPSBfdGhpcyRwcm9wczQucHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudCxcbiAgICAgICAgICBvblN3aXBlU3RhcnQgPSBfdGhpcyRwcm9wczQub25Td2lwZVN0YXJ0LFxuICAgICAgICAgIG9uU3dpcGluZyA9IF90aGlzJHByb3BzNC5vblN3aXBpbmc7XG4gICAgICBpZiAoZS5jYW5jZWxhYmxlICYmIHByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChhYnNYIDwgTnVtYmVyKGRlbHRhKSAmJiBhYnNZIDwgTnVtYmVyKGRlbHRhKSAmJiAhaXNTd2lwaW5nKSByZXR1cm47XG5cbiAgICAgIGlmIChvblN3aXBlU3RhcnQgJiYgIWlzU3dpcGluZykge1xuICAgICAgICBvblN3aXBlU3RhcnQoZSwge1xuICAgICAgICAgIGRlbHRhWDogZGVsdGFYLFxuICAgICAgICAgIGRlbHRhWTogZGVsdGFZLFxuICAgICAgICAgIGFic1g6IGFic1gsXG4gICAgICAgICAgYWJzWTogYWJzWSxcbiAgICAgICAgICBkaXJlY3Rpb25YOiBkaXJlY3Rpb25YLFxuICAgICAgICAgIGRpcmVjdGlvblk6IGRpcmVjdGlvblksXG4gICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgIHZlbG9jaXR5OiB2ZWxvY2l0eVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGF0ZS5pc1N3aXBpbmcgPSB0cnVlO1xuXG4gICAgICBpZiAob25Td2lwaW5nKSB7XG4gICAgICAgIG9uU3dpcGluZyhlLCB7XG4gICAgICAgICAgZGVsdGFYOiBkZWx0YVgsXG4gICAgICAgICAgZGVsdGFZOiBkZWx0YVksXG4gICAgICAgICAgYWJzWDogYWJzWCxcbiAgICAgICAgICBhYnNZOiBhYnNZLFxuICAgICAgICAgIGRpcmVjdGlvblg6IGRpcmVjdGlvblgsXG4gICAgICAgICAgZGlyZWN0aW9uWTogZGlyZWN0aW9uWSxcbiAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgdmVsb2NpdHk6IHZlbG9jaXR5XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVTd2lwZUVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVTd2lwZUVuZChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvblN3aXBlZCA9IF90aGlzJHByb3BzNS5vblN3aXBlZCxcbiAgICAgICAgICBvblRhcCA9IF90aGlzJHByb3BzNS5vblRhcDtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUuaXNTd2lwaW5nKSB7XG4gICAgICAgIHZhciBkaXJlY3Rpb25EZWx0YSA9IHRoaXMucHJvcHMuZGlyZWN0aW9uRGVsdGEgfHwgMDtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5nZXRFdmVudERhdGEoZSwge1xuICAgICAgICAgIGRpcmVjdGlvbkRlbHRhOiBkaXJlY3Rpb25EZWx0YVxuICAgICAgICB9KTtcbiAgICAgICAgb25Td2lwZWQgJiYgb25Td2lwZWQoZSwgcG9zaXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF9wb3NpdGlvbiA9IHRoaXMuZ2V0RXZlbnREYXRhKGUpO1xuXG4gICAgICAgIG9uVGFwICYmIG9uVGFwKGUsIF9wb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBVdGlscy5nZXRJbml0aWFsU3RhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTW91c2VEb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihlKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5wcm9wcy50YXJnZXQ7XG5cbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gZS50YXJnZXQpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVN3aXBlU3RhcnQoZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3dpcGVTdGFydChlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTW91c2VNb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZShlKSB7XG4gICAgICB0aGlzLmhhbmRsZVN3aXBlTW92ZShlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTW91c2VVcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKGUpIHtcbiAgICAgIHZhciBpc1N3aXBpbmcgPSB0aGlzLnN0YXRlLmlzU3dpcGluZztcbiAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnByb3BzLnRhcmdldDtcblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICBpZiAodGFyZ2V0ID09PSBlLnRhcmdldCB8fCBpc1N3aXBpbmcpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVN3aXBlRW5kKGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhbmRsZVN3aXBlRW5kKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVNb3VzZUxlYXZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTGVhdmUoZSkge1xuICAgICAgdmFyIGlzU3dpcGluZyA9IHRoaXMuc3RhdGUuaXNTd2lwaW5nO1xuXG4gICAgICBpZiAoaXNTd2lwaW5nKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3dpcGVFbmQoZSk7XG4gICAgICB9XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiaXNUb3VjaEV2ZW50c1N1cHBvcnRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1RvdWNoRXZlbnRzU3VwcG9ydGVkKCkge1xuICAgICAgcmV0dXJuIFV0aWxzLmNoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBWYW5pbGxhU3dpcGU7XG59KCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVmFuaWxsYVN3aXBlOyIsIlwidXNlIHN0cmljdFwiO3ZhciBFdmVudFR5cGUsQW5pbWF0aW9uVHlwZSxBdXRvUGxheVN0cmF0ZWd5LENvbnRyb2xzU3RyYXRlZ3ksQXV0b3BsYXlEaXJlY3Rpb24sQ2xhc3NuYW1lcyxNb2RpZmllcnM7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5Nb2RpZmllcnM9ZXhwb3J0cy5DbGFzc25hbWVzPWV4cG9ydHMuQXV0b3BsYXlEaXJlY3Rpb249ZXhwb3J0cy5Db250cm9sc1N0cmF0ZWd5PWV4cG9ydHMuQXV0b1BsYXlTdHJhdGVneT1leHBvcnRzLkFuaW1hdGlvblR5cGU9ZXhwb3J0cy5FdmVudFR5cGU9dm9pZCAwLGZ1bmN0aW9uKGUpe2UuQUNUSU9OPVwiYWN0aW9uXCIsZS5JTklUPVwiaW5pdFwiLGUuUkVTSVpFPVwicmVzaXplXCIsZS5VUERBVEU9XCJ1cGRhdGVcIn0oRXZlbnRUeXBlPWV4cG9ydHMuRXZlbnRUeXBlfHwoZXhwb3J0cy5FdmVudFR5cGU9e30pKSxmdW5jdGlvbihlKXtlLkZBREVPVVQ9XCJmYWRlb3V0XCIsZS5TTElERT1cInNsaWRlXCJ9KEFuaW1hdGlvblR5cGU9ZXhwb3J0cy5BbmltYXRpb25UeXBlfHwoZXhwb3J0cy5BbmltYXRpb25UeXBlPXt9KSksZnVuY3Rpb24oZSl7ZS5ERUZBVUxUPVwiZGVmYXVsdFwiLGUuQUxMPVwiYWxsXCIsZS5BQ1RJT049XCJhY3Rpb25cIixlLk5PTkU9XCJub25lXCJ9KEF1dG9QbGF5U3RyYXRlZ3k9ZXhwb3J0cy5BdXRvUGxheVN0cmF0ZWd5fHwoZXhwb3J0cy5BdXRvUGxheVN0cmF0ZWd5PXt9KSksZnVuY3Rpb24oZSl7ZS5ERUZBVUxUPVwiZGVmYXVsdFwiLGUuQUxURVJOQVRFPVwiYWx0ZXJuYXRlXCIsZS5SRVNQT05TSVZFPVwicmVzcG9uc2l2ZVwifShDb250cm9sc1N0cmF0ZWd5PWV4cG9ydHMuQ29udHJvbHNTdHJhdGVneXx8KGV4cG9ydHMuQ29udHJvbHNTdHJhdGVneT17fSkpLGZ1bmN0aW9uKGUpe2UuUlRMPVwicnRsXCIsZS5MVFI9XCJsdHJcIn0oQXV0b3BsYXlEaXJlY3Rpb249ZXhwb3J0cy5BdXRvcGxheURpcmVjdGlvbnx8KGV4cG9ydHMuQXV0b3BsYXlEaXJlY3Rpb249e30pKSxmdW5jdGlvbihlKXtlLkFOSU1BVEVEPVwiYW5pbWF0ZWQgYW5pbWF0ZWQtb3V0IGZhZGVPdXRcIixlLlJPT1Q9XCJhbGljZS1jYXJvdXNlbFwiLGUuV1JBUFBFUj1cImFsaWNlLWNhcm91c2VsX193cmFwcGVyXCIsZS5TVEFHRT1cImFsaWNlLWNhcm91c2VsX19zdGFnZVwiLGUuU1RBR0VfSVRFTT1cImFsaWNlLWNhcm91c2VsX19zdGFnZS1pdGVtXCIsZS5ET1RTPVwiYWxpY2UtY2Fyb3VzZWxfX2RvdHNcIixlLkRPVFNfSVRFTT1cImFsaWNlLWNhcm91c2VsX19kb3RzLWl0ZW1cIixlLlBMQVlfQlROPVwiYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuXCIsZS5QTEFZX0JUTl9JVEVNPVwiYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuLWl0ZW1cIixlLlBMQVlfQlROX1dSQVBQRVI9XCJhbGljZS1jYXJvdXNlbF9fcGxheS1idG4td3JhcHBlclwiLGUuU0xJREVfSU5GTz1cImFsaWNlLWNhcm91c2VsX19zbGlkZS1pbmZvXCIsZS5TTElERV9JTkZPX0lURU09XCJhbGljZS1jYXJvdXNlbF9fc2xpZGUtaW5mby1pdGVtXCIsZS5CVVRUT05fUFJFVj1cImFsaWNlLWNhcm91c2VsX19wcmV2LWJ0blwiLGUuQlVUVE9OX1BSRVZfV1JBUFBFUj1cImFsaWNlLWNhcm91c2VsX19wcmV2LWJ0bi13cmFwcGVyXCIsZS5CVVRUT05fUFJFVl9JVEVNPVwiYWxpY2UtY2Fyb3VzZWxfX3ByZXYtYnRuLWl0ZW1cIixlLkJVVFRPTl9ORVhUPVwiYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuXCIsZS5CVVRUT05fTkVYVF9XUkFQUEVSPVwiYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuLXdyYXBwZXJcIixlLkJVVFRPTl9ORVhUX0lURU09XCJhbGljZS1jYXJvdXNlbF9fbmV4dC1idG4taXRlbVwifShDbGFzc25hbWVzPWV4cG9ydHMuQ2xhc3NuYW1lc3x8KGV4cG9ydHMuQ2xhc3NuYW1lcz17fSkpLGZ1bmN0aW9uKGUpe2UuQUNUSVZFPVwiX19hY3RpdmVcIixlLklOQUNUSVZFPVwiX19pbmFjdGl2ZVwiLGUuQ0xPTkVEPVwiX19jbG9uZWRcIixlLkNVU1RPTT1cIl9fY3VzdG9tXCIsZS5QQVVTRT1cIl9fcGF1c2VcIixlLlNFUEFSQVRPUj1cIl9fc2VwYXJhdG9yXCIsZS5TU1I9XCJfX3NzclwiLGUuVEFSR0VUPVwiX190YXJnZXRcIn0oTW9kaWZpZXJzPWV4cG9ydHMuTW9kaWZpZXJzfHwoZXhwb3J0cy5Nb2RpZmllcnM9e30pKTsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmRlZmF1bHRQcm9wcz12b2lkIDA7dmFyIHR5cGVzXzE9cmVxdWlyZShcIi4vdHlwZXNcIik7ZXhwb3J0cy5kZWZhdWx0UHJvcHM9e2FjdGl2ZUluZGV4OjAsYW5pbWF0aW9uRHVyYXRpb246NDAwLGFuaW1hdGlvbkVhc2luZ0Z1bmN0aW9uOlwiZWFzZVwiLGFuaW1hdGlvblR5cGU6dHlwZXNfMS5BbmltYXRpb25UeXBlLlNMSURFLGF1dG9IZWlnaHQ6ITEsYXV0b1dpZHRoOiExLGF1dG9QbGF5OiExLGF1dG9QbGF5Q29udHJvbHM6ITEsYXV0b1BsYXlEaXJlY3Rpb246dHlwZXNfMS5BdXRvcGxheURpcmVjdGlvbi5MVFIsYXV0b1BsYXlJbnRlcnZhbDo0MDAsYXV0b1BsYXlTdHJhdGVneTp0eXBlc18xLkF1dG9QbGF5U3RyYXRlZ3kuREVGQVVMVCxjaGlsZHJlbjp2b2lkIDAsY29udHJvbHNTdHJhdGVneTp0eXBlc18xLkNvbnRyb2xzU3RyYXRlZ3kuREVGQVVMVCxkaXNhYmxlQnV0dG9uc0NvbnRyb2xzOiExLGRpc2FibGVEb3RzQ29udHJvbHM6ITEsZGlzYWJsZVNsaWRlSW5mbzohMCxpbmZpbml0ZTohMSxpbm5lcldpZHRoOnZvaWQgMCxpdGVtczp2b2lkIDAsa2V5Ym9hcmROYXZpZ2F0aW9uOiExLG1vdXNlVHJhY2tpbmc6ITEsbmFtZTpcIlwiLHBhZGRpbmdMZWZ0OjAscGFkZGluZ1JpZ2h0OjAscmVzcG9uc2l2ZTp2b2lkIDAsc3dpcGVEZWx0YToyMCxzd2lwZUV4dHJhUGFkZGluZzoyMDAsc3NyU2lsZW50TW9kZTohMCx0b3VjaFRyYWNraW5nOiEwLHRvdWNoTW92ZURlZmF1bHRFdmVudHM6ITAsb25Jbml0aWFsaXplZDpmdW5jdGlvbigpe30sb25SZXNpemVkOmZ1bmN0aW9uKCl7fSxvblJlc2l6ZUV2ZW50OnZvaWQgMCxvblNsaWRlQ2hhbmdlOmZ1bmN0aW9uKCl7fSxvblNsaWRlQ2hhbmdlZDpmdW5jdGlvbigpe319OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2Fzc2lnbj1mdW5jdGlvbigpe3JldHVybihfX2Fzc2lnbj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihvKXtmb3IodmFyIHQscj0xLGk9YXJndW1lbnRzLmxlbmd0aDtyPGk7cisrKWZvcih2YXIgcyBpbiB0PWFyZ3VtZW50c1tyXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxzKSYmKG9bc109dFtzXSk7cmV0dXJuIG99KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LG1hcFBhcnRpYWxDb29yZHM9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMubWFwUG9zaXRpb25Db29yZHM9ZXhwb3J0cy5tYXBQYXJ0aWFsQ29vcmRzPXZvaWQgMCxmdW5jdGlvbihvKXtyZXR1cm4gby5tYXAoZnVuY3Rpb24obyl7cmV0dXJue3dpZHRoOm8ud2lkdGgscG9zaXRpb246MH19KX0pLG1hcFBvc2l0aW9uQ29vcmRzPShleHBvcnRzLm1hcFBhcnRpYWxDb29yZHM9bWFwUGFydGlhbENvb3JkcyxmdW5jdGlvbihvLHQpe3JldHVybiB2b2lkIDA9PT10JiYodD0wKSxvLm1hcChmdW5jdGlvbihvKXtyZXR1cm4gby5wb3NpdGlvbj50P19fYXNzaWduKF9fYXNzaWduKHt9LG8pLHtwb3NpdGlvbjp0fSk6b30pfSk7ZXhwb3J0cy5tYXBQb3NpdGlvbkNvb3Jkcz1tYXBQb3NpdGlvbkNvb3JkczsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmlzVmVydGljYWxUb3VjaG1vdmVEZXRlY3RlZD1leHBvcnRzLmdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbj1leHBvcnRzLmdldEZhZGVvdXRBbmltYXRpb25JbmRleD1leHBvcnRzLmdldFN3aXBlVG91Y2hlbmRJbmRleD1leHBvcnRzLmdldFN3aXBlVG91Y2hlbmRQb3NpdGlvbj1leHBvcnRzLmdldFN3aXBlVHJhbnNmb3JtYXRpb25DdXJzb3I9ZXhwb3J0cy5nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleD1leHBvcnRzLmdldFN3aXBlU2hpZnRWYWx1ZT1leHBvcnRzLmdldEl0ZW1Db29yZHM9ZXhwb3J0cy5nZXRJc0xlZnREaXJlY3Rpb249ZXhwb3J0cy5zaG91bGRSZWNhbGN1bGF0ZVN3aXBlUG9zaXRpb249ZXhwb3J0cy5nZXRTd2lwZUxpbWl0TWF4PWV4cG9ydHMuZ2V0U3dpcGVMaW1pdE1pbj1leHBvcnRzLnNob3VsZENhbmNlbFNsaWRlQW5pbWF0aW9uPWV4cG9ydHMuc2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4PWV4cG9ydHMuZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4PWV4cG9ydHMuZ2V0QWN0aXZlSW5kZXg9ZXhwb3J0cy5nZXRTdGFydEluZGV4PWV4cG9ydHMuZ2V0U2hpZnRJbmRleD12b2lkIDA7dmFyIGdldFNoaWZ0SW5kZXg9ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZT12b2lkIDA9PT1lPzA6ZSkrKHQ9dm9pZCAwPT09dD8wOnQpfSxnZXRTdGFydEluZGV4PShleHBvcnRzLmdldFNoaWZ0SW5kZXg9Z2V0U2hpZnRJbmRleCxmdW5jdGlvbihlLHQpe2lmKHZvaWQgMD09PWUmJihlPTApLHQ9dm9pZCAwPT09dD8wOnQpe2lmKHQ8PWUpcmV0dXJuIHQtMTtpZigwPGUpcmV0dXJuIGV9cmV0dXJuIDB9KSxnZXRBY3RpdmVJbmRleD0oZXhwb3J0cy5nZXRTdGFydEluZGV4PWdldFN0YXJ0SW5kZXgsZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdGFydEluZGV4LHQ9dm9pZCAwPT09dD8wOnQsaT1lLml0ZW1zQ291bnQsZT1lLmluZmluaXRlO3JldHVybiB2b2lkIDAhPT1lJiZlP3Q6KDAsZXhwb3J0cy5nZXRTdGFydEluZGV4KSh0LHZvaWQgMD09PWk/MDppKX0pLGdldFVwZGF0ZVNsaWRlUG9zaXRpb25JbmRleD0oZXhwb3J0cy5nZXRBY3RpdmVJbmRleD1nZXRBY3RpdmVJbmRleCxmdW5jdGlvbihlLHQpe3JldHVybiBlPDA/dC0xOnQ8PWU/MDplfSksc2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4PShleHBvcnRzLmdldFVwZGF0ZVNsaWRlUG9zaXRpb25JbmRleD1nZXRVcGRhdGVTbGlkZVBvc2l0aW9uSW5kZXgsZnVuY3Rpb24oZSx0KXtyZXR1cm4gZTwwfHx0PD1lfSksc2hvdWxkQ2FuY2VsU2xpZGVBbmltYXRpb249KGV4cG9ydHMuc2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4PXNob3VsZFJlY2FsY3VsYXRlU2xpZGVJbmRleCxmdW5jdGlvbihlLHQpe3JldHVybiBlPDB8fHQ8PWV9KSxnZXRTd2lwZUxpbWl0TWluPShleHBvcnRzLnNob3VsZENhbmNlbFNsaWRlQW5pbWF0aW9uPXNob3VsZENhbmNlbFNsaWRlQW5pbWF0aW9uLGZ1bmN0aW9uKGUsdCl7dmFyIGk9ZS5pdGVtc09mZnNldCxlPWUudHJhbnNmb3JtYXRpb25TZXQsZT12b2lkIDA9PT1lP1tdOmUsbz10LmluZmluaXRlLHQ9dC5zd2lwZUV4dHJhUGFkZGluZztyZXR1cm4gbz8oZVt2b2lkIDA9PT1pPzA6aV18fHt9KS5wb3NpdGlvbjoobz0oZVswXXx8e30pLndpZHRoLE1hdGgubWluKHZvaWQgMD09PXQ/MDp0LHZvaWQgMD09PW8/MDpvKSl9KSxnZXRTd2lwZUxpbWl0TWF4PShleHBvcnRzLmdldFN3aXBlTGltaXRNaW49Z2V0U3dpcGVMaW1pdE1pbixmdW5jdGlvbihlLHQpe3ZhciBpPXQuaW5maW5pdGUsdD10LnN3aXBlRXh0cmFQYWRkaW5nLHQ9dm9pZCAwPT09dD8wOnQsbz1lLml0ZW1zQ291bnQsbj1lLml0ZW1zT2Zmc2V0LHI9ZS5pdGVtc0luU2xpZGUscj12b2lkIDA9PT1yPzE6cixlPWUudHJhbnNmb3JtYXRpb25TZXQsZT12b2lkIDA9PT1lP1tdOmU7cmV0dXJuIGk/KGVbKHZvaWQgMD09PW8/MTpvKSsoMCxleHBvcnRzLmdldFNoaWZ0SW5kZXgpKHIsdm9pZCAwPT09bj8wOm4pXXx8e30pLnBvc2l0aW9ufHwwOigwLGV4cG9ydHMuZ2V0SXRlbUNvb3JkcykoLXIsZSkucG9zaXRpb24rdH0pLHNob3VsZFJlY2FsY3VsYXRlU3dpcGVQb3NpdGlvbj0oZXhwb3J0cy5nZXRTd2lwZUxpbWl0TWF4PWdldFN3aXBlTGltaXRNYXgsZnVuY3Rpb24oZSx0LGkpe3JldHVybi10PD1lfHxNYXRoLmFicyhlKT49aX0pLGdldElzTGVmdERpcmVjdGlvbj0oZXhwb3J0cy5zaG91bGRSZWNhbGN1bGF0ZVN3aXBlUG9zaXRpb249c2hvdWxkUmVjYWxjdWxhdGVTd2lwZVBvc2l0aW9uLGZ1bmN0aW9uKGUpe3JldHVybihlPXZvaWQgMD09PWU/MDplKTwwfSksZ2V0SXRlbUNvb3Jkcz0oZXhwb3J0cy5nZXRJc0xlZnREaXJlY3Rpb249Z2V0SXNMZWZ0RGlyZWN0aW9uLGZ1bmN0aW9uKGUsdCl7cmV0dXJuKHQ9dm9pZCAwPT09dD9bXTp0KS5zbGljZShlPXZvaWQgMD09PWU/MDplKVswXXx8e3Bvc2l0aW9uOjAsd2lkdGg6MH19KSxnZXRTd2lwZVNoaWZ0VmFsdWU9KGV4cG9ydHMuZ2V0SXRlbUNvb3Jkcz1nZXRJdGVtQ29vcmRzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PWUmJihlPTApLHZvaWQgMD09PXQmJih0PVtdKSwoMCxleHBvcnRzLmdldEl0ZW1Db29yZHMpKGUsdCkucG9zaXRpb259KSxnZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleD0oZXhwb3J0cy5nZXRTd2lwZVNoaWZ0VmFsdWU9Z2V0U3dpcGVTaGlmdFZhbHVlLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PTApLChlPXZvaWQgMD09PWU/W106ZSkuZmluZEluZGV4KGZ1bmN0aW9uKGUpe3JldHVybiBlLnBvc2l0aW9uPj1NYXRoLmFicyh0KX0pfSksZ2V0U3dpcGVUcmFuc2Zvcm1hdGlvbkN1cnNvcj0oZXhwb3J0cy5nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleD1nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleCxmdW5jdGlvbihlLHQsaSl7dm9pZCAwPT09ZSYmKGU9W10pLHZvaWQgMD09PXQmJih0PTApLHZvaWQgMD09PWkmJihpPTApO2U9KDAsZXhwb3J0cy5nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleCkoZSx0KTtyZXR1cm4oMCxleHBvcnRzLmdldElzTGVmdERpcmVjdGlvbikoaSk/ZTplLTF9KSxnZXRTd2lwZVRvdWNoZW5kUG9zaXRpb249KGV4cG9ydHMuZ2V0U3dpcGVUcmFuc2Zvcm1hdGlvbkN1cnNvcj1nZXRTd2lwZVRyYW5zZm9ybWF0aW9uQ3Vyc29yLGZ1bmN0aW9uKGUsdCxpKXt2b2lkIDA9PT1pJiYoaT0wKTt2YXIgbz1lLmluZmluaXRlLG49ZS5hdXRvV2lkdGgscj1lLmlzU3RhZ2VDb250ZW50UGFydGlhbCxzPWUuc3dpcGVBbGxvd2VkUG9zaXRpb25NYXgsZT1lLnRyYW5zZm9ybWF0aW9uU2V0LGk9KDAsZXhwb3J0cy5nZXRTd2lwZVRyYW5zZm9ybWF0aW9uQ3Vyc29yKShlLGksdCksdD0oMCxleHBvcnRzLmdldEl0ZW1Db29yZHMpKGksZSkucG9zaXRpb247aWYoIW8pe2lmKG4mJnIpcmV0dXJuIDA7aWYoczx0KXJldHVybi1zfXJldHVybi10fSksZ2V0U3dpcGVUb3VjaGVuZEluZGV4PShleHBvcnRzLmdldFN3aXBlVG91Y2hlbmRQb3NpdGlvbj1nZXRTd2lwZVRvdWNoZW5kUG9zaXRpb24sZnVuY3Rpb24oZSx0KXt2YXIgaT10LnRyYW5zZm9ybWF0aW9uU2V0LG89dC5pdGVtc0luU2xpZGUsbj10Lml0ZW1zT2Zmc2V0LHI9dC5pdGVtc0NvdW50LHM9dC5pbmZpbml0ZSxkPXQuaXNTdGFnZUNvbnRlbnRQYXJ0aWFsLGE9dC5hY3RpdmVJbmRleCx0PXQudHJhbnNsYXRlM2Q7cmV0dXJuIHN8fCFkJiZ0IT09TWF0aC5hYnMoZSk/KGQ9KDAsZXhwb3J0cy5nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleCkoaSxlKSxzP2Q8KHQ9KDAsZXhwb3J0cy5nZXRTaGlmdEluZGV4KShvLG4pKT9yLW8tbitkOnQrcjw9ZD9kLSh0K3IpOmQtdDpkKTphfSksZ2V0RmFkZW91dEFuaW1hdGlvbkluZGV4PShleHBvcnRzLmdldFN3aXBlVG91Y2hlbmRJbmRleD1nZXRTd2lwZVRvdWNoZW5kSW5kZXgsZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pbmZpbml0ZSxpPWUuYWN0aXZlSW5kZXgsZT1lLml0ZW1zSW5TbGlkZTtyZXR1cm4gdD9pK2U6aX0pLGdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbj0oZXhwb3J0cy5nZXRGYWRlb3V0QW5pbWF0aW9uSW5kZXg9Z2V0RmFkZW91dEFuaW1hdGlvbkluZGV4LGZ1bmN0aW9uKGUsdCl7dmFyIGk9dC5hY3RpdmVJbmRleCx0PXQuc3RhZ2VXaWR0aDtyZXR1cm4gZTxpPyhpLWUpKi10fHwwOihlLWkpKnR8fDB9KSxpc1ZlcnRpY2FsVG91Y2htb3ZlRGV0ZWN0ZWQ9KGV4cG9ydHMuZ2V0RmFkZW91dEFuaW1hdGlvblBvc2l0aW9uPWdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbixmdW5jdGlvbihlLHQsaSl7cmV0dXJuIGU8KGk9dm9pZCAwPT09aT8wOmkpfHxlPC4xKnR9KTtleHBvcnRzLmlzVmVydGljYWxUb3VjaG1vdmVEZXRlY3RlZD1pc1ZlcnRpY2FsVG91Y2htb3ZlRGV0ZWN0ZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9fYXNzaWduPWZ1bmN0aW9uKCl7cmV0dXJuKF9fYXNzaWduPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxyPTEsbj1hcmd1bWVudHMubGVuZ3RoO3I8bjtyKyspZm9yKHZhciBvIGluIGU9YXJndW1lbnRzW3JdKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pJiYodFtvXT1lW29dKTtyZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sY29tbW9uXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuZ2V0VHJhbnNmb3JtTWF0cml4PWV4cG9ydHMuZ2V0VHJhbnNsYXRlWFByb3BlcnR5PWV4cG9ydHMuZ2V0VG91Y2htb3ZlVHJhbnNsYXRlUG9zaXRpb249ZXhwb3J0cy5nZXRUcmFuc2xhdGUzZFByb3BlcnR5PWV4cG9ydHMuZ2V0UmVuZGVyU3RhZ2VJdGVtU3R5bGVzPWV4cG9ydHMuZ2V0UmVuZGVyU3RhZ2VTdHlsZXM9ZXhwb3J0cy5nZXRUcmFuc2l0aW9uUHJvcGVydHk9ZXhwb3J0cy5nZXRSZW5kZXJXcmFwcGVyU3R5bGVzPWV4cG9ydHMuYW5pbWF0ZT1leHBvcnRzLnNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50PWV4cG9ydHMuZ2V0RWxlbWVudEZpcnN0Q2hpbGQ9ZXhwb3J0cy5nZXRFbGVtZW50Q3Vyc29yPWV4cG9ydHMuZ2V0QXV0b2hlaWdodFByb3BlcnR5PWV4cG9ydHMuZ2V0RWxlbWVudERpbWVuc2lvbnM9ZXhwb3J0cy5nZXRJdGVtV2lkdGg9ZXhwb3J0cy5jcmVhdGVEZWZhdWx0VHJhbnNmb3JtYXRpb25TZXQ9ZXhwb3J0cy5jcmVhdGVBdXRvd2lkdGhUcmFuc2Zvcm1hdGlvblNldD1leHBvcnRzLmlzRWxlbWVudD1leHBvcnRzLmNyZWF0ZUNsb25lcz1leHBvcnRzLmdldEl0ZW1zT2Zmc2V0PWV4cG9ydHMuZ2V0SXRlbXNDb3VudD1leHBvcnRzLmdldFNsaWRlcz12b2lkIDAscmVxdWlyZShcIi4vY29tbW9uXCIpKSxtYXBwZXJzXzE9cmVxdWlyZShcIi4vbWFwcGVyc1wiKSxtYXRoXzE9cmVxdWlyZShcIi4vbWF0aFwiKSxnZXRTbGlkZXM9ZnVuY3Rpb24odCl7dmFyIGU9dC5jaGlsZHJlbix0PXQuaXRlbXM7cmV0dXJuIGU/ZS5sZW5ndGg/ZTpbZV06dm9pZCAwPT09dD9bXTp0fSxnZXRJdGVtc0NvdW50PShleHBvcnRzLmdldFNsaWRlcz1nZXRTbGlkZXMsZnVuY3Rpb24odCl7cmV0dXJuKDAsZXhwb3J0cy5nZXRTbGlkZXMpKHQpLmxlbmd0aH0pLGdldEl0ZW1zT2Zmc2V0PShleHBvcnRzLmdldEl0ZW1zQ291bnQ9Z2V0SXRlbXNDb3VudCxmdW5jdGlvbih0KXt2YXIgZT10LmluZmluaXRlLHI9dC5wYWRkaW5nUmlnaHQsdD10LnBhZGRpbmdMZWZ0O3JldHVybiBlJiYodHx8cik/MTowfSksY3JlYXRlQ2xvbmVzPShleHBvcnRzLmdldEl0ZW1zT2Zmc2V0PWdldEl0ZW1zT2Zmc2V0LGZ1bmN0aW9uKHQpe3ZhciBlLHIsbixvLGk9KDAsZXhwb3J0cy5nZXRTbGlkZXMpKHQpO3JldHVybiB0LmluZmluaXRlPyhlPSgwLGV4cG9ydHMuZ2V0SXRlbXNDb3VudCkodCksbz0oMCxleHBvcnRzLmdldEl0ZW1zT2Zmc2V0KSh0KSx0PSgwLGNvbW1vbl8xLmdldEl0ZW1zSW5TbGlkZSkoZSx0KSxuPU1hdGgubWluKHQsZSkrbyxyPWkuc2xpY2UoMCxuKSxuPWkuc2xpY2UoLW4pLG8mJnQ9PT1lJiYobz1pWzBdLHQ9aS5zbGljZSgtMSlbMF0sbi51bnNoaWZ0KHQpLHIucHVzaChvKSksbi5jb25jYXQoaSxyKSk6aX0pLGlzRWxlbWVudD0oZXhwb3J0cy5jcmVhdGVDbG9uZXM9Y3JlYXRlQ2xvbmVzLGZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4gdCBpbnN0YW5jZW9mIEVsZW1lbnR8fHQgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnR9Y2F0Y2godCl7cmV0dXJuITF9fSksY3JlYXRlQXV0b3dpZHRoVHJhbnNmb3JtYXRpb25TZXQ9KGV4cG9ydHMuaXNFbGVtZW50PWlzRWxlbWVudCxmdW5jdGlvbih0LGksZSl7dm9pZCAwPT09aSYmKGk9MCksdm9pZCAwPT09ZSYmKGU9ITEpO3ZhciBzPTAsYT0hMCxyPVtdO3JldHVybigwLGV4cG9ydHMuaXNFbGVtZW50KSh0KSYmKHI9QXJyYXkuZnJvbSgobnVsbD09dD92b2lkIDA6dC5jaGlsZHJlbil8fFtdKS5yZWR1Y2UoZnVuY3Rpb24odCxlLHIpe3ZhciBuPTAscj1yLTEsbz10W3JdLGU9Z2V0RWxlbWVudERpbWVuc2lvbnMobnVsbD09ZT92b2lkIDA6ZS5maXJzdENoaWxkKS53aWR0aCxlPXZvaWQgMD09PWU/MDplO3JldHVybiBhPShzKz1lKTw9aSxvJiYobj0wPT1yP28ud2lkdGg6by53aWR0aCtvLnBvc2l0aW9uKSx0LnB1c2goe3Bvc2l0aW9uOm4sd2lkdGg6ZX0pLHR9LFtdKSxlfHwocj1hPygwLG1hcHBlcnNfMS5tYXBQYXJ0aWFsQ29vcmRzKShyKToodD1zLWksKDAsbWFwcGVyc18xLm1hcFBvc2l0aW9uQ29vcmRzKShyLHQpKSkpLHtjb29yZHM6cixjb250ZW50OnMscGFydGlhbDphfX0pLGNyZWF0ZURlZmF1bHRUcmFuc2Zvcm1hdGlvblNldD0oZXhwb3J0cy5jcmVhdGVBdXRvd2lkdGhUcmFuc2Zvcm1hdGlvblNldD1jcmVhdGVBdXRvd2lkdGhUcmFuc2Zvcm1hdGlvblNldCxmdW5jdGlvbih0LG8sZSxyKXt2b2lkIDA9PT1yJiYocj0hMSk7dmFyIGk9MCxzPSEwLG49W10sYT0oMCxleHBvcnRzLmdldEl0ZW1XaWR0aCkobyxlKTtyZXR1cm4gbj10LnJlZHVjZShmdW5jdGlvbih0LGUscil7dmFyIG49MCxyPXRbci0xXTtyZXR1cm4gcz0oaSs9YSk8PW8sciYmKG49YStyLnBvc2l0aW9ufHwwKSx0LnB1c2goe3dpZHRoOmEscG9zaXRpb246bn0pLHR9LFtdKSx7Y29vcmRzOm49cj9uOnM/KDAsbWFwcGVyc18xLm1hcFBhcnRpYWxDb29yZHMpKG4pOihlPWktbywoMCxtYXBwZXJzXzEubWFwUG9zaXRpb25Db29yZHMpKG4sZSkpLGNvbnRlbnQ6aSxwYXJ0aWFsOnN9fSksZ2V0SXRlbVdpZHRoPShleHBvcnRzLmNyZWF0ZURlZmF1bHRUcmFuc2Zvcm1hdGlvblNldD1jcmVhdGVEZWZhdWx0VHJhbnNmb3JtYXRpb25TZXQsZnVuY3Rpb24odCxlKXtyZXR1cm4gMDxlP3QvZTp0fSk7ZnVuY3Rpb24gZ2V0RWxlbWVudERpbWVuc2lvbnModCl7cmV0dXJuIHQmJnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0P3t3aWR0aDoodD10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKS53aWR0aCxoZWlnaHQ6dC5oZWlnaHR9Ont3aWR0aDowLGhlaWdodDowfX1leHBvcnRzLmdldEl0ZW1XaWR0aD1nZXRJdGVtV2lkdGgsZXhwb3J0cy5nZXRFbGVtZW50RGltZW5zaW9ucz1nZXRFbGVtZW50RGltZW5zaW9uczt2YXIgZ2V0QXV0b2hlaWdodFByb3BlcnR5PWZ1bmN0aW9uKHQsZSxyKXt2YXIgZT0oMCxleHBvcnRzLmdldEVsZW1lbnRDdXJzb3IpKGUscikscj0oMCxleHBvcnRzLmdldEVsZW1lbnRGaXJzdENoaWxkKSh0LGUpO2lmKCgwLGV4cG9ydHMuaXNFbGVtZW50KShyKSlyZXR1cm4gdD13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShyKSxlPXBhcnNlRmxvYXQodC5tYXJnaW5Ub3ApLHQ9cGFyc2VGbG9hdCh0Lm1hcmdpbkJvdHRvbSksTWF0aC5jZWlsKHIub2Zmc2V0SGVpZ2h0K2UrdCl9LGdldEVsZW1lbnRDdXJzb3I9KGV4cG9ydHMuZ2V0QXV0b2hlaWdodFByb3BlcnR5PWdldEF1dG9oZWlnaHRQcm9wZXJ0eSxmdW5jdGlvbih0LGUpe3ZhciByPWUuYWN0aXZlSW5kZXgsZT1lLml0ZW1zSW5TbGlkZTtyZXR1cm4gdC5pbmZpbml0ZT9yK2UrKDAsZXhwb3J0cy5nZXRJdGVtc09mZnNldCkodCk6cn0pLGdldEVsZW1lbnRGaXJzdENoaWxkPShleHBvcnRzLmdldEVsZW1lbnRDdXJzb3I9Z2V0RWxlbWVudEN1cnNvcixmdW5jdGlvbih0LGUpe3Q9dCYmdC5jaGlsZHJlbnx8W107cmV0dXJuIHRbZV0mJnRbZV0uZmlyc3RDaGlsZHx8bnVsbH0pO2Z1bmN0aW9uIHNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50KHQsZSxyKXtyZXR1cm4oZT12b2lkIDA9PT1lP3t9OmUpLndpZHRoIT09KHI9dm9pZCAwPT09cj97fTpyKS53aWR0aH1mdW5jdGlvbiBhbmltYXRlKHQsZSl7dmFyIGU9ZXx8e30scj1lLnBvc2l0aW9uLHI9dm9pZCAwPT09cj8wOnIsbj1lLmFuaW1hdGlvbkR1cmF0aW9uLG49dm9pZCAwPT09bj8wOm4sZT1lLmFuaW1hdGlvbkVhc2luZ0Z1bmN0aW9uLGU9dm9pZCAwPT09ZT9cImVhc2VcIjplO3JldHVybiB0JiYoMCxleHBvcnRzLmlzRWxlbWVudCkodCkmJih0LnN0eWxlLnRyYW5zaXRpb249XCJ0cmFuc2Zvcm0gXCIuY29uY2F0KG4sXCJtcyBcIikuY29uY2F0KGUsXCIgMG1zXCIpLHQuc3R5bGUudHJhbnNmb3JtPVwidHJhbnNsYXRlM2QoXCIuY29uY2F0KHIsXCJweCwgMCwgMClcIikpLHR9ZXhwb3J0cy5nZXRFbGVtZW50Rmlyc3RDaGlsZD1nZXRFbGVtZW50Rmlyc3RDaGlsZCxleHBvcnRzLnNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50PXNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50LGV4cG9ydHMuYW5pbWF0ZT1hbmltYXRlO3ZhciBnZXRSZW5kZXJXcmFwcGVyU3R5bGVzPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbj10fHx7fSxvPW4ucGFkZGluZ0xlZnQsaT1uLnBhZGRpbmdSaWdodCxzPW4uYXV0b0hlaWdodCxuPW4uYW5pbWF0aW9uRHVyYXRpb24scz1zPygwLGV4cG9ydHMuZ2V0QXV0b2hlaWdodFByb3BlcnR5KShyLHQsZSk6dm9pZCAwO3JldHVybntoZWlnaHQ6cyx0cmFuc2l0aW9uOnM/XCJoZWlnaHQgXCIuY29uY2F0KG4sXCJtc1wiKTp2b2lkIDAscGFkZGluZ0xlZnQ6XCJcIi5jb25jYXQobyxcInB4XCIpLHBhZGRpbmdSaWdodDpcIlwiLmNvbmNhdChpLFwicHhcIil9fSxnZXRUcmFuc2l0aW9uUHJvcGVydHk9KGV4cG9ydHMuZ2V0UmVuZGVyV3JhcHBlclN0eWxlcz1nZXRSZW5kZXJXcmFwcGVyU3R5bGVzLGZ1bmN0aW9uKHQpe3ZhciB0PXR8fHt9LGU9dC5hbmltYXRpb25EdXJhdGlvbix0PXQuYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb24sdD12b2lkIDA9PT10P1wiZWFzZVwiOnQ7cmV0dXJuXCJ0cmFuc2Zvcm0gXCIuY29uY2F0KHZvaWQgMD09PWU/MDplLFwibXMgXCIpLmNvbmNhdCh0LFwiIDBtc1wiKX0pLGdldFJlbmRlclN0YWdlU3R5bGVzPShleHBvcnRzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eT1nZXRUcmFuc2l0aW9uUHJvcGVydHksZnVuY3Rpb24odCxlKXt0PSh0fHx7fSkudHJhbnNsYXRlM2QsdD1cInRyYW5zbGF0ZTNkKFwiLmNvbmNhdCgtKHZvaWQgMD09PXQ/MDp0KSxcInB4LCAwLCAwKVwiKTtyZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sZSkse3RyYW5zZm9ybTp0fSl9KSxnZXRSZW5kZXJTdGFnZUl0ZW1TdHlsZXM9KGV4cG9ydHMuZ2V0UmVuZGVyU3RhZ2VTdHlsZXM9Z2V0UmVuZGVyU3RhZ2VTdHlsZXMsZnVuY3Rpb24odCxlKXt2YXIgcj1lLnRyYW5zZm9ybWF0aW9uU2V0LG49ZS5mYWRlb3V0QW5pbWF0aW9uSW5kZXgsbz1lLmZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbixpPWUuZmFkZW91dEFuaW1hdGlvblByb2Nlc3NpbmcsZT1lLmFuaW1hdGlvbkR1cmF0aW9uLHI9KHJbdF18fHt9KS53aWR0aDtyZXR1cm4gaSYmbj09PXQ/e3RyYW5zZm9ybTpcInRyYW5zbGF0ZVgoXCIuY29uY2F0KG8sXCJweClcIiksYW5pbWF0aW9uRHVyYXRpb246XCJcIi5jb25jYXQoZSxcIm1zXCIpLHdpZHRoOlwiXCIuY29uY2F0KHIsXCJweFwiKX06e3dpZHRoOnJ9fSksZ2V0VHJhbnNsYXRlM2RQcm9wZXJ0eT0oZXhwb3J0cy5nZXRSZW5kZXJTdGFnZUl0ZW1TdHlsZXM9Z2V0UmVuZGVyU3RhZ2VJdGVtU3R5bGVzLGZ1bmN0aW9uKHQsZSl7dmFyIHI9dCxuPWUuaW5maW5pdGUsbz1lLml0ZW1zT2Zmc2V0LGk9ZS5pdGVtc0luU2xpZGUsZT1lLnRyYW5zZm9ybWF0aW9uU2V0O3JldHVybigodm9pZCAwPT09ZT9bXTplKVtyPW4/dCsoMCxtYXRoXzEuZ2V0U2hpZnRJbmRleCkodm9pZCAwPT09aT8wOmksdm9pZCAwPT09bz8wOm8pOnJdfHx7fSkucG9zaXRpb258fDB9KSxnZXRUb3VjaG1vdmVUcmFuc2xhdGVQb3NpdGlvbj0oZXhwb3J0cy5nZXRUcmFuc2xhdGUzZFByb3BlcnR5PWdldFRyYW5zbGF0ZTNkUHJvcGVydHksZnVuY3Rpb24odCxlKXtyZXR1cm4tKGUtTWF0aC5mbG9vcih0KSl9KTtmdW5jdGlvbiBnZXRUcmFuc2xhdGVYUHJvcGVydHkodCl7dD1nZXRUcmFuc2Zvcm1NYXRyaXgodCksdD10JiZ0WzRdfHxcIlwiO3JldHVybiBOdW1iZXIodCl9ZnVuY3Rpb24gZ2V0VHJhbnNmb3JtTWF0cml4KHQpe3JldHVybiB0JiYoMCxleHBvcnRzLmlzRWxlbWVudCkodCkmJndpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpLnRyYW5zZm9ybS5tYXRjaCgvKC0/WzAtOS5dKykvZyl8fFtdfWV4cG9ydHMuZ2V0VG91Y2htb3ZlVHJhbnNsYXRlUG9zaXRpb249Z2V0VG91Y2htb3ZlVHJhbnNsYXRlUG9zaXRpb24sZXhwb3J0cy5nZXRUcmFuc2xhdGVYUHJvcGVydHk9Z2V0VHJhbnNsYXRlWFByb3BlcnR5LGV4cG9ydHMuZ2V0VHJhbnNmb3JtTWF0cml4PWdldFRyYW5zZm9ybU1hdHJpeDsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmNhbGN1bGF0ZUluaXRpYWxTdGF0ZT1leHBvcnRzLmdldEl0ZW1zSW5TbGlkZT1leHBvcnRzLmdldElzU3RhZ2VDb250ZW50UGFydGlhbD1leHBvcnRzLmNvbmNhdENsYXNzbmFtZXM9ZXhwb3J0cy5jYW5Vc2VET009dm9pZCAwO3ZhciBlbGVtZW50c18xPXJlcXVpcmUoXCIuL2VsZW1lbnRzXCIpLG1hdGhfMT1yZXF1aXJlKFwiLi9tYXRoXCIpLGNhblVzZURPTT1mdW5jdGlvbigpe3ZhciB0O3RyeXtyZXR1cm4gQm9vbGVhbihudWxsPT0odD1udWxsPT09d2luZG93fHx2b2lkIDA9PT13aW5kb3c/dm9pZCAwOndpbmRvdy5kb2N1bWVudCk/dm9pZCAwOnQuY3JlYXRlRWxlbWVudCl9Y2F0Y2godCl7cmV0dXJuITF9fSxjb25jYXRDbGFzc25hbWVzPShleHBvcnRzLmNhblVzZURPTT1jYW5Vc2VET00sZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspdFtlXT1hcmd1bWVudHNbZV07cmV0dXJuIHQuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpfSksZ2V0SXNTdGFnZUNvbnRlbnRQYXJ0aWFsPShleHBvcnRzLmNvbmNhdENsYXNzbmFtZXM9Y29uY2F0Q2xhc3NuYW1lcyxmdW5jdGlvbih0LGUsbil7cmV0dXJuIHZvaWQgMD09PWUmJihlPTApLHZvaWQgMD09PW4mJihuPTApLCEodD12b2lkIDAhPT10JiZ0KSYmbjw9ZX0pLGdldEl0ZW1zSW5TbGlkZT0oZXhwb3J0cy5nZXRJc1N0YWdlQ29udGVudFBhcnRpYWw9Z2V0SXNTdGFnZUNvbnRlbnRQYXJ0aWFsLGZ1bmN0aW9uKG4sdCl7dmFyIGksYT0xLG89dC5yZXNwb25zaXZlLGU9dC5hdXRvV2lkdGgscz10LmluZmluaXRlLHQ9dC5pbm5lcldpZHRoO3JldHVybiB2b2lkIDAhPT1lJiZlP3ZvaWQgMCE9PXMmJnM/bjphOihvJiYoZT1PYmplY3Qua2V5cyhvKSkubGVuZ3RoJiYodHx8KDAsZXhwb3J0cy5jYW5Vc2VET00pKCkpJiYoaT12b2lkIDA9PT10P3dpbmRvdy5pbm5lcldpZHRoOnQsZS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBlO051bWJlcih0KTw9aSYmKGU9KHQ9b1t0XSkuaXRlbXMsdD10Lml0ZW1zRml0LGE9XCJjb250YWluXCI9PT0odm9pZCAwPT09dD9cImZpbGxcIjp0KT9lOk1hdGgubWluKGUsbikpfSkpLGF8fDEpfSksY2FsY3VsYXRlSW5pdGlhbFN0YXRlPShleHBvcnRzLmdldEl0ZW1zSW5TbGlkZT1nZXRJdGVtc0luU2xpZGUsZnVuY3Rpb24odCxlLG4pe3ZvaWQgMD09PW4mJihuPSExKTt2YXIgaSxhLG89dC5hbmltYXRpb25EdXJhdGlvbixvPXZvaWQgMD09PW8/MDpvLHM9dC5pbmZpbml0ZSxzPXZvaWQgMCE9PXMmJnMscj10LmF1dG9QbGF5LHI9dm9pZCAwIT09ciYmcixsPXQuYXV0b1dpZHRoLGw9dm9pZCAwIT09bCYmbCxtPSgwLGVsZW1lbnRzXzEuY3JlYXRlQ2xvbmVzKSh0KSxkPSgwLGVsZW1lbnRzXzEuZ2V0VHJhbnNpdGlvblByb3BlcnR5KSgpLGM9KDAsZWxlbWVudHNfMS5nZXRJdGVtc0NvdW50KSh0KSx1PSgwLGVsZW1lbnRzXzEuZ2V0SXRlbXNPZmZzZXQpKHQpLGY9KDAsZXhwb3J0cy5nZXRJdGVtc0luU2xpZGUpKGMsdCksZz0oMCxtYXRoXzEuZ2V0U3RhcnRJbmRleCkodC5hY3RpdmVJbmRleCxjKSxnPSgwLG1hdGhfMS5nZXRBY3RpdmVJbmRleCkoe3N0YXJ0SW5kZXg6ZyxpdGVtc0NvdW50OmMsaW5maW5pdGU6c30pLEk9KDAsZWxlbWVudHNfMS5nZXRFbGVtZW50RGltZW5zaW9ucykoZSkud2lkdGgsUz0oYT0oZT0obD8oaT0oZT0oMCxlbGVtZW50c18xLmNyZWF0ZUF1dG93aWR0aFRyYW5zZm9ybWF0aW9uU2V0KShlLEkscykpLmNvb3JkcyxhPWUuY29udGVudCxlKTooaT0oZT0oMCxlbGVtZW50c18xLmNyZWF0ZURlZmF1bHRUcmFuc2Zvcm1hdGlvblNldCkobSxJLGYscykpLmNvb3JkcyxhPWUuY29udGVudCxlKSkucGFydGlhbCxhKSwoMCxtYXRoXzEuZ2V0SXRlbUNvb3JkcykoLWYsaT1pKS5wb3NpdGlvbikscD0oMCxtYXRoXzEuZ2V0U3dpcGVMaW1pdE1pbikoe2l0ZW1zT2Zmc2V0OnUsdHJhbnNmb3JtYXRpb25TZXQ6aX0sdCksdD0oMCxtYXRoXzEuZ2V0U3dpcGVMaW1pdE1heCkoe2l0ZW1zQ291bnQ6YyxpdGVtc09mZnNldDp1LGl0ZW1zSW5TbGlkZTpmLHRyYW5zZm9ybWF0aW9uU2V0Oml9LHQpLHY9KDAsbWF0aF8xLmdldFN3aXBlU2hpZnRWYWx1ZSkoYyxpKTtyZXR1cm57YWN0aXZlSW5kZXg6ZyxhdXRvV2lkdGg6bCxhbmltYXRpb25EdXJhdGlvbjpvLGNsb25lczptLGluZmluaXRlOnMsaXRlbXNDb3VudDpjLGl0ZW1zSW5TbGlkZTpmLGl0ZW1zT2Zmc2V0OnUsdHJhbnNsYXRlM2Q6KDAsZWxlbWVudHNfMS5nZXRUcmFuc2xhdGUzZFByb3BlcnR5KShnLHtpdGVtc0luU2xpZGU6ZixpdGVtc09mZnNldDp1LHRyYW5zZm9ybWF0aW9uU2V0OmksYXV0b1dpZHRoOmwsaW5maW5pdGU6c30pLHN0YWdlV2lkdGg6SSxzdGFnZUNvbnRlbnRXaWR0aDphLGluaXRpYWxTdGFnZUhlaWdodDowLGlzU3RhZ2VDb250ZW50UGFydGlhbDplLGlzQXV0b1BsYXlpbmc6Qm9vbGVhbihyKSxpc0F1dG9QbGF5Q2FuY2VsZWRPbkFjdGlvbjohMSx0cmFuc2Zvcm1hdGlvblNldDppLHRyYW5zaXRpb246ZCxmYWRlb3V0QW5pbWF0aW9uSW5kZXg6bnVsbCxmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb246bnVsbCxmYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZzohMSxzd2lwZUxpbWl0TWluOnAsc3dpcGVMaW1pdE1heDp0LHN3aXBlQWxsb3dlZFBvc2l0aW9uTWF4OlMsc3dpcGVTaGlmdFZhbHVlOnYsY2FuVXNlRG9tOm58fCgwLGV4cG9ydHMuY2FuVXNlRE9NKSgpfX0pO2V4cG9ydHMuY2FsY3VsYXRlSW5pdGlhbFN0YXRlPWNhbGN1bGF0ZUluaXRpYWxTdGF0ZTsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmlzQ2xvbmVkSXRlbT1leHBvcnRzLmlzVGFyZ2V0SXRlbT1leHBvcnRzLmlzQWN0aXZlSXRlbT1leHBvcnRzLmdldFJlbmRlclN0YWdlSXRlbUNsYXNzZXM9dm9pZCAwO3ZhciB0eXBlc18xPXJlcXVpcmUoXCIuLi90eXBlc1wiKSxjb21tb25fMT1yZXF1aXJlKFwiLi9jb21tb25cIiksbWF0aF8xPXJlcXVpcmUoXCIuL21hdGhcIiksZ2V0UmVuZGVyU3RhZ2VJdGVtQ2xhc3Nlcz1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PWUmJihlPTApO3ZhciBzPXQuZmFkZW91dEFuaW1hdGlvbkluZGV4LGk9KDAsZXhwb3J0cy5pc0FjdGl2ZUl0ZW0pKGUsdCk/dHlwZXNfMS5Nb2RpZmllcnMuQUNUSVZFOlwiXCIsbj0oMCxleHBvcnRzLmlzQ2xvbmVkSXRlbSkoZSx0KT90eXBlc18xLk1vZGlmaWVycy5DTE9ORUQ6XCJcIix0PSgwLGV4cG9ydHMuaXNUYXJnZXRJdGVtKShlLHQpP3R5cGVzXzEuTW9kaWZpZXJzLlRBUkdFVDpcIlwiLGU9ZT09PXM/dHlwZXNfMS5DbGFzc25hbWVzLkFOSU1BVEVEOlwiXCI7cmV0dXJuKDAsY29tbW9uXzEuY29uY2F0Q2xhc3NuYW1lcykodHlwZXNfMS5DbGFzc25hbWVzLlNUQUdFX0lURU0saSxuLHQsZSl9LGlzQWN0aXZlSXRlbT0oZXhwb3J0cy5nZXRSZW5kZXJTdGFnZUl0ZW1DbGFzc2VzPWdldFJlbmRlclN0YWdlSXRlbUNsYXNzZXMsZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT1lJiYoZT0wKTt2YXIgcz10LmFjdGl2ZUluZGV4LGk9dC5pdGVtc0luU2xpZGUsbj10Lml0ZW1zT2Zmc2V0LHI9dC5pbmZpbml0ZSx0PXQuYXV0b1dpZHRoLG89KDAsbWF0aF8xLmdldFNoaWZ0SW5kZXgpKGksbik7cmV0dXJuIHQmJnI/ZS1vPT09cytuOih0PXMrbyxyP3Q8PWUmJmU8dCtpOnM8PWUmJmU8dCl9KSxpc1RhcmdldEl0ZW09KGV4cG9ydHMuaXNBY3RpdmVJdGVtPWlzQWN0aXZlSXRlbSxmdW5jdGlvbihlLHQpe3ZvaWQgMD09PWUmJihlPTApO3ZhciBzPXQuYWN0aXZlSW5kZXgsaT10Lml0ZW1zSW5TbGlkZSxuPXQuaXRlbXNPZmZzZXQscj10LmluZmluaXRlLHQ9dC5hdXRvV2lkdGgsaT0oMCxtYXRoXzEuZ2V0U2hpZnRJbmRleCkoaSxuKTtyZXR1cm4gcj90JiZyP2UtaT09PXMrbjplPT09cytpOmU9PT1zfSksaXNDbG9uZWRJdGVtPShleHBvcnRzLmlzVGFyZ2V0SXRlbT1pc1RhcmdldEl0ZW0sZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT1lJiYoZT0wKTt2YXIgcz10Lml0ZW1zSW5TbGlkZSxpPXQuaXRlbXNPZmZzZXQsbj10Lml0ZW1zQ291bnQscj10LmluZmluaXRlLHQ9dC5hdXRvV2lkdGg7cmV0dXJuISFyJiYodCYmcj9lPHN8fG4tMStzPGU6ZTwodD0oMCxtYXRoXzEuZ2V0U2hpZnRJbmRleCkocyxpKSl8fG4tMSt0PGUpfSk7ZXhwb3J0cy5pc0Nsb25lZEl0ZW09aXNDbG9uZWRJdGVtOyIsIlwidXNlIHN0cmljdFwiO2Z1bmN0aW9uIGRlYm91bmNlKG4saSl7dm9pZCAwPT09aSYmKGk9MCk7ZnVuY3Rpb24gdSgpe2QmJihjbGVhclRpbWVvdXQoZCksZD12b2lkIDApfXZhciBkPXZvaWQgMDtyZXR1cm5bZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcyxvPVtdLHQ9MDt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKW9bdF09YXJndW1lbnRzW3RdO3UoKSxkPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5hcHBseShlLG8pLGQ9dm9pZCAwfSxpKX0sdV19T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5kZWJvdW5jZT12b2lkIDAsZXhwb3J0cy5kZWJvdW5jZT1kZWJvdW5jZTsiLCJcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBkZWJ1Zygpe2Zvcih2YXIgZT1bXSxvPTA7bzxhcmd1bWVudHMubGVuZ3RoO28rKyllW29dPWFyZ3VtZW50c1tvXTtcImRldmVsb3BtZW50XCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOViYmY29uc29sZS5kZWJ1Zy5hcHBseShjb25zb2xlLGUpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuZGVidWc9dm9pZCAwLGV4cG9ydHMuZGVidWc9ZGVidWc7IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5nZXRTbGlkZUl0ZW1JbmZvPWV4cG9ydHMuZ2V0U2xpZGVJbmZvPWV4cG9ydHMuZ2V0U2xpZGVJbmRleEZvck11bHRpcGxlSXRlbXM9ZXhwb3J0cy5nZXRTbGlkZUluZGV4Rm9yTm9uTXVsdGlwbGVJdGVtcz1leHBvcnRzLmdldEFjdGl2ZVNsaWRlRG90c0xlbmd0aD1leHBvcnRzLmdldEFjdGl2ZVNsaWRlSW5kZXg9dm9pZCAwO3ZhciBnZXRBY3RpdmVTbGlkZUluZGV4PWZ1bmN0aW9uKGUsdCl7dmFyIHQ9dHx8e30saT10LmFjdGl2ZUluZGV4LG89dC5pdGVtc0luU2xpZGUsdD10Lml0ZW1zQ291bnQsaT1pK287cmV0dXJuIDE9PT1vPygwLGV4cG9ydHMuZ2V0U2xpZGVJbmRleEZvck5vbk11bHRpcGxlSXRlbXMpKGksbyx0KTooMCxleHBvcnRzLmdldFNsaWRlSW5kZXhGb3JNdWx0aXBsZUl0ZW1zKShpLG8sdCxlKX0sZ2V0QWN0aXZlU2xpZGVEb3RzTGVuZ3RoPShleHBvcnRzLmdldEFjdGl2ZVNsaWRlSW5kZXg9Z2V0QWN0aXZlU2xpZGVJbmRleCxmdW5jdGlvbihlLHQpe3ZhciBpO3JldHVybiB2b2lkIDA9PT10JiYodD0xKSwoZT12b2lkIDA9PT1lPzA6ZSkmJnQ/KGk9TWF0aC5mbG9vcihlL3QpLGUldD09MD9pLTE6aSk6MH0pLGdldFNsaWRlSW5kZXhGb3JOb25NdWx0aXBsZUl0ZW1zPShleHBvcnRzLmdldEFjdGl2ZVNsaWRlRG90c0xlbmd0aD1nZXRBY3RpdmVTbGlkZURvdHNMZW5ndGgsZnVuY3Rpb24oZSx0LGkpe3JldHVybiBlPHQ/aS10Omk8ZT8wOmUtMX0pLGdldFNsaWRlSW5kZXhGb3JNdWx0aXBsZUl0ZW1zPShleHBvcnRzLmdldFNsaWRlSW5kZXhGb3JOb25NdWx0aXBsZUl0ZW1zPWdldFNsaWRlSW5kZXhGb3JOb25NdWx0aXBsZUl0ZW1zLGZ1bmN0aW9uKGUsdCxpLG8pe3ZhciBsPSgwLGV4cG9ydHMuZ2V0QWN0aXZlU2xpZGVEb3RzTGVuZ3RoKShpLHQpO3JldHVybiBlPT09aSt0PzA6b3x8ZTx0JiYwIT09ZT9sOjA9PT1lP2kldD09MD9sOmwtMTowPHQ/TWF0aC5mbG9vcihlL3QpLTE6MH0pLGdldFNsaWRlSW5mbz0oZXhwb3J0cy5nZXRTbGlkZUluZGV4Rm9yTXVsdGlwbGVJdGVtcz1nZXRTbGlkZUluZGV4Rm9yTXVsdGlwbGVJdGVtcyxmdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PTApO2U9KGU9dm9pZCAwPT09ZT8wOmUpKzE7cmV0dXJuIGU8MT9lPXQ6dDxlJiYoZT0xKSx7aXRlbTplLGl0ZW1zQ291bnQ6dH19KSxnZXRTbGlkZUl0ZW1JbmZvPShleHBvcnRzLmdldFNsaWRlSW5mbz1nZXRTbGlkZUluZm8sZnVuY3Rpb24oZSl7dmFyIGU9ZXx8e30sdD1lLml0ZW1zSW5TbGlkZSxpPWUuYWN0aXZlSW5kZXgsbz1lLmluZmluaXRlLGw9ZS5pdGVtc0NvdW50O3JldHVybiBlLmlzU3RhZ2VDb250ZW50UGFydGlhbD97aXNQcmV2U2xpZGVEaXNhYmxlZDohMCxpc05leHRTbGlkZURpc2FibGVkOiEwfTp7aXNQcmV2U2xpZGVEaXNhYmxlZDohMT09PW8mJjA9PT1pLGlzTmV4dFNsaWRlRGlzYWJsZWQ6ITE9PT1vJiZsLXQ8PWl9fSk7ZXhwb3J0cy5nZXRTbGlkZUl0ZW1JbmZvPWdldFNsaWRlSXRlbUluZm87IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5zaG91bGRDYW5jZWxBdXRvUGxheU9uSG92ZXI9ZXhwb3J0cy5zaG91bGRDYW5jZWxBdXRvUGxheU9uQWN0aW9uPWV4cG9ydHMuZ2V0SXRlbUluZGV4Rm9yRG90TmF2aWdhdGlvbj1leHBvcnRzLmNoZWNrSXNUaGVMYXN0RG90SW5kZXg9ZXhwb3J0cy5nZXREb3RzTmF2aWdhdGlvbkxlbmd0aD1leHBvcnRzLmhhc0RvdEZvckVhY2hTbGlkZT1leHBvcnRzLmlzU3RyYXRlZ3k9ZXhwb3J0cy5zaG91bGREaXNhYmxlQnV0dG9ucz1leHBvcnRzLnNob3VsZERpc2FibGVEb3RzPWV4cG9ydHMuc2hvdWxkRGlzYWJsZUNvbnRyb2xzPXZvaWQgMDt2YXIgdHlwZXNfMT1yZXF1aXJlKFwiLi4vdHlwZXNcIik7ZnVuY3Rpb24gc2hvdWxkRGlzYWJsZUNvbnRyb2xzKHQsbyl7dmFyIHQ9KHR8fHt9KS5jb250cm9sc1N0cmF0ZWd5LG89b3x8e30sZT1vLml0ZW1zSW5TbGlkZSxzPW8uaXRlbXNDb3VudCxvPW8uYXV0b1dpZHRoO2lmKCgwLGV4cG9ydHMuaXNTdHJhdGVneSkodCx0eXBlc18xLkNvbnRyb2xzU3RyYXRlZ3kuUkVTUE9OU0lWRSkpcmV0dXJuIW8mJmU9PT1zfWZ1bmN0aW9uIHNob3VsZERpc2FibGVEb3RzKHQsbyl7cmV0dXJuIHQuZGlzYWJsZURvdHNDb250cm9sc3x8c2hvdWxkRGlzYWJsZUNvbnRyb2xzKHQsbyl9ZnVuY3Rpb24gc2hvdWxkRGlzYWJsZUJ1dHRvbnModCxvKXtyZXR1cm4gdC5kaXNhYmxlQnV0dG9uc0NvbnRyb2xzfHwhdC5pbmZpbml0ZSYmc2hvdWxkRGlzYWJsZUNvbnRyb2xzKHQsbyl9ZXhwb3J0cy5zaG91bGREaXNhYmxlQ29udHJvbHM9c2hvdWxkRGlzYWJsZUNvbnRyb2xzLGV4cG9ydHMuc2hvdWxkRGlzYWJsZURvdHM9c2hvdWxkRGlzYWJsZURvdHMsZXhwb3J0cy5zaG91bGREaXNhYmxlQnV0dG9ucz1zaG91bGREaXNhYmxlQnV0dG9uczt2YXIgaXNTdHJhdGVneT1mdW5jdGlvbih0LG8pe3JldHVybiB2b2lkIDA9PT10JiYodD1cIlwiKSx2b2lkIDA9PT1vJiYobz1cIlwiKSxCb29sZWFuKHQmJnQuaW5jbHVkZXMobykpfSxoYXNEb3RGb3JFYWNoU2xpZGU9KGV4cG9ydHMuaXNTdHJhdGVneT1pc1N0cmF0ZWd5LGZ1bmN0aW9uKHQsbyl7cmV0dXJuIHR8fCgwLGV4cG9ydHMuaXNTdHJhdGVneSkobyx0eXBlc18xLkNvbnRyb2xzU3RyYXRlZ3kuQUxURVJOQVRFKX0pLGdldERvdHNOYXZpZ2F0aW9uTGVuZ3RoPShleHBvcnRzLmhhc0RvdEZvckVhY2hTbGlkZT1oYXNEb3RGb3JFYWNoU2xpZGUsZnVuY3Rpb24odCxvLGUpe3JldHVybiB2b2lkIDA9PT10JiYodD0wKSx2b2lkIDA9PT1vJiYobz0xKSwoZT12b2lkIDAhPT1lJiZlKT90OjAhPT1OdW1iZXIobykmJk1hdGguY2VpbCh0L28pfHwwfSksY2hlY2tJc1RoZUxhc3REb3RJbmRleD0oZXhwb3J0cy5nZXREb3RzTmF2aWdhdGlvbkxlbmd0aD1nZXREb3RzTmF2aWdhdGlvbkxlbmd0aCxmdW5jdGlvbih0LG8sZSl7cmV0dXJuIW8mJnQ9PT1lLTF9KSxnZXRJdGVtSW5kZXhGb3JEb3ROYXZpZ2F0aW9uPShleHBvcnRzLmNoZWNrSXNUaGVMYXN0RG90SW5kZXg9Y2hlY2tJc1RoZUxhc3REb3RJbmRleCxmdW5jdGlvbih0LG8sZSxzKXtyZXR1cm4obz9lLXM6dCpzKXx8MH0pLHNob3VsZENhbmNlbEF1dG9QbGF5T25BY3Rpb249KGV4cG9ydHMuZ2V0SXRlbUluZGV4Rm9yRG90TmF2aWdhdGlvbj1nZXRJdGVtSW5kZXhGb3JEb3ROYXZpZ2F0aW9uLGZ1bmN0aW9uKHQpe3JldHVybih0PXZvaWQgMD09PXQ/XCJcIjp0KT09PXR5cGVzXzEuQXV0b1BsYXlTdHJhdGVneS5BQ1RJT058fHQ9PT10eXBlc18xLkF1dG9QbGF5U3RyYXRlZ3kuQUxMfSksc2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkhvdmVyPShleHBvcnRzLnNob3VsZENhbmNlbEF1dG9QbGF5T25BY3Rpb249c2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkFjdGlvbixmdW5jdGlvbih0KXtyZXR1cm4odD12b2lkIDA9PT10P1wiXCI6dCk9PT10eXBlc18xLkF1dG9QbGF5U3RyYXRlZ3kuREVGQVVMVHx8dD09PXR5cGVzXzEuQXV0b1BsYXlTdHJhdGVneS5BTEx9KTtleHBvcnRzLnNob3VsZENhbmNlbEF1dG9QbGF5T25Ib3Zlcj1zaG91bGRDYW5jZWxBdXRvUGxheU9uSG92ZXI7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9fY3JlYXRlQmluZGluZz1PYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUscix0LG8pe3ZvaWQgMD09PW8mJihvPXQpO3ZhciBwPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KTtwJiYoXCJnZXRcImluIHA/ci5fX2VzTW9kdWxlOiFwLndyaXRhYmxlJiYhcC5jb25maWd1cmFibGUpfHwocD17ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gclt0XX19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLHApfTpmdW5jdGlvbihlLHIsdCxvKXtlW289dm9pZCAwPT09bz90Om9dPXJbdF19LF9fZXhwb3J0U3Rhcj1mdW5jdGlvbihlLHIpe2Zvcih2YXIgdCBpbiBlKVwiZGVmYXVsdFwiPT09dHx8T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsdCl8fF9fY3JlYXRlQmluZGluZyhyLGUsdCl9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jb21tb25cIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2VsZW1lbnRzXCIpLGV4cG9ydHMpLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jbGFzc25hbWVzXCIpLGV4cG9ydHMpLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90aW1lcnNcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL21hdGhcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2RlYnVnXCIpLGV4cG9ydHMpLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9yZW5kZXJcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NvbnRyb2xzXCIpLGV4cG9ydHMpLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9tYXBwZXJzXCIpLGV4cG9ydHMpOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2ltcG9ydERlZmF1bHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fSxyZWFjdF8xPShPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLlNsaWRlSW5mbz12b2lkIDAsX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSkpLHR5cGVzXzE9cmVxdWlyZShcIi4uL3R5cGVzXCIpLHV0aWxzXzE9cmVxdWlyZShcIi4uL3V0aWxzXCIpLFNsaWRlSW5mbz1mdW5jdGlvbihlKXt2YXIgdD1lLmFjdGl2ZUluZGV4LHM9ZS5pdGVtc0NvdW50LGU9ZS5yZW5kZXJTbGlkZUluZm8sdD0oMCx1dGlsc18xLmdldFNsaWRlSW5mbykodCxzKS5pdGVtO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGU/cmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5TTElERV9JTkZPfSxlKHtpdGVtOnQsaXRlbXNDb3VudDpzfSkpOihlPSgwLHV0aWxzXzEuY29uY2F0Q2xhc3NuYW1lcykodHlwZXNfMS5DbGFzc25hbWVzLlNMSURFX0lORk9fSVRFTSx0eXBlc18xLk1vZGlmaWVycy5TRVBBUkFUT1IpLHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuU0xJREVfSU5GT30scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuU0xJREVfSU5GT19JVEVNfSx0KSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOmV9LFwiL1wiKSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5TTElERV9JTkZPX0lURU19LHMpKSl9O2V4cG9ydHMuU2xpZGVJbmZvPVNsaWRlSW5mbzsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX19pbXBvcnREZWZhdWx0PWZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX0scmVhY3RfMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5TdGFnZUl0ZW09dm9pZCAwLF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpKSxTdGFnZUl0ZW09ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pdGVtLHI9ZS5jbGFzc05hbWUsZT1lLnN0eWxlcztyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLHtzdHlsZTplLGNsYXNzTmFtZTpyfSx0KX07ZXhwb3J0cy5TdGFnZUl0ZW09U3RhZ2VJdGVtOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2ltcG9ydERlZmF1bHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fSxyZWFjdF8xPShPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLkRvdHNOYXZpZ2F0aW9uPXZvaWQgMCxfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKSksdHlwZXNfMT1yZXF1aXJlKFwiLi4vdHlwZXNcIiksdXRpbHNfMT1yZXF1aXJlKFwiLi4vdXRpbHNcIiksRG90c05hdmlnYXRpb249ZnVuY3Rpb24oZSl7dmFyIGE9ZS5zdGF0ZSxuPWUub25DbGljayxyPWUub25Nb3VzZUVudGVyLGw9ZS5vbk1vdXNlTGVhdmUsdD1lLmNvbnRyb2xzU3RyYXRlZ3ksdT1lLnJlbmRlckRvdHNJdGVtLGM9YS5pdGVtc0NvdW50LF89YS5pdGVtc0luU2xpZGUsZD1hLmluZmluaXRlLGU9YS5hdXRvV2lkdGgsbT1hLmFjdGl2ZUluZGV4LHY9KDAsdXRpbHNfMS5nZXRTbGlkZUl0ZW1JbmZvKShhKS5pc05leHRTbGlkZURpc2FibGVkLGY9KDAsdXRpbHNfMS5oYXNEb3RGb3JFYWNoU2xpZGUpKGUsdCksRD0oMCx1dGlsc18xLmdldERvdHNOYXZpZ2F0aW9uTGVuZ3RoKShjLF8sZik7cmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidWxcIix7Y2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5ET1RTfSxBcnJheS5mcm9tKHtsZW5ndGg6Y30pLm1hcChmdW5jdGlvbihlLHQpe3ZhciBpLHMsbztpZih0PEQpcmV0dXJuIHM9KDAsdXRpbHNfMS5jaGVja0lzVGhlTGFzdERvdEluZGV4KSh0LEJvb2xlYW4oZCksRCksaT0oMCx1dGlsc18xLmdldEl0ZW1JbmRleEZvckRvdE5hdmlnYXRpb24pKHQscyxjLF8pLHM9KDAsdXRpbHNfMS5nZXRBY3RpdmVTbGlkZUluZGV4KSh2LGEpLGYmJigocz1tKTwwP3M9Yy0xOmM8PW0mJihzPTApLGk9dCkscz1zPT09dD90eXBlc18xLk1vZGlmaWVycy5BQ1RJVkU6XCJcIixvPXU/dHlwZXNfMS5Nb2RpZmllcnMuQ1VTVE9NOlwiXCIsbz0oMCx1dGlsc18xLmNvbmNhdENsYXNzbmFtZXMpKHR5cGVzXzEuQ2xhc3NuYW1lcy5ET1RTX0lURU0scyxvKSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIse2tleTpcImRvdC1pdGVtLVwiLmNvbmNhdCh0KSxvbk1vdXNlRW50ZXI6cixvbk1vdXNlTGVhdmU6bCxvbkNsaWNrOmZ1bmN0aW9uKCl7cmV0dXJuIG4oaSl9LGNsYXNzTmFtZTpvfSx1JiZ1KHtpc0FjdGl2ZTpCb29sZWFuKHMpLGFjdGl2ZUluZGV4OnR9KSl9KSl9O2V4cG9ydHMuRG90c05hdmlnYXRpb249RG90c05hdmlnYXRpb247IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9faW1wb3J0RGVmYXVsdD1mdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19LHJlYWN0XzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuUGxheVBhdXNlQnV0dG9uPXZvaWQgMCxfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKSksdHlwZXNfMT1yZXF1aXJlKFwiLi4vdHlwZXNcIiksdXRpbHNfMT1yZXF1aXJlKFwiLi4vdXRpbHNcIiksUGxheVBhdXNlQnV0dG9uPWZ1bmN0aW9uKGUpe3ZhciB0PWUuaXNQbGF5aW5nLGE9ZS5vbkNsaWNrLGU9ZS5yZW5kZXJQbGF5UGF1c2VCdXR0b247cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZT9yZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLlBMQVlfQlROLG9uQ2xpY2s6YX0sZSh7aXNQbGF5aW5nOnR9KSk6KGU9dD90eXBlc18xLk1vZGlmaWVycy5QQVVTRTpcIlwiLHQ9KDAsdXRpbHNfMS5jb25jYXRDbGFzc25hbWVzKSh0eXBlc18xLkNsYXNzbmFtZXMuUExBWV9CVE5fSVRFTSxlKSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLlBMQVlfQlROfSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLlBMQVlfQlROX1dSQVBQRVJ9LHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse29uQ2xpY2s6YSxjbGFzc05hbWU6dH0pKSkpfTtleHBvcnRzLlBsYXlQYXVzZUJ1dHRvbj1QbGF5UGF1c2VCdXR0b247IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9faW1wb3J0RGVmYXVsdD1mdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19LHJlYWN0XzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuUHJldk5leHRCdXR0b249dm9pZCAwLF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpKSx0eXBlc18xPXJlcXVpcmUoXCIuLi90eXBlc1wiKSx1dGlsc18xPXJlcXVpcmUoXCIuLi91dGlsc1wiKSxQcmV2TmV4dEJ1dHRvbj1mdW5jdGlvbihlKXt2YXIgdCxzPWUubmFtZSxhPWUuaXNEaXNhYmxlZCxyPWUub25DbGljayxuPWUucmVuZGVyUHJldkJ1dHRvbixlPWUucmVuZGVyTmV4dEJ1dHRvbjtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP3JlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX1BSRVYsb25DbGljazpyfSxuKHtpc0Rpc2FibGVkOmF9KSk6XCJmdW5jdGlvblwiPT10eXBlb2YgZT9yZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLkJVVFRPTl9ORVhULG9uQ2xpY2s6cn0sZSh7aXNEaXNhYmxlZDphfSkpOihlPShuPVwicHJldlwiPT09cyk/XCI8XCI6XCI+XCIscz1uP3R5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fUFJFVjp0eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX05FWFQsdD1uP3R5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fUFJFVl9XUkFQUEVSOnR5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fTkVYVF9XUkFQUEVSLG49bj90eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX1BSRVZfSVRFTTp0eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX05FWFRfSVRFTSxhPWE/dHlwZXNfMS5Nb2RpZmllcnMuSU5BQ1RJVkU6XCJcIixuPSgwLHV0aWxzXzEuY29uY2F0Q2xhc3NuYW1lcykobixhKSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6c30scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnR9LHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicFwiLHtjbGFzc05hbWU6bixvbkNsaWNrOmZ1bmN0aW9uKGUpe3JldHVybiByKGUpfX0scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse1wiZGF0YS1hcmVhXCI6ZX0pKSkpKX07ZXhwb3J0cy5QcmV2TmV4dEJ1dHRvbj1QcmV2TmV4dEJ1dHRvbjsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLlByZXZOZXh0QnV0dG9uPWV4cG9ydHMuUGxheVBhdXNlQnV0dG9uPWV4cG9ydHMuRG90c05hdmlnYXRpb249ZXhwb3J0cy5TdGFnZUl0ZW09ZXhwb3J0cy5TbGlkZUluZm89dm9pZCAwO3ZhciBTbGlkZUluZm9fMT1yZXF1aXJlKFwiLi9TbGlkZUluZm9cIiksU3RhZ2VJdGVtXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiU2xpZGVJbmZvXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFNsaWRlSW5mb18xLlNsaWRlSW5mb319KSxyZXF1aXJlKFwiLi9TdGFnZUl0ZW1cIikpLERvdHNOYXZpZ2F0aW9uXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiU3RhZ2VJdGVtXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFN0YWdlSXRlbV8xLlN0YWdlSXRlbX19KSxyZXF1aXJlKFwiLi9Eb3RzTmF2aWdhdGlvblwiKSksUGxheVBhdXNlQnV0dG9uXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiRG90c05hdmlnYXRpb25cIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gRG90c05hdmlnYXRpb25fMS5Eb3RzTmF2aWdhdGlvbn19KSxyZXF1aXJlKFwiLi9QbGF5UGF1c2VCdXR0b25cIikpLFByZXZOZXh0QnV0dG9uXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiUGxheVBhdXNlQnV0dG9uXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFBsYXlQYXVzZUJ1dHRvbl8xLlBsYXlQYXVzZUJ1dHRvbn19KSxyZXF1aXJlKFwiLi9QcmV2TmV4dEJ1dHRvblwiKSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJQcmV2TmV4dEJ1dHRvblwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBQcmV2TmV4dEJ1dHRvbl8xLlByZXZOZXh0QnV0dG9ufX0pOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2V4dGVuZHM9ZnVuY3Rpb24oKXt2YXIgbj1mdW5jdGlvbih0LGUpe3JldHVybihuPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8KHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheT9mdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9OmZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBpIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSkmJih0W2ldPWVbaV0pfSkpKHQsZSl9O3JldHVybiBmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJm51bGwhPT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhlKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIGkoKXt0aGlzLmNvbnN0cnVjdG9yPXR9bih0LGUpLHQucHJvdG90eXBlPW51bGw9PT1lP09iamVjdC5jcmVhdGUoZSk6KGkucHJvdG90eXBlPWUucHJvdG90eXBlLG5ldyBpKX19KCksX19hc3NpZ249ZnVuY3Rpb24oKXtyZXR1cm4oX19hc3NpZ249T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlLGk9MSxuPWFyZ3VtZW50cy5sZW5ndGg7aTxuO2krKylmb3IodmFyIG8gaW4gZT1hcmd1bWVudHNbaV0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxfX2NyZWF0ZUJpbmRpbmc9T2JqZWN0LmNyZWF0ZT9mdW5jdGlvbih0LGUsaSxuKXt2b2lkIDA9PT1uJiYobj1pKTt2YXIgbz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsaSk7byYmKFwiZ2V0XCJpbiBvP2UuX19lc01vZHVsZTohby53cml0YWJsZSYmIW8uY29uZmlndXJhYmxlKXx8KG89e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGVbaV19fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbixvKX06ZnVuY3Rpb24odCxlLGksbil7dFtuPXZvaWQgMD09PW4/aTpuXT1lW2ldfSxfX3NldE1vZHVsZURlZmF1bHQ9T2JqZWN0LmNyZWF0ZT9mdW5jdGlvbih0LGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KX06ZnVuY3Rpb24odCxlKXt0LmRlZmF1bHQ9ZX0sX19pbXBvcnRTdGFyPWZ1bmN0aW9uKHQpe2lmKHQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgZT17fTtpZihudWxsIT10KWZvcih2YXIgaSBpbiB0KVwiZGVmYXVsdFwiIT09aSYmT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsaSkmJl9fY3JlYXRlQmluZGluZyhlLHQsaSk7cmV0dXJuIF9fc2V0TW9kdWxlRGVmYXVsdChlLHQpLGV9LF9fZXhwb3J0U3Rhcj1mdW5jdGlvbih0LGUpe2Zvcih2YXIgaSBpbiB0KVwiZGVmYXVsdFwiPT09aXx8T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSl8fF9fY3JlYXRlQmluZGluZyhlLHQsaSl9LF9fYXdhaXRlcj1mdW5jdGlvbih0LGEscixsKXtyZXR1cm4gbmV3KHI9cnx8UHJvbWlzZSkoZnVuY3Rpb24oaSxlKXtmdW5jdGlvbiBuKHQpe3RyeXtzKGwubmV4dCh0KSl9Y2F0Y2godCl7ZSh0KX19ZnVuY3Rpb24gbyh0KXt0cnl7cyhsLnRocm93KHQpKX1jYXRjaCh0KXtlKHQpfX1mdW5jdGlvbiBzKHQpe3ZhciBlO3QuZG9uZT9pKHQudmFsdWUpOigoZT10LnZhbHVlKWluc3RhbmNlb2Ygcj9lOm5ldyByKGZ1bmN0aW9uKHQpe3QoZSl9KSkudGhlbihuLG8pfXMoKGw9bC5hcHBseSh0LGF8fFtdKSkubmV4dCgpKX0pfSxfX2dlbmVyYXRvcj1mdW5jdGlvbihuLG8pe3ZhciBzLGEscixsPXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJnJbMF0pdGhyb3cgclsxXTtyZXR1cm4gclsxXX0sdHJ5czpbXSxvcHM6W119LHQ9e25leHQ6ZSgwKSx0aHJvdzplKDEpLHJldHVybjplKDIpfTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJih0W1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pLHQ7ZnVuY3Rpb24gZShpKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9W2ksdF07aWYocyl0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtmb3IoO2w7KXRyeXtpZihzPTEsYSYmKHI9MiZlWzBdP2EucmV0dXJuOmVbMF0/YS50aHJvd3x8KChyPWEucmV0dXJuKSYmci5jYWxsKGEpLDApOmEubmV4dCkmJiEocj1yLmNhbGwoYSxlWzFdKSkuZG9uZSlyZXR1cm4gcjtzd2l0Y2goYT0wLChlPXI/WzImZVswXSxyLnZhbHVlXTplKVswXSl7Y2FzZSAwOmNhc2UgMTpyPWU7YnJlYWs7Y2FzZSA0OnJldHVybiBsLmxhYmVsKysse3ZhbHVlOmVbMV0sZG9uZTohMX07Y2FzZSA1OmwubGFiZWwrKyxhPWVbMV0sZT1bMF07Y29udGludWU7Y2FzZSA3OmU9bC5vcHMucG9wKCksbC50cnlzLnBvcCgpO2NvbnRpbnVlO2RlZmF1bHQ6aWYoIShyPTA8KHI9bC50cnlzKS5sZW5ndGgmJnJbci5sZW5ndGgtMV0pJiYoNj09PWVbMF18fDI9PT1lWzBdKSl7bD0wO2NvbnRpbnVlfWlmKDM9PT1lWzBdJiYoIXJ8fGVbMV0+clswXSYmZVsxXTxyWzNdKSlsLmxhYmVsPWVbMV07ZWxzZSBpZig2PT09ZVswXSYmbC5sYWJlbDxyWzFdKWwubGFiZWw9clsxXSxyPWU7ZWxzZXtpZighKHImJmwubGFiZWw8clsyXSkpe3JbMl0mJmwub3BzLnBvcCgpLGwudHJ5cy5wb3AoKTtjb250aW51ZX1sLmxhYmVsPXJbMl0sbC5vcHMucHVzaChlKX19ZT1vLmNhbGwobixsKX1jYXRjaCh0KXtlPVs2LHRdLGE9MH1maW5hbGx5e3M9cj0wfWlmKDUmZVswXSl0aHJvdyBlWzFdO3JldHVybnt2YWx1ZTplWzBdP2VbMV06dm9pZCAwLGRvbmU6ITB9fX19LF9faW1wb3J0RGVmYXVsdD1mdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19LHJlYWN0XzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpKSx2YW5pbGxhX3N3aXBlXzE9X19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2YW5pbGxhLXN3aXBlXCIpKSxkZWZhdWx0UHJvcHNfMT1yZXF1aXJlKFwiLi9kZWZhdWx0UHJvcHNcIiksVmlld3M9X19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3ZpZXdzXCIpKSxVdGlscz1fX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdXRpbHNcIikpLHR5cGVzXzE9cmVxdWlyZShcIi4vdHlwZXNcIiksQWxpY2VDYXJvdXNlbD0oX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3R5cGVzXCIpLGV4cG9ydHMpLGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQodCl7dmFyIHM9ZS5jYWxsKHRoaXMsdCl8fHRoaXM7cmV0dXJuIHMuc3dpcGVMaXN0ZW5lcj1udWxsLHMuX2hhbmRsZUtleWJvYXJkRXZlbnRzPWZ1bmN0aW9uKHQpe3N3aXRjaCh0LmNvZGUpe2Nhc2VcIlNwYWNlXCI6cmV0dXJuIHMucHJvcHMuYXV0b1BsYXkmJnMuX2hhbmRsZVBsYXlQYXVzZVRvZ2dsZSgpO2Nhc2VcIkFycm93TGVmdFwiOnJldHVybiBzLnNsaWRlUHJldih0KTtjYXNlXCJBcnJvd1JpZ2h0XCI6cmV0dXJuIHMuc2xpZGVOZXh0KHQpfX0scy5faGFuZGxlQmVmb3JlU2xpZGVFbmQ9ZnVuY3Rpb24obyl7cmV0dXJuIF9fYXdhaXRlcihzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZSxpLG47cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsZnVuY3Rpb24odCl7c3dpdGNoKHQubGFiZWwpe2Nhc2UgMDpyZXR1cm4oaT10aGlzLnN0YXRlLG49aS5hY3RpdmVJbmRleCxlPWkuaXRlbXNDb3VudCxpPWkuZmFkZW91dEFuaW1hdGlvblByb2Nlc3NpbmcsVXRpbHMuc2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4KG4sZSkpPyhuPVV0aWxzLmdldFVwZGF0ZVNsaWRlUG9zaXRpb25JbmRleChuLGUpLFs0LHRoaXMuX2hhbmRsZVVwZGF0ZVNsaWRlUG9zaXRpb24obildKTpbMywyXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLFszLDRdO2Nhc2UgMjpyZXR1cm4gaT9bNCx0aGlzLnNldFN0YXRlKHtmYWRlb3V0QW5pbWF0aW9uSW5kZXg6bnVsbCxmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb246bnVsbCxmYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZzohMX0pXTpbMyw0XTtjYXNlIDM6dC5zZW50KCksdC5sYWJlbD00O2Nhc2UgNDpyZXR1cm4gdGhpcy5faGFuZGxlU2xpZGVDaGFuZ2VkKG8pLFsyXX19KX0pfSxzLl9oYW5kbGVNb3VzZUVudGVyPWZ1bmN0aW9uKCl7dmFyIHQ9cy5wcm9wcy5hdXRvUGxheVN0cmF0ZWd5O1V0aWxzLnNob3VsZENhbmNlbEF1dG9QbGF5T25Ib3Zlcih0KSYmcy5zdGF0ZS5pc0F1dG9QbGF5aW5nJiYocy5pc0hvdmVyZWQ9ITAscy5faGFuZGxlUGF1c2UoKSl9LHMuX2hhbmRsZU1vdXNlTGVhdmU9ZnVuY3Rpb24oKXtzLnN0YXRlLmlzQXV0b1BsYXlpbmcmJihzLmlzSG92ZXJlZD0hMSxzLl9oYW5kbGVQbGF5KCkpfSxzLl9oYW5kbGVQYXVzZT1mdW5jdGlvbigpe3MuX2NsZWFyQXV0b1BsYXlUaW1lb3V0KCl9LHMuX2hhbmRsZVBsYXlQYXVzZVRvZ2dsZT1mdW5jdGlvbigpe3JldHVybiBfX2F3YWl0ZXIocyx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7dmFyIGU7cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsZnVuY3Rpb24odCl7c3dpdGNoKHQubGFiZWwpe2Nhc2UgMDpyZXR1cm4gZT10aGlzLnN0YXRlLmlzQXV0b1BsYXlpbmcsdGhpcy5oYXNVc2VyQWN0aW9uPSEwLFs0LHRoaXMuc2V0U3RhdGUoe2lzQXV0b1BsYXlpbmc6IWUsaXNBdXRvUGxheUNhbmNlbGVkT25BY3Rpb246ITB9KV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSxlP3RoaXMuX2hhbmRsZVBhdXNlKCk6dGhpcy5faGFuZGxlUGxheSgpLFsyXX19KX0pfSxzLl9zZXRSb290Q29tcG9uZW50UmVmPWZ1bmN0aW9uKHQpe3JldHVybiBzLnJvb3RFbGVtZW50PXR9LHMuX3NldFN0YWdlQ29tcG9uZW50UmVmPWZ1bmN0aW9uKHQpe3JldHVybiBzLnN0YWdlQ29tcG9uZW50PXR9LHMuX3JlbmRlclN0YWdlSXRlbT1mdW5jdGlvbih0LGUpe3ZhciBpPVV0aWxzLmdldFJlbmRlclN0YWdlSXRlbVN0eWxlcyhlLHMuc3RhdGUpLG49VXRpbHMuZ2V0UmVuZGVyU3RhZ2VJdGVtQ2xhc3NlcyhlLHMuc3RhdGUpO3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5TdGFnZUl0ZW0se3N0eWxlczppLGNsYXNzTmFtZTpuLGtleTpcInN0YWdlLWl0ZW0tXCIuY29uY2F0KGUpLGl0ZW06dH0pfSxzLl9yZW5kZXJTbGlkZUluZm89ZnVuY3Rpb24oKXt2YXIgdD1zLnByb3BzLnJlbmRlclNsaWRlSW5mbyxlPXMuc3RhdGUsaT1lLmFjdGl2ZUluZGV4LGU9ZS5pdGVtc0NvdW50O3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5TbGlkZUluZm8se2l0ZW1zQ291bnQ6ZSxhY3RpdmVJbmRleDppLHJlbmRlclNsaWRlSW5mbzp0fSl9LHMuc3RhdGU9VXRpbHMuY2FsY3VsYXRlSW5pdGlhbFN0YXRlKHQsbnVsbCkscy5pc0hvdmVyZWQ9ITEscy5pc0FuaW1hdGlvbkRpc2FibGVkPSExLHMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZD0hMSxzLmNhbmNlbFRvdWNoQW5pbWF0aW9ucz0hMSxzLmhhc1VzZXJBY3Rpb249ITEscy5yb290RWxlbWVudD1udWxsLHMucm9vdENvbXBvbmVudERpbWVuc2lvbnM9e30scy5zdGFnZUNvbXBvbmVudD1udWxsLHMuc3RhcnRUb3VjaG1vdmVQb3NpdGlvbj12b2lkIDAscy5zbGlkZVRvPXMuc2xpZGVUby5iaW5kKHMpLHMuc2xpZGVQcmV2PXMuc2xpZGVQcmV2LmJpbmQocykscy5zbGlkZU5leHQ9cy5zbGlkZU5leHQuYmluZChzKSxzLl9oYW5kbGVUb3VjaG1vdmU9cy5faGFuZGxlVG91Y2htb3ZlLmJpbmQocykscy5faGFuZGxlVG91Y2hlbmQ9cy5faGFuZGxlVG91Y2hlbmQuYmluZChzKSxzLl9oYW5kbGVEb3RDbGljaz1zLl9oYW5kbGVEb3RDbGljay5iaW5kKHMpLHMuX2hhbmRsZVJlc2l6ZT1zLl9oYW5kbGVSZXNpemUuYmluZChzKSx0PVV0aWxzLmRlYm91bmNlKHMuX2hhbmRsZVJlc2l6ZSwxMDApLHMuX2hhbmRsZVJlc2l6ZURlYm91bmNlZD10WzBdLHMuX2NhbmNlbFJlc2l6ZURlYm91bmNlZD10WzFdLHN9cmV0dXJuIF9fZXh0ZW5kcyh0LGUpLHQucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50PWZ1bmN0aW9uKCl7cmV0dXJuIF9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybls0LHRoaXMuX3NldEluaXRpYWxTdGF0ZSgpXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCksdGhpcy5fc2V0dXBTd2lwZUhhbmRsZXJzKCksdGhpcy5wcm9wcy5hdXRvUGxheSYmdGhpcy5faGFuZGxlUGxheSgpLFsyXX19KX0pfSx0LnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLnByb3BzLG49aS5hY3RpdmVJbmRleCxvPWkuYW5pbWF0aW9uRHVyYXRpb24scz1pLmF1dG9XaWR0aCxhPWkuY2hpbGRyZW4scj1pLmluZmluaXRlLGw9aS5pdGVtcyx1PWkucGFkZGluZ0xlZnQsZD1pLnBhZGRpbmdSaWdodCxjPWkucmVzcG9uc2l2ZSxoPWkuc3dpcGVFeHRyYVBhZGRpbmcscD1pLm1vdXNlVHJhY2tpbmcsXz1pLnN3aXBlRGVsdGEsbT1pLnRvdWNoVHJhY2tpbmcsaT1pLnRvdWNoTW92ZURlZmF1bHRFdmVudHM7YSYmdC5jaGlsZHJlbiE9PWE/KGE9ZS5hY3RpdmVJbmRleCxlPV9fYXNzaWduKF9fYXNzaWduKHt9LHRoaXMucHJvcHMpLHthY3RpdmVJbmRleDphfSksdGhpcy5fdXBkYXRlQ29tcG9uZW50KGUpKTp0LmF1dG9XaWR0aCE9PXN8fHQuaW5maW5pdGUhPT1yfHx0Lml0ZW1zIT09bHx8dC5wYWRkaW5nTGVmdCE9PXV8fHQucGFkZGluZ1JpZ2h0IT09ZHx8dC5yZXNwb25zaXZlIT09Y3x8dC5zd2lwZUV4dHJhUGFkZGluZyE9PWg/dGhpcy5fdXBkYXRlQ29tcG9uZW50KCk6KHQuYW5pbWF0aW9uRHVyYXRpb24hPT1vJiZ0aGlzLnNldFN0YXRlKHthbmltYXRpb25EdXJhdGlvbjpvfSksdC5hY3RpdmVJbmRleCE9PW4mJnRoaXMuc2xpZGVUbyhuLHR5cGVzXzEuRXZlbnRUeXBlLlVQREFURSkpLHQuc3dpcGVEZWx0YT09PV8mJnQubW91c2VUcmFja2luZz09PXAmJnQudG91Y2hUcmFja2luZz09PW0mJnQudG91Y2hNb3ZlRGVmYXVsdEV2ZW50cz09PWl8fHRoaXMuX3VwZGF0ZVN3aXBlUHJvcHMoKSx0aGlzLnByb3BzLmtleWJvYXJkTmF2aWdhdGlvbiE9PXQua2V5Ym9hcmROYXZpZ2F0aW9uJiZ0aGlzLl91cGRhdGVFdmVudExpc3RlbmVycygpfSx0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3RoaXMuX2NhbmNlbFJlc2l6ZURlYm91bmNlZCgpLHRoaXMuX2NhbmNlbFRpbWVvdXRBbmltYXRpb25zKCksdGhpcy5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiZXZlbnRPYmplY3RcIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5zdGF0ZSxlPXQuaXRlbXNJblNsaWRlLHQ9dC5hY3RpdmVJbmRleCxpPVV0aWxzLmdldFNsaWRlSXRlbUluZm8odGhpcy5zdGF0ZSksbj1pLmlzTmV4dFNsaWRlRGlzYWJsZWQsaT1pLmlzUHJldlNsaWRlRGlzYWJsZWQ7cmV0dXJue2l0ZW06dCxzbGlkZTpVdGlscy5nZXRBY3RpdmVTbGlkZUluZGV4KG4sdGhpcy5zdGF0ZSksaXRlbXNJblNsaWRlOmUsaXNOZXh0U2xpZGVEaXNhYmxlZDpuLGlzUHJldlNsaWRlRGlzYWJsZWQ6aSx0eXBlOnR5cGVzXzEuRXZlbnRUeXBlLkFDVElPTn19LGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiaXNGYWRlb3V0QW5pbWF0aW9uQWxsb3dlZFwiLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnN0YXRlLml0ZW1zSW5TbGlkZSxlPXRoaXMucHJvcHMsaT1lLmFuaW1hdGlvblR5cGUsbj1lLnBhZGRpbmdMZWZ0LG89ZS5wYWRkaW5nUmlnaHQsZT1lLmF1dG9XaWR0aDtyZXR1cm4gMT09PXQmJmk9PT10eXBlc18xLkFuaW1hdGlvblR5cGUuRkFERU9VVCYmIShufHxvfHxlKX0sZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJ0b3VjaG1vdmVQb3NpdGlvblwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwIT09dGhpcy5zdGFydFRvdWNobW92ZVBvc2l0aW9uP3RoaXMuc3RhcnRUb3VjaG1vdmVQb3NpdGlvbjp0aGlzLnN0YXRlLnRyYW5zbGF0ZTNkfSxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMH0pLHQucHJvdG90eXBlLnNsaWRlVG89ZnVuY3Rpb24odCxlKXt2YXIgaSxuLG87dm9pZCAwPT09dCYmKHQ9MCksdGhpcy5faGFuZGxlUGF1c2UoKSx0aGlzLmlzRmFkZW91dEFuaW1hdGlvbkFsbG93ZWQ/KGk9VXRpbHMuZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4KHQsdGhpcy5zdGF0ZS5pdGVtc0NvdW50KSxuPVV0aWxzLmdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbihpLHRoaXMuc3RhdGUpLG89VXRpbHMuZ2V0RmFkZW91dEFuaW1hdGlvbkluZGV4KHRoaXMuc3RhdGUpLHRoaXMuX2hhbmRsZVNsaWRlVG8oe2FjdGl2ZUluZGV4OmksZmFkZW91dEFuaW1hdGlvbkluZGV4Om8sZmFkZW91dEFuaW1hdGlvblBvc2l0aW9uOm4sZXZlbnRUeXBlOmV9KSk6dGhpcy5faGFuZGxlU2xpZGVUbyh7YWN0aXZlSW5kZXg6dCxldmVudFR5cGU6ZX0pfSx0LnByb3RvdHlwZS5zbGlkZVByZXY9ZnVuY3Rpb24odCl7dGhpcy5faGFuZGxlUGF1c2UoKSx0JiZ0LmlzVHJ1c3RlZCYmKHRoaXMuaGFzVXNlckFjdGlvbj0hMCk7dmFyIGUsaSx0PXRoaXMuc3RhdGUuYWN0aXZlSW5kZXgtMTt0aGlzLmlzRmFkZW91dEFuaW1hdGlvbkFsbG93ZWQ/KGU9LXRoaXMuc3RhdGUuc3RhZ2VXaWR0aCxpPVV0aWxzLmdldEZhZGVvdXRBbmltYXRpb25JbmRleCh0aGlzLnN0YXRlKSx0aGlzLl9oYW5kbGVTbGlkZVRvKHthY3RpdmVJbmRleDp0LGZhZGVvdXRBbmltYXRpb25JbmRleDppLGZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbjplfSkpOnRoaXMuX2hhbmRsZVNsaWRlVG8oe2FjdGl2ZUluZGV4OnR9KX0sdC5wcm90b3R5cGUuc2xpZGVOZXh0PWZ1bmN0aW9uKHQpe3RoaXMuX2hhbmRsZVBhdXNlKCksdCYmdC5pc1RydXN0ZWQmJih0aGlzLmhhc1VzZXJBY3Rpb249ITApO3ZhciBlLGksdD10aGlzLnN0YXRlLmFjdGl2ZUluZGV4KzE7dGhpcy5pc0ZhZGVvdXRBbmltYXRpb25BbGxvd2VkPyhlPXRoaXMuc3RhdGUuc3RhZ2VXaWR0aCxpPVV0aWxzLmdldEZhZGVvdXRBbmltYXRpb25JbmRleCh0aGlzLnN0YXRlKSx0aGlzLl9oYW5kbGVTbGlkZVRvKHthY3RpdmVJbmRleDp0LGZhZGVvdXRBbmltYXRpb25JbmRleDppLGZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbjplfSkpOnRoaXMuX2hhbmRsZVNsaWRlVG8oe2FjdGl2ZUluZGV4OnR9KX0sdC5wcm90b3R5cGUuX2FkZEV2ZW50TGlzdGVuZXJzPWZ1bmN0aW9uKCl7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLl9oYW5kbGVSZXNpemVEZWJvdW5jZWQpLHRoaXMucHJvcHMua2V5Ym9hcmROYXZpZ2F0aW9uJiZ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsdGhpcy5faGFuZGxlS2V5Ym9hcmRFdmVudHMpfSx0LnByb3RvdHlwZS5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnM9ZnVuY3Rpb24oKXt0aGlzLnN3aXBlTGlzdGVuZXImJnRoaXMuc3dpcGVMaXN0ZW5lci5kZXN0cm95KCksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLl9oYW5kbGVSZXNpemVEZWJvdW5jZWQpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIix0aGlzLl9oYW5kbGVLZXlib2FyZEV2ZW50cyl9LHQucHJvdG90eXBlLl91cGRhdGVFdmVudExpc3RlbmVycz1mdW5jdGlvbigpe3RoaXMucHJvcHMua2V5Ym9hcmROYXZpZ2F0aW9uP3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIix0aGlzLl9oYW5kbGVLZXlib2FyZEV2ZW50cyk6d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHRoaXMuX2hhbmRsZUtleWJvYXJkRXZlbnRzKX0sdC5wcm90b3R5cGUuX2hhbmRsZVJlc2l6ZT1mdW5jdGlvbihvKXtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3ZhciBlLGksbjtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybihpPXRoaXMucHJvcHMub25SZXNpemVFdmVudCxuPVV0aWxzLmdldEVsZW1lbnREaW1lbnNpb25zKHRoaXMucm9vdEVsZW1lbnQpLChpfHxVdGlscy5zaG91bGRIYW5kbGVSZXNpemVFdmVudCkobyx0aGlzLnJvb3RDb21wb25lbnREaW1lbnNpb25zLG4pKT8odGhpcy5fY2FuY2VsVGltZW91dEFuaW1hdGlvbnMoKSx0aGlzLnJvb3RDb21wb25lbnREaW1lbnNpb25zPW4saT10aGlzLnN0YXRlLG49aS5pdGVtc0NvdW50LGU9aS5pc0F1dG9QbGF5aW5nLGk9VXRpbHMuZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4KHRoaXMuc3RhdGUuYWN0aXZlSW5kZXgsbiksbj1VdGlscy5jYWxjdWxhdGVJbml0aWFsU3RhdGUoX19hc3NpZ24oX19hc3NpZ24oe30sdGhpcy5wcm9wcykse2FjdGl2ZUluZGV4Oml9KSx0aGlzLnN0YWdlQ29tcG9uZW50KSxpPVV0aWxzLmdldFRyYW5zbGF0ZTNkUHJvcGVydHkobi5hY3RpdmVJbmRleCxuKSxuPV9fYXNzaWduKF9fYXNzaWduKHt9LG4pLHt0cmFuc2xhdGUzZDppLGlzQXV0b1BsYXlpbmc6ZX0pLFV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246LWl9KSxbNCx0aGlzLnNldFN0YXRlKG4pXSk6WzMsMl07Y2FzZSAxOnQuc2VudCgpLHRoaXMuX2hhbmRsZVJlc2l6ZWQoKSx0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWQ9ITEsZSYmdGhpcy5faGFuZGxlUGxheSgpLHQubGFiZWw9MjtjYXNlIDI6cmV0dXJuWzJdfX0pfSl9LHQucHJvdG90eXBlLl9oYW5kbGVUb3VjaG1vdmU9ZnVuY3Rpb24odCxlKXt2YXIgaT1lLmFic1ksbj1lLmFic1gsbz1lLmRlbHRhWCxlPXRoaXMucHJvcHMuc3dpcGVEZWx0YSxzPXRoaXMuc3RhdGUsYT1zLnN3aXBlU2hpZnRWYWx1ZSxyPXMuc3dpcGVMaW1pdE1pbixsPXMuc3dpcGVMaW1pdE1heCx1PXMuaW5maW5pdGUscz1zLmZhZGVvdXRBbmltYXRpb25Qcm9jZXNzaW5nO2lmKHRoaXMuaGFzVXNlckFjdGlvbj0hMCwhKHN8fCF0aGlzLmlzVG91Y2hNb3ZlUHJvY2Vzc1N0YXJ0ZWQmJlV0aWxzLmlzVmVydGljYWxUb3VjaG1vdmVEZXRlY3RlZChuLGksZSkpKXt0aGlzLmlzVG91Y2hNb3ZlUHJvY2Vzc1N0YXJ0ZWR8fCh0aGlzLl9jYW5jZWxUaW1lb3V0QW5pbWF0aW9ucygpLHRoaXMuX3NldFRvdWNobW92ZVBvc2l0aW9uKCksdGhpcy5pc0FuaW1hdGlvbkRpc2FibGVkPSEwLHRoaXMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZD0hMCx0aGlzLl9oYW5kbGVTbGlkZUNoYW5nZSgpKTt2YXIgZD1VdGlscy5nZXRUb3VjaG1vdmVUcmFuc2xhdGVQb3NpdGlvbihvLHRoaXMudG91Y2htb3ZlUG9zaXRpb24pO2lmKCExPT09dSlyZXR1cm4gcjxkfHxkPC1sP3ZvaWQgMDp2b2lkIFV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246ZH0pO2lmKFV0aWxzLnNob3VsZFJlY2FsY3VsYXRlU3dpcGVQb3NpdGlvbihkLHIsbCkpdHJ5eyFmdW5jdGlvbiB0KCl7VXRpbHMuZ2V0SXNMZWZ0RGlyZWN0aW9uKG8pP2QrPWE6ZCs9LWE7VXRpbHMuc2hvdWxkUmVjYWxjdWxhdGVTd2lwZVBvc2l0aW9uKGQscixsKSYmdCgpfSgpfWNhdGNoKHQpe1V0aWxzLmRlYnVnKHQpfVV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246ZH0pfX0sdC5wcm90b3R5cGUuX2hhbmRsZVRvdWNoZW5kPWZ1bmN0aW9uKHQsZSl7dmFyIGksbixvLGU9ZS5kZWx0YVg7dGhpcy5fY2xlYXJUb3VjaG1vdmVQb3NpdGlvbigpLHRoaXMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZCYmKHRoaXMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZD0hMSxpPXRoaXMuc3RhdGUuYW5pbWF0aW9uRHVyYXRpb24sbj10aGlzLnByb3BzLmFuaW1hdGlvbkVhc2luZ0Z1bmN0aW9uLG89VXRpbHMuZ2V0VHJhbnNsYXRlWFByb3BlcnR5KHRoaXMuc3RhZ2VDb21wb25lbnQpLGU9VXRpbHMuZ2V0U3dpcGVUb3VjaGVuZFBvc2l0aW9uKHRoaXMuc3RhdGUsZSxvKSxVdGlscy5hbmltYXRlKHRoaXMuc3RhZ2VDb21wb25lbnQse3Bvc2l0aW9uOmUsYW5pbWF0aW9uRHVyYXRpb246aSxhbmltYXRpb25FYXNpbmdGdW5jdGlvbjpufSksdGhpcy5faGFuZGxlQmVmb3JlVG91Y2hFbmQoZSkpfSx0LnByb3RvdHlwZS5faGFuZGxlQmVmb3JlVG91Y2hFbmQ9ZnVuY3Rpb24ocyl7dmFyIHQ9dGhpcyxlPXRoaXMuc3RhdGUuYW5pbWF0aW9uRHVyYXRpb247dGhpcy50b3VjaEVuZFRpbWVvdXRJZD13aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiBfX2F3YWl0ZXIodCx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7dmFyIGUsaSxuLG89dGhpcztyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPVV0aWxzLmdldFN3aXBlVG91Y2hlbmRJbmRleChzLHRoaXMuc3RhdGUpLGk9VXRpbHMuZ2V0VHJhbnNsYXRlM2RQcm9wZXJ0eShlLHRoaXMuc3RhdGUpLFV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246LWl9KSxuPVV0aWxzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eSgpLFs0LHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUluZGV4OmUsdHJhbnNsYXRlM2Q6aSx0cmFuc2l0aW9uOm59KV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtyZXR1cm4gby5faGFuZGxlU2xpZGVDaGFuZ2VkKCl9KSxbMl19fSl9KX0sZSl9LHQucHJvdG90eXBlLl9oYW5kbGVTbGlkZVRvPWZ1bmN0aW9uKHQpe3ZhciBlPXQuYWN0aXZlSW5kZXgsYT12b2lkIDA9PT1lPzA6ZSxlPXQuZmFkZW91dEFuaW1hdGlvbkluZGV4LHI9dm9pZCAwPT09ZT9udWxsOmUsZT10LmZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbixsPXZvaWQgMD09PWU/bnVsbDplLHU9dC5ldmVudFR5cGU7cmV0dXJuIF9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZSxpLG4sbyxzPXRoaXM7cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsZnVuY3Rpb24odCl7c3dpdGNoKHQubGFiZWwpe2Nhc2UgMDpyZXR1cm4oaT10aGlzLnByb3BzLG49aS5pbmZpbml0ZSxpPWkuYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb24sZT10aGlzLnN0YXRlLG89ZS5pdGVtc0NvdW50LGU9ZS5hbmltYXRpb25EdXJhdGlvbix0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWR8fHRoaXMuc3RhdGUuYWN0aXZlSW5kZXg9PT1hfHwhbiYmVXRpbHMuc2hvdWxkQ2FuY2VsU2xpZGVBbmltYXRpb24oYSxvKSk/WzJdOih0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWQ9ITAsdGhpcy5fY2FuY2VsVGltZW91dEFuaW1hdGlvbnMoKSx0aGlzLl9oYW5kbGVTbGlkZUNoYW5nZSh1KSxuPSExLG89VXRpbHMuZ2V0VHJhbnNsYXRlM2RQcm9wZXJ0eShhLHRoaXMuc3RhdGUpLGk9bnVsbCE9PXImJm51bGwhPT1sPyhuPSEwLFV0aWxzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eSgpKTpVdGlscy5nZXRUcmFuc2l0aW9uUHJvcGVydHkoe2FuaW1hdGlvbkR1cmF0aW9uOmUsYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb246aX0pLFs0LHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUluZGV4OmEsdHJhbnNpdGlvbjppLHRyYW5zbGF0ZTNkOm8sYW5pbWF0aW9uRHVyYXRpb246ZSxmYWRlb3V0QW5pbWF0aW9uSW5kZXg6cixmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb246bCxmYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZzpufSldKTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLHRoaXMuc2xpZGVFbmRUaW1lb3V0SWQ9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gcy5faGFuZGxlQmVmb3JlU2xpZGVFbmQodSl9LGUpLFsyXX19KX0pfSx0LnByb3RvdHlwZS5faGFuZGxlVXBkYXRlU2xpZGVQb3NpdGlvbj1mdW5jdGlvbihvKXtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3ZhciBlLGksbjtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPXRoaXMuc3RhdGUuYW5pbWF0aW9uRHVyYXRpb24saT1VdGlscy5nZXRUcmFuc2xhdGUzZFByb3BlcnR5KG8sdGhpcy5zdGF0ZSksbj1VdGlscy5nZXRUcmFuc2l0aW9uUHJvcGVydHkoe2FuaW1hdGlvbkR1cmF0aW9uOjB9KSxbNCx0aGlzLnNldFN0YXRlKHthY3RpdmVJbmRleDpvLHRyYW5zbGF0ZTNkOmksdHJhbnNpdGlvbjpuLGFuaW1hdGlvbkR1cmF0aW9uOmUsZmFkZW91dEFuaW1hdGlvbkluZGV4Om51bGwsZmFkZW91dEFuaW1hdGlvblBvc2l0aW9uOm51bGwsZmFkZW91dEFuaW1hdGlvblByb2Nlc3Npbmc6ITF9KV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSxbMl19fSl9KX0sdC5wcm90b3R5cGUuX2hhbmRsZVJlc2l6ZWQ9ZnVuY3Rpb24oKXt0aGlzLnByb3BzLm9uUmVzaXplZCYmdGhpcy5wcm9wcy5vblJlc2l6ZWQoX19hc3NpZ24oX19hc3NpZ24oe30sdGhpcy5ldmVudE9iamVjdCkse3R5cGU6dHlwZXNfMS5FdmVudFR5cGUuUkVTSVpFfSkpfSx0LnByb3RvdHlwZS5faGFuZGxlU2xpZGVDaGFuZ2U9ZnVuY3Rpb24odCl7dGhpcy5wcm9wcy5vblNsaWRlQ2hhbmdlJiYodD10P19fYXNzaWduKF9fYXNzaWduKHt9LHRoaXMuZXZlbnRPYmplY3QpLHt0eXBlOnR9KTp0aGlzLmV2ZW50T2JqZWN0LHRoaXMucHJvcHMub25TbGlkZUNoYW5nZSh0KSl9LHQucHJvdG90eXBlLl9oYW5kbGVTbGlkZUNoYW5nZWQ9ZnVuY3Rpb24ocyl7cmV0dXJuIF9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZSxpLG4sbztyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybihpPXRoaXMuc3RhdGUsZT1pLmlzQXV0b1BsYXlpbmcsaT1pLmlzQXV0b1BsYXlDYW5jZWxlZE9uQWN0aW9uLG49dGhpcy5wcm9wcyxvPW4uYXV0b1BsYXlTdHJhdGVneSxuPW4ub25TbGlkZUNoYW5nZWQsVXRpbHMuc2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkFjdGlvbihvKSYmdGhpcy5oYXNVc2VyQWN0aW9uJiYhaSk/WzQsdGhpcy5zZXRTdGF0ZSh7aXNBdXRvUGxheUNhbmNlbGVkT25BY3Rpb246ITAsaXNBdXRvUGxheWluZzohMX0pXTpbMywyXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLFszLDNdO2Nhc2UgMjplJiZ0aGlzLl9oYW5kbGVQbGF5KCksdC5sYWJlbD0zO2Nhc2UgMzpyZXR1cm4gdGhpcy5pc0FuaW1hdGlvbkRpc2FibGVkPSExLG4mJihvPXM/X19hc3NpZ24oX19hc3NpZ24oe30sdGhpcy5ldmVudE9iamVjdCkse3R5cGU6c30pOnRoaXMuZXZlbnRPYmplY3QsbihvKSksWzJdfX0pfSl9LHQucHJvdG90eXBlLl9oYW5kbGVEb3RDbGljaz1mdW5jdGlvbih0KXt0aGlzLmhhc1VzZXJBY3Rpb249ITAsdGhpcy5zbGlkZVRvKHQpfSx0LnByb3RvdHlwZS5faGFuZGxlUGxheT1mdW5jdGlvbigpe3RoaXMuX3NldEF1dG9QbGF5SW50ZXJ2YWwoKX0sdC5wcm90b3R5cGUuX2NhbmNlbFRpbWVvdXRBbmltYXRpb25zPWZ1bmN0aW9uKCl7dGhpcy5fY2xlYXJBdXRvUGxheVRpbWVvdXQoKSx0aGlzLl9jbGVhclNsaWRlRW5kVGltZW91dCgpLHRoaXMuY2xlYXJUb3VjaGVuZFRpbWVvdXQoKX0sdC5wcm90b3R5cGUuX2NsZWFyQXV0b1BsYXlUaW1lb3V0PWZ1bmN0aW9uKCl7d2luZG93LmNsZWFyVGltZW91dCh0aGlzLmF1dG9QbGF5VGltZW91dElkKSx0aGlzLmF1dG9QbGF5VGltZW91dElkPXZvaWQgMH0sdC5wcm90b3R5cGUuX2NsZWFyU2xpZGVFbmRUaW1lb3V0PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMuc2xpZGVFbmRUaW1lb3V0SWQpLHRoaXMuc2xpZGVFbmRUaW1lb3V0SWQ9dm9pZCAwfSx0LnByb3RvdHlwZS5jbGVhclRvdWNoZW5kVGltZW91dD1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLnRvdWNoRW5kVGltZW91dElkKSx0aGlzLnRvdWNoRW5kVGltZW91dElkPXZvaWQgMH0sdC5wcm90b3R5cGUuX2NsZWFyVG91Y2htb3ZlUG9zaXRpb249ZnVuY3Rpb24oKXt0aGlzLnN0YXJ0VG91Y2htb3ZlUG9zaXRpb249dm9pZCAwfSx0LnByb3RvdHlwZS5fc2V0VG91Y2htb3ZlUG9zaXRpb249ZnVuY3Rpb24oKXt2YXIgdD1VdGlscy5nZXRUcmFuc2xhdGVYUHJvcGVydHkodGhpcy5zdGFnZUNvbXBvbmVudCk7dGhpcy5zdGFydFRvdWNobW92ZVBvc2l0aW9uPS10fSx0LnByb3RvdHlwZS5fc2V0SW5pdGlhbFN0YXRlPWZ1bmN0aW9uKCl7cmV0dXJuIF9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPVV0aWxzLmNhbGN1bGF0ZUluaXRpYWxTdGF0ZSh0aGlzLnByb3BzLHRoaXMuc3RhZ2VDb21wb25lbnQpLHRoaXMucm9vdENvbXBvbmVudERpbWVuc2lvbnM9VXRpbHMuZ2V0RWxlbWVudERpbWVuc2lvbnModGhpcy5yb290RWxlbWVudCksWzQsdGhpcy5zZXRTdGF0ZShlKV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSx0aGlzLnByb3BzLm9uSW5pdGlhbGl6ZWQmJnRoaXMucHJvcHMub25Jbml0aWFsaXplZChfX2Fzc2lnbihfX2Fzc2lnbih7fSx0aGlzLmV2ZW50T2JqZWN0KSx7dHlwZTp0eXBlc18xLkV2ZW50VHlwZS5JTklUfSkpLFsyXX19KX0pfSx0LnByb3RvdHlwZS5fc2V0QXV0b1BsYXlJbnRlcnZhbD1mdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10aGlzLnByb3BzLGk9ZS5hdXRvUGxheURpcmVjdGlvbixlPWUuYXV0b1BsYXlJbnRlcnZhbDt0aGlzLmF1dG9QbGF5VGltZW91dElkPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5pc0hvdmVyZWR8fChpPT09dHlwZXNfMS5BdXRvcGxheURpcmVjdGlvbi5SVEw/dC5zbGlkZVByZXYoKTp0LnNsaWRlTmV4dCgpKX0sZSl9LHQucHJvdG90eXBlLl9zZXR1cFN3aXBlSGFuZGxlcnM9ZnVuY3Rpb24oKXt0aGlzLnN3aXBlTGlzdGVuZXI9bmV3IHZhbmlsbGFfc3dpcGVfMS5kZWZhdWx0KHtlbGVtZW50OnRoaXMucm9vdEVsZW1lbnQsZGVsdGE6dGhpcy5wcm9wcy5zd2lwZURlbHRhLG9uU3dpcGluZzp0aGlzLl9oYW5kbGVUb3VjaG1vdmUsb25Td2lwZWQ6dGhpcy5faGFuZGxlVG91Y2hlbmQscm90YXRpb25BbmdsZTo1LG1vdXNlVHJhY2tpbmdFbmFibGVkOnRoaXMucHJvcHMubW91c2VUcmFja2luZyx0b3VjaFRyYWNraW5nRW5hYmxlZDp0aGlzLnByb3BzLnRvdWNoVHJhY2tpbmcscHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudDohdGhpcy5wcm9wcy50b3VjaE1vdmVEZWZhdWx0RXZlbnRzLHByZXZlbnRUcmFja2luZ09uTW91c2VsZWF2ZTohMH0pLHRoaXMuc3dpcGVMaXN0ZW5lci5pbml0KCl9LHQucHJvdG90eXBlLl91cGRhdGVDb21wb25lbnQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpczt2b2lkIDA9PT10JiYodD10aGlzLnByb3BzKSx0aGlzLl9jYW5jZWxUaW1lb3V0QW5pbWF0aW9ucygpLHRoaXMuaXNBbmltYXRpb25EaXNhYmxlZD0hMSx0aGlzLnN0YXRlLmlzQXV0b1BsYXlpbmcmJnRoaXMuX2hhbmRsZVBsYXkoKSx0aGlzLnNldFN0YXRlKHtjbG9uZXM6VXRpbHMuY3JlYXRlQ2xvbmVzKHQpfSkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7ZS5zZXRTdGF0ZShVdGlscy5jYWxjdWxhdGVJbml0aWFsU3RhdGUodCxlLnN0YWdlQ29tcG9uZW50KSl9KX0sdC5wcm90b3R5cGUuX3VwZGF0ZVN3aXBlUHJvcHM9ZnVuY3Rpb24oKXt0aGlzLnN3aXBlTGlzdGVuZXImJnRoaXMuc3dpcGVMaXN0ZW5lci51cGRhdGUoe2RlbHRhOnRoaXMucHJvcHMuc3dpcGVEZWx0YSxtb3VzZVRyYWNraW5nRW5hYmxlZDp0aGlzLnByb3BzLm1vdXNlVHJhY2tpbmcsdG91Y2hUcmFja2luZ0VuYWJsZWQ6dGhpcy5wcm9wcy50b3VjaFRyYWNraW5nLHByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQ6IXRoaXMucHJvcHMudG91Y2hNb3ZlRGVmYXVsdEV2ZW50c30pfSx0LnByb3RvdHlwZS5fcmVuZGVyRG90c05hdmlnYXRpb249ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnByb3BzLGU9dC5yZW5kZXJEb3RzSXRlbSx0PXQuY29udHJvbHNTdHJhdGVneTtyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVmlld3MuRG90c05hdmlnYXRpb24se3N0YXRlOnRoaXMuc3RhdGUsb25DbGljazp0aGlzLl9oYW5kbGVEb3RDbGljayxyZW5kZXJEb3RzSXRlbTplLGNvbnRyb2xzU3RyYXRlZ3k6dH0pfSx0LnByb3RvdHlwZS5fcmVuZGVyUHJldkJ1dHRvbj1mdW5jdGlvbigpe3ZhciB0PXRoaXMucHJvcHMucmVuZGVyUHJldkJ1dHRvbixlPVV0aWxzLmdldFNsaWRlSXRlbUluZm8odGhpcy5zdGF0ZSkuaXNQcmV2U2xpZGVEaXNhYmxlZDtyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVmlld3MuUHJldk5leHRCdXR0b24se25hbWU6XCJwcmV2XCIsb25DbGljazp0aGlzLnNsaWRlUHJldixpc0Rpc2FibGVkOmUscmVuZGVyUHJldkJ1dHRvbjp0fSl9LHQucHJvdG90eXBlLl9yZW5kZXJOZXh0QnV0dG9uPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5wcm9wcy5yZW5kZXJOZXh0QnV0dG9uLGU9VXRpbHMuZ2V0U2xpZGVJdGVtSW5mbyh0aGlzLnN0YXRlKS5pc05leHRTbGlkZURpc2FibGVkO3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5QcmV2TmV4dEJ1dHRvbix7bmFtZTpcIm5leHRcIixvbkNsaWNrOnRoaXMuc2xpZGVOZXh0LGlzRGlzYWJsZWQ6ZSxyZW5kZXJOZXh0QnV0dG9uOnR9KX0sdC5wcm90b3R5cGUuX3JlbmRlclBsYXlQYXVzZUJ1dHRvbj1mdW5jdGlvbigpe3ZhciB0PXRoaXMucHJvcHMucmVuZGVyUGxheVBhdXNlQnV0dG9uLGU9dGhpcy5zdGF0ZS5pc0F1dG9QbGF5aW5nO3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5QbGF5UGF1c2VCdXR0b24se2lzUGxheWluZzplLG9uQ2xpY2s6dGhpcy5faGFuZGxlUGxheVBhdXNlVG9nZ2xlLHJlbmRlclBsYXlQYXVzZUJ1dHRvbjp0fSl9LHQucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3ZhciB0PXRoaXMuc3RhdGUsZT10LnRyYW5zbGF0ZTNkLGk9dC5jbG9uZXMsbj10LnRyYW5zaXRpb24sdD10LmNhblVzZURvbSxvPVV0aWxzLnNob3VsZERpc2FibGVEb3RzKHRoaXMucHJvcHMsdGhpcy5zdGF0ZSkscz1VdGlscy5zaG91bGREaXNhYmxlQnV0dG9ucyh0aGlzLnByb3BzLHRoaXMuc3RhdGUpLGE9VXRpbHMuZ2V0UmVuZGVyV3JhcHBlclN0eWxlcyh0aGlzLnByb3BzLHRoaXMuc3RhdGUsdGhpcy5zdGFnZUNvbXBvbmVudCksZT1VdGlscy5nZXRSZW5kZXJTdGFnZVN0eWxlcyh7dHJhbnNsYXRlM2Q6ZX0se3RyYW5zaXRpb246bn0pLG49dGhpcy5wcm9wcy5zc3JTaWxlbnRNb2RlfHx0P1wiXCI6dHlwZXNfMS5Nb2RpZmllcnMuU1NSLHQ9VXRpbHMuY29uY2F0Q2xhc3NuYW1lcyh0eXBlc18xLkNsYXNzbmFtZXMuUk9PVCxuKTtyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnR9LHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3JlZjp0aGlzLl9zZXRSb290Q29tcG9uZW50UmVmfSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTphLGNsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuV1JBUFBFUixvbk1vdXNlRW50ZXI6dGhpcy5faGFuZGxlTW91c2VFbnRlcixvbk1vdXNlTGVhdmU6dGhpcy5faGFuZGxlTW91c2VMZWF2ZX0scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLHtzdHlsZTplLGNsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuU1RBR0UscmVmOnRoaXMuX3NldFN0YWdlQ29tcG9uZW50UmVmfSxpLm1hcCh0aGlzLl9yZW5kZXJTdGFnZUl0ZW0pKSkpLG8/bnVsbDp0aGlzLl9yZW5kZXJEb3RzTmF2aWdhdGlvbigpLHM/bnVsbDp0aGlzLl9yZW5kZXJQcmV2QnV0dG9uKCkscz9udWxsOnRoaXMuX3JlbmRlck5leHRCdXR0b24oKSx0aGlzLnByb3BzLmRpc2FibGVTbGlkZUluZm8/bnVsbDp0aGlzLl9yZW5kZXJTbGlkZUluZm8oKSx0aGlzLnByb3BzLmF1dG9QbGF5Q29udHJvbHM/dGhpcy5fcmVuZGVyUGxheVBhdXNlQnV0dG9uKCk6bnVsbCl9LHQuZGVmYXVsdFByb3BzPWRlZmF1bHRQcm9wc18xLmRlZmF1bHRQcm9wcyx0fShyZWFjdF8xLmRlZmF1bHQuUHVyZUNvbXBvbmVudCkpO2V4cG9ydHMuZGVmYXVsdD1BbGljZUNhcm91c2VsOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5cbmZ1bmN0aW9uIHBhcnNlKHV1aWQpIHtcbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cblxuICBsZXQgdjtcbiAgY29uc3QgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBQYXJzZSAjIyMjIyMjIy0uLi4uLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0O1xuICBhcnJbMV0gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsyXSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbM10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tIyMjIy0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzRdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzVdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tIyMjIy0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls2XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4O1xuICBhcnJbN10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLSMjIyMtLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzhdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDg7XG4gIGFycls5XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tLi4uLi0jIyMjIyMjIyMjIyNcbiAgLy8gKFVzZSBcIi9cIiB0byBhdm9pZCAzMi1iaXQgdHJ1bmNhdGlvbiB3aGVuIGJpdC1zaGlmdGluZyBoaWdoLW9yZGVyIGJ5dGVzKVxuXG4gIGFyclsxMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTFdID0gdiAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzEyXSA9IHYgPj4+IDI0ICYgMHhmZjtcbiAgYXJyWzEzXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzE0XSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbMTVdID0gdiAmIDB4ZmY7XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlOyIsImltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmltcG9ydCBwYXJzZSBmcm9tICcuL3BhcnNlLmpzJztcblxuZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHIpIHtcbiAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpOyAvLyBVVEY4IGVzY2FwZVxuXG4gIGNvbnN0IGJ5dGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuXG4gIHJldHVybiBieXRlcztcbn1cblxuZXhwb3J0IGNvbnN0IEROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IGNvbnN0IFVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdjM1KG5hbWUsIHZlcnNpb24sIGhhc2hmdW5jKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBfbmFtZXNwYWNlO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSBwYXJzZShuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGlmICgoKF9uYW1lc3BhY2UgPSBuYW1lc3BhY2UpID09PSBudWxsIHx8IF9uYW1lc3BhY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9uYW1lc3BhY2UubGVuZ3RoKSAhPT0gMTYpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH0gLy8gQ29tcHV0ZSBoYXNoIG9mIG5hbWVzcGFjZSBhbmQgdmFsdWUsIFBlciA0LjNcbiAgICAvLyBGdXR1cmU6IFVzZSBzcHJlYWQgc3ludGF4IHdoZW4gc3VwcG9ydGVkIG9uIGFsbCBwbGF0Zm9ybXMsIGUuZy4gYGJ5dGVzID1cbiAgICAvLyBoYXNoZnVuYyhbLi4ubmFtZXNwYWNlLCAuLi4gdmFsdWVdKWBcblxuXG4gICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTYgKyB2YWx1ZS5sZW5ndGgpO1xuICAgIGJ5dGVzLnNldChuYW1lc3BhY2UpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZSwgbmFtZXNwYWNlLmxlbmd0aCk7XG4gICAgYnl0ZXMgPSBoYXNoZnVuYyhieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDB4MGYgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiAweDNmIHwgMHg4MDtcblxuICAgIGlmIChidWYpIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBidWY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShieXRlcyk7XG4gIH0gLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG5cblxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gIH0gY2F0Y2ggKGVycikge30gLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcblxuXG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiLypcbiAqIEJyb3dzZXItY29tcGF0aWJsZSBKYXZhU2NyaXB0IE1ENVxuICpcbiAqIE1vZGlmaWNhdGlvbiBvZiBKYXZhU2NyaXB0IE1ENVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1NRDVcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQmFzZWQgb25cbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMiBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDlcbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KG1zZy5sZW5ndGgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzW2ldID0gbXNnLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1kNVRvSGV4RW5jb2RlZEFycmF5KHdvcmRzVG9NZDUoYnl0ZXNUb1dvcmRzKGJ5dGVzKSwgYnl0ZXMubGVuZ3RoICogOCkpO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhbiBhcnJheSBvZiBieXRlc1xuICovXG5cblxuZnVuY3Rpb24gbWQ1VG9IZXhFbmNvZGVkQXJyYXkoaW5wdXQpIHtcbiAgY29uc3Qgb3V0cHV0ID0gW107XG4gIGNvbnN0IGxlbmd0aDMyID0gaW5wdXQubGVuZ3RoICogMzI7XG4gIGNvbnN0IGhleFRhYiA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDMyOyBpICs9IDgpIHtcbiAgICBjb25zdCB4ID0gaW5wdXRbaSA+PiA1XSA+Pj4gaSAlIDMyICYgMHhmZjtcbiAgICBjb25zdCBoZXggPSBwYXJzZUludChoZXhUYWIuY2hhckF0KHggPj4+IDQgJiAweDBmKSArIGhleFRhYi5jaGFyQXQoeCAmIDB4MGYpLCAxNik7XG4gICAgb3V0cHV0LnB1c2goaGV4KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBvdXRwdXQgbGVuZ3RoIHdpdGggcGFkZGluZyBhbmQgYml0IGxlbmd0aFxuICovXG5cblxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICByZXR1cm4gKGlucHV0TGVuZ3RoOCArIDY0ID4+PiA5IDw8IDQpICsgMTQgKyAxO1xufVxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cblxuXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4W2dldE91dHB1dExlbmd0aChsZW4pIC0gMV0gPSBsZW47XG4gIGxldCBhID0gMTczMjU4NDE5MztcbiAgbGV0IGIgPSAtMjcxNzMzODc5O1xuICBsZXQgYyA9IC0xNzMyNTg0MTk0O1xuICBsZXQgZCA9IDI3MTczMzg3ODtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgY29uc3Qgb2xkYSA9IGE7XG4gICAgY29uc3Qgb2xkYiA9IGI7XG4gICAgY29uc3Qgb2xkYyA9IGM7XG4gICAgY29uc3Qgb2xkZCA9IGQ7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4Myk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpO1xuICAgIGIgPSBzYWZlQWRkKGIsIG9sZGIpO1xuICAgIGMgPSBzYWZlQWRkKGMsIG9sZGMpO1xuICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpO1xuICB9XG5cbiAgcmV0dXJuIFthLCBiLCBjLCBkXTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IGJ5dGVzIHRvIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHNcbiAqIENoYXJhY3RlcnMgPjI1NSBoYXZlIHRoZWlyIGhpZ2gtYnl0ZSBzaWxlbnRseSBpZ25vcmVkLlxuICovXG5cblxuZnVuY3Rpb24gYnl0ZXNUb1dvcmRzKGlucHV0KSB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBsZW5ndGg4ID0gaW5wdXQubGVuZ3RoICogODtcbiAgY29uc3Qgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg4OyBpICs9IDgpIHtcbiAgICBvdXRwdXRbaSA+PiA1XSB8PSAoaW5wdXRbaSAvIDhdICYgMHhmZikgPDwgaSAlIDMyO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIGNvbnN0IGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcbiAgY29uc3QgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gIHJldHVybiBtc3cgPDwgMTYgfCBsc3cgJiAweGZmZmY7XG59XG4vKlxuICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICovXG5cblxuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG59XG4vKlxuICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpO1xufVxuXG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGMgfCB+YiAmIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGQgfCBjICYgfmQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1kNTsiLCJpbXBvcnQgdjM1IGZyb20gJy4vdjM1LmpzJztcbmltcG9ydCBtZDUgZnJvbSAnLi9tZDUuanMnO1xuY29uc3QgdjMgPSB2MzUoJ3YzJywgMHgzMCwgbWQ1KTtcbmV4cG9ydCBkZWZhdWx0IHYzOyIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB4ICYgeSBeIH54ICYgejtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfVxufVxuXG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cblxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICBjb25zdCBLID0gWzB4NWE4Mjc5OTksIDB4NmVkOWViYTEsIDB4OGYxYmJjZGMsIDB4Y2E2MmMxZDZdO1xuICBjb25zdCBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuXG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzLnB1c2gobXNnLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShieXRlcykpIHtcbiAgICAvLyBDb252ZXJ0IEFycmF5LWxpa2UgdG8gQXJyYXlcbiAgICBieXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJ5dGVzKTtcbiAgfVxuXG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIGNvbnN0IGwgPSBieXRlcy5sZW5ndGggLyA0ICsgMjtcbiAgY29uc3QgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICBjb25zdCBNID0gbmV3IEFycmF5KE4pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgY29uc3QgYXJyID0gbmV3IFVpbnQzMkFycmF5KDE2KTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgYXJyW2pdID0gYnl0ZXNbaSAqIDY0ICsgaiAqIDRdIDw8IDI0IHwgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNiB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMl0gPDwgOCB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgfVxuXG4gICAgTVtpXSA9IGFycjtcbiAgfVxuXG4gIE1bTiAtIDFdWzE0XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggLyBNYXRoLnBvdygyLCAzMik7XG4gIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgTVtOIC0gMV1bMTVdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAmIDB4ZmZmZmZmZmY7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICBjb25zdCBXID0gbmV3IFVpbnQzMkFycmF5KDgwKTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgMTY7ICsrdCkge1xuICAgICAgV1t0XSA9IE1baV1bdF07XG4gICAgfVxuXG4gICAgZm9yIChsZXQgdCA9IDE2OyB0IDwgODA7ICsrdCkge1xuICAgICAgV1t0XSA9IFJPVEwoV1t0IC0gM10gXiBXW3QgLSA4XSBeIFdbdCAtIDE0XSBeIFdbdCAtIDE2XSwgMSk7XG4gICAgfVxuXG4gICAgbGV0IGEgPSBIWzBdO1xuICAgIGxldCBiID0gSFsxXTtcbiAgICBsZXQgYyA9IEhbMl07XG4gICAgbGV0IGQgPSBIWzNdO1xuICAgIGxldCBlID0gSFs0XTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgODA7ICsrdCkge1xuICAgICAgY29uc3QgcyA9IE1hdGguZmxvb3IodCAvIDIwKTtcbiAgICAgIGNvbnN0IFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1t0XSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cblxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cblxuICByZXR1cm4gW0hbMF0gPj4gMjQgJiAweGZmLCBIWzBdID4+IDE2ICYgMHhmZiwgSFswXSA+PiA4ICYgMHhmZiwgSFswXSAmIDB4ZmYsIEhbMV0gPj4gMjQgJiAweGZmLCBIWzFdID4+IDE2ICYgMHhmZiwgSFsxXSA+PiA4ICYgMHhmZiwgSFsxXSAmIDB4ZmYsIEhbMl0gPj4gMjQgJiAweGZmLCBIWzJdID4+IDE2ICYgMHhmZiwgSFsyXSA+PiA4ICYgMHhmZiwgSFsyXSAmIDB4ZmYsIEhbM10gPj4gMjQgJiAweGZmLCBIWzNdID4+IDE2ICYgMHhmZiwgSFszXSA+PiA4ICYgMHhmZiwgSFszXSAmIDB4ZmYsIEhbNF0gPj4gMjQgJiAweGZmLCBIWzRdID4+IDE2ICYgMHhmZiwgSFs0XSA+PiA4ICYgMHhmZiwgSFs0XSAmIDB4ZmZdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaGExOyIsImltcG9ydCB2MzUgZnJvbSAnLi92MzUuanMnO1xuaW1wb3J0IHNoYTEgZnJvbSAnLi9zaGExLmpzJztcbmNvbnN0IHY1ID0gdjM1KCd2NScsIDB4NTAsIHNoYTEpO1xuZXhwb3J0IGRlZmF1bHQgdjU7IiwiLyogZ2V0IHRoZSByZXF1aXJlZCBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGN1cnJlbnQgc2NyZWVuIHNpemUgZGVwZW5kIG9uIHJlc3BvbnNpdmUgb2JqZWN0ICovXG5leHBvcnQgY29uc3QgZ2V0UmVxdWlyZWRJdGVtcyA9IHJlc3BvbnNpdmUgPT4ge1xuICAgIGxldCBzY3JlZVdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICBpZiAoc2NyZWVXaWR0aCA8IDY0MCkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2l2ZVswXT8uaXRlbXM7XG4gICAgfSBlbHNlIGlmIChzY3JlZVdpZHRoID49IDY0MCAmJiBzY3JlZVdpZHRoIDwgMTAyNCkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2l2ZVs2NDBdPy5pdGVtcztcbiAgICB9IGVsc2UgaWYgKHNjcmVlV2lkdGggPj0gMTAyNCAmJiBzY3JlZVdpZHRoIDwgMTIwMCkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2l2ZVsxMDI0XT8uaXRlbXM7XG4gICAgfSBlbHNlIGlmIChzY3JlZVdpZHRoID49IDEyMDAgJiYgc2NyZWVXaWR0aCA8IDE2MDApIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNpdmVbMTIwMF0/Lml0ZW1zO1xuICAgIH0gZWxzZSBpZiAoc2NyZWVXaWR0aCA+PSAxNjAwICYmIHNjcmVlV2lkdGggPCAyNTYwKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zaXZlWzE2MDBdPy5pdGVtcztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2l2ZVsyNTYwXT8uaXRlbXM7XG4gICAgfVxufTtcblxuLypcbiAgICBDb25zdGFudHNcbiovXG5leHBvcnQgY29uc3Qgc3RhdHVzTGlzdCA9IHtcbiAgICByZXNldDogXCJyZXNldFwiLFxuICAgIGdvTGFzdDogXCJnb0xhc3RcIixcbiAgICBuZXh0OiBcIm5leHRcIixcbiAgICBwcmV2OiBcInByZXZcIlxufTtcblxuZXhwb3J0IGNvbnN0IGNsYXNzZXNBY3Rpb24gPSB7XG4gICAgYWRkOiBcImFkZFwiLFxuICAgIHJlbW92ZTogXCJyZW1vdmVcIlxufTtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkNsYXNzZXMgPSB7XG4gICAgbXVsdGlfY29udGFpbmVyOiBcIm11bHRpLWNhcm91c2VsX19jb250YWluZXJcIixcbiAgICBtdWx0aV9lbXB0eV9jb250YWluZXI6IFwibXVsdGktY2Fyb3VzZWxfX2VtcHR5LWNvbnRhaW5lclwiLFxuICAgIGl0ZW06IFwibXVsdGktY2Fyb3VzZWxfX2l0ZW1cIixcbiAgICBhY3RpdmU6IFwibXVsdGktY2Fyb3VzZWxfX2FjdGl2ZVwiLFxuICAgIGV4dHJhX2l0ZW06IFwibXVsdGktY2Fyb3VzZWxfX2V4dHJhLWl0ZW1cIixcbiAgICBub19kb3RzOiBcIm11bHRpLWNhcm91c2VsX19uby1kb3RzXCIsXG4gICAgZXJyb3I6IFwibXVsdGktY2Fyb3VzZWxfX2Vycm9yXCIsXG4gICAgbG9hZGluZzogXCJtdWx0aS1jYXJvdXNlbF9fbG9hZGluZ1wiXG59O1xuXG5leHBvcnQgY29uc3Qgbm9ybWFsQ2Fyb3VzZWxDbGFzc2VzID0ge1xuICAgIG5vcm1hbF9jb250YWluZXI6IFwibm9ybWFsLWNhcm91c2VsX19jb250YWluZXJcIixcbiAgICBub3JtYWxfaXRlbTogXCJub3JtYWwtY2Fyb3VzZWxfX2l0ZW1cIixcbiAgICBub3JtYWxfc3R5bGVkX2J0bjogXCJub3JtYWwtY2Fyb3VzZWxfX3N0eWxlZC1idG5cIlxufTtcblxuZXhwb3J0IGNvbnN0IGFjdGl2ZUNsaWNrQ2xhc3NlcyA9IHtcbiAgICBhY3RpdmVfY2xpY2tfY29udGFpbmVyOiBcImFjdGl2ZS1jbGljay1jYXJvdXNlbF9fY29udGFpbmVyXCIsXG4gICAgYWN0aXZlX2NsaWNrX2l0ZW06IFwiYWN0aXZlLWNsaWNrLWNhcm91c2VsX19pdGVtXCIsXG4gICAgYWN0aXZlX2NsaWNrX3N0eWxlZF9idG46IFwiYWN0aXZlLWNsaWNrLWNhcm91c2VsX19zdHlsZWQtYnRuXCJcbn07XG5cbmV4cG9ydCBjb25zdCBhY3RpdmVTbGlkZUNsYXNzZXMgPSB7XG4gICAgYWN0aXZlX3NsaWRlX2NvbnRhaW5lcjogXCJhY3RpdmUtc2xpZGUtY2Fyb3VzZWxfX2NvbnRhaW5lclwiLFxuICAgIGFjdGl2ZV9zbGlkZV93cmFwcGVyOiBcImFjdGl2ZS1zbGlkZS1jYXJvdXNlbF9fd3JhcHBlclwiLFxuICAgIGZpcnN0X2l0ZW06IFwiYWN0aXZlLXNsaWRlLWNhcm91c2VsX19maXJzdC1pdGVtXCIsXG4gICAgbGFzdF9pdGVtOiBcImFjdGl2ZS1zbGlkZS1jYXJvdXNlbF9fbGFzdC1pdGVtXCIsXG4gICAgcHJldl9idG46IFwiYWN0aXZlLXNsaWRlLWNhcm91c2VsX19wcmV2LWJ0blwiLFxuICAgIG5leHRfYnRuOiBcImFjdGl2ZS1zbGlkZS1jYXJvdXNlbF9fbmV4dC1idG5cIlxufTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vdWkvTm9ybWFsQ2Fyb3VzZWwuc2Nzc1wiO1xuaW1wb3J0IFwiLi4vdWkvQWN0aXZlQ2xpY2tDYXJvdXNlbC5zY3NzXCI7XG5pbXBvcnQgQWxpY2VDYXJvdXNlbCBmcm9tIFwicmVhY3QtYWxpY2UtY2Fyb3VzZWxcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBnZXRSZXF1aXJlZEl0ZW1zLCBjb21tb25DbGFzc2VzLCBub3JtYWxDYXJvdXNlbENsYXNzZXMsIGFjdGl2ZUNsaWNrQ2xhc3NlcywgY2xhc3Nlc0FjdGlvbiB9IGZyb20gXCIuL2hlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3JtYWxDYXJvdXNlbChwcm9wcykge1xuICAgIGNvbnN0IGNhcm91c2VsUGFyZW50ID0gdXNlUmVmKCk7XG5cbiAgICBjb25zdCBbcmVuZGVyQ2Fyb3VzZWwsIHNldFJlbmRlckNhcm91c2VsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZGF0YUl0ZW1zLCBzZXREYXRhSXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtjYXJvdXNlbEl0ZW1zLCBzZXRDYXJvdXNlbEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbdW5pcXVlQ2xhc3MsIHNldFVuaXF1ZUNsYXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtjYXJvdXNlbEluZmluaXRlLCBzZXRDYXJvdXNlbEluZmluaXRlXSA9IHVzZVN0YXRlKHByb3BzLmluZmluaXRlKTtcbiAgICBjb25zdCBbcmVzcG9uc2l2ZSwgc2V0UmVzcG9uc2l2ZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IGFkZE9yUmVtb3ZlQ2xhc3NOYW1lID0gKG5vZGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBpZiAoYWN0aW9uID09PSBjbGFzc2VzQWN0aW9uLnJlbW92ZSkge1xuICAgICAgICAgICAgbm9kZT8uY2xhc3NMaXN0Py5yZW1vdmUoY29tbW9uQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZT8uY2xhc3NMaXN0Py5hZGQoY29tbW9uQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIGluIGNhc2Ugb2YgXCJpbmZpbml0ZVwiIGNhcm91c2VsIHRoZSBub2RlIHdpbGwgYmUgbm9kZSBsaXN0IFwiQXJyYXlcIlxuICAgICAgICBiZWNhdXNlIHRoZSBjYXJvdXNlbCBjcmVhdGUgYSBjb3B5IG9mIGFsbCB0aGUgaXRlbXNcbiAgICAgICAgdGhhdCB3aHkgd2UgbmVlZCBjaGFuZ2UgdGhlIGFjdGl2ZSBjbGFzcyBvbiBib3RoIG5vZGVzIC0gdGhlIGNhcm91c2VsIHJlbmRlciBib3RoIC1cbiAgICAgICAgYW5kIHdpdGggbm8gXCJpbmZpbml0ZVwiIHRoZSBub2RlIGxpc3Qgd2lsbCBiZSBsZW5ndGggb2YgXCIxXCJcbiAgICAqL1xuICAgIGNvbnN0IGNoYW5nZUFjdGl2ZUNsYXNzID0gKG5vZGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBpZiAobm9kZT8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBub2RlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgYWRkT3JSZW1vdmVDbGFzc05hbWUoaXRlbSwgYWN0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIGlkeC1cIlwiIGlzIHRoZSBjb21tb24gdW5pcXVlIGNsYXNzIGJldHdlZW4gb3JpZ2luYWwgaXRlbSBhbmQgdGhlIGNsb25lZCBvbmVcbiAgICAqL1xuICAgIGNvbnN0IGdldElkeENsYXNzTmFtZSA9IGUgPT4ge1xuICAgICAgICBsZXQgY2xpY2tlZEl0ZW0gPSBlLnRhcmdldDtcblxuICAgICAgICAvLyBpbiBjYXNlIG9mIGNsaWNraW5nIGVsZW1lbnQgaW5zaWRlIHRoZSBpdGVtIHdlIG5lZWQgdGhlIG1haW4gZGl2IHdpdGggXCJpZHgtXCIgY2xhc3MgbmFtZVxuICAgICAgICB3aGlsZSAoY2xpY2tlZEl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChjbGlja2VkSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoY29tbW9uQ2xhc3Nlcy5pdGVtKSkgYnJlYWs7XG4gICAgICAgICAgICBjbGlja2VkSXRlbSA9IGNsaWNrZWRJdGVtLnBhcmVudE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2xhc3NOYW1lcyA9IGNsaWNrZWRJdGVtLmNsYXNzTmFtZS5zcGxpdChcIiBcIik7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWVzPy5maWx0ZXIoaXRlbSA9PiBpdGVtLmluY2x1ZGVzKFwiaWR4XCIpKT8uWzBdO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkNhcmRDbGlja2VkID0gKGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBpZiAoYWN0aW9uPy5jYW5FeGVjdXRlKSBhY3Rpb24uZXhlY3V0ZSgpO1xuXG4gICAgICAgIC8vIHJlbW92ZSBhY3RpdmUgY2xhc3MgZnJvbSBvcmlnaW5hbCBhbmQgY2xvbmVkIGl0ZW1cbiAgICAgICAgbGV0IGFjdGl2ZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt1bmlxdWVDbGFzc31gKT8ucXVlcnlTZWxlY3RvckFsbChgLiR7Y29tbW9uQ2xhc3Nlcy5hY3RpdmV9YCk7XG4gICAgICAgIGNoYW5nZUFjdGl2ZUNsYXNzKGFjdGl2ZU5vZGUsIGNsYXNzZXNBY3Rpb24ucmVtb3ZlKTtcblxuICAgICAgICBsZXQgaWR4Q2xhc3MgPSBnZXRJZHhDbGFzc05hbWUoZSk7XG5cbiAgICAgICAgLy8gYWRkIGFjdGl2ZSBjbGFzcyBmb3IgYm90aCBvcmlnaW5hbCBhbmQgY2xvbmVkIGl0ZW1cbiAgICAgICAgbGV0IGl0ZW1Ub1NldEFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3VuaXF1ZUNsYXNzfWApPy5xdWVyeVNlbGVjdG9yQWxsKGAuJHtpZHhDbGFzc31gKTtcbiAgICAgICAgY2hhbmdlQWN0aXZlQ2xhc3MoaXRlbVRvU2V0QWN0aXZlLCBjbGFzc2VzQWN0aW9uLmFkZCk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICBpZiB0aGUgaXRlbSBiZWhhdmlvciBcImNyZWF0ZSBleHRyYSBpdGVtc1wiIGNhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGV4dHJhIGl0ZW1zIGFuZCBnZXQgdGhlIGZpbmFsIG51bWJlciBvZiBjYXJvdXNlbCBpdGVtc1xuICAgICovXG4gICAgY29uc3QgY3JlYXRlQ2Fyb3VzZWxJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGV4dHJhSXRlbXMgPSBbXTtcbiAgICAgICAgaWYgKHByb3BzLml0ZW1zQmVoYXZpb3IgPT09IFwiZXh0cmFcIiAmJiBkYXRhSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFJlcXVpcmVkSXRlbXMgPSBnZXRSZXF1aXJlZEl0ZW1zKHByb3BzLmRlZmF1bHRSZXNwb25zaXZlKTtcblxuICAgICAgICAgICAgaWYgKGRhdGFJdGVtcy5sZW5ndGggPCBjdXJyZW50UmVxdWlyZWRJdGVtcykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFJlcXVpcmVkSXRlbXMgLSBkYXRhSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFJdGVtcy5wdXNoKDxkaXYgY2xhc3NOYW1lPXtjb21tb25DbGFzc2VzLmV4dHJhX2l0ZW19PjwvZGl2Pik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldENhcm91c2VsSW5maW5pdGUoZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRDYXJvdXNlbEluZmluaXRlKHByb3BzLmluZmluaXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRDYXJvdXNlbEl0ZW1zKFsuLi5kYXRhSXRlbXMsIC4uLmV4dHJhSXRlbXNdKTtcbiAgICAgICAgc2V0UmVuZGVyQ2Fyb3VzZWwodHJ1ZSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICBzZXQgdGhlIGl0ZW1zIHdoZW4gcmVuZGVyIHRoZSB3aWRnZXQgb3IgdXBkYXRlIHRoZSBkYXRhXG4gICAgKi9cbiAgICBjb25zdCBzZXR1cENhcm91c2UgPSBpdGVtcyA9PiB7XG4gICAgICAgIGxldCBjYXJvdXNlbEl0ZW1zID0gaXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmNhcm91c2VsVHlwZSA9PT0gXCJhY3RpdmVcIiA/IGUgPT4gb25DYXJkQ2xpY2tlZChlLCBwcm9wcy5hY3Rpb24/LmdldChpdGVtKSkgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjb21tb25DbGFzc2VzLml0ZW19IGlkeC0ke2l9ICR7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNhcm91c2VsVHlwZSA9PT0gXCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBhY3RpdmVDbGlja0NsYXNzZXMuYWN0aXZlX2NsaWNrX2l0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogbm9ybWFsQ2Fyb3VzZWxDbGFzc2VzLm5vcm1hbF9pdGVtXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Byb3BzLmNvbnRlbnQuZ2V0KGl0ZW0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpO1xuICAgICAgICBzZXREYXRhSXRlbXMoY2Fyb3VzZWxJdGVtcyk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICBzZXQgdGhlIGFjdGl2ZSBpdGVtIGFmdGVyIHRoZSBjYXJvdXNlbCBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpemVkXG4gICAgKi9cbiAgICBjb25zdCBvbkluaXRpYWxpemVkID0gKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMuY2Fyb3VzZWxUeXBlID09PSBcImFjdGl2ZVwiKSB7XG4gICAgICAgICAgICBsZXQgZmlyc3RDYXJvdXNlbEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt1bmlxdWVDbGFzc31gKT8ucXVlcnlTZWxlY3RvcihcIi5pZHgtMFwiKTtcbiAgICAgICAgICAgIGZpcnN0Q2Fyb3VzZWxJdGVtPy5jbGljaygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICBvbiByZXNpemUgcmVyZW5kZXIgdGhlIGNhcm91c2VsIHRvIHJlY2FsY3VsYXRlIHRoZSBleHRyYSBpdGVtcyBpZiBuZWNlc3NhcnkgYW5kIHJlc2V0IHRoZSBhY3RpdmUgaXRlbVxuICAgICovXG4gICAgY29uc3Qgb25SZXNpemVkID0gKCkgPT4ge1xuICAgICAgICBzZXRSZW5kZXJDYXJvdXNlbChmYWxzZSk7XG4gICAgICAgIGNyZWF0ZUNhcm91c2VsSXRlbXMoKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgIHdoZW4gZ2V0dGluZyB0aGUgaXRlbSBvciB1cGRhdGVkIGl0LCByZXJlbmRlciB0aGUgY2Fyb3VzZWwgdG8gcmVjYWxjdWxhdGUgdGhlIGV4dHJhIGl0ZW1zIGlmIG5lY2Vzc2FyeSBhbmQgcmVzZXQgdGhlIGFjdGl2ZSBpdGVtIFxuICAgICovXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLmRhdGE/LnN0YXR1cyA9PT0gXCJhdmFpbGFibGVcIikge1xuICAgICAgICAgICAgc2V0UmVuZGVyQ2Fyb3VzZWwoZmFsc2UpO1xuICAgICAgICAgICAgc2V0dXBDYXJvdXNlKHByb3BzLmRhdGEuaXRlbXMpO1xuICAgICAgICB9XG4gICAgfSwgW3Byb3BzLmRhdGE/Lml0ZW1zXSk7XG5cbiAgICAvKlxuICAgICAgYWZ0ZXIgZ2V0dGluZyB0aGUgaXRlbSBvciB1cGRhdGVkIGl0IGFuZCB0aGUgaXRlbSBiZWhhdmlvciBcImNyZWF0ZSBleHRyYSBpdGVtc1wiIGNhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGV4dHJhIGl0ZW1zXG4gICAgKi9cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBUaGlzIGNvbmRpdGlvbiBpcyB0byBwcmV2ZW50IGNhbGxpbmcgY3JlYXRlQ2Fyb3VzZWxJdGVtcyBiZWZvcmUgZ2V0IHRoZSBpdGVtcyBcIlRoaXMgaGFwcGVucyBhdCB0aGUgZmlyc3Qgd2lkZ2V0IHJlbmRlclwiXG4gICAgICAgIGlmIChwcm9wcy5kYXRhPy5zdGF0dXMgPT09IFwiYXZhaWxhYmxlXCIpIHtcbiAgICAgICAgICAgIGNyZWF0ZUNhcm91c2VsSXRlbXMoKTtcbiAgICAgICAgfVxuICAgIH0sIFtkYXRhSXRlbXNdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIHNldCBhIHVuaXF1ZSBjbGFzcyBpbiBjYXNlIG9mIHVzaW5nIHR3byBkaWZmZXJlbnQgY2Fyb3VzZWwgaW5zdGFuY2VzIGluIHRoZSBzYW1lIGRvY3VtZW50XG4gICAgICAgIHNldFVuaXF1ZUNsYXNzKFwiYS1cIiArIHV1aWR2NCgpKTtcblxuICAgICAgICAvLyBzZXQgdGhlIHJlc3BvbnNpdmUgb2JqZWN0IGFmdGVyIGluaXRpYWxpemUgdGhlIGNvbnRhaW5lciBzbyB0aGUgY2Fyb3VzZWwgcmUtcmVuZGVyIGFuZCB0YWtlIHRoZSBjb3JyZWN0IGRpbWVuc2lvbnNcbiAgICAgICAgLy8gTk9URSA6IGZvcmNlIHJlcmVuZGVyaW5nIGZpeCB0aGUgYnVnIHdpdGggY2Fyb3VzZWwgb3ZlcmZsb3cgdGhlIHBhcmVudCBjb250YWluZXJcbiAgICAgICAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICAgICAgc2V0UmVzcG9uc2l2ZSh7IC4uLnByb3BzLmRlZmF1bHRSZXNwb25zaXZlIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShjYXJvdXNlbFBhcmVudC5jdXJyZW50KTtcblxuICAgICAgICByZXR1cm4gKCkgPT4gcmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17Y2Fyb3VzZWxQYXJlbnR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICAgICAgICBjb21tb25DbGFzc2VzLm11bHRpX2NvbnRhaW5lcixcbiAgICAgICAgICAgICAgICB1bmlxdWVDbGFzcyxcbiAgICAgICAgICAgICAgICBwcm9wcy5jYXJvdXNlbFR5cGUgPT09IFwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgPyBhY3RpdmVDbGlja0NsYXNzZXMuYWN0aXZlX2NsaWNrX2NvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICA6IG5vcm1hbENhcm91c2VsQ2xhc3Nlcy5ub3JtYWxfY29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHByb3BzLmRpc2FibGVEb3RzQ29udHJvbHMgPyBjb21tb25DbGFzc2VzLm5vX2RvdHMgOiBcIlwiLFxuICAgICAgICAgICAgICAgICFwcm9wcy5kaXNhYmxlQnV0dG9uc0NvbnRyb2xzICYmIHByb3BzLmJ1dHRvbnNTdHlsZSA9PT0gXCJzdHlsZWRcIlxuICAgICAgICAgICAgICAgICAgICA/IHByb3BzLmNhcm91c2VsVHlwZSA9PT0gXCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBhY3RpdmVDbGlja0NsYXNzZXMuYWN0aXZlX2NsaWNrX3N0eWxlZF9idG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogbm9ybWFsQ2Fyb3VzZWxDbGFzc2VzLm5vcm1hbF9zdHlsZWRfYnRuXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgXS5qb2luKFwiIFwiKX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2RhdGFJdGVtcz8ubGVuZ3RoICYmIHJlbmRlckNhcm91c2VsID8gKFxuICAgICAgICAgICAgICAgIDxBbGljZUNhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtjYXJvdXNlbEl0ZW1zfVxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZT17Y2Fyb3VzZWxJbmZpbml0ZX1cbiAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXk9e3Byb3BzLmF1dG9QbGF5fVxuICAgICAgICAgICAgICAgICAgICBhdXRvUGxheURpcmVjdGlvbj17cHJvcHMuYXV0b1BsYXlEaXJlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5Q29udHJvbHM9e3Byb3BzLmF1dG9QbGF5Q29udHJvbHN9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVCdXR0b25zQ29udHJvbHM9e3Byb3BzLmRpc2FibGVCdXR0b25zQ29udHJvbHN9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVEb3RzQ29udHJvbHM9e3Byb3BzLmRpc2FibGVEb3RzQ29udHJvbHN9XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uPXtwcm9wcy5hbmltYXRpb25EdXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uVHlwZT17cHJvcHMuYW5pbWF0aW9uVHlwZX1cbiAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmROYXZpZ2F0aW9uPXtwcm9wcy5rZXlib2FyZE5hdmlnYXRpb259XG4gICAgICAgICAgICAgICAgICAgIG1vdXNlVHJhY2tpbmc9e3Byb3BzLm1vdXNlVHJhY2tpbmd9XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoVHJhY2tpbmc9e3Byb3BzLnRvdWNoVHJhY2tpbmd9XG4gICAgICAgICAgICAgICAgICAgIG9uSW5pdGlhbGl6ZWQ9e29uSW5pdGlhbGl6ZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uUmVzaXplZD17b25SZXNpemVkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21tb25DbGFzc2VzLm11bHRpX2VtcHR5X2NvbnRhaW5lcn0+PC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBbGljZUNhcm91c2VsIGZyb20gXCJyZWFjdC1hbGljZS1jYXJvdXNlbFwiO1xuaW1wb3J0IFwiLi4vdWkvQWN0aXZlU2xpZGVDYXJvdXNlbC5zY3NzXCI7XG5pbXBvcnQgeyBjb21tb25DbGFzc2VzLCBhY3RpdmVTbGlkZUNsYXNzZXMsIHN0YXR1c0xpc3QgfSBmcm9tIFwiLi9oZWxwZXJcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjdGl2ZVNsaWRlQ2Fyb3VzZWwocHJvcHMpIHtcbiAgICBjb25zdCBbcmVuZGVyQ2Fyb3VzZWwsIHNldFJlbmRlckNhcm91c2VsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IFtjYXJvdXNlbF9pdGVtcywgc2V0X2Nhcm91c2VsX2l0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbcmVzcG9uc2l2ZSwgc2V0UmVzcG9uc2l2ZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbdW5pcXVlQ2xhc3MsIHNldFVuaXF1ZUNsYXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtjdXJyZW50QWN0aXZlSWR4LCBzZXRDdXJyZW50QWN0aXZlSWR4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtudW1iZXJPZkRpc3BsYXllZEl0ZW1zLCBzZXROdW1iZXJPZkRpc3BsYXllZEl0ZW1zXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtudW1iZXJPZkFsbEl0ZW1zLCBzZXROdW1iZXJPZkFsbEl0ZW1zXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgLy8gZ2V0IHRoZSAncmVhY3QtYWxpY2UtY2Fyb3VzZWwnIGJ1aWx0LWluIGFsbCBtZXRob2QgYW5kIHByb3BlcnRpZXNcbiAgICBjb25zdCBbY2Fyb3VzZWxQcm9wZXJ0aWVzLCBzZXRDYXJvdXNlbFByb3BlcnRpZXNdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvKlxuICAgICAgICBGaXJlZCB3aGVuIHJlYWNoIHRoZSBlbmQgb2YgdGhlIHNsaWRlciBvciB3aGVuIHJlc2l6ZSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgPT4gbW92ZSB0byB0aGUgZmlyc3QgaXRlbVxuICAgICovXG4gICAgY29uc3QgcmVzZXRTbGlkZXIgPSAoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRBY3RpdmVJZHgoMCk7XG4gICAgICAgIHNldEFjdGl2ZUNsYXNzKHN0YXR1c0xpc3QucmVzZXQsIG51bGwsIDApO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgIEZpcmVkIHdoZW4gZ2UgYmFjayB3aGVuIHN0ZXAgZnJvbSB0aGUgZmlyc3QgaXRlbVxuICAgICAgID0+IG1vdmUgdG8gdGhlIGxhc3QgaXRlbVxuICAgKi9cbiAgICBjb25zdCBzbGlkZVRvVGhlRW5kID0gKCkgPT4ge1xuICAgICAgICBjYXJvdXNlbFByb3BlcnRpZXM/LnNsaWRlVG8obnVtYmVyT2ZBbGxJdGVtcyAtIG51bWJlck9mRGlzcGxheWVkSXRlbXMgKyAxKTtcbiAgICAgICAgc2V0QWN0aXZlQ2xhc3Moc3RhdHVzTGlzdC5nb0xhc3QsIG51bGwsIG51bWJlck9mQWxsSXRlbXMpO1xuICAgICAgICBzZXRDdXJyZW50QWN0aXZlSWR4KG51bWJlck9mQWxsSXRlbXMpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBGaXJlZCB3aGVuIGNsaWNraW5nIFwicHJldmlvdXNcIiBidXR0b25cbiAgICAqL1xuICAgIGNvbnN0IHByZXZDbGlja2VkID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWN1cnJlbnRBY3RpdmVJZHgpIHtcbiAgICAgICAgICAgIC8vIGN1cnJlbnRBY3RpdmVJZHggPT09IDAsIHRoZSBhY3RpdmUgaXRlbSBpcyB0aGUgZmlyc3Qgb25lLCBtb3ZlIHRvIHRoZSBsYXN0XG4gICAgICAgICAgICBzbGlkZVRvVGhlRW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRBY3RpdmVDbGFzcyhzdGF0dXNMaXN0LnByZXYsIGNhcm91c2VsUHJvcGVydGllcz8uc2xpZGVQcmV2LCBjdXJyZW50QWN0aXZlSWR4IC0gMSk7XG4gICAgICAgICAgICBzZXRDdXJyZW50QWN0aXZlSWR4KGN1cnJlbnRBY3RpdmVJZHggLSAxKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBGaXJlZCB3aGVuIGNsaWNraW5nIFwiTmV4dFwiIGJ1dHRvblxuICAgICovXG4gICAgY29uc3QgbmV4dENsaWNrZWQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50QWN0aXZlSWR4ID09PSBudW1iZXJPZkFsbEl0ZW1zKSB7XG4gICAgICAgICAgICAvLyB0aGUgYWN0aXZlIGl0ZW0gaXMgdGhlIGxhc3Qgb25lLCBtb3ZlIHRvIHRoZSBmaXJzdFxuICAgICAgICAgICAgY2Fyb3VzZWxQcm9wZXJ0aWVzPy5zbGlkZVRvKDApO1xuICAgICAgICAgICAgcmVzZXRTbGlkZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZUNsYXNzKHN0YXR1c0xpc3QubmV4dCwgY2Fyb3VzZWxQcm9wZXJ0aWVzPy5zbGlkZU5leHQsIGN1cnJlbnRBY3RpdmVJZHggKyAxKTtcbiAgICAgICAgICAgIHNldEN1cnJlbnRBY3RpdmVJZHgoY3VycmVudEFjdGl2ZUlkeCArIDEpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIFJlbW92ZSBwcmV2aW91cyBhY3RpdmUgaXRlbSBhbmQgZ2V0IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0aGF0IHdlIHdhbnQgdG8gc2V0IGl0IGFjdGl2ZVxuICAgICovXG4gICAgY29uc3QgcmVtb3ZlQWN0aXZlQ2xhc3MgPSAoc3RhdHVzLCBhbGxJdGVtcykgPT4ge1xuICAgICAgICBsZXQgaXRlbUlkeFRvU2V0QWN0aXZlID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbEl0ZW1zPy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0aGF0IHdlIHdhbnQgdG8gc2V0IGl0IGFjdGl2ZSBpbiB0aGUgXCJhbGwgaXRlbXNcIiBhcnJheVxuICAgICAgICAgICAgLy8gTk9URTogd2UgY2FuJ3QgdXNlIHRoZSBzdGF0ZSBcImN1cnJlbnRBY3RpdmVJZHhcIiBiZWNhdXNlIFwiYWxsSXRlbXNcIiBpcyBjb250YWluaW5nIHRoZSBjbG9uZWQgaXRlbSBhbHNvXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgYWxsSXRlbXNbaV0uY2xhc3NMaXN0Py5jb250YWlucyhjb21tb25DbGFzc2VzLmFjdGl2ZSkgJiZcbiAgICAgICAgICAgICAgICAhYWxsSXRlbXNbaV0/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdD8uY29udGFpbnMoXCJfX2Nsb25lZFwiKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgbmV4dCBwcmVzc2VkIHdpbGwgYmUgdGhlIG5leHQgaW5kZXgsIGlmIHByZXZpb3VzIHByZXNzZWQgd2lsbCBiZSB0aGUgcHJldmlvdXMgaW5kZXhcbiAgICAgICAgICAgICAgICBpdGVtSWR4VG9TZXRBY3RpdmUgPSBzdGF0dXMgPT09IHN0YXR1c0xpc3QubmV4dCA/IGkgKyAxIDogaSAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbGxJdGVtc1tpXS5jbGFzc0xpc3Q/LnJlbW92ZShjb21tb25DbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbUlkeFRvU2V0QWN0aXZlO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBzZXR0aW5nIHRoZSBjdXJyZW4gYWN0aXZlIGNsYXNzLCBhbmQgc2xpZGUgbGVmdCBvciByaWdodCB3aGVuIG5lZWRlZFxuICAgICovXG4gICAgY29uc3Qgc2V0QWN0aXZlQ2xhc3MgPSAoc3RhdHVzLCBzbGlkZUxlZnRPclJpZ2h0LCBhY3Rpb25JZHgpID0+IHtcbiAgICAgICAgbGV0IGFsbEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dW5pcXVlQ2xhc3N9YCk/LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NvbW1vbkNsYXNzZXMuaXRlbX1gKTtcbiAgICAgICAgbGV0IGl0ZW1JZHhUb1NldEFjdGl2ZSA9IHJlbW92ZUFjdGl2ZUNsYXNzKHN0YXR1cywgYWxsSXRlbXMpO1xuXG4gICAgICAgIC8vIFNldCBjdXJyZW50IGFjdGl2ZSBpdGVtXG4gICAgICAgIGlmIChzdGF0dXMgPT09IHN0YXR1c0xpc3QucmVzZXQpIHtcbiAgICAgICAgICAgIC8vIHF1ZXJ5U2VsZWN0b3JBbGwgPT0+IHRoZSBvcmlnaW5hbCBpdGVtIGFuZCB0aGUgY2xvbmVkIG9uZVxuICAgICAgICAgICAgbGV0IGZpcnN0U2xpZGUgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGAuJHt1bmlxdWVDbGFzc31gKVxuICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvckFsbChgLiR7YWN0aXZlU2xpZGVDbGFzc2VzLmZpcnN0X2l0ZW19YCk7XG5cbiAgICAgICAgICAgIC8vIHNldCB0aGUgYWN0aXZlIGl0ZW0gZm9yIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBjYXJvdXNlbCB0aGF0IGlzIG5vdCBjbG9uZWQgb25lXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpcnN0U2xpZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZpcnN0U2xpZGVbaV0/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdD8uY29udGFpbnMoXCJfX2Nsb25lZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBmaXJzdFNsaWRlW2ldPy5jbGFzc0xpc3Q/LmFkZChjb21tb25DbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IHN0YXR1c0xpc3QuZ29MYXN0KSB7XG4gICAgICAgICAgICAvLyBxdWVyeVNlbGVjdG9yQWxsID09PiB0aGUgb3JpZ2luYWwgaXRlbSBhbmQgdGhlIGNsb25lZCBvbmVcbiAgICAgICAgICAgIGxldCBsYXN0U2xpZGUgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGAuJHt1bmlxdWVDbGFzc31gKVxuICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvckFsbChgLiR7YWN0aXZlU2xpZGVDbGFzc2VzLmxhc3RfaXRlbX1gKTtcblxuICAgICAgICAgICAgLy8gc2V0IHRoZSBhY3RpdmUgaXRlbSBmb3IgdGhlIGxhc3QgaXRlbSBpbiB0aGUgY2Fyb3VzZWwgdGhhdCBpcyBub3QgY2xvbmVkIG9uZVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGxhc3RTbGlkZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmICghbGFzdFNsaWRlW2ldPy5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3Q/LmNvbnRhaW5zKFwiX19jbG9uZWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFNsaWRlW2ldPy5jbGFzc0xpc3Q/LmFkZChjb21tb25DbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vdCBjb250YWluaW5nIGFjdGl2ZSBtZWFucyB0aGF0IHRoZSBuZXh0L3ByZXYgaXRlbSBpcyBub3QgYXBwZWFyaW5nIGluIHRoZSBzY3JlZW4gcmlnaHQgbm93XG4gICAgICAgICAgICAvLyBzbGlkZSB3aGVuIHJlYWNoIHRvIHRoZSBzdGFydC9lbmQgb2YgdGhlIGFjdGl2ZSBpdGVtXG4gICAgICAgICAgICBpZiAoIWFsbEl0ZW1zW2l0ZW1JZHhUb1NldEFjdGl2ZV0/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdD8uY29udGFpbnMoXCJfX2FjdGl2ZVwiKSkge1xuICAgICAgICAgICAgICAgIHNsaWRlTGVmdE9yUmlnaHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsbEl0ZW1zW2l0ZW1JZHhUb1NldEFjdGl2ZV0/LmNsYXNzTGlzdD8uYWRkKGNvbW1vbkNsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpcmUgdGhlIGFjdGlvbiB0aGF0IHJlbGF0ZWQgdG8gdGhlIG5ldyBhY3RpdmUgaXRlbVxuICAgICAgICBsZXQgYWN0aW9uVG9GaXJlID0gcHJvcHMuYWN0aW9uPy5nZXQocHJvcHMuZGF0YS5pdGVtcz8uW2FjdGlvbklkeF0pO1xuICAgICAgICBvblNsaWRlQ2xpY2tlZChhY3Rpb25Ub0ZpcmUpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBmaXJlZCB3aGVuIGluaXRpYWxpemF0aW9uIHRoZSBjYXJvdXNlbFxuICAgICovXG4gICAgY29uc3Qgb25DYXJvdXNlbEluaXQgPSBlID0+IHtcbiAgICAgICAgc2V0TnVtYmVyT2ZEaXNwbGF5ZWRJdGVtcyhlLml0ZW1zSW5TbGlkZSk7XG4gICAgICAgIHNldFJlc3BvbnNpdmUoeyAuLi5wcm9wcy5kZWZhdWx0UmVzcG9uc2l2ZSB9KTtcblxuICAgICAgICBsZXQgZmlyc3RJdGVtQWN0aW9uID0gcHJvcHMuYWN0aW9uPy5nZXQocHJvcHMuZGF0YS5pdGVtcz8uWzBdKTtcbiAgICAgICAgb25TbGlkZUNsaWNrZWQoZmlyc3RJdGVtQWN0aW9uKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgZmlyZWQgd2hlbiByZXNpemluZyB0aGUgY2Fyb3VzZWwsIGNhcm91c2VsIHdpbGwgYWx3YXlzIHNsaWRlIHRvIHRoZSBmaXJzdCBpdGVtIHdoZW4gcmVzaXppbmcgLVwicmVhY3QtYWxpY2UtY2Fyb3VzZVwiIHdheSBvZiB3b3JrLVxuICAgICovXG4gICAgY29uc3Qgb25DYXJvdXNlbFJlc2l6ZSA9IGUgPT4ge1xuICAgICAgICBzZXROdW1iZXJPZkRpc3BsYXllZEl0ZW1zKGUuaXRlbXNJblNsaWRlKTtcbiAgICAgICAgY2Fyb3VzZWxQcm9wZXJ0aWVzPy5zbGlkZVRvKDApO1xuICAgICAgICByZXNldFNsaWRlcigpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBmaXJlZCB0aGUgY3VycmVudCBhY3RpdmUgaXRlbSBhY3Rpb24gaWYgZm91bmRcbiAgICAqL1xuICAgIGNvbnN0IG9uU2xpZGVDbGlja2VkID0gYWN0aW9uID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbj8uY2FuRXhlY3V0ZSkgYWN0aW9uLmV4ZWN1dGUoKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgIHNldCB0aGUgaXRlbXMgd2hlbiByZW5kZXIgdGhlIHdpZGdldCBvciB1cGRhdGUgdGhlIGRhdGFcbiAgICAqL1xuICAgIGNvbnN0IHNldHVwQ2Fyb3VzZSA9IGl0ZW1zID0+IHtcbiAgICAgICAgbGV0IG5ld0RhdGEgPSBpdGVtcy5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y29tbW9uQ2xhc3Nlcy5pdGVtfSAke1xuICAgICAgICAgICAgICAgICAgICBpZHggPT09IDAgPyBhY3RpdmVTbGlkZUNsYXNzZXMuZmlyc3RfaXRlbSArIFwiIFwiICsgY29tbW9uQ2xhc3Nlcy5hY3RpdmUgOiBcIlwiXG4gICAgICAgICAgICAgICAgfSAke2lkeCA9PT0gcHJvcHMuZGF0YS5pdGVtcy5sZW5ndGggLSAxID8gYWN0aXZlU2xpZGVDbGFzc2VzLmxhc3RfaXRlbSA6IFwiXCJ9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY29udGVudC5nZXQoaXRlbSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSk7XG5cbiAgICAgICAgc2V0TnVtYmVyT2ZBbGxJdGVtcyhuZXdEYXRhLmxlbmd0aCAtIDEpO1xuICAgICAgICBzZXRfY2Fyb3VzZWxfaXRlbXMobmV3RGF0YSk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIFRoaXMgY29uZGl0aW9uIGlzIHRvIHByZXZlbnQgcmVuZGVyIHRoZSBjYXJvdXNlbCBiZWZvcmUgZ2V0IHRoZSBpdGVtcyBcIlRoaXMgaGFwcGVucyBhdCB0aGUgZmlyc3Qgd2lkZ2V0IHJlbmRlclwiXG4gICAgICAgIGlmIChwcm9wcy5kYXRhPy5zdGF0dXMgPT09IFwiYXZhaWxhYmxlXCIpIHtcbiAgICAgICAgICAgIHNldFJlbmRlckNhcm91c2VsKHRydWUpO1xuICAgICAgICB9XG4gICAgfSwgW2Nhcm91c2VsX2l0ZW1zXSk7XG5cbiAgICAvKlxuICAgICAgd2hlbiBnZXR0aW5nIHRoZSBpdGVtIG9yIHVwZGF0ZWQgaXQgc2V0IHRoZSBjYXJvdXNlbCBpdGVtcyBcbiAgICAqL1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy5kYXRhPy5zdGF0dXMgPT09IFwiYXZhaWxhYmxlXCIpIHtcbiAgICAgICAgICAgIHNldFJlbmRlckNhcm91c2VsKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEN1cnJlbnRBY3RpdmVJZHgoMCk7XG4gICAgICAgICAgICBzZXR1cENhcm91c2UocHJvcHMuZGF0YS5pdGVtcyk7XG4gICAgICAgIH1cbiAgICB9LCBbcHJvcHMuZGF0YT8uaXRlbXNdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIHNldCBhIHVuaXF1ZSBjbGFzcyBpbiBjYXNlIG9mIHVzaW5nIHR3byBkaWZmZXJlbnQgY2Fyb3VzZWwgaW5zdGFuY2VzIGluIHRoZSBzYW1lIGRvY3VtZW50XG4gICAgICAgIHNldFVuaXF1ZUNsYXNzKFwiYS1cIiArIHV1aWR2NCgpKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvKlxuICAgICAgICBzZXQgdGhlIHJlc3BvbnNpdmUgb2JqZWN0IGFmdGVyIGluaXRpYWxpemUgdGhlIGNvbnRhaW5lciBzbyBpdCB0YWtlIHRoZSBjb3JyZWN0IGRpbWVuc2lvbnNcbiAgICAqL1xuICAgIGNvbnN0IGNhcm91c2VsQ29udGFpbmVyID0gdXNlQ2FsbGJhY2sobm9kZSA9PiB7XG4gICAgICAgIGlmIChub2RlKSBzZXRSZXNwb25zaXZlKHsgLi4ucHJvcHMuZGVmYXVsdFJlc3BvbnNpdmUgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGNhcm91c2VsX2l0ZW1zPy5sZW5ndGggPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthY3RpdmVTbGlkZUNsYXNzZXMuYWN0aXZlX3NsaWRlX2NvbnRhaW5lcn0gcmVmPXtjYXJvdXNlbENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YWN0aXZlU2xpZGVDbGFzc2VzLnByZXZfYnRufSBvbkNsaWNrPXtwcmV2Q2xpY2tlZH0+PC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W3VuaXF1ZUNsYXNzLCBhY3RpdmVTbGlkZUNsYXNzZXMuYWN0aXZlX3NsaWRlX3dyYXBwZXJdLmpvaW4oXCIgXCIpfT5cbiAgICAgICAgICAgICAgICB7cmVzcG9uc2l2ZSAmJiByZW5kZXJDYXJvdXNlbCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxBbGljZUNhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlICdyZWFjdC1hbGljZS1jYXJvdXNlbCcgYWxsIG1ldGhvZCBhbmQgcHJvcGVydGllcyBzbyB3ZSBjYW4gb3ZlcnJpZGUgZGVmYXVsdCBuZXh0IGFuZCBwcmV2aW91cyBidXR0b25zIGJlaGF2aW9yXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VsID0+IHNldENhcm91c2VsUHJvcGVydGllcyhlbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17Y2Fyb3VzZWxfaXRlbXN9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvUGxheT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQnV0dG9uc0NvbnRyb2xzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZURvdHNDb250cm9scz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNpbmcgdGhlIGFuaW1hdGlvbiBEdXJhdGlvbiBtb3JlIHRoYW4gMTAwIHdpbGwgY3Jhc2ggdGhlIHNsaWRpbmcgaW4gdGhlIGNhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbj17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmROYXZpZ2F0aW9uPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlVHJhY2tpbmc9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hUcmFja2luZz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkluaXRpYWxpemVkPXtvbkNhcm91c2VsSW5pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVzaXplZD17b25DYXJvdXNlbFJlc2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YWN0aXZlU2xpZGVDbGFzc2VzLm5leHRfYnRufSBvbkNsaWNrPXtuZXh0Q2xpY2tlZH0+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21tb25DbGFzc2VzLm11bHRpX2VtcHR5X2NvbnRhaW5lcn0+PC9kaXY+XG4gICAgKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vdWkvTXVsdGlDYXJvdXNlbC5jc3NcIjtcbmltcG9ydCBOb3JtYWxDYXJvdXNlbCBmcm9tIFwiLi9jb21wb25lbnRzL05vcm1hbENhcm91c2VsXCI7XG5pbXBvcnQgQWN0aXZlU2xpZGVDYXJvdXNlbCBmcm9tIFwiLi9jb21wb25lbnRzL0FjdGl2ZVNsaWRlQ2Fyb3VzZWxcIjtcbmltcG9ydCB7IGNvbW1vbkNsYXNzZXMgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlbHBlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gTXVsdGlDYXJvdXNlbChwcm9wcykge1xuICAgIC8qXG4gICAgIGRlZmF1bHQgdW5kZWZpbmVkIC0gVGhlIGtleSBpcyB0aGUgYnJlYWtwb2ludFxuICAgICAoZGVmYXVsdCBpcyB0aGUgcmVzdWx0IG9mOiAoKSA9PiB3aW5kb3cuaW5uZXJXaWR0aCBvciBpbm5lcldpZHRoIHByb3BlcnR5IGlmIHRoZSBsYXN0IHByZXNlbnRlZCkuXG4gICAgKi9cbiAgICBjb25zdCBbZGVmYXVsdFJlc3BvbnNpdmUsIHNldERlZmF1bHRSZXNwb25zaXZlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0RGVmYXVsdFJlc3BvbnNpdmUoe1xuICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiBwcm9wcy5pdGVtczQyNSA+IDAgPyBwcm9wcy5pdGVtczQyNSA6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA2NDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogcHJvcHMuaXRlbXM2NDAgPiAwID8gcHJvcHMuaXRlbXM2NDAgOiAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMTAyNDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiBwcm9wcy5pdGVtczEwMjQgPiAwID8gcHJvcHMuaXRlbXMxMDI0IDogM1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDEyMDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogcHJvcHMuaXRlbXMxMjAwID4gMCA/IHByb3BzLml0ZW1zMTIwMCA6IDRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxNjAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IHByb3BzLml0ZW1zMTYwMCA+IDAgPyBwcm9wcy5pdGVtczE2MDAgOiA1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMjU2MDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiBwcm9wcy5pdGVtczI1NjAgPiAwID8gcHJvcHMuaXRlbXMyNTYwIDogNlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2RlZmF1bHRSZXNwb25zaXZlID8gKFxuICAgICAgICAgICAgICAgICgocHJvcHMuY2Fyb3VzZWxUeXBlID09PSBcIm5vcm1hbFwiIHx8IHByb3BzLmNhcm91c2VsVHlwZSA9PT0gXCJhY3RpdmVcIikgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8Tm9ybWFsQ2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcm91c2VsVHlwZT17cHJvcHMuY2Fyb3VzZWxUeXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17cHJvcHMuZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17cHJvcHMuYWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17cHJvcHMuY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlPXtwcm9wcy5pbmZpbml0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5PXtwcm9wcy5hdXRvUGxheX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5RGlyZWN0aW9uPXtwcm9wcy5hdXRvUGxheURpcmVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5Q29udHJvbHM9e3Byb3BzLmF1dG9QbGF5Q29udHJvbHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQnV0dG9uc0NvbnRyb2xzPXtwcm9wcy5kaXNhYmxlQnV0dG9uc0NvbnRyb2xzfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZURvdHNDb250cm9scz17cHJvcHMuZGlzYWJsZURvdHNDb250cm9sc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uPXtwcm9wcy5hbmltYXRpb25EdXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblR5cGU9e3Byb3BzLmFuaW1hdGlvblR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZE5hdmlnYXRpb249e3Byb3BzLmtleWJvYXJkTmF2aWdhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlVHJhY2tpbmc9e3Byb3BzLm1vdXNlVHJhY2tpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaFRyYWNraW5nPXtwcm9wcy50b3VjaFRyYWNraW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFJlc3BvbnNpdmU9e2RlZmF1bHRSZXNwb25zaXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNCZWhhdmlvcj17cHJvcHMuaXRlbXNCZWhhdmlvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsZT17cHJvcHMuYnV0dG9uc1N0eWxlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpIHx8XG4gICAgICAgICAgICAgICAgKHByb3BzLmNhcm91c2VsVHlwZSA9PT0gXCJzbGlkZVwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEFjdGl2ZVNsaWRlQ2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3Byb3BzLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3Byb3BzLmFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Byb3BzLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UmVzcG9uc2l2ZT17ZGVmYXVsdFJlc3BvbnNpdmV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSkgfHwgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tbW9uQ2xhc3Nlcy5lcnJvcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBpbml0aWFsaXppbmcgdGhlIENhcm91c2VsPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21tb25DbGFzc2VzLmxvYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgICA8cD5Mb2FkaW5nIC4uLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJ0eXBlcyIsIlRyYWNlRGlyZWN0aW9uS2V5IiwiRGlyZWN0aW9uIiwiQXhpcyIsImNhbGN1bGF0ZURpcmVjdGlvbl8xIiwiY2FsY3VsYXRlRGlyZWN0aW9uIiwiX3R5cGVzIiwicmVxdWlyZSIsInRyYWNlIiwiZGlyZWN0aW9uIiwibmVnYXRpdmUiLCJORUdBVElWRSIsInBvc2l0aXZlIiwiUE9TSVRJVkUiLCJjdXJyZW50IiwibGVuZ3RoIiwicHJldmlvdXMiLCJldmVyeSIsImkiLCJOT05FIiwiY29tbW9uIiwiZ2V0RGlyZWN0aW9uS2V5Iiwib2JqZWN0IiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwia2V5Iiwia2V5cyIsInRvU3RyaW5nIiwiZ2V0RGlyZWN0aW9uVmFsdWUiLCJ2YWx1ZXMiLCJnZXREaWZmZXJlbmNlIiwieCIsInkiLCJNYXRoIiwiYWJzIiwicmVzb2x2ZUF4aXNEaXJlY3Rpb24iLCJheGlzIiwiTEVGVCIsIlJJR0hUIiwiWSIsIkJPVFRPTSIsIlRPUCIsImNhbGN1bGF0ZURpcmVjdGlvbkRlbHRhXzEiLCJjYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSIsIl9jb21tb24iLCJ0cmFjZURpcmVjdGlvbnMiLCJkZWx0YSIsImN1cnJlbnRLZXkiLCJjdXJyZW50VmFsdWUiLCJwcmV2IiwicHJldktleSIsInByZXZWYWx1ZSIsImRpZmZlcmVuY2UiLCJjYWxjdWxhdGVEdXJhdGlvbl8xIiwiY2FsY3VsYXRlRHVyYXRpb24iLCJwcmV2VGltZSIsIm5leHRUaW1lIiwiY2FsY3VsYXRlTW92aW5nUG9zaXRpb25fMSIsImNhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uIiwiZSIsInRvdWNoZXMiLCJjaGFuZ2VkVG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwidXBkYXRlVHJhY2VfMSIsInVwZGF0ZVRyYWNlIiwibGFzdCIsInB1c2giLCJjYWxjdWxhdGVUcmFjZURpcmVjdGlvbnNfMSIsImNhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucyIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsInRpY2tzIiwidGljayIsImN1cnJlbnREaXJlY3Rpb24iLCJzbGljZSIsInJlc29sdmVEaXJlY3Rpb25fMSIsInJlc29sdmVEaXJlY3Rpb24iLCJfY2FsY3VsYXRlRGlyZWN0aW9uIiwiX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucyIsIl9jYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSIsIlgiLCJkaXJlY3Rpb25EZWx0YSIsImRpcmVjdGlvbnMiLCJfZGlyZWN0aW9uIiwiY2FsY3VsYXRlVmVsb2NpdHlfMSIsImNhbGN1bGF0ZVZlbG9jaXR5IiwidGltZSIsIm1hZ25pdHVkZSIsInNxcnQiLCJjYWxjdWxhdGVQb3NpdGlvbl8xIiwiY2FsY3VsYXRlUG9zaXRpb24iLCJfdXBkYXRlVHJhY2UiLCJfcmVzb2x2ZURpcmVjdGlvbiIsIl9jYWxjdWxhdGVEdXJhdGlvbiIsIl9jYWxjdWxhdGVWZWxvY2l0eSIsInN0YXRlIiwib3B0aW9ucyIsInN0YXJ0IiwidHJhY2VYIiwidHJhY2VZIiwicm90YXRlUG9zaXRpb24iLCJkZWx0YVgiLCJkZWx0YVkiLCJhYnNYIiwiYWJzWSIsImRpcmVjdGlvblgiLCJkaXJlY3Rpb25ZIiwiZHVyYXRpb24iLCJEYXRlIiwibm93IiwidmVsb2NpdHkiLCJwb3NpdGlvblgiLCJwb3NpdGlvblkiLCJjaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzXzEiLCJjaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzIiwiQm9vbGVhbiIsImNyZWF0ZU9wdGlvbnNfMSIsImNyZWF0ZU9wdGlvbnMiLCJwcm94eSIsImdldCIsImlzUGFzc2l2ZVN1cHBvcnRlZCIsImNoZWNrSXNQYXNzaXZlU3VwcG9ydGVkXzEiLCJjaGVja0lzUGFzc2l2ZVN1cHBvcnRlZCIsIl9jcmVhdGVPcHRpb25zIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5vb3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXJyIiwiY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkXzEiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImNoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwiZ2V0SW5pdGlhbFN0YXRlXzEiLCJvd25LZXlzIiwiZW51bWVyYWJsZU9ubHkiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0Iiwic291cmNlIiwiZm9yRWFjaCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZ2V0SW5pdGlhbFN0YXRlIiwiaXNTd2lwaW5nIiwiZ2V0SW5pdGlhbFByb3BzXzEiLCJnZXRJbml0aWFsUHJvcHMiLCJwcm9wcyIsImVsZW1lbnQiLCJyb3RhdGlvbkFuZ2xlIiwibW91c2VUcmFja2luZ0VuYWJsZWQiLCJ0b3VjaFRyYWNraW5nRW5hYmxlZCIsInByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQiLCJwcmV2ZW50VHJhY2tpbmdPbk1vdXNlbGVhdmUiLCJnZXRPcHRpb25zXzEiLCJnZXRPcHRpb25zIiwicGFzc2l2ZSIsInJvdGF0ZUJ5QW5nbGVfMSIsInJvdGF0ZUJ5QW5nbGUiLCJwb3NpdGlvbiIsImFuZ2xlIiwiYW5nbGVJblJhZGlhbnMiLCJQSSIsInJvdGF0ZWRYIiwiY29zIiwic2luIiwicm90YXRlZFkiLCJfY2FsY3VsYXRlTW92aW5nUG9zaXRpb24iLCJfY2FsY3VsYXRlUG9zaXRpb24iLCJfY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyIsIl9jaGVja0lzUGFzc2l2ZVN1cHBvcnRlZCIsIl9jaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQiLCJfZ2V0SW5pdGlhbFN0YXRlIiwiX2dldEluaXRpYWxQcm9wcyIsIl9nZXRPcHRpb25zIiwiX3JvdGF0ZUJ5QW5nbGUiLCJfZXhwb3J0TmFtZXMiLCJVdGlscyIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwibm9kZUludGVyb3AiLCJXZWFrTWFwIiwiY2FjaGVCYWJlbEludGVyb3AiLCJjYWNoZU5vZGVJbnRlcm9wIiwiX19lc01vZHVsZSIsImNhY2hlIiwiaGFzIiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZGVzYyIsInNldCIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsImRlc2NyaXB0b3IiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJWYW5pbGxhU3dpcGUiLCJoYW5kbGVTd2lwZVN0YXJ0IiwiYmluZCIsImhhbmRsZVN3aXBlTW92ZSIsImhhbmRsZVN3aXBlRW5kIiwiaGFuZGxlTW91c2VEb3duIiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlTW91c2VVcCIsImhhbmRsZU1vdXNlTGVhdmUiLCJpbml0Iiwic2V0dXBUb3VjaExpc3RlbmVycyIsInNldHVwTW91c2VMaXN0ZW5lcnMiLCJ1cGRhdGUiLCJwcmV2UHJvcHMiLCJuZXh0UHJvcHMiLCJhc3NpZ24iLCJkZXN0cm95IiwiY2xlYW51cE1vdXNlTGlzdGVuZXJzIiwiY2xlYW51cFRvdWNoTGlzdGVuZXJzIiwiX3RoaXMkcHJvcHMiLCJsaXN0ZW5lciIsIl90aGlzJHByb3BzMiIsIl90aGlzJHByb3BzMyIsImdldEV2ZW50RGF0YSIsIm1vdmluZ1Bvc2l0aW9uIiwiX1V0aWxzJHJvdGF0ZUJ5QW5nbGUiLCJfdGhpcyRzdGF0ZSIsIl90aGlzJGdldEV2ZW50RGF0YSIsIl90aGlzJHByb3BzNCIsIm9uU3dpcGVTdGFydCIsIm9uU3dpcGluZyIsImNhbmNlbGFibGUiLCJwcmV2ZW50RGVmYXVsdCIsIk51bWJlciIsIl90aGlzJHByb3BzNSIsIm9uU3dpcGVkIiwib25UYXAiLCJfcG9zaXRpb24iLCJpc1RvdWNoRXZlbnRzU3VwcG9ydGVkIiwiQUNUSU9OIiwiSU5JVCIsIlJFU0laRSIsIlVQREFURSIsIkV2ZW50VHlwZSIsIkZBREVPVVQiLCJTTElERSIsIkFuaW1hdGlvblR5cGUiLCJERUZBVUxUIiwiQUxMIiwiQXV0b1BsYXlTdHJhdGVneSIsIkFMVEVSTkFURSIsIlJFU1BPTlNJVkUiLCJDb250cm9sc1N0cmF0ZWd5IiwiUlRMIiwiTFRSIiwiQXV0b3BsYXlEaXJlY3Rpb24iLCJBTklNQVRFRCIsIlJPT1QiLCJXUkFQUEVSIiwiU1RBR0UiLCJTVEFHRV9JVEVNIiwiRE9UUyIsIkRPVFNfSVRFTSIsIlBMQVlfQlROIiwiUExBWV9CVE5fSVRFTSIsIlBMQVlfQlROX1dSQVBQRVIiLCJTTElERV9JTkZPIiwiU0xJREVfSU5GT19JVEVNIiwiQlVUVE9OX1BSRVYiLCJCVVRUT05fUFJFVl9XUkFQUEVSIiwiQlVUVE9OX1BSRVZfSVRFTSIsIkJVVFRPTl9ORVhUIiwiQlVUVE9OX05FWFRfV1JBUFBFUiIsIkJVVFRPTl9ORVhUX0lURU0iLCJDbGFzc25hbWVzIiwiQUNUSVZFIiwiSU5BQ1RJVkUiLCJDTE9ORUQiLCJDVVNUT00iLCJQQVVTRSIsIlNFUEFSQVRPUiIsIlNTUiIsIlRBUkdFVCIsIk1vZGlmaWVycyIsInR5cGVzXzEiLCJhY3RpdmVJbmRleCIsImFuaW1hdGlvbkR1cmF0aW9uIiwiYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb24iLCJhbmltYXRpb25UeXBlIiwiYXV0b0hlaWdodCIsImF1dG9XaWR0aCIsImF1dG9QbGF5IiwiYXV0b1BsYXlDb250cm9scyIsImF1dG9QbGF5RGlyZWN0aW9uIiwiYXV0b1BsYXlJbnRlcnZhbCIsImF1dG9QbGF5U3RyYXRlZ3kiLCJjaGlsZHJlbiIsImNvbnRyb2xzU3RyYXRlZ3kiLCJkaXNhYmxlQnV0dG9uc0NvbnRyb2xzIiwiZGlzYWJsZURvdHNDb250cm9scyIsImRpc2FibGVTbGlkZUluZm8iLCJpbmZpbml0ZSIsImlubmVyV2lkdGgiLCJpdGVtcyIsImtleWJvYXJkTmF2aWdhdGlvbiIsIm1vdXNlVHJhY2tpbmciLCJuYW1lIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJyZXNwb25zaXZlIiwic3dpcGVEZWx0YSIsInN3aXBlRXh0cmFQYWRkaW5nIiwic3NyU2lsZW50TW9kZSIsInRvdWNoVHJhY2tpbmciLCJ0b3VjaE1vdmVEZWZhdWx0RXZlbnRzIiwib25Jbml0aWFsaXplZCIsIm9uUmVzaXplZCIsIm9uUmVzaXplRXZlbnQiLCJvblNsaWRlQ2hhbmdlIiwib25TbGlkZUNoYW5nZWQiLCJfX2Fzc2lnbiIsIm8iLCJ0IiwiciIsInMiLCJtYXBQYXJ0aWFsQ29vcmRzIiwibWFwIiwid2lkdGgiLCJtYXBQb3NpdGlvbkNvb3JkcyIsImdldFNoaWZ0SW5kZXgiLCJnZXRTdGFydEluZGV4IiwiZ2V0QWN0aXZlSW5kZXgiLCJzdGFydEluZGV4IiwiaXRlbXNDb3VudCIsImdldFVwZGF0ZVNsaWRlUG9zaXRpb25JbmRleCIsInNob3VsZFJlY2FsY3VsYXRlU2xpZGVJbmRleCIsInNob3VsZENhbmNlbFNsaWRlQW5pbWF0aW9uIiwiZ2V0U3dpcGVMaW1pdE1pbiIsIml0ZW1zT2Zmc2V0IiwidHJhbnNmb3JtYXRpb25TZXQiLCJtaW4iLCJnZXRTd2lwZUxpbWl0TWF4IiwibiIsIml0ZW1zSW5TbGlkZSIsImdldEl0ZW1Db29yZHMiLCJzaG91bGRSZWNhbGN1bGF0ZVN3aXBlUG9zaXRpb24iLCJnZXRJc0xlZnREaXJlY3Rpb24iLCJnZXRTd2lwZVNoaWZ0VmFsdWUiLCJnZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleCIsImZpbmRJbmRleCIsImdldFN3aXBlVHJhbnNmb3JtYXRpb25DdXJzb3IiLCJnZXRTd2lwZVRvdWNoZW5kUG9zaXRpb24iLCJpc1N0YWdlQ29udGVudFBhcnRpYWwiLCJzd2lwZUFsbG93ZWRQb3NpdGlvbk1heCIsImdldFN3aXBlVG91Y2hlbmRJbmRleCIsImQiLCJhIiwidHJhbnNsYXRlM2QiLCJnZXRGYWRlb3V0QW5pbWF0aW9uSW5kZXgiLCJnZXRGYWRlb3V0QW5pbWF0aW9uUG9zaXRpb24iLCJzdGFnZVdpZHRoIiwiaXNWZXJ0aWNhbFRvdWNobW92ZURldGVjdGVkIiwiY29tbW9uXzEiLCJtYXBwZXJzXzEiLCJtYXRoXzEiLCJnZXRTbGlkZXMiLCJnZXRJdGVtc0NvdW50IiwiZ2V0SXRlbXNPZmZzZXQiLCJjcmVhdGVDbG9uZXMiLCJnZXRJdGVtc0luU2xpZGUiLCJ1bnNoaWZ0IiwiY29uY2F0IiwiaXNFbGVtZW50IiwiRWxlbWVudCIsIkhUTUxEb2N1bWVudCIsImNyZWF0ZUF1dG93aWR0aFRyYW5zZm9ybWF0aW9uU2V0IiwiQXJyYXkiLCJmcm9tIiwicmVkdWNlIiwiZ2V0RWxlbWVudERpbWVuc2lvbnMiLCJmaXJzdENoaWxkIiwiY29vcmRzIiwiY29udGVudCIsInBhcnRpYWwiLCJjcmVhdGVEZWZhdWx0VHJhbnNmb3JtYXRpb25TZXQiLCJnZXRJdGVtV2lkdGgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJnZXRBdXRvaGVpZ2h0UHJvcGVydHkiLCJnZXRFbGVtZW50Q3Vyc29yIiwiZ2V0RWxlbWVudEZpcnN0Q2hpbGQiLCJnZXRDb21wdXRlZFN0eWxlIiwicGFyc2VGbG9hdCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImNlaWwiLCJvZmZzZXRIZWlnaHQiLCJzaG91bGRIYW5kbGVSZXNpemVFdmVudCIsImFuaW1hdGUiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJnZXRSZW5kZXJXcmFwcGVyU3R5bGVzIiwiZ2V0VHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0UmVuZGVyU3RhZ2VTdHlsZXMiLCJnZXRSZW5kZXJTdGFnZUl0ZW1TdHlsZXMiLCJmYWRlb3V0QW5pbWF0aW9uSW5kZXgiLCJmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb24iLCJmYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZyIsImdldFRyYW5zbGF0ZTNkUHJvcGVydHkiLCJnZXRUb3VjaG1vdmVUcmFuc2xhdGVQb3NpdGlvbiIsImZsb29yIiwiZ2V0VHJhbnNsYXRlWFByb3BlcnR5IiwiZ2V0VHJhbnNmb3JtTWF0cml4IiwibWF0Y2giLCJlbGVtZW50c18xIiwiY2FuVXNlRE9NIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29uY2F0Q2xhc3NuYW1lcyIsImpvaW4iLCJnZXRJc1N0YWdlQ29udGVudFBhcnRpYWwiLCJpdGVtc0ZpdCIsImNhbGN1bGF0ZUluaXRpYWxTdGF0ZSIsImwiLCJtIiwiYyIsInUiLCJmIiwiZyIsIkkiLCJTIiwicCIsInYiLCJjbG9uZXMiLCJzdGFnZUNvbnRlbnRXaWR0aCIsImluaXRpYWxTdGFnZUhlaWdodCIsImlzQXV0b1BsYXlpbmciLCJpc0F1dG9QbGF5Q2FuY2VsZWRPbkFjdGlvbiIsInN3aXBlTGltaXRNaW4iLCJzd2lwZUxpbWl0TWF4Iiwic3dpcGVTaGlmdFZhbHVlIiwiY2FuVXNlRG9tIiwiZ2V0UmVuZGVyU3RhZ2VJdGVtQ2xhc3NlcyIsImlzQWN0aXZlSXRlbSIsImlzQ2xvbmVkSXRlbSIsImlzVGFyZ2V0SXRlbSIsImRlYm91bmNlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImRlYnVnIiwiY29uc29sZSIsImdldEFjdGl2ZVNsaWRlSW5kZXgiLCJnZXRTbGlkZUluZGV4Rm9yTm9uTXVsdGlwbGVJdGVtcyIsImdldFNsaWRlSW5kZXhGb3JNdWx0aXBsZUl0ZW1zIiwiZ2V0QWN0aXZlU2xpZGVEb3RzTGVuZ3RoIiwiZ2V0U2xpZGVJbmZvIiwiaXRlbSIsImdldFNsaWRlSXRlbUluZm8iLCJpc1ByZXZTbGlkZURpc2FibGVkIiwiaXNOZXh0U2xpZGVEaXNhYmxlZCIsInNob3VsZERpc2FibGVDb250cm9scyIsImlzU3RyYXRlZ3kiLCJzaG91bGREaXNhYmxlRG90cyIsInNob3VsZERpc2FibGVCdXR0b25zIiwiaW5jbHVkZXMiLCJoYXNEb3RGb3JFYWNoU2xpZGUiLCJnZXREb3RzTmF2aWdhdGlvbkxlbmd0aCIsImNoZWNrSXNUaGVMYXN0RG90SW5kZXgiLCJnZXRJdGVtSW5kZXhGb3JEb3ROYXZpZ2F0aW9uIiwic2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkFjdGlvbiIsInNob3VsZENhbmNlbEF1dG9QbGF5T25Ib3ZlciIsIl9fY3JlYXRlQmluZGluZyIsImNyZWF0ZSIsIl9fZXhwb3J0U3RhciIsIl9faW1wb3J0RGVmYXVsdCIsImRlZmF1bHQiLCJyZWFjdF8xIiwidXRpbHNfMSIsIlNsaWRlSW5mbyIsInJlbmRlclNsaWRlSW5mbyIsImNsYXNzTmFtZSIsIlN0YWdlSXRlbSIsInN0eWxlcyIsIkRvdHNOYXZpZ2F0aW9uIiwib25DbGljayIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInJlbmRlckRvdHNJdGVtIiwiXyIsIkQiLCJpc0FjdGl2ZSIsIlBsYXlQYXVzZUJ1dHRvbiIsImlzUGxheWluZyIsInJlbmRlclBsYXlQYXVzZUJ1dHRvbiIsIlByZXZOZXh0QnV0dG9uIiwiaXNEaXNhYmxlZCIsInJlbmRlclByZXZCdXR0b24iLCJyZW5kZXJOZXh0QnV0dG9uIiwiU2xpZGVJbmZvXzEiLCJTdGFnZUl0ZW1fMSIsIkRvdHNOYXZpZ2F0aW9uXzEiLCJQbGF5UGF1c2VCdXR0b25fMSIsIlByZXZOZXh0QnV0dG9uXzEiLCJfX2V4dGVuZHMiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIlN0cmluZyIsIl9fc2V0TW9kdWxlRGVmYXVsdCIsIl9faW1wb3J0U3RhciIsIl9fYXdhaXRlciIsIlByb21pc2UiLCJuZXh0IiwidGhyb3ciLCJkb25lIiwidGhlbiIsIl9fZ2VuZXJhdG9yIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsInJldHVybiIsInBvcCIsInZhbmlsbGFfc3dpcGVfMSIsImRlZmF1bHRQcm9wc18xIiwiVmlld3MiLCJBbGljZUNhcm91c2VsIiwic3dpcGVMaXN0ZW5lciIsIl9oYW5kbGVLZXlib2FyZEV2ZW50cyIsImNvZGUiLCJfaGFuZGxlUGxheVBhdXNlVG9nZ2xlIiwic2xpZGVQcmV2Iiwic2xpZGVOZXh0IiwiX2hhbmRsZUJlZm9yZVNsaWRlRW5kIiwiX2hhbmRsZVVwZGF0ZVNsaWRlUG9zaXRpb24iLCJzZXRTdGF0ZSIsIl9oYW5kbGVTbGlkZUNoYW5nZWQiLCJfaGFuZGxlTW91c2VFbnRlciIsImlzSG92ZXJlZCIsIl9oYW5kbGVQYXVzZSIsIl9oYW5kbGVNb3VzZUxlYXZlIiwiX2hhbmRsZVBsYXkiLCJfY2xlYXJBdXRvUGxheVRpbWVvdXQiLCJoYXNVc2VyQWN0aW9uIiwiX3NldFJvb3RDb21wb25lbnRSZWYiLCJyb290RWxlbWVudCIsIl9zZXRTdGFnZUNvbXBvbmVudFJlZiIsInN0YWdlQ29tcG9uZW50IiwiX3JlbmRlclN0YWdlSXRlbSIsIl9yZW5kZXJTbGlkZUluZm8iLCJpc0FuaW1hdGlvbkRpc2FibGVkIiwiaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZCIsImNhbmNlbFRvdWNoQW5pbWF0aW9ucyIsInJvb3RDb21wb25lbnREaW1lbnNpb25zIiwic3RhcnRUb3VjaG1vdmVQb3NpdGlvbiIsInNsaWRlVG8iLCJfaGFuZGxlVG91Y2htb3ZlIiwiX2hhbmRsZVRvdWNoZW5kIiwiX2hhbmRsZURvdENsaWNrIiwiX2hhbmRsZVJlc2l6ZSIsIl9oYW5kbGVSZXNpemVEZWJvdW5jZWQiLCJfY2FuY2VsUmVzaXplRGVib3VuY2VkIiwiY29tcG9uZW50RGlkTW91bnQiLCJfc2V0SW5pdGlhbFN0YXRlIiwiX2FkZEV2ZW50TGlzdGVuZXJzIiwiX3NldHVwU3dpcGVIYW5kbGVycyIsImNvbXBvbmVudERpZFVwZGF0ZSIsImgiLCJfdXBkYXRlQ29tcG9uZW50IiwiX3VwZGF0ZVN3aXBlUHJvcHMiLCJfdXBkYXRlRXZlbnRMaXN0ZW5lcnMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIl9jYW5jZWxUaW1lb3V0QW5pbWF0aW9ucyIsIl9yZW1vdmVFdmVudExpc3RlbmVycyIsInNsaWRlIiwidHlwZSIsImlzRmFkZW91dEFuaW1hdGlvbkFsbG93ZWQiLCJfaGFuZGxlU2xpZGVUbyIsImV2ZW50VHlwZSIsImlzVHJ1c3RlZCIsIl9oYW5kbGVSZXNpemVkIiwiX3NldFRvdWNobW92ZVBvc2l0aW9uIiwiX2hhbmRsZVNsaWRlQ2hhbmdlIiwidG91Y2htb3ZlUG9zaXRpb24iLCJfY2xlYXJUb3VjaG1vdmVQb3NpdGlvbiIsIl9oYW5kbGVCZWZvcmVUb3VjaEVuZCIsInRvdWNoRW5kVGltZW91dElkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2xpZGVFbmRUaW1lb3V0SWQiLCJldmVudE9iamVjdCIsIl9zZXRBdXRvUGxheUludGVydmFsIiwiX2NsZWFyU2xpZGVFbmRUaW1lb3V0IiwiY2xlYXJUb3VjaGVuZFRpbWVvdXQiLCJhdXRvUGxheVRpbWVvdXRJZCIsIl9yZW5kZXJEb3RzTmF2aWdhdGlvbiIsIl9yZW5kZXJQcmV2QnV0dG9uIiwiX3JlbmRlck5leHRCdXR0b24iLCJfcmVuZGVyUGxheVBhdXNlQnV0dG9uIiwicmVuZGVyIiwicmVmIiwiZGVmYXVsdFByb3BzIiwiUHVyZUNvbXBvbmVudCIsImdldFJhbmRvbVZhbHVlcyIsInJuZHM4IiwiVWludDhBcnJheSIsInJuZyIsImNyeXB0byIsIkVycm9yIiwidmFsaWRhdGUiLCJ1dWlkIiwiUkVHRVgiLCJ0ZXN0IiwiYnl0ZVRvSGV4IiwidW5zYWZlU3RyaW5naWZ5IiwiYXJyIiwib2Zmc2V0IiwidG9Mb3dlckNhc2UiLCJwYXJzZSIsInBhcnNlSW50Iiwic3RyaW5nVG9CeXRlcyIsInN0ciIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYnl0ZXMiLCJjaGFyQ29kZUF0IiwiRE5TIiwiVVJMIiwidjM1IiwidmVyc2lvbiIsImhhc2hmdW5jIiwiZ2VuZXJhdGVVVUlEIiwibmFtZXNwYWNlIiwiYnVmIiwiX25hbWVzcGFjZSIsIm1kNSIsIm1zZyIsIm1kNVRvSGV4RW5jb2RlZEFycmF5Iiwid29yZHNUb01kNSIsImJ5dGVzVG9Xb3JkcyIsImlucHV0Iiwib3V0cHV0IiwibGVuZ3RoMzIiLCJoZXhUYWIiLCJoZXgiLCJjaGFyQXQiLCJnZXRPdXRwdXRMZW5ndGgiLCJpbnB1dExlbmd0aDgiLCJsZW4iLCJiIiwib2xkYSIsIm9sZGIiLCJvbGRjIiwib2xkZCIsIm1kNWZmIiwibWQ1Z2ciLCJtZDVoaCIsIm1kNWlpIiwic2FmZUFkZCIsImxlbmd0aDgiLCJVaW50MzJBcnJheSIsImxzdyIsIm1zdyIsImJpdFJvdGF0ZUxlZnQiLCJudW0iLCJjbnQiLCJtZDVjbW4iLCJxIiwicmFuZG9tVVVJRCIsInY0IiwibmF0aXZlIiwicm5kcyIsInJhbmRvbSIsInoiLCJST1RMIiwic2hhMSIsIksiLCJIIiwiaXNBcnJheSIsIk4iLCJNIiwiaiIsInBvdyIsIlciLCJUIiwiZ2V0UmVxdWlyZWRJdGVtcyIsInNjcmVlV2lkdGgiLCJzdGF0dXNMaXN0IiwicmVzZXQiLCJnb0xhc3QiLCJjbGFzc2VzQWN0aW9uIiwiYWRkIiwicmVtb3ZlIiwiY29tbW9uQ2xhc3NlcyIsIm11bHRpX2NvbnRhaW5lciIsIm11bHRpX2VtcHR5X2NvbnRhaW5lciIsImFjdGl2ZSIsImV4dHJhX2l0ZW0iLCJub19kb3RzIiwiZXJyb3IiLCJsb2FkaW5nIiwibm9ybWFsQ2Fyb3VzZWxDbGFzc2VzIiwibm9ybWFsX2NvbnRhaW5lciIsIm5vcm1hbF9pdGVtIiwibm9ybWFsX3N0eWxlZF9idG4iLCJhY3RpdmVDbGlja0NsYXNzZXMiLCJhY3RpdmVfY2xpY2tfY29udGFpbmVyIiwiYWN0aXZlX2NsaWNrX2l0ZW0iLCJhY3RpdmVfY2xpY2tfc3R5bGVkX2J0biIsImFjdGl2ZVNsaWRlQ2xhc3NlcyIsImFjdGl2ZV9zbGlkZV9jb250YWluZXIiLCJhY3RpdmVfc2xpZGVfd3JhcHBlciIsImZpcnN0X2l0ZW0iLCJsYXN0X2l0ZW0iLCJwcmV2X2J0biIsIm5leHRfYnRuIiwiTm9ybWFsQ2Fyb3VzZWwiLCJjYXJvdXNlbFBhcmVudCIsInVzZVJlZiIsInJlbmRlckNhcm91c2VsIiwic2V0UmVuZGVyQ2Fyb3VzZWwiLCJ1c2VTdGF0ZSIsImRhdGFJdGVtcyIsInNldERhdGFJdGVtcyIsImNhcm91c2VsSXRlbXMiLCJzZXRDYXJvdXNlbEl0ZW1zIiwidW5pcXVlQ2xhc3MiLCJzZXRVbmlxdWVDbGFzcyIsImNhcm91c2VsSW5maW5pdGUiLCJzZXRDYXJvdXNlbEluZmluaXRlIiwic2V0UmVzcG9uc2l2ZSIsImFkZE9yUmVtb3ZlQ2xhc3NOYW1lIiwibm9kZSIsImFjdGlvbiIsImNsYXNzTGlzdCIsImNoYW5nZUFjdGl2ZUNsYXNzIiwiZ2V0SWR4Q2xhc3NOYW1lIiwiY2xpY2tlZEl0ZW0iLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJjbGFzc05hbWVzIiwic3BsaXQiLCJvbkNhcmRDbGlja2VkIiwiY2FuRXhlY3V0ZSIsImV4ZWN1dGUiLCJhY3RpdmVOb2RlIiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpZHhDbGFzcyIsIml0ZW1Ub1NldEFjdGl2ZSIsImNyZWF0ZUNhcm91c2VsSXRlbXMiLCJleHRyYUl0ZW1zIiwiaXRlbXNCZWhhdmlvciIsImN1cnJlbnRSZXF1aXJlZEl0ZW1zIiwiZGVmYXVsdFJlc3BvbnNpdmUiLCJzZXR1cENhcm91c2UiLCJjYXJvdXNlbFR5cGUiLCJmaXJzdENhcm91c2VsSXRlbSIsImNsaWNrIiwidXNlRWZmZWN0IiwiZGF0YSIsInN0YXR1cyIsInV1aWR2NCIsInJlc2l6ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsImJ1dHRvbnNTdHlsZSIsIkFjdGl2ZVNsaWRlQ2Fyb3VzZWwiLCJjYXJvdXNlbF9pdGVtcyIsInNldF9jYXJvdXNlbF9pdGVtcyIsImN1cnJlbnRBY3RpdmVJZHgiLCJzZXRDdXJyZW50QWN0aXZlSWR4IiwibnVtYmVyT2ZEaXNwbGF5ZWRJdGVtcyIsInNldE51bWJlck9mRGlzcGxheWVkSXRlbXMiLCJudW1iZXJPZkFsbEl0ZW1zIiwic2V0TnVtYmVyT2ZBbGxJdGVtcyIsImNhcm91c2VsUHJvcGVydGllcyIsInNldENhcm91c2VsUHJvcGVydGllcyIsInJlc2V0U2xpZGVyIiwic2V0QWN0aXZlQ2xhc3MiLCJzbGlkZVRvVGhlRW5kIiwicHJldkNsaWNrZWQiLCJuZXh0Q2xpY2tlZCIsInJlbW92ZUFjdGl2ZUNsYXNzIiwiYWxsSXRlbXMiLCJpdGVtSWR4VG9TZXRBY3RpdmUiLCJwYXJlbnRFbGVtZW50Iiwic2xpZGVMZWZ0T3JSaWdodCIsImFjdGlvbklkeCIsImZpcnN0U2xpZGUiLCJsYXN0U2xpZGUiLCJhY3Rpb25Ub0ZpcmUiLCJvblNsaWRlQ2xpY2tlZCIsIm9uQ2Fyb3VzZWxJbml0IiwiZmlyc3RJdGVtQWN0aW9uIiwib25DYXJvdXNlbFJlc2l6ZSIsIm5ld0RhdGEiLCJpZHgiLCJjYXJvdXNlbENvbnRhaW5lciIsInVzZUNhbGxiYWNrIiwiZWwiLCJNdWx0aUNhcm91c2VsIiwic2V0RGVmYXVsdFJlc3BvbnNpdmUiLCJpdGVtczQyNSIsIml0ZW1zNjQwIiwiaXRlbXMxMDI0IiwiaXRlbXMxMjAwIiwiaXRlbXMxNjAwIiwiaXRlbXMyNTYwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUUs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QyxDQUFDLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHalUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNyQmlVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHem5CLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDdkIsR0FBQTtBQUVBLEVBQUEsT0FBTyxDQUFDeW5CLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFB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
