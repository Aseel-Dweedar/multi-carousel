define(['exports', 'react'], (function (exports, react) { 'use strict';

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
	  no_dots: "multi-carousel__no-dots"
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
	  const carouselParent = react.useRef();
	  const [carousel_items, set_carousel_items] = react.useState([]);
	  const [responsive, setResponsive] = react.useState({
	    ...defaultResponsive
	  });
	  const [uniqueClass, setUniqueClass] = react.useState("");

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
	      node.classList.remove(commonClasses.active);
	    } else {
	      node.classList.add(commonClasses.active);
	    }
	  };

	  /*
	      in case of "infinite" carousel the node will be node list "Array"
	      because the carousel create a copy of all the items
	      that why we need change the active class on both nodes - the carousel render both -
	  */
	  const changeActiveClass = (node, action) => {
	    if (node?.length) {
	      node.forEach(item => {
	        addOrRemoveClassName(item, action);
	      });
	    } else if (node) {
	      addOrRemoveClassName(node, action);
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
	    set the active item after the carousel has already been initialized
	  */
	  const onInitialized = () => {
	    if (props.carouselType === "active") {
	      let itemToSetActive = document.querySelector(`.${uniqueClass}`)?.querySelectorAll(".idx-0");
	      changeActiveClass(itemToSetActive, classesAction.add);
	    }
	  };
	  react.useEffect(() => {
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
	  react.useEffect(() => {
	    if (props.data?.status === "available" && !carousel_items?.length) {
	      set_carousel_items(props.data.items.map((item, i) => react.createElement("div", {
	        key: i,
	        onClick: props.carouselType === "active" ? e => onCardClicked(e, props.action?.get(item)) : undefined,
	        className: `${commonClasses.item} idx-${i} ${props.carouselType === "active" ? activeClickClasses.active_click_clickable_item : normalCarouselClasses.normal_item}`
	      }, props.content.get(item))));
	    }
	  }, [props.data]);
	  return react.createElement("div", {
	    className: [commonClasses.multi_container, uniqueClass, props.carouselType === "active" ? activeClickClasses.active_click_container : normalCarouselClasses.normal_container, props.disableDotsControls ? commonClasses.no_dots : "", !props.disableButtonsControls && props.carouselType === "active" ? activeClickClasses.active_click_with_btn : ""].join(" "),
	    ref: carouselParent
	  }, carousel_items?.length ? react.createElement(AliceCarousel, {
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
	    onInitialized: onInitialized
	  }) : react.createElement("div", {
	    className: commonClasses.multi_empty_container
	  }));
	}

	function ActiveSlideCarousel(props) {
	  const sliderContainer = react.useRef();
	  const [carousel_items, set_carousel_items] = react.useState([]);
	  const [responsive, setResponsive] = react.useState(null);
	  const [uniqueClass, setUniqueClass] = react.useState("");
	  const [currentActiveIdx, setCurrentActiveIdx] = react.useState(0);
	  const [numberOfDisplayedItems, setNumberOfDisplayedItems] = react.useState(0);
	  const [numberOfAllItems, setNumberOfAllItems] = react.useState(0);

	  // get the 'react-alice-carousel' built-in all method and properties
	  const [carouselProperties, setCarouselProperties] = react.useState(null);

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
	  react.useEffect(() => {
	    if (props.data?.status === "available" && !carousel_items?.length) {
	      let newData = props.data.items.map((item, idx) => react.createElement("div", {
	        key: idx,
	        className: `${commonClasses.item} ${idx === 0 ? activeSlideClasses.first_item + " " + commonClasses.active : ""} ${idx === props.data.items.length - 1 ? activeSlideClasses.last_item : ""}`
	      }, props.content.get(item)));
	      setNumberOfAllItems(newData.length - 1);
	      set_carousel_items(newData);
	    }
	  }, [props.data]);
	  react.useEffect(() => {
	    // set a unique class in case of using two different carousel instances in the same document
	    setUniqueClass("a-" + v4());
	  }, []);

	  /*
	      set the responsive object after initialize the container so it take the correct dimensions
	  */
	  const carouselContainer = react.useCallback(node => {
	    if (node) setNewResponsive();
	  }, []);
	  return carousel_items?.length ? react.createElement("div", {
	    className: activeSlideClasses.active_slide_container,
	    ref: carouselContainer
	  }, react.createElement("button", {
	    className: activeSlideClasses.prev_btn,
	    onClick: prevClicked
	  }), react.createElement("div", {
	    className: [uniqueClass, activeSlideClasses.active_slide_wrapper].join(" "),
	    ref: sliderContainer
	  }, responsive && react.createElement(AliceCarousel
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
	  })), react.createElement("button", {
	    className: activeSlideClasses.next_btn,
	    onClick: nextClicked
	  })) : react.createElement("div", {
	    className: commonClasses.multi_empty_container
	  });
	}

	function MultiCarousel(props) {
	  return (props.carouselType === "normal" || props.carouselType === "active") && react.createElement(NormalCarousel, {
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
	  }) || props.carouselType === "slide" && react.createElement(ActiveSlideCarousel, {
	    data: props.data,
	    action: props.action,
	    content: props.content
	  }) || react.createElement("div", null, "Error");
	}

	exports.MultiCarousel = MultiCarousel;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlDYXJvdXNlbC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3R5cGVzL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZURpcmVjdGlvbi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9jb21tb24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGEuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlRHVyYXRpb24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlTW92aW5nUG9zaXRpb24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvdXBkYXRlVHJhY2UuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL3Jlc29sdmVEaXJlY3Rpb24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlVmVsb2NpdHkuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlUG9zaXRpb24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9jcmVhdGVPcHRpb25zLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9nZXRJbml0aWFsU3RhdGUuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvZ2V0SW5pdGlhbFByb3BzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2dldE9wdGlvbnMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvcm90YXRlQnlBbmdsZS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdHlwZXMvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL2RlZmF1bHRQcm9wcy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvbWFwcGVycy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvbWF0aC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvZWxlbWVudHMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL2NvbW1vbi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvY2xhc3NuYW1lcy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvdGltZXJzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi91dGlscy9kZWJ1Zy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvcmVuZGVyLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi91dGlscy9jb250cm9scy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3ZpZXdzL1NsaWRlSW5mby5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdmlld3MvU3RhZ2VJdGVtLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi92aWV3cy9Eb3RzTmF2aWdhdGlvbi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdmlld3MvUGxheVBhdXNlQnV0dG9uLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi92aWV3cy9QcmV2TmV4dEJ1dHRvbi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdmlld3MvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3JlYWN0LWFsaWNlLWNhcm91c2VsLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9wYXJzZS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjM1LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9tZDUuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zaGExLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NS5qcyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hlbHBlci5qcyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05vcm1hbENhcm91c2VsLmpzeCIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FjdGl2ZVNsaWRlQ2Fyb3VzZWwuanN4IiwiLi4vLi4vLi4vLi4vLi4vc3JjL011bHRpQ2Fyb3VzZWwuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5UcmFjZURpcmVjdGlvbktleSA9IGV4cG9ydHMuRGlyZWN0aW9uID0gZXhwb3J0cy5BeGlzID0gdm9pZCAwO1xudmFyIFRyYWNlRGlyZWN0aW9uS2V5O1xuZXhwb3J0cy5UcmFjZURpcmVjdGlvbktleSA9IFRyYWNlRGlyZWN0aW9uS2V5O1xuXG4oZnVuY3Rpb24gKFRyYWNlRGlyZWN0aW9uS2V5KSB7XG4gIFRyYWNlRGlyZWN0aW9uS2V5W1wiTkVHQVRJVkVcIl0gPSBcIk5FR0FUSVZFXCI7XG4gIFRyYWNlRGlyZWN0aW9uS2V5W1wiUE9TSVRJVkVcIl0gPSBcIlBPU0lUSVZFXCI7XG4gIFRyYWNlRGlyZWN0aW9uS2V5W1wiTk9ORVwiXSA9IFwiTk9ORVwiO1xufSkoVHJhY2VEaXJlY3Rpb25LZXkgfHwgKGV4cG9ydHMuVHJhY2VEaXJlY3Rpb25LZXkgPSBUcmFjZURpcmVjdGlvbktleSA9IHt9KSk7XG5cbnZhciBEaXJlY3Rpb247XG5leHBvcnRzLkRpcmVjdGlvbiA9IERpcmVjdGlvbjtcblxuKGZ1bmN0aW9uIChEaXJlY3Rpb24pIHtcbiAgRGlyZWN0aW9uW1wiVE9QXCJdID0gXCJUT1BcIjtcbiAgRGlyZWN0aW9uW1wiTEVGVFwiXSA9IFwiTEVGVFwiO1xuICBEaXJlY3Rpb25bXCJSSUdIVFwiXSA9IFwiUklHSFRcIjtcbiAgRGlyZWN0aW9uW1wiQk9UVE9NXCJdID0gXCJCT1RUT01cIjtcbiAgRGlyZWN0aW9uW1wiTk9ORVwiXSA9IFwiTk9ORVwiO1xufSkoRGlyZWN0aW9uIHx8IChleHBvcnRzLkRpcmVjdGlvbiA9IERpcmVjdGlvbiA9IHt9KSk7XG5cbnZhciBBeGlzO1xuZXhwb3J0cy5BeGlzID0gQXhpcztcblxuKGZ1bmN0aW9uIChBeGlzKSB7XG4gIEF4aXNbXCJYXCJdID0gXCJ4XCI7XG4gIEF4aXNbXCJZXCJdID0gXCJ5XCI7XG59KShBeGlzIHx8IChleHBvcnRzLkF4aXMgPSBBeGlzID0ge30pKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FsY3VsYXRlRGlyZWN0aW9uID0gY2FsY3VsYXRlRGlyZWN0aW9uO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVEaXJlY3Rpb24odHJhY2UpIHtcbiAgdmFyIGRpcmVjdGlvbjtcbiAgdmFyIG5lZ2F0aXZlID0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5FR0FUSVZFO1xuICB2YXIgcG9zaXRpdmUgPSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuUE9TSVRJVkU7XG4gIHZhciBjdXJyZW50ID0gdHJhY2VbdHJhY2UubGVuZ3RoIC0gMV07XG4gIHZhciBwcmV2aW91cyA9IHRyYWNlW3RyYWNlLmxlbmd0aCAtIDJdIHx8IDA7XG5cbiAgaWYgKHRyYWNlLmV2ZXJ5KGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIGkgPT09IDA7XG4gIH0pKSB7XG4gICAgcmV0dXJuIF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5OT05FO1xuICB9XG5cbiAgZGlyZWN0aW9uID0gY3VycmVudCA+IHByZXZpb3VzID8gcG9zaXRpdmUgOiBuZWdhdGl2ZTtcblxuICBpZiAoY3VycmVudCA9PT0gMCkge1xuICAgIGRpcmVjdGlvbiA9IHByZXZpb3VzIDwgMCA/IHBvc2l0aXZlIDogbmVnYXRpdmU7XG4gIH1cblxuICByZXR1cm4gZGlyZWN0aW9uO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXNvbHZlQXhpc0RpcmVjdGlvbiA9IGV4cG9ydHMuZ2V0RGlyZWN0aW9uVmFsdWUgPSBleHBvcnRzLmdldERpcmVjdGlvbktleSA9IGV4cG9ydHMuZ2V0RGlmZmVyZW5jZSA9IHZvaWQgMDtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxudmFyIGdldERpcmVjdGlvbktleSA9IGZ1bmN0aW9uIGdldERpcmVjdGlvbktleSgpIHtcbiAgdmFyIG9iamVjdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBrZXkgPSBPYmplY3Qua2V5cyhvYmplY3QpLnRvU3RyaW5nKCk7XG5cbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlIF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5QT1NJVElWRTpcbiAgICAgIHJldHVybiBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuUE9TSVRJVkU7XG5cbiAgICBjYXNlIF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5ORUdBVElWRTpcbiAgICAgIHJldHVybiBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTkVHQVRJVkU7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5OT05FO1xuICB9XG59O1xuXG5leHBvcnRzLmdldERpcmVjdGlvbktleSA9IGdldERpcmVjdGlvbktleTtcblxudmFyIGdldERpcmVjdGlvblZhbHVlID0gZnVuY3Rpb24gZ2V0RGlyZWN0aW9uVmFsdWUoKSB7XG4gIHZhciB2YWx1ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICByZXR1cm4gdmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXSB8fCAwO1xufTtcblxuZXhwb3J0cy5nZXREaXJlY3Rpb25WYWx1ZSA9IGdldERpcmVjdGlvblZhbHVlO1xuXG52YXIgZ2V0RGlmZmVyZW5jZSA9IGZ1bmN0aW9uIGdldERpZmZlcmVuY2UoKSB7XG4gIHZhciB4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICB2YXIgeSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgcmV0dXJuIE1hdGguYWJzKHggLSB5KTtcbn07XG5cbmV4cG9ydHMuZ2V0RGlmZmVyZW5jZSA9IGdldERpZmZlcmVuY2U7XG5cbnZhciByZXNvbHZlQXhpc0RpcmVjdGlvbiA9IGZ1bmN0aW9uIHJlc29sdmVBeGlzRGlyZWN0aW9uKGF4aXMsIGtleSkge1xuICB2YXIgbmVnYXRpdmUgPSBfdHlwZXMuRGlyZWN0aW9uLkxFRlQ7XG4gIHZhciBwb3NpdGl2ZSA9IF90eXBlcy5EaXJlY3Rpb24uUklHSFQ7XG4gIHZhciBkaXJlY3Rpb24gPSBfdHlwZXMuRGlyZWN0aW9uLk5PTkU7XG5cbiAgaWYgKGF4aXMgPT09IF90eXBlcy5BeGlzLlkpIHtcbiAgICBuZWdhdGl2ZSA9IF90eXBlcy5EaXJlY3Rpb24uQk9UVE9NO1xuICAgIHBvc2l0aXZlID0gX3R5cGVzLkRpcmVjdGlvbi5UT1A7XG4gIH1cblxuICBpZiAoa2V5ID09PSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTkVHQVRJVkUpIHtcbiAgICBkaXJlY3Rpb24gPSBuZWdhdGl2ZTtcbiAgfVxuXG4gIGlmIChrZXkgPT09IF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5QT1NJVElWRSkge1xuICAgIGRpcmVjdGlvbiA9IHBvc2l0aXZlO1xuICB9XG5cbiAgcmV0dXJuIGRpcmVjdGlvbjtcbn07XG5cbmV4cG9ydHMucmVzb2x2ZUF4aXNEaXJlY3Rpb24gPSByZXNvbHZlQXhpc0RpcmVjdGlvbjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGEgPSBjYWxjdWxhdGVEaXJlY3Rpb25EZWx0YTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZURpcmVjdGlvbkRlbHRhKHRyYWNlRGlyZWN0aW9ucykge1xuICB2YXIgZGVsdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIHZhciBsZW5ndGggPSB0cmFjZURpcmVjdGlvbnMubGVuZ3RoO1xuICB2YXIgaSA9IGxlbmd0aCAtIDE7XG4gIHZhciBkaXJlY3Rpb24gPSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTk9ORTtcblxuICBmb3IgKDsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgY3VycmVudCA9IHRyYWNlRGlyZWN0aW9uc1tpXTtcbiAgICB2YXIgY3VycmVudEtleSA9ICgwLCBfY29tbW9uLmdldERpcmVjdGlvbktleSkoY3VycmVudCk7XG4gICAgdmFyIGN1cnJlbnRWYWx1ZSA9ICgwLCBfY29tbW9uLmdldERpcmVjdGlvblZhbHVlKShjdXJyZW50W2N1cnJlbnRLZXldKTtcbiAgICB2YXIgcHJldiA9IHRyYWNlRGlyZWN0aW9uc1tpIC0gMV0gfHwge307XG4gICAgdmFyIHByZXZLZXkgPSAoMCwgX2NvbW1vbi5nZXREaXJlY3Rpb25LZXkpKHByZXYpO1xuICAgIHZhciBwcmV2VmFsdWUgPSAoMCwgX2NvbW1vbi5nZXREaXJlY3Rpb25WYWx1ZSkocHJldltwcmV2S2V5XSk7XG4gICAgdmFyIGRpZmZlcmVuY2UgPSAoMCwgX2NvbW1vbi5nZXREaWZmZXJlbmNlKShjdXJyZW50VmFsdWUsIHByZXZWYWx1ZSk7XG5cbiAgICBpZiAoZGlmZmVyZW5jZSA+PSBkZWx0YSkge1xuICAgICAgZGlyZWN0aW9uID0gY3VycmVudEtleTtcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXJlY3Rpb24gPSBwcmV2S2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXJlY3Rpb247XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZUR1cmF0aW9uID0gY2FsY3VsYXRlRHVyYXRpb247XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUR1cmF0aW9uKCkge1xuICB2YXIgcHJldlRpbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gIHZhciBuZXh0VGltZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgcmV0dXJuIHByZXZUaW1lID8gbmV4dFRpbWUgLSBwcmV2VGltZSA6IDA7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uID0gY2FsY3VsYXRlTW92aW5nUG9zaXRpb247XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uKGUpIHtcbiAgaWYgKCdjaGFuZ2VkVG91Y2hlcycgaW4gZSkge1xuICAgIHZhciB0b3VjaGVzID0gZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgIHJldHVybiB7XG4gICAgICB4OiB0b3VjaGVzICYmIHRvdWNoZXMuY2xpZW50WCxcbiAgICAgIHk6IHRvdWNoZXMgJiYgdG91Y2hlcy5jbGllbnRZXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogZS5jbGllbnRYLFxuICAgIHk6IGUuY2xpZW50WVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51cGRhdGVUcmFjZSA9IHVwZGF0ZVRyYWNlO1xuXG5mdW5jdGlvbiB1cGRhdGVUcmFjZSh0cmFjZSwgdmFsdWUpIHtcbiAgdmFyIGxhc3QgPSB0cmFjZVt0cmFjZS5sZW5ndGggLSAxXTtcblxuICBpZiAobGFzdCAhPT0gdmFsdWUpIHtcbiAgICB0cmFjZS5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB0cmFjZTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zID0gY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVUcmFjZURpcmVjdGlvbnMoKSB7XG4gIHZhciB0cmFjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG4gIHZhciB0aWNrcyA9IFtdO1xuICB2YXIgcG9zaXRpdmUgPSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuUE9TSVRJVkU7XG4gIHZhciBuZWdhdGl2ZSA9IF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5ORUdBVElWRTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgdGljayA9IFtdO1xuICB2YXIgZGlyZWN0aW9uID0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5PTkU7XG5cbiAgZm9yICg7IGkgPCB0cmFjZS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjdXJyZW50ID0gdHJhY2VbaV07XG4gICAgdmFyIHByZXYgPSB0cmFjZVtpIC0gMV07XG5cbiAgICBpZiAodGljay5sZW5ndGgpIHtcbiAgICAgIHZhciBjdXJyZW50RGlyZWN0aW9uID0gY3VycmVudCA+IHByZXYgPyBwb3NpdGl2ZSA6IG5lZ2F0aXZlO1xuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTk9ORSkge1xuICAgICAgICBkaXJlY3Rpb24gPSBjdXJyZW50RGlyZWN0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudERpcmVjdGlvbiA9PT0gZGlyZWN0aW9uKSB7XG4gICAgICAgIHRpY2sucHVzaChjdXJyZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpY2tzLnB1c2goX2RlZmluZVByb3BlcnR5KHt9LCBkaXJlY3Rpb24sIHRpY2suc2xpY2UoKSkpO1xuICAgICAgICB0aWNrID0gW107XG4gICAgICAgIHRpY2sucHVzaChjdXJyZW50KTtcbiAgICAgICAgZGlyZWN0aW9uID0gY3VycmVudERpcmVjdGlvbjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGN1cnJlbnQgIT09IDApIHtcbiAgICAgICAgZGlyZWN0aW9uID0gY3VycmVudCA+IDAgPyBwb3NpdGl2ZSA6IG5lZ2F0aXZlO1xuICAgICAgfVxuXG4gICAgICB0aWNrLnB1c2goY3VycmVudCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpY2subGVuZ3RoKSB7XG4gICAgdGlja3MucHVzaChfZGVmaW5lUHJvcGVydHkoe30sIGRpcmVjdGlvbiwgdGljaykpO1xuICB9XG5cbiAgcmV0dXJuIHRpY2tzO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXNvbHZlRGlyZWN0aW9uID0gcmVzb2x2ZURpcmVjdGlvbjtcblxudmFyIF9jYWxjdWxhdGVEaXJlY3Rpb24gPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVEaXJlY3Rpb25cIik7XG5cbnZhciBfY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zXCIpO1xuXG52YXIgX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGFcIik7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xuXG5mdW5jdGlvbiByZXNvbHZlRGlyZWN0aW9uKHRyYWNlKSB7XG4gIHZhciBheGlzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBfdHlwZXMuQXhpcy5YO1xuICB2YXIgZGlyZWN0aW9uRGVsdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDA7XG5cbiAgaWYgKGRpcmVjdGlvbkRlbHRhKSB7XG4gICAgdmFyIGRpcmVjdGlvbnMgPSAoMCwgX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucy5jYWxjdWxhdGVUcmFjZURpcmVjdGlvbnMpKHRyYWNlKTtcblxuICAgIHZhciBfZGlyZWN0aW9uID0gKDAsIF9jYWxjdWxhdGVEaXJlY3Rpb25EZWx0YS5jYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSkoZGlyZWN0aW9ucywgZGlyZWN0aW9uRGVsdGEpO1xuXG4gICAgcmV0dXJuICgwLCBfY29tbW9uLnJlc29sdmVBeGlzRGlyZWN0aW9uKShheGlzLCBfZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHZhciBkaXJlY3Rpb24gPSAoMCwgX2NhbGN1bGF0ZURpcmVjdGlvbi5jYWxjdWxhdGVEaXJlY3Rpb24pKHRyYWNlKTtcbiAgcmV0dXJuICgwLCBfY29tbW9uLnJlc29sdmVBeGlzRGlyZWN0aW9uKShheGlzLCBkaXJlY3Rpb24pO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jYWxjdWxhdGVWZWxvY2l0eSA9IGNhbGN1bGF0ZVZlbG9jaXR5O1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVWZWxvY2l0eSh4LCB5LCB0aW1lKSB7XG4gIHZhciBtYWduaXR1ZGUgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gIHJldHVybiBtYWduaXR1ZGUgLyAodGltZSB8fCAxKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FsY3VsYXRlUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbjtcblxudmFyIF91cGRhdGVUcmFjZSA9IHJlcXVpcmUoXCIuL3VwZGF0ZVRyYWNlXCIpO1xuXG52YXIgX3Jlc29sdmVEaXJlY3Rpb24gPSByZXF1aXJlKFwiLi9yZXNvbHZlRGlyZWN0aW9uXCIpO1xuXG52YXIgX2NhbGN1bGF0ZUR1cmF0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlRHVyYXRpb25cIik7XG5cbnZhciBfY2FsY3VsYXRlVmVsb2NpdHkgPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVWZWxvY2l0eVwiKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlUG9zaXRpb24oc3RhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIHN0YXJ0ID0gc3RhdGUuc3RhcnQsXG4gICAgICB4ID0gc3RhdGUueCxcbiAgICAgIHkgPSBzdGF0ZS55LFxuICAgICAgdHJhY2VYID0gc3RhdGUudHJhY2VYLFxuICAgICAgdHJhY2VZID0gc3RhdGUudHJhY2VZO1xuICB2YXIgcm90YXRlUG9zaXRpb24gPSBvcHRpb25zLnJvdGF0ZVBvc2l0aW9uLFxuICAgICAgZGlyZWN0aW9uRGVsdGEgPSBvcHRpb25zLmRpcmVjdGlvbkRlbHRhO1xuICB2YXIgZGVsdGFYID0gcm90YXRlUG9zaXRpb24ueCAtIHg7XG4gIHZhciBkZWx0YVkgPSB5IC0gcm90YXRlUG9zaXRpb24ueTtcbiAgdmFyIGFic1ggPSBNYXRoLmFicyhkZWx0YVgpO1xuICB2YXIgYWJzWSA9IE1hdGguYWJzKGRlbHRhWSk7XG4gICgwLCBfdXBkYXRlVHJhY2UudXBkYXRlVHJhY2UpKHRyYWNlWCwgZGVsdGFYKTtcbiAgKDAsIF91cGRhdGVUcmFjZS51cGRhdGVUcmFjZSkodHJhY2VZLCBkZWx0YVkpO1xuICB2YXIgZGlyZWN0aW9uWCA9ICgwLCBfcmVzb2x2ZURpcmVjdGlvbi5yZXNvbHZlRGlyZWN0aW9uKSh0cmFjZVgsIF90eXBlcy5BeGlzLlgsIGRpcmVjdGlvbkRlbHRhKTtcbiAgdmFyIGRpcmVjdGlvblkgPSAoMCwgX3Jlc29sdmVEaXJlY3Rpb24ucmVzb2x2ZURpcmVjdGlvbikodHJhY2VZLCBfdHlwZXMuQXhpcy5ZLCBkaXJlY3Rpb25EZWx0YSk7XG4gIHZhciBkdXJhdGlvbiA9ICgwLCBfY2FsY3VsYXRlRHVyYXRpb24uY2FsY3VsYXRlRHVyYXRpb24pKHN0YXJ0LCBEYXRlLm5vdygpKTtcbiAgdmFyIHZlbG9jaXR5ID0gKDAsIF9jYWxjdWxhdGVWZWxvY2l0eS5jYWxjdWxhdGVWZWxvY2l0eSkoYWJzWCwgYWJzWSwgZHVyYXRpb24pO1xuICByZXR1cm4ge1xuICAgIGFic1g6IGFic1gsXG4gICAgYWJzWTogYWJzWSxcbiAgICBkZWx0YVg6IGRlbHRhWCxcbiAgICBkZWx0YVk6IGRlbHRhWSxcbiAgICBkaXJlY3Rpb25YOiBkaXJlY3Rpb25YLFxuICAgIGRpcmVjdGlvblk6IGRpcmVjdGlvblksXG4gICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgIHBvc2l0aW9uWDogcm90YXRlUG9zaXRpb24ueCxcbiAgICBwb3NpdGlvblk6IHJvdGF0ZVBvc2l0aW9uLnksXG4gICAgdmVsb2NpdHk6IHZlbG9jaXR5XG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXMgPSB2b2lkIDA7XG5cbnZhciBjaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzID0gZnVuY3Rpb24gY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyhlKSB7XG4gIHJldHVybiBCb29sZWFuKGUudG91Y2hlcyAmJiBlLnRvdWNoZXMubGVuZ3RoID4gMSk7XG59O1xuXG5leHBvcnRzLmNoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXMgPSBjaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jcmVhdGVPcHRpb25zID0gY3JlYXRlT3B0aW9ucztcblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9ucygpIHtcbiAgdmFyIHByb3h5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3h5LCAncGFzc2l2ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHRoaXMuaXNQYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIHByb3h5O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jaGVja0lzUGFzc2l2ZVN1cHBvcnRlZCA9IGNoZWNrSXNQYXNzaXZlU3VwcG9ydGVkO1xuZXhwb3J0cy5ub29wID0gdm9pZCAwO1xuXG52YXIgX2NyZWF0ZU9wdGlvbnMgPSByZXF1aXJlKFwiLi9jcmVhdGVPcHRpb25zXCIpO1xuXG5mdW5jdGlvbiBjaGVja0lzUGFzc2l2ZVN1cHBvcnRlZChpc1Bhc3NpdmVTdXBwb3J0ZWQpIHtcbiAgaWYgKHR5cGVvZiBpc1Bhc3NpdmVTdXBwb3J0ZWQgPT09ICdib29sZWFuJykge1xuICAgIHJldHVybiBpc1Bhc3NpdmVTdXBwb3J0ZWQ7XG4gIH1cblxuICB2YXIgcHJveHkgPSB7XG4gICAgaXNQYXNzaXZlU3VwcG9ydGVkOiBpc1Bhc3NpdmVTdXBwb3J0ZWRcbiAgfTtcblxuICB0cnkge1xuICAgIHZhciBvcHRpb25zID0gKDAsIF9jcmVhdGVPcHRpb25zLmNyZWF0ZU9wdGlvbnMpKHByb3h5KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQnLCBub29wLCBvcHRpb25zKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQnLCBub29wLCBvcHRpb25zKTtcbiAgfSBjYXRjaCAoZXJyKSB7fVxuXG4gIHJldHVybiBwcm94eS5pc1Bhc3NpdmVTdXBwb3J0ZWQ7XG59XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG5leHBvcnRzLm5vb3AgPSBub29wOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cblxudmFyIGNoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCA9IGZ1bmN0aW9uIGNoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCgpIHtcbiAgcmV0dXJuICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yod2luZG93KSkgPT09ICdvYmplY3QnICYmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgQm9vbGVhbih3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzKSk7XG59O1xuXG5leHBvcnRzLmNoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCA9IGNoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0SW5pdGlhbFN0YXRlID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgZ2V0SW5pdGlhbFN0YXRlID0gZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgc3RhcnQ6IDAsXG4gICAgaXNTd2lwaW5nOiBmYWxzZSxcbiAgICB0cmFjZVg6IFtdLFxuICAgIHRyYWNlWTogW11cbiAgfSwgb3B0aW9ucyk7XG59O1xuXG5leHBvcnRzLmdldEluaXRpYWxTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0SW5pdGlhbFByb3BzID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgZ2V0SW5pdGlhbFByb3BzID0gZnVuY3Rpb24gZ2V0SW5pdGlhbFByb3BzKCkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgZWxlbWVudDogbnVsbCxcbiAgICB0YXJnZXQ6IG51bGwsXG4gICAgZGVsdGE6IDEwLFxuICAgIGRpcmVjdGlvbkRlbHRhOiAwLFxuICAgIHJvdGF0aW9uQW5nbGU6IDAsXG4gICAgbW91c2VUcmFja2luZ0VuYWJsZWQ6IGZhbHNlLFxuICAgIHRvdWNoVHJhY2tpbmdFbmFibGVkOiB0cnVlLFxuICAgIHByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQ6IGZhbHNlLFxuICAgIHByZXZlbnRUcmFja2luZ09uTW91c2VsZWF2ZTogZmFsc2VcbiAgfSwgcHJvcHMpO1xufTtcblxuZXhwb3J0cy5nZXRJbml0aWFsUHJvcHMgPSBnZXRJbml0aWFsUHJvcHM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldE9wdGlvbnMgPSBnZXRPcHRpb25zO1xuXG5mdW5jdGlvbiBnZXRPcHRpb25zKCkge1xuICB2YXIgaXNQYXNzaXZlU3VwcG9ydGVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcblxuICBpZiAoaXNQYXNzaXZlU3VwcG9ydGVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7fTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucm90YXRlQnlBbmdsZSA9IHJvdGF0ZUJ5QW5nbGU7XG5cbmZ1bmN0aW9uIHJvdGF0ZUJ5QW5nbGUocG9zaXRpb24pIHtcbiAgdmFyIGFuZ2xlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuXG4gIGlmIChhbmdsZSA9PT0gMCkge1xuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIHZhciB4ID0gcG9zaXRpb24ueCxcbiAgICAgIHkgPSBwb3NpdGlvbi55O1xuICB2YXIgYW5nbGVJblJhZGlhbnMgPSBNYXRoLlBJIC8gMTgwICogYW5nbGU7XG4gIHZhciByb3RhdGVkWCA9IHggKiBNYXRoLmNvcyhhbmdsZUluUmFkaWFucykgKyB5ICogTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICB2YXIgcm90YXRlZFkgPSB5ICogTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpIC0geCAqIE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgcmV0dXJuIHtcbiAgICB4OiByb3RhdGVkWCxcbiAgICB5OiByb3RhdGVkWVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZURpcmVjdGlvbiA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZURpcmVjdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX2NhbGN1bGF0ZURpcmVjdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZURpcmVjdGlvbltrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jYWxjdWxhdGVEaXJlY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGEgPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVEaXJlY3Rpb25EZWx0YVwiKTtcblxuT2JqZWN0LmtleXMoX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGFba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGFba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2FsY3VsYXRlRHVyYXRpb24gPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVEdXJhdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX2NhbGN1bGF0ZUR1cmF0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2FsY3VsYXRlRHVyYXRpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2FsY3VsYXRlRHVyYXRpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2FsY3VsYXRlTW92aW5nUG9zaXRpb24gPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVNb3ZpbmdQb3NpdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX2NhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2FsY3VsYXRlTW92aW5nUG9zaXRpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2FsY3VsYXRlTW92aW5nUG9zaXRpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2FsY3VsYXRlUG9zaXRpb24gPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVQb3NpdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX2NhbGN1bGF0ZVBvc2l0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2FsY3VsYXRlUG9zaXRpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2FsY3VsYXRlUG9zaXRpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zXCIpO1xuXG5PYmplY3Qua2V5cyhfY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9uc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9jYWxjdWxhdGVWZWxvY2l0eSA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZVZlbG9jaXR5XCIpO1xuXG5PYmplY3Qua2V5cyhfY2FsY3VsYXRlVmVsb2NpdHkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9jYWxjdWxhdGVWZWxvY2l0eVtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jYWxjdWxhdGVWZWxvY2l0eVtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzID0gcmVxdWlyZShcIi4vY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlc1wiKTtcblxuT2JqZWN0LmtleXMoX2NoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQgPSByZXF1aXJlKFwiLi9jaGVja0lzUGFzc2l2ZVN1cHBvcnRlZFwiKTtcblxuT2JqZWN0LmtleXMoX2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWRba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkID0gcmVxdWlyZShcIi4vY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkXCIpO1xuXG5PYmplY3Qua2V5cyhfY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbk9iamVjdC5rZXlzKF9jb21tb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9jb21tb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY29tbW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NyZWF0ZU9wdGlvbnMgPSByZXF1aXJlKFwiLi9jcmVhdGVPcHRpb25zXCIpO1xuXG5PYmplY3Qua2V5cyhfY3JlYXRlT3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NyZWF0ZU9wdGlvbnNba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY3JlYXRlT3B0aW9uc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9nZXRJbml0aWFsU3RhdGUgPSByZXF1aXJlKFwiLi9nZXRJbml0aWFsU3RhdGVcIik7XG5cbk9iamVjdC5rZXlzKF9nZXRJbml0aWFsU3RhdGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9nZXRJbml0aWFsU3RhdGVba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0SW5pdGlhbFN0YXRlW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2dldEluaXRpYWxQcm9wcyA9IHJlcXVpcmUoXCIuL2dldEluaXRpYWxQcm9wc1wiKTtcblxuT2JqZWN0LmtleXMoX2dldEluaXRpYWxQcm9wcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2dldEluaXRpYWxQcm9wc1trZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9nZXRJbml0aWFsUHJvcHNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfZ2V0T3B0aW9ucyA9IHJlcXVpcmUoXCIuL2dldE9wdGlvbnNcIik7XG5cbk9iamVjdC5rZXlzKF9nZXRPcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfZ2V0T3B0aW9uc1trZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9nZXRPcHRpb25zW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX3Jlc29sdmVEaXJlY3Rpb24gPSByZXF1aXJlKFwiLi9yZXNvbHZlRGlyZWN0aW9uXCIpO1xuXG5PYmplY3Qua2V5cyhfcmVzb2x2ZURpcmVjdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX3Jlc29sdmVEaXJlY3Rpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfcmVzb2x2ZURpcmVjdGlvbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9yb3RhdGVCeUFuZ2xlID0gcmVxdWlyZShcIi4vcm90YXRlQnlBbmdsZVwiKTtcblxuT2JqZWN0LmtleXMoX3JvdGF0ZUJ5QW5nbGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9yb3RhdGVCeUFuZ2xlW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3JvdGF0ZUJ5QW5nbGVba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfdXBkYXRlVHJhY2UgPSByZXF1aXJlKFwiLi91cGRhdGVUcmFjZVwiKTtcblxuT2JqZWN0LmtleXMoX3VwZGF0ZVRyYWNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfdXBkYXRlVHJhY2Vba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfdXBkYXRlVHJhY2Vba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBfZXhwb3J0TmFtZXMgPSB7fTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgVXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi91dGlsc1wiKSk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcblxuT2JqZWN0LmtleXMoX3R5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9leHBvcnROYW1lcywga2V5KSkgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfdHlwZXNba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfdHlwZXNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wOyB9KShub2RlSW50ZXJvcCk7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkgeyBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgVmFuaWxsYVN3aXBlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVmFuaWxsYVN3aXBlKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZhbmlsbGFTd2lwZSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzdGF0ZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicHJvcHNcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuc3RhdGUgPSBVdGlscy5nZXRJbml0aWFsU3RhdGUoKTtcbiAgICB0aGlzLnByb3BzID0gVXRpbHMuZ2V0SW5pdGlhbFByb3BzKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZVN3aXBlU3RhcnQgPSB0aGlzLmhhbmRsZVN3aXBlU3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN3aXBlTW92ZSA9IHRoaXMuaGFuZGxlU3dpcGVNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTd2lwZUVuZCA9IHRoaXMuaGFuZGxlU3dpcGVFbmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vdXNlRG93biA9IHRoaXMuaGFuZGxlTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVNb3VzZU1vdmUgPSB0aGlzLmhhbmRsZU1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTW91c2VVcCA9IHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTW91c2VMZWF2ZSA9IHRoaXMuaGFuZGxlTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFZhbmlsbGFTd2lwZSwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdGhpcy5zZXR1cFRvdWNoTGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLnNldHVwTW91c2VMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZShwcm9wcykge1xuICAgICAgdmFyIHByZXZQcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgbmV4dFByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJldlByb3BzLCBwcm9wcyk7XG5cbiAgICAgIGlmIChwcmV2UHJvcHMuZWxlbWVudCAhPT0gbmV4dFByb3BzLmVsZW1lbnQgfHwgcHJldlByb3BzLnRhcmdldCAhPT0gbmV4dFByb3BzLnRhcmdldCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcblxuICAgICAgaWYgKHByZXZQcm9wcy5tb3VzZVRyYWNraW5nRW5hYmxlZCAhPT0gbmV4dFByb3BzLm1vdXNlVHJhY2tpbmdFbmFibGVkIHx8IHByZXZQcm9wcy5wcmV2ZW50VHJhY2tpbmdPbk1vdXNlbGVhdmUgIT09IG5leHRQcm9wcy5wcmV2ZW50VHJhY2tpbmdPbk1vdXNlbGVhdmUpIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwTW91c2VMaXN0ZW5lcnMoKTtcbiAgICAgICAgbmV4dFByb3BzLm1vdXNlVHJhY2tpbmdFbmFibGVkID8gdGhpcy5zZXR1cE1vdXNlTGlzdGVuZXJzKCkgOiB0aGlzLmNsZWFudXBNb3VzZUxpc3RlbmVycygpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJldlByb3BzLnRvdWNoVHJhY2tpbmdFbmFibGVkICE9PSBuZXh0UHJvcHMudG91Y2hUcmFja2luZ0VuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwVG91Y2hMaXN0ZW5lcnMoKTtcbiAgICAgICAgbmV4dFByb3BzLnRvdWNoVHJhY2tpbmdFbmFibGVkID8gdGhpcy5zZXR1cFRvdWNoTGlzdGVuZXJzKCkgOiB0aGlzLmNsZWFudXBUb3VjaExpc3RlbmVycygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLmNsZWFudXBNb3VzZUxpc3RlbmVycygpO1xuICAgICAgdGhpcy5jbGVhbnVwVG91Y2hMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuc3RhdGUgPSBVdGlscy5nZXRJbml0aWFsU3RhdGUoKTtcbiAgICAgIHRoaXMucHJvcHMgPSBVdGlscy5nZXRJbml0aWFsUHJvcHMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0dXBUb3VjaExpc3RlbmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cFRvdWNoTGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBlbGVtZW50ID0gX3RoaXMkcHJvcHMuZWxlbWVudCxcbiAgICAgICAgICB0YXJnZXQgPSBfdGhpcyRwcm9wcy50YXJnZXQsXG4gICAgICAgICAgdG91Y2hUcmFja2luZ0VuYWJsZWQgPSBfdGhpcyRwcm9wcy50b3VjaFRyYWNraW5nRW5hYmxlZDtcblxuICAgICAgaWYgKGVsZW1lbnQgJiYgdG91Y2hUcmFja2luZ0VuYWJsZWQpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGFyZ2V0IHx8IGVsZW1lbnQ7XG4gICAgICAgIHZhciBpc1Bhc3NpdmVTdXBwb3J0ZWQgPSBVdGlscy5jaGVja0lzUGFzc2l2ZVN1cHBvcnRlZCgpO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IFV0aWxzLmdldE9wdGlvbnMoaXNQYXNzaXZlU3VwcG9ydGVkKTtcbiAgICAgICAgbGlzdGVuZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlU3dpcGVTdGFydCwgb3B0aW9ucyk7XG4gICAgICAgIGxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuaGFuZGxlU3dpcGVNb3ZlLCBvcHRpb25zKTtcbiAgICAgICAgbGlzdGVuZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmhhbmRsZVN3aXBlRW5kLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xlYW51cFRvdWNoTGlzdGVuZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFudXBUb3VjaExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGVsZW1lbnQgPSBfdGhpcyRwcm9wczIuZWxlbWVudCxcbiAgICAgICAgICB0YXJnZXQgPSBfdGhpcyRwcm9wczIudGFyZ2V0O1xuICAgICAgdmFyIGxpc3RlbmVyID0gdGFyZ2V0IHx8IGVsZW1lbnQ7XG5cbiAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVTd2lwZVN0YXJ0KTtcbiAgICAgICAgbGlzdGVuZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5oYW5kbGVTd2lwZU1vdmUpO1xuICAgICAgICBsaXN0ZW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuaGFuZGxlU3dpcGVFbmQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXR1cE1vdXNlTGlzdGVuZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldHVwTW91c2VMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBlbGVtZW50ID0gX3RoaXMkcHJvcHMzLmVsZW1lbnQsXG4gICAgICAgICAgbW91c2VUcmFja2luZ0VuYWJsZWQgPSBfdGhpcyRwcm9wczMubW91c2VUcmFja2luZ0VuYWJsZWQsXG4gICAgICAgICAgcHJldmVudFRyYWNraW5nT25Nb3VzZWxlYXZlID0gX3RoaXMkcHJvcHMzLnByZXZlbnRUcmFja2luZ09uTW91c2VsZWF2ZTtcblxuICAgICAgaWYgKG1vdXNlVHJhY2tpbmdFbmFibGVkICYmIGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU1vdXNlRG93bik7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXApO1xuXG4gICAgICAgIGlmIChwcmV2ZW50VHJhY2tpbmdPbk1vdXNlbGVhdmUpIHtcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmhhbmRsZU1vdXNlTGVhdmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsZWFudXBNb3VzZUxpc3RlbmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhbnVwTW91c2VMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU1vdXNlRG93bik7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXApO1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmhhbmRsZU1vdXNlTGVhdmUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRFdmVudERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RXZlbnREYXRhKGUpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7XG4gICAgICAgIGRpcmVjdGlvbkRlbHRhOiAwXG4gICAgICB9O1xuICAgICAgdmFyIHJvdGF0aW9uQW5nbGUgPSB0aGlzLnByb3BzLnJvdGF0aW9uQW5nbGU7XG4gICAgICB2YXIgZGlyZWN0aW9uRGVsdGEgPSBvcHRpb25zLmRpcmVjdGlvbkRlbHRhO1xuICAgICAgdmFyIG1vdmluZ1Bvc2l0aW9uID0gVXRpbHMuY2FsY3VsYXRlTW92aW5nUG9zaXRpb24oZSk7XG4gICAgICB2YXIgcm90YXRlUG9zaXRpb24gPSBVdGlscy5yb3RhdGVCeUFuZ2xlKG1vdmluZ1Bvc2l0aW9uLCByb3RhdGlvbkFuZ2xlKTtcbiAgICAgIHJldHVybiBVdGlscy5jYWxjdWxhdGVQb3NpdGlvbih0aGlzLnN0YXRlLCB7XG4gICAgICAgIHJvdGF0ZVBvc2l0aW9uOiByb3RhdGVQb3NpdGlvbixcbiAgICAgICAgZGlyZWN0aW9uRGVsdGE6IGRpcmVjdGlvbkRlbHRhXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlU3dpcGVTdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVTd2lwZVN0YXJ0KGUpIHtcbiAgICAgIGlmIChVdGlscy5jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzKGUpKSByZXR1cm47XG4gICAgICB2YXIgcm90YXRpb25BbmdsZSA9IHRoaXMucHJvcHMucm90YXRpb25BbmdsZTtcbiAgICAgIHZhciBtb3ZpbmdQb3NpdGlvbiA9IFV0aWxzLmNhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uKGUpO1xuXG4gICAgICB2YXIgX1V0aWxzJHJvdGF0ZUJ5QW5nbGUgPSBVdGlscy5yb3RhdGVCeUFuZ2xlKG1vdmluZ1Bvc2l0aW9uLCByb3RhdGlvbkFuZ2xlKSxcbiAgICAgICAgICB4ID0gX1V0aWxzJHJvdGF0ZUJ5QW5nbGUueCxcbiAgICAgICAgICB5ID0gX1V0aWxzJHJvdGF0ZUJ5QW5nbGUueTtcblxuICAgICAgdGhpcy5zdGF0ZSA9IFV0aWxzLmdldEluaXRpYWxTdGF0ZSh7XG4gICAgICAgIGlzU3dpcGluZzogZmFsc2UsXG4gICAgICAgIHN0YXJ0OiBEYXRlLm5vdygpLFxuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlU3dpcGVNb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVN3aXBlTW92ZShlKSB7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHggPSBfdGhpcyRzdGF0ZS54LFxuICAgICAgICAgIHkgPSBfdGhpcyRzdGF0ZS55LFxuICAgICAgICAgIGlzU3dpcGluZyA9IF90aGlzJHN0YXRlLmlzU3dpcGluZztcbiAgICAgIGlmICgheCB8fCAheSB8fCBVdGlscy5jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzKGUpKSByZXR1cm47XG4gICAgICB2YXIgZGlyZWN0aW9uRGVsdGEgPSB0aGlzLnByb3BzLmRpcmVjdGlvbkRlbHRhIHx8IDA7XG5cbiAgICAgIHZhciBfdGhpcyRnZXRFdmVudERhdGEgPSB0aGlzLmdldEV2ZW50RGF0YShlLCB7XG4gICAgICAgIGRpcmVjdGlvbkRlbHRhOiBkaXJlY3Rpb25EZWx0YVxuICAgICAgfSksXG4gICAgICAgICAgYWJzWCA9IF90aGlzJGdldEV2ZW50RGF0YS5hYnNYLFxuICAgICAgICAgIGFic1kgPSBfdGhpcyRnZXRFdmVudERhdGEuYWJzWSxcbiAgICAgICAgICBkZWx0YVggPSBfdGhpcyRnZXRFdmVudERhdGEuZGVsdGFYLFxuICAgICAgICAgIGRlbHRhWSA9IF90aGlzJGdldEV2ZW50RGF0YS5kZWx0YVksXG4gICAgICAgICAgZGlyZWN0aW9uWCA9IF90aGlzJGdldEV2ZW50RGF0YS5kaXJlY3Rpb25YLFxuICAgICAgICAgIGRpcmVjdGlvblkgPSBfdGhpcyRnZXRFdmVudERhdGEuZGlyZWN0aW9uWSxcbiAgICAgICAgICBkdXJhdGlvbiA9IF90aGlzJGdldEV2ZW50RGF0YS5kdXJhdGlvbixcbiAgICAgICAgICB2ZWxvY2l0eSA9IF90aGlzJGdldEV2ZW50RGF0YS52ZWxvY2l0eTtcblxuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZGVsdGEgPSBfdGhpcyRwcm9wczQuZGVsdGEsXG4gICAgICAgICAgcHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudCA9IF90aGlzJHByb3BzNC5wcmV2ZW50RGVmYXVsdFRvdWNobW92ZUV2ZW50LFxuICAgICAgICAgIG9uU3dpcGVTdGFydCA9IF90aGlzJHByb3BzNC5vblN3aXBlU3RhcnQsXG4gICAgICAgICAgb25Td2lwaW5nID0gX3RoaXMkcHJvcHM0Lm9uU3dpcGluZztcbiAgICAgIGlmIChlLmNhbmNlbGFibGUgJiYgcHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGFic1ggPCBOdW1iZXIoZGVsdGEpICYmIGFic1kgPCBOdW1iZXIoZGVsdGEpICYmICFpc1N3aXBpbmcpIHJldHVybjtcblxuICAgICAgaWYgKG9uU3dpcGVTdGFydCAmJiAhaXNTd2lwaW5nKSB7XG4gICAgICAgIG9uU3dpcGVTdGFydChlLCB7XG4gICAgICAgICAgZGVsdGFYOiBkZWx0YVgsXG4gICAgICAgICAgZGVsdGFZOiBkZWx0YVksXG4gICAgICAgICAgYWJzWDogYWJzWCxcbiAgICAgICAgICBhYnNZOiBhYnNZLFxuICAgICAgICAgIGRpcmVjdGlvblg6IGRpcmVjdGlvblgsXG4gICAgICAgICAgZGlyZWN0aW9uWTogZGlyZWN0aW9uWSxcbiAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgdmVsb2NpdHk6IHZlbG9jaXR5XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YXRlLmlzU3dpcGluZyA9IHRydWU7XG5cbiAgICAgIGlmIChvblN3aXBpbmcpIHtcbiAgICAgICAgb25Td2lwaW5nKGUsIHtcbiAgICAgICAgICBkZWx0YVg6IGRlbHRhWCxcbiAgICAgICAgICBkZWx0YVk6IGRlbHRhWSxcbiAgICAgICAgICBhYnNYOiBhYnNYLFxuICAgICAgICAgIGFic1k6IGFic1ksXG4gICAgICAgICAgZGlyZWN0aW9uWDogZGlyZWN0aW9uWCxcbiAgICAgICAgICBkaXJlY3Rpb25ZOiBkaXJlY3Rpb25ZLFxuICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICB2ZWxvY2l0eTogdmVsb2NpdHlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVN3aXBlRW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVN3aXBlRW5kKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9uU3dpcGVkID0gX3RoaXMkcHJvcHM1Lm9uU3dpcGVkLFxuICAgICAgICAgIG9uVGFwID0gX3RoaXMkcHJvcHM1Lm9uVGFwO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5pc1N3aXBpbmcpIHtcbiAgICAgICAgdmFyIGRpcmVjdGlvbkRlbHRhID0gdGhpcy5wcm9wcy5kaXJlY3Rpb25EZWx0YSB8fCAwO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLmdldEV2ZW50RGF0YShlLCB7XG4gICAgICAgICAgZGlyZWN0aW9uRGVsdGE6IGRpcmVjdGlvbkRlbHRhXG4gICAgICAgIH0pO1xuICAgICAgICBvblN3aXBlZCAmJiBvblN3aXBlZChlLCBwb3NpdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX3Bvc2l0aW9uID0gdGhpcy5nZXRFdmVudERhdGEoZSk7XG5cbiAgICAgICAgb25UYXAgJiYgb25UYXAoZSwgX3Bvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGF0ZSA9IFV0aWxzLmdldEluaXRpYWxTdGF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVNb3VzZURvd25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGUpIHtcbiAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnByb3BzLnRhcmdldDtcblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICBpZiAodGFyZ2V0ID09PSBlLnRhcmdldCkge1xuICAgICAgICAgIHRoaXMuaGFuZGxlU3dpcGVTdGFydChlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTd2lwZVN0YXJ0KGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVNb3VzZU1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlKGUpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3dpcGVNb3ZlKGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVNb3VzZVVwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoZSkge1xuICAgICAgdmFyIGlzU3dpcGluZyA9IHRoaXMuc3RhdGUuaXNTd2lwaW5nO1xuICAgICAgdmFyIHRhcmdldCA9IHRoaXMucHJvcHMudGFyZ2V0O1xuXG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IGUudGFyZ2V0IHx8IGlzU3dpcGluZykge1xuICAgICAgICAgIHRoaXMuaGFuZGxlU3dpcGVFbmQoZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3dpcGVFbmQoZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZU1vdXNlTGVhdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VMZWF2ZShlKSB7XG4gICAgICB2YXIgaXNTd2lwaW5nID0gdGhpcy5zdGF0ZS5pc1N3aXBpbmc7XG5cbiAgICAgIGlmIChpc1N3aXBpbmcpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTd2lwZUVuZChlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJpc1RvdWNoRXZlbnRzU3VwcG9ydGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzVG91Y2hFdmVudHNTdXBwb3J0ZWQoKSB7XG4gICAgICByZXR1cm4gVXRpbHMuY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkKCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFZhbmlsbGFTd2lwZTtcbn0oKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBWYW5pbGxhU3dpcGU7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIEV2ZW50VHlwZSxBbmltYXRpb25UeXBlLEF1dG9QbGF5U3RyYXRlZ3ksQ29udHJvbHNTdHJhdGVneSxBdXRvcGxheURpcmVjdGlvbixDbGFzc25hbWVzLE1vZGlmaWVycztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLk1vZGlmaWVycz1leHBvcnRzLkNsYXNzbmFtZXM9ZXhwb3J0cy5BdXRvcGxheURpcmVjdGlvbj1leHBvcnRzLkNvbnRyb2xzU3RyYXRlZ3k9ZXhwb3J0cy5BdXRvUGxheVN0cmF0ZWd5PWV4cG9ydHMuQW5pbWF0aW9uVHlwZT1leHBvcnRzLkV2ZW50VHlwZT12b2lkIDAsZnVuY3Rpb24oZSl7ZS5BQ1RJT049XCJhY3Rpb25cIixlLklOSVQ9XCJpbml0XCIsZS5SRVNJWkU9XCJyZXNpemVcIixlLlVQREFURT1cInVwZGF0ZVwifShFdmVudFR5cGU9ZXhwb3J0cy5FdmVudFR5cGV8fChleHBvcnRzLkV2ZW50VHlwZT17fSkpLGZ1bmN0aW9uKGUpe2UuRkFERU9VVD1cImZhZGVvdXRcIixlLlNMSURFPVwic2xpZGVcIn0oQW5pbWF0aW9uVHlwZT1leHBvcnRzLkFuaW1hdGlvblR5cGV8fChleHBvcnRzLkFuaW1hdGlvblR5cGU9e30pKSxmdW5jdGlvbihlKXtlLkRFRkFVTFQ9XCJkZWZhdWx0XCIsZS5BTEw9XCJhbGxcIixlLkFDVElPTj1cImFjdGlvblwiLGUuTk9ORT1cIm5vbmVcIn0oQXV0b1BsYXlTdHJhdGVneT1leHBvcnRzLkF1dG9QbGF5U3RyYXRlZ3l8fChleHBvcnRzLkF1dG9QbGF5U3RyYXRlZ3k9e30pKSxmdW5jdGlvbihlKXtlLkRFRkFVTFQ9XCJkZWZhdWx0XCIsZS5BTFRFUk5BVEU9XCJhbHRlcm5hdGVcIixlLlJFU1BPTlNJVkU9XCJyZXNwb25zaXZlXCJ9KENvbnRyb2xzU3RyYXRlZ3k9ZXhwb3J0cy5Db250cm9sc1N0cmF0ZWd5fHwoZXhwb3J0cy5Db250cm9sc1N0cmF0ZWd5PXt9KSksZnVuY3Rpb24oZSl7ZS5SVEw9XCJydGxcIixlLkxUUj1cImx0clwifShBdXRvcGxheURpcmVjdGlvbj1leHBvcnRzLkF1dG9wbGF5RGlyZWN0aW9ufHwoZXhwb3J0cy5BdXRvcGxheURpcmVjdGlvbj17fSkpLGZ1bmN0aW9uKGUpe2UuQU5JTUFURUQ9XCJhbmltYXRlZCBhbmltYXRlZC1vdXQgZmFkZU91dFwiLGUuUk9PVD1cImFsaWNlLWNhcm91c2VsXCIsZS5XUkFQUEVSPVwiYWxpY2UtY2Fyb3VzZWxfX3dyYXBwZXJcIixlLlNUQUdFPVwiYWxpY2UtY2Fyb3VzZWxfX3N0YWdlXCIsZS5TVEFHRV9JVEVNPVwiYWxpY2UtY2Fyb3VzZWxfX3N0YWdlLWl0ZW1cIixlLkRPVFM9XCJhbGljZS1jYXJvdXNlbF9fZG90c1wiLGUuRE9UU19JVEVNPVwiYWxpY2UtY2Fyb3VzZWxfX2RvdHMtaXRlbVwiLGUuUExBWV9CVE49XCJhbGljZS1jYXJvdXNlbF9fcGxheS1idG5cIixlLlBMQVlfQlROX0lURU09XCJhbGljZS1jYXJvdXNlbF9fcGxheS1idG4taXRlbVwiLGUuUExBWV9CVE5fV1JBUFBFUj1cImFsaWNlLWNhcm91c2VsX19wbGF5LWJ0bi13cmFwcGVyXCIsZS5TTElERV9JTkZPPVwiYWxpY2UtY2Fyb3VzZWxfX3NsaWRlLWluZm9cIixlLlNMSURFX0lORk9fSVRFTT1cImFsaWNlLWNhcm91c2VsX19zbGlkZS1pbmZvLWl0ZW1cIixlLkJVVFRPTl9QUkVWPVwiYWxpY2UtY2Fyb3VzZWxfX3ByZXYtYnRuXCIsZS5CVVRUT05fUFJFVl9XUkFQUEVSPVwiYWxpY2UtY2Fyb3VzZWxfX3ByZXYtYnRuLXdyYXBwZXJcIixlLkJVVFRPTl9QUkVWX0lURU09XCJhbGljZS1jYXJvdXNlbF9fcHJldi1idG4taXRlbVwiLGUuQlVUVE9OX05FWFQ9XCJhbGljZS1jYXJvdXNlbF9fbmV4dC1idG5cIixlLkJVVFRPTl9ORVhUX1dSQVBQRVI9XCJhbGljZS1jYXJvdXNlbF9fbmV4dC1idG4td3JhcHBlclwiLGUuQlVUVE9OX05FWFRfSVRFTT1cImFsaWNlLWNhcm91c2VsX19uZXh0LWJ0bi1pdGVtXCJ9KENsYXNzbmFtZXM9ZXhwb3J0cy5DbGFzc25hbWVzfHwoZXhwb3J0cy5DbGFzc25hbWVzPXt9KSksZnVuY3Rpb24oZSl7ZS5BQ1RJVkU9XCJfX2FjdGl2ZVwiLGUuSU5BQ1RJVkU9XCJfX2luYWN0aXZlXCIsZS5DTE9ORUQ9XCJfX2Nsb25lZFwiLGUuQ1VTVE9NPVwiX19jdXN0b21cIixlLlBBVVNFPVwiX19wYXVzZVwiLGUuU0VQQVJBVE9SPVwiX19zZXBhcmF0b3JcIixlLlNTUj1cIl9fc3NyXCIsZS5UQVJHRVQ9XCJfX3RhcmdldFwifShNb2RpZmllcnM9ZXhwb3J0cy5Nb2RpZmllcnN8fChleHBvcnRzLk1vZGlmaWVycz17fSkpOyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuZGVmYXVsdFByb3BzPXZvaWQgMDt2YXIgdHlwZXNfMT1yZXF1aXJlKFwiLi90eXBlc1wiKTtleHBvcnRzLmRlZmF1bHRQcm9wcz17YWN0aXZlSW5kZXg6MCxhbmltYXRpb25EdXJhdGlvbjo0MDAsYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb246XCJlYXNlXCIsYW5pbWF0aW9uVHlwZTp0eXBlc18xLkFuaW1hdGlvblR5cGUuU0xJREUsYXV0b0hlaWdodDohMSxhdXRvV2lkdGg6ITEsYXV0b1BsYXk6ITEsYXV0b1BsYXlDb250cm9sczohMSxhdXRvUGxheURpcmVjdGlvbjp0eXBlc18xLkF1dG9wbGF5RGlyZWN0aW9uLkxUUixhdXRvUGxheUludGVydmFsOjQwMCxhdXRvUGxheVN0cmF0ZWd5OnR5cGVzXzEuQXV0b1BsYXlTdHJhdGVneS5ERUZBVUxULGNoaWxkcmVuOnZvaWQgMCxjb250cm9sc1N0cmF0ZWd5OnR5cGVzXzEuQ29udHJvbHNTdHJhdGVneS5ERUZBVUxULGRpc2FibGVCdXR0b25zQ29udHJvbHM6ITEsZGlzYWJsZURvdHNDb250cm9sczohMSxkaXNhYmxlU2xpZGVJbmZvOiEwLGluZmluaXRlOiExLGlubmVyV2lkdGg6dm9pZCAwLGl0ZW1zOnZvaWQgMCxrZXlib2FyZE5hdmlnYXRpb246ITEsbW91c2VUcmFja2luZzohMSxuYW1lOlwiXCIscGFkZGluZ0xlZnQ6MCxwYWRkaW5nUmlnaHQ6MCxyZXNwb25zaXZlOnZvaWQgMCxzd2lwZURlbHRhOjIwLHN3aXBlRXh0cmFQYWRkaW5nOjIwMCxzc3JTaWxlbnRNb2RlOiEwLHRvdWNoVHJhY2tpbmc6ITAsdG91Y2hNb3ZlRGVmYXVsdEV2ZW50czohMCxvbkluaXRpYWxpemVkOmZ1bmN0aW9uKCl7fSxvblJlc2l6ZWQ6ZnVuY3Rpb24oKXt9LG9uUmVzaXplRXZlbnQ6dm9pZCAwLG9uU2xpZGVDaGFuZ2U6ZnVuY3Rpb24oKXt9LG9uU2xpZGVDaGFuZ2VkOmZ1bmN0aW9uKCl7fX07IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9fYXNzaWduPWZ1bmN0aW9uKCl7cmV0dXJuKF9fYXNzaWduPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKG8pe2Zvcih2YXIgdCxyPTEsaT1hcmd1bWVudHMubGVuZ3RoO3I8aTtyKyspZm9yKHZhciBzIGluIHQ9YXJndW1lbnRzW3JdKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LHMpJiYob1tzXT10W3NdKTtyZXR1cm4gb30pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sbWFwUGFydGlhbENvb3Jkcz0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5tYXBQb3NpdGlvbkNvb3Jkcz1leHBvcnRzLm1hcFBhcnRpYWxDb29yZHM9dm9pZCAwLGZ1bmN0aW9uKG8pe3JldHVybiBvLm1hcChmdW5jdGlvbihvKXtyZXR1cm57d2lkdGg6by53aWR0aCxwb3NpdGlvbjowfX0pfSksbWFwUG9zaXRpb25Db29yZHM9KGV4cG9ydHMubWFwUGFydGlhbENvb3Jkcz1tYXBQYXJ0aWFsQ29vcmRzLGZ1bmN0aW9uKG8sdCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PTApLG8ubWFwKGZ1bmN0aW9uKG8pe3JldHVybiBvLnBvc2l0aW9uPnQ/X19hc3NpZ24oX19hc3NpZ24oe30sbykse3Bvc2l0aW9uOnR9KTpvfSl9KTtleHBvcnRzLm1hcFBvc2l0aW9uQ29vcmRzPW1hcFBvc2l0aW9uQ29vcmRzOyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuaXNWZXJ0aWNhbFRvdWNobW92ZURldGVjdGVkPWV4cG9ydHMuZ2V0RmFkZW91dEFuaW1hdGlvblBvc2l0aW9uPWV4cG9ydHMuZ2V0RmFkZW91dEFuaW1hdGlvbkluZGV4PWV4cG9ydHMuZ2V0U3dpcGVUb3VjaGVuZEluZGV4PWV4cG9ydHMuZ2V0U3dpcGVUb3VjaGVuZFBvc2l0aW9uPWV4cG9ydHMuZ2V0U3dpcGVUcmFuc2Zvcm1hdGlvbkN1cnNvcj1leHBvcnRzLmdldFRyYW5zZm9ybWF0aW9uSXRlbUluZGV4PWV4cG9ydHMuZ2V0U3dpcGVTaGlmdFZhbHVlPWV4cG9ydHMuZ2V0SXRlbUNvb3Jkcz1leHBvcnRzLmdldElzTGVmdERpcmVjdGlvbj1leHBvcnRzLnNob3VsZFJlY2FsY3VsYXRlU3dpcGVQb3NpdGlvbj1leHBvcnRzLmdldFN3aXBlTGltaXRNYXg9ZXhwb3J0cy5nZXRTd2lwZUxpbWl0TWluPWV4cG9ydHMuc2hvdWxkQ2FuY2VsU2xpZGVBbmltYXRpb249ZXhwb3J0cy5zaG91bGRSZWNhbGN1bGF0ZVNsaWRlSW5kZXg9ZXhwb3J0cy5nZXRVcGRhdGVTbGlkZVBvc2l0aW9uSW5kZXg9ZXhwb3J0cy5nZXRBY3RpdmVJbmRleD1leHBvcnRzLmdldFN0YXJ0SW5kZXg9ZXhwb3J0cy5nZXRTaGlmdEluZGV4PXZvaWQgMDt2YXIgZ2V0U2hpZnRJbmRleD1mdW5jdGlvbihlLHQpe3JldHVybihlPXZvaWQgMD09PWU/MDplKSsodD12b2lkIDA9PT10PzA6dCl9LGdldFN0YXJ0SW5kZXg9KGV4cG9ydHMuZ2V0U2hpZnRJbmRleD1nZXRTaGlmdEluZGV4LGZ1bmN0aW9uKGUsdCl7aWYodm9pZCAwPT09ZSYmKGU9MCksdD12b2lkIDA9PT10PzA6dCl7aWYodDw9ZSlyZXR1cm4gdC0xO2lmKDA8ZSlyZXR1cm4gZX1yZXR1cm4gMH0pLGdldEFjdGl2ZUluZGV4PShleHBvcnRzLmdldFN0YXJ0SW5kZXg9Z2V0U3RhcnRJbmRleCxmdW5jdGlvbihlKXt2YXIgdD1lLnN0YXJ0SW5kZXgsdD12b2lkIDA9PT10PzA6dCxpPWUuaXRlbXNDb3VudCxlPWUuaW5maW5pdGU7cmV0dXJuIHZvaWQgMCE9PWUmJmU/dDooMCxleHBvcnRzLmdldFN0YXJ0SW5kZXgpKHQsdm9pZCAwPT09aT8wOmkpfSksZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4PShleHBvcnRzLmdldEFjdGl2ZUluZGV4PWdldEFjdGl2ZUluZGV4LGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU8MD90LTE6dDw9ZT8wOmV9KSxzaG91bGRSZWNhbGN1bGF0ZVNsaWRlSW5kZXg9KGV4cG9ydHMuZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4PWdldFVwZGF0ZVNsaWRlUG9zaXRpb25JbmRleCxmdW5jdGlvbihlLHQpe3JldHVybiBlPDB8fHQ8PWV9KSxzaG91bGRDYW5jZWxTbGlkZUFuaW1hdGlvbj0oZXhwb3J0cy5zaG91bGRSZWNhbGN1bGF0ZVNsaWRlSW5kZXg9c2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4LGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU8MHx8dDw9ZX0pLGdldFN3aXBlTGltaXRNaW49KGV4cG9ydHMuc2hvdWxkQ2FuY2VsU2xpZGVBbmltYXRpb249c2hvdWxkQ2FuY2VsU2xpZGVBbmltYXRpb24sZnVuY3Rpb24oZSx0KXt2YXIgaT1lLml0ZW1zT2Zmc2V0LGU9ZS50cmFuc2Zvcm1hdGlvblNldCxlPXZvaWQgMD09PWU/W106ZSxvPXQuaW5maW5pdGUsdD10LnN3aXBlRXh0cmFQYWRkaW5nO3JldHVybiBvPyhlW3ZvaWQgMD09PWk/MDppXXx8e30pLnBvc2l0aW9uOihvPShlWzBdfHx7fSkud2lkdGgsTWF0aC5taW4odm9pZCAwPT09dD8wOnQsdm9pZCAwPT09bz8wOm8pKX0pLGdldFN3aXBlTGltaXRNYXg9KGV4cG9ydHMuZ2V0U3dpcGVMaW1pdE1pbj1nZXRTd2lwZUxpbWl0TWluLGZ1bmN0aW9uKGUsdCl7dmFyIGk9dC5pbmZpbml0ZSx0PXQuc3dpcGVFeHRyYVBhZGRpbmcsdD12b2lkIDA9PT10PzA6dCxvPWUuaXRlbXNDb3VudCxuPWUuaXRlbXNPZmZzZXQscj1lLml0ZW1zSW5TbGlkZSxyPXZvaWQgMD09PXI/MTpyLGU9ZS50cmFuc2Zvcm1hdGlvblNldCxlPXZvaWQgMD09PWU/W106ZTtyZXR1cm4gaT8oZVsodm9pZCAwPT09bz8xOm8pKygwLGV4cG9ydHMuZ2V0U2hpZnRJbmRleCkocix2b2lkIDA9PT1uPzA6bildfHx7fSkucG9zaXRpb258fDA6KDAsZXhwb3J0cy5nZXRJdGVtQ29vcmRzKSgtcixlKS5wb3NpdGlvbit0fSksc2hvdWxkUmVjYWxjdWxhdGVTd2lwZVBvc2l0aW9uPShleHBvcnRzLmdldFN3aXBlTGltaXRNYXg9Z2V0U3dpcGVMaW1pdE1heCxmdW5jdGlvbihlLHQsaSl7cmV0dXJuLXQ8PWV8fE1hdGguYWJzKGUpPj1pfSksZ2V0SXNMZWZ0RGlyZWN0aW9uPShleHBvcnRzLnNob3VsZFJlY2FsY3VsYXRlU3dpcGVQb3NpdGlvbj1zaG91bGRSZWNhbGN1bGF0ZVN3aXBlUG9zaXRpb24sZnVuY3Rpb24oZSl7cmV0dXJuKGU9dm9pZCAwPT09ZT8wOmUpPDB9KSxnZXRJdGVtQ29vcmRzPShleHBvcnRzLmdldElzTGVmdERpcmVjdGlvbj1nZXRJc0xlZnREaXJlY3Rpb24sZnVuY3Rpb24oZSx0KXtyZXR1cm4odD12b2lkIDA9PT10P1tdOnQpLnNsaWNlKGU9dm9pZCAwPT09ZT8wOmUpWzBdfHx7cG9zaXRpb246MCx3aWR0aDowfX0pLGdldFN3aXBlU2hpZnRWYWx1ZT0oZXhwb3J0cy5nZXRJdGVtQ29vcmRzPWdldEl0ZW1Db29yZHMsZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9MCksdm9pZCAwPT09dCYmKHQ9W10pLCgwLGV4cG9ydHMuZ2V0SXRlbUNvb3JkcykoZSx0KS5wb3NpdGlvbn0pLGdldFRyYW5zZm9ybWF0aW9uSXRlbUluZGV4PShleHBvcnRzLmdldFN3aXBlU2hpZnRWYWx1ZT1nZXRTd2lwZVNoaWZ0VmFsdWUsZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9MCksKGU9dm9pZCAwPT09ZT9bXTplKS5maW5kSW5kZXgoZnVuY3Rpb24oZSl7cmV0dXJuIGUucG9zaXRpb24+PU1hdGguYWJzKHQpfSl9KSxnZXRTd2lwZVRyYW5zZm9ybWF0aW9uQ3Vyc29yPShleHBvcnRzLmdldFRyYW5zZm9ybWF0aW9uSXRlbUluZGV4PWdldFRyYW5zZm9ybWF0aW9uSXRlbUluZGV4LGZ1bmN0aW9uKGUsdCxpKXt2b2lkIDA9PT1lJiYoZT1bXSksdm9pZCAwPT09dCYmKHQ9MCksdm9pZCAwPT09aSYmKGk9MCk7ZT0oMCxleHBvcnRzLmdldFRyYW5zZm9ybWF0aW9uSXRlbUluZGV4KShlLHQpO3JldHVybigwLGV4cG9ydHMuZ2V0SXNMZWZ0RGlyZWN0aW9uKShpKT9lOmUtMX0pLGdldFN3aXBlVG91Y2hlbmRQb3NpdGlvbj0oZXhwb3J0cy5nZXRTd2lwZVRyYW5zZm9ybWF0aW9uQ3Vyc29yPWdldFN3aXBlVHJhbnNmb3JtYXRpb25DdXJzb3IsZnVuY3Rpb24oZSx0LGkpe3ZvaWQgMD09PWkmJihpPTApO3ZhciBvPWUuaW5maW5pdGUsbj1lLmF1dG9XaWR0aCxyPWUuaXNTdGFnZUNvbnRlbnRQYXJ0aWFsLHM9ZS5zd2lwZUFsbG93ZWRQb3NpdGlvbk1heCxlPWUudHJhbnNmb3JtYXRpb25TZXQsaT0oMCxleHBvcnRzLmdldFN3aXBlVHJhbnNmb3JtYXRpb25DdXJzb3IpKGUsaSx0KSx0PSgwLGV4cG9ydHMuZ2V0SXRlbUNvb3JkcykoaSxlKS5wb3NpdGlvbjtpZighbyl7aWYobiYmcilyZXR1cm4gMDtpZihzPHQpcmV0dXJuLXN9cmV0dXJuLXR9KSxnZXRTd2lwZVRvdWNoZW5kSW5kZXg9KGV4cG9ydHMuZ2V0U3dpcGVUb3VjaGVuZFBvc2l0aW9uPWdldFN3aXBlVG91Y2hlbmRQb3NpdGlvbixmdW5jdGlvbihlLHQpe3ZhciBpPXQudHJhbnNmb3JtYXRpb25TZXQsbz10Lml0ZW1zSW5TbGlkZSxuPXQuaXRlbXNPZmZzZXQscj10Lml0ZW1zQ291bnQscz10LmluZmluaXRlLGQ9dC5pc1N0YWdlQ29udGVudFBhcnRpYWwsYT10LmFjdGl2ZUluZGV4LHQ9dC50cmFuc2xhdGUzZDtyZXR1cm4gc3x8IWQmJnQhPT1NYXRoLmFicyhlKT8oZD0oMCxleHBvcnRzLmdldFRyYW5zZm9ybWF0aW9uSXRlbUluZGV4KShpLGUpLHM/ZDwodD0oMCxleHBvcnRzLmdldFNoaWZ0SW5kZXgpKG8sbikpP3Itby1uK2Q6dCtyPD1kP2QtKHQrcik6ZC10OmQpOmF9KSxnZXRGYWRlb3V0QW5pbWF0aW9uSW5kZXg9KGV4cG9ydHMuZ2V0U3dpcGVUb3VjaGVuZEluZGV4PWdldFN3aXBlVG91Y2hlbmRJbmRleCxmdW5jdGlvbihlKXt2YXIgdD1lLmluZmluaXRlLGk9ZS5hY3RpdmVJbmRleCxlPWUuaXRlbXNJblNsaWRlO3JldHVybiB0P2krZTppfSksZ2V0RmFkZW91dEFuaW1hdGlvblBvc2l0aW9uPShleHBvcnRzLmdldEZhZGVvdXRBbmltYXRpb25JbmRleD1nZXRGYWRlb3V0QW5pbWF0aW9uSW5kZXgsZnVuY3Rpb24oZSx0KXt2YXIgaT10LmFjdGl2ZUluZGV4LHQ9dC5zdGFnZVdpZHRoO3JldHVybiBlPGk/KGktZSkqLXR8fDA6KGUtaSkqdHx8MH0pLGlzVmVydGljYWxUb3VjaG1vdmVEZXRlY3RlZD0oZXhwb3J0cy5nZXRGYWRlb3V0QW5pbWF0aW9uUG9zaXRpb249Z2V0RmFkZW91dEFuaW1hdGlvblBvc2l0aW9uLGZ1bmN0aW9uKGUsdCxpKXtyZXR1cm4gZTwoaT12b2lkIDA9PT1pPzA6aSl8fGU8LjEqdH0pO2V4cG9ydHMuaXNWZXJ0aWNhbFRvdWNobW92ZURldGVjdGVkPWlzVmVydGljYWxUb3VjaG1vdmVEZXRlY3RlZDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX19hc3NpZ249ZnVuY3Rpb24oKXtyZXR1cm4oX19hc3NpZ249T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlLHI9MSxuPWFyZ3VtZW50cy5sZW5ndGg7cjxuO3IrKylmb3IodmFyIG8gaW4gZT1hcmd1bWVudHNbcl0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxjb21tb25fMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5nZXRUcmFuc2Zvcm1NYXRyaXg9ZXhwb3J0cy5nZXRUcmFuc2xhdGVYUHJvcGVydHk9ZXhwb3J0cy5nZXRUb3VjaG1vdmVUcmFuc2xhdGVQb3NpdGlvbj1leHBvcnRzLmdldFRyYW5zbGF0ZTNkUHJvcGVydHk9ZXhwb3J0cy5nZXRSZW5kZXJTdGFnZUl0ZW1TdHlsZXM9ZXhwb3J0cy5nZXRSZW5kZXJTdGFnZVN0eWxlcz1leHBvcnRzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eT1leHBvcnRzLmdldFJlbmRlcldyYXBwZXJTdHlsZXM9ZXhwb3J0cy5hbmltYXRlPWV4cG9ydHMuc2hvdWxkSGFuZGxlUmVzaXplRXZlbnQ9ZXhwb3J0cy5nZXRFbGVtZW50Rmlyc3RDaGlsZD1leHBvcnRzLmdldEVsZW1lbnRDdXJzb3I9ZXhwb3J0cy5nZXRBdXRvaGVpZ2h0UHJvcGVydHk9ZXhwb3J0cy5nZXRFbGVtZW50RGltZW5zaW9ucz1leHBvcnRzLmdldEl0ZW1XaWR0aD1leHBvcnRzLmNyZWF0ZURlZmF1bHRUcmFuc2Zvcm1hdGlvblNldD1leHBvcnRzLmNyZWF0ZUF1dG93aWR0aFRyYW5zZm9ybWF0aW9uU2V0PWV4cG9ydHMuaXNFbGVtZW50PWV4cG9ydHMuY3JlYXRlQ2xvbmVzPWV4cG9ydHMuZ2V0SXRlbXNPZmZzZXQ9ZXhwb3J0cy5nZXRJdGVtc0NvdW50PWV4cG9ydHMuZ2V0U2xpZGVzPXZvaWQgMCxyZXF1aXJlKFwiLi9jb21tb25cIikpLG1hcHBlcnNfMT1yZXF1aXJlKFwiLi9tYXBwZXJzXCIpLG1hdGhfMT1yZXF1aXJlKFwiLi9tYXRoXCIpLGdldFNsaWRlcz1mdW5jdGlvbih0KXt2YXIgZT10LmNoaWxkcmVuLHQ9dC5pdGVtcztyZXR1cm4gZT9lLmxlbmd0aD9lOltlXTp2b2lkIDA9PT10P1tdOnR9LGdldEl0ZW1zQ291bnQ9KGV4cG9ydHMuZ2V0U2xpZGVzPWdldFNsaWRlcyxmdW5jdGlvbih0KXtyZXR1cm4oMCxleHBvcnRzLmdldFNsaWRlcykodCkubGVuZ3RofSksZ2V0SXRlbXNPZmZzZXQ9KGV4cG9ydHMuZ2V0SXRlbXNDb3VudD1nZXRJdGVtc0NvdW50LGZ1bmN0aW9uKHQpe3ZhciBlPXQuaW5maW5pdGUscj10LnBhZGRpbmdSaWdodCx0PXQucGFkZGluZ0xlZnQ7cmV0dXJuIGUmJih0fHxyKT8xOjB9KSxjcmVhdGVDbG9uZXM9KGV4cG9ydHMuZ2V0SXRlbXNPZmZzZXQ9Z2V0SXRlbXNPZmZzZXQsZnVuY3Rpb24odCl7dmFyIGUscixuLG8saT0oMCxleHBvcnRzLmdldFNsaWRlcykodCk7cmV0dXJuIHQuaW5maW5pdGU/KGU9KDAsZXhwb3J0cy5nZXRJdGVtc0NvdW50KSh0KSxvPSgwLGV4cG9ydHMuZ2V0SXRlbXNPZmZzZXQpKHQpLHQ9KDAsY29tbW9uXzEuZ2V0SXRlbXNJblNsaWRlKShlLHQpLG49TWF0aC5taW4odCxlKStvLHI9aS5zbGljZSgwLG4pLG49aS5zbGljZSgtbiksbyYmdD09PWUmJihvPWlbMF0sdD1pLnNsaWNlKC0xKVswXSxuLnVuc2hpZnQodCksci5wdXNoKG8pKSxuLmNvbmNhdChpLHIpKTppfSksaXNFbGVtZW50PShleHBvcnRzLmNyZWF0ZUNsb25lcz1jcmVhdGVDbG9uZXMsZnVuY3Rpb24odCl7dHJ5e3JldHVybiB0IGluc3RhbmNlb2YgRWxlbWVudHx8dCBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudH1jYXRjaCh0KXtyZXR1cm4hMX19KSxjcmVhdGVBdXRvd2lkdGhUcmFuc2Zvcm1hdGlvblNldD0oZXhwb3J0cy5pc0VsZW1lbnQ9aXNFbGVtZW50LGZ1bmN0aW9uKHQsaSxlKXt2b2lkIDA9PT1pJiYoaT0wKSx2b2lkIDA9PT1lJiYoZT0hMSk7dmFyIHM9MCxhPSEwLHI9W107cmV0dXJuKDAsZXhwb3J0cy5pc0VsZW1lbnQpKHQpJiYocj1BcnJheS5mcm9tKChudWxsPT10P3ZvaWQgMDp0LmNoaWxkcmVuKXx8W10pLnJlZHVjZShmdW5jdGlvbih0LGUscil7dmFyIG49MCxyPXItMSxvPXRbcl0sZT1nZXRFbGVtZW50RGltZW5zaW9ucyhudWxsPT1lP3ZvaWQgMDplLmZpcnN0Q2hpbGQpLndpZHRoLGU9dm9pZCAwPT09ZT8wOmU7cmV0dXJuIGE9KHMrPWUpPD1pLG8mJihuPTA9PXI/by53aWR0aDpvLndpZHRoK28ucG9zaXRpb24pLHQucHVzaCh7cG9zaXRpb246bix3aWR0aDplfSksdH0sW10pLGV8fChyPWE/KDAsbWFwcGVyc18xLm1hcFBhcnRpYWxDb29yZHMpKHIpOih0PXMtaSwoMCxtYXBwZXJzXzEubWFwUG9zaXRpb25Db29yZHMpKHIsdCkpKSkse2Nvb3JkczpyLGNvbnRlbnQ6cyxwYXJ0aWFsOmF9fSksY3JlYXRlRGVmYXVsdFRyYW5zZm9ybWF0aW9uU2V0PShleHBvcnRzLmNyZWF0ZUF1dG93aWR0aFRyYW5zZm9ybWF0aW9uU2V0PWNyZWF0ZUF1dG93aWR0aFRyYW5zZm9ybWF0aW9uU2V0LGZ1bmN0aW9uKHQsbyxlLHIpe3ZvaWQgMD09PXImJihyPSExKTt2YXIgaT0wLHM9ITAsbj1bXSxhPSgwLGV4cG9ydHMuZ2V0SXRlbVdpZHRoKShvLGUpO3JldHVybiBuPXQucmVkdWNlKGZ1bmN0aW9uKHQsZSxyKXt2YXIgbj0wLHI9dFtyLTFdO3JldHVybiBzPShpKz1hKTw9byxyJiYobj1hK3IucG9zaXRpb258fDApLHQucHVzaCh7d2lkdGg6YSxwb3NpdGlvbjpufSksdH0sW10pLHtjb29yZHM6bj1yP246cz8oMCxtYXBwZXJzXzEubWFwUGFydGlhbENvb3Jkcykobik6KGU9aS1vLCgwLG1hcHBlcnNfMS5tYXBQb3NpdGlvbkNvb3JkcykobixlKSksY29udGVudDppLHBhcnRpYWw6c319KSxnZXRJdGVtV2lkdGg9KGV4cG9ydHMuY3JlYXRlRGVmYXVsdFRyYW5zZm9ybWF0aW9uU2V0PWNyZWF0ZURlZmF1bHRUcmFuc2Zvcm1hdGlvblNldCxmdW5jdGlvbih0LGUpe3JldHVybiAwPGU/dC9lOnR9KTtmdW5jdGlvbiBnZXRFbGVtZW50RGltZW5zaW9ucyh0KXtyZXR1cm4gdCYmdC5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/e3dpZHRoOih0PXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLndpZHRoLGhlaWdodDp0LmhlaWdodH06e3dpZHRoOjAsaGVpZ2h0OjB9fWV4cG9ydHMuZ2V0SXRlbVdpZHRoPWdldEl0ZW1XaWR0aCxleHBvcnRzLmdldEVsZW1lbnREaW1lbnNpb25zPWdldEVsZW1lbnREaW1lbnNpb25zO3ZhciBnZXRBdXRvaGVpZ2h0UHJvcGVydHk9ZnVuY3Rpb24odCxlLHIpe3ZhciBlPSgwLGV4cG9ydHMuZ2V0RWxlbWVudEN1cnNvcikoZSxyKSxyPSgwLGV4cG9ydHMuZ2V0RWxlbWVudEZpcnN0Q2hpbGQpKHQsZSk7aWYoKDAsZXhwb3J0cy5pc0VsZW1lbnQpKHIpKXJldHVybiB0PXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHIpLGU9cGFyc2VGbG9hdCh0Lm1hcmdpblRvcCksdD1wYXJzZUZsb2F0KHQubWFyZ2luQm90dG9tKSxNYXRoLmNlaWwoci5vZmZzZXRIZWlnaHQrZSt0KX0sZ2V0RWxlbWVudEN1cnNvcj0oZXhwb3J0cy5nZXRBdXRvaGVpZ2h0UHJvcGVydHk9Z2V0QXV0b2hlaWdodFByb3BlcnR5LGZ1bmN0aW9uKHQsZSl7dmFyIHI9ZS5hY3RpdmVJbmRleCxlPWUuaXRlbXNJblNsaWRlO3JldHVybiB0LmluZmluaXRlP3IrZSsoMCxleHBvcnRzLmdldEl0ZW1zT2Zmc2V0KSh0KTpyfSksZ2V0RWxlbWVudEZpcnN0Q2hpbGQ9KGV4cG9ydHMuZ2V0RWxlbWVudEN1cnNvcj1nZXRFbGVtZW50Q3Vyc29yLGZ1bmN0aW9uKHQsZSl7dD10JiZ0LmNoaWxkcmVufHxbXTtyZXR1cm4gdFtlXSYmdFtlXS5maXJzdENoaWxkfHxudWxsfSk7ZnVuY3Rpb24gc2hvdWxkSGFuZGxlUmVzaXplRXZlbnQodCxlLHIpe3JldHVybihlPXZvaWQgMD09PWU/e306ZSkud2lkdGghPT0ocj12b2lkIDA9PT1yP3t9OnIpLndpZHRofWZ1bmN0aW9uIGFuaW1hdGUodCxlKXt2YXIgZT1lfHx7fSxyPWUucG9zaXRpb24scj12b2lkIDA9PT1yPzA6cixuPWUuYW5pbWF0aW9uRHVyYXRpb24sbj12b2lkIDA9PT1uPzA6bixlPWUuYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb24sZT12b2lkIDA9PT1lP1wiZWFzZVwiOmU7cmV0dXJuIHQmJigwLGV4cG9ydHMuaXNFbGVtZW50KSh0KSYmKHQuc3R5bGUudHJhbnNpdGlvbj1cInRyYW5zZm9ybSBcIi5jb25jYXQobixcIm1zIFwiKS5jb25jYXQoZSxcIiAwbXNcIiksdC5zdHlsZS50cmFuc2Zvcm09XCJ0cmFuc2xhdGUzZChcIi5jb25jYXQocixcInB4LCAwLCAwKVwiKSksdH1leHBvcnRzLmdldEVsZW1lbnRGaXJzdENoaWxkPWdldEVsZW1lbnRGaXJzdENoaWxkLGV4cG9ydHMuc2hvdWxkSGFuZGxlUmVzaXplRXZlbnQ9c2hvdWxkSGFuZGxlUmVzaXplRXZlbnQsZXhwb3J0cy5hbmltYXRlPWFuaW1hdGU7dmFyIGdldFJlbmRlcldyYXBwZXJTdHlsZXM9ZnVuY3Rpb24odCxlLHIpe3ZhciBuPXR8fHt9LG89bi5wYWRkaW5nTGVmdCxpPW4ucGFkZGluZ1JpZ2h0LHM9bi5hdXRvSGVpZ2h0LG49bi5hbmltYXRpb25EdXJhdGlvbixzPXM/KDAsZXhwb3J0cy5nZXRBdXRvaGVpZ2h0UHJvcGVydHkpKHIsdCxlKTp2b2lkIDA7cmV0dXJue2hlaWdodDpzLHRyYW5zaXRpb246cz9cImhlaWdodCBcIi5jb25jYXQobixcIm1zXCIpOnZvaWQgMCxwYWRkaW5nTGVmdDpcIlwiLmNvbmNhdChvLFwicHhcIikscGFkZGluZ1JpZ2h0OlwiXCIuY29uY2F0KGksXCJweFwiKX19LGdldFRyYW5zaXRpb25Qcm9wZXJ0eT0oZXhwb3J0cy5nZXRSZW5kZXJXcmFwcGVyU3R5bGVzPWdldFJlbmRlcldyYXBwZXJTdHlsZXMsZnVuY3Rpb24odCl7dmFyIHQ9dHx8e30sZT10LmFuaW1hdGlvbkR1cmF0aW9uLHQ9dC5hbmltYXRpb25FYXNpbmdGdW5jdGlvbix0PXZvaWQgMD09PXQ/XCJlYXNlXCI6dDtyZXR1cm5cInRyYW5zZm9ybSBcIi5jb25jYXQodm9pZCAwPT09ZT8wOmUsXCJtcyBcIikuY29uY2F0KHQsXCIgMG1zXCIpfSksZ2V0UmVuZGVyU3RhZ2VTdHlsZXM9KGV4cG9ydHMuZ2V0VHJhbnNpdGlvblByb3BlcnR5PWdldFRyYW5zaXRpb25Qcm9wZXJ0eSxmdW5jdGlvbih0LGUpe3Q9KHR8fHt9KS50cmFuc2xhdGUzZCx0PVwidHJhbnNsYXRlM2QoXCIuY29uY2F0KC0odm9pZCAwPT09dD8wOnQpLFwicHgsIDAsIDApXCIpO3JldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSxlKSx7dHJhbnNmb3JtOnR9KX0pLGdldFJlbmRlclN0YWdlSXRlbVN0eWxlcz0oZXhwb3J0cy5nZXRSZW5kZXJTdGFnZVN0eWxlcz1nZXRSZW5kZXJTdGFnZVN0eWxlcyxmdW5jdGlvbih0LGUpe3ZhciByPWUudHJhbnNmb3JtYXRpb25TZXQsbj1lLmZhZGVvdXRBbmltYXRpb25JbmRleCxvPWUuZmFkZW91dEFuaW1hdGlvblBvc2l0aW9uLGk9ZS5mYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZyxlPWUuYW5pbWF0aW9uRHVyYXRpb24scj0oclt0XXx8e30pLndpZHRoO3JldHVybiBpJiZuPT09dD97dHJhbnNmb3JtOlwidHJhbnNsYXRlWChcIi5jb25jYXQobyxcInB4KVwiKSxhbmltYXRpb25EdXJhdGlvbjpcIlwiLmNvbmNhdChlLFwibXNcIiksd2lkdGg6XCJcIi5jb25jYXQocixcInB4XCIpfTp7d2lkdGg6cn19KSxnZXRUcmFuc2xhdGUzZFByb3BlcnR5PShleHBvcnRzLmdldFJlbmRlclN0YWdlSXRlbVN0eWxlcz1nZXRSZW5kZXJTdGFnZUl0ZW1TdHlsZXMsZnVuY3Rpb24odCxlKXt2YXIgcj10LG49ZS5pbmZpbml0ZSxvPWUuaXRlbXNPZmZzZXQsaT1lLml0ZW1zSW5TbGlkZSxlPWUudHJhbnNmb3JtYXRpb25TZXQ7cmV0dXJuKCh2b2lkIDA9PT1lP1tdOmUpW3I9bj90KygwLG1hdGhfMS5nZXRTaGlmdEluZGV4KSh2b2lkIDA9PT1pPzA6aSx2b2lkIDA9PT1vPzA6byk6cl18fHt9KS5wb3NpdGlvbnx8MH0pLGdldFRvdWNobW92ZVRyYW5zbGF0ZVBvc2l0aW9uPShleHBvcnRzLmdldFRyYW5zbGF0ZTNkUHJvcGVydHk9Z2V0VHJhbnNsYXRlM2RQcm9wZXJ0eSxmdW5jdGlvbih0LGUpe3JldHVybi0oZS1NYXRoLmZsb29yKHQpKX0pO2Z1bmN0aW9uIGdldFRyYW5zbGF0ZVhQcm9wZXJ0eSh0KXt0PWdldFRyYW5zZm9ybU1hdHJpeCh0KSx0PXQmJnRbNF18fFwiXCI7cmV0dXJuIE51bWJlcih0KX1mdW5jdGlvbiBnZXRUcmFuc2Zvcm1NYXRyaXgodCl7cmV0dXJuIHQmJigwLGV4cG9ydHMuaXNFbGVtZW50KSh0KSYmd2luZG93LmdldENvbXB1dGVkU3R5bGUodCkudHJhbnNmb3JtLm1hdGNoKC8oLT9bMC05Ll0rKS9nKXx8W119ZXhwb3J0cy5nZXRUb3VjaG1vdmVUcmFuc2xhdGVQb3NpdGlvbj1nZXRUb3VjaG1vdmVUcmFuc2xhdGVQb3NpdGlvbixleHBvcnRzLmdldFRyYW5zbGF0ZVhQcm9wZXJ0eT1nZXRUcmFuc2xhdGVYUHJvcGVydHksZXhwb3J0cy5nZXRUcmFuc2Zvcm1NYXRyaXg9Z2V0VHJhbnNmb3JtTWF0cml4OyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuY2FsY3VsYXRlSW5pdGlhbFN0YXRlPWV4cG9ydHMuZ2V0SXRlbXNJblNsaWRlPWV4cG9ydHMuZ2V0SXNTdGFnZUNvbnRlbnRQYXJ0aWFsPWV4cG9ydHMuY29uY2F0Q2xhc3NuYW1lcz1leHBvcnRzLmNhblVzZURPTT12b2lkIDA7dmFyIGVsZW1lbnRzXzE9cmVxdWlyZShcIi4vZWxlbWVudHNcIiksbWF0aF8xPXJlcXVpcmUoXCIuL21hdGhcIiksY2FuVXNlRE9NPWZ1bmN0aW9uKCl7dmFyIHQ7dHJ5e3JldHVybiBCb29sZWFuKG51bGw9PSh0PW51bGw9PT13aW5kb3d8fHZvaWQgMD09PXdpbmRvdz92b2lkIDA6d2luZG93LmRvY3VtZW50KT92b2lkIDA6dC5jcmVhdGVFbGVtZW50KX1jYXRjaCh0KXtyZXR1cm4hMX19LGNvbmNhdENsYXNzbmFtZXM9KGV4cG9ydHMuY2FuVXNlRE9NPWNhblVzZURPTSxmdW5jdGlvbigpe2Zvcih2YXIgdD1bXSxlPTA7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl0W2VdPWFyZ3VtZW50c1tlXTtyZXR1cm4gdC5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIil9KSxnZXRJc1N0YWdlQ29udGVudFBhcnRpYWw9KGV4cG9ydHMuY29uY2F0Q2xhc3NuYW1lcz1jb25jYXRDbGFzc25hbWVzLGZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9MCksdm9pZCAwPT09biYmKG49MCksISh0PXZvaWQgMCE9PXQmJnQpJiZuPD1lfSksZ2V0SXRlbXNJblNsaWRlPShleHBvcnRzLmdldElzU3RhZ2VDb250ZW50UGFydGlhbD1nZXRJc1N0YWdlQ29udGVudFBhcnRpYWwsZnVuY3Rpb24obix0KXt2YXIgaSxhPTEsbz10LnJlc3BvbnNpdmUsZT10LmF1dG9XaWR0aCxzPXQuaW5maW5pdGUsdD10LmlubmVyV2lkdGg7cmV0dXJuIHZvaWQgMCE9PWUmJmU/dm9pZCAwIT09cyYmcz9uOmE6KG8mJihlPU9iamVjdC5rZXlzKG8pKS5sZW5ndGgmJih0fHwoMCxleHBvcnRzLmNhblVzZURPTSkoKSkmJihpPXZvaWQgMD09PXQ/d2luZG93LmlubmVyV2lkdGg6dCxlLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGU7TnVtYmVyKHQpPD1pJiYoZT0odD1vW3RdKS5pdGVtcyx0PXQuaXRlbXNGaXQsYT1cImNvbnRhaW5cIj09PSh2b2lkIDA9PT10P1wiZmlsbFwiOnQpP2U6TWF0aC5taW4oZSxuKSl9KSksYXx8MSl9KSxjYWxjdWxhdGVJbml0aWFsU3RhdGU9KGV4cG9ydHMuZ2V0SXRlbXNJblNsaWRlPWdldEl0ZW1zSW5TbGlkZSxmdW5jdGlvbih0LGUsbil7dm9pZCAwPT09biYmKG49ITEpO3ZhciBpLGEsbz10LmFuaW1hdGlvbkR1cmF0aW9uLG89dm9pZCAwPT09bz8wOm8scz10LmluZmluaXRlLHM9dm9pZCAwIT09cyYmcyxyPXQuYXV0b1BsYXkscj12b2lkIDAhPT1yJiZyLGw9dC5hdXRvV2lkdGgsbD12b2lkIDAhPT1sJiZsLG09KDAsZWxlbWVudHNfMS5jcmVhdGVDbG9uZXMpKHQpLGQ9KDAsZWxlbWVudHNfMS5nZXRUcmFuc2l0aW9uUHJvcGVydHkpKCksYz0oMCxlbGVtZW50c18xLmdldEl0ZW1zQ291bnQpKHQpLHU9KDAsZWxlbWVudHNfMS5nZXRJdGVtc09mZnNldCkodCksZj0oMCxleHBvcnRzLmdldEl0ZW1zSW5TbGlkZSkoYyx0KSxnPSgwLG1hdGhfMS5nZXRTdGFydEluZGV4KSh0LmFjdGl2ZUluZGV4LGMpLGc9KDAsbWF0aF8xLmdldEFjdGl2ZUluZGV4KSh7c3RhcnRJbmRleDpnLGl0ZW1zQ291bnQ6YyxpbmZpbml0ZTpzfSksST0oMCxlbGVtZW50c18xLmdldEVsZW1lbnREaW1lbnNpb25zKShlKS53aWR0aCxTPShhPShlPShsPyhpPShlPSgwLGVsZW1lbnRzXzEuY3JlYXRlQXV0b3dpZHRoVHJhbnNmb3JtYXRpb25TZXQpKGUsSSxzKSkuY29vcmRzLGE9ZS5jb250ZW50LGUpOihpPShlPSgwLGVsZW1lbnRzXzEuY3JlYXRlRGVmYXVsdFRyYW5zZm9ybWF0aW9uU2V0KShtLEksZixzKSkuY29vcmRzLGE9ZS5jb250ZW50LGUpKS5wYXJ0aWFsLGEpLCgwLG1hdGhfMS5nZXRJdGVtQ29vcmRzKSgtZixpPWkpLnBvc2l0aW9uKSxwPSgwLG1hdGhfMS5nZXRTd2lwZUxpbWl0TWluKSh7aXRlbXNPZmZzZXQ6dSx0cmFuc2Zvcm1hdGlvblNldDppfSx0KSx0PSgwLG1hdGhfMS5nZXRTd2lwZUxpbWl0TWF4KSh7aXRlbXNDb3VudDpjLGl0ZW1zT2Zmc2V0OnUsaXRlbXNJblNsaWRlOmYsdHJhbnNmb3JtYXRpb25TZXQ6aX0sdCksdj0oMCxtYXRoXzEuZ2V0U3dpcGVTaGlmdFZhbHVlKShjLGkpO3JldHVybnthY3RpdmVJbmRleDpnLGF1dG9XaWR0aDpsLGFuaW1hdGlvbkR1cmF0aW9uOm8sY2xvbmVzOm0saW5maW5pdGU6cyxpdGVtc0NvdW50OmMsaXRlbXNJblNsaWRlOmYsaXRlbXNPZmZzZXQ6dSx0cmFuc2xhdGUzZDooMCxlbGVtZW50c18xLmdldFRyYW5zbGF0ZTNkUHJvcGVydHkpKGcse2l0ZW1zSW5TbGlkZTpmLGl0ZW1zT2Zmc2V0OnUsdHJhbnNmb3JtYXRpb25TZXQ6aSxhdXRvV2lkdGg6bCxpbmZpbml0ZTpzfSksc3RhZ2VXaWR0aDpJLHN0YWdlQ29udGVudFdpZHRoOmEsaW5pdGlhbFN0YWdlSGVpZ2h0OjAsaXNTdGFnZUNvbnRlbnRQYXJ0aWFsOmUsaXNBdXRvUGxheWluZzpCb29sZWFuKHIpLGlzQXV0b1BsYXlDYW5jZWxlZE9uQWN0aW9uOiExLHRyYW5zZm9ybWF0aW9uU2V0OmksdHJhbnNpdGlvbjpkLGZhZGVvdXRBbmltYXRpb25JbmRleDpudWxsLGZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbjpudWxsLGZhZGVvdXRBbmltYXRpb25Qcm9jZXNzaW5nOiExLHN3aXBlTGltaXRNaW46cCxzd2lwZUxpbWl0TWF4OnQsc3dpcGVBbGxvd2VkUG9zaXRpb25NYXg6Uyxzd2lwZVNoaWZ0VmFsdWU6dixjYW5Vc2VEb206bnx8KDAsZXhwb3J0cy5jYW5Vc2VET00pKCl9fSk7ZXhwb3J0cy5jYWxjdWxhdGVJbml0aWFsU3RhdGU9Y2FsY3VsYXRlSW5pdGlhbFN0YXRlOyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuaXNDbG9uZWRJdGVtPWV4cG9ydHMuaXNUYXJnZXRJdGVtPWV4cG9ydHMuaXNBY3RpdmVJdGVtPWV4cG9ydHMuZ2V0UmVuZGVyU3RhZ2VJdGVtQ2xhc3Nlcz12b2lkIDA7dmFyIHR5cGVzXzE9cmVxdWlyZShcIi4uL3R5cGVzXCIpLGNvbW1vbl8xPXJlcXVpcmUoXCIuL2NvbW1vblwiKSxtYXRoXzE9cmVxdWlyZShcIi4vbWF0aFwiKSxnZXRSZW5kZXJTdGFnZUl0ZW1DbGFzc2VzPWZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09ZSYmKGU9MCk7dmFyIHM9dC5mYWRlb3V0QW5pbWF0aW9uSW5kZXgsaT0oMCxleHBvcnRzLmlzQWN0aXZlSXRlbSkoZSx0KT90eXBlc18xLk1vZGlmaWVycy5BQ1RJVkU6XCJcIixuPSgwLGV4cG9ydHMuaXNDbG9uZWRJdGVtKShlLHQpP3R5cGVzXzEuTW9kaWZpZXJzLkNMT05FRDpcIlwiLHQ9KDAsZXhwb3J0cy5pc1RhcmdldEl0ZW0pKGUsdCk/dHlwZXNfMS5Nb2RpZmllcnMuVEFSR0VUOlwiXCIsZT1lPT09cz90eXBlc18xLkNsYXNzbmFtZXMuQU5JTUFURUQ6XCJcIjtyZXR1cm4oMCxjb21tb25fMS5jb25jYXRDbGFzc25hbWVzKSh0eXBlc18xLkNsYXNzbmFtZXMuU1RBR0VfSVRFTSxpLG4sdCxlKX0saXNBY3RpdmVJdGVtPShleHBvcnRzLmdldFJlbmRlclN0YWdlSXRlbUNsYXNzZXM9Z2V0UmVuZGVyU3RhZ2VJdGVtQ2xhc3NlcyxmdW5jdGlvbihlLHQpe3ZvaWQgMD09PWUmJihlPTApO3ZhciBzPXQuYWN0aXZlSW5kZXgsaT10Lml0ZW1zSW5TbGlkZSxuPXQuaXRlbXNPZmZzZXQscj10LmluZmluaXRlLHQ9dC5hdXRvV2lkdGgsbz0oMCxtYXRoXzEuZ2V0U2hpZnRJbmRleCkoaSxuKTtyZXR1cm4gdCYmcj9lLW89PT1zK246KHQ9cytvLHI/dDw9ZSYmZTx0K2k6czw9ZSYmZTx0KX0pLGlzVGFyZ2V0SXRlbT0oZXhwb3J0cy5pc0FjdGl2ZUl0ZW09aXNBY3RpdmVJdGVtLGZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09ZSYmKGU9MCk7dmFyIHM9dC5hY3RpdmVJbmRleCxpPXQuaXRlbXNJblNsaWRlLG49dC5pdGVtc09mZnNldCxyPXQuaW5maW5pdGUsdD10LmF1dG9XaWR0aCxpPSgwLG1hdGhfMS5nZXRTaGlmdEluZGV4KShpLG4pO3JldHVybiByP3QmJnI/ZS1pPT09cytuOmU9PT1zK2k6ZT09PXN9KSxpc0Nsb25lZEl0ZW09KGV4cG9ydHMuaXNUYXJnZXRJdGVtPWlzVGFyZ2V0SXRlbSxmdW5jdGlvbihlLHQpe3ZvaWQgMD09PWUmJihlPTApO3ZhciBzPXQuaXRlbXNJblNsaWRlLGk9dC5pdGVtc09mZnNldCxuPXQuaXRlbXNDb3VudCxyPXQuaW5maW5pdGUsdD10LmF1dG9XaWR0aDtyZXR1cm4hIXImJih0JiZyP2U8c3x8bi0xK3M8ZTplPCh0PSgwLG1hdGhfMS5nZXRTaGlmdEluZGV4KShzLGkpKXx8bi0xK3Q8ZSl9KTtleHBvcnRzLmlzQ2xvbmVkSXRlbT1pc0Nsb25lZEl0ZW07IiwiXCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZGVib3VuY2UobixpKXt2b2lkIDA9PT1pJiYoaT0wKTtmdW5jdGlvbiB1KCl7ZCYmKGNsZWFyVGltZW91dChkKSxkPXZvaWQgMCl9dmFyIGQ9dm9pZCAwO3JldHVybltmdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLG89W10sdD0wO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspb1t0XT1hcmd1bWVudHNbdF07dSgpLGQ9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLmFwcGx5KGUsbyksZD12b2lkIDB9LGkpfSx1XX1PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmRlYm91bmNlPXZvaWQgMCxleHBvcnRzLmRlYm91bmNlPWRlYm91bmNlOyIsIlwidXNlIHN0cmljdFwiO2Z1bmN0aW9uIGRlYnVnKCl7Zm9yKHZhciBlPVtdLG89MDtvPGFyZ3VtZW50cy5sZW5ndGg7bysrKWVbb109YXJndW1lbnRzW29dO1wiZGV2ZWxvcG1lbnRcIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZjb25zb2xlLmRlYnVnLmFwcGx5KGNvbnNvbGUsZSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5kZWJ1Zz12b2lkIDAsZXhwb3J0cy5kZWJ1Zz1kZWJ1ZzsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmdldFNsaWRlSXRlbUluZm89ZXhwb3J0cy5nZXRTbGlkZUluZm89ZXhwb3J0cy5nZXRTbGlkZUluZGV4Rm9yTXVsdGlwbGVJdGVtcz1leHBvcnRzLmdldFNsaWRlSW5kZXhGb3JOb25NdWx0aXBsZUl0ZW1zPWV4cG9ydHMuZ2V0QWN0aXZlU2xpZGVEb3RzTGVuZ3RoPWV4cG9ydHMuZ2V0QWN0aXZlU2xpZGVJbmRleD12b2lkIDA7dmFyIGdldEFjdGl2ZVNsaWRlSW5kZXg9ZnVuY3Rpb24oZSx0KXt2YXIgdD10fHx7fSxpPXQuYWN0aXZlSW5kZXgsbz10Lml0ZW1zSW5TbGlkZSx0PXQuaXRlbXNDb3VudCxpPWkrbztyZXR1cm4gMT09PW8/KDAsZXhwb3J0cy5nZXRTbGlkZUluZGV4Rm9yTm9uTXVsdGlwbGVJdGVtcykoaSxvLHQpOigwLGV4cG9ydHMuZ2V0U2xpZGVJbmRleEZvck11bHRpcGxlSXRlbXMpKGksbyx0LGUpfSxnZXRBY3RpdmVTbGlkZURvdHNMZW5ndGg9KGV4cG9ydHMuZ2V0QWN0aXZlU2xpZGVJbmRleD1nZXRBY3RpdmVTbGlkZUluZGV4LGZ1bmN0aW9uKGUsdCl7dmFyIGk7cmV0dXJuIHZvaWQgMD09PXQmJih0PTEpLChlPXZvaWQgMD09PWU/MDplKSYmdD8oaT1NYXRoLmZsb29yKGUvdCksZSV0PT0wP2ktMTppKTowfSksZ2V0U2xpZGVJbmRleEZvck5vbk11bHRpcGxlSXRlbXM9KGV4cG9ydHMuZ2V0QWN0aXZlU2xpZGVEb3RzTGVuZ3RoPWdldEFjdGl2ZVNsaWRlRG90c0xlbmd0aCxmdW5jdGlvbihlLHQsaSl7cmV0dXJuIGU8dD9pLXQ6aTxlPzA6ZS0xfSksZ2V0U2xpZGVJbmRleEZvck11bHRpcGxlSXRlbXM9KGV4cG9ydHMuZ2V0U2xpZGVJbmRleEZvck5vbk11bHRpcGxlSXRlbXM9Z2V0U2xpZGVJbmRleEZvck5vbk11bHRpcGxlSXRlbXMsZnVuY3Rpb24oZSx0LGksbyl7dmFyIGw9KDAsZXhwb3J0cy5nZXRBY3RpdmVTbGlkZURvdHNMZW5ndGgpKGksdCk7cmV0dXJuIGU9PT1pK3Q/MDpvfHxlPHQmJjAhPT1lP2w6MD09PWU/aSV0PT0wP2w6bC0xOjA8dD9NYXRoLmZsb29yKGUvdCktMTowfSksZ2V0U2xpZGVJbmZvPShleHBvcnRzLmdldFNsaWRlSW5kZXhGb3JNdWx0aXBsZUl0ZW1zPWdldFNsaWRlSW5kZXhGb3JNdWx0aXBsZUl0ZW1zLGZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09dCYmKHQ9MCk7ZT0oZT12b2lkIDA9PT1lPzA6ZSkrMTtyZXR1cm4gZTwxP2U9dDp0PGUmJihlPTEpLHtpdGVtOmUsaXRlbXNDb3VudDp0fX0pLGdldFNsaWRlSXRlbUluZm89KGV4cG9ydHMuZ2V0U2xpZGVJbmZvPWdldFNsaWRlSW5mbyxmdW5jdGlvbihlKXt2YXIgZT1lfHx7fSx0PWUuaXRlbXNJblNsaWRlLGk9ZS5hY3RpdmVJbmRleCxvPWUuaW5maW5pdGUsbD1lLml0ZW1zQ291bnQ7cmV0dXJuIGUuaXNTdGFnZUNvbnRlbnRQYXJ0aWFsP3tpc1ByZXZTbGlkZURpc2FibGVkOiEwLGlzTmV4dFNsaWRlRGlzYWJsZWQ6ITB9Ontpc1ByZXZTbGlkZURpc2FibGVkOiExPT09byYmMD09PWksaXNOZXh0U2xpZGVEaXNhYmxlZDohMT09PW8mJmwtdDw9aX19KTtleHBvcnRzLmdldFNsaWRlSXRlbUluZm89Z2V0U2xpZGVJdGVtSW5mbzsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLnNob3VsZENhbmNlbEF1dG9QbGF5T25Ib3Zlcj1leHBvcnRzLnNob3VsZENhbmNlbEF1dG9QbGF5T25BY3Rpb249ZXhwb3J0cy5nZXRJdGVtSW5kZXhGb3JEb3ROYXZpZ2F0aW9uPWV4cG9ydHMuY2hlY2tJc1RoZUxhc3REb3RJbmRleD1leHBvcnRzLmdldERvdHNOYXZpZ2F0aW9uTGVuZ3RoPWV4cG9ydHMuaGFzRG90Rm9yRWFjaFNsaWRlPWV4cG9ydHMuaXNTdHJhdGVneT1leHBvcnRzLnNob3VsZERpc2FibGVCdXR0b25zPWV4cG9ydHMuc2hvdWxkRGlzYWJsZURvdHM9ZXhwb3J0cy5zaG91bGREaXNhYmxlQ29udHJvbHM9dm9pZCAwO3ZhciB0eXBlc18xPXJlcXVpcmUoXCIuLi90eXBlc1wiKTtmdW5jdGlvbiBzaG91bGREaXNhYmxlQ29udHJvbHModCxvKXt2YXIgdD0odHx8e30pLmNvbnRyb2xzU3RyYXRlZ3ksbz1vfHx7fSxlPW8uaXRlbXNJblNsaWRlLHM9by5pdGVtc0NvdW50LG89by5hdXRvV2lkdGg7aWYoKDAsZXhwb3J0cy5pc1N0cmF0ZWd5KSh0LHR5cGVzXzEuQ29udHJvbHNTdHJhdGVneS5SRVNQT05TSVZFKSlyZXR1cm4hbyYmZT09PXN9ZnVuY3Rpb24gc2hvdWxkRGlzYWJsZURvdHModCxvKXtyZXR1cm4gdC5kaXNhYmxlRG90c0NvbnRyb2xzfHxzaG91bGREaXNhYmxlQ29udHJvbHModCxvKX1mdW5jdGlvbiBzaG91bGREaXNhYmxlQnV0dG9ucyh0LG8pe3JldHVybiB0LmRpc2FibGVCdXR0b25zQ29udHJvbHN8fCF0LmluZmluaXRlJiZzaG91bGREaXNhYmxlQ29udHJvbHModCxvKX1leHBvcnRzLnNob3VsZERpc2FibGVDb250cm9scz1zaG91bGREaXNhYmxlQ29udHJvbHMsZXhwb3J0cy5zaG91bGREaXNhYmxlRG90cz1zaG91bGREaXNhYmxlRG90cyxleHBvcnRzLnNob3VsZERpc2FibGVCdXR0b25zPXNob3VsZERpc2FibGVCdXR0b25zO3ZhciBpc1N0cmF0ZWd5PWZ1bmN0aW9uKHQsbyl7cmV0dXJuIHZvaWQgMD09PXQmJih0PVwiXCIpLHZvaWQgMD09PW8mJihvPVwiXCIpLEJvb2xlYW4odCYmdC5pbmNsdWRlcyhvKSl9LGhhc0RvdEZvckVhY2hTbGlkZT0oZXhwb3J0cy5pc1N0cmF0ZWd5PWlzU3RyYXRlZ3ksZnVuY3Rpb24odCxvKXtyZXR1cm4gdHx8KDAsZXhwb3J0cy5pc1N0cmF0ZWd5KShvLHR5cGVzXzEuQ29udHJvbHNTdHJhdGVneS5BTFRFUk5BVEUpfSksZ2V0RG90c05hdmlnYXRpb25MZW5ndGg9KGV4cG9ydHMuaGFzRG90Rm9yRWFjaFNsaWRlPWhhc0RvdEZvckVhY2hTbGlkZSxmdW5jdGlvbih0LG8sZSl7cmV0dXJuIHZvaWQgMD09PXQmJih0PTApLHZvaWQgMD09PW8mJihvPTEpLChlPXZvaWQgMCE9PWUmJmUpP3Q6MCE9PU51bWJlcihvKSYmTWF0aC5jZWlsKHQvbyl8fDB9KSxjaGVja0lzVGhlTGFzdERvdEluZGV4PShleHBvcnRzLmdldERvdHNOYXZpZ2F0aW9uTGVuZ3RoPWdldERvdHNOYXZpZ2F0aW9uTGVuZ3RoLGZ1bmN0aW9uKHQsbyxlKXtyZXR1cm4hbyYmdD09PWUtMX0pLGdldEl0ZW1JbmRleEZvckRvdE5hdmlnYXRpb249KGV4cG9ydHMuY2hlY2tJc1RoZUxhc3REb3RJbmRleD1jaGVja0lzVGhlTGFzdERvdEluZGV4LGZ1bmN0aW9uKHQsbyxlLHMpe3JldHVybihvP2Utczp0KnMpfHwwfSksc2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkFjdGlvbj0oZXhwb3J0cy5nZXRJdGVtSW5kZXhGb3JEb3ROYXZpZ2F0aW9uPWdldEl0ZW1JbmRleEZvckRvdE5hdmlnYXRpb24sZnVuY3Rpb24odCl7cmV0dXJuKHQ9dm9pZCAwPT09dD9cIlwiOnQpPT09dHlwZXNfMS5BdXRvUGxheVN0cmF0ZWd5LkFDVElPTnx8dD09PXR5cGVzXzEuQXV0b1BsYXlTdHJhdGVneS5BTEx9KSxzaG91bGRDYW5jZWxBdXRvUGxheU9uSG92ZXI9KGV4cG9ydHMuc2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkFjdGlvbj1zaG91bGRDYW5jZWxBdXRvUGxheU9uQWN0aW9uLGZ1bmN0aW9uKHQpe3JldHVybih0PXZvaWQgMD09PXQ/XCJcIjp0KT09PXR5cGVzXzEuQXV0b1BsYXlTdHJhdGVneS5ERUZBVUxUfHx0PT09dHlwZXNfMS5BdXRvUGxheVN0cmF0ZWd5LkFMTH0pO2V4cG9ydHMuc2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkhvdmVyPXNob3VsZENhbmNlbEF1dG9QbGF5T25Ib3ZlcjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX19jcmVhdGVCaW5kaW5nPU9iamVjdC5jcmVhdGU/ZnVuY3Rpb24oZSxyLHQsbyl7dm9pZCAwPT09byYmKG89dCk7dmFyIHA9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpO3AmJihcImdldFwiaW4gcD9yLl9fZXNNb2R1bGU6IXAud3JpdGFibGUmJiFwLmNvbmZpZ3VyYWJsZSl8fChwPXtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiByW3RdfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8scCl9OmZ1bmN0aW9uKGUscix0LG8pe2Vbbz12b2lkIDA9PT1vP3Q6b109clt0XX0sX19leHBvcnRTdGFyPWZ1bmN0aW9uKGUscil7Zm9yKHZhciB0IGluIGUpXCJkZWZhdWx0XCI9PT10fHxPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocix0KXx8X19jcmVhdGVCaW5kaW5nKHIsZSx0KX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NvbW1vblwiKSxleHBvcnRzKSxfX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZWxlbWVudHNcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NsYXNzbmFtZXNcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3RpbWVyc1wiKSxleHBvcnRzKSxfX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbWF0aFwiKSxleHBvcnRzKSxfX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZGVidWdcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3JlbmRlclwiKSxleHBvcnRzKSxfX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY29udHJvbHNcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL21hcHBlcnNcIiksZXhwb3J0cyk7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9faW1wb3J0RGVmYXVsdD1mdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19LHJlYWN0XzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuU2xpZGVJbmZvPXZvaWQgMCxfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKSksdHlwZXNfMT1yZXF1aXJlKFwiLi4vdHlwZXNcIiksdXRpbHNfMT1yZXF1aXJlKFwiLi4vdXRpbHNcIiksU2xpZGVJbmZvPWZ1bmN0aW9uKGUpe3ZhciB0PWUuYWN0aXZlSW5kZXgscz1lLml0ZW1zQ291bnQsZT1lLnJlbmRlclNsaWRlSW5mbyx0PSgwLHV0aWxzXzEuZ2V0U2xpZGVJbmZvKSh0LHMpLml0ZW07cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZT9yZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLlNMSURFX0lORk99LGUoe2l0ZW06dCxpdGVtc0NvdW50OnN9KSk6KGU9KDAsdXRpbHNfMS5jb25jYXRDbGFzc25hbWVzKSh0eXBlc18xLkNsYXNzbmFtZXMuU0xJREVfSU5GT19JVEVNLHR5cGVzXzEuTW9kaWZpZXJzLlNFUEFSQVRPUikscmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5TTElERV9JTkZPfSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5TTElERV9JTkZPX0lURU19LHQpLHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtjbGFzc05hbWU6ZX0sXCIvXCIpLHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLlNMSURFX0lORk9fSVRFTX0scykpKX07ZXhwb3J0cy5TbGlkZUluZm89U2xpZGVJbmZvOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2ltcG9ydERlZmF1bHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fSxyZWFjdF8xPShPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLlN0YWdlSXRlbT12b2lkIDAsX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSkpLFN0YWdlSXRlbT1mdW5jdGlvbihlKXt2YXIgdD1lLml0ZW0scj1lLmNsYXNzTmFtZSxlPWUuc3R5bGVzO3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIse3N0eWxlOmUsY2xhc3NOYW1lOnJ9LHQpfTtleHBvcnRzLlN0YWdlSXRlbT1TdGFnZUl0ZW07IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9faW1wb3J0RGVmYXVsdD1mdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19LHJlYWN0XzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuRG90c05hdmlnYXRpb249dm9pZCAwLF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpKSx0eXBlc18xPXJlcXVpcmUoXCIuLi90eXBlc1wiKSx1dGlsc18xPXJlcXVpcmUoXCIuLi91dGlsc1wiKSxEb3RzTmF2aWdhdGlvbj1mdW5jdGlvbihlKXt2YXIgYT1lLnN0YXRlLG49ZS5vbkNsaWNrLHI9ZS5vbk1vdXNlRW50ZXIsbD1lLm9uTW91c2VMZWF2ZSx0PWUuY29udHJvbHNTdHJhdGVneSx1PWUucmVuZGVyRG90c0l0ZW0sYz1hLml0ZW1zQ291bnQsXz1hLml0ZW1zSW5TbGlkZSxkPWEuaW5maW5pdGUsZT1hLmF1dG9XaWR0aCxtPWEuYWN0aXZlSW5kZXgsdj0oMCx1dGlsc18xLmdldFNsaWRlSXRlbUluZm8pKGEpLmlzTmV4dFNsaWRlRGlzYWJsZWQsZj0oMCx1dGlsc18xLmhhc0RvdEZvckVhY2hTbGlkZSkoZSx0KSxEPSgwLHV0aWxzXzEuZ2V0RG90c05hdmlnYXRpb25MZW5ndGgpKGMsXyxmKTtyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLkRPVFN9LEFycmF5LmZyb20oe2xlbmd0aDpjfSkubWFwKGZ1bmN0aW9uKGUsdCl7dmFyIGkscyxvO2lmKHQ8RClyZXR1cm4gcz0oMCx1dGlsc18xLmNoZWNrSXNUaGVMYXN0RG90SW5kZXgpKHQsQm9vbGVhbihkKSxEKSxpPSgwLHV0aWxzXzEuZ2V0SXRlbUluZGV4Rm9yRG90TmF2aWdhdGlvbikodCxzLGMsXykscz0oMCx1dGlsc18xLmdldEFjdGl2ZVNsaWRlSW5kZXgpKHYsYSksZiYmKChzPW0pPDA/cz1jLTE6Yzw9bSYmKHM9MCksaT10KSxzPXM9PT10P3R5cGVzXzEuTW9kaWZpZXJzLkFDVElWRTpcIlwiLG89dT90eXBlc18xLk1vZGlmaWVycy5DVVNUT006XCJcIixvPSgwLHV0aWxzXzEuY29uY2F0Q2xhc3NuYW1lcykodHlwZXNfMS5DbGFzc25hbWVzLkRPVFNfSVRFTSxzLG8pLHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIix7a2V5OlwiZG90LWl0ZW0tXCIuY29uY2F0KHQpLG9uTW91c2VFbnRlcjpyLG9uTW91c2VMZWF2ZTpsLG9uQ2xpY2s6ZnVuY3Rpb24oKXtyZXR1cm4gbihpKX0sY2xhc3NOYW1lOm99LHUmJnUoe2lzQWN0aXZlOkJvb2xlYW4ocyksYWN0aXZlSW5kZXg6dH0pKX0pKX07ZXhwb3J0cy5Eb3RzTmF2aWdhdGlvbj1Eb3RzTmF2aWdhdGlvbjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX19pbXBvcnREZWZhdWx0PWZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX0scmVhY3RfMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5QbGF5UGF1c2VCdXR0b249dm9pZCAwLF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpKSx0eXBlc18xPXJlcXVpcmUoXCIuLi90eXBlc1wiKSx1dGlsc18xPXJlcXVpcmUoXCIuLi91dGlsc1wiKSxQbGF5UGF1c2VCdXR0b249ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pc1BsYXlpbmcsYT1lLm9uQ2xpY2ssZT1lLnJlbmRlclBsYXlQYXVzZUJ1dHRvbjtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP3JlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuUExBWV9CVE4sb25DbGljazphfSxlKHtpc1BsYXlpbmc6dH0pKTooZT10P3R5cGVzXzEuTW9kaWZpZXJzLlBBVVNFOlwiXCIsdD0oMCx1dGlsc18xLmNvbmNhdENsYXNzbmFtZXMpKHR5cGVzXzEuQ2xhc3NuYW1lcy5QTEFZX0JUTl9JVEVNLGUpLHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuUExBWV9CVE59LHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuUExBWV9CVE5fV1JBUFBFUn0scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7b25DbGljazphLGNsYXNzTmFtZTp0fSkpKSl9O2V4cG9ydHMuUGxheVBhdXNlQnV0dG9uPVBsYXlQYXVzZUJ1dHRvbjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX19pbXBvcnREZWZhdWx0PWZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX0scmVhY3RfMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5QcmV2TmV4dEJ1dHRvbj12b2lkIDAsX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSkpLHR5cGVzXzE9cmVxdWlyZShcIi4uL3R5cGVzXCIpLHV0aWxzXzE9cmVxdWlyZShcIi4uL3V0aWxzXCIpLFByZXZOZXh0QnV0dG9uPWZ1bmN0aW9uKGUpe3ZhciB0LHM9ZS5uYW1lLGE9ZS5pc0Rpc2FibGVkLHI9ZS5vbkNsaWNrLG49ZS5yZW5kZXJQcmV2QnV0dG9uLGU9ZS5yZW5kZXJOZXh0QnV0dG9uO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4/cmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fUFJFVixvbkNsaWNrOnJ9LG4oe2lzRGlzYWJsZWQ6YX0pKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP3JlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX05FWFQsb25DbGljazpyfSxlKHtpc0Rpc2FibGVkOmF9KSk6KGU9KG49XCJwcmV2XCI9PT1zKT9cIjxcIjpcIj5cIixzPW4/dHlwZXNfMS5DbGFzc25hbWVzLkJVVFRPTl9QUkVWOnR5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fTkVYVCx0PW4/dHlwZXNfMS5DbGFzc25hbWVzLkJVVFRPTl9QUkVWX1dSQVBQRVI6dHlwZXNfMS5DbGFzc25hbWVzLkJVVFRPTl9ORVhUX1dSQVBQRVIsbj1uP3R5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fUFJFVl9JVEVNOnR5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fTkVYVF9JVEVNLGE9YT90eXBlc18xLk1vZGlmaWVycy5JTkFDVElWRTpcIlwiLG49KDAsdXRpbHNfMS5jb25jYXRDbGFzc25hbWVzKShuLGEpLHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpzfSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dH0scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIse2NsYXNzTmFtZTpuLG9uQ2xpY2s6ZnVuY3Rpb24oZSl7cmV0dXJuIHIoZSl9fSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIix7XCJkYXRhLWFyZWFcIjplfSkpKSkpfTtleHBvcnRzLlByZXZOZXh0QnV0dG9uPVByZXZOZXh0QnV0dG9uOyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuUHJldk5leHRCdXR0b249ZXhwb3J0cy5QbGF5UGF1c2VCdXR0b249ZXhwb3J0cy5Eb3RzTmF2aWdhdGlvbj1leHBvcnRzLlN0YWdlSXRlbT1leHBvcnRzLlNsaWRlSW5mbz12b2lkIDA7dmFyIFNsaWRlSW5mb18xPXJlcXVpcmUoXCIuL1NsaWRlSW5mb1wiKSxTdGFnZUl0ZW1fMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJTbGlkZUluZm9cIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gU2xpZGVJbmZvXzEuU2xpZGVJbmZvfX0pLHJlcXVpcmUoXCIuL1N0YWdlSXRlbVwiKSksRG90c05hdmlnYXRpb25fMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJTdGFnZUl0ZW1cIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gU3RhZ2VJdGVtXzEuU3RhZ2VJdGVtfX0pLHJlcXVpcmUoXCIuL0RvdHNOYXZpZ2F0aW9uXCIpKSxQbGF5UGF1c2VCdXR0b25fMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJEb3RzTmF2aWdhdGlvblwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBEb3RzTmF2aWdhdGlvbl8xLkRvdHNOYXZpZ2F0aW9ufX0pLHJlcXVpcmUoXCIuL1BsYXlQYXVzZUJ1dHRvblwiKSksUHJldk5leHRCdXR0b25fMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJQbGF5UGF1c2VCdXR0b25cIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gUGxheVBhdXNlQnV0dG9uXzEuUGxheVBhdXNlQnV0dG9ufX0pLHJlcXVpcmUoXCIuL1ByZXZOZXh0QnV0dG9uXCIpKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIlByZXZOZXh0QnV0dG9uXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFByZXZOZXh0QnV0dG9uXzEuUHJldk5leHRCdXR0b259fSk7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9fZXh0ZW5kcz1mdW5jdGlvbigpe3ZhciBuPWZ1bmN0aW9uKHQsZSl7cmV0dXJuKG49T2JqZWN0LnNldFByb3RvdHlwZU9mfHwoe19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5P2Z1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX06ZnVuY3Rpb24odCxlKXtmb3IodmFyIGkgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxpKSYmKHRbaV09ZVtpXSl9KSkodCxlKX07cmV0dXJuIGZ1bmN0aW9uKHQsZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmbnVsbCE9PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKGUpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gaSgpe3RoaXMuY29uc3RydWN0b3I9dH1uKHQsZSksdC5wcm90b3R5cGU9bnVsbD09PWU/T2JqZWN0LmNyZWF0ZShlKTooaS5wcm90b3R5cGU9ZS5wcm90b3R5cGUsbmV3IGkpfX0oKSxfX2Fzc2lnbj1mdW5jdGlvbigpe3JldHVybihfX2Fzc2lnbj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIGUsaT0xLG49YXJndW1lbnRzLmxlbmd0aDtpPG47aSsrKWZvcih2YXIgbyBpbiBlPWFyZ3VtZW50c1tpXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxvKSYmKHRbb109ZVtvXSk7cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LF9fY3JlYXRlQmluZGluZz1PYmplY3QuY3JlYXRlP2Z1bmN0aW9uKHQsZSxpLG4pe3ZvaWQgMD09PW4mJihuPWkpO3ZhciBvPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSxpKTtvJiYoXCJnZXRcImluIG8/ZS5fX2VzTW9kdWxlOiFvLndyaXRhYmxlJiYhby5jb25maWd1cmFibGUpfHwobz17ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZVtpXX19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLG8pfTpmdW5jdGlvbih0LGUsaSxuKXt0W249dm9pZCAwPT09bj9pOm5dPWVbaV19LF9fc2V0TW9kdWxlRGVmYXVsdD1PYmplY3QuY3JlYXRlP2Z1bmN0aW9uKHQsZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pfTpmdW5jdGlvbih0LGUpe3QuZGVmYXVsdD1lfSxfX2ltcG9ydFN0YXI9ZnVuY3Rpb24odCl7aWYodCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciBlPXt9O2lmKG51bGwhPXQpZm9yKHZhciBpIGluIHQpXCJkZWZhdWx0XCIhPT1pJiZPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxpKSYmX19jcmVhdGVCaW5kaW5nKGUsdCxpKTtyZXR1cm4gX19zZXRNb2R1bGVEZWZhdWx0KGUsdCksZX0sX19leHBvcnRTdGFyPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBpIGluIHQpXCJkZWZhdWx0XCI9PT1pfHxPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxpKXx8X19jcmVhdGVCaW5kaW5nKGUsdCxpKX0sX19hd2FpdGVyPWZ1bmN0aW9uKHQsYSxyLGwpe3JldHVybiBuZXcocj1yfHxQcm9taXNlKShmdW5jdGlvbihpLGUpe2Z1bmN0aW9uIG4odCl7dHJ5e3MobC5uZXh0KHQpKX1jYXRjaCh0KXtlKHQpfX1mdW5jdGlvbiBvKHQpe3RyeXtzKGwudGhyb3codCkpfWNhdGNoKHQpe2UodCl9fWZ1bmN0aW9uIHModCl7dmFyIGU7dC5kb25lP2kodC52YWx1ZSk6KChlPXQudmFsdWUpaW5zdGFuY2VvZiByP2U6bmV3IHIoZnVuY3Rpb24odCl7dChlKX0pKS50aGVuKG4sbyl9cygobD1sLmFwcGx5KHQsYXx8W10pKS5uZXh0KCkpfSl9LF9fZ2VuZXJhdG9yPWZ1bmN0aW9uKG4sbyl7dmFyIHMsYSxyLGw9e2xhYmVsOjAsc2VudDpmdW5jdGlvbigpe2lmKDEmclswXSl0aHJvdyByWzFdO3JldHVybiByWzFdfSx0cnlzOltdLG9wczpbXX0sdD17bmV4dDplKDApLHRocm93OmUoMSkscmV0dXJuOmUoMil9O3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKHRbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSksdDtmdW5jdGlvbiBlKGkpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT1baSx0XTtpZihzKXRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO2Zvcig7bDspdHJ5e2lmKHM9MSxhJiYocj0yJmVbMF0/YS5yZXR1cm46ZVswXT9hLnRocm93fHwoKHI9YS5yZXR1cm4pJiZyLmNhbGwoYSksMCk6YS5uZXh0KSYmIShyPXIuY2FsbChhLGVbMV0pKS5kb25lKXJldHVybiByO3N3aXRjaChhPTAsKGU9cj9bMiZlWzBdLHIudmFsdWVdOmUpWzBdKXtjYXNlIDA6Y2FzZSAxOnI9ZTticmVhaztjYXNlIDQ6cmV0dXJuIGwubGFiZWwrKyx7dmFsdWU6ZVsxXSxkb25lOiExfTtjYXNlIDU6bC5sYWJlbCsrLGE9ZVsxXSxlPVswXTtjb250aW51ZTtjYXNlIDc6ZT1sLm9wcy5wb3AoKSxsLnRyeXMucG9wKCk7Y29udGludWU7ZGVmYXVsdDppZighKHI9MDwocj1sLnRyeXMpLmxlbmd0aCYmcltyLmxlbmd0aC0xXSkmJig2PT09ZVswXXx8Mj09PWVbMF0pKXtsPTA7Y29udGludWV9aWYoMz09PWVbMF0mJighcnx8ZVsxXT5yWzBdJiZlWzFdPHJbM10pKWwubGFiZWw9ZVsxXTtlbHNlIGlmKDY9PT1lWzBdJiZsLmxhYmVsPHJbMV0pbC5sYWJlbD1yWzFdLHI9ZTtlbHNle2lmKCEociYmbC5sYWJlbDxyWzJdKSl7clsyXSYmbC5vcHMucG9wKCksbC50cnlzLnBvcCgpO2NvbnRpbnVlfWwubGFiZWw9clsyXSxsLm9wcy5wdXNoKGUpfX1lPW8uY2FsbChuLGwpfWNhdGNoKHQpe2U9WzYsdF0sYT0wfWZpbmFsbHl7cz1yPTB9aWYoNSZlWzBdKXRocm93IGVbMV07cmV0dXJue3ZhbHVlOmVbMF0/ZVsxXTp2b2lkIDAsZG9uZTohMH19fX0sX19pbXBvcnREZWZhdWx0PWZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX0scmVhY3RfMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSkpLHZhbmlsbGFfc3dpcGVfMT1fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZhbmlsbGEtc3dpcGVcIikpLGRlZmF1bHRQcm9wc18xPXJlcXVpcmUoXCIuL2RlZmF1bHRQcm9wc1wiKSxWaWV3cz1fX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdmlld3NcIikpLFV0aWxzPV9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi91dGlsc1wiKSksdHlwZXNfMT1yZXF1aXJlKFwiLi90eXBlc1wiKSxBbGljZUNhcm91c2VsPShfX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdHlwZXNcIiksZXhwb3J0cyksZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCh0KXt2YXIgcz1lLmNhbGwodGhpcyx0KXx8dGhpcztyZXR1cm4gcy5zd2lwZUxpc3RlbmVyPW51bGwscy5faGFuZGxlS2V5Ym9hcmRFdmVudHM9ZnVuY3Rpb24odCl7c3dpdGNoKHQuY29kZSl7Y2FzZVwiU3BhY2VcIjpyZXR1cm4gcy5wcm9wcy5hdXRvUGxheSYmcy5faGFuZGxlUGxheVBhdXNlVG9nZ2xlKCk7Y2FzZVwiQXJyb3dMZWZ0XCI6cmV0dXJuIHMuc2xpZGVQcmV2KHQpO2Nhc2VcIkFycm93UmlnaHRcIjpyZXR1cm4gcy5zbGlkZU5leHQodCl9fSxzLl9oYW5kbGVCZWZvcmVTbGlkZUVuZD1mdW5jdGlvbihvKXtyZXR1cm4gX19hd2FpdGVyKHMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3ZhciBlLGksbjtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybihpPXRoaXMuc3RhdGUsbj1pLmFjdGl2ZUluZGV4LGU9aS5pdGVtc0NvdW50LGk9aS5mYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZyxVdGlscy5zaG91bGRSZWNhbGN1bGF0ZVNsaWRlSW5kZXgobixlKSk/KG49VXRpbHMuZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4KG4sZSksWzQsdGhpcy5faGFuZGxlVXBkYXRlU2xpZGVQb3NpdGlvbihuKV0pOlszLDJdO2Nhc2UgMTpyZXR1cm4gdC5zZW50KCksWzMsNF07Y2FzZSAyOnJldHVybiBpP1s0LHRoaXMuc2V0U3RhdGUoe2ZhZGVvdXRBbmltYXRpb25JbmRleDpudWxsLGZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbjpudWxsLGZhZGVvdXRBbmltYXRpb25Qcm9jZXNzaW5nOiExfSldOlszLDRdO2Nhc2UgMzp0LnNlbnQoKSx0LmxhYmVsPTQ7Y2FzZSA0OnJldHVybiB0aGlzLl9oYW5kbGVTbGlkZUNoYW5nZWQobyksWzJdfX0pfSl9LHMuX2hhbmRsZU1vdXNlRW50ZXI9ZnVuY3Rpb24oKXt2YXIgdD1zLnByb3BzLmF1dG9QbGF5U3RyYXRlZ3k7VXRpbHMuc2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkhvdmVyKHQpJiZzLnN0YXRlLmlzQXV0b1BsYXlpbmcmJihzLmlzSG92ZXJlZD0hMCxzLl9oYW5kbGVQYXVzZSgpKX0scy5faGFuZGxlTW91c2VMZWF2ZT1mdW5jdGlvbigpe3Muc3RhdGUuaXNBdXRvUGxheWluZyYmKHMuaXNIb3ZlcmVkPSExLHMuX2hhbmRsZVBsYXkoKSl9LHMuX2hhbmRsZVBhdXNlPWZ1bmN0aW9uKCl7cy5fY2xlYXJBdXRvUGxheVRpbWVvdXQoKX0scy5faGFuZGxlUGxheVBhdXNlVG9nZ2xlPWZ1bmN0aW9uKCl7cmV0dXJuIF9fYXdhaXRlcihzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPXRoaXMuc3RhdGUuaXNBdXRvUGxheWluZyx0aGlzLmhhc1VzZXJBY3Rpb249ITAsWzQsdGhpcy5zZXRTdGF0ZSh7aXNBdXRvUGxheWluZzohZSxpc0F1dG9QbGF5Q2FuY2VsZWRPbkFjdGlvbjohMH0pXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLGU/dGhpcy5faGFuZGxlUGF1c2UoKTp0aGlzLl9oYW5kbGVQbGF5KCksWzJdfX0pfSl9LHMuX3NldFJvb3RDb21wb25lbnRSZWY9ZnVuY3Rpb24odCl7cmV0dXJuIHMucm9vdEVsZW1lbnQ9dH0scy5fc2V0U3RhZ2VDb21wb25lbnRSZWY9ZnVuY3Rpb24odCl7cmV0dXJuIHMuc3RhZ2VDb21wb25lbnQ9dH0scy5fcmVuZGVyU3RhZ2VJdGVtPWZ1bmN0aW9uKHQsZSl7dmFyIGk9VXRpbHMuZ2V0UmVuZGVyU3RhZ2VJdGVtU3R5bGVzKGUscy5zdGF0ZSksbj1VdGlscy5nZXRSZW5kZXJTdGFnZUl0ZW1DbGFzc2VzKGUscy5zdGF0ZSk7cmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFZpZXdzLlN0YWdlSXRlbSx7c3R5bGVzOmksY2xhc3NOYW1lOm4sa2V5Olwic3RhZ2UtaXRlbS1cIi5jb25jYXQoZSksaXRlbTp0fSl9LHMuX3JlbmRlclNsaWRlSW5mbz1mdW5jdGlvbigpe3ZhciB0PXMucHJvcHMucmVuZGVyU2xpZGVJbmZvLGU9cy5zdGF0ZSxpPWUuYWN0aXZlSW5kZXgsZT1lLml0ZW1zQ291bnQ7cmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFZpZXdzLlNsaWRlSW5mbyx7aXRlbXNDb3VudDplLGFjdGl2ZUluZGV4OmkscmVuZGVyU2xpZGVJbmZvOnR9KX0scy5zdGF0ZT1VdGlscy5jYWxjdWxhdGVJbml0aWFsU3RhdGUodCxudWxsKSxzLmlzSG92ZXJlZD0hMSxzLmlzQW5pbWF0aW9uRGlzYWJsZWQ9ITEscy5pc1RvdWNoTW92ZVByb2Nlc3NTdGFydGVkPSExLHMuY2FuY2VsVG91Y2hBbmltYXRpb25zPSExLHMuaGFzVXNlckFjdGlvbj0hMSxzLnJvb3RFbGVtZW50PW51bGwscy5yb290Q29tcG9uZW50RGltZW5zaW9ucz17fSxzLnN0YWdlQ29tcG9uZW50PW51bGwscy5zdGFydFRvdWNobW92ZVBvc2l0aW9uPXZvaWQgMCxzLnNsaWRlVG89cy5zbGlkZVRvLmJpbmQocykscy5zbGlkZVByZXY9cy5zbGlkZVByZXYuYmluZChzKSxzLnNsaWRlTmV4dD1zLnNsaWRlTmV4dC5iaW5kKHMpLHMuX2hhbmRsZVRvdWNobW92ZT1zLl9oYW5kbGVUb3VjaG1vdmUuYmluZChzKSxzLl9oYW5kbGVUb3VjaGVuZD1zLl9oYW5kbGVUb3VjaGVuZC5iaW5kKHMpLHMuX2hhbmRsZURvdENsaWNrPXMuX2hhbmRsZURvdENsaWNrLmJpbmQocykscy5faGFuZGxlUmVzaXplPXMuX2hhbmRsZVJlc2l6ZS5iaW5kKHMpLHQ9VXRpbHMuZGVib3VuY2Uocy5faGFuZGxlUmVzaXplLDEwMCkscy5faGFuZGxlUmVzaXplRGVib3VuY2VkPXRbMF0scy5fY2FuY2VsUmVzaXplRGVib3VuY2VkPXRbMV0sc31yZXR1cm4gX19leHRlbmRzKHQsZSksdC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3JldHVybiBfX2dlbmVyYXRvcih0aGlzLGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6cmV0dXJuWzQsdGhpcy5fc2V0SW5pdGlhbFN0YXRlKCldO2Nhc2UgMTpyZXR1cm4gdC5zZW50KCksdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKSx0aGlzLl9zZXR1cFN3aXBlSGFuZGxlcnMoKSx0aGlzLnByb3BzLmF1dG9QbGF5JiZ0aGlzLl9oYW5kbGVQbGF5KCksWzJdfX0pfSl9LHQucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMucHJvcHMsbj1pLmFjdGl2ZUluZGV4LG89aS5hbmltYXRpb25EdXJhdGlvbixzPWkuYXV0b1dpZHRoLGE9aS5jaGlsZHJlbixyPWkuaW5maW5pdGUsbD1pLml0ZW1zLHU9aS5wYWRkaW5nTGVmdCxkPWkucGFkZGluZ1JpZ2h0LGM9aS5yZXNwb25zaXZlLGg9aS5zd2lwZUV4dHJhUGFkZGluZyxwPWkubW91c2VUcmFja2luZyxfPWkuc3dpcGVEZWx0YSxtPWkudG91Y2hUcmFja2luZyxpPWkudG91Y2hNb3ZlRGVmYXVsdEV2ZW50czthJiZ0LmNoaWxkcmVuIT09YT8oYT1lLmFjdGl2ZUluZGV4LGU9X19hc3NpZ24oX19hc3NpZ24oe30sdGhpcy5wcm9wcykse2FjdGl2ZUluZGV4OmF9KSx0aGlzLl91cGRhdGVDb21wb25lbnQoZSkpOnQuYXV0b1dpZHRoIT09c3x8dC5pbmZpbml0ZSE9PXJ8fHQuaXRlbXMhPT1sfHx0LnBhZGRpbmdMZWZ0IT09dXx8dC5wYWRkaW5nUmlnaHQhPT1kfHx0LnJlc3BvbnNpdmUhPT1jfHx0LnN3aXBlRXh0cmFQYWRkaW5nIT09aD90aGlzLl91cGRhdGVDb21wb25lbnQoKToodC5hbmltYXRpb25EdXJhdGlvbiE9PW8mJnRoaXMuc2V0U3RhdGUoe2FuaW1hdGlvbkR1cmF0aW9uOm99KSx0LmFjdGl2ZUluZGV4IT09biYmdGhpcy5zbGlkZVRvKG4sdHlwZXNfMS5FdmVudFR5cGUuVVBEQVRFKSksdC5zd2lwZURlbHRhPT09XyYmdC5tb3VzZVRyYWNraW5nPT09cCYmdC50b3VjaFRyYWNraW5nPT09bSYmdC50b3VjaE1vdmVEZWZhdWx0RXZlbnRzPT09aXx8dGhpcy5fdXBkYXRlU3dpcGVQcm9wcygpLHRoaXMucHJvcHMua2V5Ym9hcmROYXZpZ2F0aW9uIT09dC5rZXlib2FyZE5hdmlnYXRpb24mJnRoaXMuX3VwZGF0ZUV2ZW50TGlzdGVuZXJzKCl9LHQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dGhpcy5fY2FuY2VsUmVzaXplRGVib3VuY2VkKCksdGhpcy5fY2FuY2VsVGltZW91dEFuaW1hdGlvbnMoKSx0aGlzLl9yZW1vdmVFdmVudExpc3RlbmVycygpfSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJldmVudE9iamVjdFwiLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnN0YXRlLGU9dC5pdGVtc0luU2xpZGUsdD10LmFjdGl2ZUluZGV4LGk9VXRpbHMuZ2V0U2xpZGVJdGVtSW5mbyh0aGlzLnN0YXRlKSxuPWkuaXNOZXh0U2xpZGVEaXNhYmxlZCxpPWkuaXNQcmV2U2xpZGVEaXNhYmxlZDtyZXR1cm57aXRlbTp0LHNsaWRlOlV0aWxzLmdldEFjdGl2ZVNsaWRlSW5kZXgobix0aGlzLnN0YXRlKSxpdGVtc0luU2xpZGU6ZSxpc05leHRTbGlkZURpc2FibGVkOm4saXNQcmV2U2xpZGVEaXNhYmxlZDppLHR5cGU6dHlwZXNfMS5FdmVudFR5cGUuQUNUSU9OfX0sZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJpc0ZhZGVvdXRBbmltYXRpb25BbGxvd2VkXCIse2dldDpmdW5jdGlvbigpe3ZhciB0PXRoaXMuc3RhdGUuaXRlbXNJblNsaWRlLGU9dGhpcy5wcm9wcyxpPWUuYW5pbWF0aW9uVHlwZSxuPWUucGFkZGluZ0xlZnQsbz1lLnBhZGRpbmdSaWdodCxlPWUuYXV0b1dpZHRoO3JldHVybiAxPT09dCYmaT09PXR5cGVzXzEuQW5pbWF0aW9uVHlwZS5GQURFT1VUJiYhKG58fG98fGUpfSxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcInRvdWNobW92ZVBvc2l0aW9uXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB2b2lkIDAhPT10aGlzLnN0YXJ0VG91Y2htb3ZlUG9zaXRpb24/dGhpcy5zdGFydFRvdWNobW92ZVBvc2l0aW9uOnRoaXMuc3RhdGUudHJhbnNsYXRlM2R9LGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwfSksdC5wcm90b3R5cGUuc2xpZGVUbz1mdW5jdGlvbih0LGUpe3ZhciBpLG4sbzt2b2lkIDA9PT10JiYodD0wKSx0aGlzLl9oYW5kbGVQYXVzZSgpLHRoaXMuaXNGYWRlb3V0QW5pbWF0aW9uQWxsb3dlZD8oaT1VdGlscy5nZXRVcGRhdGVTbGlkZVBvc2l0aW9uSW5kZXgodCx0aGlzLnN0YXRlLml0ZW1zQ291bnQpLG49VXRpbHMuZ2V0RmFkZW91dEFuaW1hdGlvblBvc2l0aW9uKGksdGhpcy5zdGF0ZSksbz1VdGlscy5nZXRGYWRlb3V0QW5pbWF0aW9uSW5kZXgodGhpcy5zdGF0ZSksdGhpcy5faGFuZGxlU2xpZGVUbyh7YWN0aXZlSW5kZXg6aSxmYWRlb3V0QW5pbWF0aW9uSW5kZXg6byxmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb246bixldmVudFR5cGU6ZX0pKTp0aGlzLl9oYW5kbGVTbGlkZVRvKHthY3RpdmVJbmRleDp0LGV2ZW50VHlwZTplfSl9LHQucHJvdG90eXBlLnNsaWRlUHJldj1mdW5jdGlvbih0KXt0aGlzLl9oYW5kbGVQYXVzZSgpLHQmJnQuaXNUcnVzdGVkJiYodGhpcy5oYXNVc2VyQWN0aW9uPSEwKTt2YXIgZSxpLHQ9dGhpcy5zdGF0ZS5hY3RpdmVJbmRleC0xO3RoaXMuaXNGYWRlb3V0QW5pbWF0aW9uQWxsb3dlZD8oZT0tdGhpcy5zdGF0ZS5zdGFnZVdpZHRoLGk9VXRpbHMuZ2V0RmFkZW91dEFuaW1hdGlvbkluZGV4KHRoaXMuc3RhdGUpLHRoaXMuX2hhbmRsZVNsaWRlVG8oe2FjdGl2ZUluZGV4OnQsZmFkZW91dEFuaW1hdGlvbkluZGV4OmksZmFkZW91dEFuaW1hdGlvblBvc2l0aW9uOmV9KSk6dGhpcy5faGFuZGxlU2xpZGVUbyh7YWN0aXZlSW5kZXg6dH0pfSx0LnByb3RvdHlwZS5zbGlkZU5leHQ9ZnVuY3Rpb24odCl7dGhpcy5faGFuZGxlUGF1c2UoKSx0JiZ0LmlzVHJ1c3RlZCYmKHRoaXMuaGFzVXNlckFjdGlvbj0hMCk7dmFyIGUsaSx0PXRoaXMuc3RhdGUuYWN0aXZlSW5kZXgrMTt0aGlzLmlzRmFkZW91dEFuaW1hdGlvbkFsbG93ZWQ/KGU9dGhpcy5zdGF0ZS5zdGFnZVdpZHRoLGk9VXRpbHMuZ2V0RmFkZW91dEFuaW1hdGlvbkluZGV4KHRoaXMuc3RhdGUpLHRoaXMuX2hhbmRsZVNsaWRlVG8oe2FjdGl2ZUluZGV4OnQsZmFkZW91dEFuaW1hdGlvbkluZGV4OmksZmFkZW91dEFuaW1hdGlvblBvc2l0aW9uOmV9KSk6dGhpcy5faGFuZGxlU2xpZGVUbyh7YWN0aXZlSW5kZXg6dH0pfSx0LnByb3RvdHlwZS5fYWRkRXZlbnRMaXN0ZW5lcnM9ZnVuY3Rpb24oKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMuX2hhbmRsZVJlc2l6ZURlYm91bmNlZCksdGhpcy5wcm9wcy5rZXlib2FyZE5hdmlnYXRpb24mJndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIix0aGlzLl9oYW5kbGVLZXlib2FyZEV2ZW50cyl9LHQucHJvdG90eXBlLl9yZW1vdmVFdmVudExpc3RlbmVycz1mdW5jdGlvbigpe3RoaXMuc3dpcGVMaXN0ZW5lciYmdGhpcy5zd2lwZUxpc3RlbmVyLmRlc3Ryb3koKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMuX2hhbmRsZVJlc2l6ZURlYm91bmNlZCksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHRoaXMuX2hhbmRsZUtleWJvYXJkRXZlbnRzKX0sdC5wcm90b3R5cGUuX3VwZGF0ZUV2ZW50TGlzdGVuZXJzPWZ1bmN0aW9uKCl7dGhpcy5wcm9wcy5rZXlib2FyZE5hdmlnYXRpb24/d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHRoaXMuX2hhbmRsZUtleWJvYXJkRXZlbnRzKTp3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsdGhpcy5faGFuZGxlS2V5Ym9hcmRFdmVudHMpfSx0LnByb3RvdHlwZS5faGFuZGxlUmVzaXplPWZ1bmN0aW9uKG8pe3JldHVybiBfX2F3YWl0ZXIodGhpcyx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7dmFyIGUsaSxuO3JldHVybiBfX2dlbmVyYXRvcih0aGlzLGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6cmV0dXJuKGk9dGhpcy5wcm9wcy5vblJlc2l6ZUV2ZW50LG49VXRpbHMuZ2V0RWxlbWVudERpbWVuc2lvbnModGhpcy5yb290RWxlbWVudCksKGl8fFV0aWxzLnNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50KShvLHRoaXMucm9vdENvbXBvbmVudERpbWVuc2lvbnMsbikpPyh0aGlzLl9jYW5jZWxUaW1lb3V0QW5pbWF0aW9ucygpLHRoaXMucm9vdENvbXBvbmVudERpbWVuc2lvbnM9bixpPXRoaXMuc3RhdGUsbj1pLml0ZW1zQ291bnQsZT1pLmlzQXV0b1BsYXlpbmcsaT1VdGlscy5nZXRVcGRhdGVTbGlkZVBvc2l0aW9uSW5kZXgodGhpcy5zdGF0ZS5hY3RpdmVJbmRleCxuKSxuPVV0aWxzLmNhbGN1bGF0ZUluaXRpYWxTdGF0ZShfX2Fzc2lnbihfX2Fzc2lnbih7fSx0aGlzLnByb3BzKSx7YWN0aXZlSW5kZXg6aX0pLHRoaXMuc3RhZ2VDb21wb25lbnQpLGk9VXRpbHMuZ2V0VHJhbnNsYXRlM2RQcm9wZXJ0eShuLmFjdGl2ZUluZGV4LG4pLG49X19hc3NpZ24oX19hc3NpZ24oe30sbikse3RyYW5zbGF0ZTNkOmksaXNBdXRvUGxheWluZzplfSksVXRpbHMuYW5pbWF0ZSh0aGlzLnN0YWdlQ29tcG9uZW50LHtwb3NpdGlvbjotaX0pLFs0LHRoaXMuc2V0U3RhdGUobildKTpbMywyXTtjYXNlIDE6dC5zZW50KCksdGhpcy5faGFuZGxlUmVzaXplZCgpLHRoaXMuaXNBbmltYXRpb25EaXNhYmxlZD0hMSxlJiZ0aGlzLl9oYW5kbGVQbGF5KCksdC5sYWJlbD0yO2Nhc2UgMjpyZXR1cm5bMl19fSl9KX0sdC5wcm90b3R5cGUuX2hhbmRsZVRvdWNobW92ZT1mdW5jdGlvbih0LGUpe3ZhciBpPWUuYWJzWSxuPWUuYWJzWCxvPWUuZGVsdGFYLGU9dGhpcy5wcm9wcy5zd2lwZURlbHRhLHM9dGhpcy5zdGF0ZSxhPXMuc3dpcGVTaGlmdFZhbHVlLHI9cy5zd2lwZUxpbWl0TWluLGw9cy5zd2lwZUxpbWl0TWF4LHU9cy5pbmZpbml0ZSxzPXMuZmFkZW91dEFuaW1hdGlvblByb2Nlc3Npbmc7aWYodGhpcy5oYXNVc2VyQWN0aW9uPSEwLCEoc3x8IXRoaXMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZCYmVXRpbHMuaXNWZXJ0aWNhbFRvdWNobW92ZURldGVjdGVkKG4saSxlKSkpe3RoaXMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZHx8KHRoaXMuX2NhbmNlbFRpbWVvdXRBbmltYXRpb25zKCksdGhpcy5fc2V0VG91Y2htb3ZlUG9zaXRpb24oKSx0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWQ9ITAsdGhpcy5pc1RvdWNoTW92ZVByb2Nlc3NTdGFydGVkPSEwLHRoaXMuX2hhbmRsZVNsaWRlQ2hhbmdlKCkpO3ZhciBkPVV0aWxzLmdldFRvdWNobW92ZVRyYW5zbGF0ZVBvc2l0aW9uKG8sdGhpcy50b3VjaG1vdmVQb3NpdGlvbik7aWYoITE9PT11KXJldHVybiByPGR8fGQ8LWw/dm9pZCAwOnZvaWQgVXRpbHMuYW5pbWF0ZSh0aGlzLnN0YWdlQ29tcG9uZW50LHtwb3NpdGlvbjpkfSk7aWYoVXRpbHMuc2hvdWxkUmVjYWxjdWxhdGVTd2lwZVBvc2l0aW9uKGQscixsKSl0cnl7IWZ1bmN0aW9uIHQoKXtVdGlscy5nZXRJc0xlZnREaXJlY3Rpb24obyk/ZCs9YTpkKz0tYTtVdGlscy5zaG91bGRSZWNhbGN1bGF0ZVN3aXBlUG9zaXRpb24oZCxyLGwpJiZ0KCl9KCl9Y2F0Y2godCl7VXRpbHMuZGVidWcodCl9VXRpbHMuYW5pbWF0ZSh0aGlzLnN0YWdlQ29tcG9uZW50LHtwb3NpdGlvbjpkfSl9fSx0LnByb3RvdHlwZS5faGFuZGxlVG91Y2hlbmQ9ZnVuY3Rpb24odCxlKXt2YXIgaSxuLG8sZT1lLmRlbHRhWDt0aGlzLl9jbGVhclRvdWNobW92ZVBvc2l0aW9uKCksdGhpcy5pc1RvdWNoTW92ZVByb2Nlc3NTdGFydGVkJiYodGhpcy5pc1RvdWNoTW92ZVByb2Nlc3NTdGFydGVkPSExLGk9dGhpcy5zdGF0ZS5hbmltYXRpb25EdXJhdGlvbixuPXRoaXMucHJvcHMuYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb24sbz1VdGlscy5nZXRUcmFuc2xhdGVYUHJvcGVydHkodGhpcy5zdGFnZUNvbXBvbmVudCksZT1VdGlscy5nZXRTd2lwZVRvdWNoZW5kUG9zaXRpb24odGhpcy5zdGF0ZSxlLG8pLFV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246ZSxhbmltYXRpb25EdXJhdGlvbjppLGFuaW1hdGlvbkVhc2luZ0Z1bmN0aW9uOm59KSx0aGlzLl9oYW5kbGVCZWZvcmVUb3VjaEVuZChlKSl9LHQucHJvdG90eXBlLl9oYW5kbGVCZWZvcmVUb3VjaEVuZD1mdW5jdGlvbihzKXt2YXIgdD10aGlzLGU9dGhpcy5zdGF0ZS5hbmltYXRpb25EdXJhdGlvbjt0aGlzLnRvdWNoRW5kVGltZW91dElkPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIF9fYXdhaXRlcih0LHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZSxpLG4sbz10aGlzO3JldHVybiBfX2dlbmVyYXRvcih0aGlzLGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6cmV0dXJuIGU9VXRpbHMuZ2V0U3dpcGVUb3VjaGVuZEluZGV4KHMsdGhpcy5zdGF0ZSksaT1VdGlscy5nZXRUcmFuc2xhdGUzZFByb3BlcnR5KGUsdGhpcy5zdGF0ZSksVXRpbHMuYW5pbWF0ZSh0aGlzLnN0YWdlQ29tcG9uZW50LHtwb3NpdGlvbjotaX0pLG49VXRpbHMuZ2V0VHJhbnNpdGlvblByb3BlcnR5KCksWzQsdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSW5kZXg6ZSx0cmFuc2xhdGUzZDppLHRyYW5zaXRpb246bn0pXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3JldHVybiBvLl9oYW5kbGVTbGlkZUNoYW5nZWQoKX0pLFsyXX19KX0pfSxlKX0sdC5wcm90b3R5cGUuX2hhbmRsZVNsaWRlVG89ZnVuY3Rpb24odCl7dmFyIGU9dC5hY3RpdmVJbmRleCxhPXZvaWQgMD09PWU/MDplLGU9dC5mYWRlb3V0QW5pbWF0aW9uSW5kZXgscj12b2lkIDA9PT1lP251bGw6ZSxlPXQuZmFkZW91dEFuaW1hdGlvblBvc2l0aW9uLGw9dm9pZCAwPT09ZT9udWxsOmUsdT10LmV2ZW50VHlwZTtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3ZhciBlLGksbixvLHM9dGhpcztyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybihpPXRoaXMucHJvcHMsbj1pLmluZmluaXRlLGk9aS5hbmltYXRpb25FYXNpbmdGdW5jdGlvbixlPXRoaXMuc3RhdGUsbz1lLml0ZW1zQ291bnQsZT1lLmFuaW1hdGlvbkR1cmF0aW9uLHRoaXMuaXNBbmltYXRpb25EaXNhYmxlZHx8dGhpcy5zdGF0ZS5hY3RpdmVJbmRleD09PWF8fCFuJiZVdGlscy5zaG91bGRDYW5jZWxTbGlkZUFuaW1hdGlvbihhLG8pKT9bMl06KHRoaXMuaXNBbmltYXRpb25EaXNhYmxlZD0hMCx0aGlzLl9jYW5jZWxUaW1lb3V0QW5pbWF0aW9ucygpLHRoaXMuX2hhbmRsZVNsaWRlQ2hhbmdlKHUpLG49ITEsbz1VdGlscy5nZXRUcmFuc2xhdGUzZFByb3BlcnR5KGEsdGhpcy5zdGF0ZSksaT1udWxsIT09ciYmbnVsbCE9PWw/KG49ITAsVXRpbHMuZ2V0VHJhbnNpdGlvblByb3BlcnR5KCkpOlV0aWxzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eSh7YW5pbWF0aW9uRHVyYXRpb246ZSxhbmltYXRpb25FYXNpbmdGdW5jdGlvbjppfSksWzQsdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSW5kZXg6YSx0cmFuc2l0aW9uOmksdHJhbnNsYXRlM2Q6byxhbmltYXRpb25EdXJhdGlvbjplLGZhZGVvdXRBbmltYXRpb25JbmRleDpyLGZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbjpsLGZhZGVvdXRBbmltYXRpb25Qcm9jZXNzaW5nOm59KV0pO2Nhc2UgMTpyZXR1cm4gdC5zZW50KCksdGhpcy5zbGlkZUVuZFRpbWVvdXRJZD13aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiBzLl9oYW5kbGVCZWZvcmVTbGlkZUVuZCh1KX0sZSksWzJdfX0pfSl9LHQucHJvdG90eXBlLl9oYW5kbGVVcGRhdGVTbGlkZVBvc2l0aW9uPWZ1bmN0aW9uKG8pe3JldHVybiBfX2F3YWl0ZXIodGhpcyx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7dmFyIGUsaSxuO3JldHVybiBfX2dlbmVyYXRvcih0aGlzLGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6cmV0dXJuIGU9dGhpcy5zdGF0ZS5hbmltYXRpb25EdXJhdGlvbixpPVV0aWxzLmdldFRyYW5zbGF0ZTNkUHJvcGVydHkobyx0aGlzLnN0YXRlKSxuPVV0aWxzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eSh7YW5pbWF0aW9uRHVyYXRpb246MH0pLFs0LHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUluZGV4Om8sdHJhbnNsYXRlM2Q6aSx0cmFuc2l0aW9uOm4sYW5pbWF0aW9uRHVyYXRpb246ZSxmYWRlb3V0QW5pbWF0aW9uSW5kZXg6bnVsbCxmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb246bnVsbCxmYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZzohMX0pXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLFsyXX19KX0pfSx0LnByb3RvdHlwZS5faGFuZGxlUmVzaXplZD1mdW5jdGlvbigpe3RoaXMucHJvcHMub25SZXNpemVkJiZ0aGlzLnByb3BzLm9uUmVzaXplZChfX2Fzc2lnbihfX2Fzc2lnbih7fSx0aGlzLmV2ZW50T2JqZWN0KSx7dHlwZTp0eXBlc18xLkV2ZW50VHlwZS5SRVNJWkV9KSl9LHQucHJvdG90eXBlLl9oYW5kbGVTbGlkZUNoYW5nZT1mdW5jdGlvbih0KXt0aGlzLnByb3BzLm9uU2xpZGVDaGFuZ2UmJih0PXQ/X19hc3NpZ24oX19hc3NpZ24oe30sdGhpcy5ldmVudE9iamVjdCkse3R5cGU6dH0pOnRoaXMuZXZlbnRPYmplY3QsdGhpcy5wcm9wcy5vblNsaWRlQ2hhbmdlKHQpKX0sdC5wcm90b3R5cGUuX2hhbmRsZVNsaWRlQ2hhbmdlZD1mdW5jdGlvbihzKXtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3ZhciBlLGksbixvO3JldHVybiBfX2dlbmVyYXRvcih0aGlzLGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6cmV0dXJuKGk9dGhpcy5zdGF0ZSxlPWkuaXNBdXRvUGxheWluZyxpPWkuaXNBdXRvUGxheUNhbmNlbGVkT25BY3Rpb24sbj10aGlzLnByb3BzLG89bi5hdXRvUGxheVN0cmF0ZWd5LG49bi5vblNsaWRlQ2hhbmdlZCxVdGlscy5zaG91bGRDYW5jZWxBdXRvUGxheU9uQWN0aW9uKG8pJiZ0aGlzLmhhc1VzZXJBY3Rpb24mJiFpKT9bNCx0aGlzLnNldFN0YXRlKHtpc0F1dG9QbGF5Q2FuY2VsZWRPbkFjdGlvbjohMCxpc0F1dG9QbGF5aW5nOiExfSldOlszLDJdO2Nhc2UgMTpyZXR1cm4gdC5zZW50KCksWzMsM107Y2FzZSAyOmUmJnRoaXMuX2hhbmRsZVBsYXkoKSx0LmxhYmVsPTM7Y2FzZSAzOnJldHVybiB0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWQ9ITEsbiYmKG89cz9fX2Fzc2lnbihfX2Fzc2lnbih7fSx0aGlzLmV2ZW50T2JqZWN0KSx7dHlwZTpzfSk6dGhpcy5ldmVudE9iamVjdCxuKG8pKSxbMl19fSl9KX0sdC5wcm90b3R5cGUuX2hhbmRsZURvdENsaWNrPWZ1bmN0aW9uKHQpe3RoaXMuaGFzVXNlckFjdGlvbj0hMCx0aGlzLnNsaWRlVG8odCl9LHQucHJvdG90eXBlLl9oYW5kbGVQbGF5PWZ1bmN0aW9uKCl7dGhpcy5fc2V0QXV0b1BsYXlJbnRlcnZhbCgpfSx0LnByb3RvdHlwZS5fY2FuY2VsVGltZW91dEFuaW1hdGlvbnM9ZnVuY3Rpb24oKXt0aGlzLl9jbGVhckF1dG9QbGF5VGltZW91dCgpLHRoaXMuX2NsZWFyU2xpZGVFbmRUaW1lb3V0KCksdGhpcy5jbGVhclRvdWNoZW5kVGltZW91dCgpfSx0LnByb3RvdHlwZS5fY2xlYXJBdXRvUGxheVRpbWVvdXQ9ZnVuY3Rpb24oKXt3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuYXV0b1BsYXlUaW1lb3V0SWQpLHRoaXMuYXV0b1BsYXlUaW1lb3V0SWQ9dm9pZCAwfSx0LnByb3RvdHlwZS5fY2xlYXJTbGlkZUVuZFRpbWVvdXQ9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodGhpcy5zbGlkZUVuZFRpbWVvdXRJZCksdGhpcy5zbGlkZUVuZFRpbWVvdXRJZD12b2lkIDB9LHQucHJvdG90eXBlLmNsZWFyVG91Y2hlbmRUaW1lb3V0PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMudG91Y2hFbmRUaW1lb3V0SWQpLHRoaXMudG91Y2hFbmRUaW1lb3V0SWQ9dm9pZCAwfSx0LnByb3RvdHlwZS5fY2xlYXJUb3VjaG1vdmVQb3NpdGlvbj1mdW5jdGlvbigpe3RoaXMuc3RhcnRUb3VjaG1vdmVQb3NpdGlvbj12b2lkIDB9LHQucHJvdG90eXBlLl9zZXRUb3VjaG1vdmVQb3NpdGlvbj1mdW5jdGlvbigpe3ZhciB0PVV0aWxzLmdldFRyYW5zbGF0ZVhQcm9wZXJ0eSh0aGlzLnN0YWdlQ29tcG9uZW50KTt0aGlzLnN0YXJ0VG91Y2htb3ZlUG9zaXRpb249LXR9LHQucHJvdG90eXBlLl9zZXRJbml0aWFsU3RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3ZhciBlO3JldHVybiBfX2dlbmVyYXRvcih0aGlzLGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6cmV0dXJuIGU9VXRpbHMuY2FsY3VsYXRlSW5pdGlhbFN0YXRlKHRoaXMucHJvcHMsdGhpcy5zdGFnZUNvbXBvbmVudCksdGhpcy5yb290Q29tcG9uZW50RGltZW5zaW9ucz1VdGlscy5nZXRFbGVtZW50RGltZW5zaW9ucyh0aGlzLnJvb3RFbGVtZW50KSxbNCx0aGlzLnNldFN0YXRlKGUpXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLHRoaXMucHJvcHMub25Jbml0aWFsaXplZCYmdGhpcy5wcm9wcy5vbkluaXRpYWxpemVkKF9fYXNzaWduKF9fYXNzaWduKHt9LHRoaXMuZXZlbnRPYmplY3QpLHt0eXBlOnR5cGVzXzEuRXZlbnRUeXBlLklOSVR9KSksWzJdfX0pfSl9LHQucHJvdG90eXBlLl9zZXRBdXRvUGxheUludGVydmFsPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXRoaXMucHJvcHMsaT1lLmF1dG9QbGF5RGlyZWN0aW9uLGU9ZS5hdXRvUGxheUludGVydmFsO3RoaXMuYXV0b1BsYXlUaW1lb3V0SWQ9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0LmlzSG92ZXJlZHx8KGk9PT10eXBlc18xLkF1dG9wbGF5RGlyZWN0aW9uLlJUTD90LnNsaWRlUHJldigpOnQuc2xpZGVOZXh0KCkpfSxlKX0sdC5wcm90b3R5cGUuX3NldHVwU3dpcGVIYW5kbGVycz1mdW5jdGlvbigpe3RoaXMuc3dpcGVMaXN0ZW5lcj1uZXcgdmFuaWxsYV9zd2lwZV8xLmRlZmF1bHQoe2VsZW1lbnQ6dGhpcy5yb290RWxlbWVudCxkZWx0YTp0aGlzLnByb3BzLnN3aXBlRGVsdGEsb25Td2lwaW5nOnRoaXMuX2hhbmRsZVRvdWNobW92ZSxvblN3aXBlZDp0aGlzLl9oYW5kbGVUb3VjaGVuZCxyb3RhdGlvbkFuZ2xlOjUsbW91c2VUcmFja2luZ0VuYWJsZWQ6dGhpcy5wcm9wcy5tb3VzZVRyYWNraW5nLHRvdWNoVHJhY2tpbmdFbmFibGVkOnRoaXMucHJvcHMudG91Y2hUcmFja2luZyxwcmV2ZW50RGVmYXVsdFRvdWNobW92ZUV2ZW50OiF0aGlzLnByb3BzLnRvdWNoTW92ZURlZmF1bHRFdmVudHMscHJldmVudFRyYWNraW5nT25Nb3VzZWxlYXZlOiEwfSksdGhpcy5zd2lwZUxpc3RlbmVyLmluaXQoKX0sdC5wcm90b3R5cGUuX3VwZGF0ZUNvbXBvbmVudD1mdW5jdGlvbih0KXt2YXIgZT10aGlzO3ZvaWQgMD09PXQmJih0PXRoaXMucHJvcHMpLHRoaXMuX2NhbmNlbFRpbWVvdXRBbmltYXRpb25zKCksdGhpcy5pc0FuaW1hdGlvbkRpc2FibGVkPSExLHRoaXMuc3RhdGUuaXNBdXRvUGxheWluZyYmdGhpcy5faGFuZGxlUGxheSgpLHRoaXMuc2V0U3RhdGUoe2Nsb25lczpVdGlscy5jcmVhdGVDbG9uZXModCl9KSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtlLnNldFN0YXRlKFV0aWxzLmNhbGN1bGF0ZUluaXRpYWxTdGF0ZSh0LGUuc3RhZ2VDb21wb25lbnQpKX0pfSx0LnByb3RvdHlwZS5fdXBkYXRlU3dpcGVQcm9wcz1mdW5jdGlvbigpe3RoaXMuc3dpcGVMaXN0ZW5lciYmdGhpcy5zd2lwZUxpc3RlbmVyLnVwZGF0ZSh7ZGVsdGE6dGhpcy5wcm9wcy5zd2lwZURlbHRhLG1vdXNlVHJhY2tpbmdFbmFibGVkOnRoaXMucHJvcHMubW91c2VUcmFja2luZyx0b3VjaFRyYWNraW5nRW5hYmxlZDp0aGlzLnByb3BzLnRvdWNoVHJhY2tpbmcscHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudDohdGhpcy5wcm9wcy50b3VjaE1vdmVEZWZhdWx0RXZlbnRzfSl9LHQucHJvdG90eXBlLl9yZW5kZXJEb3RzTmF2aWdhdGlvbj1mdW5jdGlvbigpe3ZhciB0PXRoaXMucHJvcHMsZT10LnJlbmRlckRvdHNJdGVtLHQ9dC5jb250cm9sc1N0cmF0ZWd5O3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5Eb3RzTmF2aWdhdGlvbix7c3RhdGU6dGhpcy5zdGF0ZSxvbkNsaWNrOnRoaXMuX2hhbmRsZURvdENsaWNrLHJlbmRlckRvdHNJdGVtOmUsY29udHJvbHNTdHJhdGVneTp0fSl9LHQucHJvdG90eXBlLl9yZW5kZXJQcmV2QnV0dG9uPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5wcm9wcy5yZW5kZXJQcmV2QnV0dG9uLGU9VXRpbHMuZ2V0U2xpZGVJdGVtSW5mbyh0aGlzLnN0YXRlKS5pc1ByZXZTbGlkZURpc2FibGVkO3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5QcmV2TmV4dEJ1dHRvbix7bmFtZTpcInByZXZcIixvbkNsaWNrOnRoaXMuc2xpZGVQcmV2LGlzRGlzYWJsZWQ6ZSxyZW5kZXJQcmV2QnV0dG9uOnR9KX0sdC5wcm90b3R5cGUuX3JlbmRlck5leHRCdXR0b249ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnByb3BzLnJlbmRlck5leHRCdXR0b24sZT1VdGlscy5nZXRTbGlkZUl0ZW1JbmZvKHRoaXMuc3RhdGUpLmlzTmV4dFNsaWRlRGlzYWJsZWQ7cmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFZpZXdzLlByZXZOZXh0QnV0dG9uLHtuYW1lOlwibmV4dFwiLG9uQ2xpY2s6dGhpcy5zbGlkZU5leHQsaXNEaXNhYmxlZDplLHJlbmRlck5leHRCdXR0b246dH0pfSx0LnByb3RvdHlwZS5fcmVuZGVyUGxheVBhdXNlQnV0dG9uPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5wcm9wcy5yZW5kZXJQbGF5UGF1c2VCdXR0b24sZT10aGlzLnN0YXRlLmlzQXV0b1BsYXlpbmc7cmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFZpZXdzLlBsYXlQYXVzZUJ1dHRvbix7aXNQbGF5aW5nOmUsb25DbGljazp0aGlzLl9oYW5kbGVQbGF5UGF1c2VUb2dnbGUscmVuZGVyUGxheVBhdXNlQnV0dG9uOnR9KX0sdC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5zdGF0ZSxlPXQudHJhbnNsYXRlM2QsaT10LmNsb25lcyxuPXQudHJhbnNpdGlvbix0PXQuY2FuVXNlRG9tLG89VXRpbHMuc2hvdWxkRGlzYWJsZURvdHModGhpcy5wcm9wcyx0aGlzLnN0YXRlKSxzPVV0aWxzLnNob3VsZERpc2FibGVCdXR0b25zKHRoaXMucHJvcHMsdGhpcy5zdGF0ZSksYT1VdGlscy5nZXRSZW5kZXJXcmFwcGVyU3R5bGVzKHRoaXMucHJvcHMsdGhpcy5zdGF0ZSx0aGlzLnN0YWdlQ29tcG9uZW50KSxlPVV0aWxzLmdldFJlbmRlclN0YWdlU3R5bGVzKHt0cmFuc2xhdGUzZDplfSx7dHJhbnNpdGlvbjpufSksbj10aGlzLnByb3BzLnNzclNpbGVudE1vZGV8fHQ/XCJcIjp0eXBlc18xLk1vZGlmaWVycy5TU1IsdD1VdGlscy5jb25jYXRDbGFzc25hbWVzKHR5cGVzXzEuQ2xhc3NuYW1lcy5ST09ULG4pO3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dH0scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7cmVmOnRoaXMuX3NldFJvb3RDb21wb25lbnRSZWZ9LHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOmEsY2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5XUkFQUEVSLG9uTW91c2VFbnRlcjp0aGlzLl9oYW5kbGVNb3VzZUVudGVyLG9uTW91c2VMZWF2ZTp0aGlzLl9oYW5kbGVNb3VzZUxlYXZlfSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInVsXCIse3N0eWxlOmUsY2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5TVEFHRSxyZWY6dGhpcy5fc2V0U3RhZ2VDb21wb25lbnRSZWZ9LGkubWFwKHRoaXMuX3JlbmRlclN0YWdlSXRlbSkpKSksbz9udWxsOnRoaXMuX3JlbmRlckRvdHNOYXZpZ2F0aW9uKCkscz9udWxsOnRoaXMuX3JlbmRlclByZXZCdXR0b24oKSxzP251bGw6dGhpcy5fcmVuZGVyTmV4dEJ1dHRvbigpLHRoaXMucHJvcHMuZGlzYWJsZVNsaWRlSW5mbz9udWxsOnRoaXMuX3JlbmRlclNsaWRlSW5mbygpLHRoaXMucHJvcHMuYXV0b1BsYXlDb250cm9scz90aGlzLl9yZW5kZXJQbGF5UGF1c2VCdXR0b24oKTpudWxsKX0sdC5kZWZhdWx0UHJvcHM9ZGVmYXVsdFByb3BzXzEuZGVmYXVsdFByb3BzLHR9KHJlYWN0XzEuZGVmYXVsdC5QdXJlQ29tcG9uZW50KSk7ZXhwb3J0cy5kZWZhdWx0PUFsaWNlQ2Fyb3VzZWw7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcblxuZnVuY3Rpb24gcGFyc2UodXVpZCkge1xuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIGxldCB2O1xuICBjb25zdCBhcnIgPSBuZXcgVWludDhBcnJheSgxNik7IC8vIFBhcnNlICMjIyMjIyMjLS4uLi4tLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFyclswXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgwLCA4KSwgMTYpKSA+Pj4gMjQ7XG4gIGFyclsxXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzJdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclszXSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0jIyMjLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbNF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoOSwgMTMpLCAxNikpID4+PiA4O1xuICBhcnJbNV0gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0jIyMjLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzZdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxOCksIDE2KSkgPj4+IDg7XG4gIGFycls3XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tIyMjIy0uLi4uLi4uLi4uLi5cblxuICBhcnJbOF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTksIDIzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzldID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0uLi4uLSMjIyMjIyMjIyMjI1xuICAvLyAoVXNlIFwiL1wiIHRvIGF2b2lkIDMyLWJpdCB0cnVuY2F0aW9uIHdoZW4gYml0LXNoaWZ0aW5nIGhpZ2gtb3JkZXIgYnl0ZXMpXG5cbiAgYXJyWzEwXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgyNCwgMzYpLCAxNikpIC8gMHgxMDAwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMV0gPSB2IC8gMHgxMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTJdID0gdiA+Pj4gMjQgJiAweGZmO1xuICBhcnJbMTNdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMTRdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclsxNV0gPSB2ICYgMHhmZjtcbiAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFyc2U7IiwiaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuaW1wb3J0IHBhcnNlIGZyb20gJy4vcGFyc2UuanMnO1xuXG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgY29uc3QgYnl0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5leHBvcnQgY29uc3QgRE5TID0gJzZiYTdiODEwLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnQgY29uc3QgVVJMID0gJzZiYTdiODExLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2MzUobmFtZSwgdmVyc2lvbiwgaGFzaGZ1bmMpIHtcbiAgZnVuY3Rpb24gZ2VuZXJhdGVVVUlEKHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgdmFyIF9uYW1lc3BhY2U7XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBzdHJpbmdUb0J5dGVzKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWVzcGFjZSA9IHBhcnNlKG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaWYgKCgoX25hbWVzcGFjZSA9IG5hbWVzcGFjZSkgPT09IG51bGwgfHwgX25hbWVzcGFjZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25hbWVzcGFjZS5sZW5ndGgpICE9PSAxNikge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdOYW1lc3BhY2UgbXVzdCBiZSBhcnJheS1saWtlICgxNiBpdGVyYWJsZSBpbnRlZ2VyIHZhbHVlcywgMC0yNTUpJyk7XG4gICAgfSAvLyBDb21wdXRlIGhhc2ggb2YgbmFtZXNwYWNlIGFuZCB2YWx1ZSwgUGVyIDQuM1xuICAgIC8vIEZ1dHVyZTogVXNlIHNwcmVhZCBzeW50YXggd2hlbiBzdXBwb3J0ZWQgb24gYWxsIHBsYXRmb3JtcywgZS5nLiBgYnl0ZXMgPVxuICAgIC8vIGhhc2hmdW5jKFsuLi5uYW1lc3BhY2UsIC4uLiB2YWx1ZV0pYFxuXG5cbiAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNiArIHZhbHVlLmxlbmd0aCk7XG4gICAgYnl0ZXMuc2V0KG5hbWVzcGFjZSk7XG4gICAgYnl0ZXMuc2V0KHZhbHVlLCBuYW1lc3BhY2UubGVuZ3RoKTtcbiAgICBieXRlcyA9IGhhc2hmdW5jKGJ5dGVzKTtcbiAgICBieXRlc1s2XSA9IGJ5dGVzWzZdICYgMHgwZiB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSBieXRlc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gICAgaWYgKGJ1Zikge1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KGJ5dGVzKTtcbiAgfSAvLyBGdW5jdGlvbiNuYW1lIGlzIG5vdCBzZXR0YWJsZSBvbiBzb21lIHBsYXRmb3JtcyAoIzI3MClcblxuXG4gIHRyeSB7XG4gICAgZ2VuZXJhdGVVVUlELm5hbWUgPSBuYW1lOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgfSBjYXRjaCAoZXJyKSB7fSAvLyBGb3IgQ29tbW9uSlMgZGVmYXVsdCBleHBvcnQgc3VwcG9ydFxuXG5cbiAgZ2VuZXJhdGVVVUlELkROUyA9IEROUztcbiAgZ2VuZXJhdGVVVUlELlVSTCA9IFVSTDtcbiAgcmV0dXJuIGdlbmVyYXRlVVVJRDtcbn0iLCIvKlxuICogQnJvd3Nlci1jb21wYXRpYmxlIEphdmFTY3JpcHQgTUQ1XG4gKlxuICogTW9kaWZpY2F0aW9uIG9mIEphdmFTY3JpcHQgTUQ1XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9KYXZhU2NyaXB0LU1ENVxuICpcbiAqIENvcHlyaWdodCAyMDExLCBTZWJhc3RpYW4gVHNjaGFuXG4gKiBodHRwczovL2JsdWVpbXAubmV0XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqXG4gKiBCYXNlZCBvblxuICogQSBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBSU0EgRGF0YSBTZWN1cml0eSwgSW5jLiBNRDUgTWVzc2FnZVxuICogRGlnZXN0IEFsZ29yaXRobSwgYXMgZGVmaW5lZCBpbiBSRkMgMTMyMS5cbiAqIFZlcnNpb24gMi4yIENvcHlyaWdodCAoQykgUGF1bCBKb2huc3RvbiAxOTk5IC0gMjAwOVxuICogT3RoZXIgY29udHJpYnV0b3JzOiBHcmVnIEhvbHQsIEFuZHJldyBLZXBlcnQsIFlkbmFyLCBMb3N0aW5ldFxuICogRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEJTRCBMaWNlbnNlXG4gKiBTZWUgaHR0cDovL3BhamhvbWUub3JnLnVrL2NyeXB0L21kNSBmb3IgbW9yZSBpbmZvLlxuICovXG5mdW5jdGlvbiBtZDUoYnl0ZXMpIHtcbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobXNnLmxlbmd0aCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXNbaV0gPSBtc2cuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWQ1VG9IZXhFbmNvZGVkQXJyYXkod29yZHNUb01kNShieXRlc1RvV29yZHMoYnl0ZXMpLCBieXRlcy5sZW5ndGggKiA4KSk7XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzIHRvIGFuIGFycmF5IG9mIGJ5dGVzXG4gKi9cblxuXG5mdW5jdGlvbiBtZDVUb0hleEVuY29kZWRBcnJheShpbnB1dCkge1xuICBjb25zdCBvdXRwdXQgPSBbXTtcbiAgY29uc3QgbGVuZ3RoMzIgPSBpbnB1dC5sZW5ndGggKiAzMjtcbiAgY29uc3QgaGV4VGFiID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoMzI7IGkgKz0gOCkge1xuICAgIGNvbnN0IHggPSBpbnB1dFtpID4+IDVdID4+PiBpICUgMzIgJiAweGZmO1xuICAgIGNvbnN0IGhleCA9IHBhcnNlSW50KGhleFRhYi5jaGFyQXQoeCA+Pj4gNCAmIDB4MGYpICsgaGV4VGFiLmNoYXJBdCh4ICYgMHgwZiksIDE2KTtcbiAgICBvdXRwdXQucHVzaChoZXgpO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qKlxuICogQ2FsY3VsYXRlIG91dHB1dCBsZW5ndGggd2l0aCBwYWRkaW5nIGFuZCBiaXQgbGVuZ3RoXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRPdXRwdXRMZW5ndGgoaW5wdXRMZW5ndGg4KSB7XG4gIHJldHVybiAoaW5wdXRMZW5ndGg4ICsgNjQgPj4+IDkgPDwgNCkgKyAxNCArIDE7XG59XG4vKlxuICogQ2FsY3VsYXRlIHRoZSBNRDUgb2YgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcywgYW5kIGEgYml0IGxlbmd0aC5cbiAqL1xuXG5cbmZ1bmN0aW9uIHdvcmRzVG9NZDUoeCwgbGVuKSB7XG4gIC8qIGFwcGVuZCBwYWRkaW5nICovXG4gIHhbbGVuID4+IDVdIHw9IDB4ODAgPDwgbGVuICUgMzI7XG4gIHhbZ2V0T3V0cHV0TGVuZ3RoKGxlbikgLSAxXSA9IGxlbjtcbiAgbGV0IGEgPSAxNzMyNTg0MTkzO1xuICBsZXQgYiA9IC0yNzE3MzM4Nzk7XG4gIGxldCBjID0gLTE3MzI1ODQxOTQ7XG4gIGxldCBkID0gMjcxNzMzODc4O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkgKz0gMTYpIHtcbiAgICBjb25zdCBvbGRhID0gYTtcbiAgICBjb25zdCBvbGRiID0gYjtcbiAgICBjb25zdCBvbGRjID0gYztcbiAgICBjb25zdCBvbGRkID0gZDtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNywgNjA2MTA1ODE5KTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgNV0sIDEyLCAxMjAwMDgwNDI2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgOF0sIDcsIDE3NzAwMzU0MTYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDZdLCA5LCAtMTA2OTUwMTYzMik7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMyk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaV0sIDIwLCAtMzczODk3MzAyKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxNF0sIDksIC0xMDE5ODAzNjkwKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTYsIDE4MzkwMzA1NjIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA0XSwgMTEsIDEyNzI4OTMzNTMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNCwgNjgxMjc5MTc0KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyA2XSwgMjMsIDc2MDI5MTg5KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgOV0sIDQsIC02NDAzNjQ0ODcpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNiwgNTMwNzQyNTIwKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgOF0sIDYsIDE4NzMzMTMzNTkpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMTNdLCAyMSwgMTMwOTE1MTY0OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTUsIDcxODc4NzI1OSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG4gICAgYSA9IHNhZmVBZGQoYSwgb2xkYSk7XG4gICAgYiA9IHNhZmVBZGQoYiwgb2xkYik7XG4gICAgYyA9IHNhZmVBZGQoYywgb2xkYyk7XG4gICAgZCA9IHNhZmVBZGQoZCwgb2xkZCk7XG4gIH1cblxuICByZXR1cm4gW2EsIGIsIGMsIGRdO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgYnl0ZXMgdG8gYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3Jkc1xuICogQ2hhcmFjdGVycyA+MjU1IGhhdmUgdGhlaXIgaGlnaC1ieXRlIHNpbGVudGx5IGlnbm9yZWQuXG4gKi9cblxuXG5mdW5jdGlvbiBieXRlc1RvV29yZHMoaW5wdXQpIHtcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IGxlbmd0aDggPSBpbnB1dC5sZW5ndGggKiA4O1xuICBjb25zdCBvdXRwdXQgPSBuZXcgVWludDMyQXJyYXkoZ2V0T3V0cHV0TGVuZ3RoKGxlbmd0aDgpKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDg7IGkgKz0gOCkge1xuICAgIG91dHB1dFtpID4+IDVdIHw9IChpbnB1dFtpIC8gOF0gJiAweGZmKSA8PCBpICUgMzI7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLypcbiAqIEFkZCBpbnRlZ2Vycywgd3JhcHBpbmcgYXQgMl4zMi4gVGhpcyB1c2VzIDE2LWJpdCBvcGVyYXRpb25zIGludGVybmFsbHlcbiAqIHRvIHdvcmsgYXJvdW5kIGJ1Z3MgaW4gc29tZSBKUyBpbnRlcnByZXRlcnMuXG4gKi9cblxuXG5mdW5jdGlvbiBzYWZlQWRkKHgsIHkpIHtcbiAgY29uc3QgbHN3ID0gKHggJiAweGZmZmYpICsgKHkgJiAweGZmZmYpO1xuICBjb25zdCBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgcmV0dXJuIG1zdyA8PCAxNiB8IGxzdyAmIDB4ZmZmZjtcbn1cbi8qXG4gKiBCaXR3aXNlIHJvdGF0ZSBhIDMyLWJpdCBudW1iZXIgdG8gdGhlIGxlZnQuXG4gKi9cblxuXG5mdW5jdGlvbiBiaXRSb3RhdGVMZWZ0KG51bSwgY250KSB7XG4gIHJldHVybiBudW0gPDwgY250IHwgbnVtID4+PiAzMiAtIGNudDtcbn1cbi8qXG4gKiBUaGVzZSBmdW5jdGlvbnMgaW1wbGVtZW50IHRoZSBmb3VyIGJhc2ljIG9wZXJhdGlvbnMgdGhlIGFsZ29yaXRobSB1c2VzLlxuICovXG5cblxuZnVuY3Rpb24gbWQ1Y21uKHEsIGEsIGIsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIHNhZmVBZGQoYml0Um90YXRlTGVmdChzYWZlQWRkKHNhZmVBZGQoYSwgcSksIHNhZmVBZGQoeCwgdCkpLCBzKSwgYik7XG59XG5cbmZ1bmN0aW9uIG1kNWZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgYyB8IH5iICYgZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWdnKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgZCB8IGMgJiB+ZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWhoKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiIF4gYyBeIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVpaShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYyBeIChiIHwgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWQ1OyIsImltcG9ydCB2MzUgZnJvbSAnLi92MzUuanMnO1xuaW1wb3J0IG1kNSBmcm9tICcuL21kNS5qcyc7XG5jb25zdCB2MyA9IHYzNSgndjMnLCAweDMwLCBtZDUpO1xuZXhwb3J0IGRlZmF1bHQgdjM7IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCIvLyBBZGFwdGVkIGZyb20gQ2hyaXMgVmVuZXNzJyBTSEExIGNvZGUgYXRcbi8vIGh0dHA6Ly93d3cubW92YWJsZS10eXBlLmNvLnVrL3NjcmlwdHMvc2hhMS5odG1sXG5mdW5jdGlvbiBmKHMsIHgsIHksIHopIHtcbiAgc3dpdGNoIChzKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIHggJiB5IF4gfnggJiB6O1xuXG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcblxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiB4ICYgeSBeIHggJiB6IF4geSAmIHo7XG5cbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuICB9XG59XG5cbmZ1bmN0aW9uIFJPVEwoeCwgbikge1xuICByZXR1cm4geCA8PCBuIHwgeCA+Pj4gMzIgLSBuO1xufVxuXG5mdW5jdGlvbiBzaGExKGJ5dGVzKSB7XG4gIGNvbnN0IEsgPSBbMHg1YTgyNzk5OSwgMHg2ZWQ5ZWJhMSwgMHg4ZjFiYmNkYywgMHhjYTYyYzFkNl07XG4gIGNvbnN0IEggPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG5cbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXMucHVzaChtc2cuY2hhckNvZGVBdChpKSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGJ5dGVzKSkge1xuICAgIC8vIENvbnZlcnQgQXJyYXktbGlrZSB0byBBcnJheVxuICAgIGJ5dGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYnl0ZXMpO1xuICB9XG5cbiAgYnl0ZXMucHVzaCgweDgwKTtcbiAgY29uc3QgbCA9IGJ5dGVzLmxlbmd0aCAvIDQgKyAyO1xuICBjb25zdCBOID0gTWF0aC5jZWlsKGwgLyAxNik7XG4gIGNvbnN0IE0gPSBuZXcgQXJyYXkoTik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICBjb25zdCBhcnIgPSBuZXcgVWludDMyQXJyYXkoMTYpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxNjsgKytqKSB7XG4gICAgICBhcnJbal0gPSBieXRlc1tpICogNjQgKyBqICogNF0gPDwgMjQgfCBieXRlc1tpICogNjQgKyBqICogNCArIDFdIDw8IDE2IHwgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAyXSA8PCA4IHwgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAzXTtcbiAgICB9XG5cbiAgICBNW2ldID0gYXJyO1xuICB9XG5cbiAgTVtOIC0gMV1bMTRdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAvIE1hdGgucG93KDIsIDMyKTtcbiAgTVtOIC0gMV1bMTRdID0gTWF0aC5mbG9vcihNW04gLSAxXVsxNF0pO1xuICBNW04gLSAxXVsxNV0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4ICYgMHhmZmZmZmZmZjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IE47ICsraSkge1xuICAgIGNvbnN0IFcgPSBuZXcgVWludDMyQXJyYXkoODApO1xuXG4gICAgZm9yIChsZXQgdCA9IDA7IHQgPCAxNjsgKyt0KSB7XG4gICAgICBXW3RdID0gTVtpXVt0XTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCB0ID0gMTY7IHQgPCA4MDsgKyt0KSB7XG4gICAgICBXW3RdID0gUk9UTChXW3QgLSAzXSBeIFdbdCAtIDhdIF4gV1t0IC0gMTRdIF4gV1t0IC0gMTZdLCAxKTtcbiAgICB9XG5cbiAgICBsZXQgYSA9IEhbMF07XG4gICAgbGV0IGIgPSBIWzFdO1xuICAgIGxldCBjID0gSFsyXTtcbiAgICBsZXQgZCA9IEhbM107XG4gICAgbGV0IGUgPSBIWzRdO1xuXG4gICAgZm9yIChsZXQgdCA9IDA7IHQgPCA4MDsgKyt0KSB7XG4gICAgICBjb25zdCBzID0gTWF0aC5mbG9vcih0IC8gMjApO1xuICAgICAgY29uc3QgVCA9IFJPVEwoYSwgNSkgKyBmKHMsIGIsIGMsIGQpICsgZSArIEtbc10gKyBXW3RdID4+PiAwO1xuICAgICAgZSA9IGQ7XG4gICAgICBkID0gYztcbiAgICAgIGMgPSBST1RMKGIsIDMwKSA+Pj4gMDtcbiAgICAgIGIgPSBhO1xuICAgICAgYSA9IFQ7XG4gICAgfVxuXG4gICAgSFswXSA9IEhbMF0gKyBhID4+PiAwO1xuICAgIEhbMV0gPSBIWzFdICsgYiA+Pj4gMDtcbiAgICBIWzJdID0gSFsyXSArIGMgPj4+IDA7XG4gICAgSFszXSA9IEhbM10gKyBkID4+PiAwO1xuICAgIEhbNF0gPSBIWzRdICsgZSA+Pj4gMDtcbiAgfVxuXG4gIHJldHVybiBbSFswXSA+PiAyNCAmIDB4ZmYsIEhbMF0gPj4gMTYgJiAweGZmLCBIWzBdID4+IDggJiAweGZmLCBIWzBdICYgMHhmZiwgSFsxXSA+PiAyNCAmIDB4ZmYsIEhbMV0gPj4gMTYgJiAweGZmLCBIWzFdID4+IDggJiAweGZmLCBIWzFdICYgMHhmZiwgSFsyXSA+PiAyNCAmIDB4ZmYsIEhbMl0gPj4gMTYgJiAweGZmLCBIWzJdID4+IDggJiAweGZmLCBIWzJdICYgMHhmZiwgSFszXSA+PiAyNCAmIDB4ZmYsIEhbM10gPj4gMTYgJiAweGZmLCBIWzNdID4+IDggJiAweGZmLCBIWzNdICYgMHhmZiwgSFs0XSA+PiAyNCAmIDB4ZmYsIEhbNF0gPj4gMTYgJiAweGZmLCBIWzRdID4+IDggJiAweGZmLCBIWzRdICYgMHhmZl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoYTE7IiwiaW1wb3J0IHYzNSBmcm9tICcuL3YzNS5qcyc7XG5pbXBvcnQgc2hhMSBmcm9tICcuL3NoYTEuanMnO1xuY29uc3QgdjUgPSB2MzUoJ3Y1JywgMHg1MCwgc2hhMSk7XG5leHBvcnQgZGVmYXVsdCB2NTsiLCIvKlxuIGRlZmF1bHQgdW5kZWZpbmVkIC0gVGhlIGtleSBpcyB0aGUgYnJlYWtwb2ludFxuIChkZWZhdWx0IGlzIHRoZSByZXN1bHQgb2Y6ICgpID0+IHdpbmRvdy5pbm5lcldpZHRoIG9yIGlubmVyV2lkdGggcHJvcGVydHkgaWYgdGhlIGxhc3QgcHJlc2VudGVkKS5cbiovXG5leHBvcnQgY29uc3QgZGVmYXVsdFJlc3BvbnNpdmUgPSB7XG4gICAgMDoge1xuICAgICAgICBpdGVtczogMVxuICAgIH0sXG4gICAgNjIwOiB7XG4gICAgICAgIGl0ZW1zOiAyXG4gICAgfSxcbiAgICAxMDI0OiB7XG4gICAgICAgIGl0ZW1zOiAzXG4gICAgfSxcbiAgICAxMjAwOiB7XG4gICAgICAgIGl0ZW1zOiA0XG4gICAgfSxcbiAgICAxNzAwOiB7XG4gICAgICAgIGl0ZW1zOiA1XG4gICAgfSxcbiAgICAyMjUwOiB7XG4gICAgICAgIGl0ZW1zOiA2XG4gICAgfVxufTtcblxuLypcbiByZWJ1aWx0IHJlc3BvbnNpdmUgb2JqZWN0IGRlcGVuZGluZyBvbiB0aGUgY29udGFpbmVyIHdpZHRoXG4gdXNpbmcgdGhlIHJhdGlvIG9mIHRoZSB3aWR0aCBvZiB0aGUgYm94IHRvIHRoZSB3aWR0aCBvZiB0aGUgd2luZG93XG4qL1xuZXhwb3J0IGNvbnN0IGdldE5ld1Jlc3BvbnNpdmVWYWx1ZXMgPSByYXRlID0+IHtcbiAgICBsZXQgbmV3UmVzcG9uc2l2ZSA9IHt9O1xuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZGVmYXVsdFJlc3BvbnNpdmUpO1xuXG4gICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IE1hdGgucm91bmQoZGVmYXVsdFJlc3BvbnNpdmVba2V5XS5pdGVtcyAvIHJhdGUpO1xuICAgICAgICBuZXdSZXNwb25zaXZlW2tleV0gPSB7IGl0ZW1zOiBNYXRoLm1heChuZXdWYWx1ZSwgMSkgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdSZXNwb25zaXZlO1xufTtcblxuLypcbiAgICBDb25zdGFudHNcbiovXG5leHBvcnQgY29uc3Qgc3RhdHVzTGlzdCA9IHtcbiAgICByZXNldDogXCJyZXNldFwiLFxuICAgIGdvTGFzdDogXCJnb0xhc3RcIixcbiAgICBuZXh0OiBcIm5leHRcIixcbiAgICBwcmV2OiBcInByZXZcIlxufTtcblxuZXhwb3J0IGNvbnN0IGNsYXNzZXNBY3Rpb24gPSB7XG4gICAgYWRkOiBcImFkZFwiLFxuICAgIHJlbW92ZTogXCJyZW1vdmVcIlxufTtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkNsYXNzZXMgPSB7XG4gICAgbXVsdGlfY29udGFpbmVyOiBcIm11bHRpLWNhcm91c2VsX19jb250YWluZXJcIixcbiAgICBtdWx0aV9lbXB0eV9jb250YWluZXI6IFwibXVsdGktY2Fyb3VzZWxfX2VtcHR5LWNvbnRhaW5lclwiLFxuICAgIGl0ZW06IFwibXVsdGktY2Fyb3VzZWxfX2l0ZW1cIixcbiAgICBhY3RpdmU6IFwibXVsdGktY2Fyb3VzZWxfX2FjdGl2ZVwiLFxuICAgIG5vX2RvdHM6IFwibXVsdGktY2Fyb3VzZWxfX25vLWRvdHNcIlxufTtcblxuZXhwb3J0IGNvbnN0IG5vcm1hbENhcm91c2VsQ2xhc3NlcyA9IHtcbiAgICBub3JtYWxfY29udGFpbmVyOiBcIm5vcm1hbC1jYXJvdXNlbF9fY29udGFpbmVyXCIsXG4gICAgbm9ybWFsX2l0ZW06IFwibm9ybWFsLWNhcm91c2VsX19pdGVtXCJcbn07XG5cbmV4cG9ydCBjb25zdCBhY3RpdmVDbGlja0NsYXNzZXMgPSB7XG4gICAgYWN0aXZlX2NsaWNrX2NvbnRhaW5lcjogXCJhY3RpdmUtY2xpY2stY2Fyb3VzZWxfX2NvbnRhaW5lclwiLFxuICAgIGFjdGl2ZV9jbGlja19pdGVtOiBcImFjdGl2ZS1jbGljay1jYXJvdXNlbF9faXRlbVwiLFxuICAgIGFjdGl2ZV9jbGlja193aXRoX2J0bjogXCJhY3RpdmUtY2xpY2stY2Fyb3VzZWxfX3dpdGgtYnRuXCJcbn07XG5cbmV4cG9ydCBjb25zdCBhY3RpdmVTbGlkZUNsYXNzZXMgPSB7XG4gICAgYWN0aXZlX3NsaWRlX2NvbnRhaW5lcjogXCJhY3RpdmUtc2xpZGUtY2Fyb3VzZWxfX2NvbnRhaW5lclwiLFxuICAgIGFjdGl2ZV9zbGlkZV93cmFwcGVyOiBcImFjdGl2ZS1zbGlkZS1jYXJvdXNlbF9fd3JhcHBlclwiLFxuICAgIGZpcnN0X2l0ZW06IFwiYWN0aXZlLXNsaWRlLWNhcm91c2VsX19maXJzdC1pdGVtXCIsXG4gICAgbGFzdF9pdGVtOiBcImFjdGl2ZS1zbGlkZS1jYXJvdXNlbF9fbGFzdC1pdGVtXCIsXG4gICAgcHJldl9idG46IFwiYWN0aXZlLXNsaWRlLWNhcm91c2VsX19wcmV2LWJ0blwiLFxuICAgIG5leHRfYnRuOiBcImFjdGl2ZS1zbGlkZS1jYXJvdXNlbF9fbmV4dC1idG5cIlxufTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vdWkvTm9ybWFsQ2Fyb3VzZWwuc2Nzc1wiO1xuaW1wb3J0IFwiLi4vdWkvQWN0aXZlQ2xpY2tDYXJvdXNlbC5zY3NzXCI7XG5pbXBvcnQgQWxpY2VDYXJvdXNlbCBmcm9tIFwicmVhY3QtYWxpY2UtY2Fyb3VzZWxcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQge1xuICAgIGRlZmF1bHRSZXNwb25zaXZlLFxuICAgIGdldE5ld1Jlc3BvbnNpdmVWYWx1ZXMsXG4gICAgY29tbW9uQ2xhc3NlcyxcbiAgICBub3JtYWxDYXJvdXNlbENsYXNzZXMsXG4gICAgYWN0aXZlQ2xpY2tDbGFzc2VzLFxuICAgIGNsYXNzZXNBY3Rpb25cbn0gZnJvbSBcIi4vaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vcm1hbENhcm91c2VsKHByb3BzKSB7XG4gICAgY29uc3QgY2Fyb3VzZWxQYXJlbnQgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBbY2Fyb3VzZWxfaXRlbXMsIHNldF9jYXJvdXNlbF9pdGVtc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3Jlc3BvbnNpdmUsIHNldFJlc3BvbnNpdmVdID0gdXNlU3RhdGUoeyAuLi5kZWZhdWx0UmVzcG9uc2l2ZSB9KTtcbiAgICBjb25zdCBbdW5pcXVlQ2xhc3MsIHNldFVuaXF1ZUNsYXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgLypcbiAgICAgICAgdGhpcyBtZXRob2QgYnVpbHQgdG8gaGFuZGxlIGlmIHRoZSBjYXJvdXNlbCBoYXMgYmVlbiByZW5kZXJlZCBpbnNpZGUgYSBjb250YWluZXJcbiAgICAgICAgdGhhdCBpcyBub3QgY292ZXJpbmcgdGhlIHdpbmRvdydzIGZ1bGwgd2lkdGhcbiAgICAqL1xuICAgIGNvbnN0IHNldE5ld1Jlc3BvbnNpdmUgPSAoKSA9PiB7XG4gICAgICAgIGxldCByYXRlID0gd2luZG93LmlubmVyV2lkdGggLyBjYXJvdXNlbFBhcmVudC5jdXJyZW50LmNsaWVudFdpZHRoO1xuICAgICAgICBpZiAocmF0ZSA+IDEuMzUpIHtcbiAgICAgICAgICAgIGxldCBuZXdSZXNwb25zaXZlID0gZ2V0TmV3UmVzcG9uc2l2ZVZhbHVlcyhyYXRlKTtcbiAgICAgICAgICAgIHNldFJlc3BvbnNpdmUoeyAuLi5uZXdSZXNwb25zaXZlIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0UmVzcG9uc2l2ZSh7IC4uLmRlZmF1bHRSZXNwb25zaXZlIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZE9yUmVtb3ZlQ2xhc3NOYW1lID0gKG5vZGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBpZiAoYWN0aW9uID09PSBjbGFzc2VzQWN0aW9uLnJlbW92ZSkge1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNvbW1vbkNsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjb21tb25DbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgaW4gY2FzZSBvZiBcImluZmluaXRlXCIgY2Fyb3VzZWwgdGhlIG5vZGUgd2lsbCBiZSBub2RlIGxpc3QgXCJBcnJheVwiXG4gICAgICAgIGJlY2F1c2UgdGhlIGNhcm91c2VsIGNyZWF0ZSBhIGNvcHkgb2YgYWxsIHRoZSBpdGVtc1xuICAgICAgICB0aGF0IHdoeSB3ZSBuZWVkIGNoYW5nZSB0aGUgYWN0aXZlIGNsYXNzIG9uIGJvdGggbm9kZXMgLSB0aGUgY2Fyb3VzZWwgcmVuZGVyIGJvdGggLVxuICAgICovXG4gICAgY29uc3QgY2hhbmdlQWN0aXZlQ2xhc3MgPSAobm9kZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChub2RlPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG5vZGUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBhZGRPclJlbW92ZUNsYXNzTmFtZShpdGVtLCBhY3Rpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgICAgICAgYWRkT3JSZW1vdmVDbGFzc05hbWUobm9kZSwgYWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBpZHgtXCJcIiBpcyB0aGUgY29tbW9uIHVuaXF1ZSBjbGFzcyBiZXR3ZWVuIG9yaWdpbmFsIGl0ZW0gYW5kIHRoZSBjbG9uZWQgb25lXG4gICAgKi9cbiAgICBjb25zdCBnZXRJZHhDbGFzc05hbWUgPSBlID0+IHtcbiAgICAgICAgbGV0IGNsaWNrZWRJdGVtID0gZS50YXJnZXQ7XG5cbiAgICAgICAgLy8gaW4gY2FzZSBvZiBjbGlja2luZyBlbGVtZW50IGluc2lkZSB0aGUgaXRlbSB3ZSBuZWVkIHRoZSBtYWluIGRpdiB3aXRoIFwiaWR4LVwiIGNsYXNzIG5hbWVcbiAgICAgICAgd2hpbGUgKGNsaWNrZWRJdGVtKSB7XG4gICAgICAgICAgICBpZiAoY2xpY2tlZEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNvbW1vbkNsYXNzZXMuaXRlbSkpIGJyZWFrO1xuICAgICAgICAgICAgY2xpY2tlZEl0ZW0gPSBjbGlja2VkSXRlbS5wYXJlbnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZXMgPSBjbGlja2VkSXRlbS5jbGFzc05hbWUuc3BsaXQoXCIgXCIpO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lcz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5pbmNsdWRlcyhcImlkeFwiKSk/LlswXTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25DYXJkQ2xpY2tlZCA9IChlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbj8uY2FuRXhlY3V0ZSkgYWN0aW9uLmV4ZWN1dGUoKTtcblxuICAgICAgICAvLyByZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gb3JpZ2luYWwgYW5kIGNsb25lZCBpdGVtXG4gICAgICAgIGxldCBhY3RpdmVOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dW5pcXVlQ2xhc3N9YCk/LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NvbW1vbkNsYXNzZXMuYWN0aXZlfWApO1xuICAgICAgICBjaGFuZ2VBY3RpdmVDbGFzcyhhY3RpdmVOb2RlLCBjbGFzc2VzQWN0aW9uLnJlbW92ZSk7XG5cbiAgICAgICAgbGV0IGlkeENsYXNzID0gZ2V0SWR4Q2xhc3NOYW1lKGUpO1xuXG4gICAgICAgIC8vIGFkZCBhY3RpdmUgY2xhc3MgZm9yIGJvdGggb3JpZ2luYWwgYW5kIGNsb25lZCBpdGVtXG4gICAgICAgIGxldCBpdGVtVG9TZXRBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt1bmlxdWVDbGFzc31gKT8ucXVlcnlTZWxlY3RvckFsbChgLiR7aWR4Q2xhc3N9YCk7XG4gICAgICAgIGNoYW5nZUFjdGl2ZUNsYXNzKGl0ZW1Ub1NldEFjdGl2ZSwgY2xhc3Nlc0FjdGlvbi5hZGQpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgc2V0IHRoZSBhY3RpdmUgaXRlbSBhZnRlciB0aGUgY2Fyb3VzZWwgaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZFxuICAgICovXG4gICAgY29uc3Qgb25Jbml0aWFsaXplZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLmNhcm91c2VsVHlwZSA9PT0gXCJhY3RpdmVcIikge1xuICAgICAgICAgICAgbGV0IGl0ZW1Ub1NldEFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3VuaXF1ZUNsYXNzfWApPy5xdWVyeVNlbGVjdG9yQWxsKFwiLmlkeC0wXCIpO1xuICAgICAgICAgICAgY2hhbmdlQWN0aXZlQ2xhc3MoaXRlbVRvU2V0QWN0aXZlLCBjbGFzc2VzQWN0aW9uLmFkZCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gc2V0IGEgdW5pcXVlIGNsYXNzIGluIGNhc2Ugb2YgdXNpbmcgdHdvIGRpZmZlcmVudCBjYXJvdXNlbCBpbnN0YW5jZXMgaW4gdGhlIHNhbWUgZG9jdW1lbnRcbiAgICAgICAgc2V0VW5pcXVlQ2xhc3MoXCJhLVwiICsgdXVpZHY0KCkpO1xuXG4gICAgICAgIGlmICghY2Fyb3VzZWxQYXJlbnQuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIGhhbmRsZSByZXNpemUgd2luZG93IG9yIGNhcm91c2VsIGNvbnRhaW5lclxuICAgICAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB7XG4gICAgICAgICAgICBzZXROZXdSZXNwb25zaXZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoY2Fyb3VzZWxQYXJlbnQuY3VycmVudCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMuZGF0YT8uc3RhdHVzID09PSBcImF2YWlsYWJsZVwiICYmICFjYXJvdXNlbF9pdGVtcz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRfY2Fyb3VzZWxfaXRlbXMoXG4gICAgICAgICAgICAgICAgcHJvcHMuZGF0YS5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2Fyb3VzZWxUeXBlID09PSBcImFjdGl2ZVwiID8gZSA9PiBvbkNhcmRDbGlja2VkKGUsIHByb3BzLmFjdGlvbj8uZ2V0KGl0ZW0pKSA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjb21tb25DbGFzc2VzLml0ZW19IGlkeC0ke2l9ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2Fyb3VzZWxUeXBlID09PSBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYWN0aXZlQ2xpY2tDbGFzc2VzLmFjdGl2ZV9jbGlja19jbGlja2FibGVfaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5vcm1hbENhcm91c2VsQ2xhc3Nlcy5ub3JtYWxfaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jb250ZW50LmdldChpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LCBbcHJvcHMuZGF0YV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICAgICAgICAgY29tbW9uQ2xhc3Nlcy5tdWx0aV9jb250YWluZXIsXG4gICAgICAgICAgICAgICAgdW5pcXVlQ2xhc3MsXG4gICAgICAgICAgICAgICAgcHJvcHMuY2Fyb3VzZWxUeXBlID09PSBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgID8gYWN0aXZlQ2xpY2tDbGFzc2VzLmFjdGl2ZV9jbGlja19jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgOiBub3JtYWxDYXJvdXNlbENsYXNzZXMubm9ybWFsX2NvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBwcm9wcy5kaXNhYmxlRG90c0NvbnRyb2xzID8gY29tbW9uQ2xhc3Nlcy5ub19kb3RzIDogXCJcIixcbiAgICAgICAgICAgICAgICAhcHJvcHMuZGlzYWJsZUJ1dHRvbnNDb250cm9scyAmJiBwcm9wcy5jYXJvdXNlbFR5cGUgPT09IFwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgPyBhY3RpdmVDbGlja0NsYXNzZXMuYWN0aXZlX2NsaWNrX3dpdGhfYnRuXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgXS5qb2luKFwiIFwiKX1cbiAgICAgICAgICAgIHJlZj17Y2Fyb3VzZWxQYXJlbnR9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjYXJvdXNlbF9pdGVtcz8ubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgIDxBbGljZUNhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtjYXJvdXNlbF9pdGVtc31cbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU9e3Byb3BzLmluZmluaXRlfVxuICAgICAgICAgICAgICAgICAgICBhdXRvUGxheT17cHJvcHMuYXV0b1BsYXl9XG4gICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5RGlyZWN0aW9uPXtwcm9wcy5hdXRvUGxheURpcmVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXlDb250cm9scz17cHJvcHMuYXV0b1BsYXlDb250cm9sc31cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUJ1dHRvbnNDb250cm9scz17cHJvcHMuZGlzYWJsZUJ1dHRvbnNDb250cm9sc31cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZURvdHNDb250cm9scz17cHJvcHMuZGlzYWJsZURvdHNDb250cm9sc31cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb249e3Byb3BzLmFuaW1hdGlvbkR1cmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25UeXBlPXtwcm9wcy5hbmltYXRpb25UeXBlfVxuICAgICAgICAgICAgICAgICAgICBrZXlib2FyZE5hdmlnYXRpb249e3Byb3BzLmtleWJvYXJkTmF2aWdhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgbW91c2VUcmFja2luZz17cHJvcHMubW91c2VUcmFja2luZ31cbiAgICAgICAgICAgICAgICAgICAgdG91Y2hUcmFja2luZz17cHJvcHMudG91Y2hUcmFja2luZ31cbiAgICAgICAgICAgICAgICAgICAgb25Jbml0aWFsaXplZD17b25Jbml0aWFsaXplZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tbW9uQ2xhc3Nlcy5tdWx0aV9lbXB0eV9jb250YWluZXJ9PjwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBbGljZUNhcm91c2VsIGZyb20gXCJyZWFjdC1hbGljZS1jYXJvdXNlbFwiO1xuaW1wb3J0IFwiLi4vdWkvQWN0aXZlU2xpZGVDYXJvdXNlbC5zY3NzXCI7XG5pbXBvcnQgeyBkZWZhdWx0UmVzcG9uc2l2ZSwgZ2V0TmV3UmVzcG9uc2l2ZVZhbHVlcywgY29tbW9uQ2xhc3NlcywgYWN0aXZlU2xpZGVDbGFzc2VzLCBzdGF0dXNMaXN0IH0gZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY3RpdmVTbGlkZUNhcm91c2VsKHByb3BzKSB7XG4gICAgY29uc3Qgc2xpZGVyQ29udGFpbmVyID0gdXNlUmVmKCk7XG4gICAgY29uc3QgW2Nhcm91c2VsX2l0ZW1zLCBzZXRfY2Fyb3VzZWxfaXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtyZXNwb25zaXZlLCBzZXRSZXNwb25zaXZlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFt1bmlxdWVDbGFzcywgc2V0VW5pcXVlQ2xhc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2N1cnJlbnRBY3RpdmVJZHgsIHNldEN1cnJlbnRBY3RpdmVJZHhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW251bWJlck9mRGlzcGxheWVkSXRlbXMsIHNldE51bWJlck9mRGlzcGxheWVkSXRlbXNdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW251bWJlck9mQWxsSXRlbXMsIHNldE51bWJlck9mQWxsSXRlbXNdID0gdXNlU3RhdGUoMCk7XG5cbiAgICAvLyBnZXQgdGhlICdyZWFjdC1hbGljZS1jYXJvdXNlbCcgYnVpbHQtaW4gYWxsIG1ldGhvZCBhbmQgcHJvcGVydGllc1xuICAgIGNvbnN0IFtjYXJvdXNlbFByb3BlcnRpZXMsIHNldENhcm91c2VsUHJvcGVydGllc10gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIC8qXG4gICAgICAgIHRoaXMgbWV0aG9kIGJ1aWx0IHRvIGhhbmRsZSBpZiB0aGUgY2Fyb3VzZWwgaGFzIGJlZW4gcmVuZGVyZWQgaW5zaWRlIGEgY29udGFpbmVyXG4gICAgICAgIHRoYXQgaXMgbm90IGNvdmVyaW5nIHRoZSB3aW5kb3cncyBmdWxsIHdpZHRoXG4gICAgKi9cbiAgICBjb25zdCBzZXROZXdSZXNwb25zaXZlID0gKCkgPT4ge1xuICAgICAgICBsZXQgcmF0ZSA9IHdpbmRvdy5pbm5lcldpZHRoIC8gc2xpZGVyQ29udGFpbmVyPy5jdXJyZW50Py5jbGllbnRXaWR0aDtcbiAgICAgICAgaWYgKHJhdGUgPiAxLjQpIHtcbiAgICAgICAgICAgIGxldCBuZXdSZXNwb25zaXZlID0gZ2V0TmV3UmVzcG9uc2l2ZVZhbHVlcyhyYXRlKTtcbiAgICAgICAgICAgIHNldFJlc3BvbnNpdmUoeyAuLi5uZXdSZXNwb25zaXZlIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0UmVzcG9uc2l2ZSh7IC4uLmRlZmF1bHRSZXNwb25zaXZlIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIEZpcmVkIHdoZW4gcmVhY2ggdGhlIGVuZCBvZiB0aGUgc2xpZGVyIG9yIHdoZW4gcmVzaXplIHRoZSBjYXJvdXNlbFxuICAgICAgICA9PiBtb3ZlIHRvIHRoZSBmaXJzdCBpdGVtXG4gICAgKi9cbiAgICBjb25zdCByZXNldFNsaWRlciA9ICgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudEFjdGl2ZUlkeCgwKTtcbiAgICAgICAgc2V0QWN0aXZlQ2xhc3Moc3RhdHVzTGlzdC5yZXNldCwgbnVsbCwgMCk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgRmlyZWQgd2hlbiBnZSBiYWNrIHdoZW4gc3RlcCBmcm9tIHRoZSBmaXJzdCBpdGVtXG4gICAgICAgPT4gbW92ZSB0byB0aGUgbGFzdCBpdGVtXG4gICAqL1xuICAgIGNvbnN0IHNsaWRlVG9UaGVFbmQgPSAoKSA9PiB7XG4gICAgICAgIGNhcm91c2VsUHJvcGVydGllcz8uc2xpZGVUbyhudW1iZXJPZkFsbEl0ZW1zIC0gbnVtYmVyT2ZEaXNwbGF5ZWRJdGVtcyArIDEpO1xuICAgICAgICBzZXRBY3RpdmVDbGFzcyhzdGF0dXNMaXN0LmdvTGFzdCwgbnVsbCwgbnVtYmVyT2ZBbGxJdGVtcyk7XG4gICAgICAgIHNldEN1cnJlbnRBY3RpdmVJZHgobnVtYmVyT2ZBbGxJdGVtcyk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIEZpcmVkIHdoZW4gY2xpY2tpbmcgXCJwcmV2aW91c1wiIGJ1dHRvblxuICAgICovXG4gICAgY29uc3QgcHJldkNsaWNrZWQgPSAoKSA9PiB7XG4gICAgICAgIGlmICghY3VycmVudEFjdGl2ZUlkeCkge1xuICAgICAgICAgICAgLy8gY3VycmVudEFjdGl2ZUlkeCA9PT0gMCwgdGhlIGFjdGl2ZSBpdGVtIGlzIHRoZSBmaXJzdCBvbmUsIG1vdmUgdG8gdGhlIGxhc3RcbiAgICAgICAgICAgIHNsaWRlVG9UaGVFbmQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZUNsYXNzKHN0YXR1c0xpc3QucHJldiwgY2Fyb3VzZWxQcm9wZXJ0aWVzPy5zbGlkZVByZXYsIGN1cnJlbnRBY3RpdmVJZHggLSAxKTtcbiAgICAgICAgICAgIHNldEN1cnJlbnRBY3RpdmVJZHgoY3VycmVudEFjdGl2ZUlkeCAtIDEpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIEZpcmVkIHdoZW4gY2xpY2tpbmcgXCJOZXh0XCIgYnV0dG9uXG4gICAgKi9cbiAgICBjb25zdCBuZXh0Q2xpY2tlZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRBY3RpdmVJZHggPT09IG51bWJlck9mQWxsSXRlbXMpIHtcbiAgICAgICAgICAgIC8vIHRoZSBhY3RpdmUgaXRlbSBpcyB0aGUgbGFzdCBvbmUsIG1vdmUgdG8gdGhlIGZpcnN0XG4gICAgICAgICAgICBjYXJvdXNlbFByb3BlcnRpZXM/LnNsaWRlVG8oMCk7XG4gICAgICAgICAgICByZXNldFNsaWRlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0QWN0aXZlQ2xhc3Moc3RhdHVzTGlzdC5uZXh0LCBjYXJvdXNlbFByb3BlcnRpZXM/LnNsaWRlTmV4dCwgY3VycmVudEFjdGl2ZUlkeCArIDEpO1xuICAgICAgICAgICAgc2V0Q3VycmVudEFjdGl2ZUlkeChjdXJyZW50QWN0aXZlSWR4ICsgMSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgUmVtb3ZlIHByZXZpb3VzIGFjdGl2ZSBpdGVtIGFuZCBnZXQgdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRoYXQgd2Ugd2FudCB0byBzZXQgaXQgYWN0aXZlXG4gICAgKi9cbiAgICBjb25zdCByZW1vdmVBY3RpdmVDbGFzcyA9IChzdGF0dXMsIGFsbEl0ZW1zKSA9PiB7XG4gICAgICAgIGxldCBpdGVtSWR4VG9TZXRBY3RpdmUgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsSXRlbXM/Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBnZXQgdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRoYXQgd2Ugd2FudCB0byBzZXQgaXQgYWN0aXZlIGluIHRoZSBcImFsbCBpdGVtc1wiIGFycmF5XG4gICAgICAgICAgICAvLyBOT1RFOiB3ZSBjYW4ndCB1c2UgdGhlIHN0YXRlIFwiY3VycmVudEFjdGl2ZUlkeFwiIGJlY2F1c2UgXCJhbGxJdGVtc1wiIGlzIGNvbnRhaW5pbmcgdGhlIGNsb25lZCBpdGVtIGFsc29cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBhbGxJdGVtc1tpXS5jbGFzc0xpc3Q/LmNvbnRhaW5zKGNvbW1vbkNsYXNzZXMuYWN0aXZlKSAmJlxuICAgICAgICAgICAgICAgICFhbGxJdGVtc1tpXT8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0Py5jb250YWlucyhcIl9fY2xvbmVkXCIpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBuZXh0IHByZXNzZWQgd2lsbCBiZSB0aGUgbmV4dCBpbmRleCwgaWYgcHJldmlvdXMgcHJlc3NlZCB3aWxsIGJlIHRoZSBwcmV2aW91cyBpbmRleFxuICAgICAgICAgICAgICAgIGl0ZW1JZHhUb1NldEFjdGl2ZSA9IHN0YXR1cyA9PT0gc3RhdHVzTGlzdC5uZXh0ID8gaSArIDEgOiBpIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsbEl0ZW1zW2ldLmNsYXNzTGlzdD8ucmVtb3ZlKGNvbW1vbkNsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtSWR4VG9TZXRBY3RpdmU7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIHNldHRpbmcgdGhlIGN1cnJlbiBhY3RpdmUgY2xhc3MsIGFuZCBzbGlkZSBsZWZ0IG9yIHJpZ2h0IHdoZW4gbmVlZGVkXG4gICAgKi9cbiAgICBjb25zdCBzZXRBY3RpdmVDbGFzcyA9IChzdGF0dXMsIHNsaWRlTGVmdE9yUmlnaHQsIGFjdGlvbklkeCkgPT4ge1xuICAgICAgICBsZXQgYWxsSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt1bmlxdWVDbGFzc31gKT8ucXVlcnlTZWxlY3RvckFsbChgLiR7Y29tbW9uQ2xhc3Nlcy5pdGVtfWApO1xuICAgICAgICBsZXQgaXRlbUlkeFRvU2V0QWN0aXZlID0gcmVtb3ZlQWN0aXZlQ2xhc3Moc3RhdHVzLCBhbGxJdGVtcyk7XG5cbiAgICAgICAgLy8gU2V0IGN1cnJlbnQgYWN0aXZlIGl0ZW1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gc3RhdHVzTGlzdC5yZXNldCkge1xuICAgICAgICAgICAgLy8gcXVlcnlTZWxlY3RvckFsbCA9PT4gdGhlIG9yaWdpbmFsIGl0ZW0gYW5kIHRoZSBjbG9uZWQgb25lXG4gICAgICAgICAgICAvLyBpbiB0aGlzIGNhc2UgdGhlIGZpcnN0IG9uZSBpcyB0aGUgb3JpZ2luYWwgLVwicmVhY3QtYWxpY2UtY2Fyb3VzZVwiIHdheSBvZiB3b3JrLVxuICAgICAgICAgICAgbGV0IGZpcnN0U2xpZGUgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGAuJHt1bmlxdWVDbGFzc31gKVxuICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvckFsbChgLiR7YWN0aXZlU2xpZGVDbGFzc2VzLmZpcnN0X2l0ZW19YCk7XG4gICAgICAgICAgICBmaXJzdFNsaWRlWzBdPy5jbGFzc0xpc3Q/LmFkZChjb21tb25DbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBzdGF0dXNMaXN0LmdvTGFzdCkge1xuICAgICAgICAgICAgLy8gcXVlcnlTZWxlY3RvckFsbCA9PT4gdGhlIG9yaWdpbmFsIGl0ZW0gYW5kIHRoZSBjbG9uZWQgb25lXG4gICAgICAgICAgICAvLyBpbiB0aGlzIGNhc2UgdGhlIHNlY29uZCBvbmUgaXMgdGhlIG9yaWdpbmFsIC1cInJlYWN0LWFsaWNlLWNhcm91c2VcIiB3YXkgb2Ygd29yay1cbiAgICAgICAgICAgIGxldCBsYXN0U2xpZGUgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGAuJHt1bmlxdWVDbGFzc31gKVxuICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvckFsbChgLiR7YWN0aXZlU2xpZGVDbGFzc2VzLmxhc3RfaXRlbX1gKTtcbiAgICAgICAgICAgIGxhc3RTbGlkZVsxXT8uY2xhc3NMaXN0Py5hZGQoY29tbW9uQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm90IGNvbnRhaW5pbmcgYWN0aXZlIG1lYW5zIHRoYXQgdGhlIG5leHQvcHJldiBpdGVtIGlzIG5vdCBhcHBlYXJpbmcgaW4gdGhlIHNjcmVlbiByaWdodCBub3dcbiAgICAgICAgICAgIC8vIHNsaWRlIHdoZW4gcmVhY2ggdG8gdGhlIHN0YXJ0L2VuZCBvZiB0aGUgYWN0aXZlIGl0ZW1cbiAgICAgICAgICAgIGlmICghYWxsSXRlbXNbaXRlbUlkeFRvU2V0QWN0aXZlXT8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0Py5jb250YWlucyhcIl9fYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVMZWZ0T3JSaWdodCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxsSXRlbXNbaXRlbUlkeFRvU2V0QWN0aXZlXT8uY2xhc3NMaXN0Py5hZGQoY29tbW9uQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlyZSB0aGUgYWN0aW9uIHRoYXQgcmVsYXRlZCB0byB0aGUgbmV3IGFjdGl2ZSBpdGVtXG4gICAgICAgIGxldCBhY3Rpb25Ub0ZpcmUgPSBwcm9wcy5hY3Rpb24/LmdldChwcm9wcy5kYXRhLml0ZW1zPy5bYWN0aW9uSWR4XSk7XG4gICAgICAgIG9uU2xpZGVDbGlja2VkKGFjdGlvblRvRmlyZSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIGZpcmVkIHdoZW4gaW5pdGlhbGl6YXRpb24gdGhlIGNhcm91c2VsXG4gICAgKi9cbiAgICBjb25zdCBvbkNhcm91c2VsSW5pdCA9IGUgPT4ge1xuICAgICAgICBzZXROdW1iZXJPZkRpc3BsYXllZEl0ZW1zKGUuaXRlbXNJblNsaWRlKTtcbiAgICAgICAgc2V0UmVzcG9uc2l2ZSh7IC4uLnJlc3BvbnNpdmUgfSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIGZpcmVkIHdoZW4gcmVzaXppbmcgdGhlIGNhcm91c2VsLCBjYXJvdXNlbCB3aWxsIGFsd2F5cyBzbGlkZSB0byB0aGUgZmlyc3QgaXRlbSB3aGVuIHJlc2l6aW5nIC1cInJlYWN0LWFsaWNlLWNhcm91c2VcIiB3YXkgb2Ygd29yay1cbiAgICAqL1xuICAgIGNvbnN0IG9uQ2Fyb3VzZWxSZXNpemUgPSBlID0+IHtcbiAgICAgICAgc2V0TnVtYmVyT2ZEaXNwbGF5ZWRJdGVtcyhlLml0ZW1zSW5TbGlkZSk7XG4gICAgICAgIHNldE5ld1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgcmVzZXRTbGlkZXIoKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgZmlyZWQgdGhlIGN1cnJlbnQgYWN0aXZlIGl0ZW0gYWN0aW9uIGlmIGZvdW5kXG4gICAgKi9cbiAgICBjb25zdCBvblNsaWRlQ2xpY2tlZCA9IGFjdGlvbiA9PiB7XG4gICAgICAgIGlmIChhY3Rpb24/LmNhbkV4ZWN1dGUpIGFjdGlvbi5leGVjdXRlKCk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy5kYXRhPy5zdGF0dXMgPT09IFwiYXZhaWxhYmxlXCIgJiYgIWNhcm91c2VsX2l0ZW1zPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBuZXdEYXRhID0gcHJvcHMuZGF0YS5pdGVtcy5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y29tbW9uQ2xhc3Nlcy5pdGVtfSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgaWR4ID09PSAwID8gYWN0aXZlU2xpZGVDbGFzc2VzLmZpcnN0X2l0ZW0gKyBcIiBcIiArIGNvbW1vbkNsYXNzZXMuYWN0aXZlIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9ICR7aWR4ID09PSBwcm9wcy5kYXRhLml0ZW1zLmxlbmd0aCAtIDEgPyBhY3RpdmVTbGlkZUNsYXNzZXMubGFzdF9pdGVtIDogXCJcIn1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNvbnRlbnQuZ2V0KGl0ZW0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSk7XG5cbiAgICAgICAgICAgIHNldE51bWJlck9mQWxsSXRlbXMobmV3RGF0YS5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIHNldF9jYXJvdXNlbF9pdGVtcyhuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9wcy5kYXRhXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBzZXQgYSB1bmlxdWUgY2xhc3MgaW4gY2FzZSBvZiB1c2luZyB0d28gZGlmZmVyZW50IGNhcm91c2VsIGluc3RhbmNlcyBpbiB0aGUgc2FtZSBkb2N1bWVudFxuICAgICAgICBzZXRVbmlxdWVDbGFzcyhcImEtXCIgKyB1dWlkdjQoKSk7XG4gICAgfSwgW10pO1xuXG4gICAgLypcbiAgICAgICAgc2V0IHRoZSByZXNwb25zaXZlIG9iamVjdCBhZnRlciBpbml0aWFsaXplIHRoZSBjb250YWluZXIgc28gaXQgdGFrZSB0aGUgY29ycmVjdCBkaW1lbnNpb25zXG4gICAgKi9cbiAgICBjb25zdCBjYXJvdXNlbENvbnRhaW5lciA9IHVzZUNhbGxiYWNrKG5vZGUgPT4ge1xuICAgICAgICBpZiAobm9kZSkgc2V0TmV3UmVzcG9uc2l2ZSgpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBjYXJvdXNlbF9pdGVtcz8ubGVuZ3RoID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWN0aXZlU2xpZGVDbGFzc2VzLmFjdGl2ZV9zbGlkZV9jb250YWluZXJ9IHJlZj17Y2Fyb3VzZWxDb250YWluZXJ9PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2FjdGl2ZVNsaWRlQ2xhc3Nlcy5wcmV2X2J0bn0gb25DbGljaz17cHJldkNsaWNrZWR9PjwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1t1bmlxdWVDbGFzcywgYWN0aXZlU2xpZGVDbGFzc2VzLmFjdGl2ZV9zbGlkZV93cmFwcGVyXS5qb2luKFwiIFwiKX0gcmVmPXtzbGlkZXJDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIHtyZXNwb25zaXZlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEFsaWNlQ2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgJ3JlYWN0LWFsaWNlLWNhcm91c2VsJyBhbGwgbWV0aG9kIGFuZCBwcm9wZXJ0aWVzIHNvIHdlIGNhbiBvdmVycmlkZSBkZWZhdWx0IG5leHQgYW5kIHByZXZpb3VzIGJ1dHRvbnMgYmVoYXZpb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWwgPT4gc2V0Q2Fyb3VzZWxQcm9wZXJ0aWVzKGVsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtjYXJvdXNlbF9pdGVtc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5PXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVCdXR0b25zQ29udHJvbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRG90c0NvbnRyb2xzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2luZyB0aGUgYW5pbWF0aW9uIER1cmF0aW9uIG1vcmUgdGhhbiAxMDAgd2lsbCBjcmFzaCB0aGUgc2xpZGluZyBpbiB0aGUgY2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uPXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZE5hdmlnYXRpb249e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VUcmFja2luZz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaFRyYWNraW5nPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5pdGlhbGl6ZWQ9e29uQ2Fyb3VzZWxJbml0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZXNpemVkPXtvbkNhcm91c2VsUmVzaXplfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXthY3RpdmVTbGlkZUNsYXNzZXMubmV4dF9idG59IG9uQ2xpY2s9e25leHRDbGlja2VkfT48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbW1vbkNsYXNzZXMubXVsdGlfZW1wdHlfY29udGFpbmVyfT48L2Rpdj5cbiAgICApO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi91aS9NdWx0aUNhcm91c2VsLmNzc1wiO1xuaW1wb3J0IE5vcm1hbENhcm91c2VsIGZyb20gXCIuL2NvbXBvbmVudHMvTm9ybWFsQ2Fyb3VzZWxcIjtcbmltcG9ydCBBY3RpdmVTbGlkZUNhcm91c2VsIGZyb20gXCIuL2NvbXBvbmVudHMvQWN0aXZlU2xpZGVDYXJvdXNlbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gTXVsdGlDYXJvdXNlbChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgICgocHJvcHMuY2Fyb3VzZWxUeXBlID09PSBcIm5vcm1hbFwiIHx8IHByb3BzLmNhcm91c2VsVHlwZSA9PT0gXCJhY3RpdmVcIikgJiYgKFxuICAgICAgICAgICAgPE5vcm1hbENhcm91c2VsXG4gICAgICAgICAgICAgICAgY2Fyb3VzZWxUeXBlPXtwcm9wcy5jYXJvdXNlbFR5cGV9XG4gICAgICAgICAgICAgICAgZGF0YT17cHJvcHMuZGF0YX1cbiAgICAgICAgICAgICAgICBhY3Rpb249e3Byb3BzLmFjdGlvbn1cbiAgICAgICAgICAgICAgICBjb250ZW50PXtwcm9wcy5jb250ZW50fVxuICAgICAgICAgICAgICAgIGluZmluaXRlPXtwcm9wcy5pbmZpbml0ZX1cbiAgICAgICAgICAgICAgICBhdXRvUGxheT17cHJvcHMuYXV0b1BsYXl9XG4gICAgICAgICAgICAgICAgYXV0b1BsYXlEaXJlY3Rpb249e3Byb3BzLmF1dG9QbGF5RGlyZWN0aW9ufVxuICAgICAgICAgICAgICAgIGF1dG9QbGF5Q29udHJvbHM9e3Byb3BzLmF1dG9QbGF5Q29udHJvbHN9XG4gICAgICAgICAgICAgICAgZGlzYWJsZUJ1dHRvbnNDb250cm9scz17cHJvcHMuZGlzYWJsZUJ1dHRvbnNDb250cm9sc31cbiAgICAgICAgICAgICAgICBkaXNhYmxlRG90c0NvbnRyb2xzPXtwcm9wcy5kaXNhYmxlRG90c0NvbnRyb2xzfVxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uPXtwcm9wcy5hbmltYXRpb25EdXJhdGlvbn1cbiAgICAgICAgICAgICAgICBhbmltYXRpb25UeXBlPXtwcm9wcy5hbmltYXRpb25UeXBlfVxuICAgICAgICAgICAgICAgIGtleWJvYXJkTmF2aWdhdGlvbj17cHJvcHMua2V5Ym9hcmROYXZpZ2F0aW9ufVxuICAgICAgICAgICAgICAgIG1vdXNlVHJhY2tpbmc9e3Byb3BzLm1vdXNlVHJhY2tpbmd9XG4gICAgICAgICAgICAgICAgdG91Y2hUcmFja2luZz17cHJvcHMudG91Y2hUcmFja2luZ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICkpIHx8XG4gICAgICAgIChwcm9wcy5jYXJvdXNlbFR5cGUgPT09IFwic2xpZGVcIiAmJiAoXG4gICAgICAgICAgICA8QWN0aXZlU2xpZGVDYXJvdXNlbCBkYXRhPXtwcm9wcy5kYXRhfSBhY3Rpb249e3Byb3BzLmFjdGlvbn0gY29udGVudD17cHJvcHMuY29udGVudH0gLz5cbiAgICAgICAgKSkgfHwgPGRpdj5FcnJvcjwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJ0eXBlcyIsIlRyYWNlRGlyZWN0aW9uS2V5IiwiRGlyZWN0aW9uIiwiQXhpcyIsImNhbGN1bGF0ZURpcmVjdGlvbl8xIiwiY2FsY3VsYXRlRGlyZWN0aW9uIiwiX3R5cGVzIiwicmVxdWlyZSIsInRyYWNlIiwiZGlyZWN0aW9uIiwibmVnYXRpdmUiLCJORUdBVElWRSIsInBvc2l0aXZlIiwiUE9TSVRJVkUiLCJjdXJyZW50IiwibGVuZ3RoIiwicHJldmlvdXMiLCJldmVyeSIsImkiLCJOT05FIiwiY29tbW9uIiwiZ2V0RGlyZWN0aW9uS2V5Iiwib2JqZWN0IiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwia2V5Iiwia2V5cyIsInRvU3RyaW5nIiwiZ2V0RGlyZWN0aW9uVmFsdWUiLCJ2YWx1ZXMiLCJnZXREaWZmZXJlbmNlIiwieCIsInkiLCJNYXRoIiwiYWJzIiwicmVzb2x2ZUF4aXNEaXJlY3Rpb24iLCJheGlzIiwiTEVGVCIsIlJJR0hUIiwiWSIsIkJPVFRPTSIsIlRPUCIsImNhbGN1bGF0ZURpcmVjdGlvbkRlbHRhXzEiLCJjYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSIsIl9jb21tb24iLCJ0cmFjZURpcmVjdGlvbnMiLCJkZWx0YSIsImN1cnJlbnRLZXkiLCJjdXJyZW50VmFsdWUiLCJwcmV2IiwicHJldktleSIsInByZXZWYWx1ZSIsImRpZmZlcmVuY2UiLCJjYWxjdWxhdGVEdXJhdGlvbl8xIiwiY2FsY3VsYXRlRHVyYXRpb24iLCJwcmV2VGltZSIsIm5leHRUaW1lIiwiY2FsY3VsYXRlTW92aW5nUG9zaXRpb25fMSIsImNhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uIiwiZSIsInRvdWNoZXMiLCJjaGFuZ2VkVG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwidXBkYXRlVHJhY2VfMSIsInVwZGF0ZVRyYWNlIiwibGFzdCIsInB1c2giLCJjYWxjdWxhdGVUcmFjZURpcmVjdGlvbnNfMSIsImNhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucyIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsInRpY2tzIiwidGljayIsImN1cnJlbnREaXJlY3Rpb24iLCJzbGljZSIsInJlc29sdmVEaXJlY3Rpb25fMSIsInJlc29sdmVEaXJlY3Rpb24iLCJfY2FsY3VsYXRlRGlyZWN0aW9uIiwiX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucyIsIl9jYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSIsIlgiLCJkaXJlY3Rpb25EZWx0YSIsImRpcmVjdGlvbnMiLCJfZGlyZWN0aW9uIiwiY2FsY3VsYXRlVmVsb2NpdHlfMSIsImNhbGN1bGF0ZVZlbG9jaXR5IiwidGltZSIsIm1hZ25pdHVkZSIsInNxcnQiLCJjYWxjdWxhdGVQb3NpdGlvbl8xIiwiY2FsY3VsYXRlUG9zaXRpb24iLCJfdXBkYXRlVHJhY2UiLCJfcmVzb2x2ZURpcmVjdGlvbiIsIl9jYWxjdWxhdGVEdXJhdGlvbiIsIl9jYWxjdWxhdGVWZWxvY2l0eSIsInN0YXRlIiwib3B0aW9ucyIsInN0YXJ0IiwidHJhY2VYIiwidHJhY2VZIiwicm90YXRlUG9zaXRpb24iLCJkZWx0YVgiLCJkZWx0YVkiLCJhYnNYIiwiYWJzWSIsImRpcmVjdGlvblgiLCJkaXJlY3Rpb25ZIiwiZHVyYXRpb24iLCJEYXRlIiwibm93IiwidmVsb2NpdHkiLCJwb3NpdGlvblgiLCJwb3NpdGlvblkiLCJjaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzXzEiLCJjaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzIiwiQm9vbGVhbiIsImNyZWF0ZU9wdGlvbnNfMSIsImNyZWF0ZU9wdGlvbnMiLCJwcm94eSIsImdldCIsImlzUGFzc2l2ZVN1cHBvcnRlZCIsImNoZWNrSXNQYXNzaXZlU3VwcG9ydGVkXzEiLCJjaGVja0lzUGFzc2l2ZVN1cHBvcnRlZCIsIl9jcmVhdGVPcHRpb25zIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5vb3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXJyIiwiY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkXzEiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImNoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwiZ2V0SW5pdGlhbFN0YXRlXzEiLCJvd25LZXlzIiwiZW51bWVyYWJsZU9ubHkiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0Iiwic291cmNlIiwiZm9yRWFjaCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZ2V0SW5pdGlhbFN0YXRlIiwiaXNTd2lwaW5nIiwiZ2V0SW5pdGlhbFByb3BzXzEiLCJnZXRJbml0aWFsUHJvcHMiLCJwcm9wcyIsImVsZW1lbnQiLCJyb3RhdGlvbkFuZ2xlIiwibW91c2VUcmFja2luZ0VuYWJsZWQiLCJ0b3VjaFRyYWNraW5nRW5hYmxlZCIsInByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQiLCJwcmV2ZW50VHJhY2tpbmdPbk1vdXNlbGVhdmUiLCJnZXRPcHRpb25zXzEiLCJnZXRPcHRpb25zIiwicGFzc2l2ZSIsInJvdGF0ZUJ5QW5nbGVfMSIsInJvdGF0ZUJ5QW5nbGUiLCJwb3NpdGlvbiIsImFuZ2xlIiwiYW5nbGVJblJhZGlhbnMiLCJQSSIsInJvdGF0ZWRYIiwiY29zIiwic2luIiwicm90YXRlZFkiLCJfY2FsY3VsYXRlTW92aW5nUG9zaXRpb24iLCJfY2FsY3VsYXRlUG9zaXRpb24iLCJfY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyIsIl9jaGVja0lzUGFzc2l2ZVN1cHBvcnRlZCIsIl9jaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQiLCJfZ2V0SW5pdGlhbFN0YXRlIiwiX2dldEluaXRpYWxQcm9wcyIsIl9nZXRPcHRpb25zIiwiX3JvdGF0ZUJ5QW5nbGUiLCJfZXhwb3J0TmFtZXMiLCJVdGlscyIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwibm9kZUludGVyb3AiLCJXZWFrTWFwIiwiY2FjaGVCYWJlbEludGVyb3AiLCJjYWNoZU5vZGVJbnRlcm9wIiwiX19lc01vZHVsZSIsImNhY2hlIiwiaGFzIiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZGVzYyIsInNldCIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsImRlc2NyaXB0b3IiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJWYW5pbGxhU3dpcGUiLCJoYW5kbGVTd2lwZVN0YXJ0IiwiYmluZCIsImhhbmRsZVN3aXBlTW92ZSIsImhhbmRsZVN3aXBlRW5kIiwiaGFuZGxlTW91c2VEb3duIiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlTW91c2VVcCIsImhhbmRsZU1vdXNlTGVhdmUiLCJpbml0Iiwic2V0dXBUb3VjaExpc3RlbmVycyIsInNldHVwTW91c2VMaXN0ZW5lcnMiLCJ1cGRhdGUiLCJwcmV2UHJvcHMiLCJuZXh0UHJvcHMiLCJhc3NpZ24iLCJkZXN0cm95IiwiY2xlYW51cE1vdXNlTGlzdGVuZXJzIiwiY2xlYW51cFRvdWNoTGlzdGVuZXJzIiwiX3RoaXMkcHJvcHMiLCJsaXN0ZW5lciIsIl90aGlzJHByb3BzMiIsIl90aGlzJHByb3BzMyIsImdldEV2ZW50RGF0YSIsIm1vdmluZ1Bvc2l0aW9uIiwiX1V0aWxzJHJvdGF0ZUJ5QW5nbGUiLCJfdGhpcyRzdGF0ZSIsIl90aGlzJGdldEV2ZW50RGF0YSIsIl90aGlzJHByb3BzNCIsIm9uU3dpcGVTdGFydCIsIm9uU3dpcGluZyIsImNhbmNlbGFibGUiLCJwcmV2ZW50RGVmYXVsdCIsIk51bWJlciIsIl90aGlzJHByb3BzNSIsIm9uU3dpcGVkIiwib25UYXAiLCJfcG9zaXRpb24iLCJpc1RvdWNoRXZlbnRzU3VwcG9ydGVkIiwiQUNUSU9OIiwiSU5JVCIsIlJFU0laRSIsIlVQREFURSIsIkV2ZW50VHlwZSIsIkZBREVPVVQiLCJTTElERSIsIkFuaW1hdGlvblR5cGUiLCJERUZBVUxUIiwiQUxMIiwiQXV0b1BsYXlTdHJhdGVneSIsIkFMVEVSTkFURSIsIlJFU1BPTlNJVkUiLCJDb250cm9sc1N0cmF0ZWd5IiwiUlRMIiwiTFRSIiwiQXV0b3BsYXlEaXJlY3Rpb24iLCJBTklNQVRFRCIsIlJPT1QiLCJXUkFQUEVSIiwiU1RBR0UiLCJTVEFHRV9JVEVNIiwiRE9UUyIsIkRPVFNfSVRFTSIsIlBMQVlfQlROIiwiUExBWV9CVE5fSVRFTSIsIlBMQVlfQlROX1dSQVBQRVIiLCJTTElERV9JTkZPIiwiU0xJREVfSU5GT19JVEVNIiwiQlVUVE9OX1BSRVYiLCJCVVRUT05fUFJFVl9XUkFQUEVSIiwiQlVUVE9OX1BSRVZfSVRFTSIsIkJVVFRPTl9ORVhUIiwiQlVUVE9OX05FWFRfV1JBUFBFUiIsIkJVVFRPTl9ORVhUX0lURU0iLCJDbGFzc25hbWVzIiwiQUNUSVZFIiwiSU5BQ1RJVkUiLCJDTE9ORUQiLCJDVVNUT00iLCJQQVVTRSIsIlNFUEFSQVRPUiIsIlNTUiIsIlRBUkdFVCIsIk1vZGlmaWVycyIsInR5cGVzXzEiLCJhY3RpdmVJbmRleCIsImFuaW1hdGlvbkR1cmF0aW9uIiwiYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb24iLCJhbmltYXRpb25UeXBlIiwiYXV0b0hlaWdodCIsImF1dG9XaWR0aCIsImF1dG9QbGF5IiwiYXV0b1BsYXlDb250cm9scyIsImF1dG9QbGF5RGlyZWN0aW9uIiwiYXV0b1BsYXlJbnRlcnZhbCIsImF1dG9QbGF5U3RyYXRlZ3kiLCJjaGlsZHJlbiIsImNvbnRyb2xzU3RyYXRlZ3kiLCJkaXNhYmxlQnV0dG9uc0NvbnRyb2xzIiwiZGlzYWJsZURvdHNDb250cm9scyIsImRpc2FibGVTbGlkZUluZm8iLCJpbmZpbml0ZSIsImlubmVyV2lkdGgiLCJpdGVtcyIsImtleWJvYXJkTmF2aWdhdGlvbiIsIm1vdXNlVHJhY2tpbmciLCJuYW1lIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJyZXNwb25zaXZlIiwic3dpcGVEZWx0YSIsInN3aXBlRXh0cmFQYWRkaW5nIiwic3NyU2lsZW50TW9kZSIsInRvdWNoVHJhY2tpbmciLCJ0b3VjaE1vdmVEZWZhdWx0RXZlbnRzIiwib25Jbml0aWFsaXplZCIsIm9uUmVzaXplZCIsIm9uUmVzaXplRXZlbnQiLCJvblNsaWRlQ2hhbmdlIiwib25TbGlkZUNoYW5nZWQiLCJfX2Fzc2lnbiIsIm8iLCJ0IiwiciIsInMiLCJtYXBQYXJ0aWFsQ29vcmRzIiwibWFwIiwid2lkdGgiLCJtYXBQb3NpdGlvbkNvb3JkcyIsImdldFNoaWZ0SW5kZXgiLCJnZXRTdGFydEluZGV4IiwiZ2V0QWN0aXZlSW5kZXgiLCJzdGFydEluZGV4IiwiaXRlbXNDb3VudCIsImdldFVwZGF0ZVNsaWRlUG9zaXRpb25JbmRleCIsInNob3VsZFJlY2FsY3VsYXRlU2xpZGVJbmRleCIsInNob3VsZENhbmNlbFNsaWRlQW5pbWF0aW9uIiwiZ2V0U3dpcGVMaW1pdE1pbiIsIml0ZW1zT2Zmc2V0IiwidHJhbnNmb3JtYXRpb25TZXQiLCJtaW4iLCJnZXRTd2lwZUxpbWl0TWF4IiwibiIsIml0ZW1zSW5TbGlkZSIsImdldEl0ZW1Db29yZHMiLCJzaG91bGRSZWNhbGN1bGF0ZVN3aXBlUG9zaXRpb24iLCJnZXRJc0xlZnREaXJlY3Rpb24iLCJnZXRTd2lwZVNoaWZ0VmFsdWUiLCJnZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleCIsImZpbmRJbmRleCIsImdldFN3aXBlVHJhbnNmb3JtYXRpb25DdXJzb3IiLCJnZXRTd2lwZVRvdWNoZW5kUG9zaXRpb24iLCJpc1N0YWdlQ29udGVudFBhcnRpYWwiLCJzd2lwZUFsbG93ZWRQb3NpdGlvbk1heCIsImdldFN3aXBlVG91Y2hlbmRJbmRleCIsImQiLCJhIiwidHJhbnNsYXRlM2QiLCJnZXRGYWRlb3V0QW5pbWF0aW9uSW5kZXgiLCJnZXRGYWRlb3V0QW5pbWF0aW9uUG9zaXRpb24iLCJzdGFnZVdpZHRoIiwiaXNWZXJ0aWNhbFRvdWNobW92ZURldGVjdGVkIiwiY29tbW9uXzEiLCJtYXBwZXJzXzEiLCJtYXRoXzEiLCJnZXRTbGlkZXMiLCJnZXRJdGVtc0NvdW50IiwiZ2V0SXRlbXNPZmZzZXQiLCJjcmVhdGVDbG9uZXMiLCJnZXRJdGVtc0luU2xpZGUiLCJ1bnNoaWZ0IiwiY29uY2F0IiwiaXNFbGVtZW50IiwiRWxlbWVudCIsIkhUTUxEb2N1bWVudCIsImNyZWF0ZUF1dG93aWR0aFRyYW5zZm9ybWF0aW9uU2V0IiwiQXJyYXkiLCJmcm9tIiwicmVkdWNlIiwiZ2V0RWxlbWVudERpbWVuc2lvbnMiLCJmaXJzdENoaWxkIiwiY29vcmRzIiwiY29udGVudCIsInBhcnRpYWwiLCJjcmVhdGVEZWZhdWx0VHJhbnNmb3JtYXRpb25TZXQiLCJnZXRJdGVtV2lkdGgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJnZXRBdXRvaGVpZ2h0UHJvcGVydHkiLCJnZXRFbGVtZW50Q3Vyc29yIiwiZ2V0RWxlbWVudEZpcnN0Q2hpbGQiLCJnZXRDb21wdXRlZFN0eWxlIiwicGFyc2VGbG9hdCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImNlaWwiLCJvZmZzZXRIZWlnaHQiLCJzaG91bGRIYW5kbGVSZXNpemVFdmVudCIsImFuaW1hdGUiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJnZXRSZW5kZXJXcmFwcGVyU3R5bGVzIiwiZ2V0VHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0UmVuZGVyU3RhZ2VTdHlsZXMiLCJnZXRSZW5kZXJTdGFnZUl0ZW1TdHlsZXMiLCJmYWRlb3V0QW5pbWF0aW9uSW5kZXgiLCJmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb24iLCJmYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZyIsImdldFRyYW5zbGF0ZTNkUHJvcGVydHkiLCJnZXRUb3VjaG1vdmVUcmFuc2xhdGVQb3NpdGlvbiIsImZsb29yIiwiZ2V0VHJhbnNsYXRlWFByb3BlcnR5IiwiZ2V0VHJhbnNmb3JtTWF0cml4IiwibWF0Y2giLCJlbGVtZW50c18xIiwiY2FuVXNlRE9NIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29uY2F0Q2xhc3NuYW1lcyIsImpvaW4iLCJnZXRJc1N0YWdlQ29udGVudFBhcnRpYWwiLCJpdGVtc0ZpdCIsImNhbGN1bGF0ZUluaXRpYWxTdGF0ZSIsImwiLCJtIiwiYyIsInUiLCJmIiwiZyIsIkkiLCJTIiwicCIsInYiLCJjbG9uZXMiLCJzdGFnZUNvbnRlbnRXaWR0aCIsImluaXRpYWxTdGFnZUhlaWdodCIsImlzQXV0b1BsYXlpbmciLCJpc0F1dG9QbGF5Q2FuY2VsZWRPbkFjdGlvbiIsInN3aXBlTGltaXRNaW4iLCJzd2lwZUxpbWl0TWF4Iiwic3dpcGVTaGlmdFZhbHVlIiwiY2FuVXNlRG9tIiwiZ2V0UmVuZGVyU3RhZ2VJdGVtQ2xhc3NlcyIsImlzQWN0aXZlSXRlbSIsImlzQ2xvbmVkSXRlbSIsImlzVGFyZ2V0SXRlbSIsImRlYm91bmNlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImRlYnVnIiwiY29uc29sZSIsImdldEFjdGl2ZVNsaWRlSW5kZXgiLCJnZXRTbGlkZUluZGV4Rm9yTm9uTXVsdGlwbGVJdGVtcyIsImdldFNsaWRlSW5kZXhGb3JNdWx0aXBsZUl0ZW1zIiwiZ2V0QWN0aXZlU2xpZGVEb3RzTGVuZ3RoIiwiZ2V0U2xpZGVJbmZvIiwiaXRlbSIsImdldFNsaWRlSXRlbUluZm8iLCJpc1ByZXZTbGlkZURpc2FibGVkIiwiaXNOZXh0U2xpZGVEaXNhYmxlZCIsInNob3VsZERpc2FibGVDb250cm9scyIsImlzU3RyYXRlZ3kiLCJzaG91bGREaXNhYmxlRG90cyIsInNob3VsZERpc2FibGVCdXR0b25zIiwiaW5jbHVkZXMiLCJoYXNEb3RGb3JFYWNoU2xpZGUiLCJnZXREb3RzTmF2aWdhdGlvbkxlbmd0aCIsImNoZWNrSXNUaGVMYXN0RG90SW5kZXgiLCJnZXRJdGVtSW5kZXhGb3JEb3ROYXZpZ2F0aW9uIiwic2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkFjdGlvbiIsInNob3VsZENhbmNlbEF1dG9QbGF5T25Ib3ZlciIsIl9fY3JlYXRlQmluZGluZyIsImNyZWF0ZSIsIl9fZXhwb3J0U3RhciIsIl9faW1wb3J0RGVmYXVsdCIsImRlZmF1bHQiLCJyZWFjdF8xIiwidXRpbHNfMSIsIlNsaWRlSW5mbyIsInJlbmRlclNsaWRlSW5mbyIsImNsYXNzTmFtZSIsIlN0YWdlSXRlbSIsInN0eWxlcyIsIkRvdHNOYXZpZ2F0aW9uIiwib25DbGljayIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInJlbmRlckRvdHNJdGVtIiwiXyIsIkQiLCJpc0FjdGl2ZSIsIlBsYXlQYXVzZUJ1dHRvbiIsImlzUGxheWluZyIsInJlbmRlclBsYXlQYXVzZUJ1dHRvbiIsIlByZXZOZXh0QnV0dG9uIiwiaXNEaXNhYmxlZCIsInJlbmRlclByZXZCdXR0b24iLCJyZW5kZXJOZXh0QnV0dG9uIiwiU2xpZGVJbmZvXzEiLCJTdGFnZUl0ZW1fMSIsIkRvdHNOYXZpZ2F0aW9uXzEiLCJQbGF5UGF1c2VCdXR0b25fMSIsIlByZXZOZXh0QnV0dG9uXzEiLCJfX2V4dGVuZHMiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIlN0cmluZyIsIl9fc2V0TW9kdWxlRGVmYXVsdCIsIl9faW1wb3J0U3RhciIsIl9fYXdhaXRlciIsIlByb21pc2UiLCJuZXh0IiwidGhyb3ciLCJkb25lIiwidGhlbiIsIl9fZ2VuZXJhdG9yIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsInJldHVybiIsInBvcCIsInZhbmlsbGFfc3dpcGVfMSIsImRlZmF1bHRQcm9wc18xIiwiVmlld3MiLCJBbGljZUNhcm91c2VsIiwic3dpcGVMaXN0ZW5lciIsIl9oYW5kbGVLZXlib2FyZEV2ZW50cyIsImNvZGUiLCJfaGFuZGxlUGxheVBhdXNlVG9nZ2xlIiwic2xpZGVQcmV2Iiwic2xpZGVOZXh0IiwiX2hhbmRsZUJlZm9yZVNsaWRlRW5kIiwiX2hhbmRsZVVwZGF0ZVNsaWRlUG9zaXRpb24iLCJzZXRTdGF0ZSIsIl9oYW5kbGVTbGlkZUNoYW5nZWQiLCJfaGFuZGxlTW91c2VFbnRlciIsImlzSG92ZXJlZCIsIl9oYW5kbGVQYXVzZSIsIl9oYW5kbGVNb3VzZUxlYXZlIiwiX2hhbmRsZVBsYXkiLCJfY2xlYXJBdXRvUGxheVRpbWVvdXQiLCJoYXNVc2VyQWN0aW9uIiwiX3NldFJvb3RDb21wb25lbnRSZWYiLCJyb290RWxlbWVudCIsIl9zZXRTdGFnZUNvbXBvbmVudFJlZiIsInN0YWdlQ29tcG9uZW50IiwiX3JlbmRlclN0YWdlSXRlbSIsIl9yZW5kZXJTbGlkZUluZm8iLCJpc0FuaW1hdGlvbkRpc2FibGVkIiwiaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZCIsImNhbmNlbFRvdWNoQW5pbWF0aW9ucyIsInJvb3RDb21wb25lbnREaW1lbnNpb25zIiwic3RhcnRUb3VjaG1vdmVQb3NpdGlvbiIsInNsaWRlVG8iLCJfaGFuZGxlVG91Y2htb3ZlIiwiX2hhbmRsZVRvdWNoZW5kIiwiX2hhbmRsZURvdENsaWNrIiwiX2hhbmRsZVJlc2l6ZSIsIl9oYW5kbGVSZXNpemVEZWJvdW5jZWQiLCJfY2FuY2VsUmVzaXplRGVib3VuY2VkIiwiY29tcG9uZW50RGlkTW91bnQiLCJfc2V0SW5pdGlhbFN0YXRlIiwiX2FkZEV2ZW50TGlzdGVuZXJzIiwiX3NldHVwU3dpcGVIYW5kbGVycyIsImNvbXBvbmVudERpZFVwZGF0ZSIsImgiLCJfdXBkYXRlQ29tcG9uZW50IiwiX3VwZGF0ZVN3aXBlUHJvcHMiLCJfdXBkYXRlRXZlbnRMaXN0ZW5lcnMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIl9jYW5jZWxUaW1lb3V0QW5pbWF0aW9ucyIsIl9yZW1vdmVFdmVudExpc3RlbmVycyIsInNsaWRlIiwidHlwZSIsImlzRmFkZW91dEFuaW1hdGlvbkFsbG93ZWQiLCJfaGFuZGxlU2xpZGVUbyIsImV2ZW50VHlwZSIsImlzVHJ1c3RlZCIsIl9oYW5kbGVSZXNpemVkIiwiX3NldFRvdWNobW92ZVBvc2l0aW9uIiwiX2hhbmRsZVNsaWRlQ2hhbmdlIiwidG91Y2htb3ZlUG9zaXRpb24iLCJfY2xlYXJUb3VjaG1vdmVQb3NpdGlvbiIsIl9oYW5kbGVCZWZvcmVUb3VjaEVuZCIsInRvdWNoRW5kVGltZW91dElkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2xpZGVFbmRUaW1lb3V0SWQiLCJldmVudE9iamVjdCIsIl9zZXRBdXRvUGxheUludGVydmFsIiwiX2NsZWFyU2xpZGVFbmRUaW1lb3V0IiwiY2xlYXJUb3VjaGVuZFRpbWVvdXQiLCJhdXRvUGxheVRpbWVvdXRJZCIsIl9yZW5kZXJEb3RzTmF2aWdhdGlvbiIsIl9yZW5kZXJQcmV2QnV0dG9uIiwiX3JlbmRlck5leHRCdXR0b24iLCJfcmVuZGVyUGxheVBhdXNlQnV0dG9uIiwicmVuZGVyIiwicmVmIiwiZGVmYXVsdFByb3BzIiwiUHVyZUNvbXBvbmVudCIsImdldFJhbmRvbVZhbHVlcyIsInJuZHM4IiwiVWludDhBcnJheSIsInJuZyIsImNyeXB0byIsIkVycm9yIiwidmFsaWRhdGUiLCJ1dWlkIiwiUkVHRVgiLCJ0ZXN0IiwiYnl0ZVRvSGV4IiwidW5zYWZlU3RyaW5naWZ5IiwiYXJyIiwib2Zmc2V0IiwidG9Mb3dlckNhc2UiLCJwYXJzZSIsInBhcnNlSW50Iiwic3RyaW5nVG9CeXRlcyIsInN0ciIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYnl0ZXMiLCJjaGFyQ29kZUF0IiwiRE5TIiwiVVJMIiwidjM1IiwidmVyc2lvbiIsImhhc2hmdW5jIiwiZ2VuZXJhdGVVVUlEIiwibmFtZXNwYWNlIiwiYnVmIiwiX25hbWVzcGFjZSIsIm1kNSIsIm1zZyIsIm1kNVRvSGV4RW5jb2RlZEFycmF5Iiwid29yZHNUb01kNSIsImJ5dGVzVG9Xb3JkcyIsImlucHV0Iiwib3V0cHV0IiwibGVuZ3RoMzIiLCJoZXhUYWIiLCJoZXgiLCJjaGFyQXQiLCJnZXRPdXRwdXRMZW5ndGgiLCJpbnB1dExlbmd0aDgiLCJsZW4iLCJiIiwib2xkYSIsIm9sZGIiLCJvbGRjIiwib2xkZCIsIm1kNWZmIiwibWQ1Z2ciLCJtZDVoaCIsIm1kNWlpIiwic2FmZUFkZCIsImxlbmd0aDgiLCJVaW50MzJBcnJheSIsImxzdyIsIm1zdyIsImJpdFJvdGF0ZUxlZnQiLCJudW0iLCJjbnQiLCJtZDVjbW4iLCJxIiwicmFuZG9tVVVJRCIsInY0IiwibmF0aXZlIiwicm5kcyIsInJhbmRvbSIsInoiLCJST1RMIiwic2hhMSIsIksiLCJIIiwiaXNBcnJheSIsIk4iLCJNIiwiaiIsInBvdyIsIlciLCJUIiwiZGVmYXVsdFJlc3BvbnNpdmUiLCJnZXROZXdSZXNwb25zaXZlVmFsdWVzIiwicmF0ZSIsIm5ld1Jlc3BvbnNpdmUiLCJuZXdWYWx1ZSIsInJvdW5kIiwibWF4Iiwic3RhdHVzTGlzdCIsInJlc2V0IiwiZ29MYXN0IiwiY2xhc3Nlc0FjdGlvbiIsImFkZCIsInJlbW92ZSIsImNvbW1vbkNsYXNzZXMiLCJtdWx0aV9jb250YWluZXIiLCJtdWx0aV9lbXB0eV9jb250YWluZXIiLCJhY3RpdmUiLCJub19kb3RzIiwibm9ybWFsQ2Fyb3VzZWxDbGFzc2VzIiwibm9ybWFsX2NvbnRhaW5lciIsIm5vcm1hbF9pdGVtIiwiYWN0aXZlQ2xpY2tDbGFzc2VzIiwiYWN0aXZlX2NsaWNrX2NvbnRhaW5lciIsImFjdGl2ZV9jbGlja19pdGVtIiwiYWN0aXZlX2NsaWNrX3dpdGhfYnRuIiwiYWN0aXZlU2xpZGVDbGFzc2VzIiwiYWN0aXZlX3NsaWRlX2NvbnRhaW5lciIsImFjdGl2ZV9zbGlkZV93cmFwcGVyIiwiZmlyc3RfaXRlbSIsImxhc3RfaXRlbSIsInByZXZfYnRuIiwibmV4dF9idG4iLCJOb3JtYWxDYXJvdXNlbCIsImNhcm91c2VsUGFyZW50IiwidXNlUmVmIiwiY2Fyb3VzZWxfaXRlbXMiLCJzZXRfY2Fyb3VzZWxfaXRlbXMiLCJ1c2VTdGF0ZSIsInNldFJlc3BvbnNpdmUiLCJ1bmlxdWVDbGFzcyIsInNldFVuaXF1ZUNsYXNzIiwic2V0TmV3UmVzcG9uc2l2ZSIsImNsaWVudFdpZHRoIiwiYWRkT3JSZW1vdmVDbGFzc05hbWUiLCJub2RlIiwiYWN0aW9uIiwiY2xhc3NMaXN0IiwiY2hhbmdlQWN0aXZlQ2xhc3MiLCJnZXRJZHhDbGFzc05hbWUiLCJjbGlja2VkSXRlbSIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsImNsYXNzTmFtZXMiLCJzcGxpdCIsIm9uQ2FyZENsaWNrZWQiLCJjYW5FeGVjdXRlIiwiZXhlY3V0ZSIsImFjdGl2ZU5vZGUiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImlkeENsYXNzIiwiaXRlbVRvU2V0QWN0aXZlIiwiY2Fyb3VzZWxUeXBlIiwidXNlRWZmZWN0IiwidXVpZHY0IiwicmVzaXplT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiZGF0YSIsInN0YXR1cyIsImFjdGl2ZV9jbGlja19jbGlja2FibGVfaXRlbSIsIkFjdGl2ZVNsaWRlQ2Fyb3VzZWwiLCJzbGlkZXJDb250YWluZXIiLCJjdXJyZW50QWN0aXZlSWR4Iiwic2V0Q3VycmVudEFjdGl2ZUlkeCIsIm51bWJlck9mRGlzcGxheWVkSXRlbXMiLCJzZXROdW1iZXJPZkRpc3BsYXllZEl0ZW1zIiwibnVtYmVyT2ZBbGxJdGVtcyIsInNldE51bWJlck9mQWxsSXRlbXMiLCJjYXJvdXNlbFByb3BlcnRpZXMiLCJzZXRDYXJvdXNlbFByb3BlcnRpZXMiLCJyZXNldFNsaWRlciIsInNldEFjdGl2ZUNsYXNzIiwic2xpZGVUb1RoZUVuZCIsInByZXZDbGlja2VkIiwibmV4dENsaWNrZWQiLCJyZW1vdmVBY3RpdmVDbGFzcyIsImFsbEl0ZW1zIiwiaXRlbUlkeFRvU2V0QWN0aXZlIiwicGFyZW50RWxlbWVudCIsInNsaWRlTGVmdE9yUmlnaHQiLCJhY3Rpb25JZHgiLCJmaXJzdFNsaWRlIiwibGFzdFNsaWRlIiwiYWN0aW9uVG9GaXJlIiwib25TbGlkZUNsaWNrZWQiLCJvbkNhcm91c2VsSW5pdCIsIm9uQ2Fyb3VzZWxSZXNpemUiLCJuZXdEYXRhIiwiaWR4IiwiY2Fyb3VzZWxDb250YWluZXIiLCJ1c2VDYWxsYmFjayIsImVsIiwiTXVsdGlDYXJvdXNlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztDQUVB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LENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFQyxXQUFXLEVBQUUsQ0FBQTtDQUNwZ0I7O0NDZEEsU0FBU0MsS0FBS0EsQ0FBQ1IsSUFBSSxFQUFFO0NBQ25CLEVBQUEsSUFBSSxDQUFDRCxRQUFRLENBQUNDLElBQUksQ0FBQyxFQUFFO0tBQ25CLE1BQU0vWixTQUFTLENBQUMsY0FBYyxDQUFDLENBQUE7Q0FDakMsR0FBQTtD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QUFDLEdBQUcxUCxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ3JCMFAsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdqVSxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ3JCaVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUd6bkIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtDQUN2QixHQUFBO0NBRUEsRUFBQSxPQUFPLENBQUN5bkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENB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
