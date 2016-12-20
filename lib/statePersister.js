'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var persistFeatureState = function persistFeatureState(featureKey, featureState) {
    var persistedState = JSON.parse(sessionStorage.getItem(_constants2.default.STORE_KEY)) || {};

    persistedState[featureKey] = featureState;

    sessionStorage.setItem(_constants2.default.STORE_KEY, JSON.stringify(persistedState));
};

var retrieveState = function retrieveState() {
    return JSON.parse(sessionStorage.getItem(_constants2.default.STORE_KEY));
};

exports.default = { persistFeatureState: persistFeatureState, retrieveState: retrieveState };