'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {};

exports.default = function () {
  var toggles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : toggles;
    var action = arguments[1];

    switch (action.type) {
      case _constants2.default.SET_FEATURE_STATE:
        return _extends({}, state, _defineProperty({}, action.payload.featureKey, action.payload.featureState));
      default:
        return state;
    }
  };
};