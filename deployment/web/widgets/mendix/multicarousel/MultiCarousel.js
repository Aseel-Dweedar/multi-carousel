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
	  const carouselParent = react.useRef();
	  const [renderCarousel, setRenderCarousel] = react.useState(false);
	  const [dataItems, setDataItems] = react.useState([]);
	  const [carouselItems, setCarouselItems] = react.useState([]);
	  const [uniqueClass, setUniqueClass] = react.useState("");
	  const [carouselInfinite, setCarouselInfinite] = react.useState(props.infinite);
	  const [responsive, setResponsive] = react.useState(null);
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
	          extraItems.push(react.createElement("div", {
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
	    let carouselItems = items.map((item, i) => react.createElement("div", {
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
	  react.useEffect(() => {
	    if (props.data?.status === "available") {
	      setRenderCarousel(false);
	      setupCarouse(props.data.items);
	    }
	  }, [props.data?.items]);

	  /*
	    after getting the item or updated it and the item behavior "create extra items" calculate the number of extra items
	  */
	  react.useEffect(() => {
	    // This condition is to prevent calling createCarouselItems before get the items "This happens at the first widget render"
	    if (props.data?.status === "available") {
	      createCarouselItems();
	    }
	  }, [dataItems]);
	  react.useEffect(() => {
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
	  return react.createElement("div", {
	    ref: carouselParent,
	    className: [commonClasses.multi_container, uniqueClass, props.carouselType === "active" ? activeClickClasses.active_click_container : normalCarouselClasses.normal_container, props.disableDotsControls ? commonClasses.no_dots : "", !props.disableButtonsControls && props.buttonsStyle === "styled" ? props.carouselType === "active" ? activeClickClasses.active_click_styled_btn : normalCarouselClasses.normal_styled_btn : ""].join(" ")
	  }, dataItems?.length && renderCarousel ? react.createElement(AliceCarousel, {
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
	  }) : react.createElement("div", {
	    className: commonClasses.multi_empty_container
	  }));
	}

	function ActiveSlideCarousel(props) {
	  const [renderCarousel, setRenderCarousel] = react.useState(false);
	  const [carousel_items, set_carousel_items] = react.useState([]);
	  const [responsive, setResponsive] = react.useState(null);
	  const [uniqueClass, setUniqueClass] = react.useState("");
	  const [currentActiveIdx, setCurrentActiveIdx] = react.useState(0);
	  const [numberOfDisplayedItems, setNumberOfDisplayedItems] = react.useState(0);
	  const [numberOfAllItems, setNumberOfAllItems] = react.useState(0);

	  // get the 'react-alice-carousel' built-in all method and properties
	  const [carouselProperties, setCarouselProperties] = react.useState(null);

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
	    let newData = items.map((item, idx) => react.createElement("div", {
	      key: idx,
	      className: `${commonClasses.item} ${idx === 0 ? activeSlideClasses.first_item + " " + commonClasses.active : ""} ${idx === props.data.items.length - 1 ? activeSlideClasses.last_item : ""}`
	    }, props.content.get(item)));
	    setNumberOfAllItems(newData.length - 1);
	    set_carousel_items(newData);
	  };
	  react.useEffect(() => {
	    // This condition is to prevent render the carousel before get the items "This happens at the first widget render"
	    if (props.data?.status === "available") {
	      setRenderCarousel(true);
	    }
	  }, [carousel_items]);

	  /*
	    when getting the item or updated it set the carousel items 
	  */
	  react.useEffect(() => {
	    if (props.data?.status === "available") {
	      setRenderCarousel(false);
	      setCurrentActiveIdx(0);
	      setupCarouse(props.data.items);
	    }
	  }, [props.data?.items]);
	  react.useEffect(() => {
	    // set a unique class in case of using two different carousel instances in the same document
	    setUniqueClass("a-" + v4());
	  }, []);

	  /*
	      set the responsive object after initialize the container so it take the correct dimensions
	  */
	  const carouselContainer = react.useCallback(node => {
	    if (node) setResponsive({
	      ...props.defaultResponsive
	    });
	  }, []);
	  return carousel_items?.length ? react.createElement("div", {
	    className: activeSlideClasses.active_slide_container,
	    ref: carouselContainer
	  }, react.createElement("button", {
	    className: activeSlideClasses.prev_btn,
	    onClick: prevClicked
	  }), react.createElement("div", {
	    className: [uniqueClass, activeSlideClasses.active_slide_wrapper].join(" ")
	  }, responsive && renderCarousel && react.createElement(AliceCarousel
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
	  /*
	   default undefined - The key is the breakpoint
	   (default is the result of: () => window.innerWidth or innerWidth property if the last presented).
	  */
	  const [defaultResponsive, setDefaultResponsive] = react.useState(null);
	  react.useEffect(() => {
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
	  return react.createElement("div", null, defaultResponsive ? (props.carouselType === "normal" || props.carouselType === "active") && react.createElement(NormalCarousel, {
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
	  }) || props.carouselType === "slide" && react.createElement(ActiveSlideCarousel, {
	    data: props.data,
	    action: props.action,
	    content: props.content,
	    defaultResponsive: defaultResponsive
	  }) || react.createElement("div", {
	    className: commonClasses.error
	  }, react.createElement("p", null, "An error occurred while initializing the Carousel")) : react.createElement("div", {
	    className: commonClasses.loading
	  }, react.createElement("p", null, "Loading ...")));
	}

	exports.MultiCarousel = MultiCarousel;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlDYXJvdXNlbC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3R5cGVzL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZURpcmVjdGlvbi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9jb21tb24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGEuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlRHVyYXRpb24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlTW92aW5nUG9zaXRpb24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvdXBkYXRlVHJhY2UuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL3Jlc29sdmVEaXJlY3Rpb24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlVmVsb2NpdHkuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlUG9zaXRpb24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9jcmVhdGVPcHRpb25zLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9nZXRJbml0aWFsU3RhdGUuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvZ2V0SW5pdGlhbFByb3BzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2dldE9wdGlvbnMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvcm90YXRlQnlBbmdsZS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdHlwZXMvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL2RlZmF1bHRQcm9wcy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvbWFwcGVycy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvbWF0aC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvZWxlbWVudHMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL2NvbW1vbi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvY2xhc3NuYW1lcy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvdGltZXJzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi91dGlscy9kZWJ1Zy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvcmVuZGVyLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi91dGlscy9jb250cm9scy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3ZpZXdzL1NsaWRlSW5mby5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdmlld3MvU3RhZ2VJdGVtLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi92aWV3cy9Eb3RzTmF2aWdhdGlvbi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdmlld3MvUGxheVBhdXNlQnV0dG9uLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi92aWV3cy9QcmV2TmV4dEJ1dHRvbi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdmlld3MvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3JlYWN0LWFsaWNlLWNhcm91c2VsLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9wYXJzZS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjM1LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9tZDUuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zaGExLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NS5qcyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hlbHBlci5qcyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05vcm1hbENhcm91c2VsLmpzeCIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FjdGl2ZVNsaWRlQ2Fyb3VzZWwuanN4IiwiLi4vLi4vLi4vLi4vLi4vc3JjL011bHRpQ2Fyb3VzZWwuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5UcmFjZURpcmVjdGlvbktleSA9IGV4cG9ydHMuRGlyZWN0aW9uID0gZXhwb3J0cy5BeGlzID0gdm9pZCAwO1xudmFyIFRyYWNlRGlyZWN0aW9uS2V5O1xuZXhwb3J0cy5UcmFjZURpcmVjdGlvbktleSA9IFRyYWNlRGlyZWN0aW9uS2V5O1xuXG4oZnVuY3Rpb24gKFRyYWNlRGlyZWN0aW9uS2V5KSB7XG4gIFRyYWNlRGlyZWN0aW9uS2V5W1wiTkVHQVRJVkVcIl0gPSBcIk5FR0FUSVZFXCI7XG4gIFRyYWNlRGlyZWN0aW9uS2V5W1wiUE9TSVRJVkVcIl0gPSBcIlBPU0lUSVZFXCI7XG4gIFRyYWNlRGlyZWN0aW9uS2V5W1wiTk9ORVwiXSA9IFwiTk9ORVwiO1xufSkoVHJhY2VEaXJlY3Rpb25LZXkgfHwgKGV4cG9ydHMuVHJhY2VEaXJlY3Rpb25LZXkgPSBUcmFjZURpcmVjdGlvbktleSA9IHt9KSk7XG5cbnZhciBEaXJlY3Rpb247XG5leHBvcnRzLkRpcmVjdGlvbiA9IERpcmVjdGlvbjtcblxuKGZ1bmN0aW9uIChEaXJlY3Rpb24pIHtcbiAgRGlyZWN0aW9uW1wiVE9QXCJdID0gXCJUT1BcIjtcbiAgRGlyZWN0aW9uW1wiTEVGVFwiXSA9IFwiTEVGVFwiO1xuICBEaXJlY3Rpb25bXCJSSUdIVFwiXSA9IFwiUklHSFRcIjtcbiAgRGlyZWN0aW9uW1wiQk9UVE9NXCJdID0gXCJCT1RUT01cIjtcbiAgRGlyZWN0aW9uW1wiTk9ORVwiXSA9IFwiTk9ORVwiO1xufSkoRGlyZWN0aW9uIHx8IChleHBvcnRzLkRpcmVjdGlvbiA9IERpcmVjdGlvbiA9IHt9KSk7XG5cbnZhciBBeGlzO1xuZXhwb3J0cy5BeGlzID0gQXhpcztcblxuKGZ1bmN0aW9uIChBeGlzKSB7XG4gIEF4aXNbXCJYXCJdID0gXCJ4XCI7XG4gIEF4aXNbXCJZXCJdID0gXCJ5XCI7XG59KShBeGlzIHx8IChleHBvcnRzLkF4aXMgPSBBeGlzID0ge30pKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FsY3VsYXRlRGlyZWN0aW9uID0gY2FsY3VsYXRlRGlyZWN0aW9uO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVEaXJlY3Rpb24odHJhY2UpIHtcbiAgdmFyIGRpcmVjdGlvbjtcbiAgdmFyIG5lZ2F0aXZlID0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5FR0FUSVZFO1xuICB2YXIgcG9zaXRpdmUgPSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuUE9TSVRJVkU7XG4gIHZhciBjdXJyZW50ID0gdHJhY2VbdHJhY2UubGVuZ3RoIC0gMV07XG4gIHZhciBwcmV2aW91cyA9IHRyYWNlW3RyYWNlLmxlbmd0aCAtIDJdIHx8IDA7XG5cbiAgaWYgKHRyYWNlLmV2ZXJ5KGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIGkgPT09IDA7XG4gIH0pKSB7XG4gICAgcmV0dXJuIF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5OT05FO1xuICB9XG5cbiAgZGlyZWN0aW9uID0gY3VycmVudCA+IHByZXZpb3VzID8gcG9zaXRpdmUgOiBuZWdhdGl2ZTtcblxuICBpZiAoY3VycmVudCA9PT0gMCkge1xuICAgIGRpcmVjdGlvbiA9IHByZXZpb3VzIDwgMCA/IHBvc2l0aXZlIDogbmVnYXRpdmU7XG4gIH1cblxuICByZXR1cm4gZGlyZWN0aW9uO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXNvbHZlQXhpc0RpcmVjdGlvbiA9IGV4cG9ydHMuZ2V0RGlyZWN0aW9uVmFsdWUgPSBleHBvcnRzLmdldERpcmVjdGlvbktleSA9IGV4cG9ydHMuZ2V0RGlmZmVyZW5jZSA9IHZvaWQgMDtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxudmFyIGdldERpcmVjdGlvbktleSA9IGZ1bmN0aW9uIGdldERpcmVjdGlvbktleSgpIHtcbiAgdmFyIG9iamVjdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBrZXkgPSBPYmplY3Qua2V5cyhvYmplY3QpLnRvU3RyaW5nKCk7XG5cbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlIF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5QT1NJVElWRTpcbiAgICAgIHJldHVybiBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuUE9TSVRJVkU7XG5cbiAgICBjYXNlIF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5ORUdBVElWRTpcbiAgICAgIHJldHVybiBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTkVHQVRJVkU7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5OT05FO1xuICB9XG59O1xuXG5leHBvcnRzLmdldERpcmVjdGlvbktleSA9IGdldERpcmVjdGlvbktleTtcblxudmFyIGdldERpcmVjdGlvblZhbHVlID0gZnVuY3Rpb24gZ2V0RGlyZWN0aW9uVmFsdWUoKSB7XG4gIHZhciB2YWx1ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICByZXR1cm4gdmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXSB8fCAwO1xufTtcblxuZXhwb3J0cy5nZXREaXJlY3Rpb25WYWx1ZSA9IGdldERpcmVjdGlvblZhbHVlO1xuXG52YXIgZ2V0RGlmZmVyZW5jZSA9IGZ1bmN0aW9uIGdldERpZmZlcmVuY2UoKSB7XG4gIHZhciB4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICB2YXIgeSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgcmV0dXJuIE1hdGguYWJzKHggLSB5KTtcbn07XG5cbmV4cG9ydHMuZ2V0RGlmZmVyZW5jZSA9IGdldERpZmZlcmVuY2U7XG5cbnZhciByZXNvbHZlQXhpc0RpcmVjdGlvbiA9IGZ1bmN0aW9uIHJlc29sdmVBeGlzRGlyZWN0aW9uKGF4aXMsIGtleSkge1xuICB2YXIgbmVnYXRpdmUgPSBfdHlwZXMuRGlyZWN0aW9uLkxFRlQ7XG4gIHZhciBwb3NpdGl2ZSA9IF90eXBlcy5EaXJlY3Rpb24uUklHSFQ7XG4gIHZhciBkaXJlY3Rpb24gPSBfdHlwZXMuRGlyZWN0aW9uLk5PTkU7XG5cbiAgaWYgKGF4aXMgPT09IF90eXBlcy5BeGlzLlkpIHtcbiAgICBuZWdhdGl2ZSA9IF90eXBlcy5EaXJlY3Rpb24uQk9UVE9NO1xuICAgIHBvc2l0aXZlID0gX3R5cGVzLkRpcmVjdGlvbi5UT1A7XG4gIH1cblxuICBpZiAoa2V5ID09PSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTkVHQVRJVkUpIHtcbiAgICBkaXJlY3Rpb24gPSBuZWdhdGl2ZTtcbiAgfVxuXG4gIGlmIChrZXkgPT09IF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5QT1NJVElWRSkge1xuICAgIGRpcmVjdGlvbiA9IHBvc2l0aXZlO1xuICB9XG5cbiAgcmV0dXJuIGRpcmVjdGlvbjtcbn07XG5cbmV4cG9ydHMucmVzb2x2ZUF4aXNEaXJlY3Rpb24gPSByZXNvbHZlQXhpc0RpcmVjdGlvbjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGEgPSBjYWxjdWxhdGVEaXJlY3Rpb25EZWx0YTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZURpcmVjdGlvbkRlbHRhKHRyYWNlRGlyZWN0aW9ucykge1xuICB2YXIgZGVsdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIHZhciBsZW5ndGggPSB0cmFjZURpcmVjdGlvbnMubGVuZ3RoO1xuICB2YXIgaSA9IGxlbmd0aCAtIDE7XG4gIHZhciBkaXJlY3Rpb24gPSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTk9ORTtcblxuICBmb3IgKDsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgY3VycmVudCA9IHRyYWNlRGlyZWN0aW9uc1tpXTtcbiAgICB2YXIgY3VycmVudEtleSA9ICgwLCBfY29tbW9uLmdldERpcmVjdGlvbktleSkoY3VycmVudCk7XG4gICAgdmFyIGN1cnJlbnRWYWx1ZSA9ICgwLCBfY29tbW9uLmdldERpcmVjdGlvblZhbHVlKShjdXJyZW50W2N1cnJlbnRLZXldKTtcbiAgICB2YXIgcHJldiA9IHRyYWNlRGlyZWN0aW9uc1tpIC0gMV0gfHwge307XG4gICAgdmFyIHByZXZLZXkgPSAoMCwgX2NvbW1vbi5nZXREaXJlY3Rpb25LZXkpKHByZXYpO1xuICAgIHZhciBwcmV2VmFsdWUgPSAoMCwgX2NvbW1vbi5nZXREaXJlY3Rpb25WYWx1ZSkocHJldltwcmV2S2V5XSk7XG4gICAgdmFyIGRpZmZlcmVuY2UgPSAoMCwgX2NvbW1vbi5nZXREaWZmZXJlbmNlKShjdXJyZW50VmFsdWUsIHByZXZWYWx1ZSk7XG5cbiAgICBpZiAoZGlmZmVyZW5jZSA+PSBkZWx0YSkge1xuICAgICAgZGlyZWN0aW9uID0gY3VycmVudEtleTtcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXJlY3Rpb24gPSBwcmV2S2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXJlY3Rpb247XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZUR1cmF0aW9uID0gY2FsY3VsYXRlRHVyYXRpb247XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUR1cmF0aW9uKCkge1xuICB2YXIgcHJldlRpbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gIHZhciBuZXh0VGltZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgcmV0dXJuIHByZXZUaW1lID8gbmV4dFRpbWUgLSBwcmV2VGltZSA6IDA7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uID0gY2FsY3VsYXRlTW92aW5nUG9zaXRpb247XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uKGUpIHtcbiAgaWYgKCdjaGFuZ2VkVG91Y2hlcycgaW4gZSkge1xuICAgIHZhciB0b3VjaGVzID0gZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgIHJldHVybiB7XG4gICAgICB4OiB0b3VjaGVzICYmIHRvdWNoZXMuY2xpZW50WCxcbiAgICAgIHk6IHRvdWNoZXMgJiYgdG91Y2hlcy5jbGllbnRZXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogZS5jbGllbnRYLFxuICAgIHk6IGUuY2xpZW50WVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51cGRhdGVUcmFjZSA9IHVwZGF0ZVRyYWNlO1xuXG5mdW5jdGlvbiB1cGRhdGVUcmFjZSh0cmFjZSwgdmFsdWUpIHtcbiAgdmFyIGxhc3QgPSB0cmFjZVt0cmFjZS5sZW5ndGggLSAxXTtcblxuICBpZiAobGFzdCAhPT0gdmFsdWUpIHtcbiAgICB0cmFjZS5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB0cmFjZTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zID0gY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVUcmFjZURpcmVjdGlvbnMoKSB7XG4gIHZhciB0cmFjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG4gIHZhciB0aWNrcyA9IFtdO1xuICB2YXIgcG9zaXRpdmUgPSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuUE9TSVRJVkU7XG4gIHZhciBuZWdhdGl2ZSA9IF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5ORUdBVElWRTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgdGljayA9IFtdO1xuICB2YXIgZGlyZWN0aW9uID0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5PTkU7XG5cbiAgZm9yICg7IGkgPCB0cmFjZS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjdXJyZW50ID0gdHJhY2VbaV07XG4gICAgdmFyIHByZXYgPSB0cmFjZVtpIC0gMV07XG5cbiAgICBpZiAodGljay5sZW5ndGgpIHtcbiAgICAgIHZhciBjdXJyZW50RGlyZWN0aW9uID0gY3VycmVudCA+IHByZXYgPyBwb3NpdGl2ZSA6IG5lZ2F0aXZlO1xuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTk9ORSkge1xuICAgICAgICBkaXJlY3Rpb24gPSBjdXJyZW50RGlyZWN0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudERpcmVjdGlvbiA9PT0gZGlyZWN0aW9uKSB7XG4gICAgICAgIHRpY2sucHVzaChjdXJyZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpY2tzLnB1c2goX2RlZmluZVByb3BlcnR5KHt9LCBkaXJlY3Rpb24sIHRpY2suc2xpY2UoKSkpO1xuICAgICAgICB0aWNrID0gW107XG4gICAgICAgIHRpY2sucHVzaChjdXJyZW50KTtcbiAgICAgICAgZGlyZWN0aW9uID0gY3VycmVudERpcmVjdGlvbjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGN1cnJlbnQgIT09IDApIHtcbiAgICAgICAgZGlyZWN0aW9uID0gY3VycmVudCA+IDAgPyBwb3NpdGl2ZSA6IG5lZ2F0aXZlO1xuICAgICAgfVxuXG4gICAgICB0aWNrLnB1c2goY3VycmVudCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpY2subGVuZ3RoKSB7XG4gICAgdGlja3MucHVzaChfZGVmaW5lUHJvcGVydHkoe30sIGRpcmVjdGlvbiwgdGljaykpO1xuICB9XG5cbiAgcmV0dXJuIHRpY2tzO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXNvbHZlRGlyZWN0aW9uID0gcmVzb2x2ZURpcmVjdGlvbjtcblxudmFyIF9jYWxjdWxhdGVEaXJlY3Rpb24gPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVEaXJlY3Rpb25cIik7XG5cbnZhciBfY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zXCIpO1xuXG52YXIgX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGFcIik7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xuXG5mdW5jdGlvbiByZXNvbHZlRGlyZWN0aW9uKHRyYWNlKSB7XG4gIHZhciBheGlzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBfdHlwZXMuQXhpcy5YO1xuICB2YXIgZGlyZWN0aW9uRGVsdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDA7XG5cbiAgaWYgKGRpcmVjdGlvbkRlbHRhKSB7XG4gICAgdmFyIGRpcmVjdGlvbnMgPSAoMCwgX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucy5jYWxjdWxhdGVUcmFjZURpcmVjdGlvbnMpKHRyYWNlKTtcblxuICAgIHZhciBfZGlyZWN0aW9uID0gKDAsIF9jYWxjdWxhdGVEaXJlY3Rpb25EZWx0YS5jYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSkoZGlyZWN0aW9ucywgZGlyZWN0aW9uRGVsdGEpO1xuXG4gICAgcmV0dXJuICgwLCBfY29tbW9uLnJlc29sdmVBeGlzRGlyZWN0aW9uKShheGlzLCBfZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHZhciBkaXJlY3Rpb24gPSAoMCwgX2NhbGN1bGF0ZURpcmVjdGlvbi5jYWxjdWxhdGVEaXJlY3Rpb24pKHRyYWNlKTtcbiAgcmV0dXJuICgwLCBfY29tbW9uLnJlc29sdmVBeGlzRGlyZWN0aW9uKShheGlzLCBkaXJlY3Rpb24pO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jYWxjdWxhdGVWZWxvY2l0eSA9IGNhbGN1bGF0ZVZlbG9jaXR5O1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVWZWxvY2l0eSh4LCB5LCB0aW1lKSB7XG4gIHZhciBtYWduaXR1ZGUgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gIHJldHVybiBtYWduaXR1ZGUgLyAodGltZSB8fCAxKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FsY3VsYXRlUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbjtcblxudmFyIF91cGRhdGVUcmFjZSA9IHJlcXVpcmUoXCIuL3VwZGF0ZVRyYWNlXCIpO1xuXG52YXIgX3Jlc29sdmVEaXJlY3Rpb24gPSByZXF1aXJlKFwiLi9yZXNvbHZlRGlyZWN0aW9uXCIpO1xuXG52YXIgX2NhbGN1bGF0ZUR1cmF0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlRHVyYXRpb25cIik7XG5cbnZhciBfY2FsY3VsYXRlVmVsb2NpdHkgPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVWZWxvY2l0eVwiKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlUG9zaXRpb24oc3RhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIHN0YXJ0ID0gc3RhdGUuc3RhcnQsXG4gICAgICB4ID0gc3RhdGUueCxcbiAgICAgIHkgPSBzdGF0ZS55LFxuICAgICAgdHJhY2VYID0gc3RhdGUudHJhY2VYLFxuICAgICAgdHJhY2VZID0gc3RhdGUudHJhY2VZO1xuICB2YXIgcm90YXRlUG9zaXRpb24gPSBvcHRpb25zLnJvdGF0ZVBvc2l0aW9uLFxuICAgICAgZGlyZWN0aW9uRGVsdGEgPSBvcHRpb25zLmRpcmVjdGlvbkRlbHRhO1xuICB2YXIgZGVsdGFYID0gcm90YXRlUG9zaXRpb24ueCAtIHg7XG4gIHZhciBkZWx0YVkgPSB5IC0gcm90YXRlUG9zaXRpb24ueTtcbiAgdmFyIGFic1ggPSBNYXRoLmFicyhkZWx0YVgpO1xuICB2YXIgYWJzWSA9IE1hdGguYWJzKGRlbHRhWSk7XG4gICgwLCBfdXBkYXRlVHJhY2UudXBkYXRlVHJhY2UpKHRyYWNlWCwgZGVsdGFYKTtcbiAgKDAsIF91cGRhdGVUcmFjZS51cGRhdGVUcmFjZSkodHJhY2VZLCBkZWx0YVkpO1xuICB2YXIgZGlyZWN0aW9uWCA9ICgwLCBfcmVzb2x2ZURpcmVjdGlvbi5yZXNvbHZlRGlyZWN0aW9uKSh0cmFjZVgsIF90eXBlcy5BeGlzLlgsIGRpcmVjdGlvbkRlbHRhKTtcbiAgdmFyIGRpcmVjdGlvblkgPSAoMCwgX3Jlc29sdmVEaXJlY3Rpb24ucmVzb2x2ZURpcmVjdGlvbikodHJhY2VZLCBfdHlwZXMuQXhpcy5ZLCBkaXJlY3Rpb25EZWx0YSk7XG4gIHZhciBkdXJhdGlvbiA9ICgwLCBfY2FsY3VsYXRlRHVyYXRpb24uY2FsY3VsYXRlRHVyYXRpb24pKHN0YXJ0LCBEYXRlLm5vdygpKTtcbiAgdmFyIHZlbG9jaXR5ID0gKDAsIF9jYWxjdWxhdGVWZWxvY2l0eS5jYWxjdWxhdGVWZWxvY2l0eSkoYWJzWCwgYWJzWSwgZHVyYXRpb24pO1xuICByZXR1cm4ge1xuICAgIGFic1g6IGFic1gsXG4gICAgYWJzWTogYWJzWSxcbiAgICBkZWx0YVg6IGRlbHRhWCxcbiAgICBkZWx0YVk6IGRlbHRhWSxcbiAgICBkaXJlY3Rpb25YOiBkaXJlY3Rpb25YLFxuICAgIGRpcmVjdGlvblk6IGRpcmVjdGlvblksXG4gICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgIHBvc2l0aW9uWDogcm90YXRlUG9zaXRpb24ueCxcbiAgICBwb3NpdGlvblk6IHJvdGF0ZVBvc2l0aW9uLnksXG4gICAgdmVsb2NpdHk6IHZlbG9jaXR5XG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXMgPSB2b2lkIDA7XG5cbnZhciBjaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzID0gZnVuY3Rpb24gY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyhlKSB7XG4gIHJldHVybiBCb29sZWFuKGUudG91Y2hlcyAmJiBlLnRvdWNoZXMubGVuZ3RoID4gMSk7XG59O1xuXG5leHBvcnRzLmNoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXMgPSBjaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jcmVhdGVPcHRpb25zID0gY3JlYXRlT3B0aW9ucztcblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9ucygpIHtcbiAgdmFyIHByb3h5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3h5LCAncGFzc2l2ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHRoaXMuaXNQYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIHByb3h5O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jaGVja0lzUGFzc2l2ZVN1cHBvcnRlZCA9IGNoZWNrSXNQYXNzaXZlU3VwcG9ydGVkO1xuZXhwb3J0cy5ub29wID0gdm9pZCAwO1xuXG52YXIgX2NyZWF0ZU9wdGlvbnMgPSByZXF1aXJlKFwiLi9jcmVhdGVPcHRpb25zXCIpO1xuXG5mdW5jdGlvbiBjaGVja0lzUGFzc2l2ZVN1cHBvcnRlZChpc1Bhc3NpdmVTdXBwb3J0ZWQpIHtcbiAgaWYgKHR5cGVvZiBpc1Bhc3NpdmVTdXBwb3J0ZWQgPT09ICdib29sZWFuJykge1xuICAgIHJldHVybiBpc1Bhc3NpdmVTdXBwb3J0ZWQ7XG4gIH1cblxuICB2YXIgcHJveHkgPSB7XG4gICAgaXNQYXNzaXZlU3VwcG9ydGVkOiBpc1Bhc3NpdmVTdXBwb3J0ZWRcbiAgfTtcblxuICB0cnkge1xuICAgIHZhciBvcHRpb25zID0gKDAsIF9jcmVhdGVPcHRpb25zLmNyZWF0ZU9wdGlvbnMpKHByb3h5KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQnLCBub29wLCBvcHRpb25zKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQnLCBub29wLCBvcHRpb25zKTtcbiAgfSBjYXRjaCAoZXJyKSB7fVxuXG4gIHJldHVybiBwcm94eS5pc1Bhc3NpdmVTdXBwb3J0ZWQ7XG59XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG5leHBvcnRzLm5vb3AgPSBub29wOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cblxudmFyIGNoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCA9IGZ1bmN0aW9uIGNoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCgpIHtcbiAgcmV0dXJuICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yod2luZG93KSkgPT09ICdvYmplY3QnICYmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgQm9vbGVhbih3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzKSk7XG59O1xuXG5leHBvcnRzLmNoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCA9IGNoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0SW5pdGlhbFN0YXRlID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgZ2V0SW5pdGlhbFN0YXRlID0gZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgc3RhcnQ6IDAsXG4gICAgaXNTd2lwaW5nOiBmYWxzZSxcbiAgICB0cmFjZVg6IFtdLFxuICAgIHRyYWNlWTogW11cbiAgfSwgb3B0aW9ucyk7XG59O1xuXG5leHBvcnRzLmdldEluaXRpYWxTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0SW5pdGlhbFByb3BzID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgZ2V0SW5pdGlhbFByb3BzID0gZnVuY3Rpb24gZ2V0SW5pdGlhbFByb3BzKCkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgZWxlbWVudDogbnVsbCxcbiAgICB0YXJnZXQ6IG51bGwsXG4gICAgZGVsdGE6IDEwLFxuICAgIGRpcmVjdGlvbkRlbHRhOiAwLFxuICAgIHJvdGF0aW9uQW5nbGU6IDAsXG4gICAgbW91c2VUcmFja2luZ0VuYWJsZWQ6IGZhbHNlLFxuICAgIHRvdWNoVHJhY2tpbmdFbmFibGVkOiB0cnVlLFxuICAgIHByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQ6IGZhbHNlLFxuICAgIHByZXZlbnRUcmFja2luZ09uTW91c2VsZWF2ZTogZmFsc2VcbiAgfSwgcHJvcHMpO1xufTtcblxuZXhwb3J0cy5nZXRJbml0aWFsUHJvcHMgPSBnZXRJbml0aWFsUHJvcHM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldE9wdGlvbnMgPSBnZXRPcHRpb25zO1xuXG5mdW5jdGlvbiBnZXRPcHRpb25zKCkge1xuICB2YXIgaXNQYXNzaXZlU3VwcG9ydGVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcblxuICBpZiAoaXNQYXNzaXZlU3VwcG9ydGVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7fTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucm90YXRlQnlBbmdsZSA9IHJvdGF0ZUJ5QW5nbGU7XG5cbmZ1bmN0aW9uIHJvdGF0ZUJ5QW5nbGUocG9zaXRpb24pIHtcbiAgdmFyIGFuZ2xlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuXG4gIGlmIChhbmdsZSA9PT0gMCkge1xuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIHZhciB4ID0gcG9zaXRpb24ueCxcbiAgICAgIHkgPSBwb3NpdGlvbi55O1xuICB2YXIgYW5nbGVJblJhZGlhbnMgPSBNYXRoLlBJIC8gMTgwICogYW5nbGU7XG4gIHZhciByb3RhdGVkWCA9IHggKiBNYXRoLmNvcyhhbmdsZUluUmFkaWFucykgKyB5ICogTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICB2YXIgcm90YXRlZFkgPSB5ICogTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpIC0geCAqIE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgcmV0dXJuIHtcbiAgICB4OiByb3RhdGVkWCxcbiAgICB5OiByb3RhdGVkWVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZURpcmVjdGlvbiA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZURpcmVjdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX2NhbGN1bGF0ZURpcmVjdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZURpcmVjdGlvbltrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jYWxjdWxhdGVEaXJlY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGEgPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVEaXJlY3Rpb25EZWx0YVwiKTtcblxuT2JqZWN0LmtleXMoX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGFba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGFba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2FsY3VsYXRlRHVyYXRpb24gPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVEdXJhdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX2NhbGN1bGF0ZUR1cmF0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2FsY3VsYXRlRHVyYXRpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2FsY3VsYXRlRHVyYXRpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2FsY3VsYXRlTW92aW5nUG9zaXRpb24gPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVNb3ZpbmdQb3NpdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX2NhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2FsY3VsYXRlTW92aW5nUG9zaXRpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2FsY3VsYXRlTW92aW5nUG9zaXRpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2FsY3VsYXRlUG9zaXRpb24gPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVQb3NpdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX2NhbGN1bGF0ZVBvc2l0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2FsY3VsYXRlUG9zaXRpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2FsY3VsYXRlUG9zaXRpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zXCIpO1xuXG5PYmplY3Qua2V5cyhfY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9uc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9jYWxjdWxhdGVWZWxvY2l0eSA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZVZlbG9jaXR5XCIpO1xuXG5PYmplY3Qua2V5cyhfY2FsY3VsYXRlVmVsb2NpdHkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9jYWxjdWxhdGVWZWxvY2l0eVtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jYWxjdWxhdGVWZWxvY2l0eVtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzID0gcmVxdWlyZShcIi4vY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlc1wiKTtcblxuT2JqZWN0LmtleXMoX2NoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQgPSByZXF1aXJlKFwiLi9jaGVja0lzUGFzc2l2ZVN1cHBvcnRlZFwiKTtcblxuT2JqZWN0LmtleXMoX2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWRba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkID0gcmVxdWlyZShcIi4vY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkXCIpO1xuXG5PYmplY3Qua2V5cyhfY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbk9iamVjdC5rZXlzKF9jb21tb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9jb21tb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY29tbW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NyZWF0ZU9wdGlvbnMgPSByZXF1aXJlKFwiLi9jcmVhdGVPcHRpb25zXCIpO1xuXG5PYmplY3Qua2V5cyhfY3JlYXRlT3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NyZWF0ZU9wdGlvbnNba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY3JlYXRlT3B0aW9uc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9nZXRJbml0aWFsU3RhdGUgPSByZXF1aXJlKFwiLi9nZXRJbml0aWFsU3RhdGVcIik7XG5cbk9iamVjdC5rZXlzKF9nZXRJbml0aWFsU3RhdGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9nZXRJbml0aWFsU3RhdGVba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0SW5pdGlhbFN0YXRlW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2dldEluaXRpYWxQcm9wcyA9IHJlcXVpcmUoXCIuL2dldEluaXRpYWxQcm9wc1wiKTtcblxuT2JqZWN0LmtleXMoX2dldEluaXRpYWxQcm9wcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2dldEluaXRpYWxQcm9wc1trZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9nZXRJbml0aWFsUHJvcHNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfZ2V0T3B0aW9ucyA9IHJlcXVpcmUoXCIuL2dldE9wdGlvbnNcIik7XG5cbk9iamVjdC5rZXlzKF9nZXRPcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfZ2V0T3B0aW9uc1trZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9nZXRPcHRpb25zW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX3Jlc29sdmVEaXJlY3Rpb24gPSByZXF1aXJlKFwiLi9yZXNvbHZlRGlyZWN0aW9uXCIpO1xuXG5PYmplY3Qua2V5cyhfcmVzb2x2ZURpcmVjdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX3Jlc29sdmVEaXJlY3Rpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfcmVzb2x2ZURpcmVjdGlvbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9yb3RhdGVCeUFuZ2xlID0gcmVxdWlyZShcIi4vcm90YXRlQnlBbmdsZVwiKTtcblxuT2JqZWN0LmtleXMoX3JvdGF0ZUJ5QW5nbGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9yb3RhdGVCeUFuZ2xlW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3JvdGF0ZUJ5QW5nbGVba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfdXBkYXRlVHJhY2UgPSByZXF1aXJlKFwiLi91cGRhdGVUcmFjZVwiKTtcblxuT2JqZWN0LmtleXMoX3VwZGF0ZVRyYWNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfdXBkYXRlVHJhY2Vba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfdXBkYXRlVHJhY2Vba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBfZXhwb3J0TmFtZXMgPSB7fTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgVXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi91dGlsc1wiKSk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcblxuT2JqZWN0LmtleXMoX3R5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9leHBvcnROYW1lcywga2V5KSkgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfdHlwZXNba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfdHlwZXNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wOyB9KShub2RlSW50ZXJvcCk7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkgeyBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgVmFuaWxsYVN3aXBlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVmFuaWxsYVN3aXBlKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZhbmlsbGFTd2lwZSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzdGF0ZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicHJvcHNcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuc3RhdGUgPSBVdGlscy5nZXRJbml0aWFsU3RhdGUoKTtcbiAgICB0aGlzLnByb3BzID0gVXRpbHMuZ2V0SW5pdGlhbFByb3BzKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZVN3aXBlU3RhcnQgPSB0aGlzLmhhbmRsZVN3aXBlU3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN3aXBlTW92ZSA9IHRoaXMuaGFuZGxlU3dpcGVNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTd2lwZUVuZCA9IHRoaXMuaGFuZGxlU3dpcGVFbmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vdXNlRG93biA9IHRoaXMuaGFuZGxlTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVNb3VzZU1vdmUgPSB0aGlzLmhhbmRsZU1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTW91c2VVcCA9IHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTW91c2VMZWF2ZSA9IHRoaXMuaGFuZGxlTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFZhbmlsbGFTd2lwZSwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdGhpcy5zZXR1cFRvdWNoTGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLnNldHVwTW91c2VMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZShwcm9wcykge1xuICAgICAgdmFyIHByZXZQcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgbmV4dFByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJldlByb3BzLCBwcm9wcyk7XG5cbiAgICAgIGlmIChwcmV2UHJvcHMuZWxlbWVudCAhPT0gbmV4dFByb3BzLmVsZW1lbnQgfHwgcHJldlByb3BzLnRhcmdldCAhPT0gbmV4dFByb3BzLnRhcmdldCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcblxuICAgICAgaWYgKHByZXZQcm9wcy5tb3VzZVRyYWNraW5nRW5hYmxlZCAhPT0gbmV4dFByb3BzLm1vdXNlVHJhY2tpbmdFbmFibGVkIHx8IHByZXZQcm9wcy5wcmV2ZW50VHJhY2tpbmdPbk1vdXNlbGVhdmUgIT09IG5leHRQcm9wcy5wcmV2ZW50VHJhY2tpbmdPbk1vdXNlbGVhdmUpIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwTW91c2VMaXN0ZW5lcnMoKTtcbiAgICAgICAgbmV4dFByb3BzLm1vdXNlVHJhY2tpbmdFbmFibGVkID8gdGhpcy5zZXR1cE1vdXNlTGlzdGVuZXJzKCkgOiB0aGlzLmNsZWFudXBNb3VzZUxpc3RlbmVycygpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJldlByb3BzLnRvdWNoVHJhY2tpbmdFbmFibGVkICE9PSBuZXh0UHJvcHMudG91Y2hUcmFja2luZ0VuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwVG91Y2hMaXN0ZW5lcnMoKTtcbiAgICAgICAgbmV4dFByb3BzLnRvdWNoVHJhY2tpbmdFbmFibGVkID8gdGhpcy5zZXR1cFRvdWNoTGlzdGVuZXJzKCkgOiB0aGlzLmNsZWFudXBUb3VjaExpc3RlbmVycygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLmNsZWFudXBNb3VzZUxpc3RlbmVycygpO1xuICAgICAgdGhpcy5jbGVhbnVwVG91Y2hMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuc3RhdGUgPSBVdGlscy5nZXRJbml0aWFsU3RhdGUoKTtcbiAgICAgIHRoaXMucHJvcHMgPSBVdGlscy5nZXRJbml0aWFsUHJvcHMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0dXBUb3VjaExpc3RlbmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cFRvdWNoTGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBlbGVtZW50ID0gX3RoaXMkcHJvcHMuZWxlbWVudCxcbiAgICAgICAgICB0YXJnZXQgPSBfdGhpcyRwcm9wcy50YXJnZXQsXG4gICAgICAgICAgdG91Y2hUcmFja2luZ0VuYWJsZWQgPSBfdGhpcyRwcm9wcy50b3VjaFRyYWNraW5nRW5hYmxlZDtcblxuICAgICAgaWYgKGVsZW1lbnQgJiYgdG91Y2hUcmFja2luZ0VuYWJsZWQpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGFyZ2V0IHx8IGVsZW1lbnQ7XG4gICAgICAgIHZhciBpc1Bhc3NpdmVTdXBwb3J0ZWQgPSBVdGlscy5jaGVja0lzUGFzc2l2ZVN1cHBvcnRlZCgpO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IFV0aWxzLmdldE9wdGlvbnMoaXNQYXNzaXZlU3VwcG9ydGVkKTtcbiAgICAgICAgbGlzdGVuZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlU3dpcGVTdGFydCwgb3B0aW9ucyk7XG4gICAgICAgIGxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuaGFuZGxlU3dpcGVNb3ZlLCBvcHRpb25zKTtcbiAgICAgICAgbGlzdGVuZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmhhbmRsZVN3aXBlRW5kLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xlYW51cFRvdWNoTGlzdGVuZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFudXBUb3VjaExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGVsZW1lbnQgPSBfdGhpcyRwcm9wczIuZWxlbWVudCxcbiAgICAgICAgICB0YXJnZXQgPSBfdGhpcyRwcm9wczIudGFyZ2V0O1xuICAgICAgdmFyIGxpc3RlbmVyID0gdGFyZ2V0IHx8IGVsZW1lbnQ7XG5cbiAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVTd2lwZVN0YXJ0KTtcbiAgICAgICAgbGlzdGVuZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5oYW5kbGVTd2lwZU1vdmUpO1xuICAgICAgICBsaXN0ZW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuaGFuZGxlU3dpcGVFbmQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXR1cE1vdXNlTGlzdGVuZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldHVwTW91c2VMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBlbGVtZW50ID0gX3RoaXMkcHJvcHMzLmVsZW1lbnQsXG4gICAgICAgICAgbW91c2VUcmFja2luZ0VuYWJsZWQgPSBfdGhpcyRwcm9wczMubW91c2VUcmFja2luZ0VuYWJsZWQsXG4gICAgICAgICAgcHJldmVudFRyYWNraW5nT25Nb3VzZWxlYXZlID0gX3RoaXMkcHJvcHMzLnByZXZlbnRUcmFja2luZ09uTW91c2VsZWF2ZTtcblxuICAgICAgaWYgKG1vdXNlVHJhY2tpbmdFbmFibGVkICYmIGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU1vdXNlRG93bik7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXApO1xuXG4gICAgICAgIGlmIChwcmV2ZW50VHJhY2tpbmdPbk1vdXNlbGVhdmUpIHtcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmhhbmRsZU1vdXNlTGVhdmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsZWFudXBNb3VzZUxpc3RlbmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhbnVwTW91c2VMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU1vdXNlRG93bik7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXApO1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmhhbmRsZU1vdXNlTGVhdmUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRFdmVudERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RXZlbnREYXRhKGUpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7XG4gICAgICAgIGRpcmVjdGlvbkRlbHRhOiAwXG4gICAgICB9O1xuICAgICAgdmFyIHJvdGF0aW9uQW5nbGUgPSB0aGlzLnByb3BzLnJvdGF0aW9uQW5nbGU7XG4gICAgICB2YXIgZGlyZWN0aW9uRGVsdGEgPSBvcHRpb25zLmRpcmVjdGlvbkRlbHRhO1xuICAgICAgdmFyIG1vdmluZ1Bvc2l0aW9uID0gVXRpbHMuY2FsY3VsYXRlTW92aW5nUG9zaXRpb24oZSk7XG4gICAgICB2YXIgcm90YXRlUG9zaXRpb24gPSBVdGlscy5yb3RhdGVCeUFuZ2xlKG1vdmluZ1Bvc2l0aW9uLCByb3RhdGlvbkFuZ2xlKTtcbiAgICAgIHJldHVybiBVdGlscy5jYWxjdWxhdGVQb3NpdGlvbih0aGlzLnN0YXRlLCB7XG4gICAgICAgIHJvdGF0ZVBvc2l0aW9uOiByb3RhdGVQb3NpdGlvbixcbiAgICAgICAgZGlyZWN0aW9uRGVsdGE6IGRpcmVjdGlvbkRlbHRhXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlU3dpcGVTdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVTd2lwZVN0YXJ0KGUpIHtcbiAgICAgIGlmIChVdGlscy5jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzKGUpKSByZXR1cm47XG4gICAgICB2YXIgcm90YXRpb25BbmdsZSA9IHRoaXMucHJvcHMucm90YXRpb25BbmdsZTtcbiAgICAgIHZhciBtb3ZpbmdQb3NpdGlvbiA9IFV0aWxzLmNhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uKGUpO1xuXG4gICAgICB2YXIgX1V0aWxzJHJvdGF0ZUJ5QW5nbGUgPSBVdGlscy5yb3RhdGVCeUFuZ2xlKG1vdmluZ1Bvc2l0aW9uLCByb3RhdGlvbkFuZ2xlKSxcbiAgICAgICAgICB4ID0gX1V0aWxzJHJvdGF0ZUJ5QW5nbGUueCxcbiAgICAgICAgICB5ID0gX1V0aWxzJHJvdGF0ZUJ5QW5nbGUueTtcblxuICAgICAgdGhpcy5zdGF0ZSA9IFV0aWxzLmdldEluaXRpYWxTdGF0ZSh7XG4gICAgICAgIGlzU3dpcGluZzogZmFsc2UsXG4gICAgICAgIHN0YXJ0OiBEYXRlLm5vdygpLFxuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlU3dpcGVNb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVN3aXBlTW92ZShlKSB7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHggPSBfdGhpcyRzdGF0ZS54LFxuICAgICAgICAgIHkgPSBfdGhpcyRzdGF0ZS55LFxuICAgICAgICAgIGlzU3dpcGluZyA9IF90aGlzJHN0YXRlLmlzU3dpcGluZztcbiAgICAgIGlmICgheCB8fCAheSB8fCBVdGlscy5jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzKGUpKSByZXR1cm47XG4gICAgICB2YXIgZGlyZWN0aW9uRGVsdGEgPSB0aGlzLnByb3BzLmRpcmVjdGlvbkRlbHRhIHx8IDA7XG5cbiAgICAgIHZhciBfdGhpcyRnZXRFdmVudERhdGEgPSB0aGlzLmdldEV2ZW50RGF0YShlLCB7XG4gICAgICAgIGRpcmVjdGlvbkRlbHRhOiBkaXJlY3Rpb25EZWx0YVxuICAgICAgfSksXG4gICAgICAgICAgYWJzWCA9IF90aGlzJGdldEV2ZW50RGF0YS5hYnNYLFxuICAgICAgICAgIGFic1kgPSBfdGhpcyRnZXRFdmVudERhdGEuYWJzWSxcbiAgICAgICAgICBkZWx0YVggPSBfdGhpcyRnZXRFdmVudERhdGEuZGVsdGFYLFxuICAgICAgICAgIGRlbHRhWSA9IF90aGlzJGdldEV2ZW50RGF0YS5kZWx0YVksXG4gICAgICAgICAgZGlyZWN0aW9uWCA9IF90aGlzJGdldEV2ZW50RGF0YS5kaXJlY3Rpb25YLFxuICAgICAgICAgIGRpcmVjdGlvblkgPSBfdGhpcyRnZXRFdmVudERhdGEuZGlyZWN0aW9uWSxcbiAgICAgICAgICBkdXJhdGlvbiA9IF90aGlzJGdldEV2ZW50RGF0YS5kdXJhdGlvbixcbiAgICAgICAgICB2ZWxvY2l0eSA9IF90aGlzJGdldEV2ZW50RGF0YS52ZWxvY2l0eTtcblxuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZGVsdGEgPSBfdGhpcyRwcm9wczQuZGVsdGEsXG4gICAgICAgICAgcHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudCA9IF90aGlzJHByb3BzNC5wcmV2ZW50RGVmYXVsdFRvdWNobW92ZUV2ZW50LFxuICAgICAgICAgIG9uU3dpcGVTdGFydCA9IF90aGlzJHByb3BzNC5vblN3aXBlU3RhcnQsXG4gICAgICAgICAgb25Td2lwaW5nID0gX3RoaXMkcHJvcHM0Lm9uU3dpcGluZztcbiAgICAgIGlmIChlLmNhbmNlbGFibGUgJiYgcHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGFic1ggPCBOdW1iZXIoZGVsdGEpICYmIGFic1kgPCBOdW1iZXIoZGVsdGEpICYmICFpc1N3aXBpbmcpIHJldHVybjtcblxuICAgICAgaWYgKG9uU3dpcGVTdGFydCAmJiAhaXNTd2lwaW5nKSB7XG4gICAgICAgIG9uU3dpcGVTdGFydChlLCB7XG4gICAgICAgICAgZGVsdGFYOiBkZWx0YVgsXG4gICAgICAgICAgZGVsdGFZOiBkZWx0YVksXG4gICAgICAgICAgYWJzWDogYWJzWCxcbiAgICAgICAgICBhYnNZOiBhYnNZLFxuICAgICAgICAgIGRpcmVjdGlvblg6IGRpcmVjdGlvblgsXG4gICAgICAgICAgZGlyZWN0aW9uWTogZGlyZWN0aW9uWSxcbiAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgdmVsb2NpdHk6IHZlbG9jaXR5XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YXRlLmlzU3dpcGluZyA9IHRydWU7XG5cbiAgICAgIGlmIChvblN3aXBpbmcpIHtcbiAgICAgICAgb25Td2lwaW5nKGUsIHtcbiAgICAgICAgICBkZWx0YVg6IGRlbHRhWCxcbiAgICAgICAgICBkZWx0YVk6IGRlbHRhWSxcbiAgICAgICAgICBhYnNYOiBhYnNYLFxuICAgICAgICAgIGFic1k6IGFic1ksXG4gICAgICAgICAgZGlyZWN0aW9uWDogZGlyZWN0aW9uWCxcbiAgICAgICAgICBkaXJlY3Rpb25ZOiBkaXJlY3Rpb25ZLFxuICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICB2ZWxvY2l0eTogdmVsb2NpdHlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVN3aXBlRW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVN3aXBlRW5kKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9uU3dpcGVkID0gX3RoaXMkcHJvcHM1Lm9uU3dpcGVkLFxuICAgICAgICAgIG9uVGFwID0gX3RoaXMkcHJvcHM1Lm9uVGFwO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5pc1N3aXBpbmcpIHtcbiAgICAgICAgdmFyIGRpcmVjdGlvbkRlbHRhID0gdGhpcy5wcm9wcy5kaXJlY3Rpb25EZWx0YSB8fCAwO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLmdldEV2ZW50RGF0YShlLCB7XG4gICAgICAgICAgZGlyZWN0aW9uRGVsdGE6IGRpcmVjdGlvbkRlbHRhXG4gICAgICAgIH0pO1xuICAgICAgICBvblN3aXBlZCAmJiBvblN3aXBlZChlLCBwb3NpdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX3Bvc2l0aW9uID0gdGhpcy5nZXRFdmVudERhdGEoZSk7XG5cbiAgICAgICAgb25UYXAgJiYgb25UYXAoZSwgX3Bvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGF0ZSA9IFV0aWxzLmdldEluaXRpYWxTdGF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVNb3VzZURvd25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGUpIHtcbiAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnByb3BzLnRhcmdldDtcblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICBpZiAodGFyZ2V0ID09PSBlLnRhcmdldCkge1xuICAgICAgICAgIHRoaXMuaGFuZGxlU3dpcGVTdGFydChlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTd2lwZVN0YXJ0KGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVNb3VzZU1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlKGUpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3dpcGVNb3ZlKGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVNb3VzZVVwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoZSkge1xuICAgICAgdmFyIGlzU3dpcGluZyA9IHRoaXMuc3RhdGUuaXNTd2lwaW5nO1xuICAgICAgdmFyIHRhcmdldCA9IHRoaXMucHJvcHMudGFyZ2V0O1xuXG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IGUudGFyZ2V0IHx8IGlzU3dpcGluZykge1xuICAgICAgICAgIHRoaXMuaGFuZGxlU3dpcGVFbmQoZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3dpcGVFbmQoZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZU1vdXNlTGVhdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VMZWF2ZShlKSB7XG4gICAgICB2YXIgaXNTd2lwaW5nID0gdGhpcy5zdGF0ZS5pc1N3aXBpbmc7XG5cbiAgICAgIGlmIChpc1N3aXBpbmcpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTd2lwZUVuZChlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJpc1RvdWNoRXZlbnRzU3VwcG9ydGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzVG91Y2hFdmVudHNTdXBwb3J0ZWQoKSB7XG4gICAgICByZXR1cm4gVXRpbHMuY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkKCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFZhbmlsbGFTd2lwZTtcbn0oKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBWYW5pbGxhU3dpcGU7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIEV2ZW50VHlwZSxBbmltYXRpb25UeXBlLEF1dG9QbGF5U3RyYXRlZ3ksQ29udHJvbHNTdHJhdGVneSxBdXRvcGxheURpcmVjdGlvbixDbGFzc25hbWVzLE1vZGlmaWVycztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLk1vZGlmaWVycz1leHBvcnRzLkNsYXNzbmFtZXM9ZXhwb3J0cy5BdXRvcGxheURpcmVjdGlvbj1leHBvcnRzLkNvbnRyb2xzU3RyYXRlZ3k9ZXhwb3J0cy5BdXRvUGxheVN0cmF0ZWd5PWV4cG9ydHMuQW5pbWF0aW9uVHlwZT1leHBvcnRzLkV2ZW50VHlwZT12b2lkIDAsZnVuY3Rpb24oZSl7ZS5BQ1RJT049XCJhY3Rpb25cIixlLklOSVQ9XCJpbml0XCIsZS5SRVNJWkU9XCJyZXNpemVcIixlLlVQREFURT1cInVwZGF0ZVwifShFdmVudFR5cGU9ZXhwb3J0cy5FdmVudFR5cGV8fChleHBvcnRzLkV2ZW50VHlwZT17fSkpLGZ1bmN0aW9uKGUpe2UuRkFERU9VVD1cImZhZGVvdXRcIixlLlNMSURFPVwic2xpZGVcIn0oQW5pbWF0aW9uVHlwZT1leHBvcnRzLkFuaW1hdGlvblR5cGV8fChleHBvcnRzLkFuaW1hdGlvblR5cGU9e30pKSxmdW5jdGlvbihlKXtlLkRFRkFVTFQ9XCJkZWZhdWx0XCIsZS5BTEw9XCJhbGxcIixlLkFDVElPTj1cImFjdGlvblwiLGUuTk9ORT1cIm5vbmVcIn0oQXV0b1BsYXlTdHJhdGVneT1leHBvcnRzLkF1dG9QbGF5U3RyYXRlZ3l8fChleHBvcnRzLkF1dG9QbGF5U3RyYXRlZ3k9e30pKSxmdW5jdGlvbihlKXtlLkRFRkFVTFQ9XCJkZWZhdWx0XCIsZS5BTFRFUk5BVEU9XCJhbHRlcm5hdGVcIixlLlJFU1BPTlNJVkU9XCJyZXNwb25zaXZlXCJ9KENvbnRyb2xzU3RyYXRlZ3k9ZXhwb3J0cy5Db250cm9sc1N0cmF0ZWd5fHwoZXhwb3J0cy5Db250cm9sc1N0cmF0ZWd5PXt9KSksZnVuY3Rpb24oZSl7ZS5SVEw9XCJydGxcIixlLkxUUj1cImx0clwifShBdXRvcGxheURpcmVjdGlvbj1leHBvcnRzLkF1dG9wbGF5RGlyZWN0aW9ufHwoZXhwb3J0cy5BdXRvcGxheURpcmVjdGlvbj17fSkpLGZ1bmN0aW9uKGUpe2UuQU5JTUFURUQ9XCJhbmltYXRlZCBhbmltYXRlZC1vdXQgZmFkZU91dFwiLGUuUk9PVD1cImFsaWNlLWNhcm91c2VsXCIsZS5XUkFQUEVSPVwiYWxpY2UtY2Fyb3VzZWxfX3dyYXBwZXJcIixlLlNUQUdFPVwiYWxpY2UtY2Fyb3VzZWxfX3N0YWdlXCIsZS5TVEFHRV9JVEVNPVwiYWxpY2UtY2Fyb3VzZWxfX3N0YWdlLWl0ZW1cIixlLkRPVFM9XCJhbGljZS1jYXJvdXNlbF9fZG90c1wiLGUuRE9UU19JVEVNPVwiYWxpY2UtY2Fyb3VzZWxfX2RvdHMtaXRlbVwiLGUuUExBWV9CVE49XCJhbGljZS1jYXJvdXNlbF9fcGxheS1idG5cIixlLlBMQVlfQlROX0lURU09XCJhbGljZS1jYXJvdXNlbF9fcGxheS1idG4taXRlbVwiLGUuUExBWV9CVE5fV1JBUFBFUj1cImFsaWNlLWNhcm91c2VsX19wbGF5LWJ0bi13cmFwcGVyXCIsZS5TTElERV9JTkZPPVwiYWxpY2UtY2Fyb3VzZWxfX3NsaWRlLWluZm9cIixlLlNMSURFX0lORk9fSVRFTT1cImFsaWNlLWNhcm91c2VsX19zbGlkZS1pbmZvLWl0ZW1cIixlLkJVVFRPTl9QUkVWPVwiYWxpY2UtY2Fyb3VzZWxfX3ByZXYtYnRuXCIsZS5CVVRUT05fUFJFVl9XUkFQUEVSPVwiYWxpY2UtY2Fyb3VzZWxfX3ByZXYtYnRuLXdyYXBwZXJcIixlLkJVVFRPTl9QUkVWX0lURU09XCJhbGljZS1jYXJvdXNlbF9fcHJldi1idG4taXRlbVwiLGUuQlVUVE9OX05FWFQ9XCJhbGljZS1jYXJvdXNlbF9fbmV4dC1idG5cIixlLkJVVFRPTl9ORVhUX1dSQVBQRVI9XCJhbGljZS1jYXJvdXNlbF9fbmV4dC1idG4td3JhcHBlclwiLGUuQlVUVE9OX05FWFRfSVRFTT1cImFsaWNlLWNhcm91c2VsX19uZXh0LWJ0bi1pdGVtXCJ9KENsYXNzbmFtZXM9ZXhwb3J0cy5DbGFzc25hbWVzfHwoZXhwb3J0cy5DbGFzc25hbWVzPXt9KSksZnVuY3Rpb24oZSl7ZS5BQ1RJVkU9XCJfX2FjdGl2ZVwiLGUuSU5BQ1RJVkU9XCJfX2luYWN0aXZlXCIsZS5DTE9ORUQ9XCJfX2Nsb25lZFwiLGUuQ1VTVE9NPVwiX19jdXN0b21cIixlLlBBVVNFPVwiX19wYXVzZVwiLGUuU0VQQVJBVE9SPVwiX19zZXBhcmF0b3JcIixlLlNTUj1cIl9fc3NyXCIsZS5UQVJHRVQ9XCJfX3RhcmdldFwifShNb2RpZmllcnM9ZXhwb3J0cy5Nb2RpZmllcnN8fChleHBvcnRzLk1vZGlmaWVycz17fSkpOyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuZGVmYXVsdFByb3BzPXZvaWQgMDt2YXIgdHlwZXNfMT1yZXF1aXJlKFwiLi90eXBlc1wiKTtleHBvcnRzLmRlZmF1bHRQcm9wcz17YWN0aXZlSW5kZXg6MCxhbmltYXRpb25EdXJhdGlvbjo0MDAsYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb246XCJlYXNlXCIsYW5pbWF0aW9uVHlwZTp0eXBlc18xLkFuaW1hdGlvblR5cGUuU0xJREUsYXV0b0hlaWdodDohMSxhdXRvV2lkdGg6ITEsYXV0b1BsYXk6ITEsYXV0b1BsYXlDb250cm9sczohMSxhdXRvUGxheURpcmVjdGlvbjp0eXBlc18xLkF1dG9wbGF5RGlyZWN0aW9uLkxUUixhdXRvUGxheUludGVydmFsOjQwMCxhdXRvUGxheVN0cmF0ZWd5OnR5cGVzXzEuQXV0b1BsYXlTdHJhdGVneS5ERUZBVUxULGNoaWxkcmVuOnZvaWQgMCxjb250cm9sc1N0cmF0ZWd5OnR5cGVzXzEuQ29udHJvbHNTdHJhdGVneS5ERUZBVUxULGRpc2FibGVCdXR0b25zQ29udHJvbHM6ITEsZGlzYWJsZURvdHNDb250cm9sczohMSxkaXNhYmxlU2xpZGVJbmZvOiEwLGluZmluaXRlOiExLGlubmVyV2lkdGg6dm9pZCAwLGl0ZW1zOnZvaWQgMCxrZXlib2FyZE5hdmlnYXRpb246ITEsbW91c2VUcmFja2luZzohMSxuYW1lOlwiXCIscGFkZGluZ0xlZnQ6MCxwYWRkaW5nUmlnaHQ6MCxyZXNwb25zaXZlOnZvaWQgMCxzd2lwZURlbHRhOjIwLHN3aXBlRXh0cmFQYWRkaW5nOjIwMCxzc3JTaWxlbnRNb2RlOiEwLHRvdWNoVHJhY2tpbmc6ITAsdG91Y2hNb3ZlRGVmYXVsdEV2ZW50czohMCxvbkluaXRpYWxpemVkOmZ1bmN0aW9uKCl7fSxvblJlc2l6ZWQ6ZnVuY3Rpb24oKXt9LG9uUmVzaXplRXZlbnQ6dm9pZCAwLG9uU2xpZGVDaGFuZ2U6ZnVuY3Rpb24oKXt9LG9uU2xpZGVDaGFuZ2VkOmZ1bmN0aW9uKCl7fX07IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9fYXNzaWduPWZ1bmN0aW9uKCl7cmV0dXJuKF9fYXNzaWduPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKG8pe2Zvcih2YXIgdCxyPTEsaT1hcmd1bWVudHMubGVuZ3RoO3I8aTtyKyspZm9yKHZhciBzIGluIHQ9YXJndW1lbnRzW3JdKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LHMpJiYob1tzXT10W3NdKTtyZXR1cm4gb30pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sbWFwUGFydGlhbENvb3Jkcz0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5tYXBQb3NpdGlvbkNvb3Jkcz1leHBvcnRzLm1hcFBhcnRpYWxDb29yZHM9dm9pZCAwLGZ1bmN0aW9uKG8pe3JldHVybiBvLm1hcChmdW5jdGlvbihvKXtyZXR1cm57d2lkdGg6by53aWR0aCxwb3NpdGlvbjowfX0pfSksbWFwUG9zaXRpb25Db29yZHM9KGV4cG9ydHMubWFwUGFydGlhbENvb3Jkcz1tYXBQYXJ0aWFsQ29vcmRzLGZ1bmN0aW9uKG8sdCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PTApLG8ubWFwKGZ1bmN0aW9uKG8pe3JldHVybiBvLnBvc2l0aW9uPnQ/X19hc3NpZ24oX19hc3NpZ24oe30sbykse3Bvc2l0aW9uOnR9KTpvfSl9KTtleHBvcnRzLm1hcFBvc2l0aW9uQ29vcmRzPW1hcFBvc2l0aW9uQ29vcmRzOyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuaXNWZXJ0aWNhbFRvdWNobW92ZURldGVjdGVkPWV4cG9ydHMuZ2V0RmFkZW91dEFuaW1hdGlvblBvc2l0aW9uPWV4cG9ydHMuZ2V0RmFkZW91dEFuaW1hdGlvbkluZGV4PWV4cG9ydHMuZ2V0U3dpcGVUb3VjaGVuZEluZGV4PWV4cG9ydHMuZ2V0U3dpcGVUb3VjaGVuZFBvc2l0aW9uPWV4cG9ydHMuZ2V0U3dpcGVUcmFuc2Zvcm1hdGlvbkN1cnNvcj1leHBvcnRzLmdldFRyYW5zZm9ybWF0aW9uSXRlbUluZGV4PWV4cG9ydHMuZ2V0U3dpcGVTaGlmdFZhbHVlPWV4cG9ydHMuZ2V0SXRlbUNvb3Jkcz1leHBvcnRzLmdldElzTGVmdERpcmVjdGlvbj1leHBvcnRzLnNob3VsZFJlY2FsY3VsYXRlU3dpcGVQb3NpdGlvbj1leHBvcnRzLmdldFN3aXBlTGltaXRNYXg9ZXhwb3J0cy5nZXRTd2lwZUxpbWl0TWluPWV4cG9ydHMuc2hvdWxkQ2FuY2VsU2xpZGVBbmltYXRpb249ZXhwb3J0cy5zaG91bGRSZWNhbGN1bGF0ZVNsaWRlSW5kZXg9ZXhwb3J0cy5nZXRVcGRhdGVTbGlkZVBvc2l0aW9uSW5kZXg9ZXhwb3J0cy5nZXRBY3RpdmVJbmRleD1leHBvcnRzLmdldFN0YXJ0SW5kZXg9ZXhwb3J0cy5nZXRTaGlmdEluZGV4PXZvaWQgMDt2YXIgZ2V0U2hpZnRJbmRleD1mdW5jdGlvbihlLHQpe3JldHVybihlPXZvaWQgMD09PWU/MDplKSsodD12b2lkIDA9PT10PzA6dCl9LGdldFN0YXJ0SW5kZXg9KGV4cG9ydHMuZ2V0U2hpZnRJbmRleD1nZXRTaGlmdEluZGV4LGZ1bmN0aW9uKGUsdCl7aWYodm9pZCAwPT09ZSYmKGU9MCksdD12b2lkIDA9PT10PzA6dCl7aWYodDw9ZSlyZXR1cm4gdC0xO2lmKDA8ZSlyZXR1cm4gZX1yZXR1cm4gMH0pLGdldEFjdGl2ZUluZGV4PShleHBvcnRzLmdldFN0YXJ0SW5kZXg9Z2V0U3RhcnRJbmRleCxmdW5jdGlvbihlKXt2YXIgdD1lLnN0YXJ0SW5kZXgsdD12b2lkIDA9PT10PzA6dCxpPWUuaXRlbXNDb3VudCxlPWUuaW5maW5pdGU7cmV0dXJuIHZvaWQgMCE9PWUmJmU/dDooMCxleHBvcnRzLmdldFN0YXJ0SW5kZXgpKHQsdm9pZCAwPT09aT8wOmkpfSksZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4PShleHBvcnRzLmdldEFjdGl2ZUluZGV4PWdldEFjdGl2ZUluZGV4LGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU8MD90LTE6dDw9ZT8wOmV9KSxzaG91bGRSZWNhbGN1bGF0ZVNsaWRlSW5kZXg9KGV4cG9ydHMuZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4PWdldFVwZGF0ZVNsaWRlUG9zaXRpb25JbmRleCxmdW5jdGlvbihlLHQpe3JldHVybiBlPDB8fHQ8PWV9KSxzaG91bGRDYW5jZWxTbGlkZUFuaW1hdGlvbj0oZXhwb3J0cy5zaG91bGRSZWNhbGN1bGF0ZVNsaWRlSW5kZXg9c2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4LGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU8MHx8dDw9ZX0pLGdldFN3aXBlTGltaXRNaW49KGV4cG9ydHMuc2hvdWxkQ2FuY2VsU2xpZGVBbmltYXRpb249c2hvdWxkQ2FuY2VsU2xpZGVBbmltYXRpb24sZnVuY3Rpb24oZSx0KXt2YXIgaT1lLml0ZW1zT2Zmc2V0LGU9ZS50cmFuc2Zvcm1hdGlvblNldCxlPXZvaWQgMD09PWU/W106ZSxvPXQuaW5maW5pdGUsdD10LnN3aXBlRXh0cmFQYWRkaW5nO3JldHVybiBvPyhlW3ZvaWQgMD09PWk/MDppXXx8e30pLnBvc2l0aW9uOihvPShlWzBdfHx7fSkud2lkdGgsTWF0aC5taW4odm9pZCAwPT09dD8wOnQsdm9pZCAwPT09bz8wOm8pKX0pLGdldFN3aXBlTGltaXRNYXg9KGV4cG9ydHMuZ2V0U3dpcGVMaW1pdE1pbj1nZXRTd2lwZUxpbWl0TWluLGZ1bmN0aW9uKGUsdCl7dmFyIGk9dC5pbmZpbml0ZSx0PXQuc3dpcGVFeHRyYVBhZGRpbmcsdD12b2lkIDA9PT10PzA6dCxvPWUuaXRlbXNDb3VudCxuPWUuaXRlbXNPZmZzZXQscj1lLml0ZW1zSW5TbGlkZSxyPXZvaWQgMD09PXI/MTpyLGU9ZS50cmFuc2Zvcm1hdGlvblNldCxlPXZvaWQgMD09PWU/W106ZTtyZXR1cm4gaT8oZVsodm9pZCAwPT09bz8xOm8pKygwLGV4cG9ydHMuZ2V0U2hpZnRJbmRleCkocix2b2lkIDA9PT1uPzA6bildfHx7fSkucG9zaXRpb258fDA6KDAsZXhwb3J0cy5nZXRJdGVtQ29vcmRzKSgtcixlKS5wb3NpdGlvbit0fSksc2hvdWxkUmVjYWxjdWxhdGVTd2lwZVBvc2l0aW9uPShleHBvcnRzLmdldFN3aXBlTGltaXRNYXg9Z2V0U3dpcGVMaW1pdE1heCxmdW5jdGlvbihlLHQsaSl7cmV0dXJuLXQ8PWV8fE1hdGguYWJzKGUpPj1pfSksZ2V0SXNMZWZ0RGlyZWN0aW9uPShleHBvcnRzLnNob3VsZFJlY2FsY3VsYXRlU3dpcGVQb3NpdGlvbj1zaG91bGRSZWNhbGN1bGF0ZVN3aXBlUG9zaXRpb24sZnVuY3Rpb24oZSl7cmV0dXJuKGU9dm9pZCAwPT09ZT8wOmUpPDB9KSxnZXRJdGVtQ29vcmRzPShleHBvcnRzLmdldElzTGVmdERpcmVjdGlvbj1nZXRJc0xlZnREaXJlY3Rpb24sZnVuY3Rpb24oZSx0KXtyZXR1cm4odD12b2lkIDA9PT10P1tdOnQpLnNsaWNlKGU9dm9pZCAwPT09ZT8wOmUpWzBdfHx7cG9zaXRpb246MCx3aWR0aDowfX0pLGdldFN3aXBlU2hpZnRWYWx1ZT0oZXhwb3J0cy5nZXRJdGVtQ29vcmRzPWdldEl0ZW1Db29yZHMsZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9MCksdm9pZCAwPT09dCYmKHQ9W10pLCgwLGV4cG9ydHMuZ2V0SXRlbUNvb3JkcykoZSx0KS5wb3NpdGlvbn0pLGdldFRyYW5zZm9ybWF0aW9uSXRlbUluZGV4PShleHBvcnRzLmdldFN3aXBlU2hpZnRWYWx1ZT1nZXRTd2lwZVNoaWZ0VmFsdWUsZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9MCksKGU9dm9pZCAwPT09ZT9bXTplKS5maW5kSW5kZXgoZnVuY3Rpb24oZSl7cmV0dXJuIGUucG9zaXRpb24+PU1hdGguYWJzKHQpfSl9KSxnZXRTd2lwZVRyYW5zZm9ybWF0aW9uQ3Vyc29yPShleHBvcnRzLmdldFRyYW5zZm9ybWF0aW9uSXRlbUluZGV4PWdldFRyYW5zZm9ybWF0aW9uSXRlbUluZGV4LGZ1bmN0aW9uKGUsdCxpKXt2b2lkIDA9PT1lJiYoZT1bXSksdm9pZCAwPT09dCYmKHQ9MCksdm9pZCAwPT09aSYmKGk9MCk7ZT0oMCxleHBvcnRzLmdldFRyYW5zZm9ybWF0aW9uSXRlbUluZGV4KShlLHQpO3JldHVybigwLGV4cG9ydHMuZ2V0SXNMZWZ0RGlyZWN0aW9uKShpKT9lOmUtMX0pLGdldFN3aXBlVG91Y2hlbmRQb3NpdGlvbj0oZXhwb3J0cy5nZXRTd2lwZVRyYW5zZm9ybWF0aW9uQ3Vyc29yPWdldFN3aXBlVHJhbnNmb3JtYXRpb25DdXJzb3IsZnVuY3Rpb24oZSx0LGkpe3ZvaWQgMD09PWkmJihpPTApO3ZhciBvPWUuaW5maW5pdGUsbj1lLmF1dG9XaWR0aCxyPWUuaXNTdGFnZUNvbnRlbnRQYXJ0aWFsLHM9ZS5zd2lwZUFsbG93ZWRQb3NpdGlvbk1heCxlPWUudHJhbnNmb3JtYXRpb25TZXQsaT0oMCxleHBvcnRzLmdldFN3aXBlVHJhbnNmb3JtYXRpb25DdXJzb3IpKGUsaSx0KSx0PSgwLGV4cG9ydHMuZ2V0SXRlbUNvb3JkcykoaSxlKS5wb3NpdGlvbjtpZighbyl7aWYobiYmcilyZXR1cm4gMDtpZihzPHQpcmV0dXJuLXN9cmV0dXJuLXR9KSxnZXRTd2lwZVRvdWNoZW5kSW5kZXg9KGV4cG9ydHMuZ2V0U3dpcGVUb3VjaGVuZFBvc2l0aW9uPWdldFN3aXBlVG91Y2hlbmRQb3NpdGlvbixmdW5jdGlvbihlLHQpe3ZhciBpPXQudHJhbnNmb3JtYXRpb25TZXQsbz10Lml0ZW1zSW5TbGlkZSxuPXQuaXRlbXNPZmZzZXQscj10Lml0ZW1zQ291bnQscz10LmluZmluaXRlLGQ9dC5pc1N0YWdlQ29udGVudFBhcnRpYWwsYT10LmFjdGl2ZUluZGV4LHQ9dC50cmFuc2xhdGUzZDtyZXR1cm4gc3x8IWQmJnQhPT1NYXRoLmFicyhlKT8oZD0oMCxleHBvcnRzLmdldFRyYW5zZm9ybWF0aW9uSXRlbUluZGV4KShpLGUpLHM/ZDwodD0oMCxleHBvcnRzLmdldFNoaWZ0SW5kZXgpKG8sbikpP3Itby1uK2Q6dCtyPD1kP2QtKHQrcik6ZC10OmQpOmF9KSxnZXRGYWRlb3V0QW5pbWF0aW9uSW5kZXg9KGV4cG9ydHMuZ2V0U3dpcGVUb3VjaGVuZEluZGV4PWdldFN3aXBlVG91Y2hlbmRJbmRleCxmdW5jdGlvbihlKXt2YXIgdD1lLmluZmluaXRlLGk9ZS5hY3RpdmVJbmRleCxlPWUuaXRlbXNJblNsaWRlO3JldHVybiB0P2krZTppfSksZ2V0RmFkZW91dEFuaW1hdGlvblBvc2l0aW9uPShleHBvcnRzLmdldEZhZGVvdXRBbmltYXRpb25JbmRleD1nZXRGYWRlb3V0QW5pbWF0aW9uSW5kZXgsZnVuY3Rpb24oZSx0KXt2YXIgaT10LmFjdGl2ZUluZGV4LHQ9dC5zdGFnZVdpZHRoO3JldHVybiBlPGk/KGktZSkqLXR8fDA6KGUtaSkqdHx8MH0pLGlzVmVydGljYWxUb3VjaG1vdmVEZXRlY3RlZD0oZXhwb3J0cy5nZXRGYWRlb3V0QW5pbWF0aW9uUG9zaXRpb249Z2V0RmFkZW91dEFuaW1hdGlvblBvc2l0aW9uLGZ1bmN0aW9uKGUsdCxpKXtyZXR1cm4gZTwoaT12b2lkIDA9PT1pPzA6aSl8fGU8LjEqdH0pO2V4cG9ydHMuaXNWZXJ0aWNhbFRvdWNobW92ZURldGVjdGVkPWlzVmVydGljYWxUb3VjaG1vdmVEZXRlY3RlZDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX19hc3NpZ249ZnVuY3Rpb24oKXtyZXR1cm4oX19hc3NpZ249T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlLHI9MSxuPWFyZ3VtZW50cy5sZW5ndGg7cjxuO3IrKylmb3IodmFyIG8gaW4gZT1hcmd1bWVudHNbcl0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxjb21tb25fMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5nZXRUcmFuc2Zvcm1NYXRyaXg9ZXhwb3J0cy5nZXRUcmFuc2xhdGVYUHJvcGVydHk9ZXhwb3J0cy5nZXRUb3VjaG1vdmVUcmFuc2xhdGVQb3NpdGlvbj1leHBvcnRzLmdldFRyYW5zbGF0ZTNkUHJvcGVydHk9ZXhwb3J0cy5nZXRSZW5kZXJTdGFnZUl0ZW1TdHlsZXM9ZXhwb3J0cy5nZXRSZW5kZXJTdGFnZVN0eWxlcz1leHBvcnRzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eT1leHBvcnRzLmdldFJlbmRlcldyYXBwZXJTdHlsZXM9ZXhwb3J0cy5hbmltYXRlPWV4cG9ydHMuc2hvdWxkSGFuZGxlUmVzaXplRXZlbnQ9ZXhwb3J0cy5nZXRFbGVtZW50Rmlyc3RDaGlsZD1leHBvcnRzLmdldEVsZW1lbnRDdXJzb3I9ZXhwb3J0cy5nZXRBdXRvaGVpZ2h0UHJvcGVydHk9ZXhwb3J0cy5nZXRFbGVtZW50RGltZW5zaW9ucz1leHBvcnRzLmdldEl0ZW1XaWR0aD1leHBvcnRzLmNyZWF0ZURlZmF1bHRUcmFuc2Zvcm1hdGlvblNldD1leHBvcnRzLmNyZWF0ZUF1dG93aWR0aFRyYW5zZm9ybWF0aW9uU2V0PWV4cG9ydHMuaXNFbGVtZW50PWV4cG9ydHMuY3JlYXRlQ2xvbmVzPWV4cG9ydHMuZ2V0SXRlbXNPZmZzZXQ9ZXhwb3J0cy5nZXRJdGVtc0NvdW50PWV4cG9ydHMuZ2V0U2xpZGVzPXZvaWQgMCxyZXF1aXJlKFwiLi9jb21tb25cIikpLG1hcHBlcnNfMT1yZXF1aXJlKFwiLi9tYXBwZXJzXCIpLG1hdGhfMT1yZXF1aXJlKFwiLi9tYXRoXCIpLGdldFNsaWRlcz1mdW5jdGlvbih0KXt2YXIgZT10LmNoaWxkcmVuLHQ9dC5pdGVtcztyZXR1cm4gZT9lLmxlbmd0aD9lOltlXTp2b2lkIDA9PT10P1tdOnR9LGdldEl0ZW1zQ291bnQ9KGV4cG9ydHMuZ2V0U2xpZGVzPWdldFNsaWRlcyxmdW5jdGlvbih0KXtyZXR1cm4oMCxleHBvcnRzLmdldFNsaWRlcykodCkubGVuZ3RofSksZ2V0SXRlbXNPZmZzZXQ9KGV4cG9ydHMuZ2V0SXRlbXNDb3VudD1nZXRJdGVtc0NvdW50LGZ1bmN0aW9uKHQpe3ZhciBlPXQuaW5maW5pdGUscj10LnBhZGRpbmdSaWdodCx0PXQucGFkZGluZ0xlZnQ7cmV0dXJuIGUmJih0fHxyKT8xOjB9KSxjcmVhdGVDbG9uZXM9KGV4cG9ydHMuZ2V0SXRlbXNPZmZzZXQ9Z2V0SXRlbXNPZmZzZXQsZnVuY3Rpb24odCl7dmFyIGUscixuLG8saT0oMCxleHBvcnRzLmdldFNsaWRlcykodCk7cmV0dXJuIHQuaW5maW5pdGU/KGU9KDAsZXhwb3J0cy5nZXRJdGVtc0NvdW50KSh0KSxvPSgwLGV4cG9ydHMuZ2V0SXRlbXNPZmZzZXQpKHQpLHQ9KDAsY29tbW9uXzEuZ2V0SXRlbXNJblNsaWRlKShlLHQpLG49TWF0aC5taW4odCxlKStvLHI9aS5zbGljZSgwLG4pLG49aS5zbGljZSgtbiksbyYmdD09PWUmJihvPWlbMF0sdD1pLnNsaWNlKC0xKVswXSxuLnVuc2hpZnQodCksci5wdXNoKG8pKSxuLmNvbmNhdChpLHIpKTppfSksaXNFbGVtZW50PShleHBvcnRzLmNyZWF0ZUNsb25lcz1jcmVhdGVDbG9uZXMsZnVuY3Rpb24odCl7dHJ5e3JldHVybiB0IGluc3RhbmNlb2YgRWxlbWVudHx8dCBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudH1jYXRjaCh0KXtyZXR1cm4hMX19KSxjcmVhdGVBdXRvd2lkdGhUcmFuc2Zvcm1hdGlvblNldD0oZXhwb3J0cy5pc0VsZW1lbnQ9aXNFbGVtZW50LGZ1bmN0aW9uKHQsaSxlKXt2b2lkIDA9PT1pJiYoaT0wKSx2b2lkIDA9PT1lJiYoZT0hMSk7dmFyIHM9MCxhPSEwLHI9W107cmV0dXJuKDAsZXhwb3J0cy5pc0VsZW1lbnQpKHQpJiYocj1BcnJheS5mcm9tKChudWxsPT10P3ZvaWQgMDp0LmNoaWxkcmVuKXx8W10pLnJlZHVjZShmdW5jdGlvbih0LGUscil7dmFyIG49MCxyPXItMSxvPXRbcl0sZT1nZXRFbGVtZW50RGltZW5zaW9ucyhudWxsPT1lP3ZvaWQgMDplLmZpcnN0Q2hpbGQpLndpZHRoLGU9dm9pZCAwPT09ZT8wOmU7cmV0dXJuIGE9KHMrPWUpPD1pLG8mJihuPTA9PXI/by53aWR0aDpvLndpZHRoK28ucG9zaXRpb24pLHQucHVzaCh7cG9zaXRpb246bix3aWR0aDplfSksdH0sW10pLGV8fChyPWE/KDAsbWFwcGVyc18xLm1hcFBhcnRpYWxDb29yZHMpKHIpOih0PXMtaSwoMCxtYXBwZXJzXzEubWFwUG9zaXRpb25Db29yZHMpKHIsdCkpKSkse2Nvb3JkczpyLGNvbnRlbnQ6cyxwYXJ0aWFsOmF9fSksY3JlYXRlRGVmYXVsdFRyYW5zZm9ybWF0aW9uU2V0PShleHBvcnRzLmNyZWF0ZUF1dG93aWR0aFRyYW5zZm9ybWF0aW9uU2V0PWNyZWF0ZUF1dG93aWR0aFRyYW5zZm9ybWF0aW9uU2V0LGZ1bmN0aW9uKHQsbyxlLHIpe3ZvaWQgMD09PXImJihyPSExKTt2YXIgaT0wLHM9ITAsbj1bXSxhPSgwLGV4cG9ydHMuZ2V0SXRlbVdpZHRoKShvLGUpO3JldHVybiBuPXQucmVkdWNlKGZ1bmN0aW9uKHQsZSxyKXt2YXIgbj0wLHI9dFtyLTFdO3JldHVybiBzPShpKz1hKTw9byxyJiYobj1hK3IucG9zaXRpb258fDApLHQucHVzaCh7d2lkdGg6YSxwb3NpdGlvbjpufSksdH0sW10pLHtjb29yZHM6bj1yP246cz8oMCxtYXBwZXJzXzEubWFwUGFydGlhbENvb3Jkcykobik6KGU9aS1vLCgwLG1hcHBlcnNfMS5tYXBQb3NpdGlvbkNvb3JkcykobixlKSksY29udGVudDppLHBhcnRpYWw6c319KSxnZXRJdGVtV2lkdGg9KGV4cG9ydHMuY3JlYXRlRGVmYXVsdFRyYW5zZm9ybWF0aW9uU2V0PWNyZWF0ZURlZmF1bHRUcmFuc2Zvcm1hdGlvblNldCxmdW5jdGlvbih0LGUpe3JldHVybiAwPGU/dC9lOnR9KTtmdW5jdGlvbiBnZXRFbGVtZW50RGltZW5zaW9ucyh0KXtyZXR1cm4gdCYmdC5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/e3dpZHRoOih0PXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLndpZHRoLGhlaWdodDp0LmhlaWdodH06e3dpZHRoOjAsaGVpZ2h0OjB9fWV4cG9ydHMuZ2V0SXRlbVdpZHRoPWdldEl0ZW1XaWR0aCxleHBvcnRzLmdldEVsZW1lbnREaW1lbnNpb25zPWdldEVsZW1lbnREaW1lbnNpb25zO3ZhciBnZXRBdXRvaGVpZ2h0UHJvcGVydHk9ZnVuY3Rpb24odCxlLHIpe3ZhciBlPSgwLGV4cG9ydHMuZ2V0RWxlbWVudEN1cnNvcikoZSxyKSxyPSgwLGV4cG9ydHMuZ2V0RWxlbWVudEZpcnN0Q2hpbGQpKHQsZSk7aWYoKDAsZXhwb3J0cy5pc0VsZW1lbnQpKHIpKXJldHVybiB0PXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHIpLGU9cGFyc2VGbG9hdCh0Lm1hcmdpblRvcCksdD1wYXJzZUZsb2F0KHQubWFyZ2luQm90dG9tKSxNYXRoLmNlaWwoci5vZmZzZXRIZWlnaHQrZSt0KX0sZ2V0RWxlbWVudEN1cnNvcj0oZXhwb3J0cy5nZXRBdXRvaGVpZ2h0UHJvcGVydHk9Z2V0QXV0b2hlaWdodFByb3BlcnR5LGZ1bmN0aW9uKHQsZSl7dmFyIHI9ZS5hY3RpdmVJbmRleCxlPWUuaXRlbXNJblNsaWRlO3JldHVybiB0LmluZmluaXRlP3IrZSsoMCxleHBvcnRzLmdldEl0ZW1zT2Zmc2V0KSh0KTpyfSksZ2V0RWxlbWVudEZpcnN0Q2hpbGQ9KGV4cG9ydHMuZ2V0RWxlbWVudEN1cnNvcj1nZXRFbGVtZW50Q3Vyc29yLGZ1bmN0aW9uKHQsZSl7dD10JiZ0LmNoaWxkcmVufHxbXTtyZXR1cm4gdFtlXSYmdFtlXS5maXJzdENoaWxkfHxudWxsfSk7ZnVuY3Rpb24gc2hvdWxkSGFuZGxlUmVzaXplRXZlbnQodCxlLHIpe3JldHVybihlPXZvaWQgMD09PWU/e306ZSkud2lkdGghPT0ocj12b2lkIDA9PT1yP3t9OnIpLndpZHRofWZ1bmN0aW9uIGFuaW1hdGUodCxlKXt2YXIgZT1lfHx7fSxyPWUucG9zaXRpb24scj12b2lkIDA9PT1yPzA6cixuPWUuYW5pbWF0aW9uRHVyYXRpb24sbj12b2lkIDA9PT1uPzA6bixlPWUuYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb24sZT12b2lkIDA9PT1lP1wiZWFzZVwiOmU7cmV0dXJuIHQmJigwLGV4cG9ydHMuaXNFbGVtZW50KSh0KSYmKHQuc3R5bGUudHJhbnNpdGlvbj1cInRyYW5zZm9ybSBcIi5jb25jYXQobixcIm1zIFwiKS5jb25jYXQoZSxcIiAwbXNcIiksdC5zdHlsZS50cmFuc2Zvcm09XCJ0cmFuc2xhdGUzZChcIi5jb25jYXQocixcInB4LCAwLCAwKVwiKSksdH1leHBvcnRzLmdldEVsZW1lbnRGaXJzdENoaWxkPWdldEVsZW1lbnRGaXJzdENoaWxkLGV4cG9ydHMuc2hvdWxkSGFuZGxlUmVzaXplRXZlbnQ9c2hvdWxkSGFuZGxlUmVzaXplRXZlbnQsZXhwb3J0cy5hbmltYXRlPWFuaW1hdGU7dmFyIGdldFJlbmRlcldyYXBwZXJTdHlsZXM9ZnVuY3Rpb24odCxlLHIpe3ZhciBuPXR8fHt9LG89bi5wYWRkaW5nTGVmdCxpPW4ucGFkZGluZ1JpZ2h0LHM9bi5hdXRvSGVpZ2h0LG49bi5hbmltYXRpb25EdXJhdGlvbixzPXM/KDAsZXhwb3J0cy5nZXRBdXRvaGVpZ2h0UHJvcGVydHkpKHIsdCxlKTp2b2lkIDA7cmV0dXJue2hlaWdodDpzLHRyYW5zaXRpb246cz9cImhlaWdodCBcIi5jb25jYXQobixcIm1zXCIpOnZvaWQgMCxwYWRkaW5nTGVmdDpcIlwiLmNvbmNhdChvLFwicHhcIikscGFkZGluZ1JpZ2h0OlwiXCIuY29uY2F0KGksXCJweFwiKX19LGdldFRyYW5zaXRpb25Qcm9wZXJ0eT0oZXhwb3J0cy5nZXRSZW5kZXJXcmFwcGVyU3R5bGVzPWdldFJlbmRlcldyYXBwZXJTdHlsZXMsZnVuY3Rpb24odCl7dmFyIHQ9dHx8e30sZT10LmFuaW1hdGlvbkR1cmF0aW9uLHQ9dC5hbmltYXRpb25FYXNpbmdGdW5jdGlvbix0PXZvaWQgMD09PXQ/XCJlYXNlXCI6dDtyZXR1cm5cInRyYW5zZm9ybSBcIi5jb25jYXQodm9pZCAwPT09ZT8wOmUsXCJtcyBcIikuY29uY2F0KHQsXCIgMG1zXCIpfSksZ2V0UmVuZGVyU3RhZ2VTdHlsZXM9KGV4cG9ydHMuZ2V0VHJhbnNpdGlvblByb3BlcnR5PWdldFRyYW5zaXRpb25Qcm9wZXJ0eSxmdW5jdGlvbih0LGUpe3Q9KHR8fHt9KS50cmFuc2xhdGUzZCx0PVwidHJhbnNsYXRlM2QoXCIuY29uY2F0KC0odm9pZCAwPT09dD8wOnQpLFwicHgsIDAsIDApXCIpO3JldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSxlKSx7dHJhbnNmb3JtOnR9KX0pLGdldFJlbmRlclN0YWdlSXRlbVN0eWxlcz0oZXhwb3J0cy5nZXRSZW5kZXJTdGFnZVN0eWxlcz1nZXRSZW5kZXJTdGFnZVN0eWxlcyxmdW5jdGlvbih0LGUpe3ZhciByPWUudHJhbnNmb3JtYXRpb25TZXQsbj1lLmZhZGVvdXRBbmltYXRpb25JbmRleCxvPWUuZmFkZW91dEFuaW1hdGlvblBvc2l0aW9uLGk9ZS5mYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZyxlPWUuYW5pbWF0aW9uRHVyYXRpb24scj0oclt0XXx8e30pLndpZHRoO3JldHVybiBpJiZuPT09dD97dHJhbnNmb3JtOlwidHJhbnNsYXRlWChcIi5jb25jYXQobyxcInB4KVwiKSxhbmltYXRpb25EdXJhdGlvbjpcIlwiLmNvbmNhdChlLFwibXNcIiksd2lkdGg6XCJcIi5jb25jYXQocixcInB4XCIpfTp7d2lkdGg6cn19KSxnZXRUcmFuc2xhdGUzZFByb3BlcnR5PShleHBvcnRzLmdldFJlbmRlclN0YWdlSXRlbVN0eWxlcz1nZXRSZW5kZXJTdGFnZUl0ZW1TdHlsZXMsZnVuY3Rpb24odCxlKXt2YXIgcj10LG49ZS5pbmZpbml0ZSxvPWUuaXRlbXNPZmZzZXQsaT1lLml0ZW1zSW5TbGlkZSxlPWUudHJhbnNmb3JtYXRpb25TZXQ7cmV0dXJuKCh2b2lkIDA9PT1lP1tdOmUpW3I9bj90KygwLG1hdGhfMS5nZXRTaGlmdEluZGV4KSh2b2lkIDA9PT1pPzA6aSx2b2lkIDA9PT1vPzA6byk6cl18fHt9KS5wb3NpdGlvbnx8MH0pLGdldFRvdWNobW92ZVRyYW5zbGF0ZVBvc2l0aW9uPShleHBvcnRzLmdldFRyYW5zbGF0ZTNkUHJvcGVydHk9Z2V0VHJhbnNsYXRlM2RQcm9wZXJ0eSxmdW5jdGlvbih0LGUpe3JldHVybi0oZS1NYXRoLmZsb29yKHQpKX0pO2Z1bmN0aW9uIGdldFRyYW5zbGF0ZVhQcm9wZXJ0eSh0KXt0PWdldFRyYW5zZm9ybU1hdHJpeCh0KSx0PXQmJnRbNF18fFwiXCI7cmV0dXJuIE51bWJlcih0KX1mdW5jdGlvbiBnZXRUcmFuc2Zvcm1NYXRyaXgodCl7cmV0dXJuIHQmJigwLGV4cG9ydHMuaXNFbGVtZW50KSh0KSYmd2luZG93LmdldENvbXB1dGVkU3R5bGUodCkudHJhbnNmb3JtLm1hdGNoKC8oLT9bMC05Ll0rKS9nKXx8W119ZXhwb3J0cy5nZXRUb3VjaG1vdmVUcmFuc2xhdGVQb3NpdGlvbj1nZXRUb3VjaG1vdmVUcmFuc2xhdGVQb3NpdGlvbixleHBvcnRzLmdldFRyYW5zbGF0ZVhQcm9wZXJ0eT1nZXRUcmFuc2xhdGVYUHJvcGVydHksZXhwb3J0cy5nZXRUcmFuc2Zvcm1NYXRyaXg9Z2V0VHJhbnNmb3JtTWF0cml4OyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuY2FsY3VsYXRlSW5pdGlhbFN0YXRlPWV4cG9ydHMuZ2V0SXRlbXNJblNsaWRlPWV4cG9ydHMuZ2V0SXNTdGFnZUNvbnRlbnRQYXJ0aWFsPWV4cG9ydHMuY29uY2F0Q2xhc3NuYW1lcz1leHBvcnRzLmNhblVzZURPTT12b2lkIDA7dmFyIGVsZW1lbnRzXzE9cmVxdWlyZShcIi4vZWxlbWVudHNcIiksbWF0aF8xPXJlcXVpcmUoXCIuL21hdGhcIiksY2FuVXNlRE9NPWZ1bmN0aW9uKCl7dmFyIHQ7dHJ5e3JldHVybiBCb29sZWFuKG51bGw9PSh0PW51bGw9PT13aW5kb3d8fHZvaWQgMD09PXdpbmRvdz92b2lkIDA6d2luZG93LmRvY3VtZW50KT92b2lkIDA6dC5jcmVhdGVFbGVtZW50KX1jYXRjaCh0KXtyZXR1cm4hMX19LGNvbmNhdENsYXNzbmFtZXM9KGV4cG9ydHMuY2FuVXNlRE9NPWNhblVzZURPTSxmdW5jdGlvbigpe2Zvcih2YXIgdD1bXSxlPTA7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl0W2VdPWFyZ3VtZW50c1tlXTtyZXR1cm4gdC5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIil9KSxnZXRJc1N0YWdlQ29udGVudFBhcnRpYWw9KGV4cG9ydHMuY29uY2F0Q2xhc3NuYW1lcz1jb25jYXRDbGFzc25hbWVzLGZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9MCksdm9pZCAwPT09biYmKG49MCksISh0PXZvaWQgMCE9PXQmJnQpJiZuPD1lfSksZ2V0SXRlbXNJblNsaWRlPShleHBvcnRzLmdldElzU3RhZ2VDb250ZW50UGFydGlhbD1nZXRJc1N0YWdlQ29udGVudFBhcnRpYWwsZnVuY3Rpb24obix0KXt2YXIgaSxhPTEsbz10LnJlc3BvbnNpdmUsZT10LmF1dG9XaWR0aCxzPXQuaW5maW5pdGUsdD10LmlubmVyV2lkdGg7cmV0dXJuIHZvaWQgMCE9PWUmJmU/dm9pZCAwIT09cyYmcz9uOmE6KG8mJihlPU9iamVjdC5rZXlzKG8pKS5sZW5ndGgmJih0fHwoMCxleHBvcnRzLmNhblVzZURPTSkoKSkmJihpPXZvaWQgMD09PXQ/d2luZG93LmlubmVyV2lkdGg6dCxlLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGU7TnVtYmVyKHQpPD1pJiYoZT0odD1vW3RdKS5pdGVtcyx0PXQuaXRlbXNGaXQsYT1cImNvbnRhaW5cIj09PSh2b2lkIDA9PT10P1wiZmlsbFwiOnQpP2U6TWF0aC5taW4oZSxuKSl9KSksYXx8MSl9KSxjYWxjdWxhdGVJbml0aWFsU3RhdGU9KGV4cG9ydHMuZ2V0SXRlbXNJblNsaWRlPWdldEl0ZW1zSW5TbGlkZSxmdW5jdGlvbih0LGUsbil7dm9pZCAwPT09biYmKG49ITEpO3ZhciBpLGEsbz10LmFuaW1hdGlvbkR1cmF0aW9uLG89dm9pZCAwPT09bz8wOm8scz10LmluZmluaXRlLHM9dm9pZCAwIT09cyYmcyxyPXQuYXV0b1BsYXkscj12b2lkIDAhPT1yJiZyLGw9dC5hdXRvV2lkdGgsbD12b2lkIDAhPT1sJiZsLG09KDAsZWxlbWVudHNfMS5jcmVhdGVDbG9uZXMpKHQpLGQ9KDAsZWxlbWVudHNfMS5nZXRUcmFuc2l0aW9uUHJvcGVydHkpKCksYz0oMCxlbGVtZW50c18xLmdldEl0ZW1zQ291bnQpKHQpLHU9KDAsZWxlbWVudHNfMS5nZXRJdGVtc09mZnNldCkodCksZj0oMCxleHBvcnRzLmdldEl0ZW1zSW5TbGlkZSkoYyx0KSxnPSgwLG1hdGhfMS5nZXRTdGFydEluZGV4KSh0LmFjdGl2ZUluZGV4LGMpLGc9KDAsbWF0aF8xLmdldEFjdGl2ZUluZGV4KSh7c3RhcnRJbmRleDpnLGl0ZW1zQ291bnQ6YyxpbmZpbml0ZTpzfSksST0oMCxlbGVtZW50c18xLmdldEVsZW1lbnREaW1lbnNpb25zKShlKS53aWR0aCxTPShhPShlPShsPyhpPShlPSgwLGVsZW1lbnRzXzEuY3JlYXRlQXV0b3dpZHRoVHJhbnNmb3JtYXRpb25TZXQpKGUsSSxzKSkuY29vcmRzLGE9ZS5jb250ZW50LGUpOihpPShlPSgwLGVsZW1lbnRzXzEuY3JlYXRlRGVmYXVsdFRyYW5zZm9ybWF0aW9uU2V0KShtLEksZixzKSkuY29vcmRzLGE9ZS5jb250ZW50LGUpKS5wYXJ0aWFsLGEpLCgwLG1hdGhfMS5nZXRJdGVtQ29vcmRzKSgtZixpPWkpLnBvc2l0aW9uKSxwPSgwLG1hdGhfMS5nZXRTd2lwZUxpbWl0TWluKSh7aXRlbXNPZmZzZXQ6dSx0cmFuc2Zvcm1hdGlvblNldDppfSx0KSx0PSgwLG1hdGhfMS5nZXRTd2lwZUxpbWl0TWF4KSh7aXRlbXNDb3VudDpjLGl0ZW1zT2Zmc2V0OnUsaXRlbXNJblNsaWRlOmYsdHJhbnNmb3JtYXRpb25TZXQ6aX0sdCksdj0oMCxtYXRoXzEuZ2V0U3dpcGVTaGlmdFZhbHVlKShjLGkpO3JldHVybnthY3RpdmVJbmRleDpnLGF1dG9XaWR0aDpsLGFuaW1hdGlvbkR1cmF0aW9uOm8sY2xvbmVzOm0saW5maW5pdGU6cyxpdGVtc0NvdW50OmMsaXRlbXNJblNsaWRlOmYsaXRlbXNPZmZzZXQ6dSx0cmFuc2xhdGUzZDooMCxlbGVtZW50c18xLmdldFRyYW5zbGF0ZTNkUHJvcGVydHkpKGcse2l0ZW1zSW5TbGlkZTpmLGl0ZW1zT2Zmc2V0OnUsdHJhbnNmb3JtYXRpb25TZXQ6aSxhdXRvV2lkdGg6bCxpbmZpbml0ZTpzfSksc3RhZ2VXaWR0aDpJLHN0YWdlQ29udGVudFdpZHRoOmEsaW5pdGlhbFN0YWdlSGVpZ2h0OjAsaXNTdGFnZUNvbnRlbnRQYXJ0aWFsOmUsaXNBdXRvUGxheWluZzpCb29sZWFuKHIpLGlzQXV0b1BsYXlDYW5jZWxlZE9uQWN0aW9uOiExLHRyYW5zZm9ybWF0aW9uU2V0OmksdHJhbnNpdGlvbjpkLGZhZGVvdXRBbmltYXRpb25JbmRleDpudWxsLGZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbjpudWxsLGZhZGVvdXRBbmltYXRpb25Qcm9jZXNzaW5nOiExLHN3aXBlTGltaXRNaW46cCxzd2lwZUxpbWl0TWF4OnQsc3dpcGVBbGxvd2VkUG9zaXRpb25NYXg6Uyxzd2lwZVNoaWZ0VmFsdWU6dixjYW5Vc2VEb206bnx8KDAsZXhwb3J0cy5jYW5Vc2VET00pKCl9fSk7ZXhwb3J0cy5jYWxjdWxhdGVJbml0aWFsU3RhdGU9Y2FsY3VsYXRlSW5pdGlhbFN0YXRlOyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuaXNDbG9uZWRJdGVtPWV4cG9ydHMuaXNUYXJnZXRJdGVtPWV4cG9ydHMuaXNBY3RpdmVJdGVtPWV4cG9ydHMuZ2V0UmVuZGVyU3RhZ2VJdGVtQ2xhc3Nlcz12b2lkIDA7dmFyIHR5cGVzXzE9cmVxdWlyZShcIi4uL3R5cGVzXCIpLGNvbW1vbl8xPXJlcXVpcmUoXCIuL2NvbW1vblwiKSxtYXRoXzE9cmVxdWlyZShcIi4vbWF0aFwiKSxnZXRSZW5kZXJTdGFnZUl0ZW1DbGFzc2VzPWZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09ZSYmKGU9MCk7dmFyIHM9dC5mYWRlb3V0QW5pbWF0aW9uSW5kZXgsaT0oMCxleHBvcnRzLmlzQWN0aXZlSXRlbSkoZSx0KT90eXBlc18xLk1vZGlmaWVycy5BQ1RJVkU6XCJcIixuPSgwLGV4cG9ydHMuaXNDbG9uZWRJdGVtKShlLHQpP3R5cGVzXzEuTW9kaWZpZXJzLkNMT05FRDpcIlwiLHQ9KDAsZXhwb3J0cy5pc1RhcmdldEl0ZW0pKGUsdCk/dHlwZXNfMS5Nb2RpZmllcnMuVEFSR0VUOlwiXCIsZT1lPT09cz90eXBlc18xLkNsYXNzbmFtZXMuQU5JTUFURUQ6XCJcIjtyZXR1cm4oMCxjb21tb25fMS5jb25jYXRDbGFzc25hbWVzKSh0eXBlc18xLkNsYXNzbmFtZXMuU1RBR0VfSVRFTSxpLG4sdCxlKX0saXNBY3RpdmVJdGVtPShleHBvcnRzLmdldFJlbmRlclN0YWdlSXRlbUNsYXNzZXM9Z2V0UmVuZGVyU3RhZ2VJdGVtQ2xhc3NlcyxmdW5jdGlvbihlLHQpe3ZvaWQgMD09PWUmJihlPTApO3ZhciBzPXQuYWN0aXZlSW5kZXgsaT10Lml0ZW1zSW5TbGlkZSxuPXQuaXRlbXNPZmZzZXQscj10LmluZmluaXRlLHQ9dC5hdXRvV2lkdGgsbz0oMCxtYXRoXzEuZ2V0U2hpZnRJbmRleCkoaSxuKTtyZXR1cm4gdCYmcj9lLW89PT1zK246KHQ9cytvLHI/dDw9ZSYmZTx0K2k6czw9ZSYmZTx0KX0pLGlzVGFyZ2V0SXRlbT0oZXhwb3J0cy5pc0FjdGl2ZUl0ZW09aXNBY3RpdmVJdGVtLGZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09ZSYmKGU9MCk7dmFyIHM9dC5hY3RpdmVJbmRleCxpPXQuaXRlbXNJblNsaWRlLG49dC5pdGVtc09mZnNldCxyPXQuaW5maW5pdGUsdD10LmF1dG9XaWR0aCxpPSgwLG1hdGhfMS5nZXRTaGlmdEluZGV4KShpLG4pO3JldHVybiByP3QmJnI/ZS1pPT09cytuOmU9PT1zK2k6ZT09PXN9KSxpc0Nsb25lZEl0ZW09KGV4cG9ydHMuaXNUYXJnZXRJdGVtPWlzVGFyZ2V0SXRlbSxmdW5jdGlvbihlLHQpe3ZvaWQgMD09PWUmJihlPTApO3ZhciBzPXQuaXRlbXNJblNsaWRlLGk9dC5pdGVtc09mZnNldCxuPXQuaXRlbXNDb3VudCxyPXQuaW5maW5pdGUsdD10LmF1dG9XaWR0aDtyZXR1cm4hIXImJih0JiZyP2U8c3x8bi0xK3M8ZTplPCh0PSgwLG1hdGhfMS5nZXRTaGlmdEluZGV4KShzLGkpKXx8bi0xK3Q8ZSl9KTtleHBvcnRzLmlzQ2xvbmVkSXRlbT1pc0Nsb25lZEl0ZW07IiwiXCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZGVib3VuY2UobixpKXt2b2lkIDA9PT1pJiYoaT0wKTtmdW5jdGlvbiB1KCl7ZCYmKGNsZWFyVGltZW91dChkKSxkPXZvaWQgMCl9dmFyIGQ9dm9pZCAwO3JldHVybltmdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLG89W10sdD0wO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspb1t0XT1hcmd1bWVudHNbdF07dSgpLGQ9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLmFwcGx5KGUsbyksZD12b2lkIDB9LGkpfSx1XX1PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmRlYm91bmNlPXZvaWQgMCxleHBvcnRzLmRlYm91bmNlPWRlYm91bmNlOyIsIlwidXNlIHN0cmljdFwiO2Z1bmN0aW9uIGRlYnVnKCl7Zm9yKHZhciBlPVtdLG89MDtvPGFyZ3VtZW50cy5sZW5ndGg7bysrKWVbb109YXJndW1lbnRzW29dO1wiZGV2ZWxvcG1lbnRcIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZjb25zb2xlLmRlYnVnLmFwcGx5KGNvbnNvbGUsZSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5kZWJ1Zz12b2lkIDAsZXhwb3J0cy5kZWJ1Zz1kZWJ1ZzsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmdldFNsaWRlSXRlbUluZm89ZXhwb3J0cy5nZXRTbGlkZUluZm89ZXhwb3J0cy5nZXRTbGlkZUluZGV4Rm9yTXVsdGlwbGVJdGVtcz1leHBvcnRzLmdldFNsaWRlSW5kZXhGb3JOb25NdWx0aXBsZUl0ZW1zPWV4cG9ydHMuZ2V0QWN0aXZlU2xpZGVEb3RzTGVuZ3RoPWV4cG9ydHMuZ2V0QWN0aXZlU2xpZGVJbmRleD12b2lkIDA7dmFyIGdldEFjdGl2ZVNsaWRlSW5kZXg9ZnVuY3Rpb24oZSx0KXt2YXIgdD10fHx7fSxpPXQuYWN0aXZlSW5kZXgsbz10Lml0ZW1zSW5TbGlkZSx0PXQuaXRlbXNDb3VudCxpPWkrbztyZXR1cm4gMT09PW8/KDAsZXhwb3J0cy5nZXRTbGlkZUluZGV4Rm9yTm9uTXVsdGlwbGVJdGVtcykoaSxvLHQpOigwLGV4cG9ydHMuZ2V0U2xpZGVJbmRleEZvck11bHRpcGxlSXRlbXMpKGksbyx0LGUpfSxnZXRBY3RpdmVTbGlkZURvdHNMZW5ndGg9KGV4cG9ydHMuZ2V0QWN0aXZlU2xpZGVJbmRleD1nZXRBY3RpdmVTbGlkZUluZGV4LGZ1bmN0aW9uKGUsdCl7dmFyIGk7cmV0dXJuIHZvaWQgMD09PXQmJih0PTEpLChlPXZvaWQgMD09PWU/MDplKSYmdD8oaT1NYXRoLmZsb29yKGUvdCksZSV0PT0wP2ktMTppKTowfSksZ2V0U2xpZGVJbmRleEZvck5vbk11bHRpcGxlSXRlbXM9KGV4cG9ydHMuZ2V0QWN0aXZlU2xpZGVEb3RzTGVuZ3RoPWdldEFjdGl2ZVNsaWRlRG90c0xlbmd0aCxmdW5jdGlvbihlLHQsaSl7cmV0dXJuIGU8dD9pLXQ6aTxlPzA6ZS0xfSksZ2V0U2xpZGVJbmRleEZvck11bHRpcGxlSXRlbXM9KGV4cG9ydHMuZ2V0U2xpZGVJbmRleEZvck5vbk11bHRpcGxlSXRlbXM9Z2V0U2xpZGVJbmRleEZvck5vbk11bHRpcGxlSXRlbXMsZnVuY3Rpb24oZSx0LGksbyl7dmFyIGw9KDAsZXhwb3J0cy5nZXRBY3RpdmVTbGlkZURvdHNMZW5ndGgpKGksdCk7cmV0dXJuIGU9PT1pK3Q/MDpvfHxlPHQmJjAhPT1lP2w6MD09PWU/aSV0PT0wP2w6bC0xOjA8dD9NYXRoLmZsb29yKGUvdCktMTowfSksZ2V0U2xpZGVJbmZvPShleHBvcnRzLmdldFNsaWRlSW5kZXhGb3JNdWx0aXBsZUl0ZW1zPWdldFNsaWRlSW5kZXhGb3JNdWx0aXBsZUl0ZW1zLGZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09dCYmKHQ9MCk7ZT0oZT12b2lkIDA9PT1lPzA6ZSkrMTtyZXR1cm4gZTwxP2U9dDp0PGUmJihlPTEpLHtpdGVtOmUsaXRlbXNDb3VudDp0fX0pLGdldFNsaWRlSXRlbUluZm89KGV4cG9ydHMuZ2V0U2xpZGVJbmZvPWdldFNsaWRlSW5mbyxmdW5jdGlvbihlKXt2YXIgZT1lfHx7fSx0PWUuaXRlbXNJblNsaWRlLGk9ZS5hY3RpdmVJbmRleCxvPWUuaW5maW5pdGUsbD1lLml0ZW1zQ291bnQ7cmV0dXJuIGUuaXNTdGFnZUNvbnRlbnRQYXJ0aWFsP3tpc1ByZXZTbGlkZURpc2FibGVkOiEwLGlzTmV4dFNsaWRlRGlzYWJsZWQ6ITB9Ontpc1ByZXZTbGlkZURpc2FibGVkOiExPT09byYmMD09PWksaXNOZXh0U2xpZGVEaXNhYmxlZDohMT09PW8mJmwtdDw9aX19KTtleHBvcnRzLmdldFNsaWRlSXRlbUluZm89Z2V0U2xpZGVJdGVtSW5mbzsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLnNob3VsZENhbmNlbEF1dG9QbGF5T25Ib3Zlcj1leHBvcnRzLnNob3VsZENhbmNlbEF1dG9QbGF5T25BY3Rpb249ZXhwb3J0cy5nZXRJdGVtSW5kZXhGb3JEb3ROYXZpZ2F0aW9uPWV4cG9ydHMuY2hlY2tJc1RoZUxhc3REb3RJbmRleD1leHBvcnRzLmdldERvdHNOYXZpZ2F0aW9uTGVuZ3RoPWV4cG9ydHMuaGFzRG90Rm9yRWFjaFNsaWRlPWV4cG9ydHMuaXNTdHJhdGVneT1leHBvcnRzLnNob3VsZERpc2FibGVCdXR0b25zPWV4cG9ydHMuc2hvdWxkRGlzYWJsZURvdHM9ZXhwb3J0cy5zaG91bGREaXNhYmxlQ29udHJvbHM9dm9pZCAwO3ZhciB0eXBlc18xPXJlcXVpcmUoXCIuLi90eXBlc1wiKTtmdW5jdGlvbiBzaG91bGREaXNhYmxlQ29udHJvbHModCxvKXt2YXIgdD0odHx8e30pLmNvbnRyb2xzU3RyYXRlZ3ksbz1vfHx7fSxlPW8uaXRlbXNJblNsaWRlLHM9by5pdGVtc0NvdW50LG89by5hdXRvV2lkdGg7aWYoKDAsZXhwb3J0cy5pc1N0cmF0ZWd5KSh0LHR5cGVzXzEuQ29udHJvbHNTdHJhdGVneS5SRVNQT05TSVZFKSlyZXR1cm4hbyYmZT09PXN9ZnVuY3Rpb24gc2hvdWxkRGlzYWJsZURvdHModCxvKXtyZXR1cm4gdC5kaXNhYmxlRG90c0NvbnRyb2xzfHxzaG91bGREaXNhYmxlQ29udHJvbHModCxvKX1mdW5jdGlvbiBzaG91bGREaXNhYmxlQnV0dG9ucyh0LG8pe3JldHVybiB0LmRpc2FibGVCdXR0b25zQ29udHJvbHN8fCF0LmluZmluaXRlJiZzaG91bGREaXNhYmxlQ29udHJvbHModCxvKX1leHBvcnRzLnNob3VsZERpc2FibGVDb250cm9scz1zaG91bGREaXNhYmxlQ29udHJvbHMsZXhwb3J0cy5zaG91bGREaXNhYmxlRG90cz1zaG91bGREaXNhYmxlRG90cyxleHBvcnRzLnNob3VsZERpc2FibGVCdXR0b25zPXNob3VsZERpc2FibGVCdXR0b25zO3ZhciBpc1N0cmF0ZWd5PWZ1bmN0aW9uKHQsbyl7cmV0dXJuIHZvaWQgMD09PXQmJih0PVwiXCIpLHZvaWQgMD09PW8mJihvPVwiXCIpLEJvb2xlYW4odCYmdC5pbmNsdWRlcyhvKSl9LGhhc0RvdEZvckVhY2hTbGlkZT0oZXhwb3J0cy5pc1N0cmF0ZWd5PWlzU3RyYXRlZ3ksZnVuY3Rpb24odCxvKXtyZXR1cm4gdHx8KDAsZXhwb3J0cy5pc1N0cmF0ZWd5KShvLHR5cGVzXzEuQ29udHJvbHNTdHJhdGVneS5BTFRFUk5BVEUpfSksZ2V0RG90c05hdmlnYXRpb25MZW5ndGg9KGV4cG9ydHMuaGFzRG90Rm9yRWFjaFNsaWRlPWhhc0RvdEZvckVhY2hTbGlkZSxmdW5jdGlvbih0LG8sZSl7cmV0dXJuIHZvaWQgMD09PXQmJih0PTApLHZvaWQgMD09PW8mJihvPTEpLChlPXZvaWQgMCE9PWUmJmUpP3Q6MCE9PU51bWJlcihvKSYmTWF0aC5jZWlsKHQvbyl8fDB9KSxjaGVja0lzVGhlTGFzdERvdEluZGV4PShleHBvcnRzLmdldERvdHNOYXZpZ2F0aW9uTGVuZ3RoPWdldERvdHNOYXZpZ2F0aW9uTGVuZ3RoLGZ1bmN0aW9uKHQsbyxlKXtyZXR1cm4hbyYmdD09PWUtMX0pLGdldEl0ZW1JbmRleEZvckRvdE5hdmlnYXRpb249KGV4cG9ydHMuY2hlY2tJc1RoZUxhc3REb3RJbmRleD1jaGVja0lzVGhlTGFzdERvdEluZGV4LGZ1bmN0aW9uKHQsbyxlLHMpe3JldHVybihvP2Utczp0KnMpfHwwfSksc2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkFjdGlvbj0oZXhwb3J0cy5nZXRJdGVtSW5kZXhGb3JEb3ROYXZpZ2F0aW9uPWdldEl0ZW1JbmRleEZvckRvdE5hdmlnYXRpb24sZnVuY3Rpb24odCl7cmV0dXJuKHQ9dm9pZCAwPT09dD9cIlwiOnQpPT09dHlwZXNfMS5BdXRvUGxheVN0cmF0ZWd5LkFDVElPTnx8dD09PXR5cGVzXzEuQXV0b1BsYXlTdHJhdGVneS5BTEx9KSxzaG91bGRDYW5jZWxBdXRvUGxheU9uSG92ZXI9KGV4cG9ydHMuc2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkFjdGlvbj1zaG91bGRDYW5jZWxBdXRvUGxheU9uQWN0aW9uLGZ1bmN0aW9uKHQpe3JldHVybih0PXZvaWQgMD09PXQ/XCJcIjp0KT09PXR5cGVzXzEuQXV0b1BsYXlTdHJhdGVneS5ERUZBVUxUfHx0PT09dHlwZXNfMS5BdXRvUGxheVN0cmF0ZWd5LkFMTH0pO2V4cG9ydHMuc2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkhvdmVyPXNob3VsZENhbmNlbEF1dG9QbGF5T25Ib3ZlcjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX19jcmVhdGVCaW5kaW5nPU9iamVjdC5jcmVhdGU/ZnVuY3Rpb24oZSxyLHQsbyl7dm9pZCAwPT09byYmKG89dCk7dmFyIHA9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpO3AmJihcImdldFwiaW4gcD9yLl9fZXNNb2R1bGU6IXAud3JpdGFibGUmJiFwLmNvbmZpZ3VyYWJsZSl8fChwPXtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiByW3RdfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8scCl9OmZ1bmN0aW9uKGUscix0LG8pe2Vbbz12b2lkIDA9PT1vP3Q6b109clt0XX0sX19leHBvcnRTdGFyPWZ1bmN0aW9uKGUscil7Zm9yKHZhciB0IGluIGUpXCJkZWZhdWx0XCI9PT10fHxPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocix0KXx8X19jcmVhdGVCaW5kaW5nKHIsZSx0KX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NvbW1vblwiKSxleHBvcnRzKSxfX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZWxlbWVudHNcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NsYXNzbmFtZXNcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3RpbWVyc1wiKSxleHBvcnRzKSxfX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbWF0aFwiKSxleHBvcnRzKSxfX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZGVidWdcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3JlbmRlclwiKSxleHBvcnRzKSxfX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY29udHJvbHNcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL21hcHBlcnNcIiksZXhwb3J0cyk7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9faW1wb3J0RGVmYXVsdD1mdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19LHJlYWN0XzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuU2xpZGVJbmZvPXZvaWQgMCxfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKSksdHlwZXNfMT1yZXF1aXJlKFwiLi4vdHlwZXNcIiksdXRpbHNfMT1yZXF1aXJlKFwiLi4vdXRpbHNcIiksU2xpZGVJbmZvPWZ1bmN0aW9uKGUpe3ZhciB0PWUuYWN0aXZlSW5kZXgscz1lLml0ZW1zQ291bnQsZT1lLnJlbmRlclNsaWRlSW5mbyx0PSgwLHV0aWxzXzEuZ2V0U2xpZGVJbmZvKSh0LHMpLml0ZW07cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZT9yZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLlNMSURFX0lORk99LGUoe2l0ZW06dCxpdGVtc0NvdW50OnN9KSk6KGU9KDAsdXRpbHNfMS5jb25jYXRDbGFzc25hbWVzKSh0eXBlc18xLkNsYXNzbmFtZXMuU0xJREVfSU5GT19JVEVNLHR5cGVzXzEuTW9kaWZpZXJzLlNFUEFSQVRPUikscmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5TTElERV9JTkZPfSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5TTElERV9JTkZPX0lURU19LHQpLHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtjbGFzc05hbWU6ZX0sXCIvXCIpLHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLlNMSURFX0lORk9fSVRFTX0scykpKX07ZXhwb3J0cy5TbGlkZUluZm89U2xpZGVJbmZvOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2ltcG9ydERlZmF1bHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fSxyZWFjdF8xPShPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLlN0YWdlSXRlbT12b2lkIDAsX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSkpLFN0YWdlSXRlbT1mdW5jdGlvbihlKXt2YXIgdD1lLml0ZW0scj1lLmNsYXNzTmFtZSxlPWUuc3R5bGVzO3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIse3N0eWxlOmUsY2xhc3NOYW1lOnJ9LHQpfTtleHBvcnRzLlN0YWdlSXRlbT1TdGFnZUl0ZW07IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9faW1wb3J0RGVmYXVsdD1mdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19LHJlYWN0XzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuRG90c05hdmlnYXRpb249dm9pZCAwLF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpKSx0eXBlc18xPXJlcXVpcmUoXCIuLi90eXBlc1wiKSx1dGlsc18xPXJlcXVpcmUoXCIuLi91dGlsc1wiKSxEb3RzTmF2aWdhdGlvbj1mdW5jdGlvbihlKXt2YXIgYT1lLnN0YXRlLG49ZS5vbkNsaWNrLHI9ZS5vbk1vdXNlRW50ZXIsbD1lLm9uTW91c2VMZWF2ZSx0PWUuY29udHJvbHNTdHJhdGVneSx1PWUucmVuZGVyRG90c0l0ZW0sYz1hLml0ZW1zQ291bnQsXz1hLml0ZW1zSW5TbGlkZSxkPWEuaW5maW5pdGUsZT1hLmF1dG9XaWR0aCxtPWEuYWN0aXZlSW5kZXgsdj0oMCx1dGlsc18xLmdldFNsaWRlSXRlbUluZm8pKGEpLmlzTmV4dFNsaWRlRGlzYWJsZWQsZj0oMCx1dGlsc18xLmhhc0RvdEZvckVhY2hTbGlkZSkoZSx0KSxEPSgwLHV0aWxzXzEuZ2V0RG90c05hdmlnYXRpb25MZW5ndGgpKGMsXyxmKTtyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLkRPVFN9LEFycmF5LmZyb20oe2xlbmd0aDpjfSkubWFwKGZ1bmN0aW9uKGUsdCl7dmFyIGkscyxvO2lmKHQ8RClyZXR1cm4gcz0oMCx1dGlsc18xLmNoZWNrSXNUaGVMYXN0RG90SW5kZXgpKHQsQm9vbGVhbihkKSxEKSxpPSgwLHV0aWxzXzEuZ2V0SXRlbUluZGV4Rm9yRG90TmF2aWdhdGlvbikodCxzLGMsXykscz0oMCx1dGlsc18xLmdldEFjdGl2ZVNsaWRlSW5kZXgpKHYsYSksZiYmKChzPW0pPDA/cz1jLTE6Yzw9bSYmKHM9MCksaT10KSxzPXM9PT10P3R5cGVzXzEuTW9kaWZpZXJzLkFDVElWRTpcIlwiLG89dT90eXBlc18xLk1vZGlmaWVycy5DVVNUT006XCJcIixvPSgwLHV0aWxzXzEuY29uY2F0Q2xhc3NuYW1lcykodHlwZXNfMS5DbGFzc25hbWVzLkRPVFNfSVRFTSxzLG8pLHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIix7a2V5OlwiZG90LWl0ZW0tXCIuY29uY2F0KHQpLG9uTW91c2VFbnRlcjpyLG9uTW91c2VMZWF2ZTpsLG9uQ2xpY2s6ZnVuY3Rpb24oKXtyZXR1cm4gbihpKX0sY2xhc3NOYW1lOm99LHUmJnUoe2lzQWN0aXZlOkJvb2xlYW4ocyksYWN0aXZlSW5kZXg6dH0pKX0pKX07ZXhwb3J0cy5Eb3RzTmF2aWdhdGlvbj1Eb3RzTmF2aWdhdGlvbjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX19pbXBvcnREZWZhdWx0PWZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX0scmVhY3RfMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5QbGF5UGF1c2VCdXR0b249dm9pZCAwLF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpKSx0eXBlc18xPXJlcXVpcmUoXCIuLi90eXBlc1wiKSx1dGlsc18xPXJlcXVpcmUoXCIuLi91dGlsc1wiKSxQbGF5UGF1c2VCdXR0b249ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pc1BsYXlpbmcsYT1lLm9uQ2xpY2ssZT1lLnJlbmRlclBsYXlQYXVzZUJ1dHRvbjtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP3JlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuUExBWV9CVE4sb25DbGljazphfSxlKHtpc1BsYXlpbmc6dH0pKTooZT10P3R5cGVzXzEuTW9kaWZpZXJzLlBBVVNFOlwiXCIsdD0oMCx1dGlsc18xLmNvbmNhdENsYXNzbmFtZXMpKHR5cGVzXzEuQ2xhc3NuYW1lcy5QTEFZX0JUTl9JVEVNLGUpLHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuUExBWV9CVE59LHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuUExBWV9CVE5fV1JBUFBFUn0scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7b25DbGljazphLGNsYXNzTmFtZTp0fSkpKSl9O2V4cG9ydHMuUGxheVBhdXNlQnV0dG9uPVBsYXlQYXVzZUJ1dHRvbjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX19pbXBvcnREZWZhdWx0PWZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX0scmVhY3RfMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5QcmV2TmV4dEJ1dHRvbj12b2lkIDAsX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSkpLHR5cGVzXzE9cmVxdWlyZShcIi4uL3R5cGVzXCIpLHV0aWxzXzE9cmVxdWlyZShcIi4uL3V0aWxzXCIpLFByZXZOZXh0QnV0dG9uPWZ1bmN0aW9uKGUpe3ZhciB0LHM9ZS5uYW1lLGE9ZS5pc0Rpc2FibGVkLHI9ZS5vbkNsaWNrLG49ZS5yZW5kZXJQcmV2QnV0dG9uLGU9ZS5yZW5kZXJOZXh0QnV0dG9uO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4/cmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fUFJFVixvbkNsaWNrOnJ9LG4oe2lzRGlzYWJsZWQ6YX0pKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP3JlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX05FWFQsb25DbGljazpyfSxlKHtpc0Rpc2FibGVkOmF9KSk6KGU9KG49XCJwcmV2XCI9PT1zKT9cIjxcIjpcIj5cIixzPW4/dHlwZXNfMS5DbGFzc25hbWVzLkJVVFRPTl9QUkVWOnR5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fTkVYVCx0PW4/dHlwZXNfMS5DbGFzc25hbWVzLkJVVFRPTl9QUkVWX1dSQVBQRVI6dHlwZXNfMS5DbGFzc25hbWVzLkJVVFRPTl9ORVhUX1dSQVBQRVIsbj1uP3R5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fUFJFVl9JVEVNOnR5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fTkVYVF9JVEVNLGE9YT90eXBlc18xLk1vZGlmaWVycy5JTkFDVElWRTpcIlwiLG49KDAsdXRpbHNfMS5jb25jYXRDbGFzc25hbWVzKShuLGEpLHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpzfSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dH0scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIse2NsYXNzTmFtZTpuLG9uQ2xpY2s6ZnVuY3Rpb24oZSl7cmV0dXJuIHIoZSl9fSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIix7XCJkYXRhLWFyZWFcIjplfSkpKSkpfTtleHBvcnRzLlByZXZOZXh0QnV0dG9uPVByZXZOZXh0QnV0dG9uOyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuUHJldk5leHRCdXR0b249ZXhwb3J0cy5QbGF5UGF1c2VCdXR0b249ZXhwb3J0cy5Eb3RzTmF2aWdhdGlvbj1leHBvcnRzLlN0YWdlSXRlbT1leHBvcnRzLlNsaWRlSW5mbz12b2lkIDA7dmFyIFNsaWRlSW5mb18xPXJlcXVpcmUoXCIuL1NsaWRlSW5mb1wiKSxTdGFnZUl0ZW1fMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJTbGlkZUluZm9cIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gU2xpZGVJbmZvXzEuU2xpZGVJbmZvfX0pLHJlcXVpcmUoXCIuL1N0YWdlSXRlbVwiKSksRG90c05hdmlnYXRpb25fMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJTdGFnZUl0ZW1cIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gU3RhZ2VJdGVtXzEuU3RhZ2VJdGVtfX0pLHJlcXVpcmUoXCIuL0RvdHNOYXZpZ2F0aW9uXCIpKSxQbGF5UGF1c2VCdXR0b25fMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJEb3RzTmF2aWdhdGlvblwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBEb3RzTmF2aWdhdGlvbl8xLkRvdHNOYXZpZ2F0aW9ufX0pLHJlcXVpcmUoXCIuL1BsYXlQYXVzZUJ1dHRvblwiKSksUHJldk5leHRCdXR0b25fMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJQbGF5UGF1c2VCdXR0b25cIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gUGxheVBhdXNlQnV0dG9uXzEuUGxheVBhdXNlQnV0dG9ufX0pLHJlcXVpcmUoXCIuL1ByZXZOZXh0QnV0dG9uXCIpKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIlByZXZOZXh0QnV0dG9uXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFByZXZOZXh0QnV0dG9uXzEuUHJldk5leHRCdXR0b259fSk7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9fZXh0ZW5kcz1mdW5jdGlvbigpe3ZhciBuPWZ1bmN0aW9uKHQsZSl7cmV0dXJuKG49T2JqZWN0LnNldFByb3RvdHlwZU9mfHwoe19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5P2Z1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX06ZnVuY3Rpb24odCxlKXtmb3IodmFyIGkgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxpKSYmKHRbaV09ZVtpXSl9KSkodCxlKX07cmV0dXJuIGZ1bmN0aW9uKHQsZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmbnVsbCE9PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKGUpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gaSgpe3RoaXMuY29uc3RydWN0b3I9dH1uKHQsZSksdC5wcm90b3R5cGU9bnVsbD09PWU/T2JqZWN0LmNyZWF0ZShlKTooaS5wcm90b3R5cGU9ZS5wcm90b3R5cGUsbmV3IGkpfX0oKSxfX2Fzc2lnbj1mdW5jdGlvbigpe3JldHVybihfX2Fzc2lnbj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIGUsaT0xLG49YXJndW1lbnRzLmxlbmd0aDtpPG47aSsrKWZvcih2YXIgbyBpbiBlPWFyZ3VtZW50c1tpXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxvKSYmKHRbb109ZVtvXSk7cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LF9fY3JlYXRlQmluZGluZz1PYmplY3QuY3JlYXRlP2Z1bmN0aW9uKHQsZSxpLG4pe3ZvaWQgMD09PW4mJihuPWkpO3ZhciBvPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSxpKTtvJiYoXCJnZXRcImluIG8/ZS5fX2VzTW9kdWxlOiFvLndyaXRhYmxlJiYhby5jb25maWd1cmFibGUpfHwobz17ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZVtpXX19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLG8pfTpmdW5jdGlvbih0LGUsaSxuKXt0W249dm9pZCAwPT09bj9pOm5dPWVbaV19LF9fc2V0TW9kdWxlRGVmYXVsdD1PYmplY3QuY3JlYXRlP2Z1bmN0aW9uKHQsZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pfTpmdW5jdGlvbih0LGUpe3QuZGVmYXVsdD1lfSxfX2ltcG9ydFN0YXI9ZnVuY3Rpb24odCl7aWYodCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciBlPXt9O2lmKG51bGwhPXQpZm9yKHZhciBpIGluIHQpXCJkZWZhdWx0XCIhPT1pJiZPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxpKSYmX19jcmVhdGVCaW5kaW5nKGUsdCxpKTtyZXR1cm4gX19zZXRNb2R1bGVEZWZhdWx0KGUsdCksZX0sX19leHBvcnRTdGFyPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBpIGluIHQpXCJkZWZhdWx0XCI9PT1pfHxPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxpKXx8X19jcmVhdGVCaW5kaW5nKGUsdCxpKX0sX19hd2FpdGVyPWZ1bmN0aW9uKHQsYSxyLGwpe3JldHVybiBuZXcocj1yfHxQcm9taXNlKShmdW5jdGlvbihpLGUpe2Z1bmN0aW9uIG4odCl7dHJ5e3MobC5uZXh0KHQpKX1jYXRjaCh0KXtlKHQpfX1mdW5jdGlvbiBvKHQpe3RyeXtzKGwudGhyb3codCkpfWNhdGNoKHQpe2UodCl9fWZ1bmN0aW9uIHModCl7dmFyIGU7dC5kb25lP2kodC52YWx1ZSk6KChlPXQudmFsdWUpaW5zdGFuY2VvZiByP2U6bmV3IHIoZnVuY3Rpb24odCl7dChlKX0pKS50aGVuKG4sbyl9cygobD1sLmFwcGx5KHQsYXx8W10pKS5uZXh0KCkpfSl9LF9fZ2VuZXJhdG9yPWZ1bmN0aW9uKG4sbyl7dmFyIHMsYSxyLGw9e2xhYmVsOjAsc2VudDpmdW5jdGlvbigpe2lmKDEmclswXSl0aHJvdyByWzFdO3JldHVybiByWzFdfSx0cnlzOltdLG9wczpbXX0sdD17bmV4dDplKDApLHRocm93OmUoMSkscmV0dXJuOmUoMil9O3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKHRbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSksdDtmdW5jdGlvbiBlKGkpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT1baSx0XTtpZihzKXRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO2Zvcig7bDspdHJ5e2lmKHM9MSxhJiYocj0yJmVbMF0/YS5yZXR1cm46ZVswXT9hLnRocm93fHwoKHI9YS5yZXR1cm4pJiZyLmNhbGwoYSksMCk6YS5uZXh0KSYmIShyPXIuY2FsbChhLGVbMV0pKS5kb25lKXJldHVybiByO3N3aXRjaChhPTAsKGU9cj9bMiZlWzBdLHIudmFsdWVdOmUpWzBdKXtjYXNlIDA6Y2FzZSAxOnI9ZTticmVhaztjYXNlIDQ6cmV0dXJuIGwubGFiZWwrKyx7dmFsdWU6ZVsxXSxkb25lOiExfTtjYXNlIDU6bC5sYWJlbCsrLGE9ZVsxXSxlPVswXTtjb250aW51ZTtjYXNlIDc6ZT1sLm9wcy5wb3AoKSxsLnRyeXMucG9wKCk7Y29udGludWU7ZGVmYXVsdDppZighKHI9MDwocj1sLnRyeXMpLmxlbmd0aCYmcltyLmxlbmd0aC0xXSkmJig2PT09ZVswXXx8Mj09PWVbMF0pKXtsPTA7Y29udGludWV9aWYoMz09PWVbMF0mJighcnx8ZVsxXT5yWzBdJiZlWzFdPHJbM10pKWwubGFiZWw9ZVsxXTtlbHNlIGlmKDY9PT1lWzBdJiZsLmxhYmVsPHJbMV0pbC5sYWJlbD1yWzFdLHI9ZTtlbHNle2lmKCEociYmbC5sYWJlbDxyWzJdKSl7clsyXSYmbC5vcHMucG9wKCksbC50cnlzLnBvcCgpO2NvbnRpbnVlfWwubGFiZWw9clsyXSxsLm9wcy5wdXNoKGUpfX1lPW8uY2FsbChuLGwpfWNhdGNoKHQpe2U9WzYsdF0sYT0wfWZpbmFsbHl7cz1yPTB9aWYoNSZlWzBdKXRocm93IGVbMV07cmV0dXJue3ZhbHVlOmVbMF0/ZVsxXTp2b2lkIDAsZG9uZTohMH19fX0sX19pbXBvcnREZWZhdWx0PWZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX0scmVhY3RfMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSkpLHZhbmlsbGFfc3dpcGVfMT1fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZhbmlsbGEtc3dpcGVcIikpLGRlZmF1bHRQcm9wc18xPXJlcXVpcmUoXCIuL2RlZmF1bHRQcm9wc1wiKSxWaWV3cz1fX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdmlld3NcIikpLFV0aWxzPV9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi91dGlsc1wiKSksdHlwZXNfMT1yZXF1aXJlKFwiLi90eXBlc1wiKSxBbGljZUNhcm91c2VsPShfX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdHlwZXNcIiksZXhwb3J0cyksZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCh0KXt2YXIgcz1lLmNhbGwodGhpcyx0KXx8dGhpcztyZXR1cm4gcy5zd2lwZUxpc3RlbmVyPW51bGwscy5faGFuZGxlS2V5Ym9hcmRFdmVudHM9ZnVuY3Rpb24odCl7c3dpdGNoKHQuY29kZSl7Y2FzZVwiU3BhY2VcIjpyZXR1cm4gcy5wcm9wcy5hdXRvUGxheSYmcy5faGFuZGxlUGxheVBhdXNlVG9nZ2xlKCk7Y2FzZVwiQXJyb3dMZWZ0XCI6cmV0dXJuIHMuc2xpZGVQcmV2KHQpO2Nhc2VcIkFycm93UmlnaHRcIjpyZXR1cm4gcy5zbGlkZU5leHQodCl9fSxzLl9oYW5kbGVCZWZvcmVTbGlkZUVuZD1mdW5jdGlvbihvKXtyZXR1cm4gX19hd2FpdGVyKHMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3ZhciBlLGksbjtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybihpPXRoaXMuc3RhdGUsbj1pLmFjdGl2ZUluZGV4LGU9aS5pdGVtc0NvdW50LGk9aS5mYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZyxVdGlscy5zaG91bGRSZWNhbGN1bGF0ZVNsaWRlSW5kZXgobixlKSk/KG49VXRpbHMuZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4KG4sZSksWzQsdGhpcy5faGFuZGxlVXBkYXRlU2xpZGVQb3NpdGlvbihuKV0pOlszLDJdO2Nhc2UgMTpyZXR1cm4gdC5zZW50KCksWzMsNF07Y2FzZSAyOnJldHVybiBpP1s0LHRoaXMuc2V0U3RhdGUoe2ZhZGVvdXRBbmltYXRpb25JbmRleDpudWxsLGZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbjpudWxsLGZhZGVvdXRBbmltYXRpb25Qcm9jZXNzaW5nOiExfSldOlszLDRdO2Nhc2UgMzp0LnNlbnQoKSx0LmxhYmVsPTQ7Y2FzZSA0OnJldHVybiB0aGlzLl9oYW5kbGVTbGlkZUNoYW5nZWQobyksWzJdfX0pfSl9LHMuX2hhbmRsZU1vdXNlRW50ZXI9ZnVuY3Rpb24oKXt2YXIgdD1zLnByb3BzLmF1dG9QbGF5U3RyYXRlZ3k7VXRpbHMuc2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkhvdmVyKHQpJiZzLnN0YXRlLmlzQXV0b1BsYXlpbmcmJihzLmlzSG92ZXJlZD0hMCxzLl9oYW5kbGVQYXVzZSgpKX0scy5faGFuZGxlTW91c2VMZWF2ZT1mdW5jdGlvbigpe3Muc3RhdGUuaXNBdXRvUGxheWluZyYmKHMuaXNIb3ZlcmVkPSExLHMuX2hhbmRsZVBsYXkoKSl9LHMuX2hhbmRsZVBhdXNlPWZ1bmN0aW9uKCl7cy5fY2xlYXJBdXRvUGxheVRpbWVvdXQoKX0scy5faGFuZGxlUGxheVBhdXNlVG9nZ2xlPWZ1bmN0aW9uKCl7cmV0dXJuIF9fYXdhaXRlcihzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPXRoaXMuc3RhdGUuaXNBdXRvUGxheWluZyx0aGlzLmhhc1VzZXJBY3Rpb249ITAsWzQsdGhpcy5zZXRTdGF0ZSh7aXNBdXRvUGxheWluZzohZSxpc0F1dG9QbGF5Q2FuY2VsZWRPbkFjdGlvbjohMH0pXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLGU/dGhpcy5faGFuZGxlUGF1c2UoKTp0aGlzLl9oYW5kbGVQbGF5KCksWzJdfX0pfSl9LHMuX3NldFJvb3RDb21wb25lbnRSZWY9ZnVuY3Rpb24odCl7cmV0dXJuIHMucm9vdEVsZW1lbnQ9dH0scy5fc2V0U3RhZ2VDb21wb25lbnRSZWY9ZnVuY3Rpb24odCl7cmV0dXJuIHMuc3RhZ2VDb21wb25lbnQ9dH0scy5fcmVuZGVyU3RhZ2VJdGVtPWZ1bmN0aW9uKHQsZSl7dmFyIGk9VXRpbHMuZ2V0UmVuZGVyU3RhZ2VJdGVtU3R5bGVzKGUscy5zdGF0ZSksbj1VdGlscy5nZXRSZW5kZXJTdGFnZUl0ZW1DbGFzc2VzKGUscy5zdGF0ZSk7cmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFZpZXdzLlN0YWdlSXRlbSx7c3R5bGVzOmksY2xhc3NOYW1lOm4sa2V5Olwic3RhZ2UtaXRlbS1cIi5jb25jYXQoZSksaXRlbTp0fSl9LHMuX3JlbmRlclNsaWRlSW5mbz1mdW5jdGlvbigpe3ZhciB0PXMucHJvcHMucmVuZGVyU2xpZGVJbmZvLGU9cy5zdGF0ZSxpPWUuYWN0aXZlSW5kZXgsZT1lLml0ZW1zQ291bnQ7cmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFZpZXdzLlNsaWRlSW5mbyx7aXRlbXNDb3VudDplLGFjdGl2ZUluZGV4OmkscmVuZGVyU2xpZGVJbmZvOnR9KX0scy5zdGF0ZT1VdGlscy5jYWxjdWxhdGVJbml0aWFsU3RhdGUodCxudWxsKSxzLmlzSG92ZXJlZD0hMSxzLmlzQW5pbWF0aW9uRGlzYWJsZWQ9ITEscy5pc1RvdWNoTW92ZVByb2Nlc3NTdGFydGVkPSExLHMuY2FuY2VsVG91Y2hBbmltYXRpb25zPSExLHMuaGFzVXNlckFjdGlvbj0hMSxzLnJvb3RFbGVtZW50PW51bGwscy5yb290Q29tcG9uZW50RGltZW5zaW9ucz17fSxzLnN0YWdlQ29tcG9uZW50PW51bGwscy5zdGFydFRvdWNobW92ZVBvc2l0aW9uPXZvaWQgMCxzLnNsaWRlVG89cy5zbGlkZVRvLmJpbmQocykscy5zbGlkZVByZXY9cy5zbGlkZVByZXYuYmluZChzKSxzLnNsaWRlTmV4dD1zLnNsaWRlTmV4dC5iaW5kKHMpLHMuX2hhbmRsZVRvdWNobW92ZT1zLl9oYW5kbGVUb3VjaG1vdmUuYmluZChzKSxzLl9oYW5kbGVUb3VjaGVuZD1zLl9oYW5kbGVUb3VjaGVuZC5iaW5kKHMpLHMuX2hhbmRsZURvdENsaWNrPXMuX2hhbmRsZURvdENsaWNrLmJpbmQocykscy5faGFuZGxlUmVzaXplPXMuX2hhbmRsZVJlc2l6ZS5iaW5kKHMpLHQ9VXRpbHMuZGVib3VuY2Uocy5faGFuZGxlUmVzaXplLDEwMCkscy5faGFuZGxlUmVzaXplRGVib3VuY2VkPXRbMF0scy5fY2FuY2VsUmVzaXplRGVib3VuY2VkPXRbMV0sc31yZXR1cm4gX19leHRlbmRzKHQsZSksdC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3JldHVybiBfX2dlbmVyYXRvcih0aGlzLGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6cmV0dXJuWzQsdGhpcy5fc2V0SW5pdGlhbFN0YXRlKCldO2Nhc2UgMTpyZXR1cm4gdC5zZW50KCksdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKSx0aGlzLl9zZXR1cFN3aXBlSGFuZGxlcnMoKSx0aGlzLnByb3BzLmF1dG9QbGF5JiZ0aGlzLl9oYW5kbGVQbGF5KCksWzJdfX0pfSl9LHQucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMucHJvcHMsbj1pLmFjdGl2ZUluZGV4LG89aS5hbmltYXRpb25EdXJhdGlvbixzPWkuYXV0b1dpZHRoLGE9aS5jaGlsZHJlbixyPWkuaW5maW5pdGUsbD1pLml0ZW1zLHU9aS5wYWRkaW5nTGVmdCxkPWkucGFkZGluZ1JpZ2h0LGM9aS5yZXNwb25zaXZlLGg9aS5zd2lwZUV4dHJhUGFkZGluZyxwPWkubW91c2VUcmFja2luZyxfPWkuc3dpcGVEZWx0YSxtPWkudG91Y2hUcmFja2luZyxpPWkudG91Y2hNb3ZlRGVmYXVsdEV2ZW50czthJiZ0LmNoaWxkcmVuIT09YT8oYT1lLmFjdGl2ZUluZGV4LGU9X19hc3NpZ24oX19hc3NpZ24oe30sdGhpcy5wcm9wcykse2FjdGl2ZUluZGV4OmF9KSx0aGlzLl91cGRhdGVDb21wb25lbnQoZSkpOnQuYXV0b1dpZHRoIT09c3x8dC5pbmZpbml0ZSE9PXJ8fHQuaXRlbXMhPT1sfHx0LnBhZGRpbmdMZWZ0IT09dXx8dC5wYWRkaW5nUmlnaHQhPT1kfHx0LnJlc3BvbnNpdmUhPT1jfHx0LnN3aXBlRXh0cmFQYWRkaW5nIT09aD90aGlzLl91cGRhdGVDb21wb25lbnQoKToodC5hbmltYXRpb25EdXJhdGlvbiE9PW8mJnRoaXMuc2V0U3RhdGUoe2FuaW1hdGlvbkR1cmF0aW9uOm99KSx0LmFjdGl2ZUluZGV4IT09biYmdGhpcy5zbGlkZVRvKG4sdHlwZXNfMS5FdmVudFR5cGUuVVBEQVRFKSksdC5zd2lwZURlbHRhPT09XyYmdC5tb3VzZVRyYWNraW5nPT09cCYmdC50b3VjaFRyYWNraW5nPT09bSYmdC50b3VjaE1vdmVEZWZhdWx0RXZlbnRzPT09aXx8dGhpcy5fdXBkYXRlU3dpcGVQcm9wcygpLHRoaXMucHJvcHMua2V5Ym9hcmROYXZpZ2F0aW9uIT09dC5rZXlib2FyZE5hdmlnYXRpb24mJnRoaXMuX3VwZGF0ZUV2ZW50TGlzdGVuZXJzKCl9LHQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dGhpcy5fY2FuY2VsUmVzaXplRGVib3VuY2VkKCksdGhpcy5fY2FuY2VsVGltZW91dEFuaW1hdGlvbnMoKSx0aGlzLl9yZW1vdmVFdmVudExpc3RlbmVycygpfSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJldmVudE9iamVjdFwiLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnN0YXRlLGU9dC5pdGVtc0luU2xpZGUsdD10LmFjdGl2ZUluZGV4LGk9VXRpbHMuZ2V0U2xpZGVJdGVtSW5mbyh0aGlzLnN0YXRlKSxuPWkuaXNOZXh0U2xpZGVEaXNhYmxlZCxpPWkuaXNQcmV2U2xpZGVEaXNhYmxlZDtyZXR1cm57aXRlbTp0LHNsaWRlOlV0aWxzLmdldEFjdGl2ZVNsaWRlSW5kZXgobix0aGlzLnN0YXRlKSxpdGVtc0luU2xpZGU6ZSxpc05leHRTbGlkZURpc2FibGVkOm4saXNQcmV2U2xpZGVEaXNhYmxlZDppLHR5cGU6dHlwZXNfMS5FdmVudFR5cGUuQUNUSU9OfX0sZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJpc0ZhZGVvdXRBbmltYXRpb25BbGxvd2VkXCIse2dldDpmdW5jdGlvbigpe3ZhciB0PXRoaXMuc3RhdGUuaXRlbXNJblNsaWRlLGU9dGhpcy5wcm9wcyxpPWUuYW5pbWF0aW9uVHlwZSxuPWUucGFkZGluZ0xlZnQsbz1lLnBhZGRpbmdSaWdodCxlPWUuYXV0b1dpZHRoO3JldHVybiAxPT09dCYmaT09PXR5cGVzXzEuQW5pbWF0aW9uVHlwZS5GQURFT1VUJiYhKG58fG98fGUpfSxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcInRvdWNobW92ZVBvc2l0aW9uXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB2b2lkIDAhPT10aGlzLnN0YXJ0VG91Y2htb3ZlUG9zaXRpb24/dGhpcy5zdGFydFRvdWNobW92ZVBvc2l0aW9uOnRoaXMuc3RhdGUudHJhbnNsYXRlM2R9LGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwfSksdC5wcm90b3R5cGUuc2xpZGVUbz1mdW5jdGlvbih0LGUpe3ZhciBpLG4sbzt2b2lkIDA9PT10JiYodD0wKSx0aGlzLl9oYW5kbGVQYXVzZSgpLHRoaXMuaXNGYWRlb3V0QW5pbWF0aW9uQWxsb3dlZD8oaT1VdGlscy5nZXRVcGRhdGVTbGlkZVBvc2l0aW9uSW5kZXgodCx0aGlzLnN0YXRlLml0ZW1zQ291bnQpLG49VXRpbHMuZ2V0RmFkZW91dEFuaW1hdGlvblBvc2l0aW9uKGksdGhpcy5zdGF0ZSksbz1VdGlscy5nZXRGYWRlb3V0QW5pbWF0aW9uSW5kZXgodGhpcy5zdGF0ZSksdGhpcy5faGFuZGxlU2xpZGVUbyh7YWN0aXZlSW5kZXg6aSxmYWRlb3V0QW5pbWF0aW9uSW5kZXg6byxmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb246bixldmVudFR5cGU6ZX0pKTp0aGlzLl9oYW5kbGVTbGlkZVRvKHthY3RpdmVJbmRleDp0LGV2ZW50VHlwZTplfSl9LHQucHJvdG90eXBlLnNsaWRlUHJldj1mdW5jdGlvbih0KXt0aGlzLl9oYW5kbGVQYXVzZSgpLHQmJnQuaXNUcnVzdGVkJiYodGhpcy5oYXNVc2VyQWN0aW9uPSEwKTt2YXIgZSxpLHQ9dGhpcy5zdGF0ZS5hY3RpdmVJbmRleC0xO3RoaXMuaXNGYWRlb3V0QW5pbWF0aW9uQWxsb3dlZD8oZT0tdGhpcy5zdGF0ZS5zdGFnZVdpZHRoLGk9VXRpbHMuZ2V0RmFkZW91dEFuaW1hdGlvbkluZGV4KHRoaXMuc3RhdGUpLHRoaXMuX2hhbmRsZVNsaWRlVG8oe2FjdGl2ZUluZGV4OnQsZmFkZW91dEFuaW1hdGlvbkluZGV4OmksZmFkZW91dEFuaW1hdGlvblBvc2l0aW9uOmV9KSk6dGhpcy5faGFuZGxlU2xpZGVUbyh7YWN0aXZlSW5kZXg6dH0pfSx0LnByb3RvdHlwZS5zbGlkZU5leHQ9ZnVuY3Rpb24odCl7dGhpcy5faGFuZGxlUGF1c2UoKSx0JiZ0LmlzVHJ1c3RlZCYmKHRoaXMuaGFzVXNlckFjdGlvbj0hMCk7dmFyIGUsaSx0PXRoaXMuc3RhdGUuYWN0aXZlSW5kZXgrMTt0aGlzLmlzRmFkZW91dEFuaW1hdGlvbkFsbG93ZWQ/KGU9dGhpcy5zdGF0ZS5zdGFnZVdpZHRoLGk9VXRpbHMuZ2V0RmFkZW91dEFuaW1hdGlvbkluZGV4KHRoaXMuc3RhdGUpLHRoaXMuX2hhbmRsZVNsaWRlVG8oe2FjdGl2ZUluZGV4OnQsZmFkZW91dEFuaW1hdGlvbkluZGV4OmksZmFkZW91dEFuaW1hdGlvblBvc2l0aW9uOmV9KSk6dGhpcy5faGFuZGxlU2xpZGVUbyh7YWN0aXZlSW5kZXg6dH0pfSx0LnByb3RvdHlwZS5fYWRkRXZlbnRMaXN0ZW5lcnM9ZnVuY3Rpb24oKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMuX2hhbmRsZVJlc2l6ZURlYm91bmNlZCksdGhpcy5wcm9wcy5rZXlib2FyZE5hdmlnYXRpb24mJndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIix0aGlzLl9oYW5kbGVLZXlib2FyZEV2ZW50cyl9LHQucHJvdG90eXBlLl9yZW1vdmVFdmVudExpc3RlbmVycz1mdW5jdGlvbigpe3RoaXMuc3dpcGVMaXN0ZW5lciYmdGhpcy5zd2lwZUxpc3RlbmVyLmRlc3Ryb3koKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMuX2hhbmRsZVJlc2l6ZURlYm91bmNlZCksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHRoaXMuX2hhbmRsZUtleWJvYXJkRXZlbnRzKX0sdC5wcm90b3R5cGUuX3VwZGF0ZUV2ZW50TGlzdGVuZXJzPWZ1bmN0aW9uKCl7dGhpcy5wcm9wcy5rZXlib2FyZE5hdmlnYXRpb24/d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHRoaXMuX2hhbmRsZUtleWJvYXJkRXZlbnRzKTp3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsdGhpcy5faGFuZGxlS2V5Ym9hcmRFdmVudHMpfSx0LnByb3RvdHlwZS5faGFuZGxlUmVzaXplPWZ1bmN0aW9uKG8pe3JldHVybiBfX2F3YWl0ZXIodGhpcyx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7dmFyIGUsaSxuO3JldHVybiBfX2dlbmVyYXRvcih0aGlzLGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6cmV0dXJuKGk9dGhpcy5wcm9wcy5vblJlc2l6ZUV2ZW50LG49VXRpbHMuZ2V0RWxlbWVudERpbWVuc2lvbnModGhpcy5yb290RWxlbWVudCksKGl8fFV0aWxzLnNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50KShvLHRoaXMucm9vdENvbXBvbmVudERpbWVuc2lvbnMsbikpPyh0aGlzLl9jYW5jZWxUaW1lb3V0QW5pbWF0aW9ucygpLHRoaXMucm9vdENvbXBvbmVudERpbWVuc2lvbnM9bixpPXRoaXMuc3RhdGUsbj1pLml0ZW1zQ291bnQsZT1pLmlzQXV0b1BsYXlpbmcsaT1VdGlscy5nZXRVcGRhdGVTbGlkZVBvc2l0aW9uSW5kZXgodGhpcy5zdGF0ZS5hY3RpdmVJbmRleCxuKSxuPVV0aWxzLmNhbGN1bGF0ZUluaXRpYWxTdGF0ZShfX2Fzc2lnbihfX2Fzc2lnbih7fSx0aGlzLnByb3BzKSx7YWN0aXZlSW5kZXg6aX0pLHRoaXMuc3RhZ2VDb21wb25lbnQpLGk9VXRpbHMuZ2V0VHJhbnNsYXRlM2RQcm9wZXJ0eShuLmFjdGl2ZUluZGV4LG4pLG49X19hc3NpZ24oX19hc3NpZ24oe30sbikse3RyYW5zbGF0ZTNkOmksaXNBdXRvUGxheWluZzplfSksVXRpbHMuYW5pbWF0ZSh0aGlzLnN0YWdlQ29tcG9uZW50LHtwb3NpdGlvbjotaX0pLFs0LHRoaXMuc2V0U3RhdGUobildKTpbMywyXTtjYXNlIDE6dC5zZW50KCksdGhpcy5faGFuZGxlUmVzaXplZCgpLHRoaXMuaXNBbmltYXRpb25EaXNhYmxlZD0hMSxlJiZ0aGlzLl9oYW5kbGVQbGF5KCksdC5sYWJlbD0yO2Nhc2UgMjpyZXR1cm5bMl19fSl9KX0sdC5wcm90b3R5cGUuX2hhbmRsZVRvdWNobW92ZT1mdW5jdGlvbih0LGUpe3ZhciBpPWUuYWJzWSxuPWUuYWJzWCxvPWUuZGVsdGFYLGU9dGhpcy5wcm9wcy5zd2lwZURlbHRhLHM9dGhpcy5zdGF0ZSxhPXMuc3dpcGVTaGlmdFZhbHVlLHI9cy5zd2lwZUxpbWl0TWluLGw9cy5zd2lwZUxpbWl0TWF4LHU9cy5pbmZpbml0ZSxzPXMuZmFkZW91dEFuaW1hdGlvblByb2Nlc3Npbmc7aWYodGhpcy5oYXNVc2VyQWN0aW9uPSEwLCEoc3x8IXRoaXMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZCYmVXRpbHMuaXNWZXJ0aWNhbFRvdWNobW92ZURldGVjdGVkKG4saSxlKSkpe3RoaXMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZHx8KHRoaXMuX2NhbmNlbFRpbWVvdXRBbmltYXRpb25zKCksdGhpcy5fc2V0VG91Y2htb3ZlUG9zaXRpb24oKSx0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWQ9ITAsdGhpcy5pc1RvdWNoTW92ZVByb2Nlc3NTdGFydGVkPSEwLHRoaXMuX2hhbmRsZVNsaWRlQ2hhbmdlKCkpO3ZhciBkPVV0aWxzLmdldFRvdWNobW92ZVRyYW5zbGF0ZVBvc2l0aW9uKG8sdGhpcy50b3VjaG1vdmVQb3NpdGlvbik7aWYoITE9PT11KXJldHVybiByPGR8fGQ8LWw/dm9pZCAwOnZvaWQgVXRpbHMuYW5pbWF0ZSh0aGlzLnN0YWdlQ29tcG9uZW50LHtwb3NpdGlvbjpkfSk7aWYoVXRpbHMuc2hvdWxkUmVjYWxjdWxhdGVTd2lwZVBvc2l0aW9uKGQscixsKSl0cnl7IWZ1bmN0aW9uIHQoKXtVdGlscy5nZXRJc0xlZnREaXJlY3Rpb24obyk/ZCs9YTpkKz0tYTtVdGlscy5zaG91bGRSZWNhbGN1bGF0ZVN3aXBlUG9zaXRpb24oZCxyLGwpJiZ0KCl9KCl9Y2F0Y2godCl7VXRpbHMuZGVidWcodCl9VXRpbHMuYW5pbWF0ZSh0aGlzLnN0YWdlQ29tcG9uZW50LHtwb3NpdGlvbjpkfSl9fSx0LnByb3RvdHlwZS5faGFuZGxlVG91Y2hlbmQ9ZnVuY3Rpb24odCxlKXt2YXIgaSxuLG8sZT1lLmRlbHRhWDt0aGlzLl9jbGVhclRvdWNobW92ZVBvc2l0aW9uKCksdGhpcy5pc1RvdWNoTW92ZVByb2Nlc3NTdGFydGVkJiYodGhpcy5pc1RvdWNoTW92ZVByb2Nlc3NTdGFydGVkPSExLGk9dGhpcy5zdGF0ZS5hbmltYXRpb25EdXJhdGlvbixuPXRoaXMucHJvcHMuYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb24sbz1VdGlscy5nZXRUcmFuc2xhdGVYUHJvcGVydHkodGhpcy5zdGFnZUNvbXBvbmVudCksZT1VdGlscy5nZXRTd2lwZVRvdWNoZW5kUG9zaXRpb24odGhpcy5zdGF0ZSxlLG8pLFV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246ZSxhbmltYXRpb25EdXJhdGlvbjppLGFuaW1hdGlvbkVhc2luZ0Z1bmN0aW9uOm59KSx0aGlzLl9oYW5kbGVCZWZvcmVUb3VjaEVuZChlKSl9LHQucHJvdG90eXBlLl9oYW5kbGVCZWZvcmVUb3VjaEVuZD1mdW5jdGlvbihzKXt2YXIgdD10aGlzLGU9dGhpcy5zdGF0ZS5hbmltYXRpb25EdXJhdGlvbjt0aGlzLnRvdWNoRW5kVGltZW91dElkPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIF9fYXdhaXRlcih0LHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZSxpLG4sbz10aGlzO3JldHVybiBfX2dlbmVyYXRvcih0aGlzLGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6cmV0dXJuIGU9VXRpbHMuZ2V0U3dpcGVUb3VjaGVuZEluZGV4KHMsdGhpcy5zdGF0ZSksaT1VdGlscy5nZXRUcmFuc2xhdGUzZFByb3BlcnR5KGUsdGhpcy5zdGF0ZSksVXRpbHMuYW5pbWF0ZSh0aGlzLnN0YWdlQ29tcG9uZW50LHtwb3NpdGlvbjotaX0pLG49VXRpbHMuZ2V0VHJhbnNpdGlvblByb3BlcnR5KCksWzQsdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSW5kZXg6ZSx0cmFuc2xhdGUzZDppLHRyYW5zaXRpb246bn0pXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3JldHVybiBvLl9oYW5kbGVTbGlkZUNoYW5nZWQoKX0pLFsyXX19KX0pfSxlKX0sdC5wcm90b3R5cGUuX2hhbmRsZVNsaWRlVG89ZnVuY3Rpb24odCl7dmFyIGU9dC5hY3RpdmVJbmRleCxhPXZvaWQgMD09PWU/MDplLGU9dC5mYWRlb3V0QW5pbWF0aW9uSW5kZXgscj12b2lkIDA9PT1lP251bGw6ZSxlPXQuZmFkZW91dEFuaW1hdGlvblBvc2l0aW9uLGw9dm9pZCAwPT09ZT9udWxsOmUsdT10LmV2ZW50VHlwZTtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3ZhciBlLGksbixvLHM9dGhpcztyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybihpPXRoaXMucHJvcHMsbj1pLmluZmluaXRlLGk9aS5hbmltYXRpb25FYXNpbmdGdW5jdGlvbixlPXRoaXMuc3RhdGUsbz1lLml0ZW1zQ291bnQsZT1lLmFuaW1hdGlvbkR1cmF0aW9uLHRoaXMuaXNBbmltYXRpb25EaXNhYmxlZHx8dGhpcy5zdGF0ZS5hY3RpdmVJbmRleD09PWF8fCFuJiZVdGlscy5zaG91bGRDYW5jZWxTbGlkZUFuaW1hdGlvbihhLG8pKT9bMl06KHRoaXMuaXNBbmltYXRpb25EaXNhYmxlZD0hMCx0aGlzLl9jYW5jZWxUaW1lb3V0QW5pbWF0aW9ucygpLHRoaXMuX2hhbmRsZVNsaWRlQ2hhbmdlKHUpLG49ITEsbz1VdGlscy5nZXRUcmFuc2xhdGUzZFByb3BlcnR5KGEsdGhpcy5zdGF0ZSksaT1udWxsIT09ciYmbnVsbCE9PWw/KG49ITAsVXRpbHMuZ2V0VHJhbnNpdGlvblByb3BlcnR5KCkpOlV0aWxzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eSh7YW5pbWF0aW9uRHVyYXRpb246ZSxhbmltYXRpb25FYXNpbmdGdW5jdGlvbjppfSksWzQsdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSW5kZXg6YSx0cmFuc2l0aW9uOmksdHJhbnNsYXRlM2Q6byxhbmltYXRpb25EdXJhdGlvbjplLGZhZGVvdXRBbmltYXRpb25JbmRleDpyLGZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbjpsLGZhZGVvdXRBbmltYXRpb25Qcm9jZXNzaW5nOm59KV0pO2Nhc2UgMTpyZXR1cm4gdC5zZW50KCksdGhpcy5zbGlkZUVuZFRpbWVvdXRJZD13aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiBzLl9oYW5kbGVCZWZvcmVTbGlkZUVuZCh1KX0sZSksWzJdfX0pfSl9LHQucHJvdG90eXBlLl9oYW5kbGVVcGRhdGVTbGlkZVBvc2l0aW9uPWZ1bmN0aW9uKG8pe3JldHVybiBfX2F3YWl0ZXIodGhpcyx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7dmFyIGUsaSxuO3JldHVybiBfX2dlbmVyYXRvcih0aGlzLGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6cmV0dXJuIGU9dGhpcy5zdGF0ZS5hbmltYXRpb25EdXJhdGlvbixpPVV0aWxzLmdldFRyYW5zbGF0ZTNkUHJvcGVydHkobyx0aGlzLnN0YXRlKSxuPVV0aWxzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eSh7YW5pbWF0aW9uRHVyYXRpb246MH0pLFs0LHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUluZGV4Om8sdHJhbnNsYXRlM2Q6aSx0cmFuc2l0aW9uOm4sYW5pbWF0aW9uRHVyYXRpb246ZSxmYWRlb3V0QW5pbWF0aW9uSW5kZXg6bnVsbCxmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb246bnVsbCxmYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZzohMX0pXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLFsyXX19KX0pfSx0LnByb3RvdHlwZS5faGFuZGxlUmVzaXplZD1mdW5jdGlvbigpe3RoaXMucHJvcHMub25SZXNpemVkJiZ0aGlzLnByb3BzLm9uUmVzaXplZChfX2Fzc2lnbihfX2Fzc2lnbih7fSx0aGlzLmV2ZW50T2JqZWN0KSx7dHlwZTp0eXBlc18xLkV2ZW50VHlwZS5SRVNJWkV9KSl9LHQucHJvdG90eXBlLl9oYW5kbGVTbGlkZUNoYW5nZT1mdW5jdGlvbih0KXt0aGlzLnByb3BzLm9uU2xpZGVDaGFuZ2UmJih0PXQ/X19hc3NpZ24oX19hc3NpZ24oe30sdGhpcy5ldmVudE9iamVjdCkse3R5cGU6dH0pOnRoaXMuZXZlbnRPYmplY3QsdGhpcy5wcm9wcy5vblNsaWRlQ2hhbmdlKHQpKX0sdC5wcm90b3R5cGUuX2hhbmRsZVNsaWRlQ2hhbmdlZD1mdW5jdGlvbihzKXtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3ZhciBlLGksbixvO3JldHVybiBfX2dlbmVyYXRvcih0aGlzLGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6cmV0dXJuKGk9dGhpcy5zdGF0ZSxlPWkuaXNBdXRvUGxheWluZyxpPWkuaXNBdXRvUGxheUNhbmNlbGVkT25BY3Rpb24sbj10aGlzLnByb3BzLG89bi5hdXRvUGxheVN0cmF0ZWd5LG49bi5vblNsaWRlQ2hhbmdlZCxVdGlscy5zaG91bGRDYW5jZWxBdXRvUGxheU9uQWN0aW9uKG8pJiZ0aGlzLmhhc1VzZXJBY3Rpb24mJiFpKT9bNCx0aGlzLnNldFN0YXRlKHtpc0F1dG9QbGF5Q2FuY2VsZWRPbkFjdGlvbjohMCxpc0F1dG9QbGF5aW5nOiExfSldOlszLDJdO2Nhc2UgMTpyZXR1cm4gdC5zZW50KCksWzMsM107Y2FzZSAyOmUmJnRoaXMuX2hhbmRsZVBsYXkoKSx0LmxhYmVsPTM7Y2FzZSAzOnJldHVybiB0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWQ9ITEsbiYmKG89cz9fX2Fzc2lnbihfX2Fzc2lnbih7fSx0aGlzLmV2ZW50T2JqZWN0KSx7dHlwZTpzfSk6dGhpcy5ldmVudE9iamVjdCxuKG8pKSxbMl19fSl9KX0sdC5wcm90b3R5cGUuX2hhbmRsZURvdENsaWNrPWZ1bmN0aW9uKHQpe3RoaXMuaGFzVXNlckFjdGlvbj0hMCx0aGlzLnNsaWRlVG8odCl9LHQucHJvdG90eXBlLl9oYW5kbGVQbGF5PWZ1bmN0aW9uKCl7dGhpcy5fc2V0QXV0b1BsYXlJbnRlcnZhbCgpfSx0LnByb3RvdHlwZS5fY2FuY2VsVGltZW91dEFuaW1hdGlvbnM9ZnVuY3Rpb24oKXt0aGlzLl9jbGVhckF1dG9QbGF5VGltZW91dCgpLHRoaXMuX2NsZWFyU2xpZGVFbmRUaW1lb3V0KCksdGhpcy5jbGVhclRvdWNoZW5kVGltZW91dCgpfSx0LnByb3RvdHlwZS5fY2xlYXJBdXRvUGxheVRpbWVvdXQ9ZnVuY3Rpb24oKXt3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuYXV0b1BsYXlUaW1lb3V0SWQpLHRoaXMuYXV0b1BsYXlUaW1lb3V0SWQ9dm9pZCAwfSx0LnByb3RvdHlwZS5fY2xlYXJTbGlkZUVuZFRpbWVvdXQ9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodGhpcy5zbGlkZUVuZFRpbWVvdXRJZCksdGhpcy5zbGlkZUVuZFRpbWVvdXRJZD12b2lkIDB9LHQucHJvdG90eXBlLmNsZWFyVG91Y2hlbmRUaW1lb3V0PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMudG91Y2hFbmRUaW1lb3V0SWQpLHRoaXMudG91Y2hFbmRUaW1lb3V0SWQ9dm9pZCAwfSx0LnByb3RvdHlwZS5fY2xlYXJUb3VjaG1vdmVQb3NpdGlvbj1mdW5jdGlvbigpe3RoaXMuc3RhcnRUb3VjaG1vdmVQb3NpdGlvbj12b2lkIDB9LHQucHJvdG90eXBlLl9zZXRUb3VjaG1vdmVQb3NpdGlvbj1mdW5jdGlvbigpe3ZhciB0PVV0aWxzLmdldFRyYW5zbGF0ZVhQcm9wZXJ0eSh0aGlzLnN0YWdlQ29tcG9uZW50KTt0aGlzLnN0YXJ0VG91Y2htb3ZlUG9zaXRpb249LXR9LHQucHJvdG90eXBlLl9zZXRJbml0aWFsU3RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3ZhciBlO3JldHVybiBfX2dlbmVyYXRvcih0aGlzLGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6cmV0dXJuIGU9VXRpbHMuY2FsY3VsYXRlSW5pdGlhbFN0YXRlKHRoaXMucHJvcHMsdGhpcy5zdGFnZUNvbXBvbmVudCksdGhpcy5yb290Q29tcG9uZW50RGltZW5zaW9ucz1VdGlscy5nZXRFbGVtZW50RGltZW5zaW9ucyh0aGlzLnJvb3RFbGVtZW50KSxbNCx0aGlzLnNldFN0YXRlKGUpXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLHRoaXMucHJvcHMub25Jbml0aWFsaXplZCYmdGhpcy5wcm9wcy5vbkluaXRpYWxpemVkKF9fYXNzaWduKF9fYXNzaWduKHt9LHRoaXMuZXZlbnRPYmplY3QpLHt0eXBlOnR5cGVzXzEuRXZlbnRUeXBlLklOSVR9KSksWzJdfX0pfSl9LHQucHJvdG90eXBlLl9zZXRBdXRvUGxheUludGVydmFsPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXRoaXMucHJvcHMsaT1lLmF1dG9QbGF5RGlyZWN0aW9uLGU9ZS5hdXRvUGxheUludGVydmFsO3RoaXMuYXV0b1BsYXlUaW1lb3V0SWQ9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0LmlzSG92ZXJlZHx8KGk9PT10eXBlc18xLkF1dG9wbGF5RGlyZWN0aW9uLlJUTD90LnNsaWRlUHJldigpOnQuc2xpZGVOZXh0KCkpfSxlKX0sdC5wcm90b3R5cGUuX3NldHVwU3dpcGVIYW5kbGVycz1mdW5jdGlvbigpe3RoaXMuc3dpcGVMaXN0ZW5lcj1uZXcgdmFuaWxsYV9zd2lwZV8xLmRlZmF1bHQoe2VsZW1lbnQ6dGhpcy5yb290RWxlbWVudCxkZWx0YTp0aGlzLnByb3BzLnN3aXBlRGVsdGEsb25Td2lwaW5nOnRoaXMuX2hhbmRsZVRvdWNobW92ZSxvblN3aXBlZDp0aGlzLl9oYW5kbGVUb3VjaGVuZCxyb3RhdGlvbkFuZ2xlOjUsbW91c2VUcmFja2luZ0VuYWJsZWQ6dGhpcy5wcm9wcy5tb3VzZVRyYWNraW5nLHRvdWNoVHJhY2tpbmdFbmFibGVkOnRoaXMucHJvcHMudG91Y2hUcmFja2luZyxwcmV2ZW50RGVmYXVsdFRvdWNobW92ZUV2ZW50OiF0aGlzLnByb3BzLnRvdWNoTW92ZURlZmF1bHRFdmVudHMscHJldmVudFRyYWNraW5nT25Nb3VzZWxlYXZlOiEwfSksdGhpcy5zd2lwZUxpc3RlbmVyLmluaXQoKX0sdC5wcm90b3R5cGUuX3VwZGF0ZUNvbXBvbmVudD1mdW5jdGlvbih0KXt2YXIgZT10aGlzO3ZvaWQgMD09PXQmJih0PXRoaXMucHJvcHMpLHRoaXMuX2NhbmNlbFRpbWVvdXRBbmltYXRpb25zKCksdGhpcy5pc0FuaW1hdGlvbkRpc2FibGVkPSExLHRoaXMuc3RhdGUuaXNBdXRvUGxheWluZyYmdGhpcy5faGFuZGxlUGxheSgpLHRoaXMuc2V0U3RhdGUoe2Nsb25lczpVdGlscy5jcmVhdGVDbG9uZXModCl9KSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtlLnNldFN0YXRlKFV0aWxzLmNhbGN1bGF0ZUluaXRpYWxTdGF0ZSh0LGUuc3RhZ2VDb21wb25lbnQpKX0pfSx0LnByb3RvdHlwZS5fdXBkYXRlU3dpcGVQcm9wcz1mdW5jdGlvbigpe3RoaXMuc3dpcGVMaXN0ZW5lciYmdGhpcy5zd2lwZUxpc3RlbmVyLnVwZGF0ZSh7ZGVsdGE6dGhpcy5wcm9wcy5zd2lwZURlbHRhLG1vdXNlVHJhY2tpbmdFbmFibGVkOnRoaXMucHJvcHMubW91c2VUcmFja2luZyx0b3VjaFRyYWNraW5nRW5hYmxlZDp0aGlzLnByb3BzLnRvdWNoVHJhY2tpbmcscHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudDohdGhpcy5wcm9wcy50b3VjaE1vdmVEZWZhdWx0RXZlbnRzfSl9LHQucHJvdG90eXBlLl9yZW5kZXJEb3RzTmF2aWdhdGlvbj1mdW5jdGlvbigpe3ZhciB0PXRoaXMucHJvcHMsZT10LnJlbmRlckRvdHNJdGVtLHQ9dC5jb250cm9sc1N0cmF0ZWd5O3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5Eb3RzTmF2aWdhdGlvbix7c3RhdGU6dGhpcy5zdGF0ZSxvbkNsaWNrOnRoaXMuX2hhbmRsZURvdENsaWNrLHJlbmRlckRvdHNJdGVtOmUsY29udHJvbHNTdHJhdGVneTp0fSl9LHQucHJvdG90eXBlLl9yZW5kZXJQcmV2QnV0dG9uPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5wcm9wcy5yZW5kZXJQcmV2QnV0dG9uLGU9VXRpbHMuZ2V0U2xpZGVJdGVtSW5mbyh0aGlzLnN0YXRlKS5pc1ByZXZTbGlkZURpc2FibGVkO3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5QcmV2TmV4dEJ1dHRvbix7bmFtZTpcInByZXZcIixvbkNsaWNrOnRoaXMuc2xpZGVQcmV2LGlzRGlzYWJsZWQ6ZSxyZW5kZXJQcmV2QnV0dG9uOnR9KX0sdC5wcm90b3R5cGUuX3JlbmRlck5leHRCdXR0b249ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnByb3BzLnJlbmRlck5leHRCdXR0b24sZT1VdGlscy5nZXRTbGlkZUl0ZW1JbmZvKHRoaXMuc3RhdGUpLmlzTmV4dFNsaWRlRGlzYWJsZWQ7cmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFZpZXdzLlByZXZOZXh0QnV0dG9uLHtuYW1lOlwibmV4dFwiLG9uQ2xpY2s6dGhpcy5zbGlkZU5leHQsaXNEaXNhYmxlZDplLHJlbmRlck5leHRCdXR0b246dH0pfSx0LnByb3RvdHlwZS5fcmVuZGVyUGxheVBhdXNlQnV0dG9uPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5wcm9wcy5yZW5kZXJQbGF5UGF1c2VCdXR0b24sZT10aGlzLnN0YXRlLmlzQXV0b1BsYXlpbmc7cmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFZpZXdzLlBsYXlQYXVzZUJ1dHRvbix7aXNQbGF5aW5nOmUsb25DbGljazp0aGlzLl9oYW5kbGVQbGF5UGF1c2VUb2dnbGUscmVuZGVyUGxheVBhdXNlQnV0dG9uOnR9KX0sdC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5zdGF0ZSxlPXQudHJhbnNsYXRlM2QsaT10LmNsb25lcyxuPXQudHJhbnNpdGlvbix0PXQuY2FuVXNlRG9tLG89VXRpbHMuc2hvdWxkRGlzYWJsZURvdHModGhpcy5wcm9wcyx0aGlzLnN0YXRlKSxzPVV0aWxzLnNob3VsZERpc2FibGVCdXR0b25zKHRoaXMucHJvcHMsdGhpcy5zdGF0ZSksYT1VdGlscy5nZXRSZW5kZXJXcmFwcGVyU3R5bGVzKHRoaXMucHJvcHMsdGhpcy5zdGF0ZSx0aGlzLnN0YWdlQ29tcG9uZW50KSxlPVV0aWxzLmdldFJlbmRlclN0YWdlU3R5bGVzKHt0cmFuc2xhdGUzZDplfSx7dHJhbnNpdGlvbjpufSksbj10aGlzLnByb3BzLnNzclNpbGVudE1vZGV8fHQ/XCJcIjp0eXBlc18xLk1vZGlmaWVycy5TU1IsdD1VdGlscy5jb25jYXRDbGFzc25hbWVzKHR5cGVzXzEuQ2xhc3NuYW1lcy5ST09ULG4pO3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dH0scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7cmVmOnRoaXMuX3NldFJvb3RDb21wb25lbnRSZWZ9LHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOmEsY2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5XUkFQUEVSLG9uTW91c2VFbnRlcjp0aGlzLl9oYW5kbGVNb3VzZUVudGVyLG9uTW91c2VMZWF2ZTp0aGlzLl9oYW5kbGVNb3VzZUxlYXZlfSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInVsXCIse3N0eWxlOmUsY2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5TVEFHRSxyZWY6dGhpcy5fc2V0U3RhZ2VDb21wb25lbnRSZWZ9LGkubWFwKHRoaXMuX3JlbmRlclN0YWdlSXRlbSkpKSksbz9udWxsOnRoaXMuX3JlbmRlckRvdHNOYXZpZ2F0aW9uKCkscz9udWxsOnRoaXMuX3JlbmRlclByZXZCdXR0b24oKSxzP251bGw6dGhpcy5fcmVuZGVyTmV4dEJ1dHRvbigpLHRoaXMucHJvcHMuZGlzYWJsZVNsaWRlSW5mbz9udWxsOnRoaXMuX3JlbmRlclNsaWRlSW5mbygpLHRoaXMucHJvcHMuYXV0b1BsYXlDb250cm9scz90aGlzLl9yZW5kZXJQbGF5UGF1c2VCdXR0b24oKTpudWxsKX0sdC5kZWZhdWx0UHJvcHM9ZGVmYXVsdFByb3BzXzEuZGVmYXVsdFByb3BzLHR9KHJlYWN0XzEuZGVmYXVsdC5QdXJlQ29tcG9uZW50KSk7ZXhwb3J0cy5kZWZhdWx0PUFsaWNlQ2Fyb3VzZWw7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcblxuZnVuY3Rpb24gcGFyc2UodXVpZCkge1xuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIGxldCB2O1xuICBjb25zdCBhcnIgPSBuZXcgVWludDhBcnJheSgxNik7IC8vIFBhcnNlICMjIyMjIyMjLS4uLi4tLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFyclswXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgwLCA4KSwgMTYpKSA+Pj4gMjQ7XG4gIGFyclsxXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzJdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclszXSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0jIyMjLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbNF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoOSwgMTMpLCAxNikpID4+PiA4O1xuICBhcnJbNV0gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0jIyMjLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzZdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxOCksIDE2KSkgPj4+IDg7XG4gIGFycls3XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tIyMjIy0uLi4uLi4uLi4uLi5cblxuICBhcnJbOF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTksIDIzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzldID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0uLi4uLSMjIyMjIyMjIyMjI1xuICAvLyAoVXNlIFwiL1wiIHRvIGF2b2lkIDMyLWJpdCB0cnVuY2F0aW9uIHdoZW4gYml0LXNoaWZ0aW5nIGhpZ2gtb3JkZXIgYnl0ZXMpXG5cbiAgYXJyWzEwXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgyNCwgMzYpLCAxNikpIC8gMHgxMDAwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMV0gPSB2IC8gMHgxMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTJdID0gdiA+Pj4gMjQgJiAweGZmO1xuICBhcnJbMTNdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMTRdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclsxNV0gPSB2ICYgMHhmZjtcbiAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFyc2U7IiwiaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuaW1wb3J0IHBhcnNlIGZyb20gJy4vcGFyc2UuanMnO1xuXG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgY29uc3QgYnl0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5leHBvcnQgY29uc3QgRE5TID0gJzZiYTdiODEwLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnQgY29uc3QgVVJMID0gJzZiYTdiODExLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2MzUobmFtZSwgdmVyc2lvbiwgaGFzaGZ1bmMpIHtcbiAgZnVuY3Rpb24gZ2VuZXJhdGVVVUlEKHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgdmFyIF9uYW1lc3BhY2U7XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBzdHJpbmdUb0J5dGVzKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWVzcGFjZSA9IHBhcnNlKG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaWYgKCgoX25hbWVzcGFjZSA9IG5hbWVzcGFjZSkgPT09IG51bGwgfHwgX25hbWVzcGFjZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25hbWVzcGFjZS5sZW5ndGgpICE9PSAxNikge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdOYW1lc3BhY2UgbXVzdCBiZSBhcnJheS1saWtlICgxNiBpdGVyYWJsZSBpbnRlZ2VyIHZhbHVlcywgMC0yNTUpJyk7XG4gICAgfSAvLyBDb21wdXRlIGhhc2ggb2YgbmFtZXNwYWNlIGFuZCB2YWx1ZSwgUGVyIDQuM1xuICAgIC8vIEZ1dHVyZTogVXNlIHNwcmVhZCBzeW50YXggd2hlbiBzdXBwb3J0ZWQgb24gYWxsIHBsYXRmb3JtcywgZS5nLiBgYnl0ZXMgPVxuICAgIC8vIGhhc2hmdW5jKFsuLi5uYW1lc3BhY2UsIC4uLiB2YWx1ZV0pYFxuXG5cbiAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNiArIHZhbHVlLmxlbmd0aCk7XG4gICAgYnl0ZXMuc2V0KG5hbWVzcGFjZSk7XG4gICAgYnl0ZXMuc2V0KHZhbHVlLCBuYW1lc3BhY2UubGVuZ3RoKTtcbiAgICBieXRlcyA9IGhhc2hmdW5jKGJ5dGVzKTtcbiAgICBieXRlc1s2XSA9IGJ5dGVzWzZdICYgMHgwZiB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSBieXRlc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gICAgaWYgKGJ1Zikge1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KGJ5dGVzKTtcbiAgfSAvLyBGdW5jdGlvbiNuYW1lIGlzIG5vdCBzZXR0YWJsZSBvbiBzb21lIHBsYXRmb3JtcyAoIzI3MClcblxuXG4gIHRyeSB7XG4gICAgZ2VuZXJhdGVVVUlELm5hbWUgPSBuYW1lOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgfSBjYXRjaCAoZXJyKSB7fSAvLyBGb3IgQ29tbW9uSlMgZGVmYXVsdCBleHBvcnQgc3VwcG9ydFxuXG5cbiAgZ2VuZXJhdGVVVUlELkROUyA9IEROUztcbiAgZ2VuZXJhdGVVVUlELlVSTCA9IFVSTDtcbiAgcmV0dXJuIGdlbmVyYXRlVVVJRDtcbn0iLCIvKlxuICogQnJvd3Nlci1jb21wYXRpYmxlIEphdmFTY3JpcHQgTUQ1XG4gKlxuICogTW9kaWZpY2F0aW9uIG9mIEphdmFTY3JpcHQgTUQ1XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9KYXZhU2NyaXB0LU1ENVxuICpcbiAqIENvcHlyaWdodCAyMDExLCBTZWJhc3RpYW4gVHNjaGFuXG4gKiBodHRwczovL2JsdWVpbXAubmV0XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqXG4gKiBCYXNlZCBvblxuICogQSBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBSU0EgRGF0YSBTZWN1cml0eSwgSW5jLiBNRDUgTWVzc2FnZVxuICogRGlnZXN0IEFsZ29yaXRobSwgYXMgZGVmaW5lZCBpbiBSRkMgMTMyMS5cbiAqIFZlcnNpb24gMi4yIENvcHlyaWdodCAoQykgUGF1bCBKb2huc3RvbiAxOTk5IC0gMjAwOVxuICogT3RoZXIgY29udHJpYnV0b3JzOiBHcmVnIEhvbHQsIEFuZHJldyBLZXBlcnQsIFlkbmFyLCBMb3N0aW5ldFxuICogRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEJTRCBMaWNlbnNlXG4gKiBTZWUgaHR0cDovL3BhamhvbWUub3JnLnVrL2NyeXB0L21kNSBmb3IgbW9yZSBpbmZvLlxuICovXG5mdW5jdGlvbiBtZDUoYnl0ZXMpIHtcbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobXNnLmxlbmd0aCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXNbaV0gPSBtc2cuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWQ1VG9IZXhFbmNvZGVkQXJyYXkod29yZHNUb01kNShieXRlc1RvV29yZHMoYnl0ZXMpLCBieXRlcy5sZW5ndGggKiA4KSk7XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzIHRvIGFuIGFycmF5IG9mIGJ5dGVzXG4gKi9cblxuXG5mdW5jdGlvbiBtZDVUb0hleEVuY29kZWRBcnJheShpbnB1dCkge1xuICBjb25zdCBvdXRwdXQgPSBbXTtcbiAgY29uc3QgbGVuZ3RoMzIgPSBpbnB1dC5sZW5ndGggKiAzMjtcbiAgY29uc3QgaGV4VGFiID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoMzI7IGkgKz0gOCkge1xuICAgIGNvbnN0IHggPSBpbnB1dFtpID4+IDVdID4+PiBpICUgMzIgJiAweGZmO1xuICAgIGNvbnN0IGhleCA9IHBhcnNlSW50KGhleFRhYi5jaGFyQXQoeCA+Pj4gNCAmIDB4MGYpICsgaGV4VGFiLmNoYXJBdCh4ICYgMHgwZiksIDE2KTtcbiAgICBvdXRwdXQucHVzaChoZXgpO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qKlxuICogQ2FsY3VsYXRlIG91dHB1dCBsZW5ndGggd2l0aCBwYWRkaW5nIGFuZCBiaXQgbGVuZ3RoXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRPdXRwdXRMZW5ndGgoaW5wdXRMZW5ndGg4KSB7XG4gIHJldHVybiAoaW5wdXRMZW5ndGg4ICsgNjQgPj4+IDkgPDwgNCkgKyAxNCArIDE7XG59XG4vKlxuICogQ2FsY3VsYXRlIHRoZSBNRDUgb2YgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcywgYW5kIGEgYml0IGxlbmd0aC5cbiAqL1xuXG5cbmZ1bmN0aW9uIHdvcmRzVG9NZDUoeCwgbGVuKSB7XG4gIC8qIGFwcGVuZCBwYWRkaW5nICovXG4gIHhbbGVuID4+IDVdIHw9IDB4ODAgPDwgbGVuICUgMzI7XG4gIHhbZ2V0T3V0cHV0TGVuZ3RoKGxlbikgLSAxXSA9IGxlbjtcbiAgbGV0IGEgPSAxNzMyNTg0MTkzO1xuICBsZXQgYiA9IC0yNzE3MzM4Nzk7XG4gIGxldCBjID0gLTE3MzI1ODQxOTQ7XG4gIGxldCBkID0gMjcxNzMzODc4O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkgKz0gMTYpIHtcbiAgICBjb25zdCBvbGRhID0gYTtcbiAgICBjb25zdCBvbGRiID0gYjtcbiAgICBjb25zdCBvbGRjID0gYztcbiAgICBjb25zdCBvbGRkID0gZDtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNywgNjA2MTA1ODE5KTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgNV0sIDEyLCAxMjAwMDgwNDI2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgOF0sIDcsIDE3NzAwMzU0MTYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDZdLCA5LCAtMTA2OTUwMTYzMik7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMyk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaV0sIDIwLCAtMzczODk3MzAyKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxNF0sIDksIC0xMDE5ODAzNjkwKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTYsIDE4MzkwMzA1NjIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA0XSwgMTEsIDEyNzI4OTMzNTMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNCwgNjgxMjc5MTc0KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyA2XSwgMjMsIDc2MDI5MTg5KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgOV0sIDQsIC02NDAzNjQ0ODcpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNiwgNTMwNzQyNTIwKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgOF0sIDYsIDE4NzMzMTMzNTkpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMTNdLCAyMSwgMTMwOTE1MTY0OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTUsIDcxODc4NzI1OSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG4gICAgYSA9IHNhZmVBZGQoYSwgb2xkYSk7XG4gICAgYiA9IHNhZmVBZGQoYiwgb2xkYik7XG4gICAgYyA9IHNhZmVBZGQoYywgb2xkYyk7XG4gICAgZCA9IHNhZmVBZGQoZCwgb2xkZCk7XG4gIH1cblxuICByZXR1cm4gW2EsIGIsIGMsIGRdO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgYnl0ZXMgdG8gYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3Jkc1xuICogQ2hhcmFjdGVycyA+MjU1IGhhdmUgdGhlaXIgaGlnaC1ieXRlIHNpbGVudGx5IGlnbm9yZWQuXG4gKi9cblxuXG5mdW5jdGlvbiBieXRlc1RvV29yZHMoaW5wdXQpIHtcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IGxlbmd0aDggPSBpbnB1dC5sZW5ndGggKiA4O1xuICBjb25zdCBvdXRwdXQgPSBuZXcgVWludDMyQXJyYXkoZ2V0T3V0cHV0TGVuZ3RoKGxlbmd0aDgpKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDg7IGkgKz0gOCkge1xuICAgIG91dHB1dFtpID4+IDVdIHw9IChpbnB1dFtpIC8gOF0gJiAweGZmKSA8PCBpICUgMzI7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLypcbiAqIEFkZCBpbnRlZ2Vycywgd3JhcHBpbmcgYXQgMl4zMi4gVGhpcyB1c2VzIDE2LWJpdCBvcGVyYXRpb25zIGludGVybmFsbHlcbiAqIHRvIHdvcmsgYXJvdW5kIGJ1Z3MgaW4gc29tZSBKUyBpbnRlcnByZXRlcnMuXG4gKi9cblxuXG5mdW5jdGlvbiBzYWZlQWRkKHgsIHkpIHtcbiAgY29uc3QgbHN3ID0gKHggJiAweGZmZmYpICsgKHkgJiAweGZmZmYpO1xuICBjb25zdCBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgcmV0dXJuIG1zdyA8PCAxNiB8IGxzdyAmIDB4ZmZmZjtcbn1cbi8qXG4gKiBCaXR3aXNlIHJvdGF0ZSBhIDMyLWJpdCBudW1iZXIgdG8gdGhlIGxlZnQuXG4gKi9cblxuXG5mdW5jdGlvbiBiaXRSb3RhdGVMZWZ0KG51bSwgY250KSB7XG4gIHJldHVybiBudW0gPDwgY250IHwgbnVtID4+PiAzMiAtIGNudDtcbn1cbi8qXG4gKiBUaGVzZSBmdW5jdGlvbnMgaW1wbGVtZW50IHRoZSBmb3VyIGJhc2ljIG9wZXJhdGlvbnMgdGhlIGFsZ29yaXRobSB1c2VzLlxuICovXG5cblxuZnVuY3Rpb24gbWQ1Y21uKHEsIGEsIGIsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIHNhZmVBZGQoYml0Um90YXRlTGVmdChzYWZlQWRkKHNhZmVBZGQoYSwgcSksIHNhZmVBZGQoeCwgdCkpLCBzKSwgYik7XG59XG5cbmZ1bmN0aW9uIG1kNWZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgYyB8IH5iICYgZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWdnKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgZCB8IGMgJiB+ZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWhoKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiIF4gYyBeIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVpaShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYyBeIChiIHwgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWQ1OyIsImltcG9ydCB2MzUgZnJvbSAnLi92MzUuanMnO1xuaW1wb3J0IG1kNSBmcm9tICcuL21kNS5qcyc7XG5jb25zdCB2MyA9IHYzNSgndjMnLCAweDMwLCBtZDUpO1xuZXhwb3J0IGRlZmF1bHQgdjM7IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCIvLyBBZGFwdGVkIGZyb20gQ2hyaXMgVmVuZXNzJyBTSEExIGNvZGUgYXRcbi8vIGh0dHA6Ly93d3cubW92YWJsZS10eXBlLmNvLnVrL3NjcmlwdHMvc2hhMS5odG1sXG5mdW5jdGlvbiBmKHMsIHgsIHksIHopIHtcbiAgc3dpdGNoIChzKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIHggJiB5IF4gfnggJiB6O1xuXG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcblxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiB4ICYgeSBeIHggJiB6IF4geSAmIHo7XG5cbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuICB9XG59XG5cbmZ1bmN0aW9uIFJPVEwoeCwgbikge1xuICByZXR1cm4geCA8PCBuIHwgeCA+Pj4gMzIgLSBuO1xufVxuXG5mdW5jdGlvbiBzaGExKGJ5dGVzKSB7XG4gIGNvbnN0IEsgPSBbMHg1YTgyNzk5OSwgMHg2ZWQ5ZWJhMSwgMHg4ZjFiYmNkYywgMHhjYTYyYzFkNl07XG4gIGNvbnN0IEggPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG5cbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXMucHVzaChtc2cuY2hhckNvZGVBdChpKSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGJ5dGVzKSkge1xuICAgIC8vIENvbnZlcnQgQXJyYXktbGlrZSB0byBBcnJheVxuICAgIGJ5dGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYnl0ZXMpO1xuICB9XG5cbiAgYnl0ZXMucHVzaCgweDgwKTtcbiAgY29uc3QgbCA9IGJ5dGVzLmxlbmd0aCAvIDQgKyAyO1xuICBjb25zdCBOID0gTWF0aC5jZWlsKGwgLyAxNik7XG4gIGNvbnN0IE0gPSBuZXcgQXJyYXkoTik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICBjb25zdCBhcnIgPSBuZXcgVWludDMyQXJyYXkoMTYpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxNjsgKytqKSB7XG4gICAgICBhcnJbal0gPSBieXRlc1tpICogNjQgKyBqICogNF0gPDwgMjQgfCBieXRlc1tpICogNjQgKyBqICogNCArIDFdIDw8IDE2IHwgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAyXSA8PCA4IHwgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAzXTtcbiAgICB9XG5cbiAgICBNW2ldID0gYXJyO1xuICB9XG5cbiAgTVtOIC0gMV1bMTRdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAvIE1hdGgucG93KDIsIDMyKTtcbiAgTVtOIC0gMV1bMTRdID0gTWF0aC5mbG9vcihNW04gLSAxXVsxNF0pO1xuICBNW04gLSAxXVsxNV0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4ICYgMHhmZmZmZmZmZjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IE47ICsraSkge1xuICAgIGNvbnN0IFcgPSBuZXcgVWludDMyQXJyYXkoODApO1xuXG4gICAgZm9yIChsZXQgdCA9IDA7IHQgPCAxNjsgKyt0KSB7XG4gICAgICBXW3RdID0gTVtpXVt0XTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCB0ID0gMTY7IHQgPCA4MDsgKyt0KSB7XG4gICAgICBXW3RdID0gUk9UTChXW3QgLSAzXSBeIFdbdCAtIDhdIF4gV1t0IC0gMTRdIF4gV1t0IC0gMTZdLCAxKTtcbiAgICB9XG5cbiAgICBsZXQgYSA9IEhbMF07XG4gICAgbGV0IGIgPSBIWzFdO1xuICAgIGxldCBjID0gSFsyXTtcbiAgICBsZXQgZCA9IEhbM107XG4gICAgbGV0IGUgPSBIWzRdO1xuXG4gICAgZm9yIChsZXQgdCA9IDA7IHQgPCA4MDsgKyt0KSB7XG4gICAgICBjb25zdCBzID0gTWF0aC5mbG9vcih0IC8gMjApO1xuICAgICAgY29uc3QgVCA9IFJPVEwoYSwgNSkgKyBmKHMsIGIsIGMsIGQpICsgZSArIEtbc10gKyBXW3RdID4+PiAwO1xuICAgICAgZSA9IGQ7XG4gICAgICBkID0gYztcbiAgICAgIGMgPSBST1RMKGIsIDMwKSA+Pj4gMDtcbiAgICAgIGIgPSBhO1xuICAgICAgYSA9IFQ7XG4gICAgfVxuXG4gICAgSFswXSA9IEhbMF0gKyBhID4+PiAwO1xuICAgIEhbMV0gPSBIWzFdICsgYiA+Pj4gMDtcbiAgICBIWzJdID0gSFsyXSArIGMgPj4+IDA7XG4gICAgSFszXSA9IEhbM10gKyBkID4+PiAwO1xuICAgIEhbNF0gPSBIWzRdICsgZSA+Pj4gMDtcbiAgfVxuXG4gIHJldHVybiBbSFswXSA+PiAyNCAmIDB4ZmYsIEhbMF0gPj4gMTYgJiAweGZmLCBIWzBdID4+IDggJiAweGZmLCBIWzBdICYgMHhmZiwgSFsxXSA+PiAyNCAmIDB4ZmYsIEhbMV0gPj4gMTYgJiAweGZmLCBIWzFdID4+IDggJiAweGZmLCBIWzFdICYgMHhmZiwgSFsyXSA+PiAyNCAmIDB4ZmYsIEhbMl0gPj4gMTYgJiAweGZmLCBIWzJdID4+IDggJiAweGZmLCBIWzJdICYgMHhmZiwgSFszXSA+PiAyNCAmIDB4ZmYsIEhbM10gPj4gMTYgJiAweGZmLCBIWzNdID4+IDggJiAweGZmLCBIWzNdICYgMHhmZiwgSFs0XSA+PiAyNCAmIDB4ZmYsIEhbNF0gPj4gMTYgJiAweGZmLCBIWzRdID4+IDggJiAweGZmLCBIWzRdICYgMHhmZl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoYTE7IiwiaW1wb3J0IHYzNSBmcm9tICcuL3YzNS5qcyc7XG5pbXBvcnQgc2hhMSBmcm9tICcuL3NoYTEuanMnO1xuY29uc3QgdjUgPSB2MzUoJ3Y1JywgMHg1MCwgc2hhMSk7XG5leHBvcnQgZGVmYXVsdCB2NTsiLCIvKiBnZXQgdGhlIHJlcXVpcmVkIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgY3VycmVudCBzY3JlZW4gc2l6ZSBkZXBlbmQgb24gcmVzcG9uc2l2ZSBvYmplY3QgKi9cbmV4cG9ydCBjb25zdCBnZXRSZXF1aXJlZEl0ZW1zID0gcmVzcG9uc2l2ZSA9PiB7XG4gICAgbGV0IHNjcmVlV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIGlmIChzY3JlZVdpZHRoIDwgNjQwKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zaXZlWzBdPy5pdGVtcztcbiAgICB9IGVsc2UgaWYgKHNjcmVlV2lkdGggPj0gNjQwICYmIHNjcmVlV2lkdGggPCAxMDI0KSB7XG4gICAgICAgIHJldHVybiByZXNwb25zaXZlWzY0MF0/Lml0ZW1zO1xuICAgIH0gZWxzZSBpZiAoc2NyZWVXaWR0aCA+PSAxMDI0ICYmIHNjcmVlV2lkdGggPCAxMjAwKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zaXZlWzEwMjRdPy5pdGVtcztcbiAgICB9IGVsc2UgaWYgKHNjcmVlV2lkdGggPj0gMTIwMCAmJiBzY3JlZVdpZHRoIDwgMTYwMCkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2l2ZVsxMjAwXT8uaXRlbXM7XG4gICAgfSBlbHNlIGlmIChzY3JlZVdpZHRoID49IDE2MDAgJiYgc2NyZWVXaWR0aCA8IDI1NjApIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNpdmVbMTYwMF0/Lml0ZW1zO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXNwb25zaXZlWzI1NjBdPy5pdGVtcztcbiAgICB9XG59O1xuXG4vKlxuICAgIENvbnN0YW50c1xuKi9cbmV4cG9ydCBjb25zdCBzdGF0dXNMaXN0ID0ge1xuICAgIHJlc2V0OiBcInJlc2V0XCIsXG4gICAgZ29MYXN0OiBcImdvTGFzdFwiLFxuICAgIG5leHQ6IFwibmV4dFwiLFxuICAgIHByZXY6IFwicHJldlwiXG59O1xuXG5leHBvcnQgY29uc3QgY2xhc3Nlc0FjdGlvbiA9IHtcbiAgICBhZGQ6IFwiYWRkXCIsXG4gICAgcmVtb3ZlOiBcInJlbW92ZVwiXG59O1xuXG5leHBvcnQgY29uc3QgY29tbW9uQ2xhc3NlcyA9IHtcbiAgICBtdWx0aV9jb250YWluZXI6IFwibXVsdGktY2Fyb3VzZWxfX2NvbnRhaW5lclwiLFxuICAgIG11bHRpX2VtcHR5X2NvbnRhaW5lcjogXCJtdWx0aS1jYXJvdXNlbF9fZW1wdHktY29udGFpbmVyXCIsXG4gICAgaXRlbTogXCJtdWx0aS1jYXJvdXNlbF9faXRlbVwiLFxuICAgIGFjdGl2ZTogXCJtdWx0aS1jYXJvdXNlbF9fYWN0aXZlXCIsXG4gICAgZXh0cmFfaXRlbTogXCJtdWx0aS1jYXJvdXNlbF9fZXh0cmEtaXRlbVwiLFxuICAgIG5vX2RvdHM6IFwibXVsdGktY2Fyb3VzZWxfX25vLWRvdHNcIixcbiAgICBlcnJvcjogXCJtdWx0aS1jYXJvdXNlbF9fZXJyb3JcIixcbiAgICBsb2FkaW5nOiBcIm11bHRpLWNhcm91c2VsX19sb2FkaW5nXCJcbn07XG5cbmV4cG9ydCBjb25zdCBub3JtYWxDYXJvdXNlbENsYXNzZXMgPSB7XG4gICAgbm9ybWFsX2NvbnRhaW5lcjogXCJub3JtYWwtY2Fyb3VzZWxfX2NvbnRhaW5lclwiLFxuICAgIG5vcm1hbF9pdGVtOiBcIm5vcm1hbC1jYXJvdXNlbF9faXRlbVwiLFxuICAgIG5vcm1hbF9zdHlsZWRfYnRuOiBcIm5vcm1hbC1jYXJvdXNlbF9fc3R5bGVkLWJ0blwiXG59O1xuXG5leHBvcnQgY29uc3QgYWN0aXZlQ2xpY2tDbGFzc2VzID0ge1xuICAgIGFjdGl2ZV9jbGlja19jb250YWluZXI6IFwiYWN0aXZlLWNsaWNrLWNhcm91c2VsX19jb250YWluZXJcIixcbiAgICBhY3RpdmVfY2xpY2tfaXRlbTogXCJhY3RpdmUtY2xpY2stY2Fyb3VzZWxfX2l0ZW1cIixcbiAgICBhY3RpdmVfY2xpY2tfc3R5bGVkX2J0bjogXCJhY3RpdmUtY2xpY2stY2Fyb3VzZWxfX3N0eWxlZC1idG5cIlxufTtcblxuZXhwb3J0IGNvbnN0IGFjdGl2ZVNsaWRlQ2xhc3NlcyA9IHtcbiAgICBhY3RpdmVfc2xpZGVfY29udGFpbmVyOiBcImFjdGl2ZS1zbGlkZS1jYXJvdXNlbF9fY29udGFpbmVyXCIsXG4gICAgYWN0aXZlX3NsaWRlX3dyYXBwZXI6IFwiYWN0aXZlLXNsaWRlLWNhcm91c2VsX193cmFwcGVyXCIsXG4gICAgZmlyc3RfaXRlbTogXCJhY3RpdmUtc2xpZGUtY2Fyb3VzZWxfX2ZpcnN0LWl0ZW1cIixcbiAgICBsYXN0X2l0ZW06IFwiYWN0aXZlLXNsaWRlLWNhcm91c2VsX19sYXN0LWl0ZW1cIixcbiAgICBwcmV2X2J0bjogXCJhY3RpdmUtc2xpZGUtY2Fyb3VzZWxfX3ByZXYtYnRuXCIsXG4gICAgbmV4dF9idG46IFwiYWN0aXZlLXNsaWRlLWNhcm91c2VsX19uZXh0LWJ0blwiXG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi91aS9Ob3JtYWxDYXJvdXNlbC5zY3NzXCI7XG5pbXBvcnQgXCIuLi91aS9BY3RpdmVDbGlja0Nhcm91c2VsLnNjc3NcIjtcbmltcG9ydCBBbGljZUNhcm91c2VsIGZyb20gXCJyZWFjdC1hbGljZS1jYXJvdXNlbFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7IGdldFJlcXVpcmVkSXRlbXMsIGNvbW1vbkNsYXNzZXMsIG5vcm1hbENhcm91c2VsQ2xhc3NlcywgYWN0aXZlQ2xpY2tDbGFzc2VzLCBjbGFzc2VzQWN0aW9uIH0gZnJvbSBcIi4vaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vcm1hbENhcm91c2VsKHByb3BzKSB7XG4gICAgY29uc3QgY2Fyb3VzZWxQYXJlbnQgPSB1c2VSZWYoKTtcblxuICAgIGNvbnN0IFtyZW5kZXJDYXJvdXNlbCwgc2V0UmVuZGVyQ2Fyb3VzZWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtkYXRhSXRlbXMsIHNldERhdGFJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2Nhcm91c2VsSXRlbXMsIHNldENhcm91c2VsSXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFt1bmlxdWVDbGFzcywgc2V0VW5pcXVlQ2xhc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2Nhcm91c2VsSW5maW5pdGUsIHNldENhcm91c2VsSW5maW5pdGVdID0gdXNlU3RhdGUocHJvcHMuaW5maW5pdGUpO1xuICAgIGNvbnN0IFtyZXNwb25zaXZlLCBzZXRSZXNwb25zaXZlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3QgYWRkT3JSZW1vdmVDbGFzc05hbWUgPSAobm9kZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChhY3Rpb24gPT09IGNsYXNzZXNBY3Rpb24ucmVtb3ZlKSB7XG4gICAgICAgICAgICBub2RlPy5jbGFzc0xpc3Q/LnJlbW92ZShjb21tb25DbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlPy5jbGFzc0xpc3Q/LmFkZChjb21tb25DbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgaW4gY2FzZSBvZiBcImluZmluaXRlXCIgY2Fyb3VzZWwgdGhlIG5vZGUgd2lsbCBiZSBub2RlIGxpc3QgXCJBcnJheVwiXG4gICAgICAgIGJlY2F1c2UgdGhlIGNhcm91c2VsIGNyZWF0ZSBhIGNvcHkgb2YgYWxsIHRoZSBpdGVtc1xuICAgICAgICB0aGF0IHdoeSB3ZSBuZWVkIGNoYW5nZSB0aGUgYWN0aXZlIGNsYXNzIG9uIGJvdGggbm9kZXMgLSB0aGUgY2Fyb3VzZWwgcmVuZGVyIGJvdGggLVxuICAgICAgICBhbmQgd2l0aCBubyBcImluZmluaXRlXCIgdGhlIG5vZGUgbGlzdCB3aWxsIGJlIGxlbmd0aCBvZiBcIjFcIlxuICAgICovXG4gICAgY29uc3QgY2hhbmdlQWN0aXZlQ2xhc3MgPSAobm9kZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChub2RlPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG5vZGUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBhZGRPclJlbW92ZUNsYXNzTmFtZShpdGVtLCBhY3Rpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgaWR4LVwiXCIgaXMgdGhlIGNvbW1vbiB1bmlxdWUgY2xhc3MgYmV0d2VlbiBvcmlnaW5hbCBpdGVtIGFuZCB0aGUgY2xvbmVkIG9uZVxuICAgICovXG4gICAgY29uc3QgZ2V0SWR4Q2xhc3NOYW1lID0gZSA9PiB7XG4gICAgICAgIGxldCBjbGlja2VkSXRlbSA9IGUudGFyZ2V0O1xuXG4gICAgICAgIC8vIGluIGNhc2Ugb2YgY2xpY2tpbmcgZWxlbWVudCBpbnNpZGUgdGhlIGl0ZW0gd2UgbmVlZCB0aGUgbWFpbiBkaXYgd2l0aCBcImlkeC1cIiBjbGFzcyBuYW1lXG4gICAgICAgIHdoaWxlIChjbGlja2VkSXRlbSkge1xuICAgICAgICAgICAgaWYgKGNsaWNrZWRJdGVtLmNsYXNzTGlzdC5jb250YWlucyhjb21tb25DbGFzc2VzLml0ZW0pKSBicmVhaztcbiAgICAgICAgICAgIGNsaWNrZWRJdGVtID0gY2xpY2tlZEl0ZW0ucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjbGFzc05hbWVzID0gY2xpY2tlZEl0ZW0uY2xhc3NOYW1lLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZXM/LmZpbHRlcihpdGVtID0+IGl0ZW0uaW5jbHVkZXMoXCJpZHhcIikpPy5bMF07XG4gICAgfTtcblxuICAgIGNvbnN0IG9uQ2FyZENsaWNrZWQgPSAoZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChhY3Rpb24/LmNhbkV4ZWN1dGUpIGFjdGlvbi5leGVjdXRlKCk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIGFjdGl2ZSBjbGFzcyBmcm9tIG9yaWdpbmFsIGFuZCBjbG9uZWQgaXRlbVxuICAgICAgICBsZXQgYWN0aXZlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3VuaXF1ZUNsYXNzfWApPy5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjb21tb25DbGFzc2VzLmFjdGl2ZX1gKTtcbiAgICAgICAgY2hhbmdlQWN0aXZlQ2xhc3MoYWN0aXZlTm9kZSwgY2xhc3Nlc0FjdGlvbi5yZW1vdmUpO1xuXG4gICAgICAgIGxldCBpZHhDbGFzcyA9IGdldElkeENsYXNzTmFtZShlKTtcblxuICAgICAgICAvLyBhZGQgYWN0aXZlIGNsYXNzIGZvciBib3RoIG9yaWdpbmFsIGFuZCBjbG9uZWQgaXRlbVxuICAgICAgICBsZXQgaXRlbVRvU2V0QWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dW5pcXVlQ2xhc3N9YCk/LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2lkeENsYXNzfWApO1xuICAgICAgICBjaGFuZ2VBY3RpdmVDbGFzcyhpdGVtVG9TZXRBY3RpdmUsIGNsYXNzZXNBY3Rpb24uYWRkKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgIGlmIHRoZSBpdGVtIGJlaGF2aW9yIFwiY3JlYXRlIGV4dHJhIGl0ZW1zXCIgY2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgZXh0cmEgaXRlbXMgYW5kIGdldCB0aGUgZmluYWwgbnVtYmVyIG9mIGNhcm91c2VsIGl0ZW1zXG4gICAgKi9cbiAgICBjb25zdCBjcmVhdGVDYXJvdXNlbEl0ZW1zID0gKCkgPT4ge1xuICAgICAgICBsZXQgZXh0cmFJdGVtcyA9IFtdO1xuICAgICAgICBpZiAocHJvcHMuaXRlbXNCZWhhdmlvciA9PT0gXCJleHRyYVwiICYmIGRhdGFJdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50UmVxdWlyZWRJdGVtcyA9IGdldFJlcXVpcmVkSXRlbXMocHJvcHMuZGVmYXVsdFJlc3BvbnNpdmUpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YUl0ZW1zLmxlbmd0aCA8IGN1cnJlbnRSZXF1aXJlZEl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UmVxdWlyZWRJdGVtcyAtIGRhdGFJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBleHRyYUl0ZW1zLnB1c2goPGRpdiBjbGFzc05hbWU9e2NvbW1vbkNsYXNzZXMuZXh0cmFfaXRlbX0+PC9kaXY+KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0Q2Fyb3VzZWxJbmZpbml0ZShmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldENhcm91c2VsSW5maW5pdGUocHJvcHMuaW5maW5pdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldENhcm91c2VsSXRlbXMoWy4uLmRhdGFJdGVtcywgLi4uZXh0cmFJdGVtc10pO1xuICAgICAgICBzZXRSZW5kZXJDYXJvdXNlbCh0cnVlKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgIHNldCB0aGUgaXRlbXMgd2hlbiByZW5kZXIgdGhlIHdpZGdldCBvciB1cGRhdGUgdGhlIGRhdGFcbiAgICAqL1xuICAgIGNvbnN0IHNldHVwQ2Fyb3VzZSA9IGl0ZW1zID0+IHtcbiAgICAgICAgbGV0IGNhcm91c2VsSXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMuY2Fyb3VzZWxUeXBlID09PSBcImFjdGl2ZVwiID8gZSA9PiBvbkNhcmRDbGlja2VkKGUsIHByb3BzLmFjdGlvbj8uZ2V0KGl0ZW0pKSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NvbW1vbkNsYXNzZXMuaXRlbX0gaWR4LSR7aX0gJHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2Fyb3VzZWxUeXBlID09PSBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGFjdGl2ZUNsaWNrQ2xhc3Nlcy5hY3RpdmVfY2xpY2tfaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBub3JtYWxDYXJvdXNlbENsYXNzZXMubm9ybWFsX2l0ZW1cbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY29udGVudC5nZXQoaXRlbSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSk7XG4gICAgICAgIHNldERhdGFJdGVtcyhjYXJvdXNlbEl0ZW1zKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgIHNldCB0aGUgYWN0aXZlIGl0ZW0gYWZ0ZXIgdGhlIGNhcm91c2VsIGhhcyBhbHJlYWR5IGJlZW4gaW5pdGlhbGl6ZWRcbiAgICAqL1xuICAgIGNvbnN0IG9uSW5pdGlhbGl6ZWQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy5jYXJvdXNlbFR5cGUgPT09IFwiYWN0aXZlXCIpIHtcbiAgICAgICAgICAgIGxldCBmaXJzdENhcm91c2VsSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3VuaXF1ZUNsYXNzfWApPy5xdWVyeVNlbGVjdG9yKFwiLmlkeC0wXCIpO1xuICAgICAgICAgICAgZmlyc3RDYXJvdXNlbEl0ZW0/LmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgIG9uIHJlc2l6ZSByZXJlbmRlciB0aGUgY2Fyb3VzZWwgdG8gcmVjYWxjdWxhdGUgdGhlIGV4dHJhIGl0ZW1zIGlmIG5lY2Vzc2FyeSBhbmQgcmVzZXQgdGhlIGFjdGl2ZSBpdGVtXG4gICAgKi9cbiAgICBjb25zdCBvblJlc2l6ZWQgPSAoKSA9PiB7XG4gICAgICAgIHNldFJlbmRlckNhcm91c2VsKGZhbHNlKTtcbiAgICAgICAgY3JlYXRlQ2Fyb3VzZWxJdGVtcygpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgd2hlbiBnZXR0aW5nIHRoZSBpdGVtIG9yIHVwZGF0ZWQgaXQsIHJlcmVuZGVyIHRoZSBjYXJvdXNlbCB0byByZWNhbGN1bGF0ZSB0aGUgZXh0cmEgaXRlbXMgaWYgbmVjZXNzYXJ5IGFuZCByZXNldCB0aGUgYWN0aXZlIGl0ZW0gXG4gICAgKi9cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMuZGF0YT8uc3RhdHVzID09PSBcImF2YWlsYWJsZVwiKSB7XG4gICAgICAgICAgICBzZXRSZW5kZXJDYXJvdXNlbChmYWxzZSk7XG4gICAgICAgICAgICBzZXR1cENhcm91c2UocHJvcHMuZGF0YS5pdGVtcyk7XG4gICAgICAgIH1cbiAgICB9LCBbcHJvcHMuZGF0YT8uaXRlbXNdKTtcblxuICAgIC8qXG4gICAgICBhZnRlciBnZXR0aW5nIHRoZSBpdGVtIG9yIHVwZGF0ZWQgaXQgYW5kIHRoZSBpdGVtIGJlaGF2aW9yIFwiY3JlYXRlIGV4dHJhIGl0ZW1zXCIgY2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgZXh0cmEgaXRlbXNcbiAgICAqL1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIFRoaXMgY29uZGl0aW9uIGlzIHRvIHByZXZlbnQgY2FsbGluZyBjcmVhdGVDYXJvdXNlbEl0ZW1zIGJlZm9yZSBnZXQgdGhlIGl0ZW1zIFwiVGhpcyBoYXBwZW5zIGF0IHRoZSBmaXJzdCB3aWRnZXQgcmVuZGVyXCJcbiAgICAgICAgaWYgKHByb3BzLmRhdGE/LnN0YXR1cyA9PT0gXCJhdmFpbGFibGVcIikge1xuICAgICAgICAgICAgY3JlYXRlQ2Fyb3VzZWxJdGVtcygpO1xuICAgICAgICB9XG4gICAgfSwgW2RhdGFJdGVtc10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gc2V0IGEgdW5pcXVlIGNsYXNzIGluIGNhc2Ugb2YgdXNpbmcgdHdvIGRpZmZlcmVudCBjYXJvdXNlbCBpbnN0YW5jZXMgaW4gdGhlIHNhbWUgZG9jdW1lbnRcbiAgICAgICAgc2V0VW5pcXVlQ2xhc3MoXCJhLVwiICsgdXVpZHY0KCkpO1xuXG4gICAgICAgIC8vIHNldCB0aGUgcmVzcG9uc2l2ZSBvYmplY3QgYWZ0ZXIgaW5pdGlhbGl6ZSB0aGUgY29udGFpbmVyIHNvIHRoZSBjYXJvdXNlbCByZS1yZW5kZXIgYW5kIHRha2UgdGhlIGNvcnJlY3QgZGltZW5zaW9uc1xuICAgICAgICAvLyBOT1RFIDogZm9yY2UgcmVyZW5kZXJpbmcgZml4IHRoZSBidWcgd2l0aCBjYXJvdXNlbCBvdmVyZmxvdyB0aGUgcGFyZW50IGNvbnRhaW5lclxuICAgICAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB7XG4gICAgICAgICAgICBzZXRSZXNwb25zaXZlKHsgLi4ucHJvcHMuZGVmYXVsdFJlc3BvbnNpdmUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGNhcm91c2VsUGFyZW50LmN1cnJlbnQpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXtjYXJvdXNlbFBhcmVudH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgICAgICAgIGNvbW1vbkNsYXNzZXMubXVsdGlfY29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHVuaXF1ZUNsYXNzLFxuICAgICAgICAgICAgICAgIHByb3BzLmNhcm91c2VsVHlwZSA9PT0gXCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICA/IGFjdGl2ZUNsaWNrQ2xhc3Nlcy5hY3RpdmVfY2xpY2tfY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIDogbm9ybWFsQ2Fyb3VzZWxDbGFzc2VzLm5vcm1hbF9jb250YWluZXIsXG4gICAgICAgICAgICAgICAgcHJvcHMuZGlzYWJsZURvdHNDb250cm9scyA/IGNvbW1vbkNsYXNzZXMubm9fZG90cyA6IFwiXCIsXG4gICAgICAgICAgICAgICAgIXByb3BzLmRpc2FibGVCdXR0b25zQ29udHJvbHMgJiYgcHJvcHMuYnV0dG9uc1N0eWxlID09PSBcInN0eWxlZFwiXG4gICAgICAgICAgICAgICAgICAgID8gcHJvcHMuY2Fyb3VzZWxUeXBlID09PSBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGFjdGl2ZUNsaWNrQ2xhc3Nlcy5hY3RpdmVfY2xpY2tfc3R5bGVkX2J0blxuICAgICAgICAgICAgICAgICAgICAgICAgOiBub3JtYWxDYXJvdXNlbENsYXNzZXMubm9ybWFsX3N0eWxlZF9idG5cbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICBdLmpvaW4oXCIgXCIpfVxuICAgICAgICA+XG4gICAgICAgICAgICB7ZGF0YUl0ZW1zPy5sZW5ndGggJiYgcmVuZGVyQ2Fyb3VzZWwgPyAoXG4gICAgICAgICAgICAgICAgPEFsaWNlQ2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2Nhcm91c2VsSXRlbXN9XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlPXtjYXJvdXNlbEluZmluaXRlfVxuICAgICAgICAgICAgICAgICAgICBhdXRvUGxheT17cHJvcHMuYXV0b1BsYXl9XG4gICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5RGlyZWN0aW9uPXtwcm9wcy5hdXRvUGxheURpcmVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXlDb250cm9scz17cHJvcHMuYXV0b1BsYXlDb250cm9sc31cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUJ1dHRvbnNDb250cm9scz17cHJvcHMuZGlzYWJsZUJ1dHRvbnNDb250cm9sc31cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZURvdHNDb250cm9scz17cHJvcHMuZGlzYWJsZURvdHNDb250cm9sc31cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb249e3Byb3BzLmFuaW1hdGlvbkR1cmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25UeXBlPXtwcm9wcy5hbmltYXRpb25UeXBlfVxuICAgICAgICAgICAgICAgICAgICBrZXlib2FyZE5hdmlnYXRpb249e3Byb3BzLmtleWJvYXJkTmF2aWdhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgbW91c2VUcmFja2luZz17cHJvcHMubW91c2VUcmFja2luZ31cbiAgICAgICAgICAgICAgICAgICAgdG91Y2hUcmFja2luZz17cHJvcHMudG91Y2hUcmFja2luZ31cbiAgICAgICAgICAgICAgICAgICAgb25Jbml0aWFsaXplZD17b25Jbml0aWFsaXplZH1cbiAgICAgICAgICAgICAgICAgICAgb25SZXNpemVkPXtvblJlc2l6ZWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbW1vbkNsYXNzZXMubXVsdGlfZW1wdHlfY29udGFpbmVyfT48L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFsaWNlQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWFsaWNlLWNhcm91c2VsXCI7XG5pbXBvcnQgXCIuLi91aS9BY3RpdmVTbGlkZUNhcm91c2VsLnNjc3NcIjtcbmltcG9ydCB7IGNvbW1vbkNsYXNzZXMsIGFjdGl2ZVNsaWRlQ2xhc3Nlcywgc3RhdHVzTGlzdCB9IGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWN0aXZlU2xpZGVDYXJvdXNlbChwcm9wcykge1xuICAgIGNvbnN0IFtyZW5kZXJDYXJvdXNlbCwgc2V0UmVuZGVyQ2Fyb3VzZWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgW2Nhcm91c2VsX2l0ZW1zLCBzZXRfY2Fyb3VzZWxfaXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtyZXNwb25zaXZlLCBzZXRSZXNwb25zaXZlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFt1bmlxdWVDbGFzcywgc2V0VW5pcXVlQ2xhc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2N1cnJlbnRBY3RpdmVJZHgsIHNldEN1cnJlbnRBY3RpdmVJZHhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW251bWJlck9mRGlzcGxheWVkSXRlbXMsIHNldE51bWJlck9mRGlzcGxheWVkSXRlbXNdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW251bWJlck9mQWxsSXRlbXMsIHNldE51bWJlck9mQWxsSXRlbXNdID0gdXNlU3RhdGUoMCk7XG5cbiAgICAvLyBnZXQgdGhlICdyZWFjdC1hbGljZS1jYXJvdXNlbCcgYnVpbHQtaW4gYWxsIG1ldGhvZCBhbmQgcHJvcGVydGllc1xuICAgIGNvbnN0IFtjYXJvdXNlbFByb3BlcnRpZXMsIHNldENhcm91c2VsUHJvcGVydGllc10gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIC8qXG4gICAgICAgIEZpcmVkIHdoZW4gcmVhY2ggdGhlIGVuZCBvZiB0aGUgc2xpZGVyIG9yIHdoZW4gcmVzaXplIHRoZSBjYXJvdXNlbFxuICAgICAgICA9PiBtb3ZlIHRvIHRoZSBmaXJzdCBpdGVtXG4gICAgKi9cbiAgICBjb25zdCByZXNldFNsaWRlciA9ICgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudEFjdGl2ZUlkeCgwKTtcbiAgICAgICAgc2V0QWN0aXZlQ2xhc3Moc3RhdHVzTGlzdC5yZXNldCwgbnVsbCwgMCk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgRmlyZWQgd2hlbiBnZSBiYWNrIHdoZW4gc3RlcCBmcm9tIHRoZSBmaXJzdCBpdGVtXG4gICAgICAgPT4gbW92ZSB0byB0aGUgbGFzdCBpdGVtXG4gICAqL1xuICAgIGNvbnN0IHNsaWRlVG9UaGVFbmQgPSAoKSA9PiB7XG4gICAgICAgIGNhcm91c2VsUHJvcGVydGllcz8uc2xpZGVUbyhudW1iZXJPZkFsbEl0ZW1zIC0gbnVtYmVyT2ZEaXNwbGF5ZWRJdGVtcyArIDEpO1xuICAgICAgICBzZXRBY3RpdmVDbGFzcyhzdGF0dXNMaXN0LmdvTGFzdCwgbnVsbCwgbnVtYmVyT2ZBbGxJdGVtcyk7XG4gICAgICAgIHNldEN1cnJlbnRBY3RpdmVJZHgobnVtYmVyT2ZBbGxJdGVtcyk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIEZpcmVkIHdoZW4gY2xpY2tpbmcgXCJwcmV2aW91c1wiIGJ1dHRvblxuICAgICovXG4gICAgY29uc3QgcHJldkNsaWNrZWQgPSAoKSA9PiB7XG4gICAgICAgIGlmICghY3VycmVudEFjdGl2ZUlkeCkge1xuICAgICAgICAgICAgLy8gY3VycmVudEFjdGl2ZUlkeCA9PT0gMCwgdGhlIGFjdGl2ZSBpdGVtIGlzIHRoZSBmaXJzdCBvbmUsIG1vdmUgdG8gdGhlIGxhc3RcbiAgICAgICAgICAgIHNsaWRlVG9UaGVFbmQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZUNsYXNzKHN0YXR1c0xpc3QucHJldiwgY2Fyb3VzZWxQcm9wZXJ0aWVzPy5zbGlkZVByZXYsIGN1cnJlbnRBY3RpdmVJZHggLSAxKTtcbiAgICAgICAgICAgIHNldEN1cnJlbnRBY3RpdmVJZHgoY3VycmVudEFjdGl2ZUlkeCAtIDEpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIEZpcmVkIHdoZW4gY2xpY2tpbmcgXCJOZXh0XCIgYnV0dG9uXG4gICAgKi9cbiAgICBjb25zdCBuZXh0Q2xpY2tlZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRBY3RpdmVJZHggPT09IG51bWJlck9mQWxsSXRlbXMpIHtcbiAgICAgICAgICAgIC8vIHRoZSBhY3RpdmUgaXRlbSBpcyB0aGUgbGFzdCBvbmUsIG1vdmUgdG8gdGhlIGZpcnN0XG4gICAgICAgICAgICBjYXJvdXNlbFByb3BlcnRpZXM/LnNsaWRlVG8oMCk7XG4gICAgICAgICAgICByZXNldFNsaWRlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0QWN0aXZlQ2xhc3Moc3RhdHVzTGlzdC5uZXh0LCBjYXJvdXNlbFByb3BlcnRpZXM/LnNsaWRlTmV4dCwgY3VycmVudEFjdGl2ZUlkeCArIDEpO1xuICAgICAgICAgICAgc2V0Q3VycmVudEFjdGl2ZUlkeChjdXJyZW50QWN0aXZlSWR4ICsgMSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgUmVtb3ZlIHByZXZpb3VzIGFjdGl2ZSBpdGVtIGFuZCBnZXQgdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRoYXQgd2Ugd2FudCB0byBzZXQgaXQgYWN0aXZlXG4gICAgKi9cbiAgICBjb25zdCByZW1vdmVBY3RpdmVDbGFzcyA9IChzdGF0dXMsIGFsbEl0ZW1zKSA9PiB7XG4gICAgICAgIGxldCBpdGVtSWR4VG9TZXRBY3RpdmUgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsSXRlbXM/Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBnZXQgdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRoYXQgd2Ugd2FudCB0byBzZXQgaXQgYWN0aXZlIGluIHRoZSBcImFsbCBpdGVtc1wiIGFycmF5XG4gICAgICAgICAgICAvLyBOT1RFOiB3ZSBjYW4ndCB1c2UgdGhlIHN0YXRlIFwiY3VycmVudEFjdGl2ZUlkeFwiIGJlY2F1c2UgXCJhbGxJdGVtc1wiIGlzIGNvbnRhaW5pbmcgdGhlIGNsb25lZCBpdGVtIGFsc29cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBhbGxJdGVtc1tpXS5jbGFzc0xpc3Q/LmNvbnRhaW5zKGNvbW1vbkNsYXNzZXMuYWN0aXZlKSAmJlxuICAgICAgICAgICAgICAgICFhbGxJdGVtc1tpXT8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0Py5jb250YWlucyhcIl9fY2xvbmVkXCIpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBuZXh0IHByZXNzZWQgd2lsbCBiZSB0aGUgbmV4dCBpbmRleCwgaWYgcHJldmlvdXMgcHJlc3NlZCB3aWxsIGJlIHRoZSBwcmV2aW91cyBpbmRleFxuICAgICAgICAgICAgICAgIGl0ZW1JZHhUb1NldEFjdGl2ZSA9IHN0YXR1cyA9PT0gc3RhdHVzTGlzdC5uZXh0ID8gaSArIDEgOiBpIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsbEl0ZW1zW2ldLmNsYXNzTGlzdD8ucmVtb3ZlKGNvbW1vbkNsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtSWR4VG9TZXRBY3RpdmU7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIHNldHRpbmcgdGhlIGN1cnJlbiBhY3RpdmUgY2xhc3MsIGFuZCBzbGlkZSBsZWZ0IG9yIHJpZ2h0IHdoZW4gbmVlZGVkXG4gICAgKi9cbiAgICBjb25zdCBzZXRBY3RpdmVDbGFzcyA9IChzdGF0dXMsIHNsaWRlTGVmdE9yUmlnaHQsIGFjdGlvbklkeCkgPT4ge1xuICAgICAgICBsZXQgYWxsSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt1bmlxdWVDbGFzc31gKT8ucXVlcnlTZWxlY3RvckFsbChgLiR7Y29tbW9uQ2xhc3Nlcy5pdGVtfWApO1xuICAgICAgICBsZXQgaXRlbUlkeFRvU2V0QWN0aXZlID0gcmVtb3ZlQWN0aXZlQ2xhc3Moc3RhdHVzLCBhbGxJdGVtcyk7XG5cbiAgICAgICAgLy8gU2V0IGN1cnJlbnQgYWN0aXZlIGl0ZW1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gc3RhdHVzTGlzdC5yZXNldCkge1xuICAgICAgICAgICAgLy8gcXVlcnlTZWxlY3RvckFsbCA9PT4gdGhlIG9yaWdpbmFsIGl0ZW0gYW5kIHRoZSBjbG9uZWQgb25lXG4gICAgICAgICAgICBsZXQgZmlyc3RTbGlkZSA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYC4ke3VuaXF1ZUNsYXNzfWApXG4gICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yQWxsKGAuJHthY3RpdmVTbGlkZUNsYXNzZXMuZmlyc3RfaXRlbX1gKTtcblxuICAgICAgICAgICAgLy8gc2V0IHRoZSBhY3RpdmUgaXRlbSBmb3IgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGNhcm91c2VsIHRoYXQgaXMgbm90IGNsb25lZCBvbmVcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlyc3RTbGlkZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghZmlyc3RTbGlkZVtpXT8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0Py5jb250YWlucyhcIl9fY2xvbmVkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0U2xpZGVbaV0/LmNsYXNzTGlzdD8uYWRkKGNvbW1vbkNsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gc3RhdHVzTGlzdC5nb0xhc3QpIHtcbiAgICAgICAgICAgIC8vIHF1ZXJ5U2VsZWN0b3JBbGwgPT0+IHRoZSBvcmlnaW5hbCBpdGVtIGFuZCB0aGUgY2xvbmVkIG9uZVxuICAgICAgICAgICAgbGV0IGxhc3RTbGlkZSA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYC4ke3VuaXF1ZUNsYXNzfWApXG4gICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yQWxsKGAuJHthY3RpdmVTbGlkZUNsYXNzZXMubGFzdF9pdGVtfWApO1xuXG4gICAgICAgICAgICAvLyBzZXQgdGhlIGFjdGl2ZSBpdGVtIGZvciB0aGUgbGFzdCBpdGVtIGluIHRoZSBjYXJvdXNlbCB0aGF0IGlzIG5vdCBjbG9uZWQgb25lXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbGFzdFNsaWRlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFsYXN0U2xpZGVbaV0/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdD8uY29udGFpbnMoXCJfX2Nsb25lZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBsYXN0U2xpZGVbaV0/LmNsYXNzTGlzdD8uYWRkKGNvbW1vbkNsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm90IGNvbnRhaW5pbmcgYWN0aXZlIG1lYW5zIHRoYXQgdGhlIG5leHQvcHJldiBpdGVtIGlzIG5vdCBhcHBlYXJpbmcgaW4gdGhlIHNjcmVlbiByaWdodCBub3dcbiAgICAgICAgICAgIC8vIHNsaWRlIHdoZW4gcmVhY2ggdG8gdGhlIHN0YXJ0L2VuZCBvZiB0aGUgYWN0aXZlIGl0ZW1cbiAgICAgICAgICAgIGlmICghYWxsSXRlbXNbaXRlbUlkeFRvU2V0QWN0aXZlXT8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0Py5jb250YWlucyhcIl9fYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVMZWZ0T3JSaWdodCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxsSXRlbXNbaXRlbUlkeFRvU2V0QWN0aXZlXT8uY2xhc3NMaXN0Py5hZGQoY29tbW9uQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlyZSB0aGUgYWN0aW9uIHRoYXQgcmVsYXRlZCB0byB0aGUgbmV3IGFjdGl2ZSBpdGVtXG4gICAgICAgIGxldCBhY3Rpb25Ub0ZpcmUgPSBwcm9wcy5hY3Rpb24/LmdldChwcm9wcy5kYXRhLml0ZW1zPy5bYWN0aW9uSWR4XSk7XG4gICAgICAgIG9uU2xpZGVDbGlja2VkKGFjdGlvblRvRmlyZSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIGZpcmVkIHdoZW4gaW5pdGlhbGl6YXRpb24gdGhlIGNhcm91c2VsXG4gICAgKi9cbiAgICBjb25zdCBvbkNhcm91c2VsSW5pdCA9IGUgPT4ge1xuICAgICAgICBzZXROdW1iZXJPZkRpc3BsYXllZEl0ZW1zKGUuaXRlbXNJblNsaWRlKTtcbiAgICAgICAgc2V0UmVzcG9uc2l2ZSh7IC4uLnByb3BzLmRlZmF1bHRSZXNwb25zaXZlIH0pO1xuXG4gICAgICAgIGxldCBmaXJzdEl0ZW1BY3Rpb24gPSBwcm9wcy5hY3Rpb24/LmdldChwcm9wcy5kYXRhLml0ZW1zPy5bMF0pO1xuICAgICAgICBvblNsaWRlQ2xpY2tlZChmaXJzdEl0ZW1BY3Rpb24pO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBmaXJlZCB3aGVuIHJlc2l6aW5nIHRoZSBjYXJvdXNlbCwgY2Fyb3VzZWwgd2lsbCBhbHdheXMgc2xpZGUgdG8gdGhlIGZpcnN0IGl0ZW0gd2hlbiByZXNpemluZyAtXCJyZWFjdC1hbGljZS1jYXJvdXNlXCIgd2F5IG9mIHdvcmstXG4gICAgKi9cbiAgICBjb25zdCBvbkNhcm91c2VsUmVzaXplID0gZSA9PiB7XG4gICAgICAgIHNldE51bWJlck9mRGlzcGxheWVkSXRlbXMoZS5pdGVtc0luU2xpZGUpO1xuICAgICAgICBjYXJvdXNlbFByb3BlcnRpZXM/LnNsaWRlVG8oMCk7XG4gICAgICAgIHJlc2V0U2xpZGVyKCk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIGZpcmVkIHRoZSBjdXJyZW50IGFjdGl2ZSBpdGVtIGFjdGlvbiBpZiBmb3VuZFxuICAgICovXG4gICAgY29uc3Qgb25TbGlkZUNsaWNrZWQgPSBhY3Rpb24gPT4ge1xuICAgICAgICBpZiAoYWN0aW9uPy5jYW5FeGVjdXRlKSBhY3Rpb24uZXhlY3V0ZSgpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgc2V0IHRoZSBpdGVtcyB3aGVuIHJlbmRlciB0aGUgd2lkZ2V0IG9yIHVwZGF0ZSB0aGUgZGF0YVxuICAgICovXG4gICAgY29uc3Qgc2V0dXBDYXJvdXNlID0gaXRlbXMgPT4ge1xuICAgICAgICBsZXQgbmV3RGF0YSA9IGl0ZW1zLm1hcCgoaXRlbSwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjb21tb25DbGFzc2VzLml0ZW19ICR7XG4gICAgICAgICAgICAgICAgICAgIGlkeCA9PT0gMCA/IGFjdGl2ZVNsaWRlQ2xhc3Nlcy5maXJzdF9pdGVtICsgXCIgXCIgKyBjb21tb25DbGFzc2VzLmFjdGl2ZSA6IFwiXCJcbiAgICAgICAgICAgICAgICB9ICR7aWR4ID09PSBwcm9wcy5kYXRhLml0ZW1zLmxlbmd0aCAtIDEgPyBhY3RpdmVTbGlkZUNsYXNzZXMubGFzdF9pdGVtIDogXCJcIn1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jb250ZW50LmdldChpdGVtKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKTtcblxuICAgICAgICBzZXROdW1iZXJPZkFsbEl0ZW1zKG5ld0RhdGEubGVuZ3RoIC0gMSk7XG4gICAgICAgIHNldF9jYXJvdXNlbF9pdGVtcyhuZXdEYXRhKTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gVGhpcyBjb25kaXRpb24gaXMgdG8gcHJldmVudCByZW5kZXIgdGhlIGNhcm91c2VsIGJlZm9yZSBnZXQgdGhlIGl0ZW1zIFwiVGhpcyBoYXBwZW5zIGF0IHRoZSBmaXJzdCB3aWRnZXQgcmVuZGVyXCJcbiAgICAgICAgaWYgKHByb3BzLmRhdGE/LnN0YXR1cyA9PT0gXCJhdmFpbGFibGVcIikge1xuICAgICAgICAgICAgc2V0UmVuZGVyQ2Fyb3VzZWwodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbY2Fyb3VzZWxfaXRlbXNdKTtcblxuICAgIC8qXG4gICAgICB3aGVuIGdldHRpbmcgdGhlIGl0ZW0gb3IgdXBkYXRlZCBpdCBzZXQgdGhlIGNhcm91c2VsIGl0ZW1zIFxuICAgICovXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLmRhdGE/LnN0YXR1cyA9PT0gXCJhdmFpbGFibGVcIikge1xuICAgICAgICAgICAgc2V0UmVuZGVyQ2Fyb3VzZWwoZmFsc2UpO1xuICAgICAgICAgICAgc2V0Q3VycmVudEFjdGl2ZUlkeCgwKTtcbiAgICAgICAgICAgIHNldHVwQ2Fyb3VzZShwcm9wcy5kYXRhLml0ZW1zKTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9wcy5kYXRhPy5pdGVtc10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gc2V0IGEgdW5pcXVlIGNsYXNzIGluIGNhc2Ugb2YgdXNpbmcgdHdvIGRpZmZlcmVudCBjYXJvdXNlbCBpbnN0YW5jZXMgaW4gdGhlIHNhbWUgZG9jdW1lbnRcbiAgICAgICAgc2V0VW5pcXVlQ2xhc3MoXCJhLVwiICsgdXVpZHY0KCkpO1xuICAgIH0sIFtdKTtcblxuICAgIC8qXG4gICAgICAgIHNldCB0aGUgcmVzcG9uc2l2ZSBvYmplY3QgYWZ0ZXIgaW5pdGlhbGl6ZSB0aGUgY29udGFpbmVyIHNvIGl0IHRha2UgdGhlIGNvcnJlY3QgZGltZW5zaW9uc1xuICAgICovXG4gICAgY29uc3QgY2Fyb3VzZWxDb250YWluZXIgPSB1c2VDYWxsYmFjayhub2RlID0+IHtcbiAgICAgICAgaWYgKG5vZGUpIHNldFJlc3BvbnNpdmUoeyAuLi5wcm9wcy5kZWZhdWx0UmVzcG9uc2l2ZSB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gY2Fyb3VzZWxfaXRlbXM/Lmxlbmd0aCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FjdGl2ZVNsaWRlQ2xhc3Nlcy5hY3RpdmVfc2xpZGVfY29udGFpbmVyfSByZWY9e2Nhcm91c2VsQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXthY3RpdmVTbGlkZUNsYXNzZXMucHJldl9idG59IG9uQ2xpY2s9e3ByZXZDbGlja2VkfT48L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbdW5pcXVlQ2xhc3MsIGFjdGl2ZVNsaWRlQ2xhc3Nlcy5hY3RpdmVfc2xpZGVfd3JhcHBlcl0uam9pbihcIiBcIil9PlxuICAgICAgICAgICAgICAgIHtyZXNwb25zaXZlICYmIHJlbmRlckNhcm91c2VsICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEFsaWNlQ2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgJ3JlYWN0LWFsaWNlLWNhcm91c2VsJyBhbGwgbWV0aG9kIGFuZCBwcm9wZXJ0aWVzIHNvIHdlIGNhbiBvdmVycmlkZSBkZWZhdWx0IG5leHQgYW5kIHByZXZpb3VzIGJ1dHRvbnMgYmVoYXZpb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWwgPT4gc2V0Q2Fyb3VzZWxQcm9wZXJ0aWVzKGVsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtjYXJvdXNlbF9pdGVtc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5PXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVCdXR0b25zQ29udHJvbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRG90c0NvbnRyb2xzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2luZyB0aGUgYW5pbWF0aW9uIER1cmF0aW9uIG1vcmUgdGhhbiAxMDAgd2lsbCBjcmFzaCB0aGUgc2xpZGluZyBpbiB0aGUgY2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uPXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZE5hdmlnYXRpb249e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VUcmFja2luZz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaFRyYWNraW5nPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5pdGlhbGl6ZWQ9e29uQ2Fyb3VzZWxJbml0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZXNpemVkPXtvbkNhcm91c2VsUmVzaXplfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXthY3RpdmVTbGlkZUNsYXNzZXMubmV4dF9idG59IG9uQ2xpY2s9e25leHRDbGlja2VkfT48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbW1vbkNsYXNzZXMubXVsdGlfZW1wdHlfY29udGFpbmVyfT48L2Rpdj5cbiAgICApO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi91aS9NdWx0aUNhcm91c2VsLmNzc1wiO1xuaW1wb3J0IE5vcm1hbENhcm91c2VsIGZyb20gXCIuL2NvbXBvbmVudHMvTm9ybWFsQ2Fyb3VzZWxcIjtcbmltcG9ydCBBY3RpdmVTbGlkZUNhcm91c2VsIGZyb20gXCIuL2NvbXBvbmVudHMvQWN0aXZlU2xpZGVDYXJvdXNlbFwiO1xuaW1wb3J0IHsgY29tbW9uQ2xhc3NlcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvaGVscGVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBNdWx0aUNhcm91c2VsKHByb3BzKSB7XG4gICAgLypcbiAgICAgZGVmYXVsdCB1bmRlZmluZWQgLSBUaGUga2V5IGlzIHRoZSBicmVha3BvaW50XG4gICAgIChkZWZhdWx0IGlzIHRoZSByZXN1bHQgb2Y6ICgpID0+IHdpbmRvdy5pbm5lcldpZHRoIG9yIGlubmVyV2lkdGggcHJvcGVydHkgaWYgdGhlIGxhc3QgcHJlc2VudGVkKS5cbiAgICAqL1xuICAgIGNvbnN0IFtkZWZhdWx0UmVzcG9uc2l2ZSwgc2V0RGVmYXVsdFJlc3BvbnNpdmVdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXREZWZhdWx0UmVzcG9uc2l2ZSh7XG4gICAgICAgICAgICAwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IHByb3BzLml0ZW1zNDI1ID4gMCA/IHByb3BzLml0ZW1zNDI1IDogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDY0MDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiBwcm9wcy5pdGVtczY0MCA+IDAgPyBwcm9wcy5pdGVtczY0MCA6IDJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxMDI0OiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IHByb3BzLml0ZW1zMTAyNCA+IDAgPyBwcm9wcy5pdGVtczEwMjQgOiAzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMTIwMDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiBwcm9wcy5pdGVtczEyMDAgPiAwID8gcHJvcHMuaXRlbXMxMjAwIDogNFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDE2MDA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogcHJvcHMuaXRlbXMxNjAwID4gMCA/IHByb3BzLml0ZW1zMTYwMCA6IDVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAyNTYwOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IHByb3BzLml0ZW1zMjU2MCA+IDAgPyBwcm9wcy5pdGVtczI1NjAgOiA2XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7ZGVmYXVsdFJlc3BvbnNpdmUgPyAoXG4gICAgICAgICAgICAgICAgKChwcm9wcy5jYXJvdXNlbFR5cGUgPT09IFwibm9ybWFsXCIgfHwgcHJvcHMuY2Fyb3VzZWxUeXBlID09PSBcImFjdGl2ZVwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxOb3JtYWxDYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWxUeXBlPXtwcm9wcy5jYXJvdXNlbFR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtwcm9wcy5kYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtwcm9wcy5hY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtwcm9wcy5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU9e3Byb3BzLmluZmluaXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXk9e3Byb3BzLmF1dG9QbGF5fVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXlEaXJlY3Rpb249e3Byb3BzLmF1dG9QbGF5RGlyZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXlDb250cm9scz17cHJvcHMuYXV0b1BsYXlDb250cm9sc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVCdXR0b25zQ29udHJvbHM9e3Byb3BzLmRpc2FibGVCdXR0b25zQ29udHJvbHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRG90c0NvbnRyb2xzPXtwcm9wcy5kaXNhYmxlRG90c0NvbnRyb2xzfVxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb249e3Byb3BzLmFuaW1hdGlvbkR1cmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uVHlwZT17cHJvcHMuYW5pbWF0aW9uVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkTmF2aWdhdGlvbj17cHJvcHMua2V5Ym9hcmROYXZpZ2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VUcmFja2luZz17cHJvcHMubW91c2VUcmFja2luZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoVHJhY2tpbmc9e3Byb3BzLnRvdWNoVHJhY2tpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UmVzcG9uc2l2ZT17ZGVmYXVsdFJlc3BvbnNpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtc0JlaGF2aW9yPXtwcm9wcy5pdGVtc0JlaGF2aW9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxlPXtwcm9wcy5idXR0b25zU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSkgfHxcbiAgICAgICAgICAgICAgICAocHJvcHMuY2Fyb3VzZWxUeXBlID09PSBcInNsaWRlXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QWN0aXZlU2xpZGVDYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17cHJvcHMuZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17cHJvcHMuYWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17cHJvcHMuY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRSZXNwb25zaXZlPXtkZWZhdWx0UmVzcG9uc2l2ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKSB8fCAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21tb25DbGFzc2VzLmVycm9yfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGluaXRpYWxpemluZyB0aGUgQ2Fyb3VzZWw8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbW1vbkNsYXNzZXMubG9hZGluZ30+XG4gICAgICAgICAgICAgICAgICAgIDxwPkxvYWRpbmcgLi4uPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInR5cGVzIiwiVHJhY2VEaXJlY3Rpb25LZXkiLCJEaXJlY3Rpb24iLCJBeGlzIiwiY2FsY3VsYXRlRGlyZWN0aW9uXzEiLCJjYWxjdWxhdGVEaXJlY3Rpb24iLCJfdHlwZXMiLCJyZXF1aXJlIiwidHJhY2UiLCJkaXJlY3Rpb24iLCJuZWdhdGl2ZSIsIk5FR0FUSVZFIiwicG9zaXRpdmUiLCJQT1NJVElWRSIsImN1cnJlbnQiLCJsZW5ndGgiLCJwcmV2aW91cyIsImV2ZXJ5IiwiaSIsIk5PTkUiLCJjb21tb24iLCJnZXREaXJlY3Rpb25LZXkiLCJvYmplY3QiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJrZXkiLCJrZXlzIiwidG9TdHJpbmciLCJnZXREaXJlY3Rpb25WYWx1ZSIsInZhbHVlcyIsImdldERpZmZlcmVuY2UiLCJ4IiwieSIsIk1hdGgiLCJhYnMiLCJyZXNvbHZlQXhpc0RpcmVjdGlvbiIsImF4aXMiLCJMRUZUIiwiUklHSFQiLCJZIiwiQk9UVE9NIiwiVE9QIiwiY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGFfMSIsImNhbGN1bGF0ZURpcmVjdGlvbkRlbHRhIiwiX2NvbW1vbiIsInRyYWNlRGlyZWN0aW9ucyIsImRlbHRhIiwiY3VycmVudEtleSIsImN1cnJlbnRWYWx1ZSIsInByZXYiLCJwcmV2S2V5IiwicHJldlZhbHVlIiwiZGlmZmVyZW5jZSIsImNhbGN1bGF0ZUR1cmF0aW9uXzEiLCJjYWxjdWxhdGVEdXJhdGlvbiIsInByZXZUaW1lIiwibmV4dFRpbWUiLCJjYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbl8xIiwiY2FsY3VsYXRlTW92aW5nUG9zaXRpb24iLCJlIiwidG91Y2hlcyIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJ1cGRhdGVUcmFjZV8xIiwidXBkYXRlVHJhY2UiLCJsYXN0IiwicHVzaCIsImNhbGN1bGF0ZVRyYWNlRGlyZWN0aW9uc18xIiwiY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwidGlja3MiLCJ0aWNrIiwiY3VycmVudERpcmVjdGlvbiIsInNsaWNlIiwicmVzb2x2ZURpcmVjdGlvbl8xIiwicmVzb2x2ZURpcmVjdGlvbiIsIl9jYWxjdWxhdGVEaXJlY3Rpb24iLCJfY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zIiwiX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhIiwiWCIsImRpcmVjdGlvbkRlbHRhIiwiZGlyZWN0aW9ucyIsIl9kaXJlY3Rpb24iLCJjYWxjdWxhdGVWZWxvY2l0eV8xIiwiY2FsY3VsYXRlVmVsb2NpdHkiLCJ0aW1lIiwibWFnbml0dWRlIiwic3FydCIsImNhbGN1bGF0ZVBvc2l0aW9uXzEiLCJjYWxjdWxhdGVQb3NpdGlvbiIsIl91cGRhdGVUcmFjZSIsIl9yZXNvbHZlRGlyZWN0aW9uIiwiX2NhbGN1bGF0ZUR1cmF0aW9uIiwiX2NhbGN1bGF0ZVZlbG9jaXR5Iiwic3RhdGUiLCJvcHRpb25zIiwic3RhcnQiLCJ0cmFjZVgiLCJ0cmFjZVkiLCJyb3RhdGVQb3NpdGlvbiIsImRlbHRhWCIsImRlbHRhWSIsImFic1giLCJhYnNZIiwiZGlyZWN0aW9uWCIsImRpcmVjdGlvblkiLCJkdXJhdGlvbiIsIkRhdGUiLCJub3ciLCJ2ZWxvY2l0eSIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsImNoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXNfMSIsImNoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXMiLCJCb29sZWFuIiwiY3JlYXRlT3B0aW9uc18xIiwiY3JlYXRlT3B0aW9ucyIsInByb3h5IiwiZ2V0IiwiaXNQYXNzaXZlU3VwcG9ydGVkIiwiY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWRfMSIsImNoZWNrSXNQYXNzaXZlU3VwcG9ydGVkIiwiX2NyZWF0ZU9wdGlvbnMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibm9vcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlcnIiLCJjaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWRfMSIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkIiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJnZXRJbml0aWFsU3RhdGVfMSIsIm93bktleXMiLCJlbnVtZXJhYmxlT25seSIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbHMiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJzb3VyY2UiLCJmb3JFYWNoIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJnZXRJbml0aWFsU3RhdGUiLCJpc1N3aXBpbmciLCJnZXRJbml0aWFsUHJvcHNfMSIsImdldEluaXRpYWxQcm9wcyIsInByb3BzIiwiZWxlbWVudCIsInJvdGF0aW9uQW5nbGUiLCJtb3VzZVRyYWNraW5nRW5hYmxlZCIsInRvdWNoVHJhY2tpbmdFbmFibGVkIiwicHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudCIsInByZXZlbnRUcmFja2luZ09uTW91c2VsZWF2ZSIsImdldE9wdGlvbnNfMSIsImdldE9wdGlvbnMiLCJwYXNzaXZlIiwicm90YXRlQnlBbmdsZV8xIiwicm90YXRlQnlBbmdsZSIsInBvc2l0aW9uIiwiYW5nbGUiLCJhbmdsZUluUmFkaWFucyIsIlBJIiwicm90YXRlZFgiLCJjb3MiLCJzaW4iLCJyb3RhdGVkWSIsIl9jYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbiIsIl9jYWxjdWxhdGVQb3NpdGlvbiIsIl9jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzIiwiX2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkIiwiX2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCIsIl9nZXRJbml0aWFsU3RhdGUiLCJfZ2V0SW5pdGlhbFByb3BzIiwiX2dldE9wdGlvbnMiLCJfcm90YXRlQnlBbmdsZSIsIl9leHBvcnROYW1lcyIsIlV0aWxzIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJub2RlSW50ZXJvcCIsIldlYWtNYXAiLCJjYWNoZUJhYmVsSW50ZXJvcCIsImNhY2hlTm9kZUludGVyb3AiLCJfX2VzTW9kdWxlIiwiY2FjaGUiLCJoYXMiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJkZXNjIiwic2V0IiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiZGVzY3JpcHRvciIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIlZhbmlsbGFTd2lwZSIsImhhbmRsZVN3aXBlU3RhcnQiLCJiaW5kIiwiaGFuZGxlU3dpcGVNb3ZlIiwiaGFuZGxlU3dpcGVFbmQiLCJoYW5kbGVNb3VzZURvd24iLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVNb3VzZVVwIiwiaGFuZGxlTW91c2VMZWF2ZSIsImluaXQiLCJzZXR1cFRvdWNoTGlzdGVuZXJzIiwic2V0dXBNb3VzZUxpc3RlbmVycyIsInVwZGF0ZSIsInByZXZQcm9wcyIsIm5leHRQcm9wcyIsImFzc2lnbiIsImRlc3Ryb3kiLCJjbGVhbnVwTW91c2VMaXN0ZW5lcnMiLCJjbGVhbnVwVG91Y2hMaXN0ZW5lcnMiLCJfdGhpcyRwcm9wcyIsImxpc3RlbmVyIiwiX3RoaXMkcHJvcHMyIiwiX3RoaXMkcHJvcHMzIiwiZ2V0RXZlbnREYXRhIiwibW92aW5nUG9zaXRpb24iLCJfVXRpbHMkcm90YXRlQnlBbmdsZSIsIl90aGlzJHN0YXRlIiwiX3RoaXMkZ2V0RXZlbnREYXRhIiwiX3RoaXMkcHJvcHM0Iiwib25Td2lwZVN0YXJ0Iiwib25Td2lwaW5nIiwiY2FuY2VsYWJsZSIsInByZXZlbnREZWZhdWx0IiwiTnVtYmVyIiwiX3RoaXMkcHJvcHM1Iiwib25Td2lwZWQiLCJvblRhcCIsIl9wb3NpdGlvbiIsImlzVG91Y2hFdmVudHNTdXBwb3J0ZWQiLCJBQ1RJT04iLCJJTklUIiwiUkVTSVpFIiwiVVBEQVRFIiwiRXZlbnRUeXBlIiwiRkFERU9VVCIsIlNMSURFIiwiQW5pbWF0aW9uVHlwZSIsIkRFRkFVTFQiLCJBTEwiLCJBdXRvUGxheVN0cmF0ZWd5IiwiQUxURVJOQVRFIiwiUkVTUE9OU0lWRSIsIkNvbnRyb2xzU3RyYXRlZ3kiLCJSVEwiLCJMVFIiLCJBdXRvcGxheURpcmVjdGlvbiIsIkFOSU1BVEVEIiwiUk9PVCIsIldSQVBQRVIiLCJTVEFHRSIsIlNUQUdFX0lURU0iLCJET1RTIiwiRE9UU19JVEVNIiwiUExBWV9CVE4iLCJQTEFZX0JUTl9JVEVNIiwiUExBWV9CVE5fV1JBUFBFUiIsIlNMSURFX0lORk8iLCJTTElERV9JTkZPX0lURU0iLCJCVVRUT05fUFJFViIsIkJVVFRPTl9QUkVWX1dSQVBQRVIiLCJCVVRUT05fUFJFVl9JVEVNIiwiQlVUVE9OX05FWFQiLCJCVVRUT05fTkVYVF9XUkFQUEVSIiwiQlVUVE9OX05FWFRfSVRFTSIsIkNsYXNzbmFtZXMiLCJBQ1RJVkUiLCJJTkFDVElWRSIsIkNMT05FRCIsIkNVU1RPTSIsIlBBVVNFIiwiU0VQQVJBVE9SIiwiU1NSIiwiVEFSR0VUIiwiTW9kaWZpZXJzIiwidHlwZXNfMSIsImFjdGl2ZUluZGV4IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25FYXNpbmdGdW5jdGlvbiIsImFuaW1hdGlvblR5cGUiLCJhdXRvSGVpZ2h0IiwiYXV0b1dpZHRoIiwiYXV0b1BsYXkiLCJhdXRvUGxheUNvbnRyb2xzIiwiYXV0b1BsYXlEaXJlY3Rpb24iLCJhdXRvUGxheUludGVydmFsIiwiYXV0b1BsYXlTdHJhdGVneSIsImNoaWxkcmVuIiwiY29udHJvbHNTdHJhdGVneSIsImRpc2FibGVCdXR0b25zQ29udHJvbHMiLCJkaXNhYmxlRG90c0NvbnRyb2xzIiwiZGlzYWJsZVNsaWRlSW5mbyIsImluZmluaXRlIiwiaW5uZXJXaWR0aCIsIml0ZW1zIiwia2V5Ym9hcmROYXZpZ2F0aW9uIiwibW91c2VUcmFja2luZyIsIm5hbWUiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInJlc3BvbnNpdmUiLCJzd2lwZURlbHRhIiwic3dpcGVFeHRyYVBhZGRpbmciLCJzc3JTaWxlbnRNb2RlIiwidG91Y2hUcmFja2luZyIsInRvdWNoTW92ZURlZmF1bHRFdmVudHMiLCJvbkluaXRpYWxpemVkIiwib25SZXNpemVkIiwib25SZXNpemVFdmVudCIsIm9uU2xpZGVDaGFuZ2UiLCJvblNsaWRlQ2hhbmdlZCIsIl9fYXNzaWduIiwibyIsInQiLCJyIiwicyIsIm1hcFBhcnRpYWxDb29yZHMiLCJtYXAiLCJ3aWR0aCIsIm1hcFBvc2l0aW9uQ29vcmRzIiwiZ2V0U2hpZnRJbmRleCIsImdldFN0YXJ0SW5kZXgiLCJnZXRBY3RpdmVJbmRleCIsInN0YXJ0SW5kZXgiLCJpdGVtc0NvdW50IiwiZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4Iiwic2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4Iiwic2hvdWxkQ2FuY2VsU2xpZGVBbmltYXRpb24iLCJnZXRTd2lwZUxpbWl0TWluIiwiaXRlbXNPZmZzZXQiLCJ0cmFuc2Zvcm1hdGlvblNldCIsIm1pbiIsImdldFN3aXBlTGltaXRNYXgiLCJuIiwiaXRlbXNJblNsaWRlIiwiZ2V0SXRlbUNvb3JkcyIsInNob3VsZFJlY2FsY3VsYXRlU3dpcGVQb3NpdGlvbiIsImdldElzTGVmdERpcmVjdGlvbiIsImdldFN3aXBlU2hpZnRWYWx1ZSIsImdldFRyYW5zZm9ybWF0aW9uSXRlbUluZGV4IiwiZmluZEluZGV4IiwiZ2V0U3dpcGVUcmFuc2Zvcm1hdGlvbkN1cnNvciIsImdldFN3aXBlVG91Y2hlbmRQb3NpdGlvbiIsImlzU3RhZ2VDb250ZW50UGFydGlhbCIsInN3aXBlQWxsb3dlZFBvc2l0aW9uTWF4IiwiZ2V0U3dpcGVUb3VjaGVuZEluZGV4IiwiZCIsImEiLCJ0cmFuc2xhdGUzZCIsImdldEZhZGVvdXRBbmltYXRpb25JbmRleCIsImdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbiIsInN0YWdlV2lkdGgiLCJpc1ZlcnRpY2FsVG91Y2htb3ZlRGV0ZWN0ZWQiLCJjb21tb25fMSIsIm1hcHBlcnNfMSIsIm1hdGhfMSIsImdldFNsaWRlcyIsImdldEl0ZW1zQ291bnQiLCJnZXRJdGVtc09mZnNldCIsImNyZWF0ZUNsb25lcyIsImdldEl0ZW1zSW5TbGlkZSIsInVuc2hpZnQiLCJjb25jYXQiLCJpc0VsZW1lbnQiLCJFbGVtZW50IiwiSFRNTERvY3VtZW50IiwiY3JlYXRlQXV0b3dpZHRoVHJhbnNmb3JtYXRpb25TZXQiLCJBcnJheSIsImZyb20iLCJyZWR1Y2UiLCJnZXRFbGVtZW50RGltZW5zaW9ucyIsImZpcnN0Q2hpbGQiLCJjb29yZHMiLCJjb250ZW50IiwicGFydGlhbCIsImNyZWF0ZURlZmF1bHRUcmFuc2Zvcm1hdGlvblNldCIsImdldEl0ZW1XaWR0aCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsImdldEF1dG9oZWlnaHRQcm9wZXJ0eSIsImdldEVsZW1lbnRDdXJzb3IiLCJnZXRFbGVtZW50Rmlyc3RDaGlsZCIsImdldENvbXB1dGVkU3R5bGUiLCJwYXJzZUZsb2F0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiY2VpbCIsIm9mZnNldEhlaWdodCIsInNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50IiwiYW5pbWF0ZSIsInN0eWxlIiwidHJhbnNpdGlvbiIsInRyYW5zZm9ybSIsImdldFJlbmRlcldyYXBwZXJTdHlsZXMiLCJnZXRUcmFuc2l0aW9uUHJvcGVydHkiLCJnZXRSZW5kZXJTdGFnZVN0eWxlcyIsImdldFJlbmRlclN0YWdlSXRlbVN0eWxlcyIsImZhZGVvdXRBbmltYXRpb25JbmRleCIsImZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbiIsImZhZGVvdXRBbmltYXRpb25Qcm9jZXNzaW5nIiwiZ2V0VHJhbnNsYXRlM2RQcm9wZXJ0eSIsImdldFRvdWNobW92ZVRyYW5zbGF0ZVBvc2l0aW9uIiwiZmxvb3IiLCJnZXRUcmFuc2xhdGVYUHJvcGVydHkiLCJnZXRUcmFuc2Zvcm1NYXRyaXgiLCJtYXRjaCIsImVsZW1lbnRzXzEiLCJjYW5Vc2VET00iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb25jYXRDbGFzc25hbWVzIiwiam9pbiIsImdldElzU3RhZ2VDb250ZW50UGFydGlhbCIsIml0ZW1zRml0IiwiY2FsY3VsYXRlSW5pdGlhbFN0YXRlIiwibCIsIm0iLCJjIiwidSIsImYiLCJnIiwiSSIsIlMiLCJwIiwidiIsImNsb25lcyIsInN0YWdlQ29udGVudFdpZHRoIiwiaW5pdGlhbFN0YWdlSGVpZ2h0IiwiaXNBdXRvUGxheWluZyIsImlzQXV0b1BsYXlDYW5jZWxlZE9uQWN0aW9uIiwic3dpcGVMaW1pdE1pbiIsInN3aXBlTGltaXRNYXgiLCJzd2lwZVNoaWZ0VmFsdWUiLCJjYW5Vc2VEb20iLCJnZXRSZW5kZXJTdGFnZUl0ZW1DbGFzc2VzIiwiaXNBY3RpdmVJdGVtIiwiaXNDbG9uZWRJdGVtIiwiaXNUYXJnZXRJdGVtIiwiZGVib3VuY2UiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZGVidWciLCJjb25zb2xlIiwiZ2V0QWN0aXZlU2xpZGVJbmRleCIsImdldFNsaWRlSW5kZXhGb3JOb25NdWx0aXBsZUl0ZW1zIiwiZ2V0U2xpZGVJbmRleEZvck11bHRpcGxlSXRlbXMiLCJnZXRBY3RpdmVTbGlkZURvdHNMZW5ndGgiLCJnZXRTbGlkZUluZm8iLCJpdGVtIiwiZ2V0U2xpZGVJdGVtSW5mbyIsImlzUHJldlNsaWRlRGlzYWJsZWQiLCJpc05leHRTbGlkZURpc2FibGVkIiwic2hvdWxkRGlzYWJsZUNvbnRyb2xzIiwiaXNTdHJhdGVneSIsInNob3VsZERpc2FibGVEb3RzIiwic2hvdWxkRGlzYWJsZUJ1dHRvbnMiLCJpbmNsdWRlcyIsImhhc0RvdEZvckVhY2hTbGlkZSIsImdldERvdHNOYXZpZ2F0aW9uTGVuZ3RoIiwiY2hlY2tJc1RoZUxhc3REb3RJbmRleCIsImdldEl0ZW1JbmRleEZvckRvdE5hdmlnYXRpb24iLCJzaG91bGRDYW5jZWxBdXRvUGxheU9uQWN0aW9uIiwic2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkhvdmVyIiwiX19jcmVhdGVCaW5kaW5nIiwiY3JlYXRlIiwiX19leHBvcnRTdGFyIiwiX19pbXBvcnREZWZhdWx0IiwiZGVmYXVsdCIsInJlYWN0XzEiLCJ1dGlsc18xIiwiU2xpZGVJbmZvIiwicmVuZGVyU2xpZGVJbmZvIiwiY2xhc3NOYW1lIiwiU3RhZ2VJdGVtIiwic3R5bGVzIiwiRG90c05hdmlnYXRpb24iLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwicmVuZGVyRG90c0l0ZW0iLCJfIiwiRCIsImlzQWN0aXZlIiwiUGxheVBhdXNlQnV0dG9uIiwiaXNQbGF5aW5nIiwicmVuZGVyUGxheVBhdXNlQnV0dG9uIiwiUHJldk5leHRCdXR0b24iLCJpc0Rpc2FibGVkIiwicmVuZGVyUHJldkJ1dHRvbiIsInJlbmRlck5leHRCdXR0b24iLCJTbGlkZUluZm9fMSIsIlN0YWdlSXRlbV8xIiwiRG90c05hdmlnYXRpb25fMSIsIlBsYXlQYXVzZUJ1dHRvbl8xIiwiUHJldk5leHRCdXR0b25fMSIsIl9fZXh0ZW5kcyIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiU3RyaW5nIiwiX19zZXRNb2R1bGVEZWZhdWx0IiwiX19pbXBvcnRTdGFyIiwiX19hd2FpdGVyIiwiUHJvbWlzZSIsIm5leHQiLCJ0aHJvdyIsImRvbmUiLCJ0aGVuIiwiX19nZW5lcmF0b3IiLCJsYWJlbCIsInNlbnQiLCJ0cnlzIiwib3BzIiwicmV0dXJuIiwicG9wIiwidmFuaWxsYV9zd2lwZV8xIiwiZGVmYXVsdFByb3BzXzEiLCJWaWV3cyIsIkFsaWNlQ2Fyb3VzZWwiLCJzd2lwZUxpc3RlbmVyIiwiX2hhbmRsZUtleWJvYXJkRXZlbnRzIiwiY29kZSIsIl9oYW5kbGVQbGF5UGF1c2VUb2dnbGUiLCJzbGlkZVByZXYiLCJzbGlkZU5leHQiLCJfaGFuZGxlQmVmb3JlU2xpZGVFbmQiLCJfaGFuZGxlVXBkYXRlU2xpZGVQb3NpdGlvbiIsInNldFN0YXRlIiwiX2hhbmRsZVNsaWRlQ2hhbmdlZCIsIl9oYW5kbGVNb3VzZUVudGVyIiwiaXNIb3ZlcmVkIiwiX2hhbmRsZVBhdXNlIiwiX2hhbmRsZU1vdXNlTGVhdmUiLCJfaGFuZGxlUGxheSIsIl9jbGVhckF1dG9QbGF5VGltZW91dCIsImhhc1VzZXJBY3Rpb24iLCJfc2V0Um9vdENvbXBvbmVudFJlZiIsInJvb3RFbGVtZW50IiwiX3NldFN0YWdlQ29tcG9uZW50UmVmIiwic3RhZ2VDb21wb25lbnQiLCJfcmVuZGVyU3RhZ2VJdGVtIiwiX3JlbmRlclNsaWRlSW5mbyIsImlzQW5pbWF0aW9uRGlzYWJsZWQiLCJpc1RvdWNoTW92ZVByb2Nlc3NTdGFydGVkIiwiY2FuY2VsVG91Y2hBbmltYXRpb25zIiwicm9vdENvbXBvbmVudERpbWVuc2lvbnMiLCJzdGFydFRvdWNobW92ZVBvc2l0aW9uIiwic2xpZGVUbyIsIl9oYW5kbGVUb3VjaG1vdmUiLCJfaGFuZGxlVG91Y2hlbmQiLCJfaGFuZGxlRG90Q2xpY2siLCJfaGFuZGxlUmVzaXplIiwiX2hhbmRsZVJlc2l6ZURlYm91bmNlZCIsIl9jYW5jZWxSZXNpemVEZWJvdW5jZWQiLCJjb21wb25lbnREaWRNb3VudCIsIl9zZXRJbml0aWFsU3RhdGUiLCJfYWRkRXZlbnRMaXN0ZW5lcnMiLCJfc2V0dXBTd2lwZUhhbmRsZXJzIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiaCIsIl91cGRhdGVDb21wb25lbnQiLCJfdXBkYXRlU3dpcGVQcm9wcyIsIl91cGRhdGVFdmVudExpc3RlbmVycyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiX2NhbmNlbFRpbWVvdXRBbmltYXRpb25zIiwiX3JlbW92ZUV2ZW50TGlzdGVuZXJzIiwic2xpZGUiLCJ0eXBlIiwiaXNGYWRlb3V0QW5pbWF0aW9uQWxsb3dlZCIsIl9oYW5kbGVTbGlkZVRvIiwiZXZlbnRUeXBlIiwiaXNUcnVzdGVkIiwiX2hhbmRsZVJlc2l6ZWQiLCJfc2V0VG91Y2htb3ZlUG9zaXRpb24iLCJfaGFuZGxlU2xpZGVDaGFuZ2UiLCJ0b3VjaG1vdmVQb3NpdGlvbiIsIl9jbGVhclRvdWNobW92ZVBvc2l0aW9uIiwiX2hhbmRsZUJlZm9yZVRvdWNoRW5kIiwidG91Y2hFbmRUaW1lb3V0SWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzbGlkZUVuZFRpbWVvdXRJZCIsImV2ZW50T2JqZWN0IiwiX3NldEF1dG9QbGF5SW50ZXJ2YWwiLCJfY2xlYXJTbGlkZUVuZFRpbWVvdXQiLCJjbGVhclRvdWNoZW5kVGltZW91dCIsImF1dG9QbGF5VGltZW91dElkIiwiX3JlbmRlckRvdHNOYXZpZ2F0aW9uIiwiX3JlbmRlclByZXZCdXR0b24iLCJfcmVuZGVyTmV4dEJ1dHRvbiIsIl9yZW5kZXJQbGF5UGF1c2VCdXR0b24iLCJyZW5kZXIiLCJyZWYiLCJkZWZhdWx0UHJvcHMiLCJQdXJlQ29tcG9uZW50IiwiZ2V0UmFuZG9tVmFsdWVzIiwicm5kczgiLCJVaW50OEFycmF5Iiwicm5nIiwiY3J5cHRvIiwiRXJyb3IiLCJ2YWxpZGF0ZSIsInV1aWQiLCJSRUdFWCIsInRlc3QiLCJieXRlVG9IZXgiLCJ1bnNhZmVTdHJpbmdpZnkiLCJhcnIiLCJvZmZzZXQiLCJ0b0xvd2VyQ2FzZSIsInBhcnNlIiwicGFyc2VJbnQiLCJzdHJpbmdUb0J5dGVzIiwic3RyIiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJieXRlcyIsImNoYXJDb2RlQXQiLCJETlMiLCJVUkwiLCJ2MzUiLCJ2ZXJzaW9uIiwiaGFzaGZ1bmMiLCJnZW5lcmF0ZVVVSUQiLCJuYW1lc3BhY2UiLCJidWYiLCJfbmFtZXNwYWNlIiwibWQ1IiwibXNnIiwibWQ1VG9IZXhFbmNvZGVkQXJyYXkiLCJ3b3Jkc1RvTWQ1IiwiYnl0ZXNUb1dvcmRzIiwiaW5wdXQiLCJvdXRwdXQiLCJsZW5ndGgzMiIsImhleFRhYiIsImhleCIsImNoYXJBdCIsImdldE91dHB1dExlbmd0aCIsImlucHV0TGVuZ3RoOCIsImxlbiIsImIiLCJvbGRhIiwib2xkYiIsIm9sZGMiLCJvbGRkIiwibWQ1ZmYiLCJtZDVnZyIsIm1kNWhoIiwibWQ1aWkiLCJzYWZlQWRkIiwibGVuZ3RoOCIsIlVpbnQzMkFycmF5IiwibHN3IiwibXN3IiwiYml0Um90YXRlTGVmdCIsIm51bSIsImNudCIsIm1kNWNtbiIsInEiLCJyYW5kb21VVUlEIiwidjQiLCJuYXRpdmUiLCJybmRzIiwicmFuZG9tIiwieiIsIlJPVEwiLCJzaGExIiwiSyIsIkgiLCJpc0FycmF5IiwiTiIsIk0iLCJqIiwicG93IiwiVyIsIlQiLCJnZXRSZXF1aXJlZEl0ZW1zIiwic2NyZWVXaWR0aCIsInN0YXR1c0xpc3QiLCJyZXNldCIsImdvTGFzdCIsImNsYXNzZXNBY3Rpb24iLCJhZGQiLCJyZW1vdmUiLCJjb21tb25DbGFzc2VzIiwibXVsdGlfY29udGFpbmVyIiwibXVsdGlfZW1wdHlfY29udGFpbmVyIiwiYWN0aXZlIiwiZXh0cmFfaXRlbSIsIm5vX2RvdHMiLCJlcnJvciIsImxvYWRpbmciLCJub3JtYWxDYXJvdXNlbENsYXNzZXMiLCJub3JtYWxfY29udGFpbmVyIiwibm9ybWFsX2l0ZW0iLCJub3JtYWxfc3R5bGVkX2J0biIsImFjdGl2ZUNsaWNrQ2xhc3NlcyIsImFjdGl2ZV9jbGlja19jb250YWluZXIiLCJhY3RpdmVfY2xpY2tfaXRlbSIsImFjdGl2ZV9jbGlja19zdHlsZWRfYnRuIiwiYWN0aXZlU2xpZGVDbGFzc2VzIiwiYWN0aXZlX3NsaWRlX2NvbnRhaW5lciIsImFjdGl2ZV9zbGlkZV93cmFwcGVyIiwiZmlyc3RfaXRlbSIsImxhc3RfaXRlbSIsInByZXZfYnRuIiwibmV4dF9idG4iLCJOb3JtYWxDYXJvdXNlbCIsImNhcm91c2VsUGFyZW50IiwidXNlUmVmIiwicmVuZGVyQ2Fyb3VzZWwiLCJzZXRSZW5kZXJDYXJvdXNlbCIsInVzZVN0YXRlIiwiZGF0YUl0ZW1zIiwic2V0RGF0YUl0ZW1zIiwiY2Fyb3VzZWxJdGVtcyIsInNldENhcm91c2VsSXRlbXMiLCJ1bmlxdWVDbGFzcyIsInNldFVuaXF1ZUNsYXNzIiwiY2Fyb3VzZWxJbmZpbml0ZSIsInNldENhcm91c2VsSW5maW5pdGUiLCJzZXRSZXNwb25zaXZlIiwiYWRkT3JSZW1vdmVDbGFzc05hbWUiLCJub2RlIiwiYWN0aW9uIiwiY2xhc3NMaXN0IiwiY2hhbmdlQWN0aXZlQ2xhc3MiLCJnZXRJZHhDbGFzc05hbWUiLCJjbGlja2VkSXRlbSIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsImNsYXNzTmFtZXMiLCJzcGxpdCIsIm9uQ2FyZENsaWNrZWQiLCJjYW5FeGVjdXRlIiwiZXhlY3V0ZSIsImFjdGl2ZU5vZGUiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImlkeENsYXNzIiwiaXRlbVRvU2V0QWN0aXZlIiwiY3JlYXRlQ2Fyb3VzZWxJdGVtcyIsImV4dHJhSXRlbXMiLCJpdGVtc0JlaGF2aW9yIiwiY3VycmVudFJlcXVpcmVkSXRlbXMiLCJkZWZhdWx0UmVzcG9uc2l2ZSIsInNldHVwQ2Fyb3VzZSIsImNhcm91c2VsVHlwZSIsImZpcnN0Q2Fyb3VzZWxJdGVtIiwiY2xpY2siLCJ1c2VFZmZlY3QiLCJkYXRhIiwic3RhdHVzIiwidXVpZHY0IiwicmVzaXplT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiYnV0dG9uc1N0eWxlIiwiQWN0aXZlU2xpZGVDYXJvdXNlbCIsImNhcm91c2VsX2l0ZW1zIiwic2V0X2Nhcm91c2VsX2l0ZW1zIiwiY3VycmVudEFjdGl2ZUlkeCIsInNldEN1cnJlbnRBY3RpdmVJZHgiLCJudW1iZXJPZkRpc3BsYXllZEl0ZW1zIiwic2V0TnVtYmVyT2ZEaXNwbGF5ZWRJdGVtcyIsIm51bWJlck9mQWxsSXRlbXMiLCJzZXROdW1iZXJPZkFsbEl0ZW1zIiwiY2Fyb3VzZWxQcm9wZXJ0aWVzIiwic2V0Q2Fyb3VzZWxQcm9wZXJ0aWVzIiwicmVzZXRTbGlkZXIiLCJzZXRBY3RpdmVDbGFzcyIsInNsaWRlVG9UaGVFbmQiLCJwcmV2Q2xpY2tlZCIsIm5leHRDbGlja2VkIiwicmVtb3ZlQWN0aXZlQ2xhc3MiLCJhbGxJdGVtcyIsIml0ZW1JZHhUb1NldEFjdGl2ZSIsInBhcmVudEVsZW1lbnQiLCJzbGlkZUxlZnRPclJpZ2h0IiwiYWN0aW9uSWR4IiwiZmlyc3RTbGlkZSIsImxhc3RTbGlkZSIsImFjdGlvblRvRmlyZSIsIm9uU2xpZGVDbGlja2VkIiwib25DYXJvdXNlbEluaXQiLCJmaXJzdEl0ZW1BY3Rpb24iLCJvbkNhcm91c2VsUmVzaXplIiwibmV3RGF0YSIsImlkeCIsImNhcm91c2VsQ29udGFpbmVyIiwidXNlQ2FsbGJhY2siLCJlbCIsIk11bHRpQ2Fyb3VzZWwiLCJzZXREZWZhdWx0UmVzcG9uc2l2ZSIsIml0ZW1zNDI1IiwiaXRlbXM2NDAiLCJpdGVtczEwMjQiLCJpdGVtczEyMDAiLCJpdGVtczE2MDAiLCJpdGVtczI1NjAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBRSxZ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QUNDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRUMsV0FBVyxFQUFFLENBQUE7Q0FDcGdCOztDQ2RBLFNBQVNDLEtBQUtBLENBQUNSLElBQUksRUFBRTtDQUNuQixFQUFBLElBQUksQ0FBQ0QsUUFBUSxDQUFDQyxJQUFJLENBQUMsRUFBRTtLQUNuQixNQUFNL1osU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0NBQ2pDLEdBQUE7Q0FFQSxFQUFBLElBQUkrTyxDQUFDLENBQUE7R0FDTCxNQUFN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QjBQLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHalUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUNyQmlVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHem5CLENBQUMsS0FBSyxDQUFDLENBQUE7Q0FDdkIsR0FBQTtDQUVBLEVBQUEsT0FBTyxDQUFDeW5CLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxD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
