'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var injector = function injector(Component) {
  var Injector = function Injector(props) {
    return _react2.default.createElement(Component, props);
  };

  var mapStateToProps = function mapStateToProps(state) {
    return {
      featureToggles: state.featureToggles
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps)(Injector);
};

exports.default = injector;