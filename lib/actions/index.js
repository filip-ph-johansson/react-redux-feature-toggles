'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setFeatureState = undefined;

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setFeatureState = exports.setFeatureState = function setFeatureState(featureKey, featureState) {
    return {
        type: _constants2.default.SET_FEATURE_STATE,
        payload: {
            featureKey: featureKey,
            featureState: featureState
        }
    };
};